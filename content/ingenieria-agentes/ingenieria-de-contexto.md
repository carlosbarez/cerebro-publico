---
title: "Ingeniería de contexto — el contexto como presupuesto, no como almacén"
tipo: concepto
dominio: ingenieria-agentes
tags: [ingenieria-agentes, contexto, memoria, compactacion, coste, subagentes]
fecha: 2026-07-29
revisado: 2026-07-29
fuentes: ["[[anthropic-orquestacion-y-harness]]", "[[tier-a-accionable]]"]
---

# Ingeniería de contexto — el contexto como presupuesto, no como almacén

**Concepto.** La ingeniería de contexto es la sucesora del *prompt engineering*: cuando un agente opera en
bucles de muchos turnos, el problema deja de ser escribir el prompt perfecto y pasa a ser **curar, en cada
paso de inferencia, el conjunto de tokens que entra en la ventana** — instrucciones, herramientas, historial,
datos externos. La definición operativa es una sola frase:
*«good context engineering means finding the smallest possible set of high-signal tokens that maximize the
likelihood of some desired outcome»*. Mínimo **no** es corto: es la señal más alta por token.

## El fundamento físico, que es lo que impide tratarlo como opinión

*«as the number of tokens in the context window increases, the model's ability to accurately recall
information from that context decreases»*. Es el *context rot*, y tres cosas lo hacen accionable:

- Afecta a **todos** los modelos, y es un **gradiente**, no un precipicio: no hay un umbral seguro por debajo
  del cual da igual.
- Tiene causa estructural: la atención relaciona n² pares para n tokens, y los datos de entrenamiento están
  dominados por secuencias cortas.
- **Las ventanas más grandes no lo resolverán.** La contaminación de contexto y la relevancia seguirán siendo
  el problema; esperar a que crezca la ventana no es una estrategia.

De ahí la metáfora que sí sirve: la atención es un **presupuesto** que se gasta, no un almacén que se llena.

## Las cuatro palancas

**1. Recuperación *just in time*, no precarga.** En vez de meter todos los datos relevantes por adelantado,
el agente mantiene **identificadores ligeros** —rutas, consultas, enlaces— y carga en tiempo de ejecución con
herramientas. Los **metadatos son señal**: la jerarquía de carpetas, los nombres de fichero y las marcas de
tiempo le dicen al agente qué mirar antes de abrir nada. Contrapartida declarada: explorar en tiempo de
ejecución es **más lento** que tener los datos precomputados, y sin buena guía el agente desperdicia contexto
persiguiendo callejones sin salida.

**2. Divulgación progresiva.** El mecanismo que hace escalable lo anterior: cargar por niveles y solo lo que
se demuestre relevante. En el formato de *skills* son tres — metadatos precargados (`name` y `description`),
cuerpo del fichero cargado **solo si** el agente lo juzga pertinente, y recursos referenciados que navega bajo
demanda. La consecuencia es fuerte: *«the amount of context that can be bundled into a skill is effectively
unbounded»*, precisamente porque nunca se carga entero. Su fragilidad, también declarada: **si se activa o no
depende enteramente de la calidad del `name`/`description`**, y no publican ninguna métrica de acierto de
activación.

**3. Higiene de herramientas.** El conjunto de herramientas es contexto: cada definición ocupa y cada
ambigüedad cuesta una mala elección. Deben ser autocontenidas, eficientes en tokens y **sin solape
funcional**, y la prueba que decide es del lado humano: *«If a human engineer can't definitively say which
tool should be used in a given situation, an AI agent can't be expected to do better.»* Es el antipatrón
*tool overload* de [[harness-de-agentes]] visto desde el contexto en vez de desde la planificación.

**4. Las tres técnicas de horizonte largo**, y cuál toca cuándo:

| Técnica | Qué hace | Cuándo |
|---|---|---|
| **Compactación** | resume el historial al acercarse al límite y reinicia la ventana con el resumen | conversación larga de ida y vuelta |
| **Notas persistentes** | estado escrito **fuera** de la ventana, que sobrevive a los reinicios | trabajo iterativo con hitos |
| **Subagentes** | ventana limpia que gasta decenas de miles de tokens y devuelve **1.000-2.000** destilados | exploración paralela |

Detalles de la compactación que valen por sí solos: preservan decisiones de arquitectura, errores sin
resolver y detalles de implementación, descartan resultados de herramienta redundantes, y continúan con el
resumen **más los cinco ficheros accedidos más recientemente**. El ajuste del prompt de compactación se hace
**maximizando recall primero y afinando precisión después** — en ese orden, porque perder algo es peor que
arrastrar ruido. Y la forma más segura y ligera de todas: **limpiar resultados de herramienta**, no resumir.

## El límite que hay que tener presente al aplicar cualquiera de las cuatro

La compactación agresiva puede perder *«subtle but critical context whose importance only becomes apparent
later»*. Y hay una posición contraria dentro del mismo corpus, que conviene no ocultar: la arquitectura de
*Managed Agents* argumenta **contra** compactar y recortar, porque son decisiones **irreversibles**
—*«It is difficult to know which tokens the future turns will need»*— y propone un registro *append-only*
donde nada se descarta estructuralmente, del que el harness lee los trozos que necesita.

Las dos posturas no son incompatibles, y su síntesis es la que ya practicamos sin nombrarla: **comprimir lo
que se lee siempre, no borrar lo que se guarda**.

## Cómo está el Cerebro en cada palanca

| Palanca | En el Cerebro | Estado |
|---|---|---|
| *Just in time* | `raw/` inmutable en disco; el crudo **nunca** entra en contexto (regla 1 de coste); archivos calientes solo por `grep`/`tail`, jamás `Read` (regla 7) | **Bien resuelto**, y anterior a esta lectura |
| Divulgación progresiva | parcial: los skills especializados se leen bajo demanda, pero el núcleo se lee entero y siempre | **Tensión medida** (abajo) |
| Higiene de herramientas | `tools:` acotado en los 4 subagentes hoja y, desde el 2026-07-29, también en los dos ejecutores genéricos | **Resuelto** (punto 6 del backlog) |
| Compactación + notas + subagentes | memorias `.<x>-aprendizajes.md` con VIGENTE (techo ~80 líneas) e HISTÓRICO, `omniroute-compacta`, ingesta siempre por subagente | **Fuerte**: las tres a la vez |

**La tensión, con su número.** El núcleo que lee cada rutina en cada run son `CLAUDE.md` (23,2 KB) +
`reglas-nucleo.md` (23,6 KB) + `nucleo-comun.md` (16,2 KB) = **~63 KB fijos**, se apliquen o no. Es el
resultado deliberado de la fusión del 2026-07-20, que sustituyó **siete lecturas por una** cuando el coste
dominante era el número de turnos, no el tamaño del fichero — y con ese criterio fue la decisión correcta.
El principio de divulgación progresiva empuja en dirección contraria, y la fuente añade el argumento que la
fusión no contempló: *«Bloated CLAUDE.md files cause Claude to ignore your actual instructions!»* — el coste
de un núcleo grande no es solo tokens, es **adherencia**. Las dos posiciones son defendibles; la diferencia
es medible, y por eso va al backlog como punto con dato en vez de como corrección.

## El corolario económico, que es el que más ahorra

Nuestra regla 12 de disciplina de coste (el 89% del gasto es `cache_read` + `cache_write`, el coste de una
sesión crece **cuadráticamente** con los turnos) es este mismo concepto visto desde la factura en vez de desde
la calidad. Las dos lecturas coinciden en la misma conducta: **una tarea grande = una sesión**, cerrar y
empezar limpio. La fuente lo dice desde el otro lado: *«A clean session with a better prompt almost always
outperforms a long session with accumulated corrections.»* Que dos razonamientos independientes —coste y
recall— lleguen a la misma regla operativa es la mejor señal de que la regla es buena.

## Enlaces

[[ingenieria-de-agentes]] · [[harness-de-agentes]] · [[evaluacion-de-agentes]] ·
[[anthropic-orquestacion-y-harness]] · [[anthropic-evaluacion-herramientas-y-permisos]] ·
[[backlog-de-mejoras-del-sistema]] · [[formacion-ia-metodo]] · [[reparto-de-modelos]] · [[equipo-agentes]]
