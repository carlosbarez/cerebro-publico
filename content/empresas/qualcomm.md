---
title: "Qualcomm (QCOM)"
tipo: empresa
tags: [empresa, semiconductores, moat-bifurcado, cartera, tech-desarrollada]
fecha: 2026-07-29
fuentes: []
ticker: QCOM
moneda: USD
precio_referencia: 182.97
fecha_precio: 2026-07-27
valor_estimado: 185
gatillo_entrada: 140
veredicto: VIGILAR
revisar_el: 2026-10-29
---

# Qualcomm (QCOM)

> — dato privado retirado —
> — dato privado retirado —
antigüedad (miércoles), no por caza de candidata nueva. Base: borrador de Kimi K3 (valoración a ciegas, sin
acceso a `perfil/` ni al lenguaje evaluativo de cartera) + verificación adversarial (confianza MEDIA-ALTA,
cifras contrastadas 1:1 contra el 10-K FY2025 de Qualcomm en SEC EDGAR, CIK 804328) + contraste anti-anclaje
y encaje de cartera añadidos por el orquestador. El veredicto se aplica tal cual: las correcciones del
verificador apuntan hacia MÁS cautela, no menos.

**Nota de método**: QCOM es un híbrido — cíclica de handsets + royalty de IP (QTL) + opción de
diversificación (automotive/IoT/datacenter). Ningún múltiplo único lo captura: DCF por escenarios
probabilizados con el núcleo de handsets normalizado (ni el pico FY2022 de $48.000M ni el valle FY2023 de
$42.000M), QTL valorado con más certidumbre por su naturaleza de licencia, y automotive/IoT/datacenter como
variable de escenario. Los múltiplos relativos sirven de contraste, no de veredicto único.

## 1. Negocio

Dos segmentos con economías muy distintas:

- **QCT (86,6% de ingresos, margen EBT ~30%)**: diseño de chips. Handsets (~61% de QCT) crece +7% YoY —
  motor histórico maduro, en deceleración estructural. Automotive +38% YoY (objetivo $6.000M FY2026,
  $10.000M FY2029) e IoT +24% YoY crecen rápido pero pesan poco todavía. Datacenter/IA: cliente hyperscaler
  confirmado, ingresos aún no materiales.
- **QTL (13,4% de ingresos, margen EBT ~71%)**: licencias de patentes esenciales (SEP) 4G/5G, ~$6.000M de
  ingresos con flujo casi puro a EBT. **Cobra aunque el cliente no compre chips de Qualcomm** — mitigación
  estructural clave frente al riesgo Apple (ver §3).
- **Contribución real al EBT** (recálculo del verificador desde la propia ficha): QTL solo pesa 13,4% de
  ingresos pero aporta **~27% del EBT total** del negocio, por el margen de 71% frente al 30% de QCT — la
  bifurcación de calidad importa más de lo que sugiere el peso en ingresos.

## 2. Industria — [[semiconductores-logica-y-computo-ia]]

Encaja en el marco fabless de la industria: diseña, TSMC fabrica. Margen bruto 54,8% — entre AMD (~48%) y
Broadcom (~64%) — confirma diferenciación real, no commodity puro. A diferencia de Nvidia, el foso no es un
ecosistema de software tipo CUDA: es IP de módem/RF + cadencia de roadmap en SoC móvil, terreno donde un
cliente grande con escala puede integrar verticalmente — el caso que ya vive con Apple. La página de
industria ya señalaba a Qualcomm como el eslabón de "diseño móvil" de Carlos, junto a ASML (equipos) y
Micron (memoria/HBM) en la misma ola de capex de semis.

## 3. Moat — [[foso-economico]] (BIFURCADO — corrección del verificador: la etiqueta única del borrador
original infravaloraba QTL)

- **QTL (licencias, ~27% del EBT): moat moderado-ancho y duradero.** Protegido específicamente del riesgo
  Apple-chips porque las patentes esenciales se cobran independientemente de quién fabrique el módem.
  Durable al menos hasta el horizonte de transición a 6G (2030s); riesgo abierto: el litigio Arm en
  apelación (IP de Nuvia) — si Arm gana, debilita parte de este pilar.
- **QCT/handsets (~86,6% de ingresos, la mayoría del negocio): moat estrecho y con reloj.** Coste de cambio
  moderado por integración módem-SoC-RF, pero el propio caso Apple demuestra que un cliente con escala puede
  internalizar en ~7 años (Intel se retiró antes de conseguirlo). Escala de I+D (~$9.000M/año) es la barrera
  más real hoy. Sin efecto de red.
- **No colapsar en una sola etiqueta**: el negocio dominante en ingresos (QCT) tiene el foso más débil; el
  negocio dominante en calidad de margen (QTL) tiene el foso más fuerte y menos expuesto al riesgo #1.

## 4. Financieros — calidad del beneficio (con correcciones del verificador)

ROIC calculado ~31% (método sano; el ROE del agregador es inconsistente entre GAAP 26,1% y non-GAAP ~49% y
no se usó). Deuda neta/EBITDA 0,19x, cobertura de intereses ~16x — balance muy conservador. FCF TTM $12.820M
(28,8-28,9% de ingresos) — **verificado 1:1 contra el 10-K FY2025**.

**Corrección importante (verificador, confianza ALTA, con cita textual del propio comunicado de Qualcomm)**:
el borrador original atribuía el gap FCF/NI GAAP (231%) a "SBC + amortización no-caja". La causa dominante
real es un **cargo único no-caja de $5.700M** contra el impuesto diferido (valuation allowance), consecuencia
de la ley fiscal estadounidense *One Big Beautiful Bill Act* (OBBB, jul-2025), que somete a Qualcomm al AMT
corporativo desde FY2026. Cita del comunicado: *"This charge was excluded from our Non-GAAP metrics but
impacted our GAAP results."* SBC ($2.780M FY2025) y amortización son reales pero secundarios este año, no la
causa dominante que decía el borrador. **Nota de contexto de mercado**: OBBB puede producir el mismo patrón
(cargo fiscal único que infla el P/E GAAP sin afectar al negocio) en otras empresas con exposición fiscal
similar durante FY2026 — vale la pena tenerlo presente al leer P/E GAAP de otras posiciones este año.

**Consecuencia de valoración**: el P/E trailing debe etiquetarse explícitamente como non-GAAP/ajustado
(~18,3-19,7x). El **P/E trailing GAAP real, distorsionado al alza por el cargo fiscal puntual, ronda
33-36x** — no comparable directo con AMD/Broadcom sin verificar la misma base de cálculo en esos comparables.

## 5. Directiva y capital allocation

Recompras agresivas ($8.800M FY2025, nuevo programa autorizado de $20.000M ≈ 11% del market cap), dividendo
yield 2,13% con payout cómodo sobre non-GAAP. M&A: Nuvia (apuesta por CPU propia, origen del litigio Arm).
Asignación razonable y amiga del accionista; nota honesta: la recompra financia en parte la compensación en
acciones — la reducción neta de acciones en 4 años es solo -3,8%, no el bruto recomprado.

## 6. Valoración por escenarios

**Múltiplos** (precio $182,97, 27-jul-2026): P/E trailing non-GAAP ~18,3-19,7x (GAAP real ~33-36x, ver §4),
forward 14,8x; EV/EBITDA 13,0x; PEG 0,53; P/S 4,03x. Descuento claro frente a AMD (P/E 22-24x), Broadcom
(25-28x), Nvidia (60-70x) — el mercado ya descuenta buena parte del riesgo Apple y el crecimiento mediocre de
handsets.

**DCF por escenarios** (FCF base $12.800M, 1.054M acciones, deuda neta $2.435M):

- **Pesimista (25%)**: cliff Apple completo ($3.000-4.000M de QCT), handsets plano, erosión China, automotive
  decepciona. FCF → ~$9.500-10.000M, g 1-2%. Valor ≈ **$125-135/acc**.
- **Base (50%)**: Apple sale gradualmente (QTL compensa ~la mitad de la pérdida), automotive ~$8.000M en
  2029, handsets +2-3%, IoT sólido, datacenter marginal. FCF crece ~3-4%. Valor ≈ **$175-185/acc**.
- **Optimista (25%)**: datacenter/IA se materializa, automotive $10.000M, ciclo de handsets repunta, sin
  sorpresa Arm. FCF → $15.000-16.000M, g 5%. Valor ≈ **$260-280/acc**.
- Valor esperado ponderado con el WACC 9,5-10% del borrador original: ~$190/acc ≈ +4% sobre el precio.

**Corrección de sensibilidad (verificador, confianza MEDIA, contrastado contra 5 estimadores externos de
WACC/beta — Baratelli, AlphaSpread, ValueInvesting.io, DeepViews, modelo académico Iowa, que convergen en
beta 1,2-1,4 y WACC 10,1-10,7%)**: el WACC de 9,5-10% del borrador está en el extremo bajo del rango de
mercado. Con un WACC de consenso (10,3-10,7%), el valor base cae de forma aproximada un ~11% (de ~$199 a
~$177 en una aproximación Gordon-growth simple sobre el escenario base) — aplicado al valor esperado
ponderado, esto **lleva el margen de seguridad de "+4%" a territorio NEGATIVO, no ~0%**. El sesgo del WACC
va en la dirección de infravalorar el riesgo, no de exagerarlo.

**Valor intrínseco (valor esperado ponderado, corregido): ≈$185/acc.** **Precio actual: $182,97
(27-jul-2026). Margen de seguridad: ≈0% a ligeramente negativo, sensible al supuesto de WACC — no hay margen
de seguridad genuino a este precio.**

## 7. Riesgos y red flags

Impacto × probabilidad:

1. **Apple modem cliff 2026-2027** (alto × alta): $2.000-4.000M de ingresos QCT en riesgo; timeline exacto
   desconocido, pero es el riesgo que el propio mercado ya vigila — riesgo de ejecución, no de sorpresa
   total.
2. **China/HK ~46% de ingresos** (alto × media): geopolítica + competencia de chips domésticos
   (Huawei/CITIC). Si se materializa junto al cliff de Apple, el escenario pesimista se queda corto.
3. **Litigio Arm en apelación** (medio × baja-media): una derrota debilitaría el IP de CPU/Nuvia, pilar de la
   diversificación futura.
4. Guía Q4 FY2025 conservadora: momentum plano a corto plazo.
5. **Sensibilidad al WACC** (del verificador): con supuestos de coste de capital de mercado en vez del
   extremo bajo del rango, el margen de seguridad ya nulo pasa a negativo.

**Red flags**: ninguna contable grave — las cifras clave reconcilian 1:1 contra SEC EDGAR.
**Gatillo de entrada inconsistente (hallazgo del verificador)**: el gatillo propuesto de $140-145 ofrece un
descuento razonable (~20-25%) frente al valor esperado del caso base ($175-190), pero **no protege frente al
escenario pesimista propio ($125-135)**, que es precisamente el escenario construido en torno al riesgo #1 de
esta misma tesis (Apple modem cliff). Comprar a $142 seguiría dejando a Carlos por encima del valor
intrínseco estimado si ese riesgo se materializa. Esto no es un error a resolver por el analista, es una
decisión de tolerancia al riesgo de Carlos: **o se protege el caso base (entrada ~$140-145) o se protege
contra el riesgo #1 (entrada más baja, ~$110-115, ~20% bajo el extremo inferior del pesimista)**. El campo
`gatillo_entrada` de esta página usa 140 como referencia del caso base — no resuelve la ambigüedad, solo fija
un ancla operativa para el vigilante de precio; la decisión de cuál de los dos gatillos usar queda abierta
para Carlos. Exposición exacta a Apple (10-20% estimado, sin dato primario), calendario real del modem cliff
y resultado de la apelación Arm son datos que la ficha no permite fijar con precisión — mueven el escenario
pesimista ±20%.

## 8. Contraste con postura previa (anti-anclaje)

No existía tesis formal previa sobre Qualcomm — es la primera cobertura de esta empresa en el cerebro. El
único "ancla" disponible antes de este análisis era la fila de la P&L en cartera actual (+33,0%, bloque
"Tech/semis"), sin lenguaje evaluativo explícito tipo "barato" o "candidato" que pudiera sesgar al analista —
a diferencia de casos pasados (Moody's/Booking, 07-16) donde el lenguaje de cartera sí contaminó el borrador.
Riesgo de anclaje bajo en este caso concreto.

La valoración a ciegas de Kimi llegó de forma independiente a VIGILAR con margen ~0-4%, y fue crítica con el
moat ("estrecho y con reloj") pese a los buenos números de calidad (ROIC 31%) — la forma correcta de tratar
buenos números sin comprarlos ciegamente. El verificador comprobó explícitamente la hipótesis de
sobrecorrección hacia la cautela (dado que la posición ya lleva +33% de ganancia) y la **descartó**: Kimi no
tenía visibilidad de la posición ni de su P&L, así que no pudo estar compensando algo que no veía. Las
correcciones que sí sobrevivieron (WACC generoso, gatillo inconsistente con el riesgo #1) apuntan en la
dirección de que el borrador era, si acaso, **demasiado optimista, no demasiado cauteloso** — lo contrario
del patrón de sobrecorrección que el proceso vigila desde el caso BAE Systems (07-24).

**Veredicto del verificador**: confianza MEDIA-ALTA. Cifras clave (FCF, FCF/ingresos, ROE GAAP, FCF/NI)
verificadas 1:1 contra SEC EDGAR (10-K FY2025, CIK 804328). Correcciones aplicadas: (1) causa del gap
GAAP/non-GAAP reatribuida al cargo fiscal único OBBB de $5.700M, no SBC+amortización; (2) P/E trailing
etiquetado como non-GAAP, con el GAAP real (~33-36x) anotado aparte; (3) sensibilidad de WACC añadida,
moviendo el margen de seguridad de "+4%" a "≈0% a negativo"; (4) moat bifurcado entre QTL (moderado-ancho) y
QCT/handsets (estrecho y con reloj); (5) inconsistencia del gatillo de entrada frente al escenario pesimista
señalada explícitamente. El veredicto general (VIGILAR, sin margen de seguridad genuino) sobrevive y sale
reforzado, no debilitado, por la verificación — ninguna corrección apunta hacia más optimismo.

## 9. Veredicto: VIGILAR — no ampliar; valorar si el margen negativo justifica un recorte parcial de la
posición existente (propuesta, decide Carlos)

Negocio de calidad real y heterogénea: QTL es una licencia de altísimo margen con foso duradero (~27% del
EBT, protegida del riesgo Apple); QCT/handsets es el motor de ingresos con foso estrecho y un evento binario
cercano en el tiempo (Apple). Con el WACC corregido a niveles de mercado, el margen de seguridad real es
**nulo a ligeramente negativo**, no el "+4%" que sugería el borrador con un WACC generoso — **no hay
justificación numérica para ampliar la posición a precio actual**.

> — dato privado retirado —
> — dato privado retirado —
> — dato privado retirado —
la cartera, el segundo bloque de riesgo más grande tras "tangibles/reflación" (44,5%). Qualcomm no aporta
diversificación factorial nueva: solapa parcialmente con Micron en exposición a semiconductores, aunque el
motor económico es distinto (memoria commodity cíclica vs. IP/licencias + SoC móvil — página de Micron aún
sin crear en el wiki). El bloque "calidad/datos" (Moody's, Booking, Verisk), descrito en `cartera-actual.md`
como "el motor del compounding y está famélico" (solo 5,0% de la cartera), sigue siendo el hueco real de la
cartera — ampliar Qualcomm no ayudaría a cerrarlo, y hoy la valoración tampoco lo justifica. Dado que la
posición es pequeña en términos absolutos (3,8%), un recorte parcial tendría impacto de cartera limitado pero
coherencia de proceso: no premiar con más convicción un negocio con margen de seguridad nulo-negativo solo
porque ya viene ganando. **La pregunta honesta no es solo "¿comprar más?" sino "¿el margen negativo justifica
recortar parte de lo que ya hay?"** — el analista la señala como pregunta abierta, la decisión es de Carlos.

## 10. Qué invalidaría esta tesis

- **Invalida (más cautela, revisar hacia EVITAR/recorte)**: iPhone 2026-2027 confirma módem propio de Apple
  con rampa rápida y sustitución material de QCOM → escenario pesimista gana probabilidad.
- **Confirma/mejora (revisar hacia posible COMPRAR)**: iPhone 2026-2027 sale sin módem propio de Apple o con
  rampa lenta/parcial → escenario pesimista pierde probabilidad, valor esperado sube hacia ~$210+.
- Ventana de resolución: hasta el ciclo de producto de otoño 2026 y su primera generación sucesora (2027) —
  evento fechable pero sin fecha exacta hoy.
- Litigio Arm (apelación) resuelto en contra de Qualcomm → debilita el pilar QTL/CPU propia, revisión a la
  baja del moat.
- WACC de mercado (10,3-10,7%) confirmado por evolución del coste de capital → mantiene el margen de
  seguridad en territorio negativo aunque el negocio no cambie.

## 11. Predicciones falsables (para "Para el CIO")

- **"El iPhone de otoño 2026 (o su sucesor de 2027) sale con módem propio de Apple con rampa material (>30%
  de unidades) que sustituye a Qualcomm"** — prob. 0,35, resolución hasta cierre del ciclo de producto de
  2027 (fuente: comunicados oficiales de Apple/Qualcomm y reporting de mercado de componentes).
- **"Qualcomm cotiza por debajo de $140 en algún momento antes del 2026-10-29"** — prob. 0,25, resolución con
  el precio de cierre diario (fuente: mercado). Umbral elegido como el gatillo de caso base de esta tesis, no
  como protección frente al escenario pesimista (ver ambigüedad señalada en §7).

## Ver también

[[semiconductores-logica-y-computo-ia]] · cartera actual · perfil de inversor · objetivos ·
[[foso-economico]] · [[margen-de-seguridad]] · [[michael-mauboussin]] · [[creacion-de-valor-y-eva]] ·
[[screening-de-calidad]] · [[af-2026-07-29]]
