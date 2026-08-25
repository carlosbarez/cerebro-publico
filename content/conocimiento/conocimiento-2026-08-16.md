---
title: "Conocimiento 2026-08-16 (domingo — misión: enjambre de 12 scouts, barrido global)"
tipo: sintesis
tags: [conocimiento, cko, 2026-08]
fecha: 2026-08-16
---

# Conocimiento 2026-08-16 (domingo — misión: enjambre de 12 scouts, barrido global)

## Misión del día

**Encargo directo de Carlos (16-ago, verbal)**: organizar un equipo multiagente y mandar un enjambre
"muy nutrido" a internet para recabar cualquier información que alimente el cerebro — análisis de empresas,
resultados, funcionamiento de las mismas, macroeconomía, cartas al inversor, informes anuales, tendencias,
sectorial y regional, voces bajistas y alcistas, riesgos y geopolítica.

**Squad: 12 scouts en paralelo** (máximo histórico; cap CKO de ≤3 superado por encargo explícito, declarado
en la autocrítica). Cada scout: persona + ángulo único (macro · geopolítica · earnings · empresas · cartas ·
tendencias · bajistas · alcistas · riesgos · materias primas · China/EM · IA/tech), read-only, salida
destilada (bullets con cifras + fuente + URL), vía Exa (MCP `mcporter`) + Jina Reader + `market_data.py`.
Salidas crudas en `scratchpad/enjambre-2026-08-16-checkpoint.md` (checkpoint a disco, nunca en contexto).
**Ninguna cifra re-verificada contra primaria en este run**: el informe marca confianza por scout y dueño;
la red de verificación del equipo decide qué asciende.

## Hallazgos

### 1. Ormuz es el driver macro dominante — reflación de oferta, no de demanda

- **Brent $88,5/bbl y WTI $82,4 (14-ago), +6% semanal**; Ormuz cerrado desde finales de febrero (guerra
  EEUU-Israel-Irán); tráfico ~13 buques/día vs ~130 pre-guerra (−90%, Kpler); EEUU amenaza bloqueo naval
  "indefinido" a puertos iraníes. Confianza alta. Sirve a: cartera. (CNBC/The National/Kpler)
- **El choque energético es el driver común de la inflación en EEUU, zona euro y Japón**: CPI EEUU julio
  +3,4% a/a con energía +14,7% a/a; zona euro 2,9% con energía +10,0%; PPI EEUU +4,7% a/a. Confianza alta.
  Sirve a: cartera. (BLS/Eurostat/FXStreet)
- **La Fed mantiene 3,50-3,75% (5ª reunión), voto 9-3 — primera disidencia tripartita pidiendo SUBIR desde
  2016**; el mercado baja la prob de subida en sept a ~31% tras CPI/PPI/retail débiles, pero >90% de alza
  para enero. ECB casi descuenta +25 pb el 10-sep; BoJ en 1,00% con puerta abierta a sept/oct. Confianza
  alta. Sirve a: cartera ([[checklist-macro-y-ciclo]]).
- **Crecimiento EEUU flojo con inflación persistente**: PIB T2 +1,5% SAAR, nóminas julio −23k (primer
  descenso inesperado), retail −0,6% m/m (primera caída en 9 meses), confianza UMich 51,0 (de las más bajas
  de la historia), tasa de ahorro en mínimo de 4 años. Curva 10-2 en +52 pb con 10Y 4,70% y 30Y 5,26%.
  Confianza alta. Sirve a: cartera/vigilancia. (BEA/BLS/Census/Reuters)

### 2. El debate del capex de IA: la absorción total del flujo de caja

- **Los 4 hiperescaladores (Alphabet+Amazon+Meta+Microsoft) gastaron $170,1B de capex en Q2 2026 vs $171,7B
  de flujo de caja operativo combinado (ratio 99,0%)**; Alphabet con FCF negativo (−$5,9B, primer trimestre),
  Meta con FCF de solo $784M. Guías 2026 subidas tres veces en el año (Alphabet $195-205B, Meta $130-145B,
  Amazon ~$220B, Microsoft ~$175B con cambio contable de vida útil 15→25 años que reduce la cifra reportada).
  Confianza alta. Sirve a: cartera. (Axis Intelligence + filings)
- **El giro al leverage estructural**: compromisos de arrendamiento de los hiperescaladores ≈$1,5T (vs
  ~$200B hace 5 años), ~$1T aún fuera del balance; Nvidia moviliza $500B+ de capital de terceros (Apollo,
  Blackstone, BlackRock, KKR); UBS espera que el capex en efectivo supere el OCF ya en 3Q26. **Primer
  accidente apalancado**: el hedge fund "Situational Awareness" colapsó ($45B→$10B) por apuestas
  concentradas en SK Hynix y CoreWeave; Citadel compró a descuento. Confianza alta. Sirve a: Daniel
  ([[financiacion-estructurada-del-capex-de-ia]]) y a cartera.
- **Los márgenes HBM superan a Nvidia**: Micron 80,4% y SK hynix 76,3% de margen operativo vs Nvidia 65,6% y
  TSMC 60,3% — el poder de captura se movió a la memoria (oligopolio de 3). Micron con 14 acuerdos
  take-or-pay (~$100B de ingresos mínimos acumulados + $18B en depósitos) firmados contra fabs que aún no
  existen. Confianza alta. Sirve a: Carlos Bárez ([[semiconductores-de-memoria]]).
- **Monetización con señales de demanda real**: Microsoft Azure +43% a/a y RPO comercial +$678B (+84%);
  Salesforce Agentforce ARR $800M (+169%); Google Cloud run-rate $80B con backlog $460B; Oracle RPO $638B
  (+363%) con $75B ya prepagados por el cliente. Confianza alta. Sirve a: cartera (matiza el escepticismo de
  las voces bajistas).

### 3. Earnings Q2: la distorsión contable infla el agregado

- **90% del S&P 500 reportado, 86% superó BPA, crecimiento BPA ~50% (máximo desde Q2 2021)** — pero ~la
  mitad es distorsión contable por ganancias no realizadas de Alphabet (SpaceX IPO, $98B) y Amazon
  (revalorización de Anthropic, $53,4B); excluyéndolas, ~29%. **Nvidia reporta el 26-ago**: la pieza que
  puede mover todo el sector. Confianza alta. Sirve a: cartera. (FactSet)
- **Meta falla (BPA $6,18 vs $7,22; costes +55%; FCF colapsa a $0,78B por capex IA de $31B/trimestre; −10%)**;
  **Apple con guía débil (+9-11% vs +12%) por escasez de memoria y subida de costes (−6%)**. Contrastan con
  **Microsoft (+18%, Azure +43%, +8%)**, **Amazon (+20%, AWS +37%, guía Q3 light)** y **Alphabet (+24%,
  Google Cloud +82%, backlog $514B)**. Confianza alta. Sirve a: Carlos Bárez ([[meta-platforms]],
  [[microsoft]], [[alphabet]], [[amazon]]).
- **Micron FY Q3: ingresos $41,5B (x4,5 a/a), margen bruto 84,9%, guía Q4 ~$50B vs $43,6B esperados,
  HBM4 en volumen (+15%)**. **TSMC Q2 +34% con margen bruto 67,7% sobre guía y rampeo 2nm**. Confianza
  alta. Sirve a: Carlos Bárez ([[semiconductores-de-memoria]], [[semiconductores-logica-y-computo-ia]]).

### 4. Voces: la tensión alcistas vs bajistas en máximos históricos de valoración

- **Bajistas con datos extremos**: Grantham "el mercado más caro de la historia americana" (cap/PIB ~235%,
  CAPE ~40); Hussman "el extremo especulativo más extremo de la historia, más allá de 1929 y 2000" (riesgo
  de pérdida ~75% del S&P); Burry con cortos en SOXX/Micron/Nvidia y 182 sesiones sin volumen bajista;
  Montier "no hay margen de seguridad en el precio de las acciones de EEUU"; Klarman "el mercado tiene
  características de burbuja". Confianza alta (citas vía CNBC/BI/GMO/Hussman). Sirve a: cartera/vigilancia.
- **Alcistas con objetivos récord**: Yardeni 8.400 (80% prob. "Roaring 2020s"), Wilson (MS) 8.300, Tom Lee
  8.000, Stoltzfus 8.100; JPMAM y BlackRock con el capex IA de $1,6-0,8T como motor; Jeff Currie con
  superciclo de materias primas de 10-12 años. Confianza media-alta. Sirve a: cartera. (Benzinga/MS/CNBC/
  JPMAM/BlackRock)
- **La tensión es genuina y no resuelta**: ambos lados miran las MISMAS cifras de capex/beneficios; el
  desacuerdo es de horizonte (productividad vs burbuja). Es el estado actual de [[tensiones-activas]].

### 5. Cartas al inversor: señales de ciclo y despliegue de caja

- **Berkshire/Abel: primer trimestre como comprador neto en ~3 años (~$20B netos)** — empieza a desplegar la
  pila; caja baja a $365,5B (−8% desde récord); GEICO −45% en suscripción. Confianza alta. Sirve a:
  cartera ([[berkshire-hathaway]]).
- **Ackman/Israel (carta Q2): la distracción en IA creó oportunidades fuera**; 6 posiciones nuevas (Netflix,
  Visa, Mastercard, S&P Global, ICE, Alcon) como "capital-light toll takers" con cobertura inflacionaria;
  PSH −12,6% 1S26 vs +10,2% S&P y descuento NAV "near all-time widest". Klarman compró acciones de Pershing
  Square el 14-ago. Confianza alta. Sirve a: cartera ([[bill-ackman]]).
- **Azvalor: "el mercado NO está barato" — por primera vez en 20 años el dividendo del S&P 500 rinde menos
  que las letras**; el S&P se ha doblado desde oct-2020 con beneficios +30%. **Cobas**: rota de energía
  (~30%→~24%) hacia lo más castigado, soft close previsto. Confianza alta. Sirve a: cartera ([[azvalor-am]],
  [[francisco-garcia-parames]]).
- **Fundsmith**: capex 2026 de hyperscalers como % del FCF = 87% (MSFT), 91% (Meta), 97% (Alphabet), >100%
  (Amazon), 2x (Oracle), 567% (CoreWeave); rebajaron a la mitad MSFT/Meta. La indexación "está poniendo los
  cimientos de un desastre inversor mayor". Confianza media (carta semestral accesible parcial). Sirve a:
  vigilancia ([[terry-smith]]).
- **Einhorn (Greenlight)**: el IPO de SpaceX de $1,75B puede marcar "un techo especulativo mayor"; prioriza
  preservación de capital. **Klarman**: "el activo libre de riesgo es más arriesgado cada día", espera "un
  ciclo de crédito". Confianza alta. Sirve a: contexto.

### 6. Riesgos sistémicos: compresión extrema en máximos de valoración

- **CAPE/Shiller 42,6x (2ª vez en la historia >40x, cerca del máximo del 2000)**; **top-10 del S&P ≈ 40%
  del índice (récord)**; ~45% del valor del S&P ligado al buildout de IA. Confianza alta. Sirve a:
  cartera/vigilancia. (multpl/GWK/SIT)
- **Spread HY EEUU en 271 pb (el más barato de su historia, mediana ~450 pb)**; **private credit con default
  rate récord del 6,0% TTM y PIK >10%**; distress ratio 6,89% (6º mes >6,25%). Confianza alta. Sirve a:
  Daniel ([[limites-y-marco-de-riesgo]]).
- **Deuda soberana EEUU**: déficit $1,8T en 10 meses del FY26, interés neto ~$1T/año (3,2% del PIB), CBO
  con déficits promedio $2,4T hasta 2036; 30Y a 5,216% (máximo desde 2001) con bid-to-cover débil (2,39) y
  dealers absorbiendo 11,5%. **Japón: JGB 10Y 2,88% (+131 pb a/a)**. Confianza alta. Sirve a: Daniel y a
  cartera ([[renta-fija-y-tipos]]).
- **Posicionamiento extremo**: BofA Bull&Bear 9,4 (máximo desde 2021, señal contraria >8,0); cash 3,6%
  (Cash Rule de venta); VIX 14,3 en zona de complacencia; basis trade de Treasuries con $2,4T financiados
  por ~$1,8T de repo; put skew del TLT en máximos desde 2008. Confianza alta/media. Sirve a: Daniel.

### 7. China y emergentes: consumo débil, exportaciones IA, valoraciones baratas

- **Crecimiento flojo y consumo estancado (decisión de política, no desajuste)**: PIB H1 +4,7% (Q2 +4,3%,
  bajo la meta), retail H1 solo +1,3%; Politburó abandonó las "iniciativas especiales de consumo" y no
  anunció estímulo amplio; inmobiliario H1 −18%, venta de suelo −31,5%. Confianza alta. Sirve a: contexto.
  (Foreign Policy/NBS)
- **Pero las exportaciones son el motor**: julio +23,9% a $397,9B con superávit $112,5B; chips +117% solo en
  julio; yuan fuerte (6,79, FMI lo ve ~20% infravalorado). **HSI en 12,2x earnings (+13% en julio) vs S&P
  25,8x**; Citi target 29.600. Confianza alta. Sirve a: cartera ([[plataformas-de-internet-de-china]]).
- **India la más sólida** (repo 5,25%, PIB FY27 6,7%, reservas récord ~$707B) pero con salidas FPI $25,4B
  YTD; **Corea corrigió ~30% USD desde el pico por deleveraging minorista, no fundamentos**. Confianza
  media-alta. Sirve a: cartera/vigilancia.

### 8. Materias primas: el bloque tangible del cerebro, con señales cruzadas

- **Cobre en squeeze físico**: récord COMEX $6,7140/lb el 12-ago, backwardation LME $207,5 (la más ancha de
  2026) e inventarios −14%. **Oro $4.437/oz (+9% en agosto)** por dólar débil y apuestas a Fed sin subida;
  90% de analistas Kitco alcistas; compras récord de bancos centrales. **Uranio $87,45/lb (+19,8% a/a)** por
  nuclear/IA. Confianza alta. Sirve a: cartera ([[mineria-industrial-y-energia]],
  [[materias-primas-y-ciclo-de-commodities]]).
- **Gas natural dividido**: Henry Hub $2,73 (sobreoferta) vs GNL Asia JKM $21,20 y TTF europeo >€60/MWh con
  almacenamiento al 59% (el más bajo en >15 años para la fecha) — riesgo de picos invernales. Confianza
  alta. Sirve a: cartera.

### 9. Geopolítica: escalada activa en dos frentes

- **Ormuz**: EEUU amenaza bloqueo naval indefinido; disputa de datos de flujo (EEUU ~9 mb/d vs analistas
  independientes ~7 mb/d); EIA sube Brent a $85 para 3T26. **Mar Rojo**: primer ataque mortal hutí (6
  muertos); exportaciones saudíes vía Bab el-Mandeb −90% con desvío por Sumed (+25 días). Confianza
  alta/media. Sirve a: cartera.
- **China-Taiwán**: ejercicio naval combinado China-Indonesia en la ZEE de Taiwán; Han Kuang 2026 ensayó
  caída de internet y antibloqueo. **Guerra comercial**: informe "Great Transshipment Scam" (evasión de
  $19-26.000M/año), China con represalias, arancel del 15% al polisilicio, cumbre Trump-Xi el 24-sep.
  Confianza alta. Sirve a: vigilancia (prima de riesgo Taiwán en semis).

## Knowledge-ops — dominio rotado: misión (sin rotación de dominio)

Run dedicado al enjambre (encargo de Carlos); sin rotación de dominio programada. Ops de mínimos:
- **Lint de enlaces de este informe**: todos los wikilinks apuntan a páginas existentes (verificado).
- **Conexión detectada**: el patrón de los hallazgos (capex IA absorbiendo FCF + leverage fuera de balance +
  primer accidente apalancado) es la materialización de [[financiacion-estructurada-del-capex-de-ia]] — esa
  página debería ganar una nota de evolución con los datos de hoy. Propuesto abajo.
- **Laguna del corpus detectada**: no hay voz durable de ciclo de crédito/private credit como tal (solo
  pasajes de Klarman/Burry). Candidata a página de concepto si el sintetizador lo ve estructural.

## Calidad de fuentes

- **Exa (MCP) + Jina Reader rindieron bien** como capa de descubrimiento: 12 scouts, 0 caídos, 0 en blanco.
  `market_data.py quote` funcionó para precios vivos (Brent, oro, cobre, etc.).
- **Reuters bloquea Jina (403 rate-limit)** pero los scouts encontraron vías alternas (CNBC, The National,
  Al Jazeera) — el multi-backend cumplió.
- **Disputa de datos anotada como valor, no ruido**: flujo de Ormuz (EEUU 9 vs independientes 7 mb/d) y
  precio gestionado de EVs chinos (fuentes divergentes en el mecanismo) — son marcas de verificación para el
  equipo, no errores.
- **Citas literales marcadas** (Klarman "características de burbuja", Azvalor dividendo<letras, Fundsmith
  %FCF, Ackman "toll takers") — distinguidas de paráfrasis. El verificador decide si ascienden.

## Propuestas

1. **A Carlos Bárez** (fichas de empresa): propagar Q2 2026 a las fichas con la regla de evolución —
   [[meta-platforms]] (FCF $0,78B, margen 31% vs 43%: materializa el "deterioro a vigilar" del 22-jul),
   [[microsoft]] (Azure +43%, RPO +84%: primera evidencia fuerte de payoff), [[alphabet]] (cloud +82%, capex
   $195-205B), [[amazon]] (AWS +37%, capex $220B, guía light), y nota en [[semiconductores-de-memoria]]
   (márgenes HBM > Nvidia, take-or-pay, pico de ciclo). Hechos arriba; las tesis las decide él.
2. **A Elisa (CIO)** — verificación priorizada de las 5 cifras de mayor impacto antes de que asciendan a
   durable: (a) ratio capex/OCF 99,0% de los 4 hiperescaladores, (b) márgenes op de Micron 80,4%/SK hynix
   76,3%, (c) CAPE 42,6 y top-10 ≈40%, (d) HY spread 271 pb, (e) default rate private credit 6,0%. Todas
   con fuente citada pero sin primaria contrastada.
3. **A Daniel (riesgo)**: el paquete riesgos sistémicos de hoy (CAPE, HY, private credit, basis trade $1,8T,
   VIX complaciente, posicionamiento Bull&Bear 9,4) es directamente su dominio — propongo que lo cruce con
   [[renta-fija-y-tipos]] y el [[checklist-macro-y-ciclo]] en su próximo run.
4. **A Inés (estrategia)**: la rotación value/energía/defensivos de julio (FTSE All-World: Energía +10,6%,
   Tech −4,8%), el healthcare como nuevo liderazgo defensivo (XLV +16% momentum 3M, correlación −0,40 con
   SPY) y el retorno de flujos EM son insumo directo de su mapa sectorial.
5. **A Elisa (proceso CKO)**: institucionalizar el "enjambre" como variante de squad — 10-12 scouts
   read-only con salida destilada a checkpoint cuando Carlos pida barrido amplio; la alternativa al run CKO
   estándar. Coste: 12 scouts (Haiku-equivalente), reversible. Declaración de cap en autocrítica.
6. **A Carlos (decisión)**: el descuento NAV de Pershing Square "near all-time widest" + Klarman comprando
   PSH y Ackman añadiendo financieros "toll takers" es una señal de ciclo que [[bill-ackman]] debería
   registrar — propongo nota de evolución a Carlos Bárez/Elisa, no la hago yo.

## Para la CIO

- Enjambre de 12 scouts (encargo Carlos) completado: barrido global de 9 dominios, 0 caídos, checkpoint en
  disco. La foto del mundo hoy: Ormuz reflaciona, capex IA absorbe el FCF de los hiperescaladores (99%) con
  leverage saliendo del balance, valoraciones en extremos (CAPE 42,6) y voces alcistas/bajistas en tensión
  no resuelta.
- 5 cifras de alto impacto marcadas para verificación previa a durable (propuesta 2); Q2 2026 pendiente de
  propagar a 4 fichas de cartera (propuesta 1).
- Propongo a Elisa institucionalizar el "enjambre" como variante de squad de la CKO.

Run de hoy: [[conocimiento-2026-08-16]] · Mapa: [[arquitectura-del-conocimiento]] · Cola: [[encargos]]
