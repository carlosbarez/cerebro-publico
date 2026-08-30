# Registro de usuarios, cartera y guardados — Plan de implementación

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development
> (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use
> checkbox (`- [ ]`) syntax for tracking.

**Goal:** Que un visitante del sitio pueda registrarse con email, guardar su cartera de acciones
(con valoración a cierre diario) y guardar artículos como favoritos.

**Architecture:** El sitio sigue 100% estático (Quartz horneado, servido por Vercel). Auth y
datos viven en Supabase: el navegador habla directo con Supabase vía `supabase-js` (UMD por CDN),
la seguridad la da Row Level Security (`user_id = auth.uid()`). Los precios los sirve una Edge
Function `precios` que cachea el CSV de Stooq 24 h. Una segunda función `borrar-cuenta` elimina
al usuario con la service key. Los componentes nuevos siguen el patrón existente
`quartz/components/chat-publico.tsx` + `.inline.ts`, registrados a mano en
`quartz/plugins/loader/config-loader.ts`.

**Tech Stack:** Quartz 5 (Preact TSX + inline scripts), Supabase (Auth, Postgres, Edge Functions
en Deno), Stooq CSV.

**Spec:** `docs/superpowers/specs/2026-08-30-registro-cartera-design.md`

## Global Constraints

- Textos de UI en español. Sin tildes en comentarios de código (convención del repo: ASCII en
  comentarios).
- CSS: solo variables vivas del sitio (`--bronce`, `--hueso`, `--hueso-2`, `--hueso-3`,
  `--catodo`, `--catodo-tinta`, `--aviso`, `--condensada`, `--prosa`, `--datos`). Ni un hex
  nuevo.
- Componentes Quartz internos: función `(props: QuartzComponentProps) => JSX` con
  `displayName`, `css`, `afterDOMLoaded`, exportada como
  `export default (() => Componente) satisfies QuartzComponentConstructor` (copiar de
  `quartz/components/chat-publico.tsx`). `QuartzComponentProps` y `QuartzComponentConstructor`
  son globales (ver `globals.d.ts`), no se importan.
- Scripts inline: sin dependencias npm; viajan como texto por el inline-script-loader
  (patrón de `chat-publico.inline.ts`). Todo montaje usa el patrón
  `document.addEventListener("nav", montar); montar()` con guarda `dataset.listo`.
- `npm run check` (tsc + prettier) debe pasar tras cada tarea que toque `quartz/`.
- Nunca `innerHTML` con datos de usuario o de red: `textContent` siempre.
- Commits en español, prefijo convencional (`feat:`, `chore:`…), un commit por tarea.
- La anon key de Supabase ES pública por diseño (la seguridad es el RLS); se commitea en
  `quartz/static/supabase-config.js`. La service key NUNCA sale de Supabase (solo la usan las
  Edge Functions, que la reciben como env var automática).

---

### Task 0: [MANUAL — Carlos, no OpenCode] Proyecto Supabase y claves

Esto necesita la cuenta de Supabase de Carlos; un agente no puede hacerlo.

- [ ] **Step 1: Crear el proyecto**

En https://supabase.com/dashboard → New project: nombre `cerebro-publico`, región **EU**
(Frankfurt o Irlanda), plan Free. Apuntar la contraseña de la DB que genere.

- [ ] **Step 2: Copiar URL y anon key**

Settings → API: copiar `Project URL` y `anon public key` en
`quartz/static/supabase-config.js` (el archivo lo crea la Task 4; si aún no existe, guardar las
claves a mano hasta entonces).

- [ ] **Step 3: URLs de redirección de auth**

Authentication → URL Configuration: Site URL = `https://<dominio-del-sitio>`. Redirect URLs:
añadir `https://<dominio-del-sitio>/cuenta` y `http://localhost:8080/cuenta` (desarrollo).
El provider Email ya viene activado con confirmación por email: dejarlo así.

- [ ] **Step 4: CLI en Hy3**

```bash
brew install supabase/tap/supabase   # si no está
supabase login
```

---

### Task 1: Esquema de base de datos (migración)

**Files:**
- Create: `supabase/migrations/20260830_registro_cartera.sql`
- Create: `supabase/config.toml` (lo genera `supabase init`)

**Interfaces:**
- Produces: tablas `posiciones(id, user_id, simbolo, acciones, precio_medio, creado)`,
  `favoritos(user_id, slug, titulo, creado)`, `precios_cache(simbolo, precio, fecha,
  actualizado)`, todas con RLS. Las usan las Tasks 2, 3, 6 y 7.

- [ ] **Step 1: Init de Supabase en el repo**

```bash
cd /Users/carlosbarez/cerebro-publico
supabase init
```

Crea `supabase/config.toml`. No tocar nada más de ese archivo salvo el paso 3 de la Task 2.

- [ ] **Step 2: Escribir la migración**

Crear `supabase/migrations/20260830000000_registro_cartera.sql`:

```sql
-- Registro de usuarios, cartera y guardados (plan 2026-08-30).
-- posiciones: una fila por (usuario, simbolo). simbolo en formato Stooq (aapl.us, san.mc...).
create table posiciones (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  simbolo text not null check (simbolo ~ '^[a-z0-9.\-^=]{1,15}$'),
  acciones numeric not null check (acciones > 0),
  precio_medio numeric not null check (precio_medio >= 0),
  creado timestamptz not null default now(),
  unique (user_id, simbolo)
);
alter table posiciones enable row level security;
create policy "posiciones_propias" on posiciones
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- favoritos: articulos guardados. slug = ruta sin barra inicial ("sintesis/evaluar-una-cartera").
create table favoritos (
  user_id uuid not null references auth.users on delete cascade,
  slug text not null,
  titulo text not null,
  creado timestamptz not null default now(),
  primary key (user_id, slug)
);
alter table favoritos enable row level security;
create policy "favoritos_propios" on favoritos
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

-- precios_cache: la escribe y la lee SOLO la edge function (service role). RLS sin politicas =
-- la anon key no llega a esta tabla.
create table precios_cache (
  simbolo text primary key,
  precio numeric not null,
  fecha date not null,
  actualizado timestamptz not null default now()
);
alter table precios_cache enable row level security;
```

- [ ] **Step 3: Vincular y aplicar**

```bash
supabase link --project-ref <ref-del-proyecto>   # el ref esta en la URL del dashboard
supabase db push
```

- [ ] **Step 4: Verificar**

En el dashboard → Table Editor: existen las tres tablas y en Authentication → Policies cada una
tiene RLS activado. O por SQL: `select tablename, rowsecurity from pg_tables where schemaname =
'public';` debe dar `rowsecurity = true` en las tres.

- [ ] **Step 5: Commit**

```bash
git add supabase/
git commit -m "feat: esquema de cuentas, cartera, favoritos y cache de precios"
```

---

### Task 2: Edge Function `precios`

**Files:**
- Create: `supabase/functions/precios/index.ts`
- Create: `supabase/functions/precios/test.ts`
- Modify: `supabase/config.toml` (sección de la función)

**Interfaces:**
- Consumes: tabla `precios_cache` (Task 1).
- Produces: endpoint `POST <url>/functions/v1/precios` con JWT de usuario.
  Body: `{"simbolos": ["aapl.us", ...]}` (1–50).
  Respuesta 200: `{"precios": {"aapl.us": {"precio": 232.5, "fecha": "2026-08-28"} ,
  "san.mc": {"error": "sin datos"}}}`. Entrada cacheada pero caducada servida por fallo de
  Stooq: lleva además `"caducado": true`.
  Lo consume `cartera.inline.ts` (Task 6) vía `sb.functions.invoke("precios", { body: { simbolos } })`.

- [ ] **Step 1: Escribir el test que falla**

Crear `supabase/functions/precios/test.ts`:

```ts
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
  assertEquals((await handler(post({ simbolos: [";<mal>"] }), depsBase())).status, 400)
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
```

- [ ] **Step 2: Verificar que falla**

```bash
cd supabase/functions/precios && deno test --allow-env test.ts
```

Esperado: FAIL (`Cannot find module './index.ts'`).

- [ ] **Step 3: Implementar la función**

Crear `supabase/functions/precios/index.ts`:

```ts
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
  const validos = [...new Set(
    simbolos.map((s) => String(s).toLowerCase().trim()).filter((s) => SIMBOLO_RE.test(s)),
  )]
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
        nuevas.push({ simbolo: s, precio: p.precio, fecha: p.fecha, actualizado: new Date(deps.ahora()).toISOString() })
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
        ((await admin.from("precios_cache").select("*").in("simbolo", ss)).data ?? []) as FilaCache[],
      guardarCache: async (filas) => {
        await admin.from("precios_cache").upsert(filas)
      },
      pedirStooq: async (s) =>
        await (await fetch(`https://stooq.com/q/l/?s=${encodeURIComponent(s)}&f=sd2t2ohlcv&h&e=csv`)).text(),
    })
  )
}
```

Nota para el ejecutor: `deno test` no define `DENO_TESTING` por sí solo — por eso el comando
del Step 4 la exporta. Si algún día el test se corre sin ella, `Deno.serve` arrancaría un
servidor dentro del test y colgaría la ejecución. Usa el comando del Step 4 tal cual.

- [ ] **Step 4: Verificar que pasa**

```bash
DENO_TESTING=1 deno test --allow-env supabase/functions/precios/test.ts
```

Esperado: 7 tests PASS.

- [ ] **Step 5: Exigir JWT y desplegar**

En `supabase/config.toml`, añadir al final:

```toml
[functions.precios]
verify_jwt = true
```

```bash
supabase functions deploy precios
```

- [ ] **Step 6: Verificar en vivo**

Sin JWT debe dar 401:

```bash
curl -i -X POST https://<ref>.supabase.co/functions/v1/precios \
  -H "apikey: <anon-key>" -H "Content-Type: application/json" -d '{"simbolos":["aapl.us"]}'
# Esperado: 401
```

Con JWT de un usuario de prueba (se obtiene tras la Task 5 desde la consola del navegador:
`(await supabase.auth.getSession()).data.session.access_token`):

```bash
curl -X POST https://<ref>.supabase.co/functions/v1/precios \
  -H "Authorization: Bearer <jwt>" -H "Content-Type: application/json" -d '{"simbolos":["aapl.us"]}'
# Esperado: {"precios":{"aapl.us":{"precio":...,"fecha":"..."}}}
```

Si el 401 funciona pero el 200 no se puede probar aún (no hay usuarios hasta la Task 5), dejar
el 200 para el checklist final (Task 9).

- [ ] **Step 7: Commit**

```bash
git add supabase/
git commit -m "feat: edge function precios (Stooq + cache 24h)"
```

---

### Task 3: Edge Function `borrar-cuenta`

**Files:**
- Create: `supabase/functions/borrar-cuenta/index.ts`
- Modify: `supabase/config.toml`

**Interfaces:**
- Consumes: `auth.users` (Supabase Auth).
- Produces: endpoint `POST <url>/functions/v1/borrar-cuenta` con JWT; 200 `{"ok": true}`.
  Lo llama `cuenta.inline.ts` (Task 5) con `sb.functions.invoke("borrar-cuenta")`.

- [ ] **Step 1: Escribir la función**

Crear `supabase/functions/borrar-cuenta/index.ts`:

```ts
// index.ts — borra la cuenta del usuario autenticado y sus datos (cascada por FK).
// RGPD: el borrado es efectivo e inmediato. La service key nunca sale de aqui.
import { createClient } from "jsr:@supabase/supabase-js@2"

function json(cuerpo: unknown, status = 200): Response {
  return new Response(JSON.stringify(cuerpo), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ error: "solo POST" }, 405)
  const token = (req.headers.get("Authorization") ?? "").replace("Bearer ", "")
  if (!token) return json({ error: "no autorizado" }, 401)

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  )
  const { data: { user }, error } = await admin.auth.getUser(token)
  if (error || !user) return json({ error: "no autorizado" }, 401)

  const { error: e2 } = await admin.auth.admin.deleteUser(user.id)
  if (e2) return json({ error: "no se pudo borrar" }, 500)
  return json({ ok: true })
})
```

Sin test unitario (la lógica es una llamada al admin API; testearla es testear Supabase). La
verificación es el checklist manual de la Task 9.

- [ ] **Step 2: Config y despliegue**

En `supabase/config.toml`:

```toml
[functions.borrar-cuenta]
verify_jwt = true
```

```bash
supabase functions deploy borrar-cuenta
```

- [ ] **Step 3: Verificar 401 sin JWT**

```bash
curl -i -X POST https://<ref>.supabase.co/functions/v1/borrar-cuenta -H "apikey: <anon-key>"
# Esperado: 401
```

- [ ] **Step 4: Commit**

```bash
git add supabase/
git commit -m "feat: edge function borrar-cuenta (RGPD)"
```

---

### Task 4: Config pública de Supabase + carga de `supabase-js`

**Files:**
- Create: `quartz/static/supabase-config.js`
- Modify: `quartz/components/Head.tsx` (~línea 48, junto al `<link rel="preload">`)

**Interfaces:**
- Produces: `window.CEREBRO_SUPABASE = { url, anonKey }` y `window.supabase` (UMD) disponibles
  en todas las páginas antes de los scripts de componentes. Los usan `cuenta.inline.ts`,
  `cartera.inline.ts` y `guardar.inline.ts`.

- [ ] **Step 1: Verificar la URL del CDN**

```bash
curl -sI https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js | head -1
# Esperado: HTTP/2 200
```

Si no es 200, buscar la ruta UMD vigente del paquete (`npm view @supabase/supabase-js@2`) y
usarla en el paso 3.

- [ ] **Step 2: Crear `quartz/static/supabase-config.js`**

```js
// Config publica de Supabase (plan 2026-08-30). La anon key ES publica por diseno:
// la seguridad esta en el RLS de las tablas, no en ocultar esta clave.
window.CEREBRO_SUPABASE = {
  url: "https://TU-PROYECTO.supabase.co",
  anonKey: "PEGA-AQUI-LA-ANON-KEY",
}
```

Sustituir por los valores reales de la Task 0 (Settings → API). Quartz copia `quartz/static/*`
a `/static/*` en la salida.

- [ ] **Step 3: Cargar ambos scripts en `Head.tsx`**

Dentro del `<head>` que devuelve el componente, junto al `<link rel="preload" .../>` existente
(~línea 48), añadir:

```tsx
        <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.js" defer></script>
        <script src={joinSegments(baseDir, "static/supabase-config.js")} defer></script>
```

El orden importa: `defer` ejecuta en orden de documento, así `supabase.js` queda definido antes
que los scripts de componentes (que corren tras DOMContentLoaded). `joinSegments` y `baseDir`
ya existen en ese archivo.

- [ ] **Step 4: Check + commit**

```bash
npm run check
git add quartz/static/supabase-config.js quartz/components/Head.tsx
git commit -m "feat: carga supabase-js y config publica en todas las paginas"
```

---

### Task 5: Página y componente `/cuenta` (registro, login, reset, borrado)

**Files:**
- Create: `quartz/components/cuenta.tsx`
- Create: `quartz/components/cuenta.inline.ts`
- Create: `content/cuenta.md`

**Interfaces:**
- Consumes: `window.supabase`, `window.CEREBRO_SUPABASE` (Task 4), endpoint `borrar-cuenta`
  (Task 3).
- Produces: página `/cuenta`. IDs del DOM que el inline usa: `#cuenta` (raíz), `#cuenta-mensaje`,
  `#cuenta-sin-sesion`, `#cuenta-form-login`, `#cuenta-form-registro`, `#cuenta-form-reset`,
  `#cuenta-form-nueva`, `#cuenta-con-sesion`, `#cuenta-email`, `#cuenta-salir`, `#cuenta-borrar`.

- [ ] **Step 1: Crear `content/cuenta.md`**

```md
---
title: "Tu cuenta"
---

# Tu cuenta
```

- [ ] **Step 2: Crear `quartz/components/cuenta.tsx`**

```tsx
// cuenta.tsx — registro, login, reset y borrado de cuenta (plan 2026-08-30).
// Patron copiado de chat-publico.tsx; se registra a mano en config-loader.ts (Task 8).
// Solo se pinta en el slug "cuenta".
import cuentaScript from "./cuenta.inline"

function Cuenta({ fileData }: QuartzComponentProps) {
  if (fileData.slug !== "cuenta") return null
  return (
    <section id="cuenta" class="cuenta">
      <p class="cuenta-rotulo">Tu cuenta</p>
      <p id="cuenta-mensaje" class="cuenta-mensaje" role="status"></p>

      <div id="cuenta-sin-sesion" hidden>
        <form id="cuenta-form-login" class="cuenta-form">
          <input type="email" name="email" required autocomplete="email" placeholder="tu@email" />
          <input
            type="password"
            name="password"
            required
            minlength={8}
            autocomplete="current-password"
            placeholder="Contraseña (mínimo 8)"
          />
          <button type="submit" class="cuenta-accion">
            Entrar
          </button>
          <p class="cuenta-aux">
            <a href="#" data-cuenta-ver="registro">
              Crear cuenta
            </a>
            {" · "}
            <a href="#" data-cuenta-ver="reset">
              Olvidé mi contraseña
            </a>
          </p>
        </form>

        <form id="cuenta-form-registro" class="cuenta-form" hidden>
          <input type="email" name="email" required autocomplete="email" placeholder="tu@email" />
          <input
            type="password"
            name="password"
            required
            minlength={8}
            autocomplete="new-password"
            placeholder="Contraseña (mínimo 8)"
          />
          <button type="submit" class="cuenta-accion">
            Crear cuenta
          </button>
          <p class="cuenta-aux">
            <a href="#" data-cuenta-ver="login">
              Ya tengo cuenta
            </a>
          </p>
        </form>

        <form id="cuenta-form-reset" class="cuenta-form" hidden>
          <input type="email" name="email" required autocomplete="email" placeholder="tu@email" />
          <button type="submit" class="cuenta-accion">
            Enviarme el enlace
          </button>
          <p class="cuenta-aux">
            <a href="#" data-cuenta-ver="login">
              Volver
            </a>
          </p>
        </form>

        {/* Solo visible al llegar desde el email de reset (evento PASSWORD_RECOVERY). */}
        <form id="cuenta-form-nueva" class="cuenta-form" hidden>
          <input
            type="password"
            name="password"
            required
            minlength={8}
            autocomplete="new-password"
            placeholder="Nueva contraseña (mínimo 8)"
          />
          <button type="submit" class="cuenta-accion">
            Guardar contraseña
          </button>
        </form>
      </div>

      <div id="cuenta-con-sesion" hidden>
        <p>
          Sesión iniciada como <strong id="cuenta-email"></strong>.
        </p>
        <p>
          <a href="/mi-cartera">Ir a mi cartera y guardados</a>
        </p>
        <p>
          <button id="cuenta-salir" type="button" class="cuenta-accion">
            Cerrar sesión
          </button>
        </p>
        <p>
          <button id="cuenta-borrar" type="button" class="cuenta-peligro">
            Borrar mi cuenta y todos mis datos
          </button>
        </p>
      </div>
    </section>
  )
}

Cuenta.displayName = "Cuenta"
Cuenta.afterDOMLoaded = cuentaScript
// Solo variables vivas del sitio; los patrones copian a chat-publico.tsx.
Cuenta.css = `
.cuenta {
  max-width: 68ch;
  margin: 0 0 96px;
}
.cuenta .cuenta-rotulo {
  color: var(--bronce);
  font-family: var(--condensada);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 12px;
}
.cuenta-form {
  display: grid;
  gap: 18px;
  max-width: 36ch;
}
.cuenta-form input {
  min-width: 0;
  border: 0;
  border-bottom: 1px solid var(--hueso);
  border-radius: 0;
  padding: 8px 2px;
  background: transparent;
  color: var(--hueso);
  caret-color: var(--catodo);
  font-family: var(--prosa);
}
.cuenta-form input::placeholder {
  color: var(--hueso-3);
}
.cuenta-accion {
  min-height: 48px;
  border: 0;
  border-radius: 36px;
  padding: 14px 28px;
  background: var(--catodo);
  color: var(--catodo-tinta);
  font-family: var(--condensada);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  cursor: pointer;
}
.cuenta-accion:disabled {
  cursor: wait;
  opacity: 0.55;
}
.cuenta-peligro {
  border: 0;
  background: transparent;
  color: var(--aviso);
  font-family: var(--condensada);
  font-size: 0.8125rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 8px 0;
}
.cuenta-aux {
  color: var(--hueso-2);
  font-size: 0.9rem;
  margin: 0;
}
.cuenta-mensaje {
  min-height: 1.4em;
  color: var(--hueso-2);
}
.cuenta-mensaje.cuenta-error {
  color: var(--aviso);
}
`

export default (() => Cuenta) satisfies QuartzComponentConstructor
```

- [ ] **Step 3: Crear `quartz/components/cuenta.inline.ts`**

```ts
// cuenta.inline.ts — cliente de /cuenta (plan 2026-08-30). Viaja como texto (inline-script-loader).
// Usa window.supabase (UMD de jsdelivr, Task 4) y window.CEREBRO_SUPABASE (supabase-config.js).
// textContent siempre: lo que viene de red o del usuario nunca toca innerHTML.

const CFG = (window as any).CEREBRO_SUPABASE
const sb = CFG && (window as any).supabase
  ? (window as any).supabase.createClient(CFG.url, CFG.anonKey)
  : null

function toma<T extends Element>(raiz: Element, selector: string): T | null {
  return raiz.querySelector<T>(selector)
}

function montar(): void {
  const raiz = document.querySelector<HTMLElement>("#cuenta")
  if (!raiz || raiz.dataset.listo === "1") return
  raiz.dataset.listo = "1"

  const mensajeEl = toma<HTMLElement>(raiz, "#cuenta-mensaje")!
  const mensaje = (texto: string, esError = false) => {
    mensajeEl.textContent = texto
    mensajeEl.classList.toggle("cuenta-error", esError)
  }
  if (!sb) {
    mensaje("La cuenta todavía no está configurada.", true)
    return
  }

  const sinSesion = toma<HTMLElement>(raiz, "#cuenta-sin-sesion")!
  const conSesion = toma<HTMLElement>(raiz, "#cuenta-con-sesion")!
  const formularios = ["login", "registro", "reset", "nueva"].map(
    (n) => toma<HTMLFormElement>(raiz, `#cuenta-form-${n}`)!,
  )
  const verFormulario = (nombre: string) => {
    for (const f of formularios) f.hidden = f.id !== `cuenta-form-${nombre}`
  }

  const pintaSesion = (sesion: any) => {
    sinSesion.hidden = Boolean(sesion)
    conSesion.hidden = !sesion
    if (sesion) {
      toma<HTMLElement>(raiz, "#cuenta-email")!.textContent = sesion.user.email
    } else {
      verFormulario("login")
    }
  }

  // Enlaces "Crear cuenta" / "Olvidé..." / "Volver": cambian el formulario visible.
  raiz.querySelectorAll<HTMLAnchorElement>("[data-cuenta-ver]").forEach((a) => {
    a.addEventListener("click", (ev) => {
      ev.preventDefault()
      verFormulario(a.dataset.cuentaVer!)
      mensaje("")
    })
  })

  const campo = (f: HTMLFormElement, n: string) =>
    (f.elements.namedItem(n) as HTMLInputElement).value.trim()

  toma<HTMLFormElement>(raiz, "#cuenta-form-login")!.addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget as HTMLFormElement
    const { error } = await sb.auth.signInWithPassword({
      email: campo(f, "email"),
      password: campo(f, "password"),
    })
    mensaje(error ? "Email o contraseña incorrectos." : "", Boolean(error))
  })

  toma<HTMLFormElement>(raiz, "#cuenta-form-registro")!.addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget as HTMLFormElement
    const { error } = await sb.auth.signUp({
      email: campo(f, "email"),
      password: campo(f, "password"),
      options: { emailRedirectTo: `${location.origin}/cuenta` },
    })
    if (error) mensaje("No se pudo crear la cuenta. Prueba con otro email.", true)
    else {
      mensaje("Cuenta creada. Revisa tu correo y confirma el email para entrar.")
      verFormulario("login")
    }
  })

  toma<HTMLFormElement>(raiz, "#cuenta-form-reset")!.addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget as HTMLFormElement
    await sb.auth.resetPasswordForEmail(campo(f, "email"), {
      redirectTo: `${location.origin}/cuenta`,
    })
    // Mismo mensaje exista o no el email: no se filtra quien esta dado de alta.
    mensaje("Si el email existe, te llega un enlace para cambiar la contraseña.")
    verFormulario("login")
  })

  toma<HTMLFormElement>(raiz, "#cuenta-form-nueva")!.addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget as HTMLFormElement
    const { error } = await sb.auth.updateUser({ password: campo(f, "password") })
    mensaje(error ? "No se pudo cambiar la contraseña." : "Contraseña actualizada.", Boolean(error))
  })

  toma<HTMLButtonElement>(raiz, "#cuenta-salir")!.addEventListener("click", async () => {
    await sb.auth.signOut()
    location.href = "/"
  })

  toma<HTMLButtonElement>(raiz, "#cuenta-borrar")!.addEventListener("click", async () => {
    if (!confirm("Se borra tu cuenta y todos tus datos (cartera y guardados). ¿Seguro?")) return
    const { error } = await sb.functions.invoke("borrar-cuenta")
    if (error) {
      mensaje("No se pudo borrar la cuenta. Escríbeme y lo hago a mano.", true)
      return
    }
    await sb.auth.signOut()
    location.href = "/"
  })

  sb.auth.onAuthStateChange((evento: string, sesion: any) => {
    if (evento === "PASSWORD_RECOVERY") {
      // Llega desde el email de reset: solo el formulario de nueva contrasena.
      sinSesion.hidden = false
      conSesion.hidden = true
      verFormulario("nueva")
      return
    }
    pintaSesion(sesion)
  })
  sb.auth.getSession().then(({ data }: any) => pintaSesion(data.session))
}

// Mismo patron que chat-publico.inline.ts: "nav" del router SPA + montar() para la primera carga.
document.addEventListener("nav", montar)
montar()
```

- [ ] **Step 4: Check + commit**

```bash
npm run check
git add quartz/components/cuenta.tsx quartz/components/cuenta.inline.ts content/cuenta.md
git commit -m "feat: pagina /cuenta con registro, login, reset y borrado"
```

---

### Task 6: Página y componente `/mi-cartera` (CRUD + valoración + guardados)

**Files:**
- Create: `quartz/components/cartera.tsx`
- Create: `quartz/components/cartera.inline.ts`
- Create: `content/mi-cartera.md`

**Interfaces:**
- Consumes: `window.supabase` (Task 4), tablas `posiciones`/`favoritos` (Task 1), endpoint
  `precios` (Task 2).
- Produces: página `/mi-cartera`. IDs del DOM: `#cartera` (raíz), `#cartera-sin-sesion`,
  `#cartera-app`, `#cartera-form` (inputs `simbolo`, `acciones`, `precio`), `#cartera-filas`,
  `#cartera-total`, `#cartera-pnl`, `#cartera-fecha`, `#cartera-favoritos`, `#cartera-mensaje`.

- [ ] **Step 1: Crear `content/mi-cartera.md`**

```md
---
title: "Mi cartera"
---

# Mi cartera
```

- [ ] **Step 2: Crear `quartz/components/cartera.tsx`**

```tsx
// cartera.tsx — la cartera del usuario y sus articulos guardados (plan 2026-08-30).
// Patron copiado de chat-publico.tsx; se registra en config-loader.ts (Task 8).
// Solo se pinta en el slug "mi-cartera".
import carteraScript from "./cartera.inline"

function Cartera({ fileData }: QuartzComponentProps) {
  if (fileData.slug !== "mi-cartera") return null
  return (
    <section id="cartera" class="cartera">
      <div id="cartera-sin-sesion" hidden>
        <p>
          Para guardar tu cartera necesitas una cuenta.{" "}
          <a href="/cuenta">Entrar o registrarte</a>.
        </p>
      </div>

      <div id="cartera-app" hidden>
        <p class="cartera-rotulo">Mi cartera</p>
        <form id="cartera-form" class="cartera-form">
          <input
            name="simbolo"
            required
            pattern="[A-Za-z0-9.\-^=]{1,15}"
            title="Símbolo de Stooq: aapl.us, san.mc, mc.pa…"
            placeholder="Símbolo (aapl.us, san.mc…)"
          />
          <input name="acciones" type="number" step="any" min="0" required placeholder="Nº acciones" />
          <input name="precio" type="number" step="any" min="0" required placeholder="Precio medio" />
          <button type="submit" class="cuenta-accion">
            Añadir
          </button>
        </form>
        <table class="cartera-tabla">
          <thead>
            <tr>
              <th>Símbolo</th>
              <th>Acciones</th>
              <th>P. medio</th>
              <th>Cierre</th>
              <th>Valor</th>
              <th>P&L</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="cartera-filas"></tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td colspan={3}></td>
              <td id="cartera-total">—</td>
              <td id="cartera-pnl">—</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <p id="cartera-fecha" class="cartera-fecha"></p>

        <p class="cartera-rotulo">Guardados</p>
        <ul id="cartera-favoritos" class="cartera-favoritos"></ul>
      </div>

      <p id="cartera-mensaje" role="status"></p>
    </section>
  )
}

Cartera.displayName = "Cartera"
Cartera.afterDOMLoaded = carteraScript
Cartera.css = `
.cartera {
  max-width: 100%;
  margin: 0 0 96px;
}
.cartera .cartera-rotulo {
  color: var(--bronce);
  font-family: var(--condensada);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 28px 0 12px;
}
.cartera-form {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 8ch 10ch auto;
  gap: 14px;
  align-items: end;
  margin-bottom: 24px;
}
.cartera-form input {
  min-width: 0;
  border: 0;
  border-bottom: 1px solid var(--hueso);
  border-radius: 0;
  padding: 8px 2px;
  background: transparent;
  color: var(--hueso);
  caret-color: var(--catodo);
  font-family: var(--datos);
}
.cartera-form input::placeholder {
  color: var(--hueso-3);
}
.cartera-tabla {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--datos);
  font-size: 0.92rem;
  line-height: 1.5;
}
.cartera-tabla th {
  color: var(--catodo);
  font-family: var(--condensada);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.cartera-tabla th,
.cartera-tabla td {
  padding: 9px 12px 9px 0;
  border-bottom: 1px dashed color-mix(in srgb, var(--bronce) 55%, transparent);
  text-align: right;
}
.cartera-tabla th:first-child,
.cartera-tabla td:first-child {
  text-align: left;
}
.cartera-tabla tfoot td {
  border-bottom: 0;
  color: var(--catodo);
}
.cartera-quitar {
  border: 0;
  background: transparent;
  color: var(--aviso);
  cursor: pointer;
  font-family: var(--datos);
}
.cartera-fecha {
  color: var(--hueso-2);
  font-family: var(--datos);
  font-size: 0.72rem;
}
.cartera-favoritos {
  margin: 0;
  padding-left: 24px;
}
.cartera-favoritos li {
  margin: 6px 0;
}
@media (max-width: 999px) {
  .cartera-form {
    grid-template-columns: 1fr;
  }
}
`

export default (() => Cartera) satisfies QuartzComponentConstructor
```

- [ ] **Step 3: Crear `quartz/components/cartera.inline.ts`**

```ts
// cartera.inline.ts — cliente de /mi-cartera (plan 2026-08-30). Viaja como texto.
// Lee posiciones y favoritos de Supabase (RLS: solo las del usuario), pide cierres a la
// edge function "precios" y calcula valor y P&L en cliente. textContent siempre.

const CFG = (window as any).CEREBRO_SUPABASE
const sb = CFG && (window as any).supabase
  ? (window as any).supabase.createClient(CFG.url, CFG.anonKey)
  : null

function toma<T extends Element>(raiz: Element, selector: string): T | null {
  return raiz.querySelector<T>(selector)
}

function crea(etiqueta: string, texto: string): HTMLElement {
  const el = document.createElement(etiqueta)
  el.textContent = texto
  return el
}

function num(n: number): string {
  return n.toLocaleString("es-ES", { maximumFractionDigits: 2 })
}

function montar(): void {
  const raiz = document.querySelector<HTMLElement>("#cartera")
  if (!raiz || raiz.dataset.listo === "1") return
  raiz.dataset.listo = "1"
  if (!sb) return

  const mensajeEl = toma<HTMLElement>(raiz, "#cartera-mensaje")!
  const mensaje = (texto: string, esError = false) => {
    mensajeEl.textContent = texto
    mensajeEl.style.color = esError ? "var(--aviso)" : ""
  }

  const pintaPosiciones = async (): Promise<void> => {
    const filas = toma<HTMLElement>(raiz, "#cartera-filas")!
    const { data: pos, error } = await sb.from("posiciones").select("*").order("creado")
    if (error) {
      mensaje("No se pudo leer la cartera.", true)
      return
    }

    let precios: Record<string, any> = {}
    if (pos.length > 0) {
      const { data, error: e2 } = await sb.functions.invoke("precios", {
        body: { simbolos: pos.map((p: any) => p.simbolo) },
      })
      if (e2) mensaje("Los precios no están disponibles ahora; se muestra lo guardado.", true)
      else precios = data?.precios ?? {}
    }

    filas.replaceChildren()
    let total = 0
    let pnl = 0
    let fecha = ""
    let antiguo = false
    for (const p of pos) {
      const info = precios[p.simbolo]
      const cierre = info && !info.error ? Number(info.precio) : null
      const valor = cierre != null ? cierre * p.acciones : null
      const diferencia = cierre != null ? (cierre - p.precio_medio) * p.acciones : null
      if (valor != null) total += valor
      if (diferencia != null) pnl += diferencia
      if (info?.fecha && info.fecha > fecha) fecha = info.fecha
      if (info?.caducado) antiguo = true

      const tr = document.createElement("tr")
      tr.append(
        crea("td", p.simbolo),
        crea("td", num(p.acciones)),
        crea("td", num(p.precio_medio)),
        crea("td", cierre != null ? num(cierre) : "—"),
        crea("td", valor != null ? num(valor) : "—"),
        crea("td", diferencia != null ? (diferencia >= 0 ? "+" : "") + num(diferencia) : "—"),
      )
      const tdBorrar = document.createElement("td")
      const boton = document.createElement("button")
      boton.type = "button"
      boton.className = "cartera-quitar"
      boton.textContent = "Quitar"
      boton.addEventListener("click", async () => {
        const { error: e3 } = await sb.from("posiciones").delete().eq("id", p.id)
        if (e3) mensaje("No se pudo quitar la posición.", true)
        else await pintaPosiciones()
      })
      tdBorrar.append(boton)
      tr.append(tdBorrar)
      filas.append(tr)
    }
    toma<HTMLElement>(raiz, "#cartera-total")!.textContent = pos.length ? num(total) : "—"
    toma<HTMLElement>(raiz, "#cartera-pnl")!.textContent = pos.length
      ? (pnl >= 0 ? "+" : "") + num(pnl)
      : "—"
    toma<HTMLElement>(raiz, "#cartera-fecha")!.textContent = fecha
      ? `Cierres del ${fecha}${antiguo ? " · algún precio es antiguo (Stooq no responde)" : ""}`
      : ""
  }

  const pintaFavoritos = async (): Promise<void> => {
    const lista = toma<HTMLElement>(raiz, "#cartera-favoritos")!
    const { data: favs, error } = await sb
      .from("favoritos")
      .select("slug, titulo")
      .order("creado", { ascending: false })
    if (error) {
      mensaje("No se pudieron leer los guardados.", true)
      return
    }
    lista.replaceChildren()
    if (favs.length === 0) {
      lista.append(crea("li", "Todavía no has guardado ningún artículo."))
      return
    }
    for (const f of favs) {
      const li = document.createElement("li")
      const a = document.createElement("a")
      a.href = `/${f.slug}`
      a.textContent = f.titulo
      li.append(a)
      lista.append(li)
    }
  }

  const pintaTodo = async (): Promise<void> => {
    const { data: sesion } = await sb.auth.getSession()
    const sinSesion = toma<HTMLElement>(raiz, "#cartera-sin-sesion")!
    const app = toma<HTMLElement>(raiz, "#cartera-app")!
    sinSesion.hidden = Boolean(sesion.session)
    app.hidden = !sesion.session
    if (!sesion.session) return
    mensaje("")
    await Promise.all([pintaPosiciones(), pintaFavoritos()])
  }

  toma<HTMLFormElement>(raiz, "#cartera-form")!.addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget as HTMLFormElement
    const campo = (n: string) => (f.elements.namedItem(n) as HTMLInputElement).value.trim()
    const simbolo = campo("simbolo").toLowerCase()
    const acciones = Number(campo("acciones"))
    const precio = Number(campo("precio"))
    if (!/^[a-z0-9.\-^=]{1,15}$/.test(simbolo) || !(acciones > 0) || !(precio >= 0)) {
      mensaje("Revisa el símbolo, las acciones y el precio.", true)
      return
    }
    const { data: sesion } = await sb.auth.getSession()
    // upsert: si el simbolo ya estaba, se actualiza la posicion en vez de fallar.
    const { error } = await sb.from("posiciones").upsert(
      {
        user_id: sesion.session.user.id,
        simbolo,
        acciones,
        precio_medio: precio,
      },
      { onConflict: "user_id,simbolo" },
    )
    if (error) mensaje("No se pudo guardar la posición.", true)
    else {
      f.reset()
      await pintaPosiciones()
    }
  })

  void pintaTodo()
}

// Mismo patron que chat-publico.inline.ts.
document.addEventListener("nav", montar)
montar()
```

- [ ] **Step 4: Check + commit**

```bash
npm run check
git add quartz/components/cartera.tsx quartz/components/cartera.inline.ts content/mi-cartera.md
git commit -m "feat: pagina /mi-cartera con posiciones, valoracion y guardados"
```

---

### Task 7: Componente `guardar` (botón en artículos)

**Files:**
- Create: `quartz/components/guardar.tsx`
- Create: `quartz/components/guardar.inline.ts`

**Interfaces:**
- Consumes: `window.supabase` (Task 4), tabla `favoritos` (Task 1).
- Produces: botón `#guardar-articulo[data-slug]` en páginas de contenido. La lista se lee en
  `/mi-cartera` (Task 6).

- [ ] **Step 1: Crear `quartz/components/guardar.tsx`**

```tsx
// guardar.tsx — boton "Guardar" en los articulos (plan 2026-08-30).
// Patron copiado de chat-publico.tsx; se registra en config-loader.ts (Task 8).
import guardarScript from "./guardar.inline"

// ponytail: exclusion por slug. Si crece (buscador, bases...), pasar a frontmatter "guardar: false".
const EXCLUIDOS = new Set(["index", "cuenta", "mi-cartera", "404"])

function Guardar({ fileData }: QuartzComponentProps) {
  const slug = fileData.slug
  if (!slug || EXCLUIDOS.has(slug) || slug.startsWith("tags/")) return null
  return (
    <button id="guardar-articulo" class="guardar-articulo" type="button" data-slug={slug} hidden>
      Guardar
    </button>
  )
}

Guardar.displayName = "Guardar"
Guardar.afterDOMLoaded = guardarScript
Guardar.css = `
.guardar-articulo {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 100;
  border: 0;
  border-radius: 36px;
  padding: 12px 22px;
  background: var(--catodo);
  color: var(--catodo-tinta);
  font-family: var(--condensada);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0.92;
}
.guardar-articulo[data-guardado="1"] {
  background: transparent;
  color: var(--bronce);
  box-shadow: inset 0 0 0 1px var(--bronce);
}
`

export default (() => Guardar) satisfies QuartzComponentConstructor
```

- [ ] **Step 2: Crear `quartz/components/guardar.inline.ts`**

```ts
// guardar.inline.ts — toggle de favoritos en articulos (plan 2026-08-30). Viaja como texto.
// Sin sesion el boton ni se muestra. El slug viaja en data-slug del boton (lo pone guardar.tsx).

const CFG = (window as any).CEREBRO_SUPABASE
const sb = CFG && (window as any).supabase
  ? (window as any).supabase.createClient(CFG.url, CFG.anonKey)
  : null

async function montar(): Promise<void> {
  const boton = document.querySelector<HTMLButtonElement>("#guardar-articulo")
  if (!boton || boton.dataset.listo === "1") return
  boton.dataset.listo = "1"
  if (!sb) return

  const { data: sesion } = await sb.auth.getSession()
  if (!sesion.session) return
  boton.hidden = false

  const slug = boton.dataset.slug!
  const pinta = (guardado: boolean) => {
    boton.dataset.guardado = guardado ? "1" : "0"
    boton.textContent = guardado ? "Guardado ✓" : "Guardar"
  }

  const { data: existente } = await sb
    .from("favoritos")
    .select("slug")
    .eq("slug", slug)
    .maybeSingle()
  pinta(Boolean(existente))

  boton.addEventListener("click", async () => {
    const guardado = boton.dataset.guardado === "1"
    if (guardado) {
      const { error } = await sb.from("favoritos").delete().eq("slug", slug)
      if (!error) pinta(false)
    } else {
      const titulo =
        document.querySelector("article h1")?.textContent?.trim() || document.title
      const { error } = await sb
        .from("favoritos")
        .insert({ user_id: sesion.session.user.id, slug, titulo })
      if (!error) pinta(true)
    }
  })
}

// Mismo patron que chat-publico.inline.ts. El boton cambia con cada pagina (SPA), asi que
// montar() se reevalua en cada "nav"; la guarda dataset.listo evita listeners dobles.
document.addEventListener("nav", () => void montar())
void montar()
```

- [ ] **Step 3: Check + commit**

```bash
npm run check
git add quartz/components/guardar.tsx quartz/components/guardar.inline.ts
git commit -m "feat: boton guardar articulo en paginas de contenido"
```

---

### Task 8: Registro de componentes, navegación y aviso legal

**Files:**
- Modify: `quartz/plugins/loader/config-loader.ts` (~línea 711, tras el bloque de ChatPublico)
- Modify: `quartz/components/Body.tsx` (array de secciones, ~línea 14)
- Modify: `content/aviso-legal.md`

**Interfaces:**
- Consumes: los tres componentes de las Tasks 5–7.
- Produces: los componentes se pintan en el sitio horneado; enlace "Mi cuenta" en la barra.

- [ ] **Step 1: Registrar los componentes en `config-loader.ts`**

Localizar el bloque existente (~línea 708-713):

```ts
  const ChatPublicoModule = await import("../../components/chat-publico")
  defaultLayout.afterBody = [...(defaultLayout.afterBody ?? []), ChatPublicoModule.default()]
```

Dejarlo como está y añadir INMEDIATAMENTE DESPUÉS (antes del bucle
`for (const pageType of Object.keys(byPageType))`, que replica `defaultLayout.afterBody` a los
layouts por tipo):

```ts
  // Registro, cartera y guardados (plan 2026-08-30). Mismo caso especial que ChatPublico:
  // los componentes internos no entran por el registro de plugins. Van al afterBody por
  // defecto y el bucle de abajo los replica a los layouts por tipo.
  const CuentaModule = await import("../../components/cuenta")
  const CarteraModule = await import("../../components/cartera")
  const GuardarModule = await import("../../components/guardar")
  defaultLayout.afterBody = [
    ...(defaultLayout.afterBody ?? []),
    CuentaModule.default(),
    CarteraModule.default(),
    GuardarModule.default(),
  ]
```

- [ ] **Step 2: Enlace en la barra de `Body.tsx`**

En el array de secciones (~línea 14-16, donde están "Chat con Elisa", "Newsletter",
"Biblioteca"), añadir al final:

```ts
  { texto: "Mi cuenta", href: "/cuenta" },
```

- [ ] **Step 3: Párrafo RGPD en `content/aviso-legal.md`**

Añadir al final de la lista de bullets:

```md
- **Cuentas de usuario.** Si te registras guardamos tu email (la cuenta) y lo que metas en tu
  cartera y tus guardados. Lo almacena Supabase en la UE, solo para darte ese servicio. Desde
  «Tu cuenta» puedes borrar tu cuenta y todos tus datos, con efecto inmediato.
```

- [ ] **Step 4: Check + commit**

```bash
npm run check
git add quartz/plugins/loader/config-loader.ts quartz/components/Body.tsx content/aviso-legal.md
git commit -m "feat: registro de componentes de cuenta, enlace en barra y aviso RGPD"
```

---

### Task 9: Verificación end-to-end y despliegue

**Files:** ninguno nuevo.

- [ ] **Step 1: Check completo del repo**

```bash
npm run check
```

- [ ] **Step 2: Horneado de prueba (opcional pero recomendado)**

```bash
npx quartz build -d content -o public-test
grep -c "guardar-articulo" public-test/index.html   # >= 0; en index el componente devuelve null
grep -c 'id="cuenta"' public-test/cuenta.html        # esperado: >= 1
grep -c 'id="cartera"' public-test/mi-cartera.html   # esperado: >= 1
grep -c "supabase-config.js" public-test/cuenta.html # esperado: >= 1
rm -rf public-test
```

Si `quartz build` falla por motivos ajenos al cambio (el horneado real lo hace `publica.py`,
fuera de este repo), anotarlo y seguir: la verificación definitiva es el checklist del Step 4
tras el despliegue.

- [ ] **Step 3: Despliegue con el flujo habitual**

Horneado con `publica.py` y subida a Vercel como siempre (fuera de este repo).

- [ ] **Step 4: Checklist manual en el navegador (Carlos)**

1. `/cuenta` → crear cuenta con un email real → llega el email de confirmación → al confirmar
   vuelve a `/cuenta` con sesión iniciada.
2. `/mi-cartera` → añadir `aapl.us`, 10 acciones, precio medio 100 → aparece la fila con cierre,
   valor y P&L, y la fecha del cierre debajo. Añadir `san.mc`. Añadir `xxxx.us` → esa fila sale
   con "—" y las demás bien.
3. Añadir `aapl.us` otra vez con otros números → se actualiza la fila (upsert), no duplica.
4. Abrir un artículo → botón "Guardar" abajo a la derecha → pulsar → "Guardado ✓" → en
   `/mi-cartera` aparece en Guardados → volver al artículo y pulsar otra vez → se quita.
5. En una ventana de incógnito, sin sesión: `/mi-cartera` muestra el aviso con enlace a
   `/cuenta` y los artículos NO muestran el botón.
6. "Olvidé mi contraseña" → email → enlace → formulario de nueva contraseña → entrar con la
   nueva.
7. `/cuenta` → "Borrar mi cuenta" → confirmar → vuelve a `/` sin sesión. En el dashboard de
   Supabase (Authentication → Users) el usuario ya no está; en Table Editor, `posiciones` y
   `favoritos` no tienen filas suyas.
8. Segundo usuario de prueba: no ve las posiciones ni guardados del primero (el RLS manda).

- [ ] **Step 5: Si algo falla**

No parchear a ciegas: consola del navegador (errores JS), pestaña Network (¿401 del
`verify_jwt`? ¿CORS?), logs de la función (`supabase functions logs precios`). El fallo más
probable es el paso 3 de la Task 0 (URLs de redirección) o las claves mal pegadas en
`supabase-config.js`.
