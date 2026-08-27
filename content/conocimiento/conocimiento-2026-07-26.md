---
title: "conocimiento 2026 07 26"
tipo: sintesis
tags: [conocimiento, cko, 2026-07]
fecha: 2026-07-26
---

## Misión del día

**Pregunta**: ¿son fiables las 3 alertas 🔴 que el watchdog de mantenimiento (`cerebro-semaforo`, Haiku)
publicó esta misma mañana en `wiki/sintesis/estado-del-sistema.md`, antes de que Carlos/Elisa actúen sobre
ellas?

**Por qué esta y no otra**: 0 encargos en cola, 0 marcas `[CKO:]` nuevas desde el run del 25-jul (ver
knowledge-ops abajo). La rotación de hoy es perfil+predicciones+sintesis; el informe de mantenimiento de esta
mañana toca directamente 2 de esas 3 (predicciones vía `cerebro-veredicto-semanal`, sintesis vía
`cerebro-sintetizador-durable`) con alertas 🔴 que, de ser ciertas, exigen acción hoy mismo de Carlos. Antes de
que se actúe sobre una alerta roja conviene comprobar si el propio watchdog calculó bien — el coste de
verificar es casi cero (grep + `date` + comparar 3 fuentes) y el coste de NO hacerlo, si la alerta es un falso
positivo, es una "rescate" innecesario de una rutina sana. Categoría "pregunta simple, 0 scouts" (6ª
validación de esta memoria).

**Squad**: 0 scouts. Verificación mecánica directa: `git log`, mtime de archivo, entrada de `wiki/log.md`, y
el comando `date -j` para recalcular el día de la semana de cada fecha que el watchdog cita.

## Hallazgos

**HECHO, confianza alta (3 fuentes independientes cruzadas)**: la alerta 🔴 *"`cerebro-sintetizador`: ‹sin
run›, esperado 19-jul y 26-jul, sin runs"* es un **falso positivo**. El sintetizador durable SÍ corrió el
sábado 25-jul (su cadencia correcta — confirmado: 2026-07-25 cae en sábado con `date -j`):
- commit `7d59ab8` (25-jul): *"sintesis(promociones): run 25-jul — 16 candidatos verificados detectados,
  escaneo completo 18-25-jul"*.
- `wiki/log.md:972`, entrada `## [2026-07-25] sintesis | Escaneo de promociones pendientes (25-jul-2026)`,
  con el detalle del run (Haiku, 16 candidatos, tabla actualizada).
- `wiki/sintesis/promociones-pendientes.md` con mtime 25-jul 08:52 y 13 KB de contenido nuevo.

Sirve a: Carlos y Elisa directamente — evita que actúen (relanzar/investigar una rutina "caída") sobre algo
que funciona.

**HECHO, confianza alta**: el watchdog tiene además un error sistemático de aritmética de día-de-semana, no
aislado a este caso:
- Dice "esperado 19-jul" (sábado) para el sintetizador — **19-jul-2026 es domingo**, no sábado.
- Dice "esperado 26-jul" (hoy, también como si fuera sábado) — **26-jul-2026 es domingo** (hoy).
- En la fila de `cerebro-veredicto-semanal` dice *"esperado 20-jul (domingo)"* — **20-jul-2026 es lunes**.

Por contraste, la alerta 🔴 de `cerebro-riesgo` ("última ejecución 16-jul, 10 días, fuera de ventana de 7") sí
cuadra: 16-jul es jueves (cadencia L-J correcta) y 26−16=10 es aritmética simple, sin día-de-semana de por
medio — **esa alerta la doy por buena**, no hay motivo para dudarla con la evidencia disponible hoy.

**HECHO, confianza media**: la alerta 🔴 de `cerebro-veredicto-semanal` ("nunca ejecutada") sí parece cierta en
el fondo, aunque su cita de fecha esté mal — `git log` sobre `wiki/predicciones/` no muestra ningún commit que
tenga forma de resolución semanal (solo la creación del motor el 15-jul y 2 commits de integración el 16/20-jul,
ninguno con el patrón "N resueltas, N nuevas" que su propio SKILL exige en el mensaje de cierre). El registro
de predicciones tampoco tiene predicciones vencidas hoy (la más próxima vence 2026-08-01), así que la ausencia
de runs no ha corrompido todavía ningún dato de calibración — pero si el patrón de fechas erróneas del watchdog
se repite, vale la pena que quien relance esta rutina no confíe ciegamente en "esperado el domingo" sin
comprobar qué domingo real le tocaba.

Sirve a: Elisa (jueves revisa el meta-run y las alertas del sistema) y a Carlos si decide relanzar
manualmente algo — mejor que sepa cuál de las 3 alertas es sólida antes de gastar tiempo.

## Knowledge-ops — dominio rotado: perfil + predicciones + sintesis

- **`cartera-actual.md`**: última foto 2026-07-12, sin cambios desde entonces; consistente con
  `decisiones.md` (única decisión registrada, 2026-07-11, estado "aceptada (diferida, vía aportaciones)" —
  nada ejecutado todavía, así que no hay desajuste cartera↔diario). Sin hallazgo.
- **`registro-de-predicciones.md`**: 5 fichas vivas sembradas 18-jul, ninguna vencida hoy (próxima:
  2026-08-01). Sin acción para hoy; relevante para el hallazgo de arriba sobre `cerebro-veredicto-semanal`.
- **Conexión no hecha, confirmada por lectura directa de ambas páginas**: `wiki/perfil/calendario-catalizadores.md`
  (280 líneas, "carga inicial" 2026-07-20, poblado con ~11 catalizadores reales para el Top-10 de
  `cartera-actual`, fechas confirmadas vs. estimadas por patrón) y `wiki/predicciones/calendario-de-catalizadores.md`
  (70 líneas, escritor único `cerebro-veredicto-semanal`, tabla de "Próximos catalizadores" **vacía desde su
  creación el mismo día 2026-07-20** con la nota explícita *"la carga quedó bloqueada por límite de sesión de
  la cuenta"*) — **cero wikilinks entre ambas** (`grep` confirma 0 menciones cruzadas). Llevan 6 días
  existiendo en paralelo sobre el mismo tema (eventos que mueven las mismas posiciones) sin que ninguna
  refiera a la otra. No son sustitutas exactas — la de `perfil/` es descriptiva ("qué observar"), la de
  `predicciones/` exige postura falsable con probabilidad — pero la segunda podría haber usado la primera
  como semilla de fechas/eventos en vez de partir de cero cuando por fin corra `cerebro-veredicto-semanal`.
  Propuesto abajo.
- **`decisiones.md` / `objetivos.md` / `perfil-de-inversor.md`**: sin cambios desde su última revisión, sin
  cifras que envejezcan (vault demasiado joven para ese chequeo en esta capa).
- Sin marcas `[CKO:]` nuevas en `actualidad/`, `estrategia/`, `analisis-fundamental/`, `riesgo/`, `cio/` desde
  el run del 25-jul. Cola de `encargos.md` sigue vacía.

## Calidad de fuentes

Ningún informe de analista corrió hoy todavía (domingo, antes de las 11:00 — el único informe fechado 26-jul
disponible es el propio watchdog de mantenimiento, ya cubierto arriba como la pieza de conocimiento del día).
Sin incidencias de scouts (0 usados) ni de conector.

## Propuestas

1. **A Carlos y Elisa (prioridad alta, accionable hoy)**: no relanzar ni investigar `cerebro-sintetizador-durable`
   — corrió bien el 25-jul, la alerta 🔴 de esta mañana es un falso positivo del watchdog. Sí conviene revisar
   `cerebro-riesgo` (10 días real) y `cerebro-veredicto-semanal` (nunca ha producido una resolución real,
   aunque su cita de fecha esté mal calculada).
2. **A quien mantenga `cerebro-semaforo`/`cerebro-mantenimiento` (SKILL.md, Haiku)**: el cálculo de
   "próxima fecha esperada" para rutinas de cadencia semanal (sábado, domingo) tiene un error de
   día-de-semana repetido en al menos 2 de sus 3 filas 🔴 — antes de confiar en sus alertas de cadencia,
   verificar la lógica que traduce "cadencia: Sábado" → fecha concreta. Coste de arreglo bajo (lógica de
   fechas, no investigación), reversibilidad total.
3. **A quien opere `cerebro-veredicto-semanal` en su primer run real**: cuando por fin cargue
   `wiki/predicciones/calendario-de-catalizadores.md`, cruzar primero contra
   `wiki/perfil/calendario-catalizadores.md` (mismo Top-10, mismas fechas de partida) en vez de re-investigar
   desde cero — y añadir un `[[calendario-de-catalizadores]]` / `vigilancia catalizadores` cruzado entre
   ambas páginas para que dejen de vivir como si la otra no existiera.

## Para la CIO

Hoy no es jueves (sin meta-run). Aviso corto: la alerta 🔴 de "sintetizador sin runs" del watchdog de esta
mañana es falsa (corrió el 25-jul, 3 fuentes lo confirman) — la de riesgo (10 días) es real. El watchdog tiene
un bug de aritmética de día-de-semana que conviene mirar antes del próximo run de mantenimiento, por si
contamina otras alertas de cadencia además de estas dos.

## Ver también

<!-- red densa 2026-08-25 -->
- [[cio-2026-07-30]]
