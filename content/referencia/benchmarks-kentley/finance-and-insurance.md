---
title: "Finance and Insurance — benchmarks de industria"
tipo: referencia
tags: [referencia, benchmarks, kentley, naics, servicios, finanzas, seguros]
fecha: 2026-07-22
fuentes: ["[[kentley-metodo]]"]
destilado_por: openrouter
---

# Finance and Insurance — benchmarks de industria

Ficha de referencia cuantitativa. Universo: censo de empresas de **EEUU**, NAICS `52` (Finance and
Insurance), informe Kentley Insights. Sector: Servicios. Antes de usar estas cifras leer los límites en
[[kentley-metodo]] — en especial que la mediana incluye microempresas y **no** es comparable sin más con una
cotizada.

## Datos verificados

| Métrica | Valor | Procedencia |
|---|---:|---|
| Margen neto medio | 33,5% | parser (prosa del informe) |
| Ranking del margen en su sector | top 20% | parser |
| Empresas rentables | 88,4% | parser |
| Crecimiento anual últimos 5a | 8,4% | parser |
| Crecimiento previsto próximos 5a | 3,8% | parser (previsión de Kentley) |
| Inflación sectorial media 5a | 7% | parser |
| Gastos operativos / ingresos | 48,6% | parser |
| Cuota Top 4 (ventas) | 9,3% | parser + **verificado** |
| Cuota Top 8 (ventas) | 16,2% | parser + **verificado** |
| Cuota Top 20 (ventas) | 29,1% | parser + **verificado** |
| Cuota Top 50 (ventas) | 45,8% | parser + **verificado** |

Estas cifras se extrajeron con parser determinista sobre el PDF, no con el destilado del LLM.

## Estructura de costes

| Partida de gasto | % sobre ingresos |
|---|---:|
| Gastos de personal | 40,0% |
| Gastos de propiedad | 2,4% |
| Gastos de equipamiento | 5,9% |
| Gastos de TI | 3,8% |
| Gastos varios | 8,7% |
| Otros gastos operativos | 39,2%* |

*Este sector tiene un peso muy alto de "otros gastos operativos" (comisiones, provisiones, costes
financieros) que no encaja en las categorías estándar de propiedad/equipamiento/personal — típico de un
negocio de intermediación financiera, no de manufactura o retail físico.

## Balance indexado (base 100 = ingresos)

*Nota: al ser un sector de intermediación financiera, el balance supera con mucho el 100% de los ingresos
anuales (activo total = 1.168,2 sobre ingresos = 100) — refleja el apalancamiento típico del sector, no un
error.*

| Partida | Valor indexado |
|---|---:|
| Efectivo | 29,0 |
| Cuentas por cobrar (neto) | 68,9 |
| Valores y tesorería | 78,5 |
| Otros activos corrientes | 49,8 |
| **Total activo corriente** | **226,3** |
| Préstamos a accionistas/hipotecas | 200,6 |
| Otras inversiones | 677,8 |
| Activos depreciables (neto) | 5,2 |
| Activos intangibles (neto) | 13,6 |
| Otros activos | 44,4 |
| **Total activo fijo y no corriente** | **941,9** |
| **TOTAL ACTIVO** | **1.168,2** |
| Cuentas por pagar | 40,7 |
| Deuda a corto plazo | 16,8 |
| Otros pasivos corrientes | 143,8 |
| **Total pasivo corto plazo** | **201,4** |
| Deuda a largo plazo | 127,7 |
| Otros pasivos largo plazo | 242,7 |
| **Total pasivo largo plazo** | **370,3** |
| **TOTAL PATRIMONIO NETO** | **596,5** |

## Empleo y salarios

Ingresos por empleado (2025): $1.009.207 (+5,9% vs. 2024). Nómina por empleado: $125.862 (CAGR 3 años 3,2%,
5 años 3,8%). Ratio nómina/ingresos implícito: ~12,5% (nómina por empleado / ingresos por empleado) — más
bajo que en la mayoría de sectores servicios de esta muestra, reflejo del alto ingreso por empleado típico de
la intermediación financiera.

Fuerte dispersión geográfica: Nueva York $240.334 por empleado, D.C. $193.482, frente a la media nacional.

Rangos salariales por categoría (USD/hora, percentil 10 – mediana – percentil 90):
- Analistas y asesores financieros: $27,57 – $84,21 – n/d
- Legal: $24,07 – $70,71 – n/d
- Representantes de atención al cliente: $37,78 – $89,78 – n/d
- Dirección: $36,35 – $89,32 – n/d
- TI: $30,33 – $58,24 – $85,32

Por segmento de tamaño: empresas de 250+ empleados pagan $134.657/empleado frente a $62.311 en empresas de
1-4 empleados.

## Notas del informe

Perímetro: NAICS 52 — empresas que realizan o facilitan transacciones financieras (depósitos, valores,
préstamos, seguros, gestión de inversiones, pagos, asesoramiento). Fuentes: BLS, Census, IRS, BEA, Fed, Dept.
of Commerce. Cobertura: históricos 2017-2025, previsión 2026 y 2030. Fecha del informe: julio 2026. Kentley
Insights no garantiza exactitud ni completitud de los datos; prohibida la copia a terceros sin atribución.

> [!warning] Fiabilidad
> Todo lo de esta página por debajo de "Datos verificados" procede del destilado automático y **no está
> verificado** contra el PDF. Contrastar antes de que sostenga una tesis o una decisión.

## Ver también

[[benchmarks-sectoriales]] · [[kentley-metodo]] · [[tasas-base-y-vista-exterior]] · [[index]]
