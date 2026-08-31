// index.ts — ultimo precio via Yahoo Finance (chart API, sin key) con cache de 24h en
// precios_cache (plan 2026-08-30; fuente cambiada de Stooq a Yahoo el 2026-08-31 porque
// Stooq puso sus endpoints CSV tras un muro anti-bot).
// Auth: el JWT de usuario se verifica en el bloque de cableado (verify_jwt del gateway
// no frena peticiones anonimas con publishable key). La cache se lee/escribe con la
// service role (env automatica).
import { createClient } from "jsr:@supabase/supabase-js@2"

export const TTL_MS = 24 * 60 * 60 * 1000
const MAX_SIMBOLOS = 50
const SIMBOLO_RE = /^[a-z0-9.\-^=]{1,15}$/

export interface FilaCache {
  simbolo: string
  precio: number
  fecha: string
  actualizado: string
}

export interface PreciosDeps {
  ahora(): number
  leerCache(simbolos: string[]): Promise<FilaCache[]>
  guardarCache(filas: FilaCache[]): Promise<void>
  pedirYahoo(simbolo: string): Promise<string> // JSON crudo del chart API
}

// Los simbolos canonicos siguen el formato Stooq (aapl.us, san.mc, mc.pa). Yahoo:
// sufijo .us se quita, el resto se pasa en mayusculas (san.mc -> SAN.MC).
export function simboloYahoo(s: string): string {
  const up = s.toUpperCase()
  return up.endsWith(".US") ? up.slice(0, -3) : up
}

// Yahoo chart API: chart.result[0].meta.{regularMarketPrice, regularMarketTime(epoch s)}.
// Simbolo desconocido: chart.result = null. null = sin datos.
export function parseaYahoo(texto: string): { precio: number; fecha: string } | null {
  try {
    const meta = JSON.parse(texto)?.chart?.result?.[0]?.meta
    const precio = Number(meta?.regularMarketPrice)
    const t = Number(meta?.regularMarketTime)
    if (!Number.isFinite(precio) || precio <= 0 || !Number.isFinite(t) || t <= 0) return null
    return { precio, fecha: new Date(t * 1000).toISOString().slice(0, 10) }
  } catch {
    return null
  }
}

function json(cuerpo: unknown, status = 200): Response {
  return new Response(JSON.stringify(cuerpo), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

export async function handler(req: Request, deps: PreciosDeps): Promise<Response> {
  if (req.method !== "POST") return json({ error: "solo POST" }, 405)

  let simbolos: unknown
  try {
    simbolos = (await req.json()).simbolos
  } catch {
    return json({ error: "json invalido" }, 400)
  }
  if (!Array.isArray(simbolos) || simbolos.length === 0 || simbolos.length > MAX_SIMBOLOS) {
    return json({ error: `simbolos: array de 1 a ${MAX_SIMBOLOS}` }, 400)
  }
  const validos = [
    ...new Set(
      simbolos.map((s) => String(s).toLowerCase().trim()).filter((s) => SIMBOLO_RE.test(s)),
    ),
  ]
  if (validos.length === 0) return json({ error: "ningun simbolo valido" }, 400)

  const cache = await deps.leerCache(validos)
  const porSimbolo = new Map(cache.map((f) => [f.simbolo, f]))
  const fresca = (f: FilaCache) => deps.ahora() - Date.parse(f.actualizado) < TTL_MS

  const precios: Record<string, unknown> = {}
  const pendientes: string[] = []
  for (const s of validos) {
    const f = porSimbolo.get(s)
    if (f && fresca(f)) precios[s] = { precio: f.precio, fecha: f.fecha }
    else pendientes.push(s)
  }

  // ponytail: fetch en serie; con tope de 50 simbolos basta. Si importa: Promise.all con limite.
  const nuevas: FilaCache[] = []
  for (const s of pendientes) {
    try {
      const p = parseaYahoo(await deps.pedirYahoo(s))
      if (p) {
        precios[s] = p
        nuevas.push({
          simbolo: s,
          precio: p.precio,
          fecha: p.fecha,
          actualizado: new Date(deps.ahora()).toISOString(),
        })
      } else {
        throw new Error("sin datos")
      }
    } catch {
      const vieja = porSimbolo.get(s)
      precios[s] = vieja
        ? { precio: vieja.precio, fecha: vieja.fecha, caducado: true }
        : { error: "sin datos" }
    }
  }
  if (nuevas.length > 0) await deps.guardarCache(nuevas)

  return json({ precios })
}

// Cableado real (solo en el runtime de Supabase; el test importa handler con deps falsas y
// pasa DENO_TESTING=1, ver Step 4, para que este bloque no arranque un servidor en el test).
// Auth: verify_jwt=true NO basta con las publishable keys nuevas (el gateway deja pasar
// peticiones con apikey y sin Authorization), asi que el JWT se verifica aqui, igual que
// en borrar-cuenta.
if ((Deno.env.get("DENO_TESTING") ?? "") !== "1") {
  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  )
  Deno.serve(async (req) => {
    const token = (req.headers.get("Authorization") ?? "").replace("Bearer ", "")
    if (!token) return json({ error: "no autorizado" }, 401)
    const {
      data: { user },
      error,
    } = await admin.auth.getUser(token)
    if (error || !user) return json({ error: "no autorizado" }, 401)

    return handler(req, {
      ahora: () => Date.now(),
      leerCache: async (ss) =>
        ((await admin.from("precios_cache").select("*").in("simbolo", ss)).data ??
          []) as FilaCache[],
      guardarCache: async (filas) => {
        await admin.from("precios_cache").upsert(filas)
      },
      pedirYahoo: async (s) =>
        // Yahoo da 429 sin User-Agent de navegador.
        await (
          await fetch(
            `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(simboloYahoo(s))}`,
            { headers: { "User-Agent": "Mozilla/5.0" } },
          )
        ).text(),
    })
  })
}
