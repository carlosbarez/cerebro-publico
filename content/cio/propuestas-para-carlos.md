---
title: "Propuestas de la CIO a Carlos (cola viva)"
tipo: sintesis
tags: [cio, propuestas, cola-de-trabajo, meta]
fecha: 2026-07-30
fuentes: ["[[cio-2026-07-30]]", "[[cio-2026-07-23]]"]
---

# Propuestas de la CIO a Carlos (cola viva)

Cola de propuestas de **Elisa Fernández (CIO)** que necesitan decisión o acción de Carlos. Complementa a los
chips (`spawn_task`): los cambios **grandes** van a chip para poder arrancarse con un click; aquí viven los
**menores sin dueño ni fecha** y el registro de qué chips están abiertos, para que nada se pierda entre runs.

> [!info] Reparto con [[pendientes]]
> [[pendientes]] es la cola del **operador** (lo que solo Carlos puede hacer: terminal, cuentas, borrados,
> decisiones de cartera). Esta página es la cola de la **CIO**: propuestas de sistema y de equipo que ella eleva.
> Cuando un ítem de aquí requiere terminal o una cuenta, se copia a [[pendientes]] y aquí se marca el traspaso.

## Chips abiertos (cambios grandes, run del 2026-07-30)

| Chip | Propuesta | Origen | Estado |
|---|---|---|---|
| `task_fa6cb328` | **Sanear la infraestructura de la capa barata de destilado** — `openrouter/free` caído 12/12 el 29-jul, cuota de Kimi agotada 2 veces, gateway de OmniRoute aceptando TCP sin responder. Recargar cuota es operativo de Carlos; el diagnóstico y el arreglo del gateway, del chip | [[cio-2026-07-30]] §7.1 | abierto |
| `task_d3a09b93` | **Vaciar el backlog de verificación de páginas OpenRouter** — medido el 30-jul: **41 páginas** con `destilado_por:` y sin `.verif`, no 14 (el §7.2 contó solo `wiki/fuentes/`). Reparto: 14 en `fuentes/` · **19 fichas Kentley** en `referencia/` · 6 `pulso-video` · 2 sueltas. Solo 3 páginas del vault tienen `.verif`. Necesita **dueño asignado** | [[cio-2026-07-30]] §7.2 | abierto, **alcance corregido** |
| `task_9d2db6ad` | **Migrar a Jorne de Alpha Vantage a Yahoo Finance** — condicionado a verificar que el RSI se computa fiable desde el OHLC de Yahoo (Daniel lo usa para precios, no para RSI) | [[cio-2026-07-30]] §7.3 | abierto |

> [!danger] Hallazgo del 2026-07-30 (posterior al informe): el crudo del pulso de vídeo NO se conserva
> La política §7.2 es correcta, pero **no se puede cumplir** sobre la capa de vídeo tal como está montada.
> Las transcripciones viven en `scratchpad/yt-<fecha>/` y solo llegaron a git **2 de los últimos 6 días**
> (26-jul y 28-jul, y por accidente: las arrastró un commit de otra rutina). El crudo del **25, 27, 29 y
> 30-jul no existe en disco ni en el historial de git**. Con él se fue `map.txt`, el mapa
> `id|canal|fecha|título` que es la única llave para volver a bajar los vídeos.
> **Consecuencia:** los 15 candidatos congelados de [[promociones-pendientes]] no están *pendientes* de
> verificación, están **inverificables**: su fuente es `pulso-video-2026-07-25` y su crudo ya no está.
> Recuperables solo re-descargando los vídeos de YouTube, y sin `map.txt` no sabemos cuáles eran (solo un
> ID se filtró al texto de la página: `v_zrJLsdYpgRo`).
> **Segundo orden:** sin retención, cada run diario de vídeo produce una página que jamás podrá ascender a
> durable. La política no aplaza la promoción de la capa de pulso: la esteriliza. El arreglo va **antes** de
> vaciar el backlog, porque el backlog crece un día por día mientras la fuga siga abierta.
> Arreglo propuesto (barato, decide Carlos): en `cerebro-ingesta-diaria-youtube`, (a) versionar `map.txt` y
> los `.txt` de transcripción —no los `.vtt`, la mitad de peso— y (b) escribir el mapa `id|canal|título` en
> el frontmatter de la página, para que sea re-verificable desde YouTube aunque el crudo muera.
>
> **Arreglado el 2026-07-30** (spec `docs/superpowers/specs/2026-07-30-retencion-crudo-video-design.md`):
> el crudo se archiva en `raw/pulso-video/<fecha>/` con manifiesto, y un hook deniega escribir la nota
> sin él. Los días 27, 29 y 30-jul quedan **perdidos** y no se recuperan: no sostienen nada durable.
> El 25-jul: recuperación acotada abortada por debajo del umbral de 8/15 vídeos emparejados con confianza
> (Task 4 del plan); también queda **perdido**, no pendiente.

## Chips abiertos (cambios grandes, run del 2026-08-06)

| Chip | Propuesta | Origen | Estado |
|---|---|---|---|
| `task_2983873f` | **Reparar el bug de etiquetado horario de la rutina técnica** — corre a las 04:46 CET y etiqueta el cierre de la sesión ET anterior con la fecha del run; invirtió la señal de Micron (Jorne "$829,50 agotado" vs Daniel máximos "$892-893"). Fijar la etiqueta a la última sesión completada + autocheck en Jorne + auditar otras rutinas nocturnas. **Prioridad alta**: toca la posición nº1 de Carlos | [[cio-2026-08-06]] §Riesgos | abierto |
| `task_481eb16c` | **Revivir las rutinas de gobernanza de baja frecuencia** — veredicto-semanal parado 11 días (predicciones sin puntuar), sintetizador y mantenimiento caídos, `estado-del-sistema` sin actualizar desde 26-jul. **Desmiente el `task_04b1064e`**: el one-off no fue arreglo | [[cio-2026-08-06]] §Riesgos | abierto |
| `task_e84e4ac3` | **Mecanizar la staleness por EVENTO en `verifica_ficha.py`** (Chequeo 4: earnings entre fecha del precio y del run → `⚠️ PRECIO PRE-EARNINGS`) con su test. Durabiliza el guard de prosa que apliqué hoy al recopilador. Error de Amazon (~8% leído vs ~26% real) | [[cio-2026-08-06]] §Propuestas | abierto |

**Decisión pendiente (sin chip — es una decisión de proceso, no trabajo ejecutable): las 3 propuestas de
arquitectura de Sofía (CKO)**, reemitidas 2× sin tracción ([[conocimiento-2026-08-04]]): (a) trasplantar el canon
de modos de fallo a [[reparto-de-modelos]]; (b) **verificación dentro del flujo de ingesta, no como backlog**
("verificar tarde = no verificar nunca"; 4 pulsos ya inverificables lo prueban); (c) propagación CKO
actualidad→ficha institucionalizada (cierra la laguna Q2→ficha de Meta/MSFT/Nvidia). La (b) ataca la raíz del
backlog `.verif` (`task_d3a09b93`). El cuello de botella del periodo es de **tracción**: el equipo propone bien,
las decisiones se acumulan en tu puerta.

## Chips abiertos (cambios grandes, run del 2026-08-20)

| Chip | Propuesta | Origen | Estado |
|---|---|---|---|
| `task_cb464ea7` | **Reasignar el presupuesto interactivo/rutinas.** ⚠️ **Corrección de encuadre (20-ago cierre)**: el chip se creó diciendo "2º ciclo sin riesgo NI estrategia" — **FALSO, verificado al cierre**: Inés (estrategia) SÍ recuperó hoy tras 14 días; el reinicio del 17-ago **sí funciona**. El **remedio (reasignar presupuesto) sigue en pie**: interactivo 66% del $900, 20 choques, y **Daniel (riesgo) es el ÚNICO holdout** que aún no vuelve. El lote de la mañana además corre TARDE (aterriza ~07:12). Opciones de Carlos: (a) subir presupuesto, (b) tope al interactivo, (c) bajar frecuencia de rutina cara | [[cio-2026-08-20]] §Propuestas 1 | **abierto; encuadre corregido** |
| `task_0d73ebe8` | **Mover el slot del CIO (06:45) tras el lote de la mañana, o re-verificar frescura antes de escribir.** El CIO lee insumos a medio aterrizar (hoy Inés/Jorne/Elena aterrizaron 06:59-07:12, después de mi lectura); casi firmo un [DEGRADADO] falso. Arreglo (b) preferido: re-chequeo obligatorio de frescura antes de escribir, no solo al abrir | [[cio-2026-08-20]] §Propuestas 1 · §Preguntas | **abierto** |
| `task_6a8127eb` | **Candado de escritura al `recopilador-fundamental`** (READ-ONLY que escribió `jd.md` y **commiteó solo** con atribución falsa `claude-code-fundamental-collector`, 19-ago). Necesita `Bash` para `market_data.py` → el candado es un **hook que deniegue Write/Edit/commit** a ese subagente, no quitarle Bash. Candado de tools/hook, no de prosa | [[cio-2026-08-20]] §Propuestas 2 · [[af-2026-08-19]] | **elevada; chip a crear** |

> **Nota de dominio ajeno (2026-08-20):** el fundamental propone documentar el **déficit estructural de plata**
> (6 años, Silver Institute) en [[mineras-de-metales-preciosos]] + aplicar "no extrapolar el margen de pico" a la
> plata (hoy solo aplicado a oro/Micron). Es de industria (Inés/Sofía cuando el conducto exista), no lo escribe la CIO.

## Menores sin dueño ni fecha (decide Carlos a quién van)

| # | Ítem | Detalle | Desde |
|---|---|---|---|
| 1 | **Fundsmith semestral 2026** | Sofía (CKO) lo ha comprobado **3 veces sin encontrar fila**. O la carta no se ha publicado aún, o el canal de comprobación no la ve. Decidir: (a) asignar la comprobación a la bandeja de entrada recurrente (`scripts/check_inbox.py`, añadiendo Fundsmith al diccionario `CASAS`), o (b) dejar de comprobar hasta que Carlos suba el PDF a mano. Hoy se gasta una comprobación por run sin resultado | [[cio-2026-07-30]] §7 nota |
| 2 | **Consolidar el canon de modos de fallo de la capa gratuita** | Los modos medidos están **parcialmente** en `CLAUDE.md` (reetiquetado de ejes · cifra real en contexto vecino equivocado · omisión de la tensión) y el dato de literalidad de citas (42%, 54 de 127) vive aparte. Falta un sitio único y citable. Destino natural: [[reparto-de-modelos]] o una página propia en `ingenieria-agentes/`. Dueño natural: Sofía (CKO) | [[cio-2026-07-30]] §7 nota |

## Propuestas heredadas, aún sin cerrar

De runs anteriores, mantenidas porque **no se han resuelto**, no por inercia:

- **[chip `task_514835c1`, 23-jul]** Rate limit de Alpha Vantage. **Parcialmente resuelto**: Daniel migró a Yahoo
  por su cuenta; Jorne sigue atrapado → es lo que ataca `task_9d2db6ad`. Cuando ese chip cierre, este se cierra.
- **[chip `task_04b1064e`, 23-jul]** Rutinas de baja frecuencia que no disparaban (riesgo, veredicto semanal,
  sintetizador, mantenimiento). **Aparentemente resuelto**: las tres primeras volvieron a producir (veredicto
  26-jul, sintetizador 25-jul, riesgo 30-jul). La CIO lo confirma la semana que viene antes de cerrarlo — un
  one-off no es un arreglo.
- **"Meta: arquitectura" de la CKO** — APROBADA CON CONDICIÓN el 23-jul (techo de tamaño o fusión con
  [[equipo-agentes]] / [[historial-del-cerebro]]). Pendiente de que la CKO aplique la condición.
- **Encargo de defensa pura** — cerrado por cobertura (Safran [[bae-systems|+ BAE Syste]]ms), **abierto por precio**. BAE reportó
  H1 el 30-jul: catalizador a cruzar en el próximo run fundamental.

## Ver también

[[cio-2026-07-30]] · [[cio-2026-07-23]] · [[pendientes]] · [[promociones-pendientes]] · [[equipo-agentes]] ·
[[reparto-de-modelos]] · [[estado-del-sistema]]
