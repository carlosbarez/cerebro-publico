---
title: "Security Analysis — Benjamin Graham & David Dodd (1934)"
tipo: fuente
cobertura: parcial
tags: [libro, graham, dodd, renta-fija, margen-de-seguridad, valor-intrinseco, analisis]
fecha: 2026-07-12
fuentes: []
---

# Security Analysis — Benjamin Graham & David Dodd (1934)

El **manual técnico fundacional** del análisis de valores (edición española *"Security Analysis: Principios y
técnica"*), escrito por Graham y Dodd tras el Crash de 1929. PDF en `raw/` (~1.097 pp.), extraído con
`PyMuPDF`, lectura selectiva. **Cierra el hueco #2 del roadmap.** Es el hermano riguroso y profesional de
[[el-inversor-inteligente]] (1949, para el generalista): mismo cimiento filosófico, mucho más detalle técnico.

## Qué añade respecto a *El Inversor Inteligente* (por qué no es redundante)

- **El análisis de renta fija es el corazón del libro** (los bonos se mencionan ~1.900 veces). Graham empieza
  por los **bonos y acciones preferentes** —no por las acciones— porque la seguridad va primero: el grueso de
  la obra son los criterios de solvencia, cobertura de intereses, cláusulas de protección y jerarquía de
  cobro. Es la pieza que faltaba al cerebro sobre **cómo analizar deuda**, no solo negocios (complementa
  [[valoracion-de-empresas-financieras]] y [[fondo-de-maniobra-y-ciclo-de-caja]]).
- **El [[margen-de-seguridad]] en su formulación técnica original** (43 menciones): no como eslogan sino como
  método —comprar con un colchón cuantificado entre precio y valor, y exigirlo **más grande** cuanto más
  incierto el activo—.
- **El [[valor-intrinseco]] definido con rigor** (81 menciones): *"el análisis se ocupa de valores que se
  sostienen sobre hechos, no de los que establece la cotización"*; el valor intrínseco es un **rango**, no un
  número exacto, y basta con que el precio esté claramente por debajo o por encima de ese rango.
- **La distinción inversión/especulación** llevada al detalle operativo, y los **factores cuantitativos vs.
  cualitativos** de un análisis.

## Por qué importa para el cerebro

Es la **raíz técnica** de todo el value investing del corpus: lo que [[warren-buffett]], [[francisco-garcia-parames]],
[[deep-value-carlisle]] y [[horos-am]] aplican con variantes. Refuerza la [[margen-de-seguridad|anotación de raíz]] de los conceptos heredados de Graham y añade el eje de **renta fija** que el cerebro apenas tocaba
(relevante para el cuadrante vacío de bonos/liquidez de la cartera actual de Carlos, aunque Graham lo mira
como analista de crédito, no como asignador de activos).

## Nota de cobertura

Ingesta **selectiva** de un tratado de 1.097 páginas: capturados el marco (inversión vs. especulación, margen
de seguridad, valor intrínseco) y el **eje distintivo de renta fija**; el detalle numérico de los cientos de
casos de empresas de los años 1920-30 queda como referencia consultable, no releída entera. Las "situaciones
especiales"/*workouts* que reclamaban [[horos-am]] y [[benjamin-graham]] están tratadas en la obra pero de
forma dispersa; profundizar si una consulta futura lo pide.

## Lectura completa (2026-07-22) — el aparato operativo, **verificado contra el crudo**

La primera ingesta declaraba pendiente el detalle numérico. Está aquí. Destilado por OpenRouter, pero **todas
las cifras contrastadas una a una contra el PDF** por un subagente Anthropic, con página. Las que el destilado
traía mal van corregidas y señaladas — porque el error importa tanto como el dato.

### Los criterios de renta fija (la mitad del libro que nadie resume)

Graham y Dodd construyen la selección de bonos como **arte negativo**: *"Se trata de un proceso de exclusión y
rechazo, más que de búsqueda y aceptación"* (p. 183). Los umbrales, verificados:

| Criterio | Suministros | Ferrocarriles | Industriales |
|---|---|---|---|
| Cobertura mínima de **cargos fijos** (bonos) | 1¾× | 2× | 3× |
| Cobertura exigida a **preferentes** (cargos fijos + dividendo preferente) | 2× | 2½× | 4× |
| Tamaño mínimo del emisor (ingresos brutos) | 2 M$ | 3 M$ | 5 M$ |

*(Municipios: 10.000 habitantes.)* Más tres reglas de método: el **período de prueba es de siete años**, no
cinco, computando **los años deficitarios como cero** (p. 233) — regla anti-maquillaje que sigue vigente; en
los bonos industriales, el **capital de trabajo debe ser como mínimo igual a la deuda en bonos** (p. 288); y
la deuda "efectiva" de un ferrocarril se obtiene **multiplicando los cargos fijos por 22**, equivalente a
capitalizarlos al 4,5% (p. 286) — el antecedente directo de capitalizar arrendamientos, que la contabilidad
moderna tardó ochenta años en obligar. Cuando hay alquileres significativos (típicamente cadenas minoristas),
**se añade un tercio del alquiler anual a los gastos fijos** (p. 336).

### Las preferentes: inferioridad contractual, no un híbrido cómodo

Un tercio del libro trata las acciones preferentes, y la conclusión es dura: el dividendo preferente **no es
un derecho exigible sino una decisión discrecional del consejo**, que a menudo lo retiene *"cuando el pago no
es en absoluto imposible, sino simplemente poco conveniente"*. De ahí la exigencia de que una preferente pase
**todos los tests de un bono más un margen adicional**. El dato que lo resume: en 1932, de las ~440
preferentes cotizadas en el NYSE, **solo 21** se negociaban de forma continua como inversión (p. 312). Cuando
hoy aparezca un híbrido con cupón atractivo, la pregunta de Graham sigue siendo la correcta: *¿quién decide si
me pagan?*

### Los otros métodos que faltaban

- **Valor de liquidación y activo circulante neto** (caps. 42-45): un método sistemático, no una anécdota. Si
  el precio cae persistentemente por debajo del activo circulante neto, o el mercado se equivoca o la empresa
  debe liquidarse — en ambos casos, *clama que se le preste atención*. Dato verificado y **corregido**: en
  1932, el **40% de las empresas industriales** del NYSE cotizó en algún momento por debajo de su **activo
  circulante neto** (p. 773) — no "el 40% de los valores del NYSE por debajo del valor de liquidación", como
  decía el destilado. Ver [[deep-value-carlisle]].
- **Trampas contables** (caps. 31-36): extraordinarios camuflados como ordinarios, fondo de comercio inflado
  vía filiales, plusvalías de arrendamientos contabilizadas como ingreso, y sobre todo la **amortización
  ajustada del inversor** — el gasto real de reposición, no la cifra contable. Con una regla que no admite
  matices: *"Cuando una empresa lleva a cabo políticas contables dudosas, el inversor debe eludir todos sus
  títulos, sin importar lo seguros o atractivos que puedan parecerle"* (p. 595). → [[contabilidad-y-calidad-de-beneficios]].
- **Pactos de protección y control por voto** (caps. 18-21): las cláusulas son necesarias pero insuficientes,
  y proponen un remedio poco conocido — que el control pase a los bonistas en caso de impago, en vez de forzar
  una quiebra destructiva. Su aviso sobre los derechos que no se ejercen: un voto no ejercido es *"una mera
  frase para convencer al comprador de que goza de protecciones que en realidad no existen"*.
- **Convertibles y warrants** (caps. 22-26, 46): misma doctrina que en [[el-inversor-inteligente]] pero con el
  mecanismo — la jerarquía de privilegios, la norma de vender en vez de convertir, y la dilución inevitable:
  *todo el valor de los certificados de opción sale de las acciones ordinarias*.
- **Pirámides de holdings** (caps. 47-48): 6,5 M$ de beneficios sosteniendo 1.560 M$ de capitalización entre
  acciones y certificados de opción (p. 874) — y un coste de gestión que absorbía **entre el 25 y el 30% del
  dinero aportado por el público** (p. 860). El antecedente histórico del *febezzlement* de Munger.
- **La teoría de la "nueva época" (1927-29)** (caps. 27-28): valorar solo por la tendencia de beneficios
  futuros, ignorando dividendos, activos y **precio**. Es el origen concreto de la distinción
  inversión/especulación que esta página trataba en abstracto — y la mejor descripción disponible de cómo se
  argumenta una burbuja desde dentro. → [[ciclos-de-mercado]].
- **Análisis de mercado frente a análisis de valores** (cap. 52), la formulación más nítida de por qué el
  técnico es caja subordinada en este cerebro: *"En el análisis de mercado no hay márgenes de seguridad, se
  acierta o se falla y, si se falla, se pierde dinero"* (p. 841). → [[margen-de-seguridad]],
  [[analisis-tecnico-y-tendencia]].
- **Múltiplo máximo para considerar inversión** (cap. 39): 20× el beneficio medio en la edición de 1940,
  frente a **16×** en la de 1934 — subido por la caída de tipos, lo que dice que el propio umbral es función
  del entorno. *(El "múltiplo normal de 12-12,5×" que traía el destilado **no existe**: el estándar histórico
  que menciona el libro es 10× y el 12× es el precio circunstancial de una acción concreta.)*

### Matices sobre lo ya escrito

- Esta página decía que las situaciones especiales estaban tratadas "de forma dispersa": están **concentradas**
  en los caps. 43-44 (activo circulante neto como método) y 50-51 (reorganizaciones judiciales, con casos
  trabajados).
- Y que la renta fija era "el corazón del libro": el reparto es **más equilibrado**, con la segunda mitad
  dedicada a acciones ordinarias, balance y estructura corporativa con el mismo nivel técnico.
- Dato incómodo que conviene no tapar: según la introducción de la edición moderna, **Graham al final de su
  vida llegó a dudar de que las instituciones debieran tener acciones ordinarias en absoluto**, prefiriendo
  bonos de alta calidad. El propio libro incluye el contrapunto editorial (los fondos universitarios y su
  apuesta por *equity* y alternativos). Se deja la tensión anotada, sin resolver.

### Lo que la verificación tumbó (4 de 13)

El patrón no fue inventar cifras, sino **pegar una cifra real a un contexto equivocado**, que es más difícil
de detectar: (1) las coberturas de preferentes venían con valores corrompidos —el destilado daba 2,5×/3×/5×
donde el libro dice **2×/2½×/4×**—; (2) el tercio de los alquileres se presentaba como regla "cuando no hay
balance", cuando es un ajuste general; (3) el 40% de 1932 se generalizaba de industriales a todo el NYSE y de
activo circulante neto a valor de liquidación; (4) el ratio circulante 2:1 se presentaba como prueba de
liquidez **excluyendo** inventarios, cuando precisamente los incluye. Las tres citas literales verificadas
salieron correctas palabra por palabra.

## Páginas creadas/actualizadas

- Creada: `fuentes/libros/security-analysis-graham-dodd.md`.
- Actualizadas: `inversores/benjamin-graham.md` (fuente primaria técnica + biografía), `conceptos/margen-de-seguridad.md`,
  `index.md`, `log.md`, `CLAUDE.md`.

## Ver también

[[benjamin-graham]] · [[el-inversor-inteligente]] · [[margen-de-seguridad]] · [[valor-intrinseco]] ·
[[valoracion-de-empresas-financieras]] · [[deep-value-carlisle]] · [[warren-buffett]]
