---
title: "Datasets Damodaran 2026 — ERP por país, betas y márgenes sectoriales"
tipo: referencia
tags: [damodaran, erp, prima-de-riesgo, betas, wacc, margenes, sectorial, valoracion]
fecha: 2026-08-25
agente: bibliotecario-datos
---

# Datasets Damodaran 2026 — ERP por país, betas y márgenes sectoriales

> Capa de DATO. Cifras descargadas y verificadas el 2026-08-25 directamente desde los ficheros oficiales
> de Aswath Damodaran (Stern/NYU). Nada estimado por nosotros: cada tabla declara la fecha interna del
> dataset. Para re-descargar cuando toque: `https://pages.stern.nyu.edu/~adamodar/pc/datasets/<fichero>`.

## Qué es y cuándo se actualiza

Damodaran publica una vez al año (enero) los promedios sectoriales globales, con actualización parcial del
dataset de primas de país en julio. Fechas internas declaradas en los propios ficheros usados aquí:

| Fichero | Contenido | Fecha interna |
|---|---|---|
| `ctryprem.xlsx` | Primas de riesgo país (ERP) | **2026-01-01** («Updated Feb 16 for sovereign ratings») |
| `ctrypremJuly26.xlsx` | Variante intermedia más fresca | **2026-07-01** (spreads corregidos 09-jul) |
| `betas.xls` | Betas apalancadas/desapalancadas por sector | **2026-01-05** (empresas EEUU) |
| `margin.xls` | Márgenes por sector | **2026-01-05** |
| `wacc.xls` | Coste de capital por sector | **2026-01-05** |

Anclas del dataset enero-2026: **ERP implícito S&P 500 = 4,23%** → prima de mercado maduro; **ERP EEUU =
4,46%** (= implícito + spread de default soberano EEUU post-downgrade Moody's a Aa1 de may-2025); los
spreads de país se multiplican por **1,52x** (ajuste por volatilidad relativa de las bolsas emergentes).

## 1. Prima de riesgo por país (ERP total y prima país)

Lectura: *Total ERP* = lo que exigirías por invertir en renta variable de ese país (método rating);
*Prima país* = el extra sobre el mercado maduro; la columna CDS usa seguros de impago soberanos netos del
CDS suizo y es el contrapeso alternativo. Fuentes: `ctryprem.xlsx`, hoja «ERPs by country» (2026-01).

| País | Moody's | Spread default | ERP total | Prima país | ERP vía CDS |
|---|---|---:|---:|---:|---:|
| Alemania | Aaa | 0,00% | 4,23% | 0,00% | 4,34% |
| Australia | Aaa | 0,00% | 4,23% | 0,00% | 4,31% |
| Canadá | Aaa | 0,00% | 4,23% | 0,00% | 4,52% |
| Suiza | Aaa | 0,00% | 4,23% | 0,00% | 4,23% |
| Suecia | Aaa | 0,00% | 4,23% | 0,00% | 4,32% |
| Países Bajos | Aaa | 0,00% | 4,23% | 0,00% | 4,32% |
| Estados Unidos | Aa1 | 0,23% | 4,46% | 0,23% | 4,69% |
| Corea del Sur | Aa2 | 0,42% | 4,87% | 0,64% | 4,53% |
| Francia | Aa3 | 0,51% | 5,01% | 0,78% | 4,99% |
| Reino Unido | Aa3 | 0,51% | 5,01% | 0,78% | 4,58% |
| Taiwán | Aa3 | 0,51% | 5,01% | 0,78% | [Sin datos: CDS] |
| Arabia Saudita | Aa3 | 0,51% | 5,01% | 0,78% | 5,72% |
| Japón | A1 | 0,60% | 5,14% | 0,91% | 4,69% |
| China | A1 | 0,60% | 5,14% | 0,91% | 4,99% |
| Chile | A2 | 0,72% | 5,33% | 1,10% | 5,34% |
| Polonia | A2 | 0,72% | 5,33% | 1,10% | 5,54% |
| España | A3 | 1,02% | 5,78% | 1,55% | 4,70% |
| Portugal | A3 | 1,02% | 5,78% | 1,55% | 4,70% |
| Italia | Baa2 | 1,62% | 6,70% | 2,47% | 4,95% |
| Indonesia | Baa2 | 1,62% | 6,70% | 2,47% | 5,83% |
| México | Baa2 | 1,62% | 6,70% | 2,47% | 6,55% |
| Grecia | Baa3 | 1,87% | 7,08% | 2,85% | 5,16% |
| India | Baa3 | 1,87% | 7,08% | 2,85% | 5,24% |
| Colombia | Baa3 | 1,87% | 7,08% | 2,85% | 9,10% |
| Sudáfrica | Ba2 | 2,56% | 8,13% | 3,90% | 7,67% |
| Vietnam | Ba2 | 2,56% | 8,13% | 3,90% | 6,32% |
| Turquía | Ba3 | 3,06% | 8,89% | 4,66% | 8,57% |
| Brasil | Ba1 | 2,13% | 7,47% | 3,24% | 7,60% |
| Argentina | Caa1 | 6,37% | 13,94% | 9,71% | [Sin datos: CDS] |
| Rusia | sin rating (implícito ~Ba2) | — | 8,13% | 3,90% | [Sin datos: CDS] |

Actualización julio-2026 (`ctrypremJuly26.xlsx`): ERP maduro baja a **4,20%**, EEUU **4,44%**, España
**5,68%** (prima país 1,48%). Diferencia pequeña pero direccional: el mercado maduro exigiendo algo menos
que en enero pese al shock energético — ver §Segundo orden.

## 2. Betas sectoriales (EEUU)

De `betas.xls` (2026-01). La beta desapalancada (*unlevered beta*) es la del negocio; la apalancada depende
de la deuda de cada empresa. Nº = empresas de la muestra.

| Sector | Nº | Beta | D/E | Beta desapalancada |
|---|---:|---:|---:|---:|
| Semiconductores | 66 | 1,52 | 0,03 | 1,49 |
| Equip. semiconductores | 31 | 1,40 | 0,05 | 1,35 |
| Software (sistemas/aplicaciones) | 309 | 1,28 | 0,06 | 1,23 |
| Software (internet) | 29 | 1,69 | 0,12 | 1,55 |
| Farmacéuticas | 228 | 0,98 | 0,15 | 0,89 |
| Aeroespacial/defensa | 79 | 0,95 | 0,16 | 0,85 |
| Productos de hogar | 110 | 0,82 | 0,18 | 0,72 |
| Retail general | 23 | 0,81 | 0,08 | 0,76 |
| Telecom servicios | 39 | 0,63 | 0,96 | 0,37 |
| Alimentación (processing) | 78 | 0,61 | 0,44 | 0,46 |
| Petróleo/gas integradas | 4 | 0,30 | 0,14 | 0,27 |
| Power (utilities cotizadas) | 46 | 0,48 | 0,74 | 0,31 |
| Utility general | 14 | 0,24 | 0,81 | 0,15 |
| Banca money center | 15 | 0,76 | 1,64 | 0,34 |
| Banca regional | 568 | 0,40 | 0,52 | 0,29 |

## 3. Márgenes sectoriales objetivo (EEUU)

De `margin.xls` (2026-01). Margen operativo preimpuestos sin ajustar. Útil como tasa base para juzgar si un
margen concreto es bueno o raro — junto con [[benchmarks-sectoriales]] (censo NAICS completo, no solo
cotizadas).

| Sector | Margen bruto | Margen operativo | Margen neto | EBITDA/Ventas |
|---|---:|---:|---:|---:|
| Software (sistemas/aplicaciones) | 71,7% | 33,0% | 25,5% | 35,9% |
| Farmacéuticas | 71,7% | 29,5% | 18,5% | 33,6% |
| Semiconductores | 59,0% | 35,3% | 30,4% | 36,8% |
| Equip. semiconductores | 46,3% | 26,2% | 21,3% | 29,1% |
| Telecom servicios | 58,8% | 20,5% | 14,2% | 34,7% |
| Utility general | 44,2% | 23,5% | 14,2% | 34,9% |
| Power | 43,6% | 21,5% | 12,7% | 35,3% |
| Productos de hogar | 51,0% | 18,6% | 11,7% | 22,3% |
| Petróleo/gas integradas | 36,1% | 11,2% | 8,3% | 21,7% |
| Retail general | 33,2% | 6,8% | 5,6% | 10,1% |
| Aeroespacial/defensa | 17,5% | 8,7% | 5,0% | 10,7% |
| Retail alimentación | 26,3% | 2,3% | 1,3% | 5,4% |
| Alimentación (processing) | 23,2% | 10,6% | 2,8% | 15,3% |
| Software (internet) | 62,6% | 3,7% | **−0,9%** | 9,5% |
| Banca (money center/regional) | n/a | n/a | 28,9% / 27,5%* | n/a |

*El «margen» bancario se calcula sobre ingresos de intermediación, no sobre ventas comparables: NO usarlo
como tasa base contra sectores no financieros (mismo artefacto que en [[benchmarks-sectoriales]] §Finance).

Bonus de `wacc.xls` (2026-01): coste de capital implícito del sector — semis **10,6%**, software internet
**10,7%**, software sistemas **9,3%**, farma **7,8%**, retail general **7,3%**, telecom **5,4%**, petróleo
integrado **5,1%**, utilities/power **4,4–5,0%**, banca **~5,0%**.

## Nota de USO: cómo entra esto en el WACC

El [[coste-de-capital-wacc]] mezcla lo que exigen accionistas y prestamistas:

```
Ke = Rf + β_apalancada × ERP_total_del_país        ← aquí entran las tablas 1 y 2
Kd_after_tax = Kd × (1 − t)
WACC = Ke × E/(D+E) + Kd_after_tax × D/(D+E)
```

Receta con este dataset: (a) beta desapalancada del sector (tabla 2); (b) reapalancarla con el D/E real de
la empresa: β = β_desap × (1 + (1−t)·D/E); (c) multiplicarla por el ERP del país donde obtiene sus flujos
(tabla 1) — para multinacionales, media ponderada por países o ERP maduro + prima país ponderada; (d) sumar
la rf vigente (ver [[tipos-directores-bancos-centrales-2026]]). Detalle paso a paso:
[[valoracion-dcf-paso-a-paso]]; teoría completa: [[manuales-de-valoracion]] y
[[damodaran-country-risk]]. Trampa clásica: usar el ERP total de Turquía (8,9%) con una rf turca ya
inflada por inflación — doble conteo; en moneda estable, ERP total con rf estable.

## Segundo orden

- **El ERP implícito (4,23%) está POR DEBAJO de la prima histórica geométrica EEUU 1928-2025 (≈5,3 pp,
  computable de [[rentabilidades-historicas-clases-de-activo]])**. El mercado descuenta optimismo: o espera
  pocos problemas (IA paga, energía se normaliza) o tiene aversión al riesgo bajísima. Consecuencia en
  segundo orden: los DCF «conservadores» con ERP 5-6% darán valores por debajo del precio de mercado casi
  siempre — eso no significa que el DCF esté mal, sino que estás comprando expectativas caras.
  Conecta con [[retornos-esperados]]. Y choca frontalmente con la lectura de Montier/Grantham: ellos
  argumentan que el ERP implícito de mercado no es prima sino *optimismo capitalizado*
  ([[james-montier]], [[jeremy-grantham]]).
- **Las betas miden volatilidad pasada frente al índice, no riesgo de negocio**
  ([[riesgo-real-vs-volatilidad]]): semis a 1,52 reflejan cíclico+concentración IA; utilities a 0,24
  reflejo regulación+deuda. Usar la beta desapalancada del sector como punto de partida y reapalancar es
  superior a usar la beta de regression de la empresa concreta ([[prima-de-riesgo-y-beta]]).
- **España con prima país 1,48-1,55% e Italia 2,47%**: el euro ha domesticado el riesgo soberano europeo…
  hasta que no lo haga. La columna CDS de Colombia (9,10%) vs rating Baa3 idéntico al de India muestra lo
  distinto que valora el mercado crediticio frente al rating: dos señales, no una.
- **Software internet con margen neto agregado NEGATIVO (−0,9%) mientras software sistemas gana 25,5%**:
  dentro de «software» conviven dos industrias. Las medias de sector son tasas base, no verdades —
  [[tasas-base-y-vista-exterior]].

## Implicaciones para la cartera (inversor de muy largo plazo)

Para cualquier DCF propio: ERP maduro 4,2-4,5% es el consenso académico-práctico hoy; usar 5%+ equivale a
declararse en contra del precio actual de la renta variable. La decisión honesta es explícita: o DCF al
precio de mercado con ERP bajo (y margen de seguridad por otra vía), o ERP alto aceptando que casi nada
pasará el filtro. Para Carlos: mantener ERP ~5% en DCFs de empresas individuales y tratar el gap con 4,2%
como medida de «cuánto optimismo compra». Utilities/banca con WACC ~5% explican por qué cualquier tipo
largo al 5% compite de verdad con ellas (cartera actual).

## Señales falsables

- Si el ERP implícito S&P 500 supera **5,5%** en algún cierre mensual antes de jun-2027 (medible en
  `histimpl.xls`/ERPbymonth de Damodaran), el régimen de valoración habrá cambiado: esperar compresión de
  múltiples del orden de −15/-25% en growth. Horizonte: 10 meses.
- Si la prima país de España (rating) sube por encima de **2,5%** (hoy 1,55%), el bloque europeo entra en
  crisis de credibilidad fiscal → revisar exposición a banca europea ([[industria-banca-europea]]).
  Horizonte: jun-2027.
- Actualización enero-2027 del dataset: si el ERP maduro publicado cae por debajo de **4,0%** con tipos
  reales positivos, señal de euforia tardía de ciclo ([[macro-estado-del-ciclo-2026]]).

## Huecos

- [Sin datos: betas/márgenes por sector para Europa o global (betaEurope.xls, marginGlobal.xls) — no
  descargados en esta pasada; disponibles en el mismo directorio].
- [Sin datos: total betas (volatilidad total, para mercados sin correlación con índice) — fichero
  `totalbeta.xls` pendiente].
- [Sin datos: serie mensual del ERP implícito 2026 (ERPbymonth) — solo anclas de enero/julio verificadas].

Fuente principal: datasets oficiales de Aswath Damodaran, Stern School NYU —
<https://pages.stern.nyu.edu/~adamodar/pc/datasets/> (descarga y parsing verificados 2026-08-25).
