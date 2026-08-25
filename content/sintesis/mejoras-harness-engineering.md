---
title: "Mejoras de 'harness engineering' para el equipo de agentes — plan pendiente"
tipo: sintesis
tags: [meta, agentes, harness, coste, fiabilidad, pendiente, 2026-07]
fecha: 2026-07-22
fuentes: []
---

# Mejoras de "harness engineering" para el equipo de agentes — plan pendiente

Destilado del estudio (2026-07-22) de dos repos públicos que Carlos aportó:
`lopopolo/harness-engineering` (doctrina, ~50k palabras) y `walkinglabs/learn-harness-engineering`
(curso, 22MB). **Ninguno se instaló**: el segundo es material de curso cuyo auditor (`audit-harness.sh`)
está calibrado para repos de código (Makefile, `npm test`, lockfiles) y contra este vault daría todo en
rojo sin significar nada; el primero no es software, es doctrina. Lo que sigue es lo único que sobrevivió
al filtro, para ejecutar en sesión fresca sin arrastrar el contexto del estudio.

> Tesis de la que sale todo: se fija el modelo como caja negra y solo se optimizan los **dos mandos
> externos** — contexto y herramientas. El solapamiento con lo que este sistema ya hacía resultó ser alto
> (escritor único = *one concept, one owner*; `## VIGENTE` ≤80 líneas = *just-in-time context*; la doctrina
> anti-fallos = *feedback as infrastructure*; el Brier = su capa de *proof*). No es herencia: es que la
> disciplina de coste empuja al mismo sitio. El valor está en los huecos, no en la arquitectura.

## Tanda 1 — INSTALADA el 2026-07-22 (commit siguiente al de esta página)

1. **Roster plano (anti-recursión de subagentes)** → `.claude/sistema/reglas-nucleo.md`.
   Regla dura: los subagentes hoja (`verificador-adversarial`, `recopilador-fundamental`,
   `analista-fundamental`, `editor-jefe`) **no invocan la herramienta Agent/Task**. Verificar además el
   campo `tools:` de `.claude/agents/*.md` y quitar Agent donde esté por herencia. *Problema que resuelve*:
   delegación recursiva no contenida = coste multiplicado sin traza. Coherente con la auditoría del
   2026-07-20 (92,6% del gasto en sesiones interactivas).
2. **Campo `revisado` en el frontmatter**, distinto de `fecha` (que es creación/última edición).
   Marca "vigencia comprobada el X" sin reescribir contenido. Aplicar a `conceptos/`, `sintesis/` y
   `actualidad/`; añadir a `CLAUDE.md` § Convenciones y un grep en `/cerebro-auditoria` que señale páginas
   con `revisado` antiguo frente a fuentes más nuevas. *Problema*: hoy detectar una página desactualizada
   exige leerla entera — justo la lectura cara que el sistema evita en todo lo demás.
3. **Cap mecanizado de la memoria `## VIGENTE`**: al implementarlo se vio que el paso 3 de
   `cerebro-mantenimiento-semanal` **ya medía** las líneas y compactaba por encima de 80 — la idea estaba
   implementada al 80%. Solo se añadió el delta: aviso ÁMBAR entre 65 y 80 líneas (llegan al tope antes
   del siguiente run) y detección de entradas que son párrafo largo en vez de gancho de una línea.

## Tanda 2 — a criterio del agente en sesión fresca

4. **Bucle de verificación de intervenciones** (de `playbooks/improve-harness.md`): baseline → hueco más
   temprano → intervención mínima → rerun fresco comparable → retener/revisar/eliminar. Hoy
   `reglas-nucleo.md` solo crece: incidente → regla nueva → se asume que funciona; ninguna regla se ha
   comprobado nunca contra un run fresco, ni se retira cuando su clase de fallo deja de ocurrir. **Es el
   hallazgo más valioso de los dos repos y el más incómodo**, porque es disciplina, no un archivo. Ya pasó
   una vez lo que previene: la fusión del 2026-07-20 de 7 archivos en uno porque 11 de 13 rutinas los leían
   enteros cada run. Riesgo de no hacerlo: el archivo fusionado se vuelve a inflar regla a regla.
5. **Auditor de conformidad de rutinas** (`scripts/audita_rutinas.py`): recorrer
   `~/.claude/scheduled-tasks/*/SKILL.md` y comprobar por grep las secciones del esquema propio de la casa
   (FASE -1, tabla CONTRATO con sus columnas, PASOS con "HECHO cuando:", JUICIO, AUTOCHECK), con veredicto
   CRITICAL/RECOMMENDED y punch-list. Es el **patrón** del `audit-harness.sh` del curso reescrito contra
   nuestro esquema, no el script. ~150-250 líneas. *Problema*: la conformidad de las 12 rutinas depende hoy
   de mirarlas a ojo.

**Idea adicional, sin decidir**: medir el reloj que no está instrumentado — no tokens, sino si Carlos
llega a leer un informe antes de que caduque (catalizadores fechados que vencen sin revisar). El recurso
escaso del sistema es su atención, y es el único que no se mide. Requiere decidir qué cuenta como "leído"
sin añadirle fricción.

## Descartado explícitamente

WIP=1, `feature_list.json`, capas de verificación tipo build, CI/CD, canaries, fuzzing y todo el aparato de
*proof* de software: no compilamos ni desplegamos nada, el artefacto es una página markdown y su prueba
correcta ya existe (verificación adversarial de cifras y citas + Brier, ver [[registro-de-predicciones]]). Su
vocabulario de coordinación multi-agente (issues, PRs, merge gates) lo cubre ya el escritor único por
dominio con mucha menos maquinaria.

## Ver también

[[equipo-agentes]] · [[estado-del-sistema]] · [[reparto-openrouter-claude]] ·
[[brainstorming-mejoras-del-cerebro]]
