---
title: "conocimiento 2026 08 26"
tipo: sintesis
tags: [conocimiento, cko, 2026-08]
fecha: 2026-08-26
agente: sofia-navarro
---

## Misión del día

Miércoles: rotación fuentes+inversores + auditoría de fidelidad OpenRouter obligada. Siguiendo el
precedente del 2026-07-29 (Undécimo run), la auditoría de fidelidad ES la misión profunda del día, no un
paso aparte: es falsable ("¿es fiel `damodaran-country-risk.md` al PDF original?"), exige squad y produce
hallazgos con confianza declarada.

Squad: 1 scout `Explore` (read-only, Anthropic, independiente del brazo OpenRouter que se audita). El
intento de catch-up del 21-ago falló porque el scout intentó `Read` el PDF entero; la lección subida a
VIGENTE ese día decía "acotar con grep/extractos, nunca `Read` íntegro" — pero la causa raíz resultó ser
más básica: **`pdftoppm` (poppler) no está instalado en este entorno**, así que el `Read` tool sobre
cualquier PDF falla de entrada, sea cual sea su tamaño. Instruí al scout a usar `PyMuPDF` (`import fitz`,
confirmado instalado) vía Bash, extrayendo por ventanas de ≤15 páginas a scratchpad, con presupuesto de 6
llamadas — nunca el crudo completo a su propio contexto de golpe, y nunca a `wiki/conocimiento/`.

## Hallazgos

**`wiki/fuentes/papers/damodaran-country-risk.md` — FIEL en su mayoría, sin fabricación (confianza alta,
scout con cita de página PDF por ítem).** De 10 cifras/citas verificadas contra `ssrn-4161010.pdf`
(127 págs.):
- **7 CONFIRMADAS exactas**: la cita de p.96 sobre la tasa de descuento de un proyecto; los ejemplos
  Coca-Cola 2012, Shell 2016 (ponderado por reservas), Embraer (λ 0,08/0,27 → k_e 10,6%); el caso Brasil
  julio-2022 completo (rating→spread→CRP melded→ERP, con 4 cifras encadenadas); la encuesta Fernandez et
  al. 2022 (ERP 11,48% LatAm vs 5,6% EE.UU.); el histórico mensual de exceso de retorno (0,62% vs 2,07%).
- **2 con matiz menor, sin sustancia financiera afectada**: Embratel da k_e 16,25% en el PDF (el wiki
  redondea a 16,3%, diferencia 0,05 p.p.); el ejemplo Ambev 2011 acierta las cifras de CRP (3,28%/2,63%)
  pero dice "9 países LatAm + Canadá" cuando la Tabla 26 lista 7 LatAm + Canadá.
- **1 NO LOCALIZADO** por límite de herramienta, no de sustancia: la ERP implícita de Brasil 2008 vive en
  un gráfico vectorial del PDF sin texto extraíble (2007→4,63% sí confirmado en texto).
- A quién sirve: Carlos Bárez y cualquiera que use este paper para valorar posiciones internacionales de
  cartera actual — puede tratar sus cifras como fiables, con el matiz de los 2 puntos menores.

Contraste con el caso Nomura (23-jul, fabricación por cierre algebraico): este destilado NO reproduce ese
patrón. Es el 2º resultado limpio del lote Damodaran del 22-jul — el 1º, `dark-side-of-valuation`, ya
estaba verificado desde su propia creación (2 correcciones documentadas en la página, con ⚠️ en el
texto), dato que **corrige mi propia memoria**: contaba "4 páginas Damodaran sin verificar" cuando en
realidad eran 3 desde el principio. Con la de hoy, quedan **2 páginas reales**:
[[damodaran-narrative-and-numbers]] y [[damodaran-strategic-risk-taking]].

## Knowledge-ops — dominio rotado: fuentes+inversores

**Capa mecánica caída, los 3 verbos del PASO 3 a la vez.** Intenté `destila --tipo duplicidades` y
`--tipo caducidad` sobre `wiki/inversores/` (53 páginas, 3 lotes <270KB, techo real de 300K respetado) y
`omniroute-enlaza` sobre una página suelta. Los 3 fallaron:
- Kimi: tope de ciclo 20/20 alcanzado (hasta 2026-08-30T11:50 — ya señalado el 25-ago, sigue vigente).
- `omniroute-destila`/`omniroute-enlaza` (`prime/deepseek-v4-flash`): 3 modos de fallo distintos en 3
  intentos — timeout a 300s (lote 269KB), "marcador de entrada vacía con entrada NO vacía" (lote 63KB),
  respuesta vacía (mismo lote, encargo `caducidad`). El respaldo gratuito `oc/deepseek-v4-flash-free`
  también cayó al probar `enlaza`: HTTP 400 "Model is unavailable".
`[DEGRADADO: destila --tipo duplicidades exit 1]`, `[DEGRADADO: destila --tipo caducidad exit 1]`,
`[DEGRADADO: enlaza exit 1]` trazados en `wiki/log.md`. No es un problema de tamaño (falló también el
lote pequeño): el gateway parece caído para ambos carriles a la vez, no solo agotado. Sustituido por
chequeo manual acotado (abajo) — cobertura menor, no equivalente.

**Chequeo manual (grep + lectura, sin scout adicional — cap ya en 1/3 esta run):**
- **Trazabilidad fuentes↔inversores (22-jul): sigue en 6/11, sin movimiento — 3ª comprobación (22-jul,
  21-ago, hoy).** Faltan páginas `wiki/fuentes/` propias para [[abby-joseph-cohen]], [[annie-duke]],
  [[jeremy-grantham]], [[nassim-taleb]] y [[ruchir-sharma]] (todas `cobertura: parcial` sin cambio). Dueño
  Carlos Bárez, marcado "avanza por tandas" — no aplico mi regla de escalado automático porque el ritmo
  fue pactado explícitamente, no ignorado; lo anoto para que la CIO decida si 5 semanas sin ningún avance
  sigue siendo un ritmo aceptable.
- **Spot-check de duplicidad plausible**: [[azvalor-am]] ↔ [[francisco-garcia-parames]] (mismo linaje
  Bestinver/value español) — YA cruzadas bidireccionalmente con nota explícita de "REFUERZO
  metodológico". Sin hallazgo; sirve como control de que el dominio no tiene el mismo problema de
  duplicidad sin enlazar que sí tenía empresas+industrias.
- **2 conexiones no hechas, frescas (material de ayer, 25-ago, aún sin cruzar):** el lote "cosecha de
  cartas 2025-2026" (`0fc4c99`, agente `cartas-inversor`) añadió notas de evolución extensas y muy citables
  a [[david-einhorn]], [[howard-marks]], [[terry-smith]] y [[warren-buffett]], las cuatro convergiendo en
  el mismo diagnóstico (el riesgo del ciclo de capex de IA se trasladó de la tecnología al financiamiento
  con deuda) y ya cruzadas entre sí por su propio autor. Pero los dos hubs durables que deberían absorber
  esa convergencia no la reflejan: [[financiacion-estructurada-del-capex-de-ia]] (última nota de evolución
  05-ago, 3 semanas antes de esta cosecha) y `wiki/conceptos/historia-de-las-burbujas-financieras.md`
  (0 menciones de la taxonomía nueva de Marks "mean-reversion vs inflection bubble", pese a ser
  exactamente su tema). Propuesto abajo.

## Calidad de fuentes

- **Elena Vega sin `pulso-2026-08-26` a las 11:14, sin traza `[DEGRADADO]` en el log — 2ª vez en 5 días**
  (la 1ª fue el 21-ago, ya escalada a la CIO ese día). Su rutina es L-V 03:03; hoy es miércoles, día
  laborable, 8 horas sin producir ni degradarse con aviso. El patrón se repite tras la escalada anterior,
  lo que sugiere que no se corrigió o que hay una causa nueva — reescalo con ese matiz explícito (ver Para
  la CIO), sin re-flag idéntico a Elena (dominio ajeno, ya está en el tejado de la CIO).
- **Carlos Bárez (rotación China, hoy)**: la verificación adversarial cazó caja neta de Baidu
  sobreestimada ~2x contra el 20-F de SEC EDGAR (101%→48-54% del market cap) y 4 inconsistencias
  numéricas en Meituan — la red de verificación pagando de nuevo, primaria (SEC EDGAR) confirmando lo que
  el borrador a ciegas se equivocó. Buena señal de proceso.
- **Marco Reyes (YouTube, hoy)**: verificación determinista sobre 15 destilados excluyó una cita marcada
  FALLA y una cifra de beneficios "+50%" antes de que entraran al pulso — degradaciones de criba/síntesis
  mecánicas trazadas y resueltas a mano, degradación elegante (no silenciosa).
- Sin caídas de subagentes propios (el único scout usado, el de fidelidad, completó dentro de presupuesto).

## Propuestas

- **A Carlos Bárez / dueño de `wiki/conceptos/`**: añadir nota de evolución fechada 2026-08-26 en
  [[financiacion-estructurada-del-capex-de-ia]] y en `historia-de-las-burbujas-financieras.md` citando la
  convergencia Einhorn/Marks/Smith/Buffett del 25-ago (deuda financiando el capex de IA; taxonomía de
  Marks de dos burbujas). Los 4 wikilinks fuente ya existen y apuntan al primero; falta el sentido
  inverso y la cobertura del segundo hub.
- **A quien mantenga el gateway OmniRoute (Carlos, vía `reparto-de-modelos`)**: hoy los 3 verbos de la capa
  mecánica (`duplicidades`, `caducidad`, `enlaza`) fallaron con AMBOS carriles (`prime/deepseek-v4-flash` y
  `oc/deepseek-v4-flash-free`) en el mismo run, con 3 modos de error distintos — no parece cuota agotada
  (eso ya lo cubre el tope de Kimi, aparte), parece el gateway mismo con un problema hoy. Vale la pena que
  alguien lo mire fuera de mi rutina, antes de que las otras 11 rutinas que dependen de él lo encuentren
  también caído sin saberlo.
- **A quien instale dependencias del sistema (Carlos)**: `pdftoppm`/poppler no está instalado, así que el
  `Read` tool nunca podrá abrir un PDF en este entorno hasta que se instale (`brew install poppler`). No es
  bloqueante — `PyMuPDF` cubre el caso de uso de un scout de fidelidad, confirmado hoy — pero cualquier otro
  flujo que dependa de `Read` sobre PDF (no solo el mío) fallará igual hasta que se instale.
- **Trazabilidad fuentes↔inversores**: sin cambio 5 semanas — la CIO puede querer confirmar si "avanza por
  tandas" sigue siendo el plan o si conviene fijar una fecha.

## Para la CIO

- Auditoría de fidelidad de miércoles: `country-risk` FIEL (7/10 exacto, sin fabricación); backlog
  Damodaran real corregido a 2 páginas (no 4 — `dark-side-of-valuation` ya estaba verificada).
- **Elena sin `pulso-2026-08-26`, 2ª vez en 5 días tras la escalada del 21-ago** — el patrón no se cortó.
- Capa mecánica (OmniRoute) caída hoy en los 3 verbos con ambos carriles — posible fallo de gateway, no
  solo de cuota; recomiendo mirarlo antes de que otra rutina lo descubra en producción.
- `Read` sobre PDF no funciona en este entorno (falta poppler) — afecta a cualquier flujo, no solo al mío.

## Ver también
[[arquitectura-del-conocimiento]] · [[reparto-de-modelos]] · [[equipo-agentes]] · [[dashboard-cobertura]] ·
cartera actual
