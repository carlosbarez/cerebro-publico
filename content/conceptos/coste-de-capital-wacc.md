---
title: "Coste de capital (WACC) y coste del equity"
tipo: concepto
tags: [valoracion, wacc, coste-de-capital, capm, damodaran, mckinsey]
fecha: 2026-07-09
fuentes: ["[[manuales-de-valoracion]]"]
---

# Coste de capital (WACC) y coste del equity

La **tasa de descuento** del [[flujo-de-caja-descontado|DCF]] y, más importante aún, el **listón** (*hurdle
rate*) que separa la creación de la destrucción de valor. Es la pieza de la caja de herramientas
([[manuales-de-valoracion]]) que Terry Smith defiende con más pasión (carta 2025).

## Qué es

El **coste de capital** es el retorno que exigen quienes financian la empresa — su **coste de oportunidad**.
McKinsey lo formula como la vara con la que se mide todo: una empresa crea valor **solo** cuando su
[[retorno-sobre-capital-empleado|ROIC]] supera su coste de capital; si gana justo su WACC, no crea valor
(el inversor ganaría lo mismo en otro sitio); si gana menos, lo destruye. Es la base del
[[creacion-de-valor-y-eva|EVA]] (beneficio económico = capital × (ROIC − WACC)).

El **WACC** (*Weighted Average Cost of Capital*) mezcla el coste de las dos fuentes de financiación, ponderado
por su peso a valor de mercado:

$$ \text{WACC} = \frac{E}{V}\,k_e + \frac{D}{V}\,k_d\,(1 - t) $$

donde $k_e$ = coste del equity, $k_d$ = coste de la deuda, $t$ = tipo impositivo (la deuda desgrava, de ahí el
*escudo fiscal* $(1-t)$).

## El coste del equity: el CAPM (Damodaran)

La pieza más discutida. El **CAPM** estima el coste del equity como el tipo sin riesgo más una prima por el
riesgo **no diversificable** (medido por la *beta*):

$$ k_e = R_f + \beta \,(R_m - R_f) $$

- $R_f$ = tipo **sin riesgo** (bono soberano a largo plazo).
- $(R_m - R_f)$ = **prima de riesgo de la renta variable** (*equity risk premium*): el extra que exige el
  inversor por asumir el riesgo de la bolsa frente al bono.
- $\beta$ = sensibilidad de la acción al mercado; Damodaran la estima por regresión de los rendimientos de la
  acción contra los del índice (la pendiente es la beta; el intercepto, comparado con $R_f(1-\beta)$, mide si
  la acción batió al CAPM en el periodo).

Los tres inputs (tipo sin riesgo, prima de riesgo, beta) tienen página propia con sus debates de estimación:
[[prima-de-riesgo-y-beta]].

**Matiz importante para el cerebro**: la beta mide **volatilidad relativa**, no el riesgo que a Buffett, Graham
o Marks les importa (pérdida permanente de capital — ver [[riesgo-real-vs-volatilidad]]). Los inversores del
wiki usan el coste de capital como *listón económico* (¿renta el negocio por encima de su coste de oportunidad?)
pero **rechazan la beta como medida de riesgo**. Damodaran mismo dedica capítulos a las limitaciones y
alternativas del CAPM. Es la tensión más nítida entre la academia y los practicantes del cerebro.

## La falacia que ataca Terry Smith (carta 2025)

Un puente directo con [[terry-smith]]: en booms, empresas e inversores actúan como si el coste de capital fuera
**el recíproco del PER** (un [[multiplos-de-valoracion|PER]] de 50 ⇒ coste del 2%). *"This is utter nonsense."* El coste del equity **no
varía inversamente con la valoración**: se ancla en el tipo sin riesgo más la prima de riesgo (Smith usa como
referencia el retorno histórico de la bolsa de EE.UU., **~9% anual**, no el 2%). Cuando las empresas invierten
como si el capital fuera casi gratis (Vodafone/Mannesmann en 2000), *"there is always a reckoning"*. Es el mismo
error que Buffett critica en las adquisiciones pagadas con acciones sobrevaloradas (ver [[asignacion-de-capital]]).
A escala sistémica, la misma dinámica es la tesis central de [[malinversion-y-zombificacion-empresarial|Chancellor]]:
tipos artificialmente bajos convierten el "capital casi gratis" en malinversión agregada — Smith lo diagnostica
empresa a empresa, Chancellor lo ve como enfermedad de régimen.

## Por qué importa (segundo orden)

- **Es el umbral del foso.** Un [[foso-economico|foso]] es, en números, la capacidad de mantener ROIC > WACC
  durante años; sin foso, la competencia arrastra el ROIC hacia el WACC.
- **Domina el [[valor-terminal]].** En el [[flujo-de-caja-descontado|DCF]], pequeños cambios en el WACC mueven
  enormemente el valor (por eso conviene un [[margen-de-seguridad]]).
- **Disciplina la asignación de capital.** Reinvertir, recomprar o adquirir solo crea valor si el retorno supera
  el coste de capital — el criterio que Buffett aplica en cada carta (ver [[asignacion-de-capital]] y
  [[recompra-de-acciones]]).

## Tensiones

- **¿Es la beta riesgo o solo volatilidad relativa?** Aquí el CAPM exige riesgo *no diversificable* medido por
  beta; el corpus value lo rechaza ([[riesgo-real-vs-volatilidad]]: el riesgo es pérdida permanente de poder
  adquisitivo) y [[nassim-taleb]] lo agrava: con colas gordas, la beta es una ficción gaussiana que mide el
  pasado tranquilo e ignora la ruina. Pero los cuants del cerebro sí la usan en serio: [[ray-dalio]] construye
  toda su cartera sobre "retorno = cash + beta + alpha" ([[paridad-de-riesgo-y-diversificacion]]) y
  [[cliff-asness]] la monetiza vía factores. Mismo objeto, tres usos incompatibles: listón económico (value),
  ladrillo de cartera (Dalio/AQR), espejismo estadístico (Taleb).
- **El ancla del 9% de Smith vs. la no-constancia del retorno histórico.** Smith ancla el coste del equity en
  el retorno histórico de la bolsa americana; pero [[retornos-esperados|AQR]] demuestra que la historia no
  predice (los yields sí), y [[retornos-a-largo-plazo-siegel-vs-oppenheimer|Siegel vs. Oppenheimer]] muestra que
  el ~7% real es promedio de regímenes que van de −9% a +16%. Si el retorno depende del régimen
  ([[super-ciclos-y-regimenes-estructurales]]), el coste de equity "anclado" también — la vara de medir se mueve
  con lo que mide.

## Ver también

- [[flujo-de-caja-descontado]] · [[retorno-sobre-capital-empleado]] · [[valor-intrinseco]] · [[valor-terminal]]
- [[prima-de-riesgo-y-beta]] · [[creacion-de-valor-y-eva]] · [[multiplos-de-valoracion]]
- [[riesgo-real-vs-volatilidad]] · [[terry-smith]] · [[asignacion-de-capital]] · [[manuales-de-valoracion]]
- [[malinversion-y-zombificacion-empresarial]] · [[retornos-esperados]]
