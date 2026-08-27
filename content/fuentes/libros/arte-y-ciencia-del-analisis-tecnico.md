---
title: "The Art and Science of Technical Analysis — Adam Grimes (2012)"
tipo: fuente
cobertura: referencia
tags: [libro, analisis-tecnico, grimes, tendencia, evidencia]
fecha: 2026-07-26
fuentes: []
---

# The Art and Science of Technical Analysis — Adam Grimes (2012)

PDF: `raw/Análisis técnico/adam grimes the art and science of technical analysis.pdf` (480 pp., Wiley).
El libro de análisis técnico **basado en evidencia** — ingerido como caja de herramientas subordinada al
fundamental (decisión de Carlos), con lectura profunda del marco (Parte I) y la estructura completa mapeada.

## La tesis que lo hace compatible con el cerebro

*"Los mercados se mueven, francamente, de forma habitualmente aleatoria."* En equilibrio no hay ventaja
técnica posible; el *edge* solo existe en episodios de **desequilibrio** donde la presión compradora/vendedora
deja **patrones no aleatorios**. Descartes como epígrafe: dudar de todo — incluido el propio AT. Es la versión
técnica del "mercados eficientes casi siempre, explotables en los extremos" de Marks/Damodaran
([[eficiencia-de-mercado]]).

## Estructura (mapa para consultas futuras)

Parte I: el *edge* del trader, las dos fuerzas, el ciclo de Wyckoff y los **cuatro tipos de operación**.
Parte II: estructura de mercado — tendencias (el *pullback* como patrón esencial), rangos
(soporte/resistencia), e **interfaces** (rupturas, giros, fallos de giro). Parte III: plantillas operativas
(failure test, pullbacks, breakouts y sus fallos), herramientas de confirmación (medias, canales, MACD,
multi-marco temporal), **gestión de la operación** (stop inicial, objetivos, gestión activa) y **gestión del
riesgo/position sizing**. El contenido operativo queda destilado en [[analisis-tecnico-y-tendencia]] y
[[puntos-de-entrada]]; el detalle de plantillas, como referencia consultable.

## Páginas creadas/actualizadas

- Creadas: `conceptos/analisis-tecnico-y-tendencia.md`, `sintesis/puntos-de-entrada.md` (con
  [[teoria-de-dow-fuente]] y [[position-sizing-van-tharp]]).

## Ampliación (2026-07-26) — lo que aporta el destilado mecánico completo (5 partes)

> Destilado mecánico; cifras pendientes de verificación selectiva contra el original.

**La parte "ciencia" del título, que la ingesta inicial no había capturado:** Grimes somete sus propias
herramientas a prueba y documenta su debilidad — es la autopsia del AT hecha desde dentro, y refuerza el
encuadre de caja subordinada ([[analisis-tecnico-y-tendencia]], [[eficiencia-de-mercado]]):

- **El "secreto oscuro" de soportes y resistencias**: líneas dibujadas **al azar** sobre un gráfico con las
  barras ocultas funcionan como S/R creíbles. Conclusión de Grimes: hablar siempre de zonas *potenciales*.
- **Los tests repetidos debilitan el nivel** (invierte a Edwards & Magee): si el precio vuelve 3+ veces sin
  rechazo claro, la probabilidad se inclina hacia la ruptura.
- **Refutaciones empíricas concretas**: ninguna media móvil tiene ventaja verificable sobre otra ni sobre el
  azar; el 88% (no el 96%) de los cierres caen dentro de 2σ de Bollinger (tabla propia de ~2,4M barras), y la
  desviación típica del precio "no es una medida significativa de volatilidad"; las **divergencias de momentum
  fallan tan a menudo como aciertan** — una tendencia fuerte "se enrolla sobre" las divergencias.
- **Selección adversa de las órdenes límite**: con límites te pierdes parte de los ganadores (nunca tocan tu
  precio) pero participas al completo en todos los perdedores. Pocos libros lo articulan así.

**La matemática del riesgo, la parte reutilizable por Carlos** (conecta con [[riesgo-real-vs-volatilidad]] y
[[position-sizing-van-tharp]]):

- Riesgo = probabilidad × magnitud de la pérdida; la volatilidad al alza no es riesgo. Y la inversión de Mark
  Douglas que Grimes adopta: **las pérdidas normales de un sistema con edge no son riesgo, son coste de
  estructura** (como el inventario de un comercio). Solo el evento de cola inesperado es riesgo.
- **El caso de los 68 trades**: P&L en bruto +3.158$ (p=0,263, sin edge) pero estandarizado en **%R** (P&L /
  riesgo inicial) la media es +0,3R con p=0,000 — el edge existía y lo ocultaba un sizing errático
  (0,2–1,8% por operación); a 1% fraccional fijo el mismo histórico da +22.935$. Lección transferible:
  **sin riesgo por posición consistente, ni siquiera puedes medir si lo que haces funciona.**
- Monte Carlo (1.000 trayectorias): riesgo fijo en $ → distribución terminal normal; riesgo fraccional fijo
  (%) → log-normal con cola derecha larga ("casi toda la variabilidad extra es upside potencial"). Kelly
  completo (8,33% en su ejemplo) → 4,6% de cuentas quiebran. El sizing discrecional aleatorio rinde **peor**
  que el fijo: añade un grado de libertad y más aleatoriedad al resultado.
- Correlaciones → 1 en crisis: sumar el riesgo de posiciones correlacionadas como si fueran una sola
  (Grimes: tope 2–3×R por bloque correlacionado). Mismo aviso que ya tiene el cerebro vía diversificación.

**La Parte IV (el trader individual), ausente del mapa original**: curva de aprendizaje de 3–5 años hasta la
competencia y ~10 para veteranía (6 etapas con hitos de P&L); "el edge técnico cabe en una hoja — lo difícil
es emocional y de proceso"; *journaling*, %R como estándar de evaluación y **control charts** (control de
calidad manufacturero aplicado al P&L) para detectar degradación del edge antes de que sea cara. Cita de
Larry Harris que merece quedar: *"Si no sabes cuál es tu edge, no tienes ninguno."*
