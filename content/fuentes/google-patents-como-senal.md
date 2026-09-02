---
title: "Google Patents como senal temprana"
tipo: analisis
tags: [patentes, senal, innovacion]
fecha: 2026-08-31
agente: cazador
squad: Cazador de Fuentes & Evidence (Cazador)
status: sonde
---

# Google Patents como senal temprana

> Fuentes base: OSAM/Quant IP "Mispriced Innovation" (https://osam.com/pdfs/research/Mispriced-Innovation%E2%80%93Patents-as-a-Leading-Indicator-for-Earnings-Growth.pdf); Hirshleifer, Hsu & Li "Innovative Efficiency and Stock Returns" (SSRN 1721217); Google Patents Public Datasets en BigQuery (https://github.com/google/patents-public-data); IPO/Harrity Top 300 US Patents 2024 (https://parolaanalytics.com/parolanews/2024-top-patent-owners-uspto/); charla del equipo de Google Patents en BigQuery (https://www.youtube.com/watch?v=cwC-MwFCMEU).

## 1. Resumen ejecutivo

Una patente es, en esencia, un derecho legal de explotacion exclusiva (normalmente 20 anos) a cambio de publicar el invento. Esa publicacion es el punto clave para el inversor: a diferencia de la I+D (un gasto contable opaco) o de los "fosos" (narrativa cualitativa), las patentes son **datos publicos, estructurados, fechados y trazables por empresa**. Su flujo (concesiones por ano, citas recibidas, amplitud de las reclamaciones, velocidad de solicitud) es una senal de que una ventaja competitiva se esta construyendo *antes* de que aparezca en la cuenta de resultados.

La tesis central: el flujo de patentes anticipa ventajas y disrupcion porque el mercado *sub-reacciona* a la informacion de innovacion. Dos razones documentadas: (a) la "atencion limitada" del inversor (limited attention) — la informacion tecnica es dificil de procesar y se ignora; (b) la incertidumbre de tiempo/magnitud del retorno. El resultado es una ineficiencia explotable.

Cifras clave (con fuente):
- El "universo de patentes" (empresas con >=1 patente concedido en el ultimo ano) batió al universo "US All Stocks" en un **2,2% anualizado** (periodo 1990-2017, holding 1 ano, equal-weight), y un **3,8%** frente a empresas sin patentes; con una tasa base de exito del **72,5% a 1 ano** y **83,9% a 3 anos** (OSAM/Quant IP, 2019).
- La "eficiencia innovadora" (IE = patentes concedidas / capital de I+D acumulado) predice rendimientos: la cartera de alta IE superó a la de baja IE en **38 puntos basicos/mes**, con alphas de **45-46 pb/mes** sobre Carhart 4-factor (Hirshleifer, Hsu & Li, 2010).
- Google Patents Public Datasets contiene **98.176.830 publicaciones** de patentes (~899 GB) consultables gratis en BigQuery (Google/IFI CLAIMS).

## 2. Estructura / modelo

El ecosistema de senales se organiza en capas, de lo mas simple (volumen) a lo mas predictivo (disrupcion ex-ante):

| Capa | Metrica | Que anticipa | Fuente primaria |
|------|---------|--------------|-----------------|
| Volumen | Nº de concesiones/ano por empresa | Liderazgo de I+D sostenido | USPTO, Google Patents |
| Eficiencia | Patentes por $ de I+D (IE) | Subvaloracion + ROA alto | NBER/USPTO (Hirshleifer et al.) |
| Calidad | Citas recibidas (forward citations) | Valor economico del invento | Trajtenberg; TIM Review |
| Amplitud | Breadth de las reclamaciones (claim breadth) | Foso amplio vs. nicho | Google Patents ML model |
| Disrupcion | Indice CD (Citation Disruption) / KI (breakthrough) | Reconfiguracion del campo | Research Policy 2025; Sci Reports 2026 |
| Paisaje | Patent landscaping por embeddings (ML) | Emergencia de un subcampo | Google Cloud Blog 2019 |

El flujo se consulta asi: `patents.google.com` (busqueda libre y APIs), el dataset `patents-public-data.patents.publications` en BigQuery (SQL + join con datos propios), y herramientas de "landscaping" que usan embeddings neuronales (representaciones vectoriales del texto completo de cada patente) para medir similitud y detectar clusters emergentes (Google Cloud Blog, 2019; charla Google Patents, 2019).

Mecanica de la senal temprana: la solicitud se presenta hoy, se concede ~2 anos despues (lag application-grant), y las citas que revelan impacto tardan anos mas. Quien monitoriza *solicitudes* y *concesiones tempranas* de un campo ve la fractalizacion de un mercado mucho antes que los analistas de consenso.

## 3. Numeros clave

- **USPTO 2024**: 324.042 patentes de utilidad concedidas (IPO/Harrity, +4% vs 2023); Parola Analytics (ejercicio fiscal oct-2023/sep-2024) cifra 326.921. Top assignees: Samsung (10.084 en FY2024; 9.304 en lista IPO), LG (5.039), TSMC (4.167, +27%), Qualcomm (3.775), Huawei (3.184, +35%), IBM (3.071, -25%), Apple (3.062, +27%), Alphabet (2.775) (Parola Analytics; IPO Top 300).
- **Google Patents Public Datasets**: 98.176.830 filas, ~899 GB; actualizado a 2018 en la descripcion del repo (Google/IFI CLAIMS). Incluye CPC (Cooperative Patent Classification), citas, asignaciones y embeddings.
- **IE efecto**: alta-IE batio baja-IE en 38 pb/mes; el factor EMI (Efficient Minus Inefficient) alcanzo Sharpe 0.25, superior a mercado/Size/Value/Momentum (Hirshleifer et al., 2010).
- **Disrupcion ex-ante**: un modelo de ML sobre el indice CD en patentes de IA predijo "disruptividad top-5%" con accuracy 0.914 y precision 0.271 (recordar: precision baja = muchos falsos positivos, util como *criba* no como veredicto) (Sci Reports, 2026-06-17).
- **KI vs CD**: sobre 6+ millones de patentes USPTO (1980-2017), ambos indices capturan breakthroughs; el CD cae con el tiempo (campos mas consolidados) y el KI fluctua con el ciclo economico (Research Policy, 2025).

## 4. Posicion / marco conceptual

La patente es el puente entre Intangibles (el "activo invisible" que la contabilidad ignora) y el [[Foso-economico]] real. No toda patente es un foso, pero el *flujo sostenido y citado* si lo es: construye un [[Moat]] defensible porque bloquea a competidores y genera royalties.

Conecta con la idea de Calidad de la empresa: la eficiencia innovadora es un proxy de calidad de gestion (hacer mas con menos I+D) y, a la vez, de [[Margen-de-seguridad]] oculto (subvaloracion por limited attention). Para un inversor de largo plazo estilo Inversion en calidad, vigilar el flujo de patentes de una posicion es un "leading indicator" mas limpio que las previsiones de consenso.

El riesgo de Comoditizacion rapida: en campos de ciclo corto el foso se evapora; por eso el flujo debe leerse en relacion al ritmo de citas entrantes (senal de obsolescencia) y al CD (senal de que alguien esta reescribiendo las reglas).

## 5. Catalizadores y riesgos

Catalizadores recientes (Google News RSS, 2026-08-31):
- "China supera a EEUU en investigacion y esta a punto de quitarle el liderazgo tecnologico" (El Confidencial) — el flujo de patentes chino (Huawei +35% en USPTO 2024) es el sintoma de esa transferencia de ventaja.
- "El 6G no se esta desarrollando para que tu movil vaya mas rapido: es pura geopolitica. Y China va con el acelerador a fondo" (Xataka Movil) — la carrera 5G+/6G es legible en patentes CPC de telecom.
- "Robots humanoides 2026: China domina con 90% del mercado" y "Tesla cambia el volante... con una nueva patente" (Infobae) — disrupcion de hardware detectable por landscaping.
- "Una segunda empresa china logra fabricar chips de 7nm sin la tecnologia que EE.UU. le veto" — salto de capacidad visible en patentes de litografia/fabricacion.

Riesgos de la propia senal:
- **Ruido de citas** (citation noise): no toda cita es valor; hay que filtrar relevancia (TIM Review).
- **Lag y asimetria**: las patentes concedidas hoy reflejan I+D de hace 2+ anos; son senal temprana, no tiempo real.
- **Sesgo de pais/campo**: el valor por patente varia muchisimo entre farmacia, semiconductores y software; comparar quintiles dentro de GICS, no en bruto.
- **Calidad legal**: concesion != validez litigada; un foso sobre una patente invalidada es humo.

## 6. Valoracion / implicaciones practicas

Para el inversor particular (y para la CIO filtrando ideas):
1. **Screening barato**: consultar `patents.google.com` o BigQuery para ver si una empresa objetivo tiene flujo de concesiones creciente y citas entrantes altas en su nicho. Es gratis y publico.
2. **Alerta de disrupcion**: si el CD/KI de un campo sube y aparecen actores nuevos (paises emergentes, startups), es senal de que el [[Foso-economico]] de un valor en cartera esta en riesgo.
3. **Confirmacion de tesis**: una empresa con alta IE (muchas patentes por euro de I+D) y baja cobertura de analistas es candidata a Ineficiencia de mercado por limited attention.
4. **No operar en solitario**: la patente es una senal de *calidad y timing*, no un disparador de precio. Combinarla con [[Valoracion]] y Catalizadores.

Senal de alerta: caida sostenida del CD de un campo donde tienes exposicion = el lider podria estar siendo rodeado.

## 7. Veredicto para el inversor

El flujo de patentes es una de las pocas senales tempranas *publicas y cuantificables* de ventaja competitiva y disrupcion, con respaldo académico (OSAM, Hirshleifer et al.) y herramientas gratuitas (Google Patents/BigQuery). No es un oráculo de precio, pero sí un radar de calidad que el mercado ignora por complejidad. Para un inversor de largo plazo, monitorizarlo es barato y asimetrico; ignorarlo es regalar informacion por delante.

## 8. Segundo orden (OBLIGATORIO y central en este wiki)

- **Consecuencia de la consecuencia**: si el flujo de patentes anticipa el EPS (OSAM muestra EPS mas alto en carteras con patentes), entonces los gestores cuantitativos que lo incorporan comprimiran la ineficiencia (limited attention) con el tiempo. El borde de la senal se estrecha a medida que Factor Innovacion se hace popular — como paso con Value y Momentum. Carlos deberia tratarla como senal de Borde dinamico, no permanente.
- **Choca con otras fuentes del Cerebro**: la narrativa de China liderazgo tecnologico se confirma aqui por datos duros (Huawei +35%, TSMC +27% en USPTO 2024), lo que tensiona tesis de "prima de seguridad occidental" en semiconductores. Pero choca con el optimismo de Reshoring: las patentes se conceden donde se inventa, no donde se fabrica; el foso de diseno puede quedar en Asia aunque la produccion vuelva a EE.UU.
- **Disrupcion vs. Foso**: un alto CD en un campo ajeno puede ser la Disrupcion tecnologica que destruye un [[Foso-economico]] que Carlos dio por sentado (p.ej. combustion frente a electrico, o CPU frente a NPU). La senal de patente es, por tanto, tambien un sistema de *early-warning* de obsolescencia de tesis.
- **Conexion con Capitalismo de intangibles**: en la economia intangible, el flujo de patentes es el sustituto del "CAPEX visible" de antaño; quien no lo mide, mide medias moviles de un mundo que ya no existe.
- **Que vigilar a 3-5 anos**: (1) si la UE/EE.UU. endurecen patentes de software e IA, el flujo se redistribuye y cambia el foso de Big Tech; (2) si China normaliza su propio indice CD dominante en 6G/robótica humanoide, el liderazgo de Magnificent Seven en esos campos sera cuestionable; (3) maduracion de modelos ML de screening disruptivo (Sci Reports 2026) que democratizan la senal y la degradan. Paginas sugeridas a crear: [[Google-Patents-como-senal]], Indice CD disrupcion, Eficiencia innovadora IE, Factor patentes OSAM, Landscaping de patentes.

## 9. Fuentes consultadas

1. OSAM (Daniel Nitiutomo, CFA; Philip Creutzmann & Lucas von Reuss, Quant IP) — "Mispriced Innovation – Patents as a Leading Indicator for Earnings Growth" (julio 2019) - https://osam.com/pdfs/research/Mispriced-Innovation%E2%80%93Patents-as-a-Leading-Indicator-for-Earnings-Growth.pdf
2. Hirshleifer, D., Hsu, P-H., Li, D. — "Innovative Efficiency and Stock Returns" (dic 2010; datos NBER/USPTO 1976-2006) - https://bpb-us-e2.wpmucdn.com/sites.uci.edu/dist/c/362/files/2011/02/Innovative-Efficiency-and-Stock-Returns.pdf (SSRN: https://ssrn.com/abstract=1721217)
3. Google / IFI CLAIMS — "Google Patents Public Datasets" (repo BigQuery, 98,17M filas) - https://github.com/google/patents-public-data
4. Google Cloud Blog — "Expanding your patent set with ML and BigQuery" (30 ago 2019) - https://cloud.google.com/blog/products/data-analytics/expanding-your-patent-set-with-ml-and-bigquery
5. Parola Analytics — "2024 Patent Roundup: Top 100 US Patent Owners" (12 nov 2024; USPTO FY2024: 326.921 patentes; Samsung 10.084) - https://parolaanalytics.com/parolanews/2024-top-patent-owners-uspto/
6. IPO / Harrity Analytics — "Top 300 Organizations Granted U.S. Patents in 2024" (324.042 patentes; +4% vs 2023) - https://ptacts.uspto.gov/ptacts/public-informations/petitions/1557631/download-documents
7. Li, H. et al. — "A CD index guided ensemble framework for screening potentially disruptive patent candidates in AI" (Scientific Reports, 17 jun 2026) - https://doi.org/10.1038/s41598-026-58238-y
8. Yang, A. J. — "Text vs. citations: A comparative analysis of breakthrough and disruption metrics" (Research Policy, 2025, 6M+ patentes USPTO 1980-2017) - https://ideas.repec.org/a/eee/respol/v54y2025i8s0048733325001246.html
9. Smith, K. — "Finding the Signal in the Noise of Patent Citations" (TIM Review) - https://timreview.ca/article/830
10. Weatherby, I. & Jay (equipo Google Patents) — "Google Patents: Public Datasets on BigQuery" (charla; cientos de millones de citas, embeddings, APIs libres) - https://www.youtube.com/watch?v=cwC-MwFCMEU
11. Google News RSS (consulta 2026-08-31) — "China supera a EEUU en investigacion...", "El 6G... es pura geopolitica", "Robots humanoides 2026: China domina con 90%", "Tesla... nueva patente" - https://news.google.com/rss/search?q=patentes+guerra+tecnologica+2026&hl=es

---
Nota de honestidad del Cazador: el video (canal yt-dlp) se obtuvo via busqueda interna de yt-dlp (ytsearch) porque el subcomando youtube de agent-reach no esta expuesto; la transcripcion es real y de fuente primaria (equipo de Google Patents). Las cifras de USPTO 2024 difieren segun base (ejercicio fiscal Parola vs calendario IPO): se citan ambas. La precision del modelo CD (0,271) es baja por diseno; se presenta como criba, no como clasificador definitivo.
