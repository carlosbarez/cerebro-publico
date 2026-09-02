---
title: "Correlaciones dinamicas entre activos"
tipo: sintesis
tags: [correlaciones, diversificacion, crisis]
fecha: 2026-08-30
agente: jorne
squad: Analisis Tecnico (Jorne)
status: durable
---

# Correlaciones dinamicas entre activos

> Fuentes base: Preis et al. (Scientific Reports, 2012) — https://doi.org/10.1038/srep00752 ; T. Rowe Price "When Diversification Fails" (2020) — https://www.troweprice.com/content/dam/ide/articles/pdfs/2020/q3/when-diversification-fails.pdf ; Šikić (2025) sobre el régimen stock-bond — https://doi.org/10.32676/n.11.1.7 ; PGIM "Positive Stock-Bond Correlation" (2024) — https://cdn.pficdn.com/cms1/pgim4/sites/default/files/IAS-Prospects-and-Portfolio-Construction-Implications-0324.pdf ; ECB Financial Stability Review (2022) — https://www.ecb.europa.eu/press/financial-stability-publications/fsr/focus/2022/html/ecb.fsrbox202211_02~7abb48e333.en.html

ANGULO OBLIGATORIO: Cuando la diversificacion falla: regímenes de correlación en estrés.

## 1. Resumen ejecutivo
La correlacion (correlation) entre activos no es una constante: es una variable que cambia con el tiempo y, sobre todo, que se dispara justo cuando mas la necesitamos. En mercados tranquilos las correlaciones entre clases de activo suelen situarse en el rango 0%–50%, pero en crisis de estres saltan al rango 90%+ ("There were few places to hide... correlations that normally are in the 0%–50% range suddenly jump to the 90%+ range", T. Rowe Price, 2020). Esto es el núcleo del problema: la diversificacion (diversification) "se derrite" precisamente en las caidas.

Tres cifras clave:
- En renta variable US frente a no-US, la correlacion mensual era -17% en meses de fuerte subida (>1 desviacion tipica), +76% en caidas >1 DT y +93% en caidas >2 DT, es decir, el beneficio de diversificacion几乎 desaparece en el estres profundo (T. Rowe Price, 2020).
> — dato privado retirado —
- En 2022 la correlacion stock-bonos (S&P 500 vs Treasuries a 20+ anos) fue positiva por primera vez en todo el periodo 2007–2023; el 60/40 cayo un 17% ese ano (acciones -18%, bonos -16%), frente al comportamiento de "refugio" de 2008 (PGIM, 2024; Šikić, 2025).

Para el inversor de largo plazo esto importa porque construye carteras sobre correlaciones historicas medias que no son estables: el verdadero riesgo no es la volatilidad aislada, sino el fallo de la cobertura cuando todo caejunto.

## 2. Estructura / modelo
El fenomeno se modela como "regímenes de correlacion" (correlation regimes): periodos persistentes de calm y de turbulencia donde la matriz de correlacion se comporta de forma distinta. La mecanica tiene varias capas:

| Capa | Qué mide | Herramienta tipica | Limite |
|---|---|---|---|
| Correlacion constante (CCC) | Una sola matriz para todo el tiempo | Bollerslev (1990) | Irreal: ignora regime shifts |
| Correlacion condicional dinamica (DCC) | Matriz que cambia dia a dia | Engle (2002), Cappiello et al. (2006) | Asume misma dinamica para todos los activos |
| Regime switching | Saltos abruptos y persistentes | Pelletier (2006), Otranto RSFDC (2009) | Estados no observables |
| Copula + cola (tail dependence) | Dependencias en extremos | GARCH-DCC-Copula (Luo et al., 2025) | Coste computacional |
| Stress testing de correlaciones | Escenarios economicos de estres | Packham & Woebbeking (2022) | Requiere factores de riesgo |

El hallazgo empírico estable (Preis et al., 2012; Reigneron et al., 2010) es que la correlacion media es una funcion del signo y la magnitud del retorno del indice: las caidas amplifican la correlacion. Los modelos de regime switching (Markov-Switching) confirman que los regímenes de estres son "pegajosos": en el caso stock-bond de 2022, el regimen de "fallo de cobertura" de los bonos tuvo una duracion esperada de ~75 dias laborables (Šikić, 2025).

Canales por los que el estres eleva la correlacion:
1. Venta indiscriminada (fire sale): "when investors need liquidity, they sell everything in their portfolio that's liquid... all liquid assets sell off at the same time" (T. Rowe Price, 2020). El riesgo de liquidez es el culpable principal.
2. Choque comun de politica: en 2022 la subida agresiva de tipos fue un viento en contra comun para acciones y bonos largos (Šikić, 2025; ECB, 2022).
3. Choques de oferta (supply shocks): empujan inflacion y crecimiento en sentidos opuestos y, con ello, acciones y bonos a la vez (ECB, 2022; PGIM, 2024).

## 3. Numeros clave
- Correlaciones en crisis: saltan de 0%–50% a 90%+ (T. Rowe Price, 2020).
- Renta variable US/no-US: -17% (subidas fuertes) → +76% (>1 DT caida) → +93% (>2 DT caida) (T. Rowe Price, 2020).
- DJIA: correlacion media escala linealmente con el estres de retornos normalizados en ventanas de 10–60 dias; relacion "universal" robusta a aleatorizacion (Preis et al., 2012).
- Stock-bond: 2007–2021 correlacion negativa todos los anos; solo 2022 y 2023 registran correlacion anual positiva; rolling 60 dias supero +0,4 de forma sostenida (Šikić, 2025).
- 60/40 en 2022: -17% (acciones -18%, bonos -16%). Sharpe del 60/40: 0,6 en régimen de correlacion negativa vs 0,4 en régimen positivo (mayor volatilidad de cartera, 10,8% vs 8,9%) (PGIM, 2024).
- ECB (nov 2022): la correlacion stock-bond es mas baja cuando la inflacion esta cerca del 2%; se dispara cuando la inflacion se aleja del objetivo del banco central.
- Lehman: correlacion media de activos 0,32 pre-default → 0,50 durante la crisis; sector financiero 0,40 → 0,51 (Packham & Woebbeking, 2022).
- Prima de riesgo de correlacion (correlation risk premium): diferencia entre correlacion implicita (risk-neutral) y realizada; esta "preciada" (priced) en opciones y retornos de hedge funds (Aït-Sahalia et al., 2009; Dhaene et al., 2024; Buss et al., 2017).

## 4. Posicion / marco conceptual
El marco honesto es contraintuitivo: la diversificacion "falla" en el plano de la correlacion, pero ello no implica necesariamente que deje de aportar utilidad. Scherer (2020) demuestra que, aunque la correlacion sube en crisis, la volatilidad tambien lo hace, y el beneficio neto de diversificacion (medido como diferencia de utilidad) puede incluso aumentar: con volatilidad 0,4 y correlacion 0,95 el beneficio (ΔU) sube a 3,125% frente a 2% con vol 0,2 y correlacion 0,2. "Diversification works well in crisis periods once we shift our narrow focus on correlation toward changes in expected investor utility" (Scherer, 2020).

El "foso" (moat) conceptual del inversor disciplinado es, por tanto, doble:
- No usar correlaciones medias de largo plazo para fijar el riesgo; usar correlaciones de estres (stress correlations) en el analisis de escenarios (T. Rowe Price, 2020).
- Distinguir el tipo de shock: crecimiento/deflacion (2008, 2020) → los bonos cubren; inflacion (2022) → los bonos fallan y cubren commodities/oro (Investopedia, 2026; ECB, 2022). Conecta con [[diversificacion]], [[cartera-60-40]], [[regimen-de-inflacion]], [[bonos]], [[oro]], riesgo de cola.

## 5. Catalizadores y riesgos
- Inflacion persistente / tipos: el mayor catalizador de un régimen de correlacion stock-bond positiva. PGIM (2024) avisa de que si se consolidan las dudas sobre sostenibilidad fiscal, incertidumbre de politica monetaria y choques de oferta, la correlacion positiva podria persistir como lo hizo de 1970 a 2001.
- Politica monetaria: ser "Fed watcher" importa mas; la capacidad de la Fed de domeñar la volatilidad es un factor clave (T. Rowe Price, 2020).
- Liquidez y reformas post-GFC: mayores requisitos de capital redujeron el inventario de los market-makers, agravando las ventas indiscriminadas incluso en el mercado de Treasuries (T. Rowe Price, 2020).
- Activos privados: su aparente baja correlacion es en buena medida un espejismo de valoracion no de mercado (stale pricing); el riesgo de mark-to-market permanece (T. Rowe Price, 2020).
- Novedades recientes: no se pudo recuperar el feed de Google News RSS en este entorno (devolvio vacío; canal degradado). Si quieres novedades 2026, verificar manualmente "stock bond correlation 2026", "60/40 diversification 2026" y "correlation risk premium".
- Riesgo de modelo: los DCC asumen una dinamica comun; los regime-switching son sensibles a la especificacion y los estados son no observables (Otranto, 2009).

## 6. Valoracion / implicaciones practicas
- Construir la cartera con correlaciones de estres, no con medias historicas; hacer stress testing de la matriz de correlacion frente a escenarios economicos concretos (Packham & Woebbeking, 2022).
- No sobrecargar una unica cobertura: la leccion de 2008/2020 vs 2022 es que "no single asset class provides consistent protection against all shocks" (Investopedia, 2026). Combinar bonos de duracion (cubren shocks de crecimiento), oro y commodities (cubren shocks de inflacion) y, con coste, opciones put (mejor cobertura en crisis pero cara en calma).
- Vigilar la inflacion y el diferencial de valoracion stocks/bonos (Fed Model): un gap estrecho históricamente anticipa mejor comportamiento ajustado por riesgo de los bonos (PGIM, 2024).
- Mantener disciplina de diversificacion antes del incendio: "the worst time to try to buy insurance is when the building is already on fire" (Husain, en T. Rowe Price, 2020).
- Senal de alerta: cuando la correlacion stock-bond a 60 dias cruza a territorio positivo y la inflacion se aleja del 2%, asumir que el 60/40 esta en régimen de "fallo de cobertura" y rebalancear hacia inflacion-sensitivos.

## 7. Veredicto para el inversor
La diversificacion no es gratis ni constante: su funcion de cobertura colapsa en correlacion precisamente en el estres, y en los regimenes de inflacion deja de funcionar del todo para la pareja acciones-bonos. El inversor honrado debe diseñar para el peor regimen, no para la media, y aceptar que la unica defensa robusta es la diversificacion por tipo de shock mas liquidez suficiente para no ser un vendedor forzoso.

## 8. Segundo orden (OBLIGATORIO y central en este wiki)
- Implicacion de las implicaciones: si las correlaciones de cola suben con el estres, el supuesto de [[riesgo-sistemico]] desacoplado en carteras multiactivo es falso en el momento critico. Eso invalida gran parte de la optimization media-varianza estatica que aun usa mucha industria; refuerza el caso de stress testing y de presupuestos de riesgo por regimen.
- Choca con otras fuentes: Scherer (2020) matiza que "la diversificacion falla" es un enunciado parcial; en utilidad neta puede seguir ayudando. Por tanto la narrativa simple "todo cae junto, la diversificacion es inutil" es excesiva: el fallo es de cobertura relativa, no absoluta, salvo en regimen inflacionario.
- Conexion con otras tesis del Cerebro: esto es el eslabon mecanico de [[regimen-de-inflacion]] (por que 2022 fue distinto a 2008) y de [[cartera-60-40]] (por que el portfolio bandera sufrio su peor ano en 2022). Toca tambien prima de riesgo de correlacion (se puede cobrar por asegurar el salto de correlacion via dispersion trading) y volatilidad/value at risk (el riesgo de cartera esta dominado por la cola de la matriz, no por las volatilidades individuales).
- Qué vigilar Carlos a 3–5 anos: (1) si la correlacion stock-bond positiva de 2022–2023 se convierte en regimen duradero (PGIM dice que 1970–2001 ya fue positivo); (2) el papel de los bonos largos con tipos ya normalizados y balance de la Fed encogido; (3) si la fragmentacion de liquidez post-GFC hace que los bonos de grado de inversion se comporten como acciones en el proximo shock; (4) la evidencia de una "prima de reconfiguracion" (reconfiguration premium): la estructura de qué empresas se mueven juntas se reescribe a un ritmo que cuesta y no se puede arbitrar con contratos existentes (Luo et al., 2025; estudio de rotation de la matriz S&P 500, 2026, no localizado en fuente primaria consolidada). Revisar anualmente las correlaciones rolling a 60/250 dias de la cartera propia, no solo las del indice.

## 9. Fuentes consultadas
1. Preis, Kenett, Stanley, Helbing, Ben-Jacob — "Quantifying the Behavior of Stock Correlations Under Market Stress" (Scientific Reports, 18 Oct 2012) — https://doi.org/10.1038/srep00752
2. T. Rowe Price — "When Diversification Fails" (junio 2020) — https://www.troweprice.com/content/dam/ide/articles/pdfs/2020/q3/when-diversification-fails.pdf
3. Bernd Scherer — "Diversification: does it really fail, when you need it most?" (Journal of Asset Management, 29 Oct 2020) — https://doi.org/10.1057/s41260-020-00190-1
4. Investopedia — "Stress Testing an ETF Portfolio: Lessons From 2008, 2020, ..." (1 Jun 2026) — https://www.investopedia.com/stress-testing-an-etf-portfolio-11969093
5. Luka Šikić — "The breakdown of the classic portfolio hedge" (2025) — https://doi.org/10.32676/n.11.1.7
6. PGIM — "Positive Stock-Bond Correlation: Prospects and Portfolio Construction Implications" (marzo 2024) — https://cdn.pficdn.com/cms1/pgim4/sites/default/files/IAS-Prospects-and-Portfolio-Construction-Implications-0324.pdf
7. European Central Bank — "Cross-asset correlations in a more inflationary environment..." (Financial Stability Review, 16 Nov 2022) — https://www.ecb.europa.eu/press/financial-stability-publications/fsr/focus/2022/html/ecb.fsrbox202211_02~7abb48e333.en.html
8. Aslanidis & Martinez — "Correlation regimes in international equity and bond returns" (Economic Modelling, 2021) — https://ideas.repec.org/a/eee/ecmode/v97y2021icp397-410.html
9. Acharya — "How Has the Behavior of Cross-Market Correlations Altered During Financial and Debt Crises?" — https://onlinelibrary.wiley.com/doi/10.1111/manc.12171
10. Packham & Woebbeking — "Correlation scenarios and correlation stress testing" (Economics Letters, 2022) — https://www.sciencedirect.com/science/article/pii/S0167268122004061
11. Dhaene et al. — "Understanding the correlation risk premium" (Annals of Actuarial Science, 25 Nov 2024) — https://www.cambridge.org/core/journals/annals-of-actuarial-science/article/understanding-the-correlation-risk-premium/1B70B7518A4DF63AABEC7B9BA3269A1E
12. Aït-Sahalia, Karaman, Mancini — "The Price of Correlation Risk" (Journal of Finance, 2009) — https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.2009.01467.x
13. Edoardo Otranto — "Asset allocation using flexible dynamic correlation models with regime switching" (2009) — https://doi.org/10.1080/14697680902856515
14. Luo, Wang, Jussa — "Dynamic allocation: extremes, tail dependence, and regime shifts" (DB Handbook / alphaXiv, 14 Jun 2025) — https://alphaxiv.org/abs/2506.12587

Nota de Metodo: el feed de Google News RSS (canal de noticias recientes) devolvio respuesta vacía en este entorno y no pudo usarse; el resto de canales (Exa/web, Jina Reader) funcionaron. Cifras no localizadas en fuente primaria (p. ej. el "reconfiguration premium" de rotation de matriz 2026) se senalan explicitamente como no localizadas.

---

## Nota de evolucion 2026-08-30 (elisa)

Asenso a pagina durable del wiki tras revision de la CIO. La sonde de origen (scratchpad/sondas-2026-08-30/correlaciones-dinamicas.md) se valido: estructura completa de 9 secciones, seccion de segundo orden presente y >=6 fuentes reales. No se reescribio ninguna afirmacion previa. Trailer de commit: Agente: elisa.

## Ver también

- [[cartera-todo-tiempo]] · [[datos-alternativos-timing]] · [[estructura-mercado-liquidez]] · [[regimen-correlacion-falla]] · [[regimen-volatilidad-asignacion]] · [[senales-opciones-flow]]

## Nota de evolución 2026-08-31 (cerebro-enlaza)

Red de conocimiento: enlace de la hornada durable 2026-08-30 en red neuronal interna (sección «Ver también»). Verificación previa: 41 páginas ascendidas con `status: durable` y validación CIO (9 secciones, 2º orden, ≥6 fuentes), frontmatter canónico, 0 errores. Hallazgo: `itau-unibanco` duplicado en `empresas/` y `analisis-acciones/` (colisión de slug; pendiente decisión de Carlos). Trailer: Agente: cerebro-enlaza.
