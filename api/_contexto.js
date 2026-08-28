// _contexto.js — import estatico de corpus.json y puntaje de paginas por la pregunta.
//
// C2 (plan 2026-08-28): el chat ya no lee public/static/contentIndex.json de Quartz, que muere al
// jubilar Quartz (fase 4). Ahora importa corpus.json, que el publicador del Cerebro emite en api/
// con EXACTAMENTE las notas publicadas (clave = ruta sin .md, valor = {titulo, texto}). El import
// estatico ES la razon del cambio: el empaquetador de funciones de Vercel solo incluye los ficheros
// que importa de forma estatica; un readFileSync sobre una ruta calculada en tiempo de ejecucion no
// viaja al paquete, y el 503 previo escondia ese fallo. Node 22.16 (.node-version) admite el
// atributo `with { type: "json" }`.
// El puerto de puntuacion es COPIA de web/chat/contexto.py del vault (palabras de 4+ letras, fuera
// las vacias y repetidas, titulo pesa 3 y cuerpo 1): medido en el vault y funciona; no se toca.
// Interfaz SINCRONA: se paga una vez por proceso, en el arranque en frio, no por peticion.

import corpus from "./corpus.json" with { type: "json" }

const LIMITE_PUNTUACION = 6000 // igual que el vault: puntuar sobre las primeras 6000 letras
const LIMITE_TEXTO = 12000     // igual que el vault: tope de texto que viaja al modelo

const PALABRA = /[a-zA-ZáéíóúñÁÉÍÓÚÑ]{4,}/g

const VACIAS = new Set([
  "para", "como", "cual", "cuales", "esta", "este", "esto", "esos", "esas", "donde",
  "cuando", "porque", "sobre", "entre", "hasta", "desde", "tiene", "tengo", "hacer",
  "puede", "debo", "quiero", "mucho", "mejor", "algun", "alguna", "seria", "estar",
])

// C2: el corpus llega vacio si corpus.json se quedo como {} o no se empaco en la funcion. La
// respuesta entonces sale sin paginas y la traza lo dice (nunca una respuesta muda que parezca
// normal). pregunta.js lee esta bandera para elegir el mensaje de traza.
export const corpusVacio = Object.keys(corpus).length === 0

function terminos(pregunta) {
  const salida = []
  for (const p of String(pregunta || "").toLowerCase().match(PALABRA) || []) {
    if (VACIAS.has(p) || salida.includes(p)) continue
    salida.push(p)
  }
  return salida
}

export function busca(pregunta, tope = 6) {
  const indice = corpus
  const terminosPregunta = terminos(pregunta)
  if (!terminosPregunta.length) return []

  const puntuadas = []
  for (const [slug, entrada] of Object.entries(indice)) {
    const contenido = entrada.texto || ""
    if (!contenido) continue // paginas sin texto: no aportan conocimiento
    const titulo = String(entrada.titulo || "").toLowerCase()
    const cuerpo = contenido.slice(0, LIMITE_PUNTUACION).toLowerCase()
    let n = 0
    for (const t of terminosPregunta) {
      if (titulo.includes(t)) n += 3 // el titulo pesa mas que el cuerpo
      if (cuerpo.includes(t)) n += 1
    }
    if (n) puntuadas.push([slug, n])
  }

  puntuadas.sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))

  // Lo que busca() DEVUELVE no cambia: {slug, title, texto}, que es lo que _prompt.js ya consume.
  // Solo cambia de donde lo lee (entrada.titulo / entrada.texto en vez de title / content).
  return puntuadas.slice(0, tope).map(([slug]) => ({
    slug,
    title: indice[slug].titulo || "",
    texto: String(indice[slug].texto || "").slice(0, LIMITE_TEXTO),
  }))
}
