---
title: "arXiv y preprints como senal"
tipo: concepto
tags: [arxiv, preprints, academico]
fecha: 2026-08-31
agente: cazador
squad: Cazador de Fuentes & Evidence (Cazador)
status: sonde
---

# arXiv y preprints como senal

> Fuentes base:
> - arXiv API for Metadata (consultas propias, 2026-08-31) - https://info.arxiv.org/help/api/index.html
> - arXiv monthly submissions - https://arxiv.org/show_monthly_submissions
> - arXiv blog: "arXiv now hosts over 3 million articles" (2026-07-09) - https://blog.arxiv.org/2026/07/09/arxiv-now-hosts-over-3-million-articles/
> - arXiv blog: "Updated endorsement policy" (2026-01-21) - https://blog.arxiv.org/2026/01/21/attention-authors-updated-endorsement-policy/
> - McLean & Pontiff, "Does Academic Research Destroy Stock Return Predictability?" (NBER w20591) - https://www.nber.org/papers/w20591

## 1. Resumen ejecutivo

Un *preprint* es un articulo cientifico publicado por sus autores antes (o sin) revision por pares (*peer review*). arXiv es el mayor repositorio de este tipo: acumula mas de 3 millones de articulos (arXiv blog, 2026-07-09) y el contador oficial marcaba 3.149.926 envios totales al 31 de agosto de 2026 (https://arxiv.org/show_monthly_submissions). El interes para el inversor de largo plazo es simple: en tecnologia dura (IA, semiconductores, biotecnologia computacional, materiales, energia) la **literatura tecnica va 12-36 meses por delante del relato de mercado**. Leer preprints es una forma legal, gratuita y no consensuada de ver el pipeline antes de que llegue al *earnings call*.

Cifras propias medidas hoy con la API de arXiv (consultas por `cat` y `submittedDate`, 2026-08-31):

| Categoria | 2019 | 2022 | 2024 | 2025 |
|---|---|---|---|---|
| cs.LG (machine learning) | 19,293 | 28,722 | 39,789 | 46,017 |
| cs.AI (2025) | - | - | - | 45,154 |
| q-fin.* (finanzas, 2025) | - | - | - | 1,608 |
| Todo arXiv (2025) | - | - | - | 284,162 |

cs.LG multiplico por ~2,4x sus envios entre 2019 y 2025. La finanza cuantitativa (q-fin) sigue siendo un nicho: ~1.600 envios en 2025, menos del 0,6% del total. Es decir: **el valor de arXiv para un inversor esta mas en la tecnologia subyacente que en los papers de trading**.

## 2. Estructura / modelo

Como funciona el circuito de un preprint y donde entra el inversor:

| Etapa | Plazo tipico | Que se puede leer | Riesgo de lectura |
|---|---|---|---|
| Envio a arXiv | 1-2 dias tras subirlo | Metodo, resultados, afiliaciones, agradecimientos (financiacion) | Sin revision por pares; cero filtro de calidad estadistica |
| Difusion social (X, GitHub, HuggingFace) | dias-semanas | Reproducciones independientes, issues, codigo | Sesgo de hype; metricas de atencion no son validacion |
| Conferencia/journal | 6-18 meses | Version revisada, apendices, correcciones | Ya es semi-consenso |
| Producto / capex / guidance | 12-36 meses | Notas de prensa, IR, patentes | El precio ya lo descuenta |

Componentes utiles para el inversor:
1. **Afiliacion**: un paper firmado por el laboratorio interno de una cotizada revela prioridad estrategica y capacidad real, no marketing.
2. **Agradecimientos y hardware**: la seccion de compute ("entrenado en N GPUs durante M dias") es un proxy fisico de demanda de infraestructura.
3. **Citas cruzadas y codigo**: si terceros reproducen y construyen sobre el metodo, la senal pasa de anecdota a tendencia.
4. **Moderacion**: arXiv no revisa por pares, pero unos 300 moderadores voluntarios filtran contenido inapropiado, plagiado o duplicado, y limita el ritmo de envios a 3 papers/dia por autor (https://info.arxiv.org/help/moderation/index.html).
5. **Endosos** (*endorsement*): un autor nuevo necesita el respaldo de un autor establecido de la misma categoria (https://info.arxiv.org/help/endorsement.html); en enero de 2026 arXiv endurecio esta politica (https://blog.arxiv.org/2026/01/21/attention-authors-updated-endorsement-policy/).

## 3. Numeros clave

- 3.149.926 envios totales a 31-08-2026; ~3,15 millones de articulos disponibles (https://arxiv.org/show_monthly_submissions).
- 284,162 envios en 2025 en todo arXiv (API arXiv, consulta propia 2026-08-31) => del orden de 23.000-24.000 al mes de media.
- cs.LG: 46,017 envios en 2025 frente a 19,293 en 2019 (+139%).
- cs.AI: 45,154 envios en 2025 (categoria solapada con cs.LG por multi-listado).
- q-fin.*: 1,608 envios en 2025.
- Alfa academico: McLean & Pontiff documentan que los retornos de anomalias publicadas caen de forma material fuera de muestra y tras publicacion, con aumento de volumen y de interes corto en las carteras afectadas (https://www.nber.org/papers/w20591). La magnitud exacta citada habitualmente (~30-60% de caida) **no verificada linea a linea en esta sonda**: leer el paper antes de citar el numero.
- Numero de moderadores voluntarios de arXiv: ~300 (https://info.arxiv.org/help/moderation/index.html; cifra tambien recogida en cobertura de Nature 2026 sobre la nueva politica de endosos).

## 4. Posicion / marco conceptual

El marco es el de **ventaja informativa temporal legal**: la informacion es publica pero costosa de procesar. El foso no es el acceso (arXiv es gratis), es la **capacidad de lectura tecnica** y la paciencia para sostener una tesis 3-5 anos antes de que el consenso la valide. Encaja con [[circulo-de-competencia]] (solo funciona en el area donde Carlos puede juzgar el metodo), con ventaja informativa vs ventaja analitica y con alpha decay y anomalias publicadas.

Regla operativa: usar preprints como **generador de hipotesis y como test de falsacion de un relato**, nunca como disparador de compra. Un paper no es un flujo de caja.

Checklist minimo para leer un preprint sin enganarse:
1. Version (v1 vs v3) y si hay revision por pares posterior.
2. Quien lo firma y quien lo financia.
3. Baseline: ¿comparan contra el mejor metodo disponible o contra un rival debil?
4. ¿Hay codigo y datos? ¿Alguien independiente lo reprodujo?
5. Tamano de efecto vs coste (compute, capex, regulacion) de implementarlo.
6. Referencias: alucinaciones de citas son la senal roja moderna de paper generado con IA.

## 5. Catalizadores y riesgos

Catalizadores a favor:
- arXiv se convirtio en organizacion no lucrativa independiente en 2026 y nombro su primer CEO y consejo (https://blog.arxiv.org/2026/04/02/arxiv-is-becoming-an-independent-nonprofit/, https://blog.arxiv.org/2026/07/30/arxiv-welcomes-inaugural-ceo-and-board-of-directors/). Mas gobernanza => mas fiabilidad de la infraestructura de la que depende esta senal.
- Preservacion digital por terceros (https://blog.arxiv.org/2026/02/03/arxiv-future-proofs-access-to-research-with-third-party-digital-preservation/): el archivo historico es auditable.
- API abierta y estable: automatizable con herramientas propias (https://info.arxiv.org/help/api/index.html).

Riesgos y ruido (novedades recientes via Google News RSS, consulta "arXiv preprint AI research 2026", https://news.google.com/rss/search?q=arXiv+preprint+AI+research+2026&hl=en):
- "arXiv Takes the First Step to Combat 'AI Slop' in Submissions" (The Scientist).
- "Researchers who use hallucinated references to face arXiv ban" (Nature).
- "Research repository arXiv will ban authors for a year if they let AI do all the work" (TechCrunch).
- "arXiv introduces one-year ban for researchers who submit papers with unchecked AI-generated content" (The Next Web).

Traduccion para el inversor: **la relacion senal/ruido de los preprints esta cayendo** por inundacion de texto generado con IA. El coste de leer sube y el valor medio por paper baja. La respuesta de arXiv (endosos mas duros, sanciones de un ano) es una senal de que el problema es material, no anecdotico.

Limitaciones de esta sonda: Jina Reader devolvio 403 sobre arxiv.org (bloqueo antiabuso), asi que las cifras de arXiv se obtuvieron por API oficial y por lectura de blog.arxiv.org e info.arxiv.org. Los creditos de Exa se agotaron a mitad de la investigacion; las URL exactas de las cuatro noticias citadas quedan **no localizadas** (solo titulares del RSS de Google News). No se consultaron videos con yt-dlp.

## 6. Valoracion / implicaciones practicas

Que hacer:
- Suscribirse por API/RSS a 2-4 categorias dentro del circulo de competencia (p.ej. cs.LG, cs.AI, eess.SY, q-bio.QM) y leer solo abstracts, con un limite de tiempo semanal fijo.
- Mantener una lista de **temas**, no de tickers: cuando un tema pasa de 1 grupo a 5 grupos independientes replicandolo, se activa el trabajo fundamental.
- Cruzar el paper con fuentes primarias: 10-K/20-F, transcripciones de IR, patentes (Google Patents). El preprint plantea la hipotesis; los estados financieros la confirman.
- Guardar la fecha de lectura. Sirve para medir despues si la lectura anticipada realmente aporto ventaja o solo confirmo sesgos.

Senales de alerta:
- Paper sin codigo, sin baseline serio, con metricas nuevas inventadas por los autores.
- Referencias no verificables (riesgo de generacion automatica).
- Un preprint que "justifica" una posicion que ya se tiene: eso es *confirmation bias* con bibliografia.
- Papers de estrategias de trading con Sharpe alto y backtest corto: sin costes, capacidad ni fuera de muestra, no valen nada.

## 7. Veredicto para el inversor

arXiv es una fuente de **hipotesis tempranas de alta calidad y coste de lectura alto**, no una fuente de ideas de inversion listas para usar. Bien usado, permite entender una transicion tecnologica antes del consenso y evitar comprar el relato en su pico. Mal usado, es una maquina de racionalizar. Para Carlos (medico, con formacion cientifica y sesgo de largo plazo) la ventaja real esta en saber leer metodos y detectar exageracion, no en encontrar el paper secreto. Utilidad: alta como filtro de *bullshit*; baja como generador directo de operaciones.

## 8. Segundo orden

1. **Si todo el mundo lee preprints, el alfa se mueve otra vez.** La logica de McLean & Pontiff (https://www.nber.org/papers/w20591) aplica a cualquier senal difundida: cuando los fondos automatizan la lectura de arXiv con LLM, el preprint pasa de ventaja a *commodity*. La ventaja residual migra a lo que sigue siendo caro: juicio sobre viabilidad industrial, capex y regulacion. Ver alpha decay y anomalias publicadas y ventaja informativa vs ventaja analitica.
2. **La inundacion de papers generados con IA convierte la curacion en el activo escaso.** Si el volumen crece pero la calidad media cae, ganan valor los filtros humanos reputados (autores, laboratorios, conferencias) y pierde valor el conteo de papers como metrica. Consecuencia practica: cualquier tesis que use "numero de publicaciones" como proxy de innovacion queda contaminada desde ~2024-2026. Ver metricas que se degradan cuando se optimizan (ley de Goodhart).
3. **El compute descrito en los papers es un indicador fisico de demanda.** Si los metodos punteros empiezan a reportar menos GPU-horas por resultado (eficiencia), eso es un riesgo estructural para la tesis de infraestructura de IA, no una buena noticia para todos. Ver capex de ia y ciclo de semiconductores.
4. **Donde choca con otras fuentes**: la prensa financiera describe rupturas tecnologicas cuando ya son producto; arXiv las describe cuando aun son fragiles. Ambos extremos enganan. La disciplina de Mauboussin (base rates) exige preguntar cuantos metodos de este tipo llegaron a producto historicamente, no si este es elegante.
5. **Que vigilar a 3-5 anos**: (a) si arXiv mantiene calidad tras su independencia como nonprofit y con endosos mas estrictos; (b) si aparecen capas de verificacion/reproducibilidad con reputacion propia; (c) si la brecha temporal entre preprint y producto se acorta (eso reduce el valor de la lectura temprana); (d) si los reguladores empiezan a tratar la investigacion abierta en IA como tema de seguridad nacional, lo que reduciria la transparencia justo en la categoria mas relevante. Ver riesgo regulatorio ia y ciclos de hype tecnologico.

## 9. Fuentes consultadas

1. arXiv - Monthly submissions (total 3.149.926 envios a 31-08-2026) - https://arxiv.org/show_monthly_submissions (consultado 2026-08-31)
2. arXiv - Usage statistics - https://arxiv.org/stats/main (consultado 2026-08-31)
3. arXiv - API for Metadata (base de las consultas propias por categoria y fecha) - https://info.arxiv.org/help/api/index.html (consultado 2026-08-31)
4. arXiv - Content Moderation (sin peer review, ~300 moderadores, limite de 3 papers/dia) - https://info.arxiv.org/help/moderation/index.html (consultado 2026-08-31)
5. arXiv - Endorsement - https://info.arxiv.org/help/endorsement.html (consultado 2026-08-31)
6. arXiv blog - "Attention authors: updated endorsement policy" - https://blog.arxiv.org/2026/01/21/attention-authors-updated-endorsement-policy/ (2026-01-21)
7. arXiv blog - "arXiv now hosts over 3 million articles" - https://blog.arxiv.org/2026/07/09/arxiv-now-hosts-over-3-million-articles/ (2026-07-09)
8. arXiv blog - "arXiv is becoming an independent nonprofit" - https://blog.arxiv.org/2026/04/02/arxiv-is-becoming-an-independent-nonprofit/ (2026-04-02)
9. arXiv blog - "arXiv welcomes inaugural CEO and Board of Directors" - https://blog.arxiv.org/2026/07/30/arxiv-welcomes-inaugural-ceo-and-board-of-directors/ (2026-07-30)
10. arXiv blog - "arXiv future-proofs access to research with third-party digital preservation" - https://blog.arxiv.org/2026/02/03/arxiv-future-proofs-access-to-research-with-third-party-digital-preservation/ (2026-02-03)
11. McLean & Pontiff - "Does Academic Research Destroy Stock Return Predictability?" NBER Working Paper 20591 - https://www.nber.org/papers/w20591
12. Google News RSS - titulares sobre "AI slop" y sanciones de arXiv (The Scientist, Nature, TechCrunch, The Next Web) - https://news.google.com/rss/search?q=arXiv+preprint+AI+research+2026&hl=en (consultado 2026-08-31; URLs de articulo individuales no localizadas)
