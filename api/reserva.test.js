// Prueba de la cuenta de reserva (C5, 2026-08-28).
//
// ESTA PRUEBA EJERCITA EL REINTENTO: no se limita a comprobar que el codigo existe. Sustituye el
// `fetch` global por uno de mentira que devuelve las respuestas que cada caso necesita, asi que el
// camino de la reserva corre de verdad. Cero dependencias nuevas: node --test es nativo en Node 22.

import { test, before, afterEach } from "node:test"
import assert from "node:assert/strict"

import handler from "./pregunta.js"

// Doble de `res` con la forma que usa Vercel (res.status(n).json(o)).
function resFalso() {
  const capt = { codigo: null, cuerpo: null }
  capt.status = (n) => { capt.codigo = n; return capt }
  capt.json = (o) => { capt.cuerpo = o; return capt }
  return capt
}

// Respuesta 200 con texto y una fuente de internet de muestra (para que la traza cuente fuentes).
function okConTexto(texto = "respuesta de prueba") {
  return {
    ok: true,
    status: 200,
    json: async () => ({
      candidates: [{
        content: { parts: [{ text: texto }] },
        groundingMetadata: { groundingChunks: [{ web: { uri: "https://ejemplo.com/p", title: "Ejemplo" } }] },
      }],
    }),
  }
}

// Respuesta de error HTTP con el cuerpo de error que devuelve Gemini.
function errorHttp(status, mensaje = "RESOURCE_EXHAUSTED") {
  return {
    ok: false,
    status,
    json: async () => ({ error: { message: mensaje } }),
  }
}

// Fetch falso que devuelve `respuestas` en orden, una por llamada, y registra cada llamada.
function fetchFalso(respuestas) {
  const llamadas = []
  let i = 0
  const f = async (url, opts) => {
    llamadas.push({ url, opts, n: i })
    const r = respuestas[Math.min(i, respuestas.length - 1)]
    i++
    return r
  }
  f.llamadas = llamadas
  return f
}

const CLAVE_P = "clave-principal-de-prueba"
const CLAVE_R = "clave-reserva-de-prueba"

before(() => {
  // Partimos sin la variable de reserva para no contaminar los casos que la quitan.
  delete process.env.GEMINI_API_KEY
})

afterEach(() => {
  // Limpiamos las claves que cada caso puso. El fetch se restaura dentro de cada caso.
  delete process.env.GOOGLE_API_KEY
  delete process.env.GEMINI_API_KEY
})

test("429 en principal y 200 en reserva: dos llamadas, la segunda con la clave de reserva", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.GEMINI_API_KEY = CLAVE_R
  const fake = fetchFalso([errorHttp(429), okConTexto()])
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "a cuanto el oro hoy" }, headers: {} }, res)
    assert.equal(fake.llamadas.length, 2, "debio llamar dos veces (principal + reserva)")
    const segunda = fake.llamadas[1]
    assert.equal(segunda.opts.headers["x-goog-api-key"], CLAVE_R, "la segunda llamada debe usar la clave de reserva")
    assert.ok(res.cuerpo.texto, "la reserva debio producir texto")
    assert.ok(
      res.cuerpo.trazas.some((t) => t.includes("cuenta de reserva") && t.includes("cuenta principal")),
      `la traza debe decir que respondio la reserva: ${JSON.stringify(res.cuerpo.trazas)}`,
    )
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("400 en principal (no reintentable): una sola llamada, sin mencionar la reserva", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.GEMINI_API_KEY = CLAVE_R
  const fake = fetchFalso([errorHttp(400, "invalid argument")])
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "que es un moat" }, headers: {} }, res)
    assert.equal(fake.llamadas.length, 1, "un 400 no se reintenta")
    assert.ok(!res.cuerpo.trazas.some((t) => t.includes("cuenta de reserva")), "no debe mencionar la reserva")
    assert.ok(res.cuerpo.error, "debe venir con error")
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("429 en ambas cuentas: respuesta firmada con error y traza que nombra las dos", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.GEMINI_API_KEY = CLAVE_R
  const fake = fetchFalso([errorHttp(429), errorHttp(429)])
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "cifra de hoy del sp500" }, headers: {} }, res)
    assert.equal(fake.llamadas.length, 2, "debio intentar las dos cuentas")
    assert.equal(res.cuerpo.texto, null, "sin respuesta de modelo")
    assert.ok(res.cuerpo.error, "debe venir firmada con error")
    assert.ok(
      res.cuerpo.trazas.some((t) => t.includes("cuenta principal") && t.includes("reserva")),
      `la traza debe nombrar las dos cuentas: ${JSON.stringify(res.cuerpo.trazas)}`,
    )
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("sin GEMINI_API_KEY y 429 en principal: una sola llamada, sin intento fantasma", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  delete process.env.GEMINI_API_KEY
  const fake = fetchFalso([errorHttp(429)])
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "oro hoy" }, headers: {} }, res)
    assert.equal(fake.llamadas.length, 1, "sin reserva no hay reintento")
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("solo clave principal y 200: una llamada, responde con texto del modelo", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  delete process.env.GEMINI_API_KEY
  const fake = fetchFalso([okConTexto("respuesta normal")])
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "que dice el cerebro de JD.com" }, headers: {} }, res)
    assert.equal(fake.llamadas.length, 1, "con una sola clave no hay reintento")
    assert.equal(res.cuerpo.texto, "respuesta normal")
    assert.ok(!res.cuerpo.trazas.some((t) => t.includes("reserva")), "no debe mencionar la reserva")
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("sin ninguna clave: 503 sin nombrar variable de entorno", async () => {
  delete process.env.GOOGLE_API_KEY
  delete process.env.GEMINI_API_KEY
  const res = resFalso()
  await handler({ method: "POST", body: { pregunta: "hola" }, headers: {} }, res)
  assert.equal(res.codigo, 503)
  assert.equal(res.cuerpo.error, "el chat no esta configurado")
  assert.ok(
    !/GOOGLE_API_KEY|GEMINI_API_KEY/.test(JSON.stringify(res.cuerpo)),
    "el error no debe nombrar variables de entorno",
  )
})
