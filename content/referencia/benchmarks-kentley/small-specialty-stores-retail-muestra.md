---
title: "Small Specialty Stores (retail, muestra) — benchmarks de industria"
tipo: referencia
tags: [referencia, benchmarks, kentley, naics, retail, tiendas-especializadas]
fecha: 2026-07-22
fuentes: ["[[kentley-metodo]]"]
destilado_por: openrouter
---

# Small Specialty Stores (retail, muestra) — benchmarks de industria

Ficha de referencia cuantitativa. Universo: censo de empresas de **EEUU**, NAICS `453998` (Small Specialty
Stores), informe Kentley Insights. Sector: Retail. Antes de usar estas cifras leer los límites en
[[kentley-metodo]] — en especial que la mediana incluye microempresas y **no** es comparable sin más con una
cotizada.

## Datos verificados

| Métrica | Valor | Procedencia |
|---|---:|---|
| Margen neto medio | 11,1% | parser (prosa del informe) |
| Ranking del margen en su sector | top 40% | parser |
| Empresas rentables | 71,8% | parser |
| Crecimiento anual últimos 5a | 4,9% | parser |
| Crecimiento previsto próximos 5a | 4,6% | parser (previsión de Kentley) |
| Inflación sectorial media 5a | 2% | parser |
| Gastos operativos / ingresos | 33,9% | parser |

Estas cifras se extrajeron con parser determinista sobre el PDF, no con el destilado del LLM.

## Estructura de costes

| Partida de gasto | % sobre ingresos |
|---|---:|
| Gastos de personal (nómina, seguros, planes de pensión) | 49,2% |
| Alquiler/leasing de tiendas | 18,5% |
| Equipamiento | 5,1% |
| TI | 1,8% |
| Manejo de inventario y suministros | 5,2% |
| Servicios profesionales | 11,7% (dentro de "varios") |
| Otros gastos varios | 8,5% |

Total gastos operativos (2024): 33,9% sobre ingresos. Nota: los subtotales de esta tabla no cuadran a 100%
porque el informe reparte partidas granulares (nómina, alquiler, profesionales) en categorías superpuestas.

## Balance indexado (base 100 = ingresos)

| Partida | Valor indexado |
|---|---:|
| Efectivo | 5,5 |
| Cuentas por cobrar | 5,6 |
| Inventarios | 12,9 |
| Otros activos corrientes | 4,1 |
| **Total activo corriente** | **28,0** |
| Activos depreciables (neto) | 7,2 |
| Activos intangibles (neto) | 17,0 |
| Otras inversiones y activos | 11,7 |
| Terrenos | 0,4 |
| **Total activo fijo y no corriente** | **36,3** |
| **TOTAL ACTIVO** | **64,3** |
| Cuentas por pagar | 9,7 |
| Deuda a corto plazo | 2,7 |
| Otros pasivos corrientes | 6,5 |
| **Total pasivo corto plazo** | **18,9** |
| Deuda a largo plazo | 21,6 |
| Otros pasivos largo plazo | 7,6 |
| **Total pasivo largo plazo** | **29,2** |
| **TOTAL PATRIMONIO NETO** | **16,2** |

## Empleo y salarios

Ingresos por empleado (2024): $249.263. Nómina por empleado: $35.280 (CAGR 3 años 4,5%, 5 años 3,5%).
Payroll sobre ingresos: 14,2%.

Rangos salariales por categoría (USD/hora, percentil 10 – mediana – percentil 90; proxy "Other Retail"):
- Dirección: $20,89 – $53,50 – n/d
- TI: $16,36 – $35,49 – $64,75
- Marketing: $13,05 – $26,68 – $42,15
- Instalación/mantenimiento/reparación: $13,33 – $22,05 – $33,72
- Ventas y relacionadas: $10,53 – $17,11 – $26,28
- Producción: $11,17 – $18,88 – $28,50

Composición de plantilla: Ventas, servicio y marketing 60,1% (mayoritariamente ventas 56,2%); Operaciones
13,5%; Dirección y finanzas 16,8%.

## Notas del informe

Perímetro: NAICS 453998 — establecimientos dedicados a vender líneas especializadas de mercancía (suministros
de arte, artículos religiosos, piscinas, coleccionismo, tabaco, trofeos, etc.), excluyendo grandes almacenes y
retailers sin tienda física. Fuente de datos: encuestas empresariales automatizadas cruzadas con fuentes
federales (BLS, Census, IRS, BEA, Fed, Dept. of Commerce). Cobertura: históricos 2016-2024, previsión 2025 y
2029. Fecha del informe: 2025. Advertencia: categorías de empleo y rangos salariales están basados en "Other
Retail" (industria matriz), no específicos de esta muestra. Kentley Insights no garantiza exactitud ni
completitud de los datos.

> [!warning] Fiabilidad
> Todo lo de esta página por debajo de "Datos verificados" procede del destilado automático y **no está
> verificado** contra el PDF. Contrastar antes de que sostenga una tesis o una decisión.

## Ver también

[[benchmarks-sectoriales]] · [[kentley-metodo]] · [[tasas-base-y-vista-exterior]] · [[index]]
