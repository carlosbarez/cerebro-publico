---
title: "WT Silver 3x Daily (ID 33) — Informe de Investigación"
---
# WT Silver 3x Daily (ID 33) — Informe de Investigación

> **Emisor:** WisdomTree Multi Asset Issuer PLC (Irish SPV) | **ISIN:** XS3306516876 (IE00B7XD2195) | **Ticker:** 3SIL (LSE USD) / 3LSI (LSE GBP) / 3SIL.MI (Borsa Italiana) / PCFH (Xetra) | **Estructura:** ETC sintético colateralizado, swap total return (BNP Paribas) | **Fecha:** 3 Sep 2026

---

## Hallazgos clave

- **Producto:** ETC de apalancamiento 3x diario sobre el índice *Solactive Silver Commodity Futures SL Index* (SOLWSSI1), que replica futuros front-month de plata COMEX con rollo mensual. **No posee plata física** — expone vía swap total return (TRS) con BNP Paribas como contraparte, colateralizado. Estructura de deuda emitida por SPV irlandés bajo programa Collateralised ETP Securities Programme (KID 11/05/2026).
- **Métricas clave (22/07/2026, WisdomTree):** NAV US$7,371 | AUM US$236,9M | 32,2M acciones outstanding | TER 0,99% | Daily Swap Rate 0,01248% → **cortado a 0,00692% desde 1 Dic 2026** por BNP Paribas (aviso 28 Ago 2026). Ahorro efectivo ~1,5–2% anual, superior al TER entero — la verdadera estructura de costes vive *dentro* del swap, no en el folleto (AInvest, 29 Ago 2026).
- **Precio plata spot 3 Sep 2026:** ~US$65,75/oz (Trading Economics), tras máximo histórico de US$121,64 en enero 2026 — caída de ~46% desde pico. Oro US$4.435. Ratio oro/plata ~67:1 (JPM revisó Q4'26 de $90→$63 el 13 Ago 2026; JPM ve ratio normalizándose a 70 H2'26 y 75 en 2027).
- **Rendimiento desastroso:** Año 2025 +692,78% (precio) / +681,58% (NAV) — rally histórico; **YTD 2026 −77,09%** (precio) / −78,70% (NAV). Peor mes: junio 2026 −55,71%. Pejor día: 2 Feb 2026 −58,9%. Drawdown actual **−97,53%** desde pico. Máximo drawdown histórico −99,34% (1 Sep 2022, sin recuperación). [PortfoliosLab, Morningstar]
- **Retornos anuales (precio):** 2020 +43,6% / 2021 −53,9% / 2022 −22,0% / 2023 −30,3% / 2024 +16,8% / 2025 +692,8% / YTD'26 −77,1%. 3Y CAGR −44,92%; 10Y CAGR +0,82% (KoalaGains). 5Y acumulado +132,63% — entero impulsado por picos explosivos, no por compounding.
- **Beta-slippage estructural:** El producto multiplica el *diario* por 3 y rebalancea cada cierre. En mercados volátiles laterales la matemática destruye capital incluso si la plata termina plana (fórmula de Decay: E[R_L] ≈ L·μ − ½L²σ²; para L=3, drag = 4,5σ²). Contango en curva de futuros añade *roll drag* adicional. Coste real anual all-in estimado >15% en mercados con volatilidad elevated (KoalaGains).
- **Crisis BIS marzo 2026:** El BIS documentó que los ETF apalancados de plata amplificaron el crash de late enero 2026 — la plata cayó ~30% en un día. El *leverage rebalancing multiplier* de los ETF apalancados se duplicó durante 2025, indicando mayor impacto desestabilizador en el mercado (BIS, "Boom and bust of the recent silver and gold rush", 16 Mar 2026).

---

## Riesgos / Bandera rojas

- **Volatility decay / compounding (riesgo dominante):** Producto diseñado para *un día*. Recomendación formal del emisor: holding period 1 día. Cada día que se mantiene, la desviación respecto al 3x del subyacente se acumula. En plata —activo con volatilidad anual ~50–75%— el decay es especialmente severo. Una lateralización del 10% en 4 días con un 3x reset borra ~13% de capital incluso sin dirección neta.
- **Doble capa de costes opaca:** TER 0,99% + Daily Swap Rate (ahora 0,00692%/día ≈ 2,5% anualizado, antes 0,01248% ≈ 4,5%). El swap rate lo fija BNP Paribas unilateralmente; puede *subir* en cualquier momento sin aviso previo al inversionista (solo aviso al emisor). Coste total all-in en fase de alta volatilidad >15% anual.
- **Contraparte BNP Paribas:** Estructura de deuda no garantizada. Si BNP falla, el colateral (BNY Mellon como custodio) es el único recourse. Concentración en un solo banco swap provider. Colateral tipo sovereign debt <1mes y efectivo.
- **Roll drag / contango:** Índice SOLWSSI1 rota futuros front-month mensualmente. En contango (futuros > spot), cada rollo vende barato y compra caro — fuga estructural. En backwardation (como en octubre 2025 durante el squeeze físico) el rollo es *rentable*. Depende de la curva.
- **Correlación negativa con el USD y tasa real:** Plata sube con USD débil / real rates bajos. Contexto macro actual: curva larga 5,2–5,3%, Fed en pausa/hawkish — headwind para metales no rentables. JPM proyecta recortes retrasados, ratio ampliándose.
- **Demanda industrial erosionándose:** JPM estima caída del 30% en demanda solar (~60M oz) por *thrifting* y sustitución. India subió arancel a 15% (13 May 2026). China eliminó rebate IVA exportación PV (1 Abr 2026). Demanda industrial ~50–55% del total.
- **Riesgo de liquidez / spread:** Bid-ask spread ~0,15% (vs. 1–3 bps en SLV/SIVR). ADV LSE ~290k — razonable para ETC europeo pero insuficiente para flujos institucionales grandes.
- **Riesgo de extinción del instrumento:** Si el NAV tiende a cero (posible si la plata cae >33% en un día), el fondo puede ser objeto de *reverse split* o delisting. Ya cotiza en "penny stock" territory (~$8,52).
- **Concentración 100% en swap:** 100% del portafolio en TRS Solactive Silver Com Fut SL TR EUR. Sin diversificación alguna.

---

## Oportunidades / Catalizadores falsables

- **Catalizador alcista (falso si falla):** Compresión del ratio oro/plata de 67→55 si el oro sube a $5.400 (Goldman) o $6.300 (JPM) y el ratio cae — plata implícita ~$98–114. **Falsable si:** el ratio se mantiene en 70+ como proyecta JPM, o la plata baja a $63 (Q4'26 base JPM). → *Tesis depende de demanda monetaria vs. industrial.*
- **Backwardation sostenida:** Si el squeeze físico de plata persiste (curva invertida), el roll se convierte en *ingreso* y el coste del swap baja (como ocurrió → BNP cortó tasa). **Falsable si:** contango regresa con normalización de inventarios London.
- **Corte de tipos Fed H2'26:** Resiliencia del easing impulsaría plata (beta 1,4 a oro según WisdomTree). **Falsable si:** inflación Hormuz/global mantiene al Fed en pausa o en hikes (escenario que JPM explícitamente contempla).
- **Décimo sexto año consecutivo de déficit estructural:** Silver Institute prevé déficit 46,3M oz 2026 (6° año consecutivo, +15% vs 2025). **Falsable si:** thrifting solar +2% industrial + minas +1% compensan el déficit real.
- **Evento de cola (tail):** Plata $100+ volvería a generar rallies verticales tipo enero 2026 (+114,6% en un mes para 3SIL). **Falsable si:** la volatilidad se normaliza (VIX baja) y la compounding decay devora los retornantes rallies.
- **Corte de swap rate por BNP:** Reduce coste de carry. Ya ocurrió (−45%). **Falsable si:** el coste de hedging de BNP sube otra vez → lo revierte.

---

## Conexiones wiki

- WT Silver 3x Daily (ID 33) — **AMPLIA** hacia iShares Silver Trust (SLV) / abrdn Physical Silver (SIVR): alternativas 1x físicas sin decay. SLV 0,50% / SIVR 0,30% — aptas para exposición estructural a plata sin destrucción por compounding.
- WT Silver 3x Daily (ID 33) — **TENSA** hacia ProShares Ultra Silver (AGQ): AGQ 2x (95bps, $1,74B AUM) vs 3SIL 3x (99bps+swap, $237M). AGQ menos destructiva por menor multiplicador — comparables 2x vs 3x.
- WT Silver 3x Daily (ID 33) — **APOYA** tesis de los mineras oro de watchlist (Barrick, Newmont, etc.) si el ratio oro/plata comprima: plata sube más que oro en fases de ratio compression.
- WT Silver 3x Daily (ID 33) — **TENSA** hacia escenario macro de China régimen K: thrifting solar + aranceles India + control FX reducen demanda industrial de plata.
- WT Silver 3x Daily (ID 33) — **AMPLIA** hacia Brent $90 95 / Inflación stagflation: plata como hedge de estanflación, pero demanda industrial sensible al ciclo.
- WT Silver 3x Daily (ID 33) — **TENSA** hacia HY OAS 2,63% mín: spread ajustado = riesgo-on, menos demanda refugio para metales preciosos; si revienta, plata sufriría doble golpe (industrial + financiero).
- WT Silver 3x Daily (ID 33) — **APOYA** vía EURUSD 1,16: USD débil históricamente alcista para plata.
- WT Silver 3x Daily (ID 33) — **EJEMPLO** de Volatility decay en ETFs apalancados 3x: caso ilustrativo de decay compounding con curva de plata volátil.
- WT Silver 3x Daily (ID 33) — **AMPLIA** hacia SILVER_INSTITUTE_deficit_2026 / JPM_silver_forecast_Q4_2026: déficit estructural vs. recorte de previsiones.

---

## Fuentes consultadas

- WisdomTree — Product Overview & KID (22/07/2026): https://www.wisdomtree.com/gb/products/commodities/wisdomtree-silver-3x-daily-leveraged
- WisdomTree — PRIIP KID (11/05/2026): https://dataspanapi.wisdomtree.com/pdr/documents/PRIIP_KID/WTMA/GB/EN-GB/XS3306516876/
- WisdomTree — Factsheet (22/07/2026): https://dataspanapi.wisdomtree.com/pdr/documents/FACTSHEET/WTMA/EU/EN-GB/XS3306516876/
- WisdomTree — Swap Rate Amendment Notice (28 Ago 2026): https://finance.yahoo.com/markets/options/articles/wisdomtree-multi-asset-issuer-public-095600475.html
- AInvest — "BNP Just Cut the Real Fee on WisdomTree's 3x Silver ETP" (29 Ago 2026): https://www.ainvest.com/news/bnp-cut-real-fee-wisdomtree-3x-silver-etp-expense-ratio-2608/
- Investing.com — WisdomTree swap rate reduction (1 May 2026): https://uk.investing.com/news/stock-market-news/wisdomtree-announces-swap-rate-reduction-for-silver-etps-93CH-4644611
- JustETF — 3SIL profile: https://www.justetf.com/en/etf-profile.html?isin=IE00B7XD2195
- KoalaGains — 3SIL Analysis & Key Metrics (1 Jul 2026): https://koalagains.com/etfs/LSE/3SIL
- KoalaGains — 3SIL Competitive Analysis: https://koalagains.com/etfs/LSE/3SIL/competition
- Morningstar — 3SIL Performance & Annual Returns: https://www.morningstar.com/etfs/xlon/3sil/performance
- PortfoliosLab — 3SIL.L: https://portfolioslab.com/symbol/3SIL.L
- FT Markets — 3SIL:LSE:USD: https://markets.ft.com/data/etfs/tearsheet/summary?s=3SIL%3ALSE%3AUSD
- Borsa Italiana — 3SIL: https://www.borsaitaliana.it/borsa/etc-etn/scheda/XS3306516876-ETFP.html?lang=en
- Yahoo Finance — 3SIL.L: https://finance.yahoo.com/quote/3SIL.L/
- JPMorgan — "The path for silver prices in 2026 and 2027" (revised Aug 2026): https://www.jpmorgan.com/insights/global-research/commodities/silver-prices
- Silver Institute — "Global Silver Investment to Remain Strong in 2026" (10 Feb 2026): https://silverinstitute.org/global-silver-investment-to-remain-strong-in-2026-against-the-backdrop-of-a-sixth-consecutive-annual-market-deficit/
- GBI Direct — "Silver Price Forecast 2026" (16 Abr 2026): https://gbidirect.com/insights/silver-price-forecast-2026/
- Kitco — "Silver could outgain gold again in 2026" (19 Dic 2025): https://www.kitco.com/news/article/2025-12-19/silver-could-outgain-gold-again-2026-may-face-some-early-headwinds
- BIS — "Boom and bust of the recent silver and gold rush" (16 Mar 2026): https://www.bis.org/publications/boom-and-bust-recent-silver-and-gold-rush-role-leveraged-retail-investors
- Trading Economics — Silver spot: https://tradingeconomics.com/commodity/silver
- FXStreet — Silver price forecast (3 Sep 2026): https://www.fxstreet.com/news/silver-price-forecast-xag-usd-extends-gains-as-us-dollar-falls-further-nfp-comes-into-focus-202609030321
- Investopedia — "Why 3× ETFs Are Riskier Than You Might Think": https://www.investopedia.com/articles/investing/121515/why-3x-etfs-are-riskier-you-think.asp
- Esumanalysis — "3x Leveraged ETF Structure, TRS, Rebalancing, and Volatility Decay" (18 Abr 2026): https://economicsummarizer.com/3x-leveraged-etf-structure-trs-rebalancing-and-volatility-decay/
- ProShares — AGQ factsheet: https://www.proshares.com/our-etfs/leveraged-and-inverse/agq

---

## Valoración y veredicto (para la cartera)

**NO apto para la composición actual de la cartera.** Con 44,5% en tangibles, la exposición a la plata debería canalizarse a través de vehículos 1x físicos (SLV/SIVR) o mineras de plata con apalancamiento operativo real (Fresnillo, Pan American Silver, Wheaton Precious Metals) — nunca mediante un 3x daily reset cuyo expected return multiperiode es negativo incluso si la plata sube.

- **Thesis de plata como activo (deficit, industrial, refugio):** legítima. BNP Paribas cortó el swap rate → el coste de carry bajó. El déficit físico es real (6° año consecutivo, 46,3M oz). La plata tiene caso estructural.
- **Thesis del instrumento 3SIL como proxy:** rotundamente inválida para holding >1 día. El −77% YTD ocurre mientras la plata cotiza a $66 (solo −46% desde pico). El multiplicador 3x sobre un activo con volatilidad ~60% garantilla destrucción compounding en cualquier escenario que no sea rally lineal e ininterrumpido.
- **Si el cerebro quiere exposición táctica intensa a corto plazo** (días, no semanas): 3SIL ofrece el triple de torque, pero el *all-in cost* (TER + swap + spread + decay) en un mes de volatilidad como el actual (>50% anualizada) borra cualquier edge direccional modesto. Tamaño máximo recomendado: <1% del NAV de la cartera, con stop diario y cierre obligatorio antes del siguiente rebalance.
- **Catalizador a vigilar:** curva de futuros de plata (contango vs backwardation). Si vuelve a contango profundo + volatilidad alta = doble muerte para el holder de 3SIL. Si backwardation sostenida + ratio oro/plata comprime = el único escenario donde 3SIL podría superar al 3x de plata spot por períodos de semanas.
