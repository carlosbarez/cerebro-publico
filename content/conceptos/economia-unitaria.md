---
title: "Economía unitaria (*unit economics*)"
tipo: concepto
tags: [unidad-economica, cac, ltv, margen-de-contribucion, saas, marketplaces, calidad]
fecha: 2026-08-26
agente: profesor-conceptos
fuentes: "[\"https://ir.doordash.com/news/news-details/2026/DoorDash-Releases-Fourth-Quarter-and-Full-Year-2025-Financial-Results/default.aspx\", \"https://s22.q4cdn.com/280253921/files/doc_financials/2025/q4/Q4-2025-Shareholder-Letter.pdf\", \"https://mowsix.com/insights/unit-economics-benchmarks-2026\", \"https://www.saasmag.com/saas-cac-payback-period-new-growth-gauge-2026/\", \"https://averagecac.com/\"]"
---

# Economía unitaria (*unit economics*)

Los ingresos y costes de un negocio medidos **por unidad** —un pedido, un cliente, un suscriptor—, para
saber si cada unidad que se vende **crea o destruye valor** antes de hablar de escala. Es el eslabón que
falta entre "la empresa crece" y "la empresa es buena".

## El mecanismo

1. **Define la unidad.** No es universal: para un marketplace de reparto la unidad es el **pedido**; para
   un SaaS, el **cliente/suscriptor**; para un banco, la cuenta; para publicidad, el usuario o el clic.
   Elegir mal la unidad invalida todo lo demás.
2. **Ingreso y coste variable por unidad.** Ingreso: el *take rate* (lo que se queda la plataforma de cada
   transacción) o el ARPU (ingreso medio por cliente). Coste variable: lo que cuesta servir esa unidad
   (comisiones a repartidores, *cost of goods sold* (COGS), *fulfillment*, atención, procesamiento de pago).
3. **Margen de contribución** por unidad = ingreso por unidad − coste variable por unidad. Es el dinero que
   queda para pagar los costes fijos (oficinas, ingeniería, administración). Si es negativo, cada pedido
   vendido **empeora** el negocio.
4. **Cuánto cuesta adquirir la unidad (CAC, *customer acquisition cost*).** Gasto comercial y de marketing
   dividido entre las unidades nuevas. Incluye salarios de ventas y comisiones (*fully-loaded*), no solo
   anuncios.
5. **Cuánto deja la unidad de por vida (LTV, *lifetime value*).** El margen bruto acumulado que el cliente
   genera mientras es cliente. El churn (baja de clientes) lo decide todo: **si el churn mensual pasa del
   1,5% al 3%, el LTV se divide por dos.**
6. **Cuánto tarda en devolverse el CAC (payback).** CAC ÷ (margen bruto mensual por cliente). Es la
   métrica de **capital**: un payback largo significa que el crecimiento necesita mucha financiación
   mientras se recupera el dinero.

La intuición de segundo orden: **crecer no es gratis ni bueno por sí solo.** Un negocio con buena unidad
económica financia su propio crecimiento (reinvirtiendo el margen de contribución); uno con mala unidad lo
quema, y cada punto de crecimiento adicional es más deuda o más dilución. El crecimiento es una compra: ver
[[crecimiento-organico-vs-inorganico]].

## Ejemplo real verificado: DoorDash, Q4 2025

Fuente: comunicado de resultados Q4/FY2025 de DoorDash (ir.doordash.com, 18-feb-2026). La empresa publica
el desglose por pedido; las cifras por unidad son derivadas aritméticamente de esos datos publicados.

| Métrica (Q4 2025) | Dato | Por pedido |
|---|---|---|
| Pedidos | 903M (+32% a/a) | 1 |
| Valor bruto de mercado (*Gross Order Value*, GOV) | $29.683M (+39%) | $32,87 |
| Ingresos (take rate) | $3.955M (+38%) | $4,38 |
| Margen neto de ingresos (take rate) | **13,3% del GOV** | — |
| Beneficio bruto GAAP | $1.911M (6,4% del GOV) | $2,12 |
| **Beneficio de contribución** (*contribution profit*) | $1.405M (**4,7% del GOV**) | $1,56 |
| EBITDA ajustado | $780M (2,6% del GOV) | $0,86 |

Lectura: de cada $100 de pedido, DoorDash se queda ~$13,3 como ingresos (el *take rate*: lo que cobra a
restaurantes, usuarios y anunciantes). De esos $13,3, ~$8,6 se van en costes variables —pagos a repartidores,
comisiones a restaurantes, coste de servicio y marketing— y ~$4,7 llegan al *contribution profit* (4,7% del
GOV). En términos por pedido: $4,38 de ingreso y **$1,56 de contribución**; ese $1,56 es lo que queda para
pagar la estructura fija. Ojo: el *contribution profit* es una métrica ajustada, no GAAP — la empresa lo
define como beneficio bruto menos gasto de ventas y marketing, más (i) amortización del coste de ingresos,
(ii) SBC y parte de nóminas y (iii) overhead asignado.

Detalle importante para esta página: **los datos incluyen Deliveroo desde el 2-oct-2025**, fecha de la
adquisición (nota al pie del propio comunicado). Parte del +39% del GOV es **comprado**, no orgánico — ver
[[crecimiento-organico-vs-inorganico]].

## Ejemplo didáctico SaaS (sin dato público fiable; marcado como didáctico)

Un SaaS cobra **€100/mes** por cliente, con **75% de margen bruto** y **1,5% de churn mensual**; cuesta
**€1.200** adquirir cada cliente (CAC).

- **LTV** = ARPU × margen bruto ÷ churn = 100 × 0,75 / 0,015 = **€5.000**.
- **LTV:CAC** = 5.000 / 1.200 = **4,2** (sano; el listón de referencia ronda 3).
- **Payback** = CAC ÷ (ARPU × margen bruto) = 1.200 / 75 = **16 meses**.

Con churn al 3% el LTV cae a €2.500 (LTV:CAC 2,1) y el mismo negocio pasa de gran comprador a marginal:
**el churn es la palanca más potente** (reducirlo de 2% a 1% duplica el LTV).

Referencias de mercado (secundarias, direcciónales, no cifras auditadas): la mediana de LTV:CAC en B2B SaaS
está en **3,2:1** (n=939, Optifai; mowsix.com, 5-may-2026) con paybacks de <12 meses en SMB, <18 en
mid-market y <24 en enterprise; el top cuartil supera 5:1 y el cuartil inferior pierde dinero con cada
cliente. La eficiencia comercial varía mucho entre públicos comparables: **Datadog** gasta ~22-24% de
ingresos en ventas y marketing frente a ~46% de **Snowflake** (saasmag.com, 20-may-2026): misma industria,
misma fase de madurez, la mitad de capital comercial para sostener el crecimiento.

## En la práctica

Qué mira un analista:

- **La tendencia del margen de contribución por unidad con la escala.** Debe **mejorar** (costes fijos
  diluidos, mejor *take rate*). Si empeora al crecer, el foso es débil ([[foso-economico]]).
- **CAC a lo largo del tiempo.** Sube cuando el mercado se satura; es la señal más temprana de que el
  crecimiento se está "comprando" más caro.
- **Payback frente a vida del cliente.** Si el payback supera la permanencia media, la empresa recupera
  tarde el CAC: "negocio zombi" que solo vive de nueva financiación.
- **Si la empresa deja de publicar métricas** que antes publicaba. Es un *red flag* clásico: si fuera
  buena noticia, la contarían.
- **En retail/mercado de bienes: el coste de *fulfillment* por pedido.** El margen del producto puede ser
  bueno y el pedido perder dinero solo por envío y logística — el caso de manual del negocio unitario roto.

Trampas:

- **Confundir LTV de ingresos con LTV de margen bruto.** Un cliente de €100.000 de LTV con 40% de margen
  vale menos que uno de €60.000 con 80%. Lo que llega al accionista es el margen.
- **CAC *blended* vs *fully-loaded*.** Los anuncios no incluyen sueldos de ventas; el CAC real casi
  siempre es mayor que el que publicita la empresa.
- **Comparar unidades de modelos distintos.** LTV:CAC de un SaaS no es comparable con el margen por pedido
  de un marketplace; el numerador y el denominador son mundos distintos.
- **Crecimiento que escala el error.** Un negocio con LTV:CAC < 1 "crece" hacia la ruina: cada cliente
  nuevo destruye valor. WeWork es el caso de manual (su S-1 mostraba una unidad económica que no cerraba).

## Conexión con el cerebro

- **Plataformas donde la unidad manda** (Carlos mira varias): [[uber]] (movilidad: take rate y coste por
  viaje), [[mercadolibre]] (take rate, *fulfillment*), [[meituan]] (reparto, coste por pedido), [[shopify]]
  (comercio: valor por comerciante), [[amazon]] (retail: *fulfillment* por pedido frente a AWS).
- **Industrias con unidad de pedido/transacción**: [[restaurantes]] y [[retail-alimentacion]] (la lógica
  de DoorDash), [[pagos-digitales]] (la unidad es la transacción y el *take rate* es el modelo).
- **El puente con la valoración**: la unidad económica es el [[retorno-sobre-capital-empleado|ROIC]] en
  miniatura (cada unidad es un mini-proyecto con su retorno y su reinversión); el mercado la descuenta vía
  [[expansion-y-compresion-de-multiples]] y [[multiplos-de-valoracion]]. Ver también
  [[creacion-de-valor-y-eva]] (crear valor = retorno por encima del coste, unidad a unidad).
- **Software**: [[software-empresarial]] ya tocaba CAC payback y churn; esta página generaliza el método a
  cualquier modelo de negocio.
- **Para qué decisión de Carlos sirve**: filtrar crecimiento de calidad en cartera (AMZN, Meituan) —si el
  crecimiento va acompañado de margen de contribución por unidad, el múltiplo se sostiene; si la unidad
  empeora, es crecimiento comprado con capital, y el [[margen-de-seguridad]] exige no pagarlo. Y en
  [[comparar-dos-empresas]] de la misma industria: primero compara las unidades, después los múltiplos.

## Fuentes

- DoorDash, comunicado Q4 y FY2025 (18-feb-2026): https://ir.doordash.com/news/news-details/2026/DoorDash-Releases-Fourth-Quarter-and-Full-Year-2025-Financial-Results/default.aspx
- DoorDash, Q4 2025 shareholder letter (PDF): https://s22.q4cdn.com/280253921/files/doc_financials/2025/q4/Q4-2025-Shareholder-Letter.pdf
- Mowsix, *Unit Economics Benchmarks 2026* (5-may-2026): https://mowsix.com/insights/unit-economics-benchmarks-2026
- SaaS Mag, *CAC Payback Period: The New SaaS Growth Gauge in 2026* (20-may-2026): https://www.saasmag.com/saas-cac-payback-period-new-growth-gauge-2026/
- averagecac.com, metodología CAC de SaaS públicos desde 10-K: https://averagecac.com/