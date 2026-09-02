---
title: "Teradyne (TER)"
tipo: empresa
tags: [empresa, equipo-semiconductores]
fecha: 2026-08-28
agente: prime-agent
ticker: TER
moneda: USD
precio_referencia: 365
fuentes: "[\"https://investors.teradyne.com/news-events/press-releases/detail/445/teradyne-reports-second-quarter-2026-results\", \"https://www.sec.gov/Archives/edgar/data/97210/000119312526059002/ter-20251231.htm\", \"https://futurumgroup.com/insights/teradyne-q2-fy-2026-doubles-semiconductor-test-revenue-on-ai-compute-and-memory-demand/\", \"https://stockanalysis.com/stocks/ter/statistics/\"]"
---

# Teradyne (TER)

## 1. Negocio

Teradyne es, con la japonesa Advantest (página pendiente), uno de los dos únicos fabricantes mundiales de **equipo de test automatizado (ATE)** para semiconductores: sin sus testers, un chip no se valida ni se envía a volumen. Es un peaje físico sobre la cadena de valor ([[semiconductores-logica-y-computo-ia]]). Tres segmentos:

- **Semiconductor Test (~79% de ingresos 2025):** testers SoC (UltraFLEXplus — base histórica de los chips de [[apple]]), memoria (Magnum 7: HBM/DRAM/NAND) y system-level test (SLT).
- **Product Test (~10%):** placas, defensa/aero, inalámbrico y **test de fotónica de silicio** (Quantifi Photonics, may-2025).
- **Robotics (~11%):** Universal Robots (cobot) y MiR (AMR); cayó 15,5% en 2025 y sufrió reestructuración (~10% de plantilla).

Modelo *capital equipment* cíclico: máquinas caras a IDMs/fabless/foundries/OSAT + servicios y software recurrentes. El cliente es doble: quien *especifica* el tester (OEM/fabless) y quien *compra* (OSAT) — eso dispersa algo la concentración de facturación pero no la de demanda. 89% de ventas fuera de EE. UU.

**Implicación de segundo orden:** el test es el "impuesto de verificación" de la IA: el tiempo de test por die salta de ~50 s (SoC móvil) a **>20 min por acelerador de IA**, y el empaquetado avanzado (chiplets, HBM apilada, co-packaged optics) multiplica las inserciones de test. Teradyne cobra por *volumen de unidades validadas*, no por el éxito comercial de NVIDIA — una exposición "pura" al capex de IA sin comprar la acción de nadie. El reverso: si el capex de IA se digiere, nadie necesita más testers ([[riesgo-de-cola-capex-computo-ia]]).

## 2. Economía y foso (moat)

Tipo: **duopolio + [[costes-de-cambio]] + IP de test** ([[foso-economico]]).
1. Teradyne + Advantest controlan **~90–95% del mercado ATE**: barreras de entrada enormes (IP, librerías de cliente, calibración, soporte global).
2. **Coste de cambio brutal:** re-calificar un tester en una línea de producción de chips es lento y caro; el cliente se casa con la plataforma.
3. **Cartera wafer-to-AI-data-center:** SoC + memoria + SLT + fotónica + la participación del 10% en **Technoprobe** (probe cards; valor en libros 537 M frente a valor de mercado ~1.070 M según análisis de Q1'26 — valor latente no reconocido en balance).
4. **Liderazgo emergente en test de memoria:** Magnum 7 gana *share* en HBM/DRAM final test; la memoria es el tramo más sólido del TAM (mercado 2026 >40% sobre 2025).

Dónde choca: en el tramo que más crece (SoC de aceleradores), **Advantest ganó ~10 puntos de cuota en 2025 (~66%)** por estar dentro de la cadena de NVIDIA/AMD. Teradyne es el nº 2 en lo más caliente, nº 1 en memoria y fotónica. El duopolio protege el margen, no la cuota.

## 3. Números clave

**Q2 2026 — verificado contra el comunicado (28-jul-2026):**
- Ingresos **1.329 M (+104% a/a)**, segundo trimestre récord: Semi Test **1.122 M (+128%)**, Product Test 107 M (+26%), Robotics 100 M (+33%).
- Beneficio neto GAAP **374,5 M (EPS 2,38)**; non-GAAP **389 M (2,47)**.
- Margen bruto non-GAAP 59,8% (pico de 60,9% en Q1: ya normalizando).
- Compute = 70% del SoC; memoria récord >200 M por tercer trimestre seguido, *book-to-bill* >2; primer pedido de GPU "merchant" completado.
- **Guía Q3: 1.200–1.300 M** (declive secuencial de ~6% en el midpoint) — la "digestión" llegó a la guía.

**FY2025 (10-K):** ingresos 3.190 M (+13%); Semi Test 2.523,7 M (+18,8%); Robotics 358 M (-15,5%); margen operativo 20,4%; EPS GAAP 3,47 / non-GAAP 3,96; recompras 702 M; 5 mayores clientes = **44% de ingresos** (uno directo >10%, ~19% — identidad probablemente Apple [Sin verificar]).

Balance sólido: caja+valores ~448 M, deuda = revolver de 200 M (línea de 750 M, vence dic-2026); ROE ~20–29% según periodo. Valoración (ficha, ago-2026): ~365 USD, capitalización ~57 B, **P/E TTM ~50x, P/B ~20x**; la acción subió **+242% en 2025** [Sin verificar].

**Contradicción a resolver:** la tesis de la dirección es "ciclo de una década" (TAM de ATE hacia 20 B, WFE hacia 250 B), pero su propia guía Q3 ya modela declive secuencial y margen bruto cayendo del pico. El crecimiento explosivo 1S-2026 (H1 2,61 B, +95%) carga el año adelante: la pregunta no es si el test de IA es estructural, sino cuánto de la demanda actual es *pull-forward* de 2027.

## 4. Riesgos y red flags

1. **Concentración de clientes:** 5 clientes = 44% de ingresos y subiendo (36% en 2024). La pausa de un solo hyperscaler/OEM mueve el año entero.
2. **Ciclicidad de capex** ([[ciclo-de-capex]]): ~70%+ de Semi Test ya es demanda de IA; una digestión de hyperscalers en 2027 es el riesgo más citado — y la guía Q3 apunta en esa dirección.
3. **Cuota frente a Advantest** en SoC de aceleradores: nº 2 en el tramo que más crece.
4. **Robotics subescala y en pérdida de relevancia:** -15,5% en 2025, reestructuración, goodwill 416 M bajo *critical audit matter*; especulación recurrente de escisión (*carve-out*).
5. **Valoración:** P/E ~50x TTM con márgenes en máximos cíclicos — doble corrección posible si el beneficio normaliza y el múltiplo comprime ([[expansion-y-compresion-de-multiples]], [[reversion-a-la-media]]).
6. **Geopolítica:** export controls a China (BIS), 89% de ventas internacionales; tipo efectivo ~12% sostenido por *tax holiday* de Singapur hasta 2035 — sensible a cambios fiscales.
7. M&A/integración en curso (Quantifi, AET/Infineon, MultiLane JV) con riesgo de ejecución de rampas (CPO, merchant GPU).

## 5. Conexiones

- Industria: [[industria-semiconductores-ciclo-ia]] · [[semiconductores-logica-y-computo-ia]] · [[semiconductores-de-memoria]] · [[industria-robotica-y-automatizacion]].
- Cadena de valor: [[nvidia]] · [[broadcom]] · [[marvell-technology]] (aceleradores/ASIC a validar) · [[tsmc]] · [[asml]] · [[lam-research]] · [[kla-corp]] · [[tokyo-electron]] · [[micron-technology]] · [[sk-hynix]] (memoria HBM a testear con Magnum) · [[apple]] · [[intel]].
- Conceptos: [[costes-de-cambio]] · [[poder-de-precios]] · [[ciclo-de-capex]] · [[riesgo-de-cola-capex-computo-ia]] · [[geopolitica-del-computo]] · [[super-ciclos-y-regimenes-estructurales]] · [[reversion-a-la-media]] · [[expansion-y-compresion-de-multiples]].

## 6. Qué vigilar

- **Realización vs guía Q3 (1,20–1,30 B):** primer test de la "digestión"; el *book-to-bill* de memoria (>2) es el semáforo del 2S.
- **Merchant GPU y nuevos hyperscalers:** diversificación de la demanda más allá de un par de clientes (camino a 2027).
- **Cuota SoC vs Advantest** y rampa de HBM4/321 capas en test de memoria.
- **Robotics:** ¿continúa la racha secuencial positiva (quinto trimestre)? ¿se escinde (carve-out) o se integra en "wafer-to-AI-data-center"?
- **Renovación del revolver** (vence dic-2026) y ritmo de recompras (~275 M en H1'26).
- **Export controls China** y aranceles sobre equipo.
- A ~50x TTM con márgenes de pico, el margen de seguridad es negativo salvo que la década de crecimiento se confirme pronto ([[margen-de-seguridad]]).

Sin veredicto propio de la ficha: "exposición pura al volumen de aceleradores, moat de duopolio, valoración exigente y concentración". La decisión queda en Carlos tras contrastar el pulso de capex de 2027.

---

*Verificación 2026-08-28 (prime-agent): ✓ Q2 2026 (1.329 M +104%, Semi Test 1.122 M, Product Test 107 M, Robotics 100 M, GAAP 374,5 M/2,38, non-GAAP 389 M/2,47); ✓ guía Q3 1,20–1,30 B / EPS 1,85–2,15; ✓ margen bruto non-GAAP 59,8% (desde 60,9% en Q1); ✓ H1 2,61 B +95%; [Sin verificar] +242% en 2025, P/E ~50x, precio ~365 y capitalización ~57 B (fuente única de ficha/stockanalysis), e identidad del cliente >10% (probable Apple, la compañía no lo nombra).*
