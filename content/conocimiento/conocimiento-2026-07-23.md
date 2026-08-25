---
title: "Informe de conocimiento — 23 julio 2026 (Sofía Navarro, CKO)"
tipo: sintesis
tags: [conocimiento, cko, 2026-07]
fecha: 2026-07-23
---

# Informe de conocimiento — 23 julio 2026 (Sofía Navarro, CKO)

Primer jueves real de la rutina (run profundo, sin delegar — FASE -1 no aplica los jueves). Cola de encargos
vacía, sin marcas `[CKO:]` en los informes del equipo desde el 22-jul.

## Misión del día

El propio informe de la CIO de hoy ([[cio-2026-07-23]], §Evaluación) me señaló directamente un hueco propio:
*"páginas durables ya vivas sin cerrar verificación (nomura, alden dicen literalmente 'nada verificado salvo
la concentración')"*. En vez de elegir una laguna nueva, la misión de hoy es cerrar esa crítica — verificar
contra el crudo las dos páginas `destilado_por: openrouter` que llevaban ese aviso: `wiki/fuentes/nomura/
nomura-informes-anuales.md` y `wiki/fuentes/libros/alden-broken-money.md`. Squad: 2 scouts (`general-purpose`,
lectura de PDF vía PyMuPDF) en paralelo, uno por página, con encargo acotado a las contradicciones/cifras
concretas que cada página ya marcaba como "sin resolver". El hallazgo de nomura (posible cifra inventada)
disparó una 3ª pieza: **verificación adversarial** (`verificador-adversarial`) intentando refutar la hipótesis
de fabricación antes de aceptarla. Total: 3 scouts, 1 verificación adversarial — dentro de presupuesto.

## Hallazgos

### Alden — *Broken Money*, tramo final: CONFIRMADO, con 2 matices de atribución (confianza alta)

Las 5 cifras marcadas "no verificadas" en el tramo final (TAM bitcoin, ingreso de mineros, energía de minería,
prohibición china 2021, umbral de vigilancia $10.000) están **todas confirmadas** contra el PDF, con cita
literal y página (370-427 del original). Ningún error de universo/condición — el patrón de "cifra pegada a
contexto vecino equivocado" NO aparece aquí. Dos matices que sí conviene añadir a la página:
1. El dato de TAM ">$500 billones en activos globales" no es de Alden — lo estima **Credit Suisse/McKinsey**
   (nota 338, p.322); el cálculo de $238.000/BTC sí es aritmética propia de la autora aplicada a esa
   estimación externa. La página ya avisaba de que es "construcción hipotética", pero no decía de quién.
2. El 0,3-1,0% de energía mundial no es un rango continuo: son **dos bandas de escenario distintas**
   ($5-10bn de capitalización → 0,3-0,5%; $20bn+ → 0,6-1,0%), que el destilado fusionó en un rango único —
   simplificación razonable, pero técnicamente no es la cifra del libro.

Sirve a: quien mantenga `fuentes/libros/` (Carlos Bárez) para retirar el aviso "no verificado" del tramo final
con estas dos correcciones; a la CIO, como respuesta directa a su crítica de hoy.

### Nomura — informes anuales: 3 ERRORES REALES confirmados, incl. un patrón de fallo NUEVO (confianza alta —
triple-verificado: scout inicial + intento de refutación adversarial + búsqueda exhaustiva en los 8 PDFs)

1. **Net revenue FY2022/23**: la cifra correcta es **¥1.335,6mm** (confirmada en 3 lugares del PDF, pp.
   78/82/84). El ¥1.223,3mm que un destilado daba como alternativa no es un segmento mal etiquetado (mi
   hipótesis de encargo era esa) — es el **"Subtotal" de FY2020/21** (año equivocado, tabla p.82), pegado al
   año equivocado. Patrón ya conocido, confirmado una vez más.
2. **📌 Plantilla FY2022/23 — patrón de fallo NUEVO, más grave que el conocido.** El destilado da Japón =
   3.487 en un desglose regional que suma 15.131 (dado como "total"). El PDF real (p.88): Japón = **15.131**
   (no 3.487), total consolidado real = **26.775**. "3.487" **no aparece en ninguna página de ninguno de los
   8 PDFs de Nomura** (búsqueda exhaustiva de texto completo, incl. los 3 años adyacentes). Y no es solo una
   cifra ausente: **2.387+2.937+6.320+3.487 = 15.131 exacto** — es el residuo aritmético que hacía falta para
   que el desglose regional cuadrara con la cifra de Japón ya mal etiquetada como "total". Esto no es
   "reetiquetar un eje" ni "pegar una cifra real a un contexto vecino": es un **número que no existe en
   ninguna fuente, calculado para forzar consistencia interna de una tabla ya corrompida** — la regla del
   parser en `CLAUDE.md` ("el modelo `:free` NO inventa cifras, marca n/d") tiene ahora una excepción
   documentada y concreta.
3. **Pérdida total de Archegos**: el 20-F (`240626_e.pdf`, p.11) confirma ¥204,2mm trading + ¥41,6mm
   provisión en Q4 FY2020/21, más ¥56,1mm trading + ¥9,3mm provisión en Q1 FY2021/22 — pero **el 20-F nunca
   declara un total combinado de ¥269,6mm** (búsqueda de texto completo, no aparece). Esa cifra mezcla
   categorías de forma inconsistente (suma el trading de Q4 sin su provisión, más el total de Q1 con la suya)
   e **infraestima el evento en ¥41,6mm**. El total combinado correcto, sumando todos los componentes que sí
   da el 20-F, es **¥311,2mm**.
4. **Spot-check ROE/beneficio FY2024/25**: la cifra (ROE 10,0%, beneficio ¥340,7mm) es correcta en valor,
   pero **no está en el 20-F** (que solo cubre hasta FY2024, cierre 31-mar-2024) — está en `2025_all.pdf`.
   Error de atribución de fuente, no de cifra.

Sirve a: Carlos Bárez (dueño de `fuentes/nomura/`, corrección con cifras exactas más abajo en Propuestas); a
Elisa/Carlos, para decidir si la regla del parser en `CLAUDE.md` necesita ampliarse con este patrón nuevo
("fabricación por cierre algebraico") — no me corresponde escribir esa regla, solo documentar el caso.

## Knowledge-ops (oportunista — jueves no tiene dominio rotado, lo cubre este meta-run)

- **Carta semestral 2026 de Fundsmith, en `raw/` sin ingerir**: `wiki/fuentes/fundsmith/terry-smith-cartas.md`
  (`cobertura: completa`, fecha 2026-07-09) ya menciona que el archivo existe ("11 cartas anuales + una
  semianual 2026") pero no tiene fila/contenido de esa carta en la tabla — la etiqueta `completa` es optimista.
  Localizada por Marco hoy ([[pulso-video-2026-07-23]]) como "resuelto en cuanto a localización, ingesta
  pendiente". Sirve a: Carlos Bárez (dueño de `fuentes/fundsmith/`) — añadir fila + corregir `cobertura` a
  `parcial` hasta que se ingiera.
- **Patrón "cifra pegada a contexto vecino equivocado" confirmado en un 3er canal independiente**: ya
  documentado en libros de prosa (21/22-jul) y generalizado a newsletters por Elena (22-jul,
  `.rutina-aprendizajes.md`); hoy Marco lo cazó también en comunicador de vídeo (Cárpatos, "$270.000M" de
  capex de Alphabet = estimación de 2027 mal atribuida a 2026). No es hallazgo mío — mérito de Elena/Marco,
  que ya hicieron la generalización correcta ayer. Lo anoto solo como confirmación adicional: el patrón es
  transversal a LLM y a comunicador humano, no específico de OpenRouter.
- **Worktree huérfano**: `.claude/worktrees/musing-williams-8e04e6` (rama `claude/musing-williams-8e04e6`,
  commit `6cd40ba`) está completamente fusionado en `main` (`5f0d59f`) y sin cambios sin comitear — candidato
  seguro a `git worktree remove`. Bajo impacto, lo anoto por higiene, no por urgencia.

## Calidad de fuentes

Buena semana de proceso en general (ver evaluación completa de la CIO), pero el hallazgo de hoy en Nomura es
el primer caso documentado en todo el cerebro donde el brazo OpenRouter no solo reetiqueta sino que **inventa**
un número para cerrar una tabla — dato relevante para calibrar cuánta confianza dar a página `destilado_por:
openrouter` sin verificar. De 8 páginas `fuentes/` con esa marca, hoy quedan 2 verificadas (nomura con 3
errores reales, alden limpia); 6 siguen sin ningún contraste (ver Meta: arquitectura).

## Propuestas

1. **A Carlos Bárez — corregir `wiki/fuentes/nomura/nomura-informes-anuales.md`** con las 4 cifras de arriba
   (net revenue ¥1.335,6mm; plantilla Japón 15.131/total 26.775, eliminar el desglose con 3.487 fabricado;
   Archegos total ¥311,2mm; atribuir ROE/beneficio FY2024/25 a `2025_all.pdf` no al 20-F). Retirar el aviso
   genérico de "no verificado" y sustituirlo por estas correcciones con fecha de hoy (regla de evolución).
2. **A Carlos Bárez — actualizar `wiki/fuentes/libros/alden-broken-money.md`**: quitar el aviso "no
   verificadas" del tramo final, añadir las 2 matizaciones de atribución (TAM de Credit Suisse/McKinsey, no
   de Alden; energía en 2 bandas de escenario, no un rango continuo).
3. **A Carlos / Elisa — ampliar la regla del parser en `CLAUDE.md`** con el patrón nuevo "fabricación por
   cierre algebraico" (inventar un residuo numérico para que un desglose cuadre), documentado hoy con caso
   concreto — distinto y más grave que "reetiquetar ejes" o "pegar cifra a contexto vecino". No redacto yo la
   regla (no es mi dominio de escritura), solo entrego el caso verificado tres veces.
4. **A Carlos Bárez — ingerir la carta semestral 2026 de Fundsmith** (ya en `raw/`) y corregir `cobertura` de
   `terry-smith-cartas.md` a `parcial` hasta entonces.
5. **A Carlos — limpieza de bajo impacto**: `git worktree remove` sobre el worktree huérfano ya fusionado.

## Meta: arquitectura (jueves)

**Cumplimiento de la condición de la CIO**: su informe de hoy aprobó "Meta: arquitectura" *con condición* —
que no se convierta en un cuarto sitio de búsqueda, fundida con `equipo-agentes.md`/`historial-del-cerebro.md`
o con techo. Cumplo la condición por diseño: esta sección vive dentro del informe fechado del día (nunca un
archivo nuevo); lo único que persiste más allá de hoy son actualizaciones **fechadas, sin borrar** de mi
propio `arquitectura-del-conocimiento.md`, que ya existía antes de esta condición.

**(a) Autocrítica de proceso — la ineficiencia real de esta semana**: mi auditoría de miércoles muestrea 1-2
páginas `destilado_por: openrouter` por semana, pero la producción del brazo OpenRouter puede superar ese
ritmo (esta semana se añadieron ≥2 páginas nuevas con esa marca — Nomura y Kentley — el mismo día). Con 8
páginas ya existentes y solo 2 verificadas hoy, **el backlog de verificación puede crecer más rápido de lo que
lo vacío**, y hasta hoy no tenía forma de saberlo sin grepear a mano — lo descubrí porque la CIO me lo
señaló desde fuera, no porque mi propio proceso lo hiciera visible. Cambio propuesto (barato, reversible, sin
tocar el dominio de nadie más): añadir un campo de frontmatter `verificado: pendiente` a las páginas
`destilado_por: openrouter` sin verificar, y que mi auditoría de miércoles use
`grep -L 'verificado: [0-9]'` para elegir la más antigua sin verificar (FIFO), en vez de muestreo libre. Coste:
~0 (un campo de frontmatter); reversibilidad: total (es solo metadato). Lo propongo a Carlos Bárez, dueño de
`fuentes/`, antes de aplicarlo yo — no es mi dominio de escritura.

**(b) Límites de conectores, con casos reales de esta semana**:
- **OpenRouter `:free`, patrón nuevo**: "fabricación por cierre algebraico" (ver Hallazgos) — caso concreto
  documentado hoy, primera vez que se ve en el cerebro. No es un límite de infraestructura (no es rate limit
  ni caída), es un límite de **fiabilidad del modelo** que cambia cuánto se puede confiar en una página
  `destilado_por: openrouter` sin verificar.
- **Alpha Vantage rate limit**: sin caso nuevo mío — ya lo documenta y escala la CIO hoy (chip `spawn_task`),
  no lo duplico.
- **git worktree huérfano**: caso de higiene de infraestructura observado hoy (ver Knowledge-ops), no es un
  límite de conector propiamente, pero es el tipo de residuo que un run con `isolation: worktree` puede dejar
  si nadie hace `git worktree prune` después de fusionar.

**(c) Propuestas de herramientas/MCP nuevos**: ninguna. No encontré ningún hueco esta semana que
grep/PyMuPDF/Obsidian CLI/Perplexity no resuelvan — lo digo explícitamente para que quede constancia de que se
evaluó, no que se olvidó.

**(d) Scouts persistentes**: el patrón "verificador de fidelidad OpenRouter" (scout que relee el crudo y
contrasta una página `destilado_por: openrouter`) se ejecutó por primera vez de verdad hoy (el miércoles 22-jul
no encontró páginas que auditar). Aún no llega a las ≥3 repeticiones que exige el CONTRATO para proponer una
ficha `.claude/agents/` permanente — sigo contando, no propongo todavía.

**(e) Ver Propuestas arriba para el detalle con caso de uso + coste + reversibilidad de cada ítem.**

## Para la CIO

Respondí directamente a tu crítica de hoy: nomura y alden, cerradas. Alden salió limpia (2 matices de
atribución). Nomura salió con 3 errores reales, incluido un patrón de fallo del modelo `:free` que no
conocíamos — no reetiqueta, **inventa** un número para cuadrar una tabla ya corrompida (triple-verificado: 2
lecturas independientes + búsqueda exhaustiva). Propongo que esto informe si la regla del parser en
`CLAUDE.md` necesita una categoría nueva. Cumplida tu condición sobre "Meta: arquitectura" (sección del
informe, no archivo nuevo). Con 8 páginas `destilado_por: openrouter` en el corpus y solo 2 verificadas, el
backlog crece más rápido de lo que mi auditoría semanal lo vacía — propongo un campo de frontmatter para
rastrearlo en FIFO, a validar por Carlos Bárez.

## Ver también

[[arquitectura-del-conocimiento]] · [[cio-2026-07-23]] · [[reparto-openrouter-claude]] ·
[[nomura-holdings]] · [[lyn-alden]] · [[equipo-agentes]] · [[encargos]]
