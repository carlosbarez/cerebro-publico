---
title: "Informe de conocimiento — 2026-07-20 (Sofía Navarro, CKO)"
tipo: sintesis
tags: [conocimiento, cko, 2026-07]
fecha: 2026-07-20
fuentes: []
---

# Informe de conocimiento — 2026-07-20 (Sofía Navarro, CKO)

## Misión del día

Sin encargos en cola (`encargos.md` vacío, cero marcas `[CKO:]` desde el 17-jul) → laguna propia. Antes de
elegir una nueva investigación externa, revisé los tres ítems "Abiertos" de la memoria del 17-jul:

- **Daniel Lacalle**: sin decisión de Carlos/Elisa todavía → no re-investigar, sigue abierto.
- **factor-momentum**: 3ª reaparición confirmada (17-jul), sin 4ª aparición nueva → sigue por debajo del
  umbral de Marco, no es mi dominio.
- **Concentración factor único IA/electrificación** (propuesta a Daniel el 17-jul): **sigue sin entrar** en
  `riesgo/limites-y-marco-de-riesgo.md` tres días después, y desde entonces el equipo ha profundizado Rio
  Tinto, TSMC, Freeport y Nvidia (más exposición documentada al mismo factor) → la re-flago en Propuestas,
  no la reinvestigo desde cero.

Con eso resuelto, elegí una pregunta contestable con datos que ya tenía a mano en `raw/`: **¿qué aportan
realmente los documentos nuevos que Carlos ha dejado en `raw/` sin ingerir todavía, y en qué orden merece la
pena procesarlos?** Squad: **0 scouts** — caso de "pregunta simple" del CONTRATO: abrí los 8 PDF con
`PyMuPDF` (título/autor/páginas/primera página) y contrasté cada uno contra el índice del wiki con `grep`, sin
necesitar investigación externa.

## Hallazgos

**8 documentos nuevos en `raw/` (ninguno referenciado todavía en `wiki/`, confirmado por grep), ~1.900
páginas combinadas.** Sirve a: Carlos (los subió), Carlos Bárez (dueño de la ingesta de libros/análisis
fundamental), Elisa (prioriza el roadmap de ingesta).

| Documento | Autor | Págs. | Qué es | Solape con corpus | Prioridad |
|---|---|---|---|---|---|
| `Un-paso-por-delante-de-Wall-Street.pdf` | Peter Lynch | 297 | *One Up on Wall Street*, ed. española | **Cero** — [[peter-lynch]] ya es voz durable (19ª voz) vía columnas de *Worth*, pero `fuentes/libros/peter-lynch-worth.md` dice literalmente "no es *One Up on Wall Street* (su libro canónico, no en `raw/`)". Ahora sí está. | **Alta** — cierra un hueco que el propio wiki ya había señalado |
| `REQ-Acquisition-driven-Compounders-July-2025.pdf` | REQ Capital (Hadziefendic/Nyland/Dybvad) | 312 | Informe institucional sobre creación de valor vía M&A serial ("compounders" adquisitivos) | **Bajo** — "compounder"/"serial acquirer" aparece disperso en 20+ páginas (industrias, empresas, [[interes-compuesto]]) pero sin página de concepto propia sobre el modelo de negocio en sí | **Alta** — hueco de modelo de negocio real, no solo de vocabulario |
| `REQ-Deep-Dive-Acquisition-driven-Compounders-December-2023.pdf` | REQ Capital (mismos autores) | 326 | Versión dic-2023 del mismo informe | Solapa mucho con el de julio-2025 (mismo emisor, mismo marco) | **Media** — leer primero la versión jul-2025; esta solo si aporta casos que la nueva no cubra, no releer las 326 págs. enteras |
| `capital-compounders-robin-r-speziale.pdf` | Robin R. Speziale | 289 | Libro divulgativo sobre invertir en "compounders" de crecimiento | Mismo clúster que los REQ, ángulo distinto (retail/divulgativo vs. institucional) | **Media-alta** — buen contraste de fuente para el mismo hueco |
| `Libros muy recomendables/The Manual Of Ideas PDF.pdf` | John Mihaljevic | 134 | Proceso de generación de ideas de inversión value | **Cero** — el corpus no tiene página sobre *cómo* generar ideas (tiene *cómo valorarlas* vía [[manuales-de-valoracion]], no *de dónde salen*) | **Media** — el más corto, buena relación esfuerzo/valor |
| `Libros muy recomendables/Cómo ganar dinero con las acciones PDF.pdf` | William O'Neil | 267 | Método CANSLIM (momentum/crecimiento técnico) | Ya mencionado una vez en `pulso-video-2026-07-14.md` pero sin ingesta propia; [[analisis-tecnico-y-tendencia]] es caja subordinada | **Media-baja** — fuera del círculo de competencia value/calidad de Carlos; dueño natural sería Jorne si se decide |
| `Libros muy recomendables/9340.pdf` | David A. Moss (HBR Press) | 201 | *A Concise Guide to Macroeconomics* | Ninguna página de referencia macro-académica equivalente a [[manuales-de-valoracion]] | **Baja-media** — caja de herramientas de fondo, no tesis nueva |
| `DI-0771.pdf` | Pablo Fernández (IESE) | 52 | Paper académico "Métodos de valoración de empresas" | **Alto** — mismo terreno que Damodaran+McKinsey ya profundizados en [[manuales-de-valoracion]] | **Baja** — único valor incremental sería el ángulo académico español; no urgente |

**Confianza: alta** en el inventario (metadata + primera página extraída directamente del PDF, no de memoria);
**media** en el juicio de solape del clúster "compounders" (inferido del título/autor y grep del corpus, no leí
los 3 documentos enteros — eso es trabajo de ingesta, no de este informe).

## Knowledge-ops — dominio rotado: conceptos

- **Conexión no hecha (1)**: [[economia-de-activos-vs-salarios]] (nueva, 20-jul) y la nota de evolución de hoy
  en [[renta-fija-y-tipos]] vienen del **mismo vídeo fuente** (`pulso-video-2026-07-20`, Cárpatos) y describen
  el mismo mecanismo desde dos caras (QE/tipos reales → precios de activos vs. QE → brecha de riqueza) pero no
  se enlazan entre sí. Sirve a: quien lea cualquiera de las dos páginas y quiera el mecanismo completo. Sin
  arreglar por mí (dominio de Marco/orquestador de ingesta, no mío) — propuesto abajo.
- **Conexión no hecha (2)**: [[ciclo-de-imperios-y-moneda-reserva]] (el Gran Ciclo de Dalio, que incluye
  dinámicas de brecha de riqueza como fase del ciclo) y [[economia-de-activos-vs-salarios]] tratan la misma
  idea a distinta escala temporal (siglos vs. trimestres) sin cruzarse. Mismo dueño, misma propuesta.
- **Duplicidades**: ninguna encontrada en las páginas de conceptos tocadas desde el 17-jul.
- **Cifras que envejecen (>6 meses en páginas vivas)**: **ninguna** — el vault tiene ~2 semanas de vida
  (creado 2026-07-07), por lo que este chequeo da negativo por diseño todavía; primera vez que se puede esperar
  encontrar algo real será a partir de enero 2027.
- **Enlaces rotos**: 0 en las 4 páginas de `conceptos/` tocadas desde el 17-jul (verificado por script contra
  el índice real de archivos, no solo por inspección visual).

## Calidad de fuentes

- **Buena práctica observada**: en [[economia-de-activos-vs-salarios]], Cárpatos etiqueta explícitamente su
  cifra de reparto del rally del S&P ("cálculo estimativo propio, no dato oficial") en vez de presentarla como
  dato duro — exactamente la separación hecho/opinión que exige el CONTRATO. Vale la pena que el resto de
  comunicadores del pulso sigan ese estándar.
- **Editor-jefe** (según `log.md` de hoy) corrigió una mezcla de notación española/inglesa de grandes cifras
  ("billones" vs. "Bn") en 2 archivos del pulso-video de hoy — detección correcta, ya resuelta antes de mi
  lectura.

## Propuestas

- **A Carlos Bárez (fundamental) y Elisa**: tabla de priorización de ingesta de los 8 documentos nuevos de
  `raw/` (ver Hallazgos). Orden sugerido si hay que elegir por dónde empezar: (1) Lynch *One Up on Wall Street*
  ES — cierra hueco ya señalado por el propio wiki, (2) REQ jul-2025 + Speziale — hueco real de modelo de
  negocio "compounder adquisitivo", (3) Manual of Ideas — más corto, proceso no cubierto. El resto puede
  esperar o descartarse sin coste (Pablo Fernández solapa mucho con lo ya profundizado).
- **A Daniel (riesgo)**: re-flag de la propuesta del 17-jul (concentración de factor único IA/electrificación
  entre semis y materiales de cartera) — sigue sin reflejarse en `limites-y-marco-de-riesgo.md` y la evidencia
  ha crecido (Rio Tinto, TSMC, Freeport, Nvidia profundizados desde entonces). No la repito como hallazgo
  nuevo, solo señalo que el gatillo de "revisar si ya se resolvió" dio negativo otra vez.
- **A Marco (pulso-video, escritor único de las páginas que tocó hoy)**: añadir enlace cruzado entre
  [[economia-de-activos-vs-salarios]] ↔ [[renta-fija-y-tipos]] y ↔ [[ciclo-de-imperios-y-moneda-reserva]] en su
  próxima edición — mismo mecanismo, tres escalas temporales, cero coste de investigación adicional.

## Para la CIO

Sin misión de alto impacto que requiera verificación adversarial hoy (el inventario de `raw/` es un hallazgo
de arquitectura, no una afirmación de inversión). El hueco de "concentración de factor único" sigue sin
resolverse 3 días después — si Daniel no lo incorpora en su próximo run, quizá merezca tu empuje directo. Cero
escrituras fuera de `wiki/conocimiento/` esta sesión.
