---
title: "Inventario de crudos — clasificación de fuentes en `raw/`"
tipo: referencia
tags: [sistema, corpus, navegacion, raw]
fecha: 2026-07-28
destilado_por: omniroute
---

# Inventario de crudos — clasificación de fuentes en `raw/`

Tabla navegable de los **560 ficheros** de la capa `raw/`. Sirve para (a) ver qué hay sin
abrir la carpeta, (b) navegar por tipo/autor/año, (c) detectar qué falta destilar y qué está
duplicado. Es **capa de dato, no de conocimiento**: clasifica fuentes, no las interpreta.

## Cómo leer esta tabla (y cuánto fiarse)

| Columna | Quién la produce | Fiabilidad |
|---|---|---|
| Fichero | listado del sistema de ficheros | exacta |
| Tipo, Autor, Tema | modelo gratuito vía OmniRoute (`destila --tipo inventario`) | **sin verificar** — orientativa |
| Año | parser determinista sobre nombre de fichero y fecha explícita del documento | conservadora: `n/d` cuando no hay evidencia |

El año **no** lo pone el modelo, a propósito. En el lote de control fabricó el año en 5 de 20 filas
por contagio de los documentos vecinos del mismo lote (fechó en 2025 dos entrevistas de AQR que son
de marzo de 2026). El parser prefiere decir `n/d` en 94 filas antes que inventarse una fecha. La
`creationDate` del PDF se descarta también: en este corpus es la fecha de descarga, no la de
publicación.

Las filas con ⚠ son ficheros que **ningún extractor pudo leer** — se listan igualmente para que el
inventario no aparente una cobertura que no tiene.

**Cobertura**: 524 de 560 ficheros clasificados (93%);
30 sin clasificar, cada uno con su motivo.

Relacionadas: [[resumen-rapido-fuentes]] (tesis en ≤30 palabras) · [[concordancia-entidades]]
(quién aparece dónde) · [[dashboard-cobertura]] (qué está ingerido de verdad en el wiki) ·
[[reparto-de-modelos]] (por qué esto lo hace la capa gratuita).


### `libros-sueltos/` — 30 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| [[acciones-ordinarias-y-beneficios-extraordinarios|Acciones ordinarias y beneficios extraordinarios]] - Philip A. Fisher.epub | libro | Philip A. Fisher | n/d | Filosofía inversión crecimiento, qué comprar/vender |
| Analisis Integral de Empresas - Oriol Amat Salas.epub | libro | Oriol Amat Salas | n/d | Análisis integral empresas, diagnóstico financiero |
| Análisis técnico de bolsa y trading para Dummies - Francisca Serrano.epub | libro | Francisca Serrano | n/d | Introducción al análisis técnico y trading bursátil |
| Aprende a invertir, crear riqueza y multiplicar tu dinero - Rodrigo Amador.epub | libro | Rodrigo Amador | 2020 | Guía de inversión personal y creación de riqueza |
| Buffett, Mary & Clark, David - Buffettologia.epub | libro | Mary Buffett, David Clark | n/d | Filosofía y métodos de inversión de [[warren-buffett|Warren Buffett]] |
| Buffett, Mary & Clark, David - Warren Buffett y la interpretacion de estados financieros [53637] (r1.0).epub | — | — | n/d | ⚠ sin destilar en este barrido |
| Buffett, Mary & Seah, Sean - Los 7 secretos para invertir como Warren Buffett).epub | libro | Mary Buffett, Sean Seah | n/d | Siete principios de inversión de Warren Buffett |
| Como invertir para generar riqueza - Warren Buffett 2.epub | libro | James O'Loughlin | n/d | Liderazgo y gestión de capital de Warren Buffett |
| Cómo piensan los ricos -[[morgan-housel| Morgan House]]l.epub | libro | Morgan Housel | n/d | Psicología del dinero y comportamiento financiero |
| Crea riqueza con dividendos crecientes - Miller, Lowell (1).epub | libro | Lowell Miller | 2006 | Inversión en acciones con dividendos crecientes |
| Crea riqueza con dividendos crecientes - Miller, Lowell.epub | libro | Lowell Miller | 2006 | Inversión en acciones con dividendos crecientes |
| Cómo analizar la bolsa antes de invertir - Rodrigo de Domingo Carbonell.epub | libro | Rodrigo de Domingo Carbonell | 2014 | Análisis fundamental y técnico de acciones |
| Deep value - Tobias E. Carlisle.epub | libro | Tobias E. Carlisle | 2014 | Inversión en valor profundo y[[activismo-accionarial| activismo accionaria]]l |
| Desai, Mihir A. - La sabiduria de las finanzas.epub | libro | Mihir A. Desai | n/d | Finanzas aplicadas a decisiones de vida y negocios |
| Dinero. Domina el juego  - Tony Robbins.epub | libro | Tony Robbins | n/d | Libertad financiera y estrategias de inversión |
| Diversificación Eficiente para Inversores - (William Bernstein.epub | libro | William Bernstein | 2014 [[asignacion-de-activos|| Asignación de activ]]os y diversificación de carteras |
| El arte de gastar dinero - Morgan Housel (1).epub | libro | Morgan Housel | n/d | Psicología del gasto y uso de la riqueza |
| El camino del inversor - Fernando Ruiz de Velasco.epub | libro | Fernando Ruiz de Velasco | n/d | Estrategias de inversión y libertad financiera |
| El código del dinero - Raimon Samsó.epub | libro | Raimon Samso | n/d | Inteligencia financiera y emprendimiento |
| El Efecto Compuesto - Darren Hardy.epub | libro | Darren Hardy | n/d | Mejora personal mediante hábitos incrementales |
| El fin de la banca - Jonathan McMillan.epub | — | — | n/d | ⚠ sin destilar en este barrido |
| El gran libro para hacer dinero en la bolsa.epub | libro | Equipo de Research de Inversor Global | 2023 | Inversión en bolsa |
| El Ingreso Pasivo - Moreira, Juliana Belén Nemur, Lisa.epub | libro | Lisa Nemur | 2016 | Estrategias para generar ingresos pasivos |
| El Mercado de Valores para Principiantes - Ardi Aaziznia.epub | libro | Ardi Aaziznia | n/d | Introducción al mercado bursátil para novatos |
| El pequeño libro de la inversión en valor - Browne, Christopher H.Lowenstein.epub | libro | Christopher H. Browne | n/d | Inversión en valor, conceptos básicos para inversores |
| Elder, Alexander - El nuevo vivir del trading.epub | libro | Alexander Elder | n/d | Trading, psicología y análisis de mercado |
| Escuela de Bolsa y Manual de trading - Francisca Serrano.epub | libro | Francisca Serrano | n/d | Trading diario, cómo ganar 2000 dólares al mes |
| Fisher, Mark - El millonario instantaneo.epub | libro | Mark Fisher | 1953 | Principios de éxito y riqueza personal |
| Inversión Claves para alcanzar la libertad financiera - Andrea Redondo.epub | — | — | n/d | ⚠ sin destilar en este barrido |
| Lo que nunca cambia - Morgan Housel.epub | libro | Morgan Housel | n/d | Verdades atemporales para inversión y vida |

### `papers-sueltos/` — 65 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 2025.06---market-cycles-and-managed-futures---kaminski-and-wen.pdf | paper | Kathryn M. Kaminski, Shihong Wen | 2025 | Análisis empírico de drawdowns y recuperaciones en Managed Futures |
| 2026.03---assessing-alpha-in-macro-strategies---demirbilek-kaminski-sun.pdf | paper | Tansu Demirbilek, Kathryn M. Kaminski, Jiashu Sun | 2026 | Descomposición de exposiciones y alpha en estrategias macro globales |
| 73.pdf.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| a-random-walk-down-wall-street.pdf | libro | Burton G. Malkiel | n/d | Estrategia de inversión |
| Abby Cohen Bio 07.2022.pdf |[[abby-joseph-cohen| otro | Abby Jose]]ph Cohen | 2022 | Biografía Abby Joseph Cohen, estratega |
| abby-joseph-cohen-drilling-for-oil-and-making-gadgets.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| AIAR_Q1_2016_04_Kaminsky_CTARiskManagement.pdf | paper | Kathryn Kaminski | 2016 | Marco factorial para cuantificar gestión de riesgo en CTA |
| Albert-Edwards-Buy-the-dip-or-jump-off-a-sinking-ship.pdf | informe | Albert Edwards | 2024 | Estrategia global: comprar caídas o hundirse |
| All Giverny Capital's Annual Letters (2001 - 2021).pdf | informe | François Rochon / Giverny Capital | 2001 | Cartas anuales Giverny Capital 2001-2021 |
| antifragil-9788449337338.pdf | libro | — | n/d | Antifragilidad |
| antifragil.pdf | libro | — | n/d | Antifragilidad y resiliencia |
| Bearish_Forecasts_from_Two_Top_Strategists.pdf | informe | Robert Huebscher | 2014 | Edwards y Grice: deflación y riesgo sistémico |
| behavioural-investing-a-practitioners-guide-to-applying-behavioural-finance-by-james-montier.pdf | libro | James Montier | n/d | Inversión conductual |
| ben-graham-father-financial-analysis.pdf | informe | Irving Kahn, Robert D. Milne | 1977 | Análisis financiero de Ben Graham |
| BetterSystemTrader-Episode49-LindaRaschke.pdf | otro | Linda Raschke | n/d | Entrevista sobre trading sistemático y edges |
| BI_January_18_2016.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| Business Valuation - McKinsey.pdf | libro | Tim Koller, Marc Goedhart, David Wessels | n/d | Valoración de empresas: medición y gestión |
| capital-compounders-robin-r-speziale.pdf | libro | Robin R. Speziale | 2018 | Inversión en acciones de crecimiento |
| CME_In Search of Crisis Alpha Kaminski.pdf | informe | Kathryn M. Kaminski | n/d | Managed futures y alpha durante crisis de mercado |
| David-Rosenberg-T1-Comentarios-a-Los-3-Tomos-Del-Capital.pdf | libro | David Rosenberg | n/d | Comentarios al tomo I de El Capital de Marx |
| David-Rosenberg-T2-Comentarios-a-Los-3-Tomos-Del-Capital.pdf | libro | David Rosenberg | n/d | Comentarios al tomo II de El Capital de Marx |
| DI-0771.pdf | informe | Pablo Fernández | 2008 | Métodos de valoración de empresas |
| Dialnet-LaTeoriaDeLosMercadosDeCapitalesEficientes-2497646.pdf | paper | Pauline Hyme | 2003 | Crítica a la teoría de mercados eficientes |
| el-cisne-negro-nassim-taleb.pdf | libro | Nassim Taleb | 2007 | Teoría cisnes negros, falacia narrativa, límites predicción, antifragilidad |
| Fama_theory.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| gmo_rising-toxicity-and-the-threat-to-capitalism-and-life-itself_3-25.pdf | paper | Jeremy Grantham (GMO) | 2025 | Toxicidad química, disruptores endocrinos, colapso fertilidad, PFAS, demandas |
| gmo_valuing-ai-extreme-bubble---new-golden-era---or-both_1-26.pdf | paper | Jeremy Grantham (GMO) | 2021 | Burbuja IA 2-sigma, paralelismos históricos (1929, 2000), cohete multi-etapa ChatGPT |
| Guia-de-Marx-III-3.pdf | informe | Fernando Hugo Azcurra | 2020 | Economía marxista |
| investing-for-growth-9780857199027.pdf | libro | Terry Smith (Fundsmith) | 2010 | Inversión growth/calidad, Fundsmith, buybacks, ETFs, cartas accionistas 2010-20 |
| Investment Valuation - Aswath Damodaran.pdf | — | — | n/d | ⚠ sin destilar en este barrido |
| james_montier_london_2011.pdf | paper | James Montier (GMO) | 2011 | 7 leyes inmutables inversión, margin of safety, fat pitch, contrarian, leverage |
| Jeremy-Grantham-on-Why-Investors-Never-Recognize-Stock-Market-Bubbles.pdf | artículo | William Edwards / Jeremy Grantham | 2022 | Grantham advierte superbubble bursátil |
| Jeremy_Grantham_What Investors Need to Know About Technology and Climate Change- The Race of Our Lives.pdf | paper | Jeremy Grantham | 2018 | Tecnología y cambio climático: carrera vital |
| jm_dare-to-be-different_3-20.pdf | paper | James Montier (GMO) | 2020 | Crítica 60/40 (retorno real ~0%), contrarian, Templeton/Keynes, alternativas |
| kathryn-kaminski-volatility-investment-fundamentals.pdf | paper | Kathryn Kaminski (Alpha K) | n/d | Fundamentos inversión en volatilidad: instrumentos, estrategias, diversificación |
| KKR Annual Report 2025.pdf | informe | George Roberts, Henry Kravis | 2025 | Informe anual KKR 50 aniversario |
| larry-fink-annual-chairmans-letter.pdf | carta | Larry Fink (BlackRock) | 2025 | Carta 2026: IA, reorden geopolítico, desigualdad riqueza/trabajo, capitalismo |
| Linda Raschke - Street Smarts. High Probability Short Term Trading Strategies (145 Pages).pdf | libro | Linda Raschke | n/d | Estrategias trading corto plazo alta probabilidad |
| nasdaq short sales.pdf | paper | Journal of Investing | n/d | Ventas en corto Nasdaq: high short interest → underperformance significativo |
| NOMAD INVESTMENT PARTNERSHIP LETTERS TO PARTNERS 2001 – 2014.pdf | carta/cartas | Nick Sleep & Qais Zakaria | 2001 | Cartas inversor: value investing, holdings permanentes |
| on-the-rise-and-fall-of-nations.pdf | paper | Jeremy Schwartz / Ruchir Sharma | 2016 | Auge/caída naciones: 4 D's (deglobalización, depoblación, deuda, desdemocratización) |
| pensar rápido pensar despacio.pdf | libro | Daniel Kahneman | n/d | Sistema 1 (rápido/intuitivo) vs Sistema 2 (lento/lógico), sesgos, aversión pérdida |
| Peter_Lynch_Worth_Magazine_Articles.pdf | artículo | Peter Lynch | n/d | Artículo sobre inversión amateur vs institucionales |
| philip_e._tetlock_-_superforecasting_the_art_and_science_of_prediction.pdf | libro | Philip Tetlock | n/d | Superpredicción: habilidades entrenables, superpronosticadores vs expertos/dardos |
| PM146_Education_Kaminski_article.pdf | paper/educativo | M. Kaminski | n/d | Alpha en crisis: estrategias alternativas, riesgos |
| Poor Charlie’s Almanack_ The Wit and Wisdom of Charles T. Munger ( PDFDrive ).pdf | libro | Charles T. Munger / Peter D. Kaufman | n/d | Sabiduría y mentalidad de Charlie Munger |
| prelease-appointments-sg-equity-research-141207.pdf | otro | Société Générale | 2007 | Nombramientos James Montier y Albert Edwards como Co-Heads Global Strategy SG |
| Presentation030316.pdf | presentación | Abby Joseph Cohen / Goldman Sachs | 2016 | Perspectiva económica global y papel de China |
| professional-trading-techniques_compress.pdf | libro | Linda Bradford Raschke | 1998 | Técnicas profesionales de trading |
| raschkehandout.pdf | manual | Linda Bradford Raschke | 1998 | Taller de técnicas de trading |
| REQ-Deep-Dive-Acquisition-driven-Compounders-December-2023.pdf | informe | REQ Capital AS | 2023 | Compounders impulsados por adquisiciones |
| Rotman_fall04.pdf | revista | Rotman School of Management | n/d | Revista gestión Rotman otoño 2004 |
| Security-Analysis.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| syz_focus-has_the_ice_age_ended.pdf | informe | Charles-Henry Monchau | 2022 | Fin de la Ice Age y tipos de interés |
| TGS155JeremyGranthamTranscript.pdf | transcripción | Jeremy Grantham / Nate Hagens | n/d | Toxicidad, fertilidad y colapso poblacional |
| The complete collection - Howard Marks.pdf | libro | Howard Marks | 2025 | Colección de memorandos de inversión |
| The Five Rules for Successful Stock Investing.pdf | libro | Pat Dorsey (Morningstar) | n/d | Guía inversión en acciones cinco reglas |
| The Intelligent Investor - BENJAMIN GRAHAM.pdf | libro | Benjamin Graham / Jason Zweig | n/d | Inversión en valor edición revisada Zweig |
| The making of a permabear.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| The Seven Immutable Laws of Investing.pdf | libro | James Montier | 2000 | Leyes inmutables de inversión |
| The Wrapper Illusion Do Entity Structures Neutralize Tax Anti-Abuse Rules.pdf | informe | Desconocido | 2026 | Estructuras de entidades y abuso fiscal |
| The-Alleged-Perils-of-Divestment-from-The-Race-of-Our-Lives-Revisited.pdf | informe | Jeremy Grantham | n/d | Desinversión y cambio climático |
| Thinking in Bets_ Making Smarte - Annie Duke.pdf | libro | Annie Duke | 2018 | Toma de decisiones y pensamiento crítico |
| Value investing - James Montier.pdf | libro | James Montier | n/d | Inversión de valor |
| When Genius Failed By Roger Lowenstein.pdf | libro | Roger Lowenstein | n/d | Fallos de genios financieros |

### `AQR insights` — 21 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| Active Extension.pdf | paper | AQR | 2025 | Estrategias 130/30 para mejorar retornos de renta variable |
| An Interview with Cliff Asness The Illusion of Safety in Private Assets.pdf | otro | AQR | 2026 | Entrevista sobre riesgos en activos privados |
| An Interview with Jordan Brooks Multi-Asset Strategies and Asset Allocation.pdf | otro | AQR | 2026 | Entrevista sobre estrategias multi-activo y asignación |
| Are Completion Portfolios Effective for Managing Concentrated Stock Risk.pdf | paper | AQR | 2025 | Eficacia de carteras de completación para riesgo de concentración |
| Bond Market Focus Understanding Treasury Yields with Survey Data.pdf | paper | AQR | 2025 | Expectativas de retorno en bonos usando datos de encuestas |
| Bond Market Focus Yield Curves and Mean Reverting Rate Expectations.pdf | paper | AQR | 2025 | Curvas de tipos y expectativas de reversión a la media |
| Diversifying Alternatives and the Rearview Mirror.pdf | paper | AQR | 2025 | Sesgo retrospectivo en alternativas diversificadoras |
| Equity Market Focus Interrogating the Historical Data.pdf | paper | AQR | 2025 | Análisis crítico de datos históricos de renta variable |
| Equity Market Focus Objective Expected Returns.pdf | paper | AQR | 2025 | Retornos esperados objetivos en renta variable |
| Equity Market Focus Subjective Expected Returns.pdf | paper | AQR | 2025 | Retornos esperados subjetivos en renta variable |
| Exceptional Expectations US vs Non US Equities.pdf | paper | AQR | 2025 | Comparación de expectativas de retorno EE.UU. vs resto del mundo |
| Exploring Capital Efficiency.pdf | paper | AQR | 2025 | Eficiencia de capital y beneficios de la diversificación |
| Food for Thought Tracking Error.pdf | paper | AQR | 2025 | Tracking error compensado vs no compensado en inversión |
| Go Small or Go Home.pdf | paper | AQR | 2025 | Caso para small cap internacional y emergente |
| Hold the Dip.pdf | paper | AQR | 2025 | Estrategias de compra en caídas del mercado |
| How Did We Get Here A Brief History of Expected Returns Formation.pdf | paper | AQR | 2025 | Historia de la formación de expectativas de retorno |
| How Do Investors Form Long Run Return Expectations.pdf | paper | AQR | 2025 | Formación de expectativas de retorno a largo plazo por los inversores |
| Rebuffed An Empirical Review of Buffer Funds.pdf | paper | AQR Capital Management | 2025 | Revisión empírica de fondos de reserva |
| The Hidden Value of Streaky Returns in Stock Portfolios.pdf | paper | AQR Capital Management | 2025 | Valor oculto de rendimientos irregulares |
| The Impact of Liquidation Taxes on the Lifecycle Benefits of Tax-Aware Long-Short Strategies.pdf | paper | AQR Capital Management | 2025 | Impacto impuestos liquidación en long-short fiscal |
| Why More Alpha Can Mean More Tax Benefits.pdf | paper | AQR Capital Management | 2026 | Más alpha genera más beneficios fiscales |

### `Análisis técnico` — 3 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| adam grimes the art and science of technical analysis.pdf | libro | Adam Grimes | n/d | Estructura mercado, acción precio, estrategias |
| Dow Theory in Technical Analysis.pdf | libro | George F.V. Bishop | n/d | Teoría Dow, análisis técnico, Charles Dow |
| Table-of-Contents-Definitive-Guide (2).pdf | libro | Van K. Tharp | 2008 | Tamaño posición, sistemas trading, regla oro |

### `Andy Rothman` — 11 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 1990-Institute-3-5-2025-Teachers-Workshop-Andy-Rothman-presentation-Final.pdf | otro | Andy Rothman | 1990 | China, exportaciones EE.UU., Xi, Trump, OMC |
| chinaperspectives-2053.pdf | paper | Andy Rothman | n/d | Sociedad armoniosa, Hu Jintao, sostenibilidad |
| Chinas-growing-impact-on-global-pulp-paper-markets-Hawkins-Wright.pdf | informe | Hawkins Wright | 2024 | Impacto China en mercados pulpa/papel globales |
| clsa_birdflu_chinaontheflightpath.pdf | informe | Andy Rothman | 2005 | Gripe aviar China, riesgo pandemia, implicaciones |
| how-russias-conflict-affects-chinas-ties.pdf | informe | Andy Rothman, Dr. Bobo Lo | 2022 | Impacto de invasión rusa en relaciones China-Occidente |
| matthews-asia-sinology-Jul18.pdf | informe | Andy Rothman | n/d | Economía china: consumo, beneficios y riesgo comercial |
| Panel III Rothman Written Testimony.pdf | otro | Andy Rothman | 2020 | Testimonio Comisión EE.UU.-China, relaciones |
| russiachinamay06.pdf | informe | Dr. Bobo Lo, Andy Rothman | 2006 | Relaciones Rusia-China: intereses comunes y percepciones |
| The Strategic Implications of Chinese Companies Going Global.pdf | informe | COL Heino Klinck | n/d | Implicaciones estratégicas empresas chinas globales |
| Thirsty-China.pdf | informe | Andy Rothman | 2006 | Escasez agua China, restricción recurso clave |
| What is the Future of Chinese Manufacturing?.pdf | informe | CKGSB Knowledge | n/d | Futuro manufactura china, Made in China 2025 |

### `Azvalor` — 9 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| Azvalor-Carta-1S2024.pdf | carta | Azvalor | 2024 | Resultados semestrales y método de inversión value |
| Azvalor-Carta-a-inversores-2S2025.pdf | carta | Azvalor | 2025 | Rentabilidad +20% en 2025; salida de mineras oro/plata |
| Azvalor-Carta-Semestral-1S2025.pdf | carta | Azvalor | 2025 | Metáfora hormiga/cigarra y valoraciones extremas |
| Azvalor-Carta-Semestral-2S2024.pdf | carta | Azvalor | 2024 | Año de siembra 2024; índices caros vs oportunidades value |
| Azvalor-Carta-Trimestral-3T2022.pdf | carta | Azvalor | 2022 | Fondos Azvalor +45% mientras índices caen -25% |
| Azvalor-Carta-Trimestral-4T2022-1 (1).pdf | carta | Azvalor | 2022 | Protección en caídas; proceso de inversión 20 años |
| Azvalor-Carta-Trimestral-4T2022-1.pdf | carta | Azvalor | 2022 | Protección en caídas; proceso de inversión 20 años |
| Azvalor-Carta-Trimestral-4T2022.pdf | carta | Azvalor | 2022 | Protección en caídas; proceso de inversión 20 años |
| Carta-a-inversores-Azvalor-2S2023.pdf | carta | Azvalor | 2023 | Resultados dobles dígitos; valoraciones y expectativas |

### `Horos` — 11 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| Carta-a-los-Inversores-1T25.pdf | informe | Javier Ruiz | 2025 | Inversión y gestión de fondos |
| Carta-a-los-Inversores-1T26.pdf | informe | Javier Ruiz | 2026 | Inversión y gestión de fondos |
| Carta-a-los-Inversores-2T25.pdf | informe | Javier Ruiz | 2025 | Inversión y gestión de fondos |
| Carta-a-los-Inversores-2T26.pdf | informe | Javier Ruiz | 2026 | Inversión y gestión de fondos |
| carta-a-los-inversores-3t24 (1).pdf | carta | Javier Ruiz | 2024 | Análisis de mercados asiáticos |
| carta-a-los-inversores-3t24.pdf | informe | Javier Ruiz | 2024 | Inversión y gestión de fondos |
| Carta-a-los-Inversores-3T25-.pdf | informe | Javier Ruiz | 2025 | Inversión y gestión de fondos |
| Carta-a-los-Inversores-4T24 (1).pdf | carta | Javier Ruiz | 2024 | Resultados de inversión a corto plazo |
| Carta-a-los-Inversores-4T24.pdf | informe | Javier Ruiz | 2024 | Inversión y gestión de fondos |
| Carta-a-los-Inversores-4T25.pdf | informe | Javier Ruiz | 2025 | Inversión y gestión de fondos |
| Lanzamiento-Horos-Patrimonio-1.pdf | informe | Javier Ruiz | 2025 | Lanzamiento de fondo |

### `JP Morgan` — 1 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| ceo-letter-to-shareholders-2025.pdf | carta | Jamie Dimon | 2025 | Carta a accionistas JPMorgan Chase 2026 |

### `Libros muy recomendables` — 16 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 9340.pdf | libro | David A. Moss | n/d | Guía concisa de macroeconomía |
| any-happy-returns-structural-changes-and-super-cycles-in-markets-1nbsped-1394210353-9781394210350_compress.pdf | libro | Peter Oppenheimer | n/d | Ciclos y superciclos mercados financieros |
| broken-money-why-our-financial-system-is-failing-us-and-how-we-can-make-it-better-9798988666301-9798988666318-9798988666325.pdf | libro | Lyn Alden | 2023 | Sistema financiero roto y cómo arreglarlo |
| como-gane-2000000-en-la-bolsa-_-how-i-made-20he-stock-market-spanish-edition-nicolas-darvas.pdf | libro | Nicolas Darvas | 2008 | Sistema trading Darvas 2M$ en bolsa |
| Cómo ganar dinero con las acciones PDF.pdf | libro | William J. O'Neil | n/d | Estrategia CAN SLIM para bolsa |
| el-arte-de-la-estrategia-avinash-dixit.pdf | libro | Avinash Dixit, Barry Nalebuff | n/d | Teoría juegos para negocio y vida |
| El_pequeno_libro_de_la_valoracion_de_empresas_Aswath_Damodaran.epub | libro | Aswath Damodaran | n/d | Técnicas de valoración de empresas |
| El_precio_del_tiempo_Edward_Chancellor.epub | libro | Edward Chancellor | n/d | Historia tipos interés y represión financiera |
| Flash boys.pdf | libro | Michael Lewis | n/d | High-frequency trading y reforma Wall Street |
| REQ-Acquisition-driven-Compounders-July-2025.pdf | informe | A. Hadziefendic, K. Nyland, O. Dybvad | 2025 | Compounders impulsados por adquisiciones |
| Siegel_Stocks-For-The-Long-Run.pdf | libro | Jeremy J. Siegel | 1998 | Rentabilidad bolsa largo plazo |
| strategic-risk-taking-a-framework-for-risk-management-0131990489-9780131990487-2007014971_compress.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| The art of strategy.pdf | libro | A. Dixit, B. Nalebuff | n/d | Teoría de juegos para negocio y vida |
| The Manual Of Ideas PDF.pdf | libro | John Mihaljevic | n/d | Framework value investing gestores top |
| the-art-of-strategy-a-game-theorists-guide-to-success-in-business-and-life-0393062430-9780393062434_compress.pdf | — | — | n/d | ⚠ fichero corrupto o ilegible |
| Un-paso-por-delante-de-Wall-Street.pdf | libro | Peter Lynch | n/d | Método Lynch para inversores particulares |

### `Mark Mobius` — 23 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| Emerging Markets to Reward Long-Term Investors.pdf | informe | Mark Mobius | n/d | Mercados emergentes |
| int_markmobius.pdf | entrevista | Mark Mobius | n/d | Mercados emergentes, corrupción, ley y gobernanza |
| Investing in Emerging Markets.pdf | libro | The Research Foundation of AIMR | n/d | Inversión en mercados emergentes |
| Mark Mobius Rememberance Article 2026-0425.pdf | artículo | John Cole Scott | 2026 | Mark Mobius |
| MCP Stewardship Report 2025.pdf | informe | MCP Emerging Markets LLP | 2025 | Informe de gestión |
| MCP_Culture_Report_2024 (1).pdf | informe | Mobius Capital Partners | 2024 | Cultura corporativa |
| MCP_Culture_Report_2024 (2).pdf | informe | Mobius Capital Partners | 2024 | Cultura corporativa |
| MCP_Culture_Report_2024.pdf | informe | Mobius Capital Partners | 2024 | Cultura corporativa |
| Q&A-Equity markets in "full recovery mode;" India, Brazil, Korea, Taiwan top picks- Mark Mobius.pdf | entrevista | Mark Mobius | n/d | Mercados de valores |
| Q1 2023 ESGplusC Factsheet.pdf | informe | — | 2023 | ESG y cultura corporativa |
| Q1 2024 ESGplusC Factsheet.pdf | informe | — | 2024 | ESG y cultura corporativa |
| Q1 2025 ESGplusC Factsheet.pdf | informe | — | 2025 | ESG y cultura corporativa |
| Q1 2026 ESGplusC Factsheet.pdf | informe | — | 2026 | ESG y cultura corporativa |
| Q2 2023 ESGplusC Factsheet.pdf | informe | — | 2023 | ESG y cultura corporativa |
| Q2 2024 ESGplusC Factsheet.pdf | informe | — | 2024 | ESG y cultura corporativa |
| Q2 2025 ESGplusC Factsheet.pdf | informe | — | 2025 | ESG y cultura corporativa |
| Q3 2023 ESGplusC Factsheet.pdf | informe | — | 2023 | ESG y cultura corporativa |
| Q3 2024 ESGplusC Factsheet.pdf | informe | — | 2024 | ESG y cultura corporativa |
| Q3 2025 ESGplusC Factsheet.pdf | informe | — | 2025 | ESG y cultura corporativa |
| Q4 2023 ESGplusC Factsheet.pdf | informe | — | 2023 | ESG y cultura corporativa |
| Q4 2024 ESGplusC Factsheet.pdf | informe | — | 2024 | ESG y cultura corporativa |
| Q4 2025 ESGplusC Factsheet.pdf | informe | MCP (Mobius Capital Partners) | 2025 | ESG portfolio engagement y métricas sostenibilidad |
| The inflation myth.pdf | libro | Mark Mobius | 2021 | Mito inflación y mundo deflación maravilloso |

### `Michael Mauboussin` — 11 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| article_capitalallocation.pdf | informe | Michael J. Mauboussin, Dan Callahan | 2025 | Asignación capital: resultados, análisis, evaluación 1970-2025 |
| Everything Is a DCF Model.pdf | paper | Michael J. Mauboussin, Dan Callahan | 2025 | DCF como mantra para valorar activos generadores caja |
| Expectations Investing- Reading Stock Prices for Better Returns.pdf | paper | Michael J. Mauboussin | 2006 | Marco conceptual expectations investing vs fundamentales |
| Expectations Investing.pdf | libro | Michael J. Mauboussin, Alfred Rappaport | n/d | Leer precios acción para mejores retornos |
| Investment Process Growth ROIC & ROIIC as LongTerm Value Drivers.pdf | paper | Gregory Blotnick | 2025 | Crecimiento, ROIC, ROIIC como drivers valor largo plazo |
| Mauboussin-Trading-Stages-In-A-Company-Life-Cycle-09-26-23.pdf | paper | Michael J. Mauboussin, Dan Callahan | 2023 | Etapas ciclo vida empresa y asignación capital |
| mauboussin.pdf | libro | Michael J. Mauboussin | n/d | Skill vs luck en negocios, deportes, inversión |
| Measuring the moat.pdf | paper | Michael J. Mauboussin, Dan Callahan | 2025 | Medir magnitud y sostenibilidad ventaja competitiva (moat) |
| Michael Mauboussin – Base Rate Books (2015-2016).pdf | informe | Michael J. Mauboussin, Dan Callahan | 2015 | Tasas base crecimiento ventas/beneficios para forecasting |
| Michael Mauboussin – Research, Articles and Interviews (2017-2020).pdf | colección | Michael J. Mauboussin, Dan Callahan, Darius Majd | 2017 | Investigación variada: passive investing, longevity, M&A, diversity |
| Thirty Years- Ten Attributes of Great Investors.pdf | informe | Michael J. Mauboussin, Dan Callahan, Darius Majd | 2016 | Diez atributos grandes inversores fundamentales |

### `Michael Pettis` — 14 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 4-AlbertRecio_MichaelPettis-MatthewCKlein_Guerras-comerciales.pdf | reseña | Albert Recio Andreu (reseñador) / Pettis, Klein (autores) | n/d | Guerras comerciales como guerras de clase, distribución renta |
| Aaron Benanav, Asimetr as mundiales, NLR 125.pdf | artículo | Aaron Benanav | 2020 | Asimetrías mundiales, guerras comercio como conflicto clase |
| After the fall The future of global cooperation.pdf | informe | Frieden, Pettis, Rodrik, Zedillo | 2012 | Futuro cooperación global tras crisis financiera |
| China Does Not Need to Grow at 7.5 Percent _ Carnegie Endowment for International Peace.pdf | artículo | Michael Pettis | n/d | Mito crecimiento PIB China 7.5%, ingreso hogares importa |
| China’s Export Competitiveness and the Renminbi _ Carnegie Endowment for International Peace.pdf | artículo | Michael Pettis | 2005 | Rebalanceo China, renminbi, competitividad exportaciones |
| Foreign Capital Inflows Don’t Lower U.S. Interest Rates _ Carnegie Endowment for International Peace.pdf | artículo | Michael Pettis | n/d | Entradas capital extranjero no bajan tipos EE.UU., impuesto capital |
| How Trade Can Reinforce Income Inequality _ Carnegie Endowment for International Peace.pdf | paper | Michael Pettis | 2014 | Comercio refuerza desigualdad de ingresos |
| Is China’s High-Quality Investment Output Economically Viable_ _ Carnegie Endowment for International Peace.pdf | paper | Michael Pettis | n/d | Sobreinversión china vs infraestructura calidad |
| las-guerras-comerciales-son-guerras-de-clases-las-guerras-comerciales-son-guerras-de-clases-9788412613049_compress.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| Michael Pettis The Great Rebalancing.pdf | reseña/libro | Reseñador anónimo | n/d | Rebalanceo global: comercio, conflicto, EE.UU.-China |
| pettis.pdf | artículo/artículo F&D | Michael Pettis | 2025 | Aranceles son distracción; transferencias ingresos clave |
| Policy Brief 24 13 Mistaken identities make for bad trade policy.pdf | informe/policy brief | Maurice Obstfeld | 2024 | Déficit comercial EE.UU.: identidades contables vs causas |
| What GDP Means in a Soft Budget Economy Like China _ Carnegie Endowment for International Peace.pdf | paper | Michael Pettis | n/d | PIB en economía de presupuestos blandos (China) |
| What Will It Take for China’s GDP to Grow at 4–5 Percent Over the Next Decade_ _ Carnegie Endowment for International Peace.pdf | paper | Michael Pettis | n/d | Crecimiento China 4-5%: inversión vs consumo |

### `Nomura` — 8 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 2025.pdf | informe/sostenibilidad | Nomura Group | 2025 | Informe sostenibilidad Nomura: net zero, ESG, finanzas |
| 2025_all.pdf | informe/integrado | Nomura Holdings | 2025 | Informe integrado 100 años Nomura: historia, estrategia |
| 240626_e.pdf | informe/20-F SEC | Nomura Holdings | 2024 | Form 20-F: informe anual SEC ejercicio 2024 |
| all.pdf | informe/sostenibilidad | Nomura Group | n/d | Sostenibilidad: gobernanza, net zero, finanzas verdes |
| nomura_report_all 2020.pdf | informe/integrado | Nomura Holdings | 2020 | Informe integrado: finanzas sostenibles, divisiones |
| nomura_report_all 2022.pdf | informe/integrado | Nomura Holdings | 2022 | Visión 2025: crecimiento sostenible, resolución problemas |
| nomura_report_all2023.pdf | informe/integrado | Nomura Holdings | 2023 | Creación valor: retail, asset mgmt, wholesale, ESG |
| nomura_report_all_2021.pdf | informe/integrado | Nomura Holdings | 2021 | Próxima etapa crecimiento: visión, materialidad, ESG |

### `Pershing Square Holdings` — 13 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| Pershing-Square-Holdings-Ltd.-2019-Annual-Report.pdf | informe/anual | Pershing Square Holdings | 2019 | Informe anual 2019: inversiones, riesgos, gobernanza |
| Pershing-Square-Holdings-Ltd.-2020-Annual-Report-1.pdf | informe/anual | Pershing Square Holdings | 2020 | Informe anual 2020: posiciones, rendimiento, riesgos |
| Pershing-Square-Holdings-Ltd.-2021-Annual-Report.pdf | informe | Pershing Square Holdings, Ltd. | 2021 | Informe anual 2021 de Pershing Square Holdings |
| Pershing-Square-Holdings-Ltd.-2022-Annual-Report.pdf | informe | Pershing Square Holdings, Ltd. | 2022 | Informe anual 2022 de Pershing Square Holdings |
| Pershing-Square-Holdings-Ltd.-2023-Annual-Report.pdf | informe | Pershing Square Holdings, Ltd. | 2023 | Informe anual 2023 de Pershing Square Holdings |
| Pershing-Square-Holdings-Ltd.-2024-Annual-Report-1-2.pdf | informe | Pershing Square Holdings, Ltd. | 2024 | Informe anual 2024 de Pershing Square Holdings |
| Pershing-Square-Holdings-Ltd.-2025-Annual-Report.pdf | informe | Pershing Square Holdings, Ltd. | 2025 | Informe anual 2025 de Pershing Square Holdings |
| Pershing-Square-Holdings-Ltd.-June-2020-Interim.pdf | informe | Pershing Square Holdings, Ltd. | 2020 | Estados financieros intermedios junio 2020 |
| Pershing-Square-Holdings-Ltd.-June-2021.pdf | informe | Pershing Square Holdings, Ltd. | 2021 | Estados financieros intermedios junio 2021 |
| Pershing-Square-Holdings-Ltd.-June-2022-Interim.pdf | informe | Pershing Square Holdings, Ltd. | 2022 | Informe intermedio junio 2022 |
| Pershing-Square-Holdings-Ltd.-June-2023-Interim.pdf | informe | Pershing Square Holdings, Ltd. | 2023 | Informe intermedio junio 2023 |
| Pershing-Square-Holdings-Ltd.-June-2025-Interim.pdf | informe | Pershing Square Holdings, Ltd. | 2025 | Informe intermedio junio 2025 |
| PSH-2019-Interim-Financial-Statements1.pdf | informe/financiero interino | Pershing Square Holdings | 2019 | Estados financieros interinos junio 2019 |

### `Ruchir Sharma` — 2 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| India-Today.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| SDharma-2012-BRICS-sceptic.pdf | artículo | Ruchir Sharma | 2012 | Escepticismo sobre crecimiento BRICS |

### `Sectorial` — 50 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 2024 Annual Report_E.pdf | informe | TSMC | 2024 | Informe anual 2024 de TSMC |
| 2024-Kentley-Insights-Manufacturing-Report-Sample.pdf | informe | Kentley Insights | 2024 | Informe sector muebles y cocinas 2024 |
| 2025 Annual Report_E.pdf | informe | TSMC | 2025 | Información contacto TSMC 2025 |
| 2025 sustainable and inclusive growth report.pdf | informe | McKinsey & Company | 2025 | Informe crecimiento sostenible e inclusivo 2025 |
| 2025-Kentley-Insights-Retail-Sample-Report-1.pdf | informe | Kentley Insights | 2025 | Informe mercado minoristas especializados 2025 |
| 2025-pf-report-congress.pdf | informe | SEC Staff | 2025 | Informe anual uso Form PF fondos privados |
| 2025_mckinsey learning perspective.pdf | informe | McKinsey R&I Learning Lab | 2025 | Tendencias aprendizaje y desarrollo 2025 |
| 2026-fdta-machine-readable-data-report.pdf | informe | SEC Staff | 2026 | Informe semestral datos legibles por máquina |
| 2026-Kentley-Insights-Manufacturing-Report-Sample.pdf | informe | Kentley Insights | 2026 | Informe mercado fabricación muebles cocina 2026 |
| 2026-Q1_Semicon CaaS.pdf | informe | McKinsey & Company | 2026 | Creación valor semiconductores Q1 2026 |
| 25e0a7ad-3af6-4869-83c9-3841cc15f094.pdf | informe | McKinsey Global Institute | 2025 | Gráficos clave MGI 2025: productividad, comercio, clima |
| 34-105337.pdf | informe | SEC | 2026 | Informe procedimientos administrativos oct-mar 2026 |
| 9781484396209-ch05.pdf | libro | FMI / autores guía | n/d | Estados financieros para indicadores solidez financiera |
| AR2023EN.pdf | informe | Banco Mundial | 2023 | Informe anual Banco Mundial 2023 |
| AR_2025.pdf | informe | Freeport-McMoRan | 2025 | Informe anual Freeport-McMoRan 2025 cobre |
| Business Ready 2024.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| Changing-market-dynamics-Capturing-value-in-machinery-VF.pdf | informe | McKinsey & Company | n/d | Digitalización y cambios en maquinaria y automatización industrial |
| Creating value through transforming customer journeys.pdf | informe | McKinsey & Company | 2016 | Transformación de experiencias del cliente para crear valor |
| cyprus_public_sector_financialr.pdf | libro/informe | Maria Krambia-Kapardis, Colin Clark | 2010 | Informes financieros sector público Chipre |
| DDC6FCB79ADCA7D8E1C8574FD896AD3D1E606E04_C0524C662511741245E81B5F4765FE1AD552472E.PDF | informe | The Joint Corp. | 2023 | Resultados operativos Q2 2023 de franquicia de quiropráctica |
| F4D_AR_2025.pdf | informe | Banco Mundial | 2025 | Informe anual de financiamiento para el desarrollo |
| financial-sector-strategy-2026-2030.pdf | informe | EBRD | 2026 | Estrategia sector financiero EBRD 2026-30 |
| fy25-annual-whistleblower-report.pdf | informe | SEC Office of the Whistleblower | 2026 | Informe anual denunciantes SEC 2025 |
| GEI_Global_Summary_July_2025.pdf | informe | McKinsey & Company | 2025 | Perspectivas económicas globales y tensiones comerciales |
| gei_global_summary_march_2026.pdf | informe | McKinsey & Company | 2026 | Resumen global economía inteligencia mar 2026 |
| geopolitics-and-the-geometry-of-global-trade-2026-update.pdf | paper | Tiago Devesa, Jeongmin Seong, Olivia White, Nick Leung, Camillo Lamanna, Joaquín Rebled | 2026 | Geopolítica y geometría comercio global 2026 |
| GEP-Jun-2026-Regional-Highlights-LAC-SP.pdf | informe | Banco Mundial | 2026 | Perspectivas económicas para América Latina y el Caribe |
| Global Economic Prospects, January 2026.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| global-banking-annual-review-2026-precision-with-speed_final.pdf | informe | McKinsey’s Financial Services Practice | 2026 | Resultados globales de la banca y el impacto de la IA |
| ifcwork15.pdf | paper | Bruno Tissot | 2016 | Cuentas sectoriales financieras y estabilidad |
| informe global de seguros 2025- en busca del crecimiento en amrica latina (1).pdf | informe | Jaime Morales, Roberto Marchi, Salomon Spak, Sergio Waisser, Christopher Craddock | 2025 | Seguros América Latina crecimiento 2025 |
| management-report-oig-may-2026.pdf | informe | Securities and Exchange Commission | 2026 | Informe de gestión |
| Market-Research-Tools-Articles.pdf | artículo | - | n/d | Herramientas de investigación de mercado |
| mgi_big_data_exec_summary.pdf | informe | McKinsey Global Institute | 2011 | Informe de investigación |
| nasdaq-mu-2025-10K-251373321.pdf | informe | Micron Technology, Inc. | 2025 | Informe anual |
| P505272-3c838d61-08f9-41ac-a199-59990baf9b6b.pdf | informe | World Bank Group | n/d | Informe Desarrollo Mundial 2025: Estándares |
| report-security-based-swaps-062626.pdf | informe | SEC | 2026 | Informe mercado Security-Based Swaps 2025 |
| Sectoral Storylines Financial Reporting Insights from Industry Projects Upload.pdf | libro | Dr. Charmi Shah, Prof. Kritika Pancholi | 2025 | Storylines sectoriales: reporting financiero India/Australia |
| Shaw--healthcareGroupLimited.pdf | informe | Shaw healthcare (Group) Limited | 2019 | Informe anual y estados financieros 2019 |
| sustainable-and-inclusive-growth-report-2024.pdf | informe | McKinsey & Company | 2024 | Crecimiento sostenible e inclusivo 2024 |
| The-Exploration-Company_Deck_EN_compressed-006e24e7.pdf | — | — | n/d | ⚠ PDF escaneado, sin capa de texto (necesita OCR) |
| the-market-report-health-and-healthcare-management.pdf | informe | Suchi Spore | n/d | Análisis mercado gestión sanitaria EE. UU. |
| the-state-of-fashion-beauty-june-2025-f.pdf | informe | McKinsey & BoF | 2025 | Panorama industria belleza moda 2025 |
| the-state-of-organizations-2026.pdf | informe | McKinsey & Company | 2026 | Transformación organizacional e IA 2026 |
| The-US-cutting-tools-market-What-changes-lie-ahead.pdf | paper | Nick Santhanam, Jannick Thomsen, Xiaoran Tong, Shekhar Varanasi | 2018 | Mercado estadounidense herramientas de corte |
| WDR2026-Concept-Note.pdf | paper | World Bank | 2026 | Inteligencia artificial para el desarrollo |
| WEF_The_Human_Advantage_Stronger_Brains_in_the_Age_of_AI_2026.pdf | informe | World Economic Forum / McKinsey Health Institute | 2026 | Ventaja humana: cerebros fuertes en era IA |
| World Bank Group Annual Report 2025 (1).pdf | informe | World Bank Group / Executive Directors | 2025 | Informe anual Grupo Banco Mundial 2025 |
| World Bank Group Annual Report 2025.pdf | informe | World Bank Group / Executive Directors | 2025 | Informe anual Grupo Banco Mundial 2025 |
| World Development Report 2025- Standards for Development.pdf | informe | World Bank Group | 2025 | Estándares para el desarrollo 2025 |

### `Sectorial/Aswath Damodaran – Industry Data Sets y clases de valoración` — 23 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| cfprojspr25.pdf | otro | Aswath Damodaran | n/d | Proyecto finanzas corporativas syllabus primavera 2025 |
| cfsession1.mp4 | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |
| cfsyllspr25.pdf | otro | Aswath Damodaran | n/d | Syllabus finanzas corporativas primavera 2025 |
| ctrypremJuly26.xlsx | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |
| Dark_Side_of_Valuation.pdf | libro | Aswath Damodaran | 2000 | Lado oscuro valoración empresas tecnológicas |
| darkside2012full.pdf | libro | Aswath Damodaran | 2012 | Lado oscuro valoración edición 2012 |
| ERPJuly26 (1).xlsx | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |
| ERPJuly26.xlsx | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |
| fcffsimpleginzu.xlsx | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |
| histimpl.xls | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |
| histretSP.xls | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |
| HPAnnual.pdf | informe | HP / Meg Whitman | n/d | Informe anual HP 2012 plan recuperación |
| mailFilters.xml | otro | Carlos Barez | n/d | Filtros de correo electrónico |
| narrative&numbers.pdf | libro | Aswath Damodaran | 2014 | Valoración de Amazon |
| S&P500ValueJan2025 (1).xlsx | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |
| S&P500ValueJan2025.xlsx | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |
| ssrn-2429778.pdf | informe | Bradford Cornell, Aswath Damodaran | 2014 | Anatomía de Tesla |
| ssrn-3175652.pdf | paper | Aswath Damodaran | 2018 | Valoración de usuarios |
| ssrn-3501688.pdf | paper | Bradford Cornell, Aswath Damodaran | 2019 | Sobrevaloración en mercados emergentes por exceso de confianza |
| ssrn-3799691.pdf | paper | Aswath Damodaran | 2021 | Diario de inversión durante la crisis del COVID-19 |
| ssrn-3892419.pdf | paper | Aswath Damodaran | 2021 | Disrupción del proceso de salida a bolsa (IPOs, SPACs) |
| ssrn-4161010.pdf | paper | Aswath Damodaran | 2022 | Riesgo país: determinantes, medidas e implicaciones |
| uValuedata.xls | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |

### `Sectorial/B-READY_ALL_DATA_2025` — 3 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 00_B-READY-2025-DATA-README.pdf | informe | Banco Mundial | 2025 | Datos de puntuaciones empresariales para 101 economías |
| 01_B-READY-2025-PILLAR-TOPIC-SCORES.xlsx | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |
| 02_B-READY-2025-EconomyAnswer.xlsx | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |

### `Sectorial/IMF` — 35 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 0015-1947-022.0063.issue-002-en.pdf | informe | FMI | 2026 | Geoeconomía, gasto en defensa y conflictos en economía global |
| 022-article-A003-en (1).pdf | artículo | Dale Crosby-Close | 2025 | Tokenización y activos digitales en mercados financieros |
| 022-article-A003-en (2).pdf | artículo | Dale Crosby-Close | 2025 | Estructura financiera del FMI y capacidad de préstamo |
| 022-article-A003-en (3).pdf | artículo | Dale Crosby-Close | 2026 | Movilización de ingresos domésticos y política tributaria |
| 022-article-A003-en (4).pdf | artículo | Dale Crosby-Close | 2026 | Materias primas: comercio, precios y geopolítica |
| 022-article-A003-en.pdf | artículo | S. Ali Abbas, Eriko Togo | 2025 | Bonos soberanos, curvas de rendimientos y mercados |
| 1018-5941-001.2026.issue-035-en.pdf | paper | Paola Ganum, Tohid Atashbar | 2026 | Capacidad de LLMs para analizar temas macrofinancieros |
| 1018-5941-001.2026.issue-043-en.pdf | paper | Shuvam Das et al. | 2026 | Base de datos global de acciones fiscales usando GPT-4 |
| 1018-5941-001.2026.issue-060-en.pdf | paper | Andres Fernandez, Alejandro Vicondoa | 2026 | Flujos de capital a mercados emergentes: precios y cantidades |
| 1018-5941-001.2026.issue-068-en.pdf | informe | DiCaprio A, Miccoli M, Montalvao P, Usher A, Verrier J | 2026 | Controles de capital frenan pagos transfronterizos |
| 1018-5941-001.2026.issue-074-en.pdf | informe | Li B, Mancini Griffoli T, Miccoli M, Tan B, Zhang L | 2026 | Establecoins estables mediante respaldo seguro |
| 1018-5941-001.2026.issue-077-en.pdf | informe | Cavalleri MC, García-Cascante I, Mengistu A, Uña G, Wang M | 2026 | Costa Rica SUPRES plataforma tesoro digital |
| 1018-5941-001.2026.issue-093-en.pdf | informe | Adhikari S, Guo S | 2026 | Retención capital, creación empleo, oferta habilidades |
| 1018-5941-001.2026.issue-095-en.pdf | informe | Ahn J, Marieatte N, Mengel P-L, Moore D, Quast J, Tao Q, Wang H | 2026 | Patrones comercio Caribe restricción conectividad |
| 1018-5941-001.2026.issue-098-en.pdf | informe | Bergant K, Fernández A, Teoh K, Uribe M | 2026 | Restricciones flujos transfronterizos con LLM |
| 2075-8669-005.2026.issue-001-en.pdf | informe | Khanolkar N, Rozumek DL, Windsor P | 2026 | Riesgos climáticos reguladores supervisores financieros |
| 2075-8669-005.2026.issue-006-en.pdf | informe | Pattanayak S, Rivero del Paso L, Tourpe H, Cho C | 2026 | Tecnologías digitales gestión financiera pública |
| 2616-5333-087.2026.issue-001-en.pdf | informe | Gaidosch T, Islam E, Khiaonarong T, Ravikumar R, Wilson C | 2026 | Buenas prácticas regulación supervisión ciberriesgo |
| 2616-5333-087.2026.issue-004-en.pdf | informe | Tebrake J, Boukherouaa B, Danforth J, Harikrishnan N | 2026 | StatGPT IA estadísticas oficiales |
| 2663-3493-007.2025.issue-035-en.pdf | informe | IMF | 2025 | Red de seguridad financiera global |
| 2663-3493-007.2025.issue-041-en.pdf | informe | Staff FMI | 2025 | CBDC desafíos riesgos navegación |
| 2664-5912-063.2025.issue-007-en.pdf | informe | Reshidi E, Reuter M, Patel M | 2025 | CBDC impacto competencia pagos |
| 2664-5912-063.2025.issue-010-en.pdf | informe | Kao K, Chen K, Aldersey B, Forte Walker S, Soana G | 2025 | Integridad financiera CBDC minoristas |
| 2664-5912-063.2025.issue-011-en.pdf | informe | Kunaratskul T, Lannquist A, Reslow A, Zhang N | 2025 | Bancos centrales exploración reservas tokenizadas |
| 2957-4390-068.2026.issue-001-en.pdf | informe | Adrian T | 2026 | Finanzas tokenizadas |
| 2957-4390-068.2026.issue-002-en.pdf | informe | Barhoumi K, Carvalho F, Gorbanyov M, Kido Y, Koll D, Nguyen A, Ostojic D, Shang B, Tamirisa N, Toms S, Zhao Y, Dabla-Norris E | 2026 | IA implicaciones económicas financieras globales |
| 2957-4390-068.2026.issue-004-en.pdf | informe | Davidovic S, Tourpe H | 2026 | IA agente remodela pagos |
| 2959-4103-029.2026.issue-038-en.pdf | informe | Sholomytskyi Y, Hussain M, Medina Cas S | 2026 | Iraq asistencia técnica marcos macro banco central |
| 9781484368589-9781484368589.pdf | libro | Ong LL (editor) | 2014 | Guía pruebas estrés FMI métodos modelos |
| 9781513511818-9781513511818.pdf | libro | Schwartz, Fouad, Hansen, Verdier (eds.) | 2020 | Gobernanza infraestructura inversión pública |
| 9781589060944-9781589060944.pdf | libro | Khan, Nsouli, Wong (eds.) | n/d | Gestión macroeconómica programas políticas |
| 9798400200120-9798400200120.pdf | libro | Pérez Azcárraga, Matsudaira, Montagnat-Rentier, Nagy, Clark | 2022 | Administración aduanera comercio internacional |
| 9798400260391-9798400260391.pdf | informe | FMI | 2024 | Arreglos cambiarios restricciones cambio |
| CATEA2024001.pdf | otro | FMI | 2023 | Catálogo publicaciones FMI primavera-verano |
| spring-summer 2026.pdf | otro | FMI | 2026 | Catálogo publicaciones FMI primavera-verano |

### `Sectorial/Kentley insights` — 27 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 2024-Kentley-Insights-Manufacturing-Report-Sample (1).pdf | informe | Kentley Insights | 2024 | Fabricación muebles armarios mercado |
| 2024-Kentley-Insights-Manufacturing-Report-Sample.pdf | informe | Kentley Insights | 2024 | Informe sector muebles y cocinas 2024 |
| 2025-Kentley-Insights-Retail-Sample-Report-1.pdf | informe | Kentley Insights | 2025 | Informe mercado minoristas especializados 2025 |
| 2025-Kentley-Insights-Retail-Sample-Report.pdf | informe | Kentley Insights | 2025 | Comercio minorista tiendas especializadas |
| 2026-Kentley-Insights-Global-Product-Market-Size-Sample-Report.pdf | informe | Kentley Insights | 2026 | Tamaño mercado global servicios investigación |
| 2026-Kentley-Insights-Global-Services-Report-Sample.pdf | informe | Kentley Insights | 2026 | Mercado global hospitales tamaño crecimiento |
| 2026-Kentley-Insights-Manufacturing-Report-Sample.pdf | informe | Kentley Insights | 2026 | Informe mercado fabricación muebles cocina 2026 |
| 2026-Kentley-Insights-Services-Report-Sample.pdf | informe | Kentley Insights | 2026 | Servicios diseño especializado mercado |
| Inflation by Industry - Kentley Insights.pdf | informe | Kentley Insights | 2025 | Inflación industria manufacturera EEUU |
| M25 - Computer Electronics Manufacturing.pdf | informe | Kentley Insights | 2026 | Fabricación electrónica computadoras mercado |
| M25 - Furniture Manufacturing.pdf | informe | Kentley Insights | 2026 | Fabricación muebles mercado crecimiento |
| M25 - Metal Parts Products Manufacturing.pdf | informe | Kentley Insights | 2026 | Fabricación piezas metálicas productos |
| M25 - Metal Production Processing.pdf | informe | Kentley Insights | 2026 | Producción procesamiento metales mercado |
| M25 - Vehicle Transportation Equipment Making.pdf | informe | Kentley Insights | 2026 | Fabricación vehículos equipamiento transporte |
| Most Profitable Industries – Top 20 U.S. List (2026).pdf | informe | Kentley Insights | 2026 | Industrias más rentables en EE. UU. |
| S25-Accomodation Food Services.pdf | informe | Kentley Insights | 2026 | Servicios de alojamiento y comida |
| S25-Finance Insurance.pdf | informe | Kentley Insights | 2026 | Finanzas y seguros |
| S25-Health Care Social Assistance.pdf | informe | Kentley Insights | 2026 | Atención médica y asistencia social |
| S25-Information.pdf | informe | Kentley Insights | 2026 | Información |
| S25-Other Services.pdf | informe | Kentley Insights | 2026 | Otros servicios |
| S25-Professional Scientific Technical Services.pdf | informe | Kentley Insights | 2026 | Servicios profesionales y técnicos |
| S25-Real Estate Rental Leasing.pdf | informe | Kentley Insights | 2026 | Bienes raíces y alquiler |
| S25-Utilities.pdf | informe | Kentley Insights | 2026 | Servicios públicos |
| The 20 Fastest-Growing Retail Industries in 2023.pdf | informe | Kentley Insights | 2023 | Industrias minoristas de crecimiento rápido |
| The Fastest Growing Service Industries in 2026.pdf | informe | Kentley Insights | 2026 | Servicios de crecimiento rápido |
| The Top 20 Fastest-Growing Manufacturing Industries.pdf | informe | Kentley Insights | 2026 | Industrias manufactureras de crecimiento rápido |
| The Top Strategic Benchmarks to Improve Company Performance.pdf | informe | Kentley Insights | n/d | Mejora del desempeño empresarial |

### `Sectorial/McKinsey` — 72 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| ag-value-chain-trading.pdf | informe | Avinash Goyal, Tay Feder, Xavier Veillard | 2026 | Volatilidad mercados agrícolas y trading con AI/analytics |
| amid-volatility-oil-and-gas-m-and-a-abounds-heres-how-to-capture-full-value.pdf | informe | Alessandro Agosta, Kevin Van Ingelgem, Nikhil Ati | 2026 | M&A petróleo/gas y enfoque transact-to-transform |
| automotive-r-and-d-charging-ahead-in-ev-platform-development (1).pdf | informe | Johan Bengtsson, Ting Wu, Henrik Polzer et al. | 2026 | Desarrollo plataformas EV y diferenciación R&D |
| automotive-r-and-d-charging-ahead-in-ev-platform-development.pdf | informe | Johan Bengtsson, Ting Wu, Henrik Polzer et al. | 2026 | Desarrollo plataformas EV y diferenciación R&D |
| boosting-industrial-and-economic-growth-todays-titanium-economy.pdf | informe | Asutosh Padhi, Ryan Fletcher, Steffen Fuchs | 2026 | Empresas industriales small/mid-cap como motor economía EE.UU. |
| building-materials-understanding-the-keys-to-outperformance.pdf | informe | Alex Abdelnour, Imke Mattik, Jose Luis Blanco, Patrick Schulze | 2026 | Factores de éxito en industria materiales construcción |
| building-profit-resilience-in-european-private-banking.pdf | informe | Felix Wenger, Jan Quensel, Nunzio Digiacomo | 2026 | Banca privada europea: retos rentabilidad y transformación |
| dont-cancel-or-coddle-at-risk-capital-projects-challenge-them_final.pdf | informe | Erikhans Kok, Martin Linder, Sam Linder, Tom Brinded | 2025 | Gestión megaproyectos capital mediante stress testing |
| europe-on-the-move-a-conversation-with-hitachi-energys-ceo_final.pdf | informe | Lorenzo Moavero Milanesi, Andreas Schierenbeck | 2026 | Electrificación red europea y seguridad energética |
| five-client-led-shifts-reshaping-european-wealth-management.pdf | informe | Felix Wenger, Nunzio Digiacomo, Stefano Cantù | 2026 | Cambios preferencias clientes gestión patrimonial Europa |
| for-industrials-the-next-decade-belongs-to-builders (1).pdf | informe | Christian Jansen, David Fiocco, Harald Bauer, Paul Jenkins | 2026 | Business building con AI para empresas industriales/energía |
| for-industrials-the-next-decade-belongs-to-builders.pdf | informe | Christian Jansen, David Fiocco, Harald Bauer, Paul Jenkins | 2026 | Business building con AI para empresas industriales/energía |
| forging-sustainable-steel-and-more-a-talk-with-nucor-ceo-leon-topalian_final.pdf | informe | Leon Topalian, Thomas Seitz | 2025 | Estrategia Nucor: acero sostenible, data centers, cultura |
| from-aisle-to-algorithm.pdf | informe | Alexis Wolfer, Gemma D'Auria, Kristi Weaver, Sara Hudson | 2026 | Mercado belleza 2030: canales digitales y disrupción |
| gigafactory-delivery-on-time-solving-the-sop-delay-challenge.pdf | informe | McKinsey’s Operations Practice | 2026 | Soluciones para retrasos en la producción de gigafactorías de baterías |
| Global agriculture at a crossroads _ McKinsey.pdf | artículo | McKinsey | 2025 | Agricultura global en encrucijada |
| Global Energy Perspective 2025 _ McKinsey.pdf | informe | McKinsey | 2025 | Perspectiva energética global 2025 |
| global-banking-annual-review-2026-precision-with-speed_final.pdf | informe | McKinsey’s Financial Services Practice | 2026 | Resultados globales de la banca y el impacto de la IA |
| global-energy-perspective-2025.pdf | informe | McKinsey | 2025 | Perspectiva energética global |
| global-materials-perspective-2025.pdf | informe | McKinsey’s Global Energy & Materials Practice | 2025 | Demanda de materiales para la transición energética y digital |
| how kpn is building an agentic ai engine for customer care.pdf | otro | KPN x McKinsey | n/d | Implementación de IA agéntica en atención al cliente de KPN |
| How service centers shape the materials value chain _ McKinsey.pdf | artículo | Hoffmann, Lelièvre, Radtke, Kobrin | 2026 | Centros de servicio en cadena materiales |
| how-agentic-ai-can-reshape-real-estates-operating-model_final.pdf | informe | Alex Wolkomir, Ankit Kapoor, Vaibhav Gujral | 2026 | Rediseño del modelo operativo inmobiliario mediante IA agéntica |
| how-ai-is-reshaping-the-future-of-the-aec-industry (1).pdf | informe | Daniel Ahmoye, Erik Sjödin, Jose Luis Blanco | 2026 | Transformación de la industria AEC mediante el uso de IA |
| how-ai-is-reshaping-the-future-of-the-aec-industry.pdf | informe | Daniel Ahmoye, Erik Sjödin, Jose Luis Blanco | 2026 | Transformación de la industria AEC mediante el uso de IA |
| how-ai-is-reshaping-value-creation-in-residential-real-estate.pdf | informe | Alex Wolkomir | 2026 | Creación de valor en el sector inmobiliario residencial con IA |
| how-consumers-are-reshaping-the-future-of-mobility_final.pdf | informe | Moritz Rittstieg, Philipp Kampshoff, Timo Möller | 2026 | Cambios en preferencias de consumo y futuro de la movilidad |
| how-corporate-scale-up-partnering-can-boost-europes-tech-competitiveness.pdf | informe | Fernando Figueiredo, Kayla Miele, Ruben Schaubroeck, Tobias Henz | 2026 | Alianzas entre corporaciones y scale-ups para competitividad tecnológica europea |
| how-physician-ceos-hone-the-double-edged-sword-of-clinical-training.pdf | informe | Amit Shah, Laura Medford-Davis, Sanjiv Baxi | 2026 | Liderazgo de médicos en cargos de CEO en salud |
| how-titan-groups-ceo-is-transforming-a-century-old-company.pdf | informe | Marcel Cobuz | 2026 | Transformación estratégica y liderazgo en TITAN Group |
| how-to-capture-the-next-s-curve-in-commodity-trading-v3.pdf | informe | Joscha Schabram, Roland Rechtsteiner | 2025 | Estrategias para maximizar valor en el comercio de materias primas |
| humanoid-robots-in-the-construction-industry-a-future-vision.pdf | informe | Ani Kelkar, Christian Jansen, Erik Sjödin, Jose Luis Blanco | 2025 | Potencial de robots humanoides en la industria de la construcción |
| Investing in the Vaca Muerta shale formation _ McKinsey.pdf | artículo | Ortega, Di Fiori, Tapparelli, Puente | 2026 | Inversión en Vaca Muerta shale |
| japans-100-billion-dollar-opportunity-in-general-purpose-robotics.pdf | informe | Ani Kelkar, Christian Jansen, Erik Sparre, Hiroshi Odawara | 2026 | Oportunidades de Japón en robótica de propósito general |
| marissa.pdf | otro | Marissa Rietman | n/d | Estrategias de liderazgo segmentado en The Titanium Economy |
| mck_semiconductors_2024_webpdf.pdf | informe | McKinsey | 2024 | Innovación y valor en la industria de semiconductores |
| mckinsey-on-the-maritime-industry-november-2024.pdf | informe | McKinsey | 2024 | Estrategia y operaciones en la industria marítima global |
| Navigating a new era in commodity trading _ McKinsey.pdf | artículo | van der Marel, Rechtsteiner, Tywuschik | 2026 | Nueva era comercio materias primas |
| navigating-geo-currents.pdf | informe | Brooke Weddle, Cindy Levy, Ryan Brukardt | 2026 | Resiliencia en la construcción naval ante cambios geopolíticos |
| nsib-report-card-202603.pdf | informe | Ronald Reagan Institute (Zakheim, Lynch, Hoff, Snelgrove) | 1984 | Competitividad y seguridad nacional EE. UU. |
| nuclear-power-a-renaissance-in-the-making.pdf | paper | Sauer, Cramer, Kortis, Bus (McKinsey Global Institute) | 2026 | Renacimiento nuclear: inversión y SMR |
| opportunities-in-networking-optics-boosting-supply-for-data-centers.pdf | informe | Wiseman, Marcil, Hämäläinen, Sachdeva, Zhu (McKinsey) | 2025 | Óptica red 800G/1.6T para centros datos IA |
| Patrick Finn on how tension can lead to healthcare’s reinvention _ McKinsey.pdf | podcast | Patrick Finn (McKinsey) | 2026 | Tensión reinventa salud según Patrick Finn |
| Paving the way for off-highway equipment customers _ McKinsey.pdf | informe | Philipp Kampshoff, Prasad Ganorkar, Umesh Goel | 2025 | Mercado maquinaria construcción/agricultura EE.UU. y cambios demanda |
| powering-the-energy-transitions-motor-circular-rare-earth-elements.pdf | informe | van Hoey, Spiller, Göke (McKinsey Energy & Materials) | 2025 | Tierras raras circulares para transición energética |
| putting-the-pieces-together-unlocking-success-in-modular-construction.pdf | informe | Sjödin, Chandrasekaran (McKinsey Engineering/Construction) | 2025 | Construcción modular: sistemas, control, escala |
| real-estate-builds-on-new-terrain-vf.pdf | informe | Sanghvi, Wolkomir, Dimson, Norton, Gujral (McKinsey Real Estate) | 2026 | Inmobiliario: aceleración selectiva y nuevo terreno |
| reinventing-autonomous-driving-in-the-age-of-generative-ai_final (1).pdf | informe | Dominik Hepp, Marc de Jong, Martin Kellner | 2026 | Conducción autónoma y AI generativa |
| reinventing-autonomous-driving-in-the-age-of-generative-ai_final (2).pdf | informe | Dominik Hepp, Marc de Jong, Martin Kellner | 2026 | Conducción autónoma y AI generativa |
| reinventing-autonomous-driving-in-the-age-of-generative-ai_final.pdf | informe | Hepp, de Jong, Kellner (McKinsey Auto/Semiconductors) | 2026 | Conducción autónoma nativa IA generativa |
| renewables-o-and-m-reimagined-boosting-performance-with-ai-and-conventional-levers.pdf | informe | Schlosser, Langer (McKinsey Electric Power & Natural Gas) | 2026 | O&M eólicas/solar FV optimizado con IA |
| rewired-in-action-freeport-mcmoran-june-2023.pdf | caso | McKinsey Rewired (Freeport-McMoRan) | 2023 | Transformación digital/IA en minería Freeport |
| rewiring-software-delivery-for-the-agentic-era.pdf | informe | Moon, Walsh, Di Leo (McKinsey Technology) | 2026 | Entrega software 24/7 con agentes IA |
| seeing-the-full-picture-managing-the-commodity-trading-risk-triangle.pdf | informe | Petrov, Frankl, van der Marel (McKinsey Risk & Resilience) | 2025 | Gestión riesgo triángulo trading materias primas |
| solar-power-from-intermittent-sunshine-to-reliable-power_final.pdf | paper | Schlosser, Andriopoulos, Kortis, Bus (McKinsey Global Institute) | 2026 | Solar FV + baterías: inversión global y fiabilidad |
| sovereign-ai-building-ecosystems-for-strategic-resilience-and-impact.pdf | informe | Ustun, Tournesac, Bennici, Schaubroeck (McKinsey TMT/Public Sector) | 2026 | IA soberana: ecosistemas, resiliencia, $500-600M |
| state of the consumer 2026_when tech acceleration and cost pressures collide.pdf | informe | McKinsey Consumer | 2026 | Consumidor 2026: 4 tendencias tech/coste |
| state-of-food-and-beverage_the-choices-cpg-leaders-can-make-to-renew-growth_vf.pdf | informe | Miller, Sänger, Moulton, Bar Am, Habernoll, Schmutzler (McKinsey CPG) | 2026 | Alimentación/bebidas CPG: renovar crecimiento |
| talking-with-daniel-marovitz-svp-of-fintech-at-booking-com.pdf | entrevista | Marovitz (Booking.com) / Jeenah (McKinsey) | 2026 | Fintech Booking.com: pagos viaje sin fricción |
| The case for oil and gas exploration _ McKinsey.pdf | informe | Nikhil Ati, Spandan | 2026 | Brecha entre demanda petróleo/gas y exploración insuficiente |
| The real future of work in healthcare _ McKinsey.pdf | informe | Li Han, Michael Elliott, Pooja Kumar, Yenli Wong | 2026 | Crisis productividad sanitaria y flujos humano-AI |
| The technology shifts reducing AI inference costs _ McKinsey.pdf | informe | No especificado | 2026 | Reducción costes inferencia AI mediante innovación tecnológica |
| the-7-trillion-dollar-data-center-build-out-how-industrials-can-capture-their-share_final.pdf | informe | Goodpaster, Patel, Sachdeva, Huang (McKinsey TMT/Industrials) | 2026 | Centros datos $7T: oportunidad industriales/OEM |
| the-agentic-advertising-economy-from-attention-to-action.pdf | informe | Trotter, Brodherson, George, Srinath (McKinsey TMT) | 2026 | Publicidad agente IA: atención → acción |
| the-dairy-industrys-2026-playbook.pdf | informe | Karl Nilsson, Ludovic Meilhac, Coen Boutesteijn, Emmy Moore | 2026 | Prioridades lácteas 2026: costes, crecimiento, proteína |
| the-future-of-ai-in-the-insurance-industry.pdf | informe | Nick Milinkovich, Sid Kamath, Tanguy Catlin, Violet Chung | 2025 | IA generativa y agente transforma seguros |
| the-next-era-of-semiconductor-value-creation_final.pdf | paper | Marc de Jong, Syed Alam, Bas Gerdsen, Yvonne Ferrier | 2026 | Estrategia semiconductores era IA: $1.6T 2030 |
| the-turning-point-for-real-world-robotics.pdf | entrevista | Daniela Rus, Ani Kelkar | 2026 | Robótica real: hardware, IA, datos, cuerpo-cerebro |
| US consumer sentiment weakens in 2026 _ McKinsey.pdf | informe | Christina Adams, Kari Alldredge, Thomas Kilroy | 2026 | Pesimismo consumidor EE.UU. y reducción gasto discrecional |
| when-warranty-costs-rival-r-and-d-spend-remaking-vehicle-quality-with-ai_final.pdf | informe | Andreas Venus, Ben Ellencweig, Eike Reus, Martin Kellner | 2026 | Costes garantía vs I+D: calidad proactiva con IA |
| Where AI is creating real value in real estate _ McKinsey.pdf | informe | Alex Wolkomir, Ankit Kapoor, Vaibhav Gujral | 2026 | Transformación workflows inmobiliarios mediante AI agentica |
| wired-for-growth-indias-electrical-equipment-opportunity.pdf | informe | Amit V. Gupta, Bhavesh Mittal, Bikramjit Chaudhury, Rajat Gupta | 2026 | Oportunidad equipos eléctricos India: $195B 2035 |

### `Sectorial/RT--1179193872` — 13 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 2025 Annual report.pdf | informe | Rio Tinto | 2025 | Informe anual 2025 Rio Tinto: minería, sostenibilidad |
| 2025 Climate Action Plan (extract from our 2024 Annual Report).pdf | informe | Rio Tinto | 2025 | Plan Acción Climática 2025: descarbonización 50% 2030 |
| Annual Report 2025 - Climate extract.pdf | informe | Rio Tinto | 2025 | Extracto clima AR2025: Scope 1,2,3, CAP, net zero |
| Conflict Minerals Disclosure 2025.pdf | informe | Rio Tinto plc, Rio Tinto Limited | 2025 | Divulgación minerales conflicto 2025: Kennecott |
| Industry Association Disclosure 2025.pdf | informe | Rio Tinto | 2025 | Divulgación asociaciones industria: clima, alineación |
| Modern Slavery Statement 2025 [FR].pdf | informe | Rio Tinto | 2025 | Declaración esclavitud moderna 2025 (francés) |
| Modern Slavery Statement 2025.pdf | informe | Rio Tinto | 2025 | Declaración esclavitud moderna 2025: trabajo forzado |
| Scope 1, 2 and 3 Emissions Calculation and Climate Methodology - Addendum 2024.pdf | metodología | Rio Tinto | 2024 | Metodología cálculo emisiones Scope 1,2,3 2024 |
| Scope 1, 2 and 3 Emissions Calculation and Climate Methodology – 2025 Addendum.pdf | metodología | Rio Tinto | 2025 | Adenda 2025 metodología emisiones Scope 1,2,3 |
| Sustainability Fact Book 2025.xlsx | — | — | n/d | ⚠ formato no textual (hoja de cálculo, vídeo) |
| Sustainability Glossary 2025.pdf | glosario | Rio Tinto | 2025 | Glosario sostenibilidad 2025: términos clave |
| Taxes and royalties paid report 2025.pdf | informe | Rio Tinto | 2025 | Impuestos y regalías 2025: $9.9B global |
| Voluntary Principles on Security and Human Rights Report 2025.pdf | informe | Rio Tinto | 2025 | Principios Voluntarios Seguridad DDHH 2025 |

### `Sectorial/informes empresas` — 33 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 2024_Annual_Report.docx | informe | Microsoft / Satya Nadella | 2024 | Informe anual Microsoft 2024 |
| 2024_Sharholder_Letter.docx | carta | Microsoft / Satya Nadella | 2024 | Carta accionistas Microsoft 2024 |
| 2025_AnnualReport.docx | informe | Microsoft / Satya Nadella | 2025 | Informe anual Microsoft 2025 |
| 2025_Shareholder_Letter.docx | carta | Microsoft / Satya Nadella | 2025 | Carta accionistas Microsoft 2025 |
| 2026-Annual-Report-Web.pdf | informe | NVIDIA Corporation | 2026 | Informe anual NVIDIA 2026: IA y computación |
| 20260227_Nvidia_NVDA_4T25_EDI.pdf | informe | BBVA Research | 2026 | Resultados Nvidia 4T25 y guía |
| 20260331_EquityFN_ASML.pdf | informe | Equity Flash Notes | 2026 | ASML: monopolio litografía EUV |
| 9535dc7f-602f-4fc0-ba3d-ac15decc54d8.pdf | informe | Meta Platforms (SEC) | 2026 | Formulario 10-Q trimestral |
| Alphabet-GOOG-_AR_2025_WO2_TRD_WR.pdf | informe | Alphabet / Google | 2025 | Informe anual 2025: IA y nube |
| asml-2025-annual-report-based-on-ifrs.pdf | informe | ASML | 2025 | Informe anual |
| b919eb05-86d9-4412-a8ff-308be1afb070.pdf | informe | Meta Platforms, Inc | 2025 | Informe anual |
| Baidu 2024.pdf | informe | Baidu | 2024 | Informe ESG 2024 (6º) |
| Baidu 2025.pdf | informe | Baidu | 2025 | Informe ESG 2025 (7º) |
| broker+binarios.pdf | informe | Bankinter | 2026 | Análisis de mercado |
| Earnings-Presentation-Q1-2026.pdf | presentación | Meta Platforms | 2026 | Resultados Q1 2026 por geografía |
| Earnings-Presentation-Q4-2025-FINAL.pdf | presentación | Meta Platforms | 2025 | Resultados Q4 2025 por segmento |
| entire-merck-ar24.pdf | informe | Merck Group | n/d | Informe anual |
| entire-merck-ar25.pdf | informe | Merck Group | n/d | Informe anual |
| Final-Moody-s-full-report-2-2025.pdf | informe | Moody's Ratings | 2025 | Opinión crédito IBRD (Banco Mundial) |
| fs-download-summary-banking.pdf | informe | desconocido | n/d | Análisis de mercado |
| Meta-03-31-2026-Exhibit-99-1_final.pdf | carta/ comunicado | Meta Platforms | 2026 | Resultados Q1 2026: superinteligencia |
| Meta-12-31-2025-Exhibit-99-1-FINAL.pdf | carta/ comunicado | Meta Platforms | 2025 | Resultados Q4 y año 2025 |
| MOODYS-CORP_AR_BOOKMARK_2026_V1-Reduced (1).pdf | informe | Moody's Corporation | 2026 | Informe anual 2025: récord ingresos |
| MOODYS-CORP_AR_BOOKMARK_2026_V1-Reduced.pdf | informe | Moody's Corporation | 2026 | Informe anual 2025 (duplicado) |
| MSFT_FY24Q4_10K.docx | informe | Microsoft (SEC) | 2024 | Formulario 10-K año fiscal 2024 |
| MSFT_FY25q4_10K.docx | informe | Microsoft (SEC) | 2025 | Formulario 10-K año fiscal 2025 |
| novo-nordisk-annual-report-2025.pdf | informe | Novo Nordisk | 2025 | Informe anual |
| NVIDIA-2025-Annual-Report.pdf | informe | NVIDIA Corporation | 2025 | Informe anual |
| PDF_FC_SICAV_2377-2.pdf | informe | MICRON INVERSIONES, SICAV, S. A. | n/d | Informe financiero |
| Q2 2026 Earnings Deck.pdf | informe | Micron Technology, Inc. | 2026 | Resultados financieros |
| Q4-25 Earnings Deck.pdf | informe | Micron Technology, Inc. | 2025 | Resultados financieros |
| ultimos-informes-asml.pdf | informe | Bankinter | 2026 | Análisis de mercado |
| unh-reports-2025-results-and-issues-2026-outlook.pdf | informe | UnitedHealth Group, Inc. | 2025 | Resultados financieros |

### `Sectorial/informes empresas/NOVO-2025-12-31-1-en/META-INF` — 2 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| catalog.xml | otro (técnico) | Novo Nordisk | n/d | Catálogo XBRL resolución entidades |
| taxonomyPackage.xml | otro (técnico) | Novo Nordisk | n/d | Paquete taxonomía XBRL 2025 |

### `Sectorial/informes empresas/NOVO-2025-12-31-1-en/reports` — 1 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| NOVO-2025-12-31-1-en.xhtml | otro (técnico) | Novo Nordisk | 2025 | Informe XBRL inline (iXBRL) |

### `Sectorial/informes empresas/NOVO-2025-12-31-1-en/xbrl.novonordisk.com/2025-12-31` — 6 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| NOVO-2025-12-31.xsd | otro (técnico) | Novo Nordisk | 2025 | Esquema XBRL taxonomía extendida |
| NOVO-2025-12-31_cal.xml | otro | Desconocido | 2025 | Informe financiero Novo |
| NOVO-2025-12-31_def.xml | otro | desconocido | 2025 | Informe financiero |
| NOVO-2025-12-31_lab-en.xml | otro | desconocido | 2025 | Informe financiero |
| NOVO-2025-12-31_pre.xml | otro | desconocido | 2025 | Informe financiero |
| NOVO-2025-12-31_ref.xml | otro | desconocido | 2025 | Informe financiero |

### `Terry Smith - Fundsmith Letters` — 12 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 2016-annual-letter-to-shareholders.pdf | carta | Terry Smith (Fundsmith) | 2016 | Carta anual Fundsmith Equity Fund 2016 |
| 2021-fef-annual-letter-to-shareholders-web.pdf | carta | Terry Smith (Fundsmith) | 2021 | Carta anual Fundsmith Equity Fund 2021 |
| 2023-fef-annual-letter-to-shareholders.pdf | carta | Terry Smith (Fundsmith) | 2023 | Carta anual Fundsmith Equity Fund 2023 |
| 2025-fef-annual-letter-web.pdf | carta | Terry Smith (Fundsmith) | 2025 | Carta anual Fundsmith Equity Fund 2025 |
| annual-letter-to-shareholders-2015.pdf | carta | Terry Smith (Fundsmith) | 2015 | Carta anual Fundsmith Equity Fund 2015 |
| annual-letter-to-shareholders-2017.pdf | carta | Terry Smith (Fundsmith) | 2017 | Carta anual Fundsmith Equity Fund 2017 |
| annual-letter-to-shareholders-2018.pdf | carta | Terry Smith (Fundsmith) | 2018 | Carta anual Fundsmith Equity Fund 2018 |
| annual-letter-to-shareholders-2019.pdf | carta | Terry Smith (Fundsmith) | 2019 | Carta anual Fundsmith Equity Fund 2019 |
| annual-letter-to-shareholders-2020.pdf | carta | Terry Smith (Fundsmith) | 2020 | Carta anual Fundsmith Equity Fund 2020 |
| annual-letter-to-shareholders-2022.pdf | carta | Terry Smith (Fundsmith) | 2022 | Carta anual Fundsmith Equity Fund 2022 |
| fundsmith-annual-letter-to-shareholders-2024.pdf | carta | Terry Smith (Fundsmith) | 2024 | Carta anual Fundsmith Equity Fund 2024 |
| fundsmith-equity-fund-semi-annual-letter-to-shareholders-2026.pdf | carta | Terry Smith (Fundsmith) | 2026 | Carta semestral Fundsmith Equity Fund H1 2026 |

### `_inbox/azvalor` — 1 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| README.md | otro | — | n/d | Bandeja de entrada Horos AM |

### `_inbox/cobas` — 1 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| README.md | otro | — | n/d | Bandeja de entrada Horos AM |

### `_inbox/horos` — 1 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| README.md | otro | — | n/d | Bandeja de entrada Horos AM |

### `cobas` — 12 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| ComentarioSemestral1S2023.pdf | informe | Desconocido | 2023 | Comentario Semestral 1S 2023 |
| ComentarioSemestral1S2024.pdf | informe | Desconocido | 2024 | Comentario Semestral 1S 2024 |
| ComentarioSemestral1S2025.pdf | informe | Desconocido | 2025 | Comentario Semestral 1S 2025 |
| ComentarioSemestral2S2023.pdf | informe | Desconocido | 2023 | Comentario Semestral 2S 2023 |
| ComentarioSemestral2S2024.pdf | informe | Desconocido | 2024 | Comentario Semestral 2S 2024 |
| ComentarioSemestral2S2025.pdf | informe | Cobas AM / Carlos Barez Sánchez | 2025 | Comentario semestral 2S2025: rentabilidades +26%/+53% y ventas Avio/Samsung |
| ComentarioTrimestral1T2022.pdf | informe | Cobas AM | 2022 | Comentario 1T2022: inflación 7-9%, value investing, activos reales, energía |
| ComentarioTrimestral2T2022.pdf | informe | Cobas AM | 2022 | Comentario 2T2022: caídas -8%/-1%, inflación >8%, subidas tipos Fed/BCE |
| ComentarioTrimestral3T2022.pdf | informe | Cobas AM | 2022 | Comentario 3T2022: 3 trimestres caídas, value investing, ROCE 25-30%, PER 5-6x |
| ComentarioTrimestral4T2021.pdf | informe | Cobas AM | 2021 | Comentario 4T2021: +34%/+21% 2021, inflación transitoria vs persistente, value |
| ComentarioTrimestral4T2022.pdf | informe | Cobas AM | 2022 | Comentario 4T2022: +11%/+4% 2022, PER 5,5x/6,9x, fin dinero fácil, burbujas |
| NotaDeInversionOctubre2023.pdf | informe | Cobas AM | 2023 | Nota oct 2023: +9,7%/+17,9% YTD, rotación pesos, +115%/+100% 3 años |

### `ray_dalio` — 5 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| An In-Depth Look at Deleveragings.pdf | paper | Ray Dalio | 2012 | Proceso y tipos de deleveraging |
| principios-para-enfrentarse-al-nuevo-orden-mundial.pdf | libro | Ray Dalio | n/d | Ciclos históricos y orden mundial |
| PRINCIPLES BY RAY DALIO.pdf | libro | Ray Dalio | 2011 | Principios de vida y gestión |
| Principles_Life_and_Work_Ray_Dalio.pdf | libro | Ray Dalio | n/d | Principios de vida y trabajo |
| The All Weather Story.pdf | paper | Ray Dalio / Bridgewater | 2012 | Estrategia All Weather y risk parity |

### `warren_buffett` — 25 ficheros

| Fichero | Tipo | Autor | Año | Tema |
|---|---|---|---|---|
| 2000pdf.pdf | carta | Warren Buffett | 2000 | Rendimiento Berkshire vs S&P 500 |
| 2001pdf.pdf | carta | Warren Buffett | 2001 | Rendimiento Berkshire vs S&P 500 |
| 2002pdf.pdf | carta | Warren Buffett | 2002 | Rendimiento Berkshire vs S&P 500 |
| 2003ltr.pdf | carta | Warren Buffett | 2003 | Rendimiento Berkshire vs S&P 500 |
| 2004ltr.pdf | carta | Warren Buffett | 2004 | Rendimiento Berkshire vs S&P 500 |
| 2005ltr.pdf | carta | Warren Buffett | 2005 | Rendimiento Berkshire vs S&P 500 |
| 2006ltr.pdf | carta | Warren Buffett | 2006 | Rendimiento Berkshire vs S&P 500 |
| 2007ltr.pdf | carta | Warren Buffett | 2007 | Rendimiento Berkshire vs S&P 500 |
| 2008ltr.pdf | carta | Warren Buffett | 2008 | Rendimiento Berkshire vs S&P 500 |
| 2009ltr.pdf | carta | Warren Buffett | 2009 | Rendimiento Berkshire vs S&P 500 |
| 2010ltr.pdf | carta | Warren Buffett | 2010 | Rendimiento Berkshire vs S&P 500 |
| 2011ltr.pdf | carta | Warren Buffett | 2011 | Rendimiento Berkshire vs S&P 500 |
| 2012ltr.pdf | carta | Warren Buffett | 2012 | Rendimiento Berkshire vs S&P 500 1965-1982 |
| 2013ltr.pdf | carta | Warren Buffett | 2013 | Rendimiento Berkshire vs S&P 500 1965-1982 |
| 2014ltr.pdf | carta | Warren Buffett | 2014 | Rendimiento Berkshire vs S&P 500 1965-1981 |
| 2015ltr.pdf | carta | Warren Buffett | 2015 | Rendimiento Berkshire vs S&P 500 1965-1984 |
| 2016ltr.pdf | carta | Warren Buffett | 2016 | Rendimiento Berkshire vs S&P 500 1965-1989 |
| 2017ltr.pdf | carta | Warren Buffett | 2017 | Rendimiento Berkshire vs S&P 500 1965-1982 |
| 2018ltr.pdf | carta | Warren Buffett | 2018 | Rendimiento Berkshire vs S&P 500 1965-1984 |
| 2019ltr.pdf | carta | Warren Buffett | 2019 | Rendimiento Berkshire vs S&P 500 1965-1980 |
| 2020ltr.pdf | carta | Warren Buffett | 2020 | Rendimiento Berkshire vs S&P 500 1965-1979 |
| 2021ltr.pdf | carta | Warren Buffett | 2021 | Rendimiento Berkshire vs S&P 500 1965-1979 |
| 2022ltr.pdf | carta | Warren Buffett | 2022 | Rendimiento Berkshire vs S&P 500 1965-1979 |
| 2023ltr.pdf | carta | Warren Buffett | 2023 | Homenaje a Charlie Munger y carta anual |
| 2024ltr-2.pdf | carta | Warren Buffett | 2024 | Carta anual a accionistas Berkshire Hathaway |
