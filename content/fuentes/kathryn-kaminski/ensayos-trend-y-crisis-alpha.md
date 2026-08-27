---
title: "Kathryn Kaminski — ensayos de trend-following y crisis alpha (2011-2026)"
tipo: fuente
cobertura: completa
tags: [kathryn-kaminski, crisis-alpha, managed-futures, trend-following, cta, volatilidad, global-macro, riesgo, cuant]
fecha: 2026-07-26
fuentes: []
destilado_por: openrouter
---

# Kathryn Kaminski — ensayos de trend-following y crisis alpha (2011-2026)

Consolidación de **6 papers** de [[kathryn-kaminski]] (RPM → AlphaSimplex; piezas para [[cme-group|CME Group]], CFA/AIAR y
AlphaSimplex Research) que cubren su línea de investigación completa: el *crisis alpha* de los managed futures,
la anatomía de riesgos de las estrategias alternativas, la volatilidad como clase de activo, la ciclicidad de
los drawdowns del trend-following y la evaluación cuantitativa de gestores CTA y macro. Es una página de
conjunto: las ideas se organizan por temas, no por documento.

> ⚠️ **Aviso de fiabilidad global.** Estos papers son cuantitativos y esta página destila cifras concretas
> (porcentajes de crisis alpha, Sharpe, betas, correlaciones, magnitudes y fechas de drawdowns) procedentes de
> destilados mecánicos **no verificados contra el original**. Tratar todas las cifras como orientativas,
> pendientes de verificación selectiva contra los PDFs en `raw/`. Las inconsistencias internas detectadas se
> anotan en la sección 8.

**Los 6 documentos destilados:**

| Documento | Año | Pieza |
|-----------|-----|-------|
| *In Search of Crisis Alpha* (CME Group) | 2011 | Define el crisis alpha y su mecanismo (AMH de Lo) |
| *Crisis Alpha and Risk in Alternative Investment Strategies* (con Alexander Mende, RPM) | ~2011 | Tríada de riesgos: precio / liquidez / crédito |
| *Volatility Investment Fundamentals* (presentación) | 2012 | Volatilidad como clase de activo; riesgo vs incertidumbre |
| *Quantifying CTA Risk Management* (AIAR, Q1 2016) | 2016 | Factores de gestión de riesgo de los CTA |
| *Market Cycles and Managed Futures Drawdowns* (con Wen, AlphaSimplex) | 2025 | Ciclicidad de drawdowns por régimen de mercado |
| *Assessing Alpha in Macro Strategies* (con Demirbilek y Sun, AlphaSimplex) | 2026 | Alpha residual del macro global sobre factores baratos |

## 1. El crisis alpha: qué es y por qué existe

La idea-firma, ya en la página de [[kathryn-kaminski]], aquí con su mecanismo completo:

- **Definición operativa**: *"Crisis alpha opportunities are profits which are gained by exploiting the
  persistent trends that occur across markets during times of crisis"*. No es *market timing* predictivo: los
  CTA **no predicen** el inicio de las crisis, **reaccionan** tras su comienzo, posicionándose en tendencias
  multi-activo (bonos, divisas, metales, energía, short rates — no solo cortos de renta variable).
- **El mecanismo es la Adaptive Markets Hypothesis** (*AMH*) de Andrew Lo (2004-2006): la eficiencia del
  mercado no es estática, se rompe bajo estrés. La mayoría de inversores tiene sesgo largo (*long bias*) en
  renta variable; cuando cae, las pérdidas activan límites de drawdown, apalancamiento y riesgo (propios e
  institucionales) → venta sincronizada → desaparece la liquidez, salta el crédito, la valoración fundamental
  deja de importar → **tendencias persistentes** que los pocos jugadores adaptativos (CTA sistemáticos, sin
  sesgo largo, en futuros líquidos) capturan. Es el complemento cuantitativo de la tesis de "correlaciones a
  uno" de [[howard-marks]] y del antifragilidad de [[nassim-taleb]].
- **Por qué los futuros son el vehículo**: margen simétrico largo/corto (5-15%), liquidación diaria,
  *clearinghouse* (mínimo riesgo de contraparte), liquidez extrema. Los managed futures no se financian con
  riesgo de crédito ni de iliquidez — los dos riesgos que destruyen a los hedge funds en crisis (sección 3).

## 2. La descomposición del retorno: seguro de cola con carry, no alpha continuo

El hallazgo empírico central del paper CME (muestras 1994-2010 y 2000-2010, índices Barclay CTA, NewEdge CTA,
Barclay Systematic y una réplica naive de trend con 76 futuros):

- **Retorno CTA = tasa libre de riesgo + prima de riesgo (fuera de crisis) + crisis alpha**. Las crisis de
  renta variable ocupan ~15% del tiempo pero explican ~1/3 del retorno total (1994-2010); en 2000-2010, el
  40-50%. **Fuera de crisis, el índice medio rinde ≈ T-bill**: no hay alpha extra; el valor de la estrategia
  es concentrado en las colas.
- **Correlación condicional ≈ equity straddle** (*straddle* sobre renta variable): payoff positivo en la cola
  izquierda (crisis) y en la derecha (bull fuerte), plano en el medio — *sin pagar prima upfront* como las
  opciones. Es la pieza técnica que faltaba para el cuadrante defensivo de cartera actual y un sustituto
  estructural del *tail hedging* con puts.
- **Crisis alpha ≠ long volatility**: los CTA correlacionan con el VIX en crisis, pero necesitan
  **direccionalidad**; volatilidad alta sin tendencia (mercados *choppy*) hace perder al trend mientras el
  long vol gana. Matiz decisivo para el *sizing* y las expectativas (conecta con la sección 5).
- **Sharpe bajo en bull markets no es defecto**: en mercados alcistas los CTA ganan el interés del margen más
  una pequeña prima; el Sharpe de ventana corta **subestima** su valor de cartera, igual que **infla** a las
  estrategias con riesgos ocultos de crédito/liquidez (sección 3). Encaja con la crítica a métricas
  engañosas en [[riesgo-real-vs-volatilidad]] y [[la-apuesta-buffett-fondos-de-cobertura]].
- **Dos fuentes de habilidad del gestor CTA**: (a) mayor adaptabilidad en crisis → más crisis alpha; (b)
  encontrar dislocaciones fuera de crisis → prima de riesgo > T-bill. Marco de *due diligence* reutilizable.

> ⚠️ Cifras sin verificar contra el original (destilado mecánico). Los porcentajes 15%/33%/40-50% dependen de
> ventana e índice; ver sección 8.

## 3. La tríada de riesgos alternativos: por qué unos sufren y otros no (con Mende)

El artículo educativo de RPM reencuadra toda la industria: los alternativos **no son un bloque homogéneo**, son
paquetes de riesgo. Toda estrategia alternativa asume alguno de estos tres riesgos, con **proxies observables**:

| Riesgo | Quién lo asume | Proxy empírico | En crisis |
|--------|----------------|----------------|-----------|
| **Precio (direccional)** | CTA, equity short bias, macro global | Volatilidad [[reversion-a-la-media|/ reversión a la med]]ia alta | **Crisis alpha positivo** |
| **Liquidez** (proveer mercado, como un market maker que cobra bid-ask) | Arbitrajes, market neutral, merger arb | Autocorrelación serial alta (Getmansky-Lo-Makarov) | Pérdidas amplificadas |
| **Crédito** (comprar high-yield, vender low-yield = prestar al mercado) | Fixed income arb, distressed, long/short | Correlación con el TED spread | Pérdidas amplificadas |

- Evidencia 1997-2011: Barclay CTA Index con crisis alpha positivo; BarclayHedge Index (hedge funds agregados)
  **negativo** en cada crisis (LTCM 1998, burbuja 2000-02, GFC 2008, flash crash 2010). Por sub-estrategia:
  positivo en CTA y equity short bias; **neutral** en equity market neutral y global macro; negativo en
  convertibles, merger arb, event driven, distressed y fondos de fondos.
- **El Sharpe como detector de riesgo oculto**: las estrategias de riesgo de precio tienen Sharpe bajo y
  estable; las de crédito/liquidez muestran Sharpe **inflado en ventanas cortas** (retornos suaves con cola
  izquierda latente) que colapsa en crisis. Lección: evaluar alternativos por el riesgo que asumen, no por el
  Sharpe reportado.
- **Skill dual**: direccionales = seleccionar tendencias + adaptarse en crisis; no direccionales = seleccionar
  spreads + **evitar** trampas de liquidez/crédito. Es una taxonomía complementaria a
  [[taxonomia-de-oportunidades-de-inversion]] (BAIT de Mauboussin): aquí el eje no es el origen del edge sino
  el riesgo que lo financia.

## 4. La volatilidad como clase de activo (2012)

La presentación *Volatility Investment Fundamentals* añade la pata de instrumentación:

- **Riesgo vs incertidumbre (Knight)**: urna A (probabilidades conocidas) vs urna B (distribución
  desconocida). La volatilidad realizada mira atrás; la implícita **precia la urna B** — es el precio de la
  incertidumbre percibida.
- **Ciclos de volatilidad conductuales**: ciclo negativo (miedo → vol ↑ → riesgos ocultos expuestos → estrés
  postraumático → normalización) y positivo (exceso de confianza → vol ↓ → riesgos ocultos → burbuja →
  reversión). Base incluso fisiológica: testosterona correlaciona con P&L de traders, cortisol con
  incertidumbre (Coates et al.).
- **Distinción clave**: *"casi todas las técnicas para tail events están en volatilidad, pero no toda
  inversión en volatilidad trata tail events"*. Long vol ≈ comprar seguro (prima, downside limitado); short
  vol ≈ venderlo (prima, downside ilimitado). Los variance swaps son lineales en varianza y **convexos en
  volatilidad**; cotizan con prima sobre la vol ATM (*variance risk premium*).
- **Las opciones no son exposición pura a vol**: un straddle tiene *path dependence* y riesgo delta; la
  exposición limpia exige variance/volatility swaps o futuros sobre vol.
- **Falacia de la diversificación ingenua** (Billio-Getmansky-Pelizzon 2010): combinar beta barato con
  estrategias "absolute return" puede **aumentar** el riesgo idiosincrático, porque comparten riesgos latentes
  (crédito, liquidez, vol) que se correlacionan en crisis. Mismo diagnóstico que la sección 3: hay que
  diversificar *el riesgo*, no el número de líneas de la cartera.

## 5. Ciclicidad del trend: los drawdowns son régimen-dependientes (Kaminski & Wen 2025)

El paper más reciente sobre managed futures cuantifica 15 drawdowns >10% del SG Trend Index (2000-may 2025):

- **El trend es una estrategia cíclica**: drawdowns frecuentes pero menos profundos que los de renta variable;
  tras drawdowns profundos, la recuperación a 1-2 años tiende a ser fuerte (*mean reversion* de los retornos
  de la estrategia, no del mercado).
- **La duración del drawdown depende del régimen de renta variable**: los drawdowns largos y profundos del
  trend coinciden con S&P 500 **positivo** (mercados tranquilos o alcistas *choppy* → *whipsaws*); las
  recuperaciones rápidas coinciden con S&P **negativo** (estrés → tendencias claras → crisis alpha). Regímenes
  etiquetados: "CTA Winter" (post-GFC easing, nov-2010 a mar-2014, ~-18%, con S&P +64% mientras tanto), "Trade
  War 1.0" (2015-2019, ~-23%, el más largo), "Quant Crisis 2007" (24 días), "SVB 2023".
- **El drawdown en curso al escribir el paper ("Liberation Day") era el 2º más profundo desde 2000 (~-22%)
  pero corto en duración** (~281 días vs 981 de Trade War 1.0), sugiriendo recuperación potencialmente rápida
  si el régimen gira a estrés macro. Advertencia explícita del paper: el comportamiento pasado de las
  recuperaciones no garantiza resultados futuros.
- **Implicación práctica**: el "coste del seguro" del trend no es constante; se concentra en regímenes de
  calma/chop. La paciencia con la estrategia debe condicionarse al régimen, no al drawdown en sí — matiz que
  afina la nota de [[kathryn-kaminski]] sobre el coste en mercados alcistas.

> ⚠️ Fechas y magnitudes de la tabla de drawdowns sin verificar; una de ellas es internamente sospechosa
> (sección 8).

## 6. La ingeniería interna: factores de gestión de riesgo CTA (AIAR 2016)

*Quantifying CTA Risk Management* hace por la gestión de riesgo lo que Fama-French por el value: construye un
**baseline neutral** (82 mercados, *equal dollar risk*, tres horizontes de señal, target de vol fijo) y mide
cada decisión de gestión como un **factor** = desviación respecto al baseline (tocando solo la asignación de
riesgo, no la señal):

- **Cuatro factores**: **liquidez** (sobreponderar mercados más líquidos), **correlación** (recortar riesgo en
  mercados con alta contribución correlacional neta), **volatilidad** (lookback más lento para el
  *vol-targeting* → [[gestion-de-posiciones]]) y **capacidad** (cómo realoca riesgo una cartera grande al
  chocar con límites de posición/mercado).
- Resultados 2001-2015 sobre el Newedge Trend Index: cargas significativas en correlación (β ≈ 1,3) y
  capacidad (β ≈ 0,5); liquidez y volatilidad ≈ cero. El factor capacidad tuvo **Sharpe negativo (~-0,3)** en
  el periodo — la realocación por límites de capacidad restó ~1% anual frente al baseline — pero no es
  monótono: en 2014 ayudó. Kaminski lo interpreta como **tracking error** frente al benchmark, no como drag
  estructural.
- El factor correlación se vuelve consistentemente positivo **post-2008** (cambio de régimen en correlaciones
  cross-asset): ajustar riesgo por correlación habría mejorado la cartera tras la GFC.
- Contraste con Baltas & Kosowski (2013), que no hallaron efecto de capacidad con límites simples: la
  diferencia es modelar límites reales (exchange, position, VaR). La lección metodológica: **cómo se modela la
  restricción determina si se detecta su coste**.

> ⚠️ Betas, t-stats y Sharpes sin verificar contra el original.

## 7. Evaluar gestores: alpha residual sobre factores baratos (Demirbilek, Kaminski & Sun 2026)

El paper más reciente formaliza la pregunta que queda tras aceptar el crisis alpha: **¿qué añade un gestor de
macro global sobre lo replicable con ETFs?** (renta variable + trend vía SG Trend Index):

- **El macro global es la única categoría de hedge funds con correlación alta a la vez con renta variable y
  con trend following** — pero a nivel de gestor individual la exposición varía drásticamente (clusters de
  carga equity y de carga trend). Es heterogeneidad real, no etiqueta.
- **Tras ajustar ambos factores, el alpha residual medio 2016-2025 es positivo pero modesto** (Sharpe de alpha
  ~0,2-0,3) y con dispersión enorme entre gestores.
- **Sesgo de supervivencia**: los fondos muertos (2010-2015) concentran alphas negativos; las bases de datos
  de vivos inflan el alpha aparente. Ajuste obligatorio al evaluar *track records* →
  [[sesgo-de-superviviente]].
- **Comisiones**: management fee alto correlaciona con alpha medio mayor, pero con dispersión aún más amplia
  (las *performance fees*, no observadas, añaden varianza) → comisión alta ≠ alpha garantizado.
- **La herramienta nueva: *isotropic Sharpe frontiers***. Descomponiendo retorno = (1−x)·alpha + x·benchmark
  con alpha ⊥ benchmark, de la correlación y los Sharpes observados se **infiere el Sharpe del alpha no
  correlacionado**. Ejemplo del apéndice: un gestor con Sharpe 0,7 y ρ=0,7 con el benchmark trend (Sharpe 0,7)
  solo aporta alpha ortogonal de Sharpe ~0,3; e invertido, **el trend barato sigue aportando alpha ortogonal
  incluso sobre un gestor que ya tiene trend dentro** — argumento cuantitativo para mantener una asignación
  directa a trend en [[asignacion-de-activos]] aunque se tenga macro.
- **Regla operativa para Carlos**: el macro global solo merece comisión si demuestra alpha ortogonal
  persistente a los factores ETF-izables; si no, replicar factores baratos y filtrar gestores por frontera de
  Sharpe con alpha > 0,3 ajustado por supervivencia. Es el mismo debate *factor vs alpha* de
  [[cliff-asness|AQR]] y [[eficiencia-de-mercado]], resuelto con una métrica visual.

> ⚠️ Sharpes, correlaciones y magnitudes de alpha sin verificar contra el original.

## 8. Evolución, tensiones y discrepancias anotadas

- **Arco 2011 → 2026**: de *definir* el crisis alpha (CME 2011) y clasificar alternativos por riesgo (RPM
  2011), a *instrumentar* la volatilidad (2012), *ingenierilizar* la gestión de riesgo CTA (2016), *ciclar*
  los drawdowns por régimen (2025) y *auditar* el alpha de gestores contra factores baratos (2026). La agenda
  es acumulativa: cada paper responde la objeción que dejaba el anterior.
- **Global macro: ¿neutral o con alpha?** El artículo de 2011 con Mende clasifica el macro global como crisis
  alpha **neutral**; el paper de 2026 le encuentra alpha residual medio **positivo** sobre equity + trend
  (2016-2025). No es contradicción directa (métricas y ventanas distintas: crisis alpha condicional vs alpha
  residual incondicional), pero la lectura descuidada induce a error; se conservan ambas.
- **Cuota del crisis alpha: 33% vs 40-50%**. El paper CME reporta ~1/3 del retorno (Barclay 1994-2010) y
  40-50% (2000-2010). Son ventanas distintas del mismo documento — la década 2000 fue excepcionalmente rica en
  crisis —; anotado para no citar una cifra sin su ventana.
- **Fecha sospechosa en el paper 2025**: el destilado sitúa el inicio del drawdown "Liberation Day" en
  **abr-2024**, pero el nombre remite a los aranceles de abr-2025; la tabla lo cierra en may-2025 con ~281
  días. Hay una inconsistencia interna nombre/fechas **pendiente de verificación contra el original**; no
  citar la fecha sin comprobarla.
- **"Trend necesita tendencia, no volatilidad"** aparece en dos sabores: 2011 (crisis alpha ≠ long vol) y 2025
  (drawdowns prolongados en mercados tranquilos/choppy). Es la misma tesis vista desde payoff y desde ciclo —
  coherencia interna de 14 años.
- **Filename "Kaminsky" (AIAR 2016)**: el archivo original está mal escrito; la autora es Kaminski. Anotado
  para trazabilidad.

## 9. Marcos reusables con su lógica

| Marco | Lógica |
|-------|--------|
| **Crisis alpha (AMH)** | Crisis = venta sincronizada de inversores con sesgo largo y límites de riesgo → tendencias persistentes multi-activo que capturan los sistemáticos sin sesgo largo. |
| **Descomposición rf + prima + crisis alpha** | Fuera de crisis el índice CTA ≈ T-bill; el valor está en las colas. Sharpe de ventana corta lo infravalora. |
| **Equity straddle condicional** | Payoff de colas simétrico sin prima upfront; diversificación endógena. |
| **Crisis alpha ≠ long vol** | El trend necesita direccionalidad; vol alta sin tendencia lo castiga. |
| **Tríada precio/liquidez/crédito** | Toda estrategia alternativa asume uno de los tres; solo el riesgo de precio direccional paga en crisis. Proxies: reversión, autocorrelación, TED spread. |
| **Sharpe como detector de riesgo oculto** | Sharpe alto y suave en ventana corta = probable riesgo de crédito/liquidez latente. |
| **Riesgo vs incertidumbre (Knight)** | Vol realizada = riesgo medido; vol implícita = precio de la urna B. |
| **Falacia de diversificación ingenua** | Sumar "absolute return" con riesgos latentes comunes aumenta el riesgo idiosincrático en crisis. |
| **Drawdowns régimen-dependientes** | Largos con S&P positivo (chop), recuperaciones rápidas con S&P negativo; drawdown profundo → retorno 1-2a posterior alto. |
| **Factores de gestión de riesgo CTA** | Baseline equal-risk + tilts de liquidez/correlación/vol/capacidad; separa decisión de riesgo de señal. |
| **Isotropic Sharpe frontier** | De correlación + Sharpes se infiere el Sharpe del alpha ortogonal; filtro de gestores contra factores baratos. |

## Encaje en el cerebro

Kaminski es la voz cuantitativa del bloque defensivo/divergente: da el mecanismo (AMH de Lo), la evidencia
(descomposición por crisis, 15 drawdowns etiquetados por régimen) y las herramientas (tríada de riesgos,
frontera isotrópica de Sharpe) para lo que [[nassim-taleb]] postula filosóficamente (barbell, convexidad) y
[[cliff-asness|AQR]] documenta como factor (trend/momentum, [[analisis-tecnico-y-tendencia]]). Su aporte único
frente al resto del cerebro: **trata la diversificación como una propiedad condicional a crisis que hay que
medir, no como una correlación media**. Para cartera actual y [[asignacion-de-activos]] su pregunta
operativa es: *¿qué parte de la cartera gana precisamente cuando todo lo demás pierde, cuánto cuesta en calma,
y estoy pagando comisión por alpha ortogonal o por un factor que puedo comprar en ETF?*
