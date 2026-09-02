---
title: "Sizing de posiciones por conviccion"
tipo: sintesis
tags: [riesgo, posicion, asignacion]
fecha: 2026-08-30
agente: ines-torres
squad: Estrategia & Filosofia (Ines)
status: durable
---

# Sizing de posiciones por conviccion

> Fuentes base: ExpectedValue (Fractional Kelly) · QuantOracle (Kelly vs Fixed-Fractional vs Optimal-f) · MacLean, Thorp & Ziemba (Good and Bad Properties of Kelly, 2010) · Pomegra (Conviction Weighting) · Atlas Peak Research (Kelly en mercados financieros, 2026) · AI Fin Hub (Conviction-Scaled Kelly, 2026)

## 1. Resumen ejecutivo

El *sizing* (tamano de posicion) es la unica decision de gestion que decide cuanto capital arriesgar por idea. Determina la supervivencia tanto como la seleccion de activos. El marco teorico dominante es el **criterio de Kelly** (*Kelly criterion*): la fraccion de bankroll que maximiza el crecimiento geometrico a largo plazo cuando se conoce con exactitud la ventaja (edge). Su forma binaria es `f* = (b·p − q) / b`, donde `p` es la probabilidad de ganar, `q = 1−p` y `b` el pago neto; en forma continua, para una estrategia con retorno esperado μ y varianza σ², `f* ≈ μ / σ²` ([withengine](https://www.withengine.ai/blog/kelly-vs-fixed-fractional-sizing); [Good_Bad_Kelly](https://www.stat.berkeley.edu/%7Ealdous/157/Papers/Good_Bad_Kelly.pdf)).

Tres cifras clave que todo inversor de largo plazo deberia internalizar:
- **Kelly completo (full Kelly) retiene ~75% del crecimiento con half-Kelly y ~43,75% con quarter-Kelly**, porque el crecimiento geometrico escala como `k·(2−k)` respecto a la fraccion `k` ([expectedvalue](https://expectedvalue.co.uk/blog/fractional-kelly/); [aifinhub](https://aifinhub.io/articles/conviction-scaled-kelly/)).
- **Kelly es extremadamente sensible al error de estimacion**: si sobreestimas tu edge un 20%, Kelly sobreapuesta ~44% y la tasa de crecimiento cae a cero; al 30% de sobreestimacion el crecimiento se vuelve negativo ([quantoracle](https://quantoracle.dev/compare/kelly-vs-fixed-fractional-vs-optimal-f)).
- **Errores en las medias pesan ~20x mas que en covarianzas y ~2x que en varianzas** a la hora de elegir cartera; para un inversor log (riesgo casi cero) la ratio es ~100:3:1 ([atlaspeak](https://www.atlaspeakresearch.com/report/07bf72); [webhomes-KellyZiemba](https://webhomes.maths.ed.ac.uk/mckinnon/blackouts/StochOptFinanceAndEnergySpringer/Chap1_KellyZiemba.pdf)).

Importa al inversor de largo plazo porque el tamano de posicion es el puente entre "tengo una buena idea" y "no quiebro antes de que la idea funcione". Conviction (conviccion) sin tamano es ruido; conviccion con tamano mal calibrado es ruina.

## 2. Estructura / modelo

El modelo practico no es "aplica Kelly", sino un proceso por capas que traduce conviccion en un numero de capital, con guardarrailes.

**Paso A — Estimar el edge.** Necesitas `p` (hit rate / probabilidad de la tesis) y `b` (pago asimetrico). En renta variable esto rara vez es observable; es una creencia, no un dato ([withengine](https://www.withengine.ai/blog/kelly-vs-fixed-fractional-sizing)).

**Paso B — Reducir (shrink) la conviccion antes de dimensionar.** Browne & Whitt y Rising & Wyner tratan el edge como variable aleatoria: la conviccion bruta se convierte en una *posterior* ajustada por base rates, calidad de la muestra y correlacion ([atlaspeak](https://www.atlaspeakresearch.com/report/07bf72)). Regla empirica: si el edge viene de un backtest, asume que el edge real es 1/3 a 1/2 del backtested ([expectedvalue](https://expectedvalue.co.uk/blog/fractional-kelly/)).

**Paso C — Tiers de conviccion (mapeo discreto).** En vez de una funcion suave de `p`, se mapea a cubos con su propia fraccion de Kelly y un *cap* por operacion. Ejemplo documentado:

| Tier (conviccion) | p estimado | Fraccion de Kelly | Cap por operacion |
|---|---|---|---|
| LOW | < 0,55 | 0,0 (saltar) | — |
| MEDIUM | 0,55–0,70 | 0,05 | — |
| HIGH | 0,70–0,85 | 0,15 | — |
| SUPREME | ≥ 0,85 | 0,25 | 4% del bankroll |

Fuente: AI Fin Hub, *Conviction-Scaled Kelly*, 2026 ([aifinhub](https://aifinhub.io/articles/conviction-scaled-kelly/)).

**Paso D — Capas de riesgo (binding constraint).** El tamano final es el minimo entre Kelly robusto y los limites externos: drawdown, liquidez, margen, factor y gobernanza ([atlaspeak](https://www.atlaspeakresearch.com/report/07bf72)). Practicos anaden caps duros: riesgo por operacion ≤ 1,5–2% del capital; riesgo por dia con stop si se pierde 3–4% ([nexusfi](https://nexusfi.com/a/risk-management/optimal-f-position-sizing)).

**Paso E — Calibrar por evidencia.** < 500 observaciones out-of-sample → quarter-Kelly; 500–2.000 → half-Kelly; backtest puro → asume edge 1/3–1/2 ([expectedvalue](https://expectedvalue.co.uk/blog/fractional-kelly/)).

## 3. Numeros clave

| Concepto | Cifra | Fuente |
|---|---|---|
| Crecimiento retenido half-Kelly | ~75% del full Kelly | [expectedvalue](https://expectedvalue.co.uk/blog/fractional-kelly/) |
| Crecimiento retenido quarter-Kelly | ~43,75% del full Kelly | [aifinhub](https://aifinhub.io/articles/conviction-scaled-kelly/) |
| Sobreestimacion edge 10% → sobreapuesta | ~20%, crecimiento a la mitad | [quantoracle](https://quantoracle.dev/compare/kelly-vs-fixed-fractional-vs-optimal-f) |
| Sobreestimacion edge 20% → sobreapuesta | ~44%, crecimiento a cero | [quantoracle](https://quantoracle.dev/compare/kelly-vs-fixed-fractional-vs-optimal-f) |
| Peso error en medias vs covarianzas | ~20:1 (≈100:3:1 para log) | [atlaspeak](https://www.atlaspeakresearch.com/report/07bf72) |
| Drawdown esperado quarter-Kelly (edge p=0,55, b=1,5, 1000 trades) | 35–50% max; cap 4% lo lleva a ~35% | [aifinhub](https://aifinhub.io/articles/conviction-scaled-kelly/) |
| Simulacion Ziemba-Hausch (700 apuestas, edge 14%, $1.000) | Full Kelly: media $524k, 12,4% pierde, minimo $4; Half: media $19k, 3,5% pierde; 1/8: media $2k, 1,1% pierde, nunca pierde >50% | [Good_Bad_Kelly (UC Irvine)](https://escholarship.org/content/qt4s80j9sv/qt4s80j9sv.pdf) |
| Princeton Newport (Thorp), ~20 anos | ~15% anual, baja volatilidad, fractional Kelly + diversificacion | [expectedvalue](https://expectedvalue.co.uk/blog/fractional-kelly/) |

Nota: estas son cifras de simulaciones y estudios en ingles; no localice un estudio equivalente en espanol con datos de carteras reales de pequeño inversor.

## 4. Posicion / marco conceptual

El tamano por conviccion es, en el fondo, una respuesta a dos verdades incómodas: (1) **no sabes tu edge con precision**, y (2) **la supervivencia importa mas que el optimo teorico**. Por eso el Kelly completo es casi siempre el limite superior, no el objetivo ([atlaspeak](https://www.atlaspeakresearch.com/report/07bf72)).

El marco se conecta con el resto del Cerebro:
- Con [[margen-de-seguridad]]: el "shrink" del edge es el equivalente cualitativo de exigir precio; conviccion alta + precio justo justifica mas tamano.
- Con concentracion vs diversificacion: Buffett opera cercano a full Kelly (sin apalancarse) y Keynes como ~80% Kelly con utilidad `−w^−0,25`; ambos pocas posiciones, poca diversificacion ([Good_Bad_Kelly](https://www.stat.berkeley.edu/%7Ealdous/157/Papers/Good_Bad_Kelly.pdf); [Wiley Concentrated Investing](https://onlinelibrary.wiley.com/doi/10.1002/9781119020516.ch4)).
- Con [[fosos-economicos]]: la conviccion sostenible (SUPREME) solo existe cuando entiendes el foso; sin el, el tier HIGH es autoengano.
- Con edge ventaja y probabilidad conviccion: el input `p` es una creencia que debe actualizarse, no un hecho.

Ventaja competitiva del enfoque por tiers: fuerza la **honestidad intelectual**. "Asigno 85% de confianza" se traduce en un numero de capital y se enfrenta a la realidad de que el 15% de fallo es un golpe, no ruido ([pomegra](https://pomegra.io/learn/library/track-c-strategies/long-term-investing/chapter-09-position-sizing/conviction-weighting)).

## 5. Catalizadores y riesgos

**Riesgos (el lado que mata carteras):**
- *Error de calculo / overbetting*: la funcion Kelly es convexa en el error; pequenos errores en `p` o `b` producen grandes sobreapuestas ([withengine](https://www.withengine.ai/blog/kelly-vs-fixed-fractional-sizing); [quantoracle](https://quantoracle.dev/compare/kelly-vs-fixed-fractional-vs-optimal-f)).
- *Optimal-f de Ralph Vince (1990)*: ancla el tamano en la peor perdida de la muestra; suele ser mas agresivo que Kelly y asume que la peor perdida ya la viste. El regimen cambia y la nueva peor perdida quiebra la cuenta ([luxalgo](https://www.luxalgo.com/library/concept/optimal-f/); [nexusfi](https://nexusfi.com/a/risk-management/optimal-f-position-sizing)).
- *Correlacion oculta*: Kelly asume apuestas independientes; en crisis las correlaciones → 1 y el drawdown compuesto se dispara ([atlaspeak](https://www.atlaspeakresearch.com/report/07bf72)).
- *Comportamiento*: el math no enfrenta redemption calls ni capitulacion psicologica; drawdowns de 30–50% botan al inversor antes de lo teorico ([aifinhub](https://aifinhub.io/articles/conviction-scaled-kelly/)).

**Catalizadores / novedades recientes (Google News RSS):**
- Rankia, podcast "#100 Ed Thorp: del blackjack a Wall Street" (2025-03-28) revive la divulgacion en espanol del criterio de Kelly aplicado a mercados ([Rankia via Google News](https://news.google.com/rss/search?q=Kelly+criterion&hl=es)).
- Binance (2026-03-01) sobre apostadores cuantitativos en Polymarket: el Kelly migrate a mercados de prediccion donde `p` es mas observable ([Binance via Google News](https://news.google.com/rss/search?q=Kelly+criterion&hl=es)).
- TradingView (2026-04-08) sobre robots de trading con IA (AccuQuant) que aplican Kelly sistematico: el marco pasa de manual a algo empaquetado, lo que eleva el riesgo de usar fracciones mal calibradas por quien no entiende el input.

## 6. Valoracion / implicaciones practicas

Para el inversor particular de largo plazo (estilo Cerebro):
1. **No uses full Kelly nunca.** Tratalo como techo. Default = quarter-Kelly si tu edge es reciente/backtest; half-Kelly si tienes >500 observaciones reales ([expectedvalue](https://expectedvalue.co.uk/blog/fractional-kelly/)).
2. **Traduce conviccion a tiers con caps.** Bajo 3%, medio 6%, alto 9–12%, tope duro 12–15%; >20% ya es concentracion, no conviccion ([pomegra](https://pomegra.io/learn/library/track-c-strategies/long-term-investing/chapter-09-position-sizing/conviction-weighting)).
3. **Cap por operacion 1,5–2% y revisa trimestralmente**; la conviccion no es estatica, hay que recortar cuando baja ([nexusfi](https://nexusfi.com/a/risk-management/optimal-f-position-sizing); [pomegra](https://pomegra.io/learn/library/track-c-strategies/long-term-investing/chapter-09-position-sizing/conviction-weighting)).
4. **Aplica "conviction discount"**: si te asignas 85% de confianza, dimensiona como si fueras 75% ([pomegra](https://pomegra.io/learn/library/track-c-strategies/long-term-investing/chapter-09-position-sizing/conviction-weighting)).

Senal de alerta: si el riesgo total agregado supera ~30% del bankroll en un dia, estas sobreapostando el conjunto; si muchas posiciones pegan el cap, tu limite es el cap, no la formula ([aifinhub](https://aifinhub.io/articles/conviction-scaled-kelly/)).

## 7. Veredicto para el inversor

El Kelly completo es una curiosidad peligrosa disfrazada de optimo. El tamano por conviccion honesto es: estima el edge con humildad, reducelo (shrink), aplica una fraccion de Kelly (quarter/half), impon caps duros y recalibra por evidencia. Quien hace eso captura la mayoria del crecimiento geometrico con una fraccion del riesgo de ruina. Quien salta directo a full Kelly o optimal-f suele financiar la leccion con su propio capital.

## 8. Segundo orden

- **El error de calculo es el verdadero riesgo, no la volatilidad.** Esto choca con la intuicion de [[diversificacion]] como protector: diversificar posiciones mal calibradas no arregla un `p` sobreestimado; de hecho, el error en medias domina 20:1 sobre covarianzas ([atlaspeak](https://www.atlaspeakresearch.com/report/07bf72)). La primer orden es "reparte bien"; la segunda orden es "tu mayor riesgo es que no sabes tu edge".
- **Conviccion alta frecuente = senal de sobreconfianza.** Si Carlos marca 10 ideas como HIGH, la regla de Pomegra dice que miente sobre su propia expertise; el tier HIGH debe ser raro ([pomegra](https://pomegra.io/learn/library/track-c-strategies/long-term-investing/chapter-09-position-sizing/conviction-weighting)). Esto conecta con [[circulo-de-competencia]]: solo dimensiona grande donde el circulo es real.
- **Tensión con [[horizonte-largo-plazo]] y [[drawdown]]**: full Kelly maximiza crecimiento pero con drawdowns de 50%+ que pueden forzar venta en el peor momento; el inversor debe dimensionar al drawdown que *puede* sobrevivir, no al que la formula tolera ([aifinhub](https://aifinhub.io/articles/conviction-scaled-kelly/)).
- **Efecto en [[asignacion-de-capital]] agregada**: los tiers de conviccion pueden empujar a 40% de liquidez si pocas ideas son HIGH; eso es sano, no ocioso, y choca con la presion de estar siempre invertido.
- **Donde choca con otras fuentes**: Vince/optimal-f vende "crecimiento maximo"; la literatura academica (Thorp, Ziemba) lo trata como techo diagnostico, no como tamano vivo ([luxalgo](https://www.luxalgo.com/library/concept/optimal-f/); [Good_Bad_Kelly](https://www.stat.berkeley.edu/%7Ealdous/157/Papers/Good_Bad_Kelly.pdf)).
- **Que vigilar Carlos a 3–5 anos**: (a) si sus tesis de [[fosos-economicos]] empiezan a correlacionar en crisis, el cap agregado debe bajar; (b) la llegada de Kelly "empaquetado" en bots (TradingView, 2026) puede inflar la gente que sobreapuesta sin entender el input; (c) revisar cada trimestre si la conviccion de cada posicion sigue justificando el tamano o se ha convertido en anclaje.

## 9. Fuentes consultadas
1. ExpectedValue — Fractional Kelly: Why Half Kelly Is the Smart Default (2026-05-28) - https://expectedvalue.co.uk/blog/fractional-kelly/
2. QuantOracle — Kelly vs Fixed Fractional vs Optimal-f (2026-05-11) - https://quantoracle.dev/compare/kelly-vs-fixed-fractional-vs-optimal-f
3. AI Fin Hub — Conviction-Scaled Kelly Bet Sizing (2026-04-20) - https://aifinhub.io/articles/conviction-scaled-kelly/
4. Atlas Peak Research — The Kelly Criterion in Financial Markets (2026-04-25) - https://www.atlaspeakresearch.com/report/07bf72
5. Pomegra Learn — Conviction Weighting - https://pomegra.io/learn/library/track-c-strategies/long-term-investing/chapter-09-position-sizing/conviction-weighting
6. MacLean, Thorp & Ziemba — The Good and Bad Properties of Kelly and Fractional Kelly (2010) - https://www.stat.berkeley.edu/%7Ealdous/157/Papers/Good_Bad_Kelly.pdf
7. UC Irvine (escolarship) — Empirical Fractional Kelly (Ziemba & Hausch simulation) - https://escholarship.org/content/qt4s80j9sv/qt4s80j9sv.pdf
8. Kelly & Ziemba — Using the Kelly Criterion for Investing (capítulo) - https://webhomes.maths.ed.ac.uk/mckinnon/blackouts/StochOptFinanceAndEnergySpringer/Chap1_KellyZiemba.pdf
9. NexusFi Academy — Optimal F Position Sizing (2026-05-28) - https://nexusfi.com/a/risk-management/optimal-f-position-sizing
10. LuxAlgo — Optimal F concept - https://www.luxalgo.com/library/concept/optimal-f/
11. Engine — Sizing positions by Kelly versus fixed-fractional, in practice (2026-06-14) - https://www.withengine.ai/blog/kelly-vs-fixed-fractional-sizing
12. Wiley — Concentrated Investing: Warren Buffett the Kelly-Betting Value Investor - https://onlinelibrary.wiley.com/doi/10.1002/9781119020516.ch4
13. Google News RSS — "Kelly criterion" (Rankia #100 Ed Thorp 2025-03-28; Binance Polymarket 2026-03-01) - https://news.google.com/rss/search?q=Kelly+criterion&hl=es

---

## Nota de evolucion 2026-08-30 (elisa)

Asenso a pagina durable del wiki tras revision de la CIO. La sonde de origen (scratchpad/sondas-2026-08-30/tamano-posicion-riesgo.md) se valido: estructura completa de 9 secciones, seccion de segundo orden presente y >=6 fuentes reales. No se reescribio ninguna afirmacion previa. Trailer de commit: Agente: elisa.

## Ver también

- [[apalancamiento-riesgo]] · [[cartera-todo-tiempo]] · [[estres-pruebas-cartera]] · [[itau-unibanco]] · [[lloyds]] · [[playbook-drawdown-30]] · [[regimen-correlacion-falla]]

## Nota de evolución 2026-08-31 (cerebro-enlaza)

Red de conocimiento: enlace de la hornada durable 2026-08-30 en red neuronal interna (sección «Ver también»). Verificación previa: 41 páginas ascendidas con `status: durable` y validación CIO (9 secciones, 2º orden, ≥6 fuentes), frontmatter canónico, 0 errores. Hallazgo: `itau-unibanco` duplicado en `empresas/` y `analisis-acciones/` (colisión de slug; pendiente decisión de Carlos). Trailer: Agente: cerebro-enlaza.
