---
title: "Utilities — benchmarks de industria"
tipo: referencia
tags: [referencia, benchmarks, kentley, naics, servicios, utilities, infraestructura]
fecha: 2026-07-22
fuentes: ["[[kentley-metodo]]"]
destilado_por: openrouter
---

# Utilities — benchmarks de industria

Ficha de referencia cuantitativa. Universo: censo de empresas de **EEUU**, NAICS `221` (Utilities), informe
Kentley Insights. Sector: Servicios. Antes de usar estas cifras leer los límites en [[kentley-metodo]] — en
especial que la mediana incluye microempresas y **no** es comparable sin más con una cotizada.

## Datos verificados

| Métrica | Valor | Procedencia |
|---|---:|---|
| Margen neto medio | 12,1% | parser (prosa del informe) |
| Ranking del margen en su sector | bottom 20% | parser |
| Empresas rentables | 66,7% | parser |
| Crecimiento anual últimos 5a | 7,6% | parser |
| Crecimiento previsto próximos 5a | 6,3% | parser (previsión de Kentley) |
| Inflación sectorial media 5a | 6,1% | parser |
| Gastos operativos / ingresos | 77,9% | parser |
| Cuota Top 4 (ventas) | 16,2% | parser + **verificado** |
| Cuota Top 8 (ventas) | 26,4% | parser + **verificado** |
| Cuota Top 20 (ventas) | 49,3% | parser + **verificado** |
| Cuota Top 50 (ventas) | 71,6% | parser + **verificado** |

Estas cifras se extrajeron con parser determinista sobre el PDF, no con el destilado del LLM. Es el sector
servicios más concentrado de toda la muestra (Top 50 = 71,6%).

## Estructura de costes

| Partida de gasto | % sobre ingresos |
|---|---:|
| Gastos de personal | 19,5% |
| Gastos de propiedad | 37,7% |
| Gastos de equipamiento | 19,9% |
| Gastos de TI | 0,7% |
| Gastos varios | 7,7% |
| Otros gastos operativos | 14,5%* |
| **Total gastos operativos (2025)** | **77,9%** |

*El peso alto de "gastos de propiedad" (37,7%) refleja combustibles, electricidad comprada y agua/alcantarillado
— coherente con un negocio intensivo en infraestructura física regulada.

## Balance indexado (base 100 = ingresos)

*Balance con activo total muy superior a 100 (370,2) — el sector más intensivo en capital fijo de toda la
muestra (activo fijo/activo total = 0,83), típico de redes eléctricas, de gas y de agua reguladas.*

| Partida | Valor indexado |
|---|---:|
| Efectivo | 5,0 |
| Cuentas por cobrar (neto) | 18,9 |
| Inventarios | 5,0 |
| Otros activos corrientes | 10,9 |
| **Total activo corriente** | **39,8** |
| Activos amortizables (neto) | 222,2 |
| Terrenos | 1,3 |
| Activos intangibles (neto) | 14,6 |
| Otras inversiones y activos | 92,3 |
| **Total activo fijo y no corriente** | **330,4** |
| **TOTAL ACTIVO** | **370,2** |
| Cuentas por pagar | 13,7 |
| Deuda a corto plazo | 20,1 |
| Otros pasivos corrientes | 14,2 |
| **Total pasivo corto plazo** | **48,1** |
| Deuda a largo plazo | 125,1 |
| Otros pasivos largo plazo | 94,0 |
| **Total pasivo largo plazo** | **219,1** |
| **TOTAL PATRIMONIO NETO** | **103,0** |

## Empleo y salarios

Ingresos por empleado (2025): $1.160.446 (top 20% de servicios). Nómina por empleado: $129.307 (top 20% de
servicios, CAGR 3 años 3,7%). Ratio nómina/ingresos implícito: ~11,2%.

Rangos salariales por categoría (USD/hora, percentil 10 – mediana – percentil 90):
- Instaladores y reparadores de líneas: $30,40 – $46,95 – $60,77 (10,8% del empleo)
- Operadores de plantas eléctricas: $31,60 – $50,00 – $65,70 (5,9%)
- Instaladores/reparadores de válvulas: $40,20 – $56,98 – $71,90 (4,5%)
- Electricistas: $24,33 – $41,84 – $57,42 (4,2%)
- Fontaneros/instaladores de tuberías: $39,03 – $57,73 – $79,69 (4,1%)

Composición de plantilla: Operaciones y tecnología 65,1% (instalación/mantenimiento/reparación 27,7%,
producción 13,4%); Dirección y finanzas 32,7%.

## Notas del informe

Perímetro: NAICS 221 — servicios esenciales de infraestructura (generación y distribución de electricidad,
distribución de gas natural, tratamiento y distribución de agua, aguas residuales, servicios de vapor).
Fuentes: BLS, Census, IRS, BEA, Fed, Dept. of Commerce. Cobertura: históricos 2017-2025, previsión 2026 y
2030. Fecha del informe: julio 2026. Varios estados sin datos por tamaño de muestra insuficiente (California,
Connecticut, D.C., Hawaii, entre otros). Kentley Insights no garantiza exactitud ni completitud de los datos.

> [!warning] Fiabilidad
> Todo lo de esta página por debajo de "Datos verificados" procede del destilado automático y **no está
> verificado** contra el PDF. Contrastar antes de que sostenga una tesis o una decisión.

## Ver también

[[benchmarks-sectoriales]] · [[kentley-metodo]] · [[tasas-base-y-vista-exterior]] · [[index]]
