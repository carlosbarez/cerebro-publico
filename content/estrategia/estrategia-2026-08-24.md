---
title: "Informe de estrategia — 2026-08-24 (Inés Torres, octavo run)"
tipo: sintesis
tags: [estrategia, macro, sectorial, 2026-08]
fecha: 2026-08-24
agente: ines-torres
---

# Informe de estrategia — 2026-08-24 (Inés Torres, octavo run)

> Cadencia normal (4 días desde el 2026-08-20, no backlog). Cubre los pulsos de texto y vídeo del 20-ago y del
> fin de semana 23-24-ago (Elena, Marco), sin refuentar. Capa mecánica invocada este run: `destila --tipo
> tabla-macro` (OK) para el cuadro macro, `destila --tipo novedad` (falló, ver abajo) y `enlaza` (OK) para
> las conexiones nuevas.

## Frescura de insumos

- Newsletters (Elena): OK, último run hace 0,6h (< 30h).
- YouTube (Marco): OK, último run hace 0,1h (< 30h).

## Cuadro macro mundial (fase del ciclo, régimen, política monetaria/fiscal)

Generado por `destila --tipo tabla-macro` sobre el volcado de FRED/BCE de hoy, validado con
`verifica_cifras.py`: de 24 números en la salida, 24 `OK` (presentes en el origen) y 8 marcados
`INVENTADA` — los 8 son la **columna "variación"**, el único cálculo permitido por el encargo (diferencia
entre dos valores presentes en el JSON, no una cita literal, así que el comprobador —que solo compara
literales— no puede reconocerla). Comprobé a mano cada una de las 8 contra los dos valores de origen:
las 8 son restas correctas. Lectura de residuos: 0 fallos reales.

| Indicador | Valor | Fecha | Variación (vs. obs. anterior) | Fuente |
|---|---|---|---|---|
| UST 10 años (DGS10) | 4,69% | 20-ago | +0,04pp | FRED (primaria) |
| UST 2 años (DGS2) | 4,19% | 20-ago | 0,00pp | FRED (primaria) |
| Spread 2s10s | **+0,50pp** (no invertido) | 20-ago | — | cálculo propio |
| UST 30 años (DGS30) | **5,23%** | 20-ago | +0,04pp (vs. 19-ago) | FRED (primaria) — **retrocedió desde 5,31% el 17-ago** |
| Fed funds (FEDFUNDS) | 3,63% | jul-2026 | 0,00pp | FRED (primaria) |
| CPI general YoY | 3,4% (subyacente 2,5%) | jul-2026 | sin cambio vs. 08-20 | BLS (vía pulso, sin dato nuevo este run) |
| Paro (UNRATE) | 4,1% | jul-2026 | -0,1pp | FRED (primaria) |
| Nóminas no agrícolas (PAYEMS) | -23.000 (158.858k) | jul-2026 | sin dato nuevo | FRED (primaria) |
| Inflación implícita 10a (T10YIE) | 2,34% | 21-ago | +0,04pp (vs. 19-ago) | FRED (primaria) — sigue subiendo (2,22% el 06-ago) |
| Brent (Dated, físico) | **$95,29** (18-ago, última obs. FRED) / **~$93** (Yahoo BZ=F, 24-ago) | 18/24-ago | +2,86 (FRED, vs. 17-ago) | FRED + Yahoo — ver verificación 1/3 |
| Spread High Yield (BAMLH0A0HYM2) | 2,75% | 20-ago | +0,02pp | FRED (primaria) — sigue estrecho |
| EUR/USD | 1,1699 | 21-ago | +0,0094 | BCE (primaria) — dólar sigue debilitándose |
| Tipo depo BCE | 2,25% (sin cambios) | 24-ago | — | BCE (primaria) |

## Verificación 1/3 — Brent: el pulso del 24-ago citó WTI, no Brent

**REFUTADO** el nivel de "$85,59 (-1,7% en futures)" que el pulso de vídeo del 24-ago atribuye a Brent. El
verificador confirmó por fuentes independientes (Yahoo Finance CL=F y BZ=F) que $85,57 con -1,71% diario es
el precio de **WTI**, no de Brent — mismo tipo de confusión de instrumento ya visto antes con esta métrica.
El Brent real hoy (BZ=F, sesión de baja liquidez) ronda **$93**, y el Dated Brent físico de FRED (con su
retraso habitual de publicación) marca **$95,29** el 18-ago, en subida desde $92,02 el 14-ago. Dos fuentes
independientes convergen en la banda $91-95, no en $85. **Consecuencia para la predicción viva**
[[2026-07-23-brent-sostiene-90-agosto]] (Brent >$90 a 31-ago, prob. 0,68): con el nivel real confirmado, la
predicción queda **reforzada, no en riesgo** — la lectura de "está a punto de fallar" habría sido un error de
instrumento, no de mercado. Fichero afectado: `wiki/actualidad/pulso-2026-08-24.md` línea 74 (a corregir por
Elena en su próximo run, dominio suyo, no el mío).

## Verificación 2/3 — Nvidia $500.000M: seis instituciones, objetivo no vinculante, mecanismo distinto de OpenAI

**CONFIRMADO** el acuerdo en sí (comunicado propio de Nvidia, 10-ago, corroborado por Bloomberg/Reuters/
Axios/CNBC), pero el pulso del 24-ago lo describe mal en dos puntos: (1) son **seis** socios —Apollo,
BlackRock, Blackstone, Brookfield, [[goldman-sachs|Goldman Sachs]], KKR—, no tres; (2) es un **objetivo de movilización vía
MOUs no vinculantes**, sin capital comprometido ni proyecto nombrado — no un "acuerdo" cerrado. Nvidia
respalda hasta el 25%/125.000M del colateral residual. **Distinto mecanismo del MOU Nvidia-OpenAI de
250.000M** (que sigue sin firmar): ahí Nvidia es contraparte directa de su propio cliente —circularidad de
manual—; aquí los seis socios son gestores de activos/bancos, intermediarios de capital, no compradores de
GPUs. El encuadre "financiación circular" es **opinión** (Michael Burry, comparándolo con titulización) frente
a la contra-lectura de BofA/Vivek Arya (con conflicto de interés como colocador) de que el riesgo se traslada
al consorcio. Mantengo la tesis de financiación circular del capex de IA en MEDIA→ALTA sin escalarla por este
dato — el mecanismo real es más matizado que "Nvidia financia su propia demanda" sin más.

## Verificación 3/3 — FMS de BofA: 53% largo en semis es la caída desde el récord de julio, no una escalada

**PLAUSIBLE, con distorsión de encuadre.** Confirmado por múltiples medios independientes (Yahoo Finance,
Investing.com, Benzinga) que beben del mismo informe primario de BofA: caja en la **6ª lectura más baja desde
que la encuesta arrancó en 1998** (no "el mínimo desde 1998" como decía el pulso) y **53% largo en
semiconductores**. El punto que el pulso invierte: 53% es la **caída** desde el 82% récord de julio, no una
intensificación de la concentración — es evidencia de que la rotación de salida del trade masificado ya está
ocurriendo, coherente con "pico de ciclo ya confirmado" (postura Infraponderar de Semis/memoria desde el
30-jul), no una alarma nueva que deba subir la convicción por sí sola.

## Fase de ciclo / régimen

Expansión tardía con la crisis de crédito/curva ya con su **primera respuesta de política**: el Tesoro dobló
las recompras de deuda larga de 2.000 a 4.000 millones de dólares mensuales (Bessent, 20-ago), y el 30 años
retrocedió de 5,31% (17-ago, máximo desde 2007) a 5,23% (20-ago) — 8pb de alivio táctico. Esto **no resuelve**
el mecanismo de fondo: el déficit de julio (432.000M) y la emisión de deuda ligada a IA (489.000M YTD frente a
322.000M en todo 2025) siguen intactos, y la reacción del dólar (peor día en meses el 20-ago, y sigue
debilitándose: EUR/USD 1,1699 el 21-ago frente a 1,1605 el 19-ago) sugiere que el mercado no lee la
intervención como suficiente — es intervención de deuda pública para comprar tiempo, no una expansión
monetaria (distinción que el propio pulso de vídeo marca correctamente: no es *quantitative easing*). La
inflación implícita 10 años sigue subiendo (2,34% el 21-ago, desde 2,22% el 06-ago), coherente con la nueva
escalada arancelaria: Canadá aplicará **$20.000M** en aranceles de represalia el 9-sep (PM Carney), con
negociaciones estancadas hasta después de las *midterms* de EE.UU.

## Mapa de riesgos sistémicos

1. **Crisis de la curva larga + crowding-out del crédito de IA — primera respuesta de política, no
   resolución**: el alivio táctico de 8pb tras el doblaje de recompras del Tesoro no cambia el mecanismo de
   fondo (déficit, emisión de deuda de IA). Pega al cuadrante vacío de renta fija (0% cartera) y, de forma
   indirecta, a toda posición de duración larga (tech/calidad, 28,3%+5,0%).
2. **Financiación circular del capex de IA — matizada, no escalada**: el consorcio de Nvidia ($500.000M,
   seis socios, objetivo no vinculante) es un mecanismo distinto y menos directo que el MOU Nvidia-OpenAI
   ($250.000M, sin firmar). Pega a [[microsoft|Microsoft]]/Amazon/[[alphabet|Alphabet]]/Meta (28,3% de la cartera); Nvidia earnings el
   26-ago (consenso ~$92.000M, +97% YoY, márgenes ~75%; patrón: los últimos 4 trimestres cerraron con reacción
   negativa al día siguiente) es el próximo test de si el capex genera retorno real.
3. **China: divergencia en K que ahora también fisura por el lado fuerte**: Evergrande (Hui Ka Yan, cadena
   perpetua, 20-ago) confirma el ajuste del inmobiliario; pero el lado que el mapa venía señalando como
   "fuerte" (hi-tech/robótica) muestra ya señales de burbuja de valoración propia — Unitree +460% en su
   debut (valoración 51.000M, 214x ventas), índice Star50 a 150x beneficios (~4x el Nasdaq 100), Alibaba
   capta 10.000M en ampliación secundaria (-8% el mismo día, dilución visible). Pega al 9,0% de China en
   cartera (JD/Baidu/Meituan, lado débil) y matiza la recomendación de priorizar el lado fuerte del régimen
   en K sin más: la fortaleza estructural convive con múltiplos que ya no son baratos.
4. **Posicionamiento extremo con catalizadores encadenados esta semana**: Nvidia (26-ago), PCE (28-ago) y
   Jackson Hole/Warsh (27-29-ago) en la misma ventana. Gamma positiva 7.500-7.800 (VIX 15,14, comprimido),
   Put Wall 7.500/Call Wall 7.900 — rango implícito hasta el viernes ±1,22%. Pega a todo el libro de riesgo.
5. **Desglobalización con dos frentes nuevos**: aranceles Canadá-EE.UU. ($20.000M de represalia, 9-sep) y
   petroleros saudíes desviados alrededor de África por la amenaza hutí (Bloomberg TV) — fricción logística
   nueva junto a Ormuz, sin verificación independiente de cierre total. Refuerza megatendencia 3, sin cambio
   de postura sectorial agregada.

## Mapa sectorial

| Sector | Postura | Por qué (mecanismo macro) | Página de industria |
|---|---|---|---|
| Semis/equipamiento (litografía, ASML) | Sobreponderar | Sin desarrollo este run | [[semiconductores-logica-y-computo-ia]] |
| Semis/memoria (DRAM/NAND/HBM) | **Infraponderar** (sin cambio) | El FMS de BofA (verificado) confirma que la rotación de salida del trade masificado ya está en marcha (53% largo, caída desde el 82% récord de julio) — coherente con pico de ciclo ya confirmado, no una alarma nueva | [[semiconductores-de-memoria]] |
| Tecnología/IA agregada | Neutral | Financiación circular matizada, no escalada: consorcio Nvidia de $500.000M (seis socios, sin capital comprometido) es mecanismo distinto del MOU Nvidia-OpenAI; Nvidia earnings 26-ago es el próximo test real de monetización | [[plataformas-tecnologicas-y-publicidad-digital]] |
| China (plataformas de internet + consumo) | Neutral, con divergencia en K que ahora fisura por ambos lados **(matiz nuevo este run)** | Evergrande confirma el ajuste del lado débil; el lado "fuerte" (hi-tech/robótica) ya cotiza con múltiplos de burbuja (Star50 150x, Unitree 214x ventas) — la cartera sigue más expuesta al lado débil (JD/Baidu/Meituan), pero "priorizar el lado fuerte" ya no es gratis en precio | [[plataformas-de-internet-de-china]] |
| Salud/farma/biotech | Neutral | Sin desarrollo este run | [[salud-y-farma]] |
| Industriales/defensa | Sobreponderar (hueco de cartera, sin avance) | Sin desarrollo este run | [[aeroespacial-y-defensa]] |
| Finanzas/bancos | Neutral, selectivo | Sin desarrollo este run | — |
| Energía/petróleo/gas | Sobreponderar (reforzada) | Brent verificado en $91-95, no en los $85 que citó por error el pulso (confusión WTI/Brent) — la fortaleza física del mercado es mayor de lo que sugería la cifra mal atribuida | [[mineria-industrial-y-energia]] |
| Nuclear/uranio | Sobreponderar | Sin desarrollo este run | [[mineria-industrial-y-energia]] |
| Minería/materiales (oro, plata, cobre) | Sobreponderar | Sin desarrollo específico este run | [[mineria-industrial-y-energia]], [[mineras-de-metales-preciosos]] |
| Renta fija/liquidez | Cuadrante vacío (0%) — **primera respuesta de política observada, caso de entrada intacto** | El Tesoro reconoce la presión con su primer movimiento concreto (doblar recompras); el 30 años retrocedió 8pb pero el mecanismo de fondo (déficit, emisión IA) no cambia — sigue sin ser gatillo, vía recomendada: flujo mensual de aportaciones | — |

## Megatendencias (10-30 años)

Sin eje nuevo. Refuerzos: (1) **desglobalización/fragmentación** — aranceles Canadá-EE.UU. y fricción de
shipping por los hutíes se suman a Ormuz como frentes simultáneos, no sustitutos; (2) **IA/robótica** — China
proyecta 50.000 robots humanoides en 2026 (triplicando 2025) y el propio hardware avanza (robot "Superman"
corriendo 100m en 12,66s en Pekín, aunque se estrelló después) — el reto sigue siendo software, no hardware,
lectura que ya viene de runs anteriores.

## Rotaciones (¿coinciden macro y gráficos de Jorne?)

Jorne no ha producido nota nueva desde el 20-ago (`at-2026-08-20`, su última M-J-S) — no hay técnica más
reciente que contrastar este run. Punto a vigilar para el próximo cruce: si el rebote de memoria de finales
de agosto sigue consolidando mientras el FMS de BofA confirma rotación de salida del trade masificado
(hallazgo de este run), sería la primera convergencia técnica-macro que valida el "pico de ciclo ya digerido"
en vez de solo "pico de ciclo confirmado pero sin resolver".

## Escenarios: base / optimista / pesimista

**Sin recalibrar (40/15/45, sin cambio desde el 20-ago)**. El retroceso de 8pb en el 30 años tras el doblaje
de recompras del Tesoro es alivio táctico, no motivo para revertir la subida de 5 puntos del pesimista del
run anterior — moverlo sobre un solo movimiento de tipos sería *market timing* (mismo criterio aplicado el
06-ago y el 30-jul). Ninguno de los tres mecanismos que motivaron la subida anterior (crowding-out con
nombres propios, divergencia china confirmada, incidente físico en Ormuz) se ha resuelto; solo el primero
tiene ahora una respuesta de política parcial.

- **Base (40%)**: Nvidia (26-ago) confirma guidance sin sorpresa negativa mayor, Jackson Hole (27-29-ago) no
  trae sorpresa hawkish de Warsh, el PCE (28-ago) no reabre la subida de septiembre, y el alivio táctico de la
  curva larga se mantiene sin escalar de nuevo hacia 5,31%+.
- **Optimista (15%, sin cambio)**: desinflación se consolida, Nvidia sorprende al alza rompiendo el patrón de
  4 trimestres de reacción negativa, la rotación de salida de semis (FMS) se estabiliza sin liquidación.
- **Pesimista (45%, sin cambio)**: el 30 años retoma la escalada hacia 5,35%+ pese a las recompras dobladas
  (señal de que el mercado no cree en la intervención), Nvidia decepciona y repite el patrón de caída al día
  siguiente amplificado por el gamma comprimido de esta semana, y/o la burbuja de valoración china (Star50,
  Unitree) corrige de forma desordenada arrastrando el sentimiento hacia IA globalmente.

## Para el CIO / para Carlos — dónde concentrar capital

1. **La cifra de Brent que circuló el 24-ago ($85,59) era WTI, no Brent — el nivel real (~$93-95) refuerza la
   predicción viva** [[2026-07-23-brent-sostiene-90-agosto]] que resuelve el 31-ago, en vez de ponerla en
   riesgo. No cambia la postura de Energía (ya Sobreponderar), pero corrige una lectura que, sin este chequeo,
   habría bajado la confianza del equipo en un dato que en realidad estaba bien.
2. **El caso para llenar el cuadrante de renta fija (0%) tiene ahora su primera respuesta de política**: el
   Tesoro dobló las recompras de deuda larga, y el mercado (dólar más débil, no más fuerte) no lo está leyendo
   como suficiente. Sigue sin ser gatillo mecánico — el flujo mensual de aportaciones sigue siendo el vehículo
   recomendado, sin vender nada.
3. **"Priorizar el lado fuerte de China" necesita ahora disciplina de precio, no solo dirección**: el hi-tech/
   robótica que el informe del 20-ago señalaba como el lado ganador del régimen en K ya cotiza con múltiplos
   de burbuja (Star50 150x, Unitree 214x ventas) — la tesis estructural no cambia, pero comprar a estos
   múltiplos sin [[margen-de-seguridad|margen de seguridad]] repite el error que la cartera ya cometió en 2025 con activos calientes.

📌 **predicción** (ines-torres): al menos uno de los seis socios del consorcio de Nvidia ($500.000M — Apollo,
BlackRock, Blackstone, Brookfield, Goldman Sachs, KKR) anuncia una cifra de capital **comprometido** (no solo
objetivo de MOU) en un proyecto concreto antes del **31-dic-2026** — resuelve con comunicado oficial de
cualquiera de los seis o de Nvidia; hoy el acuerdo es un objetivo no vinculante sin capital comprometido,
prob. **0,40**.

📌 **predicción** (ines-torres): el índice STAR50 (Shanghái, tech) cierra por debajo del **-15%** desde su
nivel de cierre del 24-ago-2026 en algún momento antes del **31-dic-2026** — corrección desde el 150x
beneficios verificado hoy; resuelve con el cierre público del índice (Bloomberg/Wind), prob. **0,35**.

## Para Carlos Bárez — sectores a priorizar/evitar en su CAZA del viernes

- **Priorizar con matiz nuevo**: la cadena de robótica/automatización industrial china sigue siendo el hueco
  de investigación identificado el 20-ago, pero **con disciplina de valoración explícita** — el ejemplo de
  Unitree (214x ventas) es la referencia de lo que NO se debe pagar; buscar exposición vía proveedores menos
  visibles/más baratos de la misma cadena, no vía los nombres que ya hicieron el +460% de debut.
- **Priorizar (sin cambio)**: defensa/industriales — hueco de cartera sin avance este run.
- **Evitar/vigilar**: comprar semis/memoria en el rebote — el FMS de BofA (verificado hoy) confirma que la
  salida del trade masificado ya empezó (82%→53%), consistente con Infraponderar, no con "el ciclo ya giró".
- **Vigilar sin actuar**: Nvidia earnings el 26-ago es el catalizador más concreto de la semana para la tesis
  de financiación circular de IA — su guidance, no el titular del consorcio de $500.000M, es la señal que
  importa.

## Para Jorne — rotaciones a confirmar en gráficos

- Sin nota técnica desde el 20-ago: confirmar en el próximo run si el rebote de memoria consolida junto con
  la rotación de salida de posicionamiento que documenta el FMS de BofA — sería la primera vez que técnica y
  posicionamiento institucional coinciden en la misma dirección.
- Vigilar el 30 años contra 5,31% (techo pre-buyback) y 5,10-5,15% (si el alivio táctico se profundiza) en la
  semana de Jackson Hole.
- El rango implícito de gamma (7.580-7.768 según JJ Montoya, vía pulso Elena) es la referencia técnica más
  concreta para la semana de catalizadores encadenados (Nvidia 26-ago, PCE y Jackson Hole 27-29-ago).

## Verificación

3/3 verificaciones adversariales usadas (tope del presupuesto): (1) Brent — REFUTADA la cifra del pulso
(confusión WTI/Brent), predicción viva reforzada; (2) Nvidia $500.000M — CONFIRMADO el acuerdo, corregidos dos
errores de detalle (seis socios, no vinculante) y matizado el encuadre "financiación circular" como opinión
en disputa; (3) FMS BofA semis — PLAUSIBLE con corrección de tendencia (53% es caída desde 82%, no escalada).
`destila --tipo novedad` falló (Kimi sin cuota + OmniRoute devolvió <400 caracteres útiles) — `[DEGRADADO:
novedad exit 1]`, contraste con el durable hecho a mano en este informe. `enlaza` funcionó (10 propuestas, 10
con ancla verificada); revisadas una a una contra la página destino antes de escribir los wikilinks —
descartada la propuesta de `[[semiconductores-logica-y-computo-ia]]` para el hallazgo del FMS (la tesis en
juego es la de memoria, no la de litografía/lógica) y usada `[[semiconductores-de-memoria]]` en su lugar.

## Ver también

[[mapa-sectorial-y-megatendencias]] · [[checklist-macro-y-ciclo]] · cartera actual · [[ciclos-de-mercado]] ·
[[ciclo-de-deuda-y-desapalancamiento]] · [[ray-dalio]] · [[howard-marks]] · [[michael-pettis]] ·
[[jeremy-grantham]] · [[mark-mobius]] · [[ruchir-sharma]] · [[viento-de-cola-americano]] ·
[[financiacion-estructurada-del-capex-de-ia]] · [[at-2026-08-20]]
