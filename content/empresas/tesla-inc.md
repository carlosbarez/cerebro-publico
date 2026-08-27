---
title: "Tesla, Inc. (TSLA)"
tipo: empresa
tags: [empresa, automocion, energia, robotaxi, ia, estados-unidos]
fecha: 2026-08-25
agente: analista-usa
ticker: TSLA
moneda: USD
precio_referencia: 350.25
fecha_precio: 2026-08-25
valor_estimado: 90
gatillo_entrada: 150
veredicto: EVITAR
revisar_el: 2026-10-21
---

# Tesla, Inc. (TSLA)

Fabricante de coches electricos con tres motores reales (auto, almacenamiento de energia, servicios) y una
opcion sobre el robotaxi que explica la mayor parte de su valoracion. **No consta en cartera actual**;
existe desde antes una ficha de datos en analisis-acciones sin tesis de valoracion
— esta ficha es la primera tesis completa del vault sobre Tesla (nombre `tesla-inc` para no chocar con ella).

## 1. Negocio

- **Automocion** (~72% de los ingresos): diseno/venta de BEV. Q2 2026 (SEC via stockanalysis): ingresos auto
  ~$20,5B; entregas record **480.126 (+25% YoY)** — y aun asi la accion cayo ~7% el dia siguiente (02-jul),
  peor sesion en casi un año: el mercado ya no premia volumen sin margen.
- **Energia** (~11%): almacenamiento estacionario (Megapack) + solar. Ingresos $3.139M en Q2 (+34%) — hoy es
  el segundo motor y el de mejor tendencia.
- **Servicios y otros** (~16%): postventa, Supercharger, seguro, usado. $4.581M (+24%).

Como gana dinero: margen por coche + creditos regulatorios que vende a otros OEMs (colapsaron: **$146M en
Q2 2026 vs $439M hace un año, -67%**) + suscripciones FSD + energia.

## 2. Industria

[[industria-automotriz]] (hub pendiente de desarrollar en el vault), con dos capas adyacentes:
[[industria-baterias]] y [[industria-robotica-y-automatizacion]]. Estado verificado del sector (jul-2026):
EV global +9%, **Europa +33% (vuelven los subsidios), Norteamerica -27% (fin del credito fiscal federal)**,
China -5%. Precio medio Tesla ATP $53.891. La industria esta bifurcada: Europa repite el ciclo de subsidios
y China compite por coste con BYD; EE.UU. pierde el incentivo justo cuando Tesla mas lo necesita.
KPIs que importan: margen bruto auto (16,3% en Q2 vs 19,2% en Q1 — deterioro secuencial), entregas vs mix de
precio, creditos regulatorios como % de beneficio (trampa clasica: contarlos como margen recurrente cuando
son politica, no negocio), y MWh de energia desplegada. Metodo de valoracion natural: DCF por segmentos —
pero aqui el 70%+ del precio no se deriva de flujos actuales sino del escenario robotaxi
([[historia-de-las-burbujas-financieras]]: opciones narrativas valoradas a precio de negocio establecido).

## 3. Moat — tipo, ¿aguanta 10 años?, ¿quien lo destruiria?

- **Tipo**: marca + red propia de carga (Supercharger como standard de facto en EE.UU.) + integracion
  vertical de bateria/software + datos de conduccion. Foso automotriz clasico: DEBIL (el coche es commodity
  con guerra de precios; Europa vuelve subsidiada).
- El foso potencial es **FSD/robotaxi**, y la carrera es de "nueves" de fiabilidad. Datos propios de Tesla
  citados por Electrek (04-ago, via sonda 13-ago):
  ~380.000 millas no supervisadas en un año y **telemetria propia con tasa de siniestros ~3x PEOR que la de
  conductores humanos incluso CON supervisor**. Frente a Waymo: 220M millas rider-only, -94% siniestros
  graves (~17x MEJOR que humanos), ~500k viajes pagados/semana en 15 ciudades. Hoy, el foso autonomo de
  Tesla esta DETRAS del de Waymo segun sus propias metricas.
- Quien lo destruiria: BYD/comoditizacion en auto (ya ocurriendo), Waymo verticalizandose en las ciudades
  top (ya operando), y el pasivo HW3 (~4M coches con computador insuficiente; exposicion legal estimada por
  terceros hasta $14B — cifra de Electrek, no confirmada por Tesla).

## 4. Financieros — el porque detras de las cifras; calidad del beneficio

Q2 2026 (datos SEC-filed via stockanalysis):

- Ingresos record **$28.236M (+25,5%)**... y sin embargo: margen bruto total 16,83%, **beneficio operativo
  $398M = margen operativo ~1,4%**. El crecimiento viene de vender MAS coches MAS baratos (ATP +1,5% m/m
  solo por mix) mientras los creditos regulatorios desaparecen.
- Beneficio neto $1.116M; EPS diluido $0,32. **FCF negativo: -$1.092M** en el trimestre (capex robotaxi/
  IA + ciclo de producto). 
- Calidad del beneficio ([[contabilidad-y-calidad-de-beneficios]]): TTM beneficio neto $3,81B (-35%) para
  $103,6B de ingresos (margen neto ~3,7%). Sin creditos ($146M) y con energia, el nucleo auto ronda el
  equilibrio. PER TTM resultante: **~365x** (fwd ~183x).
- FY2025 de referencia (LSEG via Reuters): ingresos $94,8B (**-3%, primera caida anual de su historia**) y
  beneficio neto $3,79B (-47% vs 2024).

## 5. Directiva y capital allocation

CEO Elon Musk (ademas de SpaceX, xAI y otras). Gobierno corporativo como riesgo estructural documentado:
mejor pagado de 2025 (paquete valorado en ~$158B segun AFL-CIO Paywatch via Electrek, 13-ago); rumor
persistente de fusion Tesla-SpaceX con clausula del plan de retribucion que habilitaria payout de hasta
$824B si SpaceX adquiriera Tesla (TipRanks, 12-ago — tratarlo como rumor con clausula verificada, no como
plan). Capital allocation actual: capex maximo en IA/robotaxi/energia, FCF negativo, SIN recompras ni
dividendo relevantes. Riesgo key-man maximo de cualquier mega-cap del wiki ([[gobierno-corporativo-consejos]]).

## 6. Valoracion por escenarios

Metodo: poder de beneficio normalizado por escenario x multiple, sobre 3,95B acciones. Cifras = estimacion
propia (analista-usa), no dato de fuente:

| Escenario | Prob | Supuesto clave | NI normalizado | Multiple | Valor/accion |
|---|---|---|---|---|---|
| Pesimista | 45% | auto commodity margen 4-5%; creditos muertos; pasivo HW3/legal | ~$5,5-6B | ~18x + caja | $40-70 (central $55) |
| Base | 40% | margen auto recupera ~8%; energia escala; FSD por suscripcion | ~$11B (2028) | ~26x | ~$75 (rango 65-90) |
| Optimista | 15% | robotaxi con economia unitaria real post-2030 + Optimus | ~$25B (2030) | ~35x | ~$220 (rango 180-260) |

Valor intrinseco (rango): **$40–$260 · central ~$90** (ponderado). Precio 25-ago-2026: **$350,25**
(capitalizacion ~$1,38T). **Margen de seguridad: ~-74%.** A $350 el mercado paga, el solo, algo mas que mi
escenario OPTIMISTA ponderado completo. Para que el central justifique el precio harian falta probabilidades
de robotaxi-exitoso >80% con multiples de 2030 superiores a los de hoy.

## 7. Riesgos y red flags

- Compresion de margen estructural: OI Q2 ~1,4%; creditos regulatorios -67% YoY; fin del credito fiscal
  federal EV en EE.UU. presiona demanda 2026-27.
- FCF negativo con capex en robotaxi/IA/Optimus: la opcion se paga con balance, no con caja.
- Pasivo HW3 (~4M coches) y exposicion legal FSD (estimaciones de terceros hasta $14B).
- Recall en China reportado (TradingKey, 24-ago) compensando la expansion robotaxi a Nevada — verificar
  magnitud.
- Key-man Musk: atencion dividida (xAI/SpaceX), retribucion record, rumor SpaceX.
- La valoracion misma: a 365x beneficios TTM, cualquier decepcion robotaxi re-ratinga el multiple entero
  ([[expansion-y-compresion-de-multiples]]).

## 8. Contraste con postura previa

La ficha de datos previa ya senalaba PER 314 y rango de 52 semanas -32% desde
maximo, sin veredicto. La sonda del 13-ago concluyo "la prima se comprime, la tesis robotaxi no avanza".
Mi tesis coincide y cuantifica: incluso concediendo 15% al optimista y base generosa, sale ~$90/accion.
El desacuerdo real no es sobre los datos sino sobre la probabilidad que cada uno da al escenario AGI/
robotaxi-total; yo la fijo en ~15% y aun asi el optimista ($220) queda por debajo del precio actual.

## 9. Veredicto: EVITAR a precio de referencia (propuesta, decide Carlos)

Negocio real (energia crece +34%, entregas record) bajo una valoracion que descuenta el exito total del
robotaxi ANTES de demostrar seguridad comparable a Waymo ni economia unitaria. Condiciones para revisar:
(a) gatillo <= $150 — aviso para RE-EVALUAR la tesis con datos frescos (no compra automatica: a ese precio
el mercado dejaria de exigir el optimista completo); o (b) evidencia dura de paridad de seguridad con
Waymo (metricas publicadas, no declaraciones) + margen operativo >=5% sostenido — eso moveria el central
al alza por cambio de escenario, no por precio.

## 10. Que INVALIDARIA esta tesis (senales falsables concretas)

- Margen operativo >=4% durante DOS trimestres consecutivos sin ayuda de creditos regulatorios (>1% de los
  ingresos) — invalidaria el escenario pesimista dominante.
- Servicio rider-only sin supervisor en >=3 nuevos estados con metricas de siniestros publicadas comparables
  a Waymo (<0,1x de la tasa humana en graves) — invalidaria mi lectura de la carrera de los nueves.
- Ingresos energia 2026 >= $14B con margen bruto >=25% — el segundo motor compensaria parte del auto.
- Cierre de fusion/acuerdo estructural con SpaceX/xAI con terminos publicados — reevaluar todo desde cero.

## 11. Predicciones falsables (para "Para el CIO")

- P1: informe Q3 2026 (~21-oct): margen operativo >=3%. Probabilidad 50%. Si <1,5%: senal pesimista fuerte.
- P2: servicio robotaxi sin monitor operativo en Nevada antes del 31-dic-2026. Prob 45%.
- P3: ingresos segmento energia 2026 >= $14B (run-rate Q2 ~$12,6B anualizado, +34% YoY). Prob 60%.
- P4: TSLA toca <= $250 en algun momento antes del 30-jun-2027. Prob 40%.

## Fuentes

- StockAnalysis, TSLA financials/statistics (datos SEC-filed Q2 2026, precios 25-ago-2026):
  https://stockanalysis.com/stocks/tsla/financials/ · https://stockanalysis.com/stocks/tsla/ — consulta 2026-08-25
- TradingKey News, "Tesla Price Forecast: Nevada Robotaxi Victory Offset by China Recall; Cybercab Launch Looms" (24-ago-2026):
  https://www.tradingkey.com/news/crypto-us-stock-forecast-tesla-price-nevada-robotaxi-victory-offset-by-china-recall-cybercab-launch-looms/ — consulta 2026-08-25 (titular; detalle pendiente de verificar)
- Sonda 13-ago-2026 con fuentes primarias agregadas:
  Reuters/LSEG (FY2025), Electrek (10-ago Cybercab-Starlink; 04-ago telemetria robotaxi y Waymo; 03-ago FSD v14 Lite HW3; 13-ago huelga IF Metall), TipRanks (12-ago clausula SpaceX), KBB (ATP), Benchmark (EV julio) — consulta 2026-08-25
- analisis acciones/tesla (ficha de datos previa del vault, PER/rango 52s)
