---
title: "Cloudflare (NET)"
tipo: empresa
tags: [empresa, infraestructura-internet, ciberseguridad]
fecha: 2026-08-28
agente: prime-agent
veredicto: OBSERVAR
valor_estimado: Sin datos (EV/Ventas ~39x; sin target de precio en informe)
gatillo_entrada: Margen bruto estable >70% + pullback a EV/Ventas <30x (~$240-250).
ticker: NET
moneda: USD
fuentes: "[\"https://www.cloudflare.com/press/press-releases/2026/cloudflare-announces-second-quarter-2026-financial-results/\", \"https://www.sec.gov/Archives/edgar/data/1477333/000147733326000016/cloud-20251231.htm\", \"https://cloudflare.net/files/doc_financials/2026/q2/Q2-2026-Cloudflare-Investor-Presentation.pdf\", \"https://siliconangle.com/2026/08/06/cloudflare-shares-jump-18-revenue-beat-raised-full-year-outlook/\", \"https://blog.cloudflare.com/voidzero-joins-cloudflare/\", \"https://stockanalysis.com/stocks/net/\"]"
---

# Cloudflare (NET)

## 1. Negocio

Cloudflare opera la *"Connectivity Cloud"*: una red global unificada (330+ ciudades, 125+ países,
13.000+ interconexiones) que entrega seguridad, rendimiento y fiabilidad a aplicaciones web y APIs,
y sobre la que los clientes **construyen y ejecutan** software (serverless en el edge, y crecientemente
cargas de IA). Cotiza en NYSE (NET) desde 2019. Ejercicio fiscal = calendario.

Modelo: SaaS de suscripción con *land-and-expand*. El tier **gratuito masivo** es el embudo de
adquisición; planes Pro/Business para PyMEs; contratos Enterprise con compromisos anuales.
~73% de ingresos de clientes "grandes" (>100k USD de ARR; 4.698 al T2 2026). Un único segmento
reportable con cuatro familias de producto: Application Services (CDN, DDoS, WAF), SASE/Zero
Trust (Cloudflare One), Developer Platform (Workers, R2, Workers AI, Agents, Mesh) y consumo (1.1.1.1).

**En segundo orden**: Cloudflare está apostando a que la reescritura del tráfico web hacia
máquinas (agentes de IA, answer engines, commerce agéntico) pasa por su red — infraestructura,
controles de acceso de bots, herramientas de despliegue y "rails" de pago. La compra de VoidZero
(Vite, el estándar de facto del tooling web) es la pieza más reveladora: no compra ingresos,
compra el *punto de entrada* de las aplicaciones que la IA genera. Si el código de producción pasa
a escribirse por agentes, quien controle el camino del código a producción captura el flujo.

## 2. Economía y foso (moat) — [[foso-economico]]

Tipo: **efecto red físico + economías de escala en coste unitario + coste de cambio por stack**.

1. **La red ES el foso**: replicar PoPs en 330 ciudades y 13.000 interconexiones cuesta años y
   miles de millones. Más tráfico → mejor rendimiento y menor coste unitario de ancho de banda
   ([[efecto-red]] aplicado a infraestructura física, no solo a usuarios).
2. **Freemium como ventaja de coste de adquisición**: decenas de miles de dominios gratuitos
   financian el pipeline enterprise que nadie ve venir.
3. **Convergencia seguridad + edge + developers en un plano de control**: pocos rivales cubren
   CDN, WAF/DDoS, SASE y serverless en una sola red programable.
4. **Stickiness de stack**: una vez el cliente corre Workers/R2/Durable Objects, migrar es reescribir
   aplicaciones ([[costes-de-cambio]]).

Límite del foso: los [[hiperscalers]] (AWS, Azure, Google) empaquetan funciones equivalentes "gratis"
con el cloud, y Akamai/Zscaler aprietan por los flancos. El foso es ancho en developers y edge,
más estrecho en SASE puro.

## 3. Números clave

- **T2 2026** (verificado contra el press release 6-ago-2026): ingresos **$696,1M, +36% YoY**
  (reaceleración desde +30% en FY2025); margen bruto GAAP 71,8% (−3,1 pp YoY, compresión por mix
  e inversión en IA); pérdida operativa GAAP $205,7M (incluye **$150,7M de reestructuración**,
  recorte ~20% de plantilla); operativa no-GAAP $96,1M (13,8%); pérdida neta GAAP $170,0M;
  FCF **$56,4M** (8% margen); Current RPO **+35% YoY**.
- **FY2025 (10-K)**: ingresos $2.167,9M (+29,8%), pérdida neta GAAP $102,3M, FCF $260,6M (12%),
  caja + AFS ~$4.101M vs convertibles ~$3.265M (0%) → caja neta positiva.
- **Guía FY2026 elevada** (verificada): ingresos **$2.864-2.870M** (~+32%), op. no-GAAP
  $443-445M, EPS no-GAAP $1,25-1,26.
- Mercado (ago-2026, según ficha, [Sin verificar]): capitalización ~$107-112B, EV/Ventas 2026
  ~39x, acción ~$305-315 tras máximos de ~$332.

## 4. Riesgos y red flags

- **Valoración deja cero margen de error**: ~39x ventas 2026 para una empresa con pérdidas GAAP
  crecientes ([[expansion-y-compresion-de-multiples]] en estado puro — la acción ya cotiza el
  escenario "Agentic Internet funciona").
- **Pérdidas GAAP persistentes**: la empresa proyecta rentabilidad GAAP "más tarde en 2028"; SBC
  alta diluye y la brecha GAAP/no-GAAP es el mayor red flag contable (el no-GAAP "rentable" excluye
  justo el coste que diluye al accionista).
- **Compresión de margen bruto**: 77,3% (2024) → 74,5% (2025) → 71,8% (T2 2026). La inferencia de
  IA en el edge cuesta GPU y energía; si el mix AI no monetiza a margen, el modelo de gross margin
  software se erosiona.
- **Reestructuración de ~20% de plantilla** ("agentic AI-first"): ahorro potencial, pero riesgo de
  ejecución y fuga de talento clave en mitad de la apuesta de producto.
- **China vía JD Cloud**: dependencia de un único socio para la red China ([[geopolitica-del-computo]]).
- **Deuda convertible 0%** (~$3,27B): financiación casi gratuita, pero el vencimiento 2026
  ($1.291M corriente) y las conversiones diluyen.
- **Estructura dual-clase**: control de voto concentrado en los fundadores — gobernanza de
  minoritarios limitada.

## 5. Conexiones

- Competencia/pares: [[akamai-technologies]] (CDN/seguridad), [[zscaler]] (SASE), [[crowdstrike]],
  [[okta]] (identidad), [[datadog]], [[snowflake]] (carga de datos), [[cloudflare]] vs [[hiperscalers]]
  (concepto).
- Conceptos: [[efecto-red]], [[foso-economico]], [[costes-de-cambio]], [[ia-agentic]] (la tesis
  entera), [[infraestructura-redes]] (pendiente), [[infraestructura-centros-de-datos]],
  [[economia-unitaria]] (freemium→enterprise), [[expansion-y-compresion-de-multiples]],
  [[geopolitica-del-computo]] (China, export controls), [[ciberseguridad]].
- Industria: [[industria-ciberseguridad]] (existe), [[semiconductores-logica-y-computo-ia]]
  (demanda de GPU para Workers AI).

## 6. Qué vigilar

1. **Margen bruto**: si cae por debajo de ~70% en 2026-2027, la tesis de "software con foso físico"
   se degrada a "proveedor de infraestructura con capex creciente".
2. **Sostenibilidad del +36%**: Current RPO +35% sugiere que sí; si el crecimiento vuelve a ~25%
   con este múltiplo, la corrección será violenta.
3. **Rentabilidad GAAP**: hitos hacia el objetivo 2028; si se retrasa con SBC creciente, alerta.
4. **Adopción agéntica real**: ingresos de Workers AI/AI Gateway/Agents en las métricas de grandes
   clientes; hoy es narrativa, mañana debe ser línea de ingresos.
5. **Convertibles 2026**: gestión de los $1.291M vencidos (pago en caja vs. dilución).
