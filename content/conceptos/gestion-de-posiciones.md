---
title: "Gestión de posiciones (*position sizing*): cuánto, no solo qué"
tipo: concepto
tags: [position-sizing, gestion-de-riesgo, r-multiples, expectancy, tharp]
fecha: 2026-07-10
fuentes: ["[[position-sizing-van-tharp]]", "[[arte-y-ciencia-del-analisis-tecnico]]"]
---

# Gestión de posiciones (*position sizing*): cuánto, no solo qué

Concepto de la caja técnica con una tesis que **trasciende** al análisis técnico: el resultado de un inversor
depende tanto de **cuánto** pone en cada posición como de **qué** elige. Fuentes: el marco R de Van Tharp
([[position-sizing-van-tharp]], ingerido como stub del índice) y el capítulo de riesgo de Grimes.

## El marco R de Tharp (la parte útil y general)

- **R = riesgo inicial por operación** (lo que pierdes si tu tesis falla y ejecutas tu salida). Todo resultado
  se expresa en **múltiplos de R**: ganar 3R, perder 1R.
- **Expectancy (esperanza)** = media de los múltiplos R de tu sistema/proceso: cuánto ganas *por unidad de
  riesgo asumida*, en promedio. Un proceso puede acertar poco y ganar mucho (pocas ganancias grandes) o
  acertar mucho y perder dinero (pérdidas raras pero enormes) — **la tasa de acierto no es la esperanza**.
- **La variabilidad importa tanto como la media** (su "System Quality Number"): dos procesos con igual
  esperanza y distinta varianza soportan tamaños de posición muy distintos.
- **El tamaño de posición es el instrumento con el que ajustas el proceso a TUS objetivos** — no hay tamaño
  "correcto" universal; depende de tu capacidad y disposición a asumir riesgo (la matriz del fondo de
  pensiones de Marks en [[marks-memos-2016-2022|A Look Under the Hood]]).

## Modelos concretos de tamaño de posición

Del más simple al más fino (todos parten de definir R = tu pérdida si la tesis falla):

- **Fracción fija del capital** (*fixed-fractional*): cada posición pesa un % fijo del patrimonio (p. ej. 5%).
  Simple, ignora el riesgo específico de cada idea. Es el modelo implícito de una cartera "equiponderada".
- **% de riesgo por operación** (el de Tharp/Elder): fijas cuánto del patrimonio estás dispuesto a **perder**
  si la tesis falla (regla del **2%** de Elder), y de ahí sale el tamaño = (capital × 2%) ÷ R por título. Dos
  ideas con la misma convicción pero distinto R reciben **tamaños distintos** — es lo correcto.
- **Ajustado por volatilidad** (*volatility targeting* / ATR): las posiciones más volátiles pesan **menos** para
  que todas aporten un riesgo similar. Es la lógica de la [[paridad-de-riesgo-y-diversificacion|paridad deriesgo]] de Dalio aplicada a nivel de posición, y lo que hace [[cliff-asness|AQR]] de forma sistemática.
- **Ponderado por convicción** (*conviction weighting*): más capital donde la ventaja (edge) y el margen de
  seguridad son mayores — la lógica de las [[carteras-concentradas]] de [[warren-buffett|Buffett]]/
  [[bill-ackman|Ackman]]/[[charlie-munger|Munger]] ("cuando llueve oro, saca el cubo, no el dedal"). Requiere honestidad brutal sobre cuánta ventaja tienes de verdad.
- **Kelly (y Kelly fraccionado)**: la fórmula que maximiza el crecimiento compuesto a largo plazo dado tu edge
  y las probabilidades. En la práctica se usa **fraccionado** (½ Kelly o menos): el Kelly completo es
  demasiado volátil y castiga sin piedad sobrestimar tu ventaja → riesgo de ruina ([[aversion-al-apalancamiento]]).

**Esperanza (expectancy) en una fórmula**: `E = (%acierto × ganancia media en R) − (%fallo × pérdida media en R)`.
Un sistema con E positiva gana a largo *si el tamaño no te saca del juego* antes de que la estadística converja.
El tamaño de posición es lo que garantiza sobrevivir hasta que E se materialice.

## Traducción al lenguaje del cerebro

Aunque venga del mundo del trading, esto rima con lo que el corpus ya dice:
- **"Las consecuencias dominan a las probabilidades"** ([[sintesis-del-riesgo]]): el tamaño convierte una
  buena idea en ruina si es excesivo (LTCM: razón en la tesis, muerte por tamaño+apalancamiento) — o en
  irrelevante si es mínimo ("no basta con tener razón: hay que tener razón *en tamaño*", la lección de las
  [[carteras-concentradas]] de Buffett/Ackman).
- **Kelly y sus parientes**: apostar fuerte cuando la ventaja es grande y las probabilidades están a favor —
  pero **fraccionado**, porque sobrestimar tu ventaja con tamaño completo lleva a la quiebra
  ([[aversion-al-apalancamiento]]).
- **El límite del 5.º criterio de venta de Dorsey** ("pesa demasiado en la cartera") y el debate
  concentración/diversificación ([[mapa-del-cerebro]]) son, en el fondo, decisiones de *position sizing*.

## Cautela (por qué está subordinado)

Tharp diseña para **traders con sistemas** (señales repetibles, cientos de operaciones donde la estadística
converge). El inversor fundamental de este cerebro hace **pocas apuestas grandes con horizonte largo**: la
maquinaria estadística aplica menos, pero los principios (pensar en R, esperanza ≠ tasa de acierto, el tamaño
como gestor del riesgo de ruina) aplican siempre. **Página PARCIAL**: basada en el índice del libro; pendiente
de profundizar si Carlos añade el PDF completo.

## Ver también

- [[sintesis-del-riesgo]] · [[carteras-concentradas]] · [[aversion-al-apalancamiento]] · [[puntos-de-entrada]]
- [[evaluar-una-cartera]] · [[analisis-tecnico-y-tendencia]]
- [[evaluacion-cartera-carlos-2026-07]] — el marco de esta página aplicado: las recomendaciones de recortar la
  concentración y podar la cola de posiciones diminutas *son* decisiones de tamaño de posición
- [[trading-tecnico-toolbox]] — las reglas concretas de Elder que faltaban tras el stub de Van Tharp: **regla
  del 2%** (máximo riesgo por operación) y **regla del 6%** (parar el mes al 6% de pérdida acumulada)
- [[carpatos-metodo]] — el coste del *overtrading* con datos: solo el 15% de los traders intradía sobrevive 3 años (Barber/Odean 2020); operar de más destruye retorno
