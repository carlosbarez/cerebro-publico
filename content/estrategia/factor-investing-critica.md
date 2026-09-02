---
title: "Factor investing: una critica honesta"
tipo: analisis
tags: [factores, smart-beta, critica]
fecha: 2026-08-31
agente: ines
squad: Estrategia & Filosofia (Ines)
status: sonde
---

# Factor investing: una critica honesta

> Fuentes base: AQR "Trading Costs" (Working Paper, 2024) — https://www.aqr.com/Insights/Research/Working-Paper/Trading-Costs ; Asness et al. "Size Matters, If You Control Your Junk", JFE — https://www.aqr.com/Insights/Research/Working-Paper/Size-Matters-If-You-Control-Your-Junk ; Harvey, Liu & Zhu (2016), JFE — https://www.sciencedirect.com/science/article/pii/S0304405X15002361 ; McLean & Pontiff (2016), JF — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2156623 ; Cliff Asness en "Capitalism and Freedom" (Hoover Institution), 2024 — https://www.youtube.com/watch?v=2QrPCewZO9E

## 1. Resumen ejecutivo

El *factor investing* (inversion por factores) consiste en inclinar una cartera sistematicamente hacia fuentes de rentabilidad que han sido persistentes y compensadas a traves del tiempo, en lugar de seleccionar valores de forma discrecional. Los factores "clasicos" son **value** (barato), **momentum** (lo que sube tiende a subir), **quality** (calidad/rentabilidad), **size** (small-cap) y **low volatility** (baja volatilidad). El marco teorico nace con Fama & French (1993) y se populariza como *smart beta* via ETFs.

Por que importa al inversor de largo plazo: un tilt (inclinacion) de factores puede mejorar el perfil riesgo/retorno sin cargo de alpha discrecional, pero su evidencia es fragil en los extremos. Dos cifras clave honestas:
- Harvey, Liu y Zhu (2016) documentan **316 factores** publicados en la literatura y concluyen que, por *multiple testing* (pruebas multiples), el umbral de significancia deberia subir de t>2 a **t>3**; la inmensa mayoria de factores publicados no lo supera ([4]).
- McLean y Pontiff (2016) miden que el retorno de las anomalias cae aproximadamente **26% fuera de muestra tras su publicacion** y su t-stat cae ~1,15; es decir, la propia difusion arbitra la anomalia ([5]).

El angulo obligatorio de esta sonda: los factores funcionan cuando hay racional economica y capacidad; son sobreajuste (overfitting) cuando son ruido disfrazado de patron; y el **coste de transicion** (turnover + impacto de mercado) es el filtro que decide si un factor sobrevive en la practica.

## 2. Estructura / modelo

El "zoo de factores" se puede estructurar asi:

| Capa | Factor | Mecanica | Riesgo principal |
|---|---|---|---|
| Premio por riesgo | Value, Size, Low-vol | Compensan mayor riesgo o aversión a apalancamiento | Drawdowns largos (value 2007-2020) |
| Comportamental / ineficiencia | Momentum, Quality | Sesgos de los agentes; limites para arbitrar | Crowding, reversión violenta |
| Industriales (smart-beta) | Min-vol, Quality, Multifactor ETFs | Rebalanceo sistemático mensual/trimestral | Coste de transicion y capacidad |

Mecanicamente, un factor se implementa como *long-short* (comprar quintil alto, vender quintil bajo) o como tilt long-only dentro de la cartera. El retorno esperado se descompone en: prima teorica del factor − **costes de transaccion** − **decaimiento por crowding/AUM**. AQR defiende que los factores sobreviven netos de coste: su paper "Trading Costs" usa **1,7 billones de $ de datos reales de ejecucion en 21 mercados desarrollados durante 19 años** y concluye que los costes reales son **un orden de magnitud menores** que los de estudios previos ([1]). Ese es el argumento a favor del "funciona en la practica".

## 3. Numeros clave

- **316 factores** documentados; umbral t>3 propuesto para evitar falsos positivos por pruebas multiples (Harvey, Liu, Zhu 2016, [4]).
- **~26% de decaimiento** del retorno de anomalias fuera de muestra post-publicacion (McLean & Pontiff 2016, [5]).
- **$1,7 billones** en datos de ejecucion real; costes ~10x menores que la literatura vieja (AQR "Trading Costs", [1]).
- El premium de **value** (definicion Fama-French precio/valor en libros en EE.UU.) sufrio un drawdown de **"mas de una decada, probablemente ~15 años"** segun el propio Asness (podcast Hoover, [14]) — evidencia de que los factores "funcionan" pero con dolor severo y prolongado.
- Replicacion: Hou, Xue y Zhang (2020), "Replicating Anomalies", muestran que muchas anomalias no replican fuera de muestra y el zoo es mas pequeno de lo que parece ([6]).

(Estado del arte: la evidencia academica primaria —SSRN y ScienceDirect— estaba protegida por CAPTCHA/403 en esta sesion; las cifras anteriores se citan de las fuentes primarias canonicas nominadas, no re-verificadas inline. Ver limitaciones en la seccion 5.)

## 4. Posicion / marco conceptual

El factor investing tiene un foso real cuando se apoya en una historia economica doble: (a) prima por riesgo (los valores "baratos" son mas arriesgados) o (b) ineficiencia comportamental con limites para arbitrar (ser humano vende por panico, el fondo sistematico compra). AQR revivio el efecto size controlando por "junk" (calidad): el size premium es robusto y estable solo al eliminar small-caps de mala calidad ([2]). Esto conecta con quality investing y con la tesis de [[margen-de-seguridad]].

Pero el foso es debil en el extremo opuesto: gran parte del "zoo" son versiones ruidosas de value/momentum/quality. Como dice Asness, "data mining, p-hacking, overfitting is a perennial issue" ([14]). El factor investing no es magia: es [[reversion-a-la-media]] y compensacion por riesgo embalados en un ETF.

## 5. Catalizadores y riesgos

- **Catalizador a favor**: la industria smart-beta sigue creciendo y AQR tuvo "su mejor ano en varias estrategias" (Reuters, 2023, [12]); Morningstar titula "Factor Investing Is Very Much Alive" (2026, [7]).
- **Riesgo de crowding/capacidad**: AQR advierte que "Value Spreads Are Back to Tech Bubble Highs" (2022, [11]) — los spreads de valor vuelven a extremos; cuando todos tiene el mismo tilt, el premium se comprime.
- **Riesgo de drawdown**: momentum es "high risk; sharp drawdowns part of the cycle" (Value Research, 2025, [10]); quality "due a rebound" (Barclays, 2025, [9]).
- **Riesgo de coste**: Asness admite que AQR piensa "mucho sobre market impact y transaction costs" ([14]); el coste de transicion sube con AUM y con la iliquidez del universo small-cap.
- **Novedad reciente (Google News RSS)**: "Active Investing Maintains Edge Over Smart Beta" (ETF Trends, ene-2026, [8]) sugiere que el stock-picking activo mantuvo ventaja sobre smart-beta en un tramo — matiz que debilita el relato "factores baten siempre".

## 6. Valoracion / implicaciones practicas

Que debe hacer el inversor:
1. **Diversificar factores, no apostar por uno**. Combina value + momentum + quality para suavizar drawdowns (ninguno funciona siempre; ver drawdown de value de 15 años).
2. **Evita el factor timing**. Asness es "critico del factor timing" ([14]); rotar factores por reciente rendimiento destruye el premio (efecto McLean-Pontiff a escala personal).
3. **Mira el neto de costes y fees**. Un factor con 100-200% de turnover anual devora la prima si el ETF es caro o iliquido. Prioriza vehiculos de bajo coste y universo liquido.
4. **Desconfia de "nuevos factores"**. Si no supera t>3 y no tiene historia >30 años, es probable overfitting ([4]).
5. **Horizonte largo (3-5+ años)**. Los factores se materializan en ciclos largos; no los juzgues a 12 meses.

Senal de alerta: si un factor se vuelve muy popular (flujos masivos a su ETF) y sus spreads llegan a extremos tipo "burbuja tecnologica" ([11]), reducir exposicion por riesgo de crowding.

## 7. Veredicto para el inversor

El factor investing es una herramienta legitima y barata para mejorar el perfil riesgo/retorno, pero esta sobrevendido. Funciona cuando hay racional economica y capacidad; es sobreajuste cuando es ruido vestido de patron; y el coste de transicion es el arbitro final. Usalo como satelite diversificado y pasivo, nunca como apuesta unica ni como excusa para cazar el factor de moda. La honestidad exige admitir: la mitad del "zoo" no existe fuera del backtest.

## 8. Segundo orden (OBLIGATORIO y central en este wiki)

- **La paradoja de la democratizacion**: si los factores se explican por ineficiencia comportamental con limites para arbitrar, al empaquetarlos en ETFs para todos, el AUM los arbitra y el premium se achica (McLean & Pontiff a escala industria). El relato "factores para todos" contiene su propia contradiccion: cuanto mas popular, menos premium. Conecta con smart beta etf y capacidad de un estrategia.
- **Choca con otras tesis del Cerebro**: (i) vs indexacion pasiva: los factores dicen que se puede batir al mercado sistematicamente, pero el coste y la capacidad lo limitan; (ii) vs stock picking discrecional: los factores sugieren que lo sistematico bate a lo discrecional a largo plazo, matizado por ETF Trends ([8]); (iii) vs eficiencia de mercados: el hecho de que existan primas persistentes es media-evidencia a favor de anomalias y limites para arbitrar.
- **Crowding como riesgo sistemico propio**: el riesgo no es solo el drawdown del factor, sino que el drawdown llega justo cuando el factor es mas popular (flujos maximos). Ver value premium y [[drawdown]].
- **Overfitting como riesgo de proceso de inversion**: el mismo sesgo p-hacking afecta a como Carlos evalua cualquier tesis de inversion; exigir t>3 y historia larga es una regla util tambien fuera de factores.
- **Que vigilar Carlos a 3-5 años**: (a) si los spreads de value vuelven a extremos ([11]); (b) si los ETF de factor sufren reembolsos masivos en drawdown (capacidad/crowding); (c) si aparecen "nuevos factores" en bull market — casi siempre overfitting; (d) el diferencial de coste/fee entre vehiculos, porque ahi se come la prima. Conecta con coste de transaccion y [[reversion-a-la-media]].

## 9. Fuentes consultadas

1. AQR Capital Management, "Trading Costs" (Working Paper, 2024) — https://www.aqr.com/Insights/Research/Working-Paper/Trading-Costs
2. Asness, Frazzini, Israel, Moskowitz, "Size Matters, If You Control Your Junk", Journal of Financial Economics — https://www.aqr.com/Insights/Research/Working-Paper/Size-Matters-If-You-Control-Your-Junk
3. AQR Capital Management, indice "Alternative Thinking" / Factor-Style Investing — https://www.aqr.com/insights/research
4. Harvey, C.R., Liu, Y., Zhu, H. (2016), "…and the cross-section of expected returns", Journal of Financial Economics 210(2):403–434 — https://www.sciencedirect.com/science/article/pii/S0304405X15002361 (SSRN: https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2474932)
5. McLean, R.D., Pontiff, J. (2016), "Does Academic Research Destroy Stock Return Predictability?", Journal of Finance 71(1):23–65 — https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2156623
6. Hou, K., Xue, C., Zhang, L. (2020), "Replicating Anomalies", Review of Financial Studies 33(5):2019–2133 — https://academic.oup.com/rfs/article/33/5/2019/5732871
7. Morningstar, "Factor Investing Is Very Much Alive" (2026-08-26) — https://news.google.com/rss/articles/CBMiigFBVV95cUxNekJmbVRRZUlvY05ISEgtQzJtczAxUEQtUTJ1a1RCVXBCeTl3TlVLUklVR0RseUtRalktb1RIV1lVZFJJU2p5V1lMUU0wMjBKZTFrbGd0Zmdyb2ZNVlRSdDVYM3ZFYnRwQV9LRElHTkxjWEhvZWNJWGtFOUdfMV9VdWpDN3d6SWRDUXc?oc=5
8. ETF Trends, "Active Investing Maintains Edge Over Smart Beta" (2026-01-20) — https://news.google.com/rss/articles/CBMingFBVV95cUxNYkFENXJmdEo2djJsWER4UjlRTjVIRWFBYUY4dXFaQ3d0Z0xMQXJWdXhJaGE1UWRrclFNT2Q5X1h5bHBfTlExV2VxV1E3SFU0a1cyLVZJUDhpU21FMExDb3pjc2hNYWtnM3N2cnNOVzFUVXU1dTE5NFM1THN1RWhIeG5TSzZPSm9WclhBSGNqbEpuWkdiVGdjdjZXVFJWUdIBowFBVV95cUxPMzYtQ1p1RFotb0NkcThteURxdjJ0dXB5eHdkTlZweEtIRnVMaUpDU1pLRjFOU1JvNUZHX2FoYzZDbjhhT1JfV3BtYzhjcVRCdkJZZ2k2aVlCVHd4Ti1Rd3pJVFd2cXJkYU9fNDdMQThScG8zb0FiZDBsWXZGTldCb3VPRDg0N1VKeDUzZnN1bjFvT1BLVlNCdFcwSFJiSlNtdXVV?oc=5
9. Barclays Private Bank, "Quality's quiet strength: Why it may be due a rebound" (2025-09-08) — https://news.google.com/rss/articles/CBMizAFBVV95cUxPeUpBQkEwTFgyU2FnX3VSUGUxY0JJUEdvRmZkaUgwWDY0eGtMQVdnUmJJRGw0cE1ydzl0RmdYU1AxMmpIYko4SThGR1JjNHNXNzl0OERld3NkZ3JsLXZuMC1pZ1dMUkRLTmZNcy1UbnQ2NTZuVjFMb1Vodl8zQTd5MUlLSnE2SHg1d3VmY3l5SkZpRVBBU2phY01Qd05uUWVWOEt6czRfWU1BQldiUXdKRmFQLUdIYktTZXdBakxhdzVibmY3MHNaLVFyd0Q?oc=5
10. Value Research, "'Momentum is high risk; sharp drawdowns part of the cycle'" (2025-10-03) — https://news.google.com/rss/articles/CBMiyAFBVV95cUxONEo3RWR3N3E4UzY3VHhxcm9QRl9BSUJjNUJjSlNYV3pMMklrcjNZN1BRaFZaXzFxTHA2ZU0zeVdjMk9BdTBicG1XN0xXU1Z6bzNoNVVkMk8wb2h4d3JRODJnWjQwRk01bWZCSzg4X0tjOW9peVhsS28weEdxNTl3R2Z6a1hpUG9sdHkwV05SdldBTVN1VURJMjNmZTFKcGEtR1BROXR2bDNvc3NvYzYtODJVeERvZ2NjV3B1aVZaTkFBN2ozckQ0cA?oc=5
11. AQR Capital Management, "Value Spreads Are Back to Tech Bubble Highs: Is Everyone Out There Cray-Cray?" (2022-08-05) — https://news.google.com/rss/articles/CBMipAFBVV95cUxPcjFXRTFnX0RyM3lmSmt6ZFZTNmdNSkJHanFrY013QzBULUV3Z1VDMnlUT1dmb3Z6SlN2WFM5U3NoYnJuUGltN3VjV0l6WE4yMmdKSEFId09ZeVRILVZjRU1IWThscjVYYVFvOXVuSmtWWFN0Mk04blhxYU9sRnNVMFJqVE1mYnNES1NxR2EzZUx2R0N3T21Fcnp0MkVDNDQ4bEVBVg?oc=5
12. Reuters, "Investment management firm AQR books best year in several strategies" (2023-01-06) — https://news.google.com/rss/articles/CBMiugFBVV95cUxNQTFsTHlTMnRhYmxZRHZoS0JXeVhCMl9jMWVFRXRfLUJfR0ZyTFFWbUpPbEwzR29DNmg4T3NlZ1VQZ2gwMEVZYkVObHFRWWVnOU9vbjhXUWZNcFZkREo1bE5KeXFYd19kb0xUS0lQTEw0MU1HMHhzelFFeE5Cc2d5WWJQV2NGY1Y0YkJHcHNROHdUbTFhV0R1S2pKSTJPR0hRcEI4Z2R6dm9oRzg2UWR0U3U0a0NVX0kxQ2c?oc=5
13. Capitalmind, "Fact, Fiction and Factor Investing" (2023-04-22, resumen del paper de AQR) — https://news.google.com/rss/articles/CBMigwFBVV95cUxOUXF4MjdTY0xkTHVDNk1RNjhIejI5bGdzWm5GNEZMWVFyTHM5ZjVVQnJqaTRwVmlFQ2Zpb3M2ME1HS19oQjc0Y3phWlp6M0VYNkJvQ2JRUkFYN3NHU3VwRWs0UkhPTjJScUp3RXhHcDFKRnZfOFRFM0w0QWZWeWZweFlwZw?oc=5
14. Cliff Asness, "Capitalism and Freedom" (podcast Hoover Institution, 2024): factor timing, overfitting/p-hacking, value drawdown, transaction costs — https://www.youtube.com/watch?v=2QrPCewZO9E

---
Limitaciones de canales (degradacion elegante): Exa/web_search (mcporter) OFFLINE; DuckDuckGo y Mojeek bloquearon el acceso o devolvieron 0 resultados; Bing devolvio HTML ofuscado no parseable; Jina Reader funciono para AQR pero bloqueo temporalmente (403) dominios investopedia.com y news.google.com por rate-limit; SSRN y ScienceDirect (JFE) devolvieron CAPTCHA/403. Se completo la investigacion con Jina Reader (AQR), Google News RSS (catalizadores) y yt-dlp (charla Asness). Las cifras academicas de [4] y [5] se citan de las fuentes primarias canonicas nominadas (no re-verificadas inline esta sesion por proteccion de bots).
