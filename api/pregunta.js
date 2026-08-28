// pregunta.js — el endpoint publico: una pregunta entra, una respuesta firmada sale.
//
// Contrato (plan fase 4, tarea 2):
//   - Solo POST; cualquier otro metodo: 405.
//   - Cuerpo {"pregunta": "..."}: vacia 400, mas de 2.000 caracteres 413.
//   - Sin GOOGLE_API_KEY en el entorno: 503 {"error":"el chat no esta configurado"} — sin decir
//     que variable falta y sin buscarla en ningun fichero.
//   - Con todo bien: 200 {texto, firma:{agente, especialidad, modelo, motivo}, fuentes, trazas,
//     error}. Si el modelo falla, la respuesta sale con error y texto null — firmada igual:
//     el servidor no se cae por una pregunta.
//   - Sin CORS: la funcion y el sitio son el mismo origen. No se registra la pregunta en ningun
//     sitio: no hay donde, y guardar texto de desconocidos sin decirselo es un problema legal.

import { busca, corpusVacio } from "./_contexto.js"
import { enruta, armaPrompt } from "./_prompt.js"

// Id curado por medicion real en el vault el 2026-08-20 (web/chat/proveedor.py). No se inventa
// ningun otro; si muere, el error llega firmado a la UI y la subida es volver a medir.
const MODELO = "models/gemini-flash-lite-latest"
const BASE_GOOGLE = "https://generativelanguage.googleapis.com/v1beta/openai"
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
    const fuentes = paginas.map((p) => p.slug)
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

    const prompt = armaPrompt(pregunta, ficha, paginas, trazas)

    let texto = null
    let error = null
    try {
      const r = await fetch(`${BASE_GOOGLE}/chat/completions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${clave}`,
        },
        body: JSON.stringify({
          model: MODELO,
          messages: [{ role: "user", content: prompt }],
          max_tokens: MAX_TOKENS,
          temperature: 0,
          stream: false,
        }),
      })
      const datos = await r.json().catch(() => null)
      const mensaje = datos && datos.choices && datos.choices[0] && datos.choices[0].message
      const contenido = mensaje
        ? mensaje.content || mensaje.reasoning_content || ""
        : ""
      if (r.ok && contenido) {
        texto = contenido
      } else if (!r.ok) {
        error = `el modelo no respondio (HTTP ${r.status})`
      } else {
        error = "el modelo respondio vacio"
      }
    } catch {
      error = "el modelo no respondio"
    }

    return responde(res, 200, { texto, firma, fuentes, trazas, error })
  } catch {
    // El servidor no se cae por una pregunta: sale firmado igual, con error y texto null.
    return responde(res, 200, {
      texto: null,
      firma: firmaVacia("fallo antes del enrutado"),
      fuentes: [],
      trazas: [],
      error: "error interno al procesar la pregunta",
    })
  }
}
