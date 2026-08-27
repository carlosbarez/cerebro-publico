---
title: "Datos de mercado: el cuello de botella del rate limit y qué hacer (decisión para Carlos)"
tipo: sintesis
tags: [cio, infraestructura, datos, decision, coste]
fecha: 2026-07-23
fuentes: ["[[at-2026-07-23]]", "[[cio-2026-07-23]]"]
---

# Datos de mercado: el cuello de botella del rate limit y qué hacer (decisión para Carlos)

Informe de decisión encargado por el chip del CIO ([[cio-2026-07-23]]). **Nada aquí gasta dinero ni cambia
código todavía** — es el análisis coste/beneficio para que decidas. Al final, mi recomendación.

## El diagnóstico (por qué falla, en concreto)

El problema NO es "faltan datos": es que **los indicadores técnicos y la serie diaria salen solo de Alpha
Vantage (AV)**, cuyo tier gratuito tiene un tope duro de **25 peticiones/día**. Mecánica exacta:

- **El precio ya está resuelto**: `scripts/market_data.py quote <T>` usa **fallback FMP→AV** (FMP primero). Ese
  camino ya evita AV para el dato más pedido.
- **Lo que quema la cuota**: por cada activo, Jorne pide `TIME_SERIES_DAILY` + `RSI` (+ `MACD`/`ADX` si aplica)
  — **todo AV-only**. Son **2-4 llamadas AV por activo**. Con 5 activos = **10-20 llamadas AV en un solo run**,
  y el tope diario es 25. El run técnico **agota AV él solo**, y luego riesgo y estrategia (que piden los mismos
  tickers ese día) se encuentran la puerta cerrada → los "[Sin datos]" de [[at-2026-07-23]].
- **No hay caché**: los tres agentes (técnico, riesgo, estrategia) repiten llamadas por los mismos tickers el
  mismo día. Cada uno paga de nuevo.
- Nota aparte: los fallos de precio en **GLD/META** de esa foto son un problema *distinto y menor* (cobertura de
  ETF/fondo del ticker concreto en FMP), no el rate limit — se arregla mapeando bien el símbolo.

## Datos duros de cuota y precio (verificados hoy, jul-2026)

| Fuente | Gratis | ¿Histórico diario en gratis? | Más barato de pago |
|---|---|---|---|
| **Alpha Vantage** | **25/día**, 5/min | Sí | **$49,99/mes** (75/min, sin tope diario) |
| **FMP** | **250/día** | **Sí, EOD ~5 años** | Starter **~$22/mes** (300/min) |

Clave: **FMP gratis da 10× la cuota diaria de AV e incluye el histórico OHLCV**. Su *endpoint* de indicadores es
de pago — pero **no lo necesitamos**: RSI/MACD/ADX son deterministas y se calculan en local desde el OHLCV
(numpy ya está instalado; pandas no, pero no hace falta).

## Las cuatro opciones (coste vs. beneficio)

| # | Opción | Coste | Beneficio | Veredicto |
|---|---|---|---|---|
| **1** | **Tier de pago** (AV $50/mes o FMP Starter $22/mes) | **Recurrente**: $22-50/mes | Elimina el techo del todo, sin tocar código | Overkill para un vault que hace ~3 runs/día; solo si los fixes gratis no bastan |
| **2** | **Serie OHLCV desde FMP gratis + calcular indicadores en LOCAL** (mover RSI/MACD/ADX fuera de AV) | Dev moderado (módulo numpy + wire FMP `historical-price-full`); **$0 recurrente** | Quita ~toda la carga de AV del técnico: 1 llamada FMP/activo en vez de 2-4 AV. FMP 250/día cubre de sobra | **El fix de fondo** |
| **3** | **Reducir a 3 activos/run** en el técnico | Trivial (cambio de prompt) | Cabe en la cuota... recortando cobertura | Tirita, no arreglo: sigue cayendo GLD o META, solo que a propósito. **Descartar** salvo como parche temporal |
| **4** | **Caché diaria compartida** en scratchpad (clave: función+símbolo+fecha) | Dev pequeño; **$0** | Mata la duplicación *entre agentes*: el 2º y 3º agente del día pagan 0 llamadas por ticker ya pedido | **Complemento fuerte de la 2**, no sustituto (no ayuda dentro de un mismo run) |

## Recomendación

**Empezar por los dos fixes de coste cero (Opción 2 + Opción 4) y aplazar cualquier pago (Opción 1) hasta medir
el hueco residual.** Concreto y en orden:

1. **Opción 2** — Traer el OHLCV diario de FMP (`historical-price-full`, gratis, 250/día) y **calcular
   RSI/MACD/ADX en local** con un módulo numpy pequeño. Esto solo, por sí mismo, probablemente resuelve a Jorne:
   pasa de ~15 llamadas AV/run a ~5 llamadas FMP/run.
2. **Opción 4** — Caché diaria en scratchpad compartida por técnico/riesgo/estrategia. Elimina la duplicación
   cruzada de los mismos tickers el mismo día.
3. **AV queda solo como fallback y para lo que FMP no tiene** (series macro tipo CPI, pocas llamadas) — dentro
   del tope de 25/día sin problema.
4. **Medir 1-2 semanas.** Si aún quedan huecos (p. ej. ETFs/fondos que FMP gratis no cubre), **entonces** valorar
   **FMP Starter (~$22/mes)** como el pago más barato — nunca AV premium ($50), que es más caro y no aporta
   indicadores. La decisión de gastar sería tuya, con el hueco ya cuantificado, no a ciegas.

**Por qué así**: el camino gratis ataca la causa raíz (indicadores AV-only) con ingeniería determinista, sin
comprometerte a un gasto recurrente que quizá no haga falta. Es coherente con la disciplina de coste del propio
Cerebro: no pagar por lo que un fix de arquitectura resuelve gratis.

## Qué necesito de ti

- **Luz verde para implementar la Opción 2 + 4** (coste cero, cambio reversible en `scripts/market_data.py` + un
  módulo de indicadores + una viñeta en el SKILL de Jorne). Con tu OK lo dejo hecho y verificado.
- **Nada que contratar hoy.** El pago (FMP Starter) queda en reserva, a decidir tras medir el residual.

## Ver también

[[cio-2026-07-23]] · [[at-2026-07-23]] · [[equipo-agentes]] · [[reparto-openrouter-claude]] (misma filosofía:
barato por defecto, pago solo donde aporta)
- [[cio-2026-07-16]]
- [[cio-2026-08-17]]
- [[at-2026-08-17]]
