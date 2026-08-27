---
title: "Si el conflicto de Ormuz continúa 2 meses más sin recuperación de importaciones chinas, el Brent cotiza en torno a $104/barril a 23-sep-2026"
tipo: prediccion
estado: abierta
autor: pulso-marco
fuente_origen: "[[pulso-video-2026-07-25]]"
categoria: mercado
prob: 0.40
fecha: 2026-07-25
resolucion: 2026-09-23
resultado:
brier:
veredicto_fecha:
tags: [prediccion, mercado, energia, ormuz, jpmorgan]
---

# Si el conflicto de Ormuz continúa 2 meses más sin recuperación de importaciones chinas, el Brent cotiza en torno a $104/barril a 23-sep-2026

**Afirmación**: si a 23-sep-2026 el conflicto de Ormuz sigue activo (sin recuperación de las importaciones de
petróleo chinas respecto al nivel pre-conflicto) durante 2 meses desde su escalada de julio, el Brent cotiza
en torno a **$104/barril**.

**Criterio de resolución**: cierre de Brent en Bloomberg/ICE el 23-sep-2026 (o fecha más próxima con dato
disponible). `1` si el cierre está en la banda ~$100-108 (±4 sobre el punto medio $104) Y el conflicto de
Ormuz sigue activo sin recuperación china confirmada; `0` si el precio se desvía de esa banda o el conflicto
se resuelve antes (evento base distinto invalida el escenario condicional — ver nota de anulación abajo);
`0.5` si el conflicto persiste pero el precio se desvía moderadamente de la banda.

**Por qué esta probabilidad**: escenario cuantitativo atribuido a JP Morgan, relayado por Cárpatos **sin
acceso al informe original** (nivel de precisión nuevo frente al retroceso ya documentado, pero sin ver las
asunciones de oferta/demanda del modelo — se trata como indicativo, no como salida verificada de un modelo
auditable). El propio JPM da un abanico de escenarios (1 mes → Brent plano; 2 meses → ~$104; 3 meses →
~$114; resolución rápida → $80 en 4T-2026) — la afirmación aquí registrada es solo el escenario "2 meses",
que a la fecha de emisión (25-jul, con Ormuz cerrado desde mediados de julio) es plausible pero no el único
camino. `prob 0.40`: refleja la incertidumbre real sobre CUÁNTO dura el conflicto (variable que el propio
JPM trata como el input clave) más el hecho de ser un dato de segunda mano sin el modelo completo a la
vista.

**Nota de anulación**: si a la fecha de resolución el conflicto de Ormuz se ha resuelto claramente (evento
base desaparecido), esta ficha pasa a `estado: anulada` en vez de puntuarse — no sería un fallo de la
predicción sino un cambio del escenario que la sustentaba.

**Cruces**: [[mineria-industrial-y-energia]] · cartera actual (bloque tangibles/energía) ·
[[2026-07-23-brent-sostiene-90-agosto]] · [[pulso-video-2026-07-25]]
