---
title: "Factor momentum (y el riesgo de su reversión violenta)"
tipo: concepto
tags: [momentum, factores, cuantitativo, riesgo, ciclos-de-mercado]
fecha: 2026-07-24
fuentes: ["[[pulso-video-2026-07-14]]", "[[pulso-video-2026-07-17]]", "[[pulso-video-2026-07-18]]", "[[pulso-video-2026-07-22]]", "[[pulso-video-2026-07-24]]", "[[aqr-insights]]"]
---

# Factor momentum (y el riesgo de su reversión violenta)

Promovido a durable el 2026-07-24 desde la capa de pulso, tras reaparecer de forma independiente **al menos
cuatro veces** a lo largo de julio de 2026 en fuentes distintas (regla de curación: página propia solo si un
tema reaparece con insistencia, no en la primera mención). No es simplemente "el precio sube, comprar más": es
un **factor de inversión con definición cuantitativa precisa** (comprar lo que ha subido, vender lo que ha
bajado, sobre una ventana de 3-12 meses) que **AQR/[[cliff-asness|Asness]]** documenta como una de las primas de
riesgo mejor probadas empíricamente — y a la vez uno de los factores con **colas de riesgo más violentas** de
todas las estrategias sistemáticas conocidas (los "momentum crashes" de Daniel & Moskowitz son literatura
académica establecida, no una anécdota de comunicador).

## La tensión en una frase

El momentum **funciona la mayor parte del tiempo** y **falla de forma catastrófica y repentina** cuando el
mercado gira: es una estrategia con Sharpe alto pero **asimetría negativa fuerte** (grandes pérdidas
infrecuentes, no muchas pérdidas pequeñas) — justo lo contrario del perfil que busca [[margen-de-seguridad|uninversor value]]. El cerebro documenta este patrón en dos capas distintas que conviene no confundir:

1. **Momentum como factor de estilo cuantitativo** (posiciones largo-corto sistemáticas, libros de *prime
   broker*, ETFs como MTUM): lo que hoy vigila [[goldman-sachs|Goldman Sachs]]/Pascual.
2. **Momentum como narrativa de mercado** (comprar lo que sube porque sube, sin proceso): lo que [[terry-smith|Terry Smith]]
   habría incorporado a su tercer pilar según [[javier-dv|Javier DV]], y que el propio Javier DV criticó como posible
   claudicación bajo presión de flujos.

## La evidencia, fuente a fuente

- **14-jul-2026** ([[pulso-video-2026-07-14]], Javier DV) `[No verificado en raw/: fuente terciaria, carta de
  Fundsmith aún no ingerida como fuente primaria]`: Terry Smith habría rotado ~50% de la cartera y modificado su
  regla de "no hacer nada" para incorporar momentum explícitamente — con la advertencia del propio Javier DV de
  que adoptarlo "a la desesperada" por presión de flujos sería una señal contrarian, con paralelismo a la
  claudicación de Druckenmiller en 1999. La carta primaria de Fundsmith de 2026 ya está localizada en `raw/`
  (ver [[pulso-video-2026-07-23]]) pero pendiente de ingesta — este punto debe recotejarse contra la fuente
  primaria en cuanto se ingiera.
- **17-jul-2026** ([[pulso-video-2026-07-17]], Cárpatos citando un informe de Goldman del 16-jul): los hedge
  funds recortaron posiciones en el "trade de burbuja IA" **60-70% en 5-6 semanas** — desapalancamiento agresivo
  del dinero especulativo de momentum. Goldman ya entonces creía la purga "más cerca del final que del
  principio".
- **18-jul-2026** ([[pulso-video-2026-07-18]], Cárpatos + Cava): la cesta de momentum (semis/memoria) pasó de
  +60% en el año a +12,5% en tres semanas. Exposición a momentum en libros de *prime broker* en el **percentil
  77 a un año** (alto, no capitulación total). Cárpatos matiza a Goldman: "puede venir en oleadas sucesivas". El
  propio ETF MTUM y SK Hynix corrigen en niveles de Fibonacci clásicos (0,5-0,618).
- **22-jul-2026** ([[pulso-video-2026-07-22]], confirmando a Bloomberg/Authers del pulso de texto): la caída de
  semis en julio se describe como "el mayor reverso de momentum desde la pandemia" — el rebote técnico de la
  semana no cierra la reversión de fondo.
- **23-jul-2026** ([[pulso-video-2026-07-24]], Cárpatos apertura citando a Pascual/Goldman Sachs, dato nuevo y
  más duro que los anteriores): la **volatilidad realizada a 3 meses del factor momentum está en su nivel más
  alto en 45 años excluyendo recesiones** — el único análogo serio en la serie histórica es **1999**, el tramo
  final de la burbuja .com antes del crash. Pascual, textual (vía destilado): "estamos en 1999, no en un
  episodio medio". Argumento estructural para por qué esta vez podría ser peor: **0DTE generalizados, ETFs
  apalancados, gestión algorítmica/IA y el S&P 500 hiperconcentrado** cambian la mecánica de mercado frente a
  ciclos de momentum anteriores — la conclusión del analista es que un *momentum drawdown* es "casi seguro"
  **aunque el índice general no caiga tanto** (el dolor se concentra en el factor, no necesariamente en el
  mercado agregado). `[Por verificar: la cifra llega vía comunicador (Cárpatos) citando a un analista de
  Goldman Sachs (Pascual) sin enlace a informe público — no se ha contrastado todavía contra una publicación
  directa de GS]`.

## Nota de evolución 2026-07-26 (`pulso-video-2026-07-25`, tramo tardío, Cárpatos)

Mismo estudio de posicionamiento en volatilidad citado dos veces el mismo día por el mismo comunicador, con dos
formulaciones distintas — **tratar como repetición, no como confirmación independiente nueva**: gestoras
grandes largas en futuros VIX en el percentil 1 (mínimo histórico de cobertura direccional), *skew* de calls
VIX en el percentil 96 (primas carísimas); el estudio ("Meligot"/"Melyot", sin más referencia primaria
localizada) se cita primero como "sube 48,6% de media en 3 meses con 90% de acierto histórico" y horas después
como "80% de probabilidad de *spike* del VIX ≥50% en 3 meses (20% de fallo)" — mismo dato de fondo, dos
formas de expresarlo, sigue siendo la misma fuente primaria no localizada. Dato nuevo de rotación (Goldman,
semanal): ganadores Bitcoin-sensibles +11,6%, Defensa +6,4%, Cobre +6,4%; perdedores Hiperescaladores -6,0%,
IA software -5,8% — el índice general "aparenta calma" (vol. realizada 30d del S&P 500: 13,8%) mientras el
momentum *high-beta* tiene vol. realizada **83,9%** (7 veces más), la cifra más nítida hasta ahora de la
tensión "calma superficial, riesgo concentrado en el factor" que define esta página. Refuerza, no contradice,
la lectura ya documentada el 24-jul (volatilidad realizada del factor en máximos de 45 años).

## Por qué importa para Carlos

La cartera de Carlos no tiene exposición a momentum como factor sistemático explícito, pero
sí tiene **concentración correlacionada en el mismo tipo de activos que este factor ha estado comprando**
(semis vía Micron +690,1%, tecnología desarrollada 28,3%) — si el "momentum crash" que anticipa Pascual se
materializa, el mecanismo de transmisión no es "Carlos opera momentum", es que **los mismos nombres que
componen la cesta de momentum institucional son los que Carlos tiene en cartera**, y una purga sistemática de
posicionamiento (no de fundamentales) puede mover el precio de Micron sin que cambie nada de su tesis. Cruza
directamente con la tensión ya abierta en [[semiconductores-de-memoria]] y con la disciplina de
[[riesgo-real-vs-volatilidad|separar riesgo de precio de riesgo de negocio]].

## Tensiones

- **Momentum como factor vs. margen de seguridad.** La lógica de este concepto es la más fuerte prueba empírica de que el mercado premia la tendencia; la tradición value del cerebro, desde [[margen-de-seguridad]] hasta [[negocio-maravilloso-vs-precio-maravilloso]], responde que el precio puede ser justo o injusto y que la renta del factor no garantiza el negocio. La pregunta es si el momentum es una señal útil o una forma de comprar lo caro a mayor precio.
- **Momentum vs. ciclos de mercado.** El factor funciona bien en fases de euforia y falla en los giros; eso lo pone en tensión con [[ciclos-de-mercado]] y [[fases-del-ciclo-bursatil]], que explican por qué el mismo patrón puede ser muy rentable hasta que se vuelve catastrófico.
- **Momentum en cartera vs. riesgo real.** El factor puede aumentar el retorno aparente mientras el sistema está caliente, pero el riesgo que importa a [[riesgo-real-vs-volatilidad]] no es la volatilidad media sino las colas y la fragilidad del sistema — la misma tensión que Taleb pone en [[nassim-taleb]].

## Ver también

[[cliff-asness]] · [[aqr-insights]] · [[semiconductores-de-memoria]] · [[ciclos-de-mercado]] ·
[[riesgo-real-vs-volatilidad]] · cartera actual · [[margen-de-seguridad]] ·
[[negocio-maravilloso-vs-precio-maravilloso]] · [[nassim-taleb]]
