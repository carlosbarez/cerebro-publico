---
title: "Damodaran — *Strategic Risk Taking: A Framework for Risk Management* (2007)"
tipo: fuente
tags: [damodaran, riesgo, var, opciones-reales, cobertura, gestion-de-riesgo, prima-de-riesgo]
fecha: 2026-07-22
fuentes: ["[[manuales-de-valoracion]]", "[[damodaran-country-risk]]"]
destilado_por: openrouter
---

# Damodaran — *Strategic Risk Taking: A Framework for Risk Management* (2007)

> **Aviso de fiabilidad.** Página escrita desde un destilado automático (OpenRouter) **no verificado contra
> el crudo**, salvo lo que se indique expresamente. Es un libro de marcos, no de datos, así que casi todo lo
> que sigue es prosa conceptual; las pocas cifras están confinadas al final, marcadas y **no deben sostener
> una tesis ni una decisión sin re-leer el pasaje**. Ver [[reparto-openrouter-claude]].

**Qué es incremental — y por qué esta página existe.** El cerebro tiene el aparato de valoración de Damodaran
muy cubierto ([[manuales-de-valoracion]], [[damodaran-dark-side-of-valuation]], [[damodaran-country-risk]]),
y tiene el riesgo tratado desde dos ángulos: la pérdida permanente de capital del value clásico
([[margen-de-seguridad]], [[riesgo-real-vs-volatilidad]]) y la incertidumbre no modelable de
[[nassim-taleb]]. Lo que **no** tenía es el ángulo del medio: **el riesgo como algo que se elige asumir a
propósito, donde tienes ventaja**. La tesis del libro cabe en una línea: *la gestión de riesgo no consiste en
minimizar riesgo, sino en decidir cuál explotar, cuál traspasar al inversor y cuál cubrir.*

Damodaran encuadra el libro como puente entre tres tribus que no se hablan — economistas del comportamiento,
medidores de riesgo (VaR, CAPM, APT) y estrategas corporativos — y arranca del símbolo chino 危机: **riesgo
como dualidad peligro/oportunidad**. Las empresas que crean valor duradero no son las que menos riesgo
asumen, sino las que asumen el riesgo donde tienen una ventaja competitiva real.

## La distinción que ordena todo el libro: cubrirse es un *put*, gestionar riesgo es un *call*

Es la aportación más limpia y la que más se usa fuera del libro:

- **Cubrirse (*hedging*)** = comprar un *put* contra la caída de valor. Es defensivo, cuesta dinero y su
  beneficio está acotado.
- **Gestionar el riesgo** = construir un *call*: información, velocidad, experiencia, recursos y
  flexibilidad que permiten aprovechar el riesgo cuando se materializa. Es ofensivo y su beneficio no está
  acotado.

De ahí se sigue **cuándo cubrirse destruye valor**: en una empresa grande, diversificada y sin apenas deuda,
el accionista ya puede cubrirse él solo y más barato — pagar la cobertura desde la empresa es un coste sin
beneficio marginal. La cobertura sí crea valor en empresas apalancadas o cerradas, con costes de *distress*
altos, o donde el inversor no puede replicar la cobertura por su cuenta. Damodaran es escéptico con la
evidencia empírica de que cubrirse cree valor por sí solo, y apunta a la motivación real más frecuente:
**estabilizar el beneficio reportado, que es a lo que está ligada la retribución del gestor** — un problema de
agencia disfrazado de prudencia. Conecta con [[aversion-al-apalancamiento]] y
[[gobierno-corporativo-consejos]].

## Dónde meter el riesgo en la valoración (y el error de contarlo dos veces)

El libro da una tipología de riesgo → tratamiento que es directamente operativa para
[[flujo-de-caja-descontado]]:

| Tipo de riesgo | Dónde se refleja |
|---|---|
| De mercado, continuo | En la **tasa de descuento** ([[coste-de-capital-wacc]]) |
| De mercado, discontinuo (raro, alto impacto) | Como **coste de seguro en los flujos** |
| Contingente a un suceso concreto | Como **coste de la opción de cobertura en los flujos** |
| Específico de la empresa (idiosincrásico) | **Ningún ajuste**, si el inversor está diversificado |

Y la regla dura que se repite en todo el corpus de Damodaran: **el riesgo se cuenta una vez**. Subir la prima
*y* recortar los flujos *y* subir la beta por el mismo motivo es el error cardinal — el mismo que ya recogen
[[prima-de-riesgo-y-beta]] y [[damodaran-country-risk]]. Ajustar la tasa y ajustar los flujos por
equivalente-cierto son dos vías *matemáticamente equivalentes* si se usa la prima compuesta correcta; lo que
no vale es mezclarlas.

## Las herramientas, con sus límites (que es lo valioso)

Damodaran casi nunca presenta una herramienta sin decir dónde se rompe. Recogido así:

- **Escenarios** — para riesgo concurrente (2-3 factores a la vez). Sirven mientras las probabilidades
  conjuntas sean defendibles.
- **Árboles de decisión** — para riesgo **secuencial** por fases (el caso canónico: las tres fases de
  aprobación de un fármaco). Fallan por dos sitios: el valor esperado del árbol **no está ajustado por
  riesgo**, y todo el cálculo asume que el gestor abandonará en el nodo donde el árbol dice abandonar. Si no
  hay esa disciplina, el número es ficción.
- **Simulación de Monte Carlo** — captura distribuciones e interacciones entre inputs. Su trampa está en que
  *"produce resultados de aspecto excelente aunque los inputs sean aleatorios"*: exige conocer de verdad las
  distribuciones, y el error fatal es descontar los flujos simulados a la tasa libre de riesgo y luego usar la
  desviación típica del resultado como medida de riesgo — otra vez, doble conteo.
- **Opciones reales** — solo hay opción si concurren tres cosas: **aprender + poder adaptarse +
  exclusividad**. Sin exclusividad el valor de la opción tiende a cero, y ese es el filtro que impide que el
  marco se convierta en una máquina de justificar cualquier inversión. Ver [[opciones-reales]], que ya recoge
  de *Investment Valuation* la regla de no sumar la opción a un DCF que ya la incorpora vía crecimiento.
- **Value at Risk (VaR)** — aquí Damodaran es abiertamente hostil: lo llama un retroceso, no un avance.
  Cinco fallos: mal ajuste de la distribución que subestima la cola; errores en la matriz de covarianzas;
  correlaciones no estacionarias; foco estrechísimo (solo cola izquierda, solo corto plazo, solo riesgo de
  mercado); e incentivos perversos, porque es manipulable y premia acumular riesgo justo en la cola que no
  mide. Su frase: el VaR *"toma un subconjunto de la información que sale del análisis de escenarios y tira el
  resto"*. Para una empresa no financiera debe ser medida **secundaria**, nunca primaria.

## Lo que un inversor puede usar directamente

- **Las cinco ventajas explotables**: información, velocidad, experiencia, recursos y flexibilidad. Es la
  respuesta a "¿qué distingue explotar riesgo de apostar?" — solo lo primero si identificas cuál de las cinco
  tienes. Encaja como test sobre una empresa en cartera: *cuando este sector se pone feo, ¿qué tiene esta
  empresa que le permita comprar barato mientras los demás sobreviven?* Es la versión formal de la ventaja de
  balance que ya aparece en [[foso-economico]] y en el comportamiento de las gestoras value en las caídas.
- **La paradoja de Bowman**, la señal de alerta más útil de la fuente: las empresas **por debajo** de su
  objetivo de rentabilidad tienden a asumir riesgo destructivo (huida hacia adelante); las que están **por
  encima** asumen riesgo selectivo que crea valor. Traducido a red flag: una empresa rezagada que de pronto
  anuncia una diversificación audaz merece más escepticismo que la misma jugada hecha por el líder del sector.
  Conecta con [[asignacion-de-capital]] y [[adquisiciones-fusiones-y-sinergias]].
- **Las cuatro palancas de valor**: la gestión de riesgo puede mover flujos, crecimiento (reinversión ×
  ROIC), **duración del periodo de exceso de retorno** y tasa de descuento. Cubrirse solo toca —a veces— la
  última. Dicho de otro modo: la gestión de riesgo ambiciosa actúa sobre el numerador; la cobertura, apenas
  sobre el denominador.

## Tensión con Taleb, que es donde esto se pone interesante

**Coinciden** en el diagnóstico: Damodaran cita a Mandelbrot (colas gordas, leyes de potencia) y desmonta el
VaR con el mismo argumento con que [[nassim-taleb]] desmonta la gaussiana. La distinción riesgo continuo /
riesgo discontinuo de la tabla de arriba es, en la práctica, Mediocristán vs. Extremistán.

**Divergen** en qué hacer después. Damodaran sigue siendo un cuantificador convencido: *"una estimación con
error es mejor que ninguna estimación"*, y su tratamiento del riesgo de cola es ponerle precio (coste de
seguro, coste de la opción). Taleb responde que en Extremistán la distribución de la cola no es estimable, así
que ese seguro está mal tarifado por construcción y la respuesta correcta no es calcular sino hacerse robusto.
**No se resuelve aquí**: es una de las tensiones vivas del corpus y conviene dejarla abierta, porque las dos
posturas fallan en distinto sitio.

Segunda tensión, interna al propio Damodaran: [[prima-de-riesgo-y-beta]] cierra con la tesis del cerebro de
que la beta no mide el riesgo que importa (Buffett, Graham y Marks miden pérdida permanente, no volatilidad).
Este libro no lo contradice pero mueve el terreno: dedica dos capítulos a fundamentar, desde la economía del
comportamiento, **por qué la volatilidad sí importa a un humano concreto** (utilidad marginal decreciente,
aversión a la pérdida, *myopic loss aversion*). La reconciliación honesta es que miden riesgos distintos para
inversores distintos: la beta es una mala medida para el inversor diversificado y de horizonte largo — que es
el caso de Carlos, ver objetivos — y menos mala para quien tiene el patrimonio concentrado y horizonte
corto. El propio Damodaran lo admite al proponer la **beta total** para dueños no diversificados.

## Cifras (no verificadas — solo casos didácticos)

Casi todas las cifras del libro son casos de clase (Bangkok Disney, Avonex/Biogen, [[home-depot|Home Depot]], una reserva
petrolera) construidos para enseñar el método, no datos del mundo con valor de tasa base — por eso **no se
suben a esta página**: no aportan al cerebro y sí traerían riesgo de error. Las que sí tendrían valor de dato
(descuentos por iliquidez del 20-35% de los estudios de *restricted stock*, el porcentaje de mineras de oro
que cubren) están marcadas como **sospechosas por el propio destilado**: son medias de estudios académicos,
exactamente el patrón que el modelo barato ya reetiquetó mal en la ingesta de Kentley. **Quedan fuera hasta
que alguien las contraste contra el crudo.**

## Discrepancias entre destilados, sin resolver

1. **¿El VaR es una herramienta de nicho legítima o una regresión metodológica?** Un fragmento lo presenta
   como técnica paralela con su ámbito (banca); otro lo presenta como un empobrecimiento de los escenarios.
2. **¿Simulación y opciones reales son alternativas o la primera alimenta a la segunda?** Un fragmento dice
   explícitamente que son complementarias (la simulación da la volatilidad que la opción necesita); otro
   presenta Monte Carlo como método de valoración autónomo, sin conectarlo.
3. **¿Buffett rechazando el CAPM es una excepción tolerada o una aplicación del propio marco del libro?** Un
   fragmento lo trata como caso especial ("puede permitírselo por el tipo de empresa que elige"); el marco de
   las cinco ventajas explotables sugiere más bien que Buffett está haciendo exactamente lo que el libro
   recomienda.
4. **El escepticismo de Damodaran crece capítulo a capítulo** — neutral con los modelos clásicos, mordaz con
   el VaR, empírico-escéptico con la cobertura — sin que el libro llegue a fijar un principio único sobre
   cuánto fiarse de las herramientas cuantitativas.

## Enlaces

[[prima-de-riesgo-y-beta]] · [[riesgo-real-vs-volatilidad]] · [[opciones-reales]] ·
[[flujo-de-caja-descontado]] · [[coste-de-capital-wacc]] · [[nassim-taleb]] · [[manuales-de-valoracion]] ·
[[damodaran-country-risk]] · [[damodaran-dark-side-of-valuation]] · [[asignacion-de-capital]] ·
[[foso-economico]] · [[aversion-al-apalancamiento]]
