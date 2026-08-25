---
title: "Backlog de mejoras del sistema — de la biblioteca «Formación IA» al Cerebro"
tipo: sintesis
dominio: ingenieria-agentes
tags: [ingenieria-agentes, backlog, harness, evaluacion, coste, gobernanza]
fecha: 2026-07-29
revisado: 2026-07-29
fuentes: ["[[tier-a-accionable]]", "[[tier-b-teoria]]", "[[formacion-ia-metodo]]", "[[anthropic-orquestacion-y-harness]]", "[[anthropic-evaluacion-herramientas-y-permisos]]"]
---

# Backlog de mejoras del sistema — de la biblioteca «Formación IA» al Cerebro

Producto de [[formacion-ia-metodo|la biblioteca de Formación IA]] (2026-07-29). Cada propuesta cumple la
regla 1 de [[ingenieria-de-agentes]]: **nombra el hueco concreto de NUESTRO sistema**, no el problema que el
paper resuelve en el suyo. Las que solo eran elegantes se quedaron fuera y están al final, dichas por su
nombre.

El agente propone; autoriza Carlos, una por una.

- **Tanda 1** (puntos 1-9, del corpus académico y de terceros): **resuelta**. P1 (1-3), P2 (4-6) y P3 (7)
  aplicadas el 2026-07-29 tras autorización de Carlos; 8 y 9 nunca fueron propuestas, sino confirmaciones de
  diseño. Cada una lleva su cierre al final del apartado, con lo que se construyó y lo que queda por medir —
  porque una mejora aplicada sin su señal medida es una mejora que solo *creemos* haber hecho.
- **Tanda 2** (puntos 10-16, del blog de ingeniería de Anthropic): **las tres P1 (10-12) aplicadas** el
  2026-07-29 con autorización de Carlos. Quedan **13-15** (P2 y P3) pendientes de decisión; 16 y 17 son
  confirmaciones de diseño. Del 11, el código está y **la medición está bloqueada** por el gateway caído:
  aplicado ≠ verificado, y el cierre lo dice. Empieza
  [más abajo](#tanda-2--del-blog-de-ingenieria-de-anthropic-2026-07-29).

Prioridad: **P1** = arregla algo que ya nos ha fallado y está medido · **P2** = tapa un hueco real sin
incidente todavía · **P3** = mejora de fondo.

---

## P1 · Las tres que ya nos han fallado hoy

### 1. `destila` da éxito (exit 0) cuando el modelo devuelve `[Sin contenido destilable]`

**El hueco, medido.** Kimi recibió el survey de harness completo (268k caracteres), se atragantó y devolvió
el marcador `[Sin contenido destilable]` — el que el propio prompt manda emitir *cuando la entrada está
vacía*. `destila` lo tomó por buen destilado y salió con **exit 0**. Pasó dos veces en la tanda de hoy
(survey completo y su mitad 1). Solo se detectó porque mi runner comprobaba el **tamaño** del fichero por su
cuenta; un llamante que confíe en el código de salida —lo normal— escribiría una página de fuente vacía y
la firmaría.

**Por qué importa más de lo que parece.** Es exactamente el patrón que ya está codificado en memoria como «toda [[degradacion-deja-rastro|degradación deja rastro]]»:
la degradación silenciosa. Aquí la señal existe (el marcador es una
cadena fija y conocida) y se está tirando a la basura.

**Propuesta.** En `scripts/destila`: si la salida de una capa es el marcador (o queda por debajo de un
mínimo de bytes), tratarlo como **fallo de esa capa** y seguir la cascada al proveedor siguiente en vez de
devolverlo como éxito. Es el comportamiento que la cascada ya tiene para un exit≠0; solo falta reconocer
este caso como lo que es.

**Señal de acierto (falsable).** Volver a lanzar el survey completo por el carril `informe`: hoy sale exit 0
con basura; con el cambio debe salir exit≠0 **o** un destilado real de OmniRoute. Verificable en una llamada.

> [!check] APLICADO 2026-07-29
> `scripts/destila` gana `destilado_util()`: una capa que devuelve el marcador de entrada vacía **con entrada
> no vacía**, o menos de `DESTILA_MINIMO` (400) caracteres no blancos, cuenta como **fallo de capa** y la
> cascada salta al proveedor siguiente. El suelo es absoluto a propósito —un relativo al tamaño de la entrada
> condenaría un TLDR legítimo de cinco líneas sobre 200k— y tiene escotilla explícita y visible
> (`DESTILA_MINIMO=0 destila …`). Aplicado en los dos puntos de decisión: el bloque de Kimi y la función
> `intenta()` de las capas gratuitas.
>
> **Probado con dobles, no supuesto** (stubs que imitan el fallo real del 29-jul, sin gastar una llamada):
> 6 casos unitarios del predicado (marcador solo · marcador bajo cabecera de `--lote` · destilado real de 880
> chars · lote donde un doc está vacío y el resto no · texto largo que contiene las palabras del marcador ·
> escotilla) y 3 de extremo a extremo. El caso que importaba de verdad es el último: **Kimi no-responde →
> OmniRoute sí destila → exit 0 con `DESTILADO_POR=omniroute`**. La cascada sigue viva; ahora además ve.
>
> Un fallo propio encontrado al probar: el patrón `${texto//$MARCADOR/}` sin comillas hacía que zsh leyera
> `[Sin contenido destilable]` como una **clase de caracteres** y borrara del destilado cualquier letra de ese
> conjunto — un destilado bueno habría bajado del suelo y habría sido descartado. Se caza con el caso 5.

---

### 2. El consejo de voces delibera en un solo contexto — y eso es *herding* medido

**El hueco.** [`/cerebro-consejo`](../../.claude/commands/cerebro-consejo.md) construye el caso alcista, el
bajista y el choque central **dentro de un mismo contexto**, voz tras voz. Cada voz que entra ya ha leído lo
que dijeron las anteriores.

**La evidencia (Tier A, verificada).** *Beyond the Strongest LLM* (§4.1-4.2, 12/14 ítems verificados contra
el crudo) mide precisamente ese diseño en un consejo de 4 modelos:

- Enseñar el recuento de votos en curso dispara el **efecto primer-voto de 54,1% a 67,8%** (en un modelo,
  de 40% a 80%): el orden decide el resultado.
- Revelar identidades produce autovoto: un participante pasa de 81,0% a **88,4%** de veces votándose.
- Y el coste real: *«orchestration often fails despite at least one participating agent producing the
  correct answer»* — en GPQA **al menos un agente acertaba el 95,5% de las veces y el consenso solo llegó al
  87,4%**; en el 31% de los errores, dos o más agentes tenían razón y la mayoría convergió mal.

Esos 8 puntos entre 95,5% y 87,4% no son falta de información: son **gobernanza del proceso**. Nuestro
consejo está en la versión fuerte del problema — no es que se vean los votos, es que hay un solo narrador
para todas las voces.

**Curiosamente, el corpus de inversión ya sabe esto.** Es el *estimate before discussion* de Kahneman y la
disciplina de proceso de [[michael-mauboussin|Mauboussin]] que el propio cerebro predica en
[[consejo-de-voces]]. Lo predicamos y no lo implementamos.

**Propuesta.** Que cada lente del panel emita su veredicto **aislada** (subagente propio, sin ver a las
demás) y que la síntesis llegue **después**, con todos los veredictos ya cerrados. El coste sube: N
subagentes en vez de un contexto. Ese es el precio explícito, y es la contrapartida que hay que decidir —
probablemente solo para decisiones con dinero detrás, no para una consulta ligera.

**Señal de acierto (falsable).** Contar la **tasa de disenso** (cuántas lentes discrepan del veredicto
final) en los próximos 5 consejos, contra los últimos 5 archivados en `sintesis/`. Si el aislamiento no
sube el disenso, el cambio no sirvió y se revierte.

> [!check] APLICADO 2026-07-29 · con una corrección a la propia señal
> `/cerebro-consejo` pasa a **aislado por defecto**: FASE 1 enmarca la pregunta y reparte, FASE 2 lanza un
> `ejecutor-sonnet` por lente **en paralelo y en un solo bloque** (una lente que espera a otra ya está
> condicionada), FASE 3 sintetiza con los veredictos cerrados. `--ligero` conserva el contexto único para la
> consulta exploratoria que no informa ninguna operación: el caro es el camino por defecto, y el barato una
> decisión explícita de Carlos. El protocolo de [[consejo-de-voces]] se actualizó en paralelo, con nota de
> evolución — es la fuente de verdad que el comando manda leer primero.
>
> Dos detalles que valen tanto como el aislamiento y no estaban en la propuesta:
> - **Los veredictos se exponen en el orden de la tabla de lentes, no en el de llegada.** El orden de llegada
>   es azar y volvería a meter el efecto primacía por la puerta de atrás.
> - **Solo la lente del operador ve la cartera**, y entra al final. Si las seis lentes saben qué tiene Carlos
>   hoy, el consejo mide sesgo de statu quo en vez de mérito.
>
> **La señal de acierto, tal como estaba escrita arriba, no se podía medir**: al ir a aplicarla resultó que
> **no hay ni un consejo archivado** en `wiki/sintesis/` — la línea base de "los últimos 5" no existe. Se
> sustituye por una **comparación emparejada**: el primer consejo aislado se corre también en `--ligero`
> sobre la misma pregunta (`disenso:` y `disenso_ligero:` en el frontmatter). Misma pregunta en vez de cinco
> distintas, y un contexto extra en vez de cinco debates. Queda **pendiente de medir** hasta el próximo
> consejo real: hoy el cambio está aplicado y **sin evidencia todavía**.

---

### 3. Ninguna cita ni cifra de capa gratuita estaba pasando por una comprobación mecánica

**El hueco.** La regla dura de verificación existe en `CLAUDE.md` y en
el núcleo de skills (`.claude/skills-cerebro/nucleo-comun.md`), pero se ejecutaba **a ojo**. Con 36 fragmentos en una tanda, auditar a
ojo es donde se cuela el error — y el error y el falso positivo se parecen mucho:

- Con el prompt inicial, las "citas literales" del carril gratuito salieron **traducidas al español desde un
  PDF en inglés**: reconstruidas, inverificables, y con el mismo aspecto que una buena.
- En cambio la cifra que *parecía* inventada ("20-60%") era **real**: el crudo dice *"20 to 60 percent"* en
  palabras. Un grep ingenuo la habría condenado.

**Lo hecho hoy** (herramienta nueva, ya en el repo, sin aplicar a nada retroactivamente):
`scripts/verifica_destilado.py` — contrasta cada cita entrecomillada y cada cifra con unidad contra el
crudo, normalizando tipografía, con tres veredictos: `OK`, `PARCIAL` (el número está, la unidad o el formato
no: ve a leer el contexto) y `FALLA`. Reconoce las comillas de las tres capas (`"` `«»` `“”`) y verifica las
**citas elididas por tramos y en orden**. Coste cero, sin modelo.

**El dato que justifica el reparto de carriles, medido en el MISMO documento.** El survey de harness se
partió en dos mitades y cada una cayó en un proveedor distinto:

| Mitad | Proveedor | Citas literales | Cifras |
|---|---|---|---|
| pp36-71 | Kimi (`informe`) | **4 / 4** | 5 / 6 |
| pp1-35 | OmniRoute (`tecnico`) | **0 / 4** | 5 / 5 |

Mismo documento, misma dificultad, misma red de verificación: **las cifras sobreviven en la capa gratuita;
las citas no.** Confirma con nuestra propia medición lo que `destila` ya decía por intuición del banco de
pruebas del 27-jul (los papers al carril de razonamiento).

**Propuesta.** Dos líneas en el proceso, no en el código: (a) `verifica_destilado.py` se ejecuta **siempre**
antes de ascender un destilado a página durable, y su salida se cita en la propia página; (b) de un
destilado de capa gratuita se puede tomar la **estructura**, nunca una **cita** — las citas se sacan del
carril de razonamiento o del crudo con parser.

**Señal de acierto.** Que ninguna página nueva de `ingenieria-agentes/` o `fuentes/` lleve una cita sin
respaldo en un `.verif-*.txt`. Auditable con grep desde `/cerebro-auditoria`.

> [!check] APLICADO 2026-07-29 · y mecanizado, no confiado a la memoria
> Las dos líneas de proceso están escritas donde se leen (`CLAUDE.md` § flujo de ingesta y
> `.claude/skills-cerebro/nucleo-comun.md` § Promoción a durable), pero eso solo no habría bastado: la regla
> **ya existía** en los dos sitios y se ejecutaba a ojo igualmente. Lo que cambia es que ahora hay un hook.
>
> `scripts/hook_exige_verificacion_destilado.py` (`PreToolUse` sobre `Write|Edit`) **DENIEGA** escribir en
> `wiki/` una página que declare `destilado_por:` y traiga una cita de ≥4 palabras si no existe su
> `.verif-<pagina>.txt` al lado. Deniega en vez de preguntar, según el punto 9 de esta misma página.
> Registrado en `.claude/settings.json` y en el inventario `.claude/sistema/politica.json`
> (`politica.py --verifica` → 5 reglas coherentes).
>
> **El ámbito es estrecho a propósito**, y ahí está el diseño: no toda página con comillas, sino la que
> **se autodeclara destilada**. Una página de `sintesis/` que cita a una página de fuente ya verificada no
> repite la verificación — la cadena de custodia pasa por la página de fuente. Blindar el eslabón de entrada
> y no todo el wiki es lo que evita la fricción que acaba con un guardarrail desactivado. La exención existe,
> pero **declarada y con motivo** (`verificacion: exenta — <razón>`), que es greppeable y auditable.
>
> **Probado con 11 casos**, incluidos los que no debe bloquear (página destilada sin citas, síntesis sin
> `destilado_por:`, cita de <4 palabras, wikilink entre comillas, fuera de `wiki/`, otra herramienta, JSON
> corrupto → fail-open). Y contra las dos páginas reales: **`tier-b-teoria` pasa** (a propósito no cita nada)
> y **`tier-a-accionable` quedaba bloqueada**, lo que obligó a hacer bien lo que ayer se dejó a medias.
>
> **Deuda pagada de ayer**: la verificación del Tier A vivía en el scratchpad, no en el repo. Ahora está en
> `wiki/fuentes/formacion-ia/.verif-tier-a-accionable.txt`, contra los 8 crudos concatenados (751.640
> caracteres): **7 de 8 citas literales**. La octava FALLA **a propósito** —es la cita defectuosa que la
> página exhibe como ejemplo de destilado mal hecho—, así que si algún día deja de fallar será señal de que
> alguien la "arregló" y borró el hallazgo. Los 9 PARCIAL son artefacto del ámbito (recuentos de páginas que
> escribí yo, "71 pp", "336 pp") y la 2ª FALLA es el separador de miles español frente al inglés. Eso va
> **interpretado en la cabecera del fichero**, no solo contado: un recuento sin leer se toma por cobertura.
>
> Un fallo propio encontrado al probar el hook: el regex de la exención usaba `\s`, que come el salto de
> línea, y el `---` que cierra el frontmatter hacía de "razón" — colaba una exención vacía. La razón tiene
> que estar en la misma línea.
>
> **Fricción falsa detectada y quitada antes de existir.** Pasado el hook por todo el wiki, marcaba 21
> páginas, y **5 eran notas de pulso** (`actualidad/pulso-video-*`). Exigirle verificación al pulso
> contradice la regla propia del Cerebro —*lo efímero no se verifica*— y habría metido un bloqueo diario en
> la rutina de vídeo sin ganar nada. `wiki/actualidad/` queda excluida por diseño: cuando algo del pulso
> **asciende** a durable, el hook muerde en la página destino, que es donde importa.
>
> **Cola retroactiva: 16 páginas durables** ya escritas con cita y sin respaldo (el hook las cazará en cuanto
> se editen; no reescribe nada por su cuenta). Y aquí un dato que vale por sí solo: **son exactamente las 16
> que la CKO escaló en su run 11 de hoy** ("backlog 16 páginas `destilado_por: openrouter`, ~14 sin
> verificar"), encontradas por otra vía y con otro criterio. Dos métodos independientes dando el mismo número
> es la mejor evidencia de que el hueco es real y de que está bien medido. Pagarla es trabajo aparte —
> requiere volver a los crudos, muchos ya fuera del scratchpad.

---

## P2 · Huecos reales, sin incidente todavía

### 4. Tenemos observabilidad y no tenemos evaluación

**La evidencia.** El survey (2ª mitad, 9/10 verificado) da la cifra del sector: **89% de los equipos usan
observabilidad frente a 52,4% que hacen evaluación offline** (LangChain, 2026), y sostiene que
*«traces are therefore not auxiliary debugging artifacts; they are primary evaluation data»* (§8.4.2). Su
conclusión: *«infrastructure quality, not model capability alone, sets the ceiling on real-world agent
reliability»* (§13).

**Nuestro caso.** Estamos en el lado bueno de la primera mitad y en el malo de la segunda. Observabilidad
tenemos y buena: `log.md` sellado, `ledger_de_coste.py`, `guardian_de_sesion.py`, las memorias
`.<x>-aprendizajes.md`, y hasta calibración de predicciones con Brier. **Evaluación offline: cero.** Hoy
cambié el prompt del encargo `tecnico` a mitad de tanda y lo único que dijo si el cambio mejoraba algo fui
yo mirándolo. Eso no escala y no deja rastro.

**Propuesta.** Un **conjunto dorado mínimo**: 3-4 documentos con respuesta conocida (el documento de control
de hoy es el primero) y las cifras/citas que un destilado correcto debe recuperar, en un fichero de
expectativas. `verifica_destilado.py` ya hace la mitad del trabajo. Se ejecuta cuando se toca un prompt de
encargo o cambia un proveedor. Barato: son llamadas gratuitas.

**Señal de acierto.** El siguiente cambio de prompt de `destila` viene con un antes/después numérico, no con
mi opinión.

> [!check] APLICADO 2026-07-29 · `scripts/dorado.py` + `pruebas/dorado/`
> Dos casos para empezar: el **documento de control** de la tanda (Anthropic, 30pp — el que ya se destiló
> dos veces con distinto encargo y dio citas traducidas frente a 3/3 literales) y **`tension-tres-voces`**,
> un documento sintético de 1,6k caracteres escrito a propósito para el fallo caro: tres voces que NO dicen
> lo mismo (Graham ancla en el precio, Zweig corrige el denominador, Buffett casi invierte a su maestro),
> una cita en inglés dentro de texto español, y una cifra con salvedad metodológica que un destilado
> descuidado presenta como propiedad general del método. Es barato, así que sirve de sonda de humo antes de
> gastar una llamada en un PDF entero.
>
> **Cinco ejes separados**, nunca un score único —un número agregado esconde cuál se degradó—: CITAS
> esperadas · CIFRAS con su sujeto **en la misma vecindad de texto** (400 caracteres; "la cifra está y el
> sujeto también, en párrafos distintos" es precisamente el fallo) · TENSIONES conservadas · TRAMPAS
> coladas · **LITERALIDAD**. Todo grep normalizado, reutilizando el normalizador de
> `verifica_destilado.py` para que haya **un solo criterio** en el sistema. Coste cero.
>
> **El eje LITERALIDAD no estaba en la propuesta y es el que sirve.** Nació de medir: el encargo pide "2-4
> citas literales" **a elección del modelo**, así que exigir una cita concreta mide suerte — dos runs
> idénticos de K3 dieron 1/2 y 0/2. La literalidad (de las citas que el destilado dio por su cuenta,
> cuántas están literales en el crudo) dio 8/8 las dos veces. Es la métrica del 42% frente al 100%, no
> depende de nuestras expectativas, y es la que de verdad separa los carriles.
>
> **`--valida` cazó un error mío en su primer uso**: puse la expectativa como "8 pp" y el crudo dice "8
> puntos porcentuales". Un conjunto dorado con expectativas falsas es **peor** que ninguno, porque condena
> al modelo por un fallo del evaluador — es la misma lección del veredicto PARCIAL. De ahí el campo
> `o_bien` con las formas alternativas de escribir la misma cifra.
>
> **Puerta dorada** (regla escrita, ejecución manual, decisión de Carlos): tocar un encargo obliga a correr
> el conjunto antes y después y pegar el antes/después. Sin hook a propósito — el dorado necesita llamadas
> de red, y un hook que las dispare bloquearía una edición durante minutos; esa fricción se acaba
> desactivando.

### 5. Nada registra *con qué versión del prompt* se destiló una página

**La evidencia.** El survey llama a esto el **harness coupling problem** (§11): un cambio local puede
degradar el sistema entero, y *«scores are not attributable to the model without specifying the harness»*.
En la misma línea: *«A harness design should therefore be read as a dependency structure, not as a checklist
of separable components»* (§10).

**Nuestro caso, hoy mismo.** Los dos destilados del documento de control salieron del **mismo modelo, mismo
documento y misma temperatura**: solo cambió el texto del encargo. El primero traía citas traducidas; el
segundo, 3/3 literales. El frontmatter `destilado_por:` habría dicho `omniroute` en los dos. Es decir:
tenemos trazabilidad del proveedor y **ninguna del prompt**, que es lo que de verdad cambió la calidad.

**Propuesta.** Que `destila` emita también una versión del encargo (un hash corto del texto del prompt basta)
en la línea de traza, y que las páginas de fuente la guarden junto a `destilado_por:`. Sin esto, una
regresión de prompt es indetectable a posteriori.

> [!check] APLICADO 2026-07-29
> `omniroute-destila` y `kimi-destila` emiten `ENCARGO_HASH=<tipo>:<8 hex>` por stderr, hermano de
> `DESTILADO_POR=`. Se hashea la **plantilla**, con el documento **y el `--contexto` fuera**: son metadatos
> de la llamada, no versión del encargo. Comprobado: el hash no se mueve al cambiar `--contexto` y sí al
> cambiar `--tipo`. Así dos documentos distintos con el mismo encargo comparten huella, que es justo lo
> que hace comparables dos runs del conjunto dorado. Los hashes de los dos wrappers **no son comparables
> entre sí** (son harnesses distintos), solo consigo mismos a lo largo del tiempo.
>
> **Aplicarlo destapó el fallo más gordo del día**, y es el argumento de este punto en carne propia:
> `kimi-destila` **no tenía encargo `informe` ni `tecnico`** —caían a `generico|*)`— y su plantilla capaba
> TODO destilado a *"Máximo 8 bullets o 250 palabras"*. La creencia central del reparto ("los papers van al
> carril de razonamiento con un encargo de investigación") era **falsa**: se le pedía destilar un survey de
> 268k caracteres en 250 palabras. Eso explica el `[Sin contenido destilable]` del punto 1 mucho mejor que
> "se atragantó": no se atragantó, se le pidió algo imposible. Nadie lo vio en su día porque **nada
> registraba con qué encargo se destilaba** — que es literalmente lo que este punto denuncia.
> Arreglado: los dos encargos añadidos (copiados de `omniroute-destila`, para que los dos carriles pidan lo
> mismo y sus destilados sean comparables) y el tope condicionado por tipo.

### 6. Los ejecutores genéricos tienen *todas* las herramientas

**La evidencia.** *Tool Overload* es antipatrón nombrado en el survey: un menú excesivo de herramientas
degrada la **calidad de planificación** (el agente elige mal o ignora opciones válidas), no solo el coste.

**Nuestro caso.** `ejecutor-sonnet` y `ejecutor-haiku` corren con **All tools** por diseño, para poder
ejecutar cualquier SKILL.md. Los subagentes especializados sí están acotados (el `recopilador-fundamental`
tiene 8 herramientas; el `editor-jefe`, 3). El hueco es solo de los dos genéricos, que son precisamente los
que ejecutan las rutinas programadas sin nadie mirando.

**Propuesta.** No tocar los especializados. Para los genéricos, evaluar un juego acotado por familia de
rutina en lugar de `All tools`. Contrapartida honesta: menos herramientas = una rutina puede quedarse a
medias por no tener la que necesitaba, y eso es peor que un plan mediocre. Requiere mirar qué herramientas
usan de verdad los últimos runs antes de decidir — dato que el ledger puede dar.

> [!check] APLICADO 2026-07-29 · con dato, tras haber estado a punto de aplicarlo sin él
> **Primero me equivoqué, y conviene que quede escrito.** Concluí que el dato no existía: el ledger no
> registra herramientas y un escaneo de las 1.383 transcripciones no encontró ninguna entrada de
> subagente. Con eso, la recomendación fue no aplicar el punto y construir telemetría primero — y Carlos
> la aceptó. Luego el propio `ledger_de_coste.py` señaló la ruta correcta: los subagentes escriben en
> `<sesion>/subagents/*.jsonl`, un subdirectorio que mi escaneo no miró. **Había 314 transcripciones y un
> `.meta.json` con el `agentType` al lado de cada una.** Rehecha la medición y presentada a Carlos, que
> revisó su decisión con el dato delante. La lección no es "medir antes de optimizar" —eso ya estaba— sino
> que **"el dato no existe" es una afirmación que también hay que verificar**.
>
> **Lo medido** (42 runs de `ejecutor-sonnet`, 3.136 llamadas; 10 de `ejecutor-haiku`, 321):
>
> | | ejecutor-sonnet | ejecutor-haiku |
> |---|---|---|
> | Bash · Read · Edit · Write | **91,0%** | **88,5%** |
> | MCP realmente usadas | Gmail (208) | Alpha Vantage (18), Gmail (15) |
> | Cola de ≤1 uso | 12 herramientas | 5 |
> | **Nunca usadas en ningún run** | Grep, Glob, WebSearch, WebFetch, Skill | ídem |
>
> Ninguno de los dos ha usado **Grep, Glob, WebSearch ni WebFetch jamás**: buscan con Bash. El juego
> acotado (`tools:` en el frontmatter de cada agente) cubre el **99,5%** de las 3.457 llamadas medidas.
> Dos decisiones dentro de la lista que no son obvias: **Glob y Grep entran aunque no se usen nunca**
> —son baratas y son la alternativa correcta a buscar con Bash, así que quitarlas premiaría el hábito
> peor—, y **de Gmail entran solo las de lectura**: en 52 runs no se usó ni una de escritura, y un
> ejecutor nocturno no tiene por qué poder tocar el correo.
>
> **Fragilidad conocida y anotada en los dos agentes**: los identificadores MCP llevan el UUID del
> conector. Si Carlos re-añade Gmail o los datos de mercado, el UUID cambia y la entrada deja de resolver
> **en silencio**. Si una rutina programada falla al leer el correo, es lo primero que hay que mirar.
> Vuelta atrás en un gesto: borrar la línea `tools:` devuelve `All tools`.

---

## P3 · De fondo

### 7. El troceo a 280k sesga el destilado hacia el principio del trozo

Medido hoy: la consolidación de *Designing Machine Learning Systems* (2 trozos, 339 pp) cubre bien datos y
selección de modelo —principio de cada trozo— y **se deja monitorización y deriva de distribución**, que
están al final del segundo y son justo lo que nos interesaba. El límite de 300k de OmniRoute permite trozos
grandes; la atención del modelo dentro del trozo, no. Trocear por capítulo (o a ~120k) y pedir cobertura
explícita por secciones. Coste: más llamadas, todas gratuitas.

> [!check] APLICADO 2026-07-29 · `scripts/trocea.py`
> Trocea por capítulo cuando el documento trae índice (PyMuPDF expone el TOC, nivel 1 solo: los
> subapartados harían trozos de dos páginas) y a ~120k por **corte de párrafo** cuando no —cortar a media
> frase la parte, y el modelo la reconstruye a su manera, que es como nace una cita inverificable—.
> Fusiona capítulos cortos y subdivide los largos, para no acabar con sesenta microtrozos ni con un trozo
> doble.
>
> **Probado contra el libro donde sabíamos exactamente qué se perdió**, y el diagnóstico salta a la vista:
> *Designing ML Systems* tiene 8 capítulos de nivel 1, y el séptimo es **"Why Machine Learning Systems
> Fail in Production"** — la monitorización y la deriva que la consolidación se dejó. Con 2 trozos de 280k
> ese capítulo caía en la cola del segundo; ahora tiene fragmento propio y etiquetado. (La cola de 1.143
> caracteres de "About the Author" se pegó al fragmento 7 en vez de quedarse suelta: la fusión funciona.)
>
> **Lo que de verdad ataca el sesgo no es el tamaño, es la etiqueta.** Cada fragmento lleva su cabecera
> `[FRAGMENTO i de N — <sección>]` **dentro** del texto, y el directorio un `MANIFIESTO.md` con la tabla
> de secciones. Al consolidar se exige cobertura fragmento a fragmento contra esa tabla: así una sección
> ausente es una **omisión detectable** en vez de un silencio. Un destilado que se deja el último tercio
> parece completo — es el modo de fallo por omisión otra vez, y la etiqueta es lo que lo hace visible.

### 8. Compactación de contexto: esto ya lo hacemos bien

El survey describe **Context Drift Mitigation** (compactación + subagentes aislados + verificación continua)
y advierte que *«fitting more tokens into a prompt does not by itself maintain that alignment»* (§12.2).
Nuestro equivalente existe y es anterior: memorias de agente con VIGENTE (techo ~80 líneas) e HISTÓRICO, y
`omniroute-compacta` para comprimirlas. **Ninguna acción**: queda anotado como confirmación externa de un
diseño que ya estaba, no como mejora pendiente.

### 9. Los hooks que DENIEGAN, frente a los que preguntan: acierto confirmado

El survey cita que **solo el 17% de los usuarios atiende los diálogos de permiso y el 3% los comprende**
(Felt et al., 2012), y que introducir sandboxing en Claude Code **redujo un 84% los diálogos de permiso**
(Anthropic, 2025c) preservando la seguridad. Nuestros hooks (`hook_bloquea_fuente_hilo_principal`,
`hook_bloquea_credenciales`, `hook_bloquea_perfil_en_kimi`, `hook_bloquea_git_add_masivo`) **deniegan en vez
de preguntar**. Es la decisión correcta según ese dato y no hay nada que cambiar; se anota para que a nadie
se le ocurra "suavizarlos" a diálogos de confirmación más adelante.

---

## Descartado a propósito (regla 1: elegante ≠ nuestro problema)

- **Federación de agentes entre dominios de red, identidad y mTLS** ([[salesforce|Salesforce]], 48 diapositivas). Resuelve
  agentes de organizaciones distintas atravesando fronteras de confianza. Aquí hay **un operador, un disco,
  sin remoto**. Importarlo sería complejidad disfrazada de rigor. *(Además, esa fuente está mal capturada:
  12k caracteres para 48 páginas de imagen — ver el límite de extracción en [[formacion-ia-metodo]].)*
- **Colas de mensajes duraderas, garantías de entrega, sagas** (*Enterprise Integration Patterns*, 574 pp).
  Son patrones para procesos concurrentes de larga vida entre sistemas heterogéneos con fallos parciales.
  Nuestras rutinas son secuenciales, idempotentes y reejecutables a mano. Sí hay un patrón con posible
  aplicación (**Idempotent Receiver**: ejecutar dos veces sin daño), y de hecho hoy salvó la tanda — la
  guarda `YA ESTABA` del runner evitó re-destilar 27 fragmentos cuando relancé por error. No hace falta
  importarlo: hace falta no olvidarlo.
- **Teoría de juegos, subastas, protocolos de negociación y equilibrios** (Shoham & Leyton-Brown 532 pp;
  Weiss 585 pp; Wooldridge 365 pp). Modelan agentes **con intereses propios y en conflicto**. Nuestros
  agentes son cooperativos por construcción y comparten el objetivo de Carlos. Aplicable el día que haya
  agentes que compitan por un presupuesto — hoy no existe. Detalle en [[tier-b-teoria]].
- **La tesis de inversión que asoma en las fuentes** (el foso migra del modelo al harness, plataformas vs.
  frameworks). Es material de inversión y **no pertenece a esta zona**; los carriles `informe` la colaron en
  los destilados porque su encargo está enmarcado en inversión. Si interesa, va a `sintesis/` por su propio
  camino, con su propia verificación. Aquí se ignora.

---

# Tanda 2 — del blog de ingeniería de Anthropic (2026-07-29)

Producto de los 16 documentos de la segunda tanda ([[anthropic-orquestacion-y-harness]] ·
[[anthropic-evaluacion-herramientas-y-permisos]]). **Ninguna aplicada: las siete están pendientes de decisión
de Carlos.**

Dos avisos antes de leerlas, porque cambian cómo hay que pesarlas:

1. **Las tres de P1 no salen del material, salen de medir nuestras propias herramientas mientras se
   destilaba este material.** Eso es una señal buena y una mala: buena, porque cumplen la regla 1 por
   construcción; mala, porque significa que el rendimiento real de esta tanda está siendo, otra vez, encontrar
   defectos en el verificador antes que en las fuentes.
2. **Es material de *vendor*.** El apartado [Interés del emisor](#interes-del-emisor--que-nos-conviene-y-que-le-conviene-a-anthropic)
   es obligatorio en esta tanda y no es una formalidad: separa lo que se acepta porque es correcto de lo que
   se acepta porque nos empuja hacia el ecosistema de quien lo publica.

---

## P1 · Las tres medidas hoy, en nuestras propias herramientas

### 10. `verifica_destilado.py` produce casi un falso positivo por cada defecto real

**El hueco, medido a mano sobre las 228 comprobaciones de la tanda.** El resumen automático dice **59
`FALLA`** (49 citas + 10 cifras). Clasificadas una a una contra el crudo:

| Qué es en realidad | Cuántas | Culpa de |
|---|---|---|
| Paráfrasis en español entrecomilladas | **31** | el modelo (modo ya conocido: inverificable por construcción) |
| Alteración real del texto citado | **2** | el modelo |
| El título del propio destilado (`# Destilado: "…"`) | **10** | nosotros, dos veces |
| Cita literal correcta, tumbada por tipografía | **6** | el verificador |
| El encabezado `## 2. Método` leído como «cifra 2 con unidad M» | **8** | el verificador |
| Separador decimal español (`$4,06` frente a `$4.06`) | **2** | el verificador |
| **Frases fabricadas de cero** | **0** | — |

**33 defectos reales y 26 artefactos nuestros.** Casi la mitad de las alarmas son ruido, y el ruido no es
neutro: **enseña a desconfiar del veredicto**, que es exactamente la señal que este sistema no puede
permitirse degradar. Es la misma lección del falso positivo de extracción que ya documenta
[[formacion-ia-metodo]], ahora con el recuento completo.

**El detalle de los 26, porque cada uno tiene su arreglo distinto:**

- **Los 10 títulos son un fallo doble y encadenado.** (a) `extrae_htm.py` no conserva el `<h1>`/`<title>`, así
  que el título del artículo **no está en el crudo** (comprobado: `grep` del título de *Effective context
  engineering for AI agents* sobre su propio crudo devuelve 0). (b) El verificador cuenta como «cita»
  cualquier cosa entre comillas, incluido el encabezado del propio destilado — que no pretende ser una cita
  de nada.
- **Los 6 tipográficos**, uno por causa: punto final añadido · mayúscula inicial · comillas simples donde el
  crudo tiene dobles (2 casos) · énfasis markdown `**` **dentro** de las comillas · elisión escrita con `…`
  cuando el separador por tramos solo reconoce `...` ASCII.
- **Los 2 defectos reales del modelo que no son paráfrasis** merecen nombre porque son el modo de fallo más
  fino que hemos visto: `They are typically just LLMs…` citado como `Agents are typically just LLMs…`
  (sustitución de pronombre para que la cita se sostenga sola fuera de su párrafo) y
  `Inspiration for these practices came from…` citado como `Inspiration came from…` (supresión interna sin
  elipsis). **Las dos siguen siendo citas casi literales, y las dos son inverificables.**

**Y volvió a pasar hoy, escribiendo esta misma tanda.** El `.verif` de las dos páginas de fuente nuevas marcó
5 `FALLA CIFRA` y **ninguna era una cifra mala**: 2 son el separador decimal y 4 son mediciones nuestras
(los KB de `CLAUDE.md`, `reglas-nucleo.md`, `nucleo-comun.md` y su suma) que por definición no pueden estar en
el crudo. Van anotadas en la cabecera de los `.verif-*` para que nadie las «arregle» borrándolas.

**Propuesta.** Seis arreglos en `scripts/verifica_destilado.py` y uno fuera:

| # | Arreglo | Mata |
|---|---|---|
| a | ignorar lo entrecomillado dentro de un encabezado markdown | 10 |
| b | no leer como cifra un número que abre línea y va seguido de punto (`## 2. Método`) | 8 |
| c | normalizar coma↔punto decimal en los dos sentidos | 2 |
| d | despojar el énfasis markdown del interior de la cita antes de comparar | 1 |
| e | tolerar puntuación final y mayúscula inicial (ya normaliza a minúsculas; falta el punto) | 2 |
| f | reconocer `…` como marcador de elisión además de `...` | 1 |
| g | *(fuera del script)* que `extrae_htm.py` conserve el título como primera línea del crudo | — |

Lo de las comillas simples anidadas (2 casos) **se deja sin arreglar a propósito**: normalizar `'` a `"`
rompería `don't` y `haven't`, que es precisamente el falso positivo que el normalizador existe para evitar.
Prefiero 2 falsos positivos conocidos a un normalizador que se come las contracciones inglesas.

**Señal de acierto (falsable, y con trampa deliberada).** Reejecutar los 16 `.verif-*` con el script
arreglado: las `FALLA` deben caer de **59 a 33**, y las 33 supervivientes deben ser exactamente las 31
paráfrasis y las 2 alteraciones. **Si bajan de 33, el arreglo está tapando defectos reales y se revierte.**
El listado nominal de las 33 queda en el propio backlog para que la comprobación no dependa de mi memoria.

> [!check] APLICADO 2026-07-29 · 59 → 36, y la señal falsable estaba mal puesta
> **Lo primero, porque invalida la frase de arriba: el número 33 era mío y era incorrecto.** El objetivo
> alcanzable no era 33, era **36**, y la aritmética no cuadraba por dos motivos que se compensaban en mi
> cabeza y no en el papel: (a) los **2 casos de comillas simples anidadas** se dejan sin arreglar *a
> propósito*, así que siguen contando como `FALLA` — no se pueden restar del objetivo y a la vez declararlos
> no arreglables; (b) la cifra `2.000M` no era «separador decimal» como la clasifiqué a mano, sino
> **escala convertida**: el destilado escribe en millones españoles lo que el crudo dice como `2 billion`.
> Eso no lo arregla ninguno de los seis parches, y no es un defecto del modelo — la conversión es correcta.
>
> Medido, con el mismo lote de 16 y el mismo comando:
>
> | | antes | después |
> |---|---|---|
> | FALLA CITA | 49 | **35** |
> | FALLA CIFRA | 10 | **1** |
> | PARCIAL | 20 | **10** |
> | OK (citas + cifras) | 149 | **158** |
>
> Y la composición de las 36 supervivientes es exactamente la prevista: **31 paráfrasis en español + 2
> alteraciones reales + 2 comillas simples (no arregladas a propósito) + 1 escala convertida**. Las 33
> reales siguen ahí, comprobadas nominalmente: las dos alteraciones (`Agents are typically just LLMs…` y
> `inspiration came from knowing…`) siguen en `FALLA`, que es la mitad de la trampa que importaba.
>
> **La trampa se disparó en el otro sentido, y esto es lo que hay que retener.** El primer intento del
> arreglo `b` (exigir `\b` tras las unidades alfabéticas) mató los 8 encabezados… y también **10 cifras
> que estaban en `OK`**: los `N m` eran la `m` de **min**utos, que verificaban por pura casualidad porque
> `10,9 m` es subcadena de `10.9 min`. La unidad estaba mal leída y el veredicto salía bien. Rechazarlas
> sin nombrar la unidad de verdad **cambiaba un falso positivo por un falso negativo**, que es peor: la
> tabla de coste/tiempo de `harness-design` es material que citamos. Con `min|hr?|[kmg]b` en la lista, esas
> 10 vuelven con la unidad correcta y aparecen **5 cifras en horas que la línea base no veía en absoluto**.
> Moraleja: la señal falsable de un arreglo de verificador no puede ser solo «que bajen los FALLA».
> **Tiene que incluir «que no bajen los OK»** — si no, cualquier parche que estreche el detector parece un
> éxito.
>
> El arreglo `g` (fuera del script): la causa era que el `<h1>` de estos posts vive dentro de `<header>`,
> y `<header>` estaba en la lista de etiquetas que se **destruyen antes** de extraer. Ahora el título se
> captura antes y se escribe como primera línea del crudo. El `grep` que ayer devolvía 0 devuelve 1.

---

### 11. La puerta dorada compara dos números sin conocer la anchura de su propio ruido

**El hueco.** `scripts/dorado.py --corre` hace **una sola pasada por caso**. Y ya tenemos medido, en el
cierre del punto 4 de la tanda 1, que **dos ejecuciones idénticas** —mismo modelo, mismo encargo, mismo
documento— dieron **1/2 y 0/2** en el eje CITAS. Es decir: la herramienta que existe para decir si un cambio
de encargo mejora algo está comparando muestras de tamaño 1 de una variable que sabemos ruidosa.

**La evidencia.** *Quantifying infrastructure noise* es el único experimento con estadística de todo el
corpus de la zona, y aísla una sola variable: mismo modelo, mismo harness, mismas tareas, **solo cambia la
configuración de recursos**. Resultado: **+6 puntos porcentuales** entre la configuración más estrecha y la
sin tope (p < 0,01), con los errores de infraestructura cayendo de 5,8% a 0,5%. Y el tramo intermedio es lo
instructivo: de 1x a 3x el éxito **fluctúa dentro del ruido** (p = 0,40). De ahí su regla:
*«leaderboard differences below 3 percentage points deserve skepticism until the eval configuration is
documented and matched»*, y su formulación corta:
*«Two agents with different resource budgets and time limits aren't taking the same test.»*

A eso se suma la distinción `pass@k` / `pass^k` de *Demystifying evals*: con 75% de éxito por intento, pasar
tres seguidos es 0,75³ ≈ **42%**. Nuestras rutinas corren de noche sin nadie mirando: son el caso `pass^k`,
y hoy medimos como si fueran `pass@1`.

**Propuesta.** `dorado.py --corre --intentos N` (por defecto **3**), que reporte por eje **mediana y rango**
en vez de un valor; y que `--compara` devuelva **`INDISTINGUIBLE`** cuando los rangos de «antes» y «después»
se solapan, en lugar de una flecha de mejora. Coste: ×3 llamadas, todas gratuitas.

**Señal de acierto (falsable, y probablemente incómoda).** Repetir con 3 intentos la comparación
`2026-07-29-capa-gratuita` frente a `2026-07-29-relevo-k3`, que ya está archivada en `pruebas/dorado/runs/`.
**Si algún eje que hoy muestra diferencia pasa a `INDISTINGUIBLE`, teníamos una conclusión falsa registrada
y firmada** — y ese es justamente el resultado que valida el cambio.

> [!check] APLICADO 2026-07-29 · el código está; la medición está BLOQUEADA por el gateway
> `--intentos N` (por defecto **3**) en `--corre`, y `--compara` reescrito para comparar **rangos** en vez
> de puntos: `INDISTINGUIBLE` cuando los rangos se solapan, y `MEJOR/PEOR en B` solo cuando no se tocan.
> El run guarda las pasadas individuales y un `resumen` con mediana, mínimo y máximo por eje.
>
> **Un detalle de diseño que no estaba en la propuesta y hacía falta:** el resumen guarda la **fracción**
> y no solo el numerador, porque en el eje LITERALIDAD el denominador **cambia entre pasadas** (son las
> citas que el destilado decidió dar por su cuenta). Comparar `4/5` con `8/8` por el numerador es comparar
> otra cosa.
>
> **Y lo que hace ahora mismo con los runs archivados es el resultado que buscábamos**, sin gastar una
> llamada: los detecta como `n=1` y se **niega a comparar**, imprimiendo la tabla con
> `n=1 -> NO CONCLUYENTE` en los doce ejes y un aviso arriba. Es decir: la comparación
> `capa-gratuita` ↔ `relevo-k3` que teníamos firmada **no sostenía ninguna de sus flechas**, incluido el
> `4/5 → 8/8` de LITERALIDAD que sonaba a mejora clara. Ya no dice que mejora; dice que no lo sabemos.
>
> **Lo que falta, y no es opcional:** la reejecución con 3 intentos. Se lanzó (12 destilados, todos
> gratuitos) y **falló entera con `exit 7` — gateway inalcanzable**: el proceso de `localhost:20128` acepta
> TCP pero no responde (`gateway_vivo()` → `False`). No lo reinicio yo: el PID es un `node` genérico y no
> sé qué más sirve. Queda en [[pendientes]] como tarea del operador. **Hasta entonces el punto 11 está
> aplicado pero no verificado**, y la diferencia importa: el código nuevo *dice* que no sabe, que ya es
> mejor que afirmar de más, pero no hemos medido todavía la anchura real del ruido.

---

### 12. Cinco hooks que deniegan, cero que cuentan

**El hueco, comprobado.** Ninguno de los `scripts/hook_*.py` escribe una traza de sus denegaciones
(`hook_exige_verificacion_destilado.py` abre ficheros, pero solo para leer). Consecuencia doble:

- **Una rutina nocturna que choque repetidamente con un hook lo hace en silencio.** Gasta turnos, reintenta,
  quizá degrada — y por la mañana no hay ni una línea que lo diga. Es una violación directa de la regla que ya
  tenemos codificada en memoria: *toda degradación deja rastro*.
- **No sabemos si un hook muerde.** Llevamos cinco hooks y **cero datos** sobre cuántas veces ha disparado
  cada uno. Un guardarraíl que nunca dispara puede ser un guardarraíl que funciona por disuasión, o puede
  tener el ámbito mal puesto y no proteger nada. Hoy no hay forma de distinguirlo.

Esto cae justo en la costura entre las dos capas donde [[harness-de-agentes]] nos da «fuertes»:
**O** (observabilidad) y **G** (gobernanza). Somos fuertes en las dos por separado y no se tocan.

**La evidencia.** *How we built Claude Code auto mode* construye exactamente la pieza que nos falta y la
llama **denegar-y-continuar**: la denegación vuelve al agente como resultado de herramienta con instrucción de
buscar una vía segura, y **3 denegaciones consecutivas o 20 en total escalan a un humano** (en modo
desatendido, terminan el proceso). Y la razón por la que pueden publicar un **17% de falsos negativos** como
*«the honest number»* es la misma que nos falta: **cuentan**. Sin contar no hay número honesto ni deshonesto,
hay silencio.

**Propuesta, deliberadamente corta.** Una línea *append-only* por denegación en `~/.cerebro/hooks.log`
(fecha · hook · herramienta · ruta · motivo) y un recuento en el watchdog del domingo, junto al ledger de
coste. **Nada de escalado automático todavía**: poner un umbral de «3 consecutivas» sin saber cuántas veces
muerde cada hook a la semana sería exactamente lo que nuestra propia lección de proceso prohíbe —
*medir antes de optimizar*. Primero el contador; el umbral, cuando haya datos.

**Señal de acierto.** Al cabo de una semana, un número por hook. Si alguno marca **0 en un mes**, o es
disuasorio o su ámbito está mal puesto — y en cualquiera de los dos casos hay que mirarlo, que hoy no se
puede.

> [!check] APLICADO 2026-07-29 · y de paso encontró algo, que era exactamente el objetivo
> `scripts/hooks_traza.py`: una línea JSON *append-only* por denegación en `~/.cerebro/hooks.log` (fecha ·
> hook · decisión · herramienta · objetivo · motivo · hilo-principal o subagente), más
> `--resumen [días]` para el recuento. Los cinco hooks lo llaman **después** de decidir y **antes** de
> imprimir, y `anota()` va envuelta en `try/except` completo: **un contador no puede romper un guardarraíl
> jamás**. Enganchado al paso del domingo en la regla 11 de `reglas-nucleo`, al lado del ledger de coste.
>
> **Dos decisiones que no estaban en la propuesta:**
> - **El hook de credenciales no registra su disparador.** Es el único cuyo detonante *es* material de
>   clave: un contador que copiase el comando al log convertiría el guardarraíl en la fuga que existe para
>   evitar. Anota la herramienta y `<orden bash omitida>`, nada más.
> - **`CEREBRO_HOOKS_LOG`** para que la prueba escriba en un log temporal. Sin eso, el primer recuento
>   semanal contaría mis pruebas como denegaciones reales y **el número que este punto existe para producir
>   nacería sucio**.
>
> **La prueba encontró dos cosas al primer intento, y ninguna se veía leyendo los ficheros:**
> 1. `hook_bloquea_credenciales` **disparó contra mi propio comando de prueba** — el caso llevaba la ruta
>    del fichero de claves en la línea de `Bash` y el hook lo bloqueó. Muerde de verdad, y hubo que partir
>    la cadena en el fichero de prueba para poder probarlo.
> 2. `hook_bloquea_perfil_en_kimi` **no dispara sin `CEREBRO_KIMI=1`**. Es correcto y está declarado en su
>    docstring, pero *no es obvio* leyendo `settings.json`: ahí figura como hook activo sobre
>    `Read|Grep|Glob`, y en una sesión normal es un no-op. Justo la ambigüedad «disuasorio o mal puesto»
>    que el contador viene a resolver — resuelta, y a favor del hook.
>
> **`pruebas/hooks/prueba_hooks.py`** (nueva, y era el hueco de verdad): hasta hoy **no había una sola
> prueba que ejercitara un hook**; sabíamos que existían por el fichero, no por verlos disparar. Comprueba
> las dos mitades —que deniegan **y** que anotan— sobre los cinco. Exit 0 hoy: **5/5 y 5/5**.
>
> Sigue sin haber **escalado automático**, a propósito y por escrito: el umbral se pone cuando haya datos.

---

## P2 · Huecos reales, sin incidente todavía

### 13. El `verificador-adversarial` nunca se ha probado en el caso en que NO debe refutar

**El hueco.** Su disparador en `nucleo-comun.md` § Verificación adversarial es una lista de **cinco
situaciones en las que debe intervenir** y **ninguna en la que no debería**. Nunca hemos medido su tasa de
falsos positivos: cuántas veces refuta o degrada una afirmación que era correcta. Y como su veredicto
`REFUTADA`/`DÉBIL` **degrada un veredicto de inversión**, un verificador demasiado celoso no es «prudente»:
es un verificador que se aprende a ignorar, y entonces no protege nada.

**La evidencia, y son dos que se refuerzan.** *Demystifying evals*: *«One-sided evals create one-sided
optimization»* — probar solo cuándo una conducta **debe** ocurrir produce un sistema que la dispara siempre;
hay que probar los dos lados. Y la documentación de buenas prácticas lo dice ya aplicado a este mismo rol:
*«A reviewer prompted to find gaps will usually report some, even when the work is sound»*, con la
recomendación de instruir al revisor para que marque **solo** huecos de corrección o de requisitos. Nuestro
paliativo actual —el **tope de 3 pasadas** del `editor-jefe`— trata el síntoma (el bucle de refinamiento), no
la causa (que el revisor encuentra siempre algo).

**Propuesta.** Un conjunto de **20 tareas balanceadas**, mitad y mitad, sacadas de casos reales ya archivados:

- **10 que DEBEN refutarse**: la lección Verisk (veredicto VIGILAR con +9% de margen que pasó sin verificar),
  la lección BofA-FMS (dos *newsletters* citando la misma encuesta contadas como dos fuentes), la razón falsa
  que `omniroute-enlaza` atribuyó a [[verisk]], y las cifras extremas sin fuente primaria que ya están en el
  historial.
- **10 que DEBEN sobrevivir**: afirmaciones bien fundadas de páginas durables ya verificadas, con su fuente
  primaria delante.

Graduar con `pass^k` sobre 3 intentos, y por separado: el falso negativo (deja pasar lo falso) y el falso
positivo (mata lo cierto) no se compensan y un número agregado los escondería.

**Contrapartida honesta.** No es gratis: son ~60 llamadas Sonnet por medición. Por eso se corre **al tocar el
prompt del verificador**, no periódicamente — igual que la puerta dorada.

**Señal de acierto.** Que el siguiente cambio de su prompt venga con FNR y FPR antes/después. Hoy los dos son
literalmente desconocidos.

---

### 14. Cada guardarraíl codifica un supuesto, y ninguno lleva fecha de caducidad

**La evidencia, dicha dos veces por dos autores distintos del mismo corpus.**
*«every component in a harness encodes an assumption about what the model can't do on its own, and those
assumptions are worth stress testing»* y *«Harnesses encode assumptions about what Claude can't do on its
own.»* Con un ejemplo propio que es exactamente la forma del riesgo: Sonnet 4.5 terminaba tareas antes de
tiempo por «ansiedad de contexto», así que añadieron reinicios de contexto al harness; con Opus 4.5 el
comportamiento **desapareció** y esos reinicios quedaron como **peso muerto** que nadie retiró hasta
auditarlo. Y la tesis que lo generaliza: *«the space of interesting harness combinations doesn't shrink as
models improve. Instead, it moves»* — no es que el andamiaje deje de importar; es que el andamiaje **correcto
cambia**.

**Nuestro caso, con la lista.** Constantes fijadas contra un modelo y un momento concretos, ninguna con
anotación de contra qué se midió ni cuándo revisarla:

| Constante | Dónde | Contra qué se fijó |
|---|---|---|
| `DESTILA_MINIMO=400` | `scripts/destila` | el fallo del 29-jul, sin barrido de sensibilidad |
| **2 empresas/run** | `reglas-nucleo.md` § Disciplina de coste | «3 provocó caídas por límite de sesión» — **con qué modelo, ya no consta** |
| **Tope de 3 pasadas** | `nucleo-comun.md` § Densidad | portado de un tercero, nunca medido aquí |
| **Techo ~80 líneas** de VIGENTE | `reglas-nucleo.md` § Memoria | criterio de legibilidad, no de recall |
| **~120k por trozo** | `scripts/trocea.py` | el sesgo medido con trozos de 280k |
| **Tramos 150/250/350k** de contexto | `reglas-nucleo.md` regla 12 | la auditoría de coste del 20-jul |
| **≤3 verificaciones/run** | `reglas-nucleo.md` § Disciplina de coste | presupuesto, no calidad |

El más ilustrativo es el de las 2 empresas: fue una decisión correcta y bien medida, y hoy **no sabemos
contra qué modelo se midió**, así que no sabemos si sigue siendo cierta.

**Propuesta, barata a propósito.** Un comentario `# calibrado: <fecha> · <modelo> · <con qué evidencia>`
junto a cada una de estas constantes, y un paso en el run profundo de la CKO **tras cada cambio de modelo**
que recorra esa lista y diga cuáles se revisaron. Es documentación en el punto de uso, no un sistema: si
hiciera falta construir algo para sostenerlo, la propuesta estaría mal dimensionada.

**Señal de acierto.** Que el próximo salto de modelo produzca una **lista explícita** de qué caps se revisaron
y cuáles se movieron, en vez de arrastrarlos en silencio como se arrastraron los reinicios de contexto del
ejemplo.

---

## P3 · De fondo

### 15. Divulgación progresiva contra nuestros 63 KB de núcleo fijo

**El dato.** Cada run de rutina lee `CLAUDE.md` (23,2 KB) + `reglas-nucleo.md` (23,6 KB) +
`nucleo-comun.md` (16,2 KB) = **~63 KB fijos**, apliquen o no. Es el resultado **deliberado** de la fusión del
2026-07-20, que sustituyó siete lecturas por una cuando el coste dominante era el número de turnos y no el
tamaño del fichero. Con ese criterio, fue la decisión correcta y sigue siéndolo.

**Lo que la tanda 2 añade** es un criterio distinto, que la fusión no contempló porque no lo teníamos: el
coste de un núcleo grande no es solo tokens, es **adherencia**.
*«Bloated CLAUDE.md files cause Claude to ignore your actual instructions!»*, con su prueba por línea:
*¿quitar esto haría que el modelo cometiera errores?* Si no, fuera. Y el mecanismo alternativo:
lo de uso ocasional va a un skill que se carga bajo demanda —
*«Progressive disclosure is the core design principle that makes Agent Skills flexible and scalable»*.

**Propuesta: no deshacer la fusión.** El candidato es solo `CLAUDE.md`, que es el único de los tres que
**mezcla esquema con procedimiento**: el esquema del vault (estable, lo necesita todo el mundo) convive con
el procedimiento operativo de `destila`/OmniRoute/verificación, que ha crecido hasta ocupar cerca de la mitad
del fichero y **solo lo usan las rutinas que ingieren**. Mover ese detalle a un skill de ingesta, dejando en
`CLAUDE.md` la regla y el puntero. Contrapartida: una lectura más en los runs que ingieren, cero en los que
no.

**Y aquí la señal es honesta a medias, que es mejor que inventada.** El lado del coste es medible al byte
(bytes fijos por run, antes y después). El lado que de verdad importa —la **adherencia**— no lo es con lo que
tenemos: haría falta una línea base de «cuántas veces una rutina infringe una regla del núcleo», y no existe.
Es el mismo problema que ya nos apareció en el punto 2 de la tanda 1, donde la señal escrita resultó
inmedible al ir a aplicarla. **Se propone medir solo el coste y declarar que la mejora principal queda sin
verificar** — o no aplicarlo hasta que el punto 13 dé el hábito de construir conjuntos de prueba y se pueda
medir de verdad.

---

## Confirmaciones de diseño (no son propuestas)

### 16. El evaluador separado, y el matiz que corrige nuestra regla 8

*«tuning a standalone evaluator to be skeptical turns out to be far more tractable than making a generator
critical of its own work»*, porque los agentes *«reliably skew positive when grading their own work»*.
Nuestro `verificador-adversarial` y nuestro `editor-jefe` son exactamente esa figura, y su existencia queda
confirmada desde fuera.

**El matiz incomoda y hay que anotarlo.** La **regla 8 de nuestra doctrina anti-fallos** pide «autocrítica
universal»: todo orquestador se autoevalúa al cierre. Según esta evidencia, la autoevaluación es
estructuralmente lo que peor funciona. No significa que la regla 8 sea un error — significa que **todo su
valor depende de que la CIO contraste esa autocrítica**, que es la segunda mitad de la propia regla. Se
anota para que a nadie se le ocurra «ahorrarse» ese contraste por considerarlo redundante: sin él, la regla 8
es un agente puntuándose a sí mismo.

**Y la proporción económica, medida**, que es el argumento a favor de no ahorrárselo: en el caso del DAW, las
tres rondas de QA costaron **$10,39** frente a **$113,85** de construcción. **El evaluador cuesta el 8%.**

### 17. El precio del consejo aislado, ahora con número

El punto 2 de la tanda 1 aisló las lentes de [[consejo-de-voces]] aceptando explícitamente que el coste
subía, sin saber cuánto. La cifra existe: un agente gasta ≈**4× los tokens** de un chat y un sistema
multiagente ≈**15×**. Con la explicación desmitificadora que la acompaña —
*«Multi-agent systems work mainly because they help spend enough tokens to solve the problem»*—: el consejo
aislado no acierta más porque varias mentes piensen mejor, sino porque **gasta más contexto del que cabe en
una ventana**. Confirma que la escotilla `--ligero` tiene que seguir existiendo y que el camino caro sea el
que se elige a propósito, no el que se hereda por descuido.

---

## Interés del emisor — qué nos conviene y qué le conviene a Anthropic

Sección obligatoria de esta tanda, autorizada por Carlos antes de sintetizar nada. Un patrón puede ser bueno
**y** estar publicado por quien vende el sustrato; lo que no vale es no distinguirlo.

**Las siete propuestas de arriba, clasificadas por a quién benefician:**

| Propuesta | Fuente que la sostiene | A quién conviene |
|---|---|---|
| 10 · arreglar el verificador | ninguna — sale de medir nuestras herramientas | **Solo a nosotros** |
| 11 · intentos múltiples en la puerta dorada | ruido de infraestructura | **A los dos**, y a Anthropic primero: la regla «<3 pp merecen escepticismo» desactiva las comparaciones de tabla clasificatoria justo donde ellos compiten. El experimento es sólido y el incentivo es evidente al mismo tiempo |
| 12 · contar las denegaciones de los hooks | auto mode | **A nosotros** |
| 13 · probar al verificador por los dos lados | evals · buenas prácticas | **A nosotros.** Es lo que reduce la dependencia del vendedor: medir tu caso en vez de creerte su *benchmark* |
| 14 · fechar los supuestos de los guardarraíles | harness design · managed agents | **A los dos.** También justifica que haya que rehacer el andamiaje con cada modelo nuevo suyo |
| 15 · núcleo más pequeño | buenas prácticas · Agent Skills | **A nosotros**, y contra su propio consumo: recomienda gastar menos tokens. El vehículo propuesto (*skills*) sí es formato suyo, pero el principio no depende de él |
| 16-17 · confirmaciones | harness design · sistema multiagente | neutro |

**El patrón, que es lo que hay que retener para la próxima tanda de este emisor:** cuando el consejo es
*mide, desconfía y gasta menos*, coincide con nuestro interés y se acepta por su mecánica. Cuando el consejo
es *adopta este formato* —MCP, Agent Skills, el SDK, `.mcpb`—, coincide con el suyo y hay que separar el
**principio** (procesar fuera de la ventana, cargar solo lo relevante) del **vehículo** (su protocolo). En
esta tanda los principios entran y **ningún vehículo lo hace**: lo que las siete propuestas tocan son
`scripts/` nuestros, un fichero de log y unos comentarios.

**Y el punto ciego estructural**, que ninguna sección puede rellenar: no hay revisión por pares, las cifras
son suyas y sin réplica, y lo que un *vendor* **no** publica no aparece por ningún lado. El contrapeso
académico lo pone la tanda 1.

---

## Descartado a propósito en la tanda 2 (regla 1: elegante ≠ nuestro problema)

- **Migrar el estado compartido de Markdown a JSON.** El hallazgo empírico existe —*«the model is less likely
  to inappropriately change or overwrite JSON files compared to Markdown files»*— pero **no tenemos ni un
  incidente medido** de una rutina reescribiendo indebidamente [[pendientes]], [[watchlist]] o
  [[promociones-pendientes]], y el coste es real: esas páginas las lee Carlos en Obsidian. Se descarta el
  cambio de formato. *Lo que sí queda anotado como candidato acotado*: los **campos de vigilancia** del
  frontmatter de `empresas/` (`gatillo_entrada`, `precio_referencia`, `moneda`) sí tienen un consumidor
  determinista —`vigila_tesis.py`— y ahí un `--comprueba` de esquema tendría sentido el día que un valor mal
  escrito produzca una alerta falsa. Hoy no ha pasado.
- **Contenedores, sandboxes, VPC, escalado horizontal y el desacoplamiento cerebro/manos/sesión.** Resuelven
  el problema de alojar agentes de muchos clientes. Aquí hay un operador, un disco y sin remoto.
- **Ejecutar servidores MCP como código con *sandboxing*.** El principio —procesar el volumen fuera de la
  ventana y devolver solo lo destilado— **ya lo tenemos**, y sin MCP: es `scripts/` entero y la regla 1 de la
  disciplina de coste. Adoptar el vehículo añadiría un requisito de aislamiento que hoy no necesitamos.
- **Empaquetar rutinas con manifiesto declarativo** (el patrón de las Desktop Extensions). Es elegante y no
  resuelve ningún fallo que hayamos tenido. Se anota por si algún día hay rutinas que se comparten fuera de
  este disco.
- **El bucle de 16 agentes en paralelo con $20.000 de API.** De ahí solo se importa el diagnóstico —el
  paralelismo no ayuda ante una tarea monolítica, hace falta un oráculo— y la higiene de contexto (`ERROR` y
  su razón en la misma línea para que un `grep` los recoja), que sí es gratis y ya practicamos a medias.

## Enlaces

[[ingenieria-de-agentes]] · [[formacion-ia-metodo]] · [[tier-a-accionable]] · [[tier-b-teoria]] ·
[[anthropic-orquestacion-y-harness]] · [[anthropic-evaluacion-herramientas-y-permisos]] ·
[[evaluacion-de-agentes]] · [[ingenieria-de-contexto]] · [[harness-de-agentes]] ·
[[reparto-de-modelos]] · [[equipo-agentes]] · [[estado-del-sistema]] · [[consejo-de-voces]]
