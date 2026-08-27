---
title: "Edward Thorp"
tipo: inversor
tags: [edward-thorp, criterio-de-kelly, cuantitativo, market-neutral, arbitraje, gestion-de-riesgo, interes-compuesto]
fecha: 2026-08-25
agente: arqueologo-inversor
fuentes:
  - "https://en.wikipedia.org/wiki/Edward_O._Thorp (consultado 2026-08-25)"
  - "https://en.wikipedia.org/wiki/Princeton_Newport_Partners (consultado 2026-08-25)"
  - "https://en.wikipedia.org/wiki/Kelly_criterion (consultado 2026-08-25)"
  - "Forbes: «Edward Thorp's 20% Annual Return For 30 Years» (mar-2017); Bloomberg entrevista (abr-2024) — titulares vía Google News RSS"
---

# Edward Thorp

**Edward Oakley Thorp** (Chicago, 14-ago-1932; 94 años en ago-2026) es el matemático que demostró que la ventaja
(*edge*) medible se puede trasladar del casino al mercado: venció al blackjack con conteo de cartas (*Beat the
Dealer*, 1962, más de 700.000 ejemplares y lista de superventas del New York Times), codirigió con Claude Shannon
el primer ordenador vestible para la ruleta (1960-61), y fundó en 1969 lo que él mismo describe como el primer
fondo *market neutral* — antes de que existiera la palabra. Es el puente entre [[benjamin-graham]] (ventaja por
precio) y los cuants modernos ([[cliff-asness]], [[kathryn-kaminski]]): su instrumento no es el balance sino la
probabilidad, aplicada con el **criterio de Kelly** (criterio de kelly, pendiente de ficha propia).

## Trayectoria con cifras verificadas

| Etapa | Dato | Fuente |
|---|---|---|
| 1958–1982 | Doctorado en matemáticas (UCLA, 1958); MIT 1959-61; New Mexico State 1961-65; UC Irvine, profesor de matemáticas 1965-77 y de matemáticas y finanzas hasta 1982 | Wikipedia EN |
| 1961–62 | Prueba real del conteo: $10.000 aportados por Manny Kimmel → **$11.000 ganados en un solo fin de semana** en Reno/Tahoe; *Beat the Dealer* (1962, ampliado 1966) | Wikipedia EN |
| 1967 | *Beat the Market* con Sheen Kassouf: cobertura sistemática de warrants — antecedente directo de la valoración de opciones previa a Black-Scholes | Wikipedia EN |
| Nov-1969 | Funda Convertible Hedge Associates con Jay Regan; renombrada **Princeton/Newport Partners (PNP)** en 1974 | Wikipedia EN (art. PNP) |
| 1969–~1988/89 | PNP, hedging neutro al mercado de derivados convertibles y luego arbitraje estadístico; liquidada tras la investigación RICO por el círculo de Michael Milken/Drexel (aparcamiento de acciones); **Thorp y los socios fueron exonerados**, pero los costes legales hundieron la firma; el equipo reagrupó como TGS Management | Wikipedia EN (art. PNP y art. Thorp) |
| Ago-1994–Sep-2002 | **Ridgeline Partners**, arbitraje estadístico; cerrado porque los retornos de esa estrategia se hundieron desde 2002 | Wikipedia EN |
| May-1998 | Declara que sus inversiones personales rindieron **20% anualizado promedio durante 28,5 años** | Wikipedia EN; Forbes tituló «Edward Thorp's 20% Annual Return For 30 Years» (2017) |
| 1991 | Escéptico temprano de **Bernie Madoff**: desmonta sus retornos con aritmética simple, ocho años antes de las alertas formales | Wikipedia EN |

Sobre PNP hay una **discrepancia documentada**: la ficha de Wikipedia de PNP afirma «20% anualizado tras comisiones
durante más de dos décadas, sin un solo trimestre negativo», mientras que la literatura sobre fondos (Poundstone,
*Fortune's Formula*, 2005) suele citar ~15% neto anual en ~19 años. [Sin datos: cifra auditada independiente de
PNP]. Lo robusto en ambas versiones: rentabilidad alta, suavidad extrema y ausencia de trimestres en negativo —
justo lo que después hizo sospechoso a Madoff, y aquí era real.

Anécdota verifiable que conecta con el cerebro: a finales de los años 60 Thorp conoció a [[warren-buffett]] cuando
ambos auditaron un fondo juntos y le dijo que Berkshire le iba a convertir en «el hombre más rico del mundo» —
entendió el interés compuesto mejor que casi nadie (recogido en prensa financiera, dic-2025). Hoy posee
principalmente Berkshire (Barron's).

## El método extraíble (reglas para Carlos)

1. **No apostar sin ventaja medible**: primero se calcula el edge (la probabilidad desviada del precio implícito);
   si no se puede calcular, no es inversión sino ocio. Aplica igual a un cigar butt de Schloss que a un spread de
   conversión.
2. **Tamaño de posición = criterio de Kelly fraccionado**: Kelly maximiza el crecimiento geométrico del capital
   (el logaritmo de la riqueza), no el beneficio esperado lineal. La práctica común —incluido el propio Thorp— es
   usar **medio Kelly (*half Kelly*)**: sacrifica crecimiento a cambio de reducir volatilidad y protegerse contra
   errores de estimación de la ventaja (Wikipedia, *Kelly criterion*). Ver [[gestion-de-posiciones]].
3. **Cubrir lo que no es tu apuesta**: comprar lo barato y vender corto lo caro correlacionado (warrants,
   convertibles, pares) para aislar el edge del rumbo del mercado — el origen del *market neutral*.
4. **El riesgo letal es la ruina, no la volatilidad**: sobredimensionar Kelly convierte errores de estimación en
   quiebra; subdimensionar convierte una ventaja real en nada. El sizing ES la gestión del riesgo
   ([[riesgo-real-vs-volatilidad]]).
5. **Detectar fraudes por suavidad**: retornos demasiado lisos frente a mercados violentos = señal roja primaria.
   Thorp lo hizo con Madoff en 1991 con lápiz y papel ([[red-flags-contables-grandes-fraudes]]).
6. **Saber cerrar**: Ridgeline se disolvió en 2002 porque la estrategia ya no rendía. Cuando el edge se difunde y
   comprime, devolver el capital es la decisión correcta — misma disciplina que Joel Greenblatt en 1995.

## Citas verificables

> «In May 1998, Thorp reported that his personal investments yielded an annualized 20 percent rate of return
> averaged over 28.5 years.» — Wikipedia EN (con referencia al informe propio de Thorp)

> «The only investors who shouldn't diversify are those who are right 100% of the time» — NO es de Thorp (es
> Templeton, ver [[sir-john-templeton]]); se cita aquí porque marca el contraste exacto: Thorp diversifica ENTRE
> apuestas de edge pequeño y frecuente, no entre ignorancias.

[Sin datos: citas textuales de libros de Thorp verificadas hoy — *A Man for All Markets* (2017) no se ha podido
consultar en texto completo en esta sesión; las anécdotas provienen de fuentes secundarias citadas arriba.]

## Qué implica para una cartera de largo plazo

- **Segundo orden #1**: el compuesto largo plazo ([[interes-compuesto]]) no lo rompe la rentabilidad mediocre, lo
  rompe LA RUINA. Kelly fraccionado formaliza algo que Buffett repite en prosa («para ganar primero hay que
  sobrevivir»). Para Carlos: ninguna posición nueva debe poder, en escenario adverso razonable, sacarlo del juego;
  el tamaño máximo nace del escenario malo, no del bueno.
- **Segundo orden #2**: la ventaja estadística y la ventaga fundamental son LA MISMA COSA vista desde lados
  opuestos: precio ≠ valor. Thorp la mide en spreads de derivados; Graham/Schloss en activos netos. Si ambas
  tradiciones convergen en una idea (comprar desvíos respecto al valor con margen de error acotado), la
  [[eficiencia-de-mercado]] queda refutada por dos métodos independientes — argumento mucho más fuerte que uno solo.
- **Segundo orden #3**: sobre derivados, Thorp y Munger/Buffett parecen enemigos y no lo son
  ([[derivados-armas-de-destruccion-masiva]]). Thorp usa opciones PARA REDUCIR riesgo (cobrando prima por vender
  lo sobrevalorado); la crítica de Buffett apunta al APALANCAMIENTO opaco y al riesgo de cola mal medido. El
  instrumento no es el pecado: el sizing sin medición de colas sí.
- **Segundo orden #4**: todo edge público se comprime (conteo de cartas → zapatos continuos; stat arb → retornos
  mínimos desde 2002). Consecuencia para un inversor particular: tu ventaja duradera no puede ser informática ni
  informativa (pierdes contra TGS), sino conductual y de horizonte ([[horizonte-largo-plazo]]).

## Dónde choca con otras voces del cerebro

- **Kelly completo vs fraccionado** (tensión interna del método): full Kelly maximiza el crecimiento esperado pero
  exige estimaciones perfectas y tolera drawdowns brutales; medio Kelly crece más despacio y sobrevive a errores.
  Contra más incertidumbre en el edge, menor fracción. La discusión académica sigue abierta (la ficha de Kelly cita
  estimaciones del 117% para el S&P frente al uso efectivo de ~37% por el propio mercado).
- **vs [[nassim-taleb]]**: coinciden en que la ruina domina cualquier expectativa (cola fatídica), pero Thorp
  confía en MEDIR la ventaja con precisión; Taleb desconfía de toda medición bajo incertidumbre knightiana. Para
  carteras reales: usar Kelly solo donde la distribución sea conocible (arbitrajes, coberturas) y fracciones
  conservadoras donde no lo sea.
- **vs [[stanley-druckenmiller]] / [[george-soros]]**: ellos concentran CUANDO LA TESIS ES RARA Y GRANDE
  ([[carteras-concentradas]]); Thorp distribuye muchas ventajas pequeñas. Son regímenes distintos de sizing, no
  filosofías incompatibles: Druckenmiller juega semi-Kelly con edges declarados enormes; el inversor normal, medio
  Kelly con edges modestos.
- **vs [[warren-buffett]]**: Buffett rechaza el apalancamiento y los cortos; el método Thorp los necesita. Punto
  de encuentro verificado: Berkshire como posesión central de Thorp — el cuant acaba en el value.

## Señales falsables (umbral + horizonte)

1. **Regla de sizing falsable para Carlos**: si una sola posición no cubierta supera el 10% de la cartera sin tesis
   escrita de ventaja y peor escenario cuantificado, se viola la disciplina kellyana; corrección en <30 días.
   Horizonte: continuo, auditable cada revisión trimestral.
2. **Compresión del edge cuantitativo**: si los fondos market-neutral indexados siguen rindiendo por debajo del
   bill a 24 meses vista (desde ago-2026), confirma la compresión estructural que cerró Ridgeline en 2002 — el
   mensaje sería que el edge mecánico público está otra vez agotado y solo quedan el conductual y el de información
   primaria profunda. [Sin datos: índice HFRI actual — seguimiento manual]
3. **Test de suavidad anti-Madoff**: cualquier producto/fondo que Carlos evalúe con >12 meses de historia: si su
   ratio de meses negativos es <5% mientras su benchmark cayó >20% alguna vez, exigir auditoría forense antes de
   invertir o descartarlo. Umbral duro, horizonte perpetuo.

## Ver también

criterio de kelly *(pendiente)* · [[gestion-de-posiciones]] · [[interes-compuesto]] ·
[[eficiencia-de-mercado]] · [[riesgo-real-vs-volatilidad]] · [[derivados-armas-de-destruccion-masiva]] ·
[[red-flags-contables-grandes-fraudes]] · [[factor-momentum]] · [[warren-buffett]] · [[nassim-taleb]]
