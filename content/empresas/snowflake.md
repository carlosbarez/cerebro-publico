---
title: "Snowflake (SNOW)"
tipo: empresa
tags: [empresa, software-empresarial]
fecha: 2026-08-28
agente: prime-agent
ticker: SNOW
moneda: USD
precio_referencia: 332
fuentes: "[\"https://www.snowflake.com/en/news/press-releases/snowflake-reports-financial-results-for-the-fourth-quarter-and-full-year-of-fiscal-2026/\", \"https://www.sec.gov/Archives/edgar/data/1640147/000164014726000027/fy2027q1earnings.htm\", \"https://www.businesswire.com/news/home/20260527027931/en/Snowflake-Reports-Financial-Results-for-the-First-Quarter-of-Fiscal-2027\", \"https://techcrunch.com/2026/08/13/databricks-wanted-to-raise-1b-investors-wanted-15b-it-settled-on-5b-at-a-190b-valuation/\"]"
---

# Snowflake (SNOW)

## 1. Negocio

Snowflake es la plataforma del "AI Data Cloud": almacena, gobierna y analiza los datos de la empresa, y ahora ejecuta cargas de IA **sin sacar los datos de un perímetro gobernado** — se posiciona como el *control plane* de la "empresa agéntica". Pionera en separar almacenamiento y cómputo, multi-nube real (AWS, Azure, GCP), con *data sharing*/Marketplace como red de datos entre organizaciones.

Modelo de ingresos: **consumo bajo capacidad comprometida** — el 99% de los ingresos viene ya de contratos de capacidad de 1–4 años (media 3,1 años); el consumo puro on-demand colapsó a ~1%. ~95% es "product revenue". Esto convierte un modelo de consumo en algo casi-suscripción: previsibilidad alta, pero compromiso de gasto que el cliente puede infra-utilizar.

**Implicación de segundo orden:** en la era de agentes de IA ([[ia-agentic]]), quien gobierna los datos gobierna qué puede hacer el agente. Snowflake quiere ser el *gatekeeper* de ese flujo — por eso Cortex AI Gateway y el *routing* dinámico de modelos importan más de lo que parece: mueven el punto de decisión de la nube de cómputo hacia la capa de datos. Los [[hiperscalers]] (que son a la vez su infraestructura y sus competidores con Redshift/BigQuery) tienen el incentivo exacto contrario.

## 2. Economía y foso (moat)

Tipo: **[[costes-de-cambio]] + [[efecto-red]] de datos + escala** ([[foso-economico]]) en [[software-empresarial]].
1. **Gravedad de datos:** migrar un *data warehouse* empresarial es caro y lento; los contratos a 3 años lo refuerzan.
2. **Multi-nube real:** único gran jugador portable entre AWS/Azure/GCP — diferenciador frente a Redshift (AWS) y BigQuery (GCP).
3. **Marketplace / clean rooms:** cuantos más participantes, más valor (efecto red de datos).
4. **Base instalada:** 13.328 clientes; 813 Forbes Global 2000 (≈43% de ingresos); RPO 9,7 B+.

¿Aguanta 10 años? El *switching cost* sí; el problema es la **competencia a dos frentes**: databricks (pendiente) — valorada en 190 B USD privada, creciendo +80% con 7 B+ de ARR (2x Snowflake en crecimiento) — presiona desde el *lakehouse* abierto, y los nativos de nube dan "gratis" el 80% del caso de uso. El foso de Snowflake es el gobierno del dato y la portabilidad; no es insuperable.

## 3. Números clave

**FY2026 (cerrado 31-ene-2026, verificado contra 8-K/10-K):** ingresos totales **4.683,9 M (+29%)**; product revenue 4.472,3 M (+29%); **pérdida GAAP ~-1.330 M**; margen operativo GAAP -31% vs +10% non-GAAP; FCF 1.120 M (**24% de ingresos**); RPO 9.770 M (+42%); NRR 125% (en descenso desde 170%+); SBC 34,1% de ingresos.

**Q1 FY2027 (cerrado 30-abr-2026, verificado contra el 8-K del 27-may-2026):**
- Product revenue **1.330 M (+34%)** — mayor crecimiento secuencial en dólares de su historia; ingresos totales 1.390 M (+33%).
- **NRR 126%** (rebota desde 125%).
- 779 clientes >1 M USD TTM (+46 en el trimestre); 813 FG2000; RPO 9,21 B (+38%).
- EPS non-GAAP 0,39; pérdida GAAP 295,6 M (se estrecha).
- **Guía FY2027 elevada:** product revenue 5.840 M (+31%); margen operativo non-GAAP 13,5%.

Balance: caja+inversiones ~4,8 B frente a ~2,74 B de notas convertibles al 0% → **caja neta +2 B**. Compromisos off-balance-sheet de ~1,05 B en infraestructura cloud (no cancelables) + **acuerdo AWS de 6 B USD a 5 años** (verificado, may-2026): el mayor de su historia.

Conflicto interno del modelo: los compromisos AWS de 6 B crean **coste fijo** sobre ingresos variables de consumo — apalancamiento operativo a la baja en recesión (el suelo de coste equivale a ~68% de su coste de producto anual). El "moat" se paga con rigidez.

## 4. Riesgos y red flags

1. **Pérdidas GAAP persistentes** (-1,33 B en FY2026; rentabilidad GAAP no antes de Q4 FY2028) y déficit acumulado 9,5 B. El FCF de 24–25% existe *porque* la SBC (34% de ingresos, guía 27%) se paga en dilución ([[contabilidad-y-calidad-de-beneficios]]).
2. **NRR cayendo** de 170%+ a 125–126%: la expansión dentro de cuentas maduras se agota; el crecimiento depende cada vez más de captar (*land*). Debajo de 120% = red flag explícita.
3. **Databricks:** mismo presupuesto del cliente, crece al doble, con arquitectura abierta; su IPO (2026/27) marcaría además la referencia de valoración del sector.
4. **Proveedores-competidores:** AWS/Azure/GCP venden la alternativa "nativa"; el acuerdo de 6 B con AWS ata a Snowflake a su principal amenaza.
5. **Valoración:** ~19–25x ventas sin beneficio GAAP ([[expansion-y-compresion-de-multiples]]); a 332 USD el precio exige que la aceleración por IA (Q1 +34%) sea estructural y no un pico de adopción.
6. Concentración: 790–813 clientes FG2000 ≈ 43% de ingresos — perder cuentas grandes duele desproporcionadamente.
7. Reclasificación contable FY2026 (ASC 985-20) con headwind temporal de margen por amortización de software capitalizado.

## 5. Conexiones

- Industria/conceptos: [[software-empresarial]] · [[ia-agentic]] · [[ia-generativa]] · [[hiperscalers]] · [[infraestructura-centros-de-datos]] · [[riesgo-de-cola-capex-computo-ia]] · [[financiacion-estructurada-del-capex-de-ia]] · [[costes-de-cambio]] · [[efecto-red]] · [[foso-economico]] · [[expansion-y-compresion-de-multiples]] · [[contabilidad-y-calidad-de-beneficios]].
- Pares/competencia: databricks (pendiente de crear) · [[amazon]] · [[microsoft]] · [[oracle]] (heredero del warehouse on-premise) · [[datadog]] y [[cloudflare]] (otros "land-and-expand" de infraestructura).

## 6. Qué vigilar

- **Q2 FY2027 (2-sep-2026):** guía 1.415–1.420 M de product revenue — confirmar que +34% no era pico.
- **NRR:** rebote sostenido por encima de 126%, o red flag si vuelve a bajar de 125%.
- **Margen GAAP:** trayectoria hacia el objetivo de rentabilidad en Q4 FY2028; si se retrasa, el foso no se traduce en economía para el accionista.
- **Databricks:** crecimiento de ARR, IPO, victorias en cuentas compartidas.
- **SBC** bajando hacia ~27% de ingresos como prometido.
- **Compromisos cloud** (AWS 6 B + 1,05 B off-balance): palanca de márgenes a la baja si el consumo se frena.

Sin veredicto propio de la ficha (el rango de analistas 110–500 USD es mercado, no tesis de Carlos). El crecimiento verificado es real y la caja neta da colchón; el precio (~19–25x ventas) deja cero margen para una desaceleración de NRR.

---

*Verificación 2026-08-28 (prime-agent): ✓ Q1 FY2027 (product 1.330 M +34%, NRR 126%, 779 clientes >1 M, RPO 9,21 B, guía 5.840 M, EPS non-GAAP 0,39); ✓ acuerdo AWS 6 B USD/5 años (may-2026); ✓ Databricks 190 B USD/ARR 7 B+ (TechCrunch ago-2026); ✓ caja neta positiva ~2 B; [Sin verificar] precio exacto (~332 USD) y capitalización (~110–115 B) a 27-ago-2026; [Sin verificar] los 813 FG2000 se confirmaron en Q1 (la ficha citaba 790 a cierre FY2026 — coherente, no contradictorio).*
