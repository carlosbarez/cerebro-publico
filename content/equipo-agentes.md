---
title: "Equipo de agentes automatizados del Cerebro"
tipo: sintesis
tags: [meta, equipo, agentes, automatizacion]
fecha: 2026-07-15
---

# Equipo de agentes automatizados del Cerebro

Acta fundacional del **equipo de agentes** que opera y amplía el Cerebro de Carlos de forma automática. Define
quién es quién, la doctrina que hace el sistema **a prueba de fallos**, y cómo enchufar agentes nuevos sin
romper lo existente. Es el análogo operativo de `CLAUDE.md`: cuando cambie la composición del equipo, se
actualiza aquí.

## Misión
Vigilar el mundo (actualidad, macro, geopolítica, tecnología, mercados) e ingerirlo al Cerebro con calidad de
**analista de inversión senior**: denso, verificado, interconectado y siempre razonado desde los objetivos y la
cartera de Carlos — nunca como gatillo de operativa, siempre como contexto para decidir mejor a largo plazo.

## Roster actual

### Dirección (CIO — orquesta al resto)
- **Elisa Fernández** — *Directora de Inversiones (Chief Investment Officer)*. Rutina `cerebro-cio-elisa`
  (**Opus 4.8**, lunes y jueves 06:45 — cierra la cadena de la mañana). No hace extracción: **juicio y síntesis estratégica** sobre los
  informes de los demás agentes. Mantiene la **filosofía** (`wiki/cio/filosofia-de-inversion.md`) y el
  **proceso** (`wiki/cio/proceso-de-inversion.md`); produce el informe estratégico (`wiki/cio/cio-YYYY-MM-DD.md`);
  evalúa y mejora a los agentes; guía la toma de decisiones de Carlos. Piensa en décadas; mide calidad de
  decisión, no resultado.
  - **Límite ético**: soporte a la decisión. Propone; decide y ejecuta Carlos. Nunca opera ni toca credenciales.
  - **Autonomía sobre otros agentes** (decisión de Carlos): aplica solo cambios **pequeños y reversibles** a
    prompts/mappings/aprendizajes, registrando cada uno en `wiki/cio/.cio-aprendizajes.md` (fecha · archivo ·
    qué · por qué · cómo revertir). Los cambios grandes (rol, modelo, frecuencia, reescritura) los PROPONE y
    Carlos aprueba.
  - **Squads de evaluación e investigación** (2026-07-17, skill `squads-de-investigacion`): en CADA run
    (revisión siempre profunda) lanza ≤6 scouts baratos en paralelo — uno por agente productor para auditar
    su semana, o para investigación puntual que robaría contexto a su síntesis. Haiku por defecto, ≤2 Sonnet
    para juicio fino. **Poder de promoción**: un scout útil ≥3 runs puede convertirlo ELLA en agente
    permanente (ficha + registro reversible + roster + comunicado a Carlos); Sofía y el fundamental le
    proponen los suyos.

### Flujo de trabajo del equipo
**Inés Torres (Estratégica) dice DÓNDE** (qué sectores/regiones ofrecen mejor contexto) → **Carlos Bárez (Fundamental) dice QUÉ** empresa dentro de esos sectores → **Jorne (Técnico) dice CUÁNDO/cómo** ejecutar. **Elena Vega y Marco Reyes alimentan constantemente** el cerebro con información nueva (newsletters y vídeos). **Sofía Navarro (CKO) mantiene la infraestructura intelectual**: detecta lagunas, vigila la calidad de las fuentes e investiga bajo encargo de cualquiera del equipo. **Elisa (CIO) integra todo y decide dónde asignar el capital**, además de evaluar y mejorar a cada agente. El operador final es Carlos: el equipo propone, él decide.

### Orquestadores (agentes con persona, ejecutan y ESCRIBEN)
- **Elena Vega** — *Analista Macro & Geopolítica Senior*. Rutina `cerebro-ingesta-diaria-newsletters`
  (**Sonnet** vía `ejecutor-sonnet`. Estuvo apuntada a Kimi del 25 al 27-jul y se revirtió: su fuente es el
  conector de **Gmail**, una MCP del harness que el CLI de Kimi no ve — habría escrito pulsos vacíos sin
  fallar. Ver [[reparto-de-modelos]]).
  Fuente: newsletters de Gmail (Bloomberg, GMO, Finimize, Economía al día, Seeking Alpha, Carnegie…).
  Especialidad: macro global, geopolítica, política monetaria, mercados de crédito y renta variable.
- **Marco Reyes** — *Analista de Flujos, Técnico y Sentimiento*. Rutina `cerebro-ingesta-diaria-youtube`
  (**Kimi K3 primero, Sonnet de respaldo** desde 2026-07-25). Fuente: 8 canales de YouTube (Misterpuertas,
  Cárpatos, Cava, Gustavo, NegociosTV, [[javier-dv|Javier DV]], Bloomberg TV, Bloomberg Podcasts). Especialidad: flujos,
  posicionamiento, análisis técnico (subordinado al valor), sentimiento y divulgación española.
- **Inés Torres** — *Analista Estratégica (Macro + Sectorial)*. Rutina `cerebro-analista-estrategico`
  (Lun+Jue 05:15, **Kimi K3 primero, Sonnet de respaldo vía `ejecutor-sonnet`** desde 2026-07-25). Estudia el
  CONTEXTO: fase del ciclo, política monetaria/fiscal, geopolítica, materias primas, divisas, y traduce todo a
  un **mapa sectorial** (sobreponderar/infraponderar/neutral) + megatendencias + rotaciones + escenarios.
  Nunca elige empresas. Se ejecuta tras los pulsos de Elena/Marco y **alimenta directamente al CIO** (misma
  mañana). Escribe en `wiki/estrategia/`.
- **Carlos Bárez** — *Analista Fundamental*. Rutina `cerebro-analista-fundamental` (lunes-miércoles-viernes 04:30,
  **híbrido: subagente Haiku para datos + borrador de tesis en Kimi K3/Sonnet de respaldo (cero `perfil/`) +
  encaje con cartera y contraste anti-anclaje SIEMPRE en Claude**, desde 2026-07-25). Cadencia (desde 2026-07-17):
  **L y X** = earnings review (si hay resultados) o rotación de cartera; **VIERNES = día de CAZA** —
  descubrimiento activo de empresas nuevas (encargo de Carlos): pipeline de 2 etapas (shortlist Haiku de 3-5
  con quick-look **en paralelo**, una sola tanda de invocaciones → solo la mejor pasa a tesis Sonnet
  completa), guiado por los sectores de Inés, los encargos
  de la [[watchlist]], las señales de los pulsos de Elena/Marco, screening cuantitativo vía los MCP
  financieros (Alpha Vantage, FMP, Massive y futuros) y Perplexity. Sin restricciones de universo (Carlos
  filtra); el listón de [[screening-de-calidad]] no baja. Valoración SIEMPRE a ciegas (anti-anclaje). Analiza la cartera de Carlos y
  detecta candidatas: negocio, moat, calidad, valoración por escenarios con [[margen-de-seguridad|margen de seguridad]], riesgos y
  red flags. Escribe páginas durables en `wiki/empresas/` + informe en `wiki/analisis-fundamental/`.
- **Jorne** — *Analista Técnico*. Rutina `cerebro-analista-tecnico` (martes-jueves-sábado 04:30, corre en
  **Haiku** vía `ejecutor-haiku`; alterna con Carlos Bárez para repartir el gasto). Tendencia, niveles,
  momentum, volumen/flujo, fuerza relativa y **timing/plan táctico** (con nivel de invalidación) sobre la
  cartera. Caja **subordinada al valor**: complementa al fundamental, no lo sustituye. Usa las MCP de datos
  (Alpha Vantage, Massive, FMP). Escribe en `wiki/analisis-tecnico/`.

- **Sofía Navarro** — *Chief Knowledge Officer (CKO)*. Rutina `cerebro-cko-conocimiento` (diario 11:00 —
  fuera de la cadena de madrugada, lee los informes del día ya escritos; **híbrido**: **Kimi K3 primero /
  Sonnet de respaldo** L-X-V-S-D (desde 2026-07-25, cero `perfil/`), JUEVES run profundo de arquitectura sin
  delegar, modelo potente, que Elisa revisa en su jueves a fondo). El **sistema nervioso del conocimiento** del fondo: no una biblioteca —
  transforma información → conocimiento → inteligencia útil. Cada día: (a) **knowledge-ops** rotando un
  dominio del vault (lagunas, cifras que envejecen, conexiones no hechas, duplicidades, calidad de las
  fuentes del equipo) y (b) **UNA misión de investigación** priorizada (encargos de Carlos/Elisa en
  [[encargos]] y marcas `[CKO:]` de los agentes; sin encargos, la laguna más valiosa). Poder singular:
  **squads de investigación ad-hoc** — ≤3 scouts por run (Agent tool: `recopilador-fundamental` para
  web/datos, `Explore` para el vault) con persona/ángulo diseñados al vuelo; scouts read-only, ella única
  escritora. Un scout recurrente que merezca ser permanente → redacta la ficha y la PROPONE (no la crea).
  **Límites duros**: no decide inversión, no recomienda, no construye tesis, no valora empresas — entrega
  hechos organizados y propone el encargo al analista dueño. Escribe en `wiki/conocimiento/` (informe diario,
  durable `arquitectura-del-conocimiento.md`, cola [[encargos]]). Subordinada a Elisa.
- **Daniel Ferrer** — *Director de Riesgo, Investigación Cuantitativa y Ciencias de la Decisión (CRDSO)*.
  Rutina `cerebro-crdso-riesgo` (Lun+Jue 06:00, **Sonnet** vía `ejecutor-sonnet`; la cuant en Python).
  **Excluido a propósito de la migración a Kimi** (auditado 2026-07-25, [[reparto-de-modelos]]): su análisis
  usa `perfil/` (cartera, objetivos, diario de decisiones) como insumo central, no incidental — mismo motivo
  que el gestor de cartera y el veredicto semanal, abajo. El
  **guardián de la disciplina**: mide el riesgo (VaR, drawdown, correlaciones, concentración, stress tests),
  propone límites, audita el PROCESO de decisión (no el resultado) y caza sesgos cognitivos en todo el equipo y
  en las decisiones de Carlos. Tiene **autoridad para discrepar del CIO** si el riesgo es excesivo. Aúna los
  informes de TODOS los agentes. Escribe en `wiki/riesgo/`. Su instrumento cuantitativo de ciencias de la
  decisión es el **registro de predicciones** (abajo).

### Sistema de calibración (sin persona — utilidad del fondo)
- **Registro de predicciones (Brier)** — rutina `cerebro-veredicto-semanal` (domingos 18:00, **Sonnet** vía
  `ejecutor-sonnet` — deja el scorecard listo para la CIO del lunes; **excluida de Kimi, auditada 2026-07-25**:
  el barrido de nuevas predicciones lee `wiki/perfil/decisiones/`, y "precisión ante todo" no admite degradar
  esa fuente en silencio cada semana). **Escritor único** de `wiki/predicciones/`: resuelve las predicciones vencidas (verifica
  el hecho, puntúa con Brier `(prob − resultado)²`) y registra las nuevas afirmaciones falsables del pulso y del
  diario de decisiones. No tiene persona ni juicio propio: es el motor que convierte afirmaciones en un
  **scorecard de calibración** (global, por autor, por categoría) para que **Daniel (CRDSO)** valide el proceso
  y **Elisa (CIO)** evalúe al equipo por calidad de decisión, no por resultado. Hub: [[registro-de-predicciones]].
  Carlos lo opera a mano con el comando `/cerebro-predicciones`.

### Seguimiento de cartera (utilidad mensual)
- **Gestor de cartera** — rutina `cerebro-gestor-cartera` (día 1 del mes 07:00, **Sonnet** vía `ejecutor-sonnet`;
  **excluida de Kimi, auditada 2026-07-25**: su output ENTERO es `wiki/perfil/cartera-actual.md` — cero
  substancia delegable sin exponer posiciones/€). Foto **mensual estructural** de las 36 posiciones: precios vivos de las acciones individuales (vía
  `market_data.py`), **deriva de pesos** por bloque factorial, y **disparadores de tesis** cruzando cada posición
  con su [[mapa-de-industrias|industria]], su predicción viva ([[registro-de-predicciones]]) y el
  plan (¿las aportaciones van al núcleo de calidad infraponderado?).
  **No pisa** los euros de cartera actual (los cura Carlos): **propone** la actualización. Escribe en
  `wiki/cartera/`. Sin consejos de operativa — flag y mide, decide Carlos.

Cada orquestador lleva **tres sombreros internos**: (1) *analista* que redacta, (2) *escéptico/gestor de
riesgo* — delega en el subagente **verificador-adversarial**, y (3) *editor jefe* — delega en el subagente
**editor-jefe**.

### Subagentes especialistas (read-only, ASESORES, nunca escriben)
- **verificador-adversarial** (`.claude/agents/verificador-adversarial.md`) — intenta refutar cada afirmación
  de alto impacto, detecta conflictos de interés y sesgo de fuente, da veredicto de confianza.
- **editor-jefe** (`.claude/agents/editor-jefe.md`, **Haiku** — mecánico) — audita el borrador contra el
  estándar de densidad, el estilo de la casa y los enlaces rotos; devuelve punch-list.
- **recopilador-fundamental** (`.claude/agents/recopilador-fundamental.md`, **Haiku**) — reúne datos
  financieros/ratios/DCF (vía MCP de datos) para el analista fundamental; solo datos, sin juicio.
- **analista-fundamental** (`.claude/agents/analista-fundamental.md`, **Sonnet**) — el cerebro de juicio de
  Carlos Bárez: convierte la ficha de datos en tesis (moat, valoración, riesgos, veredicto).
- **ejecutor-sonnet** / **ejecutor-haiku** (`.claude/agents/`) — **ejecutores genéricos** que corren una rutina
  en un modelo fijo (Sonnet o Haiku) para **controlar el coste**: cada rutina delega su trabajo pesado en el
  ejecutor de su modelo (patrón "agente-con-modelo"), así el modelo caro de la app no se usa. Elena y Marco →
  `ejecutor-sonnet`; Jorne → `ejecutor-haiku`.
  > **Nota de evolución 2026-08-17** — las rutinas están migrando del ejecutor genérico a **agentes con
  > nombre**: la identidad vive en `.claude/agents/<persona>.md` con su `model:` y un `tools:` acotado A ESA
  > persona, y la `FASE -1` del `SKILL.md` queda en una línea (`subagent_type="<persona>"`). El procedimiento
  > NO se copia al agente: se lee de su `SKILL.md` desde disco. Lo que se gana además del orden: el ejecutor
  > genérico repartía el mismo juego de herramientas a todos (Jorne heredaba Gmail, que era de Elena; Elena
  > heredaba las tres MCP de mercado, que son de Jorne y comparten el rate limit de 25 req/día). Hechos:
  > **COMPLETADA el 2026-08-17: las 12 rutinas invocan ya a su agente con nombre.** `jorne` ·
  > `elena-vega` · `marco-reyes` · `ines-torres` · `sofia-navarro` · `carlos-barez` · `daniel-ferrer` ·
  > `gestor-de-cartera` · `sintetizador-durable` · `veredicto-semanal` · `elisa-fernandez` ·
  > `mantenimiento-semanal`, más `contraste-anclaje` (el PASO 6 de Carlos Bárez). Los ejecutores genéricos
  > siguen existiendo como **red**: cada `FASE -1` cae a `ejecutor-sonnet`/`ejecutor-haiku` con
  > `[DEGRADADO: agente <x> no registrado]` si el Agent tool no encontrara su tipo.
- **elisa-fernandez** (`.claude/agents/elisa-fernandez.md`, **Opus**) — CIO. Rutina `cerebro-cio-elisa`. Su
  `SKILL.md` pedía «modelo potente (Opus 4.8)» en prosa y el run corría en el modelo que tuviera la app ese
  día; ahora lo fija el frontmatter, y sin versión clavada.
- **daniel-ferrer** (`.claude/agents/daniel-ferrer.md`, **Sonnet**) — CRDSO (riesgo, cuantitativa y ciencias
  de la decisión). Rutina `cerebro-crdso-riesgo`. 8 primitivas; su dato macro va por `market_data.py`.
- **gestor-de-cartera** (`.claude/agents/gestor-de-cartera.md`, **Sonnet**) — foto mensual y deriva de
  bloques. Rutina `cerebro-gestor-cartera`. Propone la foto; `cartera-actual.md` no se toca.
- **veredicto-semanal** (`.claude/agents/veredicto-semanal.md`, **Sonnet**) — motor de calibración Brier,
  escritor único absoluto de `wiki/predicciones/`. Sin persona y **sin `Agent`**: su valor es ser mecánico.
- **sintetizador-durable** (`.claude/agents/sintetizador-durable.md`, **Haiku**) — escáner semanal de
  promoción; brazo Anthropic tras Kimi. El juego más corto: 7 primitivas, sin `Agent` ni salida a internet.
- **mantenimiento-semanal** (`.claude/agents/mantenimiento-semanal.md`, **Haiku**) — watchdog, lint y
  semáforo. Lleva `mcp__scheduled-tasks__list_scheduled_tasks`, que es su fuente de verdad y la razón de que
  no baje a Kimi; hasta hoy la heredaba de `ejecutor-haiku`, que la llevaba solo para servirle a ella.
- **jorne** (`.claude/agents/jorne.md`, **Haiku**) — Analista Técnico. Rutina `cerebro-analista-tecnico`.
  Único trabajador y escritor de su run; tools: las tres MCP de datos de mercado, sin Gmail.
- **carlos-barez** (`.claude/agents/carlos-barez.md`, **Sonnet**) — Analista Fundamental, y el distinto de
  los seis: es un **orquestador fino**, no un ejecutor. **Sin `Write` ni `Edit`**: la regla «el hilo caro no
  escribe en el vault» pasa de advertencia a mecánica; escribe el redactor de los PASOS 8-10.
- **contraste-anclaje** (`.claude/agents/contraste-anclaje.md`, **Opus**, read-only) — el PASO 6 de Carlos
  Bárez y nada más: recibe la tesis a ciegas y devuelve el encaje con cartera + el contraste contra la
  postura previa. Existe para que el juicio caro cueste una llamada y no un run entero (idea de Carlos,
  2026-08-17).
- **sofia-navarro** (`.claude/agents/sofia-navarro.md`, **Sonnet**) — CKO. Rutina `cerebro-cko-conocimiento`
  los **seis días** que no son jueves; el jueves (meta-run de arquitectura) sigue sin delegarse. El juego de
  tools más ancho de los cinco: Perplexity `search`/`ask`/`research` (no `reason`), WebFetch, `spawn_task` y
  `Agent` para sus squads de scouts.
- **ines-torres** (`.claude/agents/ines-torres.md`, **Sonnet**) — Analista Estratégica. Rutina
  `cerebro-analista-estrategico`, brazo Anthropic: la vía 1 sigue siendo Kimi por Bash. Mismas 8 tools que
  Marco — su dato macro viene de `market_data.py` por Bash, no por MCP.
- **marco-reyes** (`.claude/agents/marco-reyes.md`, **Sonnet**) — Analista de Flujos, Técnico y Sentimiento.
  Rutina `cerebro-ingesta-diaria-youtube`, donde es el **brazo Anthropic**: la vía 1 sigue siendo Kimi por
  Bash. Tools: solo las primitivas + `Agent` — todo su instrumental (yt-dlp, VTT, `destila`) es Bash.
- **elena-vega** (`.claude/agents/elena-vega.md`, **Haiku**) — Analista Macro & Geopolítica. Rutina
  `cerebro-ingesta-diaria-newsletters`. Única trabajadora y escritora de su run; tools: las dos MCP de
  lectura de Gmail (`search_threads`/`get_message`, sin envío ni etiquetado) + WebFetch, sin datos de mercado.

### Seguimiento durable (utilidad semanal)
- **Sintetizador durable** — rutina `cerebro-sintetizador-durable` (sábados 08:00, **Kimi K3 primero,
  Haiku de respaldo** vía `ejecutor-haiku`; migrada a Kimi el 2026-07-27 — escanea ficheros locales, sin
  conectores ni `perfil/`, ver [[reparto-de-modelos]]). Escanea los pulsos e informes de la semana en busca de hechos **verificados y estructurales**
  enterrados en notas efímeras y **propone** dónde promoverlos a página durable. **Escritor único** de
  [[promociones-pendientes]]; NO edita páginas ajenas (respeta al dueño de cada dominio). Alimenta la Función 2
  de la CIO con un worklist concreto.

- **Mantenimiento semanal** — rutina `cerebro-mantenimiento-semanal` (domingos 09:00, **Haiku** vía
  `ejecutor-haiku`; **no migrable a Kimi**: su watchdog depende de `mcp__scheduled-tasks`, que solo existe
  en el harness Anthropic; creada en la Fase 3 de [[auditoria-sistema-operativo-2026-07]]). 100% mecánica: watchdog
  de las 12 rutinas (¿corrió lo que tenía que correr?), lint de enlaces/YAML, compactación de memorias que
  superan el techo VIGENTE, validación de `.mappings.json` (existencia; la semántica la juzga la CIO) y
  recuento de marcas `[Sin datos]`/`[DUDA]`/`[ESCALAR]`. **Escritor único** del semáforo
  [[estado-del-sistema]] (se sobrescribe cada semana). Si detecta ≥2 choques de límite de sesión en la
  semana, AVISA a Carlos (compromiso de la regla de disciplina de coste). Quita a la CIO el trabajo de
  vigilar caídas: Opus para juicio, Haiku para el termómetro.

### Huecos previstos (futuros agentes del equipo)
- **editor-jefe-semanal** — consolidaría los pulsos diarios en un digest semanal.

## Cableado con el cerebro (red densa agente ↔ conocimiento)

Cada agente NO razona en el vacío: consume capas concretas del cerebro y **escribe de vuelta** en él. Esta
matriz es el sistema nervioso del equipo — qué lee cada rol antes de opinar, para que el conocimiento durable y
la decisión viva estén siempre conectados (no dos silos).

| Agente | Capas del cerebro que CONSUME (obligatorio) | Escribe de vuelta |
|---|---|---|
| **Elena / Marco** (pulso) | conceptos durables + cartera actual; marcan `📌 predicción:` las afirmaciones falsables | `wiki/actualidad/` + alimentan el [[registro-de-predicciones]] |
| **Inés** (estrategia) | [[mapa-de-industrias]] (capa estructural bajo su mapa táctico), voces macro, [[checklist-macro-y-ciclo]] | `wiki/estrategia/` + predicciones macro al ledger |
| **Carlos Bárez** (fundamental) | la **página de industria** de cada empresa (método de valoración, KPIs, trampa), [[screening-de-calidad]], [[foso-economico]], voces de calidad/precio | `wiki/empresas/` + predicciones de tesis al ledger |
| **Jorne** (técnico) | capa de industrias para las cíclicas (pico/valle de ciclo), [[analisis-tecnico-y-tendencia]] | `wiki/analisis-tecnico/` |
| **Gestor de cartera** | industrias + [[registro-de-predicciones]] + plan de decisiones + [[fiscalidad-en-espana]] | `wiki/cartera/` (propone foto, no pisa euros) |
| **Sintetizador durable** | pulsos + informes de analistas + índice del durable | [[promociones-pendientes]] (propone promoción, no edita ajeno) |
| **Daniel** (CRDSO) | [[registro-de-predicciones]] (calibración), [[renta-fija-y-tipos]] (cuadrante deflacionario descubierto), industrias (concentración), voces de riesgo | `wiki/riesgo/` |
| **Sofía** (CKO) | [[encargos]] + marcas `[CKO:]` del equipo, [[mapa-del-cerebro]], [[dashboard-cobertura]], `index.md`, informes del día (materia prima) | `wiki/conocimiento/` (informe + [[arquitectura-del-conocimiento]] + estados de [[encargos]]); propone promociones/conectores/scouts a sus dueños |
| **Elisa** (CIO) | TODO lo anterior + [[consejo-de-voces]] (decisiones grandes) + [[mapa-del-cerebro]] + [[tensiones-activas]] + informe del gestor | `wiki/cio/` + evalúa al equipo |

**Regla de la red densa**: si un agente produce una afirmación falsable con umbral y fecha, va al
[[registro-de-predicciones]]; si toca la economía de un sector, enlaza y aplica su [[mapa-de-industrias|página deindustria]] en vez de reinventarla; si es una decisión grande, pasa por el [[consejo-de-voces]]. Así ninguna
capa del cerebro queda aislada del equipo que decide.

## Doctrina anti-fallos (por qué el sistema no se rompe a las 3 AM)
1. **Un solo escritor.** Solo el orquestador escribe en el vault y toca conectores (Gmail, yt-dlp, navegador).
   Los subagentes son READ-ONLY y devuelven texto. → imposible corromper archivos o pisar escrituras.
2. **Degradación elegante.** La salida de un subagente es ASESORA, nunca dependencia dura. Si un subagente
   falla, muere por timeout o devuelve vacío, el orquestador CONTINÚA con un fallback documentado (marca la
   afirmación "sin verificar" / hace la autoedición a mano) y lo registra en aprendizajes. La nota diaria
   SIEMPRE se escribe.
3. **Tools mínimas.** Cada subagente lleva solo Read/Grep/Glob → menos superficie de permisos → no se cuelga
   pidiendo autorización. El I/O con conectores lo hace el orquestador, que ya los tiene aprobados.
4. **Fan-out acotado.** No se verifica cada bullet: solo las afirmaciones de alto impacto (las que tocan la
   cartera o van a ascender a una página durable). Coste y tiempo predecibles.
5. **Checkpoint en scratchpad.** La extracción intermedia se vuelca a scratchpad; la escritura de la nota es
   el último paso, casi atómico. Un fallo a mitad no deja el vault a medias.
6. **Pre-aprobación.** Un "Run now" inicial por rutina banca los permisos de tools; los runs de las 3 AM no se
   pausan.
7. **Auto-reparación.** Todo fallo se escribe en el archivo de aprendizajes de la rutina y se aplica en el
   siguiente run (Fase 0). El equipo aprende de sus caídas.
8. **Autocrítica universal.** TODO orquestador (Elena, Marco, Carlos Bárez, Elisa) se **autoevalúa** al cierre
   de cada run: calidad de proceso (no resultado), sesgos propios, y si alguna lectura/tesis previa quedó
   desmentida por los hechos. Lo vuelca a su memoria de automejora. El **CIO contrasta** esa autoevaluación con
   lo que observa y cierra el bucle con mejoras (log reversible). La automejora es continua y de doble capa:
   cada agente se corrige a sí mismo, y Elisa corrige al equipo.

## Acceso a datos de mercado (robusto en headless)
Los conectores MCP (Alpha Vantage, Massive, FMP) viven en el almacén de la app y **pueden faltar en runs
programados headless**. Doctrina: los agentes de datos intentan **MCP primero**; si falla, usan el **helper
REST** `scripts/market_data.py` (`av`=Alpha Vantage, `fmp`=Financial Modeling Prep), que lee las API keys de
`~/.cerebro/secrets.env` (**fuera del repo, nunca en git**); si eso también falla, degradan a los datos ya
recopilados por Elena/Marco + WebSearch, y lo anotan. Así el análisis nunca se queda sin base.

## Búsqueda web del equipo (Perplexity MCP)
Buscador web con IA y citas del equipo: **Perplexity** (plugin MCP, tools `perplexity_search`/`perplexity_ask`/
`perplexity_research`/`perplexity_reason`). Es la **fuente de búsqueda en internet preferida** sobre WebSearch
para hechos recientes, noticias y verificación (devuelve fuentes citadas). Los orquestadores que corren vía
ejecutor (`*` tools) ya la tienen; se dio explícitamente a los subagentes **recopilador-fundamental** (búsqueda
de datos/hechos de empresa), **analista-fundamental** (Carlos Bárez: `research`/`reason` para tesis profunda) y
**verificador-adversarial** (`search`/`reason` para refutar con evidencia). Uso disciplinado: `research` es lento
(30s+) y caro — reservado para due-diligence de una candidata, no para cada dato. Siempre citar fuente; separar
hecho de opinión igual que con cualquier fuente.

**Datos financieros de empresa** (fundamentales, ratios, estados): los cubren los MCP ya conectados **Alpha
Vantage, FMP (Financial Modeling Prep) y Massive** (fichas, income/balance/cash-flow, ratings, estimaciones,
peers, insider/institucional…). Estos tres MCP son la capa de **datos** financieros del Cerebro.

**Lectura de página completa — ahorro de tokens (defuddle, 2026-07-16)**: cuando un agente necesita el
contenido íntegro de una URL (artículo largo, filing, informe) y no solo un hecho puntual (eso lo cubre
Perplexity), usa `npx --yes defuddle parse <url> --md` (Bash) **en vez de WebFetch**: extrae markdown limpio
sin navegación/ads/HTML de maquetación — mismo contenido, muchos menos tokens. Sin instalación global (evita
el patrón sudo/Homebrew que causó el incidente de sesión colgada de 2026-07-11 — ver `CLAUDE.md`); `npx` lo
resuelve al vuelo desde caché. Dado a **recopilador-fundamental** y **verificador-adversarial** (tool `Bash`).
Vuelca siempre a scratchpad, nunca pega el markdown completo en contexto — mismo patrón que la extracción PDF.
**Degradación elegante**: algunos sitios con protección anti-bot (ej. Investopedia) devuelven `403 Forbidden`
a defuddle — en ese caso cae a WebFetch normal, no es un fallo del agente.

**Metodología de valoración** (2026-07-16): instalado el plugin oficial `financial-analysis@claude-for-financial-services`
(`anthropics/financial-services-plugins`, marketplace `claude-for-financial-services`) — la única vertical del
repo que funciona **sin conector de pago**. Aporta skills (`dcf-model`, `comps-analysis`, `lbo-model`,
`3-statement-model`, `audit-xls`, `competitive-analysis`) con el framework metodológico de banca de inversión
para DCF/múltiplos/sensibilidad. Dado a **analista-fundamental** (Carlos Bárez, tool `Skill`) como marco de
razonamiento para su valoración por escenarios — no para generar ficheros `.xlsx` (rompería su doctrina
READ-ONLY): aplica la lógica y devuelve los números en su tesis de texto. El resto del repo (equity-research,
private-equity, LSEG, S&P Global…) exige conectores de pago (Daloopa, FactSet, Moody's, PitchBook…) que Carlos
no tiene contratados — **no instalados**, para no añadir superficie de permisos sin uso real.

## La cadena diaria (madrugada) — horarios vigentes desde 2026-07-16
`03:03 Elena (news, L-V)` → `03:45 Marco (vídeo, diario)` → `04:30 Carlos Bárez (fundamental, L-X-V) /
Jorne (técnico, M-J-S)` → `05:15 Inés (estrategia, L+J)` → `06:00 Daniel (riesgo, L+J)` →
`06:45 Elisa (CIO decide, L+J)`. Fuera de la cadena: `11:00 Sofía (CKO conocimiento, diario — lee los
informes de la mañana ya escritos; jueves run profundo)`. Semanales: `sábado 08:00 sintetizador durable` ·
`domingo 09:00 mantenimiento (semáforo)` · `domingo 18:00 veredicto Brier` (deja el scorecard listo para la
CIO del lunes). Mensual: `día 1, 07:00 gestor de cartera`.
Cada eslabón deja su informe en el vault para el siguiente; los crons van espaciados para que dos rutinas no
escriban `log.md`/`index.md` a la vez.

## Cómo enchufar un agente nuevo (checklist)
1. Crear `.claude/agents/<nombre>.md` con frontmatter (`name`, `description`, `tools` mínimas, `model`) y rol.
2. Si es ASESOR: read-only, devuelve texto, nunca escribe. Si es ORQUESTADOR: define su persona y quién es el
   único escritor de su ámbito.
3. Añadirlo al roster de este acta.
4. Invocarlo desde la(s) rutina(s) con la regla de degradación elegante (si falla, fallback + log).
5. Un "Run now" para bancar permisos.

## Ver también
- objetivos · cartera actual · perfil de inversor — el marco desde el que razona todo el equipo.
- Rutinas y su memoria: `.rutina-aprendizajes.md`, `.rutina-video-aprendizajes.md`, `.mappings.json`.
