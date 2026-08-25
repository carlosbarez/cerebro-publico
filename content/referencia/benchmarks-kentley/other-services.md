---
title: "Other Services — benchmarks de industria"
tipo: referencia
tags: [referencia, benchmarks, kentley, naics, servicios, servicios-personales]
fecha: 2026-07-22
fuentes: ["[[kentley-metodo]]"]
destilado_por: openrouter
---

# Other Services — benchmarks de industria

Ficha de referencia cuantitativa. Universo: censo de empresas de **EEUU**, NAICS `81` (Other Services),
informe Kentley Insights. Sector: Servicios. Antes de usar estas cifras leer los límites en
[[kentley-metodo]] — en especial que la mediana incluye microempresas y **no** es comparable sin más con una
cotizada.

## Datos verificados

| Métrica | Valor | Procedencia |
|---|---:|---|
| Margen neto medio | 15,2% | parser (prosa del informe) |
| Ranking del margen en su sector | top 60% | parser |
| Empresas rentables | 74,9% | parser |
| Crecimiento anual últimos 5a | 9,9% | parser |
| Crecimiento previsto próximos 5a | 2,2% | parser (previsión de Kentley) |
| Inflación sectorial media 5a | 9% | parser |
| Gastos operativos / ingresos | 77,3% | parser |
| Cuota Top 4 (ventas) | 2,9% | parser + **verificado** |
| Cuota Top 8 (ventas) | 4,6% | parser + **verificado** |
| Cuota Top 20 (ventas) | 7,9% | parser + **verificado** |
| Cuota Top 50 (ventas) | 12,5% | parser + **verificado** |

Estas cifras se extrajeron con parser determinista sobre el PDF, no con el destilado del LLM. Es el sector
servicios más fragmentado de toda la muestra Kentley (Top 50 = 12,5%, frente a 45,7% en Finanzas o 61,6% en
Information).

## Estructura de costes

| Partida de gasto | % sobre ingresos |
|---|---:|
| Gastos de personal | 39,2% |
| Gastos de propiedad | 6,9% |
| Gastos de equipamiento | 12,6% |
| Gastos de TI | 1,5% |
| Gastos varios | 7,2% |
| Otros gastos operativos | 32,6%* |
| **Total gastos operativos (2025)** | **77,3%** |

*Incluye trabajo por contrato y otras prestaciones sociales.

## Balance indexado (base 100 = ingresos)

| Partida | Valor indexado |
|---|---:|
| Efectivo | 11,5 |
| Cuentas por cobrar (neto) | 4,7 |
| Inventarios | 3,3 |
| Otros activos corrientes | 4,7 |
| **Total activo corriente** | **24,2** |
| Activos amortizables (neto) | 11,5 |
| Activos intangibles (neto) | 11,2 |
| Otras inversiones y activos | 12,9 |
| Terrenos | 3,0 |
| **Total activo fijo y no corriente** | **38,7** |
| **TOTAL ACTIVO** | **62,9** |
| Cuentas por pagar | 3,4 |
| Deuda a corto plazo | 2,0 |
| Otros pasivos corrientes | 8,3 |
| **Total pasivo corto plazo** | **13,7** |
| Deuda a largo plazo | 17,9 |
| Otros pasivos largo plazo | 11,9 |
| **Total pasivo largo plazo** | **29,8** |
| **TOTAL PATRIMONIO NETO** | **19,4** |

## Empleo y salarios

Ingresos por empleado (2025): $187.001 — el más bajo de todos los sectores servicios de esta muestra. Nómina
por empleado: $40.986 (CAGR 3 años 3,4%, 5 años 3,9%). Ratio nómina/ingresos: 3,2% según cálculo directo del
informe (cifra baja porque gran parte de la mano de obra en este sector es autoempleo/franquicia, fuera de
nómina formal).

Rangos salariales por categoría (USD/hora, percentil 10 – mediana – percentil 90):
- Dirección: $22,49 – $55,11 – $97,41
- Operaciones financieras: $20,05 – $39,11 – $62,27
- Instalación/mantenimiento/reparación: $15,23 – $26,10 – $38,87
- Ventas y relacionadas: $12,32 – $23,45 – $38,55
- Cuidado personal/servicio: $11,81 – $19,73 – $29,92

Principales categorías de empleo (% del empleo total): técnicos y reparadores de automóviles 8,5%,
peluqueros/estilistas 6,5%, peones y transportistas de materiales 5,1%, conductores/repartidores 4,7%,
directivos generales/operaciones 4,3%.

## Notas del informe

Perímetro: NAICS 81 — servicios no clasificados en otra parte (reparación de equipos, actividades religiosas,
advocacy, cuidado personal, lavandería, servicios funerarios, cuidado de mascotas). Fuentes: BLS, Census,
IRS, BEA, Fed, Dept. of Commerce. Cobertura: históricos 2017-2025, previsión 2026 y 2030 (previsión 2026
negativa, -0,4%, único caso de la muestra). Fecha del informe: julio 2026. Kentley Insights no garantiza
exactitud ni completitud de los datos.

> [!warning] Fiabilidad
> Todo lo de esta página por debajo de "Datos verificados" procede del destilado automático y **no está
> verificado** contra el PDF. Contrastar antes de que sostenga una tesis o una decisión.

## Ver también

[[benchmarks-sectoriales]] · [[kentley-metodo]] · [[tasas-base-y-vista-exterior]] · [[index]]
