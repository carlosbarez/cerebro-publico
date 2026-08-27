---
title: "Semiconductores de memoria (DRAM / NAND / HBM)"
tipo: industria
tags: [industria, semiconductores, memoria, dram, nand, ciclica, micron]
fecha: 2026-07-17
fuentes: []
---

# Semiconductores de memoria (DRAM / NAND / HBM)

Empresa documentada: [[samsung-electronics|Samsung Electronics]], además de Micron y SK Hynix como comparables del oligopolio.

La industria de la posición más explosiva y más peligrosa de la cartera de Carlos: **Micron
+690%, ~9,2%**, señalada para reducción. Entender por qué esa cifra es a la vez real y engañosa **es** entender
esta industria. Es el arquetipo de negocio **cíclico-commodity** del cerebro.

## Qué es (y qué NO)

Memoria = chips que **almacenan** datos, no que los procesan. Dos familias:

- **DRAM** (volátil, rápida, memoria de trabajo): oligopolio casi puro — **Samsung, SK Hynix, Micron** copan
  ~**95%** del mercado. Tres actores racionales → mejor disciplina de oferta que en el pasado.
- **NAND** (no volátil, almacenamiento): más fragmentada (Samsung, SK Hynix/Solidigm, Micron, Kioxia/WD,
  YMTC) → peor disciplina de precios, más brutal.

Ojo con confundir memoria con **lógica** (procesadores: [[nvidia|Nvidia]], AMD, Intel) o **fundición** ([[tsmc|TSMC]]) o **diseño
móvil** ([[qualcomm|Qualcomm]], que Carlos tiene): son industrias distintas, con foso muy superior. La memoria es la parte
**más commodity** del complejo semiconductor.

## Estructura y economía (por qué es tan cíclica)

Es un **commodity con estructura de coste fija altísima**: una fábrica (*fab*) cuesta ~$15-20B y hay que
llenarla sí o sí. El producto es casi indistinguible entre fabricantes → **el precio lo fija la oferta/demanda
de bits**, no la marca. Mecánica del ciclo:

1. Escasez → precios suben → márgenes explotan (>50% margen bruto en pico).
2. Todos invierten capex a la vez para captar el margen.
3. La nueva capacidad entra junta (18-24 meses después) → **glut** (exceso) → precios se hunden →
   **márgenes negativos** en el valle.
4. Se recorta capex, se cierra capacidad → vuelve la escasez. Repetir.

Consecuencia clave: **el beneficio oscila de enorme a negativo en el mismo ciclo**. Una empresa de memoria en
pico de margen parece baratísima por PER; en el valle, pierde dinero y el PER es infinito o negativo. Es la
trampa de valoración de manual → [[valoracion-ciclicas-y-beneficios-negativos]].

## El cambio estructural: IA y HBM

La **HBM** (*High Bandwidth Memory*) —DRAM apilada que alimenta a las GPU de IA— es el driver que rompió el
ciclo bajista reciente: es más difícil de fabricar, consume obleas de forma desproporcionada (aprieta la oferta
de DRAM normal) y tiene **algo de diferenciación técnica temporal** (SK Hynix lideró, Samsung/Micron
persiguen). Es lo que sostiene la tesis alcista de Micron y lo que confirma el pulso vía [[pulso-2026-07-15|ASML subiendo guía]]. **Pero HBM no deroga la ciclicidad**: es un pico de demanda excepcional que también atrae
capacidad — la pregunta de segundo orden es si la oferta de HBM se normaliza y arrastra los precios.

## KPIs para valorar una empresa de memoria

- **Precios spot y contrato de DRAM/NAND** (el termómetro real del ciclo; se mueven antes que los beneficios).
- **Bit growth** (crecimiento de bits enviados) vs. **cost-per-bit** (caída de coste por bit): el margen vive
  en la brecha entre ambos.
- **Días de inventario (DoI)** en la cadena: inventario alto = glut inminente.
- **Capex / ventas** del sector agregado: capex disciplinado = ciclo sano; capex desbocado = glut futuro.
- **Margen bruto** y su posición en el ciclo (¿pico o valle?).
- **Cuota de HBM** y capacidad comprometida (el diferencial de hoy).
- Balance: caja neta vs. deuda para sobrevivir el valle (los ciclos matan a los apalancados).

## Cómo valorarla (y la trampa a evitar)

**NUNCA sobre beneficios de pico.** Métodos correctos:

- **Beneficios normalizados / mid-cycle**: promedia el margen a lo largo de un ciclo completo, no el del
  trimestre bueno ([[valoracion-ciclicas-y-beneficios-negativos]], Damodaran).
- **P/Valor contable (P/B)**: más estable que el PER en cíclicas; históricamente, comprar memoria cerca de
  ~1x libros y vender cerca de ~2-3x ha funcionado mejor que cualquier PER.
- Cruzar con la **posición en la curva de coste**: el productor de menor coste sobrevive el valle.

La trampa: *"cotiza a PER 6, está regalada"* justo en el pico de margen → es cuando está **más cara** en
términos normalizados. Exactamente el argumento del plan de Carlos y de
la [[2026-07-15-micron-reversion-ciclica|predicción registrada]].

## Foso económico: débil por diseño

En DRAM/NAND commodity **no hay pricing power sostenible** → foso estructuralmente débil ([[foso-economico]]).
Lo más parecido a un foso es: **escala** (compartir I+D y capex entre más bits), **liderazgo de nodo** (fabricar
con menos coste), y **capital para aguantar el valle**. HBM añade una ventaja **temporal**, no un foso durable.
Contrasta con [[agencias-de-rating-y-datos]] o TSMC, donde el foso sí es profundo — por eso la memoria compone
mal a largo plazo y se opera más por ciclo que por *buy-and-hold* de calidad ([[terry-smith]] no tocaría esto).

## Banderas rojas específicas del sector

- **China como amenaza de oferta**: **CXMT** (DRAM) y **YMTC** (NAND), subvencionadas por Pekín, pueden inundar
  el segmento de gama baja y romper la disciplina del oligopolio — riesgo de 2º orden que cruza con
  [[michael-pettis]] (sobreinversión dirigida por el Estado) y con la guerra de chips [[pulso-2026-07-15|(controles de exportación)]].
- **Capex procíclico**: cuando el sector anuncia récords de inversión, suele marcar el techo.
- **Márgenes de pico extrapolados**: consenso proyectando el margen bueno a perpetuidad = señal de euforia.

## Las dos caras hoy

- **Alcista**: superciclo de IA/HBM, oferta apretada, disciplina de los 3 grandes de DRAM, capex de IA firme
  (ASML sube guía 2×). El pico puede durar más de lo que parece.
- **Bajista**: márgenes en pico histórico que **revierten a la media** ([[reversion-a-la-media]]); China
  añadiendo oferta; volatilidad implícita de semis 29%→73% en una década ([[pulso-2026-07-15]]); liquidación
  apalancada en semis coreanos (Samsung/SK Hynix). El [[ciclos-de-mercado|péndulo de Marks]] rara vez se para
  en "todo va bien".

## Voces del cerebro y posiciones de Carlos

> — dato privado retirado —
  ASML (equipo de litografía, proveedor upstream — se beneficia del capex de TODOS).
- **Conceptos**: [[valoracion-ciclicas-y-beneficios-negativos]] · [[foso-economico]] · [[reversion-a-la-media]] ·
  [[ciclos-de-mercado]] · [[aversion-al-apalancamiento]] · [[gestion-de-posiciones]].
- **Voces**: [[howard-marks]] (ciclos, dónde está el péndulo) · [[james-montier]]/[[jeremy-grantham]]
  (concentración de IA) · [[michael-pettis]] (sobrecapacidad china) · [[warren-buffett]] (evita lo que no tiene
  foso durable).
- **Predicción viva**: [[2026-07-15-micron-reversion-ciclica]].

### Nota de evolución 2026-07-17

La purga documentada el 15-16 jul se confirma con datos duros nuevos, vía [[pulso-video-2026-07-17]]: el
**Banco Central de Corea subió tipos 0,25pp hasta 2,75%** (primera subida en 3+ años) para contener presiones
ligadas al boom de semis; el **Kospi cayó ~27-30% desde máximos** (Samsung/SK Hynix, circuit breakers
activados); y, pese a resultados extraordinarios de **TSMC** (beneficio neto +77% interanual, margen bruto
67,7%, guía de ingresos 2026 elevada a >40%) y **ASML**, ambas acciones cayeron el día de publicación —
confirmación textual de la tesis de reversión: "cuando ni las buenas noticias suben al valor es señal de
agotamiento" (Goldman, vía Cárpatos). Dato de posicionamiento: Goldman estima que los hedge funds han recortado
exposición a los sectores de "burbuja IA" un **60-70% en 5-6 semanas** — desapalancamiento agresivo, no cambio
de tesis fundamental (ni hiperescaladores reduciendo capex ni semis rebajando expectativas de beneficio).
**Tensión técnica nueva a vigilar**: [[cava-metodo|Cava]] (con incentivo comercial declarado, patrocinado por
Freedom24) proyecta una segunda pierna a la baja hacia SOX/SMH 469-477$ y Micron ~712$ antes de recuperación en
2027, mientras Cárpatos/Goldman leen la purga como "más cerca del final que del principio" — divergencia
técnica sin resolver, falsable en las próximas 1-2 semanas.

### Nota de evolución 2026-07-18

Vía [[pulso-video-2026-07-18]]: la purga se modera pero no termina — la cesta de momentum pasa de +60% en el
año a solo +12,5% (16-jul), y **Apple supera a Nvidia como empresa más valiosa del mundo** por primera vez
desde abril de 2025, síntoma de rotación dentro de la tecnología, no huida. Nuevo riesgo de 2º orden para la
tesis de demanda: el modelo chino **Kimi K3 Max** (Moonshot AI) iguala o supera a los modelos frontera
occidentales en varios benchmarks siendo mucho más barato — "otro momento DeepSeek" que reabre la pregunta de
si el capex de IA se puede rentabilizar (si los modelos se comoditizan, cae la demanda de cómputo/memoria que
sostiene la tesis HBM de Micron). **[[cava-metodo|Cava]]** (18-jul) matiza su propia divergencia técnica de
ayer: coincide con Cárpatos/Goldman en que es rotación/limpieza estructural, no fin de ciclo — la discrepancia
real es solo de *timing* (marca SK Hynix ~1.600.000 KRW como zona de suelo probable, Fibonacci 0,618),
no de dirección. Corroboración cruzada parcial de las liquidaciones apalancadas coreanas: Cárpatos cita
independientemente un 4% de adultos surcoreanos con margin call esta semana, en el mismo orden de magnitud que
el 3,4% de Misterpuertas (ayer, PLAUSIBLE-NO VERIFICADA) — dos fuentes convergiendo sube la confianza
direccional sin llegar a dato duro (ninguna cita FSC/FSS/KRX).

### Nota de evolución 2026-07-19/20: el marco "Kimi" madura (no destruye la IA, comprime el margen) + daño técnico

Vía [[pulso-video-2026-07-20]], [[carpatos-metodo|Cárpatos]] desarrolla en un vídeo largo (18/19-jul) el marco
más completo hasta ahora sobre el riesgo del modelo chino Kimi K3 Max (70% más barato, benchmarks a la altura
de Claude Opus/GPT-5, confirmación oficial pendiente el 27-jul): la amenaza **no es que la IA valga menos**
(paradoja de Jevons — más barato = más uso total, bueno para la economía real), es que **los márgenes de quien
construye los modelos se compriman** mientras el capex sigue comprometido. Ganadores potenciales pese a todo:
proveedores de nube/infraestructura y **Nvidia/fabricantes de chips** (si la demanda total de cómputo sigue
creciendo por ser más barata) — el marco distingue explícitamente entre "centros de datos vacíos" (no es el
riesgo) y "centros de datos llenos pero no rentables" (el riesgo real). Señal a vigilar única, según el propio
Cárpatos: la **primera vez que un hiperescalador anuncie una REDUCCIÓN de su plan de capex** — ahí, dice,
"arde Troya".

**Daño técnico confirmado**: el SMH (ETF de semis) formó un patrón hombro-cabeza-hombro con la línea clavicular
perdida; el Nasdaq 100 dibuja una figura similar (posible diamante de vuelta, sin confirmar). Dato de
**posicionamiento vs. precio** (Hartnett/BofA, vía Cárpatos): pese a la caída, siguen entrando flujos netos a
los ETFs de semis (+2.300M$ solo esta semana) — "no hay capitulación todavía, y sin capitulación no hay suelo
fiable" es la lectura de Hartnett. Su indicador Bull & Bear está en 9,6 (señal de venta extrema, histórico:
17 señales desde 2002, media de caída posterior 2-3% en 2-3 meses, máximas de hasta 15-20%). Nivel de caja de
grandes fondos en **3,6%**, el más bajo desde febrero de 2026.

**Burbuja de Corea, con cifras duras**: el **4% de la población adulta surcoreana recibió una llamada de
margen esta semana** y **360.000 cuentas fueron liquidadas por completo** — bancos comerciales coreanos avisan
al banco central de que han agotado el presupuesto de préstamos personales por el aluvión de hipotecas
(primeras y segundas) pedidas para invertir en bolsa. Corroboración cruzada con Cárpatos (cifra separada, 4%
de adultos con margin call) sube la confianza direccional del patrón sin gastar verificación formal (mismo
patrón de corroboración barata ya visto en runs anteriores). El sectorial de semis lleva **-3% en el mes de
julio comparado con el S&P 500**, la peor diferencia relativa desde 2001.

## Nota de datos 2026-07-17 — Micron 10-K FY2025 + decks trimestrales

Ingerido el 10-K FY2025 de Micron (la posición de Carlos) y sus decks FQ4-25/FQ2-26:
- **Ingresos DRAM: $28,58B (2025)** vs. $17,60B (2024) vs. $10,98B (2023) — **+62% interanual**, impulsado por
  **HBM** para data center/IA. La DRAM es el grueso; NAND y NOR completan (total de la compañía ~$37B — **no
  confundir con el TAM de la industria**, el error documentado en [[gestion-de-posiciones]]).
- Unidad de negocio reorganizada en torno al **data center (CDBU)** — la IA es ya el driver dominante, confirma
  el "cambio estructural HBM" de esta página. GDDR para GPU/gaming/HPC también crece.
- Lectura de ciclo: los ingresos DRAM en récord reflejan el **pico de margen HBM** — exactamente cuando la
  trampa de valoración de esta página muerde (PER bajo en pico = caro normalizado). Refuerza la
  [[2026-07-15-micron-reversion-ciclica|predicción viva]] y el plan de reducción.
- **Cadena completa** ahora en el cerebro: Micron (memoria) compra litografía a [[asml]] y fabrica junto a la
  lógica de [[nvidia]] en fabs tipo [[tsmc]] — misma ola de capex de IA.

## Nota de lectura profunda 2026-07-18 — Micron 10-K FY2025 completo

Lectura íntegra del 10-K (112 pp.). Convierte la teoría del ciclo de esta página en **números exactos de la
posición de Carlos**, y aporta el mecanismo preciso del próximo giro — en palabras de la propia Micron.

### La amplitud del ciclo, medida (3 años)

| | FY2023 | FY2024 | FY2025 |
|---|---:|---:|---:|
| Ingresos | $15.540M | $25.111M (+62%) | **$37.378M (+49%)** |
| Margen bruto | **−9%** | 22% | **40%** |
| Beneficio operativo | **−$5.745M (−37%)** | $1.304M (5%) | **$9.770M (26%)** |
| Beneficio neto | **−$5.833M** | $778M | **$8.539M** |

De −37% a +26% de margen operativo **en dos años**. Esta tabla ES el argumento de esta página: valorar por PER
sobre el beneficio de 2025 es valorar sobre el pico de una oscilación que hace nada fue profundamente negativa
([[valoracion-ciclicas-y-beneficios-negativos]]). FY25: DRAM +62% (precio medio **+low-40%**, bits +mid-teens) y
NAND +18% (casi todo bits) — **el motor fue PRECIO, no volumen**: la definición de beneficio de pico cíclico.

### Dónde está el beneficio: una sola unidad lo explica

Beneficio operativo por unidad de negocio FY2025 (vs FY2023):

- **CMBU** (cloud/HBM): ingresos $13.524M (**+257%**), beneficio operativo **$6.129M = 45% de margen** — venía de
  **−41%** en FY23. Es **el 56% del beneficio operativo total** de Micron.
- **CDBU** (data center): $7.229M / $2.180M (30%). **MCBU** (móvil/cliente): $11.859M / $1.981M (17%) pero
  ingresos solo **+2%**. **AEBU** (auto/embebido): $4.753M / $557M (12%), +3% con presión de precios en *legacy*.

**Mecanismo clave**: MCBU creció solo +2% porque su suministro fue **restringido deliberadamente** para servir a
los segmentos de mayor valor — Micron **canibaliza obleas de móvil/cliente para alimentar el data center**. La IA
no solo añade demanda: **retira oferta** del resto del mercado, lo que sostiene los precios en todas partes.

### El mecanismo del próximo giro, dicho por Micron

Del propio 10-K (factores de riesgo), el párrafo más importante para la
[[2026-07-15-micron-reversion-ciclica|predicción viva]]:

> La HBM requiere **más obleas y más superficie de sala limpia** para producir el mismo número de bits que la DRAM
> convencional en el mismo nodo. **Si la demanda de HBM se debilita y los fabricantes desplazan capacidad de HBM a
> DRAM convencional, eso podría producir un aumento significativo de la oferta de DRAM convencional** → presión a
> la baja sobre los precios.

Es decir: la HBM funciona como **esponja de capacidad**. Mientras absorbe obleas de forma desproporcionada, la DRAM
convencional está artificialmente escasa y cara. El día que la demanda de HBM afloje, esa capacidad **se libera de
golpe** sobre el mercado convencional — el glut no vendría de fábricas nuevas, sino de **reconversión de capacidad
existente**, mucho más rápida. Refuerza el aviso de reducción del plan:
el riesgo no es que la IA decepcione, sino que **deje de crecer al ritmo que mantiene la esponja llena**.

### Trampa contable del ciclo: las rebajas de inventario (NRV)

En FY2023 Micron dotó **$1.831M** para rebajar inventario a valor neto realizable. En FY2024, vender ese inventario
ya rebajado **infló el margen bruto en $987M** (coste casi cero). Es decir: **el dolor del valle maquilla el margen
de la recuperación**. Al comparar márgenes entre años de un cíclico hay que aislar este efecto o se confunde
recuperación real con contabilidad diferida ([[contabilidad-y-calidad-de-beneficios]]).

### Nota de evolución 2026-07-26 (`pulso-video-2026-07-25`, tramo tardío)

**Dato de demanda nuevo, con matiz de verificación**: Jensen Huang (NVIDIA, Bloomberg Talks, cumbre de Corea)
declara "más de $500.000M de negocio" con SK Group (compra de memoria HBM/LPDDR + venta de supercomputadores
IA) y $1.000M invertidos en Naver. Cita confirmada palabra por palabra contra la transcripción y con
corroboración de prensa independiente (Korea Herald, comunicado conjunto SK-NVIDIA), pero **sin desglose
oficial ni confirmación de si son contratos firmados o intenciones a varios años** — CEO hablando de su propia
relación comercial, tratar como dato de ciclo, no como contrato auditado. Refuerza el diagnóstico de "burbuja
localizada en semis/memoria" ya documentado (Cárpatos, 24-25 jul): Sandisk **×85 en 15 meses** (abr-2025 →
jul-2026, Iturralde — cifra de un comunicador cuya misma pieza tuvo errores de transcripción en otras cifras
del día, sin contrastar contra cotización oficial; tratar como orden de magnitud, no como dato exacto), SK
Hynix/Seagate con revalorizaciones similares, corrección técnica reciente de **-30% descrita como "normal"**
tras ese tipo de subida — coherente con la mecánica de "esponja HBM" ya documentada
arriba: cuando la demanda de HBM afloje, la capacidad reconvertida se libera de golpe sobre la DRAM
convencional. Cruza con Micron, 9,2% de la cartera, +690,1% y con [[factor-momentum]].

## Nota de evolución 2026-07-26: "blue-collar semis" -21% — divergencia entre chips de IA y chips de economía real

Vía [[pulso-video-2026-07-26]] (Cárpatos relayando a Hartnett/BofA). Dato nuevo, distinto al ciclo de memoria/
HBM ya documentado: los **semis "de cuello azul"** (TXN, [[analog-devices|ADI]], [[nxp-semiconductors|NXP]], MCHP, ON, [[monolithic-power-systems|MPWR]] — analógicos/microcontrola-
dores para automoción/fábrica/industria pesada, **NO expuestos a IA**) caen **-21% desde el máximo de junio** —
lectura de Hartnett como señal de enfriamiento de la economía real, en contraste con el consenso de "boom"
sostenido por el capex de IA. En paralelo, el **ETF Mag 7 (MAGS) cruzó su media móvil de 200 días a la baja**
el jueves (cierre semanal) — mismo tipo de señal técnica de alerta; soporte real según Hartnett en la media de
100 semanas (la de 200 días ya ha dado falsas señales varias veces este ciclo). **Fuente única (un comunicador
relayando un estratega), sin verificación independiente** — se añade como matiz de vigilancia, no como
confirmación: si "blue-collar semis" y memoria/IA divergen de forma sostenida, sería la primera evidencia de
que el ciclo de IA está desacoplado del ciclo industrial general, no solo de una rotación sectorial dentro de
tech. 📌 falsable: recuperación >10% desde mínimos en blue-collar semis en las próximas 4-8 semanas
invalidaría la lectura de "enfriamiento estructural".

## Nota de evolución 2026-07-27: China rompe autonomía en dos eslabones de la cadena el mismo día — memoria y litografía DUV

Vía [[pulso-video-2026-07-27]] (Cárpatos + NegociosTV, **ambos hechos verificados por subagente adversarial**
contra prensa internacional antes de escribirse). **Litografía**: una empresa china respaldada por el Estado
(Shanghái) inició producción en masa de máquinas de litografía **DUV** (no EUV — la gama de mayor precisión
sigue siendo monopolio de [[asml|ASML]]), destinadas a SMIC, Hua Hong y CXMT — reporte original de *The
Information*, corroborado por Bloomberg/Morningstar/Yahoo Finance/devdiscourse el mismo 27-jul-2026. ASML cayó
**-5,49% a -6,6% intradía** (rango confirmado, cierre algo más moderado, -3,76% según una fuente), arrastrando
a todo el sector (SMH -5,32%) — con el matiz de que la caída combinó esta noticia con preocupación ya
existente sobre el ciclo de capex en semis, no fue un catalizador único y puro. **Memoria**: CXMT (Changxin
Memory Technologies, fabricante chino de DRAM) debutó en el STAR Market de Shanghái con **+470% a +500%
intradía**, capitalización **~$487.000-500.000 millones**, superando a Intel en el momento del debut (matiz:
Intel ha cotizado entre $512.000-665.000M en julio con swings de hasta -9%/día, el cruce depende del instante
exacto) — mayor OPV china desde 2010, IPO de ~$8.600-9.800M. **Dato descartado por error del comunicador,
verificación adversarial**: la cifra de "+170% en lo que va de año antes del debut" no puede ser correcta
(CXMT no cotizaba antes de su propio debut) — no se traslada al cerebro sin fuente propia.

**Mecanismo boomerang**: ambos hallazgos confirman el mismo patrón — el veto de EE.UU. a la venta de chips/
litografía avanzada a China acelera, no frena, la construcción de una cadena de suministro china autónoma de
gama media. Es el primer día en que se documenta el efecto en dos eslabones distintos de la cadena a la vez
(equipo de fabricación + memoria). Cruza con Micron, 9,2% de la cartera: doble filo — más
oferta china de DRAM presiona precios de memoria a la baja a medio plazo (riesgo para la tesis de escasez),
mientras la fragmentación geopolítica de la cadena es un riesgo ya contemplado en la tesis de "picos y palas",
no una sorpresa. 📌 falsable: presión visible sobre precios spot de DRAM en 1-2 trimestres confirmaría el
mecanismo; ausencia de movimiento de precio sugeriría que el mercado ya lo tenía descontado.

## Nota de evolución 2026-08-16: el poder de captura se desplaza a memoria

La verificación cruzada del enjambre confirma, en periodos fiscales no idénticos, márgenes operativos aproximados
de **Micron 80,4%**, **SK hynix 76,3%**, **Nvidia 65,6%** y **TSMC 60,3%**. No son una comparación de un mismo
trimestre calendario y SK hynix publica el 76% redondeado; sirven para observar el mecanismo, no para fabricar un
ranking permanente de calidad.

La implicación durable es que el cuello de botella de memoria puede capturar más valor que el diseñador de GPU durante
la fase de escasez. La contra-tesis sigue viva: esos márgenes son cíclicos y los contratos *take-or-pay* trasladan
riesgo hacia fabs y clientes si la demanda se normaliza. Fuente: [[conocimiento-2026-08-16]], resultados primarios de
Micron, SK hynix, Nvidia y TSMC; verificación en `scratchpad/verificacion-cinco-cifras-2026-08-16.md`.

## Ver también

[[mapa-de-industrias]] · [[index#Empresas|empresas del wiki]] · [[asml]] · [[tsmc]] ·
[[semiconductores-logica-y-computo-ia]] · [[valoracion-ciclicas-y-beneficios-negativos]] ·
[[contabilidad-y-calidad-de-beneficios]] · [[checklist-macro-y-ciclo]] · [[screening-de-calidad]]

## Red de conexiones

- La HBM es el puente físico entre [[semiconductores-logica-y-computo-ia]] y el capex de [[nvidia]], [[tsmc]] y los hiperescaladores.
- El riesgo de demanda no es binario: [[financiacion-estructurada-del-capex-de-ia]] distingue demanda real de financiación que exige crecimiento continuo.
- El margen actual debe pasar por [[valoracion-ciclicas-y-beneficios-negativos]], [[reversion-a-la-media]] y [[contabilidad-y-calidad-de-beneficios]], no por un PER de pico.
- La exposición de Micron se lee junto a cartera actual, [[gestion-de-posiciones]] y [[limites-y-marco-de-riesgo]]; la diversificación nominal de semis no elimina la concentración temática.
- La oferta china conecta el ciclo de memoria con [[michael-pettis]], [[plataformas-de-internet-de-china]] y [[ciclo-de-imperios-y-moneda-reserva]].
