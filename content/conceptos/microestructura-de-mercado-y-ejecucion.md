---
title: "Microestructura de mercado y ejecución"
tipo: concepto
tags: [ejecucion, hft, ordenes, liquidez, costes, microestructura]
fecha: 2026-07-20
fuentes: ["[[flash-boys-lewis]]"]
---

# Microestructura de mercado y ejecución

El **riesgo de ejecución** es distinto del riesgo de valoración: aunque aciertes el [[valor-intrinseco|valor intrínseco]] de una
empresa, *cómo* se ejecuta tu orden te cuesta dinero. Es la capa que faltaba en el cerebro — todo el corpus
trata de **qué comprar**, casi nada de **cómo comprarlo**. Documentado vía [[flash-boys-lewis|Flash Boys]].

## La mecánica

- **Fragmentación**: el mercado estadounidense no es "la bolsa" sino trece bolsas públicas más decenas de
  *dark pools*, cada una con su propia cola de órdenes. La regulación (Reg NMS, 2005/2007) **obliga** a
  enrutar órdenes entre ellas — y al hacerlo, revela información.
- **Ventaja de latencia**: quien ve el mercado microsegundos antes puede correr a otra bolsa y ponerse por
  delante de tu orden. No es ventaja informacional sobre el negocio: es ventaja sobre **tu propia orden**.
- **El SIP (la foto pública consolidada del mercado) es más lento que los feeds privados** — hasta 25 ms de
  diferencia. Un estudio de Berkeley encontró que el precio SIP y el "rápido" de Apple **difirieron 55.000
  veces en un solo día**.
- ***Maker-taker***: las bolsas pagan por poner liquidez y cobran por retirarla, lo que crea incentivos para
  tipos de orden diseñados para **no comerciar**, sino para extraer información.
- ***Payment for order flow***: los brókers "sin comisiones" venden el flujo de sus clientes. El servicio no
  es gratis; se paga en calidad de ejecución. Conflicto de interés estructural que conviene conocer.

## Lo que esto NO significa

Honestidad en las dos direcciones, porque el libro fuente es tendencioso:

- Los ***spreads* sí se estrecharon** con la decimalización y el HFT (de 1/16 de punto a ~1 céntimo). Es una
  mejora real y medible para el minorista, y la literatura académica posterior a 2014 es **más ambigua** que
  la tesis del libro sobre el efecto neto.
- Para quien hace pocas operaciones al año, el coste del HFT es **pequeño frente a comisiones, *spread*,
  divisa y fiscalidad**. → [[fiscalidad-del-inversor]]
- No es un argumento contra invertir, ni contra indexar. Es un argumento sobre **cómo pulsar el botón**.

## Las reglas prácticas que sí valen

1. **Orden limitada, no de mercado.** La prueba máxima es el *flash crash* de 2010: P&G se negoció entre
   **0,01$ y 100.000$** por acción. Una orden de mercado en un momento así se ejecuta a cualquier precio.
2. **Evitar los primeros y últimos 15-30 minutos de sesión** — máxima actividad algorítmica y peor formación
   de precio.
3. **Donde de verdad duele es en lo poco líquido**: *spread* ancho y volumen bajo. Ahí una mala ejecución
   cuesta puntos porcentuales, no céntimos.
4. **El coste crece con la rotación.** Cada vuelta adicional alimenta al intermediario — argumento
   adicional, ahora con mecanismo, a favor de la baja rotación. → [[horizonte-largo-plazo]]

## Relación con el resto del cerebro

- **Con [[eficiencia-de-mercado]]**: son capas distintas del mismo problema. El corpus discute eficiencia
  *informacional*; esto es ineficiencia *mecánica*. Matiz incómodo para la indexación: los fondos indexados
  también ejecutan órdenes y sufren la misma fricción al rebalancear — indexar reduce el coste de
  selección, no el de ejecución.
- **Con [[precio-vs-cotizacion]]**: esa página atribuye la distorsión a los flujos pasivos (Ackman, Smith).
  Esto añade un **segundo mecanismo independiente y anterior**: la fragmentación regulatoria. Son
  compatibles y se refuerzan — **no son la misma tesis repetida**.
- **Con [[gestion-de-posiciones]]**: aquella cubre *cuánto* comprar; esta, *cómo* introducir la orden.

## Aplicación a Carlos

Su perfil —36 posiciones, pocas operaciones al año, horizonte largo— es **el menos expuesto** que existe. No
hay aquí ningún cambio de tesis. Pero sus posiciones ilíquidas ([[kazatomprom|Kazatomprom]] GDR, First Majestic, mineras de
cobre, ETC 3×) son exactamente el perfil donde la regla 3 muerde. Usar orden limitada en ese bloque es
gratis y evita una fuga silenciosa. → cartera actual

## Ver también

[[flash-boys-lewis]] · [[eficiencia-de-mercado]] · [[precio-vs-cotizacion]] · [[gestion-de-posiciones]] ·
[[fiscalidad-del-inversor]] · [[horizonte-largo-plazo]] · [[riesgo-real-vs-volatilidad]]
