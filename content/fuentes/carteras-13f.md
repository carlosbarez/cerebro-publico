---
title: "Carteras 13F — qué hacen los gestores, no qué dicen"
tipo: fuente
tags: [13f, sec, edgar, gestores, cartera, fuente-primaria]
fecha: 2026-07-29
fuentes: []
---

# Carteras 13F — qué hacen los gestores, no qué dicen

> [!info] Fuente primaria, sin intermediarios y sin modelo
> Datos extraídos del *information table* que cada gestor presenta a la SEC, parseados por
> `scripts/carteras_13f.py` con `xml.etree`. **Ningún LLM toca estas cifras**: son XML tabular en
> posición estable, exactamente el caso donde la capa gratuita reetiqueta ejes y una venta se convierte
> en una compra. Regenerable en cualquier momento y a coste cero.

El corpus tiene 29 voces contando lo que **piensan**. El 13F es lo único que dice lo que **hicieron**.
Llega con un trimestre de retraso y sin ninguna narrativa alrededor, y esa es justo su virtud: la
distancia entre la carta trimestral y el formulario es información que ninguna de las dos fuentes da
por separado. Cuando aparezca una divergencia, se anota como tensión en la página del inversor — no se
resuelve a favor de la carta por ser más elocuente.

## Lo que un 13F NO es

Leer esto antes de sacar conclusiones, porque el error más común con los 13F es tratarlos como la
cartera del gestor. **No lo son.** Solo cubren renta variable estadounidense cotizada con custodia en
EE.UU.: fuera quedan bonos, efectivo, posiciones cortas, derivados y todo lo extranjero — las
participaciones japonesas de Berkshire, por ejemplo, no aparecen aquí. Un 13F es la parte de la cartera
que el regulador obliga a enseñar, y confundir esa parte con el todo lleva a conclusiones falsas sobre
la asignación de un gestor.

Dos trampas más, ya resueltas en el script pero que conviene conocer:
- **Una fila por gestor interno, no por posición.** Berkshire declara Ally Financial tres veces con el
  mismo CUSIP. Sin agregar por CUSIP, la cartera sale inflada y con posiciones fantasma.
- **La unidad de `value` no es universal.** Baupost declara en miles y Berkshire en dólares. El script
  lo detecta con una regla anclada en la ley (el 13F solo es obligatorio a partir de 100 M$, así que un
  total inferior no puede estar en dólares) y reescala avisando. Un x1000 silencioso no da error: da una
  cifra con pinta de correcta.

## Berkshire Hathaway — 13F de 2026-05-15

29 posiciones, 263,1 mM$ declarados.

| Posición | Valor (M$) | Peso | Títulos |
|---|---:|---:|---:|
| APPLE INC | 57.843 | 22,0% | 227.917.808 |
| [[american-express|AMERICAN EXPRESS]] CO | 45.859 | 17,4% | 151.610.700 |
| [[coca-cola|COCA COLA]] CO | 30.420 | 11,6% | 400.000.000 |
| BANK AMERICA CORP | 25.039 | 9,5% | 513.624.165 |
| CHEVRON CORPORATION | 17.457 | 6,6% | 84.375.856 |
| OCCIDENTAL PETE CORP | 17.221 | 6,5% | 264.941.431 |
| ALPHABET INC [clase A] | 15.600 | 5,9% | 54.249.798 |
| CHUBB LTD | 11.163 | 4,2% | 34.249.183 |
| MOODYS CORP | 10.762 | 4,1% | 24.669.778 |
| KRAFT HEINZ CO | 7.324 | 2,8% | 325.634.818 |

**Movimientos frente al trimestre anterior (13F de 2026-02-17):**

| Movimiento | Posición | Variación en títulos |
|---|---|---|
| AMPLÍA | Alphabet clase A | **+204%** |
| RECORTA | Chevron | -35% |
| ALTA | Delta Air Lines | nueva |
| CIERRA | Visa | -100% |
| CIERRA | [[mastercard|Mastercard]] | -100% |
| CIERRA | [[unitedhealth|UnitedHealth]] | -100% |
| CIERRA | Domino's Pizza | -100% |
| CIERRA | Aon | -100% |
| AMPLÍA | New York Times | +199% |
| RECORTA | DaVita | -5% |

Es una rotación grande para Berkshire: cinco cierres completos en un trimestre, salida entera del
duopolio de pagos (Visa **y** Mastercard a la vez, que es una decisión sobre el sector, no sobre una
empresa) y una apuesta que se cuadruplica en Alphabet. Contrastar con lo que digan las cartas y la
junta: [[warren-buffett]], [[berkshire-hathaway]]. Nota para el lector del wiki — Berkshire tiene
[[moodys]] y [[alphabet]] igual que Carlos, y ambas aparecen aquí ampliadas o mantenidas.

## Pershing Square (Ackman) — 13F de 2026-05-15

11 posiciones, 13,7 mM$. Cartera deliberadamente concentrada: las cuatro primeras (Brookfield, Amazon,
Uber, [[microsoft|Microsoft]]) suman ~66%. Movimientos del trimestre: **alta completa en Microsoft** (2.093 M$ de
golpe), Amazon +19%, cierre de Hilton, y un recorte del **-95% en las dos clases de Alphabet** — lo que
lo pone en el lado contrario de Berkshire en el mismo valor y el mismo trimestre. Esa discrepancia entre
dos voces del corpus es exactamente el tipo de tensión que el wiki debe conservar sin resolver.

## Baupost (Klarman) — 13F de 2026-05-14

22 posiciones, 5,1 mM$ (declarados en miles, reescalados). Top: Amazon 12,7%, Restaurant Brands 11,7%,
Wesco 7,7%, Union Pacific 7,3%, [[elevance-health|Elevance]] Health 7,3%. Amazon +47% en el trimestre. Recordar que Klarman
mantiene históricamente una posición grande en efectivo que **el 13F no muestra**: leer estos pesos como
"su cartera" sobreestima su exposición a bolsa, que es justo lo contrario de su reputación.

## Un espejo incómodo para la cartera de Carlos

Berkshire lleva Apple al **22%** y sus cuatro primeras posiciones suman el **60%**. El
[[limites-y-marco-de-riesgo|límite de Carlos]] es 10-12% por posición. No significa que el límite esté
mal — Buffett tiene control operativo, información y un horizonte que Carlos no tiene, y su
concentración es una consecuencia de su ventaja, no un modelo a copiar. Pero sí obliga a que el límite
se defienda por sus propias razones y no por apelación a la autoridad de los grandes inversores, porque
los grandes inversores del propio corpus no lo cumplen.

## Cómo se regenera

```
python3 scripts/carteras_13f.py --gestor berkshire --markdown --top 10
python3 scripts/carteras_13f.py --busca "OAKTREE"      # localizar un CIK sin adivinarlo
```

Gestores verificados en el registro: `berkshire`, `pershing`, `baupost`. Para añadir otro se usa
`--busca` y se comprueba el nombre que devuelve la SEC — **nunca un CIK de memoria**: un CIK equivocado
no da error, devuelve la cartera de otro gestor con toda naturalidad.
