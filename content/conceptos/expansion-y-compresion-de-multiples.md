---
title: "Expansión y compresión de múltiplos (*re-rating*)"
tipo: concepto
tags: [multiplos, re-rating, tipos, valoracion, ciclo, didactica]
fecha: 2026-08-25
agente: didacta-conceptos
fuentes: ["FRED serie BAMLH0A0HYM2 (ICE BofA US High Yield OAS, dato 21-08-2026)", "multpl.com CAPE Shiller (dato 24-08-2026)", "LA Times 2000-2001 y Crossing Wall Street 2006 (Cisco)"]
---

# Expansión y compresión de múltiplos (*re-rating*)

Complemento mecánico de [[multiplos-de-valoracion]]: no qué múltiplo usar, sino **por qué el múltiplo cambia con
el tiempo sin que cambie la empresa**. Es la variable que convierte un negocio excelente en mala inversión y un
negocio mediocre en gran cotización — y por eso [[precio-vs-cotizacion]] existe como página propia.

## La descomposición básica

El retorno total de una acción se aproxima así:

```
Retorno ≈ crecimiento del beneficio + dividendo + variación del múltiplo
```

Los dos primeros términos son el NEGOCIO. El tercero es el RATING: cuánto paga el mercado por cada unidad de ese
beneficio. Ejemplo ilustrativo propio: beneficio por acción que pasa de 5 a 6 (+20%) mientras el PER cae de 20× a
15× (−25%): precio inicial 100 → final 90, **retorno −10%** pese al negocio sano. Invertido: un PER que pasa de
15× a 20× regala +33% sin que la empresa haya hecho nada.

## Qué mueve el rating: r, g y sentimiento

Todo múltiplo es una forma comprimida de un DCF ([[multiplos-de-valoracion]], [[valoracion-dcf-paso-a-paso]]),
así que sus dos palancas son las mismas:

- **r (tipos + prima de riesgo)**: si el descuento baja, sube lo que vale cada euro futuro — y sube MÁS cuanto
  más lejano es el euro. Por eso los crecimientos largos tienen mayor "duración" y re-ratéan más en ambos
  sentidos (mecanismo completo en [[valoracion-dcf-paso-a-paso]] § segundo orden).
- **g esperado**: el mercado no solo reacciona al crecimiento real sino al CAMBIO DE EXPECTATIVA sobre él. Una
  empresa puede crecer 25% y hundirse si esperabas 30%.
- **Apetito de riesgo**: cuando el miedo se retira, todo activo con cola de ganancia se re-ratinga a la vez — es
  el péndulo de [[ciclos-de-mercado]] actuando sobre denominadores comunes.

## Caso canónico: Cisco, negocio bueno + rating roto

Cisco multiplicó ventas y beneficios durante los años 2000 sin descanso apreciable del negocio, pero la acción
cayó de **80,06 $** (27-03-2000, capitalización récord de **555.400 M$**, LA Times) a **8,12 $** (octubre 2002,
~−90%, Crossing Wall Street): pagaba el mercado ~190× beneficios en el pico (LA Times, 04-03-2001). La empresa no
destruyó el valor; el RATING inicial sí. Segundo orden: comprar calidad a cualquier precio es confundir el
análisis del negocio (que era correcto: ganó la era internet) con el análisis del precio (que estaba roto) —
[[negocio-maravilloso-vs-precio-maravilloso]].

## ¿Dónde estamos ahora? Termómetros verificados (25-08-2026)

- **CAPE Shiller: 41,84** (multpl.com, dato 24-08-2026), frente al máximo histórico de **44,19** (dic-1999).
  Rating agregado del mercado americano en zona extrema: la compresión potencial, no el crecimiento, domina el
  rango de resultados a década vista ([[retornos-esperados]]).
- **Spread high yield ICE BofA: 2,70%** (FRED, serie BAMLH0A0HYM2, dato 21-08-2026) y BBB a **1,00%**: crédito
  barato y abundante. Traducción con el marco de Marks ([[ciclos-de-mercado]]): la ventana del crédito está
  ABIERTA de par en par — históricamente asociada a ratings generosos hoy y pérdidas mañana.
- Lectura conjunta de segundo orden: valoraciones extremas + financiación fácil = expansión de múltiplos
  alimentada por liquidez, no por sorpresa positiva de beneficios. El combustible de la expansión pasada es el
  material de la compresión futura ([[reversion-a-la-media]]). Esto NO es señal de venta: es calibración de
  expectativas ([[checklist-macro-y-ciclo]], [[horizonte-largo-plazo]]).

## Las trampas del re-rating

1. **Confundir tauje con habilidad**: en un mercado al alza, la mitad del retorno suele ser beta de rating;
   atribuirla a método infla la confianza justo antes de la reversión ([[sesgos-y-psicologia-del-inversor]]).
2. **Anclar el rating nuevo**: tras una expansión, el múltiplo alto se vuelve "normal" psicológicamente y se
   usan comparables ya inflados para justificar más inflación (la trampa del paso 4 de Damodaran,
   [[multiplos-de-valoracion]]).
3. **Promediar la compresión**: "si a 40× cayó a 30×, a 30× ya está barata" ignora que el destino histórico de
   ratings extremos suele ser la media o menos, no quedarse a medio camino.
4. **Olvidar que también funciona al revés**: la mejor parte del retorno de un value clásico suele ser
   re-rating desde múltiplos de pánico; la compresión es la amiga silenciosa de quien compra con
   [[margen-de-seguridad]].

## Ver también (lecturas, no órdenes)

- [[multiplos-de-valoracion]] · [[valoracion-dcf-paso-a-paso]] · [[coste-de-capital-wacc]] — la maquinaria
- [[ciclos-de-mercado]] · [[renta-fija-y-tipos]] · [[retornos-esperados]] — el entorno que mueve el rating
- [[precio-vs-cotizacion]] · [[margen-de-seguridad]] · [[reversion-a-la-media]] — cómo protegerse de la palanca
