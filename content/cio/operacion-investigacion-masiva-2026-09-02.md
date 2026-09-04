---
title: "Operación Investigación Masiva — 2026-09-02"
tipo: sintesis
tags: [cio, operacion, investigacion-masiva, tracking]
fecha: 2026-09-02
agente: elisa-fernandez
---

# Operación Investigación Masiva — 2026-09-02

**Objetivo**: Investigación profunda y detallada en 4 áreas para generar páginas durables en el wiki.
**Orquestador**: Elisa Fernández (CIO) — Opus
**Estado**: EN CURSO (lanzado 2026-09-02 noche)
**Entregable**: Informes destilados por subagente → síntesis CIO → promociones a durable

## Áreas y alcance

| Área | Tema | Unidades de investigación | Subagentes estimados |
|------|------|---------------------------|---------------------|
| 1 | Cartera actual (36) + Watchlist (8) | 44 empresas | 44 (1 por empresa) |
| 2 | Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | 25 dominios | 25 (1 por dominio) |
| 3 | Macro/Geopolítica | 8 temas transversales | 8 (1 por tema) |
| 4 | Día de CAZA — nuevos sectores | 5 sectores sin posición | 5 (1 por sector) |
| **TOTAL** | | | **82 subagentes** |

## Metodología por subagente

Cada subagente recibe:
- **Persona/ángulo único** (no clones)
- **Plataformas agent-reach** asignadas según el tema
- **Formato de salida**: Informe destilado (bullets con cifras, citas literales, fuentes, wikilinks a páginas del wiki)
- **Read-only**: No escriben en el vault, solo devuelven texto

## Plataformas agent-reach disponibles (doctor verificado)

| Plataforma | Backend activo | Uso |
|------------|----------------|-----|
| Exa Search | mcporter/Exa | Búsqueda semántica profunda |
| Jina Reader | curl r.jina.ai | Lectura completa de URLs |
| YouTube | yt-dlp | Transcripciones/vídeos |
| BiliBili | B站搜索 API | Contenido chino |
| V2EX | API pública | Discusiones tech/chinas |
| RSS/Atom | feedparser | Feeds oficiales |
| GitHub | gh CLI | Repos/código |
| Twitter/X | twitter-cli (req. cookies) | Solo si usuario autoriza |
| Reddit | OpenCLI/rdt-cli (req. login) | Solo si usuario autoriza |

## Estructura de despliegue (oleadas)

### Oleada 1: Empresas cartera + watchlist (44 subagentes)
- Batch size: 3 en paralelo (límite harness)
- ~15 batches secuenciales

### Oleada 2: Industrias + Megatendencias (25 subagentes)
- Batch size: 3 en paralelo
- ~9 batches

### Oleada 3: Macro/Geopolítica (8 subagentes)
- Batch size: 3 en paralelo
- ~3 batches

### Oleada 4: CAZA nuevos sectores (5 subagentes)
- Batch size: 3 en paralelo
- ~2 batches

## Tracking de progreso

| Subagente | Área | Objetivo | Estado | Resultado |
|-----------|------|----------|--------|-----------|
| SA-082 | ## ÁREA 4: Día de CAZA — 5 sectores sin posición | Banca universal selectiva | en_progreso | ⏳ |
| SA-079 | ## ÁREA 4: Día de CAZA — 5 sectores sin posición | Salud/Farma/Biotech - GLP-1 | en_progreso | ⏳ |
| SA-080 | ## ÁREA 4: Día de CAZA — 5 sectores sin posición | Agua y saneamiento | en_progreso | ⏳ |
| SA-081 | ## ÁREA 4: Día de CAZA — 5 sectores sin posición | Agroindustria y alimentación | en_progreso | ⏳ |
| SA-076 | ## ÁREA 3: Macro/Geopolítica (8 temas transversales) | Crédito High Yield | en_progreso | ⏳ |
| SA-077 | ## ÁREA 3: Macro/Geopolítica (8 temas transversales) | Dólar débil / EURUSD 1.16 | en_progreso | ⏳ |
| SA-078 | ## ÁREA 4: Día de CAZA — 5 sectores sin posición | Defensa pura EU | en_progreso | ⏳ |
| SA-073 | ## ÁREA 3: Macro/Geopolítica (8 temas transversales) | Financiación estructurada capex IA | en_progreso | ⏳ |
| SA-074 | ## ÁREA 3: Macro/Geopolítica (8 temas transversales) | Nuclear/Uranio | en_progreso | ⏳ |
| SA-075 | ## ÁREA 3: Macro/Geopolítica (8 temas transversales) | Defensa/Industriales EU | en_progreso | ⏳ |
| SA-070 | ## ÁREA 3: Macro/Geopolítica (8 temas transversales) | Curva de tipos larga / Crowding-out | en_progreso | ⏳ |
| SA-071 | ## ÁREA 3: Macro/Geopolítica (8 temas transversales) | China: Régimen en K | en_progreso | ⏳ |
| SA-072 | ## ÁREA 3: Macro/Geopolítica (8 temas transversales) | Energía/Brent/Ormuz | en_progreso | ⏳ |
| SA-067 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | tercero, GS $120 engañoso, Regla 20/CAPE débil | en_progreso | ⏳ |
| SA-068 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | segundo, guerra Irán verificada, diésel bottleneck | en_progreso | ⏳ |
| SA-069 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | primer run fundacional, hueco defensa | en_progreso | ⏳ |
| SA-064 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | sexto, pre-NFP, yen, Nvidia/Meta/MSFT | en_progreso | ⏳ |
| SA-065 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | quinto, Brent, liquidez G10, capex hiperscaladores | en_progreso | ⏳ |
| SA-066 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | cuarto, semis memoria → Infraponderar | en_progreso | ⏳ |
| SA-061 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | noveno, financiación IA ALTA, Brent | en_progreso | ⏳ |
| SA-062 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | octavo, 3 verificaciones correcciones | en_progreso | ⏳ |
| SA-063 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | séptimo, gap 14 días, China régimen K | en_progreso | ⏳ |
| SA-058 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Desglobalización / Fragmentación geopolítica | en_progreso | ⏳ |
| SA-059 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Defensa/Seguridad/Ciberseguridad | en_progreso | ⏳ |
| SA-060 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | décimo run, degradado pulsos | en_progreso | ⏳ |
| SA-055 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Financiación estructurada del capex de IA | en_progreso | ⏳ |
| SA-056 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | IA/Robótica | en_progreso | ⏳ |
| SA-057 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Transición energética + Renacimiento nuclear | en_progreso | ⏳ |
| SA-052 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Aeroespacial y defensa | en_progreso | ⏳ |
| SA-053 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Salud y farma | en_progreso | ⏳ |
| SA-054 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Agua y saneamiento | en_progreso | ⏳ |
| SA-049 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Minería industrial y energía | en_progreso | ⏳ |
| SA-050 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Plataformas de internet de China | en_progreso | ⏳ |
| SA-051 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Plataformas tecnológicas y publicidad digital | en_progreso | ⏳ |
| SA-046 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Semiconductores lógica y computación IA | en_progreso | ⏳ |
| SA-047 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Mineras de metales preciosos | en_progreso | ⏳ |
| SA-048 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Agencias de rating y datos | en_progreso | ⏳ |
| SA-043 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Fastenal | en_progreso | ⏳ |
| SA-044 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Copart | en_progreso | ⏳ |
| SA-045 | ## ÁREA 2: Industrias (11) + Megatendencias (4) + Mapas estratégicos (10) | Semiconductores de memoria | en_progreso | ⏳ |
| SA-040 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Kongsberg Gruppen | en_progreso | ⏳ |
| SA-041 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Cameco Corporation | en_progreso | ⏳ |
| SA-042 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | L3Harris Technologies | en_progreso | ⏳ |
| SA-037 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | ASML | en_progreso | ⏳ |
| SA-038 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Safran | en_progreso | ⏳ |
| SA-039 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | BAE Systems | en_progreso | ⏳ |
| SA-034 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Fidelity S&P 500 Index | en_progreso | ⏳ |
| SA-035 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Cinvest Tercio Capital | en_progreso | ⏳ |
| SA-036 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | iShares Physical Gold | en_progreso | ⏳ |
| SA-031 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | First Majestic Silver | en_progreso | ⏳ |
| SA-032 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | ETC Boost Gold 3x | en_progreso | ⏳ |
| SA-033 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | WT Silver 3x Daily | en_progreso | ⏳ |
| SA-028 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Freeport-McMoRan | en_progreso | ⏳ |
| SA-029 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | iShares Copper Miners | en_progreso | ⏳ |
| SA-030 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Meituan | en_progreso | ⏳ |
| SA-025 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | EOG Resources | en_progreso | ⏳ |
| SA-026 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Rio Tinto | en_progreso | ⏳ |
| SA-027 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | JD.com | en_progreso | ⏳ |
| SA-022 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Invesco Bloomberg Commodity | en_progreso | ⏳ |
| SA-023 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Booking Holdings | en_progreso | ⏳ |
| SA-024 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Verisk Analytics | en_progreso | ⏳ |
| SA-019 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Moody's Corp | en_progreso | ⏳ |
| SA-020 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Baidu | en_progreso | ⏳ |
| SA-021 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | SAP SE | en_progreso | ⏳ |
| SA-016 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Agnico Eagle Mines | en_progreso | ⏳ |
| SA-017 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Amundi MSCI EM | en_progreso | ⏳ |
| SA-018 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Kazatomprom | en_progreso | ⏳ |
| SA-013 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Jupiter India Select | en_progreso | ⏳ |
| SA-014 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Amazon | en_progreso | ⏳ |
| SA-015 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Alphabet | en_progreso | ⏳ |
| SA-010 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Fidelity MSCI World | en_progreso | ⏳ |
| SA-011 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Schroder Gold USD | en_progreso | ⏳ |
| SA-012 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | MyInvestor S&P500 EW | en_progreso | ⏳ |
| SA-007 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | GS Bloomberg Commodity | en_progreso | ⏳ |
| SA-008 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Microsoft | en_progreso | ⏳ |
| SA-009 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Qualcomm | en_progreso | ⏳ |
| SA-004 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Schroder Gold EUR Hdg | en_progreso | ⏳ |
| SA-005 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | JPMorgan Greater China | en_progreso | ⏳ |
| SA-006 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Meta Platforms | en_progreso | ⏳ |
| SA-001 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | ETFS Physical Silver | en_progreso | ⏳ |
| SA-002 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | Micron Technology | en_progreso | ⏳ |
| SA-003 | ## ÁREA 1: Cartera actual (36) + Watchlist (8) = 44 empresas | WT Physical Gold EUR Hdg | en_progreso | ⏳ |
| [se irán añadiendo conforme se lancen] | | | | |

## Próximos pasos CIO (cuando despierte Carlos)

1. Revisar todos los informes destilados recibidos
2. Contrastar entre sí y con conocimiento previo del wiki
3. Verificación adversarial (≤3) a afirmaciones de alto impacto
4. Promover a páginas durables (`wiki/empresas/`, `wiki/industrias/`, `wiki/estrategia/`, `wiki/conceptos/`)
5. Actualizar `wiki/cio/cio-2026-09-02.md` con hallazgos y decisiones
6. Commit con trailer `Agente: elisa-fernandez`

---

**Nota**: Esta operación corre en background. Los resultados se irán acumulando en este documento y en archivos de resultados por subagente en `scratchpad/operacion-investigacion-2026-09-02/`.