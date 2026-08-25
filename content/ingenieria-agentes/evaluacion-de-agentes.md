---
title: "Evaluación de agentes — medir un sistema no determinista sin engañarse"
tipo: concepto
dominio: ingenieria-agentes
tags: [ingenieria-agentes, evaluacion, evals, calibracion, regresion, ruido]
fecha: 2026-07-29
revisado: 2026-07-29
fuentes: ["[[anthropic-evaluacion-herramientas-y-permisos]]", "[[tier-a-accionable]]"]
---

# Evaluación de agentes — medir un sistema no determinista sin engañarse

**Concepto.** Evaluar un agente no es evaluar un modelo. Un agente actúa en varios turnos, modifica estado y
tiene muchos caminos válidos hacia el mismo resultado, así que las técnicas de evaluación de modelos
—entrada, salida esperada, comparación— no sirven: hay que puntuar **el estado final del entorno**, con
varios intentos, sabiendo que lo que se mide es **modelo + andamiaje juntos** y nunca el modelo solo.

**Por qué esta página existe y no es teoría.** La tabla de [[harness-de-agentes]] sitúa al Cerebro fuerte en
observabilidad y gobernanza y flojo justo aquí: capa **V**, «buena en juicio, **sin regresión**». La cifra del
sector lo dice igual (89% de equipos con observabilidad frente a 52,4% con evaluación *offline*): mirar mucho
y medir poco es el estado por defecto de casi todo el mundo, y era el nuestro. Esta página es el manual para
salir de ahí.

## El vocabulario, que no es decoración

Sin estas cinco distinciones las conversaciones sobre calidad se vuelven humo:

| Término | Qué es | Por qué importa |
|---|---|---|
| **task** | una prueba con entradas y criterio de éxito | si dos expertos no llegan al mismo veredicto, la tarea está mal escrita |
| **trial** | *cada intento* de la misma tarea | se corren varios porque el sistema no es determinista |
| **grader** | la lógica que puntúa | varios por tarea; deterministas siempre que se pueda |
| **transcript** | el registro completo del intento | la evidencia; el número solo es el resumen |
| **outcome** | el **estado final del entorno** | distinto de lo que el agente *dice* que hizo |

## Las cinco reglas que evitan medir mal

**1. `pass@k` no es `pass^k`, y la diferencia decide qué se está prometiendo.** Con un 75% de éxito por
intento, pasar los **tres** intentos es 0,75³ ≈ **42%**. A k=10 las dos métricas divergen del todo:
`pass@k` tiende a 100% y `pass^k` a 0%. `pass@k` («al menos una vez») vale para una herramienta donde basta
un acierto y hay quien revisa; `pass^k` («todas las veces») es la que hay que usar para algo que corre de
noche sin nadie mirando. **Nuestras 12 rutinas son el caso `pass^k`.**

**2. Un 0% es casi siempre una tarea rota, no un agente incapaz.**
*«A 0% pass rate across many trials (i.e. 0% pass@100) is most often a signal of a broken task, not an
incapable agent.»* Los propios *benchmarks* públicos (Terminal-Bench, CORE-Bench, METR) tenían tareas
defectuosas: en METR la tarea pedía optimizar **hasta** un umbral y la puntuación exigía **superarlo**, así
que penalizaba a los modelos que obedecían. Y el caso extremo: Opus 4.5 pasó de **42% a 95%** en CORE-Bench
al arreglar los errores de puntuación — la métrica medía el *eval* roto.

Es exactamente la lección que ya nos costó dinero dos veces: *«--valida cazó un error mío en su primer uso»*
(punto 4 del backlog, la expectativa «8 pp» frente a «8 puntos porcentuales» del crudo) y el veredicto
`PARCIAL` de `verifica_destilado.py`, que nació porque «20-60%» parecía inventado y el crudo decía *20 to 60
percent* en palabras. **El fallo de la comprobación y el fallo del sistema se parecen demasiado.**

**3. Un *eval* de un solo lado produce optimización de un solo lado.**
*«One-sided evals create one-sided optimization.»* Si solo se prueba **cuándo una conducta debe ocurrir**, el
sistema aprende a dispararla siempre. Hay que probar los dos lados: el que dispara de menos y el que dispara
de más.

Este es el que más nos señala. El disparador de nuestro `verificador-adversarial` (`nucleo-comun.md` §
Verificación adversarial) es una lista de **cinco situaciones en las que debe intervenir** — y ni una sola en
la que **no** debería. Nunca hemos medido su tasa de falsos positivos, es decir, cuántas veces refuta algo
correcto. Un verificador que refuta demasiado no es cauto: es un verificador que se aprende a ignorar.

**4. Puntúa el resultado, no el camino.** *«It's often better to grade what the agent produced, not the path
it took.»* Verificar secuencias exactas de llamadas es frágil, porque hay muchas rutas válidas que nadie
anticipó. Lo mismo que ya sabemos de las tesis de inversión: **proceso > resultado** para juzgar decisiones,
pero **resultado, no ruta prescrita**, para juzgar ejecución.

**5. Ningún número se acepta sin leer transcripciones.** *«As a rule, we do not take eval scores at face value
until someone digs into the details of the eval and reads some transcripts.»* Es la misma regla que
`nucleo-comun.md` impone al `.verif-*.txt`: escribir arriba la **lectura de los residuos**, porque un
recuento sin interpretar se lee como cobertura y no lo es.

## El ruido: la parte que casi nadie mide, y la que más nos afecta

*Quantifying infrastructure noise* es el experimento más limpio de todo el corpus de esta zona porque es el
único que aísla una variable: mismo modelo, mismo harness, mismas tareas, **solo cambia la configuración de
recursos**.

| Recursos | Errores de infraestructura | Éxito |
|---|---|---|
| 1x | 5,8% | referencia |
| 3x | 2,1% (p < 0,001) | **dentro del ruido** (p = 0,40) |
| sin tope | 0,5% | **+6 pp** sobre 1x (p < 0,01) |

Lo importante es el tramo, no el total: **hasta ~3x los recursos solo arreglan fiabilidad** (lo que se caía
habría fallado igual); de 3x en adelante **cambian lo que el eval mide**. De ahí la regla:
*«leaderboard differences below 3 percentage points deserve skepticism until the eval configuration is
documented and matched»*, y su versión intuitiva: *«Two agents with different resource budgets and time
limits aren't taking the same test.»*

**Nuestra traducción, y es la que duele.** `scripts/dorado.py --corre` hace **una sola pasada por caso**. Ya
tenemos medido que dos ejecuciones idénticas del mismo modelo, mismo encargo y mismo documento dieron **1/2 y
0/2** en el eje CITAS (por eso nació el eje LITERALIDAD). Es decir: nuestra puerta dorada compara un número
con otro número **sin conocer la anchura de su propio ruido**. Cualquier «mejora» que veamos por debajo de esa
anchura es azar con dos decimales. Punto 1 de la [[backlog-de-mejoras-del-sistema|tanda 2 del backlog]].

## Saturación, y por qué un 100% es mala noticia

Un *eval* al 100% **ya solo detecta regresiones**: no da señal de mejora. Y cerca de la saturación, mejoras
grandes de capacidad aparecen como incrementos diminutos de puntuación (SWE-bench Verified pasó de 40% a
>80% en un año). La consecuencia práctica es de gestión de cartera de pruebas: los *evals* de capacidad
maduros se **gradúan** a suite de regresión y se sustituyen por otros más duros, en vez de celebrarlos.

## El camino corto: 20-50 tareas, sacadas de fallos reales

La objeción habitual («no tenemos cientos de casos») está contestada en la fuente: **20-50 tareas bastan para
empezar**, porque en desarrollo temprano los efectos son grandes. Y el material no hay que inventarlo — sale
del historial de fallos. El orden que proponen, condensado:

1. Tareas sacadas de **fallos reales**, no imaginados.
2. Tareas **inequívocas**: dos expertos deben coincidir en pasa/no pasa. Crear una solución de referencia que
   pase todos los *graders* (si no pasa, el *grader* está roto).
3. Conjuntos **balanceados**: casos donde debe actuar y casos donde no.
4. Andamiaje robusto: intentos **aislados**, entorno limpio, **sin estado compartido** — Claude sacó ventaja
   indebida leyendo el historial de git de intentos anteriores, y los intentos dejaron de ser independientes.
5. *Graders* **deterministas** cuando se pueda, LLM cuando haga falta (con rúbrica, un juez por dimensión y
   opción «desconocido»), humanos con parsimonia.
6. **Leer transcripciones**: los fallos tienen que parecer justos.
7. Vigilar la saturación.
8. Mantenimiento con dueño claro.

**Dónde estamos ya, sin habérnoslo propuesto.** Los pasos 1, 2 y 5 están hechos en el único dominio donde
medimos: `pruebas/dorado/` tiene dos casos nacidos de fallos reales, `--valida` comprueba que las
expectativas existen de verdad en el crudo (el paso 2, mecanizado), y los cinco ejes son grep normalizado
—*graders* deterministas—. Lo que falta es **ámbito**: `dorado.py` mide encargos de `destila`, y ninguna de
las 12 rutinas ni de los 6 subagentes tiene una sola tarea con respuesta conocida.

## El otro modo de fallo: la regresión difusa

*An update on recent Claude Code quality reports* documenta el escenario que más se parece a lo que nos puede
pasar: **tres cambios independientes de configuración**, cada uno afectando a una porción distinta del
trabajo en fechas distintas, con un efecto agregado que parece «degradación general» y no se reproduce. Los
cuatro fallos de detección son transferibles uno a uno:

- Las quejas eran **indistinguibles de la variación normal**.
- El *build* de pruebas internas **no era el público** — dos experimentos no relacionados enmascaraban el bug.
- Pasó revisiones, pruebas unitarias, e2e y verificación automatizada: vivía en la **intersección de tres
  sistemas**.
- El conjunto de *evals* era **demasiado estrecho**; solo al ampliarlo y hacer **ablaciones** apareció la
  caída del 3%.

Nuestro análogo directo: un cambio en `reglas-nucleo.md` o en un `SKILL.md` afecta a varias rutinas a la vez,
el efecto es difuso y **no hay línea base**. La ablación —quitar una línea y medir— es la técnica que nos
falta, y es gratis con `dorado.py`.

## La contrapartida honesta

Los *evals* **pueden crear falsa confianza** si no reflejan el uso real; cuestan por adelantado y rinden
tarde; el LLM-como-juez no es determinista, es caro y hay que recalibrarlo. Ninguno basta solo: el modelo
mental correcto es el **queso suizo** — los *evals* son una capa entre la monitorización, el feedback del
operador y la lectura manual. En un sistema de un solo operador, la lectura manual de Carlos sigue siendo
una capa insustituible, y esto no la reemplaza.

## Enlaces

[[ingenieria-de-agentes]] · [[harness-de-agentes]] · [[ingenieria-de-contexto]] ·
[[anthropic-evaluacion-herramientas-y-permisos]] · [[anthropic-orquestacion-y-harness]] ·
[[backlog-de-mejoras-del-sistema]] · [[formacion-ia-metodo]] · [[registro-de-predicciones]] ·
[[equipo-agentes]]
