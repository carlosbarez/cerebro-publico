---
title: "La universidad de Damodaran: el método de valoración"
tipo: concepto
tags: [valoracion, damodaran, dcf, narrativa, datasets, erp, beta, coste-de-capital]
fecha: 2026-08-25
agente: profesor-conceptos
fuentes: "[\"https://pages.stern.nyu.edu/~adamodar/\", \"https://www.stern.nyu.edu/~adamodar/pc/datasets/ctryprem.xlsx\", \"https://www.stern.nyu.edu/~adamodar/pc/datasets/betas.xls\", \"https://www.stern.nyu.edu/~adamodar/pc/datasets/margin.xls\", \"https://aswathdamodaran.blogspot.com/2026/08/ais-bar-mitzvah-moment-from-hype-hope.html\", \"[[manuales-de-valoracion]]\", \"[[damodaran-narrative-and-numbers]]\", \"[[damodaran-dark-side-of-valuation]]\"]"
---

# La universidad de Damodaran: el método de valoración

## La idea en una frase

> Valorar es **contar una historia y obligarla a rendir cuentas en números**. Una narrativa sin números es
> propaganda; unos números sin narrativa son una hoja de cálculo huérfana.

aswath damodaran (pendiente) —profesor de la NYU Stern, apodado el *dean of valuation*— no inventó el
[[flujo-de-caja-descontado|DCF]], pero es quien lo ha desmontado en piezas didácticas y lo ha puesto gratis
en internet. Su aportación distintiva no es técnica sino **metodológica**: el puente explícito entre historia
y cifra (*Narrative and Numbers*, 2017 — ver [[damodaran-narrative-and-numbers]]).

## El método: narrativa -> números -> narrativa revisada

Damodaran insiste en un bucle de tres pasos que él mismo aplicó en agosto de 2026 a la IA (post *"AI's Bar
Mitzvah Moment"*, 20-ago-2026):

1. **Narrativa**: "la IA transformará el trabajo del conocimiento" → define el mercado potencial (*TAM*,
   *total addressable market*).
2. **Números**: convertir la historia en ingresos, márgenes, reinversión y riesgo con datos verificables.
   En su propio análisis: los ingresos reales de productos IA rondan hoy los **~$250B globales** (con ARR de
   **Anthropic $65B** y **OpenAI ~$40B** a julio-2026), frente a billones invertidos en capex; el TAM de $22T
   que los banqueros pusieron sobre la mesa para xAI le pareció "*más alucinación que estimación*".
3. **Revisión**: si los números contradicen la historia, se cambia LA HISTORIA (o su intensidad), no solo la
   celda del Excel. Y cuando los hechos cambian, se reescribe la narrativa sin vergüenza — su web publica
   valoraciones actualizadas de Tesla, Uber o Nvidia cada vez que la historia muta.

El ejemplo numérico estrella del método aplicado a precio: con un precio rumorado de IPO para Anthropic de
**~$2T**, un margen operativo después de impuestos generoso (**30%**) y un [[coste-de-capital-wacc|coste de
capital]] alto (**10%**), la empresa necesitaría **~$1.2T de ingresos en 10 años** para justificar ese
precio. Eso es narrativa rendida ante el tribunal de los números: no dice "cara" ni "barata", dice **qué
tendría que pasar** para que el precio fuera razonable.

## Las cuatro formas de valorar (*four ways to value*)

| Vía | Qué hace | Cuándo sirve | Cuándo engaña |
|---|---|---|---|
| **Intrínseca** ([[flujo-de-caja-descontado]]) | Descuenta flujos de caja futuros | Negocios con caja modelable | Empresas financieras, quiebras técnicas, ciclicas en valle |
| **Relativa** ([[multiplos-de-valoracion]]) | Compara con comparables | Mercados con muchos pares líquidos | Cuando "el sector entero está caro": hereda el error colectivo |
| **Opciones contingentes** (*contingent claim*) | Valora como opción | Patentes, tierra, activos profundos y volátiles | Usarla para justificar cualquier precio (la trampa dotcom) |
| **Basada en activos** (*asset-based*) | Suma activos menos pasivos | Liquidaciones, holdings, bancos | Empresas cuyo valor vive en intangibles |

**Cuándo NO sirve el DCF** (la advertencia de [[damodaran-dark-side-of-valuation]]): bancos y aseguradoras
(la deuda es materia prima, no financiación; mejor dividendo descontable o valoración relativa), empresas
en distress (el flujo negativo no significa valor negativo si hay opción de supervivencia), jóvenes sin
ingresos (la incertidumbre es de NARRATIVA, no solo de parámetros: hay que valorar escenarios completos) y
empresas con contabilidad opaca — primero [[contabilidad-y-calidad-de-beneficios|arreglar el beneficio]],
luego descontarlo.

## Los datasets gratuitos (verificados enero-2026)

La "universidad" de verdad: Damodaran publica cada enero datos sectoriales y por país, descargables sin
registro. Lo bajado y comprobado HOY (25-ago-2026):

### Prima de riesgo por país (`ctryprem.xlsx`, actualización enero-2026)
- Prima de mercado maduro: **4,23%** (ERP implícita S&P 500 de 4,59% ajustada porque Moody's rebajó EE.UU.
  de Aaa a **Aa1** el 16-may-2025). Ver [[prima-de-riesgo-y-beta]].
- EE.UU.: ERP total **4,46%** · Alemania/Suiza (Aaa): **4,23%** · España (A3): **5,78%** (incluye prima de
  país 1,55%) · Japón/China (A1): 5,14% · México: 6,69% · India: 7,08% · Brasil: 7,47% · Turquía: 8,89% ·
  Argentina: 13,94%.

### Betas sectoriales (`betas.xls`, 5-ene-2026)
Software (System & Application) 1,28 · Semiconductores 1,52 · Software Internet 1,69 · Farmacia 0,98 ·
Tabaco 0,79 · Bancos regionales 0,40 · **Retail alimentación: beta apalancada 1,12 pero DESAPALANCADA
solo 0,80** — el negocio es estable, la deuda añade el resto.

### Márgenes por industria (`margin.xls`, 5-ene-2026)
GM/NM: Retail alimentación 26,3%/1,3% · Software 71,7%/25,5% · Semis 59,0%/30,4% · Tabaco 64,3%/26,7% ·
Transporte aéreo 24,8%/2,5%. Sirven para anclar la narrativa ("¿mi empresa es normal en su sector?") antes
de proyectar.

### Ejemplo numérico completo (inputs verificados)
Coste del *equity* de una software estadounidense típica, CAPM (ver [[coste-de-capital-wacc]]):
`ke = Rf + β·ERP = 4,65% + 1,28 × 4,46% ≈ 10,4%` — donde Rf = rendimiento del bono USA a 10 años
(**4,65%**, cierre 25-ago-2026 vía Yahoo) y ERP = dataset enero-2026. Para una retail alimentación sin
deuda: `ke = 4,65% + 0,80 × 4,23% ≈ 8,0%`. La diferencia de ~240 pb es la **traducción numérica de la
estabilidad del negocio**.

## Errores típicos del principiante

1. **Usar la beta de Yahoo de la empresa** (ruido de 2 años, cambios de apalancamiento) en lugar de la beta
   sectorial desapalancada y reapalancada con SU estructura de capital.
2. **Confundir TAM con negocio**: mercado grande ≠ negocio grande (Damodaran: "big markets don't always
   become big businesses"). El televisor fue enorme; los fabricantes de televisores, mediocres como inversión.
3. **Meter la prima de país dos veces** (en el Rf Y en la ERP) o usar la prima de país para una empresa cuyos
   ingresos están en otro sitio — la prima debe ponderarse por dónde se GENERAN los flujos.
4. **Tratar la ERP histórica como constante**: la implícita (la que "regala" el precio actual del mercado)
   es también un termómetro de [[ciclos-de-mercado|ciclo]], no una constante física.
5. **Copiar el WACC de un informe de banca** sin entender que cada supuesto (beta, ERP, deuda objetivo)
   mueve el valor final decenas de puntos porcentuales.

## Pensamiento de segundo orden

- **Qué implica**: si los inputs del descuento son públicos y gratis, la ventaja competitiva de un inversor
  NO puede estar en el dato sino en (a) la calidad de la narrativa, (b) la disciplina para cambiarla y
  (c) la paciencia del horizonte. El oficio se traslada de la mecánica al juicio.
- **Con qué conecta**: con [[valor-intrinseco]] (el número es un rango, no un punto) y con
  [[margen-de-seguridad]] (si los inputs ya son generosos por defecto, el margen va en el PRECIO que pagas).
- **Dónde choca**: Buffett/Buffettismo dice que el DCF formal sobra ("si necesita Excel, está demasiado
  cerca del límite"); Damodaran responde que la fórmula simple de Buffett ES un DCF mental y que hacer los
  números explícitos evita autoengaños. Segundo orden de la discrepancia: ambos coinciden en lo que importa
  (flujos, durabilidad, precio) y discrepan solo en la herramienta — discutir la herramienta es perder de
  vista el acuerdo.
- **Tensión entre fuentes**: la propia ERP de Damodaran (implícita) presupone eficiencia semi-fuerte del
  mercado, mientras su método de narrativas presupone que el mercado se equivoca a menudo. No es
  contradictorio si se lee bien: el mercado fija el LISTÓN (ERP), el analista busca errores RELATIVOS entre
  narrativa y precio.

## Implicaciones para la cartera (inversor de largo plazo)

1. Antes de comprar nada, escribir la narrativa en tres frases y convertirla en números con los datasets
   (betas y márgenes sectoriales como anclaje de cordura).
2. Recalcular la ERP implícita una vez por trimestre como termómetro de cuánto optimismo descuenta el
   mercado — alimenta [[retornos-esperados]] y el punto de [[ciclos-de-mercado|péndulo]].
3. Para empresas con ingresos en varios países, construir la ERP ponderada por país de origen del beneficio;
   España no es Alemania (5,78% vs 4,23% en enero-2026) aunque comparta divisa.
4. Los datasets son de ENERO: caducan. Actualizar betas/ERP cada año y anotar la fecha junto al número.

## Señales falsables (umbral + horizonte)

| Señal | Umbral | Horizonte |
|---|---|---|
| La ERP implícita S&P cae bajo ~3,5% | dato mensual de Damodaran (ERPbymonth) | dentro de 12 meses: compresión de múltiplos probable ([[expansion-y-compresion-de-multiples]]) |
| Narrativa de crecimiento sin mejora del flujo de caja libre durante 4 trimestres | FCF/ingresos plano o peor con narrativa "transformacional" | revisar tesis al cierre del 4º trimestre |
| Precio que exige >50% de ingresos futuros vs TAM actual (como Anthropic a $2T) | ratio precio/ingresos-actuales >20x | tratarlo como opción, dimensionar posición según [[gestion-de-posiciones]] |

## Páginas relacionadas

[[flujo-de-caja-descontado]] · [[coste-de-capital-wacc]] · [[prima-de-riesgo-y-beta]] ·
[[datasets-damodaran-2026]] (pendiente, la crea hoy otro agente) · [[valor-intrinseco]] ·
[[multiplos-de-valoracion]] · [[valoracion-ciclicas-y-beneficios-negativos]] · [[manuales-de-valoracion]]
