---
title: "Verisk Analytics (VRSK)"
tipo: empresa
tags: [verisk, datos-de-riesgo, seguros, moat-de-datos, calidad, nucleo-de-calidad]
fecha: 2026-07-16
fuentes: []
ticker: VRSK
moneda: USD
precio_referencia: 195
fecha_precio: 2026-08-03
valor_estimado: 220
gatillo_entrada: 175
veredicto: VIGILAR
revisar_el: 2026-10-29
---

# Verisk Analytics (VRSK)

Proveedor de datos y analítica de riesgo de propiedad y accidentes (P&C) para aseguradoras y reaseguradoras,
> — dato privado retirado —
> — dato privado retirado —
**5,0% de la cartera**, descrito por el propio Cerebro como "el motor del compounding y está famélico".
Segundo análisis fundamental del equipo (rutina `cerebro-analista-fundamental`, 2026-07-16), comparable
directo de [[moodys]] dentro del mismo bloque.

> [!info] Cobertura nueva
> El Cerebro no tenía página sobre Verisk hasta este análisis.

## Negocio

Verisk vende histórico de siniestros, modelos de catástrofe (huracán, terremoto, incendio forestal) y
analítica de suscripción a aseguradoras, que los usan para fijar primas y decidir qué riesgos aceptar. El
coste de los datos de Verisk es marginal frente al coste de suscribir mal un riesgo (un modelo de catástrofe
erróneo puede costar cientos de millones en un evento extremo) — el cliente no negocia agresivamente el
precio de la herramienta que le protege del riesgo de cola. Modelo de ingresos por suscripción, recurrente,
**menos cíclico que el MIS de Moody's**: la demanda de datos de riesgo depende de la actividad aseguradora
continua (pólizas renovadas cada año), no del volumen de emisión de deuda.

> [!warning] Hueco de datos
> La ficha del recopilador no trae desglose por segmento ni confirma si la desaceleración de ingresos
> reciente se debe a las desinversiones de líneas no-core que Verisk hizo en 2021-2023. Pendiente de una
> fuente adicional antes de dar por hecho el mecanismo exacto.

## Moat — clasificado con la taxonomía de Dorsey ([[foso-economico]])

**Escala de datos propietarios** (décadas de historiales de siniestros agregados de cientos de aseguradoras,
imposible de replicar sin ese histórico) + **costes de cambio** (modelos de tarificación de un asegurador
construidos sobre las APIs de Verisk). A diferencia de Moody's, **no** tiene el componente de exclusión
regulatoria — no hay licencia tipo NRSRO. Es más parecido a un efecto de red débil sobre datos agregados:
cuantos más aseguradores contribuyen datos, más rico el modelo para todos.

**Primera aplicación explícita en el Cerebro del test que Ackman usó en 2022-2023 para [[alphabet|Alphabet]]** (documentado
en [[foso-economico]]): ¿la [[ia-generativa|IA generativa]] erosiona este foso o lo refuerza?

- **A favor de que aguanta**: un LLM no tiene acceso al histórico de siniestros reales de Verisk — son datos
  privados, no están en ningún corpus de entrenamiento público. Los modelos de catástrofe son simulación
  física (meteorología, sismología), no generación de texto.
- **En contra (el riesgo real)**: la IA baja el coste de **construir** analítica de riesgo desde fuentes
  alternativas (satélite, telemática, datos meteorológicos públicos + IA propia del asegurador) — no replica
  el dataset de Verisk, lo **rodea**. Si aseguradoras grandes internalizan analítica con IA, el switching
  cost deja de proteger porque el cliente no cambia de proveedor, **deja de necesitar un proveedor**.
- **Veredicto**: sin evidencia en cifras de que esto ya ocurra (no hay desglose de pérdida de clientes ni de
  márgenes de la línea de analítica) — la caída del 13,6% en 6 meses tras la mención de "AI impacts" en el
  earnings call de oct-2024 es pánico del mercado, no confirmación de daño. Mismo patrón que
  `foso-economico.md` documenta para Alphabet 2023: puede ser oportunidad si el foso aguanta, pero aquí,
  a diferencia de Alphabet, el Cerebro no tiene aún el análisis que lo confirme — es apuesta, no certeza.
  **El earnings del 29-jul-2026 es el primer punto de datos real** que puede resolverlo.

## Calidad financiera

- **ROIC ~33,6%** muy por encima del WACC ~7,3% — spread EVA amplísimo ([[creacion-de-valor-y-eva]]), pasa
  con holgura [[screening-de-calidad]] (ROIC>15-20%, FCF/ventas>5%: Verisk 38,8%).
- **ROE 43,8% no es la cifra a mirar**: patrimonio contable de solo $309M lo distorsiona — mismo aviso que
  [[retorno-sobre-capital-empleado]] documenta para el ROCE de [[terry-smith|Terry Smith]]. Usar ROIC, no ROE.
- **Conversión de caja fuerte**: FCF $1.192M = 38,8% de ingresos, FCF/NI 1,31x — el FCF supera al beneficio
  contable, buena señal de calidad de beneficio ([[contabilidad-y-calidad-de-beneficios]]).
- **Margen neto 29,6%**, margen EBITDA implícito ~51,7% — coherente con el perfil asset-light del sector.
- **Crecimiento decelerando**: ingresos +6,6% en 2025 pero TTM trimestral solo +3,9% (vs. tendencia 7,5%→
  6,6%) — señal temprana de que algo cambia, sin que la ficha aísle si es ciclo, desinversión o presión de IA.
- **Apalancamiento en tensión con recompras**: deuda neta subió de $1,1B (2023) a $2,9B (2025) = 1,69x EBITDA,
  con trayectoria ascendente, mientras se recompraba agresivamente ($2,8B en 2023, $1,05B en 2024) — mismo
  patrón que [[moodys]] usa como criterio de invalidación, más pronunciado aquí que en Moody's (que se
  mantiene estable en 1,2-1,7x). Cobertura de intereses 8,1x da colchón hoy; la tendencia, no el nivel, es la
  señal a vigilar.

## Valoración — DCF por escenarios (16-jul-2026, precio $193,72, market cap $24.965M)

FCF base $1.192M, WACC 7,3%, ~128,9M acciones, deuda neta $2.859M:

| Escenario | Crecimiento FCF 2026-30 | g terminal | Valor/acción | vs. precio |
|---|---|---|---:|---:|
| Pesimista | 4,5% | 2,5% | ~$194 | ~0% |
| Base | 5,5% | 2,75% | ~$214 | +10% |
| Optimista | 7,0% | 3,0% | ~$242 | +25% |

**Valor esperado ponderado** (35% pesimista / 45% base / 20% optimista) **≈ $212 vs. precio $193,72 → margen
de seguridad positivo, modesto, ~+9%.**

Contraste con múltiplos: P/E TTM 29,5x vs. sector ~22x (+34% prima), PEG 1,91 — no es barata en absoluto; el
escenario pesimista del DCF coincide casi con el precio actual, así que el margen depende de que el caso base
(crecimiento 5-6%, sin deterioro de moat por IA) se cumpla.

**Comparación directa con Moody's** (mismo bloque, mismo método): Moody's da margen **negativo** (~-9%,
[[moodys]]) con moat más duro (regulatorio NRSRO, no atacado hoy) pero riesgo estructural ([[credito-privado|crédito privado]])
lento y poco falsable a corto plazo. Verisk da margen **positivo modesto** (~+9%) con un riesgo de moat (IA)
más agudo y cercano en el tiempo (earnings en 2 semanas). No son sustitutas una de otra — son apuestas
complementarias con perfiles de riesgo distintos dentro del mismo bloque.

## Riesgos

- **Erosión del moat de datos por IA/analítica interna del cliente** — impacto alto (es el core del negocio),
  probabilidad media. El riesgo prioritario de esta tesis.
- **Deterioro continuado del crecimiento orgánico** (de 6,6% a 3,9% TTM) — impacto medio, probabilidad
  media-alta si la tendencia no revierte.
- **Apalancamiento financiando recompras** — impacto medio, cobertura 8,1x da colchón hoy pero la trayectoria
  es la peor del bloque de calidad.
- **Compresión de múltiplo sin deterioro del negocio** (29,5x hacia 22x sectorial) — riesgo de "pagar de más".

## Veredicto: VIGILAR / DCA pequeño y continuado — no ampliar con convicción alta antes del 29-jul

Negocio de calidad real (ROIC 33,6%, FCF/ventas 38,8%, moat de datos propietarios genuino) con margen de
seguridad positivo pero modesto (~+9%), mejor punto de entrada relativo que Moody's ahora mismo dentro del
mismo bloque, pero con amenaza de moat (IA) menos probada y más falsable, y con tendencia de apalancamiento
peor que su comparable. No convicción alta a tamaño; coherente con seguir dirigiendo DCA al bloque
calidad/datos sin concentrar el flujo en un solo nombre. **Esperar al earnings del 29-jul-2026** antes de
> — dato privado retirado —
impact" es ruido o riesgo real.

### Qué invalidaría la tesis
- Earnings 29-jul (o los 2-3 trimestres siguientes) confirman con cifras concretas que clientes sustituyen
  analítica de Verisk por soluciones internas de IA.
- Crecimiento orgánico TTM sigue cayendo por debajo del 3% de forma sostenida sin explicación de desinversión
  puntual.
- Deuda neta/EBITDA supera 2-2,5x financiando más recompras en vez de desapalancar.
- ROIC ajustado (no el ROE distorsionado) converge hacia el WACC de forma sostenida.

### Qué confirmaría o mejoraría la tesis
- Management da color específico y tranquilizador sobre IA el 29-jul, con retención de clientes intacta.
- El crecimiento trimestral se estabiliza o repunta hacia 5-6% sin necesidad de M&A.
- La deuda neta/EBITDA se estabiliza o baja pese a seguir recomprando.

## Nota de evolución — 2026-08-03 (earnings review Q2 2026)

Primer earnings review completado (el intento del 29-jul quedó PENDIENTE por datos no indexados a tiempo,
ver `af-2026-07-29.md`). Verisk publicó Q2 el 29-jul-2026; datos recopilados y contrastados el 2026-08-03,
dentro del run de earnings-review de esa fecha (junto a [[amazon]] y [[bae-systems]]). Con esta nota se
formalizan por primera vez los **campos de vigilancia** de esta ficha (precio, valor estimado, gatillo,
veredicto) — la tesis original del 16-jul no los llevaba.

**Veredicto revisado: de "VIGILAR, sesgo comprador" (borrador a ciegas) a VIGILAR a secas.** El verificador
adversarial retiró explícitamente el sesgo comprador: no está justificado por la evidencia completa del
trimestre.

- **El +8,0% de suscripción orgánico en moneda constante NO es la señal limpia de retención que sugería el
  borrador**: el propio 10-Q atribuye el crecimiento "primarily due to an annual increase in prices", no a
  volumen. El segmento transaccional (17% de ingresos) cayó -4,2% orgánico — donde el cliente puede reducir
  uso, lo está haciendo. XactAI sigue escalando con fuerza (7.000 licenciatarios, 10x desde marzo), pero eso
  no compensa la lectura de fondo.
- **Comparación interanual real: DECELERACIÓN, no aceleración.** Crecimiento orgánico total 5,8% vs 7,9% hace
  un año; suscripción 8,0% vs 9,3%; EBITDA orgánico 7,4% vs 9,7%. La mejora visible es solo secuencial (Q1
  fue 4,7%).
- **Calidad del beneficio se deteriora pese al titular**: beneficio ajustado cayó -1,9% interanual ($259,3M
  vs $264,4M); GAAP net income -9,8%. El "+5,3% de EPS ajustado" es enteramente [[recompra-de-acciones|recompra de acciones]] (share
  count -6,8%), no crecimiento del negocio.
- **Apalancamiento toca exactamente el umbral de invalidación que esta misma tesis fijó el 16-jul**: deuda
  neta $3.922M (vs $2.859M el 16-jul, vs ~$1,1B en 2023), Debt/EBITDA 2,5x (desde 1,69x) — el umbral era
  "supera 2-2,5x financiando más recompras en vez de desapalancar", y ambas condiciones se cumplen: se
  recompraron $1.826M en H1 pese a la deuda subiendo. Patrimonio neto ahora NEGATIVO (-$1,19B) tras el
  buyback apalancado; gasto de intereses +48,7% interanual. FCF/NI 1,30x sigue siendo saludable, pero el FCF
  usado es un proxy TTM, no OCF verificado contra el 10-Q — pendiente de confirmar.
- **Valoración @ ~$195** (precio no confirmado con fuente limpia durante la verificación — proveedores de
  mercado caídos; rango cruzado $187-195; si el precio real es más bajo, el margen sería MAYOR, no menor):
  P/E GAAP anualizado 27,9x (adj ~24,6x), EV/EBITDA 2026E 16,2x, EV/FCF 24,5x, EV/Rev 9,4x — ninguno barato.
  DCF por escenarios (WACC estático 7,3% — el verificador señala que es una debilidad dado el mayor riesgo
  financiero; un WACC más alto comprimiría el margen): pesimista 20% ~$144, base 55% ~$221, optimista 25%
  ~$277 → ponderado ~$220 vs precio $195 → **margen de seguridad nominal +12,6%**. Gran parte de la mejora
  frente al +9% de la tesis original es precio más bajo, no mejora fundamental limpia: el FCF base casi no
  se movió mientras la deuda neta subió $1.063M en 6 semanas.

**Conclusión del verificador**: mantener sin ampliar; no promover ascenso de convicción hasta que (a) el
10-Q confirme el FCF real (hoy proxy TTM, no OCF verificado) y (b) el Q3 muestre si el Debt/EBITDA se
estabiliza (<2,5x) o sigue subiendo (>2,5x). Encaje con cartera sin cambios de fondo: posición pequeña (6
> — dato privado retirado —
earnings no cambia la conclusión de no ampliar.

## Lo que esto le dice al cerebro de Carlos

- **No solapa con tangibles (44,5%) ni tech-semis (28,3%)** de cartera actual — diversificación factorial
  genuina, igual que Moody's.
- **Segundo caso del bloque calidad/datos** donde el ROE reportado hay que descartarlo por recompras que
  vacían el patrimonio — empieza a verse como patrón estructural del sector, no anecdótico de una empresa.
- **Comparación con Moody's dentro del mismo bloque**: distinto, no igual. Verisk tiene mejor precio hoy;
  Moody's mejor moat a largo plazo. Para el próximo tramo de DCA del bloque calidad, ambas son válidas según
  qué variable pese más (precio vs. durabilidad del foso).

## Preguntas abiertas

- ¿Qué revela el earnings del 29-jul-2026 sobre retención de clientes frente a analítica de IA interna?
- ¿La desaceleración de ingresos (6,6%→3,9% TTM) es ciclo, desinversión pasada, o inicio de presión de IA?
  La ficha no lo aísla.
- ¿Cuál es la exposición de incentivos/participación de la directiva? Dato ausente, pendiente para subir
  convicción sobre [[asignacion-de-capital|asignación de capital]].

## Ver también

cartera actual · perfil de inversor · objetivos · [[foso-economico]] · [[moodys]] ·
[[retorno-sobre-capital-empleado]] · [[margen-de-seguridad]] · [[contabilidad-y-calidad-de-beneficios]] ·
[[creacion-de-valor-y-eva]] · [[screening-de-calidad]]
