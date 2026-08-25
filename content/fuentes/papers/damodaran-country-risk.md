---
title: "Damodaran — *Country Risk: Determinants, Measures and Implications* (edición 2022, SSRN 4161010)"
tipo: fuente
tags: [damodaran, riesgo-pais, prima-de-riesgo, emergentes, divisas, ppp, coste-de-capital]
fecha: 2026-07-22
fuentes: ["[[manuales-de-valoracion]]", "[[prima-de-riesgo-y-beta]]"]
destilado_por: openrouter
---

# Damodaran — *Country Risk: Determinants, Measures and Implications* (edición 2022, SSRN 4161010)

> **Aviso de fiabilidad.** Página escrita desde un destilado automático (OpenRouter) **no verificado contra
> el PDF original**. Las cifras son de **julio de 2022** y muchas caducan por construcción (spreads, ratings,
> primas). **Ninguna cifra debe sostener una tesis ni una decisión sin re-leer el pasaje** y sin actualizar el
> dato en la web del autor. Ver [[reparto-openrouter-claude]].

**Qué es incremental.** [[prima-de-riesgo-y-beta]] ya recoge la fórmula *blended* de prima país y el aviso de
doble cómputo. Lo que este paper añade es (a) **dónde se aplica el riesgo país** —según dónde la empresa
**opera**, no dónde cotiza—, (b) el **factor de escala global** que sustituye a la volatilidad de bonos
país a país, (c) la **invarianza de moneda** como test de consistencia, y (d) el catálogo de **fallos de los
ratings** soberanos. Es la pieza que faltaba para razonar sobre las posiciones internacionales de
cartera actual.

## 1. La regla que cambia el análisis: dónde OPERA, no dónde cotiza

*"Esto es mala praxis corporativa, porque viola un primer principio de las finanzas: la tasa de descuento de
un proyecto debe reflejar el riesgo del proyecto, no el riesgo de la entidad que lo evalúa"* (p. 96), sobre
aplicar la misma prima a toda la empresa por su domicilio.

Tres enfoques, de peor a mejor:

1. **Por domicilio** (todos los proyectos, misma prima) — descartado.
2. **ERP ponderado por operaciones** (el recomendado): `CRP_empresa = Σ (peso_i × CRP_i)`, con pesos por
   **ingresos**, **producción** o **reservas**, según dónde se crea el valor. Casos: **Ambev 2011** → CRP
   ponderado **3,28%** frente al 2,63% de Brasil solo (opera en 9 países de LatAm + Canadá, varios peores que
   Brasil); **Coca-Cola 2012** → 38% Norteamérica (CRP 0%), 15% LatAm (3,42%), 15% Asia (1,63%), 5% Europa
   del Este+Rusia (2,60%), 4% África (3,82%) → **CRP compañía 1,17%**; **Shell 2016**, ponderado por
   **reservas** (Kazajistán 14,8%, Brasil 13,5%, Egipto 10,8%) → ERP total **8,93%**.
3. **Lambda (λ)**: una "beta del riesgo país", centrada en 1, para cuando la exposición no es proporcional a
   los ingresos. `k_e = R_f + β·ERP_maduro + λ·CRP`. Se mide por ratio de ingresos (%ingresos país ÷ %ingresos
   país del mercado) o por regresión de la acción contra el bono soberano en dólares. **Embraer** (6% de
   ingresos en Brasil): λ 0,08 (ingresos) / 0,27 (regresión) → k_e 10,6%. **Embratel** (100% Brasil): λ 1,33 /
   2,00 → k_e **16,3%**. Misma bolsa, misma moneda, casi **6 puntos** de diferencia en el coste del *equity*.
   Límites reconocidos: errores estándar altos, exige bonos soberanos líquidos, impracticable multi-país — en
   la edición 2022 queda relegado a "pocas exposiciones y bonos líquidos".

**Aplicación directa para Carlos**: [[tsmc]] (producción concentrada en Taiwán, ingresos globales), [[baidu]]
(riesgo China casi puro), [[rio-tinto]] y [[freeport-mcmoran]] (ponderar por **reservas**, no por sede) y
[[asml]] (ingresos por destino ≠ riesgo de producción). Ver cartera actual y [[evaluar-una-cartera]].

## 2. Cómo se estima la prima país (jerarquía 2022)

- **Spread de impago** (bono soberano en $, CDS o tabla por rating) → CRP mínimo, solo cubre riesgo de impago.
- **Volatilidad relativa de bolsa** (σ_país/σ_US × ERP_US) → el **outlier**: da resultados absurdos (Panamá,
  México por debajo de EE.UU.). Descartado como método único.
- **Melded / mixto (preferido)**: `CRP = spread de impago × (σ_equity / σ_bono soberano)`. **Novedad 2022**:
  en vez de la volatilidad de bonos país a país (ruidosa), usa un **factor de escala global de emergentes =
  1,17** (jul-2022). Ejemplo Brasil jul-2022: rating Ba2 → spread 3,61%; bono $ a 10 años 6,19% − *Treasury*
  3,02% = 3,17%; CDS 3,86% (neto 3,60%) → CRP *melded* **3,61%–4,21%** → **ERP total 9,18%–10,22%**.
- **ERP implícita** por país (Gordon en dos etapas) — sensible a noticias: Brasil pasó de 4,63% (2007) a más
  del 9% (2008). Coherente con la lectura de ciclo que ya hace [[prima-de-riesgo-y-beta]].

Contraste de magnitudes: la **encuesta** Fernandez et al. 2022 da ERP de 11,48% en LatAm vs 5,6% en EE.UU.; el
histórico mensual de exceso de retorno da 0,62% en mercados desarrollados vs 2,07% en LatAm.

## 3. La invarianza de moneda (test de consistencia gratuito)

Una valoración correcta debe dar **el mismo valor en cualquier moneda**. Tres reglas:

- **Tipo sin riesgo por moneda**: si el soberano es Aaa, el bono vale (jul-2022: € 0,93%, $ 3,02%, CHF 0,46%,
  SEK −1,21%). Si no lo es, **bono soberano menos su spread de impago** (BRL: 13,20% − 3,61% = **9,59%**).
- **Tasa en otra moneda por inflación diferencial**: `k_FC = (1+k_US$) × (1+π_FC)/(1+π_US$) − 1` — escala la
  prima automáticamente, sin manipularla a mano.
- **Tipo de cambio esperado por PPP**: `E[S]_t = S_0 × [(1+π_FC)/(1+π_US$)]^t`. Es el **único** *forecast* que
  cierra el círculo (el efecto en la tasa cancela exactamente el efecto en los flujos). Usar el *forward* o el
  *spot* introduce un desajuste sistemático. Enlaza con
  [[tipo-de-cambio-real-y-paridad-de-poder-adquisitivo]].
- **Riesgo de divisa**: solo el movimiento **inesperado** es riesgo, y correlaciona con el riesgo país que ya
  está en la tasa → **no contarlo dos veces**.

## 4. Riesgo soberano: lo que cuesta un impago y por qué los ratings llegan tarde

- **Consecuencias medidas de un impago**: producto −0,5% a −2%, *spread* de financiación +0,5 a +1 punto,
  comercio exterior −8%, probabilidad de crisis bancaria +11 puntos, probabilidad de cambio de líder político
  +45%. Es el argumento de por qué el riesgo país **no es solo un número en el denominador**.
- **Desplazamiento estructural**: crece el impago en **moneda local** (el país elige entre impagar o degradar
  la moneda y a menudo impagar sale más barato); de préstamos bancarios a bonos; y de ley extranjera a **ley
  local** (reestructuración más rápida).
- **Fallos de los ratings** (lista del autor): sesgo al alza, comportamiento de rebaño, "demasiado poco y
  demasiado tarde", y **círculo vicioso** (la bajada encarece la deuda y provoca la siguiente bajada). Los
  **CDS se adelantan** a bonos y ratings (Grecia 2009-10) y predicen mejor el impago, aunque tienen ruido de
  contraparte y liquidez. Mediana del rating soberano mundial: ha bajado de AAA a **BBB−**.
- **Riesgo discontinuo** (autocracias): a diferencia del riesgo continuo de las democracias, se manifiesta de
  golpe — represión regulatoria china de 2021 (caídas superiores al 50% en Alibaba, Tencent, JD, DiDi) y
  Rusia 2022 (pérdida total). Marco directamente aplicable a [[baidu]] y al debate de
  [[super-ciclos-y-regimenes-estructurales]]; contrasta con la visión de [[mark-mobius]] sobre emergentes.
- **Sesgo de superviviente global**: Dimson-Marsh-Staunton 2018, con Austria, China y Rusia (pérdida total)
  incluidas, da media geométrica **2,8% mundo-ex-EE.UU. frente a 4,4% EE.UU.** — refuerza lo que ya dice
  [[sesgo-de-superviviente]] y [[viento-de-cola-americano]].

## Tensión a anotar

[[prima-de-riesgo-y-beta]] afirma que "una exportadora de *commodities* en dólares está **menos** expuesta al
riesgo local que una que vende al mercado interno". El caso **Shell 2016** de este paper pondera por
**reservas** (dónde están los activos inmóviles), no por ingresos, y el propio texto señala que los activos
fijos no móviles —minería, petróleo— **aumentan** la lambda. Las dos afirmaciones no son incompatibles
(ingresos vs activos) pero apuntan en direcciones opuestas para la misma empresa: en una minera, el riesgo de
**expropiación/fiscalidad** vive donde está la mina, aunque cobre en dólares. Sin resolver; al valorar
[[rio-tinto]] o [[freeport-mcmoran]] hay que decidir explícitamente qué peso se usa y por qué.

## Ver también

[[prima-de-riesgo-y-beta]] · [[coste-de-capital-wacc]] · [[manuales-de-valoracion]] ·
[[tipo-de-cambio-real-y-paridad-de-poder-adquisitivo]] · [[riesgo-real-vs-volatilidad]] ·
[[mark-mobius]] · [[ruchir-sharma]] · [[michael-pettis]] · cartera actual · [[checklist-macro-y-ciclo]]
