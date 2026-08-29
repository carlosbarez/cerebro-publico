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
  delete process.env.TAVILY_API_KEY
  delete process.env.TAVILY2_API_KEY
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


// --- B4 (plan 2026-08-29): la busqueda de Tavily y el flujo de function calling. El doble de
// fetch distingue por URL: generativelanguage.googleapis.com es el modelo, api.tavily.com es la
// busqueda. Cero dependencias nuevas.

// Respuesta 200 del modelo con texto (sin functionCall).
function okModeloTexto(texto = "respuesta del modelo") {
  return { ok: true, status: 200, json: async () => ({ candidates: [{ content: { parts: [{ text: texto }] } }] }) }
}

// Respuesta 200 del modelo con un functionCall de busca_en_internet. Incluye id y thoughtSignature
// (los datos que Gemini devuelve y que el backend debe reenviar en la llamada 2).
function okModeloFunctionCall(consulta = "oro hoy", id = "call_1", thoughtSignature = "TS_DE_PRUEBA") {
  return {
    ok: true,
    status: 200,
    json: async () => ({
      candidates: [{
        content: { parts: [{ functionCall: { name: "busca_en_internet", args: { consulta }, id }, thoughtSignature }] },
      }],
    }),
  }
}

// Respuesta 200 de Tavily con una lista de resultados.
function okTavily(resultados) {
  return { ok: true, status: 200, json: async () => ({ results: resultados }) }
}

// Respuesta de error HTTP de Tavily.
function errorTavily(status, mensaje = "quota excedida") {
  return { ok: false, status, json: async () => ({ error: mensaje }) }
}

// Fetch falso que encola respuestas SEPARADAS por tipo de URL (modelo vs tavily) y registra cada
// llamada con su tipo y el cuerpo ya parseado para poder inspeccionarlo.
function fetchPorUrl({ modelo = [], tavily = [] }) {
  const llamadas = []
  const cola = { modelo: modelo.slice(), tavily: tavily.slice() }
  const f = async (url, opts) => {
    const esTavily = url.includes("api.tavily.com")
    const tipo = esTavily ? "tavily" : "modelo"
    llamadas.push({ url, opts, tipo, cuerpo: opts && opts.body ? JSON.parse(opts.body) : null })
    const arr = cola[tipo]
    return arr.length ? arr.shift() : okModeloTexto()
  }
  f.llamadas = llamadas
  return f
}

test("B4-1 el modelo pide buscar: dos llamadas al modelo, una a Tavily, fuentes de results[].url", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.TAVILY_API_KEY = "tvly-P"
  process.env.TAVILY2_API_KEY = "tvly-R"
  const fake = fetchPorUrl({
    modelo: [ okModeloFunctionCall("precio del oro hoy", "call_1", "TS1"), okModeloTexto("El oro esta a 2310 USD.") ],
    tavily: [ okTavily([{ title: "Oro hoy", url: "https://kitco.com/oro", content: "El oro cotiza a 2310." }]) ],
  })
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "que dice el cerebro del oro" }, headers: { "x-forwarded-for": "b4-1" } }, res)
    const modelo = fake.llamadas.filter((l) => l.tipo === "modelo")
    const tavily = fake.llamadas.filter((l) => l.tipo === "tavily")
    assert.equal(modelo.length, 2, "dos llamadas al modelo")
    assert.equal(tavily.length, 1, "una a Tavily")
    const c2 = modelo[1].cuerpo
    assert.ok(JSON.stringify(c2.contents).includes("functionResponse"), "la segunda llamada lleva el functionResponse")
    assert.ok(JSON.stringify(c2.contents).includes("TS1"), "la segunda llamada reenvia el thoughtSignature")
    assert.ok(!c2.tools, "la segunda llamada no ofrece la herramienta")
    assert.deepEqual(res.cuerpo.fuentes.internet, [{ titulo: "Oro hoy", dominio: "kitco.com", url: "https://kitco.com/oro" }])
    assert.ok(res.cuerpo.trazas.some((t) => /^consulto internet: 1 /.test(t)), `traza de fuentes: ${JSON.stringify(res.cuerpo.trazas)}`)
    assert.ok(res.cuerpo.texto, "responde con texto")
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("B4-2 el modelo NO pide buscar: una llamada al modelo, cero a Tavily", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.TAVILY_API_KEY = "tvly-P"
  const fake = fetchPorUrl({ modelo: [ okModeloTexto("El Cerebro ya lo explica.") ], tavily: [] })
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "que es un moat" }, headers: { "x-forwarded-for": "b4-2" } }, res)
    assert.equal(fake.llamadas.filter((l) => l.tipo === "modelo").length, 1, "una llamada al modelo")
    assert.equal(fake.llamadas.filter((l) => l.tipo === "tavily").length, 0, "cero a Tavily")
    assert.ok(res.cuerpo.trazas.includes("no consulto internet"), `traza: ${JSON.stringify(res.cuerpo.trazas)}`)
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("B4-3 Tavily 432 en principal y 200 en reserva: dos llamadas a Tavily, segunda con la clave de reserva", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.TAVILY_API_KEY = "tvly-P"
  process.env.TAVILY2_API_KEY = "tvly-R"
  const fake = fetchPorUrl({
    modelo: [ okModeloFunctionCall("oro hoy", "c1", "TS1"), okModeloTexto("respondo con el Cerebro y la red") ],
    tavily: [ errorTavily(432, "Monthly credit limit reached"), okTavily([{ title: "Oro", url: "https://kitco.com/oro", content: "x" }]) ],
  })
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "que dice el cerebro del oro" }, headers: { "x-forwarded-for": "b4-3" } }, res)
    const tv = fake.llamadas.filter((l) => l.tipo === "tavily")
    assert.equal(tv.length, 2, "dos llamadas a Tavily")
    assert.equal(tv[1].opts.headers["Authorization"], "Bearer tvly-R", "la segunda usa la clave de reserva")
    assert.ok(res.cuerpo.texto, "la respuesta sale igual")
    assert.ok(
      res.cuerpo.trazas.some((t) => t.includes("cuenta principal") && t.includes("busco la de reserva")),
      `traza: ${JSON.stringify(res.cuerpo.trazas)}`,
    )
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("B4-4 Tavily 432 en ambas cuentas: responde con el Cerebro y traza de cuota agotada", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.TAVILY_API_KEY = "tvly-P"
  process.env.TAVILY2_API_KEY = "tvly-R"
  const fake = fetchPorUrl({
    modelo: [ okModeloFunctionCall("oro hoy", "c1", "TS1"), okModeloTexto("respondo solo con el Cerebro") ],
    tavily: [ errorTavily(432), errorTavily(432) ],
  })
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "que dice el cerebro del oro" }, headers: { "x-forwarded-for": "b4-4" } }, res)
    const tv = fake.llamadas.filter((l) => l.tipo === "tavily")
    assert.equal(tv.length, 2, "dos llamadas a Tavily")
    assert.ok(res.cuerpo.texto, "responde con el Cerebro")
    assert.deepEqual(res.cuerpo.fuentes.internet, [], "sin fuentes de internet")
    assert.ok(res.cuerpo.trazas.some((t) => t.includes("cuota agotada")), `traza: ${JSON.stringify(res.cuerpo.trazas)}`)
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("B4-5 Tavily 400 (no reintentable): una sola llamada a Tavily", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.TAVILY_API_KEY = "tvly-P"
  const fake = fetchPorUrl({
    modelo: [ okModeloFunctionCall("oro hoy", "c1", "TS1"), okModeloTexto("respondo solo con el Cerebro") ],
    tavily: [ errorTavily(400, "invalid request") ],
  })
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "que dice el cerebro del oro" }, headers: { "x-forwarded-for": "b4-5" } }, res)
    const tv = fake.llamadas.filter((l) => l.tipo === "tavily")
    assert.equal(tv.length, 1, "un 400 no se reintenta")
    assert.ok(res.cuerpo.texto, "responde con el Cerebro")
    assert.ok(res.cuerpo.trazas.some((t) => t.includes("no se pudo buscar en internet")), `traza: ${JSON.stringify(res.cuerpo.trazas)}`)
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("B4-6 sin claves de Tavily: llamada al modelo sin tools, cero a Tavily, sin 503", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  delete process.env.TAVILY_API_KEY
  delete process.env.TAVILY2_API_KEY
  const fake = fetchPorUrl({ modelo: [ okModeloTexto("respuesta sin busqueda") ], tavily: [] })
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "que es value investing" }, headers: { "x-forwarded-for": "b4-6" } }, res)
    assert.equal(res.codigo, 200, "no debe ser 503")
    const m = fake.llamadas.filter((l) => l.tipo === "modelo")
    assert.equal(m.length, 1, "una llamada al modelo")
    assert.ok(!m[0].cuerpo.tools, "sin tools en el cuerpo")
    assert.equal(fake.llamadas.filter((l) => l.tipo === "tavily").length, 0, "cero a Tavily")
    assert.ok(
      res.cuerpo.trazas.includes("no consulto internet (la busqueda no esta configurada)"),
      `traza: ${JSON.stringify(res.cuerpo.trazas)}`,
    )
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("B4-7 las fuentes salen de results[].url, no del texto del modelo", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.TAVILY_API_KEY = "tvly-P"
  const fake = fetchPorUrl({
    modelo: [ okModeloFunctionCall("oro hoy", "c1", "TS1"), okModeloTexto("Mira https://noticias-falsas.example/oro-inventado para mas") ],
    tavily: [ okTavily([{ title: "Oro", url: "https://kitco.com/oro", content: "x" }]) ],
  })
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "que dice el cerebro del oro" }, headers: { "x-forwarded-for": "b4-7" } }, res)
    assert.deepEqual(res.cuerpo.fuentes.internet, [{ titulo: "Oro", dominio: "kitco.com", url: "https://kitco.com/oro" }])
    assert.ok(!JSON.stringify(res.cuerpo.fuentes.internet).includes("noticias-falsas"), "la URL inventada del modelo no aparece")
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

// B6 (2026-08-29): el disparo por codigo. La pregunta con marca temporal busca ANTES del modelo,
// asi que hay UNA llamada al modelo (sin tools) y UNA a Tavily, y los resultados viajan en el
// prompt marcados como texto de terceros.
test("B6-1 pregunta con marca temporal: busca antes, una llamada al modelo sin tools", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.TAVILY_API_KEY = "tvly-P"
  const fake = fetchPorUrl({
    modelo: [ okModeloTexto("El oro cerro a 2310 USD segun kitco.") ],
    tavily: [ okTavily([{ title: "Oro ayer", url: "https://kitco.com/oro", content: "Cerro a 2310." }]) ],
  })
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "a cuanto cerro el oro ayer" }, headers: { "x-forwarded-for": "b6-1" } }, res)
    const modelo = fake.llamadas.filter((l) => l.tipo === "modelo")
    assert.equal(modelo.length, 1, "una sola llamada al modelo")
    assert.equal(fake.llamadas.filter((l) => l.tipo === "tavily").length, 1, "una a Tavily")
    assert.ok(!modelo[0].cuerpo.tools, "no se ofrece la herramienta: ya se busco")
    const enviado = JSON.stringify(modelo[0].cuerpo.contents)
    assert.ok(enviado.includes("kitco.com/oro"), "los resultados viajan en el prompt")
    assert.ok(enviado.includes("TEXTO DE TERCEROS"), "van marcados como texto de terceros")
    assert.deepEqual(res.cuerpo.fuentes.internet, [{ titulo: "Oro ayer", dominio: "kitco.com", url: "https://kitco.com/oro" }])
    assert.ok(res.cuerpo.trazas.includes("consulto internet: 1 fuentes"), `traza: ${JSON.stringify(res.cuerpo.trazas)}`)
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("B6-2 marca temporal y Tavily agotada: responde igual y la traza dice que no pudo buscar", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.TAVILY_API_KEY = "tvly-P"
  process.env.TAVILY2_API_KEY = "tvly-R"
  const fake = fetchPorUrl({
    modelo: [ okModeloTexto("Sin red, respondo con el Cerebro.") ],
    tavily: [ errorTavily(432), errorTavily(432) ],
  })
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "precio del oro hoy" }, headers: { "x-forwarded-for": "b6-2" } }, res)
    assert.equal(fake.llamadas.filter((l) => l.tipo === "tavily").length, 2, "principal y reserva")
    assert.equal(fake.llamadas.filter((l) => l.tipo === "modelo").length, 1, "una llamada al modelo")
    assert.ok(res.cuerpo.texto, "la respuesta sale igual")
    assert.deepEqual(res.cuerpo.fuentes.internet, [])
    assert.ok(res.cuerpo.trazas.some((t) => t.includes("cuota agotada")), `traza: ${JSON.stringify(res.cuerpo.trazas)}`)
  } finally {
    globalThis.fetch = fetchOriginal
  }
})

test("B6-3 pregunta sin marca temporal: no se busca antes, la herramienta sigue ofreciendose", async () => {
  process.env.GOOGLE_API_KEY = CLAVE_P
  process.env.TAVILY_API_KEY = "tvly-P"
  const fake = fetchPorUrl({ modelo: [ okModeloTexto("Un moat es una ventaja duradera.") ], tavily: [] })
  const fetchOriginal = globalThis.fetch
  globalThis.fetch = fake
  try {
    const res = resFalso()
    await handler({ method: "POST", body: { pregunta: "que es un moat" }, headers: { "x-forwarded-for": "b6-3" } }, res)
    assert.equal(fake.llamadas.filter((l) => l.tipo === "tavily").length, 0, "cero a Tavily")
    assert.ok(fake.llamadas.filter((l) => l.tipo === "modelo")[0].cuerpo.tools, "se ofrece la herramienta")
  } finally {
    globalThis.fetch = fetchOriginal
  }
})
