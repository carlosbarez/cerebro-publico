---
title: "Biblioteca «Formación IA» — método, límites y cómo se destila"
tipo: fuente
dominio: ingenieria-agentes
cobertura: en curso
tags: [ingenieria-agentes, metodo, destilado, verificacion, coste]
fecha: 2026-07-29
revisado: 2026-07-29
fuentes: []
---

# Biblioteca «Formación IA» — método, límites y cómo se destila

Corpus técnico que Carlos empezó a subir el **2026-07-29** a `raw/Formación IA/`: **16 PDFs, 3.169 páginas,
106 MB** sobre harness de agentes, orquestación multiagente, ingeniería de contexto y arquitectura de
sistemas con LLMs. **No es material de inversión.** Su propósito es distinto al del resto del corpus: no
alimenta tesis sobre empresas, alimenta **el Cerebro sobre sí mismo** — qué cambiar en las 12 rutinas, los
6 subagentes, los hooks y el reparto de modelos. Carlos avisó que irá añadiendo más.

**Va por dos tandas**, y conviene no confundirlas al leer las cifras de abajo: la **tanda 1** son esos 16
PDFs (papers, surveys y manuales; académica y de terceros), y la **tanda 2**, del mismo día, son **16
documentos del blog y la documentación de ingeniería de Anthropic** — mucho más aplicables y mucho más
interesados. Cada tanda tiene su propia sección de medición.

Esta página es el **método** (durable). El conocimiento destilado vive en las páginas de concepto de
`ingenieria-agentes/` y las de fuente en `fuentes/formacion-ia/`; el veredicto sobre qué cambiar de verdad
en el sistema, en [[backlog-de-mejoras-del-sistema]].

## Por qué esta biblioteca no entra por el flujo normal

Tres diferencias con la ingesta de una carta de Buffett, y las tres cambian el procedimiento:

1. **Ningún `--tipo` de `destila` servía.** Todos los encargos están enmarcados en inversión — el sistema
   arranca con *"Eres el brazo ejecutor del Cerebro de inversión de Carlos"* y `libro` dice literalmente
   *"un libro de inversión/finanzas"*. Un survey de harness engineering por ese carril sale contaminado de
   "implicaciones para la cartera". Se añadió el **`--tipo tecnico`** (2026-07-29): el único encargo del
   router que prohíbe hablar de inversión, y que pide patrones con nombre, contrapartidas, antipatrones y
   límites declarados. Ver [[reparto-de-modelos]].
2. **El reparto de carriles no es el habitual.** Los **libros y manuales de patrones** van a `tecnico`
   (mecánico → OmniRoute, gratuito): describen mecánica explícita, no hay tensión entre voces que perder.
   Los **papers y surveys** van a `informe` (carril de razonamiento, Kimi primero), porque tienen tesis,
   método y salvedades — y eso es exactamente lo que la capa gratuita se deja
   (la **omisión** es el fallo caro de esa capa, no la cifra inventada).
3. **El destilado no es el producto.** En una carta, el destilado *es* la página. Aquí el destilado es
   materia prima para una decisión de ingeniería sobre nuestro propio sistema. Por eso todo lo que
   sostenga un cambio de configuración se contrasta antes de firmarse.

## Qué hay en la biblioteca (2026-07-29)

**Tier A — accionable directo sobre el harness (336 pp, 8 documentos).** Es donde está el valor aplicable:

| Documento | pp | Carril |
|---|---|---|
| Agent Harness Engineering: A Survey | 71 | `informe` |
| fortiss — AI Engineering (informe institucional) | 120 | `informe` |
| Anthropic Economic Index — Cadences | 33 | `informe` |
| Building Effective AI Agents (Anthropic, empresa) | 30 | `tecnico` |
| 2026 Agentic Coding Trends Report | 18 | `informe` |
| Beyond the Strongest LLM: Multi-Agent vs Single-Agent | 9 | `informe` |
| The Last Harness You'll Ever Build (arXiv 2604.21003v3) | 7 | `informe` |
| [[salesforce|Salesforce]] — Orchestrating Multiple AI Agents Securely | 48 | `tecnico` |

**Tier B — teoría y manuales (2.833 pp, 8 documentos).** Fondo conceptual, mucho menos accionable por
página: Weiss (ed.) *Multiagent Systems: A Modern Approach to Distributed AI* (585) · *Enterprise Integration
Patterns* (574) · Shoham & Leyton-Brown *Multiagent Systems* (532) · Wooldridge *Introduction to MultiAgent
Systems* (365) · Alto *Building LLM Powered Applications* (343) · Chip Huyen *Designing Machine Learning
Systems* (339) · *A Comprehensive Overview of LLMs* (47) · *Workflow Modeling* (preview, 48).

**Límite de extracción a vigilar**: la presentación de Salesforce da **12k caracteres para 48 páginas** —
son diapositivas de imagen, así que su destilado es estructuralmente pobre y no representa el documento.
No usarla como base de nada sin OCR.

## Red de verificación: qué se midió en el documento de control

Antes del lote se gastó una llamada en un **documento de control** —*Building Effective AI Agents*, 30pp,
material que se puede auditar en frío— y se auditó a fondo. Dos hallazgos, en este orden:

- **Las "citas literales" salieron traducidas al español desde un PDF en inglés.** No es un detalle de
  estilo: una cita reconstruida es **inverificable por construcción**, y sin embargo tiene exactamente el
  mismo aspecto que una buena. Se corrigió prohibiéndolo en el encargo `tecnico` (copia carácter a
  carácter, en el idioma original, y "mejor 1 cita real que 4 verosímiles"). Tras el cambio: **3/3 citas
  literales exactas**.
- **Las cifras eran ciertas y bien atribuidas, pero una casi se declara falsa.** El destilado escribió
  "20-60%" donde el crudo dice *"20 to 60 percent"* **en palabras**. Un `grep` ingenuo con dígitos no la
  encuentra → la habría marcado como inventada. El error de la comprobación y el error del destilado se
  parecen demasiado.

De ahí sale la herramienta, no de una intuición: **`scripts/verifica_destilado.py`** contrasta cada cita
entrecomillada y cada cifra con unidad contra el crudo, normalizando tipografía, y da **tres** veredictos
—`OK`, `PARCIAL` (el número está, la unidad o el formato no: ve a leer el contexto) y `FALLA`—. Coste cero,
sin modelo, y con el mismo criterio que ya está codificado en memoria: lo que se puede comprobar con un
parser no se le pregunta a un modelo. Corre automáticamente tras cada destilado del lote.

**Lo que la red NO cubre, y por qué sigue haciendo falta leer:**
- **Atribución**: que la cifra exista no dice que sea del sujeto al que el destilado la cuelga. Ese es el
  modo de fallo medido de la capa gratuita, y solo se ve leyendo el contexto que el script imprime.
- **Omisión**: si el destilado se dejó algo del crudo, grepear lo escrito no lo detecta nunca. Es
  invisible por construcción. Se ataca preguntando *"¿qué había en el crudo que no está aquí?"*.

Corolario operativo: **de un destilado de capa gratuita se puede tomar la estructura y los patrones; no se
firma una cifra ni una cita sin que el verificador la haya visto.**

## Qué salió al medir la tanda entera (42 comprobaciones)

El survey de harness acabó destilado **en dos mitades por dos proveedores distintos** — un accidente del
proceso (Kimi se atragantó con el documento completo) que dejó la comparación más limpia posible: mismo
documento, misma dificultad, misma red de verificación.

| Mitad del survey | Proveedor | Citas literales | Cifras |
|---|---|---|---|
| pp36-71 | Kimi (`informe`) | **4 / 4** | 5 / 6 |
| pp1-35 | OmniRoute (`tecnico`) | **0 / 4** | 5 / 5 |

Y en el agregado de la tanda:

- **OmniRoute: 127 citas comprobadas, 42% literales** (54 `OK` / 73 `FALLA`). Cifras, en cambio, sólidas:
  26 `OK`, 11 `PARCIAL`, 2 `FALLA`.
- **Kimi: 11 citas reales comprobadas → 11/11 literales.** Muestra pequeña, y hay que decir por qué: los
  ficheros `.verif-*` del carril Kimi se generaron **antes** de arreglar el reconocimiento de comillas
  angulares «», así que su recuento automático marcaba 0 citas. El dato bueno es la reverificación a mano de
  3 documentos, no el agregado del script.

**La conclusión que gobierna esta zona: las cifras sobreviven a la capa barata; las citas no.** Elegir la
capa gratuita no es aceptar "algo peor" de forma difusa, es aceptar un **perfil de fallo concreto** —
estructura y números fiables, texto entrecomillado no. Sabiendo eso, se puede usar mucho y barato.

**Otros dos límites medidos, que afectan a cómo leer las páginas de esta zona:**

- **Atribución erosionada por el matiz.** El survey dice *up to 10× **for one model***; el destilado escribió
  "10× de mejora en benchmarks de codificación". La cifra existe, la atribución general es falsa. El grep
  aprueba esto sin pestañear: solo se caza leyendo el contexto.
- **Sesgo hacia el principio del trozo.** Con trozos de ~280k, la consolidación de *Designing Machine
  Learning Systems* cubrió datos y selección de modelo (principio) y **se dejó monitorización y deriva**
  (final), que era lo más aplicable. El límite de 300k del gateway permite trozos grandes; la atención dentro
  del trozo, no.

## Tanda 2 — el blog de ingeniería de Anthropic (2026-07-29, destilada, sin sintetizar)

Carlos subió el mismo día **15 artículos del blog de Anthropic** guardados como `.htm` (con su carpeta
`_files/` al lado) y la **guía oficial de buenas prácticas de Claude Code** en markdown — 16 documentos. No son papers ni manuales: son **posts de ingeniería de la casa que fabrica el modelo
que ejecuta este vault**, lo que los hace a la vez los más aplicables del corpus y los más interesados —
ver «Conflicto de interés» abajo. Volumen: **327k caracteres de texto útil (~82k tokens)**, un orden de
magnitud menos que los 3.169 pp de la tanda 1 y mucho más denso por página.

Cubren cinco frentes, y los cinco tienen contraparte directa en el Cerebro: orquestación multiagente ·
diseño de harness y agentes de larga duración · ingeniería de contexto · evaluación de agentes ·
herramientas, permisos y MCP.

**Carril elegido: `informe`, no `tecnico`.** Es una decisión, no un descuido. `tecnico` es mecánico
(OmniRoute) porque los manuales describen mecánica explícita y no hay tensión que perder; estos posts
sí tienen tesis, *trade-offs* y apartados de «qué no funcionó», que es exactamente lo que la capa
gratuita borra por omisión. Van al carril de razonamiento. Trazas del lote:
`ENCARGO_HASH=informe:f3429db4`, `DESTILADO_POR=omniroute-kimi-k3` (relevo activo hasta el 2026-08-02:
la cuota del CLI de Kimi está agotada, así que K3 entra por el gateway — mismo modelo, otra vía).

### El hallazgo del documento de control: el falso positivo que culpa al modelo

Se repitió el protocolo —una llamada al control (*Building Effective AI Agents*) auditada a fondo antes
del lote— y salió un modo de fallo **nuevo, y del lado nuestro**. La primera verificación dio 3/8. De las
cinco `FALLA`, **dos no eran del modelo, eran de mi extracción**: `BeautifulSoup.get_text("\n")` parte cada
etiqueta *inline* en su propia línea, así que `building the <em>right</em> system` queda en tres líneas y el
enlace de `SWE-bench` deja un espacio antes de la coma. Citas **literales y correctas** marcadas `FALLA`.

Es el peor tipo de falso positivo: gasta verificación humana en nada y, sobre todo, **enseña a desconfiar
del veredicto** — que es justo la señal que este sistema no puede permitirse degradar. Corregido en
`_ingesta_tmp/formacion-ia-tanda2/extrae_htm.py` (extracción por bloques + normalización de espaciado);
tras el arreglo, esa cita pasa a `OK`.

> **Regla que deja, y que vale para cualquier fuente futura:** antes de juzgar un destilado, **la cadena de
> extracción tiene que estar limpia**. Un `FALLA` solo acusa al modelo si el crudo con el que se compara
> es fiel al original. Aplica a `.htm`, a PDF de dos columnas y a cualquier OCR.

Los tres fallos que **sí** quedaron tras limpiar la extracción, ya clasificados:

| Qué escribió el destilado | Veredicto | Modo |
|---|---|---|
| «cierto nivel de confianza» | **Material** | La frase **no está en el crudo**: la sentencia original termina en *"along with the appropriate guardrails"*. Frase entrecomillada fabricada |
| «fuente común de error de clientes» | Menor | Traducción fiel de *"a common source of customer error"*, pero **entrecomillada en español**: inverificable por construcción. Modo ya conocido de la tanda 1 |
| «It's about building the \*right\* system» | Menor | Cita literal correcta con **énfasis markdown insertado dentro de las comillas** |

Y un cuarto que **no es del modelo sino de nuestra herramienta**: `verifica_destilado.py` marcó
`FALLA CIFRA 2. M`, que es el encabezado `## 2. Método` leído como cifra con unidad. Falso positivo del
parser → candidato de la tanda 2 del [[backlog-de-mejoras-del-sistema|backlog]].

### Qué salió al medir la tanda entera (228 comprobaciones, 16/16 destilados sin fallo)

| | Total | `OK` | `PARCIAL` | `FALLA` |
|---|---|---|---|---|
| **Citas** | 130 | **81 (62%)** | 0 | 49 (38%) |
| **Cifras** | 98 | 68 (69%) | 20 | 10 (10%) |

**Las 10 cifras en `FALLA` son, una por una, defectos de nuestro verificador — no hay ni una cifra
inventada en los 16 documentos.** Comprobadas a mano:

- **8 de 10** son el encabezado del propio destilado: `## 2. Método` parseado como «cifra 2 con unidad M».
- **2 de 10** son el **separador decimal español**: el destilado escribe `$4,06` y `2.000M tokens` donde el
  crudo dice `$4.06` y `2,000M`. La cifra es la misma; el parser no normaliza coma↔punto.

Ese es exactamente el mismo error de razonamiento que ya nos costó una tanda: **el fallo de la comprobación
y el fallo del destilado se parecen demasiado**. Con la corrección, el carril `informe` sobre este material
da **98/98 cifras correctas**. Las dos correcciones del parser van al [[backlog-de-mejoras-del-sistema|backlog]].

**Las citas confirman la conclusión que gobierna la zona, y la afinan**: 62% literales en el carril de
razonamiento, frente al **42% de OmniRoute mecánico** en la tanda 1. El carril bueno es medible y mejor
—20 puntos— **pero 38% sigue siendo un fallo de cada tres**, y el control demostró que entre esos
fallos hay frases entrecomilladas **fabricadas**, no solo traducidas. De ahí la primera regla de abajo.

### Las 49 citas en FALLA, clasificadas a mano: 0 fabricadas, y casi la mitad son culpa nuestra

El recuento automático de arriba dice **49 citas `FALLA` (38%)**. Al leerlas una a una contra el crudo —que
es el paso que el grep no puede dar— el número se descompone así, y la descomposición cambia la conclusión:

| Qué es en realidad | Cuántas | De quién es el fallo |
|---|---|---|
| **Paráfrasis en español entrecomilladas** | **31** | del modelo. Modo ya conocido: inverificable por construcción |
| **Alteración real del texto citado** | **2** | del modelo, y es el modo más fino que hemos visto |
| El **título del propio destilado** (`# Destilado: "…"`) | **10** | nuestro, dos veces |
| Cita literal correcta, tumbada por **tipografía** | **6** | del verificador |
| **Frases fabricadas de cero** | **0** | — |

**33 defectos reales frente a 16 artefactos nuestros**, y sumando las cifras (8 encabezados `## 2. Método` +
2 separadores decimales) el total de la tanda queda en **33 defectos y 26 falsos positivos**. Los detalles:

- **Los 10 títulos son un fallo encadenado.** `extrae_htm.py` no conserva el `<h1>`/`<title>`, así que el
  título del artículo **no existe en el crudo** (comprobado: `grep` del título de *Effective context
  engineering for AI agents* sobre su propio crudo devuelve 0), y el verificador cuenta como cita cualquier
  cosa entre comillas, incluido el encabezado del destilado — que no pretende citar nada.
- **Los 6 tipográficos**, uno por causa: punto final añadido · mayúscula inicial · comillas simples donde el
  crudo tiene dobles (2) · énfasis markdown `**` **dentro** de las comillas · elisión escrita con `…` cuando
  el separador por tramos solo reconoce `...` ASCII.
- **Las 2 alteraciones reales merecen nombre** porque son casi-literales y por eso peligrosas:
  `They are typically just LLMs…` citado como `Agents are typically just LLMs…` (sustitución de pronombre
  para que la cita se sostenga fuera de su párrafo) e `Inspiration for these practices came from…` citado
  como `Inspiration came from…` (supresión interna sin elipsis).

**Lo que esto corrige de la conclusión de arriba**: el «38% de citas falla» **sobreestima el defecto**. La
tasa real de defecto del carril de razonamiento sobre este material es **33/130 = 25%**, y su forma es casi
enteramente *una*: traducir al español y dejar las comillas. Lo que no cambia es la regla — una paráfrasis
entrecomillada es indistinguible de una cita buena, así que **de un destilado no se firma una cita**, se
recupera del crudo. Los seis arreglos del verificador van al punto 10 de la
[[backlog-de-mejoras-del-sistema|tanda 2 del backlog]].

### Estado

**Destilado: hecho** (16/16, en `_ingesta_tmp/formacion-ia-tanda2/destilados/`, junto a los crudos y al
extractor reejecutable). **Síntesis: hecha** (2026-07-29, en sesión aparte y a propósito — cruzar 16
artículos contra las 12 rutinas y los hooks se hace peor con el contexto lleno):

1. ✓ Leídos los `PARCIAL`/`FALLA` de los 16 `.verif-*`. Resultado en el apartado de arriba.
2. ✓ Páginas de fuente: [[anthropic-orquestacion-y-harness]] (7 documentos) y
   [[anthropic-evaluacion-herramientas-y-permisos]] (9), cada una con su `.verif-*` propio y su lectura de
   residuos escrita en la cabecera. Conceptos nuevos: [[evaluacion-de-agentes]] e
   [[ingenieria-de-contexto]]; nota de evolución en [[harness-de-agentes]].
3. ✓ **Tanda 2 del [[backlog-de-mejoras-del-sistema|backlog]]**: 7 puntos (10-16), pendientes de decisión de
   Carlos. Las tres de P1 salen de medir nuestras propias herramientas mientras se destilaba este material,
   no del material — cumple la regla 1 de [[ingenieria-de-agentes]] por construcción.

**Las 42 citas de las dos páginas de fuente se recuperaron del crudo, no del destilado**, y las 42 pasaron
el `grep` normalizado. Es la regla que Carlos autorizó abajo, aplicada literalmente.

**Dos reglas que Carlos autorizó el 2026-07-29 para esta tanda concreta, antes de sintetizar nada:**

- **Cero citas procedentes del destilado.** El control demostró que el carril de razonamiento *también*
  fabrica frases entrecomilladas («cierto nivel de confianza»). En las páginas de la tanda 2 se escribe
  **paráfrasis**; si una cita literal merece la pena, se recupera **del crudo** y se comprueba por `grep`
  antes de entrecomillarla. No es una regla más estricta por gusto: elimina una **categoría entera** de
  fallo a cambio de casi nada, porque el valor de estos posts está en la mecánica, no en su prosa.
- **Sección obligatoria de interés del emisor** en el backlog de la tanda 2: *qué recomienda esto que nos
  conviene a nosotros* frente a *qué le conviene a Anthropic*. Un patrón puede ser bueno y estar
  publicado por el vendedor del sustrato al mismo tiempo; lo que no vale es no distinguirlo. Aplica sobre
  todo a lo que empuja hacia MCP, Agent Skills, el SDK y los modelos de la casa.

**Conflicto de interés, estructural y a tener presente al leer todo lo que salga de aquí**: es material de
*vendor*. Anthropic describe patrones que refuerzan su propio ecosistema (MCP, Agent Skills, el SDK, sus
benchmarks), no hay revisión por pares y las cifras son suyas y sin réplica. Su valor está en la **mecánica
descrita**, que es contrastable contra nuestro propio sistema; su punto ciego es todo lo que un vendor no
publica. La tanda 1 aporta el contrapeso académico.

## Enlaces

- [[ingenieria-de-agentes]] — hub de la zona.
- [[backlog-de-mejoras-del-sistema]] — qué se propone cambiar en el Cerebro a partir de esto.
- [[reparto-de-modelos]] — carriles, cascada y el `--tipo tecnico` nuevo.
- [[equipo-agentes]] · [[estado-del-sistema]] — el sistema que este material tiene que mejorar.
