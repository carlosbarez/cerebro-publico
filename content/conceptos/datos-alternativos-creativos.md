---
title: "Datos alternativos creativos"
tipo: analisis
tags: [alt-data, creativo, fuentes]
fecha: 2026-08-31
agente: nova
squad: Original & Creativa (Nova)
status: sonde
---

# Datos alternativos creativos

> Fuentes base: Wikipedia "Alternative data (finance)" (https://en.wikipedia.org/wiki/Alternative_data_(finance)); Future Market Insights, *Alternative Data Market* (https://www.futuremarketinsights.com/reports/alternative-data-market, 2026-02-24); Precedence Research, *Alternative Data Market* (https://www.precedenceresearch.com/alternative-data-market, 2026-07-31); GHGSat (https://www.ghgsat.com); SafeGraph (https://www.safegraph.com).

## 1. Resumen ejecutivo

Los **datos alternativos (alternative data)** son conjuntos de información generados *fuera* de la empresa objeto de inversión —satélites, sensores, navegadores, transacciones, web— que se usan para anticipar fundamentales antes de que se publiquen (Wikipedia, "Alternative data (finance)": https://en.wikipedia.org/wiki/Alternative_data_(finance)). El ángulo de esta sonda es el **brainstorm de fuentes poco usadas**: movilidad, emisiones, sonido y web. No son "nuevas" en laboratorio, pero siguen siendo marginales frente al dominio de transacciones de tarjeta y sentimiento de redes sociales.

Tres cifras clave (con fuente):
- El mercado de datos alternativos valía **USD 4,6 B en 2025** y se proyecta en **USD 22,9 B para 2036** (CAGR 16,0% según FMI, https://www.futuremarketinsights.com/reports/alternative-data-market, 2026-02-24).
- Otra consultora (Precedence Research) lo sitúa en **USD 14,16 B en 2025** con CAGR del **50,68%** hasta 2035 (https://www.precedenceresearch.com/alternative-data-market, 2026-07-31). *Nota de honestidad:* las dos cifras de tamaño y CAGR difieren órdenes de magnitud; la discrepancia es metodológica (qué se cuenta como "alt-data"), no un error tipográfico. Se citan ambas.
- Los **hedge funds** concentran **>71%** de la cuota de ingresos del sector (2025, Precedence) y Norteamérica **>68%** del mercado.

**Por qué importa al inversor de largo plazo:** el alpha de cualquier fuente se erosiona a medida que se masifica (ver Alpha decadente). La ventaja hoy está en *combinar* fuentes cruzadas y en fuentes aún no arbitradas —precisamente movilidad, emisiones, sonido y web—, no en poseer la más cara.

## 2. Estructura / modelo

El "modelo" de un stack creativo de alt-data tiene tres capas:

| Capa | Función | Ejemplo creativo |
|---|---|---|
| **Captura** | Sensor/derivado no financiero | Satélite, hidrófono, GPS de móvil, crawler web |
| **Limpieza/señal** | Ruido → variable financiera | Footfall, toneladas CO2e, shipped-tones, precio scrapeado |
| **Fusión** | Cruzar con fundamentales | Ahora-casting (nowcasting) de ventas/emisores |

### Brainstorm de fuentes (evidencia requerida)

**A) Movilidad (geolocalización / foot traffic).** Datos de posición de móviles y POI (points of interest) para medir afluencia a tiendas, centros logísticos y puertos. SafeGraph es un proveedor real de "places data" (https://www.safegraph.com). La literatura de movilidad durante COVID-19 es sólida: *Nature Scientific Reports*, "Spatial and Temporal Characterization of Activity in Public Space, 2019–2020" (2022). Señal: ventas minoristas, ocupación de oficinas, actividad portuaria.

**B) Emisiones (satélite).** Sensores espectrales (Sentinel-5P, MethaneSAT, constelaciones privadas) cuantifican metano y CO2 a nivel de *sitio/facility*, antes y por encima de los autoinformes ESG. GHGSat vende "site-level methane measurement" con propósito explícito de "financial decisions" (https://www.ghgsat.com). GHGSat cerró **USD 47 M** en financiación en sep-2025 (Google News RSS: https://news.google.com/rss/search?q=GHGSat+satellite+methane+emissions+finance&hl=en-US). Informe de referencia: "Nowhere to Hide: Implications for Policy, Industry, and Finance of Satellite-Based Methane" (2020).

**C) Sonido (acústica).** El ángulo **menos maduro** de los cuatro. Evidencia real pero de nicho: (i) *passive acoustic monitoring* submarino de la NOAA para tráfico de buques (https://www.fisheries.noaa.gov; Google News RSS: https://news.google.com/rss/search?q=underwater+hydrophone+acoustic+shipping+vessel+tracking+finance&hl=en-US); (ii) MBARI documentó caída del ruido oceánico por shipping durante COVID-19 —proxy de actividad económica. (iii) El flanco financiero más cercano es **audio-NLP**: análisis de tono/voice en *earnings calls* y podcasts (p.ej. BridgeWise "Podcast Sentiment Analysis", 2026). Conclusión honesta: el "sonido físico" como señal de mercado es hoy *anecdótico/early-stage*; el audio procesado por lenguaje es el uso real.

**D) Web (scraping).** Precios y texto extraídos de la web. Oficinas de estadística ya lo adoptan: la ONS (Reino Unido) publica índices con "web scraped price data" (Google News RSS: https://news.google.com/rss/search?q=Billion+Prices+Project+inflation+web+scraping&hl=en-US; base ONS: https://www.ons.gov.uk/economy/inflationandpriceindices). También: ofertas de empleo (crecimiento de headcount), reviews de producto, rankings en e-commerce, y repositorios de código (GitHub activity como señal de equipo técnico).

## 3. Numeros clave

- Mercado alt-data 2025: **USD 4,6 B (FMI)** / **USD 14,16 B (Precedence)** — discrepancia metodológica [FMI](https://www.futuremarketinsights.com/reports/alternative-data-market) / [Precedence](https://www.precedenceresearch.com/alternative-data-market).
- Proyección 2036: **USD 22,9 B**, CAGR **16,0%** (FMI).
- Cuota hedge funds: **>71%** de ingresos del sector (2025, Precedence).
- GHGSat: **USD 47 M** levantados sep-2025 (GNR).
- Cobertura geográfica: Norteamérica **>68%** del mercado (Precedence).

*Estado del arte:* no localicé una cifra pública consolidada de cuánto del mercado corresponde específicamente a los cuatro ángulos "creativos" (movilidad/emisiones/sonido/web) frente a los tradicionales (tarjeta, sentimiento). Se marca como **no localizado**.

## 4. Posicion / marco conceptual

El foso (Foso de datos) no está en *tener* una fuente, sino en (1) **latencia** (llegar antes), (2) **exclusividad/licencia** y (3) **ingeniería de fusión** (cruzar señales que otros no combinan). Una señal de movilidad aislada es ruidosa; movilidad × emisiones × web de precios sobre el mismo emisor es una "firma" difícil de replicar.

Conecta con otras ideas del Cerebro:
- Nowcasting macro — alt-data como ahora-casting de PIB/inflación.
- Ventaja informacional — por qué el alpha se traslada al que procesa mejor, no al que paga más.
- ESG y emisiones reales — satélites como auditoría independiente del relato ESG.
- Inversion sistematica — alt-data como insumo de estrategias cuant.
- Riesgo de privacidad — el límite regulatorio de geolocalización y scraping.

## 5. Catalizadores y riesgos

**Catalizadores (recientes, vía Google News RSS):**
- "Money managers are hungrier than ever for obscure data to give them an edge" — Business Insider, 2025 (https://news.google.com/rss/search?q=alternative+data+investing+2025&hl=en-US).
- "Alternative data goes mainstream as fund managers adapt" — Funds Europe.
- GHGSat levanta USD 47 M (sep-2025) → más capital hacia emisiones satelitales.
- Creciente adopción de precios web-scrapeados por oficinas de estadística (ONS).

**Riesgos:**
- **Commoditización:** a medida que la fuente se masifica, el alpha muere (Alpha decadente).
- **Regulatorio/privacidad:** geolocalización y scraping enfrentan límites legales crecientes (p.ej. litigios sobre datos de móviles); ver Riesgo de privacidad.
- **Calidad/señal:** ruido, error de cobertura y *look-ahead bias*; la "creative" suele ser la más ruidosa.
- **Coste de oportunidad:** invertir en una fuente exótica puede distraer de fundamentales sólidos.

## 6. Valoracion / implicaciones practicas

Qué vigilar (no es consejo de inversión; es research de fuentes):
1. **Emisiones satelitales como auditoría ESG** — cruzar autoinformes con GHGSat/Sentinel antes de creer un relato "verde" (ESG y emisiones reales).
2. **Movilidad para nowcasting** de consumo y logística (SafeGraph, POI).
3. **Web-scraping de precios** como señal de inflación adelantada a IPC oficial (ONS, MIT Billion Prices como antecedente).
4. **Audio-NLP** de earnings/podcasts como capa de sentimiento no textual.

*Señal de alerta:* si una fuente creativa aparece en la portada de un proveedor masivo o en un ETF temático, su ventaja informacional probablemente ya se está comprimiendo.

## 7. Veredicto para el inversor

Los datos alternativos creativos (movilidad, emisiones, sonido, web) son **reales, crecientes y aún no plenamente arbitrados**, pero desiguales: emisiones y web tienen producto y adopción institucional; movilidad es madura en nicho; **sonido físico es el eslabón débil** (hoy más audio-NLP que acústica). La ventaja sostenible no es la fuente exótica en sí, sino la ingeniería de fusión y la latencia. Mantener posición de *observador activo*, no de adoptante ciego.

## 8. Segundo orden (OBLIGATORIO)

- **Implicación de las implicaciones:** si el ahora-casting con alt-data se democratiza, el mercado se mueve *más rápido y más pronto* ante cualquier shock real → ventanas de arbitraje más cortas para todos → mayor volatilidad intraday y menor half-life del alpha (Alpha decadente, Eficiencia creciente).
- **Cambio de poder hacia quien procesa, no quien posee:** el foso migra de "tengo los datos" a "sé fusionarlos" (Ventaja informacional, Foso de datos). Esto favorece a gestoras cuantitativas y desfavorece a gestoras discrecionales lentas.
- **Choque con otras fuentes del Cerebro:** choca con la tesis de Inversor de largo plazo a la Munger/Buffett, donde el ruido de alt-data compite con el "cirar negocios y no vender". No es mutuamente excluyente: alt-data puede *validar* tesis de largo plazo (p.ej. emisiones satelitales que confirman o refutan la durabilidad de un moat verde), no solo especulación intradía.
- **Riesgo sistémico de segundo orden:** dependencia masiva de señales derivadas de sensores/tech giants crea **correlaciones ocultas** —cuando muchos usan la misma fuente de movilidad, se compran/venden juntos (Riesgo de rebaño, Correlaciones latentes).
- **Regulatorio en cascada:** privacidad y scraping más estrictos pueden *secar* de golpe fuentes enteras (Riesgo de privacidad), revalorizando fuentes "primarias" (satélite abierto, datos oficiales).
- **Qué vigilar Carlos a 3-5 años:** (i) consolidación de estándares de emisiones satelitales y si entran en regulación/disclosure obligatorio; (ii) si el audio-NLP de earnings se vuelve tabla rasa; (iii) si oficinas de estadística (ONS, BLS) publican índices web-scrapeados *oficiales* (desventaja para quien los usa en privado); (iv) litigios de geolocalización que redefinan la frontera legal del alt-data.

## 9. Fuentes consultadas

1. Wikipedia — *Alternative data (finance)* — https://en.wikipedia.org/wiki/Alternative_data_(finance)
2. Future Market Insights — *Alternative Data Market Forecast and Outlook* (2026-02-24) — https://www.futuremarketinsights.com/reports/alternative-data-market
3. Precedence Research — *Alternative Data Market Size* (2026-07-31) — https://www.precedenceresearch.com/alternative-data-market
4. GHGSat — *Greenhouse Gas Emissions Monitoring* — https://www.ghgsat.com/
5. SafeGraph — *Places Data Platform* — https://www.safegraph.com/
6. Office for National Statistics (UK) — *Inflation and price indices* — https://www.ons.gov.uk/economy/inflationandpriceindices
7. Google News RSS — "alternative data investing 2025" — https://news.google.com/rss/search?q=alternative+data+investing+2025&hl=en-US
8. Google News RSS — "GHGSat satellite methane emissions finance" — https://news.google.com/rss/search?q=GHGSat+satellite+methane+emissions+finance&hl=en-US
9. Google News RSS — "underwater hydrophone acoustic shipping finance" — https://news.google.com/rss/search?q=underwater+hydrophone+acoustic+shipping+vessel+tracking+finance&hl=en-US
10. Google News RSS — "Billion Prices / web scraping inflation" — https://news.google.com/rss/search?q=Billion+Prices+Project+inflation+web+scraping&hl=en-US

---
*Limitación de canal anotada:* el backend Exa (mcporter) devolvió **402 créditos agotados**; se degradó con elegancia a Google News RSS (sin clave) + Jina Reader + verificación de fuentes primarias (GHGSat, SafeGraph, ONS, FMI, Precedence). Sin web search de pago, la profundidad de "sonido físico" quedó en evidencia anecdótica/early-stage (marcado como tal). Cifra de cuota de los 4 ángulos creativos: **no localizada**.
