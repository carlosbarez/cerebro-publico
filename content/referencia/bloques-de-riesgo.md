---
title: "Bloques de riesgo — lista cerrada de slugs"
tipo: referencia
tags: [sistema, cartera, riesgo-factorial, bloques]
fecha: 2026-08-24
---

# Bloques de riesgo — lista cerrada de slugs

Lista canónica de los bloques de riesgo factorial de la radiografía de la cartera.
Es **la única fuente de verdad** para enlazar un bloque de riesgo desde cualquier informe: un agente que
quiera referirse a un bloque usa el slug de esta página, **no inventa uno nuevo**. Creada tras la auditoría
del 2026-08-24: un agente generaba ~20 enlaces rotos por run inventando slugs distintos
(`semiconductores-e-integracion-vertical`, `calidad-y-datos`, `reflacion-e-inflacion`…).

## Los bloques

| # | Bloque | Slug canónico | Página de referencia |
|---|---|---|---|
| 1 | Metales preciosos (oro + plata físico + mineras + 3x) | `metales-preciosos` | [[mineras-de-metales-preciosos]] |
| 2 | Materias primas / energía / minería industrial | `materias-primas-energia-mineria` | [[materias-primas-y-ciclo-de-commodities]] · [[mineria-industrial-y-energia]] |
| 3 | Tangibles / reflación (suma de 1+2, ~44,5%) | `tangibles-reflacion` | [[tangibles-y-reflacion]] |
| 4 | Tecnología desarrollada (MU, META, MSFT, QCOM, AMZN, GOOGL, SAP) | `tecnologia-desarrollada` | [[plataformas-tecnologicas-y-publicidad-digital]] · [[semiconductores-de-memoria]] · [[semiconductores-logica-y-computo-ia]] |
| 5 | Índices / diversificado (World, S&P EW, S&P, EM, India, Cinvest) | `indices-diversificado` | [[asignacion-de-activos]] · [[ciclos-de-mercado]] |
| 6 | China individual (JPM China, Baidu, JD, Meituan) | `china-individual` | [[plataformas-de-internet-de-china]] |
| 7 | Calidad / datos (Moody's, Booking, Verisk) | `calidad-datos` | [[agencias-de-rating-y-datos]] |
| 8 | Liquidez / renta fija (hoy 0%) | `liquidez-renta-fija` | [[renta-fija-y-tipos]] |

## Reglas para quien escribe

- **Siempre** enlaza el bloque con su slug canónico. El resto de la frase (qué activo, qué peso, qué
  escenario) va en texto plano, no en el destino del wikilink.
- Si un bloque no está en esta tabla, **no inventes un slug**: usa `[[bloques-de-riesgo]]` o crea la página
  del concepto con un nombre kebab-case y añádelo aquí.
- Los enlaces a sectores/industrias van a las páginas existentes de `wiki/industrias/` y `wiki/conceptos/`
  (semis → `[[semiconductores-de-memoria]]` / `[[semiconductores-logica-y-computo-ia]]`; software de datos →
  `[[agencias-de-rating-y-datos]]`; commodities → `[[materias-primas-y-ciclo-de-commodities]]`).

## Historial

- **2026-08-24**: creada en la auditoría del sistema. Corrige de raíz los enlaces rotos que generaba el
  analista técnico (Jorne) al inventar slugs para los bloques de riesgo.