---
title: "Informe de estrategia — 2026-08-27 (Inés Torres, noveno run)"
tipo: sintesis
tags: [estrategia, macro, sectorial, 2026-08]
fecha: 2026-08-27
agente: ines-torres
---

# Informe de estrategia — 2026-08-27 (Inés Torres, noveno run)

> Cadencia normal (3 días desde el 2026-08-24, sin backlog). Cubre los pulsos de texto y vídeo del 25 y 26-ago
> (Elena, Marco) y la crónica de calendario de la quincena, sin refuentar. Capa mecánica: `destila --tipo
> tabla-macro` (OK, validado); `destila --tipo novedad` y `enlaza` fallaron por *timeout* — ver Verificación.

## Frescura de insumos

- Newsletters (Elena): OK, último run hace 2,2h (< 30h).
- YouTube (Marco): OK, último run hace 1,3h (< 30h).

## Cuadro macro mundial

`destila --tipo tabla-macro` sobre el volcado FRED/BCE/FX de hoy, validado con `verifica_cifras.py`: 21 cifras
`OK` (presentes en el origen) y 9 marcadas `INVENTADA` — las 9 son la **columna "variación"**, el único
cálculo que el encargo tiene permitido (resta entre dos observaciones presentes en el JSON, no una cita; el
comprobador solo compara literales). Comprobé las 9 a mano contra sus dos valores de origen: las 9 son restas
correctas. Lectura de residuos: 0 fallos reales (mismo patrón medido el 20-ago y el 24-ago).

| Indicador | Valor | Fecha | Variación (vs. run anterior) | Fuente |
|---|---|---|---|---|
| UST 10 años (DGS10) | 4,64% | 25-ago | −0,05pp (vs. 4,69% el 20-ago) | FRED (primaria) |
| UST 2 años (DGS2) | 4,17% | 25-ago | −0,02pp | FRED (primaria) |
| Spread 2s10s | **+0,47pp** (no invertido) | 25-ago | −0,03pp | cálculo propio |
| UST 30 años (DGS30) | **5,17%** | 25-ago | −0,06pp (vs. 5,23% el 20-ago); **−0,14pp desde el pico de 5,31% del 17-ago** | FRED (primaria) |
| Fed funds (FEDFUNDS) | 3,63% | jul-2026 | 0,00pp | FRED (primaria) |
| IPC general YoY | **~3,3%** (jul-2026, cálculo propio CPIAUCSL jul/jul-2025) — desde ~3,46% en junio | jul-2026 | −0,16pp | FRED + cálculo propio |
| PCE general / subyacente YoY | **3,7% / 3,3%** (jul; MoM general +0,2% vs. +0,1% esp.) | jul-2026 | +0,1pp vs. esp. | pulsos 26-ago (dato BEA) — [DUDA: la crónica de calendario situaba la publicación el vie 28; dos pulsos independientes + la reacción de mercado (odds Fed 36%→44%) lo dan por publicado el 26. Decidí usarlo como conocido y marcarlo] |
| Paro (UNRATE) | 4,1% | jul-2026 | −0,1pp | FRED (primaria) |
| Nóminas no agrícolas (PAYEMS) | −23.000 | jul-2026 | sin dato nuevo (agosto sale el 4-sep) | FRED (primaria) |
| Inflación implícita 10a (T10YIE) | 2,32% | 26-ago | −0,02pp | FRED (primaria) |
| Brent — futuro ICE (settle) | **$88,58 → $87,84** | 25 → 26-ago | **≈−$4 desde $92,17 el 24-ago; 4 sesiones seguidas a la baja** | ICE vía Dow Jones Data Talk / Reuters (verificación 2/3) |
| Brent Dated físico (DCOILBRENTEU) | **$88,24** | 25-ago | −$8,68 vs. $96,92 el 21-ago | FRED (primaria) — el nivel del 21-ago llevaba prima Dated-vs-futuro por *backwardation*, no es error |
| Spread High Yield (BAMLH0A0HYM2) | 2,70% | 25-ago | −0,05pp | FRED (primaria) — sigue muy estrecho, sin señal de estrés de crédito |
| EUR/USD | 1,1669 | 26-ago | −0,003 (euro retrocede desde máximos de 3 meses) | BCE (primaria) |
| Tipo depo BCE | 2,25% (sin cambios) | vigente | — | BCE (primaria) — mercado descuenta >90% de subida a 2,50% el 10-sep |

## Fase de ciclo / régimen

Expansión tardía. La semana traía **tres binarios**; dos se resolvieron y uno sigue abierto:

- **Nvidia (26-ago) — RESUELTO al alza** (cifras verificadas contra el 10-Q vía SEC EDGAR, verificación 1/3):
  ingresos **$96.221M (+106% YoY)**, margen bruto **75,0%**, centro de datos **$89.000M (+117%)**, **guía Q3
  ~$108.000M** (por encima del listón de ~$103-105.000M), guía de margen **73,5-74,5%**, BPA no-GAAP $2,22
  (GAAP $2,46). Jensen Huang proyectó **verbalmente en la call un ~+70% de crecimiento de ventas en FY2028**
  (no cifra auditada) y situó el capex combinado de los cinco hiperescaladores en **$1,3 billones para 2027**
  (desde ~$800.000M en 2026). Reacción: la acción **cayó ~2%** pese al beat. El test de monetización por el
  lado de la **demanda** se supera (DC +117%, Vera Rubin en producción); el del **mecanismo de financiación**
  empeora — ver Mapa de riesgos 1.
- **PCE de julio — RESUELTO sin shock**: 3,7% general / 3,3% subyacente, MoM +0,2% — pegajoso, por encima del
  2% de la Fed, sin sorpresa que fuerce la mano. Probabilidad implícita de subida en septiembre **36%→44%**
  tras el dato (Cárpatos). PIB Q2 revisado a **+1,5%** (desaceleración vs. Q1).
- **Jackson Hole / keynote de Warsh (vie 28) — PENDIENTE**: con el 30 años en 5,17% y el PCE en 3,7%, Warsh
  elige entre anclar inflación (hawkish) o anclar la prima fiscal (validar las recompras del Tesoro). Es el
  único binario abierto y el de mayor riesgo de bonos/dólar de la quincena.

El **impasse Fed-Tesoro** sigue intacto: la Fed pondera subir; el Tesoro quiere tipos abajo y dobla recompras
de deuda larga (próxima operación el **9-sep**, 2.000→4.000M por operación). La curva larga da su **segundo
dato consecutivo de alivio** (30a de 5,31% el 17-ago a 5,17% el 25-ago) — pero el déficit y la emisión de
deuda ligada a IA siguen intactos. El euro retrocede de los máximos de 3 meses (EUR/USD 1,1669).

## Mapa de riesgos sistémicos

1. **Financiación estructurada del capex de IA — sube a confianza ALTA, sobre fuente primaria** (verificación
   1/3, endosada por el verificador adversarial): la escalada ya NO se apoya en comunicadores citando un tuit
   viral, sino en tres puntos primarios. (a) El **lenguaje del propio 10-Q de Nvidia**: *credit support*,
   *financial guarantees*, *long-term capacity purchase obligations* y *extended payment terms* que la empresa
   reconoce que *"seguirán afectando al calendario de nuestro flujo de caja operativo"*. (b) Los **compromisos
   de suministro/compra futuros pasaron de $119.000M a $279.000M en un trimestre** (10-Q, Nota 10 —
   principalmente memoria y plantas; parte es cancelable/reprogramable; obligaciones totales de compra
   $366.000M), y las **cuentas por cobrar saltaron a $63.059M** desde $38.466M en enero (plazo medio de cobro
   derivado ~60 días, con la empresa concediendo *"90 días hasta un año"* a clientes *investment-grade*). (c)
   La **garantía de valor residual con tope $105.000M** para los *leases* de centros de datos de OpenAI
   (*exhibit 10.1* del propio 10-Q, filing SEC del 17-ago) — **es un techo de garantía, no gasto**: Nvidia
   solo paga si OpenAI incumple el *lease*, y los *leases* arrancan 2028-2030. El agregado de deuda **fuera de
   balance de hiperescaladores ~$3-3,1 billones** lo dimensionan **dos análisis independientes** (Morgan
   Stanley 24-ago y una tabla propia del WSJ), más $770.000M en balance. **Lo que ALTA NO significa**: ni que
   la demanda sea ficticia (el 10-Q muestra demanda física genuina) ni una llamada de *timing*. El matiz que
   el cerebro ya tiene —"demanda real y financiación frágil coexisten"— se mantiene palabra por palabra; la
   pregunta "¿cuál es la elasticidad real de la demanda si Nvidia retira su financiación?" sigue **abierta**.
   Pega al **28,3%** de tech de la cartera (Micron/Meta/MSFT/QCOM/AMZN/GOOGL/SAP). Recomiendo a la CIO / al
   sintetizador **promover una nota de evolución 2026-08-27 a** [[financiacion-estructurada-del-capex-de-ia]]
   citando los tres puntos primarios, no los pulsos (fuera de mi dominio de escritura).
   Matiz de dirección para semis: el capex de $1,3 billones de Nvidia **supera el gatillo prerregistrado de
   $1,2 billones** que ese concepto tiene para un *re-rating* de semis — **al alza**, no a la baja.
2. **Crisis de la curva larga + crowding-out del crédito de IA — segundo dato de alivio, mecanismo de fondo
   intacto**: 30a de 5,31% a 5,17% en ~una semana, spread HY en 2,70% (sin estrés). Sigue **sin ser gatillo**
   para el cuadrante vacío de renta fija; vía recomendada, flujo mensual de aportaciones. → [[renta-fija-y-tipos]]
3. **China — divergencia en K + burbuja de valoración del lado fuerte, sin corregir**: el Star50 sigue a ~150x
   beneficios y Unitree a ~214x ventas (sin corrección este run). Alibaba +1,5% tras la compra de ~$76-77M en
   acciones por Jack Ma y un plan de IA de ~$10.000M — señal de compromiso del accionista, no de rentabilidad.
   Meituan (cartera) reporta el 28-ago. La cartera sigue más expuesta al lado débil (JD/Baidu/Meituan, 9,0%).
   → [[plataformas-de-internet-de-china]]
4. **Energía — la prima de guerra se deshace sobre diplomacia de Ormuz, sin reapertura física** (verificación
   2/3): Brent (futuro ICE) de $92,17 (24-ago) a $87,84 (26-ago), cuatro sesiones a la baja. El *driver* es
   real y verificado: Irán y Omán anunciaron el 25-ago un **marco por fases para un corredor marítimo
   temporal** (coordenadas acordadas, proyecto de desminado) — pero el acuerdo **no está finalizado ni
   operativo**, el estrecho sigue **físicamente cerrado** (día ~178, ~3 buques el 23-ago frente a ~85/día
   normales, ~390 esperando) e Irán condiciona la reapertura permanente a que EE.UU. levante bloqueo y
   sanciones. El "30-60 días" que citaron los pulsos es el plazo para **negociar la ruta permanente**, no para
   que Ormuz reabra. Riesgo **simétrico**: un traspié diplomático o un ataque a un tanquero devuelve $5+ en una
   sesión; si la desescalada avanza, desinflación real. → [[mineria-industrial-y-energia]]
5. **Jackson Hole / Warsh (vie 28) — binario no resuelto**: un tono hawkish revierte el alivio de la curva y
   mata el rebote post-Nvidia; un tono que valide las recompras del Tesoro confirma la dominancia fiscal.

## Mapa sectorial

Sin cambios de postura este run. Detalle solo donde hubo desarrollo.

| Sector | Postura | Por qué (mecanismo macro) | Página de industria |
|---|---|---|---|
| Semis/equipamiento (litografía, ASML) | Sobreponderar | Sin desarrollo este run | [[semiconductores-logica-y-computo-ia]] |
| Semis/memoria (DRAM/NAND/HBM) | **Infraponderar** (sin cambio) | Nvidia confirma presión de coste de HBM (guía de margen 73,5-74,5% desde 75%; sus compromisos de suministro "principalmente memoria" +$160.000M en un trimestre) — encarece el hardware de IA; no cambia el pico de ciclo de los fabricantes de memoria, pero el capex de $1,3 billones da un sesgo de corto plazo alcista a la demanda | [[semiconductores-de-memoria]] |
| Tecnología/IA agregada | Neutral (sin cambio) | Nvidia batió y guió al alza (demanda), pero el mecanismo de financiación aparece en el balance (compromisos $119→$279.000M, AR $63.000M, garantía $105.000M a OpenAI): **selección, no beta**. Próximo test: margen del Q3 | [[plataformas-tecnologicas-y-publicidad-digital]] |
| China (plataformas de internet + consumo) | Neutral, con divergencia en K sin resolver | Burbuja de valoración del lado "fuerte" sin corregir (Star50 ~150x); Alibaba capta capital y respaldo de Jack Ma; la cartera sigue en el lado débil | [[plataformas-de-internet-de-china]] |
| Salud/farma/biotech | Neutral | Sin desarrollo este run | [[salud-y-farma]] |
| Industriales/defensa | Sobreponderar (hueco de cartera, sin avance) | Sin desarrollo este run | [[aeroespacial-y-defensa]] |
| Finanzas/bancos | Neutral, selectivo | Sin desarrollo este run | — |
| Energía/petróleo/gas | Sobreponderar (reforzada, con matiz) | El físico sigue apretado y Ormuz sigue cerrado, pero la prima de guerra se deshace sobre una apuesta de desescalada (marco Irán-Omán 25-ago) aún no operativa — Brent ICE $87,8 vs. $92,2 hace dos sesiones | [[mineria-industrial-y-energia]] |
| Nuclear/uranio | Sobreponderar | Sin desarrollo este run | [[mineria-industrial-y-energia]] |
| Minería/materiales (oro, plata, cobre) | Sobreponderar | Oro −1,6% desde su máximo del 25-ago tras +15,2% en 4 semanas (Jorne 27-ago) — corrección, no giro; represión financiera intacta | [[mineras-de-metales-preciosos]] |
| Renta fija/liquidez | Cuadrante vacío (0%) — **segundo dato de alivio, caso de entrada intacto** | 30a a 5,17%, HY 2,70%; el mecanismo de fondo (déficit, emisión IA) no cambia — sigue sin gatillo, vía: flujo mensual | — |

## Megatendencias (10-30 años)

Sin eje nuevo. Refuerzos:
1. **IA/robótica — el foso se desplaza de la provisión de GPU a la orquestación de inferencia**: OpenAI lanza
   Jalapeño (acelerador de inferencia custom, despliegue a fin de año), Anthropic ficha a Amir Salek (ex-líder
   del TPU de Google) para sus propios aceleradores, Apple anuncia M6/M5 Ultra para cómputo local. La carrera
   de infraestructura pesa ya más que la de modelos; la fragmentación de proveedores frente a Nvidia está más
   cerca, aunque Nvidia sigue controlando los tokens de inferencia hoy. → [[plataformas-tecnologicas-y-publicidad-digital]]
2. **Desglobalización / fragmentación**: aranceles Canadá-EE.UU. (15/25/50% sobre ~$27.600M, efectivos el
   8-sep) con negociaciones colapsadas y el dólar canadiense en caída; suma a Ormuz como frente simultáneo.

## Rotaciones (¿coinciden macro y gráficos de Jorne?)

Jorne (27-ago): **consolidación post-máximo generalizada a la espera de Jackson Hole** — SPY $766 en rango
762-777 (soporte 730 validado), MU $938 consolidando tras el máximo de $1.011 del 17-ago (soporte 870
intacto), oro en corrección sana (−1,6%) tras el rally. Convergencia macro-técnica: ambos lados ven el
**viernes 28** como el pivote. No hay rotación confirmada aún — el rebote de memoria sigue sin su segunda
señal (la salida del trade masificado del FMS de BofA frente a la consolidación técnica). Punto a vigilar en
el próximo cruce: si Warsh es dovish y SPY rompe 800, el momentum vuelve a semis (MU/QCOM/Meta); si es
hawkish, el oro absorbe el capital que saldría de semis.

## Escenarios: base / optimista / pesimista

**Recalibrado: 40/15/45 → 43/15/42** (base +3, pesimista −3).

Motivo: **dos de los tres gatillos que motivaron la subida del pesimista el 20-ago se han resuelto a favor** —
(1) el 30 años NO retomó la escalada hacia 5,35%+ (está en 5,17%, segundo dato de alivio) y (2) Nvidia NO
decepcionó (batió y guió al alza, con las cifras verificadas contra el 10-Q). La caída del Brent —esta vez un
movimiento real de mercado, no un error de instrumento— quita además un impulso inflacionario. **Contrapesos
que impiden un movimiento mayor**: el mecanismo de financiación estructurada sube a confianza ALTA sobre fuente
primaria (compromisos de suministro más que duplicados en un trimestre, AR disparado), y **Jackson Hole/Warsh
sigue pendiente a dos días**. No es *market timing*: es la resolución de dos catalizadores binarios nombrados.

- **Base (43%)**: Warsh no sorprende hawkish el viernes, el PCE ya no reabre la subida de septiembre de forma
  mecánica, el alivio de la curva larga se mantiene por debajo de 5,25%, y la desescalada de Ormuz (o su
  expectativa) mantiene el Brent en el rango $80-92 sin nuevo shock.
- **Optimista (15%, sin cambio)**: desinflación se consolida (IPC ya en ~3,3%, Brent a la baja), Warsh suena
  dovish sobre el sendero de tipos, la rotación de salida de semis se estabiliza sin liquidación y el capex de
  IA muestra la primera evidencia de retorno medible.
- **Pesimista (42%)**: Warsh sorprende hawkish y el 30 años retoma 5,27%+ pese a las recompras; y/o la
  financiación estructurada del capex de IA se rompe por algún eslabón (un cliente financiado de Nvidia que no
  puede refinanciar, el margen del Q3 que se desploma por el coste de HBM); y/o la burbuja de valoración china
  (Star50, Unitree) corrige de forma desordenada.

## Para el CIO / para Carlos — dónde concentrar capital

1. **Nvidia resolvió el test de monetización por el lado de la demanda** (batió, guió por encima del listón
   alto, DC +117%), pero **el mecanismo de financiación es ahora visible en el balance y en el 10-Q**:
   compromisos de suministro que más que se duplican en un trimestre, cuentas por cobrar disparadas y una
   garantía de valor residual de $105.000M a OpenAI. La lectura de la tech de IA no cambia — **selección, no
   beta**. El próximo test concreto es el **margen bruto del Q3** (coste de memoria HBM), no otro titular de
   consorcio.
2. **El caso para llenar el cuadrante de renta fija (0%) tiene su segundo dato de alivio** (30a 5,17%), pero
   el mecanismo de fondo (déficit, emisión de deuda de IA) no ha cambiado y el spread HY sigue en mínimos —
   sin señal de estrés que justifique adelantar la entrada. Vehículo: flujo mensual de aportaciones, sin vender.
3. **La predicción viva** [[2026-07-23-brent-sostiene-90-agosto]] **(Brent >$90 a 31-ago) va camino de fallar**
   — y esta vez NO es un error de instrumento (WTI citado como Brent), es una caída real de ambos crudos sobre
   la diplomacia Irán-Omán. El verificador sitúa hoy el valor justo de esa predicción en ~0,20-0,25 (se emitió
   a 0,68). No la cierro (faltan 2 sesiones y el subyacente es geopolítico); lo señalo para el veredicto
   semanal. La postura de Energía (Sobreponderar) no cambia — el físico sigue apretado y Ormuz cerrado —, pero
   la prima de guerra está en revisión.
4. **Jackson Hole/Warsh el viernes 28 es el único binario abierto** — si sorprende hawkish, los escenarios
   vuelven a 40/15/45 o peor.

📌 **predicción** (ines-torres): la probabilidad implícita de subida de la Fed en la reunión del 15-16 de
septiembre, medida por **CME FedWatch**, cierra **por debajo del 50%** el día previo al FOMC (15-sep-2026) —
prob. **0,60**. Resuelve con la captura pública de CME FedWatch.

📌 **predicción** (ines-torres): el **margen bruto GAAP de Nvidia en el Q3 FY2027** (reporta ~nov-2026) queda
**en o por debajo del 74%** —dentro o por debajo de su propia guía de 73,5-74,5%, señal de que el coste de HBM
muerde el margen— prob. **0,55**. Resuelve con el comunicado de resultados / 10-Q de Nvidia.

📌 **predicción** (ines-torres): el estrecho de **Ormuz no registra una reapertura física verificada** (tránsito
normalizado confirmado por una fuente marítima independiente: Lloyd's List, TankerTrackers o EIA) antes del
**30-sep-2026** — prob. **0,70**. Resuelve con reporte de tráfico marítimo independiente.

## Para Carlos Bárez — sectores a priorizar/evitar en su CAZA del viernes

- **Priorizar**: la cadena de **inferencia / chips custom** — el foso se está desplazando de la provisión de
  GPU (escala de Nvidia) a la orquestación de inferencia (stack propio de OpenAI/Anthropic/Perplexity); buscar
  exposición vía proveedores de la cadena (empaquetado avanzado, redes ópticas, memoria) más que vía los
  nombres de relato, y con disciplina de valoración.
- **Priorizar (sin cambio)**: defensa/industriales — hueco de cartera sin avance.
- **Priorizar con matiz (sin cambio)**: robótica/automatización china vía proveedores menos visibles/más
  baratos, no los nombres del +460% de debut (Unitree, 214x ventas, es la referencia de lo que NO pagar).
- **Evitar/vigilar**: comprar semis/memoria en el rebote (la rotación de salida del trade masificado sigue en
  marcha); pagar múltiplo de burbuja en el "lado fuerte" de China (Star50 ~150x).
- **Vigilar sin actuar**: el **margen bruto del Q3 de Nvidia** como test de si el cuello de botella del boom
  de IA se ha desplazado de chips a capital.

## Para Jorne — rotaciones a confirmar en gráficos

- Post-Jackson Hole: confirmar si el rebote de memoria consolida (MU sostiene 870) o se rompe — sería la
  primera convergencia técnica-posicionamiento (FMS de salida + técnica) en la misma dirección.
- El 30 años contra **5,10-5,15%** (si el alivio se profundiza) y **5,27-5,31%** (si Warsh es hawkish) en la
  semana del keynote.
- Oro: la corrección del −1,6% desde el máximo del 25-ago tras un +15,2% en 4 semanas — vigilar si es
  *profit-taking* sano o giro de convicción (Jorne marca invalidación de su consolidación en cierre < $385 GLD).
- SPY: ruptura de 800 (dovish) o defensa de 730 (hawkish) como señal de rotación semis ↔ defensiva.

## Verificación

3/3 verificaciones adversariales usadas (tope del presupuesto):

1. **Financiación estructurada del capex de IA — escalada a ALTA CONFIRMADA sobre fuente primaria.** Las
   cifras del trimestre de Nvidia, los compromisos de suministro $119→$279.000M, las cuentas por cobrar
   $63.000M y la garantía de $105.000M a OpenAI están **literalmente en el 10-Q / filings SEC** (no en un
   comunicador). El "50% de todo el gasto mundial de IA acaba en Nvidia" queda **DÉBIL/opinión** (rango real
   ~30-45% del capex de hiperescaladores según la métrica; Bloomberg y Finimize no son fuentes independientes
   entre sí). El "+70% de crecimiento el año que viene" es **previsión verbal de Huang**, no dato auditado. El
   agregado de deuda fuera de balance ~$3-3,1 billones **sí** tiene doble corroboración independiente (Morgan
   Stanley 24-ago + WSJ). Corrección de encuadre a los pulsos: el de texto dijo "guía a $108.000M para Q4" —
   es **Q3**; la garantía de $105.000M es un **techo, no gasto**, con *leases* que arrancan 2028-2030.
2. **Brent / Ormuz — la caída es real, no un error de instrumento.** Futuro ICE $92,17 (24) → $88,58 (25) →
   $87,84 (26), ambos crudos cayeron por igual (spread Brent-WTI estable ~$5-7). El marco Irán-Omán del 25-ago
   es hecho verificado, pero el estrecho sigue **físicamente cerrado** y el acuerdo **sin finalizar**; el
   "30-60 días" es para negociar la ruta permanente. El "-7,18%/$85,55" de Finimize es **intradía**, no
   cierre. La predicción viva [[2026-07-23-brent-sostiene-90-agosto]] va camino de resolver 0 (valor justo
   hoy ~0,20-0,25). Otras del registro: [[2026-08-03-brent-no-toca-100-septiembre]] va camino de acertar;
   [[2026-07-25-jpmorgan-brent-104-ormuz]] va camino de fallar.
3. *(cubierta dentro de 1 y 2 — se consultaron dos clusters de alto impacto en lugar de tres afirmaciones
   sueltas, dado que ambos tocaban >25% de la cartera o una predicción viva.)*

**Capa mecánica**: `destila --tipo tabla-macro` OK (validado, 0 fallos reales). `enlaza` y `destila --tipo
novedad` **fallaron por timeout** (`[DEGRADADO: enlaza exit 143 — timeout 120s]`, `[DEGRADADO: novedad exit
143 — timeout 120s]`; Kimi en tope de ciclo 20/20 hasta el 30-ago, Prime sin respuesta en 2 min). Los cruces
hacia páginas de industria y el contraste de novedad contra el durable anterior los hice a mano en este
informe.

## Ver también

[[mapa-sectorial-y-megatendencias]] · [[checklist-macro-y-ciclo]] · cartera actual · [[ciclos-de-mercado]] ·
[[ciclo-de-deuda-y-desapalancamiento]] · [[ray-dalio]] · [[howard-marks]] · [[michael-pettis]] ·
[[jeremy-grantham]] · [[mark-mobius]] · [[ruchir-sharma]] · [[viento-de-cola-americano]] ·
[[financiacion-estructurada-del-capex-de-ia]] · [[renta-fija-y-tipos]] · [[at-2026-08-27]]
