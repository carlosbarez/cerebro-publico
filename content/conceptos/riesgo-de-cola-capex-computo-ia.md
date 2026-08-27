---
title: "Riesgo de cola del capex de cómputo de IA"
tipo: concepto
tags: [ia, capex, semiconductores, riesgo-de-cola, depreciacion, hiperescaladores]
fecha: 2026-08-24
agente: sofia-navarro
fuentes: ["[[situational-awareness]]", "[[financiacion-estructurada-del-capex-de-ia]]"]
---

# Riesgo de cola del capex de cómputo de IA

El riesgo del lado de la OFERTA del ciclo de IA: si el escalado (*scaling*) se frena —rendimientos
decrecientes por orden de magnitud, modelos incrementales—, el capex ya desplegado no genera retorno y
el choque no es solo de múltiplos, sino **contable y crediticio**. Concepto pendiente oficial del backlog,
propuesto al ascender [[situational-awareness]] (2026-08-03).

Es el complemento bajista de [[financiacion-estructurada-del-capex-de-ia]]: aquella pregunta *quién paga*
el capex; esta, *qué pasa si lo pagado no devuelve*.

## La cadena causal de segundo orden

Escalado estancado → demanda de cómputo crece menos que la oferta → ingresos por GPU caen (compresión de
alquileres) → las vidas útiles contables de 5-6 años resultan infladas → depreciación y deterioro
(*impairment*) golpean el beneficio 2027-2028 justo cuando vence la deuda emitida para construir → recorte
de capex de los hiperescaladores → colapso del libro de pedidos de Nvidia/TSMC/HBM → la financiación
circular amplifica: quien financió al cliente ve morir su propia demanda.

La lección telecom de 2000: **la tecnología tenía razón y los inversores de primera ola perdieron igual**.
Pico de capex telco ~$213B/año (1,0-1,2% del PIB de EE.UU.), solo 2,6-5% de la fibra iluminada hacia 2004,
y bonistas de WorldCom cobrando 35,7 céntimos por dólar (ZDNet jun-2001; Quartz may-2026).

## Cifras ancla

- Capex combinado Big 4: ~$413B en 2025 → guía ~$745-760B para 2026 (Motley Fool/Statista, jul-2026).
  Como % de ventas: Oracle ~86%, Meta ~54%, [[microsoft|Microsoft]] ~47%, [[alphabet|Alphabet]] ~46% (CreditSights, feb-2026).
- Ratio capex/depreciación TTM agregado ~3,9x (Oracle ~8x): $433,9B capex vs ~$149B depreciación
  (LeadLag Report jun-2026; Silicon Analysts jul-2026).
- Amazon recortó la vida útil de servidores de 6 a 5 años citando el ritmo de desarrollo en IA/ML:
  -$700M en operativo y $920M de depreciación acelerada en Q4-2024 (10-K, feb-2025).
- Michael Burry: depreciación infravalorada en ~$176B 2026-28; beneficio sobrestimado ~26,9% Oracle y
  ~20,8% Meta a 2028 (CNBC, nov-2025).
- Alquiler H100: de $8 a $2/hora tras llegar Blackwell (datos citados por Jim Chanos, may-2026).
- OpenAI: ~$20B de ARR frente a ~$1,4T en compromisos de cómputo a 8 años (~70x); RPO de Oracle +359%
  hasta $455B (Altman nov-2025; Oracle 10-Q sep-2025).
- Hueco de ingresos: el capex de 2026 exige ~$1,5T/año (~$3T acumulados desde ChatGPT) contra ~$80B de ARR
  combinado de OpenAI (~$20B) y Anthropic (~$60B) (David Cahn/Sequoia jul-2026; TechCrunch jul-2026).
- Circularidad: Nvidia anuncia >$750B en acuerdos 2026 (SK Hynix >$500B) y lo niega formalmente en un memo
  de 7 páginas a analistas invocando Lucent (Bloomberg nov-2025 / jul-2026).
- Crédito: CDS de Oracle ~198-203 pb (nivel dic-2008); FCF negativo "hasta 2029" según BofA (2026).

## Tensiones

- **Corpus vs web escéptica**: [[financiacion-estructurada-del-capex-de-ia]] sostiene demanda real
  (Azure +43%, AWS +37%) y riesgo de ESTRUCTURA de financiación; Cahn/Burry sitúan el problema antes: sin
  ~$3T de ingresos el negocio no cierra. Priorizan eslabones distintos de la misma cadena, no se contradicen.
- **Depreciación**: defensores de vidas largas (A100 aún contratadas, ingresos subiendo; Investing.com
  nov-2025) vs Burry/Chanos/CITP de Princeton (vida económica real 1-3 años; Barclays recorta EPS hasta -10%).
- **Analogía telecom**: Quartz la desmonta (hiperescaladores con OCF ~$577B y apalancamiento <1x, no Global
  Crossing); Gayed la valida por forma de curva ("entre 1999 y 2000", jun-2026); lectura bifurcada (7GC): los
  hiperescaladores absorben la pérdida y los neoclouds/Oracle son los análogos telecom. El precedente del
  corpus apoya la bifurcación: tener razón direccional no salva al apalancado ([[aversion-al-apalancamiento]]).

## Señales falsables

- Revisión a la baja de vidas útiles en 10-K/10-Q (Amazon fue la primera; el disparador será "un párrafo
  de cambio de estimación", predice Silicon Analysts).
- Tasas de alquiler H100/Blackwell tras Rubin (Q3-2026): ¿estabilizan o siguen comprimiendo?
- Guía capex 2027 combinada: >$1,2T re-rating de semis; <$900B corrección -10% (umbral Bloomberg Intelligence).
- Ratio ingresos IA/capex (~0,3-0,4x): triplicarse antes de fin de 2026 invalidaría la tesis bajista.
- Renegociación de take-or-pay de neoclouds (CoreWeave: 71% de ingresos de Microsoft) y "warehousing" de
  chips sin instalar (Cahn).
- Conversión de solicitudes eléctricas a contratos firmes ([[red-electrica-y-capex-de-ia]]).

## Por qué importa

Conecta la tesis de valoración de semis e hiperescaladores con [[contabilidad-y-calidad-de-beneficios]]
(vidas útiles como palanca de beneficio), [[ciclo-de-deuda-y-desapalancamiento]] (vencimientos 2027-28) y
[[riesgo-real-vs-volatilidad]]. Para [[pensamiento-de-segundo-nivel]], la pregunta no es si la IA triunfa:
es quién absorbe la pérdida si el ritmo de escalado decepciona. [Concepto potencial: contratos circulares y
vendor financing] · [Concepto potencial: fibra oscura, precedente telecom].
