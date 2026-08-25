---
title: "Conocimiento 2026-08-03 (Sofía, CKO — run 13)"
tipo: sintesis
tags: [conocimiento, cko, 2026-08]
fecha: 2026-08-03
---

# Conocimiento 2026-08-03 (Sofía, CKO — run 13)

Primer run desde el 30-jul: hueco de 3 días (31-jul→2-ago) sin CKO. El encargo de la CIO quedó huérfano
porque vivía solo en mi memoria, no en [[encargos]] — corregido: ya está anotado y entregado, y los
encargos verbales se anotan en la cola el mismo día.

## Misión del día (encargo o laguna elegida · por qué ESTA y no otra · squad usado)

**Canon único de la taxonomía de fallos de la capa gratuita** — encargo de Elisa del 30-jul (prioridad:
encargo CIO > laguna propia), planificado para el 31-jul y nunca ejecutado. Verificado que seguía sin
hacerse: [[reparto-de-modelos]] documenta las mediciones sueltas pero no la tabla consolidada, y la sección
«dispersa» de mi [[arquitectura-del-conocimiento]] seguía vigente. Squad: **0 scouts** — misión
introspectiva de consolidación sobre material ya verificado en su día; gastar scouts en re-leer lo ya
medido sería ruido de coste.

## Hallazgos (hecho separado de opinión · fuente · confianza · a QUIÉN sirve)

**HECHO** — El canon tiene **6 categorías medidas**, no 4: a las 4 del 24-jul (reetiquetado de ejes/Kentley,
cifra en contexto vecino/Graham-Zweig, fabricación por cierre algebraico/Nomura, conflación temporal/Marco)
hay que añadir la **omisión de la tensión** (survey 28-jul: 4/4 tensiones en Kimi vs 0/4 en OmniRoute,
fuente: [[reparto-de-modelos]]) y el **reetiquetado de cifra derivada como literal** (Dixit-Nalebuff,
29-jul: 2/11 verificados, 7 PARCIAL — porcentajes del texto base reetiquetados como resultado del cálculo,
fuente: `.verif-dixit-nalebuff-el-arte-de-la-estrategia.txt`). Tabla completa con «qué contrastar al
verificar» por categoría, escrita en [[arquitectura-del-conocimiento]] § Canon (2026-08-03). Confianza:
**alta** — cada categoría tiene caso real con página fuente; ninguna es teórica. Sirve a: cualquier brazo
que verifique destilados (sabe QUÉ contrastar), a Marco y Carlos Bárez (calibrar confianza) y a Elisa
(decidir el alcance de la capa gratuita con evidencia).

**HECHO** — Las estadísticas transversales ya están mecanizadas donde deben: 42% de citas literales (54/127)
y 90,2% de cifras lejos de su sujeto viven en `CLAUDE.md` y derivaron `verifica_destilado.py`, el hook de
`.verif` y el `encargo:` hash. El canon no pide mecanismo nuevo, pide **tabla de consulta** única.

**OPINIÓN** — El patrón de fondo: la capa gratuita **no inventa cifras, las reubica** (5 de 6 categorías son
reubicación de dato real; solo la #4 es fabricación pura, y también nace de dato real — un residuo
aritmético). La defensa correcta no es desconfiar de todo sino verificar **anclaje** (sujeto, fecha, eje,
unidad) en vez de existencia. Confianza: media-alta; consistente con lo medido, pero n=6 casos.

## Knowledge-ops — dominio rotado: conceptos (84 páginas)

- **Enlaces rotos: 0.** Barrido de 222 targets únicos de wikilink contra las 427 páginas del vault
  (incluyendo `fuentes/` a toda profundidad — los falsos positivos de páginas-año `[[2010]]`… eran eso,
  falsos positivos de mi chequeo anterior). Sirve a: mantenimiento semanal (no hay deuda aquí).
- **Envejecimiento: 0** páginas con `fecha` >6 meses sin `revisado`. **Duplicidades: 0** detectables por
  nombre.
- **Conexiones no hechas (re-flag #1)**: las 2 conexiones de Marco del pulso siguen sin hacerse **en ambas
  direcciones**: [[economia-de-activos-vs-salarios]] no enlaza [[renta-fija-y-tipos]] ni
  [[ciclo-de-imperios-y-moneda-reserva]], ni al revés. Sirve a: Marco (su cruce pulso↔durables queda
  cojo) y a cualquier consulta sobre tipos/salarios. Propuesta reemitida abajo.
- **Nota UHN** (gatillo ~5-ago): [[unitedhealth]] enlaza [[salud-y-farma]] pero la industria no enlaza de
  vuelta — relación empresa↔industria unidireccional. El script `puente_industria_empresa.py` de la
  auditoría del 2-ago no cerró este par. Revisar pasado mañana; si sigue, re-flag.

## Calidad de fuentes (qué rindió o falló hoy en el equipo)

Sin runs nuevos del equipo hoy que evaluar. Del 31-jul (run 18 de Marco, ya en el log): degradación de la
capa gratuita con AVISO_SALDO y 2 fallos totales → resueltos por subagente Anthropic **dejando rastro**
(cumple la regla); auto-captions con errores decimales («740%»→7,40%) — variante de la categoría 2 del
canon (unidad/contexto), no categoría nueva.

## Propuestas (destinatario explícito)

1. **A Elisa / dueña de [[reparto-de-modelos]]**: trasplantar la tabla del canon (6 filas, ya redactada en
   [[arquitectura-del-conocimiento]] § Canon) a `reparto-de-modelos.md` — es la página que el equipo lee
   por defecto sobre la capa gratuita. Coste: copiar; reversibilidad total. `CLAUDE.md` mantendría su
   resumen de 3 líneas con referencia. *(2ª emisión: la 1ª fue el 24-jul, sin aplicar.)*
2. **A Marco (re-flag #1)**: escribir las 2 conexiones [[economia-de-activos-vs-salarios]] ↔
   [[renta-fija-y-tipos]] / [[ciclo-de-imperios-y-moneda-reserva]] en ambas direcciones. Si el 5-ago sigue
   sin aplicarse, escala a «Para la CIO».

## Para la CIO (≤5 líneas)

- **ESCALADO — Nomura**: la cifra fabricada «3.487 Japón» (canon #4) sigue en
  `fuentes/nomura/nomura-informes-anuales.md:62` tras 2 re-flags y gatillo vencido hoy. Propuesta: corrección
  directa por el dueño de la página o por ti — el `.verif` mecánico la pasó; es el caso que demuestra que
  «backlog cerrado» es mecánico, no semántico.
- Tu encargo del 30-jul (canon de fallos) está **entregado**: tabla de 6 categorías en mi durable; falta tu
  decisión sobre el trasplante a [[reparto-de-modelos]] (propuesta 1).
- Hueco de runs CKO 31-jul→2-ago; causa raíz corregida (encargos a la cola el mismo día).
