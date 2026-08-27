---
title: "Producción y transformación de metal — benchmarks de industria"
tipo: referencia
tags: [referencia, benchmarks, kentley, naics, manufactura, metal, acero]
fecha: 2026-07-22
fuentes: ["[[kentley-metodo]]"]
destilado_por: openrouter
---

# Producción y transformación de metal — benchmarks de industria

Ficha de referencia cuantitativa. Universo: censo de empresas de **EEUU**, NAICS `331` (Metal Production &
Processing), informe Kentley Insights. Sector: Manufactura. Antes de usar estas cifras leer los límites en
[[kentley-metodo]] — en especial que la mediana incluye microempresas y **no** es comparable sin más con una
cotizada.

## Datos verificados

| Métrica | Valor | Procedencia |
|---|---:|---|
| Margen neto medio | 14,7% | parser (prosa del informe) |
| Ranking del margen en su sector | top 60% | parser |
| Empresas rentables | 76,8% | parser |
| Crecimiento anual últimos 5a | 0,6% | parser |
| Crecimiento previsto próximos 5a | 4,8% | parser (previsión de Kentley) |
| Cuota Top 4 (ventas) | 20,6% | parser + **verificado** |
| Cuota Top 8 (ventas) | 31,8% | parser + **verificado** |
| Cuota Top 20 (ventas) | 45,9% | parser + **verificado** |
| Cuota Top 50 (ventas) | 60,4% | parser + **verificado** |

Estas cifras se extrajeron con parser determinista sobre el PDF, no con el destilado del LLM.

## Estructura de costes

| Partida de gasto | % sobre ingresos |
|---|---:|
| Coste de materiales | 74,3% |
| Gastos de personal (nómina + prestaciones) | 13,7% |
| Capital, edificios y maquinaria | 4,6% |
| Otros gastos | 7,4% |
| **Total gastos operativos (2025)** | **86,4%** |

Es la industria de la muestra con mayor peso de materiales sobre ingresos (74,3%) y menor peso de personal
(13,7%) — coherente con un negocio de proceso intensivo en capital y commodities.

## Balance indexado (base 100 = ingresos)

| Partida | Valor indexado |
|---|---:|
| Efectivo | 6,4 |
| Cuentas por cobrar (neto) | 22,3 |
| Inventarios | 14,3 |
| Otros activos corrientes | 3,7 |
| **Total activo corriente** | **46,7** |
| Activos amortizables (neto) | 25,7 |
| Activos intangibles (neto) | 11,9 |
| Otras inversiones y activos | 33,0 |
| Terrenos | 1,3 |
| **Total activo fijo y no corriente** | **72,0** |
| **TOTAL ACTIVO** | **118,7** |
| Cuentas por pagar | 19,0 |
| Deuda a corto plazo | 7,3 |
| Otros pasivos corrientes | 5,9 |
| **Total pasivo corto plazo** | **32,1** |
| Deuda a largo plazo | 30,4 |
| Otros pasivos largo plazo | 11,1 |
| **Total pasivo largo plazo** | **41,6** |
| **TOTAL PATRIMONIO NETO** | **45,0** |

## Empleo y salarios

Nómina/ingresos: 9,9% (la más baja de las industrias manufactureras de esta muestra). Nómina por empleado:
$80.061 (CAGR 3 años 3,7%). Ingresos por empleado: $807.406 — muy alto, reflejo del alto valor unitario de
materiales que pasan por el negocio.

Nómina por empleado por segmento: Top 4 empresas $108.841, resto del sector entre $65.952 y $86.235 según
tramo de tamaño — sin apenas dispersión.

Rangos salariales por categoría (USD/hora, percentil 10 – mediana – percentil 90):
- Operadores de horno de metal: $19,08 – $26,62 – $34,58
- Preparadores de máquinas de conformado: $19,63 – $29,07 – $40,31
- Moldeadores de metal/plástico: $22,07 – $34,46 – $44,82
- Soldadores: $23,44 – $32,28 – $40,48
- Operadores de carretillas industriales: $34,11 – $50,45 – $67,71

Composición de plantilla: Operaciones 76,8% (producción 54,8%); Dirección y finanzas 15,1%.

## Notas del informe

Perímetro: NAICS 331 — transformación de minerales y chatarra en productos metálicos utilizables (extracción,
refino, aleación, conformado); incluye acerías, metales no férreos, aluminio, fundiciones. Fuentes: BLS,
Census, IRS, BEA, Fed, Dept. of Commerce. Cobertura: históricos 2017-2025, previsión 2026 y 2030. Fecha del
informe: julio 2026. Previsiones incorporan impacto arancelario, dinámica staple vs. discrecional y
elasticidad-precio. Kentley Insights no garantiza exactitud ni completitud de los datos.

> [!warning] Fiabilidad
> Todo lo de esta página por debajo de "Datos verificados" procede del destilado automático y **no está
> verificado** contra el PDF. Contrastar antes de que sostenga una tesis o una decisión.

## Ver también

[[benchmarks-sectoriales]] · [[kentley-metodo]] · [[tasas-base-y-vista-exterior]] · [[index]]
