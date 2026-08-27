---
title: "Brainstorming: qué le falta al cerebro para funcionar de verdad como cerebro inversor"
tipo: sintesis
tags: [aplicada, meta, arquitectura, mantenimiento, sesgo, roadmap]
fecha: 2026-07-13
fuentes: []
---

# Brainstorming: qué le falta al cerebro para funcionar de verdad como cerebro inversor

Consulta archivada, pedida explícitamente en profundidad (no una lista rápida). No es un gap-analysis de
contenido — para eso está [[huecos-y-proximos-pasos]], que ya hace bien el trabajo de "qué fuente falta".
Esta página vive un nivel por encima: preguntas sobre la **arquitectura, el uso y los sesgos del propio
cerebro como sistema**, con el corpus ya maduro (19 voces, capa del operador `perfil/` operativa, diario de
decisiones con plantilla falsable). Cada idea explica el porqué, no solo el qué, y propone un paso
concreto — no todo hace falta hacerlo, pero todo debería quedar pensado una vez.

## 0. Lo que ya está resuelto (para no repetir ideas que ya existen)

Antes de proponer nada, constancia de lo que el propio cerebro ya construyó y que en un brainstorming
ingenuo se propondría de cero: capa de operador separada de la capa de conocimiento
(perfil de inversor, cartera actual, objetivos); diario de decisiones con plantilla falsable y
fecha de revisión explícita (decisiones); comandos de mantenimiento nativos (`/cerebro-cierre`,
`/cerebro-auditoria`); pipeline de ingesta recurrente para las tres gestoras españolas (bandeja de entrada
+ script de dedup); dashboard de cobertura vía Dataview; página de tensiones orientada a decisión
([[tensiones-activas]]); gap-analysis de contenido vivo y auto-actualizado. Es un sistema bastante más
maduro que el wiki de notas medio de Obsidian. Lo que sigue es lo que **todavía** no está.

## 1. Qué falta estructuralmente (no "qué autor falta")

### 1.1 El diario de decisiones no tiene mecanismo de revisión — solo campo para anotarla

`decisiones.md` pide una "fecha de revisión" en cada entrada, pero nada la dispara. Si Carlos no vuelve a
abrir esa página el día indicado, la fecha es papel mojado — el cerebro no tiene memoria activa de sus
propias promesas de auto-auditoría. Es el mismo problema que resolvió `/cerebro-cierre` para el commit de
cierre de sesión, aplicado a la revisión de tesis.

**Propuesta concreta**: una tarea programada (`schedule`/cron de Claude Code, o simplemente una
convención de "al empezar cualquier sesión sobre este vault, mirar si hay `fecha de revisión` vencida en
`decisiones/*.md` y avisar antes de hacer nada más") que convierta la fecha de revisión en una alerta
real, no en un campo decorativo.

### 1.2 No hay ninguna marca de "esto puede haber caducado"

Las cartas ya ingeridas capturan una visión del mundo en un momento dado — "S&P a 22x beneficios" (Azvalor
1S2024), "NVIDIA es el 11,5% del PIB de EE.UU." (Horos 4T2024), el propio "70% del Gran Ciclo, ±10%" de
Dalio. Todo vive en el wiki como si fuera atemporal, salvo por la fecha de la carta citada entre paréntesis
— que hay que saber leer para darse cuenta de que es un dato de hace dos años, no de hoy. Ningún mecanismo
distingue una afirmación **estructural** (Graham vs. Fisher en precio vs. calidad — no caduca nunca) de una
afirmación **coyuntural** (una cifra de mercado de un trimestre concreto — caduca sola).

**Propuesta concreta**: no reescribir 173 páginas con un campo nuevo — demasiado coste para el beneficio.
En su lugar, una convención ligera hacia adelante: cuando una síntesis maestra o una página aplicada
(`checklist-macro-y-ciclo`, `evaluar-una-cartera`) cite una cifra de mercado concreta como evidencia de un
argumento, marcarla explícitamente como "dato de [fecha], no releer como actual" — ya se hace algo de esto
de forma implícita (las citas llevan fecha de la carta), pero se podría hacer la distinción estructural vs.
coyuntural explícita en el propio texto, no solo inferible.

### 1.3 No hay capa de "peso" o conflicto de interés por voz

Las 19 voces se citan con el mismo peso implícito en las síntesis. Pero no todas merecen la misma
confianza para Carlos: unas son gestores con track record de *stock-picking* verificable (Buffett, Smith,
Paramés, Rochon), otras son marcos teóricos de una firma institucional sin biografía de inversión personal
comparable (Dalio: Bridgewater es un fondo con historial mixto según el periodo, no una biografía de
compounding individual), y al menos dos son partes interesadas con conflicto de interés declarado (Fink
vendiendo indexación/tokenización, KKR vendiendo *private equity* — el propio wiki ya anota "leer como
parte interesada" para Fink, buena señal, pero es la excepción, no la regla sistemática).

**Propuesta concreta**: no un sistema de puntuación formal (demasiado artificial, falsa precisión) sino un
campo corto en cada página de inversor, algo como "**Conflicto de interés**: ninguno declarado / vende lo
que recomienda / sin track record de inversión personal verificable" — una frase, no un párrafo. Barato de
añadir, cambia cómo se lee cada cita.

### 1.4 No hay verificación de que las citas literales son exactas

Con 173 páginas y decenas de agentes extrayendo citas de PDFs/EPUBs a lo largo de varias tandas, nunca se
ha hecho un muestreo de verificación de que las citas textuales marcadas con comillas coinciden de verdad,
palabra por palabra, con el original — no por mala fe, sino porque un agente que resume 600 páginas puede
parafrasear y marcar como cita literal sin querer, o cometer un error de transcripción menor. Es un riesgo
de integridad silencioso: el wiki cita mucho en primera persona ("Fisher dice...", "Dalio escribe...") y
esa autoridad depende de que la cita sea real.

**Propuesta concreta**: una auditoría de bajo coste, no exhaustiva — tomar una muestra aleatoria de ~15-20
citas literales de páginas distintas, releer el pasaje original en el PDF/EPUB fuente, y confirmar
coincidencia exacta. Es el tipo de tarea que encaja bien en `/cerebro-auditoria` como un paso más, no hace
falta un proceso nuevo.

### 1.5 Todo el cerebro vive en un único disco

Hay historial de versiones real (git + commits manuales, ver el registro de esta sesión), pero sin remoto
configurado (decisión consciente de Carlos, respetada). Eso protege de "me equivoqué al editar", no de "el
disco muere" o "el Mac se pierde". No es una urgencia — es una asimetría de riesgo barata de corregir
(un remoto privado, o simplemente una copia periódica fuera del Mac) frente al coste de perder 173 páginas
de trabajo acumulado sin darse cuenta hasta que falta.

## 2. Cómo usarlo mejor para decisiones reales (no solo archivar)

### 2.1 Falta un "simulador de voces" repetible

Hoy, cuando Carlos pide analizar una tesis concreta, el cerebro convoca las voces relevantes de forma
implícita — depende de que el agente de turno se acuerde de hacerlo bien. No hay una plantilla en
`sintesis/` que formalice "dado un ticker o una tesis, fuerza una respuesta explícita de cada cluster de
voces relevante (calidad, valor profundo, macro, riesgo) antes de concluir nada" — lo más parecido que
existe es `comparar-dos-empresas.md`, pero está pensado para comparar dos candidatas, no para poner una
tesis a prueba contra el desacuerdo del corpus completo.

**Propuesta concreta**: una plantilla nueva en `sintesis/`, tipo `poner-a-prueba-una-tesis.md`, con una
estructura fija: la tesis en una frase, qué diría cada cluster (calidad/valor/macro/riesgo/comportamiento)
en 2-3 líneas cada uno con wikilinks, y un cierre con las 2-3 tensiones de [[tensiones-activas]] que más
aplican a esa tesis en concreto. Convierte un proceso mental implícito en un artefacto reutilizable.

### 2.2 El "Podium of Errors" existe para el pasado (Rochon), no para el futuro (Carlos)

`decisiones.md` ya pide "qué esperaría ver si acerté o me equivoqué" — es, de hecho, un pre-mortem parcial.
Lo que falta es cerrar el círculo: cuando pase el tiempo y una decisión archivada llegue a su fecha de
revisión, no hay convención de **anotar el resultado real** con el mismo rigor que Rochon aplica a sus
propios errores (medalla de bronce/plata/oro, cuantificado). Sin eso, el diario de decisiones es solo un
registro de intención, nunca se cierra el bucle de aprendizaje.

**Propuesta concreta**: cuando se revise una decisión vencida, añadir una sección "Resultado" a su propio
archivo (no reescribir la tesis original, añadir — misma regla de evolución que el resto del wiki) con el
mismo rigor numérico que el Podium of Errors: cuánto costó o generó el acierto/error, en euros y en
porcentaje, no solo en prosa.

### 2.3 Las páginas de empresa no están conectadas 1:1 con las posiciones reales de Carlos

`cartera-actual.md` tiene 36 posiciones con detalle en euros; `wiki/empresas/` tiene solo tres páginas
(Berkshire, GEICO, [[jpmorgan-chase|JPMorgan Chase]]), que son empresas mencionadas en las cartas ingeridas, no
necesariamente las que Carlos posee. Para la mayoría de sus 36 posiciones no hay una página de empresa
propia donde acumular el análisis específico de esa tesis a lo largo del tiempo — vive disperso entre
`cartera-actual.md` y las entradas del diario de decisiones.

**Propuesta concreta**: no crear 36 páginas de golpe (demasiado trabajo para el valor marginal de las
posiciones pequeñas) — pero para las 5-6 posiciones más grandes o con tesis más activa, una página de
empresa propia sí paga su coste: centraliza el caso de inversión, se referencia desde `cartera-actual.md` y
desde `decisiones/`, y evita reconstruir el argumento cada vez que se revisa la posición.

## 3. Riesgos de sesgo si el corpus está desequilibrado

Con datos reales del propio corpus (19 voces), no como intuición:

- **~10 de 19 voces son fundamentalmente *value*/calidad *long-only stock-pickers* de EE.UU./Europa
  desarrollada** (Graham, Buffett, Munger, Fisher, Smith, Rochon, Sleep, Paramés, Azvalor, Horos). El resto
  se reparte entre macro sistémico (Dalio, Asness), activismo (Ackman), banca operativa (Dimon),
  alternativos/indexación (KKR, Fink), comportamiento puro (Housel), y growth pragmático (Lynch). Es un
  corpus con centro de gravedad muy claro, coherente con lo que Carlos pidió construir, pero vale la pena
  tenerlo cuantificado para no confundir "lo que dicen 19 voces" con "consenso" cuando en realidad es
  "consenso dentro de un mismo estilo dominante".
- **Cero voces bajistas/escépticas de oficio** (Chanos, Burry, o un *Financial Shenanigans*) — ya
  documentado en [[huecos-y-proximos-pasos]] como hueco abierto, pero merece repetirse aquí desde el ángulo
  de sesgo: el cerebro entero está construido desde la perspectiva de quien busca razones para **comprar**,
  nunca desde quien busca razones sistemáticas para **evitar o apostar en corto**. Amat aporta detección
  forense, no convicción de posicionamiento corto.
- **Cero voces nativas de mercados emergentes.** Hay mucho *sobre* Asia (la tesis de Paramés, el marco de
  Dalio) pero ninguna voz que invierta *desde* Asia, Latinoamérica o África con la autoridad de quien vive
  ahí el riesgo de divisa, la institucionalidad débil o la inflación crónica de primera mano. Todo el
  corpus mira el resto del mundo desde EE.UU./Europa/España.
- **Sesgo de supervivencia institucionalizado en el propio diseño del corpus.** Las 19 voces son o fueron
  exitosas; ninguna es la biografía primaria de un inversor que fracasó de forma definitiva y explica por
  qué desde dentro (a diferencia de Nomad, que cerró por convicción de éxito agotado, no por fracaso). El
  cerebro aprende sistemáticamente de ganadores. Munger cita fracasos ajenos (LTCM, Enron) pero siempre
  desde fuera, nunca es la propia voz derrotada explicando su error en primera persona y sin filtro.
- **Todas las fuentes son autobiográficas y no auditadas de forma independiente.** Cartas y libros escritos
  por el propio gestor exitoso, publicados por decisión propia. Nadie ha comparado sistemáticamente lo que
  cada voz *dijo* con lo que *hizo* de verdad — el wiki cita el track record que cada gestor reporta de sí
  mismo, no una verificación externa independiente. Merece una frase de honestidad metodológica explícita
  en algún sitio visible (candidato: `mapa-del-cerebro.md` o esta misma página).
- **Cero voces femeninas** entre las 19. Un hecho sobre la composición histórica del sector más que un
  fallo del proceso de ingesta — pero mejor decirlo con la misma honestidad intelectual que el resto del
  wiki aplica a sus propios sesgos, que callarlo.

## 4. Mecanismos de mantenimiento a largo plazo

- El patrón de auditoría periódica ya existe y funciona bien (`/cerebro-auditoria`, y de hecho ya se ha
  ejecutado varias veces de forma espontánea según crecía el corpus — ver `log.md`). Lo que falta es una
  **cadencia explícita, no solo reactiva**: hoy se dispara "cuando alguien se acuerda" o "tras una tanda
  grande". Una convención simple —cada vez que el corpus crezca en +5 páginas de fuente nuevas, o cada mes
  natural, lo que ocurra antes— convertiría el mantenimiento en rutina en vez de en episodio.
- El script `check_inbox.py` y el patrón de `scripts/` que estrena esta sesión es el sitio natural para
  acumular más herramientas de mantenimiento (el chequeo de enlaces rotos/huérfanas que se repite a mano en
  cada auditoría con un script de Python ad-hoc podría guardarse aquí también, en vez de reescribirse cada
  vez).

## 5. Cómo verificar que las conexiones y tensiones siguen siendo válidas con el tiempo

Ligado al punto 1.2 pero centrado específicamente en las tensiones documentadas (`mapa-del-cerebro.md`,
[[tensiones-activas]], las síntesis maestras): la mayoría son filosóficas y no caducan (Graham vs. Fisher en
precio vs. calidad seguirá siendo la misma tensión dentro de veinte años). Pero algunas están ancladas a
hechos concretos que sí pueden cambiar:

- Posiciones de cartera citadas como ejemplo ("Buffett vendió Apple en 2024", "Ackman compró [[alphabet|Alphabet]]") —
  si el gestor vuelve a cambiar de postura, la narrativa que el wiki cuenta queda desactualizada en
  silencio, sin que nada lo señale.
- Cifras de mercado usadas como evidencia de una tensión coyuntural (concentración del S&P, valoraciones
  de la IA, spreads de crédito) — verdaderas el día que se escribieron, no garantizadas hoy.

**Propuesta concreta, de bajo coste**: no un sistema de caducidad automática (falsa precisión, exige
mantenimiento que nadie va a hacer) — mejor una revisión dirigida y barata: la próxima vez que se
actualicen las 4 síntesis maestras o [[tensiones-activas]] por la llegada de una voz nueva, aprovechar el
mismo pase para revisar si algún ejemplo concreto citado (no el argumento filosófico, el dato factual) sigue
siendo cierto — mismo principio que ya aplica el wiki al anotar la evolución de las ideas en vez de
borrarlas, pero aplicado a los ejemplos, no solo a las tesis.

## 6. Otros ángulos no obvios

- **"Modo debate" ausente**: las tensiones se presentan de forma expositiva (posturas resumidas, una al
  lado de otra). [[tensiones-activas]] ya da un paso real hacia la utilidad práctica al reformular cada
  tensión como pregunta de decisión — pero sigue siendo texto estático para leer, no una confrontación
  activa entre 2-3 voces sobre la pregunta concreta que Carlos tenga *ahora mismo*. Eso ya lo puede hacer el
  agente en una conversación puntual; lo que no existe es una convención documentada de cómo pedirlo bien
  (un "prompt de debate" reutilizable, análogo a la plantilla de decisión).
- **Checklist de pre-vuelo para tandas de ingesta grandes**: cada tanda grande de este corpus ha generado
  después una auditoría para corregir inconsistencias (fechas de frontmatter, tags, enlaces faltantes) —
  útil, pero siempre reactiva. Una checklist corta *antes* de lanzar una tanda grande ("¿esta fuente nueva
  contradice algo ya escrito? revisar antes de escribir, no solo después") reduciría el volumen de la
  auditoría posterior, aunque nunca la elimine del todo.
- **Ninguna conexión con datos de mercado vivos.** El cerebro es, por diseño, 100% fuentes estáticas. Para
  usarlo en una decisión real hoy, alguien (Carlos o el agente) tiene que traer el precio actual, el último
  informe trimestral, la noticia reciente desde fuera del wiki — el wiki da el marco de pensamiento, nunca
  el dato de hoy. No es un defecto a corregir (mezclar datos vivos con conocimiento estructurado sería un
  cambio de naturaleza del proyecto, no una mejora incremental) pero merece quedar dicho con la misma
  honestidad que el resto de esta página: es una limitación consciente, no un descuido.

## Ver también

- [[sesgo-de-superviviente]] — el mismo diagnóstico visto desde el concepto: el corpus está construido casi
  entero sobre voces que ganaron, sin una biografía primaria de quien fracasó desde dentro

[[huecos-y-proximos-pasos]] · [[tensiones-activas]] · perfil de inversor · decisiones ·
[[mapa-del-cerebro]] · [[dashboard-cobertura]]
