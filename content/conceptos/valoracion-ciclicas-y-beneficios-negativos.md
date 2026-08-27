---
title: "Valoración de cíclicas, *commodities* y empresas con beneficios negativos"
tipo: concepto
tags: [valoracion, ciclicas, commodities, beneficios-negativos, normalizacion, damodaran]
fecha: 2026-07-09
fuentes: ["[[manuales-de-valoracion]]"]
---

# Valoración de cíclicas, *commodities* y empresas con beneficios negativos

Damodaran (cap. 22) aborda las empresas cuyo beneficio actual **no representa** su capacidad normal de
generarlo: cíclicas, de materias primas y las que pierden dinero. Es una familia clave para no confundir "barato
por el ciclo" con "barato de verdad" — justo el error que [[terry-smith|Terry Smith]] evita al huir de las cíclicas, y la
oportunidad que Buffett/Ackman aprovechan al comprar el bache.

## Por qué el beneficio actual engaña

Con beneficios negativos o deprimidos, la maquinaria estándar se rompe:
- **El crecimiento no se puede estimar**: aplicar una tasa de crecimiento a un beneficio negativo lo hace *más*
  negativo; el crecimiento histórico da cifras sin sentido (pasar de −200 a −100 sale como "−50%" de
  "crecimiento"); ROIC y reinversión, calculados sobre beneficio negativo, dejan de significar nada.
- **Los impuestos se complican**: las pérdidas se acumulan (*net operating losses*) y escudan beneficios
  futuros — hay que arrastrarlas.
- **Peligra el *going concern*** (la vida infinita que asume el [[valor-terminal|valor terminal]]): la empresa
  puede **quebrar** antes de recuperarse.

## Las causas (y el remedio para cada una)

1. **Problemas temporales** (huelga, retirada de producto, litigio puntual): son *one-offs* → **quitarlos** del
   beneficio actual (ver [[contabilidad-y-calidad-de-beneficios]]).
2. **Cíclicas y *commodities*** (recesión, precio del papel/petróleo/cobre): el remedio es **normalizar los
   beneficios** — usar el beneficio *medio del ciclo* (o margen/ROIC normal aplicado a las ventas actuales), no
   el del punto bajo (ni el del punto alto). El error fatal es proyectar el pico como si fuera perpetuo (o el
   valle como si fuera el fin). Enlaza con la beta alta de las cíclicas (ver [[prima-de-riesgo-y-beta]]).
3. **Problemas de largo plazo** (plantas obsoletas, mala gestión, estrategia fallida): hay que decidir si la
   empresa **se reestructura o quiebra** — territorio del activismo de [[bill-ackman]] (comprar el bache y
   forzar el cambio) o de la trampa de valor.
4. **Exceso de deuda**: modelar la **probabilidad de impago** y el valor de venta forzada (ver el ajuste por
   distress en [[valor-terminal]] y la valoración del *equity* como opción en [[opciones-reales]]).

## La lección de segundo orden para el cerebro

- **"Normalizar" es la disciplina que separa comprar el ciclo de caer en una trampa de valor.** Un PER bajo en
  el pico de beneficios de una cíclica es carísimo (beneficio insostenible); un PER alto en el valle puede ser
  ganga. Es el reverso del error que McKinsey ilustra con los múltiplos (ver [[multiplos-de-valoracion]]).
- **Por qué Terry Smith las evita**: sin retornos altos *y sostenidos* sobre el capital, una cíclica no
  compone; su valor depende de acertar el ciclo, que es especular sobre el timing (ver
  [[retorno-sobre-capital-empleado]] y [[circulo-de-competencia]]).
- **Por qué Buffett/Ackman a veces las compran**: cuando el pánico del ciclo hunde una **buena** empresa por
  debajo de su valor normalizado, es "comprar el miedo" con [[margen-de-seguridad]] (Ackman con Hertz,
  restauración; Buffett con cíclicas industriales de calidad). La clave es **calidad + normalización + precio**,
  no apostar al rebote sin más.

## Ampliación (2026-07-22) — la mecánica exacta cuando el ROIC no existe

Desde [[damodaran-dark-side-of-valuation]] (destilado no verificado). Lo anterior de esta página dice *qué*
hacer (normalizar, construir desde los ingresos); esto añade *cómo*, en una cadena de cuatro pasos auditable:

1. **Ingresos primero** — proyectar crecimiento de ventas decreciente con el tamaño; el beneficio se deduce
   después, nunca al revés.
2. **Margen objetivo = el de la industria en madurez**, no el histórico de la empresa (la competencia erosiona
   la ventaja). Tasa base sectorial en [[benchmarks-sectoriales]].
3. **La reinversión sale del ratio ventas/capital**: `Reinversión = ΔVentas ÷ (Ventas/Capital)`. Es la bisagra
   que sustituye a `g = Reinversión × ROIC` cuando el ROIC no es medible.
4. **Control de consistencia**: el ROIC implícito año a año debe converger a la media de industria (o al
   WACC). Si no converge, el modelo describe una empresa imaginaria.

Casos del propio autor (1999-2000, valor ilustrativo): Amazon margen −16,27% → 9,32% con ventas/capital 3,02;
Ariba −160% → 16,36% con 2,50; Rediff.com −113% → 40% con 1,0.

**Segundo motor de crecimiento (ROIC que mejora)**: `g = ROIC_t × Reinversión + (ROIC_t − ROIC_{t−1}) /
ROIC_{t−1}`. El segundo sumando es crecimiento por **eficiencia** sobre el capital ya invertido, y **se agota**
al llegar el ROIC a destino — es exactamente la palanca de una cíclica que sale del valle. Caso Motorola: 13,63%
con mejora de ROIC frente a ~6% sin ella. Riesgo de uso: proyectar ese sumando a perpetuidad duplica el error
del "pico como perpetuidad" que esta página ya advierte.

**Matiz sobre la convergencia (tensión anotada, sin resolver)**: [[manuales-de-valoracion]] recoge el *fade
factor* (el retorno sobre el capital converge hacia el coste de capital). En *Dark Side*, Damodaran **rechaza**
forzar ROIC = WACC en régimen estable y usa **medias de industria** (Amazon 16,94%, Cisco 16,52%, Motorola
17,22%). Consecuencia práctica: si se admite exceso de retorno perpetuo, el valor terminal **deja de ser
invariante a `g`** y vuelve a ser muy sensible.

## Ver también

- [[damodaran-dark-side-of-valuation]] · [[estimacion-del-crecimiento]] · [[benchmarks-sectoriales]]
- [[margen-de-seguridad]] · [[valor-terminal]] · [[prima-de-riesgo-y-beta]] · [[retorno-sobre-capital-empleado]]
- [[contabilidad-y-calidad-de-beneficios]] · [[opciones-reales]] · [[multiplos-de-valoracion]] · [[manuales-de-valoracion]]
