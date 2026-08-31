// index.ts — cierre diario via Stooq con cache de 24h en precios_cache (plan 2026-08-30).
// Auth: verify_jwt = true en config.toml; el gateway rechaza peticiones sin JWT de usuario,
// asi que aqui no se comprueba. La cache se lee/escribe con la service role (env automatica).
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
  pedirStooq(simbolo: string): Promise<string> // CSV crudo
}

// Stooq con f=sd2t2ohlcv&h&e=csv: "Symbol,Date,Time,Open,High,Low,Close,Volume".
// Sin datos: la fila viene con "N/D". null = sin datos.
export function parseaStooq(csv: string): { precio: number; fecha: string } | null {
  const lineas = csv.trim().split("\n")
  if (lineas.length < 2) return null
  const c = lineas[1].split(",")
  const fecha = c[1]
  const cierre = c[6]
  if (!cierre || cierre === "N/D") return null
  const precio = Number(cierre)
  return Number.isFinite(precio) && precio > 0 ? { precio, fecha } : null
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
      const p = parseaStooq(await deps.pedirStooq(s))
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
if ((Deno.env.get("DENO_TESTING") ?? "") !== "1") {
  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  )
  Deno.serve((req) =>
    handler(req, {
      ahora: () => Date.now(),
      leerCache: async (ss) =>
        ((await admin.from("precios_cache").select("*").in("simbolo", ss)).data ??
          []) as FilaCache[],
      guardarCache: async (filas) => {
        await admin.from("precios_cache").upsert(filas)
      },
      pedirStooq: async (s) =>
        await (
          await fetch(`https://stooq.com/q/l/?s=${encodeURIComponent(s)}&f=sd2t2ohlcv&h&e=csv`)
        ).text(),
    }),
  )
}
