---
title: "Formación IA · Tanda 2B — evaluación, herramientas y permisos (blog de ingeniería de Anthropic)"
tipo: fuente
dominio: ingenieria-agentes
cobertura: completa (9 de 9 documentos)
tags: [ingenieria-agentes, evaluacion, herramientas, mcp, permisos, gobernanza]
fecha: 2026-07-29
revisado: 2026-07-29
destilado_por: omniroute-kimi-k3
encargo: "informe:f3429db4"
fuentes: []
---

# Formación IA · Tanda 2B — evaluación, herramientas y permisos (blog de ingeniería de Anthropic)

Los nueve documentos restantes de la **tanda 2**: cómo se mide un agente, cómo se le diseñan las herramientas
y cómo se le ponen límites. La mitad de orquestación y harness está en
[[anthropic-orquestacion-y-harness]]. Método y límites de la tanda: [[formacion-ia-metodo]].

**Misma regla de citas que la página hermana**, autorizada por Carlos para esta tanda: **cero citas
procedentes del destilado**; todo lo entrecomillado se recuperó del crudo y se comprobó por `grep`
normalizado. **Misma advertencia de fuente**: material de *vendor*, sin revisión por pares, con cifras
propias y sin réplica. Los apartados 1-3 son los que más valor tienen para el Cerebro; los 4-8, decrecientes;
el 9 es documentación operativa.

---

## 1. Demystifying evals for AI agents — el hueco más grande que tenemos, con manual de instrucciones

Es **la fuente más accionable de toda la tanda 2**, porque ataca exactamente la casilla que
[[harness-de-agentes]] marca como floja: capa **V**, *buena en juicio, sin regresión*. El desarrollo del
concepto está en [[evaluacion-de-agentes]]; aquí queda la ficha.

**Vocabulario operativo** que adoptamos tal cual: *task* (prueba con entradas y criterios de éxito) ·
*trial* (cada intento; se corren varios por la varianza) · *grader* (la lógica que puntúa; varios por tarea) ·
*transcript* (registro completo) · *outcome* (**estado final del entorno**, distinto de lo que el agente
dice que hizo) · *suite*. Y una distinción que nos faltaba nombrar: se evalúa **modelo + andamiaje juntos**,
nunca el modelo solo.

**Las cifras y reglas que cambian decisiones:**

| Hallazgo | Cifra | Qué implica |
|---|---|---|
| SWE-bench Verified | de 40% a >80% en un año, cerca de saturación | un *eval* al 100% ya solo detecta regresiones |
| Opus 4.5 en CORE-Bench | **42% → 95%** tras arreglar errores de puntuación | la métrica medía el *eval* roto, no al agente |
| `pass@k` vs `pass^k` | con 75% de éxito por intento, pasar 3 seguidos = 0,75³ ≈ **42%** | a k=10 divergen: `pass@k`→100%, `pass^k`→0% |
| Tamaño para empezar | **20-50 tareas** bastan | los efectos son grandes al principio; 80/20 |
| Bolt | sistema completo de *evals* en **3 meses** | orden de magnitud del esfuerzo |

**Los cuatro avisos que valen más que las cifras**, porque son modos de fallo del evaluador y no del agente:

1. *«A 0% pass rate across many trials (i.e. 0% pass@100) is most often a signal of a broken task, not an
   incapable agent.»* Terminal-Bench, CORE-Bench y METR contenían tareas defectuosas. En METR, la tarea pedía
   optimizar **hasta** un umbral y la puntuación exigía **superarlo** — penalizando justo a los modelos que
   seguían la instrucción.
2. *«One-sided evals create one-sided optimization.»* Probar solo cuándo una conducta **debe** ocurrir produce
   sobreoptimización: el agente acaba disparando siempre. Hay que probar los dos lados, el que dispara de
   menos y el que dispara de más.
3. *«It's often better to grade what the agent produced, not the path it took.»* Verificar secuencias exactas
   de llamadas es frágil: hay muchos caminos válidos.
4. *«As a rule, we do not take eval scores at face value until someone digs into the details of the eval and
   reads some transcripts.»*

**Un modo de fallo de infraestructura que nos aplica literalmente**: Claude obtuvo ventaja indebida leyendo
el historial de git de intentos anteriores — **los intentos no eran independientes**. Cualquier eval nuestro
que corra sobre el vault vivo tiene ese problema por construcción.

**Límites que declaran**: los *evals* automatizados **pueden crear falsa confianza** si no reflejan el uso
real; el LLM-como-juez no es determinista, es más caro y necesita calibración humana frecuente; y ningún
método basta solo — modelo «queso suizo», donde el *eval* es una capa entre monitorización, A/B testing,
feedback de usuario y lectura manual de transcripciones.

---

## 2. Quantifying infrastructure noise in agentic coding evals — el ruido es mayor que la señal que leemos

El experimento más limpio de la tanda 2, y el único con estadística: mismo modelo, mismo harness, mismas
tareas, **solo cambia la configuración de recursos** del contenedor.

| Configuración | Errores de infraestructura | Éxito |
|---|---|---|
| 1x (spec como suelo y techo duro) | **5,8%** | referencia |
| 3x | **2,1%** (p < 0,001 frente a 1x) | dentro del ruido (p = 0,40) |
| sin tope | **0,5%** | **+6 puntos** sobre 1x (p < 0,01) |

La lectura fina es lo valioso: **hasta ~3x, más recursos solo arreglan fiabilidad de infraestructura** (las
tareas que se caían habrían fallado igual). De 3x a sin tope, los errores bajan 1,6 pp más pero el éxito sube
~4 pp — es decir, **los recursos extra cambian lo que el eval mide** (permiten instalar dependencias pesadas,
suites intensivas). En SWE-bench el mismo efecto, menor: **+1,54 pp** a 5x.

De ahí la regla que nos importa: *«leaderboard differences below 3 percentage points deserve skepticism until
the eval configuration is documented and matched»*, y la formulación que la explica:
*«Two agents with different resource budgets and time limits aren't taking the same test.»* Con el corolario
general: *«the boundary between "model capability" and "infrastructure behavior" is blurrier than a single
benchmark score suggests»*.

**Recomendación operativa que sí podemos copiar**: especificar **dos** parámetros (asignación garantizada y
techo duro **separados**, no un valor único), calibrar la banda para que suelo y techo caigan dentro del ruido
mutuo, **reportar el multiplicador**, y correr los *evals* en varios momentos para promediar. Tratar la
configuración como **variable experimental de primera clase**, documentada con el mismo rigor que el prompt o
la temperatura.

**Límites declarados, y son serios**: la réplica solo es rigurosa en modelos de Anthropic; el efecto
hora-del-día se observó **solo anecdóticamente**; el multiplicador óptimo varía por *benchmark*; y no publican
datos brutos ni tamaños de muestra del experimento principal.

**Por qué esto es P1 para nosotros**: `dorado.py --corre` hace **una sola pasada por caso**, y ya tenemos
medido que dos ejecuciones idénticas del mismo modelo dieron 1/2 y 0/2 en el eje CITAS. Estamos leyendo
diferencias por debajo de nuestro propio ruido. Punto 1 del backlog de la tanda 2.

---

## 3. An update on recent Claude Code quality reports — cómo se ve una regresión desde dentro

Post-mortem de ~un mes de quejas de degradación. **No hubo degradación del modelo**: hubo **tres cambios
independientes en la capa de producto**, cada uno afectando a una porción distinta del tráfico en fechas
distintas, cuyo efecto agregado parecía una degradación amplia e inconsistente.

1. **Esfuerzo de razonamiento por defecto** bajado de alto a medio (4 mar → revertido 7 abr) para recortar
   latencias de cola. En sus *evals* internos, medio daba inteligencia «ligeramente menor» con latencia
   mucho mejor. Los usuarios preferían lo contrario. *«This was the wrong tradeoff.»*
2. **Error de caché que borraba el razonamiento previo** (26 mar → arreglado 10 abr). Una optimización para
   sesiones inactivas limpiaba el *thinking* **en cada turno** en vez de una sola vez. Síntomas: olvido,
   repetición, elecciones raras de herramienta y fallos de caché que consumían los límites de uso más rápido.
   La causa raíz tardó **más de una semana** en confirmarse.
3. **Una instrucción anti-verbosidad en el system prompt** (16 abr → revertida 20 abr) causó una **caída del
   3%** en una evaluación, en dos modelos.

**Los cuatro fallos del proceso de detección, que son la lección entera:**

- Los reportes eran **indistinguibles de la variación normal** del feedback.
- El error de caché quedó **enmascarado en el uso interno** por dos experimentos no relacionados: el *build*
  interno de prueba **no era el build público**.
- Pasó revisiones humanas y automatizadas, pruebas unitarias, e2e y verificación automatizada: vivía en un
  caso límite (sesiones rancias) en la **intersección de tres sistemas**.
- El conjunto de *evals* del cambio de prompt era **demasiado estrecho**: semanas de pruebas sin regresión, y
  solo al ampliarlo y hacer **ablaciones** apareció el 3%.

Y la declaración de intención que enmarca todo: *«We never intentionally degrade our models»*.

**Cruce con el Cerebro, y es incómodo**: este es nuestro escenario más probable de fallo. Un cambio pequeño
en `reglas-nucleo.md` o en un `SKILL.md` degrada varias rutinas a la vez, el efecto es difuso, y nadie tiene
una línea base con la que compararlo. Su medida correctiva —*evals* amplios **por modelo** para cada cambio de
system prompt, más ablaciones continuas y **periodos de reposo** antes de desplegar— es la versión adulta de
nuestra **puerta dorada**, que hoy solo cubre los encargos de `destila`.

---

## 4. Writing effective tools for AI agents — herramientas para agentes, no APIs envueltas

**Tesis**: *«Tools are a new kind of software which reflects a contract between deterministic systems and
non-deterministic agents.»* Y el aviso central: *«More tools don't always lead to better outcomes.»*

**Los cinco principios**, que se leen como una auditoría de nuestro `scripts/`:

1. **Pocas herramientas de alto impacto**, orientadas a flujos de trabajo reales; no envolver *endpoints* 1:1.
   Consolidar cadenas frecuentes en una sola herramienta.
2. **Espacios de nombres** por servicio o recurso, para delimitar fronteras cuando hay muchas.
3. **Devolver solo señal alta**: `name`, `image_url`, `file_type` antes que `uuid` o `mime_type`. Resolver
   identificadores opacos a lenguaje natural **mejora la precisión de recuperación** y reduce alucinaciones.
4. **Eficiencia de tokens**: paginación, filtros, truncado con valores por defecto sensatos, y **errores
   redactados como instrucciones accionables**, no códigos opacos ni trazas.
5. **Prompt-engineering de las descripciones**: explicarlas como a un empleado nuevo; parámetros sin
   ambigüedad (`user_id`, no `user`).

**Cifras**: respuestas «concisas» frente a «detalladas` vía un parámetro de formato, **72 frente a 206
tokens** (~⅓); Claude Code trunca las respuestas de herramienta a **25.000 tokens** por defecto. Un error real
citado: el modelo añadía «2025» al parámetro de búsqueda web y sesgaba los resultados; se arregló mejorando la
descripción.

**El método, que es lo que de verdad transfiere**: evaluaciones sobre su espacio de trabajo interno real, con
**conjuntos de prueba retenidos** contra el sobreajuste, midiendo exactitud, tiempo por llamada y por tarea,
número de llamadas, tokens y errores — y luego **leyendo las transcripciones y el razonamiento**. Los
conjuntos retenidos revelaron mejoras incluso sobre implementaciones «expertas».

**Límite honesto y útil**: *no hay* una solución única para la estructura de respuesta (XML/JSON/Markdown) ni
para el esquema de nombres; **depende del agente y hay que evaluarlo**. Y el feedback del propio agente es
señal incompleta: **lo que omite puede importar más que lo que dice** — el mismo modo de fallo por omisión que
ya tenemos codificado como el fallo caro de la capa gratuita.

---

## 5. Code execution with MCP — mover el trabajo fuera de la ventana

**Problema**: con cientos de herramientas MCP, cargar todas las definiciones por adelantado y hacer pasar
cada resultado intermedio por el modelo dispara coste y latencia. **Propuesta**: presentar los servidores MCP
como **ficheros de código** que el agente descubre explorando el sistema de ficheros, cargando solo lo que
necesita, y procesar los datos **en el entorno de ejecución** antes de devolver nada.

Cifras, todas ilustrativas y de un único ejemplo construido —lo declaran—: carga bajo demanda
*«a time and cost saving of 98.7%»* (de 150.000 a 2.000 tokens); una hoja de **10.000 filas** de la que el
agente ve **5** tras filtrar en el entorno.

**Límite declarado, y es el que decide para nosotros**: ejecutar código generado por el agente exige
*sandboxing*, límites de recursos y monitorización, y esos costes hay que sopesarlos.

**Lectura para el Cerebro**: el patrón ya lo aplicamos, y por otra vía. `scripts/` **es** la capa de código
determinista entre el agente y los datos; `destila`, `verifica_destilado.py` y `trocea.py` procesan el crudo
fuera de la ventana y devuelven solo el destilado. La regla 1 de nuestra disciplina de coste («el crudo va a
disco, nunca a contexto») es la misma idea escrita antes de leer esto. Lo único nuevo y aprovechable es el
**descubrimiento progresivo**: no cargar el catálogo de herramientas entero de entrada. Y una observación
sobre nuestra propia mecánica: *«Although many of the problems here feel novel—context management, tool
composition, state persistence—they have known solutions from software engineering.»*

---

## 6. Equipping agents with Agent Skills — divulgación progresiva en tres niveles

Un *skill* es un directorio con un `SKILL.md` que el agente descubre y carga dinámicamente.
*«Progressive disclosure is the core design principle that makes Agent Skills flexible and scalable.»* Tres
niveles: (1) metadatos YAML —`name` y `description`— precargados en el system prompt; (2) el cuerpo del
`SKILL.md`, cargado **solo si** el agente lo juzga relevante; (3) ficheros referenciados que navega bajo
demanda. Consecuencia: *«the amount of context that can be bundled into a skill is effectively unbounded»*,
porque nunca se carga entero.

**Límites declarados**: seguridad (un *skill* malicioso puede exfiltrar datos o inducir acciones no
deseadas — instalar solo de fuentes confiables) y **fragilidad de activación**: si se dispara o no depende
enteramente de la calidad del `name`/`description`. **Ausencia notable**: ni una métrica de tasa de activación
correcta ni de sobrecoste.

**Cruce, y es una tensión medible con nuestra práctica.** Nuestros `.claude/skills-cerebro/*.md` son skills en
el sentido del formato, pero el núcleo se lee **entero y siempre**: `reglas-nucleo.md` (23,6 KB) +
`nucleo-comun.md` (16,2 KB) + `CLAUDE.md` (23,2 KB) = **~63 KB en cada run de rutina**, por diseño y con buen
motivo (la fusión de 2026-07-20 sustituyó siete lecturas por una). El principio de divulgación progresiva dice
lo contrario: cargar los metadatos y el cuerpo solo si aplica. Las dos posiciones son defendibles y la
diferencia es medible — va al backlog como punto con dato, no como corrección.

---

## 7. Claude Desktop Extensions — el patrón, no el producto

Anuncio de un formato de empaquetado (`.mcpb`: un ZIP con `manifest.json`, el servidor y sus dependencias)
para instalar servidores MCP con doble clic. **Sin métricas de adopción ni evaluación**: la especificación va
en versión **0.1** a propósito, y las salvaguardas descritas son de una versión preliminar.

**Aporta poco y conviene decirlo.** Lo único destilable más allá del producto es el patrón:
**manifiesto declarativo + paquete autocontenido + configuración de usuario tipada (con secretos en el
llavero del sistema) + sustitución de plantillas en tiempo de ejecución + *overrides* por plataforma**. Un
`manifest.json` por rutina que declare herramientas, parámetros requeridos y valores por defecto, validado
antes de activar, es concebible para nuestras 12 rutinas — pero hoy no resuelve ningún fallo que hayamos
tenido, así que se queda fuera del backlog por la regla 1.

---

## 8. How we built Claude Code auto mode — clasificar en vez de preguntar

Punto medio entre el *sandbox* (seguro y caro de mantener) y saltarse los permisos (cero fricción, cero
protección). Dos capas: una sonda de inyección de prompts que escanea las salidas de herramienta **antes** de
que entren al contexto, y un **clasificador de transcripción** que evalúa cada acción antes de ejecutarla, en
dos etapas (filtro rápido de un token sesgado a bloquear → cadena de razonamiento solo sobre lo marcado).

Diseño deliberado: el clasificador ve **solo mensajes de usuario y llamadas a herramienta**, no el
razonamiento del asistente ni los resultados. *«Instead, we want it to judge what the agent did, not what the
agent said.»* Incluir mensajes del asistente **empeoró** el rendimiento en su banco de pruebas — lo reportan
como evidencia, no como principio.

| Conjunto | Etapa 1 | Cadena completa |
|---|---|---|
| Tráfico real (n=10.000) | 8,5% falsos positivos | **0,4%** |
| Acciones excesivas reales (n=52) | 6,6% falsos negativos | **17%** |
| Exfiltración sintética (n=1.000) | 1,8% falsos negativos | **5,7%** |

La etapa 2 compra precisión con recall. Y lo publican sin maquillar: *«The 17% false-negative rate on real
overeager actions is the honest number.»* El 0,4% de falsos positivos es «sobrevivible» porque una denegación
vuelve como resultado de herramienta con instrucción de buscar una vía segura — **denegar y continuar** —, y
**3 denegaciones seguidas o 20 en total escalan a un humano** (en modo desatendido, terminan el proceso).

**Límites declarados**: n=52 es pequeño; el conjunto de exfiltración es sintético; y
*«It is not a drop-in replacement for careful human review on high-stakes infrastructure»* — está pensado
para quien hoy corre sin ningún guardarraíl.

**Cruce con el Cerebro, y hay dos.** (a) Nuestros hooks también **deniegan en vez de preguntar**, decisión ya
confirmada en el punto 9 del backlog de la tanda 1; esta fuente añade la mecánica que nos falta:
**denegar-y-continuar con contador y escalado**. Hoy un hook nuestro deniega y no cuenta nada. (b) El
clasificador se aplica **en los dos extremos del traspaso a un subagente** —al delegar, porque dentro del
subagente la instrucción del orquestador parece autorización del usuario, y al retornar—; nuestro
[roster plano](../../../.claude/sistema/reglas-nucleo.md) resuelve el mismo riesgo por otra vía, prohibiendo
que lo delegado delegue.

---

## 9. Best practices for Claude Code — la escalera de verificación

Documentación operativa, sin una sola cifra: *«Most best practices are based on one constraint: Claude's
context window fills up fast, and performance degrades as it fills.»* Lo aprovechable:

- **La escalera de imposición**, por coste creciente de montaje: pedirlo en el prompt → objetivo reevaluado
  cada turno → **hook determinista** que bloquea el cierre del turno → **subagente verificador** que intenta
  refutar el resultado. Y la regla de reparto que ya es nuestra: **quien hace el trabajo no es quien lo
  califica**.
- **`CLAUDE.md` es consejo; los hooks son deterministas.** Regla transferible y explícita: *si una instrucción
  se ignora repetidamente, conviértela en hook*. Es exactamente lo que hicimos en el punto 3 de la tanda 1.
- **La prueba por línea** para el fichero de instrucciones: *«¿quitar esto haría que el modelo cometiera
  errores?»* Si no, fuera. Y el aviso, en mayúsculas suyas: *«Bloated CLAUDE.md files cause Claude to ignore
  your actual instructions!»*
- **Reiniciar en vez de corregir**: *«A clean session with a better prompt almost always outperforms a long
  session with accumulated corrections.»* Con regla operativa: tras **2 correcciones fallidas** sobre lo
  mismo, sesión nueva. Es la versión micro de nuestra regla 12 de coste (higiene de sesión por tramos de
  contexto).
- **Y el límite que evita el exceso de celo**: *«A reviewer prompted to find gaps will usually report some,
  even when the work is sound»* — perseguir todos los hallazgos de un revisor lleva a sobreingeniería.
  Aplicable tal cual a nuestro `editor-jefe` y a su *punch-list*, y razón por la que el
  **tope de 3 pasadas** de `nucleo-comun.md` es correcto.

---

## Interés del emisor — qué nos conviene y qué le conviene a Anthropic

Sección obligatoria de esta tanda ([[formacion-ia-metodo]]). Un patrón puede ser bueno **y** estar publicado
por quien vende el sustrato; lo que no vale es no distinguirlo.

| Documento | Qué recomienda | A quién le conviene |
|---|---|---|
| Evals (§1) | medir con tareas propias antes de creerse un número | **A nosotros.** Es lo que reduce la dependencia del vendedor: mide tu caso, no su *benchmark* |
| Ruido de infraestructura (§2) | desconfiar de diferencias <3 pp entre modelos | **A los dos, y a ellos primero.** Desactiva las comparaciones de tabla clasificatoria justo cuando quedan por debajo de 3 pp. El experimento es sólido; el incentivo, evidente |
| Post-mortem (§3) | *evals* amplios y ablaciones antes de desplegar | **A nosotros.** Es autoacusatorio: cuesta reputación publicarlo |
| Herramientas (§4) | pocas herramientas, bien descritas, evaluadas | **A nosotros**, con un pero: el vehículo recomendado es MCP |
| MCP como código (§5) | ejecutar código que llama a servidores MCP | **A Anthropic.** Refuerza su protocolo y desplaza trabajo a su ecosistema. La idea subyacente —procesar fuera de la ventana— es buena y **no requiere MCP**: nosotros la tenemos con `scripts/` |
| Agent Skills (§6) | empaquetar la experiencia en skills con divulgación progresiva | **A Anthropic.** Es su estándar. El principio (cargar lo mínimo) es correcto e independiente del formato |
| Desktop Extensions (§7) | instalar MCP con un clic | **A Anthropic**, casi en exclusiva. Anuncio de producto |
| Auto mode (§8) | clasificador en vez de diálogos de permiso | **A los dos.** El 17% de falsos negativos publicado sin adornos da credibilidad al resto |
| Best practices (§9) | sesiones limpias, ficheros de instrucciones cortos, hooks | **A nosotros**, y en contra de su propio consumo: recomienda **gastar menos tokens** |

**El patrón**: cuando el consejo es *mide, desconfía y gasta menos*, coincide con nuestro interés; cuando es
*adopta este formato*, coincide con el suyo. Los dos pueden ser buenos consejos — pero se aceptan por razones
distintas y con cargas de prueba distintas.

## Enlaces

[[ingenieria-de-agentes]] · [[anthropic-orquestacion-y-harness]] · [[evaluacion-de-agentes]] ·
[[ingenieria-de-contexto]] · [[harness-de-agentes]] · [[backlog-de-mejoras-del-sistema]] ·
[[formacion-ia-metodo]] · [[tier-a-accionable]] · [[reparto-de-modelos]] · [[equipo-agentes]]
