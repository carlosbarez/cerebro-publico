---
title: "Harness de agentes — las 7 capas, y dónde está el Cerebro en cada una"
tipo: concepto
dominio: ingenieria-agentes
tags: [ingenieria-agentes, harness, etclovg, memoria, evaluacion, gobernanza]
fecha: 2026-07-29
revisado: 2026-07-29
fuentes: ["[[tier-a-accionable]]"]
---

# Harness de agentes — las 7 capas, y dónde está el Cerebro en cada una

**Concepto.** Un agente no es un modelo: es **modelo + harness**, y el harness es todo el sistema cerrado que
rodea a la invocación —prompts, herramientas, contexto, orquestación, trazas, verificación, permisos—.
La consecuencia práctica, que es lo que convierte esto en concepto y no en trivia: *la calidad de la
infraestructura, no la capacidad del modelo, es lo que pone el techo a la fiabilidad real de un agente*
(*Agent Harness Engineering: A Survey*, §13). Y no se lee como una lista de piezas separables sino como una
**estructura de dependencias**: cambiar una capa mueve las demás.

Para el Cerebro esto tiene una lectura incómoda y útil: cuando una rutina falla, el reflejo es pensar que
hace falta un modelo mejor. Casi siempre falta harness.

## Las 7 capas (taxonomía ETCLOVG) frente a lo que tenemos

| Capa | Qué cubre | Cómo está en el Cerebro | Estado |
|---|---|---|---|
| **E** — Ejecución | Aislamiento de lo que el agente ejecuta (sandbox) | Sin sandbox propio: se delega en el modo sandbox del harness y en los hooks que deniegan | Suficiente para un vault local |
| **T** — Herramientas | Protocolos, integración y **selección** de herramientas | `scripts/` como herramientas deterministas (`destila`, `vigila_tesis`, `verifica_destilado`), MCPs (datos, correo, tareas), permisos por subagente | **Hueco**: los ejecutores genéricos llevan *All tools* |
| **C** — Contexto | Memoria a corto, medio y largo plazo | El wiki entero como memoria de largo plazo; `.<x>-aprendizajes.md` con VIGENTE (techo ~80 líneas) + HISTÓRICO; `omniroute-compacta` | **Bien resuelto**, y anterior a esta lectura |
| **L** — Ciclo de vida | Orquestación de un agente y de varios | 12 rutinas, 6 subagentes, programación por cron, comandos `/cerebro-*` | Correcto, con un defecto de diseño en [[consejo-de-voces]] |
| **O** — Observabilidad | Trazas, coste, fiabilidad | `log.md` sellado, `ledger_de_coste.py`, `guardian_de_sesion.py`, traza `DESTILADO_POR` | **Fuerte** |
| **V** — Verificación | Evaluar resultados y **atribuir** el fallo | `verificador-adversarial`, `editor-jefe`, Brier en [[registro-de-predicciones]], `verifica_destilado.py` | Buena en juicio, **sin regresión** |
| **G** — Gobernanza | Permisos, auditoría, seguridad | 4 hooks que **deniegan**, `politica.py`, el límite ético de `reglas-nucleo.md` | **Fuerte** |

El patrón que sale del cuadro: el Cerebro está **fuerte en observabilidad y gobernanza, y flojo en
verificación sistemática** — mira mucho y mide poco. Coincide con la cifra del sector (89% de equipos con
observabilidad frente a 52,4% con evaluación offline) y con el punto 4 de
[[backlog-de-mejoras-del-sistema]].

## Los tres antipatrones con nombre propio

- **Context drift.** Por encima de ~100 turnos el agente repite trabajo hecho, se contradice y pierde el
  objetivo. La mitigación no es meter más tokens: *«fitting more tokens into a prompt does not by itself
  maintain that alignment»* (§12.2). Se ataca con compactación, subagentes aislados y verificación continua —
  las tres cosas que el Cerebro ya hace, por eso esta capa está sana.
- **Tool overload.** Un menú excesivo de herramientas degrada la **calidad de la planificación**: el agente
  elige mal o ignora opciones válidas. Es un coste de razonamiento, no solo de tokens; por eso "dale todas
  las herramientas por si acaso" es una decisión, no una comodidad.
- **Sandbox escape.** Configuración débil → acceso a lo que no toca. Aquí nuestra defensa no es un sandbox
  sino la denegación por hook, que es más barata y —según el dato de que solo el 17% de los usuarios atiende
  los diálogos de permiso y el 3% los comprende— probablemente más eficaz que preguntar.

## El trilema que hay que decidir cada vez

Coste ↔ calidad ↔ velocidad, y su hermano **capacidad ↔ control**. Toda decisión del Cerebro sobre modelos
vive aquí: [[reparto-de-modelos]] es, literalmente, este trilema resuelto por tipo de tarea. Con un corolario
que la tanda de hoy demostró: **las cifras sobreviven a la capa barata, las citas no**. Elegir la capa barata
no es "aceptar algo peor de forma uniforme", es aceptar un **perfil de fallo concreto** — y solo se puede
elegir bien si se sabe cuál es.

## El *harness coupling problem*

Un cambio local puede degradar el sistema entero, y un resultado **no es atribuible al modelo sin especificar
el harness**. Consecuencia directa para nosotros: dos destilados del mismo documento, mismo modelo y misma
temperatura salieron distintos —uno con citas traducidas, otro con 3/3 literales— porque cambió el texto del
encargo, y nada en el frontmatter registraba ese cambio. Sin trazabilidad del harness (no solo del
proveedor), una regresión de prompt es indetectable a posteriori. Es el punto 5 del backlog.

## Nota de evolución 2026-07-29 — lo que la tanda 2 mueve en este cuadro

La tanda 2 ([[anthropic-orquestacion-y-harness]] · [[anthropic-evaluacion-herramientas-y-permisos]]) no
cambia la taxonomía, pero corrige dos casillas y **abre una costura entre otras dos**:

- **T — Herramientas: el hueco está cerrado.** El punto 6 de [[backlog-de-mejoras-del-sistema]] se aplicó el
  2026-07-29: `ejecutor-sonnet` y `ejecutor-haiku` dejaron de llevar *All tools*. La casilla pasa de «hueco»
  a resuelto, con la fragilidad conocida de los UUID de conector anotada allí.
- **C — Contexto: sigue bien resuelta, y ahora tiene concepto propio.** [[ingenieria-de-contexto]] desarrolla
  el marco (*context rot*, presupuesto de atención, recuperación *just in time*, divulgación progresiva) y
  deja una tensión medida que antes no se veía: el núcleo que lee cada rutina son **~63 KB fijos**, y el
  principio de divulgación progresiva empuja en dirección contraria a la fusión del 2026-07-20. No es un
  error de la fusión; es un criterio nuevo (adherencia, no tokens) que ella no contempló.
- **V — Verificación: el diagnóstico «sin regresión» se mantiene y ahora tiene manual.**
  [[evaluacion-de-agentes]] trae el vocabulario y las cinco reglas (`pass@k` frente a `pass^k`, el 0% como
  tarea rota, los *evals* de un solo lado, puntuar resultado y no camino, leer transcripciones). Con dos
  huecos nuestros ya nombrados: la puerta dorada compara sin conocer su ruido y el `verificador-adversarial`
  solo se ha probado por el lado en que debe disparar.
- **La costura O↔G, que este cuadro no veía.** Somos «fuertes» en observabilidad y en gobernanza por
  separado, y **no se tocan**: los cinco hooks deniegan y **ninguno cuenta** sus denegaciones. Un
  guardarraíl sin telemetría no se puede distinguir de uno decorativo. Punto 12 del backlog.

Y una lectura que atraviesa las siete capas, dicha dos veces por dos autores distintos de la tanda: **cada
componente del harness codifica un supuesto sobre lo que el modelo no puede hacer solo, y esos supuestos
caducan**. Ninguna de nuestras constantes de calibración lleva anotado contra qué modelo se midió (punto 14).

## Enlaces

[[ingenieria-de-agentes]] · [[tier-a-accionable]] · [[backlog-de-mejoras-del-sistema]] ·
[[formacion-ia-metodo]] · [[evaluacion-de-agentes]] · [[ingenieria-de-contexto]] ·
[[anthropic-orquestacion-y-harness]] · [[anthropic-evaluacion-herramientas-y-permisos]] ·
[[reparto-de-modelos]] · [[equipo-agentes]] · [[consejo-de-voces]]
