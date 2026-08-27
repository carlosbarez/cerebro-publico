---
title: "Auditoría y diseño del Sistema Operativo de Inversión (2026-07)"
tipo: sintesis
tags: [meta, auditoria, sistema-operativo, agentes, automatizacion, calidad]
fecha: 2026-07-16
fuentes: ["[[equipo-agentes]]", "[[brainstorming-mejoras-del-cerebro]]"]
---

# Auditoría y diseño del Sistema Operativo de Inversión (2026-07)

> [!info] Qué es este documento
> Auditoría **sin apego** de todo el sistema (arquitectura, agentes, rutinas, flujos, calidad) + diseño del
> sistema operativo que lo hace **reproducible con modelos pequeños**. Encargo de Carlos del 2026-07-16.
> Es la ESPECIFICACIÓN: se aprueba aquí y se implementa por fases (ver hoja de ruta, §9). No se ha tocado
> ninguna rutina en producción. Complementa (no sustituye) a [[brainstorming-mejoras-del-cerebro]], que miraba
> huecos de CONTENIDO; este mira el SISTEMA.

**Base de evidencia**: lectura completa de las 10 rutinas programadas (`~/.claude/scheduled-tasks/*/SKILL.md`),
los 6 subagentes (`.claude/agents/`), los 6 comandos (`.claude/commands/`), las 7 memorias de aprendizajes
(5 runs reales de newsletters, 2 de fundamental, 1 de CIO/riesgo/estrategia/técnico), los informes reales del
13-16 jul, `equipo-agentes.md`, `.mappings.json` y el estado real del programador de tareas.

---

## 1. Diagnóstico (resumen ejecutivo)

El sistema es **mucho mejor de lo que su edad sugiere** — en 4 días de vida el equipo ya produjo evidencia de
que el diseño multicapa funciona: el verificador adversarial degradó 2 veredictos inflados en 2 días
(Moody's, Booking), cazó un error aritmético del recopilador (margen neto >100% en Micron), y la CIO detectó
y parcheó un **sesgo sistemático de anclaje** con log reversible. La doctrina anti-fallos (un solo escritor,
degradación elegante, memorias de automejora) es sólida y está funcionando de verdad, no en el papel.

Los problemas reales son de otra naturaleza:

1. **Deriva por duplicación**: la doctrina (anti-fallos, coste, densidad, ética, autocrítica) está
   **copiada-pegada en 8+ archivos** con variantes ligeras. Es la fuente nº1 de fragilidad futura: cada
   mejora hay que replicarla a mano en N sitios, y ya hay versiones desincronizadas.
2. **Cadenas rotas silenciosas**: el sintetizador-durable existe pero **no está programado** (la cola
   `promociones-pendientes` que la CIO debe consumir no se alimenta sola); el cron del veredicto no coincide
   con su documentación; una rutina muerta (`newsletter-review`) sigue registrada; nadie detecta un run caído
   hasta que la CIO mira (lunes/jueves).
3. **Contradicción de escritor único**: la rutina fundamental autoriza a registrar predicciones directamente
   ("o regístralas tú") violando el escritor único de `wiki/predicciones/`.
4. **Instrucciones optimizadas para el modelo equivocado**: los SKILL.md son prosa densa escrita para un
   modelo listo. Sonnet la ejecuta bien; Haiku pierde forma (informe de Jorne: erratas, niveles
   inconsistentes 870/873/850, sin reintento tras rate-limit). Falta la separación **contrato rígido para lo
   mecánico / libertad con checklist para el juicio**.
5. **Memorias sin protocolo de compactación**: la de newsletters lleva 291 líneas en 5 runs (~1.700 en 2
   meses a este ritmo); cada run la lee entera. El coste crece linealmente y la señal se diluye.
6. **Sin plantillas como archivos**: los formatos de output viven descritos en prosa dentro de cada SKILL.md.
   Para un modelo pequeño, una plantilla con ejemplo vale más que tres párrafos de descripción.

**Lo que NO está roto** (y el prompt genérico de la auditoría pedía rediseñar): el sistema de calidad
multicapa existe y funciona; el diario de decisiones existe; la calibración Brier existe; los checklists
existen ([[screening-de-calidad]], [[checklist-macro-y-ciclo]], [[evaluar-una-cartera]]); el límite ético está
en todas partes. Aquí se **formalizan y afinan**, no se reinventan.

---

## 2. Hallazgos priorizados

Prioridad = impacto × frecuencia × riesgo ÷ esfuerzo. **P0** = corregir ya (una sesión); **P1** = el corazón
del rediseño; **P2** = mejoras con calendario propio.

### P0 — corregir ya (alto impacto, esfuerzo mínimo)

| # | Hallazgo | Evidencia | Corrección |
|---|---|---|---|
| P0-1 | **Violación de escritor único en predicciones**: `cerebro-analista-fundamental` FASE 5 dice "o regístralas tú si es una tesis de alto impacto" — pero el escritor único de `wiki/predicciones/` es `cerebro-veredicto-semanal` | SKILL.md fundamental, FASE 5 | Quitar esa cláusula: los analistas SIEMPRE listan predicciones en su sección "Para el CIO" y el veredicto semanal las registra. Cero excepciones |
| P0-2 | **Sintetizador-durable sin programar**: SKILL.md existe (commit a2c3d0e), la CIO tiene instrucción de consumir su cola, pero la tarea no está en el programador → la promoción efímero→durable depende de runs manuales | `list_scheduled_tasks` (10 tareas, sin sintetizador) | Programarlo: sábados 08:00, vía `ejecutor-haiku` como ya define su FASE -1 |
| P0-3 | **Rutina muerta**: `newsletter-review` (disabled, sustituida por `cerebro-ingesta-diaria-newsletters`) sigue registrada | `list_scheduled_tasks` | Borrarla (la tarea y su carpeta) |
| P0-4 | **Cron ≠ documentación**: veredicto semanal — doc/description dicen "domingos 18:00", cron real `0 9 * * 1` (lunes 09:00). Además corre DESPUÉS de la CIO del lunes (06:00), que se queda sin scorecard fresco | Programador + SKILL.md | Decidir una: recomiendo **domingo 18:00 real** (deja el scorecard listo para la CIO del lunes) y alinear description + SKILL |
| P0-5 | **Descripción del CIO engañosa**: dice "only on Monday" en el schedule legible pero el cron `0 6 * * 1,4` es lunes Y jueves (correcto). Menor, pero confunde auditorías | Programador | Regenerar la description al tocar la tarea |

### P1 — el corazón del rediseño (alto impacto, esfuerzo medio)

| # | Hallazgo | Evidencia | Corrección (diseño en §3-§8) |
|---|---|---|---|
| P1-1 | **Doctrina duplicada en 8+ archivos**: anti-fallos, disciplina de coste, estándar de densidad, límite ético, autocrítica — cada SKILL.md lleva su copia, ya con variantes. Mantenimiento O(N), deriva garantizada | Las 10 rutinas leídas; p. ej. el estándar de densidad aparece en 6 versiones | **Capa de reglas de sistema** (`.claude/sistema/`): un archivo por regla, los SKILL.md las referencian con una línea. Ver §3 |
| P1-2 | **SKILL.md monolíticos en prosa**: identidad + doctrina + procedimiento + formato + cableado mezclados. Un modelo pequeño no distingue lo negociable de lo innegociable | Informe de Jorne (Haiku): fallos de forma, no de juicio | **SKILL.md estándar por bloques**: CONTRATO (tabla) → pasos atómicos → referencias → autocheck en checkboxes. Ver §8 |
| P1-3 | **Memorias sin compactación**: crecen sin límite, se leen enteras cada run | `.rutina-aprendizajes.md` 291 líneas / 5 runs | **Protocolo de memoria** (§3.5): sección `## VIGENTE` (lo que se lee siempre, con techo de tamaño) + `## Histórico` (se consulta, no se lee por defecto); compactación mensual en la rutina de mantenimiento |
| P1-4 | **Anclaje sistemático de origen**: el lenguaje evaluativo de cartera actual ("candidato de calidad, barato") contaminó 2 tesis en 2 días; el parche actual es una nota en el prompt | `.af-aprendizajes.md` 2026-07-15/16; `.cio-aprendizajes.md` | **Protocolo de valoración a ciegas** (§7): el analista construye [[valor-intrinseco|valor intrínseco]] ANTES de leer qué dice la cartera/tesis previa de esa empresa; el contraste con la postura previa es un paso posterior y explícito |
| P1-5 | **Umbral del verificador estrecho**: Verisk (+9% margen) no se verificó por "no ser COMPRAR" — el propio agente lo señaló | `.af-aprendizajes.md` 2026-07-16 | Ampliar el disparador: se verifica **todo output que pueda cambiar el comportamiento de Carlos** (veredicto con margen positivo, cambio de postura, alerta de riesgo, propuesta de la CIO). Ver §7 |
| P1-6 | **Nadie vigila que los runs ocurran**: un fallo silencioso (worktree del CIO, límite de sesión) solo se descubre si alguien mira. Log/index compartidos entre todas las rutinas con solapes horarios (03:15 vs 03:31) | Incidente worktree en `.cio-aprendizajes.md`; caídas por límite de sesión en `.af-aprendizajes.md` | **Rutina de mantenimiento semanal** (Haiku, §4): watchdog de `lastRunAt` + lint + compactación de memorias + curación de mappings. Espaciar los crons de madrugada |
| P1-7 | **`.mappings.json` ensucia el grafo**: mapeos semánticamente incorrectos (`ormuz|petroleo → valoracion-ciclicas-y-beneficios-negativos`, `inflacion → riesgo-real-vs-volatilidad`, `kospi|samsung → michael-pettis`, `capex|gpu → eficiencia-de-mercado`) aplicados mecánicamente por los agentes de pulso | `.mappings.json` leído | Pasada de curación + regla nueva: un mapping enlaza keyword→concepto solo si el concepto TRATA ese keyword (no "me lo recuerda"). La curación periódica va a la rutina de mantenimiento |
| P1-8 | **Commits inconsistentes**: solo 3 rutinas commitean (veredicto, gestor, sintetizador); las ingestas diarias y los analistas dejan el vault sin commit durante días | SKILL.md comparados; convención de CLAUDE.md | Fase de commit estándar en TODA rutina que escribe (git local, barato). Regla de sistema única (§3) |
| P1-9 | **Sin plantillas de output como archivos** | No existe ninguna plantilla en vault/.claude | **`.claude/plantillas/`** con ejemplo relleno; herramienta flexible, no corsé (§6) |

### P2 — mejoras con calendario propio

| # | Hallazgo | Corrección |
|---|---|---|
| P2-1 | **Sin protocolo de earnings**: Verisk publica el 29-jul y no existe flujo de earnings-review (el catalizador quedó como nota suelta en una memoria oculta) | Skill `earnings-review` (§5) + calendario de earnings de las posiciones en la watchlist |
| P2-2 | **Sin watchlist formal**: las candidatas (ASML, defensa/industriales…) viven dispersas en `.af-aprendizajes.md` y en informes | Página viva `wiki/analisis-fundamental/watchlist.md`, escritor único: rutina fundamental (§6) |
| P2-3 | **Elena y Marco comparten ~90% del SKILL** con distinta fuente | Núcleo común (skill de ingesta de pulso) + anexo por fuente. Reduce a la mitad la superficie de mantenimiento |
| P2-4 | **Coste sin medir**: la CIO debe optimizar calidad÷coste "con datos" pero nadie apunta el coste | Línea de coste aproximado (nº llamadas por modelo) en la autocrítica de cada run; la CIO agrega |
| P2-5 | **Jorne (Haiku) flojo en forma** | Primer piloto del SKILL.md estándar + plantilla rígida (§8). Si tras 4 runs persiste → propuesta de subir a híbrido |
| P2-6 | **Backup fuera del disco sigue pendiente** (ya señalado en [[brainstorming-mejoras-del-cerebro]]) | Decisión de Carlos: disco externo o nube. El sistema no puede resolverlo solo |
| P2-7 | **Cadencia impar/par frágil**: fundamental (`*/2` = días impares) y técnico (`2-30/2` = pares) colisionan en meses de 31 días (31→1 = dos impares seguidos) y el reparto es opaco | Cambiar a días de semana explícitos (p. ej. fundamental L-X-V, técnico M-J-S) |

---

## 3. Diseño del Sistema Operativo (capas y reglas maestras)

El sistema queda en **9 capas**, cada una con un dueño y un archivo canónico. Lo nuevo está marcado ★.

| Capa | Qué es | Dónde vive | Dueño |
|---|---|---|---|
| 0. Constitución | Esquema del wiki + acta del equipo | `CLAUDE.md` + [[equipo-agentes]] | Carlos (+agente en sesión) |
| 1. ★ Reglas de sistema | Doctrina única, referenciada por todos | `.claude/sistema/*.md` | Carlos aprueba; CIO propone cambios |
| 2. Agentes | Roster: rutinas + subagentes | `~/.claude/scheduled-tasks/` + `.claude/agents/` | CIO (cambios pequeños), Carlos (grandes) |
| 3. ★ Skills | Procedimientos reutilizables | `.claude/skills-cerebro/*.md` | quien los usa; mantenimiento los audita |
| 4. ★ Plantillas | Contratos de output con ejemplo | `.claude/plantillas/*.md` | ídem |
| 5. Memorias | Aprendizaje por agente | `wiki/<dominio>/.<x>-aprendizajes.md` | cada agente; compacta mantenimiento |
| 6. Calidad | Verificación multicapa | §7 (matriz) | verificador/editor/CRDSO/CIO |
| 7. Calibración | Brier, scorecard | `wiki/predicciones/` | veredicto semanal (escritor único) |
| 8. ★ Mantenimiento | Watchdog + lint + compactación | rutina semanal nueva | Haiku |

### 3.1 Reglas de sistema (`.claude/sistema/`) — la corrección de P1-1

Archivos cortos, **una regla por archivo**, versión única. Cada SKILL.md los referencia con una línea
("Aplica `.claude/sistema/doctrina-anti-fallos.md`") en vez de copiarlos:

- `doctrina-anti-fallos.md` — un solo escritor; degradación elegante; tools mínimas; fan-out acotado;
  checkpoint en scratchpad; pre-aprobación; auto-reparación; autocrítica universal. (Hoy: 8 copias.)
- `estandar-de-densidad.md` — cifras exactas, mecanismo de 2º orden, profundidad por tema, cruce
  obligatorio, señal alta cero paja. **Más el matiz que ya pidió la CIO**: densidad ∝ señal del día, un día
  plano no se infla. (Hoy: 6 copias divergentes.)
- `disciplina-de-coste.md` — crudo a disco nunca a contexto; punteros entre agentes; presupuestos por run
  (cap de empresas/verificaciones/llamadas); no releer lo procesado.
- `limite-etico.md` — propone el agente, decide y ejecuta Carlos; nunca credenciales ni órdenes; no es
  asesoramiento regulado. (Hoy: 9 copias.)
- `protocolo-de-memoria.md` — ver §3.5.
- `protocolo-de-escritura.md` — dominios de escritor único (tabla), formato de log/index, **fase de commit
  obligatoria** al final de toda rutina que escribe (P1-8), y la regla de la fecha: la nota lleva la fecha
  del CONTENIDO, no la del run (aprendizaje real del 2026-07-15).
- `protocolo-de-escalada.md` — ver §8.3 (la regla `[DUDA]`/`[Sin datos]` para modelos pequeños).

Regla maestra de edición: **estos archivos solo los cambia Carlos o la CIO con log reversible**. Un cambio
aquí afecta a todo el equipo a la vez — esa es exactamente la ventaja (arreglar una vez, no ocho) y el riesgo
(romper una vez, romper ocho): por eso quedan bajo control de cambios estricto.

### 3.2 Protocolos de decisión (ya existen — se consolidan, no se duplican)

- Decisión de inversión: [[proceso-de-inversion]] (CIO) + [[consejo-de-voces]] para las grandes + diario
  decisiones con señales falsables + [[registro-de-predicciones]] para medirlas.
- Decisión sobre el SISTEMA (cambiar un agente/regla): pequeña y reversible → CIO con log; grande → propuesta
  a Carlos (chip `spawn_task` o `propuestas-para-carlos.md`). **Sin cambios: funciona** (evidencia: los 2
  parches de la CIO del 16-jul, ambos con instrucción de reversión).

### 3.5 Protocolo de memoria (corrección de P1-3)

Toda memoria `.<x>-aprendizajes.md` pasa a dos secciones:

```markdown
## VIGENTE (se lee SIEMPRE en Fase 0 — techo ~80 líneas)
- Reglas de método activas (deduplicadas, sin narrativa)
- Clasificaciones vivas (remitentes/canales/endpoints por ticker)
- Tesis/hipótesis abiertas a revisar
## HISTÓRICO (no se lee por defecto; se consulta con grep si hace falta)
- Entradas por fecha, como hasta ahora
```

Cada run lee solo VIGENTE; escribe su entrada nueva en HISTÓRICO y **actualiza VIGENTE si la lección es de
método** (una regla nueva sustituye a la anécdota que la originó). La rutina de mantenimiento compacta: si
VIGENTE supera el techo, funde duplicados y baja detalles al histórico. Esto convierte el coste de memoria de
O(runs) a O(1) sin perder trazabilidad.

---

## 4. Rediseño de agentes

Veredicto general tras leer todo: **la estructura de 9 roles es correcta y no se fusiona ningún rol de
juicio**. La cadena DÓNDE (Inés) → QUÉ (Carlos Bárez) → CUÁNDO (Jorne), con pulso (Elena/Marco) alimentando,
riesgo (Daniel) como contrapeso y CIO (Elisa) integrando, replica la separación de un equipo de inversión
real y ya mostró valor (la corrección CIO↔Inés sobre la concentración de IA es el sistema funcionando). Los
cambios son de **infraestructura y cadencia**, no de organigrama:

| Agente | Modelo hoy | Cambio propuesto | Por qué |
|---|---|---|---|
| Elisa (CIO) | Opus 2×sem | **Mantener** modelo y cadencia; quitarle la carga de vigilar caídas (pasa a mantenimiento) | Opus se reserva para juicio puro; el watchdog es trabajo de Haiku |
| Elena / Marco (pulso) | Sonnet diario | **Mantener**; unificar núcleo común de sus SKILL (P2-3) | Mismo flujo, distinta fuente; la extracción exige juicio de filtrado → Sonnet se queda |
| Inés (estrategia) | Sonnet 2×sem | **Mantener**; candidata futura a híbrido (Haiku datos macro + Sonnet síntesis) cuando haya 6+ runs de evidencia | Su Fase 2 (recolección de datos) es mecánica; la síntesis no |
| Carlos Bárez (fundamental) | híbrido Haiku+Sonnet, días impares | **Mantener híbrido** (es el patrón a imitar); cambiar cadencia a días de semana fijos (P2-7); cap 2 empresas/run ya validado | El híbrido es la mejor relación calidad÷coste demostrada del sistema |
| Jorne (técnico) | Haiku, días pares | **Mantener Haiku** + primer piloto del SKILL.md estándar con plantilla rígida (§8); reevaluar en 4 runs | Sus fallos son de FORMA (lo que la plantilla arregla), no de juicio |
| Daniel (CRDSO) | Sonnet 2×sem | **Mantener** | El informe más útil del sistema según la propia CIO |
| Veredicto semanal | Sonnet | **Mantener Sonnet** (la resolución exige verificar hechos con criterio); mover a domingo 18:00 (P0-4) | Registrar/resolver mal una predicción corrompe la calibración de TODO el sistema — no es sitio para ahorrar |
| Gestor de cartera | Sonnet mensual | **Mantener** | Aún sin ejecutar (1-ago); evaluar tras el primer run |
| Sintetizador durable | Haiku (sin programar) | **Programar** sábados 08:00 (P0-2) | Cierra el bucle efímero→durable |
| ★ Mantenimiento semanal | — | **CREAR** (Haiku, domingos ~09:00): watchdog de `lastRunAt` de todas las tareas + lint de enlaces/YAML + compactación de memorias + curación de `.mappings.json` + tamaño de logs. Output: `wiki/sintesis/estado-del-sistema.md` (semáforo por rutina, 20 líneas) | Corrige P1-6, P1-7, P1-3 con el modelo más barato; es 100% mecánico = territorio Haiku ideal |
| newsletter-review | disabled | **Borrar** (P0-3) | Muerta |

**Subagentes** (`.claude/agents/`): los 6 se mantienen. Ajustes: (1) al `verificador-adversarial`, umbral
ampliado (P1-5) + la pregunta de independencia de fuentes que ya emergió ("¿estas dos fuentes confirman de
forma INDEPENDIENTE o citan el mismo primario?") como paso fijo; (2) al `recopilador-fundamental`, el chequeo
aritmético que le añadió la CIO se mueve a la skill `ficha-de-datos` (§5) para que también lo use quien
recopile sin él; (3) `ejecutor-sonnet`/`ejecutor-haiku` sin cambios — el patrón FASE -1 funciona y su
fallback está probado.

**Cadena de madrugada, espaciada** (corrige solapes de P1-6): 03:00 Elena → 03:45 Marco → 04:30
fundamental/técnico (alternos por día de semana) → 05:15 Inés (L/J) → 06:00 Daniel (L/J) → 06:45 Elisa (L/J).
Sábado: sintetizador. Domingo: veredicto (18:00) . Domingo noche o lunes muy temprano: mantenimiento.

---

## 5. Skills reutilizables (`.claude/skills-cerebro/`)

Procedimientos que hoy están repetidos (o ausentes) y pasan a archivo único invocable por rutinas Y comandos.
Formato de cada skill: media página — objetivo · cuándo sí/cuándo no · pasos numerados · checklist · errores
conocidos (sembrados desde las memorias reales, que ya los documentan). **9 skills, no 15**: las otras seis
áreas del encargo ya tienen página en el wiki y la skill se limitaría a duplicarla (gestión de cartera →
[[evaluar-una-cartera]], psicología → [[sintesis-del-comportamiento]], macro → [[checklist-macro-y-ciclo]],
sectorial → [[mapa-de-industrias]], síntesis → estándar de densidad, ventajas competitivas →
[[foso-economico]] + [[screening-de-calidad]]).

1. **`extraccion-de-fuentes.md`** — PDF (PyMuPDF), EPUB (ebooklib), email (plaintextBody→htmlBody con orden
   de regex correcto), web (defuddle→WebFetch), YouTube (yt-dlp android + dedup VTT). Hoy: disperso entre
   CLAUDE.md, 2 rutinas y 3 memorias. Incluye la regla de oro: crudo a disco, contexto solo destilado.
2. **`ficha-de-datos.md`** — el contrato del recopilador: bloques obligatorios, orden de fuentes
   (MCP→helper→Perplexity→`[Sin datos]`), y el **chequeo de sanidad aritmética** (EPS×acciones ≈
   ingresos×margen plausible; alerta especial en cíclicas con narrativa de superciclo — lección Micron).
3. **`valoracion-por-industria.md`** — el dispatch: cíclica→mid-cycle/P-B nunca pico; calidad→expectativas
   implícitas (Mauboussin); minera→NAV/AISC multi-precio; financiera→[[valoracion-de-empresas-financieras]];
   China→múltiplos con descuento de gobernanza. Enlaza a la página de industria, no la repite. Marco
   metodológico de detalle: skills `dcf-model`/`comps-analysis` del plugin financial-analysis (ya instalado).
4. **`verificacion-adversarial.md`** — cuándo disparar (umbral ampliado §7), qué pasar (afirmación + fuente
   YA extraída), cómo aplicar el veredicto (degradar, no borrar), y la pregunta de independencia de fuentes.
5. **`prediccion-falsable.md`** — cómo redactar una que se pueda puntuar: umbral numérico + fecha + criterio
   de resolución de fuente pública + prob honesta. Con 3 ejemplos reales del registro. La usan TODOS los que
   marcan `📌 predicción:`.
6. **`memoria-de-agente.md`** — el protocolo VIGENTE/HISTÓRICO de §3.5, con el ejemplo de compactación.
7. **`earnings-review.md`** ★ nuevo (P2-1) — antes del earnings: qué espera la tesis (cifras umbral); después:
   resultado vs. umbral, ¿la tesis se refuerza/erosiona?, ¿dispara revisión o es ruido de trimestre?; anota en
   la página de empresa (regla de evolución) y propone predicción si hay umbral claro. Primer uso: Verisk 29-jul.
8. **`promocion-a-durable.md`** — criterios VERIFICADO+DURABLE del sintetizador + la regla de evolución
   (nota fechada, nunca borrar) + quién puede escribir en qué página.
9. **`densidad-y-autocheck.md`** — el estándar (referencia a `.claude/sistema/`) + el autocheck de 5 preguntas
   que hoy repiten las Fases 7. Para que comandos manuales (p. ej. `/cerebro-pulso`) usen el mismo listón que
   las rutinas.

**Regla anti-inflación**: una skill nueva solo nace si ≥2 consumidores la necesitan (rutina+comando, o dos
rutinas). Si solo la usa uno, vive dentro de su SKILL.md.

---

## 6. Plantillas de trabajo (`.claude/plantillas/`)

**Encuadre acordado con Carlos**: herramienta, no corsé. Cada plantilla dice qué secciones son OBLIGATORIAS
(pocas — las que hacen el output verificable y comparable entre runs) y deja el resto libre. Regla de
asimetría: cuanto más mecánico el rol, más rígida la plantilla; los agentes de juicio (tesis, CIO) las usan
como esqueleto mínimo, no como formulario. Cada una lleva un **ejemplo relleno abreviado** (a los modelos
pequeños un ejemplo les enseña más que la descripción).

| Plantilla | Para quién | Núcleo obligatorio | Estado |
|---|---|---|---|
| `ficha-de-datos.md` | recopilador (Haiku) | identidad · IS/BS/CF · calidad · valoración · señales · fuente+fecha por bloque · sanity check declarado | **rígida** (rol mecánico) |
| `tesis-de-empresa.md` | analista fundamental | negocio · industria (enlace) · moat · financieros · valoración por escenarios con margen · riesgos · red flags · veredicto · **qué invalidaría la tesis** · predicciones falsables | esqueleto (juicio libre dentro) |
| `informe-pulso.md` | Elena/Marco | frontmatter + callout FOTO · secciones por tema · "Lo que esto le dice al cerebro" · `📌 predicción:` · preguntas abiertas | esqueleto |
| `informe-tecnico.md` | Jorne (Haiku) | por activo: tendencia/niveles/momentum/volumen · escenarios con % · **invalidación** · plan táctico · separación observación/interpretación | **rígida** (piloto P2-5) |
| `informe-estrategia.md` | Inés | cuadro macro · mapa sectorial over/under/neutral con porqué · escenarios con prob · secciones "Para X" | esqueleto |
| `informe-riesgo.md` | Daniel | métricas con supuestos · mapa impacto×prob · stress · límites propuestos vs. actuales · sesgos con evidencia · alerta | esqueleto |
| `informe-cio.md` | Elisa | situación · escenarios · lente de asignación · propuestas · guía para Carlos | esqueleto |
| `earnings-review.md` | fundamental | esperado vs. real por umbral de tesis · veredicto refuerza/erosiona/rompe · acción propuesta | rígida-corta |
| `watchlist.md` ★ | fundamental (escritor único) | tabla: empresa · por qué · precio/valor estimado · gatillo de entrada · próximo catalizador · última revisión | rígida-corta |
| `estado-del-sistema.md` ★ | mantenimiento (Haiku) | semáforo por rutina (último run, ok/fallo) · enlaces rotos · memorias sobre techo · acciones tomadas | **rígida** |

Ya existen y NO se duplican: ficha de decisión (convención en decisiones), ficha de predicción (en
[[registro-de-predicciones]]), plantilla de página de industria (en [[mapa-de-industrias]]), post-mortem
(= nota de revisión en la ficha de decisión + veredicto Brier; si un caso grande lo pide, se convoca
[[consejo-de-voces]] retrospectivo — no hace falta una plantilla nueva).

---

## 7. Sistema de calidad multicapa (formalización)

Ya existe de facto; aquí queda la matriz explícita de **quién verifica a quién, qué y cuándo**:

| Capa | Verifica | A quién / qué | Cuándo | Coste |
|---|---|---|---|---|
| 1. Mecánica | sanity check aritmético (skill §5.2) + lint enlaces/YAML (`obsidian eval`) | fichas de datos; toda nota escrita | en el propio run | ~0 |
| 2. Adversarial | `verificador-adversarial` (Sonnet) | afirmaciones/veredictos de alto impacto | **umbral ampliado**: todo lo que pueda cambiar el comportamiento de Carlos — veredicto COMPRAR **o VIGILAR con margen positivo**, cambio de postura sobre posición, alerta que pida reducir un bloque, dato extremo sin fuente primaria, y las propuestas grandes de la CIO | ≤3/run (fan-out acotado se mantiene) |
| 3. Editorial | `editor-jefe` (Haiku) | densidad, estilo, enlaces del borrador **del día** (alcance: no reescribe contenido de runs previos — fricción ya vista el 16-jul) | antes de cerrar la nota | bajo |
| 4. De proceso | Daniel (CRDSO) | el PROCESO de todos (¿tesis documentadas? ¿predicciones registradas? ¿sesgos?) + los límites | L/J | medio |
| 5. Estratégica | Elisa (CIO) | contraste autoevaluación de cada agente vs. lo observado; calidad÷coste por agente | L/J (jueves a fondo) | alto (Opus) |
| 6. Cuantitativa | Brier ([[registro-de-predicciones]]) | calibración de agentes, comunicadores y Carlos | semanal | bajo |
| 7. Humana | Carlos | decisiones; este propio sistema | siempre | — |

**Anti-sesgo estructural (P1-4), la pieza nueva**: protocolo de **valoración a ciegas** para el analista
fundamental. Orden del run: (1) ficha de datos + página de industria → (2) valoración y veredicto
preliminar **sin leer** cartera actual ni la tesis previa de esa empresa → (3) solo entonces, contraste
explícito: "mi valoración a ciegas dice X; la postura previa decía Y; la diferencia se explica por…". El
verificador deja de ser la única barrera contra el anclaje (hoy lo caza a posteriori; esto lo evita en
origen). Mismo principio, versión suave, para Inés (ya lo tiene: "no adaptes el análisis a la cartera") y
Jorne ("no muevas niveles para justificar una posición").

**Verificación de hechos y fuentes** (ya operativa, se consolida en la skill §5.4): jerarquía primaria >
secundaria; "dos medios citando el mismo informe ≠ dos fuentes independientes" (lección BofA-FMS del 16-jul);
cifras extremas sin primaria se marcan "a confirmar" y caducan si nadie las confirma.

---

## 8. Optimización para modelos pequeños (el énfasis del encargo)

Objetivo doble: **bajar coste sin bajar calidad** (más carga a Haiku donde es seguro) y **subir calidad al
mismo coste** (que Sonnet no gaste contexto en descifrar prosa). La palanca no es "prompts más largos con más
avisos" — es estructura.

### 8.1 Principio rector: asimetría rigidez/libertad

- **Roles mecánicos** (recopilador, editor, sintetizador, veredicto-registro, mantenimiento, Jorne-forma):
  contrato rígido, plantilla con ejemplo, criterios binarios, cero interpretación. Aquí Haiku rinde como
  Sonnet si el contrato es bueno.
- **Roles de juicio** (tesis, estrategia, riesgo, CIO, verificador): principios + checklist de salida +
  libertad de razonamiento. Aquí el corsé DAÑA (un Sonnet rellenando formulario piensa peor que uno que
  razona y luego estructura). No se baja de modelo por ahorrar: un juicio malo cuesta más que cualquier token.

### 8.2 El SKILL.md estándar (reestructura de P1-2)

Todo SKILL.md de rutina pasa a 4 bloques, en este orden:

```markdown
## CONTRATO (tabla — lo que un modelo pequeño necesita sin ambigüedad)
| Identidad | quién eres, una frase |
| Lee (inputs) | rutas exactas, en orden |
| Escribe (outputs) | rutas exactas + plantilla de cada una |
| Dominio de escritura | de qué eres escritor único |
| Presupuesto | cap de ítems/llamadas/verificaciones por run |
| Modelo | quién te ejecuta y por qué |
| Reglas de sistema | lista de .claude/sistema/*.md que aplican |

## PASOS (numerados, atómicos: una acción + criterio de "hecho")
1. Lee X. HECHO cuando: tienes A y B en contexto.
2. ... (sin "si procede" ni "con cabeza" en pasos mecánicos: criterios medibles)

## JUICIO (solo roles de juicio: los principios y marcos, en prosa — aquí SÍ libertad)

## AUTOCHECK (checkboxes antes de cerrar — los modelos pequeños siguen checkboxes mejor que prosa)
- [ ] ¿Cada output usa su plantilla y su frontmatter valida?
- [ ] ¿Cifras con fuente? ¿Cruces presentes? ¿Predicciones marcadas?
- [ ] ¿Commit hecho? ¿Memoria VIGENTE actualizada?
```

La identidad/persona se conserva (una frase + enlace al acta) — da consistencia de voz — pero deja de ocupar
un tercio del archivo. La doctrina sale a `.claude/sistema/` (P1-1). Resultado esperado: SKILL.md de 17KB →
~6-8KB, más fácil para Haiku Y más barato para todos (cada run relee su SKILL entero).

### 8.3 Protocolo de escalada (la válvula de seguridad de los modelos pequeños)

Regla de sistema nueva (`protocolo-de-escalada.md`): un modelo pequeño **nunca inventa ni fuerza** — marca y
sigue. `[Sin datos: X]` (ya existe), `[DUDA: X — decidí Y por Z]` (nuevo: decisión tomada bajo incertidumbre,
visible), `[ESCALAR: X]` (nuevo: esto necesita un modelo/humano superior — la CIO los barre en su run). Los
errores reales de Haiku observados (inventar continuidad, no reintentar, perder formato) tienen todos el
mismo antídoto: permiso explícito para no saber + un sitio donde dejarlo dicho.

### 8.4 Tabla de errores típicos de modelo pequeño → antídoto ya diseñado

| Error observado/esperable | Antídoto |
|---|---|
| Cifra inventada o mezclada (TAM↔ingresos, Micron) | sanity check aritmético obligatorio + `[Sin datos]` |
| Formato inconsistente (Jorne: 870/873/850) | plantilla rígida con ejemplo + autocheck |
| No reintentar / reintentar en bucle tras fallo | pasos con criterio de fallo explícito: "si `_error` → 1 reintento con fallback B; si falla → marca y sigue" |
| Obedecer una regla fuera de contexto | reglas con su PORQUÉ en una frase (los ejecutores respetan mejor lo que entienden) |
| Contexto desbordado con crudo | disciplina de coste (sistema) + punteros a scratchpad |
| Autolink semánticamente incorrecto | mappings curados (P1-7) + regla "trata, no recuerda" |

### 8.5 Dónde ahorrar y dónde no (mapa de coste)

- **Ahorro seguro ya**: mantenimiento nuevo en Haiku; SKILL.md más cortos (afecta a TODOS los runs);
  memorias O(1) (§3.5); Elena/Marco núcleo común.
- **Ahorro probable con evidencia** (decisión de la CIO tras 4-6 runs medidos): Inés a híbrido; partes
  mecánicas del veredicto (listar vencidas, format-check) a Haiku manteniendo Sonnet para resolver.
- **No tocar**: juicio de tesis (Sonnet), verificador (Sonnet — es la última barrera), CIO (Opus 2×sem: es
  el techo de calidad del sistema y son 8 runs/mes).

---

## 9. Hoja de ruta de implementación

Cada fase es una sesión de trabajo autocontenida; el sistema sigue operando entre fases (las rutinas actuales
no se apagan hasta que su sustituto esté probado).

1. **Fase 1 — Correcciones P0** (una sesión corta): P0-1 a P0-5 + espaciar crons (§4) + pasada de curación de
   `.mappings.json` (P1-7). Riesgo ~0, todo reversible por git.
2. **Fase 2 — Infraestructura** (una sesión): crear `.claude/sistema/` (7 archivos), `.claude/plantillas/`
   (las 10 de §6), `.claude/skills-cerebro/` (las 9 de §5, sembrando los errores conocidos desde las
   memorias). Nada consume esto aún: cero riesgo.
3. **Fase 3 — Pilotos** (una sesión + 3-4 días de observación): reestructurar al formato §8.2 las DOS rutinas
   extremas — Jorne (Haiku, mecánico, el que más lo necesita) y newsletters (Sonnet, el más complejo). Crear
   la rutina de mantenimiento semanal y la watchlist. Comparar outputs pre/post (el editor-jefe y la CIO ya
   evalúan — son el instrumento de medida).
4. **Fase 4 — Despliegue** (una sesión): migrar el resto de rutinas al formato estándar; protocolo de
   valoración a ciegas en el fundamental; umbral ampliado en el verificador; memorias a VIGENTE/HISTÓRICO.
5. **Fase 5 — Medir y ajustar** (continuo, dueño: CIO): 4-6 semanas de evidencia (calidad÷coste por agente,
   Brier, línea de coste P2-4) → decisiones de modelo (Inés híbrido, veredicto parcial-Haiku) como propuestas
   a Carlos. La skill `earnings-review` debuta con Verisk el 29-jul (está en Fase 2-3, llega a tiempo).

Qué NO está en la hoja de ruta (decisiones que solo puede tomar Carlos, ver §10): backup externo, remoto git,
techo de gasto mensual explícito, reglas de venta.

---

## 10. Preguntas críticas

Diseñadas para encontrar debilidades, no para rellenarse. Las **10 primeras** son las que más muerden hoy;
el resto, por categoría, para responder por tandas (una tanda por sesión de revisión; las respuestas van a
perfil de inversor, objetivos o a la regla de sistema que toque).

### Las 10 que muerden ya

1. **Liquidez 0%**: si mañana hay un −30% generalizado (la oportunidad que todo el corpus dice esperar), ¿con
   qué compras? ¿Es una decisión consciente o una deriva? ([[renta-fija-y-tipos]], el cuadrante descubierto.)
2. **Reglas de venta**: el cerebro documenta la tensión "forever vs. vender por valoración" pero TÚ no tienes
   reglas de venta escritas en perfil de inversor. ¿Cuáles son? ¿Qué te haría vender Micron mañana?
3. **Drawdown real**: objetivos declara un drawdown tolerable — ¿lo has VIVIDO con este tamaño de
   cartera? ¿Qué hiciste la última vez que una posición cayó >40%?
4. **Concentración consciente**: metales ~32%, tangible ~45%, semis ~28%. Daniel la mide; tú la eliges. ¿Está
   escrita en una decisión del diario con señales falsables, o es acumulación histórica sin tesis unificada?
5. **El sesgo nº1** (doblar la ganadora en el techo, según tu propio perfil): ¿qué mecanismo CONCRETO te lo
   impide hoy, aparte de que un agente te lo recuerde? ¿Una regla de aportación máxima por bloque?
6. **¿Quién vigila al vigilante?**: el verificador adversarial decide qué entra al durable. ¿Quién audita SUS
   veredictos? (Propuesta implícita: Daniel muestrea 2-3 veredictos/mes y los re-verifica.)
7. **N pequeño**: el scorecard Brier tiene 5 predicciones. ¿Cuál es el N mínimo antes de que la CIO pueda
   citar la calibración de un agente para evaluarlo? (Sugerencia: ≥15 por autor; hasta entonces, dirección.)
8. **Techo de coste**: ¿cuánto es "demasiado" al mes por este sistema, en euros? Sin ese número, la
   optimización calidad÷coste de la CIO no tiene restricción real que optimizar.
9. **Backup**: el vault vive en UN disco sin remoto. Un fallo de hardware hoy = pérdida total del trabajo del
   equipo. ¿Disco externo o nube cifrada? (Pendiente desde el 2026-07-13.)
10. **Earnings del 29-jul (Verisk)**: primer catalizador fechado del sistema. ¿Quién lo mira ese día — la
    rutina fundamental por calendario, o tú a mano? (La skill earnings-review lo resuelve; confirma cadencia.)

### Filosofía y objetivos
11. ¿Puedes escribir tu filosofía en 5 frases sin mirar [[filosofia-de-inversion]]? Si no, ¿es tuya o de Elisa?
12. ¿Qué ineficiencia concreta explotas TÚ (tiempo, tamaño, comportamiento)? ¿Cuál es tu ventaja real frente a un indexado global?
13. ¿Qué tendría que pasar para que abandones el stock-picking y te indexes del todo? ¿Está escrito?
14. ¿Tu North Star es una cifra de patrimonio, una renta, o independencia de fecha? ¿Las aportaciones actuales llegan matemáticamente?
15. ¿Qué % de tu resultado a 10 años esperas que venga de selección vs. asignación vs. aportación? ¿Coherente con dónde gastas el esfuerzo?

### Riesgo y cartera
16. ¿Cuál es la pérdida máxima en euros (no %) que puedes tolerar sin que afecte a tu vida? ¿Daniel la conoce?
17. ¿Qué posición te quitaría el sueño si no pudieras venderla en 5 años? ¿Por qué sigue en cartera?
18. Si oro y semis caen JUNTOS un 30% (correlación en crisis de liquidez), ¿el "bloque tangible" diversifica o solo lo parece?
19. ¿Tienes exposición a divisa medida (USD en semis/tech)? ¿Es tesis o accidente?
20. ¿Qué límite por posición individual aceptas por escrito? ¿Y por bloque factorial?
21. ¿El plan de "vender 3x y recortar Micron" (2026 07 11 analisis inicial cartera) tiene FECHA? Sin fecha, el sesgo de dotación gana.

### Selección y valoración
22. ¿Tu [[circulo-de-competencia|círculo de competencia]] está escrito por EXCLUSIÓN (qué no tocas jamás)? ¿Cuándo lo violaste por última vez?
23. ¿Exiges el mismo [[margen-de-seguridad|margen de seguridad]] a una calidad (Moody's) que a una cíclica (Micron)? ¿Debería ser distinto y cuánto?
24. De las 36 posiciones, ¿cuántas tienen tesis escrita con señales falsables? ¿Qué haces con las que no?
25. ¿Qué te haría comprar una empresa que los 3 analistas del equipo vetan? ¿Y rechazar una que todos aprueban?
26. ¿Las OPAs de Cobas o los veredictos del verificador — qué evidencia externa validaría tu proceso de selección en 3 años?

### Seguimiento y venta
27. ¿Cada posición tiene "qué invalidaría la tesis" explícito? (Las nuevas sí — ¿y las 30 heredadas?)
28. ¿Revisas una posición por calendario (earnings) o por precio (cae X%)? ¿Cuál de los dos dispara emociones y cuál proceso?
29. ¿Qué señal separa "la tesis se rompió" de "el precio cayó"? Escríbela antes de necesitarla.
30. ¿Vender por valoración (Ackman/Cobas) o mantener forever (Buffett/Smith)? Has documentado la tensión — ¿cuál es TU regla, por bloque?

### Psicología
31. ¿Qué hiciste las últimas 3 veces que el mercado cayó >10%? ¿Hay registro? (Si no: el diario de decisiones también es para NO-decisiones.)
32. ¿Cuánto tardas en cambiar de opinión con evidencia en contra? ¿Ejemplo real?
33. ¿El pulso diario te INFORMA o te ACTIVA? ¿Has operado alguna vez el mismo día de leer un pulso?
34. ¿Qué opinión mantienes que TODO el corpus contradiría? (Si no hay ninguna: sesgo de confirmación con el propio cerebro.)

### Conocimiento y wiki
35. ¿Cuándo caduca un concepto? ¿Quién detecta que una página durable quedó obsoleta? (Hoy: nadie sistemáticamente — candidato a la rutina de mantenimiento.)
36. ¿Las citas del corpus se verificaron contra el PDF original alguna vez? ¿Muestreo anual?
37. ¿Qué voz del corpus pesa MÁS en tus decisiones? ¿Está justificado o es afinidad? (El scorecard Brier de comunicadores responderá con datos.)
38. ¿El wiki optimiza para RELEER (síntesis maestras) o para ACUMULAR (más voces)? ¿Cuál es el ratio consulta/ingesta real?
39. Si Smart Connections/Dataview/Obsidian desaparecen mañana, ¿qué pierdes? (Respuesta deseable: nada — es markdown plano. ¿Lo es todo?)

### Agentes y calidad
40. ¿Qué agente eliminarías si el coste doblara mañana? ¿El orden de sacrificio está pensado ANTES de la urgencia?
41. ¿Un agente puede citar a otro agente como fuente? (Riesgo de lavado de fuente: Elena cita a Marco que citó a un tuit. Regla propuesta: la fuente siempre es la primaria, el agente es el mensajero.)
42. ¿Qué pasa si dos rutinas escriben log.md a la vez? (Hoy: interleaving posible. Los crons espaciados de §4 lo mitigan; ¿suficiente?)
43. ¿La autocrítica de los agentes es honesta o teatro? ¿Cómo lo distingue Elisa? (Contraste con lo observado — ¿y si ella también hace teatro? → pregunta 6.)
44. ¿Cuánto costó el sistema el último mes, en euros? ¿Cuánto vale para ti lo que produce? (Sin P2-4 no hay respuesta.)

### Automatización y escalabilidad
45. ¿Qué NO se debe automatizar jamás? (Propuesta: la decisión, los euros de cartera-actual, el borrado, la prob original de una predicción — ¿algo más?)
46. Si las voces pasan de 29 a 60, ¿las síntesis maestras escalan o colapsan? ¿Hay un techo de voces deliberado?
47. ¿Qué parte del sistema entendería otro humano (o tu yo de dentro de 5 años) sin ayuda? ¿CLAUDE.md + equipo-agentes bastan como documentación de arranque?
48. Si Anthropic cambia modelos/precios (Haiku 5, etc.), ¿qué partes del diseño dependen del modelo concreto y cuáles son portables? (El diseño §8 apunta a portable — verificar tras cada migración.)
49. ¿Cuándo revisarás ESTE documento? (Propuesta: la CIO lo audita en su run del primer jueves de cada mes: qué se implementó, qué envejeció mal.)

---

## Ver también

- [[equipo-agentes]] — el acta del equipo (se actualizará al implementar §4)
- [[brainstorming-mejoras-del-cerebro]] — la meta-síntesis de huecos de contenido (complementaria)
- [[tensiones-activas]] · [[mapa-del-cerebro]] · [[registro-de-predicciones]] · [[proceso-de-inversion]]
