---
title: "Contabilidad y calidad de beneficios"
tipo: concepto
tags: [valoracion, contabilidad, calidad-de-beneficios, roic, damodaran, terry-smith, amat, insolvencia, dupont]
fecha: 2026-07-11
fuentes: ["[[manuales-de-valoracion]]", "[[analisis-integral-de-empresas-amat]]"]
---

# Contabilidad y calidad de beneficios

Antes de descontar nada hay que **fiarse del beneficio que se descuenta**. Damodaran (caps. 3, 9 y 10) advierte:
*"the accounting earnings for many firms bear little or no resemblance to the true earnings of the firm."* Esta
página es el filtro forense que separa el beneficio contable del **beneficio económico real** — el mismo oficio
que hizo famoso a [[terry-smith]] (*Accounting for Growth*, 1992) y que alimenta el escepticismo de
[[warren-buffett]] (EBITDA, opciones, "restructuring costs").

**Actualización 2026-07-11** — [[analisis-integral-de-empresas-amat]] (Oriol Amat) aporta el mismo oficio forense
pero con **vocabulario español, casos europeos y un instrumental de ratios propio**: la sección "Contabilidad
creativa" de más abajo y los modelos de predicción de insolvencia son de esta segunda fuente. No hay
contradicción con Damodaran/Terry Smith — es el mismo problema (¿me puedo fiar del beneficio?) visto con otra
caja de herramientas y otros escándalos (Fórum Filatélico, AFINSA, Parmalat en vez de Enron/Worldcom).

## Contabilidad vs. visión financiera de la empresa

El balance financiero de Damodaran añade lo que el contable ignora: los **activos de crecimiento** (el valor de
las inversiones futuras). Los estados financieros informan, pero fallan en **oportunidad** (el último informe
anual puede tener 6-9 meses) y en **cómo miden** activos, beneficios y riesgo. Práctica básica: usar cifras
**TTM** (*trailing twelve months*, últimos cuatro trimestres), no el último anual.

## Las dos grandes reclasificaciones que cambian el ROIC

Los gastos son de tres tipos: **operativos** (benefician solo al periodo), **de capital** (varios periodos) y
**financieros** (coste de la deuda). La contabilidad los confunde de dos formas que **distorsionan el ROIC** —
justo la métrica que Terry Smith y el value-driver ponen en el centro (ver [[retorno-sobre-capital-empleado]]):

1. **I+D tratada como gasto operativo** (debería ser gasto de **capital**). Al expensarla toda de golpe, el
   activo que crea la investigación **no aparece en el balance**, lo que **infla artificialmente el ROIC/ROE**
   de las empresas intensivas en I+D. Damodaran propone **capitalizarla** (amortizarla según su vida útil) y
   reestimar los retornos. Ejemplo real: **Amgen** pasa de ROE 37,7% → **26,7%** y ROC 46,3% → **31,9%** tras
   capitalizar la I+D. Lección de segundo orden: **cuidado al comparar el ROIC "de pantalla" de una tecnológica
   o farmacéutica con el de una consumo básico** — no son homogéneos sin ajustar.
2. **Arrendamientos operativos tratados como gasto operativo** (deberían ser **deuda**). Se descuentan los
   compromisos futuros al coste de la deuda y se suman a la deuda: una empresa "sin deuda" (p. ej. un retailer
   con cientos de tiendas alquiladas, como The Gap) puede estar **muy apalancada** y sujeta a riesgo de impago.
   Corolario: cualquier compromiso fijo a largo plazo no ligado a resultados es deuda encubierta.

## Beneficios "gestionados" (*managed earnings*)

Damodaran documenta la epidemia de **batir las estimaciones de los analistas** por uno o dos céntimos
([[microsoft|Microsoft]] batió 39 de 40 trimestres en los 90). El mercado no es tan tonto: nacen las *whispered earnings*
(el listón real, unos céntimos por encima del consenso). Técnicas para maquillar:
- **Reconocimiento de ingresos** (adelantar/retrasar; *channel stuffing*: enviar producto a distribuidores al
  cierre del trimestre; *swaps* de ingresos entre dos empresas).
- **Capitalizar gastos operativos** (software, marketing) para inflar el beneficio.
- **Cargos y *write-offs*** (una reestructuración grande limpia el futuro y separa el gasto de "operaciones";
  el *in-process R&D* para borrar el fondo de comercio de una adquisición).
- **Reservas "cookie jar"** (dotar de más en años buenos y liberar en los malos para suavizar).
- **Plusvalías de inversiones** (vender participaciones apuntadas por debajo de mercado para "cuadrar" el
  trimestre).

Puente con el cerebro: la obsesión por *"batir expectativas"* es la cara oscura del principio de McKinsey
(**el retorno del accionista depende del desempeño frente a las expectativas**, no del absoluto — ver
[[flujo-de-caja-descontado]] y [[precio-vs-cotizacion]]); y explica por qué Buffett y Smith miran la
**conversión de caja** (el beneficio que de verdad se vuelve efectivo) por encima del beneficio contable.

## Normalizar: partidas extraordinarias, recurrentes e inusuales

Para proyectar hay que usar el beneficio de **operaciones continuadas**, sin one-offs. Cuatro casos: (1)
verdaderamente único → quitar; (2) "extraordinario" que recurre cada X años → repartir anualizado; (3)
recurrente pero volátil → **normalizar** por la media; (4) cambia de signo (p. ej. diferencias de cambio) →
ignorar (se revierten). Con adquisiciones: mirar el beneficio **antes** de la amortización del fondo de comercio
(cargo no-caja) y de los *write-offs* de in-process R&D. Con participaciones cruzadas: **valorar la filial
aparte** y sumarla, no mezclar sus beneficios.

## La lista de señales de alarma (checklist forense de Damodaran)

Aplicable directamente al **seleccionar empresas** (ver [[comparar-dos-empresas]]):
- ¿El **beneficio crece mucho más que los ingresos**, año tras año? (¿de dónde salen esas "eficiencias"?)
- ¿Cargos "one-time" **frecuentes** (con nombre distinto cada año)?
- ¿Algún gasto operativo (SG&A) que **oscila salvajemente** como % de ventas?
- ¿Bate al consenso **por un céntimo** trimestre tras trimestre? (gestión de beneficios que un día estalla)
- ¿Gran parte de los ingresos viene de **filiales/partes vinculadas**?
- ¿Cambian a menudo las **reglas contables** (inventarios, amortización)?
- ¿Las adquisiciones van seguidas de **milagrosas** subidas de beneficio?
- ¿El **circulante se dispara** con las ventas? (a veces = financiar a sus propios clientes)

Ninguna señal aislada condena; su **combinación** exige más escrutinio. Es la contrapartida analítica del
[[margen-de-seguridad]]: desconfiar del beneficio antes de pagar por él.

## Contabilidad creativa: el vocabulario español del maquillaje contable (Amat)

Amat distingue con más precisión que el resto del corpus **por qué** la contabilidad creativa rara vez es un
delito. Se sustenta en **dos ejes**, ambos legales:

1. **Alternativas contables permitidas**: la normativa deja escoger entre criterios más o menos conservadores
   para una misma operación (p. ej. método promedio vs. FIFO para existencias) — Amat cita más de **cincuenta
   tipos de operaciones** con esta ambigüedad en la normativa contable española.
2. **Estimaciones sobre el futuro**: deterioros, morosidad esperada y provisiones exigen supuestos que pueden
   ser más o menos optimistas sin salirse de la norma.

**El maquillaje tiene dos direcciones opuestas y simétricas**, según a quién se dirijan las cuentas — una
distinción que no aparece en Damodaran y que es muy operativa para leer los incentivos detrás de un balance:

- **Ante Hacienda** (para pagar menos impuestos): reducir activos con amortizaciones/deterioros excesivos,
  reducir reservas o el resultado, ocultar ventas o elevar gastos, retrasar el reconocimiento de ventas o
  adelantar el de gastos.
- **Ante la banca** (para mejorar el rating y conseguir más crédito): exactamente lo contrario — inflar activos
  con amortizaciones insuficientes, aumentar reservas o el resultado, hinchar ventas o reducir gastos, adelantar
  ventas o retrasar gastos.

La misma empresa puede tener **incentivos contrarios** según el destinatario de las cuentas, lo que explica por
qué comparar las cuentas presentadas a distintas audiencias (fiscales vs. bancarias) es en sí mismo una técnica
de detección.

**Técnicas de detección de maquillajes (Amat)** — complementan directamente el checklist de Damodaran de más
arriba:
- Analizar los criterios contables usados en la memoria y **contrastarlos con años anteriores y con
  competidores** (cambios de criterio, o criterios más/menos conservadores que el sector).
- Revisar el informe de auditoría por **salvedades** (cambios de criterio, contingencias no recogidas).
- Revisar los **ajustes por corrección de errores de ejercicios anteriores** en el ECPN — a veces esconden un
  intento de disimular una variación no deseada de resultados.
- Vigilar la evolución de los **plazos de clientes, existencias y proveedores** (ver
  [[fondo-de-maniobra-y-ciclo-de-caja]]) frente a competidores.
- Revisar las **operaciones con empresas vinculadas** (partes relacionadas) a precios distintos de mercado.
- Prestar más atención en los momentos de mayor riesgo: cambio en la cúpula directiva, salida a bolsa, venta de
  la empresa.

**Tres casos que amplían el corpus de escándalos** (antes solo Enron vía Damodaran):
- **Fórum Filatélico y AFINSA** (España) — no fue maquillaje contable sino un esquema piramidal disfrazado de
  inversión en sellos: para retribuir muy por encima de mercado necesitaban un flujo creciente de nuevos
  ahorradores. Los informes de auditoría de AFINSA ya cuestionaban la valoración de los sellos **dos años antes**
  de la quiebra — la señal estaba pública y disponible.
- **Enron** — el caso clásico, con el dato concreto: tres mil filiales en Caimán no consolidadas mediante un
  contrato de control oculto a los auditores; beneficios inflados un 16% durante cuatro años comprando activos
  de Enron a precios sobre mercado con préstamos avalados por la propia Enron.
- **Parmalat** (Italia, 2003) — hasta cuatro contabilidades paralelas; el patrón común a los grandes escándalos
  que Amat extrae: éxito inicial → diversificación alocada fuera del negocio central → ocultar que el negocio ya
  iba mal → uso de información privilegiada para vender acciones antes de que estalle. Lección resumida por
  Amat: *"lo más rentable es ser ético"*.

## Rentabilidad financiera descompuesta: margen × rotación × apalancamiento (DuPont "a la española")

Amat da explícitamente la descomposición que el resto del corpus usa solo de forma implícita. La rentabilidad de
los fondos propios (ROE) se explica por tres palancas independientes:

> **Rentabilidad financiera = Margen (Beneficio/Ventas) × Rotación (Ventas/Activo) × Apalancamiento (Activo/Patrimonio neto)**

Para subir la rentabilidad hay tres caminos, no uno solo:
- **Elevar el margen** (más ingresos y/o menos gastos).
- **Elevar la rotación** (más ventas con los mismos activos, o menos activos para las mismas ventas — la
  eficiencia que persigue [[retorno-sobre-capital-empleado]]).
- **Aprovechar el apalancamiento financiero**: aumentar el peso del activo frente al patrimonio neto — pero
  **solo es favorable** cuando el rendimiento de los activos supera el coste de la deuda. Si no, el
  apalancamiento destruye rentabilidad en vez de crearla (ver [[aversion-al-apalancamiento]] para la tensión con
  la postura de Buffett/Munger frente a la de [[ray-dalio|Ray Dalio]] sobre el apalancamiento como herramienta neutral).

**Modelo de Higgins de crecimiento autosostenido**: cuánto puede crecer una empresa en ventas **sin ampliar
capital**, en función de cuatro variables — margen sobre ventas (M), payout de dividendos (D), estructura
financiera activo/patrimonio (E) y rotación del activo (R). Amat lo ilustra con un ejemplo numérico: con M=0,10,
D=0,50, E=1,8, R=0,8, el crecimiento autosostenido es del 7,75% anual; mejorando las cuatro palancas (M=0,15,
D=0,20, E=2,2, R=0,9) sube al 31,16%. Es el reverso cuantitativo de la "muerte de éxito": una empresa cuyas
ventas crecen pero cuyos activos y deudas crecen **todavía más** (mala gestión de activos, expansión mal
financiada) ve caer el beneficio en vez de crecer — exactamente el patrón del caso Brighton (ver
[[fondo-de-maniobra-y-ciclo-de-caja]]) y de Telepizza (cap. 6 de Amat: EVA cayendo hasta negativo por
sobre-inversión en activos que no rindieron).

## Vocabulario de ratios de liquidez, solvencia y endeudamiento

Marco de referencia rápido (valores "ideales" según Amat, siempre a matizar por sector — empresas con plazos de
cobro/pago muy favorables, como supermercados, pueden operar sanamente fuera de estos rangos):
- **Patrimonio neto / Total balance**: regla general del **40-50%**; puede ser menor si la empresa soporta bien
  el coste de la deuda adicional y gestiona con eficiencia existencias y clientes.
- **Ratio de liquidez** (Activo corriente / Pasivo corriente): idealmente por encima de 1, salvo en sectores de
  ciclo de caja negativo (ver [[fondo-de-maniobra-y-ciclo-de-caja]]).
- **Capacidad de devolución de préstamos** (flujo de caja / deuda financiera): debe ser coherente con el plazo de
  la deuda — si el flujo de caja tarda menos años en cancelar la deuda que el plazo contractual, no hay problema
  de repago (caso Caprabo: 8-9 años de capacidad frente a préstamos a 15 años).
- **Rotación de activos** (Ventas / Activo): cuanto mayor, menos capital hace falta para generar el mismo
  volumen de negocio — el mismo principio que [[retorno-sobre-capital-empleado]] pero aplicado al activo total
  en vez de al capital empleado.

## Modelos de predicción de insolvencia: Beaver, Altman Z y Argenti

El complemento natural del checklist forense de Damodaran: en vez de detectar beneficios manipulados, estos
modelos **predicen la insolvencia con años de antelación** usando ratios del balance y la cuenta de resultados.

- **Beaver (1967)** — enfoque **unidimensional** (cada ratio evaluado por separado, sin combinar). De docenas de
  ratios probados sobre una muestra de empresas quebradas y sanas, dos tuvieron el mínimo error de predicción:
  **Deudas/Activo** y **Flujo de caja/Pasivo**.
- **Altman Z-score (1968)** — el primer modelo **multidimensional**: combina en una sola fórmula ponderada
  ratios de solvencia a corto plazo, autofinanciación, rendimiento, endeudamiento y facturación. Interpretación:
  **Z < 1,21** → probabilidad de insolvencia muy elevada; **Z > 2,90** → probabilidad reducida; zona intermedia →
  posición dudosa. Para sectores de ciclo de caja muy favorable (supermercados, restauración), donde el ratio de
  liquidez es estructuralmente bajo y distorsiona la Z clásica, existe una variante de tres ratios sin el
  componente de liquidez: `Z = -2,2 + 6,1·(Patrimonio neto/Activo) + 6,5·(Beneficio neto/Activo) + 4,8·(Beneficio
  neto/Patrimonio neto)`.
- **Fórmula de Amat et al. (2017)**, sobre una muestra de más de 80.000 empresas españolas: identifica **cinco
  ratios con alto poder predictivo** de insolvencia (entre más de cuarenta probados) y una fórmula alternativa
  donde un valor negativo indica alta probabilidad de problemas de insolvencia.
- **Modelo de Argenti (1977)** — el único que incorpora variables **cualitativas** (defectos de dirección,
  errores de gestión y control) además de los síntomas financieros: puntuación por encima de 35 → alta
  probabilidad de insolvencia; por debajo de 18 → baja; entre 18-35 → zona de indefinición, con la salvedad de
  que si la sub-puntuación de "Defectos de dirección" supera 10, la empresa se considera de riesgo alto aunque el
  total esté en zona aceptable.

El caso práctico de Amat (empresa que entró en concurso de acreedores en el año 8) muestra la Z de Altman
**cruzando a territorio negativo entre el año 3 y el año 4** — cuatro años de antelación sobre el concurso real.
Puente con el resto del cerebro: estos modelos son el equivalente cuantitativo de la pregunta que
[[howard-marks]] hace de forma cualitativa sobre el riesgo de pérdida permanente (ver
[[riesgo-real-vs-volatilidad]]) — un balance frágil, aunque el beneficio contable sea positivo, es donde se
materializa esa pérdida permanente.

## Banderas de calidad halladas en lecturas profundas (2026-07-18)

Ocho mecanismos concretos de "calidad de beneficios" extraídos de la lectura íntegra de informes anuales de la
tanda Sectorial — cada uno es un patrón **generalizable**, no una anécdota de una empresa:

1. **Plusvalías no realizadas inflando el beneficio neto.** [[alphabet]] reportó BPA +34% con ingreso operativo
   solo +15%: la diferencia fueron **$24.100M de plusvalías NO realizadas** por revalorizar participaciones
   privadas de IA (mark-to-market de startups), + ~$32.000M más en enero. El "beneficio" depende del mercado
   privado, no del negocio. Regla: descontar el OI&E no operativo antes de juzgar el crecimiento.
2. **EBITDA pre que sube mientras el EBIT cae.** [[merck-kgaa]]: EBITDA pre de Healthcare +2,8% pero **EBIT
   −12,7%** — la brecha es la amortización de intangibles de una adquisición (SpringWorks) + deterioros de
   licencias fallidas. La métrica que se usa para bonus/dividendo/guidance (EBITDA pre) está diseñada para no ver
   el coste de la M&A. Mirar SIEMPRE el EBIT y el neto tras una compra grande.
3. **Asset deal vs. business combination.** Comprar una molécula/tecnología sola ([[novo-nordisk]]-Akero,
   [[nvidia]]-Groq) capitaliza todo como intangible **amortizable** y no genera goodwill; comprar una empresa con
   operaciones sí genera goodwill (no amortiza). Mismo desembolso, trayectorias de margen futuro opuestas → leer
   la nota de "business combinations" vs "goodwill" vs "intangibles" ([[adquisiciones-fusiones-y-sinergias]]).
4. **Ingreso disputado como pasivo-opción.** Bajo IFRS 15/ASC 606, un ingreso en litigio (el 340B de
   [[novo-nordisk]], $4,2B) se reconoce solo cuando es "altamente probable que no revierta" — al resolverse el
   pleito produce un salto de ingreso **no operativo y no repetible**. Separarlo del crecimiento orgánico.
5. **Gross-to-net: el "precio de lista" es ficción.** [[novo-nordisk]]: de DKK 729.423M brutos solo llegan
   309.064M netos (−58%); en EE.UU. el 70% se descuenta en rebates/chargebacks. Todo análisis de *pricing power*
   farma sin mirar la nota de gross-to-net es mirar el titular, no la economía ([[salud-y-farma]]).
6. **Margen contaminado por restructuración a mitad de año.** [[novo-nordisk]]: FTE promedio (76.343) > headcount
   de cierre (69.505) — el recorte llegó tarde, así que el año del anuncio carga casi todo el coste previo; el
   ahorro completo se ve el ejercicio siguiente. Comparar el margen del año de la restructuración subestima la
   mejora futura.
7. **Cambio de KPI principal como señal.** [[merck-kgaa]] pasó de Operating Cash Flow a Free Cash Flow como
   métrica estrella justo cuando el OCF cayó −14% y la deuda subió. Preguntarse "¿por qué cambia la regla ahora?".
8. **Financiación circular / ingresos entre partes vinculadas.** [[nvidia]] tiene $22,3B en participaciones no
   cotizadas de clientes (neoclouds, OpenAI) e invierte en las mismas empresas a las que vende; [[alphabet]]
   **autodeclara** por escrito inversiones en compañías "con las que también tiene acuerdos comerciales cerca del
   mismo tiempo". No se puede aislar cuánto del crecimiento viene de clientes en los que se invierte — y si el
   capex de IA se digiere, hay que **deteriorar la participación además de perder la venta** (riesgo reflexivo,
   [[nassim-taleb]], [[ciclos-de-mercado]]).

9. **El dolor del valle maquilla el margen de la recuperación (rebajas de inventario a NRV).** En un cíclico, la
   dotación por rebajar inventario a valor neto realizable se carga en el año malo; cuando ese inventario se vende
   en el año bueno, sale con **coste casi cero** e infla el margen bruto. Micron dotó **$1.831M en FY2023** y eso
   **infló el margen de FY2024 en $987M** ([[semiconductores-de-memoria]]). Al comparar márgenes de un cíclico
   entre años hay que aislar este efecto o se confunde recuperación operativa con contabilidad diferida.

Además: un **test de deterioro de goodwill** con "colchón >15%" ([[merck-kgaa]], goodwill 34,8% del activo) se
erosiona solo con que suba el WACC, sin que el negocio empeore — el deterioro puede venir enteramente de los tipos.

## Tensiones

- **Calidad de beneficios vs. crecimiento aparente.** Este concepto está en tensión con [[estimacion-del-crecimiento]] y con [[financiacion-estructurada-del-capex-de-ia]]: una empresa puede crecer en ventas o en BPA mientras su negocio real se está financiando con deuda, con inversiones encubiertas o con contabilidad creativa.
- **Calidad de beneficios vs. ciclo de deuda.** En tiempos de desapalancamiento, los balances se vuelven más frágiles y los ajustes contables se multiplican; por eso este concepto se cruza con [[ciclo-de-deuda-y-desapalancamiento]] y con [[aversion-al-apalancamiento]].
- **Calidad de beneficios vs. valoración a largo plazo.** Un negocio excelente puede ser una mala inversión si el precio es excesivo, y un negocio mediocre puede ser defendible si el balance y el flujo de caja son sólidos; la misma tensión ya está presente en [[margen-de-seguridad]] y en [[negocio-maravilloso-vs-precio-maravilloso]].

## Ver también

- [[retorno-sobre-capital-empleado]] · [[flujo-de-caja-descontado]] · [[valor-intrinseco]] · [[terry-smith]]
- [[estimacion-del-crecimiento]] · [[margen-de-seguridad]] · [[comparar-dos-empresas]] · [[manuales-de-valoracion]] ·
  [[ciclo-de-deuda-y-desapalancamiento]] · [[aversion-al-apalancamiento]] ·
  [[financiacion-estructurada-del-capex-de-ia]] · [[negocio-maravilloso-vs-precio-maravilloso]]
- [[analisis-integral-de-empresas-amat]] · [[fondo-de-maniobra-y-ciclo-de-caja]] · [[aversion-al-apalancamiento]]
- [[riesgo-real-vs-volatilidad]] · [[howard-marks]] · [[francisco-garcia-parames]]
- [[mary-buffett-clark-libros]] — reglas de pulgar para leer estados financieros al estilo Buffett (margen
  bruto 40 %+ como huella de foso, SG&A bajo, poca deuda)
- [[short-interest-nasdaq-farinella]] — el mercado del lado corto: quien detecta lo que está mal (alto interés
  corto) acierta en media; complemento empírico al análisis forense de beneficios
- [[financial-shenanigans-schilit]] — la **taxonomía forense** del engaño contable: los siete trucos para
  inflar ingresos/gastos/pasivos (Schilit, CFRA). El catálogo operativo del fraude, par del instrumental de Amat
