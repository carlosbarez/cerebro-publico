---
title: "pulso video 2026 07 30"
tipo: sintesis
cobertura: parcial
tags: [actualidad, pulso, video, macro, geopolitica, iran, fed, corea, semis, oro, meta, microsoft, apalancamiento, 2026-07, snapshot]
fecha: 2026-07-30
verificacion: imposible — crudo perdido 2026-07 (pre-hook; la fuga se tapó el 31-jul)
canales: [Misterpuertas, Cárpatos, "José Luis Cava", NegociosTV, "Bloomberg TV", "Bloomberg Podcasts"]
fuentes: ["[[misterpuertas-metodo]]", "[[carpatos-metodo]]", "[[cava-metodo]]", "[[negociostv-metodo]]", "[[bloomberg-tv-metodo]]", "[[bloomberg-podcasts-metodo]]"]
destilado_por: omniroute
---

> [!info] Es una FOTO, no conocimiento permanente
> Digest de **12 vídeos, 6 canales activos de 8**, ventana 29-30 jul: Misterpuertas 1, Cárpatos 2 (Cierre +
> Media sesión del 29-jul, Apertura descartada por solapar con el Cierre ya con la Fed decidida), Cava 1,
> NegociosTV 4 (noticiero 30-jul + temática Wall Street + entrevistas Beltrán/oro y Paco Arnao/Irán),
> Bloomberg TV 3 (`Open Interest` Meta/Microsoft + `Fed Special` + clip Kospi/SK Hynix, todas 29-jul,
> jornada D-1), Bloomberg Podcasts 1 (`Bloomberg Talks`: senador John Kennedy sobre Irán). **Gustavo-Bolsa
> sin vídeo nuevo; Javier DV re-descubierto por `--dateafter` es el mismo vídeo del oro ya procesado el
> 29-jul** (mismo ID, descartado sin reprocesar).
>
> **Aviso de proceso**: 3 de 12 destilados (`Cárpatos Media sesión`, `Bloomberg Talks Kennedy`, `NegociosTV
> Paco Arnao`) volvieron a caer en el proveedor primario de OmniRoute (`insufficient_quota`) y se resolvieron por
> `openrouter/free` — mismo aviso `AVISO_SALDO` que el run 16 (28/29-jul), ya reportado a Carlos; esta vez
> solo 3/12, no 12/12, y sin degradación severa aparente en la calidad. **Al menos 3 cifras del carril
> gratuito venían corrompidas por el patrón de "dígito/coma perdida" ya documentado** (petróleo Brent "+78%"
> en vez de +7,8%; S&P 500 "3.989" en vez de 7.389; Nvidia "-309%" en vez de -3,09%) — corregidas todas por
> grep directo contra el VTT crudo antes de escribir esta nota, sin gastar verificación formal (pulso
> efímero). El propio noticiero de NegociosTV (30-jul) ya marca sin verificar dos afirmaciones israelíes
> (Mojtaba Jamenei con vida; Irán con ~1.500 misiles balísticos) — se respeta esa cautela, no se eleva a
> hecho.
>
> **Descartes de volumen**: NegociosTV (25 candidatos listados, la mayoría flashes redundantes sobre el mismo
> eje Irán-EEUU ya cubierto por el noticiero elegido): sucesos locales (incendios, UDEF, FIFA, redadas
> migratorias), Bitcoin (sin tesis del cerebro en cripto), Jalife y Zelaia (entrevistas Irán con el mismo
> encuadre que Paco Arnao, se queda solo una por redundancia editorial explícita, no por descarte de la voz),
> noticiero-gemelo del 29-jul (mismo guion, se queda el del 30-jul más reciente). Bloomberg TV (~55 clips
> restantes de 60): `Balance of Power`, `Bloomberg Crypto`, entrevistas sin cartera/watchlist (UBS, Logitech,
> Stonepeak, Coinbase). Bloomberg Podcasts: los dos "Bloomberg Talks" de Earnings Roundup/Instant Reaction
> son el mismo panel reetiquetado en 5 shows distintos (Surveillance/Tech/Businessweek/Daybreak/Intelligence)
> — contenido ya cubierto por `Open Interest`/`Fed Special`, dedup. Cárpatos Apertura (pre-Fed) descartada:
> su "escenarios para la Fed" quedó superado por el propio resultado, cubierto en el Cierre.

Día que cierra un arco: **la Fed decide y el mercado desconfía de cómo lo comunica**, **Irán y EEUU entran en
intercambio de fuego directo** (no ya amenaza — ataque confirmado a base en Jordania, contragolpe EEUU-Arabia
Saudí en Irak), **Corea/semis siguen sin encontrar suelo** con SK Hynix como nuevo capítulo, y **Meta/Microsoft
reportan con lecturas opuestas** justo cuando el mercado exige que el capex se demuestre con crecimiento real.

## 1. Fed: mantiene tipos, pero el mercado no se cree la conferencia de Warsh

- **El dato**: FOMC mantiene el tipo de referencia en 3,50-3,75% con **9 votos a favor, 3 en contra**
  (tres presidentes de Fed regionales pidiendo subida — Bloomberg `Fed Special` cuenta "nine versus three"
  sin dar nombres; el pulso de texto de Elena, [[pulso-2026-07-30]], los identifica: Beth Hammack
  (Cleveland), Neel Kashkari (Minneapolis), Lorrie Logan (Dallas), corroboración cruzada entre las dos rutinas
  del cerebro). Kevin Warsh (nuevo Fed Chair) dio una rueda de prensa que el propio panel de Bloomberg
  califica de **"confusa"** ("a confusing news conference that has come with a price"). Reacción: rendimiento
  del bono a 30 años **+11 puntos básicos** (cifra repetida 4 veces en la transcripción de `Fed Special`,
  la más consistente de la sesión) hasta **5,20%**, el nivel más alto desde **2007**; hipoteca a 30 años en
  **6,70%**. Probabilidad de subida en septiembre cae de 70% a **50%** según los futuros de fondos federales
  citados por Bloomberg. Cárpatos (Cierre, 29-jul) confirma el mismo patrón desde el lado de renta variable:
  S&P 500 −1,73% a **7.389** ("ojo con 7.400, que es bastante peligroso" — literal), Nasdaq −1,50% a 27.490,
  Russell −1,6% a 2.921 (esta última coincide casi exacto con el −1,61% de themarketseye vía Elena).
- **Mecanismo**: el mercado no está reaccionando a la decisión (ampliamente esperada, hold) sino a que Warsh
  no logró convencer con su comunicación — "es el mercado diciendo que no le cree", en palabras de un
  panelista de Bloomberg. Eso es lo que mueve el extremo largo de la curva (30 años) mucho más que el corto
  (2 años, −6pb): el mercado exige una prima por incertidumbre de gobernanza de la Fed, no solo por
  inflación. Encaja con el patrón de "farol desafiado" que ya describió Cárpatos ayer (30Y +10pb al cierre).
- **Cruce con la predicción**: resuelve de facto [[2026-07-15-fed-no-sube-tipos-julio]] (prob. registrada
  0,85, resolución formal 2026-08-01) — la Fed **no subió**, dentro del rango esperado por el mercado
  implícito, pero con una votación 9-3 mucho más dividida de lo que sugería la probabilidad original y una
  reacción de mercado adversa que no estaba en el guion de "hold sin sobresaltos". Queda para el veredicto
  semanal del domingo puntuar el Brier con este matiz, no solo el resultado binario.
- **Cruce**: [[renta-fija-y-tipos]] · [[registro-de-predicciones]].
- 📌 **predicción** (mercado implícito vía Bloomberg, futuros de fondos federales): probabilidad de subida en
  septiembre 50% (bajando desde 70% pre-decisión) — falsable contra el comunicado FOMC de la reunión de
  septiembre.

## 2. Irán-EEUU: de la amenaza al intercambio de fuego confirmado

- **El dato**: Irán lanzó **misiles balísticos contra una base aérea estadounidense en Jordania**
  (Misterpuertas, NegociosTV, Bloomberg `Balance of Power` — "Trump: Will Be Hitting Iran Hard, It's Our
  Turn"); EEUU respondió con ataques contra posiciones respaldadas por Irán en Irak, **con Arabia Saudí
  uniéndose al ataque** (título Bloomberg: "Saudi Arabia Joins US in Striking Iran-Backed Militias in Iraq").
  Un proyectil alcanzó además la provincia iraní de Azerbaiyán Occidental (sin víctimas, según el noticiero
  de NegociosTV del 30-jul). Ataque adicional con dron a una instalación flotante de GNL en el puerto egipcio
  de Damietta. El viceministro de Exteriores iraní, Kazem Gharibabadi, **niega** que Irán haya planteado
  negociación o alto el fuego, y advierte que cualquier buque de Reino Unido o Francia cerca del estrecho de
  Ormuz será considerado objetivo. Dos afirmaciones de fuentes israelíes anónimas que **el propio noticiero
  marca sin verificar**: que Mojtaba Jamenei (hijo del líder supremo) sigue con vida, y que Irán dispone de
  ~1.500 misiles balísticos — "no se han aportado pruebas públicas que permitan verificar de forma
  independiente ninguna de las dos afirmaciones", cita literal del noticiero. Se respeta esa cautela aquí:
  `[Sin verificar: cifra de 1.500 misiles balísticos y estado de M. Jamenei, fuente israelí anónima]`.
- **Hilo Ucrania-Irán, actualización**: Paco Arnao (analista internacional de redes y medios, NegociosTV,
  entrevista con encuadre editorial explícitamente
  pro-Rusia/pro-Irán — "el complejo militar-financiero de EEUU", "Ucrania juega a provocar la Tercera Guerra
  Mundial", framing que se cita pero NO se adopta) confirma el mecanismo del hilo que se reabrió el 29-jul:
  Ucrania atacó un buque iraní, Irán estuvo "a punto" de responder con un ataque a un puerto ucraniano, y
  **la diplomacia frenó la escalada** anoche — "parece que Ucrania puede dar algún tipo de compensación". El
  hilo se cierra en su versión estricta (no hubo ataque a Ucrania), pero el contexto de guerra ampliada
  (Irán-EEUU-Arabia Saudí en curso, en paralelo) es mayor que nunca. Un oligarca ucraniano vinculado a la
  industria misilística habría declarado que Ucrania está cerca de obtener un misil balístico "para atacar
  Moscú" — cifra/afirmación de fuente única, sin verificar, se registra como declaración, no como hecho.
- **Mecanismo**: la escalada convierte lo que llevaba runs siendo "amenaza sin confirmar" en **guerra directa
  con al menos tres países combatientes activos** (Irán, EEUU, Arabia Saudí) y riesgo de bloqueo de dos
  estrechos a la vez (Ormuz + Bab el-Mandeb, este último ya con "peajes" declarados por los hutíes según
  Cárpatos). El premio de riesgo geopolítico en el petróleo (ver niveles abajo) es la traducción directa a
  mercado.
- **Cruce**: [[mineria-industrial-y-energia]] · [[ciclos-de-mercado]].
- **Conflicto de interés / encuadre**: el senador John Kennedy (`Bloomberg Talks`) respalda explícitamente la
  postura de Trump y propone sanciones al petróleo iraní y un bloqueo marítimo "para ahogar a Teherán, sin
  desplegar tropas" — es un actor político con posición partidista declarada, no un analista neutral; su
  advertencia de que un bloqueo prolongado forzaría a Irán a cerrar pozos (afectando la oferta global) se
  registra como su lectura, no como consenso.

## 3. Corea/semis: SK Hynix bate en absoluto y aun así cae — 11º run con el hilo abierto

- **El dato**: SK Hynix reportó un salto fuerte en beneficio operativo (cifras absolutas "increíbles" según
  el propio panel de Bloomberg `The China Show`/clip Kospi) pero fue un **"clean miss" frente al consenso**
  — la acción cae pese al resultado. Contexto de consenso: **45 recomendaciones de compra y 0 de venta**
  sobre el valor (extremo de unanimidad alcista previo al miss). El debate del mercado es si SK Hynix puede
  **sostener márgenes del 80% o más** en memoria — eso, no la cifra absoluta, es lo que mueve el **swing
  intradía del 15% en el Kospi** (Bloomberg). Cárpatos (Cierre, 29-jul) da el cierre: Kospi −9% (con mínimo
  intradía de −13/−14%) — cifras compatibles con el "swing del 15%" de Bloomberg si se mide pico a valle, no
  al cierre. Nvidia −3,09% (corregido desde el "−309%" del destilado bruto, patrón de dígito perdido) por
  dudas sobre financiación circular del capex de IA. Competencia china en HBM/DRAM/NAND aparece por primera
  vez en este hilo como riesgo estructural adicional, según el analista de Bloomberg — no solo el ciclo de
  demanda.
- **Mecanismo**: el hilo abierto desde hace 11 runs (Cava-vs-Cárpatos/Hartnett sobre si es rotación o
  capitulación) suma un dato nuevo y más preciso: el mercado ya no discute si SK Hynix gana dinero (lo hace,
  a niveles récord), discute si ese margen es **sostenible** frente a la entrada de competencia china — es un
  desplazamiento del eje de la duda, de "ciclo" a "estructura competitiva".
- **Cruce**: [[semiconductores-de-memoria]] (Micron, cartera, +690,1% de ganancia latente — la posición más
  concentrada de la cartera de Carlos, expuesta directamente al mismo ciclo de memoria) · [[factor-momentum]]
  · [[aversion-al-apalancamiento]] (el hilo de margin calls coreanos del run 16 sigue activo, sin dato nuevo
  hoy que lo amplíe o lo cierre). **Convergencia same-day con análisis técnico** ([[at-2026-07-30]], Jorne,
  mismo día): Micron rompió hoy su soporte técnico 870±20 (cierre $739, −9,94%), plan de reducción anterior
  cerrado y escalado urgente a la CIO — el mismo capítulo de capitulación en semis/Corea que documenta este
  pulso desde el lado de vídeo tiene ya, en paralelo, una lectura técnica que pide decisión, no solo
  vigilancia. No es este pulso quien decide (dominio de Jorne/CIO), pero la convergencia de ambas rutinas
  el mismo día sobre el mismo activo sube la señal.
- 📌 **predicción** (analista de Bloomberg, implícita): SK Hynix mantiene márgenes ≥80% en memoria pese a la
  entrada de competencia china — falsable contra su próximo trimestre reportado.

## 4. Meta y Microsoft reportan: lecturas opuestas sobre si el capex se justifica

- **El dato**: **Meta** — ingresos $60.800M (+28% interanual) pero **por debajo de estimaciones**; BPA $6,18
  frente a estimación de $7,19 y por debajo del año anterior. Guía previa de consenso citada por NegociosTV:
  $58.000-61.000M (Meta cerró dentro del rango, en el extremo alto, pero el BPA decepcionó). **Microsoft** —
  ingresos $90.010M (+18% interanual), **por encima de estimaciones** (consenso NegociosTV: ~$87.600M); BPA
  diluido $4,74 (+23% interanual). Azure (cloud) creciendo **>40%** en el trimestre. El dato más denso del
  bloque, vía Bloomberg `Open Interest`: el consenso de mercado ("the Street") espera que Microsoft guíe el
  capex del año fiscal que viene **de $147.000M a $230.000M** — un salto que implicaría un crecimiento de
  capex del **50-60%**, muy por encima del crecimiento de Azure (~40%). `[Sin datos: cifra real de guía de
  capex FY27 confirmada por Microsoft en su earnings call — el destilado de hoy solo capturó la expectativa
  previa del consenso, no la cifra reportada; pendiente para el próximo run]`.
- **Mecanismo**: es el mismo patrón que ya dejó tocado a Alphabet y castigado a UPS esta semana — el mercado
  ya no premia el crecimiento de ingresos por sí solo, exige que el ritmo de capex no supere al de la línea
  de negocio que se supone que financia. Microsoft bate en todo salvo en la variable que más pesa a futuro
  (la relación capex/crecimiento); Meta falla en BPA pese a superar ingresos, lo que sugiere presión de
  márgenes por el propio gasto en IA.
- **Cruce**: [[plataformas-tecnologicas-y-publicidad-digital]] · [[financiacion-estructurada-del-capex-de-ia]]
  (hilo directo: capex creciendo más rápido que el ingreso que lo financia, la misma tensión de Alphabet
  documentada el 28-29 jul) · cartera actual (Microsoft en cartera, bloque tecnología desarrollada).
- 📌 **predicción** (consenso de mercado vía Bloomberg, implícita): la guía de capex FY27 de Microsoft
  aterriza cerca de $230.000M — falsable contra la cifra que la propia Microsoft confirme (pendiente,
  no capturada en este run).

## 5. Oro y deuda: una segunda voz llega a la misma tesis que Javier DV, pero con mucho menos peso

- **El dato**: Jean Beltrán — no es analista institucional, es un formador/*trader* retail que imparte clase
  en directo a alumnos ("el trader cristiano", NegociosTV recoge un fragmento de su directo, 30-jul), el
  contexto real detrás de la etiqueta "entrevista" — expone en su clase que el oro cae desde $4.105 hasta
  ~$4.000 (coincide con el nivel de cierre de Cárpatos de ayer, $4.007, −0,79% — corroboración cruzada barata
  entre dos fuentes del mismo día). Su tesis, textbook de manual: si la deuda de EEUU se mantiene en máximos
  históricos, **una eventual subida de tipos no bastaría para frenar al oro** — la demanda de refugio por
  deuda pesa más que el diferencial de tipos. Dólar fortaleciéndose, rendimiento del bono a 10 años al alza.
- **Mecanismo**: es la misma tesis de fondo que Javier DV planteó ayer con escepticismo explícito sobre la
  revalorización de reservas de oro de EEUU ([[pulso-video-2026-07-29]], hilo #5) — hoy la repite una fuente
  distinta (Beltrán, sin citar a Javier DV ni viceversa), pero **de mucha menor autoridad** (educador de
  retail explicando un mecanismo de manual a sus alumnos, no un análisis propio ni una tesis original): sube
  el hilo de "una fuente" a "el mecanismo se repite en un segundo canal", no a "confirmado por una segunda
  fuente cualificada independiente" — la distinción importa porque ninguna de las dos aporta la cifra oficial
  de deuda/déficit de EEUU que seguía pendiente de verificar desde ayer.
- **Cruce**: [[mineras-de-metales-preciosos]] (cartera con exposición relevante) · [[renta-fija-y-tipos]].

## Lo que esto le dice al cerebro de Carlos (cruces, no órdenes)

- **Micron/memoria** (cartera, posición más concentrada, +690%): el hilo Cava-vs-Cárpatos sigue sin
  resolverse (11º run), pero el eje de la duda se ha movido de "ciclo de demanda" a "sostenibilidad de
  márgenes frente a competencia china" — un cambio de mecanismo más que de dirección, con SK Hynix como
  comparable directo cayendo pese a resultados récord. **Esto no es solo lectura de vídeo**: el análisis
  técnico del mismo día ([[at-2026-07-30]]) ya marca la ruptura del soporte de Micron como decisión
  pendiente en la CIO, no como hilo abierto de fondo — la convergencia entre el mecanismo (este pulso) y el
  nivel de precio (Jorne) es el tipo de señal que el cerebro está diseñado para conectar entre rutinas.
- **Microsoft** (cartera): bate en ingresos/BPA/Azure, pero el mercado ya está mirando la guía de capex que
  aún no se ha confirmado — el próximo run debería cerrar este hueco de dato.
- **Oro/plata** (cartera, bloque relevante): segunda fuente independiente en 24h sostiene el mismo mecanismo
  de deuda-alta-sostiene-precio; no cambia el veredicto sobre la posición, refuerza el mecanismo con más
  convergencia.
- **Fed**: resuelve la predicción de julio con un matiz que el binario "sube/no sube" no capturaba (votación
  9-3, comunicación que el propio mercado calificó de perturbadora) — al veredicto semanal del domingo con
  ese matiz explícito.

## Preguntas abiertas

1. **Capex FY27 de Microsoft**: ¿confirma la cifra de ~$230.000M que espera el consenso, o sorprende en
   cualquier dirección? Pendiente de dato real, no solo expectativa.
2. **Irán-EEUU-Arabia Saudí**: ¿se contiene el intercambio de ataques de las últimas 24h, o escala a una
   siguiente ronda? Vigilar Ormuz y Bab el-Mandeb como los dos puntos de estrangulamiento simultáneos.
3. **SK Hynix/Corea**: ¿el mercado resuelve la duda sobre sostenibilidad de márgenes al alza o a la baja en
   los próximos días? Vigilar si el Kospi encuentra suelo o profundiza la corrección.
4. **Cifras israelíes sin verificar** (Jamenei con vida, 1.500 misiles iraníes): pendientes de una segunda
   fuente independiente antes de tratarlas como hecho.
5. **Deuda/déficit de EEUU** (arrastrado desde el 29-jul, `[Sin verificar]`): sigue pendiente de contrastar
   contra fuente oficial (Tesoro/FRED) — hoy son ya dos fuentes de vídeo (Javier DV, Jean Beltrán) que se
   apoyan en la narrativa sin dar la cifra exacta verificada.
6. **Apple/Amazon reportan hoy (30-jul)**: fuera de la ventana de Bloomberg TV de este run (jornada D-1);
   próximo run debería cubrirlos, con cruce directo a la tesis de [[af-2026-07-22]] sobre Amazon.

---
*Nota hermana de vídeo — canales: [[misterpuertas-metodo]] · [[carpatos-metodo]] · [[cava-metodo]] ·
[[negociostv-metodo]] · [[bloomberg-tv-metodo]] · [[bloomberg-podcasts-metodo]]. Cruces con
cartera actual · [[semiconductores-de-memoria]] · [[factor-momentum]] · [[aversion-al-apalancamiento]] ·
[[mineria-industrial-y-energia]] · [[mineras-de-metales-preciosos]] · [[renta-fija-y-tipos]] ·
[[plataformas-tecnologicas-y-publicidad-digital]] · [[financiacion-estructurada-del-capex-de-ia]] ·
[[registro-de-predicciones]]. Nota hermana de texto: [[pulso-2026-07-30]]. Convergencia same-day con
análisis técnico: [[at-2026-07-30]].*
