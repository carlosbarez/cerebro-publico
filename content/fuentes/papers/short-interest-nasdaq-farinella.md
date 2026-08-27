---
title: "Does High Short Interest Lead Underperformance? — Farinella, Graham & McDonald (2001)"
tipo: fuente
cobertura: completa
tags: [paper, short-selling, anomalia, eficiencia-de-mercado, senal]
fecha: 2026-07-12
fuentes: []
---

# Does High Short Interest Lead Underperformance? — Farinella, Graham & McDonald (2001)

Paper académico (*The Journal of Investing*, verano 2001, 8 pp.) en `raw/papers-sueltos/nasdaq short sales.pdf`. Analizado a
petición de Carlos. Aporta al cerebro una pieza empírica sobre el **lado corto**, el ángulo más ausente del
corpus (voces que compran, ninguna que apueste a la baja) — antesala del hueco que cierra *Financial
Shenanigans*.

## Qué mide y qué encuentra

Analiza todas las acciones del **Nasdaq** con datos de la NASD (1988-1995), rankeando por **interés corto
relativo** (acciones prestadas en corto ÷ acciones en circulación) y siguiendo las carteras de las más
shorteadas (percentiles 90/95/99).

- **Las acciones muy shorteadas caen después**: el percentil 90 rinde **-19,4% a 12 meses y -32,0% a 24
  meses** (bruto); **-5,9% y -8,7%** ajustado por tamaño; el percentil 99, hasta **-19,2%** ajustado a 2 años.
  Todos significativos (p<0,01).
- **Los cortos son sofisticados**: dado que shortear es **caro y restringido** (regla del *uptick*, coste del
  préstamo, riesgo de *short squeeze*, pago de dividendos), quien asume ese coste transmite una **opinión
  negativa creíble** — y acierta en media. El mercado **no incorpora rápido** esa información (anomalía).
- **Desmonta el mito del *short squeeze***: la creencia popular de que "muy shorteada = rebote inminente
  cuando cierren cortos" es **ilusoria** en cartera; la caída persiste. Peor aún si la acción **ya venía
  cayendo** antes del alto interés corto (-48% a 12m en ese subconjunto).

## Implicación accionable

- **No comprar** —y menos "por el rebote"— acciones con interés corto muy alto. Usar el interés corto como
  **un factor** de revisión de cartera (bandera roja), no como contraindicador.
- Encaja como **anomalía** en [[eficiencia-de-mercado]] (información pública no arbitrada del todo, como el
  *low-vol* de [[cliff-asness]]) y da soporte empírico a por qué una **voz forense/bajista** (Chanos,
  *Financial Shenanigans*) tiene valor: los que buscan lo que está mal aciertan lo suficiente como para mover
  el precio.
- Matiz para Carlos: es una señal de **qué evitar**, no una invitación a ponerse corto (el coste/riesgo del
  corto varía mucho por inversor y no encaja con su perfil de largo plazo sin apalancamiento —
  [[aversion-al-apalancamiento]]).

## Ampliación (2026-07-26, relectura del destilado completo)

El destilado íntegro del artículo añade detalle metodológico y de robustez que el resumen original no
recogía:

- **Prueba de cierre de posiciones (*post-unwind*)**: cuando el interés corto cae y la acción sale de la
  muestra, la sub-rentabilidad ajustada por tamaño **desaparece** — los cortos cierran justo cuando el precio
  ya no justifica el coste de mantener la posición. Es la evidencia más directa de que la señal es
  informada, no casual.
- **Robustez por frecuencia de aparición**: la sub-rentabilidad es negativa y significativa con
  independencia de cuántos meses aparezca la acción en los percentiles altos; no es un artefacto de unas
  pocas firmas recurrentes.
- **Las muy shorteadas no son chicharros**: son de **mayor capitalización, liquidez y número de *market
  makers*** que el Nasdaq medio (media 183 M$ vs 74 M$ de capitalización; beta 1,42 vs 1,22 — cifras del
  destilado, sin verificar contra el original). El efecto no se explica por iliquidez.
- **Contexto de literatura**: se apoya en Figlewski (1981) —las restricciones costosas al corto actúan como
  filtro de información— y extiende a Nasdaq los resultados de Asquith & Meulbroek (1996) para NYSE/AMEX,
  resolviendo estudios previos contradictorios que usaban interés corto absoluto sin ajustar por tamaño.
- **Aviso de vigencia**: los datos son de 1988-1995, anteriores a la Reg SHO (2005) y a la *uptick rule*
  alternativa; la magnitud exacta de la anomalía estaría pendiente de validación en muestras modernas. La
  dirección cualitativa (corto alto = bandera roja) sigue siendo la lección durable.

## Páginas creadas/actualizadas

- Creada: `fuentes/papers/short-interest-nasdaq-farinella.md`.
- Actualizadas: `conceptos/eficiencia-de-mercado.md`, `index.md`, `log.md`.
- (2026-07-26) Ampliada en modo delta: prueba *post-unwind*, robustez por frecuencia, perfil de las firmas
  shorteadas, contexto de literatura y aviso de vigencia de la muestra.

## Ver también

[[eficiencia-de-mercado]] · [[retornos-esperados]] · [[cliff-asness]] · [[contabilidad-y-calidad-de-beneficios]]
