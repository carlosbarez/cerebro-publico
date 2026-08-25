---
title: "Paridad de riesgo (*risk parity*) y diversificación por entorno económico"
tipo: concepto
tags: [dalio, risk-parity, diversificacion, apalancamiento, asignacion-de-activos]
fecha: 2026-07-10
fuentes: ["[[all-weather-story]]"]
---

# Paridad de riesgo (*risk parity*) y diversificación por entorno económico

Concepto que entra con [[ray-dalio]] y su estrategia **All Weather** (Bridgewater, 1996): construir una cartera
que rinda razonablemente bien en **cualquier** entorno económico, sin necesidad de predecir cuál va a darse. De
momento documentado solo vía Dalio/Bridgewater; pendiente contrastar con más gestores de *risk parity* si
llegan nuevas fuentes.

## La descomposición: cash + beta + alpha

Todo retorno de inversión se descompone en tres piezas: `retorno = cash + beta + alpha`. El cash lo fija el
banco central (no el inversor); el beta (la prima que un mercado da por encima del cash) es **barato,
abundante y fiable en el tiempo** — casi la única "cosa segura" en inversión es que el beta agregado supera al
cash a largo plazo; el alpha (habilidad activa de selección) es **caro, escaso y suma cero** — si tú compras y
yo vendo, solo uno de los dos puede tener razón. La consecuencia práctica: para la mayoría de inversores, la
decisión que más importa **no es acertar con el timing o la selección** (alpha), sino **fijar bien la
asignación de activos** (beta). Esto separa con nitidez la pregunta "¿qué comprar?" (beta, ingeniería de
cartera) de "¿cómo batir al mercado?" (alpha, juicio activo) — el resto del cerebro vive casi enteramente en la
segunda pregunta.

## Sesgo ambiental y los cuatro cuadrantes

Cada clase de activo tiene un **sesgo ambiental**: rinde bien en ciertas condiciones económicas y mal en otras.
Las acciones rinden con el crecimiento; los bonos nominales, con la recesión desinflacionaria; las materias
primas y los bonos ligados a inflación, con la inflación al alza. Una cartera clásica 60% acciones / 40% bonos
es, sin que el inversor lo perciba, **una apuesta concentrada y apalancada a que el crecimiento sorprenderá al
alza** — porque casi todo el riesgo de esa cartera (no el dinero, el riesgo) vive en la parte de acciones.

Dalio y Bob Prince formalizan esto en una matriz de cuatro cuadrantes — crecimiento e inflación, cada uno
subiendo o bajando respecto a lo que el mercado ya descuenta — y reparten **el riesgo, no el dinero**, a partes
iguales (25% cada uno) entre activos que funcionan bien en cada cuadrante. Cualquier sorpresa macro futura, por
inédita que parezca, cae dentro de uno de los cuatro; la cartera no necesita predecir **cuál**, solo estar
balanceada frente a los cuatro.

## El apalancamiento como herramienta neutral, no como vicio

La pieza más contraintuitiva —y la que genera la mayor **tensión** del cerebro— es que Dalio trata el
apalancamiento como una **herramienta de ingeniería**, no como un enemigo. Un bono, no apalancado, es "bajo
riesgo/bajo retorno"; **ajustado al mismo nivel de riesgo que una acción vía apalancamiento moderado, ofrece un
retorno comparable sin sacrificar diversificación**. Cita literal: *"low-risk/low-return assets can be
converted into high-risk/high-return assets."* Sin apalancamiento, diversificar en dólares no diversifica en
riesgo (la parte más volátil domina); con apalancamiento moderado sobre una cartera **ya diversificada**, Dalio
sostiene que el conjunto es **menos** arriesgado que una cartera concentrada y sin apalancar, no más:
*"a moderately-levered, highly-diversified portfolio is less risky than an unleveraged, un-diversified
portfolio."* Ver la tensión completa en [[aversion-al-apalancamiento]].

## Los bonos ligados a inflación como pieza estructural

Bridgewater identificó y ayudó a diseñar (recomendaciones de 1997 al Tesoro de EE.UU.) los **TIPS**: la única
clase de activo, fuera de las materias primas, que rinde bien con sorpresas de inflación al alza. Sin ella, la
mayoría de carteras institucionales no tienen ninguna cobertura real contra ese cuadrante — un hueco que sigue
existiendo hoy en la mayoría de carteras tradicionales.

## Tensiones y puentes con el resto del cerebro

- **[[aversion-al-apalancamiento]]** — la tensión de primer nivel del corpus sobre esta palabra: Buffett,
  Graham, Marks y Smith ven la deuda como un enemigo estructural que convierte una racha de éxitos en un cero
  único; Dalio la ve como herramienta neutral para igualar riesgo entre activos, **dentro de una cartera
  diversificada y líquida** — no en el balance de un negocio operativo.
- **[[carteras-concentradas]]** — el polo opuesto de la diversificación: Ackman concentra en 8-12 convicciones
  altas tras diligencia profunda; Dalio diversifica precisamente porque **no cree que se pueda predecir con
  fiabilidad qué entorno macro prevalecerá** — humildad epistémica sobre el macro, no ignorancia del negocio.
- **[[cliff-asness]] / [[retornos-esperados]]** — convergencia directa: la tesis de Asness de que *"the only
  near-free lunch is well-leveraged diversification"* es, en esencia, el mismo argumento de riesgo-ajustado
  que sostiene All Weather, llegado por otra vía (factores cuantitativos en vez de macro top-down).
- **[[checklist-macro-y-ciclo]]** — All Weather no hace *market timing* (es explícitamente una estrategia
  **pasiva**, de pesos fijos), lo cual encaja con el rechazo del resto del cerebro al *timing* — pero ofrece
  una alternativa distinta: en vez de ajustar exposición según el ciclo, **balancear estructuralmente** para no
  necesitar ajustarla.
- **[[eficiencia-de-mercado]]** — el beta es "casi gratis" porque los mercados son razonablemente eficientes en
  precio agregado de riesgo; el alpha es caro porque ahí sí hay juego de suma cero — coherente con el marco de
  Fama que cita [[cliff-asness]].

## Ver también

- [[ray-dalio]] · [[all-weather-story]] · [[ciclo-de-deuda-y-desapalancamiento]]
- [[aversion-al-apalancamiento]] · [[carteras-concentradas]] · [[cliff-asness]] · [[retornos-esperados]]
- [[checklist-macro-y-ciclo]] · [[eficiencia-de-mercado]]
- [[asignacion-de-activos]] · [[diversificacion-eficiente-bernstein]] — la versión media-varianza clásica
  (pesos de capital) de la que la paridad de riesgo es la evolución (pesos de riesgo)
- [[kathryn-kaminski]] — el *crisis alpha* (managed futures/trend): el diversificador que SÍ funciona en el pánico, cuando todo lo demás se correlaciona
