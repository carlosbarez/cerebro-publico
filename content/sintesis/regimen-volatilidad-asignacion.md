---
title: "Regimen de volatilidad y asignacion"
tipo: sintesis
tags: [volatilidad, regimen, timing]
fecha: 2026-08-31
agente: jorne
squad: Analisis Tecnico & Flujo (Jorne)
status: sonde
---

# Regimen de volatilidad y asignacion

> Fuentes base:
> - Moreira & Muir, "Volatility-Managed Portfolios", Journal of Finance - https://www.stern.nyu.edu/sites/default/files/assets/documents/Volatility%20Managed%20Portfolios.pdf
> - Harvey, Hoyle, Korgaonkar, Rattray, Sargaison & Van Hemert, "The Impact of Volatility Targeting" (JPM 2018) - https://people.duke.edu/~charvey/Research/Published_Papers/P135_The_impact_of.pdf
> - Bongaerts et al., "Conditional Volatility Targeting" (Financial Analysts Journal 2020) - https://www.tandfonline.com/doi/full/10.1080/0015198X.2020.1790853
> - AQR, "Risk Parity, Risk Management and the Real World" - https://images.aqr.com/-/media/AQR/Documents/Insights/White-Papers/Risk-Parity-Risk-Management-and-the-Real-World.pdf
> - Geman, Geman & Taleb, "Tail Risk Constraints and Maximum Entropy" (barbell) - https://www.fooledbyrandomness.com/barbell.pdf

## 1. Resumen ejecutivo

El "regimen de volatilidad" (volatility regime) es la observacion de que la volatilidad de los mercados no es constante: se agrupa en rachas (volatility clustering) y es bastante predecible a corto plazo, mientras que los retornos esperados casi no lo son. Esa asimetria abre una puerta que NO es market timing: no se predice la direccion, se gestiona el tamano del riesgo.

Cifras clave:
- Escalar la exposicion por el inverso de la varianza reciente genera alfas positivos y sube los Sharpe de factores entre un 50% y un 100% de su Sharpe original; las ganancias de utilidad para un inversor media-varianza se estiman en 50-90% de la utilidad vitalicia ([1], Moreira & Muir).
- Ese beneficio en Sharpe se concentra en activos de riesgo (renta variable y credito). Para bonos, divisas y materias primas el efecto sobre el Sharpe es "negligible"; en bonos EEUU 1963-2017 el escalado incluso REDUJO el Sharpe ([2], Harvey et al. 2018).
- La replica critica: la estrategia "convencional" de volatility targeting tiene sesgo de look-ahead en el factor de escala, rotacion superior al 200% anual y apalancamiento maximo de 3,7x-5,5x en factores; no mejora de forma consistente el Sharpe en mercados internacionales ([3], Bongaerts et al.).
- Estado actual del regimen: VIX en 15,25 el 31-ago-2026 (cierre previo 14,43; rango 52 semanas 13,38-35,30) ([4], Cboe). Es decir, regimen de vol baja/normal, no de estres.

## 2. Estructura / modelo

Mecanica en tres piezas:

1. **Estimar el regimen.** Volatilidad realizada (por ejemplo media exponencial con vida media de 20 dias, [2]) o volatilidad implicita (VIX). La varianza es "altamente predecible" a horizontes de hasta un ano, y las previsiones de varianza estan solo debilmente ligadas a los retornos futuros ([1]).
2. **Traducir regimen a exposicion.** w_t = sigma_objetivo / sigma_estimada, con topes de apalancamiento. Variante "condicional": ajustar solo cuando el regimen es extremo, no de forma continua ([3]).
3. **Elegir el destino del riesgo retirado.** Caja, bonos del Estado, o factores que se comportan bien en flight-to-quality (profitability) ([3]).

| Enfoque | Que hace | Evidencia | Coste practico |
|---|---|---|---|
| Estatico (60/40, pesos fijos) | Pesos de capital fijos | Simple, sin rotacion | El riesgo se cuadruplico en 2008 en risk parity estatico ([5], AQR) |
| Vol targeting convencional | Escala continua por 1/sigma | Sharpe arriba solo en risk assets ([2]) | Rotacion >200%/ano, apalancamiento 3,7-5,5x ([3]) |
| Vol targeting condicional | Solo actua en estados de vol alta | Menos drawdown en todos los mercados; Sharpe mejor en momentum ([3]) | Rotacion la mitad, apalancamiento max 2,0x ([3]) |
| Regimenes Markov / CVaR | Dos estados (normal vs evento) | CVaR 21d 95%: -14,22% en regimen evento vs -6,12% en normal ([6], AQR/JPM) | Riesgo de sobreajuste |
| Barbell (Taleb) | Maxima seguridad en w, maxima convexidad en 1-w | Emerge de restricciones de cola izquierda ([7]) | Sangrado de primas mientras no hay crisis |

El motor economico del efecto es el "leverage effect": en activos de riesgo la volatilidad sube cuando los precios caen, asi que escalar por 1/sigma introduce implicitamente momentum de series temporales ([2]). Donde no hay leverage effect (bonos, divisas, commodities), no hay premio.

## 3. Numeros clave

- Aumento de Sharpe por volatility timing: +50% a +100% del Sharpe original del factor ([1]).
- Ganancia de utilidad vitalicia: 50-90% ([1]).
- Bonos EEUU 1963-2017: el escalado por volatilidad BAJA el Sharpe, porque 1960-1980 combino retornos negativos con vol baja, lo que produce exposicion grande en un mercado bajista largo ([2]).
- Reduccion de colas: el volatility targeting reduce consistentemente la probabilidad de retornos extremos y la "vol de la vol" en mas de 60 activos, incluso donde no mejora el Sharpe ([2]).
- Momentum con vol targeting condicional: mejora de Sharpe +0,26 en EEUU (vs +0,16 convencional); expected shortfall 9,4% vs 7,2% de reduccion ([3]).
- Mejora media de Sharpe del mercado agregado: +0,07 condicional vs +0,04 convencional, estadisticamente significativa solo en EEUU y Hong Kong ([3]).
- VIX 15,25 (31-ago-2026); 52 semanas: minimo 13,38, maximo 35,30 ([4]).

## 4. Posicion / marco conceptual

El marco central: **predecir riesgo es mucho mas facil que predecir retorno**. AQR lo dice sin rodeos: "el objetivo no es hacer timing de mercado basandose en previsiones de retornos esperados, sino evaluar y gestionar el entorno de riesgo actual, lo cual puede hacerse con mucha mas precision" ([5]). Ahi esta la linea que separa esta disciplina del market timing: el input es la varianza (estimable, persistente, medible hoy), no la direccion.

Corolario incomodo y contraintuitivo: la estrategia REDUCE riesgo en recesiones, exactamente cuando el consenso dice "oportunidad de una generacion". En otono de 2008 el portfolio gestionado por volatilidad salio casi por completo del mercado y volvio cuando el pico de vol se retiro ([1]). Esto choca de frente con la parte mas value del Cerebro (Comprar cuando hay sangre en las calles, [[Margen-de-seguridad]]).

Conexiones: Diversificacion y correlaciones, Risk parity que es y donde falla, Antifragilidad de Taleb, Momentum como factor, Tamano de posicion y Kelly, Coste de oportunidad de la liquidez, Sesgo de look ahead en backtests.

Complemento de Taleb: en lugar de dimensionar por varianza, restringir la cola izquierda. Cuando se imponen restricciones de VaR sobre la cola izquierda y se maximiza entropia en el resto, la solucion optima que emerge naturalmente es el barbell: maxima certeza en una fraccion w, maxima incertidumbre en 1-w ([7]). Las restricciones de cola izquierda "son suficientemente potentes para dominar todas las demas consideraciones de la teoria convencional" ([7]). Traduccion practica: la volatilidad no es el riesgo; la ruina lo es.

## 5. Catalizadores y riesgos

A favor del enfoque:
- Estructura de mercado con mayor peso de instituciones no bancarias (NBFIs). El BIS senala que "la volatilidad inherente de ciertas NBFIs puede exacerbar la volatilidad en determinados segmentos del mercado monetario y deteriorar la liquidez en periodos de estres", como en marzo de 2020 ([8], BIS Quarterly Review junio 2026). Mas riesgo de saltos de regimen abruptos.
- Balance de bancos centrales reduciendose, con recalibracion de herramientas de liquidez (Fed elimino el limite operativo agregado de su repo permanente en 2025; el BOE bajo los spreads de la ventana de descuento en 2026) ([8]). Menos reservas abundantes = mas potencial de picos de vol en la financiacion.

En contra / riesgos:
- **Look-ahead bias.** El resultado academico mas citado esta contaminado por un factor de escala construido ex post ([3]). Cualquier replica personal debe usar solo informacion disponible en t.
- **Coste real.** Rotacion >200% anual y apalancamiento variable de hasta 5,5x en factores hacen la version convencional dificil de implementar ([3]).
- **Overshoot.** La estrategia convencional puede rebasar significativamente su objetivo de vol, aumentando maximos drawdowns ([3]).
- **Regimen "vol baja + retorno negativo".** El caso de los bonos 1960-1980 es el contraejemplo que mata el automatismo ([2]).
- Riesgo de sobreajuste en modelos de regimenes; los propios autores de AQR evitan modelar retornos esperados porque "conducen a modelos sesgados por retrovision y sobreajuste" ([6]).
- Noticias recientes (Google News RSS, ago-2026) muestran un entorno de deuda EEUU >40 billones USD y decision de la Fed pendiente como foco de vol; titulares de bajo nivel de evidencia, no usados como cifras.

## 6. Valoracion / implicaciones practicas

Que hacer (version honesta, para un inversor particular de largo plazo):
1. **No hacer vol targeting continuo sobre la cartera entera.** La rotacion, los impuestos y los costes se comen el edge documentado.
2. **Usar la version condicional / de umbral.** Actuar solo en estados extremos de volatilidad, no todos los meses. Es donde se concentra el beneficio ([3]).
3. **Aplicarlo donde hay leverage effect.** Renta variable y credito. NO a bonos ni materias primas: ahi el efecto sobre el Sharpe es nulo o negativo ([2]).
4. **Cambiar el objetivo: colas, no Sharpe.** El resultado mas robusto de toda la literatura es la reduccion de la probabilidad de retornos extremos ([2]). Ese es el motivo valido para hacerlo.
5. **Nunca apalancar en vol baja.** El formula 1/sigma dice "sube exposicion" cuando el VIX esta a 13-15. Con VIX 15,25 hoy ([4]) el modelo mecanico pediria mas riesgo justo antes de un salto de regimen. Poner un tope duro al 100% de capital.
6. **Alternativa mas simple y barata:** rebalanceo por bandas + reserva de liquidez estructural. Captura buena parte del efecto sin modelo ni apalancamiento.

Senal de alerta: si un producto vende "gestion de volatilidad" con backtest de Sharpe espectacular y sin declarar rotacion, apalancamiento maximo y metodo de escala, es casi con seguridad look-ahead bias ([3]).

## 7. Veredicto para el inversor

El regimen de volatilidad es informacion real y utilizable, pero su valor practico es mucho menor que el que sugiere el paper mas citado. Para Carlos, la conclusion honesta: el regimen de vol no debe cambiar QUE compra (eso lo decide el negocio y el precio), sino CUANTO riesgo total lleva y con que reservas. Y el uso mas defendible no es subir el Sharpe, es reducir la probabilidad de una perdida que rompa el plan. Vol baja = momento de construir reservas y opcionalidad, no de apalancar. Vol alta = momento de tener munición, no de vender por miedo. Esa asimetria de comportamiento es la parte del edge que no requiere modelo ni backtest.

## 8. Segundo orden (OBLIGATORIO)

**Choque directo con la tesis value del Cerebro.** Moreira & Muir dicen: reduce riesgo cuando la vol sube (o sea, en la crisis) ([1]). Buffett dice: compra cuando hay sangre. Ambos tienen razon en su dominio, y esto es la implicacion de segundo orden mas importante: son estrategias con horizontes y funciones objetivo distintas. El vol targeting optimiza Sharpe mensual y supervivencia del mandato; el value optimiza retorno a 10 anos y asume el drawdown como precio de entrada. Para un inversor sin riesgo de reembolsos (sin clientes que retiren), el argumento del vol targeting se debilita mucho: buena parte de su valor es proteger al gestor de sus inversores. Ver Estructura del capital del inversor y Ventaja del capital permanente.

**La volatilidad como proxy defectuoso del riesgo.** Si se acepta a Taleb ([7]), el propio input del modelo esta mal elegido: la restriccion relevante es la cola izquierda, no la desviacion tipica. Consecuencia de segundo orden: un sistema que dimensiona por sigma se sentira mas seguro justo cuando sigma esta comprimida artificialmente (represion de vol por politica monetaria, venta sistematica de opciones). El regimen de vol baja PRODUCE apalancamiento endogeno en el sistema (todos los modelos 1/sigma piden mas riesgo a la vez), lo que hace el salto siguiente mas violento. Esto es reflexividad: la popularidad del vol targeting cambia la distribucion que el vol targeting mide. Ver Reflexividad de Soros, Volmageddon febrero 2018, Vendedores sistematicos de volatilidad.

**Crowding del propio factor.** Si el volatility targeting es hoy practica estandar en risk parity, CTAs y fondos multiactivo, entonces las ventas forzadas en un pico de vol son simultaneas y correlacionadas. La estrategia que protege al individuo desestabiliza al sistema. El BIS apunta a esa direccion cuando describe la flightiness de las NBFIs y la fragilidad de liquidez en estres ([8]). Para Carlos, esto es una fuente de oportunidad, no de miedo: las ventas mecanicas por vol no discriminan calidad de negocio. Ver Ventas forzadas como fuente de oportunidad.

**Fragilidad de la evidencia como leccion metodologica.** Este tema es un caso de estudio perfecto: un resultado de Journal of Finance con alfas grandes, replicado y luego parcialmente demolido por look-ahead bias ([3]). Implicacion de segundo orden para todo el wiki: exigir siempre que un edge declare rotacion, apalancamiento maximo y si el escalado usa informacion futura. Ver Como leer un backtest, Jerarquia de evidencia del Cerebro.

**A vigilar a 3-5 anos:**
1. Si el regimen de vol baja de 2026 (VIX 13-15, [4]) persiste o se rompe, y si el rango 52 semanas de 13,38-35,30 ([4]) se desplaza al alza de forma estructural.
2. Correlacion accion-bono. Todo el andamiaje 60/40 y risk parity depende de ella; si se queda positiva, el "activo refugio" al que huye el vol targeting deja de existir. Ver Correlacion acciones bonos regimen inflacionario.
3. Cuota de mercado de estrategias sistematicas sensibles a vol; mas crowding = saltos mas rapidos.
4. Balance de bancos centrales y reservas menos abundantes ([8]) como fuente nueva de vol de financiacion, no de vol de renta variable.
5. Si aparecen replicas out-of-sample post-2020 del vol targeting condicional que confirmen o desmientan [3].

**Limitaciones de esta sonda:** no localizado un dato actualizado de activos gestionados en estrategias de volatility targeting; no localizada una serie de VIX historica descargada; las cifras de VIX proceden de la pagina publica de Cboe leida el 31-ago-2026 y son datos retardados. El canal de video (yt-dlp) no se uso en esta sonda.

## 9. Fuentes consultadas

1. Moreira, A. & Muir, T., "Volatility-Managed Portfolios", NYU Stern working version / Journal of Finance - https://www.stern.nyu.edu/sites/default/files/assets/documents/Volatility%20Managed%20Portfolios.pdf (version publicada: https://onlinelibrary.wiley.com/doi/10.1111/jofi.12513)
2. Harvey, C., Hoyle, E., Korgaonkar, R., Rattray, S., Sargaison, M. & Van Hemert, O., "The Impact of Volatility Targeting", Journal of Portfolio Management - https://people.duke.edu/~charvey/Research/Published_Papers/P135_The_impact_of.pdf (2018-10-31)
3. Bongaerts, D. et al., "Conditional Volatility Targeting", Financial Analysts Journal - https://www.tandfonline.com/doi/full/10.1080/0015198X.2020.1790853 (2020)
4. Cboe, "VIX Volatility Products" (VIX spot 15,25; 52w 13,38-35,30) - https://www.cboe.com/tradable_products/vix/ (consultado 31-ago-2026)
5. AQR, "Risk Parity, Risk Management and the Real World" - https://images.aqr.com/-/media/AQR/Documents/Insights/White-Papers/Risk-Parity-Risk-Management-and-the-Real-World.pdf
6. AQR / Journal of Portfolio Management, "Risk-Based Dynamic Asset Allocation With Extreme Tails and Correlations" - https://www.aqr.com/-/media/AQR/Documents/Journal-Articles/JPM-Risk-Based-Dynamic-Asset-Allocation-with-Extreme-Tails-and-Correlations.pdf (verano 2012)
7. Geman, D., Geman, H. & Taleb, N. N., "Tail Risk Constraints and Maximum Entropy" - https://www.fooledbyrandomness.com/barbell.pdf (2015)
8. BIS, "BIS Quarterly Review, June 2026" - https://www.bis.org/publications/qr-202606 (2026-06-15)
9. AQR, "Risk Everywhere: Modeling and Managing Volatility" (working paper) - https://www.aqr.com/Insights/Research/Working-Paper/Risk-Everywhere-Modeling-and-Managing-Volatility (2015-01-05)
