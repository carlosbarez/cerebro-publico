---
title: "Formación IA · Tier B — los ocho documentos de fondo (2.833 pp)"
tipo: fuente
dominio: ingenieria-agentes
cobertura: parcial (destilado completo, aplicabilidad baja y declarada)
tags: [ingenieria-agentes, teoria, multiagente, patrones, mlops]
fecha: 2026-07-29
revisado: 2026-07-29
destilado_por: omniroute
fuentes: []
---

# Formación IA · Tier B — los ocho documentos de fondo (2.833 pp)

Los ocho documentos de fondo de la biblioteca —siete libros y un survey—, destilados en **27 fragmentos**
por la capa gratuita y luego consolidados en una ficha por libro. Esta página dice qué hay en cada uno y —lo
más útil— **qué parte nos sirve y qué parte no**, porque la mayor parte no nos sirve y fingir lo contrario sería el peor resultado de
la ingesta.

**Advertencia de fiabilidad, aplicable a toda la página.** Todo el Tier B salió del carril gratuito, donde en
esta tanda solo el **42% de las citas resultó literal** (54 de 127 comprobadas). Por eso aquí **no se cita
nada entre comillas** y no se sostiene ninguna cifra: se recogen **nombres de patrón, mecánicas y
contrapartidas**, que es lo que ese carril sí conserva bien. Además la consolidación arrastra un sesgo
medido: cubre mejor el principio de cada fragmento que el final (ver el punto 7 de
[[backlog-de-mejoras-del-sistema]]). Para cualquier uso serio de uno de estos libros, hay que volver al PDF.

---

## Con aplicación real

### Hohpe & Woolf — *Enterprise Integration Patterns* (574 pp)

El más rico de los siete libros: **~35 patrones con nombre propio** para mover mensajes entre sistemas que no se
conocen (Message Channel, Message Router, Content-Based Router, Splitter/Aggregator, Scatter-Gather, Process
Manager, Correlation Identifier, Dead Letter Channel, Claim Check, Routing Slip, Resequencer, Test Message…),
cada uno con su contrapartida explícita.

**Nuestro caso.** El 90% resuelve un problema que no tenemos: procesos concurrentes de larga vida entre
sistemas heterogéneos con fallos parciales y entrega no garantizada. Nuestras rutinas son secuenciales,
locales y reejecutables a mano. Pero hay tres ideas que **sí** se aplican, y una ya nos salvó:

- **Idempotent Receiver / ejecutar dos veces sin daño.** Hoy relancé un lote por error y la guarda de
  idempotencia evitó re-destilar 27 fragmentos. No hay que importar el patrón: hay que no olvidarlo nunca en
  un runner.
- **Dead Letter Channel** y su antipatrón (no revisar la cola de fallos). Nuestro equivalente es que un
  destilado fallido deje rastro en vez de exit 0 — punto 1 del backlog.
- **Test Message** (inyectar mensajes de prueba para comprobar que los componentes siguen vivos): es
  exactamente el conjunto dorado del punto 4 del backlog, con otro nombre y treinta años antes.

Y un antipatrón que conviene tener en la cabeza al añadir rutinas: **integration spaghetti**, la conexión
punto a punto que hace crecer los canales de forma exponencial.

### Chip Huyen — *Designing Machine Learning Systems* (339 pp)

Producción frente a academia: fiabilidad, escalabilidad, mantenibilidad. Aporta el vocabulario de
contrapartidas (latencia vs. throughput, coste vs. calidad, modelo simple vs. complejo) y antipatrones
transferibles a nuestro trabajo:

- **State-of-the-art trap**: lo que gana en un dataset estático no gana en producción. Traducción para
  nosotros: el modelo más capaz no es el mejor para una tarea mecánica — que es la tesis de
  [[reparto-de-modelos]] escrita por otro.
- **Human biases en la experimentación**: quien está entusiasmado con una arquitectura le dedica más tiempo y
  sesga la comparación. Aplicable con nombre propio a cómo evalué hoy dos prompts.
- **Data leakage** y la crítica a los *leaderboards* académicos (no capturan coste, justicia ni
  interpretabilidad).

**Hueco conocido**: la consolidación **no cubrió monitorización ni deriva de distribución** (pp. finales),
que es justo lo más aplicable a un sistema que corre solo todos los días. Pendiente de rescatar con troceo
por capítulo.

### Valentina Alto — *Building LLM Powered Applications* (343 pp)

El más cercano a lo que hacemos, y el más perecedero: gira alrededor de frameworks concretos (LangChain,
Haystack, Semantic Kernel, AutoGen) y de modelos de 2024. Lo que sobrevive al paso del tiempo son los
antipatrones de sistemas multiagente, que se leen como una lista de cosas que nos pueden pasar: **goal
hijacking** (un agente se apodera de la tarea y el resultado empeora), **cuellos de botella de comunicación**
entre agentes, e **inconsistencia de estado** por sincronización mal hecha del estado compartido. También la
contrapartida `stuff` vs `map_reduce` al resumir muchos documentos, que es literalmente el problema de troceo
al que me enfrenté hoy.

Sus cifras son de fiabilidad baja (varias son redondas y sin condición: "80% de precisión", "90% de
precisión") y **no deben usarse**.

---

## Sin aplicación hoy, y por una razón concreta

### Shoham & Leyton-Brown (532 pp) · Weiss, ed. (585 pp) · Wooldridge (365 pp)

Los tres son teoría académica de sistemas multiagente y comparten el supuesto que los inhabilita aquí:
modelan **agentes con intereses propios y en conflicto**. Su maquinaria es equilibrios de Nash y cómo
computarlos (Lemke-Howson, enumeración de soportes), diseño de mecanismos y subastas, CSP distribuidos
(*Asynchronous Backtracking*, algoritmos de filtrado por consistencia de arco, resolución hiperlógica),
protocolos de negociación y lógicas de conocimiento y creencia.

**Nuestros agentes son cooperativos por construcción**: no negocian, no compiten por un presupuesto y no
tienen función de utilidad propia — todos sirven el objetivo de Carlos. Aplicar diseño de mecanismos a un
equipo cooperativo es resolver un problema inexistente, y por eso está descartado explícitamente en el
backlog. Se vuelve relevante el día que haya agentes que compitan por un recurso escaso (por ejemplo, cuota
de Kimi entre rutinas simultáneas — hoy mismo apareció ese conflicto, resuelto a mano).

Del aparato de CSP distribuido sí hay una idea prestable, aunque no haya que implementarla: **compartir los
"nogood"** — los intentos que ya se demostraron imposibles — para que otro agente no repita el trabajo. Es lo
que hacen nuestras memorias `.<x>-aprendizajes.md` en su sección HISTÓRICO.

### *A Comprehensive Overview of Large Language Models* (47 pp)

Survey general de LLMs: arquitecturas, entrenamiento, familias de modelos. Contexto de fondo, cero
aplicación al harness. Además es el único documento de la tanda cuya segunda mitad quedó **sin destilar** al
cierre de la sesión.

### Sharp & McDermott — *Workflow Modeling* (preview, 48 pp)

Solo la vista previa comercial del libro, no el libro. Modelado de procesos de negocio "as-is/to-be". No hay
material suficiente para juzgarlo y **no se ha ingerido como fuente**: queda anotado como incompleto.

## Enlaces

[[ingenieria-de-agentes]] · [[tier-a-accionable]] · [[backlog-de-mejoras-del-sistema]] ·
[[formacion-ia-metodo]] · [[reparto-de-modelos]]
