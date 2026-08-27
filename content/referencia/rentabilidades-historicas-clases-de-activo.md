---
title: "Rentabilidades históricas por clase de activo — tabla de consulta"
tipo: referencia
tags: [retornos, historia, acciones, bonos, oro, inflacion, tasas-base, regimenes]
fecha: 2026-08-25
agente: bibliotecario-datos
---

# Rentabilidades históricas por clase de activo — tabla de consulta

> Capa de DATO. Cifras **calculadas el 2026-08-25** sobre las series anuales del dataset `histretSP.xls`
> de Damodaran (fecha interna 2026-01-01, datos hasta cierre de 2025; oro: hoja «Gold Prices», fuente LBMA
> para 1970+, precios previos oficiales). Nominal = en USD sin ajustar; Real = deflactado por CPI-EEUU de
> la misma serie. CAGR = media geométrica anual. Nada de lo que sigue está estimado a ojo.

## La tabla central (EEUU, serie completa)

| Activo | Periodo | Años | Nominal/año | Real/año |
|---|---|---:|---:|---:|
| Acciones EEUU (S&P 500 con dividendos) | 1928–2025 | 98 | **10,0%** | **6,8%** |
| Acciones EEUU (S&P 500 con dividendos) | 1970–2025 | 56 | 11,0% | 6,8% |
| Bonos EEUU 10A (retorno total anual) | 1928–2025 | 98 | 4,5% | 1,5% |
| Bonos EEUU 10A | 1970–2025 | 56 | 6,2% | 2,1% |
| Letras EEUU 3M (T-Bill) | 1928–2025 | 98 | 3,3% | 0,3% |
| Letras EEUU 3M | 1970–2025 | 56 | 4,4% | 0,4% |
| Oro (mercado libre, desde fin-1970) | 1971–2025 | 55 | **9,0%** | **4,9%** |
| Inflación CPI-EEUU | 1928–2025 | 98 | 3,0% | — |

Prima por riesgo histórica (geométrica, acciones vs bonos largo, 1928–2025): **≈5,3 puntos**. El ERP
implícito de mercado hoy es 4,23% ([[datasets-damodaran-2026]]): el mercado exige menos que la historia.

## Peores décadas completas (lo que de verdad duele)

La media engaña; la peor década define cuánto aguanta un inversor. Décadas cerradas de la serie:

| Activo | Peor década nominal | Peor década real |
|---|---|---|
| Acciones EEUU | **1930s: −0,9%/año** (real +1,1% gracias a la deflación) | **2000s: −3,4%/año** (nominal −1,0%) |
| Bonos 10A | 1950s: +0,8%/año (financieramente represivos) | **1970s: −1,8%/año** |
| Oro | 1990s: −3,1%/año | 1990s: −5,9%/año |

Dos décadas perdidas de acciones en un siglo (1930s, 2000s) y tres décadas reales negativas de «activos
seguros» (bonos en los 40s, 50s y 70s). Ninguna clase de activo protege sola en todos los regímenes —
base empírica de [[bloques-de-riesgo]] y de [[paridad-de-riesgo-y-diversificacion]].

## Otras bolsas (solo precio, limitación declarada)

Series diarias Yahoo Finance hasta ago-2026, cierres de fin de año. **Limitación crítica: índices de
PRECIO sin dividendos** — subestiman el retorno total real del inversor en ~2–4 pp/año. Sirven como tasa
base comparativa, no como retorno alcanzable.

| Índice | Inicio (nivel) | Fin 2025 (nivel) | Precio/año | Ago-2026 |
|---|---|---:|---:|---:|
| Nikkei 225 (Japón) | dic-1984 (12.581) | dic-2025 (51.064) | +3,5% | **65.856** |
| DAX (Alemania) | nov-1987 (1.083) | dic-2025 (25.284) | +8,6% | 26.266 |
| FTSE 100 (UK) | ene-1985 (1.277) | dic-2025 (9.931) | +5,3% | 10.886 |

El Nikkei acumula **+29% en lo que va de 2026** tras 41 años a solo +3,5% de precio: la recuperación desde
el pico de 1989 tardó hasta 2024 y ahora se acelera — coherente con
[[reforma-corporativa-japon-re-rating]]. El DAX a +8,6% de precio (sin dividendos, que en Alemania son
~3%) es la mejor bolsa grande del periodo: tesis exportadora alemana pre-guerra energética.

[Sin datos: emergentes e índices globales amplios de largo plazo (MSCI EM desde 1988, World/Credit Suisse
Yearbook desde 1900) — fuentes no accesibles verificables hoy (Stooq bloqueado, factsheets MSCI no
descargados); NO inventar cifras. Pendiente: retornos emergentes largo plazo]

## Limitaciones de cada serie (leer antes de usar cualquier número)

- **S&P 500 TR**: índice superviviente (las empresas que quiebran salen); dividendos reinvertidos sin
  costes, sin fiscalidad ni spread; empieza en 1928 porque antes no hay total return. El sesgo de
  composición favorece al ganador de cada era ([[sesgo-de-superviviente]]).
- **Bonos 10A**: retorno de un bono a 10 años rodante vendido cada año, no compra-y-mantener-hasta-
  vencimiento; captura el riesgo de tipos pero no el riesgo de default (siempre Tesoro).
- **Oro**: hasta 1971 el precio era administrado por el Estado (35$/oz): sus «rentabilidades» previas son
  política, no mercado. Desde 1971, precio LBMA fin de año: no genera flujos de caja; su retorno real
  4,9% es todo revalorización ([[oro-panorama-2026]]).
- **Inflación CPI**: cesta revisada y metodología cambiada varias veces; la inflación *percibida* difiere.
- **Todas**: rentabilidad pasada en USD; para un inversor español añadir/quitar efecto divisa
  (USD/EUR puede comerse o regalar ±2 pp/año durante años).

## Diálogo con el wiki: Siegel tenía razón y Oppenheimer también

Esta tabla es el dato crudo detrás de la disputa resuelta en
[[retornos-a-largo-plazo-siegel-vs-oppenheimer]]. El 6,8% real de las acciones EEUU en 98 años ES la
«constante» de [[siegel-stocks-for-the-long-run]]. Pero el camino incluye una década real de −3,4%/año
(2000s) y otra nominal negativa (1930s): la dispersión de régimen de Oppenheimer
([[oppenheimer-any-happy-returns]]) es el mismo número visto por dentro. Segundo orden: quien planifica
con el 6,8% real debe decidir conscientemente si su horizonte psicológico sobrevive el tramo malo —
[[horizonte-largo-plazo]] y [[interes-compuesto]] no funcionan si vendes en el año 9 de una década perdida.

Tensión con [[retornos-esperados]]: la tabla describe el pasado; el retorno futuro = punto de partida de
valoración + crecimiento + flujo al accionista. Con ERP implícito 4,23% vs histórico 5,3 pp, esperar el
histórico 6,8% real desde la valoración actual es suponer que la valoración seguirá expandiéndose.

## Implicaciones para la cartera

1. Las acciones EEUU han multiplicado por ~2.500 en dólares nominales en 98 años (10,0%/año): la base
   empírica de estar invertido ([[asignacion-de-activos]]) — pero con dos décadas de sufrimiento incluidas.
2. Los bonos largos rinden real ~1,5% y tienen décadas enteras negativas: su papel es liquidez/seguro de
   cartera, no creación de riqueza ([[renta-fija-y-tipos]], [[mean-aversion-de-la-renta-fija]]).
3. El oro libre ha hecho 4,9% real durante 55 años SIN generar caja: como activo monetario en fase de
   dominancia fiscal funciona; como eterno es especulativo ([[ciclo-de-imperios-y-moneda-reserva]],
   [[geopolitica-desdolarizacion-y-oro]]).
4. Para Carlos: esta tabla es la tasa base contra la que juzgar cualquier activo «alternativo» prometiendo
   más — si algo promete más del 10% nominal sostenido, preguntar qué riesgo oculta (cartera actual).

## Señales falsables

- Si el S&P 500 total return cierra 2026–2035 acumulando < **+3%/año real**, habremos entrado en el cuarto
  super-ciclo bajista real del siglo (señal confirmable en 2030 con retorno acumulado <15% real). Horizonte:
  década.
- Si la inflación EEUU interanual vuelve bajo **2,5%** antes de jun-2027 mientras el oro cae >20% desde
  máximos, el régimen 2025-26 de «inflación de choque de oferta» quedará clasificado como transitorio
  (tesis falsable opuesta a la de dominancia fiscal). Umbral: CPI ≤2,5%; horizonte: jun-2027.
- Nikkei: si cierra 2026 sobre 60.000 con inflación japonesa ≥2%, el re-rating japonés será estructural y
  no un rally cíclico — vigilar peso Japón en índices mundiales.

Fuente principal: Aswath Damodaran, `histretSP.xls` (stern.nyu.edu/~adamodar), descargado y procesado
2026-08-25 · Series bursátiles no-EEUU: Yahoo Finance (diarias, ago-2026) · Contexto académico citado vía
[[siegel-stocks-for-the-long-run]] y [[oppenheimer-any-happy-returns]]; Yearbook CS/UBS no accesible hoy.
