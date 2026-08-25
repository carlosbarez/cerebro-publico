---
title: "When Genius Failed — Roger Lowenstein (LTCM)"
tipo: fuente
cobertura: parcial
tags: [ltcm, lowenstein, apalancamiento, ruina, sesgo-de-superviviente, riesgo]
fecha: 2026-07-26
fuentes: []
---

# When Genius Failed — Roger Lowenstein (LTCM)

Crónica del ascenso y **quiebra de Long-Term Capital Management** (1994-1998). PDF en `raw/` (243 pp.),
`PyMuPDF`. Es **la historia del perdedor** que el cerebro necesitaba: por fin un caso central que **no** es un
ganador que aguantó, sino un **desastre** — el antídoto directo al [[sesgo-de-superviviente]].

## Qué pasó (y por qué el cerebro lo necesita)

LTCM reunía al equipo teóricamente **imbatible**: dos premios Nobel (**Myron Scholes** y **Robert Merton**,
padres de la fórmula de opciones), John Meriwether y las estrellas de arbitraje de Salomon. Rentabilidades
espectaculares 1994-1997… y en **1998 se evaporó**: apalancamiento de ~25:1 (y >100:1 con derivados) sobre
apuestas de convergencia que se suponían "sin riesgo", hasta que la crisis rusa hizo que **todas las
correlaciones fueran a uno** y las posiciones que debían compensarse cayeron juntas. La Fed orquestó un
rescate para evitar el contagio sistémico.

## Las lecciones (todas ya en el cerebro, ahora con el caso canónico)

- **"Volatilidad + apalancamiento = dinamita"** (Marks): el genio no salva del apalancamiento; lo amplifica.
  LTCM es **el** ejemplo de [[aversion-al-apalancamiento]] y del "weak link" de Buffett — de hecho ya se citaba
  ahí; ahora tiene fuente propia.
- **El modelo ciega a las colas** (Taleb): confiaron en distribuciones normales y correlaciones históricas que
  se rompieron en el peor momento. → [[nassim-taleb]], [[riesgo-real-vs-volatilidad]], [[prima-de-riesgo-y-beta]].
- **La liquidez desaparece cuando más la necesitas**: no poder aguantar la posición = pérdida permanente
  aunque la tesis fuera "correcta a largo". → [[sintesis-del-riesgo]] (el riesgo de necesitar liquidez en el
  peor momento; el matiz Buffett-caja vs. Paramés-invertido).
- **El track record no prueba habilidad**: 4 años brillantes precedieron a la ruina. → [[sesgo-de-superviviente]].

## Para Carlos

Es el argumento más contundente contra sus **productos 3x** (apalancamiento estructural) y contra confundir
una racha ganadora con habilidad. "Sobrevivir es el prerequisito del compounding" — LTCM no sobrevivió.

## Ampliación (2026-07-26): el libro completo, capítulo a capítulo

El destilado mecánico completo (3 partes, ~243 pp.) permite cerrar el arco narrativo que la ficha original
solo resumía. *Destilado mecánico; cifras pendientes de verificación selectiva contra el original.*

**La mecánica del ascenso (partes 1-2).** Los *trades* fundacionales eran de **arbitraje de convergencia
(*relative value*)**: on-the-run/off-the-run del Treasury a 30 años (diferencial de 12 pb, 2.000 M$ de
nocional, repo sin *haircut* → 15 M$ de ganancia "sin capital"), *interest-only/principal-only* de
hipotecas (+300 M$ en 1995), el spread BTP-bund italiano (600 pb → ~600 M$ de ganancia). La carta a
inversores de 1994 de Merton-Scholes cuantificaba el riesgo con supuestos de log-normalidad y correlaciones
estables: "perder ≥20% una vez cada 50 años" — *nunca* contemplaba más. Contra ella, tres voces que el
libro recupera: **Fama** (empíricamente, una observación >5σ ocurre cada 3-4 años, no cada 7.000: "la vida
siempre tiene cola gorda"), **Samuelson** (los mercados saltan; el tiempo continuo de Merton es ficción) y
**[[seth-klarman|Seth Klarman]]**, que en 1993 declinó invertir articulando el *premortem* exacto: "dos errores graves a la
vez serían catastróficos". Resultados 1994-95: +21% y +59% netos; capital 3.400 M$ sobre 102.000 M$ de
activos.

**La huida hacia adelante (parte 2).** Tres capas de **apalancamiento piramidado**: el fondo (~25-30× sobre
balance, más >1 B$ de nocional en derivados), la *management company* (160 M$ de deuda bancaria propia) y lo
personal (*warrants* sobre el propio fondo negociados con UBS). Cuando los spreads se estrecharon, LTCM
salió de su [[circulo-de-competencia]]: *risk arb* en cesta ciega (30 operaciones simultáneas, sin análisis
*deal-by-deal*), Royal Dutch/Shell (1.100 M$, *directional* disfrazado de arbitraje) y, sobre todo, **venta
masiva de volatilidad** de renta variable a 5 años vía OTC (40 M$ por punto de volatilidad, EE.UU. más
Europa) — el apodo de [[morgan-stanley|Morgan Stanley]] lo dice todo: "el banco central de la volatilidad". El artículo de
**Shleifer-Vishny, *The Limits of Arbitrage* (JF 1997)** predijo el desenlace con precisión: los *noise
traders* pueden alejar los precios del valor más allá de lo que un arbitrajista apalancado puede financiar;
liquidación forzosa en el peor precio. Merton lo desestimó en Cambridge meses antes del colapso.

**El colapso y el rescate (parte 3).** Rusia (default 17-ago-1998) + liquidación del *arb desk* de Salomon
→ *flight to quality* → **las correlaciones fueron a uno**: la diversificación formal (7 geografías y
activos) era el mismo *trade* en 7 variantes. −553 M$ el 21 de agosto; −45% en el mes. Buffett ofreció
250 M$ por el portfolio con ultimátum de horas (los socios no pudieron firmar a tiempo); la Fed de Nueva
York orquestó el consorcio de 14 bancos (3.650 M$, 90% del capital) sin dinero público pero con su poder de
convocatoria → *moral hazard* explícito. El President's Working Group (1999) concluyó: "el apalancamiento
del balance, por sí solo, no es una medida adecuada del riesgo". Epílogo demoledor: **Meriwether, Haghani e
Hilibrand levantaron JWM Partners quince meses después, a 15×, con un "sistema de control de riesgo diseñado
para 1998"** — la industria no aprende; se protege contra la crisis pasada.

**La distinción que sostiene todo el libro** (Lowenstein, epílogo, citando a Knight): los modelos de LTCM
confundieron **riesgo** (distribución conocida: los dados son predecibles al decimal) con **incertidumbre**
(distribución desconocida: Rusia no lo es; y cómo reaccionarán los demás *traders* ante Rusia, menos aún).
Los *traders* "no son moléculas aleatorias, sino personas movidas por la codicia y el miedo; corren en
manada y se retiran en hordas". → [[riesgo-real-vs-volatilidad]], [[nassim-taleb]], [[james-montier]].

**Discrepancia interna de cifras (señal, no ruido)**: el destilado de la parte 1 habla de apalancamiento
25×, la parte 2 de 28× y 30× (y >100× con derivados); la ficha original decía "~25:1 (y >100:1 con
derivados)". Son lecturas en distintos momentos del fondo (creció entre 1995 y 1998), no necesariamente
contradictorias, pero conviene no citar una cifra única sin contexto.

**Para Carlos (ampliación)**: el caso no es solo "apalancamiento malo" sino **apalancamiento + iliquidez +
financiación revocable**: con 25-30× y posiciones que no se pueden vender sin mover el mercado, basta *un
día malo* para quebrar ("ruleta rusa", Lowenstein). Y el *funding* no es incondicional: los bancos que
prestaban sin *haircut* por los *fees* fueron los primeros en *front-runear* a su cliente (Goldman vendía
mientras auditaba los libros). Refuerzo directo de [[aversion-al-apalancamiento]] y del margen de seguridad
entendido como supervivencia: LTCM operó estructuralmente **sin** [[margen-de-seguridad]]. Conexión con
[[warren-buffett]] (rechazó el rescate salvo compra barata sin Meriwether) y con [[derivados-armas-de-destruccion-masiva]].

## Páginas creadas/actualizadas

- Creada: `fuentes/libros/when-genius-failed-ltcm.md`.
- Actualizadas: `conceptos/aversion-al-apalancamiento.md`, `conceptos/sesgo-de-superviviente.md`, `index.md`, `log.md`.

## Ver también

[[aversion-al-apalancamiento]] · [[nassim-taleb]] · [[sesgo-de-superviviente]] · [[riesgo-real-vs-volatilidad]] ·
[[sintesis-del-riesgo]] · [[margen-de-seguridad]] · [[circulo-de-competencia]] · [[warren-buffett]] ·
[[derivados-armas-de-destruccion-masiva]] · [[james-montier]]
