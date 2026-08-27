---
title: "SAP SE (SAP, ADR NYSE ratio 1:1)"
tipo: empresa
tags: [empresa, sap, plataformas-tecnologicas, software-empresarial, tech-desarrollada, cartera]
fecha: 2026-08-12
fuentes: []
ticker: SAP
moneda: USD
precio_referencia: 209.68
fecha_precio: 2026-08-12
valor_estimado: 240
gatillo_entrada: 195
veredicto: VIGILAR
revisar_el: 2026-11-12
---

# SAP SE (SAP, ADR NYSE ratio 1:1)

Primera tesis formal del Cerebro sobre SAP — posición **existente** en cartera actual de Carlos (8
> — dato privado retirado —
de la cartera). Análisis de rotación de miércoles (`cerebro-analista-fundamental`, 2026-08-12, sin
earnings pendientes en cartera/watchlist ese día).

> [!info] Cobertura nueva
> El Cerebro no tenía página sobre SAP hasta este análisis, pese a ser posición de cartera desde antes. No
> existía veredicto evaluativo previo en `cartera-actual.md` — solo aparecía como posición "Tech" sin
> lenguaje de convicción; el ejercicio de valoración a ciegas arrancó sin anclaje que corregir.

## 1. Negocio

SAP vende software ERP (contabilidad, cadena de suministro, RRHH) en transición de licencias perpetuas a
suscripción cloud (S/4HANA, Business AI "Joule"). Si no sale simple: SAP cobra una suscripción anual a
las mayores empresas del mundo por el sistema que ya lleva sus operaciones internas, y les está migrando
a la fuerza (fin de soporte del ERP antiguo, ECC) hacia la versión cloud, que factura más y mejor.

## 2. Industria — [[plataformas-tecnologicas-y-publicidad-digital]]

SAP figura en la industria de grandes plataformas tecnológicas del Cerebro, pero con un perfil distinto al
resto del grupo (Alphabet, Meta, Amazon, Microsoft): su motor es backlog de suscripción ERP, no gasto en
datacenters/GPUs de IA. **No está expuesta al debate de capex de IA de los hyperscalers** que domina esa
industria — es la única posición del bloque tech con ese perfil de correlación distinto, lo que aporta
diversificación real (no solo nominal) frente al riesgo concentrado de "capex de IA sin retorno" que sí
afecta a Meta/Microsoft/Amazon/Alphabet.

## 3. Moat — [[foso-economico]]

Moat de **costes de cambio** (categoría Dorsey): migrar un ERP corporativo es carísimo y arriesgado, por
eso el churn de grandes cuentas es bajo. Riesgo de segundo orden real: la ventana 2026-2030 en que SAP
fuerza la migración ECC→S/4HANA es también el momento en que un CIO, obligado igualmente a un proyecto
grande, puede evaluar alternativas (Oracle Fusion, Workday, Dynamics 365) — el foso no desaparece, pero
esta ventana es la de mayor fragilidad en una década.

## 4. Financieros — calidad del beneficio (verificado contra 20-F SEC/EDGAR)

- Ingresos FY2025: €36.800M (+7,6%), CAGR 2023-25 8,6%.
- **Cloud revenue FY2025 real: €21.023M (+23% YoY, 57,1% de ingresos)** — CORREGIDO por el verificador: la
  ficha original citaba €17,14B como si fuera FY2025, pero ese dato es de FY2024 (la propia SAP lo etiqueta
  así en su outlook). Cloud+Software FY2025: €32.538M (+9% YoY, **88,4% de ingresos recurrentes** — mejor
  mix del que se pensaba inicialmente).
- Margen operativo FY2025: 29,0% (non-IFRS ~28,9%). Margen neto FY2025 19,46% vs FY2024 9,13% — salto
  EXPLICADO y confirmado: cargo de reestructuración no recurrente de ~€3,1-3,2B en 2024 ("2024
  Transformation Program", ~10.000 puestos), prácticamente nulo en 2025. 2025 es el año "limpio", no una
  anomalía a desconfiar.
- FCF FY2025: €8.240M, FCF/NI 115% (excelente conversión).
- Balance: caja neta +€2.856M (30-jun-2026), Debt/EBITDA ~0,75x — sin riesgo de solvencia.
- ROCE FY2025: 19,6% (>WACC).
- Backlog cloud: €22.929M (+27% YoY), crece más rápido que el revenue cloud (+22-23%) — señal ambigua
  (aceleración futura o contratos front-loaded); sin datos de duración de RPO para resolverlo, queda como
  pregunta abierta.
- **Q2 2026 (23-jul-2026): miss de EPS non-IFRS CORREGIDO a ~8-10% vs consenso** (no ~20% como decía el
  borrador inicial) — en USD, $1,82 real vs ~$2,00-2,03 esperado. Guidance de operating profit non-IFRS
  recortada ligeramente (€11,9-12,3B → €11,8-12,2B), **explícitamente atribuido a dilución por
  adquisiciones sin sinergia (Dremio, Prior Labs, >€100M)**, NO a debilidad de demanda — el guidance de
  cloud revenue/FCF (~€10B) se mantuvo intacto.
- Múltiplos: P/E homogeneizado ~31,3x, EV/EBITDA real ~19-21x (el 16,97x de la ficha original no
  reconciliaba con market cap/caja neta, correctamente descartado por "sospechosamente barato"), P/FCF
  corregido ~27-29x (el 58,25x original era error de cálculo), P/S homogeneizado ~6,6x. Comparables: Adobe
  30-35x, Salesforce 25-30x, Oracle 20-25x — SAP en el extremo alto sin retorno claramente superior al
  grupo que lo justifique del todo.

## 5. Directiva y capital allocation

Patrón de M&A de IA sin disciplina evidente: Dremio y Prior Labs, adquisiciones pequeñas (>€100M
combinado, ~1,3% del FCF) pero sin sinergia declarada, y ya han diluido el guidance de margen una vez —
a vigilar si se repite en mayor escala.

## 6. Valoración por escenarios

DCF propio, rango USD 195-290/acción según WACC (7,5%-9,0%):

| Escenario | Prob. | Supuesto | Valor/acción |
|---|---:|---|---:|
| Optimista | 25% | cloud >20% sostenido, márgenes a 36-38% | ~$280-290 |
| Base | 50% | deceleración gradual, márgenes a 34% | ~$235-245 |
| Pesimista | 25% | backlog front-loaded, competencia erosiona migración forzada, márgenes ~30-32% | ~$195-210 |

**Valor esperado ponderado ≈ $240/acción.** Precio de referencia $209,68 (12-ago-2026, NYSE). **Margen de
seguridad ≈ 13-15%.** El verificador recomienda correr también un caso de estrés con margen terminal
31-32% (en vez de 34%) para robustecer el rango base/pesimista — pendiente de la próxima ronda.

## 7. Riesgos y red flags

- **Ventana de fuga de clientes en la migración ECC forzada** (probabilidad media-baja, impacto alto si se
  materializa) — la única ventana en una década donde el coste de cambio baja de facto.
- Ciclo de gasto en TI corporativo.
- Backlog front-loaded sin aceleración real de ingresos (backlog +27% vs cloud revenue +22-23%, sin datos
  de duración de RPO para resolver la ambigüedad).
- **Repetición de M&A de IA sin disciplina** — ya ocurrió una vez (Dremio/Prior Labs), pequeño en magnitud
  hoy (~1,3% del FCF) pero a vigilar si escala.
- Riesgo divisa EUR/USD puro del ADR.
- Disrupción de módulos ERP por IA nativa a largo plazo (baja probabilidad a 5 años).
- Hueco de dato: ausencia de equity/P&B y de duración de RPO que impiden verificación cruzada más fina.

## 8. Contraste con postura previa (anti-anclaje)

Primera tesis formal de SAP — no existía veredicto evaluativo previo en `cartera-actual.md` (solo aparecía
como posición "Tech" sin lenguaje de convicción). No hay anclaje previo del que corregir; el ejercicio
ciego arrancó limpio.

> — dato privado retirado —
bloque "tecnología desarrollada" (28,3%: Meta, Microsoft, Amazon, Qualcomm, Micron, Alphabet, SAP). A
diferencia del resto del bloque, SAP NO está expuesta al debate de capex de IA de los hyperscalers que
domina esa industria del Cerebro ([[plataformas-tecnologicas-y-publicidad-digital]]) — su motor es backlog
de suscripción ERP, no gasto en datacenters/GPUs. Esto le da a SAP un perfil de correlación algo distinto
dentro del propio bloque tech, aportando diversificación real (no solo nominal) frente al riesgo
concentrado de "capex de IA sin retorno" que sí afecta a Meta/Microsoft/Amazon/Alphabet. Con margen de
seguridad positivo pero modesto (13-15%) y una posición ya pequeña, no hay urgencia de ampliar ni motivo
para recortar.

## 9. Veredicto: VIGILAR — margen de seguridad positivo pero modesto

No ampliar. Revisar tras earnings Q3 2026. El verificador adversarial concluye que la tesis **SOBREVIVE**:
las correcciones detectadas (año/métrica de cloud mal etiquetados en la ficha original, EV mal calculado,
P/FCF mal calculado) en general REFUERZAN la tesis de calidad (88% ingresos recurrentes real, no ~50%
percibido con la ficha sin corregir) y matizan a la baja la severidad del miss de Q2 (8-10% real, no ~20%
percibido inicialmente) — el analista había sobrecorregido levemente hacia el pesimismo en ese punto
concreto, corregido aquí.

## 10. Qué invalidaría esta tesis

- **Mejora la tesis / sube hacia COMPRAR**: si Q3 2026 (esperado ~oct-nov-2026) confirma que el crecimiento
  del backlog (+27%) se traduce en aceleración real de ingresos cloud (no solo contratos front-loaded)
  durante 2-3 trimestres.
- **Rompe la tesis / el caso pesimista pasa a ser el central**: si el margen operativo sigue recortándose
  más allá del ajuste ya visto en Q2, la tesis de expansión a 34% se rompe.

## 11. Predicciones falsables (para "Para el CIO")

- "El crecimiento del backlog cloud de SAP (+27% en FY2025) se traduce en aceleración real de ingresos
  cloud durante 2-3 trimestres tras el informe de Q3 2026" — prob. 0,35, resolución con los informes
  trimestrales de Q3 2026 y Q4 2026/Q1 2027.
- "El margen operativo non-IFRS de SAP sigue recortándose por debajo del guidance actual (€11,8-12,2B) en
  el informe de Q3 2026" — prob. 0,30, resolución con el informe de Q3 2026 (esperado ~oct-nov-2026).

## Ver también

cartera actual · perfil de inversor · [[plataformas-tecnologicas-y-publicidad-digital]] ·
[[foso-economico]] · [[margen-de-seguridad]] · [[microsoft]] · [[alphabet]] · [[amazon]] ·
[[meta-platforms]] · [[af-2026-08-12]]

## Nota de evolución 2026-08-25 (analista-europa-espana)

**Evento**: continuación de la lectura Q2 2026 (publicada 22-jul). Nota breve.

**Qué ha pasado desde la ficha**: la acción añadió otro +7% post-resultados (Seeking Alpha, 27-jul) y
SAP volvió a ser citado como soporte del DAX. En prensa española, Nartex Capital justifica comprar SAP
como "oportunidad histórica" (Finect, ago-2026). Hoy cotiza $216,93 (Yahoo, 25-ago) vs referencia de la
ficha $209,68 → +3,5%; sigue por debajo del valor central estimado ($235–245) pero MUY lejos del
gatillo ($195).

**Qué confirma de la tesis**: exactamente lo escrito — el mercado PERDONA el miss contable de EPS
(dilución por M&A) porque cloud y backlog siguen creciendo: demanda intacta, dilución transitoria. La
distinción de la ficha entre problema de negocio y problema de contabilidad quedó validada por la
reacción del mercado.

**Implicación práctica**: con $216,93, el margen sobre valor central es ~+11% (positivo pero modesto,
como decía el veredicto) y el gatillo de entrada a $195 está -10% abajo. Sin cambio de veredicto:
VIGILAR hasta revisar tras Q3.

**Fuente**: Seeking Alpha (27-jul-2026) y Finect/Nartex (ago-2026), titulares RSS (scratchpad/analista-europa-espana/rss_tanda2.json); precio Yahoo Finance SAP 25-ago-2026.
