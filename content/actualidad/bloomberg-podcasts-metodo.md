---
title: "Bloomberg Podcasts (@BloombergPodcasts) — método y uso"
tipo: fuente
cobertura: parcial
tags: [actualidad, bloomberg, podcasts, youtube, entrevistas, ceo, odd-lots, masters-in-business, ingles]
fecha: 2026-07-22
fuentes: []
---

# Bloomberg Podcasts (@BloombergPodcasts) — método y uso

Canal hermano de [[bloomberg-tv-metodo|Bloomberg Television (@markets)]]: el brazo de **audio/podcast** de la
casa, también ~35 piezas al día. Se da de alta el **2026-07-22**, el mismo día que @markets, pero con un
mandato distinto — y con una advertencia previa que condiciona todo lo demás.

> [!warning] Solapamiento alto con @markets — la trampa a evitar
> **~70% de este canal es el mismo contenido que @markets con otro ID de vídeo**: `Balance of Power`,
> `Bloomberg Businessweek`, `Closing Bell`, `Stock Movers`, `Money Minute`, los mismos clips de titular.
> Procesar los dos canales sin filtro significa **pagar dos veces por la misma transcripción**. Regla dura:
> si el título de una pieza de @BloombergPodcasts coincide (o casi) con una ya listada en @markets ese día,
> **se descarta sin excepción**. El programa manda en @markets; aquí solo se toma lo que @markets no da.

## Lo que SÍ aporta (los dos slices propios)

### 1. `Bloomberg Talks` — entrevistas 1-a-1, 5-12 minutos

**~1-2 al día**, formato corto: un CEO, un senador o un regulador respondiendo preguntas directas. Es la
**fuente primaria más barata de todo el pulso**: 1.500-2.700 palabras por pieza, un destilado de segundos,
y quien habla es el que firma las cuentas. En la muestra inaugural (21-jul-2026): CEO de [[ge-aerospace|GE Aerospace]], CEO
de Charles Schwab, CEO de [[novo-nordisk|Novo Nordisk]] US, senadores Rand Paul, Rick Scott y Mark Warner.

**Prioridad de ingesta**: entrevista a directivo de una empresa de la cartera o la
[[watchlist]] → **absoluta**, va siempre. Empresa adyacente que informe sobre un hilo abierto del cerebro
(cadena de suministro, flujos minoristas, ciclo industrial) → una al día como mucho. Político estadounidense
hablando de política doméstica → descartar, salvo que el tema sea **fiscal o arancelario** con cifras.

### 2. Los podcasts semanales de formato largo

`Odd Lots` (Weisenthal/Alloway), `Masters in Business` (Barry Ritholtz), `Merryn Talks Money`, `Trillions`.
Aparecen **~9 veces cada 300 piezas**, es decir 1-2 por semana. No son pulso: son **material de conocimiento
durable**, y por eso su destino natural no es la nota diaria de Marco sino la mesa de la CKO
([[equipo-agentes|Sofía Navarro]]):

- **`Masters in Business`** es, funcionalmente, lo que [[negociostv-metodo|el archivo de entrevistas de NegociosTV]] es en español: una **mina de voces durables**. Ritholtz entrevista largo a gestores y
  académicos — varios ya en el corpus ([[howard-marks]], [[cliff-asness]], [[michael-mauboussin]]) y muchos
  que no. Cuando aparezca una voz que el cerebro no tenga, se ingiere **como fuente, no como pulso**, y va a
  `inversores/`.
- **`Odd Lots`** trata fontanería de mercado (financiación, colateral, cadenas de suministro, energía) —
  temas que suelen faltar en el resto del pulso; candidato recurrente a promoción durable.
- **`Merryn Talks Money`** y **`Trillions`**: perspectiva británica/europea y estructura de ETFs. Útiles
  puntualmente, sin prioridad.

## Lo que se descarta por defecto

Todo lo duplicado de @markets (ver aviso de arriba), `Bloomberg Law`, `Bloomberg News Now`, `Money Minute`
(60 segundos, cero contenido nuevo), `Stock Movers` (lista de tickers sin mecanismo) y `Big Take` cuando el
tema no es financiero (reportaje cultural, crimen, deporte).

## Encuadre crítico

Mismas cautelas que [[bloomberg-tv-metodo|@markets]] —medio institucional, horizonte de semanas, foco en
EEUU— más una específica del formato entrevista: **el entrevistado es parte interesada**. Un CEO en
`Bloomberg Talks` está vendiendo su historia (Culp vendiendo el ramp-up de GE, Schwab vendiendo que el boom
minorista es estructural, Novo vendiendo su pleito contra Lilly). Su valor es que **compromete cifras y
fechas concretas y verificables** — que es justo lo que lo hace apto para el
[[registro-de-predicciones|scorecard de calibración]]: se marca con `📌 predicción:` y el Brier decide con el
tiempo cuánto pesa cada boca. No se toma ninguna afirmación de un directivo sobre su propia empresa como
hecho establecido sin contrastarla.

## Notas técnicas

Idénticas a las de [[bloomberg-tv-metodo]] (auto-subs en inglés con horas de retraso → jornada **D-1**;
`--sub-langs "en,en-US"`; flag android). Diferencia práctica: las piezas de `Bloomberg Talks` son cortas, así
que su destilado por [[reparto-openrouter-claude|OpenRouter]] tarda segundos, no minutos — se pueden hacer
2-3 en el tiempo de un solo programa de @markets. Para descubrir los podcasts semanales sin barrer 300
títulos, basta un listado con `--flat-playlist` (solo títulos, muy barato) y grep de `Odd Lots|Masters in
Business|Merryn|Trillions`.

## Ver también

[[bloomberg-tv-metodo]] · [[negociostv-metodo]] · [[reparto-openrouter-claude]] · [[registro-de-predicciones]] ·
[[equipo-agentes]] · [[watchlist]]
