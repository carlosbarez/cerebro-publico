---
title: "Amazon (AMZN)"
tipo: empresa
tags: [empresa, amazon, plataformas-tecnologicas, cloud, publicidad, tech-desarrollada, cartera]
fecha: 2026-08-03
fuentes: []
ticker: AMZN
moneda: USD
precio_referencia: 285
fecha_precio: 2026-08-03
valor_estimado: 226
gatillo_entrada: 180
veredicto: VIGILAR
revisar_el: 2026-11-03
---

# Amazon (AMZN)

Primera tesis formal del Cerebro sobre Amazon — posición **existente** en cartera actual de Carlos (8
> — dato privado retirado —
**28,3% de la cartera** — el bloque individual más grande de renta variable). Análisis motivado por earnings
review (Q2 2026, publicado 30-jul-2026), en el mismo run que revisó [[verisk]] y [[bae-systems]]
(`cerebro-analista-fundamental`, 2026-08-03), desplazando la rotación normal del lunes.

> [!info] Cobertura nueva
> El Cerebro no tenía página sobre Amazon hasta este análisis, pese a ser posición de cartera desde antes.

## 1. Negocio

AWS (21% de las ventas, margen operativo 39,4%) es donde vive casi todo el beneficio limpio del grupo;
publicidad es el segundo motor, de margen altísimo y ya top-3 mundial; el retail (e-commerce) aporta escala
y flujo de caja de working capital, pero muy poco beneficio — el negocio con el que la gente asocia a Amazon
es el que menos gana. Foso intacto: efecto de red + escala de datos en retail, coste de cambio + ecosistema
en AWS ([[plataformas-tecnologicas-y-publicidad-digital]]).

## 2. Industria — [[plataformas-tecnologicas-y-publicidad-digital]]

Amazon es uno de los cuatro *hyperscalers* de la industria (junto a Microsoft, Alphabet, Meta) enfrentados
al mismo debate central: ¿el capex de IA renta su coste de capital, o es una carrera armamentística que
comprime retornos? El método que dicta la industria —expectations investing de Mauboussin, vigilar
capex/ventas y FCF después de capex en vez del beneficio contable— aplica aquí sin matices: el capex de
Amazon acelera hacia 21,1% de las ventas (guidance subido a ~$220B), exactamente la bandera roja que la
página de industria señala para el grupo.

## 3. Moat — [[foso-economico]]

AWS: coste de cambio + ecosistema (migrar una arquitectura cloud es caro y arriesgado) + escala; retail:
efecto de red oferta-demanda + escala logística + datos; publicidad: posición nativa dentro del embudo de
compra, margen altísimo sin coste de adquisición adicional. Aguanta con holgura a 10 años — el gatillo de
"AWS creciendo >20%" **SE CUMPLE** (37% en Q2, vs 31% esperado), sin señal de erosión del foso.

## 4. Financieros — calidad del beneficio

- **FCF TTM negativo: -$7,6B** (OCF $161,4B − capex $169,0B) — primera vez que el negocio consolidado no
  genera caja libre positiva en TTM, enteramente por el ritmo de capex de IA.
- **Giro material de balance**: de +$21,2B de caja neta a -$50,7B de deuda neta (definición estrecha) en 2
  trimestres, financiando ese capex al 21,1% de ventas.
- **La cifra depende de qué se cuenta**: Amazon reporta $44.775M en marketable securities junto a la caja en
  la discusión de liquidez de su 10-Q; incluyéndolos, el **net debt AMPLIO es de solo ~$9,6B**, no -$50,7B —
  el balance está bastante más sano de lo que sugiere la cifra headline. La tendencia de deterioro sí es
  real de todos modos (giro de ~$64B en 2 trimestres en términos amplios) y hay que vigilarla, aunque el
  nivel absoluto no sea alarmante todavía.
- **CapEx TTM pendiente de reconciliar**: SEC XBRL da $173,0B bruto frente a los $169,0B usados en esta
  tesis (posible cifra neta de venta de activos, según metodología propia de Amazon) — **[pendiente]**, no
  se fija como definitivo hasta reconciliar con precisión.
- **Cifras verificadas 1:1 contra SEC EDGAR**: long-term debt $128.894M, cash $78.213M, OCF TTM $161.403M,
  margen AWS 39,4%, EPS $5,75, ganancia por revaluación de la participación en Anthropic $53.400M pre-tax
  (no operativa, ver valoración).

## 5. Directiva y capital allocation

Sin bandera específica en esta primera ronda — pendiente de profundizar si la tesis avanza (retribución de
directivos, dilución por SBC, prioridad de asignación de capital entre AWS/retail/publicidad).

## 6. Valoración por escenarios

**Precio de referencia: ~$285** (verificado el 2026-08-03 vía dos fuentes independientes: `market_data.py`/
Yahoo $284,47 y Benzinga $285,93). El precio que usaba el borrador a ciegas ($243,28) estaba
**desactualizado**: corresponde al cierre previo a los resultados de Q2 (30-jul-2026). Amazon batió
expectativas con fuerza (AWS +37% vs 31% esperado) y la acción saltó ~9-13% en after-hours, subiendo más en
los días siguientes.

Múltiplos: P/E GAAP 10,6x, distorsionado por la ganancia no operativa de revaluación de Anthropic ($53,4B
pre-tax) — ajustado por ese efecto, el orden de magnitud real ronda **55-65x** (estimación cualitativa, no
un múltiplo verificado con precisión).

DCF (WACC 9%, g terminal 3%; escenarios ponderados 25% optimista / 50% base / 25% pesimista — ponderación
que el verificador adversarial señala como sesgada hacia el optimismo, porque el caso base asume una
moderación de capex que ni el guidance ni los comentarios del CEO sostienen, más bien al contrario):

| Escenario | Supuesto | Valor/acción |
|---|---|---:|
| Pesimista | carrera armamentística de capex, FCF~0 hasta 2028 | ~$150 |
| Base | capex modera a 13-14% de ventas hacia 2028-29 | ~$220 |
| Optimista | AWS >30% sostenido, capex renta | ~$315 |

**Valor esperado ponderado ≈ $226/acción.**

**Gap de valoración real, corregido**: con el precio correcto (~$285) frente al valor ponderado ($226), la
sobrevaloración es **~26-27%, no ~8%** como decía el borrador con el precio obsoleto — la corrección de
precio es la que endurece el veredicto de esta tesis, más que cualquier ajuste al DCF en sí.

## 7. Riesgos y red flags

- **Sobrevaloración sin margen de seguridad** — el hallazgo central de esta tesis: ~26-27% por encima del
  valor ponderado, con una ponderación de escenarios que el propio verificador señala como generosa.
- **FCF TTM negativo** y giro de balance hacia deuda (aunque menos alarmante en términos amplios que en la
  cifra estrecha) — vigilar si el capex empieza a rentar o sigue acelerando.
- **CapEx bruto/neto sin reconciliar** — hueco de dato declarado, no cerrado en esta ronda.
- **Carrera armamentística de capex de IA** — riesgo compartido con Microsoft/Alphabet/Meta
  ([[plataformas-tecnologicas-y-publicidad-digital]]): si el capex no renta, golpea a los cuatro a la vez.
- **WACC estático (9%) y pesos de escenario (25/50/25)** pueden estar subestimando el riesgo real según el
  verificador — un WACC más alto o pesos más conservadores comprimirían aún más el valor esperado.

## 8. Contraste con postura previa (anti-anclaje)

Amazon no tenía tesis previa (primera cobertura), así que no hay lenguaje evaluativo de página de empresa
que pudiera anclar. Sí existía la posición de cartera en sí (+17,2%, bloque más grande de la cartera) y el
hecho de estar "pendiente de reconciliación" en la memoria de la rutina desde el 07-22 (deuda neta con
signo invertido, CapEx desviado ~$19B en aquella ficha antigua). El borrador a ciegas no vio ese contexto.

La corrección más importante de esta ronda no vino del contraste con cartera, sino de un error más básico y
más grave: **el precio de mercado usado no era posterior al earnings más reciente** — un modo de fallo
distinto de los de rondas anteriores sobre Amazon (que solían ser de deuda neta o CapEx, no de precio
obsoleto). Con el precio corregido, la sobrevaloración real (~26-27%) es sustancialmente mayor que la que el
borrador reportaba (~8%) — la dirección del error apuntaba hacia MENOS cautela, no hacia más, a diferencia
del patrón de sobrecorrección visto en [[bae-systems|BAE Systems]] (07-24), donde el verificador corregía un
exceso de cautela.

**Encaje con cartera**: Amazon es el bloque individual más grande de renta variable (28,3%, "Tecnología
desarrollada"). Es la primera vez que esta posición recibe una tesis formal, y el hallazgo central —FCF TTM
negativo, giro material hacia deuda y, sobre todo, una sobrevaloración real bastante mayor de lo que
sugería el borrador ciego— toca el bloque más grande de la cartera con una conclusión más cautelosa de lo
esperado. No cambia la posición hoy (esta tesis no propone vender ni recortar), pero es candidata a nota de
atención para la CIO/CRDSO precisamente por el tamaño del bloque afectado.

## 9. Veredicto: VIGILAR — sin margen de seguridad, no ampliar

Negocio de calidad excepcional (foso AWS/publicidad intacto, AWS creciendo 37%) pero **sin margen de
seguridad al precio actual**: sobrevaloración real de ~26-27% frente al valor ponderado, con una ponderación
de escenarios que ya es generosa. No es EVITAR porque no hay evidencia de deterioro del negocio —el foso y
el crecimiento de AWS están intactos— pero la valoración por sí sola desaconseja ampliar. **No ampliar
posición.** Reevaluar tras el próximo guidance/resultados de Q3 2026.

## 10. Qué invalidaría esta tesis

- **Refuerza la cautela**: capex/ventas sigue acelerando por encima del 21,1% actual sin que AWS acelere en
  la misma proporción (crecimiento >37% no sostenido).
- **Refuerza la cautela**: el FCF TTM sigue negativo o se deteriora más allá de 1-2 trimestres.
- **Mejora la tesis**: capex/ventas modera hacia el 13-14% asumido en el caso base durante 2026-2028 sin que
  el crecimiento de AWS se resienta.
- **Mejora la tesis**: se reconcilia el CapEx bruto/neto y el resultado confirma la cifra menor (mejor
  conversión de caja de lo que sugiere la cifra bruta).

## 11. Predicciones falsables (para "Para el CIO")

- "El capex/ventas de Amazon en el guidance o los resultados de Q3 2026 sigue por encima del 20% (no modera
  hacia el 13-14% del caso base)" — prob. 0,65, resolución con el informe de resultados de Q3 2026 (esperado
  ~octubre/noviembre 2026).
- "Amazon cotiza por debajo de $226 (valor DCF ponderado) en algún momento antes del 2026-12-31" — prob.
  0,30, resolución con precio de cierre diario.

## Nota de evolución 2026-08-16: AWS fuerte, guía de capex exigente

La actualización Q2-2026 mantiene la demanda operativa de AWS, con crecimiento aproximado del **37%**, pero también
eleva el capex previsto de 2026 hacia **$220B**. La combinación encaja con la tensión durable del capex de IA:
ingresos reales pueden coexistir con una exigencia de financiación y retorno que todavía no está demostrada en todo
el ciclo. Fuente: [[conocimiento-2026-08-16]], resultados Q2-2026 de Amazon.

## Ver también

cartera actual · perfil de inversor · [[plataformas-tecnologicas-y-publicidad-digital]] ·
[[foso-economico]] · [[margen-de-seguridad]] · [[creacion-de-valor-y-eva]] · [[microsoft]] · [[alphabet]] ·
[[meta-platforms]] · [[verisk]] · [[bae-systems]] · [[af-2026-08-03]]

## Nota de evolución 2026-08-25 (analista-usa): AWS récord, FCF TTM negativo y dos tercios del beneficio son papel

Del PR oficial Q2 2026 (30-jul):

1. **AWS +36,7% a $42,2B** — el crecimiento más alto en 18 trimestres (run-rate ~$169B anualizado). El
   oligopolio cloud se acelera, no se desacelera.
2. Pero **FCF TTM: -$7,6B** (vs +$18,2B hace un año) con capex TTM $173B: Amazon ya es el caso extremo
   del [[ciclo-de-capex]] — el mayor generador de caja del retail mundial financia su transformación con
   deuda y balance, no con caja libre.
3. **Calidad del beneficio**: net income $62,6B incluye **$53,4B pre-impuestos de other income
   "principalmente de nuestras inversiones en Anthropic"** (cita literal del PR). Dos tercios del
   beneficio del trimestre son revalorización de papel, no negocio
   ([[contabilidad-y-calidad-de-beneficios]]).
4. Segundo motor verificado: el negocio de IA propia y **los chips Trainium superan cada uno $25B de
   run-rate** (triple dígito); Anthropic Y OpenAI comprometen capacidad multi-gigavatio con chips de
   Amazon. Primera grieta verificada al poder de fijación de precios de GPU dentro del mayor cliente:
   [[semiconductores-logica-y-computo-ia]] y [[nvidia]] tienen aquí su contrapunto estructural.

Para la cartera: Carlos tiene AMZN (cartera actual). El bull case de negocio se cumple; el precio
lo está pagando el FCF. Vigilar cuándo cruza el cruce capex→FCF positivo (guía Q3: OI $22,5-26,5B).

Fuente: Amazon Q2 2026 results (IR press release): https://ir.aboutamazon.com/news-release/news-release-details/2026/Amazon.com-Announces-Second-Quarter-Results/default.aspx (texto íntegro archivado en scratchpad/analista-usa/amazon-q2-2026-pr.txt) — consulta 2026-08-25.
