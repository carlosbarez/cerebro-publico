# BLOQUEOS — despliegue de registro-cartera (plan 2026-08-30)

Estos pasos quedaron PENDIENTES al ejecutar el plan porque la CLI de Supabase
(`supabase` 2.116 vía npm) no tiene access token (PAT) en este entorno:
`~/.supabase/access-token.json` no existe y `supabase login` es interactivo.
Sin PAT, `supabase link`, `db push` y `functions deploy` fallan con
"Access token not provided". No se reintentó en bucle: se saltaron y se anotan
aquí para que Carlos los ejecute con su cuenta.

Proyecto ya creado (Task 0): `cerebro-publico`, región EU.
Project ref (de la URL del dashboard): `bkuwcahxfmmksfuqkrdi`.
`quartz/static/supabase-config.js` YA tiene url + anon key reales (no tocar).

## 1) Login / enlazar (necesita PAT)

```bash
supabase login                 # abre navegador; pega el PAT de https://supabase.com/dashboard/account/tokens
supabase link --project-ref bkuwcahxfmmksfuqkrdi
```

## 2) Aplicar la migración (Task 1)

```bash
supabase db push
```

Verificar en el dashboard (Table Editor) que existen `posiciones`, `favoritos` y
`precios_cache`, y que cada una tiene RLS activado. O:

```bash
supabase db query "select tablename, rowsecurity from pg_tables where schemaname = 'public';"
```

## 3) Desplegar edge function `precios` (Task 2)

```bash
supabase functions deploy precios
```

Comprobar que exige JWT (sin token → 401):

```bash
curl -i -X POST https://bkuwcahxfmmksfuqkrdi.supabase.co/functions/v1/precios \
  -H "apikey: <anon-key>" -H "Content-Type: application/json" \
  -d '{"simbolos":["aapl.us"]}'
# Esperado: 401
```

## 4) Desplegar edge function `borrar-cuenta` (Task 3)

```bash
supabase functions deploy borrar-cuenta
```

Comprobar 401 sin JWT:

```bash
curl -i -X POST https://bkuwcahxfmmksfuqkrdi.supabase.co/functions/v1/borrar-cuenta \
  -H "apikey: <anon-key>"
# Esperado: 401
```

## 5) Comprobación 200 de `precios` (tras Task 5, con un usuario de prueba)

Desde la consola del navegador en `/cuenta` (sesión iniciada):

```js
;(await supabase.auth.getSession()).data.session.access_token
```

Luego:

```bash
curl -X POST https://bkuwcahxfmmksfuqkrdi.supabase.co/functions/v1/precios \
  -H "Authorization: Bearer <jwt>" -H "Content-Type: application/json" \
  -d '{"simbolos":["aapl.us"]}'
# Esperado: {"precios":{"aapl.us":{"precio":...,"fecha":"..."}}}
```

## Notas (no bloquean, pero conviene saberlas)

- `npm run check` (tsc + prettier): **tsc pasa**; prettier --check falla en ~1615
  archivos de TODO el repo (estado preexistente, no introducido por este plan:
  incluye el propio `docs/superpowers/plans/2026-08-30-registro-cartera.md` y todo
  `content/`). Los archivos de este plan están formateados con prettier.
- El horneado completo (`npx quartz build`) falla en un archivo de contenido
  preexistente y ajeno a esta tarea: `content/empresas/am-rica-m-vil.md` tiene el
  frontmatter YAML roto (un `:` dentro de un valor). Los componentes de esta tarea
  SÍ se hornean y renderizan correctamente (verificado con un build mínimo:
  `id="cuenta"`, `id="cartera"`, `guardar-articulo` y `supabase-config.js` presentes).
- `deno.lock` se generó en la raíz al ejecutar los tests de `precios` (dependencias
  pinneadas de la edge function). No se commiteó; útil para desplegar de forma
  reproducible.
