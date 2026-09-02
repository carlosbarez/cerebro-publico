---
title: "Fuentes primarias: SEC EDGAR"
tipo: concepto
tags: [fuentes, sec, primario]
fecha: 2026-08-31
agente: cazador
squad: Cazador de Fuentes & Evidence (Cazador)
status: sonde
---

# Fuentes primarias: SEC EDGAR

> Fuentes base: SEC EDGAR API documentation (https://www.sec.gov/search-filings/edgar-application-programming-interfaces); EDGAR Full Text Search (https://www.sec.gov/edgar/search/); Financial Statement Data Sets de DERA (https://www.sec.gov/dera/data/financial-statement-data-sets.html); referencia comunitaria EDGARScout (https://edgarscout.com/edgar-api/).

## 1. Resumen ejecutivo

SEC EDGAR (Electronic Data Gathering, Analysis, and Retrieval) es el repositorio oficial de todas las declaraciones que las empresas cotizadas en EE. UU. presentan a la SEC: 10-K (informe anual), 10-Q (informe trimestral), 8-K (hechos relevantes), proxy (DEF 14A), insider (Form 4/13F), etc. Para un inversor de largo plazo es la **fuente primaria indiscutible**: lo que la empresa dice bajo juramento al regulador, sin filtros de analistas ni de prensa (Filtros de calidad de fuentes).

Lo decisivo hoy es que EDGAR es **programable y gratuito**. Desde ~2017 la SEC expone APIs REST en `data.sec.gov` que devuelven JSON sin clave ni registro, y un buscador de texto completo sobre todos los filings desde 2001. Tres cifras que fijan el terreno:

- XBRL (eXtensible Business Reporting Language) es obligatorio en EDGAR desde **2009**; los datos financieros vienen etiquetados y comparables entre empresas (SEC API doc).
- El buscador de texto completo cubre filings **desde 2001** (edgarkit; sec-api.io).
- El mapa oficial ticker→CIK activo tiene **10.391 entradas** (verificado en vivo en `company_tickers.json` el 2026-08-31); el ecosistema supera los **10 millones de documentos** acumulados (tldrfiling, 2026).

## 2. Estructura / modelo

EDGAR no es una sola API sino **tres caras** con distinto propósito. Conocer cuál usar evita semanas perdidas.

| Cara | Host | Qué da | Clave | Límite |
|---|---|---|---|---|
| Datos estructurados (XBRL + metadata) | `data.sec.gov` | Hechos financieros JSON y historial de filings | No | 10 req/seg |
| Texto completo (keyword search) | `efts.sec.gov` | Filings que contienen una frase, desde 2001 | No | 10 req/seg |
| Documento primario en crudo | `www.sec.gov/Archives/...` | El 10-K/10-Q íntegro en HTML/iXBRL | No | 10 req/seg |

**A) `data.sec.gov` — la mina estructurada.** Tres endpoints clave (CIK = Central Index Key de 10 dígitos con ceros a la izquierda):

- `data.sec.gov/submissions/CIK##########.json` — historial de presentación de la empresa y metadata (nombre, ticker, bolsas). Verificado en vivo: CIK 0000320193 → "Apple Inc.", ticker AAPL; filings recientes incluyen 10-Q del 2026-07-31 y 8-K (SEC submissions API).
- `data.sec.gov/api/xbrl/companyconcept/CIK##########/us-gaap/<Concepto>.json` — todas las revelaciones XBRL de una empresa para un concepto. Verificado: `AssetsCurrent` de Apple devuelve 144 hechos en USD; el primero es 2008-09-27 = 32.311.000.000 $ (SEC companyconcept API).
- `data.sec.gov/api/xbrl/companyfacts/CIK##########.json` — todos los conceptos de la empresa en una llamada.
- `data.sec.gov/api/xbrl/frames/us-gaap/<Concepto>/USD/CY2024Q4I.json` — agrega un hecho por entidad (cross-seccional). Verificado: `AssetsCurrent` CY2024Q4I devuelve 4.953 entidades (SEC frames API).

El formato de periodo es `CY####` (anual), `CY####Q#` (trimestral), `CY####Q#I` (instantáneo). Hay un ZIP masivo (`companyfacts.zip`, `submissions.zip`) recompilado cada noche ~3:00 a. m. ET para extracciones grandes (SEC API doc).

**B) `efts.sec.gov` — el buscador de texto.** Endpoint JSON (no documentado oficialmente) tipo `efts.sec.gov/LATEST/search-index?q="going concern"&forms=10-K&startdt=2024-01-01`. Permite encontrar, p. ej., todos los 10-K que mencionan "supply chain" o "going concern" en un rango de fechas (edgarkit; sec-api.io).

**C) `www.sec.gov/Archives/edgar/data/<CIK>/<Accession>/`** — el documento primario íntegro. La URL del documento principal sale del campo `primaryDocument` del JSON de submissions. Aquí está el MD&A, los factores de riesgo y la descripción del negocio en prosa.

## 3. Numeros clave

- **Obligatoriedad XBRL:** desde 2009; inline XBRL embebido en los HTML de 10-K/10-Q (SEC API doc).
- **Cobertura de texto completo:** filings electrónicos desde 2001 (edgarkit; sec-api.io).
- **Financial Statement Data Sets (DERA):** números de la cara de los estados financieros de todas las empresas, aplanados y comparables, **enero 2009 – junio 2026**, actualizados trimestralmente (SEC DERA).
- **Límite de acceso oficial:** **10 peticiones por segundo**, monitorizado; se exige cabecera `User-Agent` con nombre y email (SEC Webmaster FAQ).
- **Verificación en vivo (2026-08-31):** `company_tickers.json` = 10.391 entradas; `frames` de `AssetsCurrent` CY2024Q4I = 4.953 entidades; `companyconcept` Apple `AssetsCurrent` = 144 hechos desde 2008.

## 4. Posicion / marco conceptual

EDGAR es el **suelo de datos** sobre el que se construye cualquier Analisis fundamental cuantitativo serio. Su ventaja competitiva como fuente es triple: (1) es **primaria** — la empresa bajo responsabilidad legal, no un intermediario; (2) es **gratuita y sin fricción** — rompe el monopolio de proveedores de pago para el inversor particular; (3) es **estandarizada vía XBRL**, lo que habilita comparabilidad cross-seccional y series temporales limpias que alimentan el Analisis de fosos y la detección de Red flags contables.

Conecta con Ventajas competitivas (moats): los datos XBRL permiten vigilar la evolución de márgenes, capital circulante o capex año a año sin reteclear a mano. Y con Sesgo de supervivencia: el fulldados de EDGAR incluye empresas que quebraron o fueron adquiridas, útil para no sobreestimar rentabilidades pasadas. Véase también Inversion a largo plazo y Datos alternativos (EDGAR como "datos alternativos" gratis frente a proveedores caros).

## 5. Catalizadores y riesgos

- **A favor:** la SEC sigue ampliando acceso (Financial Statement Data Sets actualizado a junio 2026; APIs en tiempo real a medida que se difunden los filings). El ecosistema de código abierto (sec-api-python, edgarkit, EDGARScout) abaja la barrera.
- **En contra / riesgos de uso:** (1) `data.sec.gov` **no contiene el texto narrativo** del 10-K/10-Q — solo XBRL y metadata; para leer MD&A hay que ir a Archives o al full-text search. (2) Los endpoints `companyconcept`/`frames` **excluyen taxonomías personalizadas** de la empresa, así que algunas revelaciones a medida no aparecen. (3) El full-text search de `efts.sec.gov` es **no documentado y la SEC se reserva cambiarlo**. (4) No hay CORS: hay que pedirlo desde servidor, no desde navegador. (5) Riesgo de bloqueo si se supera 10 req/seg o falta User-Agent. (6) XBRL puede traer restatements y desajustes de periodo (el frame aproxima el calendario fiscal al trimestre civil).

Novedades recientes vía Google News RSS (2026): oleada de presentación de 10-K/10-Q del ejercicio 2026 (p. ej. Coty 10-K al 30-jun-2026; GME 10-Q al 02-may-2026) y la propia SEC publica el "Financial Statement Data Sets" de junio 2026 — señal de que el flujo primario sigue vivo y masivo.

## 6. Valoracion / implicaciones practicas

Pipeline recomendado para Carlos (sin gastar en terminales de pago):

1. **Localizar CIK:** `https://www.sec.gov/files/company_tickers.json` (10.391 entradas; AAPL→CIK 320193). Verificado.
2. **Series financieras:** descargar `companyfacts/CIK##########.json` y extraer `us-gaap/Revenues`, `NetIncomeLoss`, `AssetsCurrent`, `GrossProfit`, etc. como serie temporal.
3. **Prospectiva cross-seccional:** usar `frames` para comparar un ratio entre miles de empresas (p. ej. todas las `AssetsCurrent` a cierre de 2024).
4. **Lectura cualitativa:** buscar temas en `efts.sec.gov` ("supply chain", "going concern", "litigation") y abrir el documento primario en Archives para MD&A y factores de riesgo.
5. **Escala/historia:** bajar `companyfacts.zip` / `submissions.zip` para backtests amplios.

Señal de alerta: si un proveedor de datos te cobra por "fundamentals US" lo que EDGAR da gratis en XBRL, cotízalo contra el coste de escribir 50 líneas de Python. Respeta 10 req/seg y pon User-Agent real.

## 7. Veredicto para el inversor

EDGAR es la fuente primaria de mayor valor y menor coste del universo de renta variable US: gratis, legal, estandarizada y programable. El único precio real es aprender la arquitectura de tres caras y respetar el rate limit. Para un inversor de largo plazo que valora detectar buenos negocios por sí mismo (Perfil de Carlos), dominar estas APIs sustituye gran parte de una suscripción cara y elimina el sesgo del intermediario.

## 8. Segundo orden (OBLIGATORIO y central en este wiki)

- **Implicación de las implicaciones:** al ser gratis y estandarizado, EDGAR nivela el campo entre el inversor particular y los fondos; quien lo domine tiene una **ventaja de información persistente** sobre quien solo lee resúmenes de prensa. Eso refuerza la tesis central del Cerebro de Invertir como segunda via y de Detectar buenos negocios y no vender.
- **Choca con otras fuentes:** los datos XBRL "as filed" incluyen errores y restatements; no confundirlos con cifras ajustadas tipo S&P/Capital IQ. Conecta con Red flags contables: una divergencia entre lo declarado en XBRL y lo contado en la conferencia de resultados es señal a vigilar.
- **Conexión con Sesgo de supervivencia y Datos alternativos**: el universo completo (incluidas empresas muertas) habilita backtests honestos; usado mal, un screen solo-EDGAR de "empresas ganadoras" sesga al alza.
- **Qué vigilar Carlos a 3-5 años:** (a) movimientos de la SEC hacia reporting en tiempo real o taxonomías más ricas (IA/disclosures climáticos) que cambien la estructura XBRL; (b) posibles límites más estrictos o requisitos de registro si el uso automatizado crece; (c) maduración de `efts.sec.gov` de "no documentado" a API oficial — o su ruptura; (d) surgimiento de wraps OSS (sec-api-python, edgarkit) que conviertan esto en una librería de una llamada, bajando aún más la barrera.
- **Páginas sugeridas a crear (enlaces a futuro):** Pipeline EDGAR en Python, XBRL para inversores, Full text search de 10 K, Comparabilidad cross seccional con frames, Rate limits y educación de la SEC.

## 9. Fuentes consultadas

1. SEC — EDGAR Application Programming Interfaces (documentación oficial) - https://www.sec.gov/search-filings/edgar-application-programming-interfaces (verificado 2026-08-31)
2. SEC — EDGAR Full Text Search - https://www.sec.gov/edgar/search/ (verificado 2026-08-31)
3. SEC DERA — Financial Statement Data Sets (enero 2009 – junio 2026) - https://www.sec.gov/dera/data/financial-statement-data-sets.html (verificado 2026-08-31)
4. SEC — Webmaster FAQ (rate limit 10 req/seg y User-Agent) - https://www.sec.gov/os/webmaster-faq (verificado 2026-08-31)
5. SEC — mapa ticker→CIK (company_tickers.json, 10.391 entradas; AAPL→CIK 320193) - https://www.sec.gov/files/company_tickers.json (verificado en vivo 2026-08-31)
6. EDGARScout — EDGAR API Documentation (referencia 3 hostnames, User-Agent, 10 req/seg) - https://edgarscout.com/edgar-api/ (publicado 2026-05-28)
7. sec-api.io — SEC Filing Full-Text Search API (texto completo desde 2001, <60 s de latencia) - https://sec-api.io/docs/full-text-search-api (publicado 2026-08-27)
8. edgarkit — SEC EDGAR full-text search (guía efts.sec.gov JSON API) - https://edgarkit.com/learn/edgar-full-text-search (publicado 2026-06-19)
9. tldrfiling — SEC EDGAR API Guide 2026 (>+10 M documentos, sin clave) - https://tldrfiling.com/blog/sec-edgar-api-guide/ (publicado 2026-04-03)
10. SEC-API-io — sec-api-python client - https://github.com/SEC-API-io/sec-api-python
11. SEC — bulk companyfacts.zip (XBRL agregado, recompilado nocturnamente) - https://www.sec.gov/Archives/edgar/daily-index/xbrl/companyfacts.zip
