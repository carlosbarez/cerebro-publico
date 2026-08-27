---
title: "Tesis: Advanced Micro Devices (AMD)"
tipo: tesis
tags: [tesis, semiconductores]
fecha: 2026-08-24
agente: carlos
ticker: AMD
moneda: USD (verificada en todas las cotizaciones consultadas; NASDAQ)
precio_referencia: 458.75
fecha_precio: 2026-08-24
valor_estimado: ~415 USD (ponderado de escenarios, ver §6)
gatillo_entrada: ≤290 USD (margen de seguridad ≥30% sobre el valor ponderado)
veredicto: VIGILAR
revisar_el: 2026-11-24
---
# Tesis: Advanced Micro Devices (AMD)

## 1. Negocio

AMD vende procesamiento de cómputo en cuatro frentes: CPUs EPYC para servidores (~29% del TTM), CPUs Ryzen para PC
(~29%), aceleradores Instinct/Radeon para IA y gráfico, y embebidos/semi-custom. Diseña pero no fabrica ([[tsmc]]).
El dinero del futuro inmediato es el Data Center ($6,7B en Q2'26, +107% interanual, 58% de los ingresos): EPYC +
Instinct dentro de sistemas rack completos (**Helios**, $5–5,5M por rack, envíos desde fin Q3'26). No es un negocio
simple de separar: el margen del segmento IA en rampa y su mezcla con CPU no se publican con claridad — y esa
opacidad importa para valorarlo.

## 2. Industria — [[semiconductores-logica-y-computo-ia]]

Economía de ganador-casi-todo: [[nvidia]] tiene >95% del mercado de GPU de data center (estimación Futurum/CNBC,
jul-26); AMD ~4,5%. KPIs del sector: cuota en aceleradores, GW comprometidos por cliente, $/rack y «tokens por
dólar» como métrica de precio-rendimiento; cadencia anual de producto obligada. La demanda la fijan ~10 clientes
(hyperscalers y laboratorios de IA) que ciclan capex gigantesco → la industria dicta valoración por **PER forward**
sobre un EPS que se cree exponencial, con EV/ventas transicional mientras el beneficio madura.

**Trampa típica**: confundir compromiso anunciado con ingreso. El libro de AMD son ~14 GW «up to» (OpenAI 6,
Meta 6, Anthropic 2) — sin contrato total publicado, condicionados a hitos, y con clientes cuarta-fuente que
compran por diversificar, no por lealtad. TAM ≠ backlog ≠ ingresos ≠ margen ([[ciclos-de-mercado]]).

## 3. Moat — [[foso-economico]]

AMD **no** tiene el foso CUDA de Nvidia; tiene otro más raro: ser el **multi-sourcing natural**. Tras la escasez
de 2022-24, todo comprador grande de cómputo quiere segunda fuente — Meta, OpenAI, [[microsoft|Microsoft]], Oracle, Anthropic
firmaron con AMD precisamente para no depender de una sola empresa. Eso da demanda estructural… y techo de precio:
un proveedor elegido por diversificación nunca tendrá el poder de fijación del incumbente (bruto 56% non-GAAP vs.
~75% NVDA). Fosos secundarios reales: franchise EPYC en servidores (Lisa Su: hasta 2 CPUs por GPU en cargas
agénticas — el contenido CPU crece con la IA), chiplets + relación preferente con TSMC, y ROCm cerrando brecha con
ayuda de Anthropic/Claude.

- ¿Aguanta 10 años? Como nº2 rentable, probablemente sí. Como destructor de CUDA, no está demostrado.
- Quién lo destruiría: (1) Nvidia bajando precios o integrando rack+red+software tan bien que la 2ª fuente no
  compense; (2) ASICs custom (TPU/[[broadcom|Broadcom]], Trainium) comiéndose la inferencia a gran escala — el mismo cliente
  que AMD corteja es quien fabrica sus propios chips; (3) fracaso propio de ejecución Helios/ROCm; (4) geopolítica:
  fabrica en Taiwán y ya sufrió el cargo export de $800M (MI308 a China, Q2'25).

## 4. Financieros

Calidad del beneficio, interpretada: el apalancamiento operativo es enorme (ingresos +50%, opex +32% → margen
operativo non-GAAP del 12% al 27% en un año), y la conversión FCF/beneficio del 131% es sana. Peros medibles:
(a) el GAAP TTM lleva ~$850M de plusvalías no realizadas por inversiones — beneficio algo inflado por marcas;
(b) SBC de ~$1,9B/año y dilución neta (+1% acciones): el beneficio por acción crece menos que el beneficio;
(c) ROIC 9,8% aún bajo el coste de capital — la tesis entera es que esto converge vía mezcla IA; si el ciclo se
frena antes, la cuenta no cierra; (d) giro reciente hacia **financiar a sus propios clientes** ($5B a Anthropic,
deuda nueva de $4,75B): mismo patrón reflexivo documentado en la página de [[nvidia]] — si el capex de IA se
digiere, AMD puede acabar deteriorando participaciones en quienes dejaron de comprarle ([[nassim-taleb]]).

## 5. Directiva y *capital allocation*

Lisa Su (CEO desde 2014) es la mejor prueba activa de que un turnaround técnico puede crear cientos de miles de
millones: de casi quiebra a retador sistémico. Credibilidad de guía alta (cumplió H1'26). Pero el allocation
reciente prioriza **crecimiento comprado** sobre devolución al accionista: I+D +32%, tuck-in Taalas (ago-26),
$5B comprometidos a Anthropic, deuda nueva de $4,75B… mientras las recompras (~$1,2B TTM) ni cubren la SBC.
Los warrants a clientes son la pieza incómoda: hasta ~20% del capital prometido a OpenAI/Meta si cumplen hitos —
el accionista minoritario financia el crecimiento con dilución encubierta.

## 6. Valoración por escenarios

Anclas verificadas: EPS TTM GAAP $3,90; EPS NTM consenso implícito ≈ $10,77 (forward P/E 42,6 a $458,75);
consenso 3 años +73%/año de EPS. Escenario propio a cierre-2028 (modelación mía sobre esas anclas, no cifras de
la empresa):

| Escenario | Prob. | Supuesto clave | EPS'28 | Múltiplo salida | Precio | Contribución |
|---|---|---|---|---|---|---|
| Pesimista | 30% | Digestión del capex IA + retraso Helios + China cerrada | $9 | 22× | $200 | $60 |
| Base | 45% | Primeros GW desplegados a tiempo; márgenes suben sin sorpresas | $14 | 30× | $420 | $189 |
| Optimista | 25% | ROCm paridad práctica; 2ª fuente consolidada; agentic dispara EPYC | $19 | 35× | $665 | $166 |

**Valor ponderado ≈ $415 vs. precio $458,75 → margen de seguridad ≈ −9% (negativo)**. Negocio magnífico en
momento perfecto; precio que ya paga el escenario base. Entrada interesante solo con descuento ≥30%: **≤$290**
(zona además cercana a la media de 200 sesiones, $331).

## 7. Riesgos y red flags

1. **Valoración de la perfección**: PER TTM 120×, EV/FCF 91×; consenso exige +73%/año de EPS tres años seguidos.
2. **Dilución encubierta**: warrants OpenAI/Meta (hasta ~20% del capital) + SBC > recompras.
3. **Circularidad**: AMD invierte equity/caja en sus clientes y emite deuda para ello; riesgo reflexivo si el
   ciclo gira ([[ciclos-de-mercado]], [[nassim-taleb]]).
4. **Geopolítica bidireccional**: export controls ya costaron $800M (Q2'25) y excluyen la guía; y una China
   cerrada fortalece a Huawei como rival global (mismo mecanismo que admite el 10-K de Nvidia).
5. **Cliente = competidor**: hyperscalers y labs diseñan sus propios aceleradores.
6. Técnico: beta 2,49, −21,5% desde máximos de julio; volatilidad brutal alrededor de resultados (−17% feb-26,
   +18,6% may-26).

## 8. Contraste con postura previa

Sin postura previa. Página nueva (ficha + tesis creadas hoy).

## 9. Veredicto propuesto: VIGILAR

Empresa de altísima calidad técnica en el sitio correcto de la ola de IA, pero a precio que no deja margen de
seguridad (−9%). Condiciones que lo cambiarían a COMPRAR (decide Carlos):
- **Precio ≤$290** sin deterioro del caso base, o
- **Reanclaje al alza del escenario base**: confirmación en resultados Q3/Q4'26 (nov-26/feb-27) de despliegues
  OpenAI/Meta/Oracle a tiempo con margen bruto non-GAAP ≥54% sostenido durante la rampa Helios.

## 10. Qué invalidaría esta tesis

- Primer GW de Instinct MI450 para OpenAI **no instalado a 31-mar-2027** (compromiso público: H2 2026).
- Margen bruto non-GAAP **<50% dos trimestres consecutivos** durante la rampa Helios.
- Cancelación o recorte material (>1 GW agregado) en los compromisos de OpenAI/Meta/Anthropic, o evidencia de
  doble pedido (*double ordering*).
- Ejercicio de warrants que lleve la dilución potencial (>320M acciones ≈ ~20%) sin recompra compensadora.
- Crecimiento interanual de Data Center **<25% dos trimestres seguidos** (hoy +107%).
- Nuevo endurecimiento export que recorte >$500M anuales de ingresos reconocibles.

## 11. Predicciones falsables

| Predicción | Umbral | Fecha verificación | Probabilidad |
|---|---|---|---|
| Ingresos FY2026 ≥ $47.000M (H1 $21.789M + guía Q3 $13.000M ⇒ Q4 ≥ ~$12,2B) | ≥$47B | resultado FY26 (feb-27) | 75% |
| Primer GW OpenAI operando en H2 2026 según lo comprometido | racks instalados | 31-dic-2026 | 60% |
| Margen bruto non-GAAP ≥54% en Q3'26 pese a la rampa Helios (la CFO avisó presión) | ≥54% | reporte Q3 (~2-nov-26) | 55% |
| Data Center sigue creciendo >50% interanual en Q3'26 | >50% | reporte Q3 (~2-nov-26) | 80% |

Si fallan dos o más de las dos primeras, el escenario pesimista gana peso y la tesis VIGILAR se convierte en EVITAR
al precio vigente.

## Ver también

[[amd]] · [[semiconductores-logica-y-computo-ia]] · [[nvidia]] · [[tsmc]] · [[semiconductores-de-memoria]] ·
[[foso-economico]] · [[ciclos-de-mercado]] · [[flujo-de-caja-descontado]] · [[michael-mauboussin]] · [[nassim-taleb]]
