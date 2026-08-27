---
title: "Dónde viven de verdad las cifras de la cartera"
tipo: sintesis
tags: [sistema, privacidad, perfil, cartera, infraestructura]
fecha: 2026-07-28
revisado: 2026-07-28
fuentes: []
---

# Dónde viven de verdad las cifras de la cartera

**Hallazgo del 2026-07-28, sin fuga**: `CLAUDE.md` da por hecho que los datos del operador viven en
`perfil/` y que el resto del wiki es público. No es así. Al pasar las 201 páginas de la capa de ideas por
`omniroute-enlaza`, el escaneo de privacidad **por contenido** bloqueó **25** (12,4%) por llevar pesos e
importes reales de la cartera de Carlos fuera de `perfil/`.

Nada salió del vault: el veto funcionó, que es justo lo que debía pasar. Lo que queda documentado es que
la separación que el esquema supone **no coincide con dónde están las cifras**.

## Las 25 páginas

| Zona | Páginas |
|---|---|
| `empresas/` (8) | [[alphabet|alphabet]] · bae-systems · booking-holdings · meta-platforms · [[microsoft|microsoft]] · moodys · safran · verisk |
| `industrias/` (7) | agencias-de-rating-y-datos · mineras-de-metales-preciosos · mineria-industrial-y-energia · plataformas-de-internet-de-china · plataformas-tecnologicas-y-publicidad-digital · salud-y-farma · semiconductores-de-memoria |
| `inversores/` (4) | gustavo-martinez · kathryn-kaminski · mark-mobius · michael-pettis |
| `sintesis/` (3) | consejo-de-voces · promociones-pendientes · tensiones-activas |
| `conceptos/` (2) | ciclos-de-mercado · financiacion-estructurada-del-capex-de-ia |
| `repaso/` (1) | conceptos-nucleo |

Lo que dispara el veto son cosas como `13,2%`, `44,5%`, `28,3%`, `9% China+India`, `~45% en tangibles`,
`0% de liquidez`, `Micron, 9,…` — pesos de cartera, no cifras públicas de una empresa.

## Por qué pasa, y por qué no es un descuido

No es que alguien copiara la cartera donde no debía. Es que **una página de industria útil dice cuánto
pesa esa industria en la cartera de Carlos** — es exactamente lo que la convierte en asistente y no en
enciclopedia (ver perfil de inversor y la capa del operador). El precio de esa utilidad es que la
frontera de privacidad no es una carpeta: atraviesa el vault.

**Al menos 3 de las 25 son falsos positivos** del escáner (un margen sectorial de intermediación ~15%,
"SAP: 90% contratos"): cifras públicas que el calibrado de página no distingue del peso de una posición.

## Qué se decide (2026-07-28)

Carlos: **documentarlo, no mover las cifras**. Las razones para no tocarlas ahora:

1. El vault es **local y sin remoto** — la decisión de guardar importes exactos ya está tomada y sigue
   siendo válida en ese supuesto.
2. Sacar los pesos de las páginas de industria las empeoraría como herramienta: "esta industria pesa el
   X% de tu cartera" es la mitad del valor de la página.
3. El veto por contenido **ya protege el único borde real** (lo que sale hacia una capa externa), y no
   depende de que nadie recuerde en qué carpeta va cada cosa.

## Consecuencias a tener presentes

- **Ninguna de estas 25 páginas puede pasar por OmniRoute ni por Kimi.** El 12,4% de la capa de ideas
  está fuera del alcance de la capa barata por diseño, no por fallo. Cualquier plan que asuma "barremos
  el wiki entero con la capa gratuita" está mal presupuestado de origen.
- **Si algún día se añade un remoto a este repo**, esto deja de ser un apunte y pasa a ser lo primero que
  hay que resolver — y son 25 páginas, no la carpeta `perfil/`.
- El escáner de contenido es la red que sostiene todo esto: degradarlo o subir su umbral no es un ajuste
  de ruido, es abrir 25 puertas.

## Ver también

- [[reparto-de-modelos]] — qué capa puede ver qué, y el veto de ruta que acompaña al de contenido
- cartera actual · perfil de inversor — la capa del operador tal y como el esquema la define
- [[estado-del-sistema]] · [[auditoria-kimi-2026-07-27]]
