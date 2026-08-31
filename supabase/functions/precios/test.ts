// test.ts — deno test supabase/functions/precios/test.ts
// Todo mockeado: ni red, ni Supabase. El handler recibe sus dependencias (deps).
import { assertEquals, assert } from "jsr:@std/assert"
import {
  handler,
  parseaYahoo,
  simboloYahoo,
  TTL_MS,
  type PreciosDeps,
  type FilaCache,
} from "./index.ts"

// regularMarketTime = 2026-08-28T15:00:00Z
const JSON_OK = JSON.stringify({
  chart: { result: [{ meta: { regularMarketPrice: 232.5, regularMarketTime: 1787929200 } }] },
})
const JSON_ND = JSON.stringify({ chart: { result: null, error: { code: "Not Found" } } })

function depsBase(over: Partial<PreciosDeps> = {}): PreciosDeps {
  return {
    ahora: () => Date.parse("2026-08-30T10:00:00Z"),
    leerCache: () => Promise.resolve([]),
    guardarCache: () => Promise.resolve(),
    pedirYahoo: () => Promise.resolve(JSON_OK),
    ...over,
  }
}

function post(cuerpo: unknown): Request {
  return new Request("http://x", { method: "POST", body: JSON.stringify(cuerpo) })
}

Deno.test("simboloYahoo: .us se quita, otros sufijos en mayusculas", () => {
  assertEquals(simboloYahoo("aapl.us"), "AAPL")
  assertEquals(simboloYahoo("san.mc"), "SAN.MC")
  assertEquals(simboloYahoo("mc.pa"), "MC.PA")
})

Deno.test("parseaYahoo: json bueno da precio y fecha", () => {
  assertEquals(parseaYahoo(JSON_OK), { precio: 232.5, fecha: "2026-08-28" })
})

Deno.test("parseaYahoo: sin result y basura dan null", () => {
  assertEquals(parseaYahoo(JSON_ND), null)
  assertEquals(parseaYahoo(""), null)
  assertEquals(parseaYahoo("<html>muro anti-bot</html>"), null)
})

Deno.test("handler: GET es 405", async () => {
  const r = await handler(new Request("http://x", { method: "GET" }), depsBase())
  assertEquals(r.status, 405)
})

Deno.test("handler: cuerpo sin simbolos validos es 400", async () => {
  assertEquals((await handler(post({}), depsBase())).status, 400)
  assertEquals((await handler(post({ simbolos: [] }), depsBase())).status, 400)
  assertEquals((await handler(post({ simbolos: [";<mal>"] }), depsBase())).status, 400)
})

Deno.test("handler: cache fresca no llama a Yahoo", async () => {
  let llamadas = 0
  const fila: FilaCache = {
    simbolo: "aapl.us",
    precio: 100,
    fecha: "2026-08-29",
    actualizado: new Date(Date.parse("2026-08-30T09:00:00Z")).toISOString(),
  }
  const r = await handler(
    post({ simbolos: ["AAPL.US"] }),
    depsBase({
      leerCache: () => Promise.resolve([fila]),
      pedirYahoo: () => {
        llamadas++
        return Promise.resolve(JSON_OK)
      },
    }),
  )
  assertEquals(llamadas, 0)
  const c = await r.json()
  assertEquals(c.precios["aapl.us"], { precio: 100, fecha: "2026-08-29" })
})

Deno.test("handler: cache caducada pide a Yahoo y guarda", async () => {
  const guardadas: FilaCache[] = []
  const vieja: FilaCache = {
    simbolo: "aapl.us",
    precio: 100,
    fecha: "2026-08-20",
    actualizado: new Date(Date.parse("2026-08-28T10:00:00Z")).toISOString(),
  } // > TTL_MS
  const r = await handler(
    post({ simbolos: ["aapl.us"] }),
    depsBase({
      leerCache: () => Promise.resolve([vieja]),
      guardarCache: (f) => {
        guardadas.push(...f)
        return Promise.resolve()
      },
    }),
  )
  const c = await r.json()
  assertEquals(c.precios["aapl.us"], { precio: 232.5, fecha: "2026-08-28" })
  assertEquals(guardadas.length, 1)
  assertEquals(guardadas[0].simbolo, "aapl.us")
})

Deno.test("handler: Yahoo sin datos y sin cache da error por simbolo", async () => {
  const r = await handler(
    post({ simbolos: ["xxxx.us"] }),
    depsBase({ pedirYahoo: () => Promise.resolve(JSON_ND) }),
  )
  const c = await r.json()
  assertEquals(c.precios["xxxx.us"], { error: "sin datos" })
})

Deno.test("handler: Yahoo caido con cache caducada la sirve marcada", async () => {
  const vieja: FilaCache = {
    simbolo: "aapl.us",
    precio: 100,
    fecha: "2026-08-20",
    actualizado: new Date(Date.parse("2026-08-25T10:00:00Z")).toISOString(),
  }
  const r = await handler(
    post({ simbolos: ["aapl.us"] }),
    depsBase({
      leerCache: () => Promise.resolve([vieja]),
      pedirYahoo: () => Promise.reject(new Error("red caida")),
    }),
  )
  const c = await r.json()
  assertEquals(c.precios["aapl.us"], { precio: 100, fecha: "2026-08-20", caducado: true })
})
