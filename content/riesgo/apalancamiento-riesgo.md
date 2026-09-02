---
title: "Apalancamiento y supervivencia de la cartera"
tipo: sintesis
tags: [apalancamiento, riesgo, supervivencia]
fecha: 2026-08-30
agente: daniel-ferrer
squad: Riesgo (Daniel)
status: durable
---

# Apalancamiento y supervivencia de la cartera

> Fuentes base:
> - Thorp, *The Kelly Criterion in Blackjack, Sports Betting and the Stock Market* (2006) - https://gwern.net/doc/statistics/decision/2006-thorp.pdf
> - Peters, *Optimal leverage from non-ergodicity* (Quantitative Finance, 2011) - https://doi.org/10.1080/14697688.2010.513338
> - Federal Reserve History, *Near Failure of Long-Term Capital Management* - https://www.federalreservehistory.org/essays/ltcm-near-failure
> - Motley Fool (2026-07-25), margen FINRA en 1,502 billones USD - https://www.fool.com/investing/2026/07/25/clock-ticking-wall-street-15-trillion-powder-keg/
> - Fireswalker (2026-02-16), backtest 19 anos QQQ/QLD/TQQQ - https://fireswalker.com/en/posts/leverage-etf-backtest-proof/

## 1. Resumen ejecutivo

El apalancamiento no cambia solo la magnitud de los resultados: cambia la **probabilidad de seguir en el juego**. La rentabilidad esperada crece de forma lineal con el apalancamiento L, pero el lastre de volatilidad (*volatility drag*) crece con L al cuadrado, y el coste del prestamo crece con (L-1). Por encima de un punto, subir L **reduce** el crecimiento compuesto real y acerca la ruina.

Tres cifras ancla:

- **Kelly y la probabilidad de caida**: con apuesta Kelly completa (f*), la probabilidad de que la cartera toque en algun momento una fraccion x de su valor inicial es exactamente x; es decir, la probabilidad de perder la mitad del capital en algun momento es del 50 % (Thorp 2006, seccion 7: "P(Vk(f*) <= x para algun k) = x") (https://gwern.net/doc/statistics/decision/2006-thorp.pdf). Media Kelly (f*/2) reduce la tasa de crecimiento al 75 % pero divide por tres los tiempos de espera para estar en positivo con alta probabilidad (misma fuente).
- **LTCM**: a cierre de 1997 mantenia **unos 30 USD de deuda por cada 1 USD de capital**; en septiembre de 1998, 14 bancos inyectaron 3,625 mil millones USD a cambio del 90 % del fondo, y los socios vieron su participacion reducida al 10 % (https://www.federalreservehistory.org/essays/ltcm-near-failure). Modelos correctos + apalancamiento excesivo = quiebra economica de los duenos.
- **Ciclo actual (2026)**: la deuda de margen reportada por FINRA alcanzo un maximo historico de **1,502 billones USD en junio de 2026**, un **+77 % en 14 meses** desde los 850,6 mil millones de abril de 2025; en tres decadas solo hubo tres subidas comparables (>=65 %) y las tres precedieron caidas grandes: 1999-2000 (S&P -49 %, Nasdaq -78 %), 2006-2007 (S&P -57 %) y 2020-2021 (bear de 2022) (https://www.fool.com/investing/2026/07/25/clock-ticking-wall-street-15-trillion-powder-keg/).

Para un inversor de largo plazo con capital humano y horizonte de decadas, la variable a maximizar no es la rentabilidad media, sino la **tasa de crecimiento temporal condicionada a sobrevivir**.

## 2. Estructura / modelo

Tres formas distintas de apalancarse, con perfiles de supervivencia muy diferentes:

| Vehiculo | Coste | Riesgo de llamada de margen (*margin call*) | Riesgo de ruina practica |
|---|---|---|---|
| Margen del broker (deuda directa) | Tipo del broker (variable) | Alto: liquidacion forzada en el peor momento | Alto: la perdida puede exceder el capital |
| ETF apalancado con reajuste diario (*daily reset*) | TER + coste de financiacion + lastre de rebalanceo | Nulo (no hay llamada) | Alto por erosion: el valor puede tender a cero en mercados laterales volatiles |
| Futuros / opciones largas | Base + prima | Alto (futuros) / nulo (opciones compradas) | Total en opciones (perdida limitada al 100 % de la prima) |
| Deuda no ligada a la cartera (hipoteca a tipo fijo, sin garantia sobre acciones) | Tipo fijo | Nulo | Bajo: es el apalancamiento "amable" |

Mecanica del crecimiento compuesto (aproximacion log-normal, ecuacion estandar tipo Kelly/Merton; ver Thorp 2006 secc. 7):

g(L) = L*mu - (L*sigma)^2 / 2 - (L-1)*r

donde mu es el rendimiento esperado del activo, sigma su volatilidad y r el coste del prestamo. Consecuencias directas:

1. El termino negativo escala con **L^2**: el castigo por volatilidad es cuadratico.
2. El L optimo es L* = (mu - r) / sigma^2, o sea, el ratio de Sharpe dividido por la volatilidad. **El apalancamiento optimo cae con el cuadrado de la volatilidad.**
3. Existe un L critico (2*L*) donde el crecimiento esperado vuelve a cero: pasado ese punto, ganar en media y arruinarse en el tiempo son compatibles.

Peters (2011) llega al mismo tipo de resultado desde la fisica: en un proceso no ergodico, el promedio temporal de una trayectoria individual no coincide con el promedio de conjunto, y existe un apalancamiento optimo finito que un analisis de valor esperado no ve (https://doi.org/10.1080/14697688.2010.513338; marco general en https://www.nature.com/articles/s41567-019-0732-0).

## 3. Numeros clave

**Calculo propio** (aritmetica mia con la formula anterior, no cifra de fuente externa), con mu = 8 %, sigma = 18 %, coste del prestamo r = 4,5 % - parametros elegidos por mi como plausibles para bolsa global:

| L | Crecimiento compuesto estimado g(L) |
|---|---|
| 1,0 | 6,4 % |
| 1,5 | 6,1 % |
| 2,0 | 5,0 % |
| 3,0 | 0,4 % |

Con estos supuestos, **duplicar el apalancamiento no duplica nada: reduce el crecimiento** y multiplica por dos la caida maxima. El L* teorico con estos numeros es (0,08-0,045)/0,0324 = 1,08. Cambia mu a 10 % y L* sube a 1,7: el resultado es **extremadamente sensible a una entrada que nadie conoce**. Ese es el argumento central contra el apalancamiento calibrado con precision.

Evidencia empirica de mercado (con reserva, ver abajo): un backtest de 19 anos (2006-2025) sobre QQQ/QLD/TQQQ reporta caida maxima (*max drawdown*) de **-73 % para el 2x** y **-69 % para el 3x** en compra y mantenimiento, con ratio de Sharpe de 0,04 (2x) y 0,00 (3x) frente a volatilidad del 89 % (https://fireswalker.com/en/posts/leverage-etf-backtest-proof/, 2026-02-16). **Limitacion honesta**: ese articulo mezcla metodologias (tramos de tenencia de 6 meses frente a compra continua) y sus cifras de rentabilidad total del TQQQ (12 %) no son reconciliables con un simple mantener 2006-2025; trato como fiables solo los ordenes de magnitud de caida y Sharpe. Contraste comparativo pendiente con datos primarios: **no localizado** un backtest 3x auditado que cubra 1929 y 1973 con series diarias reales.

Historico: el papel de la deuda de margen en el crash de 1929 esta documentado en Borowiecki, Dzielinski y Tepper, *The great margin call* (Economic History Review, 2023) - https://kjb.staff.sdu.dk/pdfs/The%20great%20margin%20call.%20Borowiecki,%20Dzielinski%20and%20Tepper.%20EHR,%202023.pdf (el PDF no se pudo extraer via Jina Reader; cifras concretas **no localizadas** en esta pasada).

## 4. Posicion / marco conceptual

Marco de trabajo en tres capas para el Cerebro:

1. **Supervivencia primero (no ergodicidad)**. Una cartera es una unica trayectoria, no un promedio de universos. Cero absorbe: cualquier estrategia con probabilidad no nula de llegar a cero tiene, en horizonte infinito, probabilidad 1 de llegar a cero. Ver ergodicidad y promedio temporal y riesgo de ruina.
2. **Asimetria aritmetica**. Recuperarse de -50 % exige +100 %; de -70 %, +233 % (https://fireswalker.com/en/posts/leverage-etf-backtest-proof/). El apalancamiento aumenta la profundidad del pozo mas rapido que la altura del salto.
3. **Apalancamiento operativo frente a financiero**. Buffett critico LTCM por depender de dinero prestado teniendo un talento real; su propio apalancamiento (float de seguros) es **barato, a largo plazo y no exigible** (https://novelinvestor.com/buffetts-lessons-long-term-capital-management/). La distincion no es "deuda si/no", es **quien puede llamar al prestamo y cuando**. Ver [[float-de-seguros]] y calidad del balance.

Foso conceptual: la ventaja duradera del inversor particular es el horizonte. El apalancamiento con llamada de margen **convierte el horizonte largo en horizonte corto justo cuando el largo mas vale**. Conecta con [[no-vender-en-panico]] y [[margen-de-seguridad]].

## 5. Catalizadores y riesgos

A favor del apalancamiento moderado:
- Tipos de prestamo bajos y estables (baja r y sube L*).
- Instrumentos sin llamada de margen y sin reajuste diario (por ejemplo LEAPS profundamente dentro de dinero, o deuda hipotecaria fija) reducen el riesgo de liquidacion forzada.
- Volatilidad realizada estructuralmente baja (sube L* al cuadrado).

En contra / senales de alerta actuales:
- **Margen en maximos**: 1,502 billones USD en junio de 2026, +77 % en 14 meses (https://www.fool.com/investing/2026/07/25/clock-ticking-wall-street-15-trillion-powder-keg/); caida del 5,7 % en julio de 2026 segun el seguimiento mensual de Advisor Perspectives (https://www.advisorperspectives.com/dshort/updates/2026/08/20/margin-debt-finra-july-2026 - pagina no extraible via Jina, titular con fecha 2026-08-20; **la cifra exacta no localizada**). Serie oficial en https://www.finra.org/rules-guidance/key-topics/margin-accounts/margin-statistics.
- **Proliferacion de ETF apalancados en Europa y su rol amplificador**: DWS/Scalable lanzaron nuevos Xtrackers apalancados en agosto de 2026 (Funds Society, 2026-08-18, via Google News RSS); *"Los prestamos para comprar acciones y ETF apalancados se disparan y elevan el riesgo de batacazo"* (El Confidencial, 2026-06-30, via Google News RSS); una **crisis de ETF apalancados en Corea del Sur** se asocio a una caida global de semiconductores en junio de 2026 (Investing.com Espana, 2026-06-23, via Google News RSS). Estas noticias las localice por titular en el RSS de Google News; **no verifique el cuerpo de cada articulo**.
- Riesgo reflexivo: cuando muchos usan el mismo apalancamiento, las ventas forzadas correlacionan y la volatilidad realizada sube justo cuando mas dana - el mismo mecanismo de LTCM 1998.

## 6. Valoracion / implicaciones practicas

Reglas operativas que defiendo para Carlos:

1. **Regla de horizonte**: nunca apalancarse con dinero exigible antes del horizonte de la tesis. Si el prestamista puede pedir el dinero antes que tu tesis madure, la tesis no es tuya.
2. **Techo duro**: si se usa apalancamiento, mantenerlo por debajo de media Kelly, y con la volatilidad realizada calculada al alza (usar sigma del percentil 90, no la media).
3. **Prohibicion practica de 3x en compra y mantenimiento**: con reajuste diario, la erosion y la caida maxima del orden de -70 % hacen que el resultado dependa del punto de entrada, no de la tesis (https://fireswalker.com/en/posts/leverage-etf-backtest-proof/).
4. **Senal de alerta personal**: si un movimiento del -25 % del mercado te obliga a vender **algo**, ya estas demasiado apalancado. Calcula ese punto antes, no durante.
5. **Vigilar el margen agregado del sistema** (serie FINRA) como termometro del riesgo de contagio, no como senal de calendario: predice fragilidad, no fecha.

## 7. Veredicto para el inversor

El apalancamiento es el unico riesgo de cartera que puede transformar un error temporal en un error permanente. Un inversor con buen criterio para valorar negocios y horizonte de decadas ya tiene las dos ventajas que importan; anadir deuda exigible las cambia por una tercera que no controla (el calendario del prestamista). Mi posicion: **cero apalancamiento con llamada de margen sobre la cartera de acciones**. Si en algun momento se busca mas exposicion, la ruta menos mala es deuda a tipo fijo no garantizada por la cartera, o opciones compradas con perdida acotada a la prima, y siempre por debajo de media Kelly. La honestidad exige decir que el apalancamiento moderado (L entre 1,1 y 1,3) es defendible en teoria; lo que no es defendible es calibrarlo con un mu que nadie conoce.

## 8. Segundo orden

- **Consecuencia de la consecuencia**: si la regla es "no apalancarse", el rendimiento debe venir de la **seleccion** y de la **paciencia**, lo que aumenta el valor marginal del trabajo analitico y de calidad del negocio. Renunciar al apalancamiento no es renunciar a rentabilidad: es trasladar la fuente de rentabilidad del balance al criterio.
- **Apalancamiento oculto**: negar la deuda propia no elimina la exposicion. Las empresas de la cartera pueden estar apalancadas; el resultado es un apalancamiento indirecto que no se ve en el extracto del broker. Vigilar deuda neta/EBITDA y vencimientos en cada posicion. Ver apalancamiento de las empresas en cartera y riesgo de refinanciacion.
- **Choque entre fuentes**: Thorp y la tradicion Kelly aceptan un apalancamiento optimo positivo y calculable; Peters lo enmarca como problema de ergodicidad con optimo finito y sensible; los divulgadores de ETF 3x presentan el problema como "solo hay que aguantar". Los tres discrepan sobre lo mismo: **cuanta confianza merece el estimador de mu y sigma**. Yo me alineo con la lectura mas conservadora, porque el coste de equivocarse es asimetrico y no reversible.
- **Reflexividad sistemica**: el margen record de 2026 significa que **incluso sin apalancarse, Carlos hereda el riesgo de los apalancados** via ventas forzadas y correlaciones que van a 1. La cartera sin deuda no evita la caida; evita tener que vender dentro de ella. La ventaja es la libertad, no la inmunidad. Enlaza con liquidez y polvora seca.
- **Segundo orden inverso**: la ausencia de apalancamiento crea capacidad de compra en el peor momento, que es la forma mas fiable de convertir la caida de otros en rentabilidad propia. El valor de la caja no esta en su rendimiento, esta en su opcionalidad.
- **Que vigilar a 3-5 anos**: (a) serie mensual FINRA de deuda de margen y su tasa de cambio; (b) crecimiento de activos en ETF apalancados en Europa tras la ola de lanzamientos de 2026; (c) cualquier episodio de liquidacion forzada localizada (tipo Corea del Sur, junio 2026) que se propague a indices; (d) el coste real del prestamo de margen frente a la rentabilidad esperada de la bolsa: cuando r se acerca a mu, L* colapsa y el apalancamiento del sistema se vuelve puramente especulativo.

**Limitaciones de esta sonda**: no pude extraer el PDF de *The great margin call* ni las paginas de Advisor Perspectives y FINRA con cifras (bloqueo o render dinamico); las noticias en espanol se identificaron por titular en Google News RSS sin verificar el cuerpo; el backtest de ETF apalancados proviene de un blog y su metodologia es cuestionable. Ninguna cifra de esta sonda es inventada; lo que falta esta marcado como "no localizado".

## 9. Fuentes consultadas

1. Edward O. Thorp, *The Kelly Criterion in Blackjack, Sports Betting, and the Stock Market* (2006) - https://gwern.net/doc/statistics/decision/2006-thorp.pdf
2. Ole Peters, *Optimal leverage from non-ergodicity*, Quantitative Finance 11(11) (2011-12-17) - https://doi.org/10.1080/14697688.2010.513338
3. Ole Peters, *The ergodicity problem in economics*, Nature Physics (2019-12-02) - https://www.nature.com/articles/s41567-019-0732-0
4. Federal Reserve History, *Near Failure of Long-Term Capital Management* - https://www.federalreservehistory.org/essays/ltcm-near-failure
5. President's Working Group on Financial Markets, *Hedge Funds, Leverage, and the Lessons of Long-Term Capital Management* (1999-04) - https://www.cftc.gov/sites/default/files/tm/tmhedgefundreport.htm
6. The Motley Fool, *The Clock Is Ticking on Wall Street's $1.5 Trillion Powder Keg* (2026-07-25) - https://www.fool.com/investing/2026/07/25/clock-ticking-wall-street-15-trillion-powder-keg/
7. FINRA, *Margin Statistics* (serie oficial, consultada 2026-08-28) - https://www.finra.org/rules-guidance/key-topics/margin-accounts/margin-statistics
8. Advisor Perspectives, *Margin Debt Falls 5.7% in July* (2026-08-20) - https://www.advisorperspectives.com/dshort/updates/2026/08/20/margin-debt-finra-july-2026
9. Fireswalker, *Same TQQQ, 35x Return Gap: 19 Years of Backtesting* (2026-02-16) - https://fireswalker.com/en/posts/leverage-etf-backtest-proof/
10. Borowiecki, Dzielinski y Tepper, *The great margin call: The role of leverage in the 1929 Wall Street crash*, Economic History Review (2023) - https://kjb.staff.sdu.dk/pdfs/The%20great%20margin%20call.%20Borowiecki,%20Dzielinski%20and%20Tepper.%20EHR,%202023.pdf
11. Novel Investor, *Buffett's Lessons from Long Term Capital Management* (2017-02-08) - https://novelinvestor.com/buffetts-lessons-long-term-capital-management/
12. El Confidencial, *Los prestamos para comprar acciones y ETF apalancados se disparan y elevan el riesgo de batacazo* (2026-06-30, via Google News RSS) - https://news.google.com/rss/search?q=apalancamiento+ETF+apalancado+riesgo&hl=es
13. Investing.com Espana, *Crisis de ETF apalancados en Corea del Sur desata caida global de chips* (2026-06-23, via Google News RSS) - https://news.google.com/rss/search?q=apalancamiento+ETF+apalancado+riesgo&hl=es

---

## Nota de evolucion 2026-08-30 (elisa)

Asenso a pagina durable del wiki tras revision de la CIO. La sonde de origen (scratchpad/sondas-2026-08-30/apalancamiento-riesgo.md) se valido: estructura completa de 9 secciones, seccion de segundo orden presente y >=6 fuentes reales. No se reescribio ninguna afirmacion previa. Trailer de commit: Agente: elisa.

## Ver también

- [[cartera-todo-tiempo]] · [[estres-pruebas-cartera]] · [[liquidez-riesgo-oculto]] · [[playbook-drawdown-30]] · [[regimen-correlacion-falla]] · [[riesgo-cola-seguros]] · [[tamano-posicion-riesgo]]

## Nota de evolución 2026-08-31 (cerebro-enlaza)

Red de conocimiento: enlace de la hornada durable 2026-08-30 en red neuronal interna (sección «Ver también»). Verificación previa: 41 páginas ascendidas con `status: durable` y validación CIO (9 secciones, 2º orden, ≥6 fuentes), frontmatter canónico, 0 errores. Hallazgo: `itau-unibanco` duplicado en `empresas/` y `analisis-acciones/` (colisión de slug; pendiente decisión de Carlos). Trailer: Agente: cerebro-enlaza.
