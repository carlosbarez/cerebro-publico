---
title: "AQR Insights — colección de papers (2025-2026)"
tipo: fuente
cobertura: referencia
tags: [aqr, asness, cuantitativo, papers, retornos-esperados, fiscalidad]
fecha: 2026-07-10
fuentes: []
---

# AQR Insights — colección de papers (2025-2026)

Colección de **~21 resúmenes de papers** de AQR Capital Management ([[cliff-asness]], Antti Ilmanen y equipo),
en `raw/AQR insights/` (resúmenes de 2 pp. cada uno). Se leyó la colección **íntegra** y se organizó en 4
clusters. Nota de limpieza: se borró 1 duplicado ("Objective Expected Returns (1).pdf") verificado por
**texto extraído idéntico** (los hashes MD5 diferían solo por metadatos del PDF) — excepción a la
inmutabilidad de `raw/` bajo el patrón ya autorizado por Carlos.

## Cluster 1 — Retornos esperados (serie *Understanding Return Expectations*, partes 1-10)

→ concepto [[retornos-esperados]]. Objetivas (yield) vs subjetivas (retrovisor); el yield inicial bajo de
EE.UU. implica retornos futuros bajos; las estimaciones basadas en crecimiento de beneficios "han sido, si
acaso, dañinas"; EE.UU. vs resto del mundo en valoraciones relativas extremas ("Go Small or Go Home": small
caps internacionales/EM); bonos: descomposición del yield (inflación + tipo real + prima de plazo) y
expectativas de tipos con [[reversion-a-la-media|reversión a la media]]; los diversificadores "sienten" como lastre aunque mejoren la
riqueza a largo plazo; **"Hold the Dip"**: comprar la caída pierde contra comprar-y-mantener (el timing con
evidencia es el trend, no el dip).

## Cluster 2 — La ilusión de los activos privados

→ concepto [[ilusion-de-los-activos-privados]]. Entrevista a Asness: retornos artificialmente suavizados
("volatility laundering"), más riesgo de renta variable del aparente, correlación con los públicos, y qué
mirar antes de asignar a privados. Tensión directa con [[kkr]] y con la narrativa del sector.

## Cluster 3 — Construcción de cartera

→ concepto [[tracking-error-y-riesgo-de-carrera]]. *Food for Thought: Tracking Error* (remunerado vs vacío —
la analogía de las calorías); *Streaky Returns* (los factores "rachosos" pagan ~2x el Sharpe: prima por ser
difíciles de aguantar); *Rebuffed* (los buffer funds no aguantan el escrutinio — TANSTAAFL); *Completion
Portfolios* (cubrir una posición concentrada con otras acciones apenas funciona: el riesgo es idiosincrático —
mejor vender rápido y fiscalmente eficiente); *Active Extension* (long-short 130/30 con apalancamiento
modesto); *Exploring Capital Efficiency* (Markowitz asumía apalancamiento: el "almuerzo gratis" de la
diversificación exige eficiencia de capital).

## Cluster 4 — Fiscalidad

→ concepto [[fiscalidad-del-inversor]]. Estrategias *tax-aware long-short*; el impuesto de liquidación no
elimina el beneficio del ciclo de vida; **más alfa pre-tax = más beneficios fiscales en dólares** (el alfa
crea posiciones nuevas que cosechar). Se integra aquí también el paper externo *The Wrapper Illusion*
(`raw/The Wrapper Illusion....pdf`): las estructuras jurídicas (LP/LLC) **no** neutralizan las normas
anti-abuso — el fisco mira la **sustancia económica, no la forma legal**.

## Citas relevantes

- *"Rearview-mirror expectations have made many investors too optimistic on risky and private assets... and
  too cautious on liquid diversifiers."*
- *"Does it beat buy and hold? The short answer is no."* (Hold the Dip)
- *"Once again Robert Heinlein, and his TANSTAAFL, is a better investment manager than the industry."*

## Páginas creadas/actualizadas por esta ingesta

- Creadas: `inversores/cliff-asness.md`, `conceptos/retornos-esperados.md`,
  `conceptos/ilusion-de-los-activos-privados.md`, `conceptos/tracking-error-y-riesgo-de-carrera.md`,
  `conceptos/fiscalidad-del-inversor.md`, `fuentes/aqr/aqr-insights.md`
- Actualizadas: `index.md`, `log.md`, `CLAUDE.md`
