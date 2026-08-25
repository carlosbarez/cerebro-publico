---
title: "Semiconductores de lógica y cómputo de IA (GPU / aceleradores)"
tipo: industria
tags: [industria, semiconductores, logica, gpu, ia, computo, nvidia, cuda]
fecha: 2026-07-17
fuentes: ["[[nvidia]]"]
---

# Semiconductores de lógica y cómputo de IA (GPU / aceleradores)

La otra mitad del complejo semiconductor, **opuesta en foso** a la [[semiconductores-de-memoria|memoria]]: aquí
el chip **procesa** (no almacena), y el ganador tiene uno de los fosos más profundos del mercado — no un
commodity. Industria abierta en el cerebro (2026-07-17) con el informe anual de [[nvidia]]. **No está en
la cartera de Carlos** directamente (tiene [[qualcomm|Qualcomm]] en diseño móvil, ASML upstream) — se cubre
como industria y candidata.

## Qué es y por qué el foso es profundo (al revés que la memoria)

Lógica = procesadores que ejecutan cómputo: **GPU/aceleradores de IA** ([[nvidia|Nvidia]], AMD), CPU (Intel, AMD, Arm),
**ASICs a medida** (los TPU de [[alphabet|Google]], los chips propios de [[amazon|Amazon]]/Microsoft/Meta). A diferencia de la memoria
—commodity donde el precio lo fija la oferta de bits—, la lógica de IA se diferencia por:

- **Ecosistema de software (el foso real)**: **CUDA** de Nvidia es una plataforma de ~20 años sobre la que está
  escrito el mundo del deep learning. Cambiar de Nvidia a un rival obliga a reescribir/reoptimizar el stack —
  **coste de cambio altísimo** ([[foso-economico]]). El foso NO es el chip, es el software + el ecosistema.
- **Full-stack**: Nvidia ya no vende chips sino "fábricas de IA" integradas (GPU Blackwell + CPU Grace +
  red NVLink/Spectrum/Quantum + software NIMs). Vender el sistema entero sube el foso y el ticket.
- **Cadencia de roadmap**: Blackwell → Rubin → Feynman, un ritmo anual que los rivales persiguen sin alcanzar.

## Estructura de la cadena (quién depende de quién)

Es una cadena vertical, y Carlos ya toca varios eslabones:

- **Diseño** (fabless): Nvidia, AMD, Qualcomm (Carlos ✓) — diseñan, no fabrican.
- **Fundición**: **[[tsmc|TSMC]]** fabrica casi todo lo puntero — cuello de botella y single point of failure geopolítico
  (Taiwán). Nadie con capacidad puntera comparable.
- **Equipos**: **ASML** (Carlos ✓ adyacente) vende la litografía EUV sin la que no hay chip avanzado — se
  beneficia del capex de TODOS ([[semiconductores-de-memoria|ver semis memoria]]).
- **Materiales**: [[merck-kgaa|Merck-Electronics]] (Semiconductor Materials +8,2%) y otros.
- **Potencia y control**: [[infineon]] conecta la electrificacion, la automocion y el suministro electrico de los
  centros de datos de IA; su foso de cualificacion es distinto del foso de software de una GPU.
- **Memoria HBM**: [[semiconductores-de-memoria|Micron/SK Hynix/Samsung]] — la HBM se apila junto a la GPU; el
  auge de IA aprieta la oferta de DRAM. Los dos mundos del semi se tocan aquí.

## KPIs para valorar

- **Crecimiento de Data Center** y mezcla entrenamiento vs. **inferencia** (la inferencia ya superó al
  entrenamiento en Nvidia — demanda más recurrente y amplia).
- **Cuota de mercado en aceleradores de IA** y velocidad de rampa del producto nuevo (Blackwell: $11B en un
  trimestre, la rampa más rápida de la historia de Nvidia).
- **Margen bruto** (Nvidia ~75%, reflejo del foso) y su sostenibilidad ante competencia.
- **Concentración de clientes**: los hyperscalers ([[microsoft|Microsoft]], Google, Amazon, [[meta-platforms|Meta]]) son el grueso de la demanda
  **y** desarrollan sus propios ASICs → cliente y competidor a la vez.
- **Capex de los hyperscalers** (el driver de demanda) y señales de digestión/sobreinversión.
- **Riesgo geopolítico**: controles de exportación a China, dependencia de TSMC/Taiwán.

## Cómo valorarla (y la trampa)

No es una cíclica-commodity como la memoria, pero **tampoco es inmune al ciclo**: la demanda depende del capex de
un puñado de hyperscalers, que puede digerir. Valorar con **DCF sobre crecimiento secular pero con escenarios de
normalización** ([[flujo-de-caja-descontado]], [[estimacion-del-crecimiento]]) — la trampa es extrapolar +100% de
crecimiento a perpetuidad. La pregunta de 2º orden ([[michael-mauboussin|expectativas implícitas]]): ¿qué
crecimiento y qué margen descuenta ya el precio? A múltiplos altos, la barra de ejecución es brutal.

## Foso y banderas rojas

- **Foso**: CUDA/ecosistema (coste de cambio), full-stack, escala de I+D, cadencia de roadmap. Profundo **hoy**;
  la amenaza es que los **ASICs a medida** de los hyperscalers y AMD/ROCm erosionen el software-lock-in con el
  tiempo, sobre todo en inferencia (más estandarizable que el entrenamiento).
- **Banderas rojas**: concentración extrema de clientes (los hyperscalers), capex procíclico (si sobreinvierten,
  digestión brusca), competencia interna (clientes = rivales), controles de exportación, y **euforia de
  valoración** — la concentración de la IA en pocos nombres preocupa a [[jeremy-grantham]]/[[james-montier]].

## Las dos caras hoy

- **Alcista**: cambio estructural del cómputo hacia IA (inferencia > entrenamiento, IA agéntica, IA soberana);
  foso CUDA intacto; Nvidia diseña la infraestructura de la revolución. Capex de IA firme (ASML sube guía).
- **Bajista**: valoraciones que descuentan perfección; dependencia de un capex concentrado que puede digerir
  ([[ciclos-de-mercado|péndulo de Marks]]); ASICs propios erosionando el foso; concentración de índice
  ([[jeremy-grantham]]); riesgo Taiwán/China.

## Voces y encaje con Carlos

- **Conceptos**: [[foso-economico]] · [[flujo-de-caja-descontado]] · [[estimacion-del-crecimiento]] ·
  [[creacion-de-valor-y-eva]] · [[ciclos-de-mercado]].
- **Voces**: [[warren-buffett]]/[[terry-smith]] (¿foso durable o temporal?) · [[jeremy-grantham]]/[[james-montier]]
  (concentración/burbuja de IA) · [[michael-mauboussin]] (expectativas implícitas en el precio) ·
  [[howard-marks]] (¿dónde está el péndulo?).
- **Encaje**: Carlos ya está expuesto al capex de IA **por el lado del equipo/materiales** (ASML) y de la
  **memoria** (Micron/HBM) — más barato y cíclico que la GPU. Nvidia sería la exposición directa al foso, pero al
  múltiplo de la perfección. Cruce clave: los tres —Micron, ASML, Nvidia— cabalgan la MISMA ola de capex de IA;
  concentración temática a vigilar por [[equipo-agentes|Daniel/CRDSO]].

## Ver también

[[mapa-de-industrias]] · [[semiconductores-de-memoria]] · [[plataformas-tecnologicas-y-publicidad-digital]] ·
[[nvidia]] · [[merck-kgaa]] · [[asml]] · [[screening-de-calidad]]

## Red de conexiones

- El foso de la lógica no elimina el riesgo de concentración: la demanda depende de [[alphabet]], [[amazon]], [[meta-platforms]] y [[microsoft]], y su financiación se analiza en [[financiacion-estructurada-del-capex-de-ia]].
- La cadena física pasa por [[tsmc]], [[asml]], [[merck-kgaa]], [[infineon]] y [[semiconductores-de-memoria]]; la escasez de un eslabón puede desplazar el poder de captura a otro.
- El coste energético y la capacidad de conexión son parte del retorno del sistema: [[red-electrica-y-capex-de-ia]] y [[mineria-industrial-y-energia]].
- La valoración exige [[flujo-de-caja-descontado]], [[coste-de-capital-wacc]], [[michael-mauboussin]] y [[tensiones-activas]]: foso profundo no equivale a precio razonable.
