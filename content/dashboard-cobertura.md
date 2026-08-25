---
title: "Dashboard de cobertura de fuentes"
tipo: sintesis
tags: [dashboard, cobertura, mantenimiento]
fecha: 2026-07-13
---

# Dashboard de cobertura de fuentes

> [!tip] Ver también [[index|Índice completo del wiki]] y [[log|Registro cronológico]].

> [!info] Este dashboard mide lo **ingerido**; [[inventario-de-crudos]] cataloga lo que simplemente
> **está** en `raw/`. La diferencia entre ambos es la cola de trabajo real del cerebro: 560 ficheros
> catalogados frente a las páginas de fuente que existen aquí.

Vista de conjunto de cuánto de cada fuente (`wiki/fuentes/**/*.md`) se ingirió realmente, frente a la
prosa dispersa que hasta ahora vivía solo dentro de cada página. Cada página de fuente lleva un campo
`cobertura` en su frontmatter con uno de tres valores:

- **`completa`** — se leyó (o procesó carta a carta / memo a memo) el 100% del texto original relevante.
  Incluye tanto documentos cortos leídos íntegros (una carta anual, un paper) como corpus largos procesados
  en su totalidad de forma sistemática (las 25 cartas de Berkshire, los 126 memos de Howard Marks capsulados
  uno a uno por era, las cartas trimestrales/semestrales consolidadas de Cobas/Azvalor/Horos/Fundsmith).
- **`parcial`** — la ingesta fue deliberadamente selectiva o quedó con huecos declarados: se leyeron los
  capítulos núcleo o los pasajes de mayor valor, pero queda contenido original sin leer que podría aportar
  matices no capturados todavía. No es un defecto — a menudo es una decisión de curación explícita (evitar
  releer 600+ páginas de un manual técnico o de una obra muy redundante) — pero significa que una pregunta
  futura muy específica sobre esa fuente podría requerir volver a `raw/`.
- **`referencia`** — cajas de herramientas técnicas que nunca se pretendió leer como una narrativa de
  principio a fin (manuales de valoración, colecciones de papers cuantitativos, manuales de análisis
  técnico/fosos por sector). Se consultan bajo demanda, capítulo o paper suelto, según lo que pida cada
  consulta — no acumulan una "filosofía" propia que deba leerse entera para tener sentido.

La lista de `parcial` es la más útil de las tres: son las fuentes donde una futura sesión de ingesta
dirigida (releer un capítulo concreto, por ejemplo) tiene más probabilidad de añadir algo nuevo al cerebro.

## Fuentes con cobertura parcial

```dataview
TABLE fecha AS "Última edición", tipo AS "Tipo"
FROM "wiki/fuentes"
WHERE cobertura = "parcial"
SORT fecha DESC
```

## Conteo por categoría de cobertura

```dataview
TABLE length(rows) AS "Nº de páginas"
FROM "wiki/fuentes"
WHERE cobertura
GROUP BY cobertura
```

## Fuentes de referencia (cajas de herramientas)

```dataview
TABLE fecha AS "Última edición"
FROM "wiki/fuentes"
WHERE cobertura = "referencia"
SORT fecha DESC
```

## Notas de criterio (2026-07-13)

Algunas asignaciones no tenían una "Nota de cobertura" explícita en la página y se decidieron leyendo el
contenido con criterio:

- **Howard Marks (`howard-marks-memos` + las 6 páginas `marks-memos-*`)** → `completa`. La página raíz
  documenta dos pasadas: una ingesta original *selectiva* (solo 3 memos canónicos leídos en profundidad,
  el resto indexado por título/página) marcada explícitamente como **"superada"**, y una segunda pasada
  (2026-07-10) que la sustituyó: los **126 memos procesados uno a uno**, con cápsula de tesis propia por
  memo, organizados en 6 páginas por era. Se verificaron cápsulas reales (no solo títulos) en varias eras
  antes de decidir — el contenido es sustantivo, no un índice. Por eso `completa`, no `parcial`, pese a que
  solo 3 memos tuvieron una lectura *profunda* línea a línea.
- **`el-inversor-inteligente` y `security-analysis-graham-dodd`** → `parcial`, no `referencia`. Ambas se
  describen a sí mismas como ingesta "profunda y selectiva": capítulos núcleo leídos en su integridad, pero
  el grueso del libro (casos numéricos, capítulos sectoriales) queda sin leer. Se clasifican como `parcial`
  y no `referencia` porque son fuente primaria de una voz/filosofía propia (Graham), con página de inversor
  y conceptos que dependen de ellas — no son un manual técnico de consulta bajo demanda.
- **Libros "de refuerzo" con lectura selectiva declarada** (Munger/*Poor Charlie's Almanack*, Peter Lynch/
  *Worth*, *Investing for Growth* de Smith, Mary Buffett & Clark, Morgan Housel, Lowell Miller, Bernstein,
  Desai, Deep Value/Carlisle, la nota de cobertura de divulgación popular ES) → `parcial`. Ninguno se leyó
  íntegro (todos declaran explícitamente "lectura selectiva" o, en el caso de divulgación popular, un
  archivo fuente que quedó incompleto). Se optó por no asumir `completa` por defecto ni forzarlos a
  `referencia`: son voces o refuerzos de voces con contenido filosófico/aplicado propio, no cajas de
  herramientas técnicas atemporales — así que la clasificación honesta es `parcial`.
- **`aqr-insights`** → `referencia`, pese a que la propia página dice que la colección se leyó **íntegra**.
  El motivo no es la profundidad de lectura sino la naturaleza del material: ~21 resúmenes de 2 páginas de
  papers cuantitativos independientes, organizados por clúster temático para consulta puntual — más parecido
  a una biblioteca técnica (como Damodaran/Dorsey) que a una narrativa de inversor con evolución propia,
  aunque Cliff Asness sí tenga página de inversor.
- **`jpmorgan-carta-2025`** → `completa`. Su nota de cobertura aclara que solo se ingirió la carta del CEO
  (no el resto del *Annual Report*: estados financieros, carta del COO, *proxy statement*), pero la carta en
  sí —que es la fuente que este cerebro se propuso ingerir— se leyó completa. El resto del informe nunca fue
  el objeto de la ingesta, así que no cuenta como hueco de esta fuente.
- **`analisis-integral-de-empresas-amat`** → `completa` pese a estar tratada como "caja de herramientas" en
  su encuadre (sin página de inversor, igual que Damodaran/McKinsey): a diferencia de esos dos manuales, el
  manual de Amat sí se procesó de forma íntegra (los 11 capítulos completos + detalle numérico de todos los
  casos prácticos), así que se prioriza el criterio de completitud real sobre el de "caja de herramientas".
