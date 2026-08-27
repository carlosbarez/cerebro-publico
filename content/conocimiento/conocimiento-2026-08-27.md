---
title: "Informe de conocimiento — 2026-08-27 (Sofía Navarro, CKO) · jueves, meta-run"
tipo: sintesis
tags: [conocimiento, cko, 2026-08]
fecha: 2026-08-27
agente: sofia-navarro
---

# Informe de conocimiento — 2026-08-27 (Sofía Navarro, CKO) · jueves, meta-run

## Misión del día

Jueves: sin rotación de dominio propia (la cubre el meta-run). Cola `encargos.md` vacía de pendientes,
0 marcas `[CKO:]` en `wiki/actualidad/ estrategia/ analisis-fundamental/ riesgo/ cio/` desde el último run
(26-ago 11:45).

**Laguna elegida — y por qué esta**: el evento de arquitectura del conocimiento más grande de la semana es
el commit `aa29363` (25-ago 09:41, `Agente: ox-alpha`, *"wiki+lint: red neuronal densa — 135 páginas
débiles → 14; +1.400 wikilinks"*, **487 ficheros tocados**). Toca exactamente mi dominio (densidad y calidad
de la red de wikilinks) y **ya produjo una rotura medida**: el informe de riesgo de hoy ([[riesgo-2026-08-27]]
§0) documenta que `deriva_cartera.py` da pesos falsos desde ese commit. Pregunta falsable: **¿el pase mejoró
la conectividad neta del vault o introdujo ruido/roturas netas?**

Squad: **0 scouts**. Todo el hallazgo es `grep` + `git blame` reproducible sobre disco (14ª validación de
"pregunta simple, 0 scouts"). Sin verificación adversarial: no cambia el comportamiento de Carlos ni asciende
a página durable — es un hallazgo de integridad mecánica, no una tesis.

## Hallazgos

### 1 — 33 wikilinks mal formados en 16 ficheros, todos del commit `aa29363` (confianza ALTA)

Patrón: alias con espacio de sobra y la última letra de la palabra empujada fuera del cierre. El tokenizer
determinista de la **Fase 1** (texto plano a wikilink) partió palabras flexionadas y engulló puntuación
dentro del alias. Ejemplos verbatim (entre comillas para que el enlace no se evalúe):

- `wiki/perfil/cartera-actual.md` (5+): "meta-platforms pipe Meta Platform + s", "microsoft pipe Microsof
  + t", "qualcomm pipe Qualcom + m", "alphabet pipe Alphabe + t", "agnico-eagle-mines pipe Agnico Eagle
  Mine + s". **Esto es lo que rompe `deriva_cartera.py`** — su `filas_de_tabla` no parsea la celda. Ya lo
  tiene Daniel; lo que él no reporta es que **el mismo patrón está en otros 15 ficheros**.
- `wiki/industrias/mapa-de-industrias.md` (3 líneas de la tabla-hub): celdas de prosa corrompidas de
  verdad, no cosmética — "qualcomm pipe (Qualcom + m", una lista "Freeport, iShares Copper" con
  "rio-tinto pipe , Rio Tin + to" y "kazatomprom pipe , Kazatompr + om" incrustados, y un **doble pipe**:
  "alphabet pipe pipe Alphab + et, Meta, Amazon" con "microsoft pipe , Microso + ft".
- 6 páginas `fuentes/` durables (`investing-for-growth-smith`, `compounders-adquisitivos-req-y-speziale`,
  `ensayos-y-behavioural-investing` de Montier, `ensayos-trend-y-crisis-alpha` de Kaminski,
  `ensayos-emergentes` de Mobius, `momentum-tecnico-oneil-y-darvas`), `wiki/cio/propuestas-para-carlos.md`.
- El resto (`estrategia-2026-07-16/20`, `cio-2026-07-30/08-17`, `referencia/inventario-de-crudos`,
  `riesgo-2026-08-27` — donde Daniel cita la línea rota) son informes fechados: **no se tocan** (regla de
  evolución), pero cuentan para el recuento.

**A quién sirve**: Daniel (el alcance real son 16 ficheros, no solo `cartera-actual.md`) · Carlos Bárez
(dueño de `industrias/` y `fuentes/` — necesita corregir 8 de los 16) · Carlos/Elisa (decisión de gate,
hallazgo 2) · `cerebro-mantenimiento-semanal` (lint).

### 2 — Causa raíz doble

**(a) ox-alpha corre en el carril opencode, así que los seis hooks del harness NO se ejecutan para sus
escrituras** (memoria `feedback-los-hooks-no-viajan-de-harness`: *"opencode escribe con los seis
apagados"*). Así que `scripts/hook_bloquea_wikilinks_partidos.py` nunca vio el lote de 487 ficheros. El
hook es una red solo para quien escribe DENTRO del harness.

**(b) Aunque hubiera corrido, no cubre este patrón.** El hook comprueba: apertura sin cierre en la misma
línea, y mayúscula/espacio/guion-bajo en el **destino** (la parte antes del pipe). En los 33 casos el
destino está limpio (`meta-platforms`, `microsoft` — kebab correcto); el daño está en el **alias** (que el
hook permite que lleve cualquier cosa) y en el **carácter de palabra pegado tras el cierre**, que ningún
patrón vigilado captura. El doble pipe tampoco.

### 3 — Balance del pase (ser justo — sesgo de superviviente aplicado al juicio)

**Neto positivo donde no tocó prosa con nombres propios**: las 4 páginas-concepto nuevas (`hiperscalers`,
`restaurantes`, `cava-group`, `infraestructura-redes`) están limpias, con frontmatter `agente: ox-alpha`
correcto y wikilinks bien formados; el cableado sonda-ficha (Fase 3, 42 fichas) y el MOC `indice-sondas`
(122 entradas) no introdujeron roturas detectables por `mapa_vault.py`.

**El daño está concentrado en la Fase 1** sobre celdas de tabla y prosa que enumera empresas con
puntuación. Y un límite de cobertura no declarado en el commit: la **Fase 2 semántica** dependía de
embeddings `bge-micro-v2`, pero `mapa_vault.py` reporta **329/1123 páginas sin embedding** (todos los
pulsos y sondas recientes, varios `af-*`) — la Fase 2 saltó en silencio ~29% del vault. El commit dice
"grado menor-o-igual 3 a 14" pero `mapa_vault.py` sigue viendo **21 huérfanas** — métricas distintas, pero
la mejora real es menor que la titular.

## Knowledge-ops — jueves (sin dominio rotado)

Los tres verbos mecánicos del PASO 3 (`duplicidades`/`caducidad`/`enlaza`) **no se ejecutaron**: Kimi en
tope de ciclo 20/20 (hasta 2026-08-30T11:50) y el carril de pago (`prime/deepseek-v4-flash`) hace *timeout*
en lotes reales — medido hoy por Inés ([[estrategia-2026-08-27]]: `novedad` y `enlaza` exit 143) y por mí
el 26-ago. `[DEGRADADO: destila --tipo duplicidades exit 1 — Kimi TOPE 20/20]`, ídem `caducidad`, `enlaza`.
Sin sustituto manual hoy: **la misión ES una auditoría de conexiones/duplicidades** sobre el mayor lote de
wikilinks del mes, que es justo lo que esos verbos harían.

Sonda de viabilidad hecha ANTES de intentar el lote (`kimi-tarea --status` + ping trivial `prime-agent -nc`
que devolvió "OK" en menos de 20s): el gateway se recuperó del apagón total del 26-ago, pero el carril
sigue sin sostener un lote real. La sonda de 2 líneas evitó construir y perder un lote grande —
institucionalizar (meta, abajo).

## Calidad de fuentes

- **`prime/deepseek-v4-flash` (carril de pago mecánico)**: recuperado del apagón del 26-ago (3 modos de
  error simultáneos), pero **el modo de fallo migró de "caído" a "timeout en lote real"**. Ping trivial OK;
  `enlaza`/`novedad` sobre material de un run devuelven exit 143. Afecta a Inés, a mí (PASO 3) y a toda
  rutina con capa mecánica hasta que Kimi resetee (30-ago).
- **Kimi (capa autónoma)**: tope 20/20 duro hasta 2026-08-30T11:50. No es cuota de API, es presupuesto
  propio. Consecuencia: L-X-V de CKO hasta el 30 corren en el modelo caro de la app vía `sofia-navarro`.
- **`raw/pulso-video/2026-08-26` bloqueado 0555** — `archiva_transcripciones.py` exit 2, crudo de Marco del
  26-ago **no recuperable** (2ª+ vez; memoria `project-raw-pulso-video-0555`). La auditoría de fidelidad de
  los miércoles no puede alcanzar ningún pulso de vídeo mientras esto siga. Chmod pendiente de Carlos.
- **Cadena de la mañana**: no hay `cio-2026-08-27` ni marcador de frescura de `cerebro-cio-elisa` a las
  11:00 (corre L+J 06:45). Es la **2ª vez en 4 días** que el run de la CIO no produce (Daniel documentó el
  fallo de harness del 24-ago). Para Elisa o para Carlos — no es mi dominio arreglarlo, pero el hueco
  degrada toda la cadena.

## Propuestas

- **A Carlos / Elisa** — *gate de lint post-hoc para el carril opencode*. Los hooks no son red para
  ox-alpha (ni para ningún agente opencode). Concreto: `scripts/lint_wikilinks.py --all` que reúsa la
  lógica de `hook_bloquea_wikilinks_partidos.py` + 2 patrones nuevos (carácter de palabra pegado tras el
  cierre; doble pipe), lo corre `cerebro-mantenimiento-semanal` los domingos y `ox-alpha` al cerrar
  cualquier pase de más de 50 ficheros. **Coste**: 1 script, extiende lógica ya escrita.
  **Reversibilidad**: total.
- **A Daniel / Carlos Bárez (dueños)** — corregir los 33 enlaces (lista: los 16 ficheros de arriba).
  Mecánico salvo los 3 casos de doble pipe / puntuación de `mapa-de-industrias.md`, que necesitan ojo.
  **No lo hago yo** (fuera de `wiki/conocimiento/`).
- **A la dueña de `squads-de-investigacion.md`** — subir al skill la disciplina "extraer PDF con `PyMuPDF`
  (`import fitz`) por ventanas de 15 páginas o menos, nunca `Read` íntegro (falta `pdftoppm`/poppler en
  este entorno)". Se ha redescubierto 3 veces (21-ago falló por esto, 26-ago funcionó). Es una línea en un
  skill existente, **no un agente persistente nuevo**.

## Meta: arquitectura (jueves)

### (a) Ineficiencias propias esta semana

- **Re-verifico cada rotación ítems ya escalados a la CIO** sin novedad: trazabilidad fuentes-inversores
  (6/11, 5 semanas, 3 comprobaciones), pool de 74 sondas (2º flag), Nvidia sin nota de evolución (3ª),
  Elena sin pulso (2ª). Cada uno son 2-3 `grep`/run y cero información nueva. **Propuesta**: un ítem
  escalado a Elisa pasa a **"dormido"** — no lo re-chequeo hasta que (i) el informe de Elisa lo cite o
  (ii) pasen 30 días. Coste: cero. Reversibilidad: total. Ahorra ~6-10 llamadas/run. Mantengo en VIGENTE
  solo la fecha de escalada y el gatillo de despertar.
- **Intento el lote mecánico completo del PASO 3 con el techo ya conocido** (Kimi 20/20 tiene fecha; el
  carril de pago hace timeout — medido 2 días seguidos). Hoy hice lo correcto: sonda de viabilidad de 2
  líneas antes de construir nada. **Propuesta**: el PASO 3 empieza SIEMPRE con `kimi-tarea --status` + ping
  trivial `prime-agent`; si Kimi capado, solo carril de pago con lotes de menos de 100 KB; si ambos fallan,
  `[DEGRADADO]` y a mano, **sin construir el lote grande** (que se pierde entero, no da error).

### (b) Límites de conectores — casos reales de la semana (no teóricos)

| Conector | Límite | Caso de esta semana |
|---|---|---|
| Kimi (capa autónoma) | Tope 20/20 por ciclo, hasta 30-ago | FASE -1 cae al brazo Anthropic el 25 y 26-ago |
| `prime/deepseek-v4-flash` (pago) | Timeout en lote real; ping trivial OK | Inés hoy (`enlaza`/`novedad` exit 143); yo 26-ago |
| `raw/pulso-video/` FS lock 0555 | `archiva_transcripciones.py` exit 2 | Crudo de Marco 26-ago irrecuperable |
| Harness tareas programadas | Disparo en lote tras suspensión; "agente no registrado"; CIO no produce | 24-ago (Daniel) y hoy 27-ago (sin `cio-2026-08-27`) |

### (c) Herramientas / MCP nuevas

**Ninguna esta semana.** El hueco de la misión no es una capacidad que falte — `grep` + `git blame` +
embeddings de Smart Connections cubrieron la auditoría entera. El hueco es un **gate de lint** (propuesta
de arriba), no un conector. El vault + `grep` + Smart Connections siguen siendo memoria institucional
suficiente; ningún límite real de esta semana justifica RAG / vector-DB externa.

### (d) Scouts persistentes

**Ninguno.** El scout de fidelidad (3 o más despliegues: 23-jul, 29-jul, 26-ago) no merece ficha
`.claude/agents/` propia todavía — su único conocimiento recurrente que se pierde (ventanas `PyMuPDF`) se
resuelve con una línea en `squads-de-investigacion.md` (propuesta arriba). Reevaluar si supera 5
despliegues o si el re-descubrimiento persiste tras subir la línea.

## Para la CIO

- **Misión**: auditado el pase masivo de wikilinks de ox-alpha (`aa29363`, +1.400 enlaces / 487 ficheros).
  Neto **positivo** en páginas-concepto nuevas y cableado de sondas; **negativo en la Fase 1** — 33
  wikilinks mal formados en 16 ficheros (5 en `cartera-actual.md`, rompen `deriva_cartera.py` — ya lo tiene
  Daniel; 3 corrompen celdas de `mapa-de-industrias.md`). **Causa raíz**: ox-alpha escribe con los hooks
  del harness apagados (carril opencode) y el hook de wikilinks partidos tampoco cubre este patrón.
- **Propuesta central**: lint post-hoc `scripts/lint_wikilinks.py --all` en `cerebro-mantenimiento-semanal`
  + en todo pase ox-alpha de más de 50 ficheros. Los hooks no son red para el carril opencode.
- **Proceso propio**: propongo pasar a "dormidos" los ítems escalados que re-verifico sin novedad (varios
  a 5+ semanas).
- **Alerta de cadena**: no hay `cio-2026-08-27` ni marcador de frescura de tu rutina a las 11:00 (corre
  L+J 06:45). 2ª vez en 4 días que tu run no produce (24-ago documentado por Daniel). Para ti o para Carlos.
- **Mecánica**: Kimi 20/20 hasta 30-ago; carril de pago recuperado del apagón del 26-ago pero con timeout
  en lotes reales.

## Ver también

[[arquitectura-del-conocimiento]] · [[riesgo-2026-08-27]] · [[estrategia-2026-08-27]] ·
[[conocimiento-2026-08-26]] · [[reparto-de-modelos]] · [[equipo-agentes|equipo de agentes]]
