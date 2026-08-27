---
title: "Reparto de trabajo — las tres capas del Cerebro (Claude · Kimi · ZenMux/OpenRouter)"
tipo: sintesis
tags: [sistema, coste, kimi, openrouter, zenmux, infraestructura, division-del-trabajo]
fecha: 2026-07-26
fuentes: []
estado: historico
---

# Reparto de trabajo — las tres capas del Cerebro (Claude · Kimi · ZenMux/OpenRouter)

> **Histórico** (2026-07-27): reparto vigente en [[reparto-de-modelos]].

> **SUPERSEDED (2026-07-27).** La política vigente es [[reparto-de-modelos]] — cuatro capas con
> cascada, OmniRoute como capa mecánica primaria y un router único (`scripts/destila`). Esta página se
> conserva como histórico: describía un routing que el código no ejecutaba (ZenMux nació roto, Kimi
> llevaba días caído por un bug del gate de cuota y OmniRoute no existía en la doctrina).

Política operativa (2026-07-23; capa mecánica actualizada 2026-07-26 con ZenMux) del reparto de
trabajo en **tres capas**. Extiende y **supersede** el plan
binario Claude↔Kimi de 2026-07-21 (que además apuntaba al endpoint equivocado). Principio rector, en
palabras de Carlos: **Claude es el cerebro definitivo; Kimi es el punto intermedio de razonamiento;
la capa gratuita (ZenMux, con OpenRouter de respaldo) es la mano de obra mecánica.**

## Las tres capas

| Capa | Motor | Territorio |
|------|-------|-----------|
| **1. Cerebro definitivo** | Claude (Opus/Sonnet/Haiku, Anthropic) | Auditoría final, interconexión (wikilinks/tensiones), resolución de contradicciones, y todo lo que Kimi marque "necesita comprobación". **Único que toca perfil/.** Opus solo cuando de verdad se requiere. |
| **2. Trabajador de razonamiento** | **Kimi K3** (`api.kimi.com/coding`, `k3`) | Todo lo ex-Sonnet **que requiere juicio/razonamiento**: borrador de tesis fundamental (Claude audita), editor-jefe (en prueba), squads, verificador (a probar), ejecutor de rutinas, veredicto. **Puede escribir en el vault** y tocar rutinas de decisión/predicción. Lee `raw/` + `wiki/` — **todo menos `perfil/`.** |
| **3. Mano de obra mecánica** | **ZenMux** (`z-ai/glm-4.7-flash-free`, gratis) → respaldo **OpenRouter** (`:free`) | Destilado/parseo/dedup **sin razonamiento**. ZenMux primero (sin tope diario documentado, 200K de contexto); si falla (rate-limit/error) entra OpenRouter (50–1000 req/día). Kimi le come el territorio semi-cognitivo a ambos. |

**Frontera de decisión (router):**
1. ¿Requiere juicio/razonamiento? **No →** ZenMux **→** si falla, OpenRouter **→** si falla, subagente
   Anthropic. **Sí →** Kimi (si hay cuota) **→** si no, Claude.
2. Mientras haya cuota semanal de Kimi, **preferir Kimi**. Fuente de verdad de "cuánta cuota queda": el
   ledger de coste (`scripts/ledger_de_coste.py` → línea `Kimi … peticiones`).
3. **Fallback cuando Kimi no puede delegar** (código ≠ 0): bajo razonamiento y caro → OpenRouter; con
   razonamiento y barato → subagente Anthropic.
4. **Cuota:** primero-que-llegue; al agotarse, fallback. Sin reservas por ahora; se ajusta viendo el ledger.

## Config verificada (2026-07-23)

- Suscripción **Kimi Code**, plan **Moderato**. Key `sk-kimi-…` en `~/.config/kimi/key` (600, fuera del repo).
- Endpoint **`https://api.kimi.com/coding`** (Anthropic-compat en `/v1/messages`). **No** `api.moonshot.ai`.
- Modelo **`k3`**, **256K** de contexto en Moderato. Es modelo de razonamiento (devuelve `thinking`).
- Límite: **~2.048 peticiones/semana**, 30 concurrentes (`429` al pasarse). Umbral operativo conservador:
  `KIMI_LIMITE_SEMANAL=1500` (colchón: una invocación agéntica gasta varias peticiones internas).

## ZenMux — capa mecánica primaria (config verificada 2026-07-26)

- Agregador con **endpoint Anthropic-compatible** (`https://zenmux.ai/api/anthropic`). Key `sk-ai-v1-…`
  en `~/.config/zenmux/key` (600, fuera del repo). De los 145 modelos del catálogo, **3 son gratis**:
  `z-ai/glm-4.7-flash-free` (200K, razona — el caballo de batalla), `z-ai/glm-4.6v-flash-free` (con
  visión) e `inclusionai/ling-3.0-flash` (262K).
- **OJO Ling:** exige saldo > 0 en la cuenta (error 402 `reject_no_credit`, medida anti-abuso). Si la
  cuenta nunca ha cargado crédito, `zenmux-destila` lo auto-descarta como fallback y degrada limpio.
- Sin tope diario documentado (a diferencia de OpenRouter `:free`, 50–1000 req/día) → por eso es la
  capa mecánica **primaria** y OpenRouter queda de respaldo.
- Primitivas en `scripts/zenmux/` (symlink a `~/.local/bin/`): `zenmux` (sesión/wrapper, mismo patrón
  que `openrouter`: `MAX_THINKING_TOKENS=0`, `ANTHROPIC_API_KEY=""`, `CLAUDE_CODE_AUTO_COMPACT_WINDOW=200000`)
  y `zenmux-destila` (mismos `--tipo` que `openrouter-destila`; cadena GLM → Ling → exit≠0).
- **Router mecánico** (en `scripts/kimi/kimi-destila`): los tipos `datos|inventario|entidades|tldr`
  van **ZenMux primero, OpenRouter de respaldo** (automático, con stdin materializado para que el
  respaldo no reciba entrada vacía). `--openrouter` explícito sigue saltando directo a OpenRouter.
- Guardarraíl de privacidad: el wrapper exporta `CEREBRO_ZENMUX=1` y el hook
  `scripts/hook_bloquea_perfil_en_kimi.py` veta `perfil/` igual que con Kimi.
- Trazabilidad: las páginas de fuente destiladas por esta capa llevan `destilado_por: zenmux` en el
  frontmatter (u `openrouter` si acabó entrando el respaldo).
- Verificado en vivo 2026-07-26: destilado real con GLM (tldr de texto ficticio, correcto), cadena de
  fallback GLM-roto → Ling-402 → exit 1, y router `kimi-destila --tipo tldr` → ZenMux, exit 0.

## Cómo se invoca (handoff CLI, nunca subagente)

Límite técnico: dentro de una sesión el `ANTHROPIC_BASE_URL` es **global al proceso** → Kimi **no** puede
ser un subagente del Agent tool junto a Claude. Se invoca por **handoff CLI (Bash)**, igual que OpenRouter.
Primitivas en `scripts/kimi/` (symlink a `~/.local/bin/`):

```
kimi                                  # sesión interactiva completa en k3
kimi-tarea "instrucción…"             # delega UNA tarea de razonamiento; resultado por stdout
cat texto.txt | kimi-destila --tipo carta   # destila texto público -> resumen estructurado
kimi-cuota                            # peticiones usadas/limite esta semana (gate; exit 3 si agotada)
```

- `kimi-tarea` y `kimi-destila` están **gated** por `kimi-cuota` y **registran** cada invocación en
  `~/.config/kimi/requests.jsonl` (lo lee el ledger). Salen con código ≠ 0 si no pueden delegar → el
  llamante hace fallback según la frontera de arriba.
- Arranque **acotado** (tareas de un tiro) para estirar la cuota; se suelta cuerda hacia runs agénticos
  según el ledger muestre holgura.

## Guardarraíl de privacidad (regla dura, mecanizada)

**Nunca** pasar a Kimi nada de `perfil/` (cartera, objetivos, decisiones, importes en €). Todo lo demás
(`raw/` + `wiki/` no-perfil) sí puede viajar a Moonshot. **Mecanizado**: el hook
`scripts/hook_bloquea_perfil_en_kimi.py` (PreToolUse sobre Read/Grep/Glob) **deniega** cualquier acceso a
`perfil/` cuando el proceso corre bajo un proveedor externo (`CEREBRO_KIMI=1` o `CEREBRO_ZENMUX=1`, que
exportan los wrappers). No-op en sesiones
Claude normales. Verificado en vivo: una sesión `kimi` no puede leer `wiki/perfil/cartera-actual.md`.

## Red de verificación (relajada)

Carlos trata a k3 como ~Sonnet (razona de forma cercana). Por tanto **no** hay capa extra de re-verificación
Anthropic obligatoria por el hecho de ser Kimi: su output recibe el mismo trato que el de Sonnet en el
proceso normal del equipo. Escalada a **Opus solo cuando de verdad se requiere**. Se mantiene: lo que Kimi
auto-marque como "necesita comprobación de Claude" escala.

## Incidente — ciclo de facturación agotado sin aviso (2026-07-23)

El gate `kimi-cuota` (contador local semanal) dio "adelante" (3/1500) mientras la suscripción Kimi Code ya
había agotado su **ciclo de facturación real** (`kimi -p` devolvió 403 "reached your usage limit for this
billing cycle"). El contador local solo cuenta invocaciones de `kimi-tarea`/`kimi-destila`; una invocación
`kimi -p` directa (o una sesión interactiva `kimi` completa, que gasta muchas peticiones internas) no deja
rastro ahí. Detalle en la memoria de sesión `feedback-kimi-cuota-gate-enganoso`.

**Mecanizado (mismo día):** `scripts/kimi/_kimi_comun.sh` añade un **sentinel de ground-truth**
(`~/.config/kimi/ciclo_agotado`) que se activa en cuanto CUALQUIER punto de entrada (`kimi -p` directo,
`kimi-tarea`, `kimi-destila`) detecta el texto del 403 real en la respuesta. Con el sentinel activo:
- `kimi-cuota` reporta "0/0 (ciclo agotado…)" y sale con código 3 → `kimi-tarea`/`kimi-destila` hacen
  fallback automático sin gastar ninguna llamada de red.
- `kimi -p` directo (headless) se bloquea igual, en el punto común por el que pasan todos los caminos.
- `kimi` interactivo solo AVISA (no bloquea) — es la sesión que arranca Carlos a mano.
- El ledger (`scripts/ledger_de_coste.py`) muestra "CICLO DE FACTURACIÓN AGOTADO desde…" en vez de la
  cuenta local cuando el sentinel está activo.
- Backoff de 24h (`KIMI_BACKOFF_HORAS`): pasado ese tiempo se permite UNA sonda real; si vuelve a dar 403,
  el sentinel se renueva solo. Borrar el fichero fuerza un reintento inmediato.

**Sentinel armado ahora mismo (2026-07-23 20:28 UTC)** con la información ya confirmada de que el ciclo
está agotado — no se espera a que otra llamada lo redescubra. **Pendiente de Carlos:** comprobar en el
dashboard de Kimi Code la fecha real de renovación del ciclo (mensual, no semanal) para ajustar el backoff
si hace falta, y decidir si esperar al reset o ampliar el plan.

## Reducir el consumo por llamada (2026-07-23, mismo incidente)

El sentinel de arriba corta la sangría cuando ya se ha agotado. Esto va a la causa: por qué una tarea
nominal gasta más peticiones reales de las que parece.

**Hallazgo:** `kimi-tarea` (antes de este cambio) invocaba `kimi -p` **sin** `--disallowedTools` — con
herramientas habilitadas, una sola llamada "de un tiro" puede convertirse en un bucle agéntico de varios
turnos internos (cada uno gasta una petición contra el ciclo de facturación), aunque el registro local solo
anote 1 línea. El propio comentario de `kimi_semana()` en `ledger_de_coste.py` ya lo advertía ("es un
FLOOR: un run agéntico puede gastar varias peticiones internas") — pero nada lo evitaba por defecto.

**Cambios en `scripts/kimi/{kimi-tarea,kimi-destila,_kimi_comun.sh}`:**
1. **Sin herramientas por defecto.** `kimi-tarea` ahora pasa `--disallowedTools` igual que `kimi-destila`
   salvo que se pida `--agente` explícitamente. Un turno = una petición real, en el caso común (redactar,
   resumir, comparar — todo lo que se usa hoy). `--agente` queda para cuando de verdad haga falta que Kimi
   escriba en el vault (Fase 3, migración de roles) — decisión consciente, no el camino por defecto.
2. **`--lote` en ambas primitivas**: varias tareas/documentos independientes **en una sola llamada**, con
   delimitadores (`===TAREA N===` / `## ARCHIVO: nombre`) para separar las respuestas. N tareas → 1
   petición en vez de N. Uso obligatorio cuando el llamante tiene 2+ documentos/tareas del mismo tipo listos
   a la vez (ver ejemplos en `.claude/skills-cerebro/extraccion-de-fuentes.md` y el flujo de bandeja de
   entrada Cobas/Azvalor/Horos en `CLAUDE.md`).
3. **Caché de contenido** (`~/.cache/cerebro-kimi/`, clave = hash de tipo+contexto+texto): repetir
   exactamente la misma llamada (reintento tras un fallo, reingesta de una fuente ya destilada, el mismo
   lote pendiente relanzado) se sirve del disco, **0 peticiones**. Nunca se cachea en modo `--agente`
   (puede tener efectos secundarios; repetir la respuesta sin repetir el efecto sería incorrecto). Las
   peticiones evitadas se registran en `~/.config/kimi/cache_hits.jsonl` (no cuentan contra la cuota) y el
   ledger las muestra como línea "Kimi (caché)".
4. Límite práctico de `--lote`: el texto combinado de los documentos pendientes (los que no están ya en
   caché) sigue bajo el tope de 300.000 caracteres del argumento `-p`; si un lote lo supera, dividirlo en
   grupos más pequeños (mensaje de error explícito, no falla en silencio).

**Qué NO cambia:** el guardarraíl de privacidad (`perfil/` vetado, hook mecanizado), el router de la
frontera de decisión, ni la fase de despliegue (Fase 1 local sigue siendo lo único activo).

## Estado de despliegue

- **Fase 1 (local) — HECHA (2026-07-23):** primitivas, gate de cuota, hook de privacidad, ledger, esta
  política, y el sentinel de ciclo de facturación (incidente arriba).
- **Fase 2 (rutinas cloud) — HECHA de facto (2026-07-25), sin sonda separada.** No hizo falta un `curl` de
  prueba: el diseño de FASE -1 en las rutinas migradas es "Kimi primero, código de salida ≠0 → fallback
  automático a `ejecutor-sonnet`" — si el entorno del run programado no tiene salida a `api.kimi.com` o no
  encuentra `kimi-tarea` en el PATH, la llamada Bash simplemente falla y el fallback ya diseñado se activa sin
  regresión funcional (mismo resultado que hoy, solo sin el ahorro). El primer run real de cada rutina migrada
  ES la sonda — sin riesgo porque el downside ya está cubierto por la doctrina de degradación elegante.
- **Fase 3 (migración de roles Sonnet, uno a uno) — EN MARCHA (2026-07-25).** Migradas a "Kimi primero, Sonnet
  de respaldo": **Elena** (newsletters, full run — cero `perfil/`), **Marco** (YouTube, full run — cero
  `perfil/`), **Inés** (estrategia, full run — su único puntero a `cartera-actual` es incidental, degrada sin
  romper), **Sofía/CKO** (knowledge-ops L-X-V-S-D, cero `perfil/`; jueves sigue sin delegar por diseño previo),
  **Carlos Bárez — solo el borrador de tesis** (negocio/moat/valoración/riesgos, cero `perfil/`; el párrafo de
  encaje con cartera y el contraste anti-anclaje los sigue escribiendo el orquestador en Claude, nunca Kimi).
  **NO migradas, con motivo — no es pendiente, es exclusión deliberada:** Daniel (CRDSO riesgo), veredicto
  semanal y gestor de cartera. Se auditaron uno a uno y en los tres el `perfil/` (posiciones, €, objetivos,
  diario de decisiones) es el INSUMO CENTRAL del análisis, no un dato incidental — "pre-filtrar un resumen"
  para pasárselo a Kimi violaría igualmente la regla dura ("nunca `perfil/` a Kimi" es sobre el DATO, no sobre
  el mecanismo de lectura: un resumen con posiciones/€ pegado en el prompt expone lo mismo que dejarle leer el
  archivo). Quedan en Sonnet vía `ejecutor-sonnet` indefinidamente salvo que Carlos decida explícitamente
  relajar el guardarraíl para estas tres. editor-jefe/verificador/squads: sin migrar todavía (siguiente tanda).

Ver también: [[equipo-agentes]] · [[estado-del-sistema]] · [[reparto-openrouter-claude]]
· [[auditoria-kimi-2026-07-27]] — esta página aporta el **detalle técnico** del mismo incidente de ciclo de
facturación agotado que allí figura como hallazgo P0 resuelto
