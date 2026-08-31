// test.ts — deno test supabase/functions/precios/test.ts
// Todo mockeado: ni red, ni Supabase. El handler recibe sus dependencias (deps).
import { assertEquals, assert } from "jsr:@std/assert"
import { handler, parseaStooq, TTL_MS, type PreciosDeps, type FilaCache } from "./index.ts"

const CSV_OK = "Symbol,Date,Time,Open,High,Low,Close,Volume\nAAPL.US,2026-08-28,22:00:00,230,233,229,232.5,123456\n"
const CSV_ND = "Symbol,Date,Time,Open,High,Low,Close,Volume\nXXXX.US,N/D,N/D,N/D,N/D,N/D,N/D,N/D\n"

function depsBase(over: Partial<PreciosDeps> = {}): PreciosDeps {
  return {
    ahora: () => Date.parse("2026-08-30T10:00:00Z"),
    leerCache: () => Promise.resolve([]),
    guardarCache: () => Promise.resolve(),
    pedirStooq: () => Promise.resolve(CSV_OK),
    ...over,
  }
}

function post(cuerpo: unknown): Request {
  return new Request("http://x", { method: "POST", body: JSON.stringify(cuerpo) })
}

Deno.test("parseaStooq: csv bueno da precio y fecha", () => {
  assertEquals(parseaStooq(CSV_OK), { precio: 232.5, fecha: "2026-08-28" })
})

Deno.test("parseaStooq: N/D y csv vacio dan null", () => {
  assertEquals(parseaStooq(CSV_ND), null)
  assertEquals(parseaStooq(""), null)
})

Deno.test("handler: GET es 405", async () => {
  const r = await handler(new Request("http://x", { method: "GET" }), depsBase())
  assertEquals(r.status, 405)
})

Deno.test("handler: cuerpo sin simbolos validos es 400", async () => {
  assertEquals((await handler(post({}), depsBase())).status, 400)
  assertEquals((await handler(post({ simbolos: [] }), depsBase())).status, 400)
  assertEquals((await handler(post({ simbolos: [";<mal>" ] }), depsBase())).status, 400)
})

Deno.test("handler: cache fresca no llama a Stooq", async () => {
  let llamadas = 0
  const fila: FilaCache = { simbolo: "aapl.us", precio: 100, fecha: "2026-08-29", actualizado: new Date(Date.parse("2026-08-30T09:00:00Z")).toISOString() }
  const r = await handler(post({ simbolos: ["AAPL.US"] }), depsBase({
    leerCache: () => Promise.resolve([fila]),
    pedirStooq: () => { llamadas++; return Promise.resolve(CSV_OK) },
  }))
  assertEquals(llamadas, 0)
  const c = await r.json()
  assertEquals(c.precios["aapl.us"], { precio: 100, fecha: "2026-08-29" })
})

Deno.test("handler: cache caducada pide a Stooq y guarda", async () => {
  const guardadas: FilaCache[] = []
  const vieja: FilaCache = { simbolo: "aapl.us", precio: 100, fecha: "2026-08-20", actualizado: new Date(Date.parse("2026-08-28T10:00:00Z")).toISOString() } // > TTL_MS
  const r = await handler(post({ simbolos: ["aapl.us"] }), depsBase({
    leerCache: () => Promise.resolve([vieja]),
    guardarCache: (f) => { guardadas.push(...f); return Promise.resolve() },
  }))
  const c = await r.json()
  assertEquals(c.precios["aapl.us"], { precio: 232.5, fecha: "2026-08-28" })
  assertEquals(guardadas.length, 1)
  assertEquals(guardadas[0].simbolo, "aapl.us")
})

Deno.test("handler: Stooq sin datos y sin cache da error por simbolo", async () => {
  const r = await handler(post({ simbolos: ["xxxx.us"] }), depsBase({ pedirStooq: () => Promise.resolve(CSV_ND) }))
  const c = await r.json()
  assertEquals(c.precios["xxxx.us"], { error: "sin datos" })
})

Deno.test("handler: Stooq caido con cache caducada la sirve marcada", async () => {
  const vieja: FilaCache = { simbolo: "aapl.us", precio: 100, fecha: "2026-08-20", actualizado: new Date(Date.parse("2026-08-25T10:00:00Z")).toISOString() }
  const r = await handler(post({ simbolos: ["aapl.us"] }), depsBase({
    leerCache: () => Promise.resolve([vieja]),
    pedirStooq: () => Promise.reject(new Error("red caida")),
  }))
  const c = await r.json()
  assertEquals(c.precios["aapl.us"], { precio: 100, fecha: "2026-08-20", caducado: true })
})
