---
title: "Historial del Cerebro (changelog de construcción)"
tipo: sintesis
tags: [meta, historial, ingesta]
fecha: 2026-07-17
---

# Historial del Cerebro (changelog de construcción)

Registro narrativo de cómo se construyó el Cerebro, tanda por tanda. **Movido desde `CLAUDE.md` el
2026-07-17** para aligerar el esquema (que se carga en cada run de cada agente): CLAUDE.md conserva solo el
resumen de estado; el detalle histórico vive aquí y en [[log|log.md]]. No es operativo — es memoria
institucional consultable. La foto viva del sistema está en [[equipo-agentes]] y [[estado-del-sistema]].

## Estado del corpus y la infraestructura (detalle por tanda)

- **Warren Buffett** — COMPLETO. Ingeridas las 25 cartas anuales a los accionistas de Berkshire Hathaway
  (`raw/warren_buffett/`, **2000-2024**). Es el corpus de referencia del cerebro; los conceptos transversales
  (`conceptos/`) están construidos principalmente desde esta fuente.
- **Bill Ackman / Pershing Square Holdings** — segundo inversor, **COMPLETO**. Ingeridos los 7 informes anuales
  de PSH (`raw/Pershing Square Holdings/`, **2019-2025**; cartas del *Investment Manager*). Se ingirieron **solo
  los informes anuales** (se descartaron los *interim financial statements* y se borraron duplicados, con permiso
  explícito de Carlos —excepción puntual a la inmutabilidad de `raw/`, anotada en `log.md`—). Cruzado con los
  conceptos de Buffett anotando las **tensiones** de estilo (activismo vs. gestión pasiva, concentración,
  apalancamiento, coberturas con derivados, cortos, y Ackman SÍ vende por valoración vs. el "para siempre" de
  Buffett) como evolución/contraste entre fuentes. Conceptos nuevos creados: `activismo-accionarial.md`,
  `carteras-concentradas.md`. Puente narrativo del corpus: Ackman **compra** Berkshire (2019) → discute el
  "conglomerado mejorado" con Buffett (2020) → **construye su propio "modern-day Berkshire"** vía Howard Hughes +
  Vantage/float (2025).
- **Benjamin Graham / *The Intelligent Investor*** — tercer inversor y primer LIBRO del cerebro, **COMPLETO**
  (ingesta profunda-selectiva). Es la RAÍZ intelectual de Buffett y Ackman: se crearon `inversores/benjamin-graham.md`,
  los conceptos `mr-market.md` y `margen-de-seguridad.md`, y la fuente `fuentes/libros/el-inversor-inteligente.md`,
  con **anotación de raíz** en los conceptos heredados (valor-intrinseco, precio-vs-cotizacion,
  riesgo-real-vs-volatilidad, negocio-maravilloso). Nueva carpeta de fuentes: `fuentes/libros/`.
- **Howard Marks / *The Complete Collection*** — cuarto inversor, **COMPLETO E ÍNTEGRO** (2026-07-10: los 126
  memos 1990-2025 procesados uno a uno, en 6 páginas por era `marks-memos-*.md`; la colección llega hasta
  "Is It a Bubble?" nov-2025 sobre la IA). Origen (ingesta selectiva): El PDF
  (1.641 pp., cifrado; leído con `pypdf` + `cryptography 3.4.8`) se indexó por completo (índice título→página de
  los ~126 memos, guardado en scratchpad) y se leyeron en profundidad los 3 memos canónicos (MIT 2003, Risk
  2006, You Can't Predict 2001). Creados: `inversores/howard-marks.md`, `conceptos/pensamiento-de-segundo-nivel.md`,
  `conceptos/ciclos-de-mercado.md`, `fuentes/libros/howard-marks-memos.md`; ampliado `riesgo-real-vs-volatilidad.md`.
  El resto de memos queda indexado para profundizar en consultas futuras sin releer el PDF.
- **Terry Smith / Fundsmith** — quinto inversor, **COMPLETO**. Ingeridas las cartas anuales del Fundsmith Equity
  Fund (`raw/Terry Smith - Fundsmith Letters/`, **2015-2025**); borrados 2 duplicados exactos (hash MD5). El
  compounder de CALIDAD puro ("buy good companies, don't overpay, do nothing"). Creados `inversores/terry-smith.md`,
  el concepto `retorno-sobre-capital-empleado.md` (ROCE/ROIC, puente con los manuales de valoración) y la fuente
  **consolidada** `fuentes/fundsmith/terry-smith-cartas.md` (con resumen por año, en vez de 11 páginas, por ser
  cartas muy repetitivas). Cruzado: afinidad con Buffett (calidad); TENSIÓN con Ackman (anti-activismo); su
  ensayo sobre la distorsión de la indexación (NBER) respalda el "mercado roto" de Ackman y los ciclos de Marks.
  Nueva carpeta `fuentes/fundsmith/`.
- **Manuales de valoración (Damodaran + McKinsey)** — **COMPLETO (ingesta completa por familias)**. Por decisión
  de Carlos se pasó de "caja de herramientas ligera" a **ingesta completa**, leyendo los núcleos de los capítulos
  y destilándolos en **~15 conceptos de valoración** en `conceptos/`: flujo-de-caja-descontado, coste-de-capital-wacc,
  multiplos-de-valoracion (ampliado con familias), retorno-sobre-capital-empleado, valor-terminal,
  estimacion-del-crecimiento, contabilidad-y-calidad-de-beneficios, prima-de-riesgo-y-beta, eficiencia-de-mercado,
  valoracion-de-empresas-financieras, valoracion-ciclicas-y-beneficios-negativos, valoracion-empresas-jovenes-y-privadas,
  opciones-reales, creacion-de-valor-y-eva, adquisiciones-fusiones-y-sinergias. Fuente: `fuentes/libros/manuales-de-valoracion.md`.
  No llevan página de inversor. El resto de ambos manuales (casos, tablas, detalle numérico) queda como
  **referencia consultable** sin releer los PDF enteros.
- **Páginas aplicadas (`sintesis/`)** — creadas para operacionalizar todo el cerebro hacia los objetivos de
  Carlos (seleccionar empresas, evaluar cartera, leer macro): `comparar-dos-empresas.md`, `screening-de-calidad.md`,
  `evaluar-una-cartera.md`, `checklist-macro-y-ciclo.md`. La carpeta `sintesis/` ya no está vacía.
- **Herramienta de lectura de fuentes** (actualizado 2026-07-11, benchmark real sobre el propio corpus):
  - **PDF: `PyMuPDF` (`import fitz`) en vez de `pypdf`.** Instalado vía `pip3 install --user pymupdf` (puro
    pip, sin Homebrew/sudo, sin problema de compilación en este Python 3.9). Benchmark sobre las 21 cartas de
    Giverny Capital (397 páginas): **pypdf 37,6s vs. PyMuPDF 2,0s** (~19x más rápido), mismo volumen de texto
    extraído (~1M caracteres, diferencia <0,5%). Además, PyMuPDF abrió sin contraseña ni la librería
    `cryptography` el PDF de Howard Marks que antes se consideraba "cifrado" (`doc.is_encrypted` da `False` en
    PyMuPDF pese a que `pypdf` exigía `cryptography` para el mismo archivo) — probablemente el PDF solo tenía
    restricciones de propietario (impresión/copia), no cifrado con contraseña de apertura, y PyMuPDF las
    ignora de forma transparente. **`pypdf` queda descartado como herramienta por defecto**; se mantiene
    solo como *fallback* si `pymupdf` no está disponible en el entorno.
  - **Patrón de extracción sin importar la librería**: volcar el texto completo a un archivo del scratchpad
    (`doc[i].get_text()` en bucle) y leerlo después con `Read`/`grep`/rangos de página — NUNCA pegar el texto
    extraído directamente en la conversación. El ahorro de tokens real no viene de la velocidad de la
    librería (eso es tiempo de CPU, no tokens) sino de esta separación extracción↔lectura: localizar primero
    el índice/tabla de contenidos o hacer `grep` de separadores (años, "Dear partners", títulos de capítulo)
    para leer solo las secciones relevantes, en vez de leer el volcado completo de golpe. Ver el patrón
    aplicado en todas las ingestas de la tanda 2026-07-11 (Giverny, Nomad, Ray Dalio: extracción completa a
    `/tmp`, luego lectura selectiva por rango/grep).
  - **EPUB: `ebooklib` + `BeautifulSoup`, no `pandoc` ni Calibre.** Ninguno de los dos está instalado y ambos
    requerirían Homebrew (evitado tras el incidente de sesión colgada de 2026-07-11 — ver `log.md`). Benchmark
    sobre el EPUB de Philip Fisher (730k caracteres): `ebooklib+BeautifulSoup` 0,52s, texto en **flujo continuo
    por capítulo** (sin saltos de línea forzados de maquetación) — más limpio de leer para un LLM que la
    paginación artificial. `PyMuPDF` también abre EPUB directamente (0,78s, mismo volumen de texto) y es una
    alternativa válida de una sola dependencia si ya se usa para PDF, pero inserta saltos de línea de
    paginación que rompen párrafos a mitad de frase — usar `ebooklib` cuando la limpieza del texto importe más
    que tener una única librería para todo. Se descartó MarkItDown (Python 3.9 del sistema, demasiado antiguo
    para la versión moderna).
- **Tanda 2026-07-10 (nuevas voces)** — **COMPLETA**: **Pat Dorsey** (*The Five Rules* → taxonomía de fosos en
  `foso-economico` + umbrales en `screening-de-calidad`); **Cliff Asness/AQR** (primera voz CUANT; 21 papers en
  4 clusters → `retornos-esperados`, `ilusion-de-los-activos-privados`, `tracking-error-y-riesgo-de-carrera`,
  `fiscalidad-del-inversor` —incluye *The Wrapper Illusion*—); **KKR** (private equity; gestora + float Global
  Atlantic + Strategic Holdings = convergencia con Berkshire/HHH; retail-ización K-Series); **Larry
  Fink/BlackRock** (la voz de la indexación y de los privados en pensiones; leído como parte interesada).
  Nuevas carpetas: `fuentes/aqr/`, `fuentes/kkr/`, `fuentes/blackrock/`. Borrado 1 duplicado AQR (texto
  idéntico verificado). TENSIONES nuevas: Asness vs Marks (iliquidez), Asness vs KKR/Fink (privados), Fink vs
  Smith/Ackman (indexación), "Hold the Dip" vs "comprar el miedo".
- **Estructura**: 29 voces ([[benjamin-graham]] → [[warren-buffett]] · [[charlie-munger]] → [[bill-ackman]] +
  [[howard-marks]] + [[terry-smith]] + [[cliff-asness]] + [[kkr]] + [[larry-fink]] + [[ray-dalio]] +
  [[francisco-garcia-parames]] + [[azvalor-am]] + [[horos-am]] + [[jamie-dimon]] + [[philip-fisher]] +
  [[francois-rochon]] + [[nick-sleep]] + [[morgan-housel]] + [[peter-lynch]] + [[jeremy-grantham]] + [[james-montier]] + [[nassim-taleb]] + [[annie-duke]] + [[michael-pettis]] + [[mark-mobius]] + [[ruchir-sharma]] + [[kathryn-kaminski]] + [[abby-joseph-cohen]] + [[michael-mauboussin]]) y tipos de fuente: cartas (`cartas-berkshire/`, `pershing-square/`,
  `fundsmith/`, `kkr/`, `blackrock/`, `cobas/`, `azvalor/`, `horos/`, `jpmorgan/`, `nomad/`), libros
  (`libros/`) y papers (`aqr/`, `ray-dalio/`). Todo el material entregado está ingerido e interconectado.
- **Tanda 2026-07-12 (libros nuevos) — COMPLETA**. Carlos añadió ~13 EPUBs nuevos a `raw/`. Triage por valor.
  **Tier 1**: **Morgan Housel** (18ª voz del comportamiento, 3 libros → `morgan-housel-libros.md` +
  `inversores/morgan-housel.md`); **Deep Value / Carlisle** (`deep-value-carlisle.md` + concepto
  `reversion-a-la-media.md`; tensión anti-calidad: EV/EBIT bajo solo > barato+calidad); **La sabiduría de las
  finanzas / Desai** (`la-sabiduria-de-las-finanzas-desai.md`, finanzas vía humanidades). **Tier 2**: **Mary
  Buffett & Clark x3** consolidado (`mary-buffett-clark-libros.md`, refuerzo de lectura de estados
  financieros); **Lowell Miller** (`dividendos-crecientes-miller.md` + concepto
  `inversion-en-dividendos-crecientes.md`); **Bernstein** (`diversificacion-eficiente-bernstein.md` + concepto
  `asignacion-de-activos.md`). **Tier 3**: nota de cobertura `divulgacion-popular-es.md` (Robbins + Amador +
  Redondo + de Domingo —este último solo ~24k car., archivo incompleto—). 3 conceptos nuevos. Verificado: **0
  enlaces rotos en 167 páginas**. PENDIENTE menor: duplicado Miller `(1)` sin borrar (comando dado a Carlos).
- **Terry Smith "Investing for Growth" + síntesis de todas las voces (2026-07-12)** — COMPLETO. Nuevo archivo
  `raw/papers-sueltos/investing-for-growth-9780857199027.pdf` (ensayos/columnas/cartas de Smith 2010-2020): NO es voz nueva,
  refuerzo profundo de [[terry-smith]] → `fuentes/libros/investing-for-growth-smith.md` (las "diez reglas de
  oro", "return-free risk" contra los bonos, crítica a ETF/recompras/fees). **Pasada de síntesis maestras a 18
  voces HECHA**: `mapa-del-cerebro` con fila Housel + nueva tensión "calidad vs. baratura extrema" (Carlisle),
  `sintesis-del-riesgo` a 18; comportamiento y calidad-vs-precio ya incorporaban Housel/Carlisle. 0 enlaces
  rotos en 168 páginas.
- **Capa del operador (`perfil/`)** — creada 2026-07-12: `perfil-de-inversor.md`, `cartera-actual.md`,
  `objetivos.md`, `decisiones.md` + `decisiones/`. Ver sección "Capa del operador" arriba. Tipos nuevos:
  perfil | cartera | decision.
- **Comandos de flujo** (`.claude/commands/`, nativos de Claude Code, sin Node): `/cerebro-cierre` (commit de
  fin de sesión + **backup** vía `scripts/backup.sh` + recordatorio de reindexar Smart Connections),
  `/cerebro-auditoria` (salud del wiki: lint de enlaces/YAML/huérfanas **+** vigencia — cifras caducadas,
  diario de decisiones, cartera, pulso, backup, huecos), `/cerebro-pulso <url>` (ingesta curada de YouTube:
  durable→conocimiento, noticias→pulso fechado), `/cerebro-empresa <nombre>` (aplica el marco completo a una
  candidata: calidad+precio+expectativas+banderas rojas+encaje en cartera), `/cerebro-predicciones` (registra y
  resuelve predicciones fechadas con Brier score — calibración del proceso) y `/cerebro-consejo <decisión>`
  (convoca a las 29 voces a debatir una decisión — el consejo asesor, ver [[consejo-de-voces]]). **6 comandos** (se fusionó
  `/cerebro-revision` dentro de `/cerebro-auditoria` por solaparse, 2026-07-15).
- **Backup** (`scripts/backup.sh`, 2026-07-15): snapshot `.tar.gz` de `wiki/`+config (sin `raw/`, ~1,8 MB) a
  `~/Cerebro-Carlos-backups/` (conserva 10); acepta destino externo como arg (`scripts/backup.sh /Volumes/X`).
  El git local sigue sin remoto: para backup **fuera del disco**, copiar el `.tar.gz` a disco externo/nube.
- **Infraestructura del sistema operativo** (2026-07-16, Fase 2 de [[auditoria-sistema-operativo-2026-07]]):
  `.claude/sistema/` (7 reglas de sistema — doctrina anti-fallos, densidad, coste, ética, memoria, escritura,
  escalada — FUENTE ÚNICA, los SKILL las referencian en vez de copiarlas), `.claude/plantillas/` (10 contratos
  de output con ejemplo; rígidos para roles mecánicos, esqueleto para roles de juicio) y
  `.claude/skills-cerebro/` (10 procedimientos reutilizables: extracción, recopilación de datos, valoración por
  industria, verificación adversarial, predicción falsable, memoria, earnings-review, promoción a durable,
  densidad/autocheck, squads de investigación — fan-out barato acotado para CIO/fundamental/CKO, con
  promoción de scout recurrente a agente permanente vía Elisa). **Fase 4 (2026-07-17): las 9 rutinas + mantenimiento migradas al formato estándar v2**
  (CONTRATO→PASOS→JUICIO→AUTOCHECK, doctrina referenciada); memorias de agente en formato VIGENTE/HISTÓRICO;
  verificador con umbral ampliado (todo lo que cambie el comportamiento de Carlos); valoración a ciegas
  anti-anclaje en el fundamental. La CIO evalúa la migración en sus runs — si la calidad de un agente baja,
  recomienda rollback (git guarda las versiones pre-v2). Watchlist viva en
  `wiki/analisis-fundamental/watchlist.md` (escritor único: rutina fundamental; earnings review automático —
  primer caso Verisk 29-jul). **Carlos Bárez caza los VIERNES**: descubrimiento activo de empresas nuevas
  (pipeline 2 etapas: shortlist Haiku → mejor a tesis Sonnet), guiado por Inés/encargos/pulsos/screening MCP
  + Perplexity, sin restricciones de universo (Carlos filtra).
- **CKO — Sofía Navarro (2026-07-17)**: octava persona del equipo, *Chief Knowledge Officer*. Rutina
  `cerebro-cko-conocimiento` (diario 11:00; Sonnet vía `ejecutor-sonnet`, JUEVES run profundo de arquitectura
  sin delegar). Knowledge-ops diario (rotando un dominio del vault) + una misión de investigación con squads
  ad-hoc de ≤3 scouts read-only (`recopilador-fundamental`/`Explore`). Escritora única de `wiki/conocimiento/`
  (informe diario, durable `arquitectura-del-conocimiento.md`, cola `encargos.md` — Carlos la edita a mano y
  los agentes marcan `[CKO:]` en sus informes). Límites duros: no decide inversión ni construye tesis;
  propone a los dueños, subordinada a Elisa. Plantilla: `.claude/plantillas/informe-conocimiento.md`.
- **Cobas AM / Francisco García Paramés** — undécimo inversor, **COMPLETO, serie íntegra 2021-2025**
  (2026-07-10): ingeridos **12 documentos** (`raw/cobas/`: 5 cartas trimestrales 4T2021-4T2022, 1 nota de
  inversión oct-2023, 6 cartas semestrales 1S2023-2S2025), consolidados en
  `fuentes/cobas/cobas-cartas-trimestrales.md` (patrón cartas repetitivas, igual que Fundsmith). El value
  investor español más cercano a Graham/Buffett del corpus: deep value clásico, margen de seguridad
  cuantificado, cartera diversificada de 30-64 posiciones sin caja de reserva ni derivados, mecanismo de
  rotación documentado con casos multi-año completos (Maire Tecnimont 2018-2023, Babcock 2017-2025), al menos
  7 OPAs recibidas 2023-2024 como validación empírica, y la evolución de gobernanza de "Fondo de Autor" a
  gestión colegiada (2S2024). Creado `inversores/francisco-garcia-parames.md`. Mayormente **REFUERZO** del
  corpus existente (como anticipó Carlos): `conceptos/margen-de-seguridad.md` (cuantificación mecánica),
  `conceptos/ciclos-de-mercado.md` ("no predecir, sí prepararse" de Marks reformulado de forma independiente),
  `conceptos/retorno-sobre-capital-empleado.md` (mismo instrumental que Terry Smith, aplicación opuesta),
  `inversores/benjamin-graham.md` (las OPAs como validación empírica de las "situaciones especiales"/*workouts*
  de Graham). TENSIONES: `conceptos/carteras-concentradas.md` (cuarto polo de diversificación; ausencia de caja
  de reserva vs. Buffett) y `conceptos/viento-de-cola-americano.md` (la tesis de Asia de Paramés —
  desplazamiento del PIB mundial hacia Asia, datos FMI, escrita en primera persona desde Singapur en 2S2023—
  frente al "Never bet against America" de Buffett). Añadida a `sintesis/checklist-macro-y-ciclo.md` la única
  referencia explícita del corpus a la Escuela Austriaca como marco causal de la inflación. Nota de cobertura:
  solo estos 12 documentos, no el libro "Invirtiendo a Largo Plazo" (pendiente si se añade esa fuente).
- **Ray Dalio / Bridgewater Associates** — décimo inversor, **COMPLETO** (2026-07-10): ingeridos 2 papers
  técnicos de Bridgewater (`raw/ray_dalio/`, 2012): "The All Weather Story" (génesis de la estrategia All
  Weather / risk parity) y "An In-Depth Look at Deleveragings" (Ray Dalio; mecánica de los desapalancamientos
  vía 6 casos históricos: EE.UU. 1930s y 2008, Reino Unido, Japón, España, Weimar). Primera voz de **macro
  sistémica y construcción de cartera** por encima del análisis de negocio individual. Creados
  `inversores/ray-dalio.md`, `conceptos/paridad-de-riesgo-y-diversificacion.md`,
  `conceptos/ciclo-de-deuda-y-desapalancamiento.md`. TENSIÓN de primer nivel con
  `conceptos/aversion-al-apalancamiento.md` (apalancamiento como herramienta neutral vs. enemigo estructural);
  tercer polo en `conceptos/carteras-concentradas.md` (diversificación por humildad epistémica macro); puente
  con `conceptos/ciclos-de-mercado.md` (ciclo mecánico vs. péndulo psicológico) y 3 termómetros nuevos en
  `sintesis/checklist-macro-y-ciclo.md`. Nota de cobertura: solo estos 2 papers, no *Principles* (pendiente si
  se añade esa fuente). Un tercer PDF adjunto junto a estos dos ("Cirugía torácica") no era de inversión y fue
  subido por error (confirmado por Carlos) — descartado sin copiar ni ingerir.
- **Análisis técnico (2026-07-10)** — **COMPLETO como caja subordinada** (decisión de Carlos: escéptico del AT,
  útil solo para patrones/tendencias/entradas). Grimes (*Art & Science of TA*, ingesta del marco), teoría de
  Dow (ligera-histórica) y Van Tharp (*Position Sizing*, **stub parcial: el PDF es solo el índice**, pendiente
  libro completo). Conceptos: `analisis-tecnico-y-tendencia.md`, `gestion-de-posiciones.md`; síntesis aplicada:
  `puntos-de-entrada.md` ("valor decide, ciclo calibra, técnica dosifica"). Encuadre: solo la tendencia/momentum
  tiene evidencia (AQR); el resto es folclore; nunca sustituye a la valoración. Carpeta `raw/Análisis técnico/`.
- **HECHO (tarea #59)**: re-análisis maestro — 4-5 síntesis transversales (riesgo, calidad-vs-precio,
  comportamiento, macro-ciclo, mapa de modelos mentales) + pasada de enriquecimiento de enlaces sobre el
  corpus completo de 9 voces.
- **Conceptos de temperamento/tiempo** — creados `conceptos/horizonte-largo-plazo.md` e
  `conceptos/interes-compuesto.md` (el motor del compounding y su precondición), con la **tensión** anotada:
  Buffett/Smith "forever" vs. Ackman que sí vende por valoración. El wiki tiene **91 notas, 0 enlaces rotos**.
- **Integración con Obsidian + capa visual** (2026-07-09): el vault se opera también con la **CLI oficial de
  Obsidian** (binario en `/Applications/Obsidian.app/Contents/MacOS/obsidian-cli`, enlazado en `/usr/local/bin/obsidian`;
  requiere Ajustes → General → Advanced → *Command line interface* activado y Obsidian abierto). Útil para
  leer/buscar/escribir en vivo y para **lint** (`obsidian eval` sobre `metadataCache.unresolvedLinks`). Rediseño
  estético **reversible** (paleta Nord): grafo coloreado por categoría en `.obsidian/graph.json`, snippet
  `.obsidian/snippets/cerebro.css` (tipografía, callouts, tags, callouts a medida por tipo), y **portada/dashboard**
  `wiki/inicio.md` (`cssclass: cerebro-dash`). Tema activo: **Obsidian Nord** (Minimal también instalado).
- **obsidian-git — reauditado (2026-07-11)**: `.obsidian/plugins/obsidian-git/` v2.38.6, escaneado de nuevo
  (`main.js`, 719KB) sin endpoints de red sospechosos ni `child_process`/`exec` fuera de invocar el binario
  git — sigue limpio. Config sin cambios desde 2026-07-09: `autoSaveInterval: 30`, `disablePush: true`,
  `autoPushInterval: 0` (sin remoto configurado). **Limitación importante detectada**: el auto-commit del
  plugin solo se dispara mientras **Obsidian está abierto** — las sesiones de Claude Code (como las que
  generaron toda la tanda 2026-07-11) no lo activan, aunque escriban directamente sobre los mismos archivos.
  Dos sesiones completas quedaron sin commitear desde el 2026-07-10 16:11 hasta que se hizo un **commit manual
  de respaldo** al cierre de esta tanda. **Convención nueva**: al terminar cualquier sesión de trabajo grande
  vía Claude Code (varias ingestas, una auditoría, una tanda de mantenimiento), hacer `git add` + `git commit`
  manual como cierre — no depender solo del auto-commit del plugin, que cubre la edición manual en la app pero
  no el trabajo agéntico.
- **Tanda 2026-07-11 (seis voces nuevas + ampliación Dalio + manual Amat)** — **COMPLETA**, ingerida por 8
  agentes en paralelo (más un relanzamiento de Dalio, interrumpido en su primer intento sin escribir nada).
  **Azvalor AM** (12ª voz, 7 cartas 3T2022-2S2025) y **Horos AM** (13ª voz, 9 cartas 3T2024-2T2026): segunda y
  tercera gestora española de value investing junto a Cobas — misma escuela por convergencia de método, con
  linajes distintos (Bestinver para Cobas/Azvalor, Metagestión para Horos) que ninguna de las cartas confirma
  explícitamente por nombre, solo Cobas lo hace. **Jamie Dimon/JPMorgan Chase** (14ª voz, carta 2025): primera
  voz de un banco universal regulado, tercer polo del apalancamiento (estructural por diseño, ni enemigo de
  Buffett ni herramienta neutral de Dalio), y primera cita textual de un inversor del corpus a otro (Dimon cita
  a Buffett). **Philip Fisher** (15ª voz, *Common Stocks and Uncommon Profits* 1958): raíz intelectual del giro
  de Munger/Buffett hacia la calidad ("15% Fisher, 85% Graham"), método *scuttlebutt*, antecesor directo de
  Terry Smith. **François Rochon/Giverny Capital** (16ª voz, 21 cartas 2001-2021): discípulo declarado de
  Buffett/Graham/Templeton/Fisher/Lynch, "Podium of Errors" heredado de Berkshire 1989 (19/21 errores de
  omisión, no comisión). **Nick Sleep/Nomad Investment Partnership** (17ª voz, 24 cartas 2001-2014, la
  colección real —no 25, corregido 2026-07-11—): acuñó
  "scale economics shared" (Costco/Amazon) y cerró el fondo voluntariamente devolviendo capital a los socios —
  caso extremo de alineación de incentivos sin paralelo en el corpus. **Ray Dalio ampliado**: *Principles: Life
  and Work* (verdad radical, meritocracia de ideas) y *Principios para enfrentarse al nuevo orden mundial*
  (el Gran Ciclo de imperios/monedas de reserva a ~500 años, solo edición ES en `raw/`) — cuarta voz, junto a
  Buffett/Paramés/Dimon, sobre el desplazamiento del poder económico mundial ([[viento-de-cola-americano]]).
  **Manual de Oriol Amat** (*Análisis integral de empresas*, sin página de inversor, tratado como caja de
  herramientas igual que Damodaran/McKinsey): amplía sustancialmente `contabilidad-y-calidad-de-beneficios.md`
  (contabilidad creativa, DuPont, Altman Z-score) y crea `fondo-de-maniobra-y-ciclo-de-caja.md`, primer
  concepto de liquidez a corto plazo del cerebro. 6 conceptos nuevos en total. Cierra 2 huecos del gap-analysis
  del 2026-07-10 (Fisher, Dalio Changing World Order — ver `sintesis/huecos-y-proximos-pasos.md`).
- **Cierre a cobertura íntegra + auditoría exhaustiva (2026-07-11, 4 fases)** — **COMPLETO** (fases 1, 3, 4;
  fase 2 bloqueada, ver abajo). Los 4 huecos parciales que había dejado la tanda anterior se cerraron a
  ingesta **íntegra** letra por letra/capítulo por capítulo: **Philip Fisher** (los 21 capítulos completos,
  con el marco nuevo de 1975 `cuatro-dimensiones-de-inversion-conservadora.md`), **Giverny Capital** (las 21
  cartas completas), **Nomad** (las **24 cartas reales** de la colección —no 25, corrección propagada a todo
  el corpus—), y el **manual de Amat** (los 11 capítulos + detalle numérico de todos los casos prácticos).
  *Changing World Order* de Dalio ganó una **"Nota de cobertura" explícita** (declara qué se leyó y qué no,
  con el cap. 7 "Investing in the Big Cycle" como hueco de mayor prioridad pendiente). Las **4 síntesis
  maestras** se reescribieron para las 17 voces — cambio de mayor impacto: **Fisher insertado en la genealogía
  calidad-vs-precio ANTES de Munger** (1958 vs. 1965). Auditoría final de 3 agentes en paralelo
  (interconexiones/terminología/gap-analysis, mismo patrón que la del 2026-07-10): 14 archivos con cruces
  nuevos (hallazgo: Ackman y Rochon tuvieron ambos Valeant Pharmaceuticals de forma independiente), tags
  normalizados (`moat`, `value-investing`, `holding`), 19 fechas de frontmatter corregidas. Verificación final:
  **0 enlaces rotos, 0 huérfanas, YAML válido en las 150 páginas.**
  **Fase 2 (duplicados) BLOQUEADA**: las reglas de seguridad del agente prohíben el borrado permanente de
  archivos incluso con autorización explícita del usuario en la conversación — a diferencia de las tandas
  anteriores (Cobas/Fundsmith/AQR), esta vez el agente no pudo ejecutar el borrado él mismo. Siguen sin
  borrar: `raw/Azvalor/` (1 archivo con 2 copias exactas) y `raw/Horos/` (2 archivos con 1 copia exacta cada
  uno) — comandos exactos entregados a Carlos para que los ejecute él mismo.
- **Bloque A + B: infraestructura de decisión y meta-brainstorming (2026-07-13)** — **COMPLETO**.
  Bandeja de entrada operativa (`raw/_inbox/`, `scripts/check_inbox.py`, convención en la sección "Flujo de
  ingesta" de este archivo) para las cartas trimestrales de Cobas/Azvalor/Horos. `wiki/dashboard-cobertura.md`
  con campo `cobertura` en 73 fuentes vía Dataview. `wiki/sintesis/tensiones-activas.md` reformula 9 tensiones
  del corpus como preguntas de decisión reales. `wiki/sintesis/brainstorming-mejoras-del-cerebro.md`:
  meta-síntesis sobre qué falta estructuralmente más allá de fuentes (revisión de decisiones sin disparador,
  vigencia de tensiones/cifras coyunturales, peso/conflicto de interés por voz, verificación de citas, backup
  fuera del disco), sesgo cuantificado del corpus (~10/19 voces value/calidad long-only, 0 bajistas, 0 EM
  nativo, 0 mujeres, sesgo de superviviente estructural), y mantenimiento a largo plazo. Ver "0. Lo que ya
  está resuelto" de esa página para lo que la capa del operador (`perfil/`) ya cubre.
- **Tanda 2026-07-13 (cierre de huecos estructurales) — COMPLETA**. 10 voces nuevas en 5 clusters que cierran
  los 4 huecos que reclamaba el roadmap: **BAJISTAS** ([[jeremy-grantham]], [[james-montier]] de GMO; Albert
  Edwards; Rosenberg) — primer contrapeso a las ~19 voces alcistas; **SESGO DE SUPERVIVIENTE/AZAR**
  ([[nassim-taleb]], [[annie-duke]], [[when-genius-failed-ltcm|LTCM]], [[kahneman-tetlock-malkiel|Kahneman/Tetlock/Malkiel]]) + concepto nuevo [[sesgo-de-superviviente]]; **EMERGENTES** ([[michael-pettis]],
  [[mark-mobius]], [[ruchir-sharma]]; lead Rothman); **MUJERES** ([[annie-duke]], [[kathryn-kaminski]] con el
  *crisis alpha*, [[abby-joseph-cohen]], Linda Raschke); y **Mauboussin** ([[michael-mauboussin]], proceso/
  Expectations Investing). Mapa del cerebro a 29 voces + nueva tensión alcistas-vs-bajistas. 0 enlaces rotos.
  Antifrágil de Taleb es PDF escaneado (marco cubierto; OCR pendiente si se quiere el detalle).
