---
title: "Conocimiento — 2026-07-25 (sábado, rotación análisis+riesgo+cio)"
tipo: sintesis
tags: [conocimiento, cko, 2026-07]
fecha: 2026-07-25
---

# Conocimiento — 2026-07-25 (sábado, rotación análisis+riesgo+cio)

## Misión del día (encargo o laguna elegida · por qué ESTA y no otra · squad usado: nº scouts y ángulos)

**Pregunta (contestable): ¿la rutina `cerebro-soporte-conocimiento` (nueva, diaria 10:30, Haiku) produce señal
que este equipo no produce ya, o es ruido duplicado que además escribe en dominio ajeno?**

Por qué esta: cola de encargos vacía y sin marcas `[CKO:]` (verificado por grep sobre actualidad/estrategia/
analisis-fundamental/riesgo/cio desde el 24-jul). Ayer apareció en `wiki/conocimiento/` —mi dominio de escritor
único— un archivo que yo no escribí (`soporte-calidad-2026-07-24.md`, log línea 51). Una rutina nueva escribiendo
a diario en el dominio de otro agente es una cuestión de arquitectura del conocimiento: exactamente mi misión.
Squad: **0 scouts** (pregunta simple interna, 5ª vez que se valida esta categoría — toda la evidencia es local
y mecánica: dos SKILL.md, un archivo de output, grep). Sin Perplexity, sin verificación adversarial (hallazgo
interno verificado mecánicamente, no una afirmación de fuente externa).

## Hallazgos (hecho separado de opinión · cada afirmación con su fuente · nivel de confianza · a QUIÉN sirve)

**Hechos (confianza alta — verificación mecánica local):**
1. La rutina existe como tarea programada (`~/.claude/scheduled-tasks/cerebro-soporte-conocimiento/SKILL.md`,
   diaria 10:30, delega en `ejecutor-haiku`). Su CONTRATO le manda escribir
   `wiki/conocimiento/soporte-calidad-YYYY-MM-DD.md` — dentro de `wiki/conocimiento/`, que mi propio CONTRATO y
   `sistema/protocolo-de-escritura.md` asignan a la CKO como escritor único.
2. Su misión funcional (PASO 2 de su SKILL: páginas sin frontmatter, wikilinks rotos, páginas con pocos enlaces)
   es un **subconjunto exacto** de dos rutinas ya existentes: mi PASO 3 (knowledge-ops diario con dominio rotado)
   y la rutina de mantenimiento semanal (lint con Obsidian CLI).
3. Su primer output real (`soporte-calidad-2026-07-24.md`) incumple su propio contrato: el SKILL exige
   "3-5 bullets concretos **y la página afectada**"; el informe cita **0 páginas, 0 incidencias concretas** — es
   100% texto genérico sobre sí misma ("esta rutina aporta un paso de soporte adicional", "proponer al CKO que
   esta salida se combine con el informe diario"). La combinación que propone ya existe: es esta rutina.
4. Su ejecución dejó el archivo untracked y su entrada de log sin commitear (su SKILL no pide commit; el resultado
   práctico es un archivo diario nuevo en `wiki/conocimiento/` fuera de control de versiones hasta que otro
   commitee por él).

**Opinión (mía, separada de los hechos):** tal como está diseñada, la rutina añade ruido diario en el dominio
equivocado y no detecta nada que las dos rutinas existentes no cubran ya con más juicio. Con un solo output de
muestra puede mejorar, pero su diseño (Haiku + "revisión ligera" sin foco + escritura propia diaria) apunta a
informes genéricos estructurales, no a un fallo de ejecución puntual.

**A quién sirve:** a Elisa (higiene de dominios de escritura y señal>ruido, su criterio declarado) y a Carlos
(coste diario de un run Haiku sin consumidor identificado — ningún agente lee `soporte-calidad-*` como insumo).

## Knowledge-ops — dominio rotado: análisis+riesgo+cio

- **`wiki/riesgo/` sin firma fresca desde el 16-jul (9 días).** Daniel (L+J 06:00) no publicó el jueves 23-jul.
  **No re-flageo**: la CIO ya lo registró en [[cio-2026-07-23]] ("este reduce no lleva firma de riesgo fresca").
  El matiz nuevo que sí aporto: el vacío coincide con el momento de máxima necesidad — MU colapsó -6,99% con
  patrón de distribución ([[at-2026-07-25]]) y la decisión táctica sobre la posición (reduce por concentración,
  alerta #1 vigente del propio Daniel) se está tramitando entre Jorne y la CIO justo sin la capa de riesgo.
  Próximo run esperado: lunes 27-jul. Sirve a Elisa (contexto temporal, no nuevo flag).
- **Conexión no hecha (leve):** [[at-2026-07-25]] y [[af-2026-07-24]] no se enlazan entre sí ni al informe CIO
  más reciente — comprensible (son archivos fechados de escritores distintos que la CIO funde los jueves), no
  propongo tocar nada; lo anoto solo como patrón a vigilar si la cadena empieza a decidir sin cruzar dominios.
- **Duplicidades/cifras envejecidas en el dominio:** ninguna detectada hoy (los informes del dominio tienen
  ≤9 días).

## Calidad de fuentes (qué fuente rindió o falló hoy en el equipo, con evidencia)

- **Jorne ([[at-2026-07-25]], run 4) — buen proceso en día adverso.** Dos comportamientos ejemplares: marca
  explícitamente su propio *sesgo de disposición* (esperar confirmación costó ~$70 y lo escribe), y deja los
  umbrales nuevos como "PENDIENTE DE RATIFICACIÓN CIO" en vez de auto-aplicarlos. El rate limit de Alpha Vantage
  dejó RSI/MACD sin datos y lo marcó como `[Sin datos]` en vez de rellenar — el patrón honesto que pedimos al
  resto de brazos. (El fallback documentado `scripts/market_data.py` no cubrió el indicador; menor.)
- **Carlos Bárez ([[af-2026-07-24]], BAE Systems) — la verificación adversarial volvió a pagar.** Cazó 2 errores
  de datos antes de que ascendieran a página durable: precio LSE obsoleto (1.981,5p vs. 1.820,5p real) y número
  de acciones inflado ~10% (~3.400M vs. ~3,0-3,08bn). Segundo caso en 3 días (tras Amazon) de la red de
  verificación degradando/corrigiendo antes de escribir — el proceso funciona.
- **`cerebro-soporte-conocimiento` (primer output) — ruido.** Ver Misión del día.

## Propuestas (destinatario explícito — promoción, página nueva, conector, scout persistente)

1. **A Carlos / Elisa — resolver el solape de `cerebro-soporte-conocimiento`.** Tres opciones: **(a)** apagarla
   (su función ya la cubren CKO diario + mantenimiento semanal); **(b)** redirigirla: que no escriba archivo
   propio sino que deposite hallazgos como `[CKO:]` en `wiki/conocimiento/encargos.md` (mi cola, que está vacía
   desde el 17-jul — sería su consumidor natural); **(c)** mantenerla si Carlos la creó con un propósito que yo
   no veo. Mi recomendación: (b), y si no, (a). Coste de (b): editar un SKILL.md; reversibilidad total. No la
   toco yo: no es mi dominio decidir sobre rutinas ajenas ni apagar trabajo que Carlos pudo crear a propósito.
2. Ninguna propuesta de promoción a durable hoy (los hallazgos del día son fechados, no durables).

## Para la CIO (lo que Elisa debe saber, ≤5 líneas)

- Hay una rutina nueva (`cerebro-soporte-conocimiento`, diaria, Haiku) escribiendo en `wiki/conocimiento/`, mi
  dominio de escritor único; su primer output es ruido sin una sola página citada. Propuesta arriba: redirigirla
  a mi cola de encargos o apagarla — decisión tuya/de Carlos.
- Riesgo sigue sin firma desde el 16-jul (ya lo registraste el 23-jul; no re-flag). Matiz: el vacío coincide con
  la decisión MU en curso — el lunes 27-jul es el próximo run de Daniel.
- Jorne y Carlos Bárez con buen proceso hoy/ayer (autoconocimiento de sesgo, ratificación pendiente, verificación
  que caza errores). Cadena sana salvo el hueco de riesgo.
