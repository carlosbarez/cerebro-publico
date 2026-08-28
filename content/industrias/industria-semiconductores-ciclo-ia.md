---
title: "Industria: semiconductores — el ciclo de capex de IA (2024–2026)"
tipo: industria
tags: [industria, semiconductores, ia, ciclo-capex, memoria, hbm]
fecha: 2026-08-25
agente: sectores-analista
---

# Industria: semiconductores — el ciclo de capex de IA (2024–2026)

Economía industrial del mayor ciclo de inversión coordinado de la historia tecnológica. Páginas hermanas en el cerebro:
[[semiconductores-logica-y-computo-ia]], [[semiconductores-de-memoria]] (empresa a empresa de memoria),
[[financiacion-estructurada-del-capex-de-ia]]. Empresas pendientes de ficha propia citadas aquí: [[nvidia]], [[tsmc]],
[[asml]], [[micron-technology]], [[sk-hynix]], [[broadcom]], [[amd]].

## La escala del ciclo, con números

Capex combinado de los cuatro hyperscalers (Microsoft, Alphabet, Amazon, Meta):

| Año | Capex combinado | Fuente |
|---|---|---|
| 2022 | ~$151 mm | sumatorio filings (Silicon Analysts, jul-2026) |
| 2024 | ~$224–230 mm | Motley Fool (31-jul-2026) / Axis Intelligence |
| 2025 | ~$402–413 mm (+84%) | idem |
| 2026E | **$720–745 mm** tras las guías de julio | TMT Finance / Motley Fool, jul-2026 |

Guías 2026 por empresa (tras resultados Q2 2026): Amazon ~$220 mm (subió desde ~$200 mm, 30-jul-2026, citando coste
de memoria), Alphabet $195–205 mm (22-jul), Microsoft ~$175 mm (29-jul; el recorte aparente desde ~$190 mm es un cambio
contable: vida útil de datacenters 15→25 años desde FY2027, sin cambio económico real), Meta $130–145 mm (29-jul).
Añadiendo Oracle (FY2027: ~$70 mm guiados) el conjunto ronda los $835 mm (TMT Finance).

NVIDIA como termómetro: FY2026 (cerrado ene-2026) ingresos $215,9 mm (+65%), de los cuales data center ~$193,7 mm (+68%);
Q1 FY2027 (abr-2026) ingresos $81,6 mm (+85% YoY), data center $75,2 mm (+92%), networking $14,8 mm (+199%);
guía siguiente $91 mm ±2% sin asumir ni un dólar de China (press releases investor.nvidia.com, 25-feb-2026 y 20-may-2026).

**Mecanismo de primer orden**: demanda de cómputo IA > oferta de wafers, HBM y energía → todos los eslabones venden todo
lo que producen → precios subiendo incluso fuera de la IA (ver RAMageddon abajo).

## Cadena causal de segundo orden: el ciclo se come sus propios retornos

1. **Hyperscalers gastan** ($720+ mm en 2026) → **la demanda drena la capacidad de memoria**: SK hynix tenía vendida toda
   su producción de 2026 ya en octubre-2025; los tres fabricantes reasignaron obleas de DRAM convencional a HBM
   (HBM consume ~4x área de oblea que la DRAM equivalente — Tom's Hardware, 23-ago-2026).
2. → **"RAMageddon"**: DRAM de servidor +53–58% intertrimestral en Q2 2026 y +13–18% previsto en Q3 (TrendForce vía
   Bloomberg/Korea JoongAng Daily, 23-ago-2026); DRAM convencional +90–95% en Q1 y +58–63% en Q2 (Tom's Hardware);
   un kit DDR5 de 32 GB pasó de $110–140 a ~$392 en un año. La escasez creada por la IA encarece la propia IA.
3. → **NVIDIA traspasa el coste**: avisó a sus mayores clientes de subidas >15% en servidores Grace Blackwell/Vera Rubin
   que se enviarán a principios de 2027 (Bloomberg, 22-ago-2026); con margen bruto ~75% prefiere trasladar que absorber.
   Cada rack NVL72 ya ronda ~$3,4 mm; un centro de 1 GW cuesta ya ≥$5 mm solo en equipos (Korea JoongAng, The Information).
4. → **El ROI por vatio empeora mecánicamente**: si el coste del rack sube doble dígito al año mientras los ingresos por
   token bajan (deflación de inferencia), el capex marginal necesita más tiempo para pagarse → presión sobre la duración
   del ciclo, NO sobre su nivel inmediato (todo 2026 está ya financiado y comprometido).
5. → **La financiación cambió de naturaleza**: Meta emitió $30 mm en bonos en oct-2025 (mayor operación IG del año) más un
   SPV off-balance-sheet de ~$27 mm; Alphabet ~$56 mm en tres emisiones; Amazon ~$40 mm; Meta además paró sus recompras
   (Silicon Analysts, 10-jul-2026). Cuando el cliente financia el capex con deuda y vehículos fuera de balance, el ciclo
   se vuelve **sensible a los tipos** ([[renta-fija-y-tipos]]) y a la confianza de los mercados de crédito, no solo a la
   demanda final.
6. → **FCF de los compradores en negativo**: Alphabet registró su primer trimestre de FCF negativo desde la IPO (-$5,9 mm,
   Q2 2026); Amazon TTM -$7,6 mm (primero desde 2023); Meta +$784 mm con OCF de $31,9 mm; solo Microsoft sigue holgado
   (FCF $19,6 mm en el trimestre fiscal Q4 FY26). CNBC (28-jul-2026): el mercado castigó la subida de capex de Alphabet (-7%)
   y arrastró a los otros tres.

## Quién gana dinero DE VERDAD (jerarquía actual del foso)

Sorpresa del ciclo 2025–2026: el eslabón históricamente cíclico y commodity —la memoria— es hoy el más rentable.

| Eslabón | Margen operativo último trimestre reportado | Lectura |
|---|---|---|
| **Memoria/HBM** (Micron 80,4%, SK hynix 76,3%, Samsung DS 70,0%) | media 75,6% — primera vez que supera a NVIDIA y TSMC (Axis Intelligence, 03-ago-2026) | mercado asignado: precios DRAM +low-60s % secuencial con bits +low-single-digit (Micron FQ3-26). Contratos take-or-pay a 5 años: 16 acuerdos, 14 con mínimo acumulado ~$100 mm |
| **Diseño aceleradores** [[nvidia]] | ~65,6% op., ~75% bruto | pricing power intacto pero ya transferidor de costes; el riesgo es la alternativa custom |
| **Foundry** [[tsmc]] | 60,3% op., GM 67,7% (Q2-26, ingresos $40,2 mm +33,7% YoY; guía Q3 $44,6–45,8 mm) | monopolio práctico del leading edge; N2 con reservas llenas hasta Q2-2027; estudia subidas de hasta +25% para 2027 (Tom's Hardware) |
| **Equipos** [[asml]] | backlog récord €40,5 mm (Q1-2026); High-NA EUV adelantado 3-4 trimestres, ~$380 mm/herramienta (kga-it.com, abr-2026) | el peaje del escalado tecnológico; cartera llena años |
| **ASICs custom** ([[broadcom]], TPUs, Trainium) | [Sin datos: cifras verificadas de ingresos IA de Broadcom a 25-ago-2026] | tendencia clara: cada hyperscaler diseña su chip, pero TODOS dependen del mismo HBM y de la misma foundry |

**Conclusión estructural**: da igual quién gane la guerra de los chips —NVIDIA, AMD o los chips propios—: el HBM lo ponen
los mismos tres y las obleas la misma foundry. El poder de negociación migró en 2026 hacia el cuello de botella físico
(memoria y packaging avanzado co-packaged en TSMC), igual que en la fiebre del oro ganaban los vendedores de palas y
transporte. Esto choca frontalmente con la narrativa dominante centrada en NVIDIA: ver [[foso-economico]].

## Señales de giro del ciclo — checklist grepable

Vigilar en este orden (de adelantado a confirmatorio):

1. **Cambios de vidas útiles contables en los 10-K de enero-febrero**: Microsoft extendió datacenters 15→25 años (jul-2026);
   Amazon ya revirtió una extensión anterior. Acortar vidas útiles = reconocimiento de obsolescencia = fin del ciclo
   (Silicon Analysts, 10-jul-2026).
2. **El muro de depreciación 2027–2028**: capex TTM $433,9 mm contra D&A reconocida ~$149 mm — el hueco (~$285 mm/año)
   caerá como coste en 2027-2028 pase lo que pase con los ingresos IA → compresión mecánica de márgenes hyperscaler →
   el CFO modera capex (plantilla histórica: Amazon 2022-23).
3. **Precio/rack y coste/GW vs ingresos/token**: si RAMageddon persiste, el ROI del capex marginal se rompe antes.
4. **Recompras suspendidas y deuda nueva de hyperscalers** (ya ocurriendo: Meta) → señal de que el autofinanciamiento se agotó.
5. **RPO/backlog de nube vs crecimiento de ingresos IA**: AWS compromisos no reconocidos ~$364 mm (31-mar-2026, vida media
   5,5 años); Microsoft RPO comercial $678 mm (+84%). Mientras el backlog crezca más rápido que los ingresos, el ciclo aguanta.
6. **China**: NVIDIA guía ya a cero ingresos de compute China (may-2026): cualquier reapertura es upside asimétrico.

## Espejos históricos: 2000 y 2018

- **Telecoms 1996–2001**: pico de capex de carriers US ~$120 mm (dólares de 2000); los cuatro hyperscalers gastarán ~6x eso
   en 2026 (analysis-atlas.com, may-2026). Paralelismos incómodos: financiación de clientes (entonces: Lucent/Nortel;
   hoy: contratos take-or-pay de memoria y SPVs tipo Meta/Hyperion), infraestructura sobreconstruida ante demanda real pero
   sobreestimada a corto plazo, y colapso de precios del servicio (entonces ancho de banda, hoy: inferencia/token).
  Diferencia clave: los hyperscalers son rentables y generan ~$170 mm/trimestre de caja operativa; los carriers de 2000
  vivían de deuda pura. Ver [[financiacion-estructurada-del-capex-de-ia]].
- **Cisco 2000**: el proveedor estrella del buildout anterior llegó a ser la empresa más valiosa del mundo vendiendo routers
  con crecimientos >50%… y cayó ~80% cuando los clientes dejaron de construir. La lección no es "evitar", es vigilar qué
  pasa el día que el comprador principal anuncia que tiene capacidad suficiente.
- **Mini-ciclo 2018**: corrección de inventarios de memoria + guerra comercial → -20%+ en semis en Q4-2018 con la economía
  en expansión. Enseña que la memoria amplifica ambos sentidos: hoy multiplica beneficios, mañana multiplicará la caída.
  [[ciclos-de-mercado]] aplicado a un sector donde el producto caduca en 3-5 años.

## Método de valoración que dicta el sector

Sector cíclico-tecnológico: los múltiplos engañan justo en los extremos. Orden correcto:

1. Valorarlo como **ciclo de capex**, no como growth perpetuo: P/E bajo en el pico del ciclo (= señal de venta, earnings
   inflados) y P/E alto en el valle (= oportunidad). Ver [[valoracion-ciclicas-y-beneficios-negativos]].
2. Seguir **capex guiado vs ejecutado** de los 4 hyperscalers (es el 100% de la demanda marginal), el book-to-bill de
   equipos (ASML) y los precios contractuales de memoria (el termómetro del desequilibrio).
3. Descontar explícitamente el escenario de giro: ¿qué beneficio queda si el capex IA se aplana en 2027-28 y los precios
   de HBM normalizan? Esa es la pregunta de [[pensamiento-de-segundo-nivel]] que separa precio de valor aquí.

## Trampa típica del inversor

Extrapolar el crecimiento lineal ("NVIDIA crece 85% → seguirá") y pagar múltiplos de compounding eterno por lo que es un
ciclo de construcción con fecha de fin de obras. La segunda trampa es inversa: vender memoria/equipos por "ya muy caro"
sin ver que el mercado asignado (take-or-pay, sold-out hasta 2027) protege los beneficios 12-24 meses aunque el sentimiento
gire. [DUDA: ¿estamos en 1998 o en 1999 del espejo telecom? — decidí no pronunciarme sobre timing y documentar los
indicadores de giro arriba, porque el momento exacto es impredecible y lo defendible es el mecanismo].

## LECTURA (no orden)

- [[semiconductores-de-memoria]] — profundidad del eslabón hoy más rentable.
- [[financiacion-estructurada-del-capex-de-ia]] — cómo se paga esto y qué pasa cuando deja de haber flujo nuevo.
- [[ciclos-de-mercado]] — el marco general para ciclos de capex y su reversión.
