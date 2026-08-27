---
title: "Tesis: Broadcom (AVGO)"
tipo: tesis
tags: [tesis, semiconductores]
fecha: 2026-08-24
agente: carlos
ticker: AVGO
moneda: USD
precio_referencia: 360.72
fecha_precio: 2026-08-24
valor_estimado: 358 (valor esperado ponderado de escenarios)
gatillo_entrada: <280 USD
veredicto: VIGILAR
revisar_el: 2026-11-24
---
# Tesis: Broadcom (AVGO)

## 1. Negocio

Broadcom vende dos cosas que casi nadie más vende a la vez. **Uno**: chips de IA **a medida** (*custom ASICs/XPU*) co-diseñados con un puñado de clientes —[[alphabet|Google]] (TPU, acuerdo plurianual hasta 2031 firmado en abr-2026), Meta, OpenAI y Anthropic entre seis clientes core— más las redes que los conectan (~40% del ingreso de IA es networking). **Dos**: software de infraestructura (VMware, Symantec, CA) convertido a suscripción: $27,7B TTM con $14,2B de ingresos diferidos. El chip se paga una vez; el software, cada año. Si el modelo no sale simple, es porque no lo es: es una fábrica de cuasi-monopolios bilaterales sobre una base de renta recurrente.

## 2. Industria — [[semiconductores-logica-y-computo-ia]]

La industria ya está abierta en el cerebro: foso profundo por ecosistema, demanda concentrada en unos pocos hyperscalers cuyo capex es a la vez motor y amenaza ([[ciclos-de-mercado]]). Broadcom ocupa el hueco que Nvidia no cubre: el cliente grande que quiere escapar del peaje CUDA encarga su propio chip a Broadcom. KPIs: rampa de XPU por cliente, % networking, capex/órdenes de los labs, y ahora —nuevo— la **financiación** de ese capex. Trampa típica del sector: extrapolar el crecimiento financiado como si fuera orgánico; aquí además el vendedor participa en financiarlo (§7).

## 3. Moat — [[foso-economico]]

- **Tipo**: coste de cambio por **co-diseño** —el XPU queda soldado al stack de software, racks y redes del cliente durante generaciones— + escala de I+D + portfolio de IP de networking + lock-in VMware en el software.
- **¿Aguanta 10 años? A medias, y esa es la clave.** El foso de Nvidia es *propietario* (CUDA sirve a todo el mercado); el de Broadcom es *arrendado*: cada posición de monopolio existe mientras dura la relación bilateral y **no es exclusiva por diseño**. La prueba llegó el 19-ago-2026: Marvell emitió a Google un warrant de ~$12,2B para entrar como segundo diseñador de sus aceleradores de inferencia. El cliente cultiva alternativas **a propósito** — es su póliza contra la dependencia. Consecuencia de la consecuencia: el poder de precios se renegocia en cada renovación, y el margen operativo no-GAAP del 67% contiene una prima de exclusividad que caduca silenciosamente.
- **¿Quién lo destruiría?** Los propios clientes (doble fuente ya en marcha), Marvell/MediaTek escalando en diseño custom, y un invierno de IA que rompa la cadena de financiación que sostiene los pedidos.

## 4. Financieros — calidad del beneficio

Los de la ficha ([[broadcom]]) son espectaculares; lo interesante es interpretarlos:

- **GAAP vs no-GAAP**: margen operativo GAAP TTM 44% vs 67% no-GAAP. La diferencia (amortización de intangibles + SBC) es real y heredada del M&A: el beneficio "limpio" que sostiene el forward P/E de 23× es el que excluye el coste de haber comprado VMware.
- **FCF 112% del beneficio**: verde, poco discutible. Capex 1%: cobra el peaje sin poner el ladrillo… hasta ahora.
- **Lo nuevo**: parte creciente del crecimiento llega **con garantías adjuntas** (§5). El beneficio futuro ya no es solo riesgo semiconductor; tiene **cola de crédito**. El inventario (+91% en 6 meses) y las cuentas por cobrar (+38%) crecen más rápido que nada — normal antes de una rampa, caro si la rampa se retrasa.

## 5. Directiva y capital allocation

Hock Tan (CEO desde 2006) es la mejor máquina de fusiones-y-disciplina del sector: LSI, Brocade, CA, Symantec, VMware, convertidas en caja vía recortes y suscripción. Dividendo subiendo ~11–13% anual desde hace una década; recompras modestas; M&A primero. **Pero el allocation ha mutado de especie**: la plataforma **AI XPV** con Apollo y Blackstone (jun-2026, primer paquete $35B para >1 GW de Anthropic; diseñada para >20 GW hasta 2028) hace que inversionistas externos compren los racks y los alquilen a los labs de IA **con garantía de pago de Broadcom** (tope $29B en la primera operación según el 10-Q). BofA modela la plataforma en **$370B de deuda senior hacia mediados de 2029** a plena escala (peor caso de pérdidas ~$42B; ~$10,5B con morosidad del 25%) y rebajó la deuda de AVGO a *Market Weight*; Bloomberg reporta (20-ago-2026) negociación de **>$60B adicionales**. Es financiación del proveedor (*vendor financing*) con capa estructurada: Broadcom ayuda a pagar la demanda de sus propios chips. Nadie duda del talento operativo de Tan; la pregunta es si este último acto es genio o la fase tardía de todo boom.

## 6. Valoración por escenarios

Base: precio $360,72 (24-ago-2026). Ancla de consenso: EPS FY27e no-GAAP ~$19,55.

| Escenario | Prob. | Supuesto | Valor |
|---|---|---|---|
| Pesimista | 35% | Digestión del ciclo IA 2027–28 + primeras pérdidas en garantías ($10–30B) + re-rating a múltiplo de semi cíclico con cola crediticia (~14× sobre EPS normalizado ~$13–14) | ~$190 |
| Base | 45% | Cumple FY27 (IA >$100B), garantías contenidas; 20× sobre EPS FY27e $19,55 | ~$390 |
| Optimista | 20% | FY28 también crece, cobertura de garantías baja con la escala; 25× sobre ~$23 | ~$580 |

**Valor esperado ≈ $358 → [[margen-de-seguridad|margen de seguridad]] ≈ 0%.** El mercado ya descuenta exactamente el caso base; se paga perfección operativa con riesgo de crédito nuevo sin compensación por él. Gatillo de entrada propuesto: **<$280** (escenario pesimista parcialmente en precio, MOS >25%).

## 7. Riesgos y red flags

1. **Financiación circular/reflexiva** ([[nassim-taleb]]): los ingresos de IA dependen de labs que pagan alquileres sostenidos por la continuidad del boom. Si el ROI de la IA decepciona, AVGO sufre el golpe doble y correlacionado: caen pedidos Y cristalizan garantías. Comparación incómoda: la estructura de Nvidia lleva backstop opcional de ~25% de su marco; la primera operación de AVGO garantiza ~83% de la transacción.
2. **Concentración extrema de clientes**: seis clientes core = prácticamente todo el crecimiento; y son clientes con alternativa (Marvell-Google) y con músculo de negociación.
3. **VMware como pasivo reputacional**: exploit activo de vCenter (divulgado 29-jul, atacado desde ~3-ago; 361 IPs en 47 países) sobre una base de clientes ya resentida por la transición comercial. La anualidad que compensa el ciclo semis puede sangrar en renovaciones.
4. **Valoración**: P/S 23×, P/FCF 53×; consenso de analistas ($528) desconectado del precio ($361) — la calle aún no ha digerido el cambio de régimen.
5. Geopolítica: fabricación en TSMC/Taiwán; controles de exportación [Sin datos: exposición concreta a China].

## 8. Contraste con postura previa

Sin postura previa. Primera pasada: sonda de screening 24-ago-2026, tras el reparto del complejo IA en [[semiconductores-logica-y-computo-ia]] (donde ya conviven [[nvidia]], [[tsmc]], [[asml]], [[qualcomm]]).

## 9. Veredicto propuesto: VIGILAR

Negocio extraordinario —quizá el segundo mejor negocio del ciclo de IA— a un precio que ya descuenta que lo sea, con un riesgo nuevo (garantías XPV) que el mercado empezó a cobrar en agosto-2026 y cuya magnitud final es ilegible desde fuera. **No COMPRAR hoy. Condiciones para revisar a COMPRAR**: precio <$280, o bien dos lecturas consecutivas del 10-Q mostrando la exposición máxima por garantías plana (≤$40B) mientras el ingreso de IA cumple guía — eso diría que el backstop fue subsidio de lanzamiento y no término estructural. Decide Carlos.

## 10. Qué invalidaría esta tesis

- Guía de IA FY27 recortada por debajo de $100B, o pérdida de OpenAI/Anthropic como cliente XPU → tesis alcista muerta.
- Exposición máxima por garantías >$50B en el 10-Q, o primer cargo reconocido por deterioro en garantías → confirmación del escenario pesimista de crédito.
- Margen bruto consolidado <73% (erosión de la prima de exclusividad).
- Deuda bruta >2,5× EBITDA para sostener la plataforma.
- Salida de Hock Tan sin sucesión visible.

## 11. Predicciones falsables

1. Resultados Q3 FY26 (~2-sep-2026): ingreso de IA ≥ $15B (guía $16B) — probabilidad 90%.
2. Cierre FY26 (nov-2026): ingreso de IA $56B ±5% — probabilidad 80%.
3. En el 10-Q de sep o dic-2026 la exposición máxima por garantías sigue ≤ $40B — probabilidad 55%; si se supera, alerta estructural.
4. Antes de jun-2027 algún segundo cliente core formaliza doble fuente con Marvell u otro diseñador — probabilidad 60%.

## Ver también

[[broadcom]] · [[semiconductores-logica-y-computo-ia]] · [[foso-economico]] · [[ciclos-de-mercado]] · [[financiacion-estructurada-del-capex-de-ia]] · [[flujo-de-caja-descontado]] · [[michael-mauboussin]] · [[jeremy-grantham]] · [[tensiones-activas]] · cartera actual
