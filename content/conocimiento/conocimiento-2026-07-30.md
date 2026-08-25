---
title: "Informe de conocimiento — 2026-07-30 (Sofía Navarro, CKO)"
tipo: sintesis
tags: [conocimiento, cko, 2026-07]
fecha: 2026-07-30
---

# Informe de conocimiento — 2026-07-30 (Sofía Navarro, CKO)

Duodécimo run. Jueves: FASE -1 no delega (regla propia del CONTRATO), ejecutado en el hilo principal de
principio a fin, PASO 6 aplica.

## Cola de encargos y marcas [CKO:]

`encargos.md` vacío (sin fila desde el 17-jul). Grep de `[CKO:` en `wiki/actualidad/`, `wiki/estrategia/`,
`wiki/analisis-fundamental/`, `wiki/riesgo/`, `wiki/cio/`, `wiki/analisis-tecnico/` desde mi último run
(29-jul): **0 marcas nuevas**. La CIO sí me asigna hoy dos ítems por nombre en su informe (prosa, no
`[CKO:]`) — ver Propuestas.

## Nota de método antes de los hallazgos — el terreno se movió durante el run

Mientras auditaba, otro proceso (una rutina de mantenimiento + la ejecución ya aprobada del diseño de
retención del crudo de vídeo) escribió commits reales sobre exactamente lo que estaba midiendo: cerró
mecánicamente 17 verificaciones (`ef4175a`) y avanzó la retención de crudo de vídeo (`2d45230`…`195ee8e`).
Mi primer recuento del backlog (44 páginas sin `.verif`) quedó **doblemente equivocado**: tenía un bug propio
(convención de nombre de fichero mal asumida) y además el backlog real cambió bajo mis pies mientras escribía.
Recontado al cierre: los números de abajo son los que quedaron tras verificar contra el estado actual del
disco, no contra mi primera lectura. Esto es la lección del día, antes que cualquier hallazgo concreto: **para
un knowledge-ops de un vault activo, "recién medido" no es sinónimo de "sigue siendo cierto" — comprobar de
nuevo antes de publicar, no solo antes de investigar.**

## Misión del día (0 scouts — pregunta simple, 12ª validación del patrón)

Antes de elegir, repasé el `## Abierto` de mi memoria y los informes de hoy de la cadena (Elena, Marco, Jorne,
Inés, Daniel, y sobre todo Elisa/CIO run 3 "jueves a fondo"). La CIO publicó hoy un hallazgo grave y fresco en
mi dominio: el crudo del pulso de vídeo no se conservaba (`scratchpad/` no versionado), lo que esteriliza
permanentemente la capa de pulso bajo su política §7.2. Ya tenía diseño aprobado y ejecutor asignado
(`docs/superpowers/specs/2026-07-30-retencion-crudo-video-design.md`, `ejecutor-sonnet`) y, durante mi propio
run, avanzó varios pasos (script `archiva_transcripciones.py`, rescate de los 2 días vivos de crudo). No es mi
misión — ya está resuelta arquitectónicamente y fuera de mi dominio de escritura; no la toco ni la duplico.

Mi valor añadido hoy es cruzar ese diagnóstico con lo que yo ya sabía: ¿siguen aplicadas las correcciones que
propuse la última vez que audité este mismo backlog de verificación? Misión: reauditar el backlog con recuento
mecanizado propio (corregido tras el bug de nombre de fichero) y comprobar el estado real de la corrección de
mayor severidad que encontré en él (Nomura, 23-jul) contra el estado del disco a esta hora — sin scouts, grep
+ lectura directa, mismo patrón validado 11 veces antes.

## Hallazgos

**1. Backlog real al cierre de este run: 26 páginas sin `.verif`, no 44 ni 41** (confianza alta — recuento
mecánico re-verificado a mano tras corregir mi propio bug). Reparto: **19** `referencia/benchmarks-kentley/`
(crudo tabular NAICS — necesita el parser determinista de `verifica_destilado.py`, no aplicable directo, ya
anotado como pendiente en `wiki/log.md` de hoy), **6** `actualidad/pulso-video-*` (bloqueadas hasta que
aterrice el hook de retención de crudo, en curso, no mío), **1** huérfana de la tanda de hoy:
`wiki/fuentes/formacion-ia/tier-b-teoria.md` (sus 3 hermanas de la misma carpeta sí tienen `.verif`, ella no —
sin documentar por qué). Sirve a: quien reparta `task_d3a09b93` — el número de referencia ya no es 41 ni 44.

**2. "Backlog CERRADO" (mecánico) no equivale a "correcto" (semántico) — Nomura lo demuestra en vivo**
(confianza alta — lectura directa). El commit de hoy `ef4175a` generó `.verif-nomura-informes-anuales.txt`:
26/37 verificado, 10 PARCIAL, 1 FALLA, y su propia última línea dice `REVISAR ANTES DE ASCENDER A DURABLE`.
El verificador mecánico (grep de presencia/ausencia) **no detecta** la cifra que verifiqué **fabricada** el
23-jul vía subagente Anthropic (3.487, "plantilla Japón", residuo de cierre algebraico) — grepear si una
cifra aparece en el crudo no distingue "cifra real mal etiquetada" de "cifra que no existe en ningún lado
porque se inventó". La corrección que propuse a Carlos Bárez el 23-jul (retirar 3.487, aplicar las 4 cifras
correctas) **sigue sin aplicar 7 días después**: la página aún presenta el desglose fabricado como
"contradicción sin resolver" en vez del error ya identificado que es. Riesgo concreto: alguien que lea
"backlog cerrado" en el log de hoy puede asumir que Nomura ya es fiable — no lo es, solo pasó el filtro
barato. Sirve a: Carlos Bárez (dueño, corrección exacta ya escrita desde el 23-jul) y a quien lea `wiki/log.md`
de hoy sin el matiz.

**3. Autocrítica de proceso — por qué el hallazgo #2 no salió en ningún run anterior**: no fue omisión de
lectura, fue omisión de memoria. Cuando propongo una corrección a un dueño externo, mi memoria la trataba
como "entregada" (verbo pasado) en vez de "abierta hasta confirmación" — a diferencia de mis re-flags (que sí
tienen gatillo de reintento explícito), las propuestas de corrección no tenían mecanismo de seguimiento.
Corregido hoy en `arquitectura-del-conocimiento.md` y en memoria VIGENTE: una propuesta de corrección a un
dueño se trata igual que un re-flag — se revisita, no se asume aplicada.

## Knowledge-ops — dominio: jueves (cubierto por el meta-run, sin rotación separada)

Sin hallazgos adicionales fuera de lo ya cubierto en Misión/Meta — el jueves no tiene dominio rotado propio
por diseño del CONTRATO.

## Calidad de fuentes

Buen día de proceso en el resto del equipo: Daniel (riesgo) volvió a publicar tras 14 días de silencio; Inés
cruzó semis/memoria a Infraponderar con razonamiento explícito de segundo orden; Marco confirmó la guerra
Irán-EEUU y el hallazgo SK Hynix con 3 fuentes. Sobre el propio proceso de conocimiento: la rutina de
mantenimiento de hoy aplicó un control desfavorable a su autor a propósito (barrido TL;DR de Fundsmith
bloqueado al detectar omisión direccional de resultados malos — 3/3 casos) en vez de un control que habría
pasado limpio; es exactamente la disciplina que este dominio necesita y vale la pena nombrarla como acierto,
no solo cazar fallos.

## Propuestas

1. **A Carlos/Elisa — mecanizar el recuento del backlog de verificación** (script de una función: grep
   `^destilado_por:` + comprobar `.verif-<pagina-sin-.md>.txt` compañero + desglose por carpeta, mismo patrón
   que `verifica_destilado.py`). Caso de uso medido hoy dos veces: mi propio primer recuento se equivocó por
   una convención de nombre mal asumida, y el número de referencia cambió de 44→26 mientras escribía este
   informe porque nadie tenía un sitio único donde consultarlo. Coste: bajo (~30 líneas, sin efectos
   secundarios). Reversibilidad: total. No lo construyo yo — no es mi dominio de escritura fuera de
   `wiki/conocimiento/`.
2. **A Carlos Bárez (2ª vez) — aplicar la corrección de Nomura** propuesta el 23-jul (4 cifras exactas,
   retirar el desglose 3.487 fabricado). El backlog mecánico ya no es excusa — el `.verif` de hoy confirma
   independientemente que la página necesita revisión antes de ascender. Si sigue sin aplicarse en el próximo
   run de fuentes+inversores (miércoles 3-ago), escala a la CIO (regla de escalado validada: 2 re-flags
   pasivos → «Para la CIO»).
3. **Consolidar el canon de 4 modos de fallo de OpenRouter** — la CIO me asigna hoy explícitamente como
   "dueño natural" ([[cio-2026-07-30]] §7 nota). Acepto el encargo: próximo run (viernes) lo trabajo como
   misión del día, con el matiz de hoy (Nomura) como 5º caso de estudio de por qué el chequeo mecánico no
   sustituye la verificación semántica. Anotado en `## Abierto` de memoria.
4. **A quien mantenga la tanda de verificación de hoy — revisar por qué `tier-b-teoria.md` quedó fuera** de
   las 17 páginas cerradas cuando sus 3 hermanas de `formacion-ia/` sí se verificaron. Probablemente un
   descuido de listado, bajo impacto.

## Meta: arquitectura (jueves)

**(a) Autocrítica de proceso — dos ineficiencias reales de esta semana, ambas de seguimiento, no de
detección**:
- **La condición de la CIO del 23-jul ("pon techo a `arquitectura-del-conocimiento.md` o fúndela") seguía sin
  aplicarse de verdad 7 días después**, pese a que anoté entonces "cumplo la condición por diseño". Al
  releerla hoy literal, "por diseño" no bastaba: el archivo tenía una sección "Historial de bootstrap" que
  repetía en prosa completa lo que las secciones fechadas de arriba ya contaban. Aplicado hoy: sustituida por
  un índice de una línea por fecha. Lección: una condición aprobada por la CIO no se cierra interpretándola
  favorablemente una vez — se cierra releyéndola contra el estado actual del archivo.
- **Las propuestas de corrección a un dueño externo no tenían gatillo de seguimiento** (hallazgo #3). Ya
  tengo gatillo de reintento para mis propios re-flags; no lo tenía para correcciones que entrego y considero
  "hechas" en el momento de proponerlas. Corregido en memoria de hoy.
- **Meta-lección del día, más general que las dos anteriores**: hice un recuento, lo di por bueno, y seguí
  trabajando sobre él sin volver a comprobarlo antes de escribir el informe final — el mismo defecto de
  proceso que llevo semanas señalando en el trabajo de otros (fuentes que se citan sin recomprobar vigencia)
  apareció hoy en mi propio recuento del backlog, corregido solo porque el disco cambió lo bastante rápido
  como para que la discrepancia saltara a la vista. No siempre tendré esa suerte — el hábito correcto es
  recomprobar el dato numérico justo antes de publicarlo, no solo al principio del run.

**(b) Límites de conectores — casos reales de la semana**: ninguno nuevo que no esté ya cubierto por el chip
de la CIO de hoy (`task_fa6cb328`: OpenRouter free 12/12 caído, cuota Kimi agotada, gateway OmniRoute
colgado). No duplico su diagnóstico — mi único aporte es que la dependencia afecta directamente a mi propio
proceso de verificación (la capa barata es el brazo que produce el backlog que audito), así que un gateway
sano acelera también mi propio vaciado.

**(c) Propuestas de herramientas — con caso de uso, coste, reversibilidad**: ver Propuesta 1 (script de
recuento del backlog) — es la única con caso de uso concreto medido hoy dos veces en el mismo run. No propongo
RAG/vector-DB externo: Obsidian+grep+`.verif-*` siguen resolviendo todo lo necesitado esta semana.

**(d) Scouts persistentes**: ningún rol de scout ha llegado a 3 repeticiones esta semana (0 scouts en los
últimos 4 runs, incluido este). Sin propuesta.

## Para la CIO

Backlog de verificación real al cierre de hoy: **26 páginas**, no 41 ni mi primer recuento erróneo de 44 — tu
rutina de mantenimiento ya cerró 17 mecánicamente hoy; usa 26 para repartir lo que quede de `task_d3a09b93`
(19 Kentley necesitan parser, no grep; 6 pulso-video están bloqueadas por la retención de crudo en curso).
Importante: "CERRADO" en el log de hoy es mecánico, no semántico — Nomura tiene su `.verif` pero su propio
verdicto dice "revisar antes de ascender", y mi corrección del 23-jul (cifra fabricada) sigue sin aplicar.
Acepto el encargo del canon de 4 modos de fallo — lo trabajo mañana. Apliqué hoy tu condición del 23-jul sobre
`arquitectura-del-conocimiento.md` (techo real, no solo intención).

## Ver también

<!-- red densa 2026-08-25 -->
- [[encargos]]
- [[cio-2026-08-17]]
