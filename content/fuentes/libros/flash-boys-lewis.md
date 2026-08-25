---
title: "Michael Lewis — *Flash Boys: A Wall Street Revolt*"
tipo: fuente
tags: [lewis, hft, microestructura, ejecucion, riesgo-operativo, javier-del-valle]
fecha: 2026-07-26
fuentes: ["[[microestructura-de-mercado-y-ejecucion]]"]
---

# Michael Lewis — *Flash Boys: A Wall Street Revolt*

W.W. Norton, 2014, 274 págs. Periodismo narrativo, **no manual de inversión**. Sigue a Brad Katsuyama
(trader de RBC, luego fundador de la bolsa IEX) mientras destapa cómo el trading de alta frecuencia explota
la fragmentación regulatoria del mercado estadounidense. Ingerido el 2026-07-20 (lote Javier del Valle).

**Encuadre en el Cerebro**: entra como **riesgo de ejecución y estructura de mercado**, no como estrategia.
Opera en una escala temporal (microsegundos) completamente ajena al horizonte de Carlos — pero deja una
lección operativa concreta y gratuita.

## Tesis central

- La infraestructura del mercado estadounidense (trece bolsas, decenas de *dark pools*, cientos de tipos de
  orden) no surgió de un diseño coherente sino de **parches regulatorios acumulados** —sobre todo la Reg NMS
  (2005/2007)— que crearon huecos explotables.
- La ventaja del HFT **no es informacional** en el sentido clásico: es una ventaja de **latencia**, ver el
  mercado microsegundos antes que el resto, convertida en negocio recurrente y casi libre de riesgo.
- Tres tácticas concentran el daño: *front-running* electrónico, arbitraje de *rebates* (explotar el sistema
  *maker-taker* sin aportar liquidez real) y **arbitraje de mercado lento** — esta última, la más lucrativa.
- El problema no es "ser rápido" sino la **desigualdad estructural de acceso**: co-ubicación pagada, tipos
  de orden diseñados para intermediarios, y una foto pública del mercado (el SIP) deliberadamente más lenta
  que la privada de quien puede pagarla.
- Se puede **diseñar en contra** sin prohibir el HFT: IEX demuestra que basta con igualar la distancia
  (*speed bump* de 350 microsegundos) y simplificar los tipos de orden.

## Datos

- **Reg NMS** (SEC, 2005/2007) nace tras una multa de **241 M$** a especialistas del NYSE por *front-running*.
- **Gap SIP vs. feeds privados**: hasta **25 ms**. Un estudio de Berkeley (feb-2013) halló que el precio SIP
  y el precio "rápido" de Apple **difirieron 55.000 veces en un solo día**. Es la cifra más sólida del libro
  — fuente académica, no del autor.
- Cuota del HFT sobre el volumen total: **26% (2006) → 52% (2008)**, sin bajar del 50% desde entonces.
- "Impuesto" de intermediación estimado: **entre 10.000 y 22.000 M$/año** en EE.UU. Lewis avisa
  explícitamente de la horquilla.
- **Flash crash** (6-may-2010): P&G se negoció entre **0,01$ y 100.000$** por acción; 20.000 operaciones a
  más del 60% de distancia del precio previo. **Es la prueba máxima del riesgo de la orden de mercado.**
- Spread Networks: fibra Chicago-Nueva Jersey de 827 millas, ~300 M$ de coste, vendida a 200 clientes a
  10,6 M$ cada uno para ahorrar milisegundos.
- IEX al lanzarse (25-oct-2013): 568.524 acciones el primer día; supera al AMEX en cuota en 51 minutos el
  día que Goldman le envía flujo real.

## Citas

> "That's when I realized the markets are rigged. And I knew it had to do with the technology."
> (Brad Katsuyama, p. 41)

> "It was riskless, larcenous, and legal—made so by Reg NMS." (p. 124)

> "You could front-run an order in a dark pool on a bicycle." (Brad Katsuyama, p. 123)

> "Whose order flow is the most valuable? Yours and mine. We don't have black boxes. We don't have algos.
> Our quotes are late to the market—a full second behind." (Chris Nagy, ex-TD Ameritrade, p. 182)

> "We know how to cure this. It's just a matter of whether the patient wants to be treated." (p. 266)

## Tensiones

- **Con [[eficiencia-de-mercado]]**: matiza, no contradice — son **capas distintas**. El corpus discute
  eficiencia informacional (¿el precio refleja el valor del negocio?); Lewis documenta una ineficiencia
  **mecánica** de microsegundos en el proceso de ejecución. Matiz incómodo para la sección de indexación:
  los fondos indexados también ejecutan órdenes y sufren la misma fricción en su rebalanceo — la indexación
  reduce el coste de selección, no el de ejecución.
- **Con [[precio-vs-cotizacion]]**: refuerzo estructural. Esa página atribuye la distorsión a los flujos de
  indexación pasiva (Ackman, [[terry-smith|Terry Smith]], "mercados inelásticos"); Flash Boys añade un **segundo mecanismo,
  independiente y anterior**: la fragmentación regulatoria. Son compatibles y se refuerzan — conviene dejar
  constancia de que no son la misma tesis repetida.
- **Sin tensión real** con las voces de valor ni con [[analisis-tecnico-y-tendencia]]: distancia de escala,
  no fricción conceptual.

## Aplicación a Carlos — la lección operativa

Carlos hace pocas operaciones al año con horizonte largo: es **el perfil menos expuesto al HFT del libro**.
El coste de la fricción de microestructura sobre su cartera es irrelevante frente a lo que ya paga en
comisiones, *spread*, divisa y fiscalidad. **No hay aquí ningún cambio de tesis.** Pero sí dos cosas
concretas:

1. **Donde sí duele es en las posiciones poco líquidas**: [[kazatomprom|Kazatomprom]] GDR, First Majestic, mineras de cobre
   y los ETC 3× son exactamente el perfil —volumen bajo, *spread* ancho— donde una orden de mercado, sobre
   todo en apertura o cierre (mayor actividad HFT y peor formación de precio), puede costar puntos
   porcentuales reales. **Usar siempre orden limitada, y evitar los primeros y últimos 15-30 minutos de
   sesión.** Es gratis y es la única acción concreta que deja el libro.
2. **El "impuesto" de intermediación crece con la rotación**: argumento adicional, ahora con mecanismo, a
   favor de la baja rotación que Carlos ya practica y **en contra de cualquier tentación de trading táctico
   sobre el bloque macro/tangibles** para cronometrar entradas y salidas.

## Ampliación (2026-07-26): lo que el destilado completo añade a la ficha

Destilado mecánico de las 3 partes del libro; la ficha original cubría ya tesis, datos y límites. Aquí solo
lo que faltaba. *Cifras del destilado pendientes de verificación selectiva contra el original.*

- **Thor, el precursor defensivo de IEX**: antes de fundar una bolsa, el equipo de Katsuyama en RBC
  construyó un *router* que retardaba las órdenes hacia las bolsas cercanas para que llegaran
  **simultáneamente a las 13** (ventana ≤ 465 µs), neutralizando el arbitraje de latencia. Resultado
  medible: RBC pasó del puesto 19 al **nº 1 del ranking de ejecución de Greenwich Associates** en seis
  meses (el mayor salto registrado hasta entonces: +3 puestos). Thor no se vendió: se usó como herramienta
  educativa ante el *buy side*.
- **La taxonomía de la depredación tiene jerarquía interna**: *front-running* electrónico, arbitraje de
  *rebates* y **arbitraje de mercado lento (*slow-market arbitrage*)** — esta última genera, según los
  "Puzzle Masters" de IEX, **más del 50% de los beneficios** del HFT. Y dentro de IEX apareció un cuarto
  patrón no previsto: el **arbitraje de *dark pools*** (sondear liquidez oculta con órdenes pequeñas y
  ejecutar en el punto medio de IEX capturando el diferencial sin mover el precio).
- **Zoran Perkov y el diseño *anti-complejidad***: el responsable del *matching engine* de IEX aplicó el
  marco de **Charles Perrow (*normal accidents*)**: en sistemas acoplados y complejos los fallos
  catastróficos son inevitables, no anomalías → motor de emparejamiento deliberadamente simple (*stateless*,
  solo 3 tipos de orden: mercado, límite y *midpoint peg*), resistiendo la presión comercial para añadir
  tipos amigables con el HFT. "Un coche es complicado; un coche en el tráfico es complejo."
- **El dato visual del 98,22%**: en el 98,22% de todos los milisegundos no ocurre *nada* en el mercado
  estadounidense. Es la refutación del argumento del HFT ("damos liquidez continua"): la actividad no es
  liquidez; la liquidez es disposición a asumir riesgo.
- **Goldman rompe filas (19-dic-2013)**: el primer banco grande en enviar flujo real a IEX; en 51 minutos,
  30 M de acciones, **92% ejecutadas al punto medio frente al 17% típico en *dark pools***. Y matiz que el
  relato de héroes no suele dar: fue decisión de dos personas dentro de Goldman, no de la firma, y hubo
  **desventaja del primer movedor** (*first-mover disadvantage*): el banco que enruta honesto pierde ingresos
  de su *dark pool* y el mercado se lo cobra. El epílogo añade el porqué del giro: el negocio HFT ya no le
  compensaba a Goldman (coste de capital, riesgo regulatorio, ~85% del beneficio de la carrera de velocidad
  ya capturado por otros).
- **El caso Aleynikov, con el detalle que importa**: el "código robado" de Goldman eran 32 MB de un
  *patchwork* de 60 M de líneas, en gran parte *open source* modificado y específico de su arquitectura
  legada ("comprar tuberías de cobre de una casa centenaria para tu casa nueva"); condena de 8 años
  **revocada en apelación**. Función del juicio: proteger la narrativa de la "salsa secreta" y los bonus, no
  ningún activo económico real.
- **El epílogo físico**: la carrera ya había migrado de fibra a **microondas** (8 ms ida y vuelta
  Chicago-Nueva Jersey frente a 12,5 ms de la fibra de Spread Networks) → confirma el límite ya anotado en
  la ficha: IEX cierra un vector de ataque de una época, no el problema en abstracto.
- **El grupo de presión dormido**: 16 inversores institucionales con 2,6 B$ (billones anglosajones) de
  activos —~20% del mercado— pagaban ~2.200 M$/año en comisiones; son quienes podrían forzar el *routing*
  hacia bolsas justas. La solución es demanda organizada, no regulación (ciclo recurrente del libro: cada
  regulación cierra una grieta y abre otra, de los especialistas del NYSE a la Reg NMS).

Conexión con [[microestructura-de-mercado-y-ejecucion]] y, en clave de incentivos ("dime el incentivo y te
diré el resultado"), con [[charlie-munger]].

## Límites

- **Lewis es narrador, no investigador ni regulador**: construye el relato casi enteramente desde el punto
  de vista de los fundadores de IEX, que **tienen interés comercial directo** en que la narrativa triunfe.
  Ninguna voz del HFT es entrevistada en profundidad.
- **Contraevidencia que el libro admite pero no refuta empíricamente**: los *spreads* sí se estrecharon con
  la decimalización y el HFT (de 1/16 de punto a ~1 céntimo), una mejora real y medible para el minorista.
  Lewis lo reconoce y lo neutraliza con un argumento lógico ("Scalpers Inc."), no con datos. **La literatura
  académica posterior a 2014 es más ambigua que la tesis del libro** sobre el efecto neto del HFT en el
  coste total del inversor minorista.
- **Ventana**: cubre 2007-2013. IEX no era aún bolsa registrada (lo consiguió en 2016). Y el propio libro
  cierra reconociendo que **no hay solución final**: la carrera de velocidad ya migraba de fibra a
  microondas. IEX resuelve un vector de ataque de una época, no el problema en abstracto.
- **Conflicto del género**: un *bestseller* de no ficción necesita héroes y villanos; la realidad de la
  microestructura es más gris (múltiples tipos de HFT con impactos muy distintos, agrupados bajo una etiqueta).

## Ver también

[[microestructura-de-mercado-y-ejecucion]] · [[eficiencia-de-mercado]] · [[precio-vs-cotizacion]] ·
[[gestion-de-posiciones]] · [[fiscalidad-del-inversor]] · cartera actual
