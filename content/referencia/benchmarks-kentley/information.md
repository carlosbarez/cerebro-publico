---
title: "Information — benchmarks de industria"
tipo: referencia
tags: [referencia, benchmarks, kentley, naics, servicios, tecnologia, medios]
fecha: 2026-07-22
fuentes: ["[[kentley-metodo]]"]
destilado_por: openrouter
---

# Information — benchmarks de industria

Ficha de referencia cuantitativa. Universo: censo de empresas de **EEUU**, NAICS `51` (Information), informe
Kentley Insights. Sector: Servicios. Antes de usar estas cifras leer los límites en [[kentley-metodo]] — en
especial que la mediana incluye microempresas y **no** es comparable sin más con una cotizada.

## Datos verificados

| Métrica | Valor | Procedencia |
|---|---:|---|
| Margen neto medio | 26,6% | parser (prosa del informe) |
| Ranking del margen en su sector | top 20% | parser |
| Empresas rentables | 67,3% | parser |
| Crecimiento anual últimos 5a | 8% | parser |
| Crecimiento previsto próximos 5a | 4,5% | parser (previsión de Kentley) |
| Inflación sectorial media 5a | 3% | parser |
| Gastos operativos / ingresos | 74,9% | parser |
| Cuota Top 4 (ventas) | 25,7% | parser + **verificado** |
| Cuota Top 8 (ventas) | 36,4% | parser + **verificado** |
| Cuota Top 20 (ventas) | 50,9% | parser + **verificado** |
| Cuota Top 50 (ventas) | 61,6% | parser + **verificado** |

Estas cifras se extrajeron con parser determinista sobre el PDF, no con el destilado del LLM.

## Estructura de costes

| Partida de gasto | % sobre ingresos |
|---|---:|
| Gastos de personal | 34,0% |
| Gastos de propiedad | 3,5% |
| Gastos de equipamiento | 17,4% |
| Gastos de TI | 2,6% |
| Gastos varios | 8,4% |
| Otros gastos operativos | 34,0% |
| **Total gastos operativos** | **74,9%** |

## Balance indexado (base 100 = ingresos)

*Balance con activo total muy superior a 100 (345,9) — coherente con un sector intensivo en activos
intangibles (licencias, contenido, redes) y con [[multiplos-de-valoracion|múltiplos de valoración]] altos.*

| Partida | Valor indexado |
|---|---:|
| Efectivo | 13,9 |
| Cuentas por cobrar (neto) | 60,3 |
| Otros activos corrientes | 25,3 |
| **Total activo corriente** | **99,6** |
| Otras inversiones | 105,1 |
| Activos amortizables (neto) | 30,0 |
| Activos intangibles (neto) | 77,1 |
| Terrenos y otros activos | 34,0 |
| **Total activo fijo y no corriente** | **246,4** |
| **TOTAL ACTIVO** | **345,9** |
| Cuentas por pagar | 20,3 |
| Deuda a corto plazo | 24,4 |
| Otros pasivos corrientes | 49,2 |
| **Total pasivo corto plazo** | **93,9** |
| Deuda a largo plazo | 74,4 |
| Otros pasivos largo plazo | 42,3 |
| **Total pasivo largo plazo** | **118,2** |
| **TOTAL PATRIMONIO NETO** | **133,8** |

## Empleo y salarios

Ingresos por empleado (2025): $639.341. Nómina por empleado: $114.795 (CAGR 3 años 3,3%, 5 años 4,0%). Ratio
nómina/ingresos implícito: ~17,9%.

Rangos salariales por categoría (USD/hora, percentil 10 – mediana – percentil 90):
- Legal: $38,82 – $105,16 – n/d
- Dirección: $39,02 – $92,57 – n/d
- TI: $29,07 – $66,31 – $105,11
- Ingeniería/arquitectura: $34,44 – $65,05 – $104,46
- Ciencias físicas/vida/sociales: $19,20 – $54,45 – $101,58

Principal categoría de empleo: desarrolladores de software y web, 14,4% del empleo total — muy por delante
de cualquier otra categoría, coherente con el peso de tecnología en este sector (26,2% de la plantilla es
TI/ingeniería/ciencia).

## Notas del informe

Perímetro: NAICS 51 — empresas que crean, procesan y distribuyen productos de información y culturales
(edición, radiodifusión, telecomunicaciones, procesamiento de datos, hosting, producción cinematográfica,
grabación de sonido). Fuentes: BLS, Census, IRS, BEA, Fed, Dept. of Commerce. Cobertura: históricos
2017-2025, previsión 2026 y 2030. Fecha del informe: julio 2026. Kentley Insights no garantiza exactitud ni
completitud de los datos.

> [!warning] Fiabilidad
> Todo lo de esta página por debajo de "Datos verificados" procede del destilado automático y **no está
> verificado** contra el PDF. Contrastar antes de que sostenga una tesis o una decisión.

## Ver también

[[benchmarks-sectoriales]] · [[kentley-metodo]] · [[tasas-base-y-vista-exterior]] · [[index]]
