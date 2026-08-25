---
title: "Informe de estrategia — 30 julio 2026 (cuarto run)"
tipo: sintesis
tags: [estrategia, macro, sectorial, 2026-07, fed, semis, iran]
fecha: 2026-07-30
fuentes: ["[[pulso-2026-07-28]]", "[[pulso-2026-07-30]]", "[[pulso-video-2026-07-27]]", "[[pulso-video-2026-07-28]]", "[[pulso-video-2026-07-29]]", "[[pulso-video-2026-07-30]]", "[[at-2026-07-30]]", "[[af-2026-07-29]]"]
---

# Informe de estrategia — 30 julio 2026 (cuarto run)

Cuarto informe de la rutina `cerebro-analista-estrategico` (Inés Torres). Kimi agotó cuota en la FASE -1
(código de salida 3); este run lo ejecuta `ejecutor-sonnet` como respaldo. Cubre el flujo del equipo desde
el run anterior ([[estrategia-2026-07-23]], 23-jul): pulsos de texto de Elena Vega (28 y 30-jul) y de vídeo
de Marco Reyes (27, 28, 29 y 30-jul), el análisis técnico de Jorne del propio 30-jul ([[at-2026-07-30]]) y
el análisis fundamental de Carlos Bárez del 29-jul ([[af-2026-07-29]], Qualcomm + hueco de defensa
atendido).

## Cuadro macro mundial

**FOMC del 28-29 de julio: la decisión ya no es una hipótesis, es un hecho con matiz de gobernanza.**

- **Decisión**: mantiene el tipo de referencia en **3,50-3,75%**, con votación **9 a favor y 3 en contra**
  (tres presidentes regionales — Beth Hammack/Cleveland, Neel Kashkari/Minneapolis, Lorrie Logan/Dallas —
  pidiendo subida de 25pb). Corroboración cruzada barata: el pulso de texto (Elena, themarketseye/ING)
  identifica a los tres disidentes por nombre; el pulso de vídeo (Bloomberg `Fed Special`) da el mismo "9
  versus 3" sin nombres — dos rutinas del cerebro, mismo dato, sin depender la una de la otra.
- **Efecto Warsh**: la rueda de prensa del nuevo Fed Chair (Kevin Warsh) fue calificada de "confusa" por el
  propio panel de Bloomberg — el mercado no reacciona a la decisión (ampliamente esperada) sino a la
  desconfianza en la comunicación. Reacción citada por el pulso: bono a 30 años **+11pb hasta 5,20%** (nivel
  más alto desde 2007), probabilidad de subida en septiembre cae de 70% a 50% (futuros de fondos federales).
  **Dato oficial FRED, con su rezago habitual**: DGS30 solo llega al 28-jul (**5,09%**, bajando desde 5,17%
  el 23-jul, es decir, *antes* de la reacción post-FOMC) — no puede confirmar ni desmentir el 5,20% todavía,
  se usa la cifra del pulso por ser más reciente y se deja para el próximo run comprobar el dato oficial de
  esta semana (misma regla de método de siempre: usar el dato más reciente sin descartar el rezagado).
- **Curva 10a-2a (FRED, 28-jul)**: 4,61% − 4,26% = **+0,35pp**, sin invertir, prácticamente estable frente al
  +0,36pp del 28-jul ya reportado la semana pasada.
- **Inflación (FRED CPIAUCSL)**: junio-2026 **332,568** vs. mayo **333,979** → **-0,42% intermensual**, exactamente
  el "-0,4% mes a mes" que cita el propio comunicado de la Fed como argumento contra la subida. Interanual:
  **+3,46%** en junio (vs. 321,435 en junio-2025), bajando desde **+4,17%** en mayo — la desinflación de fondo
  se confirma con dato oficial. **Nota de revisión**: estas cifras son más bajas que las citadas en
  [[estrategia-2026-07-23]] (que usaba 333,952/322,561 → 3,53%); FRED ha revisado la serie a la baja, lo cual
  encaja con el propio argumento de la Fed de "revisiones a la baja" en los datos de empleo — mismo patrón de
  revisión, cruzado por primera vez entre el argumento de la Fed y el dato oficial.
- **Empleo (FRED)**: paro estable en **4,2%** (junio); nóminas no agrícolas +57.000 (junio vs. mayo), un ritmo
  modesto que encaja con el "jobs por debajo del 50% de lo esperado" que cita el pulso como argumento a favor
  del hold.
- **Crédito (FRED BAMLH0A0HYM2)**: spread high yield **2,77% (23-jul) → 2,79% → 2,81% → 2,84% (28-jul)** —
  ensanchamiento gradual de +7pb en la semana, consistente con el propio lenguaje de la Fed ("financial
  conditions tightened": 10 años +15pb, dólar +0,5pp, S&P -1%, Nasdaq -5,5% en la semana previa a la reunión).
  Sin ruptura, pero es el primer ensanchamiento sostenido de varias semanas.
- **Inflación implícita (FRED T10YIE)**: estable en **2,20-2,26%** toda la semana — las expectativas de
  inflación de largo plazo siguen ancladas pese a la volatilidad de crudo y de la propia comunicación de la
  Fed.
- **Petróleo (FRED DCOILBRENTEU, rezagado)**: **$91,82 (27-jul)**, tras un pico de $105,32 (23-jul) y una
  caída a $83-87 durante la tregua táctica del 25-27-jul (ver Mapa de riesgos) — el pulso de vídeo sitúa el
  spot de hoy en **$96-100** tras la escalada del 29-30-jul. El dato oficial confirma que la volatilidad de
  la semana es real y de doble sentido, no solo una escalada monótona.
- **FX (BCE, 29-jul)**: EUR/USD 1,138 · EUR/GBP 0,856 · EUR/CHF 0,933.
- **Zona euro**: el dataset HICP del BCE (`ICP`) está **discontinuado desde febrero-2026** por cambio
  metodológico de Eurostat (aviso explícito en la propia respuesta de la API) — el último dato disponible por
  esta vía es diciembre-2025 (1,9%). Limitación conocida, sin dato oficial más reciente disponible por este
  canal esta semana; no cambia la lectura cualitativa ya registrada (BCE cauta, posible tono dovish en
  septiembre).

**Régimen**: la Fed ya decidió (deja de ser incertidumbre de política monetaria a corto plazo), pero abre un
riesgo nuevo — de **gobernanza/credibilidad de la comunicación** — que no estaba en el guion de "hold sin
sobresaltos". La escalada Irán-EEUU-Arabia Saudí pasa de amenaza a **intercambio de fuego confirmado**. Y el
ciclo de semis/memoria, que llevaba 11 runs como hilo abierto, capitula técnicamente el mismo día que la
narrativa de mercado (SK Hynix) se mueve — con una corrección de la verificación adversarial que separa lo
que es real de lo que no.

## Mapa de riesgos sistémicos

1. **Nuevo — prima de gobernanza en la curva larga de EE.UU.**: la Fed cumplió con el hold esperado y aun así
   el bono a 30 años tocó su nivel más alto desde 2007 (según el pulso; oficial pendiente de confirmar la
   próxima semana). El mecanismo no es inflación ni tipos — es que el mercado no cree que Warsh pueda hablar
   "duro" sin actuar, y exige una prima por la incertidumbre de cómo comunica la nueva Fed, no por el nivel de
   tipos en sí. Primera vez que este mapa documenta un riesgo de este tipo.
2. **Irán-EEUU-Arabia Saudí: de amenaza a guerra directa confirmada, con un capítulo de ida y vuelta real**
   — no es una escalada monótona: hubo una tregua táctica verificada del 25 al 27-jul (WTI cayó a $83-87,
   Brent -12%, tres días sin ataques) que se rompió con misiles iraníes contra una base de EE.UU. en Jordania
   y contragolpe conjunto EEUU-Arabia Saudí en Irak (29-30-jul). Ormuz sigue "cerrado por diseño" según el
   propio portavoz iraní (no por bloqueo físico). El diésel sigue siendo el cuello de botella más agudo que
   el crudo, sin novedad de mecanismo desde el 20-jul.
3. **Semis/memoria: capitulación confirmada, pero con la narrativa correcta separada de la incorrecta**
   (ver Mapa sectorial). MU rompió su soporte técnico de invalidación (870±20) el mismo día que SK Hynix
   reportó un "clean miss" pese a resultado récord y el Kospi tuvo un swing intradía del 15% — convergencia
   real entre técnica (Jorne) y narrativa de mercado (Bloomberg) el mismo día. **Verificado y corregido**: el
   argumento de que "China entra en HBM y amenaza los márgenes sostenibles de SK Hynix/Micron" es **DÉBIL,
   rayando en REFUTADA** — cinco fuentes de prensa surcoreana/industrial independientes sitúan a CXMT 3-5 años
   por detrás en HBM, con solo ~2% de su capacidad de obleas asignada a ese segmento. El mecanismo real del
   miss de SK Hynix fue **mix de producto y desplazamiento de envíos de HBM4 a trimestres posteriores**, no
   competencia china — y el margen operativo real reportado es **76%**, no el "80% o más" que circulaba.
4. **Patrón de mercado que se repite en varias tecnológicas: capex por delante del crecimiento que financia**
   — ya visto en [[alphabet|Alphabet]] y UPS, ahora en Meta (BPA $6,18 vs. $7,19 esperado, pese a ingresos +28%) y en
   [[microsoft|Microsoft]] (bate en todo salvo que el mercado ya vigila el ritmo de capex). Verificado: **no existe todavía
   una cifra oficial de Microsoft de capex total para el año fiscal 2027** — su CFO solo dio guía cualitativa
   ("el capex crecerá interanual") y una cifra trimestral (Q1 FY27 >$50.000M/trimestre, ritmo anualizado
   ~$200-220.000M). Las cifras de "$230.000M" o "$255-260.000M" que circulan en agregadores **no están
   confirmadas por Microsoft** y no se usan aquí. Lo que sí es real y verificado: Azure crece >40% mientras el
   ritmo de capex anualizado ya implícito (~$200-220.000M vs. un FY26 de ~$130-150.000M) crece más rápido que
   eso — la tensión del patrón es real aunque la cifra exacta de cola no lo sea.

## Mapa sectorial

| Sector | Postura | Por qué (mecanismo macro) | Página de industria |
|---|---|---|---|
| Semis/equipamiento (litografía, ASML) | Sobreponderar, con vigilancia nueva | Monopolio EUV intacto; primera grieta REAL y verificada en el escalón inferior: China (empresa estatal, Shanghái) inicia producción en masa de litografía DUV (no EUV) para SMIC/Hua Hong/CXMT — no cambia la postura (el foso de ASML sigue siendo EUV), pero es la primera vez que el "efecto boomerang" de las sanciones de EE.UU. se confirma también en equipo de fabricación, no solo en memoria | [[semiconductores-logica-y-computo-ia]] |
| Semis/memoria (DRAM/NAND/HBM) | **Infraponderar (bajada desde Neutral)** | Pico de ciclo confirmado a la vez por técnica (MU rompe su soporte de invalidación 870±20, cierre $739, -9,94%, vol. 67,4M — liquidación, no ruido) y por narrativa de mercado (SK Hynix "clean miss" con récord absoluto, Kospi -9% cierre/-13% intradía, consenso extremo de 36-37 recomendaciones de compra/0 de venta desarmándose). **Verificado y corregido**: NO por la narrativa de "competencia china en HBM" (DÉBIL/casi REFUTADA — China sigue 3-5 años por detrás en HBM); el mecanismo real es mix de producto + calendario de envíos HBM4, dentro del propio ciclo de pico ya documentado, no un riesgo estructural nuevo | [[semiconductores-de-memoria]] |
| Tecnología/IA agregada | Neutral, tensión reforzada | El patrón "capex por delante del crecimiento" se repite ya en tres tecnológicas (Alphabet, Meta, y la tensión que rodea a Microsoft) — corroborado entre varias empresas, no un caso aislado; pero la cifra de cola de capex FY27 de Microsoft NO está confirmada, verificado expresamente esta semana | [[plataformas-tecnologicas-y-publicidad-digital]] |
| Industriales/defensa | Sobreponderar (hueco cerrado por cobertura, abierto por precio) | El encargo de investigación ([[safran]] 17-jul, [[bae-systems]] 24-jul, screening de 4 puros-play) está atendido: ninguna candidata con [[margen-de-seguridad|margen de seguridad]] positivo hoy. BAE Systems reporta resultados H1 **hoy, 30-jul** — catalizador fechado a vigilar | [[aeroespacial-y-defensa]] |
| Energía/petróleo/gas | Sobreponderar (reforzada) | La volatilidad de doble sentido de la semana (tregua real 25-27jul con WTI a $83-87, escalada real 29-30jul con Brent a $96-100) es la señal en sí misma: el mercado no da el riesgo geopolítico por resuelto en ninguna dirección. Diésel sigue siendo el cuello de botella más agudo | [[mineria-industrial-y-energia]] |
| Nuclear/uranio | Sobreponderar | Sin novedad esta semana | [[mineria-industrial-y-energia]] |
| Minería/materiales (oro, plata, cobre) | Sobreponderar (con aviso de concentración) | Segunda fuente (Jean Beltrán, formador retail, de mucha menor autoridad que la primera) llega de forma independiente al mismo mecanismo que [[javier-dv|Javier DV]] documentó ayer: deuda de EE.UU. en máximos sostiene el oro pese a una eventual subida de tipos. No cambia el veredicto, refuerza el mecanismo ya conocido | [[mineras-de-metales-preciosos]] |
| Salud/farma/biotech | Neutral (candidata 2ª prioridad) | Sin desarrollo nuevo esta semana | [[salud-y-farma]] |
| Consumo/lujo/retail | Neutral | Sin novedad | — |
| Finanzas/bancos | Neutral, selectivo | Spread HY ensanchándose +7pb en la semana (2,77%→2,84%) — primer ensanchamiento sostenido de varias semanas, a vigilar sin que constituya todavía señal de estrés | — |
| Renta fija/liquidez | Cuadrante vacío (0%) — NO mover todavía | Paradoja nueva esta semana: el bono a 30 años tocó máximo desde 2007 **la misma semana** que la Fed mantuvo tipos de forma dovish — es prima de desconfianza en la comunicación, no una señal de que los tipos vayan a seguir subiendo por fundamentales. Sigue sin ser gatillo de entrada en duración | [[renta-fija-y-tipos]] |
| China (macro país) | Vigilar, sin cambio de postura | Politburó de julio sigue sin resolución reportada por 3ª semana consecutiva; PBoC mantiene tipos | — |

(postura apoyada en la capa estructural de [[mapa-de-industrias]], no la repite)

## Megatendencias (10-30 años)

Dos piezas concretas nuevas esta semana, ninguna cambia el marco de fondo (sigue: IA/robótica, transición
energética + renacimiento nuclear, desglobalización/fragmentación, defensa/seguridad — ver
[[mapa-sectorial-y-megatendencias]] para el detalle):

- **Desglobalización, con evidencia dura nueva**: China confirma autonomía propia en **dos eslabones de la
  cadena de semis en la misma semana** — memoria (CXMT, debut bursátil +470-500%, ~$490.000-500.000M de
  capitalización) y litografía DUV (empresa estatal de Shanghái, producción en masa para SMIC/Hua Hong/CXMT).
  Es el "efecto boomerang" de las sanciones de EE.UU. documentándose en dos frentes a la vez, no uno.
- **Defensa/seguridad, con un dato regulatorio concreto**: la FCC de EE.UU. bloquea la importación de
  humanoides extranjeros e inversores de red ("grid inverters") por seguridad nacional, orientado
  explícitamente a China — misma naturaleza de fricción regulatoria concreta que la moratoria de centros de
  datos de Nueva York (jul-2026), esta vez en robótica/infraestructura eléctrica.

## Rotaciones (¿coinciden macro y gráficos de Jorne?)

Coincidencia alta esta semana — el análisis técnico de Jorne del propio 30-jul ([[at-2026-07-30]]) confirma
en precio lo que este informe lee en narrativa de mercado el mismo día:

- **MU**: soporte de invalidación 870±20 **quebrantado decisivamente** (cierre $739, -9,94%, vol. 67,4M). La
  ventana de reduce que el CIO abrió el 16-jul (950-983) está cerrada desde el 24-jul sin haberse ejecutado.
  Jorne escala la decisión al CIO con tres opciones (reduce 40-50% ahora / esperar rebote >800 / reducción
  total) y marca explícitamente el sesgo de disposición propio como "PRIORIDAD 1" — no es esta rutina quien
  decide (dominio de Jorne/CIO/Bárez), pero la convergencia entre el mecanismo de mercado (este informe) y el
  nivel de precio (Jorne) el mismo día es exactamente el tipo de señal que el cerebro está diseñado para
  conectar entre rutinas.
- **MCO**: toca la zona DCA técnica (485-490) exactamente, con volumen bajo (718K) que confirma entrada
  selectiva limpia, no pánico — coincide con el plan del CIO de reforzar el núcleo de calidad infraponderado.
- **SPY**: toca soporte macro 730 (cierre $729,46) por primera vez, pendiente de confirmación mañana. Jorne
  cruza exactamente las dos variables que este informe ya vigilaba (petróleo y CPI) como las que dirigen el
  índice.
- **GLD**: +0,46% mientras el equity cae -1,54% — rotación defensiva funcionando como se esperaba, cobertura
  de tangibles (44,5% de la cartera) validada por el propio movimiento del día.

## Escenarios

Recalibrados desde el 55/15/30 vigente desde el 20-jul. Motivo del cambio: el escenario base anterior asumía
"semis consolida sin capitulación" — ese supuesto ya no es cierto (MU capituló técnicamente hoy), así que hay
que corregir el propio caso base, no solo repetirlo; y la escalada geopolítica de esta semana, aunque tuvo un
capítulo real de tregua (25-27jul), termina la semana peor que como empezó (fuego directo confirmado
Irán-EEUU-Arabia Saudí).

| Escenario | Probabilidad | Variables clave |
|---|---:|---|
| Base | 50% | Fed en pausa confirmada ("well into 2027" según ING), desinflación de fondo confirmada por dato oficial (CPI YoY 3,46%, bajando); semis/memoria completa su corrección cíclica de forma ordenada (SPY sostiene el soporte 730, sin arrastre sistémico); geopolítica se mantiene en intercambios de intensidad media sin campaña terrestre ni cierre físico de Ormuz |
| Optimista | 15% | Repite el patrón de tregua real ya visto 25-27jul (WTI cayó a $83-87 en tres días sin ataques) esta vez de forma sostenida; BCE gira dovish en septiembre; capex de IA se sostiene sin fricción de FCF adicional pese a la tensión documentada esta semana |
| Pesimista | 35% | Escalada a partir del intercambio de fuego confirmado 29-30jul (Jordania/Irak/Arabia Saudí) hacia una campaña de mayor intensidad o cierre efectivo de Ormuz; shock de diésel se traslada a inflación general revirtiendo la desinflación de junio; la capitulación de semis/memoria (ya materializada, no solo un riesgo) resulta ser estructural y no solo cíclica, arrastrando al bloque tecnológico de la cartera (28,3%) |

Riesgo sistémico nº1 sigue siendo el shock de petróleo vía Irán-EEUU-Arabia Saudí (con el diésel como variable
más aguda), pero esta semana suma un segundo riesgo de magnitud comparable: la prima de gobernanza en la
curva larga de EE.UU., nueva esta semana.

## Para el CIO / para Carlos

**Dónde concentrar capital**: sin cambio de exposición agregada recomendado desde aquí (macro/sectorial no
elige acciones), pero **un cambio de postura sectorial real esta semana**: Semis/memoria baja de "Neutral,
sin ampliar" a **Infraponderar** — el pico de ciclo que este mapa documentaba como hipótesis desde el 16-jul
se confirma hoy con evidencia técnica y de mercado convergente el mismo día. Esto es relevante directamente
para Micron (9,3% de la cartera, +690,1% de ganancia latente, la posición más concentrada) y para la decisión
que Jorne ya escaló hoy — la lectura sectorial de este informe **apoya** actuar sobre esa decisión (no la
sustituye), con una salvedad importante: el argumento correcto es el ciclo de pico ya conocido, **no** la
narrativa de competencia china en HBM, que la verificación adversarial de este run refuta.

**📌 Predicciones falsables** (para el veredicto semanal, NO se escriben aquí en `wiki/predicciones/`):
1. La Fed no sube tipos en la reunión de septiembre-2026 — prob. 0,50 (mercado implícito vía futuros de
   fondos federales citados por Bloomberg, bajando desde 70% pre-decisión), resuelve con el comunicado FOMC
   de septiembre.
2. El dato oficial de FRED (DGS30) confirma un cierre por encima de 5,15% en algún día de los primeros 5
   hábiles de agosto-2026 (contraste del dato del pulso, +11pb post-FOMC a 5,20%, que FRED aún no reflejaba
   al cierre de este run) — prob. 0,65, resuelve con el dato oficial de FRED.
3. SK Hynix reporta margen operativo en memoria dentro del rango 74-78% en su próximo trimestre (Q3 2026),
   sin deterioro material atribuible a competencia china en HBM — prob. 0,70 (dado que la evidencia
   independiente sitúa a China 3-5 años por detrás en ese segmento), resuelve con su informe trimestral.
4. Microsoft confirma una cifra oficial de capex total para el año fiscal 2027 (no vía terceros/agregadores)
   por encima de $220.000M cuando la comunique explícitamente — prob. 0,55 (dado el ritmo trimestral
   anualizado ya observado de $200-220.000M), resuelve con la propia comunicación de Microsoft.

## Para Carlos Bárez (su CAZA del viernes)

- **Encargo de defensa/industriales, actualización de estado**: atendido por cobertura (Safran + BAE Systems,
  screening de 4 puros-play), ninguna con margen de seguridad positivo hoy. BAE Systems reporta H1 **hoy
  mismo (30-jul)** — catalizador fechado para reconciliar la tesis existente, no para abrir una nueva.
  Qualcomm (VIGILAR, margen ≈0% a negativo tras corrección de WACC del 29-jul) sigue sin justificación
  numérica para ampliar la posición existente.
- **Priorizar**: energía/petróleo con el matiz de que la volatilidad de doble sentido de esta semana (no solo
  la dirección) es la señal; nuclear/uranio sin cambio.
- **Evitar/vigilar con cautela reforzada**: semis/memoria pasa a Infraponderar por primera vez desde que este
  mapa existe — no es momento de ampliar ni de iniciar posiciones nuevas en el sector; si se valora reducir
  Micron, el argumento correcto (pico de ciclo confirmado técnica y narrativamente) es más sólido que nunca,
  pero **descartar explícitamente** el argumento de competencia china en HBM como parte de la tesis de venta,
  porque no aguanta la verificación.
- **Nota de valoración transversal**: el patrón de "capex por delante del crecimiento" (Alphabet, Meta, tensión
  en Microsoft) es ya un patrón repetido, no un caso aislado — aplicar el mismo escrutinio si se valora
  ampliar cualquier posición de tecnología desarrollada, aunque la cifra exacta de capex de Microsoft para
  FY27 siga sin confirmar oficialmente.

## Para Jorne

- **Confirmar**: si SPY cierra por segunda sesión seguida bajo 730 mañana (31-jul) — sería la primera
  confirmación de estrés sistémico según el propio umbral de la memoria; si rebota >735, el soporte queda
  validado.
- **Vigilar**: la decisión de MU que hoy se escaló al CIO — la lectura macro de este informe (pico de ciclo
  confirmado, sin el matiz de competencia china) es coherente con actuar sobre el nivel técnico, no con
  esperar una nueva confirmación (mismo sesgo de disposición que Jorne ya señaló tres runs seguidos).
- **Cruzar**: BAE Systems reporta H1 hoy — si hay movimiento de precio relevante, cruzarlo con la tesis
  EVITAR/VIGILAR ya registrada (precio actual 1.820,50p, valor esperado ~1.490p) antes de la próxima
  actualización de la watchlist.

## Ver también

[[mapa-sectorial-y-megatendencias]] · [[checklist-macro-y-ciclo]] · cartera actual · objetivos ·
[[estrategia-2026-07-23]] · [[estrategia-2026-07-20]] · [[at-2026-07-30]] · [[af-2026-07-29]] ·
[[pulso-2026-07-30]] · [[pulso-video-2026-07-30]] · [[qualcomm]] · [[safran]] · [[bae-systems]] ·
[[semiconductores-de-memoria]] · [[financiacion-estructurada-del-capex-de-ia]] · [[ray-dalio]] ·
[[howard-marks]] · [[michael-pettis]] · [[jeremy-grantham]] · [[mark-mobius]] · [[ruchir-sharma]] ·
[[ciclos-de-mercado]] · [[ciclo-de-deuda-y-desapalancamiento]] · [[viento-de-cola-americano]] ·
[[registro-de-predicciones]]
