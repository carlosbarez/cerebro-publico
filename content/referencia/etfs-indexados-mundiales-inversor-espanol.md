---
title: "Núcleo indexado para el inversor español — IWDA, VEVE, MEUD y la razón irlandesa"
tipo: referencia
tags: [indexado, etfs, ucits, irlanda, isin, ter, dato]
fecha: 2026-08-25
agente: gestoras-fondos
---

# Núcleo indexado para el inversor español — IWDA, VEVE, MEUD y la razón irlandesa

> Capa de DATO ([[mapa-del-vault]]): el contrapeso de coste mínimo frente a las gestoras value ([[comparativa-gestoras-value-espanolas]]). Fiscalidad general del inversor: [[fiscalidad-en-espana]] y la ficha actualizada [[fiscalidad-inversor-espana-2026]].

## Los tres vehículos de consulta

### IWDA / SWDA — iShares Core MSCI World UCITS ETF USD (Acc)

| Campo | Dato | Fuente |
|---|---|---|
| ISIN | **IE00B4L5Y983** · tickers: IWDA (BATS/Xetra EUNL), SWDA (LSE) | justETF + BlackRock, consultados 25-08-2026 |
| Índice | MSCI World (23 mercados desarrollados, ~1.281 valores) | justETF |
| TER | **0,20%** anual | justETF a 25-08-2026 |
| Réplica | Física optimizada (sampling) | ídem |
| Domiciliación | **Irlanda** · acumulación (no reparte dividendo) | ídem |
| Patrimonio | 129.445 M€ — uno de los mayores UCITS del mundo | justETF a 25-08-2026 |
| Lanzamiento | 25-09-2009 · volatilidad 1 año 10,71% (EUR) | ídem |

Alternativas sobre el mismo índice (tabla comparativa justETF): UBS Core MSCI World acc **0,06%** (10.569 M€, réplica completa) · Xtrackers MSCI World 1D **0,12%** (4.862 M€) — el TER mínimo ha caído 3x desde el estándar histórico de IWDA.

### VEVE — Vanguard FTSE Developed World UCITS ETF (Dist)

| Campo | Dato | Fuente |
|---|---|---|
| ISIN actual | **IE00BKX55T58** (tras reorganización de la gama Vanguard) | justETF a 25-08-2026 |
| Índice | FTSE Developed (grandes de mercados desarrollados) | ídem |
| TER | **0,12%** | ídem |
| Réplica / política | Física optimizada · **distribución trimestral** | ídem |
| Domiciliación | Irlanda · patrimonio ~3.584 M£ · lanzamiento 30-09-2014 | ídem |

[DUDA: fuentes anteriores a 2024 mapean el ticker VEVE al antiguo Vanguard FTSE Developed Europe (IE00B9M6RS56); verificar siempre por ISIN, no por ticker.]

### MEUD — Amundi Core Stoxx Europe 600 UCITS ETF (Acc)

| Campo | Dato | Fuente |
|---|---|---|
| ISIN | **LU0908500753** · cotiza como MEUD (París/Madrid) | Amundi + Euronext, consultados 25-08-2026 |
| Índice | STOXX Europe 600 Net Return EUR (600 valores, Europa desarrollada) | ficha oficial Amundi |
| Costes | **0,07%** anual (costes reales último año según KID) | KID oficial amundietf.lu |
| Réplica | Física directa · acumulación | ídem |
| Domiciliación | **Luxemburgo** (SICAV UCITS) — no Irlanda | ídem |
| Patrimonio | 21.578,6 M€ · NAV 321,84 € | ídem, a 24-08-2026 |

## Por qué domiciliación irlandesa (y qué cambia con Luxemburgo)

1. **Retención sobre dividendos estadounidenses**: un fondo irlandés cualificado paga **15%** en origen gracias al tratado Irlanda-EE.UU., frente al **30%** que soportaría un particular español invirtiendo directo en acciones/ETFs estadounidenses sin recuperar el exceso. En un índice como MSCI World (~65-70% EE.UU.), esa diferencia se come cada año una fracción del dividendo total — es la razón estructural nº 1 de que el núcleo mundial del inversor europeo viva en Dublín. [DUDA: el % exacto de EE.UU. dentro de MSCI World varía mes a mes — verificar en factsheet vigente antes de citarlo con precisión.]
2. **Impuesto sucesorio estadounidense**: las participaciones en UCITS irlandeses (o luxemburgueses) NO quedan expuestas al estate tax de EE.UU. (>60.000 $ de activos US directos puede generarlo); para una herencia española es la diferencia entre liquidar sin peaje americano o un problema transfronterizo.
3. **Acumulación = diferir impuestos automáticamente**: IWDA y MEUD reinvierten dividendos dentro del vehículo sin hecho imponible anual; el partícipe español tributa solo al vender, en la base del ahorro (19→30%, ver escala en [[fiscalidad-inversor-espana-2026]]). El interés compuesto trabaja sin fricción fiscal intermedia.
4. **El matiz español decisivo**: los ETFs **no tienen traspaso sin peaje**. Rotar un ETF realiza plusvalía y tributa; los **fondos indexados españoles** sí permiten traspaso ilimitado (la "joya" descrita en [[fiscalidad-en-espana]]). Por eso la arquitectura típica razonable: ETF irlandés barato para dinero que no se toca nunca, fondo indexado español cuando se prevén rotaciones o consolidación hacia planes de pensiones.

## Mecanismo de segundo orden

1. **TER ≠ coste real**: lo que replica tu cuenta es la *tracking difference* (índice menos fondo). Una réplica optimizada con TER 0,20% puede perder menos que una swap-based con TER 0,15%; y el *securities lending* (devuelve ingresos al fondo) puede compensar parte del TER. Juzgar por divergencia histórica acumulada, no por el rótulo de comisión.
2. **Tamaño como foso operativo**: 129.000 M€ (IWDA) implican spreads mínimos y supervivencia casi garantizada; cerrar un ETF grande es raro pero existe (los proveedores fusionan gammás — Vanguard ya reasignó tickers en 2024). Fusiones y cierres son hechos imponibles involuntarios: segundo motivo para preferir vehículos gigantes.
3. **La comparación con las gestoras value**: coste 0,07-0,20% vs 1,79-1,88%. El diferencial (~1,7 puntos/año) es el precio del intento de alfa; con rentabilidad mundial esperada ~7%, el gestor activo debe capturar ~25% de ventaja bruta solo para empatar tras costes. La respuesta del cerebro no es binaria — es asignación entre núcleo pasivo y satélite activo (cartera actual, [[pensamiento-de-segundo-nivel]]).

## Lectura

- Contraste con la gestión activa medida: [[comparativa-gestoras-value-espanolas]]
- Reglas fiscales completas: [[fiscalidad-en-espana]] · [[fiscalidad-inversor-espana-2026]]
- Contexto de cartera: cartera actual · [[horizonte-largo-plazo]]

*Ficha elaborada por gestoras-fondos, 2026-08-25. Fuentes: justETF, fichas oficiales Amundi/KID y datos BlackRock, todas consultadas el 25-08-2026.*
