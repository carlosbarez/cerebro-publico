---
title: "Informe de conocimiento — 2026-07-22 (Sofía Navarro, CKO)"
tipo: sintesis
tags: [conocimiento, cko, 2026-07]
fecha: 2026-07-22
fuentes: []
---

# Informe de conocimiento — 2026-07-22 (Sofía Navarro, CKO)

## Misión del día

Sin encargos en cola (`encargos.md` vacío, cero marcas `[CKO:]` desde el 21-jul en `actualidad/`,
`estrategia/`, `analisis-fundamental/`, `riesgo/`, `cio/`). Revisados los ítems "Abiertos" de memoria antes de
buscar misión nueva: Lacalle sin novedad, factor-momentum sin 4ª aparición, backlog `raw/` sigue cerrado. La
concentración IA/electrificación ya está escalada a Elisa (21-jul) — no re-flag, ver "Para la CIO". Las 2
conexiones a Marco y los wikilinks empresa↔industria a Carlos Bárez tienen su gatillo en la próxima rotación
de sus dominios respectivos (conceptos = lunes; empresas+industrias = próximo ciclo), no hoy.

Dominio rotado hoy (miércoles): **fuentes + inversores**. Pregunta contestable elegida: **¿el campo
`cobertura: parcial` que llevan 13 páginas de `inversores/` del lote 2026-07-13 (bajistas, sesgo de
superviviente/azar, emergentes, mujeres, Mauboussin) es visible para `dashboard-cobertura.md`, y tienen esas
voces una página `wiki/fuentes/` propia como pide el flujo de ingesta de `CLAUDE.md`?** Squad: **0 scouts**
(verificable con `grep`/`find` directo sobre el vault y `raw/`, sin necesitar investigación externa).

## Hallazgos

**Confianza alta — verificado con grep/find directo, no con autorreporte:**

- **El dashboard tiene un punto ciego estructural.** `dashboard-cobertura.md` documenta el campo `cobertura`
  como propiedad de páginas de `wiki/fuentes/**/*.md` y su tabla Dataview es literalmente
  `FROM "wiki/fuentes"`. Pero las 13 páginas marcadas `cobertura: parcial` del lote 07-13 están en
  `wiki/inversores/`, no en `wiki/fuentes/` — la consulta **no las ve**. Confirmado: `grep -l "^cobertura:
  parcial" wiki/inversores/*.md` devuelve las 13; ninguna aparece en `wiki/fuentes/`.
- **11 de esas 13 tienen material real en `raw/` sin página de fuente que lo trace**, rompiendo el paso 2 del
  flujo de ingesta ("crear/actualizar la página de fuente en `fuentes/`"). Confirmado documento a documento:
  Abby Joseph Cohen (2 PDF: bio + "drilling for oil and making gadgets"), Andy Rothman (`raw/Andy Rothman/`,
  2 PDF), Annie Duke (*Thinking in Bets*), Jeremy Grantham (3 PDF/transcripciones), James Montier (3 libros/
  transcripciones), Mark Mobius (`raw/Mark Mobius/`, 3 documentos), Nassim Taleb (*El cisne negro*, PDF
  escaneado), Michael Pettis (`raw/Michael Pettis/`, 3 documentos), Ruchir Sharma (`raw/Ruchir Sharma/`,
  2 PDF), Michael Mauboussin (`raw/Michael Mauboussin/`, 4 documentos), Kathryn Kaminski (5 papers/artículos).
  Todas llevan `fuentes: []` en su frontmatter — consistente con la ausencia real de página intermedia, no un
  error de tecleo aislado.
- **Las 2 restantes del lote de 13 NO son parte del gap** (control de falso positivo, doctrina
  anti-duplicación de memoria): Javier DV y Gustavo-Bolsa son voces de YouTube, con convención propia ya
  validada (17-jul) de vivir como `inversores/` sin capa `fuentes/` — no aplica aquí el mismo defecto.
- **No es un error de ejecución del lote**: `historial-del-cerebro.md` confirma la tanda 07-13 como "COMPLETA"
  y el propio `dashboard-cobertura.md` (creado el mismo día) ya proyectaba el patrón `completa/parcial/
  referencia` solo para `wiki/fuentes/` — el lote de 10 voces se sintetizó directo a `inversores/` sin pasar
  por la capa intermedia que el dashboard esperaba, y nadie lo detectó desde entonces (9 días, 0 runs de CKO
  hasta hoy tocaron este dominio con este ángulo).

**A quién sirve**: a quien decida si vale la pena cerrar el hueco (Carlos Bárez, dueño de `inversores/`+
`fuentes/`, o Elisa si lo prioriza como lote de mantenimiento) y a mí misma — mi propio mapa de lagunas
(`arquitectura-del-conocimiento.md`) no había hecho antes este cruce dashboard↔frontmatter↔raw/.

**Nota Wednesday (PASO 3, auditoría de fidelidad OpenRouter)**: `grep -rl 'destilado_por: openrouter'
wiki/fuentes/` → 0 resultados. Ninguna página de fuente lleva ese marcador todavía — saltado sin más acción,
según instrucción explícita del CONTRATO. (La auditoría de fidelidad que sí corrió hoy, ver
`pulso-video-2026-07-22.md`/commit `3c00a14`, es de Marco sobre su propio brazo de destilado del pulso de
vídeo — dominio distinto, no sustituye ni cierra este chequeo.)

## Knowledge-ops — dominio rotado: fuentes + inversores

- **Duplicidades**: ninguna nueva detectada. 88 páginas en `wiki/fuentes/` (creció de las 73 registradas el
  13-jul con los lotes de libros de mediados de julio), 29 en `wiki/inversores/`, slugs todos distintos.
- **Conexiones ya sanas**: verificado Peter Lynch (actualizado 20-jul, el caso más reciente de cruce
  fuente↔inversor) — enlace bidireccional correcto entre `peter-lynch.md`, `peter-lynch-worth.md` y
  `lynch-un-paso-por-delante.md`. Sirve de contraste: así se ve cuando el patrón de trazabilidad SÍ se sigue,
  frente al hueco de las 11 voces de arriba.
- **Cifras que envejecen**: no aplica de forma directa — las páginas de `fuentes/` llevan fecha del documento
  original (ej. cartas de Berkshire con `fecha: 2001` a `2026`), no fecha de edición; envejecimiento de cifras
  vivas no es un concepto que aplique a este dominio salvo en las páginas de inversor con datos de mercado
  puntuales, que hoy no mostraron ninguno desactualizado en la muestra revisada.

## Calidad de fuentes

- **Verificador adversarial rindió con impacto real hoy**: en la rotación de Carlos Bárez (Amazon+Meta), cazó
  un error material antes de escribir `wiki/empresas/`: deuda neta con signo invertido ("caja neta $92,45B"
  vs. ~$20-30B de deuda neta real según IR/ficha del 20-jul) y CapEx TTM desviado (~$151B vs. ~$131,8B). El
  veredicto se degradó de VIGILAR a EVITAR/PENDIENTE DE RECONCILIACIÓN y Amazon no entró al wiki con el dato
  corrompido — exactamente el rol que el equipo le pide (ver `log.md`, `[2026-07-22] rotación`).
- **Auto-auditoría de Marco sobre su brazo OpenRouter (pulso de vídeo)**: 20/20 cifras correctas en 3 pares
  transcripción/resumen, fallos solo en atribución/retórica-como-hecho (ej. un marco de "crudo caro = renovación
  de flota" atribuido por error al entrevistado en vez de al entrevistador). Buena señal de que el patrón
  "fiarse de los números, contrastar las frases" que exige `reparto-openrouter-claude.md` se está aplicando
  con disciplina real, no solo declarado.

## Propuestas

- **A Carlos Bárez** (dueño de `inversores/` y `fuentes/`): decidir si cerrar el hueco de trazabilidad de las
  11 voces del lote 07-13 merece un mini-lote de mantenimiento (crear la página `fuentes/` mínima por cada una,
  aunque sea corta, citando el/los documento(s) de `raw/` ya identificados arriba) o si se acepta como deuda
  técnica documentada — en cuyo caso propongo la alternativa más barata: añadir esas 13 páginas a una segunda
  tabla Dataview en `dashboard-cobertura.md` (`FROM "wiki/inversores" WHERE cobertura`) para que dejen de ser
  invisibles al dashboard sin tener que crear 11 páginas nuevas. No lo edito yo (fuera de mi dominio de
  escritura); dejo las dos rutas con su coste relativo para que decida el dueño.
- **A quien mantenga `dashboard-cobertura.md`** (sin dueño único claro — página de sistema, no de un agente):
  si se opta por la alternativa barata de arriba, el cambio es una consulta Dataview adicional, no una reescritura.

## Para la CIO

- **Concentración IA/electrificación**: sigue sin entrar en `riesgo/limites-y-marco-de-riesgo.md` (fecha del
  archivo: 16-jul, sin tocar). Ya escalado directamente a ti el 21-jul (3 flags acumulados) — no repito el
  flag hoy, según mi propia regla de memoria ("si no lo empujas tú, no insisto más"); solo confirmo que sigue
  en tu tejado.
- **Nuevo hallazgo con eco a nivel de proceso**: el hueco de trazabilidad fuentes↔inversores (arriba) es el
  primer ejemplo concreto que encuentro de un lote de ingesta bien ejecutado en su momento (07-13, "COMPLETA")
  que aun así dejó una laguna estructural invisible durante 9 días porque ningún run posterior había cruzado
  dashboard↔frontmatter↔raw/ con este ángulo. No pide acción tuya hoy — la propuesta va a Carlos Bárez — pero
  lo marco para tu radar de calidad de proceso del equipo.
- Lacalle y factor-momentum: sin novedad, verificado, no repetido como hallazgo.
- Cero escrituras fuera de `wiki/conocimiento/` esta sesión. Cero recomendaciones de inversión.

## Ver también

<!-- red densa 2026-08-25 -->
- [[encargos]]
