---
title: "Flujo de caja descontado (DCF) y la fórmula value-driver"
tipo: concepto
tags: [valoracion, dcf, roic, crecimiento, damodaran, mckinsey]
fecha: 2026-07-09
fuentes: ["[[manuales-de-valoracion]]"]
---

# Flujo de caja descontado (DCF) y la fórmula value-driver

La herramienta central de la "caja de herramientas" de valoración del cerebro (manuales de **McKinsey** y
**Damodaran** — ver [[manuales-de-valoracion]]). Es el **cómo** técnico detrás del [[valor-intrinseco]] que
Buffett, Graham, Marks y Smith invocan en prosa.

## La idea en una frase

> El valor de un negocio es el **valor presente de los flujos de caja que generará a lo largo de su vida**,
> descontados al coste de capital.

Es literalmente el marco de Aesop de Buffett ("un pájaro en mano...") formalizado. McKinsey lo ilustra con la
parábola de *Fred's Hardware* y el par *Value, Inc. vs Volume, Inc.*: dos empresas con **beneficios idénticos**
pero distinto valor, porque una reinvierte el 25% de sus beneficios y la otra el 50% para lograr el mismo
crecimiento. Lo que importa no es el beneficio contable, sino **la caja que queda tras reinvertir**.

## FCFF vs FCFE (Damodaran)

- **FCFF** (*free cash flow to the firm*): flujo para todos los proveedores de capital (deuda + equity); se
  descuenta al **WACC** y da el valor de la empresa (*enterprise value*). Restando la deuda neta se llega al
  valor del *equity*.
- **FCFE** (*free cash flow to equity*): flujo que queda para el accionista tras pagar la deuda; se descuenta al
  **coste del equity** y da directamente el valor de las acciones.
- **Modelos de dividendos** (DDM): caso particular donde el flujo al accionista es el dividendo.

Toda valoración por descuento tiene tres piezas: (1) **flujos de caja** proyectados, (2) una **tasa de
descuento** (ver [[coste-de-capital-wacc]], con sus inputs en [[prima-de-riesgo-y-beta]]) y (3) un
[[valor-terminal|valor terminal]] (el grueso del valor: la perpetuidad tras el horizonte explícito, típicamente
con la fórmula de Gordon).

## La fórmula del "value driver" (el "Zen of Corporate Finance" de McKinsey)

McKinsey destila toda la valoración en una ecuación que relaciona el valor con sus **tres motores
fundamentales**: crecimiento (g), retorno sobre el capital (ROIC) y coste de capital (WACC):

$$ \text{Valor} = \frac{\text{NOPLAT} \cdot \left(1 - \dfrac{g}{\text{ROIC}}\right)}{\text{WACC} - g} $$

Donde NOPLAT = beneficio operativo después de impuestos. De aquí salen las verdades de segundo orden que unen
toda la caja de herramientas con la filosofía de los inversores:

- **El crecimiento solo crea valor si ROIC > WACC.** Si ROIC = WACC, crecer no añade ni destruye valor
  (el inversor gana lo mismo en otro sitio). Si **ROIC < WACC, crecer DESTRUYE valor**. Por eso [[terry-smith|Terry Smith]]
  persigue [[retorno-sobre-capital-empleado|ROCE/ROIC]] alto: es la condición para que el crecimiento
  componga en vez de quemar capital.
- **La relación crecimiento–reinversión**: $g = \text{ROIC} \times \text{tasa de reinversión}$. Un negocio de
  ROIC 20% que reinvierte el 25% crece al 5% "gratis"; para crecer más hay que reinvertir más (ver
  [[negocio-maravilloso-vs-precio-maravilloso]]).
- **DCF = valor presente del beneficio económico.** McKinsey demuestra que descontar los flujos da lo mismo que
  *capital invertido + valor presente del beneficio económico*, donde **beneficio económico = capital ×
  (ROIC − WACC)**. Una empresa vale más que su capital invertido **solo** en la medida en que gana por encima
  de su coste de capital. Es la definición cuantitativa del [[foso-economico|foso]] y la base del EVA de
  [[creacion-de-valor-y-eva]].

## Puentes con la filosofía del cerebro

- **Mercado real vs. mercado financiero** (McKinsey): el retorno del accionista no depende del desempeño de la
  empresa, sino de su **desempeño frente a las expectativas** (analogía del *point spread*: no basta con que
  gane el favorito, tiene que cubrir el diferencial). Es la misma idea que [[precio-vs-cotizacion]],
  [[mr-market]] y el "pensamiento de segundo nivel" de Marks ([[pensamiento-de-segundo-nivel]]): lo que ya se
  espera está en el precio.
- **Limitaciones (Damodaran + escepticismo de los inversores)**: el DCF es tan bueno como sus supuestos
  ("garbage in, garbage out"); el valor terminal domina y es muy sensible a g y WACC. De ahí que Graham y Marks
  exijan un [[margen-de-seguridad]]: no confiar en una cifra exacta, sino comprar con descuento suficiente para
  absorber el error de estimación. Y hay sectores donde el DCF directamente **rompe** (bancos y aseguradoras:
  la deuda es materia prima, no financiación — ver [[valoracion-de-empresas-financieras]]).

## Tensiones

- **El DCF necesita predecir; Graham construyó el margen de seguridad precisamente porque no se puede
  predecir.** La cita de Graham ("render unnecessary an accurate estimate of the future",
  [[margen-de-seguridad]]) es la respuesta filosófica al GIGO de Damodaran. El cerebro los usa juntos (el DCF
  para *pensar*, el margen para *actuar*), pero la tensión es real: cuanto más largo y sensible el modelo, más
  trabajo hace el colchón.
- **El input que más mueve el DCF (g) es, empíricamente, el peor estimado.** Las expectativas basadas en
  crecimiento pasado o previsto "han sido, si acaso, dañinas" para predecir retornos ([[retornos-esperados]],
  AQR), y el crecimiento histórico no predice el futuro ("Higgledy Piggledy", [[estimacion-del-crecimiento]]).
  La herramienta más precisa del cerebro descansa sobre su variable menos fiable.
- **Taleb: el DCF asume un mundo de varianza acotada.** [[nassim-taleb]] negaría que los flujos futuros sean
  proyectables en régimen gaussiano; con colas gordas, el valor esperado del DCF es una ilusión de precisión.
  Su respuesta no es descontar mejor, sino cambiar de arquitectura (evitar la ruina, barbell). Es la versión
  dura del escepticismo "approximately right" de Buffett ([[valor-intrinseco]]).

## Ver también

- [[michael-mauboussin]] — *Everything Is a DCF Model* y *Expectations Investing*: leer el precio al revés para inferir las expectativas implícitas

- [[warren-buffett]] — la tensión de método: el DCF exige proyectar con precisión (crecimiento, WACC, valor
  terminal) y Buffett prefiere ser "aproximadamente correcto que precisamente equivocado" (ver Tensiones)
- [[valor-intrinseco]] · [[coste-de-capital-wacc]] · [[retorno-sobre-capital-empleado]] · [[multiplos-de-valoracion]]
- [[margen-de-seguridad]] · [[foso-economico]] · [[manuales-de-valoracion]]
