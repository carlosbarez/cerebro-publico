---
title: "Registro de predicciones y veredictos (Brier)"
tipo: sintesis
tags: [predicciones, brier, calibracion, ciencias-de-la-decision, proceso, meta]
fecha: 2026-07-26
fuentes: []
---

# Registro de predicciones y veredictos (Brier)

Motor de **calibración** del Cerebro. Cada afirmación falsable —de Carlos, del pulso, o de un agente del
equipo— se anota **con probabilidad y fecha de resolución**; cuando vence, se verifica contra la realidad y se
puntúa con **Brier score**. Es la mecánica que operacionaliza la doctrina del propio cerebro: *el proceso
importa más que el resultado*, y hacen falta muchos ciclos para **separar suerte de habilidad**
([[sesgo-de-superviviente]], [[michael-mauboussin]], [[annie-duke]], [[marks-memos-2012-2016|"Getting Lucky"]]).

> [!info] Qué NO es esto
> No es un gatillo de operativa ni una bola de cristal. Es un **espejo del proceso**: mide si nuestras
> probabilidades están bien calibradas, no si acertamos una acción. El horizonte de Carlos sigue
> siendo largo; esto solo audita cómo pensamos. Análisis entre analistas, no asesoramiento regulado.

## Por qué existe (el hueco que cierra)

El diario de decisiones ya registra el razonamiento en frío, y el [[equipo-agentes|CRDSO (Daniel Ferrer)]] audita el proceso — pero **en cualitativo**. Sin un registro cuantitativo de predicciones
fechadas, nadie puede responder con datos a: *¿estamos bien calibrados? ¿qué voz del pulso acierta de verdad?
¿el equipo mejora con el tiempo?* Este ledger es la materia prima de esa medición. Lo consumen:

- **[[equipo-agentes|Daniel Ferrer (CRDSO)]]** — validación estadística y auditoría de proceso (su
  FASE 3.5 / 3.7): lee el scorecard, no lo reescribe.
- **[[equipo-agentes|Elisa (CIO)]]** — Función 18 (evaluar al equipo por **calidad de decisión, no por
  dinero**): quién acierta, quién tiene sesgos, quién mejora.
- **Carlos** — con el comando `/cerebro-predicciones` (registrar y resolver a mano cuando quiera).

## Cómo funciona el Brier score

Cada predicción lleva una probabilidad `prob` ∈ [0, 1] = **probabilidad de que la afirmación resulte CIERTA**,
asignada en el momento de emitirla. Al vencer, se anota `resultado`:

- `1` = ocurrió · `0` = no ocurrió · `0.5` = parcial/ambiguo (usar con moderación; forzar criterios claros).

El **Brier** de esa predicción = `(prob − resultado)²`. **Más bajo es mejor** (0 = perfecto).

| Referencia | Brier |
|---|---|
| Predicción perfecta y segura (prob 1, ocurre) | **0.00** |
| Moneda al aire (prob 0.5 siempre) | **0.25** |
| Confiado y equivocado (prob 0.9, no ocurre) | **0.81** |
| Peor caso (prob 1, no ocurre) | **1.00** |

**Regla de oro**: un Brier medio **< 0,25** bate al "no sé nada" (moneda al aire). Por encima de 0,25 estamos
peor que el azar → exceso de confianza o sesgo. La **calibración** importa más que el acierto puntual: si de
todas las veces que decimos "70%" acertamos ~70%, estamos bien calibrados aunque fallemos individualmente.

## Convención

- Una ficha por predicción: `predicciones/YYYY-MM-DD-<slug>.md`, `tipo: prediccion`.
- La `prob` refleja la confianza **de la fuente** (Carlos, el mercado implícito, o el agente que la emite), no
  la del que la transcribe — así el scorecard por `autor` mide a cada voz por separado.
- **Criterios de resolución explícitos y falsables** en el cuerpo (evita el "ya se verá"): qué dato/umbral/
  fecha decide `1` vs `0`. Sin criterio claro, no es una predicción, es una opinión.
- Se anota **cuando se emite**, no después. Al resolver, se **rellena** `resultado` + `brier` +
  `veredicto_fecha` y `estado: resuelta` — no se reescribe la `prob` original (sesgo retrospectivo).
- `estado: anulada` para predicciones que la realidad dejó sin sentido (el evento base desapareció); no cuentan
  para el Brier.

## Plantilla

```markdown
---
tipo: prediccion
estado: abierta            # abierta | resuelta | anulada
autor: carlos              # carlos | pulso-elena | pulso-marco | ines-torres | carlos-barez | jorne | elisa-cio | daniel-crdso
fuente_origen: "[[pulso-2026-07-15]]"
categoria: macro           # macro | mercado | empresa | cartera | geopolitica
prob: 0.70                 # prob de que la AFIRMACIÓN sea cierta, 0-1
fecha: 2026-07-15          # emisión
resolucion: 2026-09-30     # cuándo se puede verificar
resultado:                 # (vacío hasta resolver) 1 | 0 | 0.5
brier:                     # (vacío) = (prob - resultado)^2
veredicto_fecha:           # (vacío) fecha en que se resolvió
tags: [prediccion, macro]
---

# <afirmación falsable, en una frase>

**Afirmación**: …
**Criterio de resolución**: dato/umbral/fecha exactos que deciden cierto vs. falso.
**Por qué esta probabilidad**: el razonamiento y la fuente de la confianza.
**Cruces**: … · …
```

---

## Cola de revisión — predicciones vencidas sin resolver

> Lo que el comando `/cerebro-predicciones` y la rutina semanal procesan primero.

```dataview
TABLE autor AS "Autor", categoria AS "Cat.", prob AS "Prob", resolucion AS "Vencía"
FROM "wiki/predicciones"
WHERE tipo = "prediccion" AND estado = "abierta" AND resolucion <= date(today)
SORT resolucion ASC
```

## Predicciones abiertas (aún no vencidas)

```dataview
TABLE autor AS "Autor", categoria AS "Cat.", prob AS "Prob", resolucion AS "Vence"
FROM "wiki/predicciones"
WHERE tipo = "prediccion" AND estado = "abierta" AND resolucion > date(today)
SORT resolucion ASC
```

## Scorecard global (resueltas)

```dataview
TABLE length(rows) AS "N", round(sum(rows.brier) / length(rows.brier), 3) AS "Brier medio", round(sum(rows.resultado) / length(rows.resultado), 2) AS "Tasa acierto"
FROM "wiki/predicciones"
WHERE tipo = "prediccion" AND estado = "resuelta"
GROUP BY "Todas"
```

## Scorecard por autor (incluye el de comunicadores del pulso)

```dataview
TABLE length(rows) AS "N", round(sum(rows.brier) / length(rows.brier), 3) AS "Brier medio", round(sum(rows.resultado) / length(rows.resultado), 2) AS "Tasa acierto"
FROM "wiki/predicciones"
WHERE tipo = "prediccion" AND estado = "resuelta"
GROUP BY autor
SORT round(sum(rows.brier) / length(rows.brier), 3) ASC
```

## Scorecard por categoría

```dataview
TABLE length(rows) AS "N", round(sum(rows.brier) / length(rows.brier), 3) AS "Brier medio"
FROM "wiki/predicciones"
WHERE tipo = "prediccion" AND estado = "resuelta"
GROUP BY categoria
SORT round(sum(rows.brier) / length(rows.brier), 3) ASC
```

> [!note] Calibración (lectura manual hasta automatizar)
> El scorecard da el Brier medio; la **calibración fina** (¿cuando digo "70%" acierto el 70%?) se lee
> agrupando las resueltas por tramo de `prob` (0,5-0,6 / 0,6-0,7 / …) y comparando la prob media del tramo con
> su tasa de acierto real. Con pocas predicciones aún no es estadísticamente sólido — se hará cuando N sea
> suficiente (Daniel/CRDSO lo vigila en su validación estadística).

## Predicciones vivas (sembradas 2026-07-15)

Las primeras fichas del registro (además de las tablas Dataview de arriba, que se recalculan solas):

- [[2026-07-15-fed-no-sube-tipos-julio]] — macro · pulso-elena · prob 0,85 · vence 2026-08-01
- [[2026-07-15-sp500-bpa-q2]] — mercado · pulso-elena · prob 0,68 · vence 2026-08-20
- [[2026-07-15-oro-sostiene-3800]] — mercado · pulso-marco · prob 0,55 · vence 2026-09-30
- [[2026-07-15-micron-reversion-ciclica]] — empresa · carlos · prob 0,60 · vence 2026-12-31
- [[2026-07-15-china-pib-bajo-objetivo]] — macro · pulso-elena · prob 0,62 · vence 2027-01-31

## Registradas en el primer veredicto semanal (2026-07-26)

Primer run real de la rutina `cerebro-veredicto-semanal` — barrido de todo el backlog de `📌 predicción`/
`📌 predicción candidata` acumulado en el pulso desde el 15-jul (la rutina no había corrido antes). Ninguna
de las 5 fichas sembradas el 15-jul venció todavía (todas con `resolucion` posterior al 26-jul), así que este
primer run no resolvió ninguna, solo registró candidatas nuevas. De ~12 candidatas detectadas en el pulso, se
formalizaron 6 por calidad/diversidad (evitando redundancia entre varias predicciones de crudo correlacionadas
entre sí); el resto se descartó por falta de alguno de los 4 ingredientes o por redundancia — ver autocrítica
en `log.md`.

- [[2026-07-16-eeuu-tropas-terrestres-iran]] — geopolitica · pulso-elena · prob 0,25 · vence 2026-08-31
- [[2026-07-20-rsp-vs-spy-amplitud]] — mercado · pulso-elena · prob 0,50 · vence 2026-12-31
- [[2026-07-23-brent-sostiene-90-agosto]] — mercado · pulso-elena · prob 0,68 · vence 2026-08-31
- [[2026-07-23-bce-sube-tipos-septiembre]] — macro · pulso-elena · prob 0,30 · vence 2026-09-30
- [[2026-07-24-capex-hiperescaladores-2027-1-2-billones]] — mercado · pulso-marco · prob 0,35 · vence
  2027-02-15
- [[2026-07-25-jpmorgan-brent-104-ormuz]] — mercado · pulso-marco · prob 0,40 · vence 2026-09-23

## Segundo veredicto semanal (2026-08-16) — recuperación de 3 semanas de backlog

`cerebro-veredicto-semanal` no corría desde el 26-jul (11+ días, señalado como fallo de proceso por
[[riesgo-2026-08-06]] §6: "0 nuevas fichas pese a ~9 candidatas 📌 acumuladas"). Este run:

- **Resolvió 4 vencidas**: [[2026-07-15-fed-no-sube-tipos-julio]] (CIERTO, brier 0,023) ·
  [[2026-07-30-dgs30-sobre-515-agosto]] (CIERTO, brier 0,123) ·
  [[2026-08-03-nfp-julio-bajo-75k]] (CIERTO, brier 0,423) ·
  [[2026-08-03-nfp-julio-sobre-100k]] (FALSO, brier 0,090) — las 2 últimas se registraron y resolvieron en el
  mismo run porque su ventana ya había vencido cuando se recuperó el backlog.
- **Registró 12 nuevas abiertas**, todas propuestas explícitamente por el equipo para esta rutina (autor
  identificado, 4 ingredientes completos), acumuladas en 3 informes sin correr:
  - `elisa-cio` (2026-07-30): [[2026-07-30-nucleo-calidad-bajo-6-cartera]] ·
    [[2026-07-30-bloque-tangibles-sobre-42-cartera]] · [[2026-07-30-carlos-no-reduce-micron-agosto]]
  - `ines-torres` (2026-07-30 y 2026-08-03): [[2026-07-30-fed-no-sube-tipos-septiembre]] ·
    [[2026-07-30-sk-hynix-margen-memoria-q3]] · [[2026-07-30-microsoft-capex-fy2027-sobre-220000m]] ·
    [[2026-08-03-dgs30-sobre-500-agosto]] · [[2026-08-03-brent-no-toca-100-septiembre]] ·
    [[2026-08-03-boj-sube-tipos-octubre]]
  - `carlos-barez` (2026-07-24 y 2026-08-03): [[2026-07-24-bae-systems-sin-margen-seguridad-diciembre]] ·
    [[2026-08-03-amazon-capex-ventas-sobre-20-q3]] · [[2026-08-03-amazon-bajo-226-diciembre]] ·
    [[2026-08-03-verisk-debt-ebitda-sobre-25x-q3]]
- **Fuera del criterio de 4 ingredientes** (no registradas — falta `prob` explícita del emisor, marcadas
  candidatas u opinión editorial): predicción implícita de Cárpatos sobre crudo/$80 WTI (27-jul, sin prob) ·
  predicción CPI-subyacente/Jackson Hole de [[pulso-2026-08-12-a-13]] ("el mercado debería", sin prob del
  emisor) · cobre BofA >$16.000/t 2027 ("se deja marcada como candidata, no como hecho") · Kaplan
  50-75pb ("condicional, no pronóstico cerrado").
- **Capa mecánica degradada**: `destila --tipo predicciones` devolvió exit 0 pero con formato de síntesis
  genérica (tesis/citas/datos/tensión), no el formato pedido (afirmaciones con 5 ingredientes) —
  `[DEGRADADO: destila --tipo predicciones exit 0, formato incorrecto]`. Barrido hecho a mano.
- N pasa de 0 a 4 resueltas; **Brier medio de este lote: 0,165** (0,023+0,123+0,423+0,090)/4 — el peor caso
  (NFP≤75k, 0,423) es una prob demasiado baja para un dato que acabó siendo extremo, primera señal real de
  calibración del equipo con N>0.

## Ver también

decisiones · [[sintesis-del-comportamiento]] · [[sesgo-de-superviviente]] · [[michael-mauboussin]] ·
[[annie-duke]] · [[tasas-base-y-vista-exterior]] · [[equipo-agentes|CRDSO]] · [[equipo-agentes]]
