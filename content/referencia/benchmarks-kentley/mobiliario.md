---
title: "Mobiliario — benchmarks de industria"
tipo: referencia
tags: [referencia, benchmarks, kentley, naics, manufactura, mobiliario]
fecha: 2026-07-22
fuentes: ["[[kentley-metodo]]"]
destilado_por: openrouter
---

# Mobiliario — benchmarks de industria

Ficha de referencia cuantitativa. Universo: censo de empresas de **EEUU**, NAICS `337` (Furniture
Manufacturing), informe Kentley Insights. Sector: Manufactura. Antes de usar estas cifras leer los límites en
[[kentley-metodo]] — en especial que la mediana incluye microempresas y **no** es comparable sin más con una
cotizada.

## Datos verificados

| Métrica | Valor | Procedencia |
|---|---:|---|
| Margen neto medio | 10,7% | parser (prosa del informe) |
| Ranking del margen en su sector | bottom 20% | parser |
| Empresas rentables | 70,4% | parser |
| Crecimiento anual últimos 5a | 0,8% | parser |
| Crecimiento previsto próximos 5a | 3% | parser (previsión de Kentley) |
| Cuota Top 4 (ventas) | 11,9% | parser + **verificado** |
| Cuota Top 8 (ventas) | 19,7% | parser + **verificado** |
| Cuota Top 20 (ventas) | 30,8% | parser + **verificado** |
| Cuota Top 50 (ventas) | 40,9% | parser + **verificado** |

Estas cifras se extrajeron con parser determinista sobre el PDF, no con el destilado del LLM.

## Estructura de costes

| Partida de gasto | % sobre ingresos |
|---|---:|
| Coste de materiales | 55,1% |
| Gastos de personal | 31,9% |
| Capital, edificios y maquinaria | 4,6% |
| Otros gastos | 8,4% |

## Balance indexado (base 100 = ingresos)

| Partida | Valor indexado |
|---|---:|
| Efectivo | 6,1 |
| Cuentas por cobrar (neto) | 10,4 |
| Inventarios | 10,5 |
| Otros activos corrientes | 3,4 |
| **Total activo corriente** | **30,4** |
| Activos amortizables (neto) | 10,4 |
| Activos intangibles (neto) | 17,3 |
| Otras inversiones y activos | 12,5 |
| Terrenos | 1,0 |
| **Total activo fijo y no corriente** | **41,3** |
| **TOTAL ACTIVO** | **71,7** |
| Cuentas por pagar | 9,4 |
| Deuda a corto plazo | 2,9 |
| Otros pasivos corrientes | 7,1 |
| **Total pasivo corto plazo** | **19,5** |
| Deuda a largo plazo | 20,9 |
| Otros pasivos largo plazo | 6,6 |
| **Total pasivo largo plazo** | **27,5** |
| **TOTAL PATRIMONIO NETO** | **24,9** |

## Empleo y salarios

Ingresos por empleado (2025): $219.357. Nómina por empleado: $53.522 (payroll/ingresos implícito ~24,4%).
Nómina por empleado apenas varía por tamaño de empresa (rango $47.962-$57.180) ni por estructura jurídica.

Top 5 estados por nómina/empleado: Michigan $67.790, Rhode Island $64.861, Massachusetts $64.603.

Rangos salariales por categoría (USD/hora, percentil 10 – mediana – percentil 90):
- Dirección: $27,58 – $62,95 – $103,50
- Ventas y relacionadas: $16,94 – $35,80 – $57,76
- Ingeniería/arquitectura: $22,95 – $35,85 – $51,29
- Instalación/mantenimiento/reparación: $18,61 – $27,84 – $38,51
- Producción: $16,01 – $22,86 – $30,83

## Notas del informe

Perímetro: NAICS 337 — fabricación de mobiliario residencial, de oficina, institucional y comercial (madera,
metal, plástico, tapizado). Fuentes: BLS, Census, IRS, BEA, Fed, Dept. of Commerce; encuestas empresariales
del sector. Cobertura: históricos 2017-2025, previsión 2026 y 2030. Previsiones basadas en aranceles,
dinámica producto de primera necesidad vs. discrecional, elasticidad-precio y capacidad de repercutir costes.
Tarifa arancelaria estimada media: 9,2% sobre importaciones ($36,3B en materiales, $1,3B de coste
arancelario); principales países de origen: China, Vietnam, México, Canadá, India. Kentley Insights no
garantiza exactitud ni completitud de los datos.

> [!warning] Fiabilidad
> Todo lo de esta página por debajo de "Datos verificados" procede del destilado automático y **no está
> verificado** contra el PDF. Contrastar antes de que sostenga una tesis o una decisión.

## Ver también

[[benchmarks-sectoriales]] · [[kentley-metodo]] · [[tasas-base-y-vista-exterior]] · [[index]]
- [[manufactura-muestra-2026]] — NAICS 33711 (armarios de cocina y encimeras) es **subcategoría** de este
  NAICS 337: esta ficha es el sector padre en el que situar aquellas cifras
