# Diseño: registro de usuarios, cartera y guardados

Fecha: 2026-08-30
Estado: aprobado por Carlos (chat, 2026-08-30)

## Contexto

`cerebro-publico` es un sitio 100% estático (Quartz 5 horneado por `publica.py`, desplegado en
Vercel sirviendo `public/`). Ya tiene dos piezas dinámicas que marcan los patrones a seguir:

- Funciones serverless de Vercel en `api/` (`pregunta.js`, con test `reserva.test.js`).
- Componentes interactivos internos: `quartz/components/chat-publico.tsx` +
  `chat-publico.inline.ts`, registrados a mano en
  `quartz/plugins/loader/config-loader.ts` (`loadQuartzLayout`, ~línea 712) en
  `defaultLayout.afterBody` y replicados a los layouts por tipo.

## Objetivo

Que un visitante pueda registrarse y, una vez dentro:

1. Guardar su cartera: posiciones (símbolo, nº de acciones, precio medio de compra) con
   valoración a precio de cierre diario y P&L.
2. Guardar artículos como favoritos y verlos en su página.

## Decisiones (tomadas con Carlos)

- **Backend: Supabase** (Auth + Postgres en un servicio, región EU, plan gratuito). El sitio
  sigue siendo estático; todo lo dinámico es JS de navegador contra Supabase. No hay backend
  propio nuevo.
- **Precios: cierre diario de Stooq** (CSV gratuito, sin API key) a través de una Supabase Edge
  Function que hace de proxy CORS y caché de 24 h.
- **Alcance MVP**: registro/login/reset por email+contraseña, CRUD de cartera, favoritos, borrado
  de cuenta (RGPD). Fuera: login social, perfiles, gráficos, alertas, tiempo real.
- **Entrega**: spec + plan en `docs/`, commit, y OpenCode en Hy3 ejecuta el plan.

## Arquitectura

```
navegador (sitio estático)
  ├─ supabase-js (vía esm.sh) ──► Supabase Auth (email+password, confirmación por email)
  ├─ supabase-js ──► Postgres (posiciones, favoritos) con RLS: user_id = auth.uid()
  └─ fetch ──► Edge Function `precios` ──► Stooq CSV
                     └─ caché en tabla precios_cache (TTL 24 h)
  Edge Function `borrar-cuenta` (service key) ──► borra usuario y sus filas en cascada
```

### Componentes nuevos (patrón chat-publico)

- `cuenta.tsx` / `cuenta.inline.ts` — solo se pinta en slug `cuenta`. Registro, login,
  "olvidé mi contraseña". Con sesión: email, cerrar sesión, borrar cuenta.
- `cartera.tsx` / `cartera.inline.ts` — solo en slug `mi-cartera`. Tabla CRUD de posiciones,
  valoración con cierre y P&L, lista de favoritos. Sin sesión: aviso y enlace a `/cuenta`.
- `guardar.tsx` / `guardar.inline.ts` — botón "Guardar" en páginas de contenido (toggle en
  `favoritos`). Solo visible con sesión.
- Config pública: `quartz/static/supabase-config.js` define `window.CEREBRO_SUPABASE =
  { url, anonKey }`. La anon key es pública por diseño (la seguridad es el RLS); se commitea.
- Enlace "Mi cuenta" en la barra de navegación de `quartz/components/Body.tsx`.
- Páginas `content/cuenta.md` y `content/mi-cartera.md`: frontmatter + texto breve; el
  componente se pinta sobre ellas.

### Base de datos

```sql
posiciones(
  id uuid pk default gen_random_uuid(),
  user_id uuid references auth.users on delete cascade,
  simbolo text not null,           -- símbolo Stooq, p.ej. aapl.us, san.mc
  acciones numeric not null check (acciones > 0),
  precio_medio numeric not null check (precio_medio >= 0),
  creado timestamptz default now(),
  unique(user_id, simbolo)
)
favoritos(
  user_id uuid references auth.users on delete cascade,
  slug text not null,
  titulo text not null,
  creado timestamptz default now(),
  pk(user_id, slug)
)
precios_cache(
  simbolo text pk,
  precio numeric not null,
  fecha date not null,
  actualizado timestamptz not null default now()
)
```

El CSV de Stooq no trae divisa (se infiere del sufijo del símbolo si algún día hace falta); la
tabla no la guarda.

RLS activado en `posiciones` y `favoritos`: políticas `user_id = auth.uid()` para
select/insert/update/delete. `precios_cache` sin RLS de lectura anónima NO: solo la escribe/lee
la edge function con service key (sin políticas = nadie con anon key accede).

### Edge Function `precios`

- POST `{ "simbolos": ["aapl.us", ...] }` (máx. 50).
- Para cada símbolo: si `precios_cache` tiene fila con `actualizado > now() - 24h`, la sirve.
- Si no: GET `https://stooq.com/q/l/?s=<simbolo>&f=sd2t2ohlcv&h&e=csv`, parsea CSV, upsert en
  caché. Símbolo sin datos (Stooq devuelve "N/D") → `{ error: "sin datos" }` para ese símbolo.
- Respuesta: `{ "precios": { "aapl.us": { precio, fecha }, ... } }`; símbolo sin datos →
  `{ "error": "sin datos" }` en su entrada, y caché caducada servida por caída de Stooq lleva
  `"caducado": true`.
- Autenticación: exige JWT de usuario (verify_jwt), así el anon key no la convierte en proxy
  abierto de Stooq.

### Edge Function `borrar-cuenta`

- POST con JWT del usuario. Verifica el JWT, extrae `sub`, y con la service key llama a
  `auth.admin.deleteUser(sub)`. Las filas caen por `on delete cascade`.
- Respuesta 200 `{ ok: true }`; el cliente hace `signOut()` y redirige a `/`.

## Flujos

**Registro**: email + contraseña (mín. 8) → Supabase envía email de confirmación → al confirmar
vuelve a `/cuenta` ya con sesión. Mientras tanto la página dice "revisa tu correo".

**Valoración**: `cartera.inline.ts` lee las posiciones, pide los símbolos a `precios`, calcula
por posición `valor = acciones × precio_actual` y `pnl = (precio_actual − precio_medio) ×
acciones`, y totales. Si un símbolo no tiene precio se muestra "—" en esa fila, no se rompe la
tabla. Se muestra la fecha del cierre usado.

**Guardar artículo**: botón en cada página de contenido; toggle insert/delete en `favoritos`
con `slug = location.pathname` y `titulo = document.title`.

## Manejo de errores

- Sesión caducada/ausente en `/mi-cartera` → mensaje + enlace a `/cuenta` (no redirect ciego).
- Stooq caído → la función sirve la última caché aunque esté caducada y lo marca
  (`caducado: true`); si no hay caché, ese símbolo sale con error.
- Respuesta no-200 de Supabase en cualquier operación → mensaje legible en su sitio (patrón
  `chat-error` / `--aviso`), nunca pantalla en blanco.
- Validación en cliente (acciones > 0, precio ≥ 0, símbolo `[a-z0-9.]{1,12}`) Y constraints en
  DB. La función valida también su entrada.

## RGPD

- Datos: email (auth) + posiciones + favoritos. Responsable: el autor del sitio.
- `content/aviso-legal.md` gana un párrafo: qué se guarda, dónde (Supabase, UE), para qué, y
  cómo borrarlo todo (botón "Borrar mi cuenta" en `/cuenta`, efectivo inmediato).
- Confirmación de email = consentimiento verificable de alta.

## Estilo

Los componentes usan solo las variables CSS vivas del sitio (`--bronce`, `--hueso`,
`--catodo`, `--condensada`, `--prosa`, `--datos`, `--aviso`), igual que `chat-publico.tsx`. Ni
un hex nuevo. Textos en español.

## Testing

- `supabase/functions/precios/test.ts`: test de Deno con `fetch` mockeado (parseo CSV, caché,
  símbolo sin datos, entrada inválida). Es el único chequeo automático nuevo.
- Checklist manual de flujos (en el plan): registro → confirmación → login → CRUD cartera →
  valoración → guardar/quitar favorito → borrar cuenta.

## Fuera de scope (añadir cuando se pida)

Login social, perfiles, gráficos de evolución, alertas, dividendos, multi-divisa con
conversión, importación CSV.
