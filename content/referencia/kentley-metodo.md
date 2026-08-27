---
title: "Kentley Insights — método, uso y límites"
tipo: referencia
tags: [referencia, benchmarks, kentley, naics, tasas-base, vista-exterior, industrias]
fecha: 2026-07-22
fuentes: []
destilado_por: openrouter
---

# Kentley Insights — método, uso y límites

Kentley Insights es una editorial estadounidense de *research* que publica **informes de benchmarking por
industria** sobre la clasificación **NAICS** de EEUU. Cada informe (55-78 páginas) sigue una **plantilla
idéntica**, lo que los hace comparables entre sí: esa homogeneidad, y no el contenido de ninguno en
concreto, es lo que los convierte en herramienta.

No es una **voz** del cerebro. No opina, no tiene tesis, no recomienda nada. Es **dato de referencia**, y
vive por eso en `referencia/` y no en [[mapa-de-industrias|industrias/]] (que es economía cualitativa de los
sectores de la cartera de Carlos). Ubicación del crudo: `raw/Sectorial/Kentley insights/`.

## Para qué sirve realmente: es una tabla de tasas base

El valor de Kentley no es informativo, es **disciplinario**. Conecta directamente con
[[tasas-base-y-vista-exterior]]: convierte una pregunta imposible de contestar desde dentro del caso

> "¿un margen neto del 12% es bueno?"

en una pregunta de **vista exterior**, contestable:

> "la mediana de su industria es el 7,4%, el sector tiene un 66,7% de empresas rentables y las 4 mayores
> concentran el 47% de las ventas — así que un 12% es percentil alto, y la pregunta pasa a ser *por qué*
> esta empresa está por encima de su industria y si eso es sostenible o [[reversion-a-la-media|revierte]]."

Es decir: es el antídoto contra juzgar una empresa **en el vacío**. Se usa como paso previo en el flujo de
`/cerebro-empresa`, antes de la valoración, no después.

## Qué contiene cada informe

Ocho bloques, siempre los mismos:

| Bloque | Contenido |
|---|---|
| Identificación | Código NAICS, nº de empresas, establecimientos, empleados, ingresos totales del sector |
| Crecimiento | Serie de ingresos 2017-2025 + previsión a 1 y 5 años, CAGR |
| Rentabilidad | % de empresas rentables, margen neto medio, ~10 ratios financieros (ROA, ROE, rotación, solvencia, deuda/FFPP) |
| Estructura de costes | Cada partida de gasto como % de ingresos |
| Balance | Activo y pasivo **indexados a base 100 = ingresos** (permite comparar balances entre industrias) |
| Concentración | Cuota acumulada de las top 4/8/20/50 + reparto por tamaño de empresa y forma jurídica |
| Salarios | Nómina/ingresos, ingresos por empleado, bandas salariales de los 20 empleos principales |
| Geografía | Ventas por estado y por área metropolitana (MSA) |

Fuentes primarias que agrega: Bureau of Labor Statistics, Census Bureau, IRS, Bureau of Economic Analysis,
Reserva Federal y Department of Commerce, más encuestas propias a empresas del sector.

## Límites — leer antes de usar ningún número

> [!warning] El error de uso nº 1: comparar una cotizada contra la mediana del sector
> La mediana de Kentley incluye **todas** las empresas del censo, no las cotizadas. En [[utilities|Utilities]], el **47,7%
> de las 50.117 empresas tienen entre 1 y 4 empleados**, y el tramo de 250+ empleados —el 3,6% de las
> empresas— se lleva el **85,9% de los ingresos**. Comparar una cotizada grande contra la mediana global es
> compararla contra un universo de microempresas: el resultado sale halagador y no significa nada.
> **Usar siempre el tramo por tamaño**, no la media del sector.

Los demás:

1. **Universo exclusivamente EEUU.** No sirve para juzgar una empresa europea, japonesa o emergente sin
   ajustar. Buena parte de la cartera de Carlos queda fuera de perímetro.
2. **NAICS no es un perímetro económico.** "Utilities 221" mete en el mismo saco generación eléctrica
   regulada, distribución de gas, agua y vapor — negocios con economías, regulación y ciclicidad distintas.
   Cuanto más agregado el código, menos significa la mediana.
3. **Dato no auditado.** Mezcla estadística oficial con encuesta propia y previsión econométrica. Kentley se
   exime expresamente de garantizar exactitud o completitud.
4. **Las previsiones son extrapolación de tendencia.** Proyectan a 2026 y 2030 desde la serie histórica y
   variables macro. No capturan rupturas — que es justo cuando un inversor necesitaría la previsión.
5. **Varios archivos son *sample reports***, versiones de muestra: pueden traer bloques recortados.
6. **Retrospectivo por construcción.** La serie llega a 2025; la estructura de una industria puede haberse
   movido después.

## Fiabilidad de la transcripción (trazabilidad)

Los benchmarks se destilaron con el **brazo ejecutor OpenRouter** (ver [[reparto-openrouter-claude]]), no
con Claude — de ahí el `destilado_por: openrouter` en el frontmatter de las fichas.

En el destilado de control (`S25-Utilities`, 2026-07-22) el modelo se comportó bien: transcribió sin
inventar, marcó `n/d` lo ausente e incluso señaló por su cuenta un conflicto entre dos CAGR del propio
informe. Pero se le detectó **un fallo sistemático concreto**: desalinea columnas en las **tablas de
acumulados de concentración**, devolviendo series imposibles (Top 50 < Top 20). Por eso:

> [!danger] Regla de uso
> Las cifras de **concentración (Top 4/8/20/50)** de las fichas Kentley son **no fiables** salvo que lleven
> marca de verificación. Cualquier otra cifra que vaya a sostener una tesis o una
> decisión se contrasta contra el PDF original antes de firmarla.

## Ver también

[[tasas-base-y-vista-exterior]] · [[reversion-a-la-media]] · [[estante-fuentes-sectoriales]] ·
[[mapa-de-industrias]] · [[reparto-openrouter-claude]] · [[foso-economico]] · [[index]]
