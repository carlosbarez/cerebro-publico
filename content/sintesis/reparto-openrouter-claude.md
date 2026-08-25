---
title: "Reparto de trabajo Claude ↔ OpenRouter — el cerebro y el brazo ejecutor"
tipo: sintesis
tags: [sistema, coste, openrouter, infraestructura, division-del-trabajo]
fecha: 2026-07-21
fuentes: []
estado: historico
---

# Reparto de trabajo Claude ↔ OpenRouter — el cerebro y el brazo ejecutor

> **Histórico** (2026-07-27): reparto vigente en [[reparto-de-modelos]].

> **SUPERSEDED (2026-07-27).** La política vigente es [[reparto-de-modelos]] — cuatro capas con
> cascada, OmniRoute como capa mecánica primaria y un router único (`scripts/destila`). Esta página se
> conserva como histórico: describía un routing que el código no ejecutaba (ZenMux nació roto, Kimi
> llevaba días caído por un bug del gate de cuota y OmniRoute no existía en la doctrina).

> **ESTADO (2026-07-26): página histórica.** OpenRouter ya **no** es el brazo mecánico primario: desde el
> 2026-07-26 es el **respaldo** de ZenMux (`z-ai/glm-4.7-flash-free`), y Kimi se reactivó el 2026-07-23 como
> capa media de razonamiento (`scripts/kimi/`). La política vigente de las tres capas está en
> [[reparto-kimi-claude]]. Esta página queda como referencia del patrón y de los límites del tier `:free`.

Política operativa (2026-07-21) para usar un modelo **`:free` de OpenRouter** como *músculo barato* del
Cerebro sin degradar el juicio. Mismo principio rector que con Kimi (aparcado, ver
`_aparcado/kimi-integracion/README.md`): **Claude es el cerebro de todo; el brazo ejecutor es músculo**.
Extiende la regla de coste de `CLAUDE.md` — el lector barato lee el crudo y lo descarta; el
hilo principal (Claude) solo recibe lo destilado y ejerce el juicio.

## Por qué OpenRouter y no Kimi

Kimi K3 (Moonshot) quedó aparcado el 2026-07-21: su suscripción gratuita no permite subir de plan y la API
de pago devuelve 401. OpenRouter cubre el mismo hueco ("brazo ejecutor" barato) **sin coste**, usando un
modelo con sufijo `:free` de su catálogo en vez de un modelo de pago. Si Kimi se reactiva en el futuro,
ambos brazos pueden convivir (mismo patrón, distinto proveedor).

## Cómo se activa

Comando `openrouter` (instalado en `~/.local/bin/openrouter`, fuente versionada en
`scripts/openrouter/openrouter`) → abre una sesión de Claude Code apuntando a la "piel Anthropic" de
OpenRouter (`https://openrouter.ai/api`, que acepta peticiones nativas de la Anthropic Messages API). El
`claude` normal **no se toca**: sigue en Anthropic con el enrutado por tiers (Opus/Sonnet/Haiku) y las
rutinas programadas intactos. La API key vive en `~/.config/openrouter/key` (fichero `600`, **fuera** del
repo del vault).

```
openrouter                       # sesión interactiva gratis
openrouter -p "tarea puntual"     # delegación headless de un solo tiro (el cerebro llama al brazo)
```

**Modelo por defecto**: `nvidia/nemotron-3-ultra-550b-a55b:free` — 1M de contexto (elegido para poder
tragarse PDFs/transcripciones completos, igual que kimi-k3). El catálogo `:free` de OpenRouter cambia con
el tiempo; para verificar qué sigue disponible:
```bash
curl -s https://openrouter.ai/api/v1/models | jq '.data[] | select(.id | endswith(":free")) | .id'
```
Si el modelo por defecto desaparece del catálogo, cambiarlo con `OPENROUTER_MODEL=<otro-id:free> openrouter
...` o editando `scripts/openrouter/openrouter` (y reinstalando la copia en `~/.local/bin/`).

## El límite técnico que da forma a todo

Dentro de **una** sesión el endpoint es global al proceso: **no** se puede tener el hilo principal en
Anthropic y un subagente en OpenRouter *a la vez*. Los subagentes internos del equipo (`ejecutor-haiku`,
`recopilador-fundamental`, etc.) **no** se redirigen a OpenRouter automáticamente. Por tanto el reparto se
materializa de dos formas, ambas por **handoff de artefactos** (mismo patrón que con Kimi):

1. **Sesiones separadas** — Carlos trabaja el grunt-work en una sesión `openrouter` que deja el resultado
   como fichero intermedio (resumen, ficha, digest en bruto) en `raw/_inbox/`, `scratchpad` o una nota
   borrador; luego una sesión `claude` (Opus) lo recoge, lo cruza con el corpus y la cartera, y escribe la
   página durable.
2. **Delegación headless** (cableada) — desde una sesión `claude`, el cerebro extrae el crudo a texto por
   Bash y lo destila con la primitiva **`openrouter-destila`** (`~/.local/bin/openrouter-destila`):
   ```
   cat scratchpad/fuente.txt | openrouter-destila --tipo carta --contexto "Carta 2019 de X"
   #  --tipo: generico | carta | newsletter | video | datos
   ```
   El texto se lee de **stdin/fichero** en el script y se embebe en el propio prompt (ver "Detalle técnico"
   más abajo) → no entra en el contexto de Claude ni dispara el hook de crudo del hilo principal; Claude
   solo recibe el destilado por stdout. Si sale con código ≠ 0 (sin key / documento >300k caracteres /
   rate-limit / error de API) → **fallback** al subagente Anthropic. Enganchada en: la
   skill de extracción (`.claude/skills-cerebro/extraccion-de-fuentes.md`), `/cerebro-pulso` (`--tipo video`) y el flujo de ingesta de
   `CLAUDE.md`. **Solo local**: el binario no existe en las rutinas cloud (siguen 100% en Anthropic).

## Detalle técnico verificado (2026-07-21, sesión de instalación)

Dos fallos reales encontrados al probar de punta a punta con `nvidia/nemotron-3-ultra-550b-a55b:free`, y
cómo quedaron resueltos en `scripts/openrouter/openrouter` y `scripts/openrouter/openrouter-destila`:

1. **Bloque `thinking` con `signature` vacía → "API returned an empty or malformed response (HTTP 200)"**.
   Los modelos `:free` que razonan por defecto (la mayoría del catálogo gratuito, no solo este) devuelven un
   bloque `thinking` con `signature:""` cuando Claude Code no pide explícitamente desactivarlo; Claude Code
   no sabe validar ese bloque y la sesión falla. **Fix**: `export MAX_THINKING_TOKENS=0` en el wrapper
   `openrouter` (confirmado por curl directo contra `https://openrouter.ai/api/v1/messages`: con
   `"thinking":{"type":"disabled"}` en el body el bloque desaparece).
2. **El modelo alucina que debe BUSCAR un fichero en el repo** en vez de destilar el texto recibido —
   pasó incluso con el texto correctamente adjunto por stdin, probablemente porque la sesión carga
   `CLAUDE.md` (que describe el flujo `raw/` → `wiki/`) y un modelo `:free` más débil se confunde y decide
   explorar en vez de simplemente responder. **Fix doble** en `openrouter-destila`: (a) el documento va
   **embebido literalmente en el prompt** (delimitado por `<<<DOCUMENTO>>>`/`<<<FIN_DOCUMENTO>>>`), no solo
   por stdin — elimina la ambigüedad de si "hay texto adjunto"; (b) `--disallowedTools` bloquea
   Bash/Read/Glob/Grep/Write/Edit/WebFetch/WebSearch/Task/Agent/etc. — pase lo que pase, el modelo **no
   puede** ejecutar ninguna herramienta, solo responder en texto. Límite de tamaño: documento embebido en
   el argumento `-p` → tope de seguridad de 300.000 caracteres (ARG_MAX de macOS ~1MB incluyendo entorno);
   por encima, el script sale con código 2 y pide trocear o caer al fallback.

Validado con 3 destilados de prueba (Buffett/foso, Munger/inversión de problemas, Marks/riesgo) — resultado
denso, en español, sin alucinaciones, con enlaces a conceptos del cerebro cuando procede.

## Política de funciones (definida con Carlos, 2026-07-21) — la parte que importa

El reparto general (brazo/cerebro) se concreta en cuatro decisiones tomadas explícitamente con Carlos. El
principio que las une: **el ahorro nunca puede degradar en silencio una página durable ni una decisión.**

### 1. Alcance — qué se delega a OpenRouter
Las **cuatro** funciones se delegan al brazo ejecutor: **(a)** pulso/vídeos efímeros, **(b)** limpieza
mecánica de texto (parsear VTT, dedup, HTML de emails), **(c)** fichas de datos de empresa (rol del
`recopilador-fundamental`), **(d)** cartas de inversores. Siempre **solo fuentes públicas**, nunca `perfil/`.

### 2. Red de verificación — obligatoria para todo lo que ASCIENDE
La frontera de riesgo no es el tipo de fuente, es el **destino**:

- **Efímero / mecánico** (pulso que caduca, limpieza de texto) → destilado de OpenRouter **sin verificar**.
  Es contexto, caduca, y un error no envenena nada durable. Vía rápida.
- **Ascendente** (una carta que alimenta una página de concepto/inversor; una ficha de datos que sostiene
  una tesis o una decisión; cualquier material que suba a página durable) → **NO se firma nada durable a
  partir del destilado crudo de OpenRouter sin verificar**. Antes de escribir la página, un **subagente
  Anthropic verificador** re-lee el crudo y contrasta contra él las **cifras y las citas literales** que la
  página va a afirmar (los dos ítems que un modelo `:free` más fácilmente corrompe). Verificación
  **dirigida** (solo las aserciones que aterrizan), no un re-destilado completo.
  - **Independencia (regla de segundo orden)**: el verificador es **Anthropic**, nunca OpenRouter. El
    corrector no puede ser del mismo proveedor que el corregido, o la verificación es teatro.

### 3. Cuota y fallback
Carlos compró **10 USD de crédito** el 2026-07-21 → los modelos `:free` van a **1000 peticiones/día** (no 50)
de forma permanente, y hay **crédito de pago disponible** como palanca. Comportamiento al agotar cuota o
fallar el modelo (código ≠ 0):
- **Fallback automático al subagente Anthropic** — nunca bloquea el trabajo.
- **Si la tarea es muy grande** (un lote largo que dispararía coste de golpe en Anthropic) → **preguntar a
  Carlos primero** antes de volcar todo el lote al fallback de pago.
- El crédito de pago de OpenRouter puede usarse cuando aporte (p. ej. un modelo de pago mejor para una
  fuente crítica), a criterio del cerebro.

### 4. Trazabilidad + auditoría por muestreo
- **Trazabilidad**: toda **página de fuente** (`fuentes/`) cuyo destilado vino del brazo ejecutor lleva en su
  frontmatter `destilado_por: openrouter` (por defecto, ausencia = Anthropic/Claude). Las páginas durables
  aguas abajo enlazan a la fuente, así que la procedencia queda a un salto y es consultable por Dataview.
- **Auditoría**: la **CKO (Sofía Navarro)** revisa periódicamente una **muestra** de destilados marcados
  `openrouter` contra su crudo, para detectar deriva de calidad antes de que se acumule. Si aparece deriva,
  se estrecha el alcance (más funciones a verificación) o se cambia de modelo.

## Mapa por agente (repaso completo con Carlos, 2026-07-22)

Repaso de los 12 agentes/rutinas definiendo **fuente · modelo · encaje de OpenRouter**. Conclusión doble:
**ningún tier de modelo cambió** (el diseño ya estaba bien calibrado), y OpenRouter entra en **4 de 12** —
exactamente los que ingieren texto público a granel.

| # | Agente | Fuente | Modelo | OpenRouter |
|---|--------|--------|--------|------------|
| 1 | Elena Vega (newsletters) | Gmail (+ **BCE/FED/BLS primarias** desde 2026-07-22) | Sonnet | ✅ destila cuerpos de email (`--tipo newsletter`) |
| 2 | Marco Reyes (YouTube) | 6 canales vía yt-dlp | Sonnet | ✅ destila transcripciones (`--tipo video`) · **diario** |
| 3 | Carlos Bárez (fundamental) | MCP financieras + web | Datos Haiku · Tesis Sonnet | ✅ **screening ancho (Etapa 1)** sobre info pública + docs largos, ambos con red |
| 4 | Jorne (técnico) | `market_data.py` | Haiku | ❌ dato numérico + plantilla rígida |
| 5 | Inés (estratégica) | Informes ya destilados + macro | Sonnet | ❌ (se beneficia aguas arriba) |
| 6 | Daniel (CRDSO) | Vault + cuant propio | Sonnet | ❌ guardián del riesgo, fuente interna |
| 7 | Sofía (CKO) | Vault + web | Sonnet + Opus jueves | ✅ destila fuentes web (`defuddle`) + verificación |
| 8 | Elisa (CIO) | Informes del equipo | Opus | ❌ vértice de decisión |
| 9 | Gestor de cartera | `market_data.py` | Sonnet | ❌ |
| 10 | Sintetizador durable | Vault | Haiku | ❌ |
| 11 | Veredicto semanal (Brier) | `predicciones/` | Sonnet | ❌ |
| 12 | Mantenimiento semanal | Scripts | Haiku | ❌ |

**La regla que emerge del repaso** — OpenRouter entra si y solo si la tarea es *digerir texto público a
granel*. Queda fuera de: agentes de **dato/herramienta** (los `:free` fallan en tool-calls y el wrapper
desactiva tool-search → Jorne, el recopilador de Carlos Bárez), de **output rígido** (plantillas con reglas
duras), y de todo **juicio durable o decisión** (Inés, Daniel, Elisa).

### Caso especial: el screening de Carlos Bárez (decisión de Carlos, 2026-07-22)
La caza del viernes parte en dos por proveedor: **Etapa 1** (criba ancha de N nombres) la hace OpenRouter
sobre **info pública/web** —sin tocar las MCP financieras—, y **Etapa 2** (tesis) la hace Claude con las
fichas MCP precisas en Haiku. Guardarraíl obligatorio: el riesgo de un screener barato no es equivocarse en
voz alta, es **matar en silencio una buena empresa que Claude ya nunca vería** — por eso OpenRouter solo
descarta por **motivo objetivo y duro**, y todo caso límite **sube a Claude**. Descartes siempre al log.

## Cuota — detalle operativo

Con el crédito comprado, el límite de los modelos `:free` es **1000 peticiones/día** y **20/minuto**
(compartido entre TODOS los `:free` de la cuenta). Si `openrouter-destila` empieza a fallar en un lote, casi
siempre es el tope por minuto (esperar unos segundos) o el diario (caer al fallback sin reintentar en bucle),
no un error real.

## Qué va a OPENROUTER (brazo — mecánico, alto volumen, sin juicio durable, **fuentes públicas**)

- **Ingesta mecánica del crudo**: leer un PDF/EPUB/transcripción **completo** y devolver resumen estructurado
  (tesis, citas con página, datos).
- **Resumir newsletters y vídeos** (capa de [[misterpuertas-metodo|pulso]]): destilar la transcripción a un
  digest en bruto que Claude luego cruza con conceptos y cartera.
- **Recopilación de datos** (rol del `recopilador-fundamental`): reunir estados financieros, ratios, datos de
  mercado → **ficha de datos** compacta. Datos públicos, sin emitir tesis.
- **Búsqueda de información** y primer barrido web; limpieza/dedup de texto (p. ej. parsear `.vtt`).
- **Borradores de baja densidad** que después audita el editor jefe / Claude.

## Qué se queda en CLAUDE (cerebro — juicio, interconexión, escritura durable, evaluación)

- **Toda decisión de inversión** y su registro (`perfil/decisiones/`), **predicciones** (Brier) y
  **veredictos** — la rutina `cerebro-veredicto-semanal` es *escritor único*, sigue en Anthropic.
- **Auditorías** (`/cerebro-auditoria`), lint, resolución de contradicciones, y el **cableado e
  interconexiones** (wikilinks, tensiones entre fuentes) — el corazón "de segundo orden" del vault.
- **La tesis fundamental** (analista Carlos Bárez): el *juicio* es de Claude; solo la **ficha de datos**
  previa puede venir del brazo ejecutor.
- **Funciones de la CIO Elisa** (evaluar al equipo), **CRDSO/calibración**, **verificador adversarial**
  (refutar), **editor jefe** (estándar de densidad) — todo lo que valora calidad de decisión.
- Ascender cualquier cosa a **página durable** del wiki (la escritura final siempre la firma el cerebro).

## Guardarraíl de privacidad (regla dura)

Una sesión envía a su proveedor el contenido con el que trabaja. **Nunca** alimentar a OpenRouter nada de
`perfil/` — `cartera actual` (importes exactos en euros), `objetivos`, `decisiones`, ni datos
personales de Carlos. OpenRouter solo toca **fuentes públicas** (cartas, libros, transcripciones, datos de
mercado). El reparto brazo/cerebro coincide, cómodamente, con la frontera público/sensible: si la tarea
toca datos propios del operador, es de Claude por definición.

## Frontera en una línea

> Si la tarea **produce un artefacto intermedio a partir de material público** → OpenRouter.
> Si **decide, interconecta, evalúa, o escribe juicio durable / toca datos del operador** → Claude.

Ver también: [[equipo-agentes]] · [[estado-del-sistema]]
