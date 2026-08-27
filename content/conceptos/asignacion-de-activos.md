---
title: "Asignación de activos (*asset allocation*)"
tipo: concepto
tags: [asignacion-de-activos, diversificacion, frontera-eficiente, reequilibrio, cartera]
fecha: 2026-07-12
fuentes: ["[[diversificacion-eficiente-bernstein]]"]
---

# Asignación de activos (*asset allocation*)

La decisión de **cómo repartir la cartera entre clases de activos** (acciones, bonos, liquidez, activos
reales…) y en qué proporciones — la decisión que, según la evidencia, explica la mayor parte de la
variabilidad del resultado de una cartera, por encima de la selección de valores individuales. Documentado
vía [[diversificacion-eficiente-bernstein|William Bernstein]] y en diálogo con [[ray-dalio]], [[cliff-asness]]
y [[larry-fink]]. Es el marco que faltaba para responder "¿cómo está construida mi cartera?" — distinto de
[[asignacion-de-capital]] (que es la decisión *corporativa* de qué hace una empresa con su caja).

## Las ideas de Bernstein (teoría moderna de carteras, para el particular)

- **La diversificación es "la única comida gratis"**: combinar activos que no se mueven igual (**correlación**
  baja) reduce la volatilidad de la cartera **más** de lo que reduce su retorno esperado — la
  *frontera eficiente* de Markowitz llevada al inversor de a pie.
- **El reequilibrio (*rebalancing*)** como disciplina mecánica: volver periódicamente a los pesos objetivo
  obliga a **vender lo que subió y comprar lo que cayó** — compra-barato-vende-caro automatizado, sin depender
  del juicio del momento. Es, en el fondo, una apuesta mecánica y diversificada a la [[reversion-a-la-media]].
  La misma lógica que el rebalanceo pasivo de [[paridad-de-riesgo-y-diversificacion|All Weather]] de Dalio.
- **La mezcla acciones/bonos** define el riesgo real de la cartera mucho más que qué acciones concretas elijas;
  la **desviación típica** y la correlación son las variables de diseño.
- Para la mayoría, la conclusión es **indexar y asignar bien**, no batir al mercado seleccionando valores
  ([[eficiencia-de-mercado]], [[precio-vs-cotizacion]]) — converge con el consejo de Bogle/Buffett al
  particular.

## Cómo dialoga con el resto del cerebro

- **Con [[ray-dalio]]**: Bernstein es la versión "media-varianza clásica" (pesos en euros); Dalio la reformula
  en **pesos de riesgo** (risk parity) porque un 60/40 en capital está ~90 % expuesto al riesgo de las
  acciones. Mismo problema (repartir riesgo, no capital), distinta métrica. → [[paridad-de-riesgo-y-diversificacion]].
- **Con [[cliff-asness]]**: AQR añade que la diversificación *entre factores* (value, momentum, calidad) importa
  tanto como entre clases de activos, y que se puede apalancar modestamente lo diversificado.
- **Tensión con la concentración**: Bernstein/Dalio diversifican por humildad estadística; Buffett/Ackman
  concentran por conocimiento. → [[carteras-concentradas]].

## Aplicación directa a Carlos

Es el marco que da nombre al hallazgo de su [[evaluacion-cartera-carlos-2026-07|análisis de cartera]]: 36
nombres pero una sola apuesta factorial (~45 % tangibles), correlación alta y **0 % en el cuadrante opuesto**
(bonos/liquidez — el cuadrante que desarrolla [[renta-fija-y-tipos]]). "Diversificación ilusoria" es, en el
lenguaje de Bernstein, una asignación de activos con correlaciones internas cercanas a 1. Ver
cartera actual y [[evaluar-una-cartera]].

## Tensiones

- **El riesgo como volatilidad, frente al riesgo como pérdida permanente**: Bernstein diseña con desviación
  típica y correlación; [[riesgo-real-vs-volatilidad]] (Graham/Buffett/Marks) sostiene que el riesgo real es
  la pérdida permanente de poder adquisitivo, no lo que oscila el precio. Para esa escuela, optimizar la
  frontera eficiente es responder con precisión a la pregunta equivocada. La resolución práctica depende del
  horizonte y de si el inversor puede permitirse ignorar el camino (ver [[horizonte-largo-plazo]]): a 20 años
  la volatilidad es ruido; a 2 años o con retiradas de por medio, es riesgo de verdad.
- **La correlación acciones/bonos no es una ley física**: la mezcla acciones/bonos como ancla defensiva supone
  correlación baja o negativa; [[mean-aversion-de-la-renta-fija]] (Siegel) advierte de que el bono no revierte
  como la acción y su papel diversificador **no está garantizado** — en un régimen inflacionario (ver
  [[represion-financiera]], [[super-ciclos-y-regimenes-estructurales]]) acciones y bonos caen juntos y la
  "única comida gratis" se encoge. Es la objeción que Dalio resuelve pasando de dos clases de activos a cuatro
  cuadrantes de entorno ([[paridad-de-riesgo-y-diversificacion]]) — pero pagando el peaje del apalancamiento
  que el resto del corpus rechaza ([[aversion-al-apalancamiento]]).
- **El reequilibrio choca con la fiscalidad**: vender mecánicamente lo que subió **realiza plusvalías** cada
  vez — la fricción que [[fiscalidad-del-inversor]] cuantifica como asesina silenciosa del compounding. En
  España el traspaso entre fondos sin peaje mitiga el problema solo dentro de fondos de inversión, no con
  acciones directas (ver [[fiscalidad-en-espana]]). Segunda orden: para Carlos, "reequilibrar" no es gratis;
  el diseño del rebalanceo (vía flujos nuevos, dentro de fondos, o por bandas de tolerancia) importa casi tanto
  como los pesos objetivo.

## Ver también

[[diversificacion-eficiente-bernstein]] · [[paridad-de-riesgo-y-diversificacion]] · [[carteras-concentradas]] ·
[[ray-dalio]] · [[cliff-asness]] · [[eficiencia-de-mercado]] · [[evaluar-una-cartera]] · [[asignacion-de-capital]] · [[javier-dv]] · [[carpatos-metodo]] · [[kathryn-kaminski]] ·
[[renta-fija-y-tipos]] · [[riesgo-real-vs-volatilidad]] · [[mean-aversion-de-la-renta-fija]] · [[reversion-a-la-media]]
