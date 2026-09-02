---
title: "Cartera todo-tiempo (All-Weather) y variantes"
tipo: sintesis
tags: [cartera, asignacion, all-weather]
fecha: 2026-08-30
agente: ines-torres
squad: Estrategia & Filosofia (Ines)
status: durable
---

# Cartera todo-tiempo (All-Weather) y variantes

> Fuentes base:
> - BestFolio, backtest All Weather 1971-2026 - https://bestfolio.app/strategies/all-weather-dalio
> - LGIM, "Risk parity struggled through 2022" - https://blog.landg.com/categories/investment-strategy/risk-parity--the-quant-favourite-struggled-through-2022/
> - Markov Processes, "Risk Parity Not Performing? Blame The Weather" - https://www.markovprocesses.com/blog/risk-parity-not-performing-blame-the-weather/
> - Portfolio Charts, Golden Butterfly - https://portfoliocharts.com/portfolios/golden-butterfly-portfolio/
> - AQR, "A Changing Stock-Bond Correlation" - https://www.aqr.com/-/media/AQR/Documents/Alternative-Thinking/A-Changing-Stock-Bond-Correlation_JPM.pdf

## 1. Resumen ejecutivo

La cartera todo-tiempo (all-weather) es una asignacion estrategica fija que busca comportarse de forma aceptable en los cuatro entornos economicos posibles: crecimiento por encima o por debajo de lo esperado, e inflacion por encima o por debajo de lo esperado. La idea nace de Bridgewater (Ray Dalio, fondo All Weather lanzado en 1996) y su nucleo teorico es la paridad de riesgo (risk parity): repartir la contribucion al riesgo, no el capital [1][4].

Cifras clave:
- Version minorista clasica (30% bolsa EEUU, 40% bonos largos, 15% bonos intermedios, 7,5% oro, 7,5% materias primas): 7,7% CAGR, volatilidad 6,8%, Sharpe 0,98 y maxima caida -22,5% en el backtest 1971-2026 (54,5 anos) [1]. Ojo: es backtest, no rentabilidad real de un inversor.
- 2020 (COVID): la version minorista cayo aproximadamente 6% frente a caidas del 30-33% del S&P 500 [2]. Este es el mejor escenario para la estrategia (shock deflacionario con tipos a la baja).
- 2022 (el test que fallo): el fondo All Weather de Bridgewater perdio en torno al 22%, su peor ano, peor que 2008 (~-20%); el ETF minorista RPAR cayo -28,5% en el ano, mas que el propio S&P 500, y llego a marcar una caida record del 32% intraano [4][3][6].

Por que importa a un inversor de largo plazo: la promesa no es rentabilidad maxima, es baja dispersion de resultados y menor riesgo de secuencia (sequence-of-returns risk). El precio es rentabilidad esperada menor que 100% bolsa e incluso que un 60/40 en periodos largos [2].

## 2. Estructura / modelo

Mecanica en tres capas:

1. **Cuatro cuadrantes.** Cada activo se asocia al entorno donde gana: bolsa (crecimiento sorpresa al alza), bonos nominales largos (crecimiento a la baja / desinflacion), oro y materias primas (inflacion sorpresa al alza), bonos ligados a inflacion (TIPS / linkers) como puente inflacion-recesion.
2. **Paridad de riesgo.** El peso se fija para igualar contribucion al riesgo, no capital. Por eso los bonos pesan mucho en capital: su volatilidad es menor.
3. **Rebalanceo sistematico.** Anual o por bandas de desviacion. Es la unica "senal": no hay tactica.

Variantes practicas para particular:

| Variante | Composicion | Notas |
|---|---|---|
| All Weather minorista (Dalio/Robbins) | 30% bolsa, 40% bonos largos, 15% bonos intermedios, 7,5% oro, 7,5% materias primas | 7,7% CAGR, -22,5% DD max, vol 6,8% (1971-2026, backtest) [1] |
| Permanent Portfolio (Harry Browne) | 25% bolsa, 25% bonos largos, 25% liquidez/letras, 25% oro | Version mas antigua y mas simple; 4 activos, sin apalancamiento [5] |
| Golden Butterfly (Tyler, Portfolio Charts) | 20% bolsa amplia, 20% small cap value, 20% bonos largos, 20% bonos cortos, 20% oro | 7,9% CAGR y -19,9% DD max en 25 anos desde ago-2000, frente a -34,7% de un 60/40 [7] |
| Risk parity institucional apalancada | cesta multiactivo con apalancamiento hasta volatilidad objetivo | Es la version que fallo mas fuerte en 2022 [4] |

Diferencia clave: las versiones minoristas **no apalancan**; el fondo institucional si. Sin apalancamiento la cartera "todo-tiempo" es esencialmente una cartera equilibrada con oro. Con apalancamiento, el fallo de correlacion se amplifica.

## 3. Numeros clave

- All Weather minorista, 1971-2026: 7,7% CAGR; Sharpe 0,98; Sortino 1,50; vol 6,8%; Calmar 0,34; -22,5% caida maxima [1].
- Golden Butterfly, ago-2000 a 2025 (25 anos): 7,9% CAGR; -19,9% caida maxima; 60/40 clasico -34,7% en el mismo periodo [7].
- 2022: Bridgewater All Weather ~-22%; AQR Multi-Asset -10,5%; RPAR -28,5% [4]. La dispersion entre gestores con "la misma estrategia" supera los 18 puntos: la implementacion (apalancamiento, activos incluidos, frecuencia de rebalanceo) importa mas que la etiqueta [4].
- Correlacion bolsa-bono: media movil de 24 meses en torno a -0,20 desde el ano 2000; en 2022 se dio la vuelta a aproximadamente +0,65 [4]. AQR documenta que el regimen de correlacion depende sobre todo de si el shock dominante es de inflacion o de crecimiento [8].
- Activos bajo gestion de risk parity institucional: de ~160.000 M USD en el pico de 2021 a ~90.000 M USD a cierre de 2023 (-44%), por perdidas y reembolsos, segun recopilacion de Markov Processes/AInvest citada en [4]. Cifra de segunda mano: verificar antes de citarla como propia.
- Rentabilidad real (no backtest) de un particular espanol con esta cartera, neta de comisiones y fiscalidad: **no localizado**.

## 4. Posicion / marco conceptual

El marco es el de la diversificacion verdadera: no diversificar por numero de posiciones sino por **causa del riesgo** (motor economico). La ventaja conceptual es robusta: si no sabes que entorno viene, no apuestes por uno. Esto conecta con la humildad epistemica que ya domina el resto del Cerebro ([[margen-de-seguridad]], [[circulo-de-competencia]]).

El punto debil no es la teoria, es la calibracion. Toda cartera todo-tiempo se calibra con historia, y la historia 1981-2021 fue un mercado alcista secular de bonos: rendimientos cayendo desde dos digitos hasta cero. LGIM mostro que un backtest rebasado a la curva de tipos de 2015 (es decir, sin ese viento de cola) daba caidas mucho mas fuertes y crecimiento tendencial menor [3]. Es decir: buena parte del Sharpe historico es un artefacto del regimen de tipos, no una propiedad de la estructura.

Frente a [[cartera-60-40]], la todo-tiempo aporta el oro y el reparto por riesgo; frente a bolsa 100 por cien, reduce dispersion a cambio de rentabilidad esperada. Es una eleccion sobre **forma del camino**, no sobre destino.

## 5. Catalizadores y riesgos

A favor:
- Regimen de correlacion bolsa-bono inestable y tipos reales positivos: por primera vez desde 2010 los bonos vuelven a pagar cupon real, lo que devuelve rentabilidad esperada al 55% de la cartera.
- Oro con papel monetario reforzado (compras de bancos centrales); Morningstar y MSCI documentan que oro y activos reales mejoran la diversificacion en periodos inflacionarios [9][10].

En contra:
- **Riesgo de regimen de correlacion.** Es el fallo estructural: si bolsa y bonos caen juntos, la cartera no tiene refugio. 2022 fue exactamente eso [4][8].
- **Riesgo de apalancamiento.** Solo aplica a productos institucionales o ETFs tipo RPAR. Un particular puede evitarlo por completo.
- **Riesgo de sobreajuste (overfitting).** La mayoria de las cifras que circulan son backtests optimizados a posteriori, con series de small cap value que solo llegan a 2000 [7].
- **Riesgo de implementacion en Espana:** disponibilidad UCITS de bonos del Tesoro EEUU a 20+ anos, oro fisico via ETC (no UCITS por ser materia prima unica), coste de materias primas amplias, y fiscalidad de rebalanceos (los ETFs no se compensan como los fondos traspasables). Detalle concreto para el inversor espanol: **no localizado en esta sonda**; requiere una segunda pasada.
- Novedades recientes via Google News RSS: **canal fallido** en esta sesion (la peticion devolvio respuesta vacia y no se pudo parsear). Limitacion anotada.

## 6. Valoracion / implicaciones practicas

Que haria un particular sensato:

1. **No apalancar.** La version minorista sin apalancamiento conserva casi toda la idea y elimina el fallo mas violento.
2. **Reducir bonos largos frente a la receta original.** El 40% en 20+ anos es una apuesta de duracion enorme disfrazada de prudencia. Repartir entre duracion intermedia y larga baja la sensibilidad al fallo de 2022.
3. **Mantener el oro, tratarlo como seguro, no como inversion.** El 7,5-20% segun variante es la pieza que salva los escenarios de inflacion no anticipada.
4. **Rebalanceo por bandas, no por calendario**, y siempre calculando el coste fiscal antes de vender.
5. **Senal de alerta:** si la correlacion movil bolsa-bono a 24 meses se mantiene positiva durante varios trimestres, la cartera ha dejado de ser todo-tiempo y se ha convertido en una cartera direccional apalancada al ciclo de tipos. Es el momento de revisar pesos, no de creer el folleto.
6. Verificar siempre el numero real de 2022 del producto concreto, no el relato de la categoria [4].

## 7. Veredicto para el inversor

La cartera todo-tiempo es un marco mental excelente y un producto mediocre. Como disciplina obliga a preguntarse "que entorno me arruina", y esa pregunta vale mas que la asignacion concreta. Como cartera, su historial brillante coincide con 40 anos de bonos alcistas, y su unico test verdaderamente adverso (2022) lo fallo con perdidas peores que en 2008 [4]. Para Carlos, con horizonte largo, ingresos estables de la medicina y tolerancia probada a no vender, una todo-tiempo pura probablemente cuesta demasiada rentabilidad esperada. Tiene mas sentido como **modulo defensivo** de la cartera (por ejemplo 20-30% del patrimonio financiero, o el tramo asociado a objetivos a menos de 10 anos) que como cartera total.

## 8. Segundo orden

- **La diversificacion es un servicio con precio variable.** Cuando todo el mundo quiere el mismo seguro (bonos largos a rendimiento cero), el seguro es carisimo y no cubre. El corolario incomodo: el mejor momento para montar una todo-tiempo es cuando nadie la quiere, es decir despues de un 2022, no antes. Esto es la misma logica de contrarian vs momentum aplicada a asignacion, no a acciones.
- **Simplicidad como fuente de retorno conductual.** El valor real de estas carteras puede no estar en el Sharpe sino en que su suavidad evita la venta en panico. Si es asi, la metrica correcta no es CAGR sino "probabilidad de que el inversor siga dentro". Conecta con errores de comportamiento del inversor y con la fuerza inversora de Carlos: no vender en panico. Si ya tiene esa fuerza, esta pagando por un seguro conductual que no necesita.
- **Choque de fuentes.** Los sitios de backtest (BestFolio, Portfolio Charts, LazyPortfolioETF) presentan la estrategia con Sharpe cerca de 1 [1][7]; los analistas de regimen (LGIM, AQR, Markov) muestran que ese Sharpe es dependiente del regimen de tipos [3][4][8]. No es una discrepancia de datos, es una discrepancia de metodo: retro-ajuste frente a analisis causal. Regla del Cerebro: cuando un backtest y un analisis de regimen no coinciden, gana el analisis de regimen.
- **Segundo orden fiscal y de vehiculo.** En Espana el rebalanceo anual con ETFs genera plusvalias tributables cada ano, lo que puede consumir buena parte de la ventaja del rebalanceo. La misma cartera con fondos indexados traspasables es estructuralmente superior. Pendiente: fiscalidad rebalanceo espana.
- **Que vigilar a 3-5 anos (Carlos):** (a) correlacion movil bolsa-bono a 24 meses, (b) tipo real a 10 anos EEUU y zona euro, (c) si el oro mantiene su papel tras el ciclo de compras de bancos centrales, (d) si los productos risk parity siguen perdiendo activos (senal de capitulacion, es decir de oportunidad), (e) si aparece un vehiculo UCITS traspasable que replique la idea con coste bajo.
- **Riesgo de segundo orden de la propia tesis:** si mucha gente concluye "la todo-tiempo murio en 2022" y se concentra en bolsa EEUU, el escenario que mas dano hace al consenso vuelve a ser inflacion persistente con caida de multiplos, exactamente el cuadrante que la todo-tiempo cubre. La estructura puede volver a funcionar precisamente porque se abandono.

## 9. Fuentes consultadas

1. All Weather (Dalio) Strategy - BestFolio - https://bestfolio.app/strategies/all-weather-dalio (backtest hasta 2026-08-21)
2. Ray Dalio's All-Weather Portfolio Performance - QuantifiedStrategies - https://www.quantifiedstrategies.com/ray-dalios-all-weather-portfolio-performance/ (2024-06-04)
3. Risk parity - the quant favourite struggled through 2022 - LGIM Blog, Martin Dietz - https://blog.landg.com/categories/investment-strategy/risk-parity--the-quant-favourite-struggled-through-2022/ (2023-02-14)
4. Risk Parity Not Performing? Blame The Weather - Markov Processes International - https://www.markovprocesses.com/blog/risk-parity-not-performing-blame-the-weather/ (2023-12-22)
5. Harry Browne Permanent Portfolio Review - Optimized Portfolio - https://www.optimizedportfolio.com/permanent-portfolio/ (2026-04-12)
6. Risk-Parity Strategy Disappoints as ETF (RPAR) Posts Record 32% Drop - Bloomberg - https://www.bloomberg.com/news/articles/2022-09-28/-perfect-storm-for-risk-parity-has-etf-posting-record-32-drop (2022-09-28)
7. Golden Butterfly Portfolio - Portfolio Charts - https://portfoliocharts.com/portfolios/golden-butterfly-portfolio/ (2023-10-22) y backtest en https://bestfolio.app/strategies/golden-butterfly
8. A Changing Stock-Bond Correlation: Drivers and Implications - AQR - https://www.aqr.com/-/media/AQR/Documents/Alternative-Thinking/A-Changing-Stock-Bond-Correlation_JPM.pdf
9. How Portfolio Diversification Works in Inflationary Periods - Morningstar - https://www.morningstar.com/markets/how-portfolio-diversification-works-inflationary-periods (2026-05-11)
10. Balancing Risk and Return: Gold and Digital Assets in a 60/40 Portfolio - MSCI - https://www.msci.com/research-and-insights/blog-post/balancing-risk-and-return-gold-and-digital-assets-in-a-60-40-portfolio
11. Comparativa Golden Butterfly vs Permanent Portfolio - LazyPortfolioETF - https://www.lazyportfolioetf.com/comparison/golden-butterfly-vs-harry-browne-permanent/

### Limitaciones de esta sonda
- Canal Google News RSS: fallo (respuesta vacia), sin novedades de prensa reciente incorporadas.
- Bloomberg [6] no se pudo leer integro (muro de pago); la cifra de -32% intraano procede del titular.
- Datos fiscales y de vehiculos UCITS para el inversor espanol: no localizados, requieren segunda pasada.

---

## Nota de evolucion 2026-08-30 (elisa)

Asenso a pagina durable del wiki tras revision de la CIO. La sonde de origen (scratchpad/sondas-2026-08-30/cartera-todo-tiempo.md) se valido: estructura completa de 9 secciones, seccion de segundo orden presente y >=6 fuentes reales. No se reescribio ninguna afirmacion previa. Trailer de commit: Agente: elisa.

## Ver también

- [[apalancamiento-riesgo]] · [[correlaciones-dinamicas]] · [[deuda-publica-primacia]] · [[estres-pruebas-cartera]] · [[itau-unibanco]] · [[liquidez-riesgo-oculto]] · [[lloyds]] · [[moats-en-decadencia]] · [[playbook-drawdown-30]] · [[regimen-correlacion-falla]] · [[regimen-tipos-2026-2028]] · [[regimen-volatilidad-asignacion]] · [[renault]] · [[riesgo-cola-seguros]] · [[stellantis]] · [[tamano-posicion-riesgo]]

## Nota de evolución 2026-08-31 (cerebro-enlaza)

Red de conocimiento: enlace de la hornada durable 2026-08-30 en red neuronal interna (sección «Ver también»). Verificación previa: 41 páginas ascendidas con `status: durable` y validación CIO (9 secciones, 2º orden, ≥6 fuentes), frontmatter canónico, 0 errores. Hallazgo: `itau-unibanco` duplicado en `empresas/` y `analisis-acciones/` (colisión de slug; pendiente decisión de Carlos). Trailer: Agente: cerebro-enlaza.
