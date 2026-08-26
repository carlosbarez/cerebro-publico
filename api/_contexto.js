// _contexto.js — carga contentIndex.json una vez por proceso y puntua paginas por la pregunta.
//
// Puerto directo de _busca_literal y _terminos de web/chat/contexto.py del vault (leido 2026-08-26):
// palabras de 4+ letras, fuera las vacias y repetidas, el titulo pesa 3 y el cuerpo 1. Ese reparto
// esta medido en el vault y funciona; cambiarlo es rehacer trabajo hecho.
// El corpus aqui NO es el vault: es public/static/contentIndex.json, el indice que Quartz emite en
// cada construccion desde content/, que ya paso filtro y puerta. Ahi no hay ni una pagina de
// perfil/ y las lineas con dinero ya vienen tachadas: la defensa no es el prompt, es que no hay
// nada que extraer.
// Sin dependencias: Node trae fs de serie (restriccion global del plan: cero paquetes npm nuevos).
// Interfaz SINCrona: la pide el propio plan (su medicion llama busca() y mapea sin await) y el
// coste se paga una vez por proceso, en el arranque en frio, no por peticion.

import { readFileSync } from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const DIR_API = path.dirname(fileURLToPath(import.meta.url))
const RUTA_INDICE = path.join(DIR_API, "..", "public", "static", "contentIndex.json")

const LIMITE_PUNTUACION = 6000 // igual que el vault: puntuar sobre las primeras 6000 letras
const LIMITE_TEXTO = 12000     // igual que _lee del vault: tope de texto que viaja al modelo

const PALABRA = /[a-zA-ZáéíóúñÁÉÍÓÚÑ]{4,}/g

const VACIAS = new Set([
  "para", "como", "cual", "cuales", "esta", "este", "esto", "esos", "esas", "donde",
  "cuando", "porque", "sobre", "entre", "hasta", "desde", "tiene", "tengo", "hacer",
  "puede", "debo", "quiero", "mucho", "mejor", "algun", "alguna", "seria", "estar",
])

let indiceCacheado = null // un parse por proceso; en serverless el proceso se reutiliza caliente

export function cargaIndice() {
  if (!indiceCacheado) {
    indiceCacheado = JSON.parse(readFileSync(RUTA_INDICE, "utf8"))
  }
  return indiceCacheado
}

function terminos(pregunta) {
  const salida = []
  for (const p of String(pregunta || "").toLowerCase().match(PALABRA) || []) {
    if (VACIAS.has(p) || salida.includes(p)) continue
    salida.push(p)
  }
  return salida
}

export function busca(pregunta, tope = 6) {
  const indice = cargaIndice()
  const terminosPregunta = terminos(pregunta)
  if (!terminosPregunta.length) return []

  const puntuadas = []
  for (const [slug, entrada] of Object.entries(indice)) {
    const contenido = entrada.content || ""
    if (!contenido) continue // paginas de tag y de carpeta: sin conocimiento (tags/perfil entre ellas)
    const titulo = String(entrada.title || "").toLowerCase()
    const cuerpo = contenido.slice(0, LIMITE_PUNTUACION).toLowerCase()
    let n = 0
    for (const t of terminosPregunta) {
      if (titulo.includes(t)) n += 3 // el titulo pesa mas que el cuerpo
      if (cuerpo.includes(t)) n += 1
    }
    if (n) puntuadas.push([slug, n])
  }

  puntuadas.sort((a, b) => b[1] - a[1] || (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0))

  return puntuadas.slice(0, tope).map(([slug]) => ({
    slug,
    title: indice[slug].title || "",
    texto: String(indice[slug].content || "").slice(0, LIMITE_TEXTO),
  }))
}
