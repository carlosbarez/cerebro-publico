---
title: "Conocimiento 2026-08-21 — rotación actualidad+estrategia"
tipo: sintesis
tags: [conocimiento, cko, 2026-08]
fecha: 2026-08-21
agente: sofia-navarro
---

# Conocimiento 2026-08-21 — rotación actualidad+estrategia

## Misión del día (encargo o laguna elegida · por qué ESTA y no otra · squad usado: nº scouts y ángulos)

Cola de [[encargos]] vacía y 0 marcas `[CKO:]` en el vault desde el 18-ago. **Hueco de runs**: no hubo CKO
el miércoles 19-ago (rotación fuentes+inversores + auditoría de fidelidad OpenRouter, saltada entera) — el
gatillo no se resetea, se pospone (lección propia del 17-ago); catch-up de esa auditoría más abajo.

Elegida como misión de hoy (rotación viernes = actualidad+estrategia): **¿los 7 hubs temáticos que dejó el
enjambre del 08-13 (`wiki/actualidad/*-y-*-2026-08.md` + comercio-aranceles-y-fragmentacion +
defensa-y-restricciones-industriales) se han integrado en el ciclo semanal de estrategia de Inés, o corren
en paralelo sin cruzarse?** Por qué esta: `duplicidades` (capa mecánica) marcó solape alto/medio entre esos
7 hubs y varias notas de `wiki/estrategia/`, y mi propio método reusable del 17/18-ago (cruzar solape contra
wikilinks en ambas direcciones) distingue "vecino temático normal" de "conexión real no hecha" — exactamente
el tipo de hallazgo que el CONTRATO pide priorizar. Squad: **0 scouts** — resoluble con grep puro (patrón
validado 12+ veces: "pregunta simple → 0 scouts").

## Hallazgos (hecho separado de opinión · fuente · confianza · a QUIÉN sirve)

**Los 7 hubs temáticos del 08-13 no tienen NINGÚN wikilink cruzado con `wiki/estrategia/`, en ninguna
dirección, pese a solape temático medido "alto" en 5/7 pares.** Hecho, confianza alta (grep directo,
medido dos veces: wikilinks y texto plano).

| Hub (actualidad/) | Solape con | `duplicidades` | Wikilink cruzado |
|---|---|---|---|
| ormuz-y-riesgo-energetico-2026-08 | estrategia-2026-07-20, estrategia-2026-08-20 | alto | 0/0 |
| macro-fed-y-curva-2026-08 | estrategia-2026-07-20, estrategia-2026-08-20 | alto | 0/0 |
| ia-computacion-y-memoria | estrategia-2026-07-16, estrategia-2026-08-20 | alto | 0/0 |
| defensa-y-restricciones-industriales | estrategia-2026-07-16, estrategia-2026-08-20 | medio | 0/0 |
| comercio-aranceles-y-fragmentacion | estrategia-2026-07-16, estrategia-2026-08-20 | medio | 0/0 |
| valoracion-y-posicionamiento-2026-08 | estrategia-2026-07-20 | medio | 0/0 |
| energia-metales-red-y-clima | ormuz-y-riesgo-energetico-2026-08 (entre sí) | medio | 0/0 |

No es que Inés escriba sobre otra cosa: sus notas SÍ repiten estos temas cada semana en prosa (Ormuz 6
menciones en estrategia-07-20 + 5 en estrategia-08-20; Fed/curva 12+8; semis/memoria/capex 15+10;
aranceles 1+0) — el hueco es específicamente la ausencia de `wikilink` al hub que ya consolida el tema,
no la ausencia del tema. Tampoco enlaza [[mapa-sectorial-y-megatendencias]] (la síntesis durable de
estrategia) a ninguno de los 7 hubs (0/7 en ambas direcciones). Y del lado analista: ni
`wiki/analisis-fundamental/` (defensa: Kongsberg/Cameco/LHX) ni `wiki/analisis-tecnico/` enlazan
`defensa-y-restricciones-industriales` o `ia-computacion-y-memoria` pese a relevancia directa.

**Sirve a**: Inés (evita reescribir contexto de fondo cada semana, puede citar el hub y centrarse en lo
nuevo) y a Elisa (arquitectura — un enjambre que produjo 7 páginas de consolidación temática, 5+ semanas
sin que el flujo semanal las use, es inversión de squad sin retorno de uso).

## Knowledge-ops — dominio rotado: actualidad+estrategia

Alcance acotado a las páginas "vivas" del dominio (métodos de canal, 7 hubs temáticos, `wiki/estrategia/`
completo — 25 ficheros, 276.696 caracteres, un solo lote bajo el techo de 380K). Las ~192 notas
`pulso-*`/`pulso-video-*` y las 134 `sonda-2026-08-1[34]-*` quedan fuera del barrido de duplicidades/caducidad
por diseño: son efímeras y fechadas (`CLAUDE.md`), no "páginas vivas".

- **`duplicidades`** (flash, exit 0, 5.321 B): 31 pares. La mayoría es solape ESPERADO — notas semanales
  sucesivas de estrategia repiten Fed/Ormuz/IA por diseño (no son duplicados, son continuidad temporal), y
  las 4 páginas McKinsey/`vision-sectorial-externa-2026` son piezas complementarias ya conocidas. El único
  patrón con señal real es el cruce hub↔estrategia de arriba, ya promovido a misión del día.
- **`caducidad`** (flash, exit 0, 30.911 B): 0 afirmaciones caducadas >6 meses. Revisadas a mano las
  entradas con fecha real (no "[sin fecha]"): todas son 2024-2030 (proyecciones McKinsey correctamente
  atribuidas a su año de origen, o hechos de agosto 2026) — el dominio es demasiado joven (≤5 semanas) para
  que aplique el umbral de 6 meses. Consistente con los runs del 17/18-ago.
- **`enlaza`** (verbo, pro, exit 0, 4.217 B, sobre el mismo lote): 18 candidatos, mayoría `⚠ANCLA NO
  LITERAL` (descartados sin verificar, por protocolo). 5 con ancla literal limpia:
  [[semiconductores-de-memoria]] TENSIONA "SK Hynix sigue -34% y Samsung -21% en el trimestre" ·
  [[aeroespacial-y-defensa]] APOYA "Patriots ≥50% del stock consumido" ·
  [[mineras-de-metales-preciosos]] EJEMPLO "Oro +8,3% en 2 semanas" ·
  [[adquirente-serial]] TENSIONA "adquirentes seriales sin ese rigor de integración rindieron peor pese a
  gasto similar" · [[paridad-de-riesgo-y-diversificacion]] APOYA "Pega a todo el libro de riesgo, no a un
  sector". La columna "por qué" no está verificada (protocolo estándar del conector) — a comprobar por
  quien los aplique.
- **Pool de sondas-empresa del enjambre 08-14** (`wiki/actualidad/sonda-2026-08-14-*.md`, 74 fichas,
  `indice-empresas-2026-08-14.md`): 24/74 (32%) ascendieron el mismo día a `wiki/empresas/` (ficha durable
  con "La sonda enlaza con..."), 50/74 siguen solo en `actualidad/` sin curar 8 días después. El pipeline de
  CAZA de Carlos Bárez SÍ consume el pool del enjambre — pero el de sondas TEMÁTICAS del 08-13
  ([[kongsberg-gruppen]] cita "sonda defensa-proveedores 08-13", [[cameco-corporation]] cita "sonda
  energia-nuclear-red 08-13"), no el de sondas EMPRESA del 08-14: ninguna de las 3 candidatas de
  defensa/nuclear del mes proviene de las 74 fichas-empresa, y [[lhx]] ni siquiera tiene su propia
  `sonda-2026-08-14`. El pool de 74 no está conectado al pipeline de CAZA. A 8 días no es aún caducidad de
  precio grave, pero conviene decidir su destino antes de que lo sea.

## Calidad de fuentes (qué fuente rindió o falló hoy en el equipo, con evidencia)

- **Elena**: `pulso-2026-08-21.md` no existe y no hay entrada en `wiki/log.md` de hoy para su rutina —
  a diferencia de Marco (que sí dejó traza `[DEGRADADO]`/`[ESCALAR]` en su run parcial), el silencio de
  Elena no deja rastro, lo que incumple la doctrina de "degradación elegante: la nota SIEMPRE se escribe"
  (`reglas-nucleo.md`). No puedo distinguir desde aquí si es una rutina que no se disparó (infraestructura)
  o un día sin pulso sin marcar — escalo a la CIO en vez de re-flag propio (dominio ajeno al mío).
- **Marco**: `pulso-video-2026-08-21` quedó en run parcial, crudo bloqueado por el candado 0555 de
  `raw/pulso-video/` (incidencia de infraestructura ya conocida por el equipo, sin resolver — pide `chmod`
  a Carlos). Trazado correctamente por él mismo con `[DEGRADADO]`/`[ESCALAR]`, sin acción mía necesaria.
- **Auditoría de fidelidad OpenRouter (miércoles, catch-up)**: FIFO más antiguo con `destilado_por:
  openrouter` y crudo en `raw/` son las 4 páginas Damodaran del 22-jul (`damodaran-country-risk`,
  `damodaran-narrative-and-numbers`, `damodaran-dark-side-of-valuation`, `damodaran-strategic-risk-taking`).
  Desplegado 1 scout Anthropic (`general-purpose`, read-only) sobre las 2 primeras (paper SSRN + libro de
  riesgo). **`[DEGRADADO: verificacion-fidelidad-damodaran exit fail]`** — el scout terminó con "API error:
  Prompt is too long": intentó `Read` directo de los 2 PDF completos en vez de extractos acotados y
  desbordó su propio contexto. No es límite de cuota, es un scout mal dimensionado para PDFs largos. Por
  protocolo (scout caído → continuar con lo que haya, marcarlo, no relanzar ni sustituir en el mismo run) no
  hay reintento hoy. **La verificación de fidelidad de esta semana queda SIN COMPLETAR**: el backlog
  mecánico sigue en 0/16 `.verif` (mecánico, presente), pero ninguna de las 4 páginas Damodaran tiene
  contraste semántico real contra el PDF — "CERRADO" mecánico sigue sin ser "correcto" semántico (lección
  del 30-jul), y esta semana no pude cerrarlo. Lección de método (subida a memoria VIGENTE): un scout de
  fidelidad sobre un PDF largo necesita instrucción explícita de acotar (grep de la cifra/cita concreta +
  su contexto inmediato, o extracción por páginas) en vez de `Read` íntegro del documento.

## Propuestas (destinatario explícito)

1. **A Inés** (dueña de `wiki/estrategia/`): enlazar los 7 hubs temáticos del enjambre 08-13 desde la
   próxima nota semanal y desde [[mapa-sectorial-y-megatendencias]] — tabla de pares arriba, con el hub que
   corresponde a cada tema que ya escribe cada semana.
2. **A Inés** (secundaria): revisar los 5 candidatos `enlaza` de ancla literal limpia de arriba y aplicar
   los que confirme contra la página destino.
3. **A Carlos Bárez** (dueño de `watchlist.md`/`wiki/empresas/`): decidir el destino del pool de 74
   sondas-empresa del 08-14 — usarlo explícitamente como cola FIFO de candidatas junto a las sondas
   temáticas, o declararlo secundario/descartado. 50/74 sin curar a 8 días.
4. **Mía (Sofía, próximo miércoles o antes)**: relanzar la verificación de fidelidad de
   `damodaran-country-risk.md` y `damodaran-strategic-risk-taking.md` con un scout acotado (grep de cifras
   y citas concretas contra el PDF por página, nunca `Read` íntegro) — el catch-up de hoy no se completó.

## Para la CIO (lo que Elisa debe saber, ≤5 líneas)

Hueco de runs: ningún CKO el miércoles 19-ago (auditoría OpenRouter saltada entera); catch-up de hoy
incompleto porque el scout de verificación se desbordó leyendo PDF íntegro (lección de dimensionamiento,
no de cuota) — las 4 páginas Damodaran del 22-jul siguen sin contraste semántico real. Elena sin
`pulso-2026-08-21` y sin traza en `log.md`, a diferencia del `[DEGRADADO]` correcto de Marco. Hallazgo de
arquitectura: los 7 hubs temáticos del enjambre 08-13 y el pool de 74 sondas-empresa del 08-14 llevan
5+ semanas / 8 días sin integrarse en el flujo de trabajo que deberían alimentar (estrategia semanal y
pipeline de CAZA, respectivamente) — el enjambre generó cobertura que nadie está consumiendo todavía.

## Ver también

[[mapa-del-cerebro]] · [[dashboard-cobertura]] · [[arquitectura-del-conocimiento]] · [[encargos]] ·
[[reparto-de-modelos]] · [[equipo-agentes|equipo de agentes]]
