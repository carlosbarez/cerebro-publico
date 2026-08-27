---
title: "Formación IA · Tanda 2A — orquestación, harness y contexto (blog de ingeniería de Anthropic)"
tipo: fuente
dominio: ingenieria-agentes
cobertura: completa (7 de 7 documentos)
tags: [ingenieria-agentes, harness, orquestacion, multiagente, contexto]
fecha: 2026-07-29
revisado: 2026-07-29
destilado_por: omniroute-kimi-k3
encargo: "informe:f3429db4"
fuentes: []
---

# Formación IA · Tanda 2A — orquestación, harness y contexto (blog de ingeniería de Anthropic)

Siete de los dieciséis documentos de la **tanda 2**: los que hablan de cómo se monta el sistema que rodea al
modelo. Los otros nueve —evaluación, herramientas, permisos— están en
[[anthropic-evaluacion-herramientas-y-permisos]]. Método, carriles y límites de la tanda:
[[formacion-ia-metodo]]. Lo que se propone cambiar en el Cerebro a partir de aquí:
[[backlog-de-mejoras-del-sistema]] § Tanda 2.

**Cómo leer las citas de esta página, y no es un detalle de forma.** Carlos autorizó para esta tanda una
regla más dura que la del resto del wiki: **cero citas procedentes del destilado**. Todo lo entrecomillado
de abajo se **recuperó del crudo** y se comprobó por `grep` normalizado contra él antes de escribirlo
(42 candidatas, 42 literales). El destilado aportó la estructura y el mapa; ninguna de sus comillas
sobrevivió al corte. El motivo, medido: de las 130 citas que los 16 destilados dieron por su cuenta, **31
eran paráfrasis en español entrecomilladas** —inverificables por construcción— y 2 eran alteraciones del
original. Detalle del recuento en [[formacion-ia-metodo]].

**Fuente de parte, y el sesgo tiene forma conocida**: es el blog de ingeniería de la empresa que fabrica el
modelo que ejecuta este vault. Lo aprovechable es la **mecánica descrita**, contrastable contra nuestro
sistema; el punto ciego es todo lo que un *vendor* no publica. Cada apartado lleva su lectura de interés
donde hace falta.

---

## 1. How we built our multi-agent research system — el patrón orquestador-trabajador, con su factura

La pieza central de la tanda y la que más se parece a lo que hacemos. **LeadResearcher** (Opus 4) planifica,
guarda el plan en memoria externa (la ventana se trunca a 200k), crea subagentes (Sonnet 4) que buscan en
paralelo, sintetiza, y un **CitationAgent** atribuye fuentes al final. La búsqueda se concibe como
compresión: *«The essence of search is compression: distilling insights from a vast corpus.»*

**Los números, que son lo que hay que retener** (evals internos de Anthropic, no auditados):

| Qué | Cifra | Contra qué |
|---|---|---|
| Multiagente vs. agente único | **+90,2%** | Opus 4 líder + Sonnet 4 subagentes frente a Opus 4 solo, en su eval interno de research |
| Coste en tokens | agente ≈ **4×** un chat; multiagente ≈ **15×** | de ahí que solo se justifique si la tarea lo paga |
| Varianza de BrowseComp | 3 factores explican el **95%**; el uso de tokens solo, el **80%** | los otros dos: nº de llamadas a herramientas y elección de modelo |
| Latencia con 3-5 subagentes en paralelo | **hasta −90%** de tiempo | en consultas complejas |
| Reescribir descripciones de herramientas (agente probador) | **−40%** de tiempo de completitud | para los agentes posteriores |

Y la frase que explica el 90,2% sin misticismo: *«Multi-agent systems work mainly because they help spend
enough tokens to solve the problem.»* No es que varias mentes piensen mejor; es que el paralelismo permite
gastar más contexto del que cabe en una ventana.

**Reglas de escalado de esfuerzo** que dan en el propio post, y que son directamente una tabla de caps como
la nuestra: hecho simple → 1 agente y 3-10 llamadas · comparación → 2-4 subagentes con 10-15 llamadas cada
uno · research complejo → >10 subagentes.

**Límites que ellos mismos declaran, y son los que importan para nosotros.** El *fit* es malo cuando la tarea
exige contexto compartido o tiene muchas dependencias: *«LLM agents are not yet great at coordinating and
delegating to other agents in real time»*. La ejecución síncrona crea cuellos: el líder no puede redirigir a
un subagente en curso y uno lento bloquea a todos. Los comportamientos son emergentes: un cambio pequeño en el prompt del líder altera a los subagentes,
y el no determinismo entre *runs* dificulta depurar. Y el aviso final:
*«When building AI agents, the last mile often becomes most of the journey.»*

**Cruce con el Cerebro.** El patrón es el nuestro: `ejecutor-sonnet` orquesta, los subagentes hoja devuelven
texto, [el roster plano](../../../.claude/sistema/reglas-nucleo.md) prohíbe que lo delegado vuelva a delegar. Lo que aporta de nuevo es
**el precio con número**: 15× es exactamente la contrapartida que se aceptó al aislar las lentes de
[[consejo-de-voces]] (punto 2 del backlog) y la razón de que `--ligero` siga existiendo. Y un patrón de
apéndice que ya practicamos sin haberlo leído: los subagentes **escriben a fichero y pasan referencias
ligeras** al coordinador, para evitar el teléfono roto — es la regla 14 de nuestra disciplina de coste
(*el orquestador recibe PUNTEROS, nunca contenido*).

---

## 2. Building Effective Agents — la taxonomía, releída con el ojo de la tanda 2

Ya estaba en la tanda 1 como **documento de control** ([[tier-a-accionable]] §4) y vuelve a serlo aquí. No se
repite lo dicho; se retiene lo que sostiene decisiones nuestras:

- **Workflows vs. agentes**: en un *workflow* el LLM y las herramientas se orquestan por rutas de código
  predefinidas; en un *agente*, el modelo dirige su propio proceso. Nuestras 12 rutinas son **workflows**
  (fases numeradas en su SKILL.md), no agentes autónomos — y eso es una elección, no una limitación.
- Los cinco patrones ordenados por complejidad: encadenado de prompts · enrutado · paralelización
  (*sectioning* y *voting*) · orquestador-trabajadores · evaluador-optimizador.
- La regla de gobierno de toda la zona: *«You should consider adding complexity only when it demonstrably
  improves outcomes.»* — que es literalmente la **regla 1 de [[ingenieria-de-agentes]]** escrita por otros.
- El dato que más rendimiento da por su tamaño: en su agente de SWE-bench,
  *«we actually spent more time optimizing our tools than the overall prompt»*. Traducido a nuestro caso: el
  tiempo invertido en `destila`, `verifica_destilado.py` o `trocea.py` rinde más que pulir el texto de un
  encargo. Coincide con lo medido en la tanda 1 (el hallazgo del punto 5: el encargo de `kimi-destila`
  llevaba meses roto y nadie lo vio, porque el problema no era el prompt sino la falta de traza).
- Y el aviso sobre *frameworks*: crean capas de abstracción que ocultan prompts y respuestas y dificultan
  depurar. Nuestro equivalente de «framework» son las plantillas y skills; el riesgo es el mismo.

---

## 3. Effective harnesses for long-running agents — artefactos en vez de memoria

El caso: construir un clon de claude.ai con el Agent SDK, sesión tras sesión, sin memoria entre ellas.
Tesis en tres palabras: *«compaction isn't sufficient.»* La continuidad no la da el contexto, la dan los
**artefactos que una sesión deja para la siguiente**: un `init.sh`, un fichero de progreso, una lista de
funcionalidades en JSON (>200 entradas, todas a `"passes": false` al empezar, y los agentes solo pueden tocar
ese campo) y un commit de git por sesión.

**El hallazgo empírico que más nos toca**, y que va contra nuestra convención de vault:
*«the model is less likely to inappropriately change or overwrite JSON files compared to Markdown files.»*
Todo nuestro estado compartido —[[pendientes]], [[watchlist]], [[promociones-pendientes]]— es Markdown que
los agentes reescriben. No tenemos un incidente medido de reescritura indebida, así que esto entra al backlog
como candidato honesto, no como urgencia.

**La rutina de arranque** que proponen (`pwd` → leer progreso y `git log` → leer la lista de tareas →
lanzar `init.sh` → prueba de humo antes de tocar nada) es el análogo exacto de nuestra **Fase 0** con la
memoria `.<x>-aprendizajes.md`. La diferencia: la suya termina en una **verificación ejecutable** antes de
producir; la nuestra, en leer.

**Tensión que dejan abierta y nos apunta directamente**: *«it's still unclear whether a single,
general-purpose coding agent performs best across contexts, or if better performance can be achieved through
a multi-agent architecture.»* Nosotros ya elegimos —12 rutinas especializadas con persona— y esa elección
sigue sin estar medida.

---

## 4. Harness design for long-running application development — generador ≠ evaluador

El documento más denso de la tanda en contrapartidas. Dos dominios (diseño frontend, con juicio subjetivo;
aplicación full-stack, con corrección verificable) y una sola palanca: **separar el agente que genera del que
evalúa**, porque los agentes *«reliably skew positive when grading their own work»*.

**La frase que justifica media zona de conocimiento**:
*«tuning a standalone evaluator to be skeptical turns out to be far more tractable than making a generator
critical of its own work»*. Y su corolario incómodo para nosotros: la **regla 8 de nuestra doctrina
anti-fallos** pide «autocrítica universal» del orquestador al cierre. Según esta fuente, eso es
estructuralmente lo que peor funciona — y por eso la CIO contrastando esa autocrítica no es un lujo, es la
pieza que la hace valer algo.

**Las cifras del coste, que son el argumento honesto en contra:**

| Caso | Sin harness | Con harness |
|---|---|---|
| *Game maker* (Opus 4.5) | 20 min / **$9** | 6 h / **$200** (>20×) |
| Resultado | parecía correcto, el modo juego estaba roto sin señal de error | jugable |
| *DAW* (v2, Opus 4.6) | — | 3 h 50 min / **$124,70** (planner $0,46 · Build R1 $71,08 · QA R1 $3,24 · …) |

Repárese en el reparto del DAW: el **QA cuesta el 8%** de lo que cuesta construir. Un evaluador separado es
barato; lo caro es generar. Es el mismo argumento económico que sostiene a nuestro `verificador-adversarial`
y al `editor-jefe`, ahora con proporción.

**Los límites que declara el autor y que hay que leer enteros**, porque impiden importar el patrón con
ingenuidad:

- El evaluador **sigue siendo un LLM sesgado a la indulgencia**. La separación no elimina la lenidad: hicieron
  falta varias rondas de calibración leyendo *logs*. De fábrica, aprobaba errores legítimos.
- Persisten tras el ajuste: problemas de *layout*, interacciones poco intuitivas y errores en funcionalidad
  profundamente anidada que el evaluador nunca ejercitó.
- **La redacción de los criterios sesga el resultado de formas no anticipadas** («museum quality» produjo una
  convergencia visual concreta). Aplicable literalmente a nuestras rúbricas del `editor-jefe`.
- El evaluador **solo aporta cuando la tarea está más allá de lo que el modelo resuelve solo con fiabilidad**;
  por debajo de ese límite es *overhead* — y el límite se mueve con cada modelo.
- El primer intento de simplificar el harness fue un corte radical y **fracasó**: no sabían qué piezas eran
  portantes. Pasaron a **ablación de un componente cada vez**.

**Y la tesis que sobrevive a los modelos**: *«every component in a harness encodes an assumption about what
the model can't do on its own, and those assumptions are worth stress testing»*, con su consecuencia contra
la idea de que el andamiaje importará menos: *«the space of interesting harness combinations doesn't shrink
as models improve. Instead, it moves»*. Para el Cerebro: cada hook, cada cap y cada `--tipo` de `destila`
codifica un supuesto sobre lo que el modelo no puede hacer, y ninguno tiene fecha de revisión.

---

## 5. Building a C compiler with a team of parallel Claudes — dónde se rompe el paralelismo

El experimento extremo: **16 agentes en paralelo**, cada uno en su contenedor con un clon de un repo git,
en bucle infinito, **sin orquestador y sin comunicación entre ellos**; la sincronización son **ficheros de
bloqueo** en un directorio y el propio git. Escala: ~2.000 sesiones en 2 semanas, 2.000M tokens de entrada y
140M de salida, ~**$20.000** de API. Resultado: un compilador de C en Rust de **100.000 líneas** que compila
un Linux 6.9 arrancable en x86, ARM y RISC-V, con **99%** de acierto en la mayoría de suites de pruebas.

**El hallazgo útil no es el compilador, es el modo de fallo del paralelismo**:
*«Having 16 agents running didn't help because each was stuck solving the same task.»* Ante una tarea
monolítica los 16 chocaban con el mismo error y se pisaban. Solo funcionó al introducir un **oráculo
conocido** (compilar con GCC casi todo y solo un subconjunto con el compilador propio, refinando por
bisección). Lección transferible: el paralelismo es trivial cuando hay muchos fallos distintos, e inútil
cuando hay uno solo — y entonces lo que hace falta es descomponer con un oráculo, no añadir agentes.

**Las dos frases sobre verificación**, que son el puente con el bloque de evaluación:
*«It's important that the task verifier is nearly perfect, otherwise Claude will solve the wrong problem.»* y
*«It is easy to see tests pass and assume the job is done, when this is rarely the case.»*

**Higiene de contexto** que aplican y nosotros podríamos: las pruebas imprimen pocas líneas, los *logs* van a
fichero, el `ERROR` y su razón van **en la misma línea** para que un `grep` los recoja, y las estadísticas
agregadas se precomputan. Es la misma familia que nuestra regla 7 de coste (archivos calientes solo por
`grep`/`tail`, nunca `Read`).

**Y el aviso del autor, ex-pentester**: inquietud explícita por desplegar software que ningún humano ha
verificado. Nuestro análogo es directo — el límite ético 1: el agente propone, decide Carlos.

---

## 6. Scaling Managed Agents — desacoplar cerebro, manos y sesión

Arquitectura: separar el **cerebro** (Claude + harness, sin estado), las **manos** (sandboxes y herramientas,
intercambiables) y la **sesión** (un *log* append-only externo con primitivas `emitEvent`, `getEvents`,
`wake`). La tesis es la misma de §4, dicha desde el otro lado:
*«Harnesses encode assumptions about what Claude can't do on its own.»* Su ejemplo propio: Sonnet 4.5
terminaba tareas antes de tiempo por «ansiedad de contexto», así que añadieron reinicios de contexto al
harness; con Opus 4.5 el comportamiento desapareció y esos reinicios quedaron como **peso muerto**.

**La cifra**: aprovisionar el contenedor solo cuando el cerebro lo pide bajó el tiempo hasta el primer token
un **~60% en p50 y más del 90% en p95**. Autorreportada, sin metodología declarada.

**Lo aprovechable para un vault local de un operador** es poco y conviene decirlo: no tenemos contenedores,
ni VPC, ni escalado. Pero hay dos ideas que sí cruzan:

1. **La sesión como log append-only donde nada se descarta estructuralmente**, frente a compactación y
   recorte, que toman decisiones **irreversibles**: *«It is difficult to know which tokens the future turns
   will need.»* Nuestro `log.md` sellado y las memorias con HISTÓRico son exactamente eso, y esta fuente da
   el argumento de por qué el HISTÓRICO no se borra aunque no se lea.
2. **Credenciales inalcanzables por construcción, no por alcance restringido.** Argumentan contra el
   *narrow scoping* de tokens porque «codifica un supuesto sobre lo que Claude no puede hacer con un token
   limitado, y Claude es cada vez más listo». Nuestra defensa equivalente es estructural y ya existe:
   `hook_bloquea_credenciales.py` y el veto por ruta de `perfil/` en el router de OmniRoute.

---

## 7. Effective context engineering for AI agents — el contexto como presupuesto, no como almacén

El marco que da nombre a [[ingenieria-de-contexto]], donde está desarrollado. Aquí, lo mínimo para que la
ficha de fuente se sostenga sola:

- **Definición operativa**: *«good context engineering means finding the smallest possible set of high-signal
  tokens that maximize the likelihood of some desired outcome.»* Mínimo no es corto.
- **El fundamento físico**: *«as the number of tokens in the context window increases, the model's ability to
  accurately recall information from that context decreases»* — *context rot*, gradiente en todos los
  modelos, no un precipicio. Deriva de la arquitectura (relaciones n² para n tokens) y de datos de
  entrenamiento dominados por secuencias cortas.
- **Herramientas**: autocontenidas, eficientes en tokens y sin solape funcional, con la prueba que decide:
  *«If a human engineer can't definitively say which tool should be used in a given situation, an AI agent
  can't be expected to do better.»*
- **Recuperación *just in time*** en vez de precargarlo todo: el agente mantiene identificadores ligeros
  (rutas, consultas, enlaces) y carga en tiempo de ejecución. Los metadatos —jerarquía de carpetas, nombres,
  marcas de tiempo— **son señal**. Contrapartida declarada: explorar en tiempo de ejecución es más lento.
- **Tres técnicas para horizontes largos**: compactación (preservan decisiones de arquitectura, errores sin
  resolver y detalles de implementación; continúan con el resumen + los **5 ficheros más recientes**),
  toma de notas persistente fuera de la ventana, y subagentes con ventana limpia que gastan decenas de miles
  de tokens explorando y devuelven **1.000-2.000 tokens** destilados.
- **Límite declarado**: ventanas más grandes **no** resolverán esto, y la compactación agresiva puede perder
  *«subtle but critical context whose importance only becomes apparent later»*.

**Cruce**: nuestro modelo de tres capas —`raw/` inmutable, wiki como memoria de largo plazo, memorias de
agente con VIGENTE (techo ~80 líneas) e HISTÓRICO— es *just-in-time retrieval* con otro nombre, y la
disciplina de coste (crudo a disco, punteros entre agentes) es el mismo principio aplicado al bolsillo.

---

## Qué NO aporta esta mitad de la tanda

Dicho por su nombre, según la regla 1 de la zona:

- **Contenedores, VPC, peering y escalado horizontal** (§6). Un operador, un disco, sin remoto.
- **El bucle infinito de 16 agentes con $20.000 de API** (§5). El patrón aprovechable es el oráculo y la
  higiene de contexto, no la escala.
- **Puppeteer/Playwright y las pruebas de navegador** (§3, §4). No construimos interfaces.
- **La tesis de inversión que asoma** (el foso migra del modelo al harness). Es material de inversión y no
  pertenece a esta zona; si interesa, va a `sintesis/` por su propio camino y con su propia verificación.

## Enlaces

[[ingenieria-de-agentes]] · [[anthropic-evaluacion-herramientas-y-permisos]] · [[harness-de-agentes]] ·
[[ingenieria-de-contexto]] · [[evaluacion-de-agentes]] · [[backlog-de-mejoras-del-sistema]] ·
[[formacion-ia-metodo]] · [[tier-a-accionable]] · [[reparto-de-modelos]] · [[equipo-agentes]] ·
[[consejo-de-voces]]
