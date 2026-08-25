---
title: "Valoración de empresas financieras (bancos y aseguradoras)"
tipo: concepto
tags: [valoracion, bancos, aseguradoras, float, regulacion, damodaran]
fecha: 2026-07-09
fuentes: ["[[manuales-de-valoracion]]"]
---

# Valoración de empresas financieras (bancos y aseguradoras)

Damodaran (cap. 21) dedica un capítulo entero a bancos, aseguradoras y gestoras porque **rompen el manual
estándar** del [[flujo-de-caja-descontado|DCF]]. Es una familia crítica para el cerebro: explica por qué
[[terry-smith]] **evita** el sector, y a la vez por qué el modelo de [[warren-buffett]] (float de seguros) y el
de [[bill-ackman]] (Brookfield/Vantage) son excepciones deliberadas.

## Por qué son distintas

1. **La deuda es materia prima, no financiación.** Para un banco, la deuda "es lo que el acero para General
   Motors": algo que moldea en productos financieros y revende con margen. Los depósitos ¿son deuda o insumo?
   La frontera es borrosa. Consecuencia: **no se puede separar la deuda del capital** ni definir el
   *enterprise value* con claridad → **el FCFF no funciona**; hay que **valorar directamente el equity**.
2. **La reinversión es invisible.** No hay "capex" ni "circulante" al uso; lo que una financiera "reinvierte"
   es capital regulatorio. Sin poder medir la reinversión, la ecuación *g = reinversión × ROIC* se reformula en
   términos de **ROE y ratio de retención** (crecimiento del equity).
3. **La regulación lo condiciona todo.** Ratios de capital obligatorios, restricciones a dónde invertir,
   barreras de entrada. Esto **limita el crecimiento** (no puedes crecer más de lo que el capital regulatorio
   permite) y **añade riesgo regulatorio**: un cambio de reglas mueve el valor. (Es el "riesgo regulatorio no
   anticipado" que Buffett lamentó en BHE en su carta de 2023.)

## Cómo se valoran (enfoques de *equity*)

Como el FCFF no sirve, se usan modelos de **flujo al accionista**:
- **Modelo de descuento de dividendos (DDM)** — clásico para bancos que reparten un dividendo estable.
- **FCFE** — flujo de caja libre para el accionista, ajustado por las necesidades de capital regulatorio.
- **Modelo de retorno en exceso (equity EVA)** — valor = capital propio invertido + valor presente de los
  retornos por encima del coste del equity (el mismo espíritu del beneficio económico de
  [[creacion-de-valor-y-eva]], pero sobre el equity). Es el más limpio para financieras.

En **múltiplos**, se usan los de *equity*: **precio/valor contable (P/B)** —el rey del sector, porque el
balance está a valor de mercado y el P/B se relaciona directamente con el ROE— y **PER**; **nunca EV/EBITDA**
(el EV no tiene sentido). Ver [[multiplos-de-valoracion]].

## La calidad del balance: el activo es un riesgo

En una financiera, **los activos son promesas de otros** (préstamos, siniestros futuros). Por eso lo decisivo
es la **calidad de la cartera de préstamos** (morosidad, provisiones) y la **disciplina de suscripción** en
seguros. Es opaco desde fuera y puede esconder pérdidas (Ackman lo señaló con la contabilidad *held-to-maturity*
en la crisis de SVB, 2023 — ver [[psh-2022]]). De ahí que Terry Smith los excluya de su
[[circulo-de-competencia|círculo de competencia]]: retornos poco predecibles, apalancamiento estructural y
riesgo de cola.

## El otro lado: el float como ventaja (Buffett/Ackman)

La misma naturaleza que ahuyenta a Smith es la que Buffett convierte en ventaja: el **[[float-de-seguros|float]]**
(las primas cobradas antes de pagar siniestros) es dinero de otros invertible **con coste cero o negativo** si
la suscripción es disciplinada. Berkshire, y ahora HHH/Vantage de Ackman, valen precisamente por esa "máquina":
suscribir con disciplina, invertir el float en Treasurys y el excedente en acciones (ver [[berkshire-hathaway]]
y [[psh-2025]]). Valorar bien una aseguradora es, en el fondo, valorar la **calidad y el coste de su float**
más el retorno sobre el capital que soporta ese float.

## Ver también

- [[float-de-seguros]] · [[berkshire-hathaway]] · [[terry-smith]] · [[creacion-de-valor-y-eva]]
- [[multiplos-de-valoracion]] · [[retorno-sobre-capital-empleado]] · [[circulo-de-competencia]] · [[manuales-de-valoracion]]
