// pregunta.js — el endpoint publico: una pregunta entra, una respuesta firmada sale.
//
// Contrato (plan fase 4, tarea 2) + C3 (2026-08-28):
//   - Solo POST; cualquier otro metodo: 405.
//   - Cuerpo {"pregunta": "..."}: vacia 400, mas de 2.000 caracteres 413.
//   - Sin GOOGLE_API_KEY en el entorno: 503 {"error":"el chat no esta configurado"} — sin decir
//     que variable falta y sin buscarla en ningun fichero.
//   - Con todo bien: 200 {texto, firma:{agente, especialidad, modelo, motivo}, fuentes, trazas,
//     error}. fuentes ahora lleva DOS grupos: {cerebro:[{ruta, titulo}], internet:[{titulo, dominio, url}]}.
//   - Sin CORS: la funcion y el sitio son el mismo origen. No se registra la pregunta en ningun
//     sitio: no hay donde, y guardar texto de desconocidos sin decirselo es un problema legal.
//
// C3: Elisa puede mirar internet con la busqueda de Google integrada en Gemini (grounding con
// google_search). Cero paquetes npm, cero claves nuevas: la misma GOOGLE_API_KEY. Se pasa del
// endpoint compatible con OpenAI (que NO expone la herramienta de busqueda) al endpoint nativo
// /v1beta/models/<modelo>:generateContent, con "tools":[{"google_search":{}}]. El modelo decide
// cuando buscar: no se fuerza en cada pregunta (cada una cuesta dinero y ahoga el conocimiento
// propio, que es lo que hace util a este chat). Si la busqueda falla (cuota, red, herramienta
// rechazada), la respuesta sale igual con lo que el vault da y con la traza diciendo que no se pudo.

import { busca, corpusVacio } from "./_contexto.js"
import { enruta, armaPrompt } from "./_prompt.js"

// Modelo del chat publico. Verificacion real del 2026-08-28 (ejecucion de C3, endpoint nativo
// /v1beta/models/<m>:generateContent, auth con cabecera x-goog-api-key, cuerpo con "tools":[{
// "google_search":{}}]): se probaron gemini-flash-lite-latest y gemini-flash-latest. AMBOS aceptaron
// la peticion (ninguno devolvio 400 de herramienta no soportada); AMBOS devolvieron 429 porque la
// cuota de grounding de la clave esta agotada, asi que no se pudo confirmar EN VIVO que devuelvan
// fuentes. Un 429 es cuota, no rechazo: la herramienta se acepto. La comprobacion definitiva de que
// el grounding funciona es la del despliegue (C4): preguntar algo que el vault no sepa y ver fuentes
// de internet. Se mantiene gemini-flash-lite-latest (mas barato); si su grounding fallara en el
// despliegue, subir a gemini-flash-latest (alternativa documentada, misma herramienta).
const MODELO = "gemini-flash-lite-latest"
// Endpoint nativo de Gemini. El modelo va SIN prefijo "models/" en la ruta (ese prefijo es solo para
// el endpoint compatible con OpenAI). Auth con cabecera x-goog-api-key: el Bearer da 401 en el nativo
// con esta clave, el x-goog-api-key funciona.
const BASE_GOOGLE = "https://generativelanguage.googleapis.com/v1beta/models"
const MAX_TOKENS = 1200

// ponytail: contador en memoria del modulo. En Vercel cada instancia tiene el suyo, asi que esto
// frena al ruidoso, NO al determinado: con suficientes instancias frias el cupo se multiplica.
// Si algun dia hay trafico de verdad, esto se cambia por estado compartido (Runtime Cache), no por
// mas codigo aqui. El unico techo duro de verdad es el limite de gasto en Google Cloud.
const CUPO_PREGUNTAS = 12
const VENTANA_MS = 5 * 60 * 1000
const LLAMADAS_POR_IP = new Map()

function responde(res, codigo, datos) {
  res.status(codigo).json(datos)
}

function firmaVacia(motivo) {
  return { agente: "elisa", especialidad: "general", modelo: MODELO, motivo }
}

function dominioDeUrl(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, "")
  } catch {
    return ""
  }
}

// C3: de los metadatos de grounding sacamos SOLO las fuentes que Google devolvio (nunca una URL que
// el modelo haya escrito en su texto): titulo + dominio + url. Una fuente inventada con pinta de
// bueno es el fallo mas caro, asi que no se admite ninguna que no venga de groundingMetadata.
function fuentesInternet(metadata) {
  if (!metadata || !Array.isArray(metadata.groundingChunks)) return []
  const vistas = new Set()
  const salida = []
  for (const chunk of metadata.groundingChunks) {
    const web = chunk && chunk.web
    if (!web || !web.uri) continue
    if (vistas.has(web.uri)) continue
    vistas.add(web.uri)
    salida.push({ titulo: web.title || web.uri, dominio: dominioDeUrl(web.uri), url: web.uri })
  }
  return salida
}

export default async function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return responde(res, 405, { error: "metodo no permitido: solo POST" })
    }

    let cuerpo = req.body
    if (typeof cuerpo === "string") {
      try {
        cuerpo = JSON.parse(cuerpo)
      } catch {
        cuerpo = null
      }
    }
    const pregunta =
      cuerpo && typeof cuerpo.pregunta === "string" ? cuerpo.pregunta : ""
    if (!pregunta.trim()) {
      return responde(res, 400, { error: "falta la pregunta" })
    }
    // Un prompt largo es dinero de Carlos y no hay pregunta honesta de 2.000 caracteres.
    if (pregunta.length > 2000) {
      return responde(res, 413, { error: "la pregunta no puede pasar de 2000 caracteres" })
    }

    // Ventana deslizante por IP. Sin cabecera x-forwarded-for se cuenta como IP comun "sin-ip".
    const ahora = Date.now()
    const ip = String(req.headers["x-forwarded-for"] ?? "").split(",")[0].trim() || "sin-ip"
    const recientes = (LLAMADAS_POR_IP.get(ip) ?? []).filter((t) => t > ahora - VENTANA_MS)
    if (recientes.length >= CUPO_PREGUNTAS) {
      return responde(res, 429, { error: "demasiadas preguntas seguidas, prueba en unos minutos" })
    }
    recientes.push(ahora)
    LLAMADAS_POR_IP.set(ip, recientes)

    const clave = process.env.GOOGLE_API_KEY
    if (!clave) {
      return responde(res, 503, { error: "el chat no esta configurado" })
    }

    const paginas = busca(pregunta)
    // fuentes del Cerebro: la ruta ya es una URL abrible (tarea T3 de la fase 4).
    const fuentesCerebro = paginas.map((p) => ({ ruta: p.slug, titulo: p.title }))
    const trazas = []
    if (!paginas.length) {
      // C2: si el corpus llego vacio (corpus.json como {} o fuera del paquete de la funcion), la
      // traza lo dice con palabras; nunca una respuesta muda que parezca normal.
      trazas.push(corpusVacio
        ? "el Cerebro respondio sin sus paginas: el corpus llego vacio"
        : "sin coincidencia literal en el indice para esa pregunta")
    }

    const ficha = enruta(pregunta)
    const firma = {
      agente: ficha.agente,
      especialidad: ficha.especialidad,
      modelo: MODELO,
      motivo: ficha.motivo,
    }

    // C3: la fecha de hoy entra en el prompt; sin ella el modelo no puede juzgar si algo es reciente.
    const hoy = new Date().toISOString().slice(0, 10)
    const prompt = armaPrompt(pregunta, ficha, paginas, trazas, hoy)

    let texto = null
    let error = null
    let fuentesWeb = []
    try {
      const r = await fetch(`${BASE_GOOGLE}/${MODELO}:generateContent`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-goog-api-key": clave,
        },
        body: JSON.stringify({
          contents: [{ role: "user", parts: [{ text: prompt }] }],
          tools: [{ google_search: {} }],
          generationConfig: { maxOutputTokens: MAX_TOKENS, temperature: 0 },
        }),
      })
      if (r.ok) {
        const datos = await r.json()
        const candidato = datos.candidates && datos.candidates[0]
        const partes = candidato && candidato.content && candidato.content.parts
        const contenido = partes ? partes.map((p) => p.text || "").join("") : ""
        if (contenido) {
          texto = contenido
          // C3: las fuentes de internet vienen de los metadatos de grounding, no del texto del modelo.
          fuentesWeb = fuentesInternet(candidato && candidato.groundingMetadata)
        } else {
          error = "el modelo respondio vacio"
        }
      } else {
        // 429 de cuota de grounding, 400 de herramienta no soportada, 403 de la clave...: la
        // respuesta sale igual con lo que el vault dio, y la traza lo dice. El chat no se cae por
        // una pregunta — es el contrato que ya tiene escrito en su cabecera.
        let detalle = ""
        try {
          const errData = await r.json()
          detalle = errData && errData.error && errData.error.message ? errData.error.message : ""
        } catch { /* cuerpo no JSON */ }
        error = detalle
          ? `la busqueda no se pudo hacer (${r.status}: ${detalle})`
          : `la busqueda no se pudo hacer (HTTP ${r.status})`
      }
    } catch {
      error = "la busqueda no se pudo hacer (error de red)"
    }

    // C3: la traza dice si consulto internet. Si busco y hubo fuentes, las cuenta; si no, lo dice.
    if (fuentesWeb.length) {
      trazas.push(`consulto internet: ${fuentesWeb.length} fuentes`)
    } else if (error && error.startsWith("la busqueda no se pudo hacer")) {
      trazas.push("no consulto internet (la busqueda fallo)")
    } else {
      trazas.push("no consulto internet")
    }

    return responde(res, 200, {
      texto,
      firma,
      fuentes: { cerebro: fuentesCerebro, internet: fuentesWeb },
      trazas,
      error,
    })
  } catch {
    // El servidor no se cae por una pregunta: sale firmado igual, con error y texto null.
    return responde(res, 200, {
      texto: null,
      firma: firmaVacia("fallo antes del enrutado"),
      fuentes: { cerebro: [], internet: [] },
      trazas: [],
      error: "error interno al procesar la pregunta",
    })
  }
}
