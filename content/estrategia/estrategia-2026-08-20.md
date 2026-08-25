---
title: "Informe de estrategia — 2026-08-20 (Inés Torres, séptimo run)"
tipo: sintesis
tags: [estrategia, macro, sectorial, 2026-08]
fecha: 2026-08-20
agente: ines-torres
---

# Informe de estrategia — 2026-08-20 (Inés Torres, séptimo run)

> **Contexto del gap**: sin informe desde el 2026-08-06 (14 días, no los 3-4 días habituales). No es fallo de
> juicio: `cerebro-analista-estrategico` murió por límite de plan el 10-ago (documentado por el mantenimiento del
> 16-ago y por [[cio-2026-08-17|el CIO del 17-ago]], que lo señaló como riesgo crítico — "el fondo navega sin su
> propio cerebro de riesgo/estrategia"). Este run cubre el backlog real con lo que el equipo sí produjo en esas
> dos semanas: 5 pulsos de texto (Elena) y 12 pulsos de vídeo (Marco) entre el 06 y el 19-ago, todos leídos y
> sintetizados (los del 17-19-ago íntegros; los del 06-16-ago por sus secciones de síntesis, dado el volumen).
> **Capa mecánica (`destila --tipo tabla-macro`/`novedad`, `enlaza`) no invocada este run**: decisión de alcance,
> no fallo — el catch-up de 14 días ya exigió lectura manual completa de los pulsos (no hay volcados de un solo
> día en scratchpad que formatear), y la tabla macro se verificó con 3 llamadas adversariales en vez de con el
> comprobador mecánico. Declarado, no oculto.

## Frescura de insumos

- Newsletters (Elena): OK, último run hace 23,9h (< 30h).
- **[DEGRADADO: insumo cerebro-ingesta-diaria-youtube no disponible o caducado]** — el run de vídeo del 19-ago
  no marcó frescura (su propio marcador sigue en el run del 18-ago, 47,6h); su nota del 19-ago sí existe y se
  usa igualmente (`pulso-video-2026-08-19.md`, con degradaciones propias declaradas: crudo sin archivar por
  permisos, 2 vídeos sin transcripción). Sigo con lo que hay — no se simula el pulso que falta.

## Cuadro macro mundial (fase del ciclo, régimen, política monetaria/fiscal)

| Indicador | Valor | Fecha | Fuente |
|---|---|---|---|
| UST 10 años (DGS10) | 4,71% | 18-ago | FRED (primaria) |
| UST 2 años (DGS2) | 4,19% | 18-ago | FRED (primaria) |
| Spread 2s10s | **+0,52 pp** (no invertido, ampliándose) | 18-ago | FRED, cálculo propio (diferencia) |
| UST 30 años (DGS30) | **5,28%** (rango semana 5,21-5,31%, máximo desde 2007) | 18-ago | FRED (primaria) — **confirma** lo que Misterpuertas/Cárpatos/Bloomberg venían reportando desde el 14-ago |
| Fed funds (FEDFUNDS) | 3,63% | jul-2026 | FRED (primaria) |
| CPI general YoY | 3,4% (subyacente 2,5%, bajando desde 2,6%) | jul-2026 | BLS (primaria, vía pulso Elena 12-ago) |
| PPI general YoY | 4,7% (bajando desde 5,5%) | jul-2026 | BLS (primaria, vía pulso Elena 13-ago) |
| Paro (UNRATE) | 4,1% (bajó desde 4,2%) | jul-2026 | FRED (primaria) |
| Nóminas no agrícolas (PAYEMS) | **-23.000** (158.858k vs 158.881k jun) | jul-2026 | FRED (primaria) — cálculo propio (diferencia), **coincide exactamente** con la cifra que el pulso de vídeo del 09-ago atribuía al informe de empleo |
| Inflación implícita 10a (T10YIE) | 2,30% | 19-ago | FRED (primaria) |
| Spread High Yield (BAMLH0A0HYM2) | 2,75% (históricamente muy estrecho = complacencia de crédito) | 18-ago | FRED (primaria) |
| Brent | **~$91-92** (ver nota de verificación abajo) | 18-ago | FRED/EIA (Dated Brent, T-1) + contraste con prensa independiente |
| EUR/USD | 1,1605 (dólar débil, peor día en meses el 20-ago según pulso) | 19-ago | BCE (primaria) |
| Tipo depo BCE | 2,25% (sin cambios) | 20-ago | BCE (primaria) |

**Verificación adversarial 1/3 — Brent, discrepancia real entre fuentes**: los pulsos de vídeo del 17-19-ago
citaban Brent "por debajo de 90-100" o "~88$", mientras la misma jornada (18-ago) otro programa de Bloomberg
("The Close") decía "superó 90$ por tercer día consecutivo" — contradicción dentro de la propia cadena, no
solo entre canales. El verificador confirma que DCOILBRENTEU (FRED/EIA) es el precio **Dated Brent físico con
un día de rezago**, no el futuro ICE que suelen citar las newsletters — explica buena parte del gap de $2-8 —
pero además contrastó de forma independiente (fuera del Cerebro) el nivel real del 18-ago: **$91-92**, más
cerca de FRED que de los "~88$" del pulso. **Lectura para el mapa**: la predicción viva
[[2026-07-23-brent-sostiene-90-agosto]] (Brent >$90 a 31-ago, prob. 0,68) venía siendo descrita run tras run
como "al borde de fallar" — con el nivel real más probable en $91-92, luce **en curso de cumplirse**, no al
borde. El criterio de resolución exige cierre Bloomberg/ICE del propio 31-ago, que esta nota no sustituye — es
una lectura de dirección, no el dato que resuelve. Método nuevo: **la "convergencia de fuentes" del pulso de
vídeo falló su propia prueba de independencia** (mismo día, misma cadena, dos cifras opuestas) — mismo patrón
ya catalogado (Grantham/Montier, Regla del 20+CAPE) aplicado ahora a dentro-de-un-solo-medio.

**Fase de ciclo / régimen**: expansión tardía con una fisura de crédito que ya tiene nombres propios (Jane
Street ~-$15.000M en julio, primer mes negativo en casi una década; [[credito-privado|crédito privado]] problemático 2%→2,8% desde
marzo sobre ~$2 billones) y una curva larga que tres fuentes independientes más FRED confirman en niveles de
crisis (30 años en máximos desde 2007, rentabilidad real ~3,04% comparable a 2008). El mecanismo dominante del
periodo es **crowding-out**: emisión soberana ($432.000M de déficit en julio, Bessent duplicando *buybacks* de
$2.000M a $4.000M/mes) compitiendo por duración con la emisión de deuda de los hiperescaladores ($489.000M
emitidos en lo que va de año en deuda ligada a IA, frente a $322.000M en todo 2025). El HY spread sigue
tranquilo (2,75%) — es precisamente cómo empiezan estos episodios, no evidencia de que no exista riesgo.

## Mapa de riesgos sistémicos (lo que pega a varias posiciones a la vez)

1. **Crisis silenciosa de la curva larga + crowding-out del crédito de IA**: 30 años en máximos desde 2007,
   confirmado por FRED y 3 fuentes independientes; emisión soberana y corporativa de IA compitiendo por
   duración; primer accidente apalancado con nombre (Jane Street). Pega directamente al **cuadrante vacío de
   renta fija (0% cartera)** — cada vez con más justificación para empezar a llenarlo — y de forma indirecta a
   toda posición de duración larga vía descuento (tech/calidad, 28,3%+5,0% de la cartera).
2. **Financiación circular del capex de IA, ya con el propio proveedor asegurando su colateral**: el consorcio
   de Nvidia ($500.000M, MOU confirmado 10-ago, no vinculante) y la tesis "subprime del chip" (Nvidia garantiza
   hasta el 25% de sus propios clientes) — capex de los hiperescaladores ≈99% de su OCF (dato del CKO, 16-ago).
   Pega a [[microsoft|Microsoft]]/Amazon/[[alphabet|Alphabet]]/Meta (28,3% de la cartera); Meta sigue siendo, según el propio CIO, el
   vector más expuesto.
3. **Posicionamiento extremo con tres vencimientos encadenados**: opciones VIX (19-ago), vencimiento mensual
   (21-ago) y Jackson Hole (27-29-ago) en 10 días. Skew de calls en percentil 98-100, VIX ~14-15 artificialmente
   comprimido por venta sistemática de volatilidad, dispersión (la operación que sostenía la calma) agotándose
   según Cava (18-ago). Pega a todo el libro de riesgo, no a un sector — es temporalidad, no tesis.
4. **China en divergencia estructural en K, no ciclo corto**: inversión en activos fijos -6,7% YoY (mínimo
   desde abril 2020), consumo colapsando (autos -17%, materiales construcción -14,2%), inmobiliario sin suelo
   (-19,2% YoY) — mientras hi-tech manufacturing +16,9%, robots +30,2%, vehículos eléctricos +29,9% (ING,
   17-ago, cifras primarias confirmadas del cuerpo del destilado). Pega de forma **dispar** al 9,0% de China en
   cartera: JD/Baidu/Meituan (consumo/plataformas, lado débil) frente a la narrativa de Alibaba/Qwen (lado
   fuerte, +2% el 17-ago, 3.000M de descargas de sus modelos) — la cartera no distingue hoy entre ambos lados
   del régimen en K.
5. **Ormuz/SPR**: bloqueo de facto persistente con múltiples focos de escalada nuevos desde el 06-ago (petrolero
   *Caroline Bazen* varado con 800.000 barriles frente a Omán, posible sabotaje; amenazas de Trump contra Omán;
   sanciones de Bessent a bancos chinos y flotas fantasma). **Verificación adversarial 3/3**: el nivel de SPR de
   298,7M de barriles (mínimo desde 1983) es un **hecho confirmado en fuente primaria (EIA)**, pero mal fechado
   por el pulso — es el dato de la semana cerrada el 07-ago, repetido el 17-ago como si fuera nuevo (mismo
   patrón de "repetición ≠ confirmación" ya catalogado en método). El mecanismo de "venta de SPR como
   manipulación pre-*midterms*" es **opinión de un solo comunicador, sin segunda fuente**: la propia EIA
   documenta un motivo alternativo verificable —liberación coordinada de 172M de barriles tras el cierre de
   Ormuz, no calendario electoral—. Refuerza *marginalmente* la tesis de Energía ya vigente; no se usa el
   encuadre político.

## Mapa sectorial

| Sector | Postura | Por qué (mecanismo macro) | Página de industria |
|---|---|---|---|
| Semis/equipamiento (litografía, ASML) | Sobreponderar | Foso profundo intacto; sin novedad este run | [[semiconductores-logica-y-computo-ia]] |
| Semis/memoria (DRAM/NAND/HBM) | **Infraponderar** (sin cambio de postura) | El rebote técnico es real y ya dura 4-5 sesiones (Corea, SanDisk +9%, WDC +5,3%, Marvell +5,5%) pero SK Hynix sigue -34% y Samsung -21% en el trimestre — la tensión ciclo-vs-valoración de julio no se ha resuelto, solo hay más volatilidad dentro de ella. Jorne (20-ago) marca el disparador técnico de reduce de Micron como "cumplido débilmente" (1 sesión real en ventana 950-983, no las 2 pre-escritas) | [[semiconductores-de-memoria]] |
| Tecnología/IA agregada (relato + infraestructura) | Neutral | La financiación circular se carga, no se alivia (Nvidia como avalista de su propio colateral, capex ≈99% del OCF); guerra de precios de tokens (-25-60% en semanas según dos fuentes independientes) presiona monetización justo cuando la emisión de deuda sigue subiendo | [[plataformas-tecnologicas-y-publicidad-digital]] |
| China (plataformas de internet + consumo) | Neutral, con divergencia interna sin resolver **(nuevo matiz este run)** | K-shaped: consumo/inmobiliario colapsando (autos -17%, inmobiliario -19,2% YoY) vs. hi-tech/robótica +17-30% YoY. La cartera (JD/Baidu/Meituan/JPM Greater China) está más expuesta al lado débil que al fuerte (Alibaba/Qwen) | [[plataformas-de-internet-de-china]] |
| Salud/farma/biotech | Neutral | Sin desarrollo este run; candidata de 2ª prioridad sin cambio | [[salud-y-farma]] |
| Consumo/lujo/retail | Neutral | Sin desarrollo específico distinto de China (ya tratado aparte) | — |
| Industriales/defensa | Sobreponderar (hueco de cartera, sin avance) | Consumo de arsenal (Patriots ≥50% del stock consumido) sostiene la tesis, pero Kongsberg (mejor calidad de defensa vista por el Cerebro, según el fundamental) sigue con [[margen-de-seguridad|margen de seguridad]] ~-22% — hueco abierto por precio, 4 rondas | [[aeroespacial-y-defensa]] |
| Finanzas/bancos | Neutral, selectivo | Sin desarrollo este run | — |
| Energía/petróleo/gas | Sobreponderar (reforzada) | Brent real más alto de lo que el pulso venía sugiriendo (~$91-92, ver verificación); SPR en mínimos desde 1983 confirmado en fuente primaria (aunque el ángulo "manipulación electoral" no se usa, sin verificar); Golden Dome y rearme regional siguen presionando la misma dirección | [[mineria-industrial-y-energia]] |
| Nuclear/uranio | Sobreponderar | España prolonga Almaraz hasta 2030, India apunta a 100GW (11x) para 2047 — mismo mecanismo (tensión energía-IA), dos velocidades | [[mineria-industrial-y-energia]] |
| Minería/materiales (oro, plata, cobre) | Sobreponderar | Oro +8,3% en 2 semanas (rally defensivo, Jorne 20-ago), dólar en su peor día en meses (20-ago) — mecanismo de [[represion-financiera|represión financiera]] de Dalio operando en tiempo real, no solo en teoría. Cobre: demanda estructural de IA (~6% del capex de centros de datos) más transición energética (proyección +50% a 2040) | [[mineria-industrial-y-energia]], [[mineras-de-metales-preciosos]] |
| Renta fija/liquidez | Cuadrante vacío (0%) — **caso para llenarlo cada vez más fuerte, sigue sin ser gatillo** | 30 años en máximos desde 2007 confirmado por FRED (no solo por comunicadores); el propio CIO (17-ago) ya lo señala como "el primer entorno que de verdad lo justifica" y propone financiarlo con el flujo mensual de aportaciones, no con venta | — |

## Megatendencias (10-30 años)

Sin megatendencia nueva este run — lo que emergió (robotaxi fuera de EE.UU./China con Uber como agregador
occidental; robótica humanoide china, Unitree +460% en su debut con 8.000x de sobresuscripción) es **desarrollo
dentro de la megatendencia 1 (IA/robótica)** ya vigente, no un eje nuevo: el frente geográfico se mueve
(Europa/Oriente Medio como campo de batalla, vetado el acceso mutuo EE.UU.-China por decisión del Pentágono),
pero el mecanismo de fondo no cambia. Igual con la divergencia china en K: refuerza la megatendencia 3
(desglobalización/fragmentación) con un matiz nuevo — China ya no es un bloque homogéneo para efectos de
inversión, es dos economías dentro de la misma frontera.

## Rotaciones (¿coinciden macro y gráficos de Jorne?)

- **Coincidencia fuerte**: el rally del oro que documenta Jorne (+8,3% en 2 semanas, GLD $413,84, vol alto sin
  pánico) encaja exactamente con el mecanismo macro de este run (dólar débil, curva larga en tensión, represión
  financiera) — no es casualidad técnica, es el mismo motor visto desde dos ángulos.
- **Coincidencia parcial, con matiz que Jorne ya señala**: el disparador de reduce de Micron por concentración
  está "cumplido débilmente" (1 sesión real en la ventana 950-983 de las 2 pre-escritas) — el rebote de memoria
  que este informe documenta a nivel sectorial (4º-5º día consecutivo en Corea) es real, pero la tensión
  ciclo-vs-valoración de fondo (Infraponderar) no cambia por un rebote técnico. La decisión de ejecutar o no el
  reduce es del CIO/Carlos, no de esta rutina — la lectura sectorial no contradice ni ordena la técnica.
- **Sin resolver**: la MCO DCA que Jorne marca como "entrada limpia" (zona 485-490 tocada con volumen bajo) es
  coherente con la recomendación de este informe (usar el flujo mensual para el núcleo de calidad famélico) —
  convergencia entre esta rutina y la técnica sin que ninguna dependa de la otra.

## Escenarios: base / optimista / pesimista

**Recalibrado 45/15/40 → 40/15/45** (pesimista +5, base -5; optimista sin cambio). Motivo, no *market
timing* sobre un solo dato: desde el 06-ago se acumularon **tres mecanismos nuevos y confirmados en fuente
primaria o multi-fuente**, no un simple movimiento de precio — (1) la curva larga pasó de "hipótesis de prima
de gobernanza" (confirmada el 03-ago a 5,21%) a **crisis con nombre propio de crowding-out** (Jane Street,
crédito privado deteriorándose, emisión de IA $489.000M YTD); (2) China confirmó con datos oficiales (ING,
primaria) una divergencia estructural, no coyuntural; (3) Ormuz sumó un incidente físico verificable (el
vertido del *Caroline Bazen*) a la retórica, con la SPR en mínimo histórico confirmado. Ninguno de los tres
es reversión de un solo día; los tres son series/hechos que se sostienen en múltiples lecturas desde el
06-ago.

- **Base (40%)**: la Fed llega a Jackson Hole (27-29-ago) sin comprometerse, el mercado sigue descontando
  probabilidad decreciente de subida en septiembre (25-35% según las fuentes más recientes, bajando de 50%),
  el rebote técnico de memoria y el rally del oro conviven sin resolución de fondo, Brent se mantiene en la
  banda $88-95 sin escalada mayor en Ormuz.
- **Optimista (15%, sin cambio)**: desinflación se consolida (subyacente 3M anualizado <2% en el informe de
  agosto), la Fed señala pausa prolongada en Jackson Hole, el vencimiento de opciones del 21-ago se digiere sin
  contagio y la dispersión que documenta Cava se estabiliza en vez de romperse.
- **Pesimista (45%, sube desde 40%)**: la presión de la curva larga fuerza una subasta débil (test inmediato:
  20 años, $16-20.000M, la mayor desde 2020) que empuja al 30 años por encima de 5,35-5,4%, el crowding-out se
  traslada visiblemente a equity de duración larga (tech/calidad), la dispersión que sostiene la volatilidad
  baja se agota antes de Jackson Hole (riesgo con fecha: 21-ago y la "hora bruja" de septiembre), y/o Ormuz
  escala (confirmación de sabotaje en el *Caroline Bazen*, o SPR tocando su suelo operativo de 250M).

## Para el CIO / para Carlos — dónde concentrar capital

1. **La lectura de Brent que llevaba dos semanas repitiéndose ("al borde de fallar") estaba sesgada por una
   fuente con fallo de independencia interno.** Con el nivel real más cerca de $91-92 que de $87-88, la
   predicción viva [[2026-07-23-brent-sostiene-90-agosto]] luce en curso de cumplirse — no cambia la postura de
   Energía (ya Sobreponderar), pero sí cómo debe leerse la calibración del propio equipo cuando resuelva el
   31-ago (Brier bajo si acierta la dirección, alto si el "al borde de fallar" contaminó la lectura).
2. **El caso para llenar el cuadrante de renta fija (0%) es cada vez menos hipotético.** El 30 años en máximos
   desde 2007, confirmado en fuente primaria y no solo por comunicadores, es justo el tipo de entorno que la
   propia tesis de esta rutina lleva un mes señalando como condición de entrada. Sigue sin ser gatillo
> — dato privado retirado —
   infrautilizada) es el vehículo natural para empezar, sin vender nada.
3. **China deja de ser una sola apuesta.** La cartera trata JD/Baidu/Meituan/JPM Greater China como un bloque,
   pero la propia macro china ya no lo es: hi-tech/robótica crecen 17-30% YoY mientras consumo/inmobiliario se
   contraen dos dígitos. Vale la pena que el próximo análisis fundamental de una posición china distinga
   explícitamente en qué lado del régimen en K está esa empresa concreta.

📌 **predicción** (ines-torres): el 30 años (FRED DGS30) cierra en algún día por encima de **5,35%** antes del
**15-sep-2026** — umbral por encima del máximo actual (5,31%, 17-ago), resuelve con el dato diario de FRED,
prob. **0,35**.

📌 **predicción** (ines-torres): el spread High Yield (FRED BAMLH0A0HYM2) se ensancha por encima de **3,25%**
antes del **30-sep-2026** — señal de que el estrés de crédito de IA se traslada al crédito general, no solo a
semis/tech; hoy en 2,75%, resuelve con el dato diario de FRED, prob. **0,20**.

📌 **predicción** (ines-torres): la valoración final de la IPO de Anthropic (S-1 público o rango de precio del
banco colocador) **no confirma $2 billones** — sale por debajo, o no se completa la OPV antes del
**31-oct-2026** — resuelve con el documento público, no con rumor de prensa; prob. **0,55** (la cifra de "70%
de Polymarket" que citaba el pulso del 19-ago resultó, verificada hoy, ser en realidad ~38% — un mercado de
baja liquidez que no debe tratarse como probabilidad fiable).

📌 **predicción** (ines-torres): las ventas minoristas chinas (dato oficial NBS, próxima publicación
~15-sep-2026 para agosto) se mantienen por debajo de **1,5% YoY** — confirmación de que la divergencia en K no
es un mes suelto; hoy en 0,6% (julio), resuelve con el dato oficial, prob. **0,65**.

## Para Carlos Bárez — sectores a priorizar/evitar en su CAZA del viernes

- **Priorizar (candidata nueva)**: proveedores de la cadena de robótica/automatización industrial china o
  beneficiarios del "lado fuerte" del régimen en K (hi-tech manufacturing +16,9%, robots +30,2%, NEV +29,9%
  YoY) — **distinto** de las plataformas de consumo (JD/Baidu/Meituan) que ya tiene en cartera y que están del
  lado débil de la misma divergencia. No hay candidata concreta identificada todavía; es un hueco de
  investigación, no una tesis.
- **Priorizar (sin cambio, sigue abierto)**: defensa/industriales — el hueco de cartera (0€) lleva 4 rondas sin
  llenarse por precio (Kongsberg, la mejor calidad vista, sigue con margen ~-22%). El consumo de arsenal
  (Patriots) sostiene el mecanismo, no resuelve la valoración.
- **Evitar/vigilar con cautela**: ampliar exposición a semis/memoria a estos niveles — el rebote técnico de 4-5
  sesiones no cambia la tesis Infraponderar de fondo (ciclo vs. valoración sin resolver, SK Hynix -34%/Samsung
  -21% en el trimestre pese al rebote).
- **Evitar**: usar la cifra de "$2 billones" de Anthropic como ancla de valoración para comparables de IA
  privada — verificada hoy como DÉBIL (fuente única con conflicto de interés, cifra de mercado de predicción
  citada incorrectamente en el pulso).

## Para Jorne — rotaciones a confirmar en gráficos

- Confirmar si el rebote de memoria (Corea, SanDisk, WDC, Marvell) consolida o revierte en las próximas 1-2
  semanas — determina si el disparador débil de Micron necesita una relectura o si el nivel $870 (invalidación)
  sigue siendo la referencia correcta.
- Vigilar el nivel $91-92 de Brent contra la resistencia técnica de $90 que el propio mercado de opciones
  pueda estar tratando como referencia — la predicción viva resuelve el 31-ago con cierre Bloomberg/ICE, no
  con el dato de FRED que usa este informe.
- Vigilar el 30 años (5,28-5,31%) contra el nivel de ruptura 5,35% de la predicción nueva de este informe —
  si rompe antes de la subasta de 20 años, es la señal más limpia de que el crowding-out se está acelerando.
- Los tres vencimientos encadenados (opciones VIX 19-ago ya pasado, mensual 21-ago, Jackson Hole 27-29-ago)
  son la ventana más concreta para vigilar gamma/VIX, no para operar contra ellos.

## Verificación

3/3 verificaciones adversariales usadas (tope del presupuesto): (1) Brent FRED vs. pulsos — discrepancia real
resuelta a favor de un nivel más alto de lo reportado, con hallazgo de método nuevo (fallo de independencia
dentro de la misma cadena); (2) valoración IPO de Anthropic — DÉBIL, con una cifra de Polymarket mal citada por
el pulso (70% vs. 38% real); (3) SPR bajo 300M de barriles — CONFIRMADO como hecho pero mal fechado (dato
reciclado sin decir que era el mismo), mecanismo de "manipulación electoral" sin verificar y con explicación
alternativa oficial disponible.

## Ver también

[[mapa-sectorial-y-megatendencias]] · [[checklist-macro-y-ciclo]] · cartera actual · [[ciclos-de-mercado]] ·
[[ciclo-de-deuda-y-desapalancamiento]] · [[ray-dalio]] · [[howard-marks]] · [[michael-pettis]] ·
[[jeremy-grantham]] · [[mark-mobius]] · [[ruchir-sharma]] · [[viento-de-cola-americano]] · [[cio-2026-08-17]] ·
[[at-2026-08-20]]
