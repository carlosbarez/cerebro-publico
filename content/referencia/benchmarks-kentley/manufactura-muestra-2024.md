---
title: "Manufactura (muestra 2024) — benchmarks de industria"
tipo: referencia
tags: [referencia, benchmarks, kentley, naics, manufactura, muebles-cocina]
fecha: 2026-07-22
fuentes: ["[[kentley-metodo]]"]
destilado_por: openrouter
---

# Manufactura (muestra 2024) — benchmarks de industria

Ficha de referencia cuantitativa. Universo: censo de empresas de **EEUU**, NAICS `3371` (Fabricación de
muebles y gabinetes de cocina — la industria concreta que cubre esta muestra), informe Kentley Insights.
Sector: Manufactura. Antes de usar estas cifras leer los límites en [[kentley-metodo]] — en especial que la
mediana incluye microempresas y **no** es comparable sin más con una cotizada.

## Datos verificados

| Métrica | Valor | Procedencia |
|---|---:|---|
| Margen neto medio | 7,3% | parser (prosa del informe) |
| Ranking del margen en su sector | bottom 40% | parser |
| Empresas rentables | 72,7% | parser |
| Crecimiento anual últimos 5a | 5,2% | parser |
| Crecimiento previsto próximos 5a | 3,2% | parser (previsión de Kentley) |
| Cuota Top 4 (ventas) | 20,2% | parser + **verificado** |
| Cuota Top 8 (ventas) | 25,5% | parser + **verificado** |
| Cuota Top 20 (ventas) | 34,4% | parser + **verificado** |
| Cuota Top 50 (ventas) | 46,1% | parser + **verificado** |

Estas cifras se extrajeron con parser determinista sobre el PDF, no con el destilado del LLM.

## Estructura de costes

| Partida de gasto | % sobre ingresos |
|---|---:|
| Coste de materiales | 52,5% |
| Gastos de personal | 33,7% |
| Edificios y otros gastos de capital | 5,4% |
| Otros gastos | 8,4% |
| **Total gastos operativos** | **86,3%** |

## Balance indexado (base 100 = ingresos)

| Partida | Valor indexado |
|---|---:|
| Efectivo | 6,1 |
| Cuentas por cobrar | 10,7 |
| Inventarios | 10,5 |
| Otros activos corrientes | 3,4 |
| **Total activo corriente** | **30,4** |
| Activos depreciables (neto de amortización) | 10,4 |
| Activos intangibles (neto de amortización) | 17,3 |
| Otras inversiones y activos | 12,5 |
| Terrenos | 1,0 |
| **Total activo fijo y no corriente** | **41,3** |
| **TOTAL ACTIVO** | **71,7** |
| Cuentas por pagar | 9,4 |
| Deuda a corto plazo | 2,9 |
| Otros pasivos corrientes | 7,1 |
| **Total pasivo corto plazo** | **19,5** |
| Deuda a largo plazo (hipotecas/bonos) | 20,9 |
| Otros pasivos largo plazo | 6,6 |
| **Total pasivo largo plazo** | **27,5** |
| **TOTAL PASIVO** | **71,9*** |
| **TOTAL PATRIMONIO NETO** | **24,9** |

*El total de pasivo del informe (71,9) no cuadra exactamente con activo (71,7) por redondeo/artefactos del
informe original.

## Empleo y salarios

Nómina sobre ingresos: 23,8% (nómina total $10.282M / ingresos $43.142M, 2023). Ingresos por empleado:
$194.570. Nómina por empleado: $46.373 (CAGR 3 años: 4,9%).

Rangos salariales por categoría (USD/hora, percentil 10 – mediana – percentil 90):
- Dirección: $22,56 – $50,73 – $90,77
- Ventas y relacionadas: $11,91 – $29,39 – $49,73
- Tecnología/Ingeniería (IT): $16,46 – $29,87 – $47,59
- Instalación/mantenimiento/reparación: $12,99 – $20,81 – $30,04
- Operaciones — producción: $10,02 – $16,26 – $24,24
- Transporte/movimiento de materiales: $9,47 – $14,15 – $19,44

Principales categorías de empleo (% del empleo total): ensambladores y fabricadores 32,5%, representantes
de ventas mayorista/fabricación 9,8%, trabajadores de registro/distribución de materiales 9,2%, supervisores
de producción 7,6%, empleados de información y registros 6,7%, altos directivos 2,8%.

## Notas del informe

Perímetro: NAICS 3371 — fabricación de muebles domésticos (salón, cocina, dormitorio) e institucionales
(escuelas, teatros, iglesias), incluidos armarios de cocina de madera y encimeras. Fuentes de datos:
encuestas empresariales exhaustivas cruzadas con Bureau of Labor Statistics, Census Bureau, IRS, BEA,
Reserva Federal y Dept. of Commerce; previsiones vía tendencias históricas, econometría y macro. Cobertura
temporal: históricos 2015-2023, previsión 2024 y a 5 años (2028). Fecha del informe: octubre 2024.
Utilización de planta 2023: media 69,3% (44,8 horas/semana). Principal motivo de no producir a plena
capacidad: pedidos insuficientes (~45-60% de las empresas). Kentley Insights no garantiza exactitud ni
integridad de los datos; responsabilidad exclusiva del usuario.

> [!warning] Fiabilidad
> Todo lo de esta página por debajo de "Datos verificados" procede del destilado automático y **no está
> verificado** contra el PDF. Contrastar antes de que sostenga una tesis o una decisión.

## Ver también

[[benchmarks-sectoriales]] · [[kentley-metodo]] · [[tasas-base-y-vista-exterior]] · [[index]]
- [[manufactura-muestra-2026]] — la **misma** industria (NAICS 3371/33711) en el informe de 2026: comparar las
  dos fichas da la evolución de márgenes (7,3% → 10,5%) y de cuota. No es una contradicción, es una serie
