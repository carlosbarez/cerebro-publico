---
title: "Estimación del crecimiento"
tipo: concepto
tags: [valoracion, crecimiento, roic, reinversion, damodaran]
fecha: 2026-07-09
fuentes: ["[[manuales-de-valoracion]]"]
---

# Estimación del crecimiento

Junto al [[coste-de-capital-wacc|coste de capital]] y el [[valor-terminal]], la variable más determinante —y
más manipulada— del [[flujo-de-caja-descontado|DCF]]. Damodaran (cap. 11) distingue **tres fuentes** para
estimar el crecimiento y defiende claramente cuál es la buena.

## Las tres fuentes (y por qué las dos primeras engañan)

1. **Crecimiento histórico** — extrapolar lo que la empresa creció en el pasado. El estudio clásico de Little
   (1960), *"Higgledy Piggledy Growth"*, encontró que **el crecimiento pasado apenas predice el futuro**: la
   correlación media entre el crecimiento de un periodo y el siguiente rondaba **cero (0,02)**, a veces
   negativa. Hay **[[reversion-a-la-media|reversión a la media]]**. Matices:
   - Es aún **menos fiable en empresas pequeñas** (crecimiento más volátil).
   - El **crecimiento de ingresos es más persistente y predecible** que el de beneficios, porque las
     decisiones contables distorsionan mucho más el beneficio que las ventas. (Puente con
     [[contabilidad-y-calidad-de-beneficios]].)
2. **Estimaciones de analistas** — aportan información más reciente y específica, pero: **sesgo al alza**,
   **efecto rebaño** (*herding*), horizonte corto y peligro de seguir el consenso a ciegas. Útiles como input,
   nunca como verdad.
3. **Crecimiento fundamental** — el enfoque **correcto**: derivar el crecimiento de lo que la empresa
   *realmente hace*: cuánto reinvierte y a qué retorno.

## La ecuación que lo une todo: crecimiento = reinversión × retorno

El crecimiento no cae del cielo: **se compra reinvirtiendo caja a un cierto retorno**.

$$ g_{\text{beneficio operativo}} = \text{tasa de reinversión} \times \text{ROIC} $$
$$ g_{\text{beneficio por acción}} = \text{tasa de retención} \times \text{ROE} $$

De aquí sale la idea de **"calidad del crecimiento"** que vertebra todo el cerebro: no importa solo *cuánto*
crece una empresa, sino **a qué retorno sobre el capital** lo hace (ver [[retorno-sobre-capital-empleado]]).
Dos empresas que crecen al 10% pueden valer cosas opuestas: la de ROIC 20% reinvierte el 50% (le sobra caja);
la de ROIC 10% reinvierte el 100% (no genera caja libre) — es el par *Value Inc. vs Volume Inc.* de McKinsey
(ver [[flujo-de-caja-descontado]]).

Corolario de segundo orden: **crecer con ROIC ≤ coste de capital destruye valor** (ver [[valor-terminal]]).
Por eso Terry Smith exige *crecimiento con ROCE alto* y desconfía del crecimiento comprado con adquisiciones
caras (ver [[terry-smith]] y [[adquisiciones-fusiones-y-sinergias]]); y por eso Buffett premia a los gestores
que reinvierten bien y castiga a los que "crecen por crecer".

## Implicaciones prácticas (para seleccionar empresas)

- **Fíjate en el motor, no en la foto**: una empresa con ROIC alto y una pista larga para reinvertir compone
  sola; una con ROIC bajo necesita tragar capital para el mismo crecimiento.
- **Desconfía de la extrapolación**: si una tesis depende de que el crecimiento pasado continúe sin más, es
  frágil (Higgledy Piggledy). Pregúntate de dónde saldrá el crecimiento *futuro* (reinversión × retorno) y
  cuánto durará el [[foso-economico|foso]] que lo protege.
- **Ingresos > beneficios** para proyectar la línea alta; luego modela márgenes y reinversión hacia la caja.

## Ver también

- [[tasas-base-y-vista-exterior]] · [[michael-mauboussin]] — anclar el crecimiento estimado en la tasa base histórica (muy pocas empresas sostienen crecimiento alto una década); antídoto a la extrapolación

- [[retorno-sobre-capital-empleado]] · [[flujo-de-caja-descontado]] · [[valor-terminal]] · [[coste-de-capital-wacc]]
- [[contabilidad-y-calidad-de-beneficios]] · [[foso-economico]] · [[negocio-maravilloso-vs-precio-maravilloso]]
