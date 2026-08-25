---
title: "Kathryn Kaminski"
tipo: inversor
cobertura: parcial
tags: [kathryn-kaminski, crisis-alpha, managed-futures, trend, cobertura, mujeres]
fecha: 2026-07-26
fuentes: []
---

# Kathryn Kaminski

Ph.D. en finanzas (MIT), investigadora de **managed futures / trend-following** (RPM, AlphaSimplex). Aporta al
cerebro un concepto genuinamente nuevo — el **crisis alpha** — y es una de las **voces de mujer** que
corrigen el sesgo del corpus. Vía *In Search of Crisis Alpha* y sus papers sobre CTA/gestión de riesgo.

## Idea-firma: el *crisis alpha*

- **La mayoría de estrategias sufren pérdidas devastadoras justo cuando la bolsa cae** — precisamente cuando
  más falta hace la diversificación. El *crisis alpha* es el retorno que **algunas estrategias de futuros
  gestionados (trend-following) generan durante las crisis**, porque siguen tendencias (típicamente cortas en
  renta variable, largas en bonos/dólar) mientras todo lo demás se hunde de forma correlacionada.
- **Por qué funciona**: las crisis no son instantáneas, se desarrollan en **tendencias** que el trend-following
  captura; y la diversificación tradicional falla cuando "todas las correlaciones van a uno" ([[howard-marks]],
  [[riesgo-real-vs-volatilidad]]) — el trend es de los pocos que **sí** se descorrelaciona en el pánico.
- Es la evidencia empírica que respalda el **momentum/trend** como el único factor de *timing* con soporte
  ([[cliff-asness|AQR]], [[analisis-tecnico-y-tendencia]]) — pero aplicado como **cobertura de cartera**, no
  como trading.

## Estrategias divergentes vs. convergentes (su marco de riesgo)

Su distinción clave para entender qué protege en una crisis:

- **Estrategias convergentes** (la mayoría: value, carry, arbitraje, vender volatilidad): apuestan a que las
  cosas **vuelven a la normalidad**; ganan poco y constante, y **pierden mucho en las crisis** (cuando la
  "normalidad" se rompe). Perfil de retorno con cola izquierda gorda.
- **Estrategias divergentes** (trend-following/managed futures): apuestan a que las tendencias **continúan**;
  pierden poco y a menudo en mercados laterales, pero **ganan mucho en las crisis** (cola derecha) — el *crisis
  alpha*. Perfil de "seguro que a veces cobra prima".
- La cartera de casi todo el mundo (incluida la de Carlos) es **toda convergente**: value, calidad, tangibles,
  tech — todas pierden juntas en el pánico. Añadir una pizca de estrategia **divergente** es lo que de verdad
  diversifica ([[nassim-taleb]]: el barbell; [[paridad-de-riesgo-y-diversificacion]]).
- **Gestión de riesgo por volatilidad** (su trabajo sobre CTA): dimensionar posiciones por su volatilidad
  (vol-targeting), no por capital — otra pieza que faltaba tras el stub de Van Tharp. → [[gestion-de-posiciones]].

## Cómo encaja (y qué le dice a Carlos)

- **Llena el cuadrante defensivo vacío**: la cartera actual de Carlos tiene **0% en el cuadrante de
  deflación/crisis**. El crisis alpha (managed futures) es exactamente la clase de activo que rinde cuando su
  ~45% de tangibles + tech cae junto. Complemento natural de la [[asignacion-de-activos]] y del All Weather de
  [[paridad-de-riesgo-y-diversificacion|Dalio]] — un "seguro" que, a diferencia de comprar puts, **puede tener
  retorno esperado positivo**.
- **Matiz honesto**: en mercados alcistas tranquilos el trend suele restar (coste del seguro); se justifica por
  lo que aporta en las colas ([[nassim-taleb]]). No es para trading, es para **construcción de cartera**.
- **Con Cárpatos** (que analiza la cartera permanente) y [[javier-dv|Javier del Valle]] (Santo Grial de
  correlación): Kaminski es la pieza técnica que faltaba sobre **qué** descorrelaciona de verdad en crisis.

## Material en `raw/` (cobertura)

`raw/`: *In Search of Crisis Alpha*, *Volatility Investment Fundamentals*, *CTA Risk Management* (AIAR) y papers de [[ciclos-de-mercado|ciclos de mercado]]/managed futures — **ingeridos** en el marco de arriba; el detalle cuantitativo de los papers queda como **referencia**.

## Ampliación (2026-07-26): los seis papers destilados en detalle

Los 6 papers de la carpeta de Kaminski quedan consolidados en
[[ensayos-trend-y-crisis-alpha]] (página de conjunto en `wiki/fuentes/kathryn-kaminski/`). Lo que añaden sobre
el marco de arriba, sin cambiarlo:

- **Mecanismo completo del crisis alpha**: la Adaptive Markets Hypothesis de Andrew Lo — la crisis sincroniza
  la venta forzada de inversores con sesgo largo y límites de riesgo, y los CTA reaccionan (no predicen) a las
  tendencias multi-activo resultantes (bonos, divisas, metales, energía; no solo cortos de bolsa).
- **Descomposición del retorno**: fuera de crisis el índice CTA rinde ≈ T-bill; las crisis (~15% del tiempo)
  explican ~1/3 a la mitad del retorno según ventana. Correlación condicional tipo *equity straddle* sin pagar
  prima. Crisis alpha ≠ long vol: el trend necesita direccionalidad, no solo volatilidad.
- **Tríada de riesgos (con Mende)**: toda estrategia alternativa asume riesgo de precio, liquidez o crédito;
  solo el direccional de precio paga en crisis. El Sharpe de ventana corta infla a las de crédito/liquidez.
- **Ciclicidad (con Wen, 2025)**: los drawdowns del trend son régimen-dependientes — largos con bolsa alcista
  tranquila ("CTA Winter", "Trade War 1.0"), recuperaciones rápidas con bolsa en estrés; tras drawdowns
  profundos, retornos a 1-2 años típicamente fuertes. Afina el "matiz honesto" de arriba: el coste del seguro
  se concentra en regímenes de calma/chop.
- **Ingeniería CTA (2016)**: la gestión de riesgo se cuantifica como factores (liquidez, correlación,
  volatilidad, capacidad) sobre un baseline *equal dollar risk*; correlación y capacidad son las cargas
  significativas del Newedge Trend Index.
- **Auditoría de gestores (2026)**: el macro global debe justificar su comisión con alpha ortogonal a factores
  ETF-izables (equity + trend); la herramienta es la *isotropic Sharpe frontier*, que infiere el Sharpe del
  alpha no correlacionado. Alpha medio residual positivo pero modesto y muy disperso; el sesgo de
  supervivencia lo infla.

> ⚠️ Todos estos papers son cuantitativos y sus cifras provienen de destilados mecánicos **pendientes de
> verificación selectiva contra los originales** (detalle y discrepancias en la página de conjunto).

## Ver también

[[asignacion-de-activos]] · [[paridad-de-riesgo-y-diversificacion]] · [[analisis-tecnico-y-tendencia]] ·
[[riesgo-real-vs-volatilidad]] · [[nassim-taleb]] · cartera actual · [[abby-joseph-cohen]]
