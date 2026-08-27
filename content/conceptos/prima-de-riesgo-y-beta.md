---
title: "Prima de riesgo y beta (los inputs del coste de capital)"
tipo: concepto
tags: [valoracion, riesgo, beta, equity-risk-premium, capm, damodaran, macro]
fecha: 2026-07-09
fuentes: ["[[manuales-de-valoracion]]"]
---

# Prima de riesgo y beta (los inputs del coste de capital)

Desarrollo de las tres piezas que alimentan el [[coste-de-capital-wacc|coste del *equity*]] vía CAPM
($k_e = R_f + \beta \cdot \text{ERP}$), según Damodaran (caps. 4, 7 y 8): el **tipo sin riesgo**, la **prima de
riesgo de la renta variable (ERP)** y la **beta**. Además de su papel en la valoración, dos de estos inputs
—la ERP *implícita* y los *spreads* de crédito— son **termómetros macro/de ciclo** de primer orden (ver
[[ciclos-de-mercado]] y [[checklist-macro-y-ciclo]]).

## 1. El tipo sin riesgo ($R_f$)

Un activo es "sin riesgo" solo si no tiene **riesgo de impago** *ni* **riesgo de reinversión**. En rigor sería
un **bono cupón cero de un gobierno**, con vencimiento igual a la duración de los flujos; en la práctica, el
**bono soberano a largo plazo** en la moneda de los flujos. Dos principios:
- **Consistencia de moneda/inflación**: lo que fija el $R_f$ no es *dónde* está la empresa, sino la **moneda**
  en que se estiman los flujos (Nestlé se puede valorar en francos o en libras y dar lo mismo si se respeta la
  paridad). Flujos nominales → $R_f$ nominal; flujos reales → $R_f$ real (bono ligado a inflación).
- **Sin entidad libre de impago** (emergentes): partir del tipo soberano local y **restar el spread de impago**
  del país, o usar paridad de tipos con contratos forward.

## 2. La prima de riesgo de la renta variable (ERP)

El input más discutido y del que **más depende** una valoración. Dos formas de estimarlo:

### a) Prima histórica (el estándar, pero defectuoso)
Exceso de rentabilidad de las acciones sobre el bono soberano en un periodo largo. El problema: **varía
enormemente** (del 4,5% al 12,7% en EE.UU.) según tres decisiones — periodo (¡el error estándar es enorme en
periodos cortos: ±9% a 5 años!), T-bills vs T-bonds, y media **aritmética vs geométrica**. La cifra de
referencia de Damodaran: **~5,5% geométrica sobre T-bonds (1928-2000)**. Tres defectos de fondo:
- Asume que la **aversión al riesgo es constante** en el tiempo (falso).
- Periodos cortos = mucho ruido; periodos largos = poco representativos.
- **Sesgo de superviviente**: EE.UU. es un "mercado superviviente" (de los 10 mayores de 1928, algunos dieron
  retorno nulo o negativo). Por eso la prima histórica **sobreestima** la esperada.

### b) Prima implícita (mejor: mirar el precio de hoy)
Se **despeja** del nivel actual del mercado y los flujos/crecimiento esperados: la tasa que iguala el precio al
valor presente es el retorno exigido; restando $R_f$ da la ERP implícita. Ventaja: **actual, sin datos
históricos, sin sesgo de superviviente**. Hallazgos de segundo orden (¡macro!):
- La ERP implícita de EE.UU. ha rondado el **~4%** (por debajo del 5,5% histórico — otra prueba del sesgo de
  superviviente).
- **Sube con la inflación/tipos** y **revierte a la media**.
- **A finales de 1999 (burbuja) estaba en mínimos históricos** → señal de renta variable *cara*; la corrección
  de 2000 la elevó. Es exactamente la lectura de [[ciclos-de-mercado|ciclo]] de Marks y del "mercado caro" que
  vigilan Ackman y Terry Smith: **ERP baja = euforia y poco colchón; ERP alta = miedo y oportunidad**.

### c) Prima por riesgo país
Para emergentes: prima de mercado maduro + **prima país**, estimada por (1) *spread* de impago del bono
soberano, (2) volatilidad relativa del mercado de acciones, o (3) la mezcla de ambos. La exposición de cada
empresa se afina con un factor λ (una exportadora de *commodities* en dólares está **menos** expuesta al riesgo
local que una que vende al mercado interno). Cuidado con el **doble cómputo** del riesgo (subir la prima *y*
recortar los flujos *y* subir la beta = penalizar tres veces).

## 3. La beta

Mide el riesgo **no diversificable** (de mercado) que la inversión añade a una cartera diversificada — el único
riesgo que, en el CAPM, merece prima.

### Betas de regresión: poco fiables
Regresar los rendimientos de la acción contra el índice da una beta **ruidosa** (errores estándar altos) y
sensible a decisiones arbitrarias (índice, periodo, intervalo). *"El coste del equity es demasiado importante
para dejarlo al azar estadístico."*

### Betas fundamentales / *bottom-up* (lo correcto)
La beta la **determinan tres decisiones del negocio**, no una regresión:
1. **Tipo de negocio**: cuanto más **cíclico/discrecional**, más beta (Gucci > Procter & Gamble; automóvil y
   vivienda > alimentación y tabaco). Enlaza con [[valoracion-ciclicas-y-beneficios-negativos]].
2. **Apalancamiento operativo**: más **costes fijos** ⇒ más variabilidad del beneficio operativo ⇒ más beta.
3. **Apalancamiento financiero**: más deuda ⇒ más beta del *equity*: $\beta_L = \beta_u \,[1 + (1-t)\,D/E]$.

La **beta bottom-up**: tomar las betas *desapalancadas* de un grupo de comparables, promediar (baja el error
estándar) y **re-apalancar** al $D/E$ de la empresa. Es más robusta y, además, **explica** el riesgo en vez de
solo medirlo.

## Los *spreads* de crédito como señal macro

El coste de la deuda = $R_f$ + *spread* de impago (por rating). Dos regularidades explotables:
- El *spread* **crece con el vencimiento** y con peor rating.
- Sobre todo: los *spreads* son **countercíclicos** — se **ensanchan en recesiones** y se **estrechan en
  expansiones** ($\text{Spread}_{BBB} \approx 0{,}47 - 0{,}04 \cdot \text{crecimiento real}$). Junto a la ERP
  implícita, son un indicador directo de dónde está el mercado en el [[ciclos-de-mercado|péndulo]] (ver
  [[checklist-macro-y-ciclo]]).
- Un tercer termómetro, de naturaleza distinta: [[ray-dalio]] usa la relación entre **crecimiento nominal del
  PIB y los tipos de interés nominales** (no la ERP ni los spreads de crédito) para leer en qué fase de un
  [[ciclo-de-deuda-y-desapalancamiento|ciclo de deuda]] está una economía — si el crecimiento nominal supera a
  los tipos, el ratio deuda/ingresos tiende a caer; si está por debajo, tiende a subir. Es un indicador
  macro-estructural, no de valoración de mercado, pero complementa a los dos anteriores.

## La tensión de fondo: beta ≠ riesgo real

Damodaran usa la beta porque necesita un número operativo, pero los inversores del cerebro la **rechazan como
medida de riesgo**: para Buffett, Graham, Marks y Smith el riesgo es la **pérdida permanente de capital**, no
la volatilidad relativa (ver [[riesgo-real-vs-volatilidad]]). El uso honesto en este cerebro: la beta y la ERP
como **listón económico** (¿renta el negocio por encima de su coste de oportunidad?), y la ERP implícita + los
*spreads* como **señales de ciclo**, no como definición de "riesgo".

## Ampliación (2026-07-22) — riesgo país: dónde OPERA, no dónde cotiza

Desde [[damodaran-country-risk]] (edición 2022 del paper; destilado no verificado, cifras de julio de 2022).
La sección 2c de arriba da la fórmula; esto añade **dónde se aplica** y **con qué escala**:

- **Aplicar la prima por operaciones, no por domicilio.** `CRP_empresa = Σ (peso_i × CRP_i)` con pesos por
  ingresos, producción o **reservas**. Usar la prima del país de cotización para toda la empresa es, en
  palabras del autor, mala praxis: la tasa debe reflejar el riesgo del **proyecto**, no el de quien lo mira.
  Ambev 2011: CRP ponderado 3,28% frente al 2,63% de Brasil solo. Coca-Cola 2012: **1,17%** de compañía pese a
  operar en LatAm, Asia, Rusia y África. Shell 2016 ponderado por reservas: ERP **8,93%**.
- **Lambda con números**: Embraer (6% de ingresos en Brasil) λ 0,08–0,27 → k_e 10,6%; Embratel (100% Brasil)
  λ 1,33–2,00 → k_e **16,3%**. Misma bolsa y misma moneda, casi 6 puntos de diferencia. En la edición 2022 la
  lambda queda **relegada** a casos con pocas exposiciones y bonos soberanos líquidos.
- **Novedad metodológica 2022**: en el enfoque mixto, la volatilidad relativa se sustituye por un **factor de
  escala global de emergentes = 1,17** (jul-2022), en vez de calcular σ_equity/σ_bono país a país (ruidoso).
  Brasil jul-2022: spread 3,61% → CRP 3,61%–4,21% → **ERP total 9,18%–10,22%**.
- **Invarianza de moneda como test gratuito**: tipo sin riesgo por moneda (si el soberano no es Aaa, bono menos
  su spread: BRL 13,20% − 3,61% = 9,59%); tasa en otra divisa vía inflación diferencial; tipo de cambio
  esperado por **PPP** — el único que hace que el valor no dependa de la moneda elegida (ver
  [[tipo-de-cambio-real-y-paridad-de-poder-adquisitivo]]). El riesgo de divisa **inesperado** ya está en la
  tasa: no contarlo dos veces (mismo aviso de doble cómputo que arriba).
- **Sesgo de superviviente, cuantificado**: Dimson-Marsh-Staunton 2018 con los mercados desaparecidos
  incluidos da **2,8% geométrico mundo-ex-EE.UU. frente a 4,4% EE.UU.** — refuerza el punto que esta página ya
  hace sobre la prima histórica estadounidense ([[sesgo-de-superviviente]], [[viento-de-cola-americano]]).

**Contradicción anotada.** La sección 2c de esta página dice que "una exportadora de *commodities* en dólares
está **menos** expuesta al riesgo local". El paper de 2022 pondera Shell por **reservas** y señala que los
activos fijos **no móviles** (minería, petróleo) **elevan** la lambda. No son incompatibles —ingresos frente a
activos— pero apuntan en direcciones contrarias para la misma empresa: el riesgo de expropiación o de cambio
fiscal vive donde está la mina, aunque se cobre en dólares. Sin resolver: al valorar [[rio-tinto]] o
[[freeport-mcmoran]] hay que **elegir el peso y justificarlo**, no dar por hecho que exportar en dólares
inmuniza.

## Ver también

- [[damodaran-country-risk]] · [[coste-de-capital-wacc]] · [[flujo-de-caja-descontado]] · [[riesgo-real-vs-volatilidad]] · [[ciclos-de-mercado]]
- [[valoracion-ciclicas-y-beneficios-negativos]] · [[checklist-macro-y-ciclo]] · [[terry-smith]] · [[manuales-de-valoracion]]
- [[ray-dalio]] · [[ciclo-de-deuda-y-desapalancamiento]]
