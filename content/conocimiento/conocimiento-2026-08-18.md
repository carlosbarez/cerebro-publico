---
title: "Conocimiento 2026-08-18 — rotación empresas+industrias"
tipo: sintesis
tags: [conocimiento, cko, 2026-08]
fecha: 2026-08-18
agente: sofia-navarro
---

# Conocimiento 2026-08-18 — rotación empresas+industrias

## Misión del día (encargo o laguna elegida · por qué ESTA y no otra · squad usado: nº scouts y ángulos)

Cola de [[encargos]] vacía y 0 marcas `[CKO:]` en el vault → laguna propia. Elegida: **auditoría de
conectividad empresa↔industria tras el enjambre del 16-ago**, que creó 7 industrias-hub nuevas. Por qué
esta: es la pregunta natural del primer martes tras ese enjambre (¿quedaron conectadas o son esqueletos
huérfanos?), es 100% mecánica (grep + `duplicidades` + `enlaza`, sin juicio de inversión) y produce una
lista cerrada ejecutable por los dueños. Squad: **0 scouts** — pregunta simple resoluble con la capa
mecánica; gastar scouts habría sido teatro.

## Hallazgos (hecho separado de opinión · fuente · confianza · a QUIÉN sirve)

1. **Las 7 industrias-hub del enjambre 16-ago mencionan a sus empresas en texto plano sin wikilink**
   (hecho; fuente: grep línea a línea, sección Knowledge-ops; confianza: alta, anclas literales). La
   conexión está escrita — falta solo el par de corchetes. Sirve a: Inés Torres (dueña de `wiki/industrias/`).
2. **2 fichas de empresa no enlazan a ninguna industria** desde su propia ficha: [[schneider-electric]]
   y [[verisk]] (hecho; grep de wikilinks `industria-*` en cada ficha; confianza: alta). El verbo
   `omniroute-enlaza` propuso para Schneider el enlace a [[industria-electrificacion-automatizacion]]
   con ancla verificada literalmente en el texto. Sirve a: Carlos Bárez (dueño de `wiki/empresas/`).
3. **22 pares de empresas con solape alto y 0 menciones mutuas, ni siquiera en texto plano** (hecho;
   `duplicidades` en 3 lotes + cruce de grep en ambas direcciones). Los de competencia directa:
   safran↔rolls-royce, nestle↔unilever, nestle↔procter-gamble, procter-gamble↔unilever,
   hsbc↔jpmorgan, schneider↔siemens, airbus↔bae-systems, abbvie↔astrazeneca, shell↔totalenergies,
   petrobras↔shell, petrobras↔totalenergies, mufg↔nomura. Sirve a: Carlos Bárez, al próximo toque de
   cada ficha (línea de comparables, no fusión).
4. **La banca sin hub es decisión, no laguna** (hecho: [[mapa-de-industrias]] línea 52 la marca "baja
   prioridad, Carlos no tiene banca en cartera"; mención plana de JPMorgan incluida). No se propone nada.

## Knowledge-ops — dominio rotado: empresas+industrias (53+26 páginas)

- **Caducidad**: saltada — 0 páginas >6 meses (la más antigua, 2026-07-07, tiene 42 días).
- **Duplicidades**: 3 lotes por la capa mecánica (235,8K + 199,9K + 135,5K caracteres; 3/3 exit 0,
  salidas válidas, sin `[DEGRADADO]`). 44 pares con solape; cruzados con wikilinks existentes, **44/44
  sin enlace** y 22 sin mención mutua ni en texto plano (los huecos reales, listados en Hallazgo 3).
  No hay duplicado de contenido que fusionar: son conexiones no hechas.
- **Conexiones no hechas — mención plana sin wikilink (lista cerrada, industria → empresa)**:
  - `industria-utilities-electricas.md:8` → [[iberdrola]]
  - `industria-lujo.md:8` → [[lvmh]]
  - `industria-consumo-staples.md:8` → [[nestle]]
  - `industria-consumo-masivo.md:8` → [[procter-gamble]]
  - `industria-conglomerados.md:8` → [[reliance-industries]]
  - `industria-electrificacion-automatizacion.md:8` → [[schneider-electric]] y [[siemens]]
  - `industria-automotriz.md:8` → enlaza la sonda fechada pero no la ficha [[toyota-motor]]
  - `industria-consumo.md:8` → [[unilever]]
  - `agencias-de-rating-y-datos.md:11,22` y `mapa-de-industrias.md:37` → Verisk plano → [[verisk]]
- **Empresas ni mencionadas en ninguna industria** (7): banco-santander-brasil, geico, hsbc, mufg,
  nomura, nubank, unitedhealth. De estas: unitedhealth↔[[salud-y-farma]] **ya escalado a la CIO el
  17-ago** (solo constato, no re-flag); geico es sub-ficha de Berkshire (probablemente deliberado);
  las 4 financieras + santander-brasil caen bajo la decisión "banca baja prioridad" del Hallazgo 4.
- **8 industrias sin enlace desde ninguna empresa**: baterias, belleza-consumo, ecommerce-latam,
  electrificacion-automatizacion, entretenimiento-japon, espirituosos, gases-industriales, retail-latam.
  Patrón común: esqueletos "hub pendiente de desarrollar" del enjambre 16-ago. No es defecto urgente;
  se vigila en la próxima rotación del dominio (martes 25-ago): si siguen sin carne, proponer poda.

## Calidad de fuentes (qué rindió o falló hoy en el equipo, con evidencia)

- **Elena (pulso texto)**: 10 newsletters, ING Think como primaria macro rindió muy bien (datos China
  julio: inversión -6,7% YoY, retail +0,6%). Cruces de 2º orden con wikilinks correctos.
- **Marco (pulso vídeo)**: 8 vídeos destilados por capa gratuita con `(sic)` donde toca; triangulación
  buena — 3 fuentes independientes coinciden en el nivel del bono 30a (5,27-5,30%). **Fallo de
  infraestructura (no de fuente)**: `raw/pulso-video/` sigue bloqueado 0555; los crudos del día viven en
  `scratchpad/yt-2026-08-18/`. Pendiente chmod de Carlos — ya registrado, solo constato persistencia.
- **Jorne (AT)**: nota operativa con niveles concretos e invalidación; sin incidencias.
- **Capa mecánica propia**: 3× `duplicidades` + 1× `enlaza`, 4/4 exit 0 con salida válida.

## Propuestas (destinatario explícito — nunca edito fuera de `wiki/conocimiento/`)

1. **A Inés Torres** (`wiki/industrias/`): convertir las 10 menciones planas de la lista cerrada en
   wikilinks. Mecánico, sin juicio; cada una con `archivo:línea`.
2. **A Carlos Bárez** (`wiki/empresas/`): añadir [[industria-electrificacion-automatizacion]] a
   [[schneider-electric]] y [[agencias-de-rating-y-datos]] a [[verisk]] (únicas fichas sin enlace a
   industria; la de Schneider ya trae ancla verificada por `enlaza`).
3. **A Carlos Bárez**: al próximo toque de cada ficha de los 12 pares de competidores directos
   (Hallazgo 3), añadir línea de comparables con wikilink cruzado. No proponer fusiones.
4. **A la próxima rotación (yo misma, 25-ago)**: revisar si las 8 industrias esqueleto siguen sin
   contenido; si es así, proponer poda o fusión al dueño.

## Para la CIO (lo que Elisa debe saber, ≤5 líneas)

Dominio empresas+industrias sano en contenido pero desconectado en enlaces: 44 pares con solape sin
wikilink, 10 menciones planas listas para `[[]]` mecánico, 2 fichas sin industria. Todo propuesto a
dueños, nada editado. Sin escalados nuevos: unitedhealth ya estaba escalado ayer; la banca sin hub es
decisión registrada del mapa. El bloqueo 0555 de `raw/pulso-video/` cumple otro día — sigue siendo lo
único que degrada la cadena de ingesta.

## Autocrítica

Misión modesta (0 scouts) pero ajustada al hueco real del día tras el enjambre: la lista cerrada con
`archivo:línea` es ejecutable tal cual por los dueños, que es más de lo que dejó ningún informe CKO
anterior sobre enlaces. Riesgo asumido: no verifiqué con `enlaza` más que Schneider; el resto de la
lista descansa en grep literal, suficiente para un cambio mecánico.
