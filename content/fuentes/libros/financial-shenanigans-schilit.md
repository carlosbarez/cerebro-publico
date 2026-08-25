---
title: "Financial Shenanigans — Howard Schilit (2ª ed., 2002)"
tipo: fuente
cobertura: parcial
tags: [libro, schilit, forense, contabilidad-creativa, fraude, bajista, deteccion]
fecha: 2026-07-12
fuentes: []
---

# Financial Shenanigans — Howard Schilit (2ª ed., 2002)

Libro de **Howard Schilit** (Ph.D., CPA; fundador del *Center for Financial Research and Analysis*, CFRA), la
autoridad forense de referencia en detección de manipulación contable. PDF en `raw/papers-sueltos/73.pdf.pdf`: **escaneado
sin capa de texto**, ingerido vía **OCR** (`rapidocr-onnxruntime`, pip-only, sin dependencias de sistema;
renderizado de páginas con PyMuPDF). Recuperados el índice completo y el marco. **Cierra el hueco #6 del
roadmap**: el ángulo **forense / del lado que busca lo que está mal**, que faltaba (el corpus tenía 19 voces
que compran, ninguna centrada en detectar fraude).

## El marco: los siete "shenanigans" (trucos)

El libro clasifica la manipulación de beneficios en **siete trucos fundamentales**, agrupados en manipular
**ingresos**, **gastos** y **pasivos**:

1. **Registrar ingresos demasiado pronto** o de calidad cuestionable (ventas antes de completarse, *side
   agreements* sin sustancia económica).
2. **Registrar ingresos ficticios** (*bogus revenue*): ingresos de inversión listados como ventas, ventas sin
   sustancia.
3. **Inflar el beneficio con ganancias no recurrentes** (*one-time gains*): plusvalías puntuales presentadas
   como resultado operativo.
4. **Desplazar gastos corrientes a otro periodo** (capitalizar lo que debería ir a resultados, amortizar
   demasiado despacio, no depreciar activos deteriorados).
5. **No registrar o reducir indebidamente pasivos** (obligaciones ocultas, *sham rebates*, cambiar supuestos
   contables para rebajar deudas).
6. **Desplazar ingresos corrientes a un periodo posterior** (guardar ingresos como "reserva" para suavizar
   resultados futuros — *cookie jar*).
7. **Desplazar gastos futuros al periodo actual** como cargo extraordinario (*big bath*: cargarlo todo de una
   vez para que el futuro luzca mejor).

Más: técnicas de **detección** (búsqueda en bases de datos, análisis de estados financieros), **trucos de
contabilidad de adquisiciones**, reconocimiento de ingresos, e historia del fraude (con el caso **Enron** ya
en esta 2ª edición de 2002).

## Cómo encaja y qué refuerza

- **Complemento perfecto de [[contabilidad-y-calidad-de-beneficios]]**: donde el manual de Amat aporta el
  instrumental académico (Z-score de Altman, DuPont, casos Enron/Parmalat), Schilit aporta la **taxonomía
  operativa del engaño** vista por un forense profesional que lo hace por oficio. Los dos juntos dan al cerebro
  el aparato de detección de fraude más completo.
- **Par con el lado corto**: junto al paper [[short-interest-nasdaq-farinella]] (los cortos informados aciertan)
  forma el **eje bajista/escéptico** del cerebro — detectar lo que está mal *y* saber que el mercado lo premia.
  Sigue faltando la voz de un *short seller* practicante (Chanos/Burry), pero el ángulo de **detección** ya
  está cubierto a fondo.
- **Con [[terry-smith]]** (*Accounting for Growth*, su origen como analista forense) y con las "banderas rojas"
  de [[las-cinco-reglas-dorsey|Dorsey]]: la calidad de beneficios como filtro de descarte en
  [[screening-de-calidad]].
- **Con [[charlie-munger]]**: la tendencia de "reward/punishment superresponse" — los incentivos empujan a
  maquillar; Schilit es el catálogo de *cómo* se maquilla en la práctica.

## Nota de cobertura

Ingesta vía **OCR** del marco y el índice (las 296 páginas están escaneadas). Capturados los siete shenanigans,
la estructura y el encuadre; el detalle numérico de los casos concretos queda como referencia consultable
(re-OCR dirigido de un capítulo si una consulta futura lo pide). Es la **primera fuente OCR** del cerebro —
método validado (`rapidocr` + PyMuPDF) para futuros PDFs escaneados.

## Páginas creadas/actualizadas

- Creada: `fuentes/libros/financial-shenanigans-schilit.md`.
- Actualizadas: `conceptos/contabilidad-y-calidad-de-beneficios.md`, `sintesis/huecos-y-proximos-pasos.md`
  (hueco #6), `index.md`, `log.md`, `CLAUDE.md`.

## Ver también

[[contabilidad-y-calidad-de-beneficios]] · [[short-interest-nasdaq-farinella]] · [[terry-smith]] ·
[[analisis-integral-de-empresas-amat]] · [[screening-de-calidad]] · [[charlie-munger]]
