# BLOQUEOS — despliegue de registro-cartera (plan 2026-08-30)

## Estado 2026-08-31: despliegue HECHO

Con PAT aportado por Carlos se completaron los pasos 1-4:

- `supabase link` al proyecto `bkuwcahxfmmksfuqkrdi`: OK.
- `supabase db push` (migración `20260830000000_registro_cartera.sql`): OK.
  Verificado con `db query --linked`: `cartera`, `posiciones`, `marcador`,
  `pulso`, `favoritos`, `precios_cache` existen, todas con RLS activado.
- `functions deploy precios` y `functions deploy borrar-cuenta`: OK.
- 401 sin JWT: `borrar-cuenta` OK; `precios` NO (ver incidencia 1, ya corregida
  y redesplegada: anónimo → 401, Bearer inválido → 401).

## Incidencia 1 (RESUELTA): verify_jwt no frena anónimos con publishable key

El gateway dejó pasar POST a `precios` con solo `apikey` (publishable key nueva)
y sin `Authorization`, pese a `verify_jwt = true` en config.toml y en el
servidor (comprobado vía Management API). Con `Authorization: Bearer basura`
sí rechaza. Es decir: con las claves nuevas, el gateway valida el JWT solo si
viene. Fix: verificación explícita del JWT en el código de `precios`
(`admin.auth.getUser`), mismo patrón que `borrar-cuenta`. Tests deno: 8/8 OK.

## Incidencia 2 (RESUELTA): Stooq cayó como fuente de datos → Yahoo Finance

`https://stooq.com/q/l/?s=aapl.us&f=sd2t2ohlcv&h&e=csv` dejó de devolver CSV:
devuelve HTML ("page does not exist") y `q/d/l` quedó tras un muro anti-bot
JavaScript. Fallaba tanto desde la red local como desde la edge function.

Fix (2026-08-31): fuente cambiada a Yahoo Finance
(`query1.finance.yahoo.com/v8/finance/chart/<SYM>`, sin key; exige User-Agent
de navegador, si no 429). Los símbolos canónicos siguen en formato Stooq
(`aapl.us`, `san.mc`); `simboloYahoo()` los mapea (`.us` se quita, resto en
mayúsculas). Verificado contra la API real: AAPL y SAN.MC devuelven precio y
fecha correctos. Tests deno: 9/9 OK.

## Paso 5 pendiente (necesita a Carlos): comprobación 200 de `precios`

Requiere un usuario registrado y confirmado. Lo más simple y además prueba
extremo a extremo la página /cuenta: registrarse en la web, y en la consola
del navegador con la sesión iniciada:

```js
;(await supabase.auth.getSession()).data.session.access_token
```

Luego:

```bash
curl -X POST https://bkuwcahxfmmksfuqkrdi.supabase.co/functions/v1/precios \
  -H "Authorization: Bearer <jwt>" -H "Content-Type: application/json" \
  -d '{"simbolos":["aapl.us"]}'
# Esperado: {"precios":{"aapl.us":{"precio":...,"fecha":"..."}}}
# (mientras Stooq siga caído: {"error":"sin datos"} por símbolo)
```

Ojo: el registro por API rechaza dominios `.invalid`; usar email real.

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
