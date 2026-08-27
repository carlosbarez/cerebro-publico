---
title: "Cameco Corporation (CCJ)"
tipo: empresa
tags: [empresa, uranio, mineria, nuclear, energia, caza]
fecha: 2026-08-14
fuentes: []
ticker: CCJ
moneda: USD
precio_referencia: 97.76
fecha_precio: 2026-08-13
valor_estimado: 45
gatillo_entrada: 40
veredicto: EVITAR
revisar_el: 2026-11-14
---

# Cameco Corporation (CCJ)

Primera cobertura del Cerebro. Día de **CAZA** del viernes (`cerebro-analista-fundamental`, 2026-08-14):
Etapa 1 (cribado ancho OpenRouter) sobre sectores sobreponderados por Inés (nuclear/uranio, mapa sectorial
08-06 y sonda energía-nuclear 08-13) → Cameco pasa a Etapa 2 con tesis completa + verificación adversarial.

> [!warning] Corrección material de datos, confirmada con fuente primaria
> La ficha de datos original (recopilador-fundamental) traía un error sistemático de magnitud, no de
> matiz: ingresos, beneficio neto y EBITDA ajustado FY2025 estaban entre un 26% y un 47% por debajo de las
> cifras oficiales. El verificador lo cazó y corrigió contra SEC EDGAR (CIK 1009001, formulario 40-F,
> accession 0001193125-26-116229) y los comunicados oficiales de Cameco. **Esta página usa las cifras
> corregidas, no las del borrador de tesis original.**

## 1. Negocio

Cameco es tres negocios: (1) **minera de uranio tier-1** — Cigar Lake (la mina de mayor ley del mundo) y
McArthur River, ambas en Saskatchewan (jurisdicción segura); (2) **servicios de combustible nuclear**
(conversión/fabricación); (3) **49% de Westinghouse** (reactores AP1000 y servicios de recarga de
combustible), contabilizado por equity method, no consolidado. Vende a [[utilities|utilities]] globales con un mix
estimado (no verificado) de ~60% contratos largos / ~40% spot.

## 2. Industria — [[mineria-industrial-y-energia]]

La página del Cerebro fija el método para minera: **price-taker, NAV/AISC multi-precio, nunca beneficio de
pico**; moat casi nulo salvo activos tier-1 de bajo coste y larga vida — categoría en la que Cameco encaja
genuinamente (de lo mejor del sector en calidad de activo). Tesis estructural del sector: renacimiento
nuclear + demanda de datacenters de IA frente a oferta rígida, con Kazajistán (~40% de la oferta mundial)
como riesgo de concentración geográfica. Lección de la propia página que aplica con fuerza directa aquí:
**concentración de activo = punto único de fallo** — el miss de Q2-2026 por disrupción en Cigar Lake es
exactamente ese riesgo materializándose (NI trimestral cayó a C$25M desde C$321M interanual).

## 3. Moat — [[foso-economico]]

Real pero estrecho: activos de máxima ley y vida larga en jurisdicción segura (escasos, no replicables), un
libro de contratos a largo plazo, y la posición regulatoria/IP de Westinghouse. El negocio minero puro
sigue siendo commodity — el moat protege el COSTE, no el PRECIO.

## 4. Financieros — cifras corregidas (verificadas contra 40-F SEC/EDGAR y comunicados oficiales)

| Partida (FY2025) | Ficha original (INCORRECTA) | Oficial (usar esta) |
|---|---:|---:|
| Ingresos | C$2.560M | **C$3.482M** |
| Beneficio neto | C$433M | **C$590M** |
| EBITDA ajustado | C$1.030M | **C$1.929M** |
| Margen EBITDA ajustado | 40,2% | **55,4%** |

**Patrón del error**: ingresos y NI de la ficha original guardaban razón ~1,36x frente a los oficiales —
coincide con el tipo de cambio CAD/USD real de 2025 (USDCAD medio 1,40), como si se hubieran tomado cifras
ya convertidas a USD y etiquetado como C$. El EBITDA de la ficha (C$1.030M) coincidía casi al céntimo con
el EBITDA ajustado de **solo el primer semestre** de 2025, mal etiquetado como año completo. **La
"corrección" que había hecho el recopilador-fundamental sobre el cribado inicial (bajar el margen del ~55%
a 40,2%) estaba mal — el cribado inicial tenía razón, y el propio watchlist del Cerebro ya registraba
"~55%" el mismo día**: la ficha se contradijo con la memoria del propio vault.

- **Desglose por segmento FY2025 (oficial)**: Uranio C$1.255M, Fuel Services C$219M, participación en
  Westinghouse C$780M, Otros/corporativo C$(325)M → total C$1.929M sobre C$3.482M de ingresos.
- **Precio realizado de uranio FY2025: US$62,11/lb** (confirmado, informe anual 2025; vs. US$58,34 en
  2024). Mix 60/40 contratos/spot: estimación razonable, no confirmada.
- **Error de etiqueta de serie a corregir**: la ficha llamaba "spot USD 86,50/lb" a lo que en realidad es
  el **indicador de precio a largo plazo** (pico dic-2025), no el spot. El spot medio real 2025 fue
  US$73,54/lb y el spot de cierre de año ~US$81,40/lb — cualquier escenario que hable de "uranio spot
  >$120" parte de una base ya contaminada por esta confusión de serie.
- FCF USD 751M, conversión FCF/NI 1,73x (excelente). Caja neta positiva pero fina (~USD 84M).
  Desapalancamiento agresivo (deuda −80% desde 2023). **ROE 7,59%** — bajo para un sector "en crecimiento":
  con P/B 8,38x, el mercado no paga el retorno actual, paga casi exclusivamente opcionalidad futura.
- **Contribución de Westinghouse — DOS métricas muy distintas, no intercambiables**:
  - Sobre NI (equity pickup): C$58M ≈ **US$41M** (FY2025 oficial) — orden de magnitud parecido al de la
    ficha original, algo por debajo, plausible.
  - Sobre EBITDA ajustado (la métrica que Cameco usa para el "rendimiento subyacente" de Westinghouse,
    precisamente porque el NI está deprimido por amortización/intereses de la compra apalancada de 2023):
    C$780M ≈ **US$557M** — **20 veces** el número que traía la ficha original.
  - El resultado 2025 de Westinghouse incluye un componente **no recurrente ligado al proyecto Dukovany
    (~US$170M)**: en Q2-2026 su EBITDA (participación Cameco) cayó de US$352M a US$163M interanual —
    volatilidad DEMOSTRADA, no solo "opacidad" como decía el borrador original. Tratar como flujo lumpy,
    no run-rate.

## 5. Directiva y capital allocation

Disciplina visible: reinversión moderada (~25% del FCF a capex), sin dilución, guía anual mantenida pese al
miss de Cigar Lake (deterioro no estructural). Sin dividendo ni recompras — el retorno total depende al
100% del precio de la acción. Sin datos de insider ownership en la ficha disponible — `[Sin datos]`.

## 6. Valoración — rehecha con las cifras corregidas

Precio de referencia USD 97,76 (13-ago-2026, confirmado con múltiples fuentes independientes: Investing.com
97,75, MarketBeat 98,92/11-ago y 99,15/12-ago). Market cap US$42,6bn (435,46M acciones × 97,76, cuadra con
EDGAR). EV ~US$42,5bn.

### Múltiplos, corregidos

- **EV/EBITDA real: ~31x** (US$42,5bn / EBITDA ajustado ~US$1.378M a FX 1,40) — **no ~42x** como calculó el
  borrador original con la cifra de EBITDA equivocada. Es menos caro de lo que decía la tesis original, pero
  **sigue siendo un múltiplo muy exigente para una minera tier-1** (mid-cycle normal 6-12x).
- **P/E ~168x** sobre beneficio deprimido por el miss de Cigar Lake (H1-2026 ~USD 156M) — carísimo en
  cualquier lectura, normalizado o no.
- **EV/FCF ~57x** (FCF US$751M; FCF yield 1,8%).
- **P/B 8,38x** — solo defendible bajo un re-rating estructural permanente y sostenido del sector.

### NAV/SOTP recalculado — orden de magnitud, no precisión fina (recálculo pendiente de refinar)

Con las cifras corregidas, el NAV por partes queda así (no es una repetición del "$45-60" del borrador
original, que se basaba en el EBITDA erróneo — es un recálculo independiente con los datos verificados):

- **Núcleo minero (Uranio + Fuel Services)**: EBITDA actual (realizado US$62,11/lb) = US$897M (segmento
  Uranio) + US$156M (Fuel Services) ≈ **US$1,05bn**. Proyectando convergencia a US$80/lb (escenario base,
  usando la sensibilidad aproximada de +US$10/lb ≈ +US$300M EBITDA sobre volumen ~30M lbs/año — **estimado,
  no verificado**) → EBITDA proyectado ≈ US$1,4-1,5bn. A múltiplo mid-cycle tier-1 (10-12x) → **NAV núcleo
  minero ≈ US$14-18bn**.
- **49% de Westinghouse**: ancla corregida sobre el deal Cameco/Brookfield 2023, cuyo EV real fue
  **US$7,875-8,2bn** (no ~US$5,9bn como decía la ficha original — REFUTADA con confianza alta, tres fuentes
  del deal coinciden). 49% de ese EV ≈ **US$3,9-4,0bn**, cifra que probablemente SOBRESTIMA el valor de
  equity real porque no neta la deuda propia de Westinghouse de la compra apalancada de 2023 (dato no
  disponible — `[Sin datos]`). Con re-rating vía la IPO confidencial (presentada 31-jul-2026, sin valoración
  pública aún) podría subir hacia US$7,7-8,0bn si el mercado dobla la valoración de 2023.
- **SOTP total, escenario base (sin re-rating de IPO): ≈ US$18-22bn** → **≈ USD 41-50/acción** (435,46M
  acciones). **Con re-rating de IPO: ≈ US$22-27bn → ≈ USD 51-62/acción.**

**Esta zona (~$41-62 según si la IPO de Westinghouse re-ratea o no) converge, en parte por coincidencia de
correcciones que se compensan (EBITDA del núcleo minero corregido al alza, ancla de Westinghouse también
corregida al alza), a una vecindad similar a la del borrador original — pero es un recálculo genuino con
datos verificados, no una repetición mecánica.** Persisten dos huecos que impiden fijar el número con más
precisión: volumen de producción anual no verificado (~30M lbs/año, estimado) y deuda propia de Westinghouse
no disponible — ambos `[Sin datos]`, quedan pendientes de refinar en una próxima ronda si la posición se
revisita.

### Escenarios (5 años, SOTP por escenario)

| Escenario | Prob. | Supuesto | Valor/acción (aprox.) |
|---|---:|---|---|
| Optimista | 20% | Uranio >US$120/lb sostenido, contratos re-precian, IPO Westinghouse re-ratea a ~2x el ancla 2023 | ~US$54-61 |
| Base | 50% | Uranio converge a ~US$80/lb, IPO sin re-rating fuerte sobre el ancla 2023 | ~US$41-50 |
| Pesimista | 30% | Uranio revierte a US$50-55/lb (respuesta de oferta), IPO retrasada/descontada | ~US$16-20 |

**Valor esperado ponderado ≈ US$40-41/acción** → rentabilidad esperada desde el precio actual
(US$97,76) ≈ **-58% a -60%**. Es una lectura MÁS negativa en términos porcentuales que el -45% del borrador
original — no porque el negocio sea peor de lo que se pensaba (los datos corregidos son, en varios puntos,
mejores: margen EBITDA real 55,4% no 40,2%, EBITDA del núcleo minero más alto de lo asumido), sino porque el
precio de mercado no se movió y el NAV recalculado con rigor no sostiene, en ningún escenario razonable
excepto el más optimista con re-rating completo de la IPO, el precio actual.

**Precio de uranio implícito**: para justificar el EV actual (~US$42,5bn) a un múltiplo mid-cycle de 10-12x
sobre EBITDA consolidado normalizado (excluyendo el componente no recurrente de Dukovany), hace falta un
precio realizado sostenido en el entorno de **US$130-150/lb** — más del doble del actual US$62,11/lb. El
verificador señala que la cifra de "$150/lb" del borrador original estaba algo sobreestimada (con el
EV/EBITDA real de 31x en vez de 42x, la brecha es algo menor), pero el orden de magnitud —el mercado exige
casi una duplicación sostenida del precio realizado— se mantiene.

## 7. Riesgos y red flags

- **Cigar Lake como punto único de fallo** — demostrado en Q2-2026, no hipotético.
- Precio realizado **topado** por el libro de contratos a largo plazo: protege a la baja, pero recorta el
  upside al spot en ambos sentidos.
- **Opacidad + volatilidad demostrada del equity method de Westinghouse**: contribución a NI real solo
  ~US$41M (el pipeline de 91 reactores AP1000 NO es valor monetizado hoy, es opción), mientras la
  contribución a EBITDA ajustado (~US$557M) incluye un componente no recurrente (Dukovany, ~US$170M) que
  infló 2025 — su EBITDA cayó a la mitad interanual en Q2-2026.
- Divisa CAD/USD.
- **El propio proceso de este run es un red flag de fuente**: la ficha de datos original tenía un error
  sistemático de magnitud (−26% a −47%), y la primera "corrección" del recopilador sobre el cribado inicial
  fue en la dirección equivocada — recordatorio de no fiarse de una cifra de screening/ficha sin reconciliar
  contra fuente primaria (mismo patrón de proceso que SAP, 2026-08-12).

## 8. Contraste con postura previa (anti-anclaje)

Primera cobertura del Cerebro — no hay tesis previa que contrastar. El cribado ancho de Etapa 1 (OpenRouter)
señaló "calidad alta, balance limpio, complementa a [[kazatomprom|Kazatomprom]]", otra vez optimista. La valoración a
ciegas llegó a EVITAR/VIGILAR con gatillo, el margen de seguridad más negativo de las dos candidatas del
día — no ancló al marco positivo del cribado: el NAV/SOTP implica que el mercado ya paga un escenario de
uranio sostenido muy por encima del actual para justificar el EV de hoy, dato que solo aparece al hacer el
NAV completo, no en un cribado cualitativo. La propia ficha de datos corrigió al cribado en un punto
material (margen EBITDA 40,2% vs. ~55% del cribado) — y esa "corrección" del recopilador resultó estar mal
también, segunda capa de la misma lección de proceso: no fiarse de cifras sin reconciliar contra fuente
primaria (SAP, 08-12).

**Encaje con cartera — aquí el contraste es distinto al de [[kongsberg-gruppen]]**: Cameco SÍ compite por
bloque de riesgo factorial. La cartera ya tiene 44,5% en el bloque "tangibles/reflación" (metales preciosos
+ materias primas/energía/minería, ver [[evaluacion-cartera-carlos-2026-07]]), identificado ahí como la
> — dato privado retirado —
Cameco —incluso si algún día el precio diera margen de seguridad positivo— reforzaría exactamente la
concentración factorial que objetivos señala como el problema real de la cartera ("no es demasiado
riesgo de bolsa, es riesgo mal repartido"), no la solución. Aunque Cameco añade una pata de negocio distinta
(combustible + Westinghouse) frente a la minera pura Kazatomprom, en riesgo de cartera ambas caen en el
mismo cuadrante que ya pesa demasiado. Con margen de seguridad negativo hoy la pregunta es moot — pero si el
precio corrige a la zona de interés, Carlos debería sopesar esto antes de ampliar el bloque tangible, no
solo mirar el margen de seguridad de Cameco en aislado.

## 9. Veredicto: EVITAR a este precio / VIGILAR con gatillo

Negocio de calidad real (los mejores activos del sector + opción genuina en Westinghouse), pero los cuatro
múltiplos coinciden en caro incluso con los datos corregidos, y el NAV/SOTP recalculado no sostiene el
precio actual salvo en el escenario más optimista con re-rating completo de la IPO de Westinghouse.
**Margen de seguridad negativo, del orden de -55% a -60%.** Zona de interés preliminar: **US$40-50**
(escenario base del SOTP recalculado, pendiente de refinar volumen de producción y deuda de Westinghouse).
Propuesta para que Carlos decida, nunca una orden.

## 10. Qué invalidaría esta tesis

- **Mejora hacia VIGILAR con margen positivo/COMPRAR**: precio realizado de uranio sostenido >US$130-150/lb
  con re-precio real del libro de contratos a largo plazo, **y** la IPO de Westinghouse valorando el 49% de
  Cameco por encima de US$10bn de forma confirmada (no solo rumor).
- **Refuerza la cautela**: uranio revierte hacia US$50-55/lb (respuesta de oferta), o la IPO de Westinghouse
  se retrasa/descuenta, o un nuevo incidente operativo en Cigar Lake/McArthur River repite el patrón de
  punto único de fallo.

## 11. Predicciones falsables (para "Para el CIO")

- "El precio realizado de uranio de Cameco NO supera US$75/lb en el informe de resultados de Q4 2026
  (esperado ~feb-2027), manteniéndose muy por debajo del ~US$130-150/lb que exige el precio actual de la
  acción" — prob. 0,65, resolución con el comunicado oficial de resultados.
- "La IPO de Westinghouse (presentada confidencialmente 31-jul-2026) no se completa, o se completa con una
  valoración del 49% de Cameco por debajo de US$6bn, antes de 2026-11-14" — prob. 0,55, resolución con el
  prospecto/comunicado oficial de la IPO si se hace pública.

## Ver también

[[mineria-industrial-y-energia]] · [[kongsberg-gruppen]] · cartera actual · perfil de inversor ·
objetivos · [[evaluacion-cartera-carlos-2026-07]] · [[foso-economico]] · [[margen-de-seguridad]] ·
[[af-2026-08-14]]
