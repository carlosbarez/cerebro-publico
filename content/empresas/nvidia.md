---
title: "Nvidia (NVDA)"
tipo: empresa
tags: [empresa, semiconductores, gpu, ia, nvidia, cuda, calidad]
fecha: 2026-07-17
fuentes: ["[[nvidia]]"]
---

# Nvidia (NVDA)

Diseñador (fabless) líder de **GPU y aceleradores de IA**; de facto el proveedor de la infraestructura de la
revolución de la inteligencia artificial. Arquetipo de foso profundo por **software (CUDA)** + full-stack, en las
antípodas del commodity de la [[semiconductores-de-memoria|memoria]]. **No está en la cartera de Carlos** (tiene Qualcomm/ASML adyacentes) — candidata de la industria [[semiconductores-logica-y-computo-ia]].
Fuente: Annual Report FY2025 + nota de bróker.

> [!info] Nota de cobertura
> Primer paso desde el AR FY2025 (carta del CEO + highlights). Detalle del 10-K queda en el PDF (181 pp.).

## Financieros FY2025 (año fiscal cerrado en enero 2025)

- **Ingresos: $130,5B (+114% interanual)** — más que duplicó.
- **Beneficio operativo: $81,5B (+147%)**; **BPA $2,94 (+147%)**.
- **Data Center: $115,2B (+142%)** — el 88% del negocio; Q4 $35,6B, con **$11B de Blackwell** (la rampa de
  producto más rápida de su historia).
- **Margen bruto ~75%** (reflejo del foso); opex $16,4B (+45% — inversión disciplinada relativa al crecimiento).
- **Caja operativa $64,1B**; devolvió **$34,5B** al accionista ($33,7B recompras + $0,8B dividendos); $43,2B en
  caja/inversiones.

## El foso: CUDA + full-stack

Nvidia no vende chips, vende **"fábricas de IA"** integradas: GPU (Blackwell) + CPU (Grace) + red
(NVLink/Spectrum-X/Quantum) + software (**CUDA**, NIMs, Nemotron). El foso real es **CUDA** —~20 años de
ecosistema de software sobre el que está escrito el deep learning mundial: cambiarse obliga a reescribir el
stack (coste de cambio altísimo, [[foso-economico]]). Cadencia de roadmap anual **Blackwell → Rubin → Feynman**
que los rivales persiguen sin alcanzar. El cambio de FY2025: la **inferencia superó al entrenamiento** como carga
dominante — demanda más amplia y recurrente (IA agéntica, IA soberana, empresa).

## Tesis y riesgos

- **A favor**: el mejor negocio del ciclo de IA, foso de software difícil de replicar, márgenes y crecimiento
  excepcionales, generación de caja y recompras masivas, liderazgo en cada capa del stack.
- **En contra**: (1) **valoración de la perfección** — el precio descuenta ejecución impecable; a esos múltiplos
  la barra es brutal ([[michael-mauboussin|expectativas implícitas]]). (2) **Concentración de clientes**: los
  hyperscalers (Microsoft, Google, Amazon, Meta) son el grueso de la demanda **y** desarrollan sus propios ASICs
  → cliente y competidor. (3) **Ciclo de capex**: si los hyperscalers digieren la inversión, la demanda se
  frena bruscamente ([[ciclos-de-mercado]]). (4) **Geopolítica**: controles de exportación a China, dependencia
  de **TSMC/Taiwán** para fabricar. (5) Erosión lenta del lock-in de CUDA por AMD/ROCm y ASICs, sobre todo en
  inferencia.

## Cómo valorarla

DCF sobre crecimiento secular **con escenarios de normalización** ([[flujo-de-caja-descontado]],
[[estimacion-del-crecimiento]]) — no extrapolar +100% a perpetuidad. Marco de [[michael-mauboussin]]: ¿qué
descuenta ya el precio? Si el mercado ya paga por una década de dominio sin fisuras, el margen de seguridad es
fino aunque el negocio sea magnífico — la lección [[terry-smith|"don't overpay"]] aplicada a la mejor empresa.

## Encaje con Carlos

Carlos ya cabalga la ola de IA **por eslabones más baratos y cíclicos**: [[semiconductores-de-memoria|Micron]]
(HBM) y ASML (equipo). Nvidia sería la exposición directa al foso, pero al múltiplo de la perfección — y
**concentra** aún más la temática IA que Daniel/CRDSO ya vigila. Marco, no recomendación.

## Nota de análisis 2026-07-17 — Annual Review FY2026 (el dato más reciente)

Ingerido también el AR FY2026 (proxy + 10-K, año fiscal cerrado en enero 2026): **ingresos $215,9B** vs. $130,4B
en FY2025 — **otro +65%**. El crecimiento no se ha frenado: la ola de capex de IA seguía firme en FY26. Esto
**agrava**, no alivia, la tensión de valoración de esta página: cuanto más sube el numerador, más descuenta el
precio una continuación perfecta — y más brutal sería una digestión del capex de los hyperscalers
([[ciclos-de-mercado]], [[michael-mauboussin|expectativas implícitas]]). La calidad del negocio es incuestionable;
la barra que el precio le pone, también.

## Nota de lectura profunda 2026-07-18

Lectura completa del 10-K FY2026 (cerrado 25-ene-2026, 175 pp.). Los titulares ($215,9B, +65%) ya están arriba;
aquí, lo que no se capturó: concentración medible, financiación del ecosistema y una operación que cambia el mapa
de la inferencia.

- **Groq: una "adquisición" disfrazada de licencia.** Dic-2025, Nvidia pagó **$17,0B** ($13B + $4B a un año) por
  una licencia **no exclusiva** de la tecnología LPU de Groq + contrató a sus empleados clave. El 10-K aclara:
  "no se compraron contratos de clientes, productos ni participaciones" — no es M&A legalmente. Contablemente:
  $14,4B de goodwill (por el *workforce*) + $2,5B de intangible. Mismo patrón que Microsoft-Inflection o
  Google-Character.AI: **neutralizar a un competidor** (Groq atacaba justo su punto débil, la inferencia de baja
  latencia) sin clasificarlo como M&A a efectos antitrust. Leer siempre "no equity interests were purchased":
  la sustancia económica puede ser una compra, la forma legal no ([[adquisiciones-fusiones-y-sinergias]]).
- **La concentración de clientes se agrava, y ya está en el balance.** Un cliente directo pasó del 13% (FY24) a
  **22% (FY26)**, otro al 14%. Peor en cuentas por cobrar: **3 clientes = 56%** del saldo a ene-2026 (vs 33% un
  año antes). El riesgo [[foso-economico|cliente-y-competidor]] ya no es solo estratégico: es medible.
- **China: el riesgo ya es un hecho con dato.** Ingreso de China (+HK) **cayó de $25,0B a $19,7B (−21%)** pese al
  +65% del total; el cargo de $4,5B por H20 solo recuperó ~$60M. Lo clave para el 2º orden: el propio 10-K admite
  que estar "efectivamente excluidos" de China **"ayudó a nuestros competidores a construir ecosistemas más
  grandes para desafiarnos globalmente"** — Nvidia describe el mecanismo por el que perder China hoy fortalece a
  Huawei como rival mundial mañana. (Nota: el 76% del Data Center facturado a Taiwán son en realidad clientes
  finales de EE.UU./Europa — la "geografía por sede" es un espejismo de facturación ODM.)
- **Financiación circular del ecosistema, cuantificada.** Las participaciones no cotizadas saltaron de $3,4B a
  **$22,3B** en un año (+$17,4B), con $2,4B de ganancias no realizadas ya en resultados; +$3,5B en garantías a
  *neoclouds* early-stage a cambio de warrants (solo ~20% en escrow). El 10-K dice que NO financia vía deuda a
  clientes "pese a que se le ha pedido" — pero sí vía equity y garantías, con perfil de riesgo similar. Frente a
  [[ciclos-de-mercado]]: si el capex de los hyperscalers se digiere, Nvidia no solo pierde ventas — puede tener
  que **deteriorar sus propias participaciones** en esas mismas empresas (riesgo reflexivo, [[nassim-taleb]]).
- **Compromisos que rigidizan el balance.** **$95,2B** en compromisos de compra a proveedores (obleas, HBM,
  CoWoS), "sustancialmente todos" pagaderos en FY2027 — más que el ingreso anual completo. El pasivo por garantía
  **se duplicó** ($1,3B→$2,8B): el producto pasó de tarjeta a sistema de rack (NVL72), y con él el riesgo de
  ejecución técnica. Nvidia sigue *asset-light* ($6,1B de capex propio) frente al >$1B de sus clientes — **cobra
  el peaje del boom, no pone el ladrillo**: distinción clave para separar el riesgo del ciclo de capex ajeno del
  riesgo del propio negocio al [[flujo-de-caja-descontado|modelar su FCF]].

## Ver también

[[semiconductores-logica-y-computo-ia]] · [[semiconductores-de-memoria]] · [[tsmc]] · [[merck-kgaa]] ·
[[foso-economico]] · [[flujo-de-caja-descontado]] · [[adquisiciones-fusiones-y-sinergias]] ·
[[michael-mauboussin]] · [[nassim-taleb]] · [[ciclos-de-mercado]] · [[terry-smith]] · [[jeremy-grantham]] ·
[[plataformas-tecnologicas-y-publicidad-digital]]
