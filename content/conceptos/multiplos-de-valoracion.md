---
title: "Múltiplos de valoración (valoración relativa)"
tipo: concepto
tags: [valoracion, multiplos, per, ev-ebitda, damodaran, mckinsey]
fecha: 2026-07-09
fuentes: ["[[manuales-de-valoracion]]"]
---

# Múltiplos de valoración (valoración relativa)

La tercera herramienta de la caja ([[manuales-de-valoracion]]), y la más usada (y peor usada) del mundo real:
valorar una empresa por comparación con otras (PER, EV/EBITDA, precio/valor contable, EV/ventas). Damodaran la
llama **valoración relativa**; McKinsey la sitúa como **atajo y prueba de coherencia** del
[[flujo-de-caja-descontado|DCF]], nunca como sustituto.

## La tesis central: todo múltiplo esconde un DCF

McKinsey demuestra, a partir de la fórmula *value-driver*, que un múltiplo **no** lo determina solo el
crecimiento (creencia común), sino **el crecimiento Y el ROIC** conjuntamente. Dividiendo la fórmula del valor
por el beneficio:

$$ \frac{\text{Valor}}{\text{NOPLAT}} = \frac{1 - \dfrac{g}{\text{ROIC}}}{\text{WACC} - g} $$

De aquí, la lección de segundo orden: dos empresas con el **mismo PER** pueden ser bestias distintas. Ejemplo de
McKinsey — Procter & Gamble y Lowe's cotizaban ambas a ~20× beneficios, pero por razones opuestas: **P&G** con
**ROIC altísimo (38%) y crecimiento modesto (5%)**; **Lowe's** con ROIC bajo (12%) y crecimiento alto (9%). El
múltiplo idéntico oculta modelos de negocio opuestos.

Corolario de Terry Smith y Buffett: **un PER bajo no es "barato" ni uno alto es "caro"** por sí mismos — depende
de la calidad (ROIC) y de la durabilidad del crecimiento que hay detrás. Ver
[[retorno-sobre-capital-empleado]] y [[negocio-maravilloso-vs-precio-maravilloso]]; el mismo principio, seguido
a lo largo de todo el corpus, es lo que recoge [[sintesis-calidad-vs-precio]].

## Por qué los múltiplos perduran (y sus trampas)

- **Ventaja**: son un taquigrafía útil para comunicar y una **prueba de sanidad** del DCF (¿por qué esta
  empresa merece más múltiplo que su comparable? Por más crecimiento, más margen o más ROIC).
- **Trampa 1 — comparables engañosos**: aplicar el múltiplo medio del sector supone que tu empresa tiene el
  ROIC y crecimiento del sector. Diferencias de contabilidad, inflación, ciclicidad y estructura distorsionan.
  La mediana del sector es al menos una **vista exterior** honesta ([[tasas-base-y-vista-exterior]]); el error
  es aplicarla sin ajustar. McKinsey: "un múltiplo bien hecho cuesta el mismo esfuerzo que un buen DCF".
- **Trampa 2 — el peor error del inversor**: comprar "calidad a cualquier precio" o "barato = bueno". Graham y
  Marks lo repiten: *"there's no such thing as a good idea regardless of price"* ([[howard-marks|Marks]]). El múltiplo sin
  análisis del negocio es especulación (ver [[precio-vs-cotizacion]] y [[margen-de-seguridad]]).
- **EBITDA**: Buffett y Terry Smith desconfían del **EV/EBITDA** porque el EBITDA ignora el capex real y la
  amortización (Buffett: "¿acaso el capex lo paga el Ratoncito Pérez?"). Preferir el **flujo de caja libre** y
  la conversión de caja (ver [[valor-intrinseco]] y [[retorno-sobre-capital-empleado]]).

## Las familias de múltiplos (Damodaran, caps. 17-20)

Damodaran organiza los múltiplos por lo que ponen en el denominador, y a cada uno le asigna su **variable
fundamental** dominante:
- **Múltiplos de beneficios** — **PER** (precio/beneficio, sobre el equity), **EV/EBIT** y **EV/EBITDA** (sobre
  la empresa). Fundamentales: crecimiento, ROIC/payout y riesgo. El **PEG** (PER ÷ crecimiento) intenta
  ajustar el PER por el crecimiento — es la firma de [[peter-lynch]] y su GARP —, pero **ignora el riesgo y el
  ROIC** — engañoso si se usa a ciegas.
- **Múltiplos de valor contable** — **P/B** (precio/valor contable) y la **Q de Tobin** (valor de mercado ÷
  coste de reposición). Clave: el P/B se relaciona directamente con el **ROE** (una empresa que gana ROE > coste
  del equity *debe* cotizar por encima de su valor contable). Es el múltiplo natural de las
  [[valoracion-de-empresas-financieras|financieras]] (balance a valor de mercado).
- **Múltiplos de ventas** — **P/Ventas** y **EV/Ventas**. Fundamental: el **margen** (una empresa vale más por
  euro de ventas si convierte más en beneficio). Útiles cuando no hay beneficio
  ([[valoracion-empresas-jovenes-y-privadas|jóvenes]]/[[valoracion-ciclicas-y-beneficios-negativos|cíclicas enel valle]]), porque las ventas son la línea más estable y menos manipulable (ver
  [[estimacion-del-crecimiento]]).
- **Múltiplos por sector** — específicos (EV/suscriptor, EV/barril de reservas, precio/clic). Cómodos pero
  peligrosos: esconden supuestos sobre la conversión de esa métrica en caja.

Los **cuatro pasos** de Damodaran para usar bien un múltiplo: (1) **definirlo** de forma consistente (numerador
y denominador del mismo "dueño": equity con equity, empresa con empresa); (2) **describir** su distribución
(mediana del sector, no solo la media); (3) **analizar** su variable fundamental (¿qué mueve este múltiplo?);
(4) **aplicarlo** a comparables *de verdad* comparables (mismo ROIC, crecimiento y riesgo). El error habitual
es el paso 4: "comparables" que no lo son.

## Cómo lo usan los inversores del cerebro

- **[[terry-smith|Terry Smith]] / [[warren-buffett|Buffett]]**: miran el **FCF yield** (rendimiento del flujo de
  caja libre) más que el PER, y aceptan múltiplos altos si la calidad (ROIC) y el crecimiento del FCF lo
  justifican.
- **[[bill-ackman|Ackman]]**: compra "The Three" a 20-25× cuando una dislocación deprime el múltiplo por debajo
  de la calidad.
- **[[benjamin-graham|Graham]]**: el otro extremo — *net-nets* y precio/valor contable bajos, comprando activos
  por debajo de su valor de liquidación (P/B < 1).
- **Las gestoras españolas value** ([[francisco-garcia-parames]], [[azvalor-am]], [[horos-am]]): el uso más
  **mecanizado** del múltiplo en el cerebro — un múltiplo de salida sobre el flujo de caja *normalizado* de cada
  posición, publicado y auditado cada trimestre como "valor objetivo"/"potencial de revalorización" (ver
  [[margen-de-seguridad]]). Es la valoración relativa disciplinada por proceso, no por intuición.

## Tensiones

- **"Un PER bajo no es barato" (McKinsey/Smith) vs. Carlisle (la baratura sola bate a barato + calidad).**
  [[deep-value-carlisle]] encuentra que EV/EBIT bajo, aplicado cuantitativamente y en cartera, ha batido
  históricamente a combinar baratura con filtros de calidad — contradice de frente el corolario de esta página
  de que el múltiplo sin análisis de ROIC/crecimiento no dice nada. La tensión es de método: juicio cualitativo
  por posición (Smith, Buffett) vs. regla estadística diversificada (Carlisle, y en la práctica Paramés).
- **EV/EBITDA: múltiplo legítimo (Damodaran) vs. práctica "perniciosa" (Buffett).** Damodaran lo cataloga con
  su variable fundamental como cualquier otro; Buffett y Smith lo rechazan porque el EBITDA trata la
  depreciación como no real — y en negocios intensivos en capital (BNSF: la depreciación *subestima* el capex
  de mantenimiento, ver [[valor-intrinseco]]) el EBITDA sobrevalora sistemáticamente. La discrepancia no es de
  gusto: es sobre qué es un gasto.
- **El múltiplo como "prueba de coherencia" vs. el múltiplo como ancla del consenso.** McKinsey lo propone como
  check del DCF; en la práctica de mercado el múltiplo del sector *es* la valoración, y en las burbuja los
  múltiplos "por sector" (EV/clic, EV/suscriptor) sirvieron para justificar precios sin caja detrás (la
  crítica de Buffett de 2000 en [[valor-intrinseco]]). El atajo que debía comprobar el pensamiento acaba
  sustituyéndolo — lo contrario del [[pensamiento-de-segundo-nivel]].

## Ver también

- [[flujo-de-caja-descontado]] · [[coste-de-capital-wacc]] · [[retorno-sobre-capital-empleado]]
- [[valor-intrinseco]] · [[negocio-maravilloso-vs-precio-maravilloso]] · [[margen-de-seguridad]] · [[manuales-de-valoracion]]
