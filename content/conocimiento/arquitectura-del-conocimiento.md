---
title: "Arquitectura del conocimiento del Cerebro (mapa vivo — CKO)"
tipo: sintesis
tags: [conocimiento, cko, arquitectura, durable]
fecha: 2026-07-30
fuentes: []
---

# Arquitectura del conocimiento del Cerebro (mapa vivo — CKO)

Mapa durable de fuentes/conectores/lagunas del fondo. Lo mantiene Sofía Navarro (CKO). **Regla de evolución**:
se añade fechado, nunca se borra — lo superado se marca como tal, no se elimina.

**Techo (aplicado 2026-07-30, cierra la condición de aprobación de la CIO del 23-jul: "pon techo o fúndela
para que no se convierta en un cuarto sitio donde buscar lo mismo")**: las secciones fechadas de abajo son el
mapa vivo en sí — detalle real, no se comprimen. Lo que SÍ se poda es la duplicación *dentro* de este mismo
archivo: el detalle completo de cada hallazgo vive en su sección fechada (o en el informe diario
`conocimiento-YYYY-MM-DD.md` que lo originó) una sola vez. El antiguo "Historial de bootstrap" repetía en
prosa lo que las secciones de arriba ya contaban — sustituido por un índice de una línea por fecha. Nueva
entrada del historial: añadir la línea al índice, no un párrafo nuevo salvo que el hallazgo no tenga ya
sección propia arriba.

## Bootstrap (2026-07-17, primer run de la CKO)

Primera versión, destilada de `wiki/index.md`, [[mapa-del-cerebro]], [[dashboard-cobertura]] y
`wiki/equipo-agentes.md` (nunca inventado — ver esas páginas para el detalle completo, esto es el resumen
operativo que la CKO usa como punto de partida en cada run).

## Conectores de datos/investigación (capa de infraestructura)

| Conector | Uso | Quién lo tiene | Límite conocido |
|---|---|---|---|
| MCP Alpha Vantage / FMP / Massive | Datos financieros (estados, ratios, precios) | recopilador-fundamental, Jorne, gestor de cartera | Pueden faltar en runs headless → fallback `scripts/market_data.py` (REST directo con claves de `~/.cerebro/secrets.env`) |
| Perplexity (`search`/`ask`/`research`/`reason`) | Búsqueda web con citas — descubrimiento, nunca fuente definitiva | Casi todos los orquestadores + varios subagentes | `research`/`reason` lentos (30s+) y caros — reservados a due-diligence de alto impacto (regla de `disciplina-de-coste`). **Observado hoy**: el plugin tardó unos segundos en conectar al arrancar el run (aparece como "still connecting" al inicio de sesión) — no bloqueó nada, pero es la clase de fallo que si persistiera necesitaría fallback documentado |
| `npx --yes defuddle parse <url> --md` | Lectura íntegra de URL sin ruido de maquetación | recopilador-fundamental, verificador-adversarial (vía Bash) | Sitios anti-bot (ej. Investopedia) devuelven 403 → fallback a WebFetch |
| Gmail (newsletters) | Fuente de Elena (pulso de noticias) | Elena únicamente | Ver clasificación de remitentes en `wiki/actualidad/.rutina-aprendizajes.md` |
| yt-dlp + parseo VTT | Transcripciones de los 6 canales de YouTube de Marco | Marco únicamente | Flags específicos de macOS/YouTube documentados en `wiki/actualidad/.rutina-video-aprendizajes.md` (android client, sin flat-playlist, sin ffmpeg) |
| Obsidian CLI (`obsidian eval`) | Lint de enlaces (`metadataCache.unresolvedLinks`), lectura/escritura en vivo | Rutina de mantenimiento semanal + cualquier agente que lo necesite | Requiere Obsidian abierto y la CLI activada en Ajustes |
| Plugin `financial-analysis` (skills DCF/comps/LBO) | Marco metodológico de valoración | analista-fundamental (Carlos Bárez) | No genera `.xlsx` (rompería doctrina read-only de los subagentes) — aplica la lógica, devuelve números en texto |
| Squad ad-hoc de la CKO (`recopilador-fundamental` × ≤3 + `verificador-adversarial` × ≤2) | Investigación de alto impacto con ángulos opuestos (probado hoy: due-diligence de un candidato a voz nueva) | Solo Sofía (CKO), la diseña al vuelo cada run | Escala validada hoy: 2 scouts + 1 verificación fue suficiente y sin alucinaciones detectadas; fallback si un scout cae: continuar con lo que haya y marcarlo (doctrina anti-fallos) |

## Escritores únicos por dominio (resumen — tabla completa en `sistema/protocolo-de-escritura.md`)

`actualidad/pulso-*` → Elena · `actualidad/pulso-video-*` → Marco · `estrategia/` → Inés ·
`analisis-fundamental/` + `empresas/` → Carlos Bárez · `analisis-tecnico/` → Jorne · `riesgo/` → Daniel ·
`cio/` → Elisa · `predicciones/` → veredicto semanal (nadie más) · `cartera/` → gestor de cartera ·
`perfil/` → Carlos (humano) · `conocimiento/` → Sofía (yo). Páginas durables (`conceptos/`, `inversores/`,
`industrias/`) las escribe el orquestador del run que ingiere, o la CIO vía [[promociones-pendientes]].

## Mapa de lagunas vivo (fuente: `sintesis/huecos-y-proximos-pasos.md`, 2026-07-11 — resumen operativo)

**Prioridad alta**: (1) Munger primario (*Poor Charlie's Almanack* o discursos), (2) *Security Analysis* de
Graham 1934, (3) *Invirtiendo a Largo Plazo* de Paramés, (4) Van Tharp completo (hoy solo el índice).
**Prioridad media**: (5) voz bajista/vendedora en corto con oficio de convicción (Chanos/Burry — el manual de
Amat cubre detección de fraude contable pero no el ángulo de posicionamiento corto), (6) macro discrecional NO
sistemático que contraste con Dalio (sistemático) — **investigado hoy, ver informe `conocimiento-2026-07-17.md`,
candidato Daniel Lacalle con reservas documentadas**, (7) segundo banquero para contrastar a Dimon.
**Explícitamente descartado** (decisión ya tomada, no reabrir sin nueva razón): una cuarta gestora española de
value (Cobas/Azvalor/Horos ya cubren el espacio), más voces de indexación pasiva, más cuant puro, más private
equity.

**Huecos de mantenimiento** (de la misma fuente): fichero de pendientes centralizado (**ya resuelto** —
`wiki/pendientes.md` existe), vocabulario de tags no unificado (moat vs. foso-economico), nota metodológica
sobre "linaje declarado pero no confirmado por la fuente primaria" (patrón repetido en Azvalor/Horos, cada uno
lo documenta distinto — candidato a nota de criterio única).

**Nota de vigencia**: `huecos-y-proximos-pasos.md` tiene fecha 2026-07-11; a 2026-07-17 (6 días) varias líneas
ya están resueltas por ingestas posteriores (jul-12, jul-13) sin que el propio archivo lo refleje explícitamente
en todos los puntos — candidato a que su dueño (el sintetizador durable / la CIO) le pase una revisión de
vigencia, no una reescritura de la CKO.

## Canales de vídeo de Marco — cobertura de página durable (confirmado 2026-07-17)

Los 6 canales de la rutina de vídeo SÍ tienen página durable propia, verificado tras una sospecha inicial de
hueco que resultó falsa (anti-duplicación: comprobar antes de proponer): [[misterpuertas-metodo]],
[[carpatos-metodo]], [[cava-metodo]], [[negociostv-metodo]] en `wiki/actualidad/`, y **Gustavo-Bolsa /
Javier DV como páginas de inversor** ([[gustavo-martinez]], [[javier-dv]] en `wiki/inversores/`, no en
`actualidad/` — convención distinta pero cobertura real). Sin hueco aquí.

## Squad ad-hoc — precisión del conector (2026-07-17, run 2)

La skill compartida `squads-de-investigacion.md` (creada 20:12 el mismo día, commit `ad55440`, autorizada para
Elisa/Carlos Bárez/Sofía) confirma y precisa la fila de arriba: modelo **Haiku por defecto**, hasta **2 scouts
en Sonnet** por run cuando la pieza exige juicio (nunca Opus para scouts); tipos permitidos ampliados a
`Explore` · `recopilador-fundamental` · `editor-jefe` · `verificador-adversarial` (prohibidos los ejecutores
como scouts, porque escriben). Cap de Sofía confirmado en ≤3. Sin cambios de comportamiento, solo la
referencia queda explícita aquí para no tener que releer la skill cada run.

## Backlog de `raw/` sin ingerir (2026-07-20) — **RESUELTO 2026-07-21**

Inventario (no ingesta) de 8 documentos nuevos dejados por Carlos en `raw/` sin referencia todavía en
`wiki/`, con prioridad de procesado — detalle completo y tabla en `conocimiento-2026-07-20.md`. Resumen: 3
clústeres — (1) hueco ya señalado por el wiki (Lynch *One Up on Wall Street* ES, cierra la advertencia
explícita de `fuentes/libros/peter-lynch-worth.md`), (2) hueco real de modelo de negocio "compounder
adquisitivo/serial acquirer" (2 informes REQ Capital + libro de Speziale — el corpus solo lo menciona disperso,
sin concepto propio), (3) solapes altos con material ya profundizado (Pablo Fernández/IESE vs.
[[manuales-de-valoracion]] ya cubierto por Damodaran+McKinsey) — baja prioridad, sigue sin ingerir (DI-0771.pdf
no forma parte del lote de abajo, correcto según su propia prioridad baja).

**Resuelto por el lote de ingesta "Javier del Valle" (14 lecturas, ~4.500 págs., cerrado 2026-07-20/21,
Carlos Bárez)**: incluyó los 3 de prioridad alta/media-alta de mi inventario (Lynch, REQ+Speziale, Manual of
Ideas) más 5 documentos adicionales no cubiertos por mi inventario original (Siegel *Stocks for the Long Run*,
Oppenheimer *Any Happy Returns*, Chancellor *El precio del tiempo*, *Flash Boys*, O'Neil/Darvas). Auditoría de
calidad del lote en `conocimiento-2026-07-21.md`: 0 enlaces rotos, 0 duplicidades, encuadre crítico
correctamente propagado. Único pendiente real: `DI-0771.pdf` (Pablo Fernández/IESE), que ya estaba marcado
como baja prioridad por alto solape con [[manuales-de-valoracion]].

## Punto ciego dashboard↔frontmatter↔raw/ (2026-07-22)

`dashboard-cobertura.md` solo escanea `wiki/fuentes/**/*.md` (su Dataview es `FROM "wiki/fuentes"`) para el
campo `cobertura`. 11 páginas de `wiki/inversores/` del lote 07-13 (bajistas, [[sesgo-de-superviviente|sesgo de superviviente]]/azar,
emergentes, mujeres, Mauboussin: [[abby-joseph-cohen|Abby Joseph Cohen]], [[andy-rothman|Andy Rothman]], [[annie-duke|Annie Duke]], [[jeremy-grantham|Jeremy Grantham]], [[james-montier|James Montier]],
Mark Mobius, Nassim Taleb, Michael Pettis, Ruchir Sharma, Michael Mauboussin, Kathryn Kaminski) llevan
`cobertura: parcial` + `fuentes: []` pero **no tienen página `wiki/fuentes/` propia**, pese a tener material
real en `raw/` (documento a documento confirmado, ver `conocimiento-2026-07-22.md`) — invisibles al dashboard
y sin trazabilidad fuente↔página que pide el paso 2 del flujo de ingesta de `CLAUDE.md`. Javier DV y
Gustavo-Bolsa (mismo lote, misma marca `cobertura: parcial`) NO son parte de este hueco — convención propia
de voces de YouTube ya validada el 17-jul. Propuesto a Carlos Bárez (dueño de `inversores/`+`fuentes/`): cerrar
con un mini-lote de páginas `fuentes/` mínimas, o (más barato) añadir una segunda tabla Dataview en
`dashboard-cobertura.md` que también escanee `wiki/inversores/`. Sin resolver a fecha de este run.

## Auditoría de fidelidad OpenRouter — primer resultado real (2026-07-23)

Primer jueves de la rutina, ejecutado sin delegar (meta-run). Respondiendo a una crítica directa de la CIO
([[cio-2026-07-23]]), verifiqué contra el crudo las 2 páginas `destilado_por: openrouter` que llevaban aviso
de "no verificado": `nomura-informes-anuales.md` y `alden-broken-money.md`. Alden salió limpia (5/5 cifras
confirmadas, 2 matices de atribución menores). Nomura salió con 3 errores reales, el más grave un patrón de
fallo **nuevo**, no documentado hasta hoy: el modelo `:free` no se limitó a reetiquetar un eje o pegar una
cifra real a un contexto vecino equivocado (los dos fallos ya conocidos) — **inventó un número** (3.487,
"plantilla de Japón") que no aparece en ninguno de los 8 PDFs del lote, calculado como el residuo aritmético
exacto que hacía falta para que un desglose regional ya corrompido sumara al total (también mal etiquetado)
que el destilado daba. Confirmado con triple verificación: scout inicial + intento de refutación adversarial
+ búsqueda de texto completo en los 8 documentos. Llamo a esto "fabricación por cierre algebraico" — categoría
distinta de las 2 ya escritas en `CLAUDE.md` (reetiquetado de ejes de Kentley, cifra pegada a contexto vecino
de los libros de prosa). Propuesto a Carlos/Elisa ampliar la regla del parser con esta 3ª categoría.

**Estado del backlog de verificación**: 8 páginas `fuentes/` llevan `destilado_por: openrouter` a fecha de
hoy (nomura, alden, y 6 más de Damodaran/manuales-de-valoracion/dixit-nalebuff). Verificadas: 2 (hoy). Sin
verificar: 6, sin fecha comprometida — mi auditoría de miércoles muestrea 1-2/semana, un ritmo que la
producción del brazo OpenRouter puede superar (2 páginas nuevas con esa marca solo esta semana). Propuesto a
Carlos Bárez: campo de frontmatter `verificado: pendiente` → fecha, para que la auditoría de miércoles vacíe
en FIFO (la más antigua sin verificar) en vez de muestreo libre. Detalle completo en
`conocimiento-2026-07-23.md`.

## Taxonomía de fallos de OpenRouter dispersa, sin canon único (2026-07-24)

A fecha de hoy hay **4 categorías documentadas** de fallo del modelo `:free` en destilados de fuentes
públicas, pero viven en 3 sitios distintos y ninguno es el que el equipo lee por defecto:
1. **Reetiquetado de ejes de tablas matriciales** (caso Kentley) — en `CLAUDE.md`.
2. **Cifra real pegada a un contexto vecino equivocado** en libros de prosa (universo/métrica/condición
   cambiados, o fusión de dos autores) — en `CLAUDE.md`.
3. **Fabricación por cierre algebraico** (caso Nomura, 23-jul: número inventado como residuo aritmético para
   que un desglose corrompido cuadre) — solo en `wiki/index.md`, esta página y `conocimiento-2026-07-23.md`.
   Propuesta a Carlos/Elisa el 23-jul de ampliar `CLAUDE.md`; un día después, sin aplicar.
4. **Conflación temporal de dos hechos reales vecinos** (fecha/marcador de evento correcto pero atribuido al
   día/mes equivocado) — hallada por Marco Reyes el 24-jul, 3 verificaciones adversariales independientes en
   un mismo encargo, ya elevada a "regla operativa dura" en su propio Método — pero solo en
   `wiki/actualidad/.rutina-video-aprendizajes.md` (memoria privada) y `pulso-video-2026-07-24.md`.

**Riesgo**: cada brazo que descubre una categoría nueva la resuelve bien dentro de su propio dominio pero no
la sube al lugar canónico (`CLAUDE.md` + `reparto-openrouter-claude.md`) — sin consolidación, un tercer brazo
(o el mismo Marco/Carlos Bárez dentro de unos meses) puede redescubrir de cero un patrón ya visto. Propuesto a
Carlos/Elisa (ver `conocimiento-2026-07-24.md`): tabla única en `reparto-openrouter-claude.md`
(`# | nombre | caso que la reveló | página fuente | fecha`), `CLAUDE.md` mantiene el resumen con referencia.
Coste bajo (reorganizar texto ya escrito, cero investigación nueva), reversibilidad total.

**↑ Resuelto el 2026-08-03**: el canon existe (sección siguiente). La propuesta de trasplante a
`reparto-de-modelos.md` queda reemitida en `conocimiento-2026-08-03.md`.

## Canon de fallos de la capa gratuita (2026-08-03) — encargo CIO del 30-jul, ENTREGADO

Tabla única de los modos de fallo MEDIDOS del destilado en capa gratuita (OmniRoute/OpenRouter `:free`).
Cada categoría tiene un caso real que la reveló; ninguna es teórica. Sirve a: cualquier brazo que verifique
un destilado (sabe QUÉ contrastar), a Marco/Carlos Bárez (calibrar confianza en lo destilado) y a la CIO
(decidir alcance de la capa gratuita con evidencia, no con intuición).

| # | Nombre | Caso que la reveló | Página fuente | Fecha | Qué contrastar al verificar |
|---|---|---|---|---|---|
| 1 | Reetiquetado de ejes de tablas matriciales | Benchmarks Kentley: dato en posición estable de plantilla repetida | `referencia/kentley-metodo.md` | ~20-jul | Ejes de la tabla contra el crudo; en posición estable → parser determinista (PyMuPDF+regex), no LLM |
| 2 | Cifra real en contexto vecino equivocado | El inversor inteligente: cifra de Graham atribuida al comentarista Zweig (fusión de autores) | `fuentes/libros/el-inversor-inteligente.md` | ~22-jul | El SUSTANTIVO al que se aplica cada cifra (universo, métrica, condición); en ediciones comentadas, atribución explícita |
| 3 | Omisión de la tensión entre voces | Survey partido en dos: 4/4 tensiones en Kimi, 0/4 en OmniRoute — cifras bien, desacuerdo borrado | `sintesis/reparto-de-modelos.md` | 28-jul | Preguntar «¿qué había en el crudo que NO está en el destilado?» (desacuerdos, salvedades, notas al pie). Invisible si solo verificas lo escrito |
| 4 | Fabricación por cierre algebraico | Nomura: «3.487 Japón» inventado como residuo aritmético para que un desglose corrompido cuadre (15.131) | `fuentes/nomura/nomura-informes-anuales.md:62` | 23-jul | Que ninguna cifra sea deducible de las demás por aritmética simple; sumar los desgloses contra el total |
| 5 | Conflación temporal de hechos vecinos | Marco Reyes: fecha/marcador de evento real atribuido al día/mes equivocado (3 verificaciones adversariales) | `actualidad/.rutina-video-aprendizajes.md` + `pulso-video-2026-07-24.md` | 24-jul | La FECHA de cada hecho contra el crudo, no solo el hecho |
| 6 | Reetiquetado de cifra derivada como literal | Dixit-Nalebuff: 2/11 verificados, 7 PARCIAL — porcentajes del texto base (30%, 56%) reetiquetados como resultado del cálculo (41,2%, 79,6%) | `fuentes/libros/dixit-nalebuff-el-arte-de-la-estrategia.md` | 29-jul | Si la cifra aparece cerca de su hermana aritmética, comprobar cuál de las dos afirma el destilado |

Estadísticas transversales (medidas, en `CLAUDE.md` y `reparto-de-modelos.md`): solo el **42% de las citas
de la capa gratuita resultó literal** (54 de 127) → de la capa gratuita se toma la estructura, nunca una
cita; en tablas, el **90,2% de las cifras aparece lejos de su sujeto**. Mecanismos ya derivados del canon:
`verifica_destilado.py` (grep mecánico antes de ascender), hook que exige `.verif-*.txt`, razonamiento que
empieza en Kimi (categoría 3 es la razón), `encargo:` hash en frontmatter.

**Estado del trasplante**: propuesta original 24-jul (a `reparto-openrouter-claude.md`, hoy
`reparto-de-modelos.md`); reemitida 3-ago en `conocimiento-2026-08-03.md` con la tabla ya redactada —
trasplantar es copiar, cero investigación. La tabla vive aquí (mi dominio) hasta que Elisa/la dueña la
promueva; `CLAUDE.md` mantendría su resumen de 3 líneas con referencia a la tabla.

## Rutina `cerebro-soporte-conocimiento` — solape con escritor único, sin resolver (2026-07-25)

Apareció el 24-jul una rutina programada nueva (diaria 10:30, `ejecutor-haiku`,
`~/.claude/scheduled-tasks/cerebro-soporte-conocimiento/SKILL.md`) cuyo contrato le manda escribir
`wiki/conocimiento/soporte-calidad-YYYY-MM-DD.md` — **dentro del dominio de escritor único de la CKO** (fila de
arriba: `conocimiento/` → Sofía). Su función declarada (frontmatter faltante, wikilinks rotos, páginas con pocos
enlaces) es un subconjunto de dos rutinas ya existentes: el PASO 3 de knowledge-ops de la CKO y la rutina de
mantenimiento semanal (lint Obsidian CLI). Su primer output (`soporte-calidad-2026-07-24.md`) cita 0 páginas y
0 incidencias concretas pese a que su propio SKILL lo exige. Propuesto a Carlos/Elisa (ver
`conocimiento-2026-07-25.md`): redirigirla a depositar `[CKO:]` en `encargos.md` (cola vacía desde el 17-jul —
sería su consumidor natural) o apagarla. **Sin resolver a fecha de hoy; la tabla de escritores únicos de arriba
sigue vigente hasta que Carlos/Elisa decidan.**

## Fiabilidad del watchdog `cerebro-semaforo` — falso positivo detectado (2026-07-26)

El watchdog de mantenimiento (Haiku, `wiki/sintesis/estado-del-sistema.md`) publicó hoy 3 alertas 🔴. Verificado
con 3 fuentes independientes (commit `7d59ab8`, entrada `wiki/log.md:972`, mtime del archivo): la alerta
*"`cerebro-sintetizador`: sin runs"* es **falsa** — corrió el sábado 25-jul, su cadencia correcta. El watchdog
además calculó mal el día de la semana de al menos 2 fechas que cita ("19-jul" y "20-jul" como si fueran
sábado/domingo, cuando son domingo/lunes respectivamente) — un bug de aritmética de fechas, no de detección de
runs en sí. La alerta de `cerebro-riesgo` (10 días real, sin componente de día-de-semana en el cálculo) se
verificó como correcta por contraste. Propuesto a Carlos/Elisa (ver `conocimiento-2026-07-26.md`): revisar la
lógica de "próxima fecha esperada" del watchdog antes de confiar en sus alertas de cadencia semanal — puede
estar contaminando más filas de las que se han verificado hoy. **Sin resolver a fecha de hoy.**

## Conexión no hecha — dos calendarios de catalizadores en paralelo (2026-07-26)

`wiki/perfil/calendario-catalizadores.md` (poblado, 2026-07-20) y `wiki/predicciones/calendario-de-catalizadores.md`
(vacío desde su creación el mismo día, escritor único `cerebro-veredicto-semanal` que aún no ha corrido de
verdad) cubren el mismo territorio (catalizadores del Top-10 de `cartera-actual`) sin un solo wikilink cruzado
en 6 días. No son sustitutas exactas (una es descriptiva, la otra exige postura falsable), pero la segunda
podría sembrarse desde la primera en vez de partir de cero. Propuesto a quien opere el primer run real de
`cerebro-veredicto-semanal`.

## Backlog de verificación OpenRouter — recuento mecanizado, cierre huérfano y "CERRADO" ≠ "correcto" (2026-07-30)

**El backlog se movió DURANTE este mismo run** (lección de método antes que dato: comprobar de nuevo antes de
publicar, no solo antes de investigar). Mi primer recuento (`grep -rlE '^destilado_por:'` cruzado contra
`.verif-*`) dio 44 páginas sin verificar, contra las 41 del informe de la CIO de hoy — pero mi script tenía un
bug propio (asumía `.verif-<pagina>.md` cuando el nombre real es `.verif-<pagina-sin-.md>.txt`) y, en paralelo,
una rutina de mantenimiento cerró mecánicamente 17 verificaciones el mismo día (commit `ef4175a`, coste cero,
`verifica_destilado.py` contra crudo re-extraído con PyMuPDF/ebooklib). Recuento corregido y re-ejecutado al
cierre de este run: **26 páginas realmente sin `.verif`** — 19 `referencia/benchmarks-kentley/` (crudo
tabular NAICS, necesita el parser determinista, no el verificador de grep — ya anotado como pendiente en
`wiki/log.md` del mismo día), 6 `actualidad/pulso-video-*` (bloqueadas hasta que aterrice el hook de retención
de crudo de vídeo, en curso — ver sección de abajo), y **1 huérfana de la propia tanda**:
`wiki/fuentes/formacion-ia/tier-b-teoria.md` (destilado 29-jul, sin `.verif` pese a que sus 3 hermanas de la
misma carpeta sí lo tienen — comprobar si se quedó fuera por descuido o por criterio, no está documentado).

**"CERRADO" (mecánico) no es "correcto" (semántico) — Nomura es el caso que lo demuestra en vivo.** El commit
`ef4175a` generó `.verif-nomura-informes-anuales.txt` hoy (26/37 verificado, 10 PARCIAL, 1 FALLA) y su propia
última línea dice explícitamente `REVISAR ANTES DE ASCENDER A DURABLE` — el verificador mecánico NO detecta
la cifra **fabricada** (3.487, "plantilla Japón") que verifiqué el 23-jul vía subagente Anthropic, porque
grepear presencia/ausencia de una cifra no distingue una cifra real mal etiquetada de una inventada por cierre
algebraico (la propia razón por la que existe la Red de verificación además del chequeo mecánico — `CLAUDE.md`).
La corrección que propuse a Carlos Bárez el 23-jul (retirar 3.487, aplicar las 4 cifras correctas) **sigue sin
aplicar 7 días después** — la página todavía presenta el desglose fabricado como "contradicción sin resolver".
Riesgo de lectura errónea: alguien que vea "backlog CERRADO" en `wiki/log.md` de hoy puede asumir que Nomura ya
es fiable — no lo es, solo tiene el chequeo barato hecho. Esta propuesta nunca entró en mi propio `## Abierto`
de memoria (la di por "entregada" al proponerla, no por "abierta hasta confirmar que se aplicó") — mismo
patrón de "conocimiento disperso" ya documentado en VIGENTE, aplicado ahora a mis propias propuestas de
corrección. Corregido hoy: las propuestas a un dueño externo se tratan como abiertas hasta confirmación.

### Nota de evolución 2026-08-17: backlog de verificación OpenRouter en 0/16
Recuento mecanizado (`grep -rl 'destilado_por: openrouter' wiki/fuentes/` cruzado con `.verif-*` en el mismo
directorio): **16 páginas marcadas, 0 sin `.verif`** — las 26-28 pendientes de finales de julio se cerraron
en algún punto del hueco de runs 05→15-ago sin que esta memoria lo registrara (ningún proceso propio lo
anotó; probable barrido de `cerebro-mantenimiento-semanal`, mismo patrón que cerró 17 el 30-jul). **No leer
esto como "ya es fiable"**: la lección del 30-jul sigue vigente — "CERRADO" mecánico solo confirma presencia
del fichero `.verif`, no que su contenido semántico esté limpio (caso Nomura). La auditoría de fidelidad de
los miércoles sigue siendo el único chequeo que abre el contenido; con el backlog en 0, su próxima muestra
(miércoles 19-ago) parte de FIFO limpio por primera vez desde que se mide.

### Método reusable 2026-08-17: `duplicidades` + comprobación de wikilinks = detector de conexiones no hechas
El tipo mecánico `duplicidades` (capa mecánica, `omniroute-destila --tipo duplicidades`) devuelve pares de
páginas con solape temático, pero **no distingue "duplicado real" de "página vecina bien diferenciada"** —
en un wiki de conceptos de inversión el solape temático es la norma, no la excepción (lección ya vieja:
caso "ciclos de mercado", 21-jul). Cruzando su salida contra un `grep '\[\[<destino>'` en ambas direcciones,
los pares que aparecen con **solape alto y CERO wikilink en cualquier sentido** dejan de ser candidatos a
fusión y pasan a ser candidatos a **conexión ausente** — la categoría que el CONTRATO pide detectar
("conexiones no hechas... el valor diferencial está en conectar lo aparentemente desconectado"). Sobre
`wiki/conceptos/` (91 páginas, 4 lotes <280KB por el techo de `omniroute-destila`), 131 pares con solape,
34 sin enlazar en ningún sentido, 8 de ellos con solape "alto". Detalle y hallazgo concreto en
[[conocimiento-2026-08-17]]. Reusar esta receta en las próximas rotaciones de dominio en vez de leer la
salida de `duplicidades` como lista de fusiones.

## Índice de runs (una línea por fecha — detalle completo en la sección fechada correspondiente arriba, o
en `conocimiento-YYYY-MM-DD.md` si el hallazgo no tiene sección propia)
- **2026-07-17** (bootstrap + run 2): primera versión del mapa; misión Daniel Lacalle; concentración
  IA/electrificación detectada (no en `riesgo/`).
- **2026-07-20**: rotación conceptos — inventario backlog `raw/` (sección arriba, RESUELTO 21-jul).
- **2026-07-21**: rotación empresas+industrias — auditoría lote Del Valle (limpia); 4 wikilinks empresa↔industria
  ausentes; concentración IA/electrificación escalada a Elisa.
- **2026-07-22**: rotación fuentes+inversores — punto ciego dashboard↔frontmatter↔raw/ (sección arriba).
- **2026-07-23** (jueves, meta-run): verificación Nomura/Alden (sección arriba) — Nomura con fabricación por
  cierre algebraico, corrección propuesta a Carlos Bárez **sigue sin aplicar a 30-jul**, ver informe de hoy.
- **2026-07-24**: rotación actualidad+estrategia — taxonomía de fallos OpenRouter dispersa (sección arriba).
- **2026-07-25**: rotación análisis+riesgo+cio — solape `cerebro-soporte-conocimiento` (sección arriba).
- **2026-07-26**: rotación perfil+predicciones+sintesis — falso positivo del watchdog `cerebro-semaforo`
  (sección arriba); calendarios de catalizadores duplicados (sección arriba).
- **2026-07-29**: rotación fuentes+inversores + auditoría miércoles — backlog OpenRouter doblado (16→ver
  corrección 30-jul), 1er error MATERIAL confirmado en muestra FIFO (Dixit-Nalebuff).
- **2026-07-30** (jueves, meta-run): ver sección "Backlog de verificación — recuento corregido" y el informe
  `conocimiento-2026-07-30.md`.
- **2026-08-03**: rotación conceptos (0 enlaces rotos, 0 envejecidas, 0 duplicidades) + misión: CANON de
  fallos de la capa gratuita entregado (sección arriba), encargo CIO del 30-jul. Hueco de runs 31-jul→2-ago:
  3 días sin CKO (el encargo se planificó para el 31-jul y nadie lo recogió — la cola estaba vacía porque
  el encargo vivía solo en mi memoria, no en `encargos.md`; corregido: los encargos verbales de la CIO se
  anotan en la cola el mismo día).
- **2026-08-04**: rotación empresas+industrias (0 rotos, 0 envejecidas) + misión: el Q2 tech no está en las
  fichas — Meta materializó su riesgo vigilado, MSFT trajo la 1ª evidencia de payoff, Nvidia escaló su
  financiación circular ×100 (verificado WSJ/Bloomberg; el pulso de texto fundió dos piezas). Laguna de
  arquitectura: el flujo actualidad→concepto funciona (nota de evolución en página de capex), el tramo
  actualidad→empresa no existe (pulsos enlazan industrias, nunca fichas). Backlog .verif: 28, y la retención
  de crudos ya hizo 4 pulsos irrecuperables. Detalle: `conocimiento-2026-08-04.md`.
- **2026-08-16** (domingo, encargo directo de Carlos, sin rotación de dominio): enjambre de 12 scouts,
  barrido global de 9 dominios; 5 cifras críticas verificadas en pasada separada (todas CONFIRMADAS); Q2
  2026 propagado a 4 fichas de cartera. Detalle: [[conocimiento-2026-08-16]].
- **2026-08-17** (lunes, rotación conceptos): método `duplicidades`+wikilinks (sección arriba); backlog
  OpenRouter en 0/16 (sección arriba); gatillos vencidos del 05-ago (conexiones Marco, UnitedHealth)
  escalados a la CIO tras el hueco de runs. Detalle: [[conocimiento-2026-08-17]].
- **2026-08-18** (rotación empresas+industrias, tras el enjambre): 44 pares con solape sin wikilink (12
  de competidores directos), 10 menciones planas listas para enlace mecánico, 2 fichas sin industria; 8
  industrias esqueleto sin contenido, vigilancia fijada para el 25-ago. Detalle: [[conocimiento-2026-08-18]].
- **2026-08-21** (rotación actualidad+estrategia, hueco de miércoles): 7 hubs temáticos del enjambre 08-13
  sin wikilink desde `estrategia/` en 5+ semanas; pool de 74 sondas-empresa 08-14 desconectado del
  pipeline de CAZA (50/74 sin curar), propuesto a Carlos Bárez declararlo cola FIFO o descartarlo.
  Detalle: [[conocimiento-2026-08-21]].
- **2026-08-25** (rotación empresas+industrias): día del lote de 29 fichas nuevas de Carlos Bárez.
  Misión: 0/5 fichas con coincidencia exacta de nombre en el pool de sondas 08-14 la usaron (2º flag
  sin resolver → ESCALADO a la CIO). Nvidia sin nota de evolución tras 3 comprobaciones → ESCALADO
  también. Industrias esqueleto: 3 sin backlinks reales (propuesta de poda) frente a `industria-lujo`,
  que creció orgánicamente a 5. Laguna nueva: dos pipelines (Carlos Bárez y `ox-alpha`, este último
  operativo desde el 24-ago) escribieron el mismo día sobre tecnología médica sin cruzarse
  (`wiki/conceptos/tecnologia-medica.md` vs 4 fichas medtech que la citan como "pendiente de crear").
  Kimi tocó el tope de cuota (20/20) durante el run: un lote de `destila --tipo duplicidades` se perdió
  con las 4 capas caídas, `[DEGRADADO]` trazado. Detalle: [[conocimiento-2026-08-25]].

## Ver también
[[mapa-del-cerebro]] · [[dashboard-cobertura]] · [[huecos-y-proximos-pasos]] · [[encargos]] ·
[[equipo-agentes|equipo de agentes]]
