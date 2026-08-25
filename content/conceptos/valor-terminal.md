---
title: "Valor terminal (*terminal value*)"
tipo: concepto
tags: [valoracion, dcf, valor-terminal, crecimiento-estable, damodaran, mckinsey]
fecha: 2026-07-09
fuentes: ["[[manuales-de-valoracion]]"]
---

# Valor terminal (*terminal value*)

La pieza del [[flujo-de-caja-descontado|DCF]] que suele **concentrar la mayor parte del valor** y que más
polémica genera. Como no se pueden proyectar flujos hasta el infinito, se corta la proyección explícita en un
año *n* y se estima un **valor terminal**: el valor de todos los flujos posteriores. Damodaran (cap. 12) y
McKinsey (*continuing value*) coinciden en lo esencial.

## Las tres formas de estimarlo (y por qué solo dos valen)

$$ \text{Valor} = \sum_{t=1}^{n} \frac{CF_t}{(1+k)^t} + \frac{\text{Valor Terminal}_n}{(1+k)^n} $$

1. **Valor de liquidación**: lo que otros pagarían por los activos acumulados. Válido cuando se asume vida
   finita (sectores en extinción). Puede basarse en valor contable ajustado por inflación o en la capacidad de
   generar caja de los activos.
2. **Múltiplo** (aplicar un PER o EV/ventas al año terminal): **peligroso**. Si el múltiplo sale de comparables,
   conviertes tu DCF en una [[multiplos-de-valoracion|valoración relativa]] disfrazada — mezcla incoherente de
   valor intrínseco y valor relativo.
3. **Modelo de crecimiento estable** (perpetuidad de Gordon): la **única forma consistente** dentro de un DCF.
   $$ \text{VT}_n = \frac{CF_{n+1}}{k - g_{\text{estable}}} $$

## La restricción de hierro del crecimiento estable

> El crecimiento perpetuo **no puede superar el crecimiento de la economía** en la que opera la empresa — y como
> regla práctica, **no debe exceder el tipo sin riesgo** usado en la valoración.

La razón (elegante): a largo plazo el tipo sin riesgo nominal converge con el crecimiento nominal de la economía
($R_f = $ tipo real $+$ inflación $\approx$ crecimiento real $+$ inflación). Si $g$ superara a la economía, la
empresa acabaría siendo *más grande que la economía entera*. Es el error nº1 que infla valoraciones: pequeños
cambios en $g$ mueven enormemente el valor cuando $g \to k$, y los analistas lo usan para "colar" sus sesgos.
(El crecimiento estable **puede ser negativo**: una empresa que se auto-liquida parcialmente cada año —
fabricantes de máquinas de escribir tras el PC.)

## La verdad de segundo orden: no es el crecimiento, son los retornos en exceso

El hallazgo más importante del capítulo, y el que enlaza toda la caja de herramientas con la filosofía del
cerebro: **lo que da valor no es $g$, sino que ROIC > coste de capital en perpetuidad.** Damodaran lo demuestra:
al ligar la reinversión al crecimiento ($\text{tasa de reinversión} = g / \text{ROIC}$), si en el estado estable
**ROIC = coste de capital**, entonces:

$$ \text{VT} = \frac{\text{EBIT}(1-t)}{\text{coste de capital}} \quad\Rightarrow\quad g \text{ no afecta al valor} $$

Es decir: **crecer sin foso no crea valor** (solo hace la empresa más grande). Es exactamente la fórmula
*value-driver* de McKinsey ([[flujo-de-caja-descontado]]) y la razón de que [[terry-smith|Terry Smith]] y Buffett persigan
[[retorno-sobre-capital-empleado|ROIC]] alto y **duradero**, no crecimiento a secas (ver
[[negocio-maravilloso-vs-precio-maravilloso]]).

## ¿Cuánto dura el crecimiento alto? El periodo de ventaja competitiva (CAP)

El crecimiento que *crea valor* viene de **retornos en exceso**, y en un mercado competitivo esos retornos
**atraen competencia y se erosionan** (la [[reversion-a-la-media]] actuando sobre el ROIC). Damodaran llama a
la ventana en que se mantienen el *Competitive Advantage Period* (CAP). Tres factores lo alargan:

1. **Tamaño** (empresas pequeñas en mercados grandes tienen más pista).
2. **Crecimiento y retornos en exceso actuales** (el momentum importa).
3. **Magnitud y sostenibilidad de las ventajas competitivas** — el factor decisivo: es literalmente el
   [[foso-economico|foso]]. Barreras de entrada altas y duraderas ⇒ CAP largo; foso erosionándose ⇒ ser
   conservador. La calidad de la gestión también influye.

Es el puente más directo entre la mecánica del DCF y el foso: **el valor terminal ES una apuesta sobre cuántos
años sobrevive el foso.** Y como tal apuesta, conviene anclarla en la tasa base histórica de duración de los
retornos en exceso, no en la narrativa del caso concreto ([[tasas-base-y-vista-exterior]]).

## Cómo cambia la empresa al llegar al estado estable

Al pasar de alto crecimiento a estable, hay que "envejecer" los supuestos: **beta → 1** (tope ~1,2), **ROIC →
coste de capital** (o media del sector; asumir *cero* exceso es demasiado brusco: los fosos se desvanecen, no
se apagan de golpe), **más deuda**, y **menos reinversión** ($\text{reinversión} = g/\text{ROIC}$). Transición
en 2, 3 o *n* etapas según lo dramático del cambio.

## La crítica al valor terminal, rebatida

Los críticos dicen que "demasiado valor viene del TV" y que "es manipulable". Damodaran responde: (1) es
**normal** que el grueso del valor esté en el TV — cuando inviertes en acciones, la mayor parte del retorno
llega al **vender** (apreciación), no de los dividendos; el TV captura eso. (2) Se manipula solo si usas
múltiplos o violas las dos reglas (g ≤ economía; hay que reinvertir para crecer). El antídoto del inversor:
[[margen-de-seguridad]] — no fiarse de una cifra exacta tan sensible a $g$ y $k$.

## Supervivencia y distress

Para empresas jóvenes o arriesgadas, el TV asume una vida perpetua que puede no darse. Herramienta: el
***cash-burn ratio*** (caja ÷ EBITDA) mide en cuántos meses se agota la liquidez. El valor puede ajustarse:
$$ \text{Valor ajustado} = \text{DCF}(1 - p_{\text{distress}}) + \text{Valor de venta forzada} \cdot p_{\text{distress}} $$
Enlaza con el riesgo de pérdida permanente de [[riesgo-real-vs-volatilidad]] y con [[valoracion-ciclicas-y-beneficios-negativos]].

## Tensiones

- **El VT con ROIC > WACC a 10+ años es una apuesta contra la tasa base de la reversión.** GMO
  ([[jeremy-grantham]]) lleva décadas documentando que los márgenes y retornos altos revierten — "la fuerza más
  potente de las finanzas" — y [[deep-value-carlisle]] la erige en motor del deep value. El DCF bien hecho
  asume el *fade* hacia el coste de capital; el mal hecho (y la narrativa del negocio maravilloso mal aplicada,
  [[negocio-maravilloso-vs-precio-maravilloso]]) asume foso eterno. La diferencia entre ambos es el grueso del
  valor calculado.
- **El mercado paga crecimiento per se, contra la demostración de Damodaran.** El hallazgo "si ROIC = coste de
  capital, g no afecta al valor" choca con la práctica del mercado — y con el PEG de [[peter-lynch]], que pone
  g directamente en el denominador del "precio justo". En los booms el precio deja de distinguir entre
  crecimiento con y sin retornos en exceso (ver [[ciclos-de-mercado]]); el VT disciplinado es el antídoto, y
  también la razón de que el analista disciplinado parezca "caro en todo" en la fase de Optimismo
  ([[fases-del-ciclo-bursatil]]).
- **g ≤ economía vs. las tesis de "esta vez es diferente".** La restricción de hierro ha sido violada
  retóricamente en cada burbuja: la puntocom (la crítica de Buffett en [[valor-intrinseco]]) y, hoy, parte de
  la narrativa del capex de IA ([[financiacion-estructurada-del-capex-de-ia]]). La restricción no dice que la
  empresa no pueda crecer décadas — dice que alguien debe dejar de crecer para que ella lo haga, y eso rara vez
  entra en el modelo.

## Ver también

- [[flujo-de-caja-descontado]] · [[coste-de-capital-wacc]] · [[retorno-sobre-capital-empleado]] · [[foso-economico]]
- [[estimacion-del-crecimiento]] · [[margen-de-seguridad]] · [[manuales-de-valoracion]]
