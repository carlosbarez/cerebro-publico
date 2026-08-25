---
title: "Informe de conocimiento — 2026-07-21 (Sofía Navarro, CKO)"
tipo: sintesis
tags: [conocimiento, cko, 2026-07]
fecha: 2026-07-21
fuentes: []
---

# Informe de conocimiento — 2026-07-21 (Sofía Navarro, CKO)

## Misión del día

Sin encargos en cola (`encargos.md` vacío, cero marcas `[CKO:]` desde el 20-jul) → laguna propia. Antes de
elegir, revisé los 5 ítems "Abiertos" de memoria (ver sección Knowledge-ops/CIO abajo para el detalle de cada
uno) — ninguno pedía una investigación nueva desde cero, pero **uno** (concentración IA/electrificación) cruzó
su propio gatillo de escalado.

Con eso resuelto, elegí una pregunta contestable de alto valor y coste casi cero: **el lote de ingesta
"Javier del Valle" (14 lecturas, ~4.500 págs., cerrado el 20/21-jul: 9 páginas de fuente + ~19 conceptos + 1
síntesis + actualizaciones a `peter-lynch`, `manuales-de-valoracion`, 4 conceptos transversales) es el mayor
lote que ha entrado al cerebro de una sola vez — ¿introdujo enlaces rotos, duplicidades o pérdida del
encuadre crítico ("caja subordinada") en alguna de sus 35 páginas nuevas/tocadas?** Squad: **0 scouts**
(pregunta simple, verificable con script propio + lectura selectiva, sin necesitar investigación externa).

## Hallazgos

**Confianza alta — verificado con herramienta propia, no solo con el autorreporte del lote:**

- **0 enlaces rotos** en las 35 páginas nuevas/tocadas por el lote Del Valle. Script propio (no `grep`
  superficial): extrae todos los `wikilink` de esas 35 páginas y comprueba contra el índice real de
  archivos del vault. Sirve a: Carlos Bárez (autor del lote), Elisa (calidad del proceso del equipo).
- **0 duplicidades en el clúster de mayor riesgo**: 4 páginas nuevas/existentes sobre ciclos de mercado
  (`ciclos-de-mercado` de Marks —existente, 11-jul—, `fases-del-ciclo-bursatil`, `tipos-de-mercado-bajista`,
  `super-ciclos-y-regimenes-estructurales` —las 3 nuevas, vía Oppenheimer) parecían el candidato obvio a
  redundancia por nombre. Leídas las 4: están **explícitamente diferenciadas y cruzadas por el propio
  orquestador** (`fases-del-ciclo-bursatil` se autodefine como "la versión cuantificada de lo que
  [[ciclos-de-mercado]] describe de forma cualitativa"; `super-ciclos-y-regimenes-estructurales` se autodefine
  como "la capa temporal intermedia" entre el péndulo de Marks y el macro-ciclo). Sin acción necesaria.
- **El aviso de fuente de baja fiabilidad SÍ propaga correctamente**: 2 de los 14 PDF del lote resultaron
  derivados comerciales de la app Bookey (O'Neil/CANSLIM y Manual of Ideas de Mihaljevic — capítulos
  truncados, ~100 gráficos de O'Neil ausentes). El propio lote lo marca con `cobertura: parcial` + aviso ⚠️
  explícito en las páginas de fuente (`momentum-tecnico-oneil-y-darvas.md`, `manual-of-ideas-mihaljevic.md`)
  **y** el aviso llega intacto a la página de concepto derivada (`metodo-canslim.md` repite el aviso, no lo
  pierde al subir de nivel). Es exactamente la disciplina que el CONTRATO exige de mí sobre fuentes de otros —
  aquí el propio autor ya la aplicó.

**Conclusión de la misión**: el lote más grande hasta la fecha entró limpio. Sin correcciones que proponer al
dueño (Carlos Bárez). Sin necesidad de verificación adversarial (no es una afirmación que cambie el
comportamiento de Carlos ni una promoción a durable nueva — es control de calidad de un proceso ya cerrado).

## Knowledge-ops — dominio rotado: empresas + industrias

Backlinks contados por script (`grep -rl "[[slug"` contra las 19 páginas de `empresas/` y 10 de `industrias/`)
— sin huérfanas totales (todas tienen ≥1 entrante), pero el conteo bajo de varias señaló un patrón real al
leer el contenido:

> — dato privado retirado —
  **5 veces** en el cuerpo (incluye P&L: "+30%") sin un solo `[[baidu]]`. Único backlink real de toda la página
  es una línea de `index.md`. Sirve a: quien navegue la industria y quiera saltar a la ficha de la posición.
- **TSMC**: `industrias/semiconductores-logica-y-computo-ia.md` la nombra 2 veces como "single point of
  failure geopolítico" del sector — la página SÍ enlaza `[[nvidia]]` y `[[asml]]` pero no `[[tsmc]]`, la más
  citada de las tres en riesgo geopolítico.
- **Verisk**: `industrias/agencias-de-rating-y-datos.md` la nombra 5 veces (incl. "cuasi-monopolio en
  analítica de siniestros") y enlaza `[[moodys]]` pero nunca `[[verisk]]`.
- **Alphabet, Meta, Microsoft — el hallazgo mayor**: `industrias/plataformas-tecnologicas-y-publicidad-digital.md`
  es la página que literalmente describe estas 3 posiciones (11+ menciones nominales: "Alphabet: monopolio de
  búsqueda...", "Meta: publicidad social...", "Microsoft: software empresarial + Azure...", tabla de
  Posiciones con importes) y **no tiene NINGÚN wikilink** a `[[alphabet]]`, `[[meta-platforms]]` ni
  `[[microsoft]]` — las 3 fichas de empresa que ese texto describe. Es el hueco de mayor impacto de hoy: la
  página-hub de la industria más pesada de la cartera tecnológica no conecta con ninguna de sus fichas.
- **UnitedHealth — laguna distinta (no de enlace, de categorización)**: es posición real de cartera
  (mencionada en `estrategia/mckinsey-financieras-consumo-e-industriales-2026.md` y
  `estrategia/vision-sectorial-externa-2026.md`) pero **no aparece ni una vez** en `salud-y-farma.md` ni en
  `mapa-de-industrias.md`. Como aseguradora/*managed care* no encaja del todo en "salud y farma" (que es
  biotech/farma), así que no es un simple wikilink que falte — es que la industria "seguros de salud
  gestionados (US)" no tiene casilla propia en el mapa. Sirve a: Carlos Bárez / Inés (quien mantenga
  `mapa-de-industrias.md`), Daniel (para el mapa de riesgo por sector).
- **Cifras/páginas que envejecen**: `berkshire-hathaway.md` y `geico.md` sin tocar desde 2026-07-07 (fecha de
  creación del vault) — ninguna cruza aún el umbral de 6 meses del CONTRATO, pero son las dos páginas de
  empresa más antiguas sin una sola actualización en 2 semanas de vida intensa del cerebro. No hay hallazgo
  concreto de dato caducado (no leí el contenido completo para no exceder el alcance de hoy), solo la señal de
  "página más fría del dominio" para vigilar la próxima rotación.
- **Duplicidades**: ninguna en `empresas/`+`industrias/` (19+10 páginas, nombres todos distintos, sin
  solapamiento de alcance detectado).

## Calidad de fuentes

- **El lote Del Valle brilló** (ver Hallazgos arriba): autocrítica de procedencia explícita, 0 enlaces rotos,
  cero pérdida del encuadre "caja subordinada" al subir de fuente a concepto. Es el estándar a exigir en
  lotes grandes futuros — vale la pena que Carlos Bárez lo mantenga como referencia de proceso, no solo de
  contenido.
- **Editor-jefe** (según `log.md`): sin intervención registrada en el lote Del Valle específicamente hoy —
  las correcciones de aritmética/notación reportadas la semana pasada fueron sobre el pulso, no sobre este
  lote.

## Propuestas

- **A Carlos Bárez** (dueño de `empresas/` y de la ingesta que crea `industrias/`): añadir 4 wikilinks de
  coste cero — `[[baidu]]` en `plataformas-de-internet-de-china.md`, `[[tsmc]]` en
  `semiconductores-logica-y-computo-ia.md`, `[[verisk]]` en `agencias-de-rating-y-datos.md`, y
  `[[alphabet]]`/`[[meta-platforms]]`/`[[microsoft]]` en `plataformas-tecnologicas-y-publicidad-digital.md`
  (este último es el de mayor impacto: 3 enlaces en la página-hub de la posición tecnológica más pesada).
- **A Carlos Bárez / Inés** (mapa de industrias): decidir cómo encaja UnitedHealth — ¿ampliar
  `salud-y-farma.md` con una sección de "seguros de salud gestionados", o crear una entrada nueva en
  `mapa-de-industrias.md`? No lo decido yo (no es mi dominio de escritura), solo señalo que hoy no tiene casa.
- **Backlog de `raw/` (8 documentos, inventariado 20-jul): RESUELTO.** El lote Del Valle (14 lecturas) incluyó
  los 4 de prioridad alta/media-alta que yo había señalado (Lynch *Un paso por delante*, REQ Capital +
  Speziale sobre compounders adquisitivos, Manual of Ideas) más 5 adicionales no inventariados por mí (Siegel,
  Oppenheimer, Chancellor, Flash Boys, O'Neil/Darvas). Sin acción pendiente de mi parte — marco el ítem
  cerrado en memoria y en `arquitectura-del-conocimiento.md` (fechado, no borrado).

## Para la CIO

- **Escalado, no re-flag**: la concentración de factor único IA/electrificación (semis + materiales:
  TSMC/Rio Tinto/Freeport/Nvidia) sigue **sin entrar** en `riesgo/limites-y-marco-de-riesgo.md`
  (fecha del archivo: 16-jul, sin tocar desde entonces) — verificado hoy con `grep` directo sobre esos 4
  nombres, cero coincidencias. Van **3 flags** (17-jul, 20-jul, hoy) y la evidencia solo ha crecido. Mi propia
  memoria marcaba este run como el gatillo para escalarte a ti directamente en vez de re-flag pasivo a Daniel
  — lo hago aquí: si no entra en el próximo ciclo de riesgo, sugiero que sea empuje tuyo, no mío (no
  construyo ni valoro el riesgo, solo señalo que el proceso de incorporación está estancado).
- Lacalle (due-diligence 17-jul) y las 2 conexiones propuestas a Marco (economia-de-activos-vs-salarios ↔
  renta-fija-y-tipos ↔ ciclo-de-imperios-y-moneda-reserva) siguen sin resolverse, sin novedad que reportar
  hoy — verificado, no repetido como hallazgo.
- Cero escrituras fuera de `wiki/conocimiento/` esta sesión. Cero recomendaciones de inversión.
