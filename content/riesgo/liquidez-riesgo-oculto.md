---
title: "Riesgo de liquidez oculto"
tipo: analisis
tags: [liquidez, riesgo-oculto, activos]
fecha: 2026-08-30
agente: daniel-ferrer
squad: Riesgo (Daniel)
status: durable
---

# Riesgo de liquidez oculto

> Fuentes base: Ardea IM (hidden liquidity risk in fixed income, 2019); FCA CP25/38 (2025); Maitra & Satchell (Fixed-Income ETFs: a liquidity illusion?, 2021); Federal Reserve (Funding Risks, 2023); FSB (Revised Recommendations on liquidity mismatch in OEFs, 2023); Bank of England (anatomía de la crisis de gilts 2022); InvestmentNews (2026-08-27).

## 1. Resumen ejecutivo

El **riesgo de liquidez oculto** es la discrepancia entre la liquidez que un inversor *cree* tener (porque puede comprar o vender una participación en pantalla, al instante y con spreads ajustados) y la liquidez *real* de los activos subyacentes que sostienen ese instrumento. La trampa: muchas carteras se presentan como "líquidas" (fondos de bonos, ETF, money market funds, fondos inmobiliarios cotizados) pero su capacidad de entregar efectivo en estrés colapsa porque el subyacente se negocia pocas veces al día, requiere contrapartida y se vende en un mercado que se congela justo cuando todos quieren salir a la vez.

La liquidez no es binaria (líquido / ilíquido), es un **espectro**; y el riesgo de iliquidez se paga con una **prima de iliquidez** (illiquidity risk premium) que tenta a los gestores a deslizarse hacia activos menos negociables para ganar rendimiento en un mundo de tipos bajos (Ardea IM, 2019; https://www.ardea.com.au/eu/hidden-liquidity-risk-in-fixed-income-portfolios/).

Cifras clave:
- En marzo de 2020 los fondos mutuos de renta fija sufrieron salidas netas superiores a **250.000 millones de dólares** (~5% de su AUM); los fondos de corto plazo investment-grade sufrieron salidas del **8% de sus activos**, superando con creces la presión vista en 2008 (Federal Reserve, FEDS Notes, 2020; https://www.federalreserve.gov/econres/notes/feds-notes/the-corporate-bond-market-crises-and-the-government-response-20201007.html).
- El fondo estrella de Neil Woodford congeló reembolsos en junio de 2019 con **3.700 millones de libras** bloqueadas (había gestionado 10.200 millones en su punto álgido) porque parte de la cartera estaba en activos no cotizados y menos líquidos (BBC, 2019; https://www.bbc.com/news/business-48506032).
- La crisis de gilts de septiembre-octubre de 2022 en Reino Unido obligó al Bank of England a intervenir con hasta **65.000 millones de libras** porque los fondos LDI (liability-driven investment) desencadenaron ventas forzadas autorrefuerzantes en el mercado de deuda pública (Bank of England, 2022-2023; https://www.bankofengland.co.uk/working-paper/2023/an-anatomy-of-the-2022-gilt-market-crisis).

## 2. Estructura / modelo

El riesgo nace de un **desajuste de plazos (liquidity mismatch)**: el vehículo promete liquidez diaria (o intradía, en el caso de los ETF) mientras mantiene activos que solo se realizan en días, semanas o nunca. Los componentes del mecanismo:

| Capa | Lo que el inversor ve | Lo que hay debajo | Punto de quiebre |
|------|----------------------|-------------------|------------------|
| ETF de renta fija | Cotiza como una acción, cientos de trades/hora, spread estrecho | Bonos que negocian pocas veces al día; la liquidez la proveen creadores de mercado (AP/authorised participants) | En estrés, el AP no absorbe inventario y el precio se despega del NAV (Maitra & Satchell, 2021; https://doi.org/10.69554/gacb8592) |
| Fondo mutuo de bonos (OEF) | Reembolso diario a NAV | Cartera con tramos ilíquidos; ventas en orden jerárquico (primero lo líquido) | Salidas masivas fuerzan ventas de lo ilíquido → fire sale → contagio (Xiao, Ma & Zeng, Cleveland Fed; https://www.clevelandfed.org/.../kairong-xiao-paper.pdf) |
| Money market fund (prime) | NAV estable "como efectivo" | Expuesto a runs; susceptible a subidas de tipos | Fugas de liquidez en estrés (Federal Reserve, 2023; https://www.federalreserve.gov/publications/2023-october-financial-stability-report-funding-risks.htm) |
| Fondos LDI / pensiones | Compromisos de pago a largo plazo | Apalancamiento por repo y swaps; margin calls diarios | Caída de precios → calls → ventas forzadas (BoE, 2022) |

El **orden jerárquico de liquidación** es clave: ante reembolsos, el fondo vende primero lo más líquido y deja lo ilíquido para el final; cuando llega el momento de vender lo ilíquido, el mercado ya está saturado y el precio se hunde, dañando a quienes se quedan (el "reverse flight to liquidity" documentado en COVID, Xiao et al.).

## 3. Numeros clave

- **COVID-19 (marzo 2020):** salidas >$250bn en fondos de renta fija (Federal Reserve, 2020). Los dealers llegaron a su límite de balance y dejaron de absorber ventas, rompiendo el puente entre la liquidez prometida y la real.
- **Woodford (2019):** £3,7bn bloqueados tras congelar reembolsos; la cartera contenía "unquoted and less liquid stocks" (BBC, 2019).
- **Gilts LDI (2022):** intervención del BoE de hasta £65bn; los costes de transacción en gilts largos se dispararon y la liquidez se evaporó, sobre todo en emisiones largas y index-linked (BoE, 2023).
- **Regulación en curso:** FSB publicó recomendaciones revisadas sobre desajuste de liquidez en OEF en diciembre de 2023 (https://www.fsb.org/uploads/P201223-1.pdf); IOSCO las revisó en mayo de 2025; la FCA las traslada al Reino Unido en su CP25/38 (diciembre 2025; https://www.fca.org.uk/publication/consultation/cp25-38.pdf). El foco: herramientas anti-dilución (LMTs) como swing pricing, redemption gates y notice periods.

## 4. Posicion / marco conceptual

El marco teórico es la **transformación de liquidez** (liquidity transformation): los fondos toman pasivos demandables (reembolso a la vista) y los invierten en activos que no se realizan a la vista. Esto aporta valor en calma, pero crea vulnerabilidad sistémica en estrés porque el riesgo se externaliza al inversor que se queda dentro cuando se cierra la puerta.

Conecta con otras ideas del Cerebro: el fenómeno es pariente de la [[banca-en-la-sombra]] (los fondos hacen banca sin colchón de capital ni deposit insurance), de la [[prima-de-illiquidez]] (el rendimiento extra que sedució a gestores hacia activos menos negociables) y del [[riesgo-sistemico]] (el FSB lo trata explícitamente como riesgo de estabilidad financiera, no solo de un fondo). Ver también [[etf]], [[fondos-de-inversion]] y gestion de riesgos.

## 5. Catalizadores y riesgos

A favor de que el riesgo quede contenido:
- Presión regulatoria creciente (FSB 2023, IOSCO 2025, FCA CP25/38 2025) empuja a los gestores a adoptar LMTs y a alinear plazos.
- Mayor transparencia y métricas de liquidez por tramos de la cartera.

En contra (lo que puede detonarlo):
- **Tipos altos y volatilidad de duración:** castigan a fondos de bonos largos y a los LDI.
- **Bonos de grado de inversión "drift":** muchos fondos seguros han ido deslizándose a rincones complejos de renta fija para ganar rendimiento (Ardea/Bloomberg, 2019) — el "built on a lie" de Mark Carney sobre fondos que prometen liquidez sin que el inversor entienda el peligro.
- **ETF exóticos y de nicho:** en 2026 se lanzan ~700 ETF nuevos en EE.UU. en el primer semestre; muchos sobre activos complejos cuyo wrapper oculta la liquidez subyacente (InvestmentNews, 2026-08-27; https://www.investmentnews.com/opinion/easy-to-buy-harder-to-exit-the-liquidity-risk-hidden-inside-etfs/267947).
- **Novedad reciente (Google News RSS, ago-2026):** "Agosto: el riesgo oculto de liquidez en divisas que las empresas suelen pasar por alto" (Cinco Días, 2026-08-26) y alertas de banca en la sombra como próxima crisis (Funcas, 2026-01-28) — señalan que el tema sigue vivo en la agenda.

## 6. Valoracion / implicaciones practicas

Qué vigilar y hacer:
1. **Medir la liquidez del subyacente, no la del wrapper.** Un ETF es "tan líquido como los activos que contiene"; órdenes grandes mueven el mercado subyacente (InvestmentNews, 2026). Pregunta por el perfil de liquidez por tramos de la cartera.
2. **Desconfía del NAV estable y del reembolso diario** en fondos de bonos, money market prime y productos estructurados; entiende las cláusulas de gate/suspensión.
3. **Stress-test mental:** ¿quién compra cuando todos venden? Si la respuesta es "nadie" o "el banco central", la liquidez es prestada, no propia.
4. **Señal de alerta:** spreads de crédito ampliándose + volumen de reembolsos subiendo + dealers cerca de su límite de balance = la puerta puede cerrarse.
5. **Diversifica la fuente de liquidez:** mantén un tramo de activos realmente líquidos (HQLA) y no supongas que puedes monetizar toda la cartera a la vez.

## 7. Veredicto para el inversor

La liquidez es la primera víctima del pánico y la última en la que confías cuando la necesitas. Las carteras "líquidas" esconden un riesgo de liquidez que solo se materializa en estrés, precisamente cuando más la quieres. No es un riesgo de pérdida nominal, es un riesgo de **no poder salir al precio que creías**. Para un inversor de largo plazo no es motivo para huir de los fondos, sino para exigir transparencia de liquidez y no sobre-construir el plan sobre la capacidad de salir a la vista.

## 8. Segundo orden (OBLIGATORIO y central en este wiki)

- **Efecto contagio (second-order):** el desajuste de liquidez no es un problema aislado de un fondo; el FSB e IOSCO lo tratan como riesgo de **estabilidad financiera** porque las ventas forzadas de un fondo hunden el precio y obligan a otros fondos similares a vender (loop autorrefuerzante). Esto conecta con [[riesgo-sistemico]] y con la tesis de que la [[banca-en-la-sombra]] es la próxima crisis potencial (ver Funcas, 2026).
- **Banco central como comprador de último recurso:** en 2020 (Fed) y 2022 (BoE) la liquidez solo se restauró con intervención oficial. Implicación: la liquidez de tu cartera depende, en el tail, de la voluntad político-monetaria ajena → liga con [[prima-de-illiquidez]] y con la tesis de que el riesgo se socializa.
- **Choque con la narrativa "bonos seguros":** el inversor retail asume que grado de inversión = líquido; la evidencia (Woodford, gilts LDI, COVID) dice que el grado de inversión puede congelarse. Esto debe matizarse en [[fondos-de-inversion]] y [[etf]].
- **Regulación como catalizador de nuevo riesgo:** las LMTs (swing pricing, gates) protegen al fondo pero pueden acelerar salidas preventivas de los inversores que vean el gate cerca → el remedio cambia la dinámica, no la elimina.
- **Qué vigilar Carlos a 3-5 años:** (1) adopción real de LMTs tras FCA CP25/38 e IOSCO 2025; (2) tamaño y apalancamiento del sector LDI y private credit; (3) si la "prima de illiquidez" que sedució a gestores se traduce en tramos tóxicos ocultos en fondos "líquidos"; (4) profundidad del mercado de Treasuries/gilts en el próximo shock; (5) si los ETF de nicho 2026-2028 replican la ilusión de liquidez de los FIETFs en 2020. Páginas sugeridas a crear: liquidez transformacion, lmt swing pricing, ldi gilts 2022, [[prima-de-illiquidez]], [[banca-en-la-sombra]].

## 9. Fuentes consultadas

1. Ardea IM - Hidden liquidity risk in fixed income portfolios - https://www.ardea.com.au/eu/hidden-liquidity-risk-in-fixed-income-portfolios/ (2019-07-16)
2. FCA - CP25/38: Enhancing fund liquidity risk management - https://www.fca.org.uk/publication/consultation/cp25-38.pdf (2025-12)
3. Maitra, A. & Satchell, S. - Fixed-Income ETFs: A liquidity illusion? - https://doi.org/10.69554/gacb8592 (2021)
4. InvestmentNews - Easy to buy, harder to exit: The liquidity risk hidden inside ETFs - https://www.investmentnews.com/opinion/easy-to-buy-harder-to-exit-the-liquidity-risk-hidden-inside-etfs/267947 (2026-08-27)
5. Federal Reserve - 4. Funding Risks (Financial Stability Report) - https://www.federalreserve.gov/publications/2023-october-financial-stability-report-funding-risks.htm (2023-10)
6. FSB - Revised Policy Recommendations on Liquidity Mismatch in Open-Ended Funds - https://www.fsb.org/uploads/P201223-1.pdf (2023-12)
7. Bank of England - An anatomy of the 2022 gilt market crisis - https://www.bankofengland.co.uk/working-paper/2023/an-anatomy-of-the-2022-gilt-market-crisis (2023)
8. Bank of England (Breeden) - Risks from leverage: LDI and financial stability - https://www.bankofengland.co.uk/speech/2022/november/sarah-breeden-speech-at-isda-aimi-boe-on-nbfi-and-leverage (2022-11)
9. Federal Reserve (FEDS Notes) - The Corporate Bond Market Crises and the Government Response - https://www.federalreserve.gov/econres/notes/feds-notes/the-corporate-bond-market-crises-and-the-government-response-20201007.html (2020-10-07)
10. BBC - Top stockpicker Neil Woodford suspends flagship fund - https://www.bbc.com/news/business-48506032 (2019-06-03)
11. Xiao, Ma & Zeng - Mutual Fund Liquidity Transformation and Reverse Flight to Liquidity (Cleveland Fed) - https://www.clevelandfed.org/-/media/project/clevelandfedtenant/clevelandfedsite/events/2020/financial-stability-conference/kairong-xiao-paper.pdf
12. Cinco Días - El riesgo oculto de liquidez en divisas (Google News RSS) - https://cincodias.elpais.com (2026-08-26)

---

## Nota de evolucion 2026-08-30 (elisa)

Asenso a pagina durable del wiki tras revision de la CIO. La sonde de origen (scratchpad/sondas-2026-08-30/liquidez-riesgo-oculto.md) se valido: estructura completa de 9 secciones, seccion de segundo orden presente y >=6 fuentes reales. No se reescribio ninguna afirmacion previa. Trailer de commit: Agente: elisa.

## Ver también

- [[apalancamiento-riesgo]] · [[cartera-todo-tiempo]] · [[estres-pruebas-cartera]] · [[estructura-mercado-liquidez]] · [[playbook-drawdown-30]] · [[regimen-correlacion-falla]] · [[riesgo-cola-seguros]]

## Nota de evolución 2026-08-31 (cerebro-enlaza)

Red de conocimiento: enlace de la hornada durable 2026-08-30 en red neuronal interna (sección «Ver también»). Verificación previa: 41 páginas ascendidas con `status: durable` y validación CIO (9 secciones, 2º orden, ≥6 fuentes), frontmatter canónico, 0 errores. Hallazgo: `itau-unibanco` duplicado en `empresas/` y `analisis-acciones/` (colisión de slug; pendiente decisión de Carlos). Trailer: Agente: cerebro-enlaza.
