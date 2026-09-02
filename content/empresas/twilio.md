---
title: "Twilio (TWLO)"
tipo: empresa
tags: [empresa, software-infraestructura]
fecha: 2026-08-28
agente: prime-agent
ticker: TWLO
moneda: USD
precio_referencia: 238.37
fecha_precio: 2026-08-27
fuentes: "[\"https://investors.twilio.com/news-releases/news-release-details/twilio-announces-second-quarter-2026-results\", \"https://www.sec.gov/Archives/edgar/data/1447669/000144766926000021/twlo-20251231.htm\", \"https://www.twilio.com/en-us/press/releases/q2-2026-earnings\", \"https://www.twilio.com/en-us/blog/products/signal-2026-product-announcements\", \"https://stockanalysis.com/stocks/TWLO/\"]"
---

# Twilio (TWLO)

## 1. Negocio

Twilio es la principal plataforma estadounidense de comunicaciones en la nube para desarrolladores
(modelo **CPaaS**, *Communications Platform as a Service*). Fundada en 2008 por Jeff Lawson (CEO
hasta 2023; hoy dirige Khozema Shipchandler), cotiza en NYSE como **TWLO** y forma parte del
S&P 400.

Qué vende: **APIs** que abstraen la complejidad de las redes de telefonía globales tras su "Super
Network". Mensajería (SMS/WhatsApp/RCS), voz, email (SendGrid), verificación/2FA (Verify/Authy),
datos de cliente (Segment, CDP) y contact center (Flex). Factura **mayoritariamente por uso**:
el cliente consume mensajes, minutos y eventos y Twilio paga a los operadores por debajo. La
mayor parte del coste de ingresos son tarifas de carriers — Twilio es, en el fondo, un
**distribuidor de telefonía con margen de software**.

Clientes emblemáticos: Uber, Airbnb, Stripe, Shopify, DoorDash. Concentración bajísima: los 10
mayores clientes = 9% de los ingresos. Base fragmentada "long tail" — pero eso también significa
que el agregado es un termómetro macro del gasto digital ([[ciclos-de-mercado]]).

## 2. Economía y foso (moat) — [[foso-economico]]

Tipo: **costes de cambio + capa técnica difícil de replicar**. No es un efecto-red clásico
([[efecto-red]]): es que arrancar Twilio del stack de una app (números, flujos de verificación,
historial, perfiles de Segment) es caro y arriesgado ([[costes-de-cambio]]).

Segundo orden — dónde está la tensión del moat:
- Twilio **no posee la infraestructura física**: sus proveedores (carriers, cloud) tienen poder
  de fijación. Cuando los operadores suben las tarifas A2P, Twilio las traslada pero su margen
  bruto porcentual se comprime (48,9% en FY2025 vs 51,1% en 2024). El foso protege el volumen,
  no necesariamente el margen.
- La competencia no está en startups CPaaS (Vonage/Sinch/Bird) sino en los **cloud majors**
  (AWS, Azure, Google) y en suites CRM (Salesforce) que empaquetan comunicaciones gratis — el
  mismo ataque de bundling que sufre [[zoom]] por parte de [[microsoft]].
- La apuesta de diferenciación es la **capa de conversación IA** (SIGNAL 2026: Conversation
  Orchestrator/Memory/Intelligence): si los agentes de IA van a hablar con clientes por millones
  de canales, alguien tiene que ser la infraestructura de esa conversación. Twilio quiere ser el
  "carril" — posición análoga a la que tiene en SMS desde hace una década.

## 3. Números clave (verificados)

FY2025 (10-K, GAAP, $M) y Q2 2026 (press release 6-ago-2026):

| Concepto | FY2025 | FY2024 |
|---|---|---|
| Ingresos | 5.067 | 4.458 (+7,3%) |
| Margen bruto | 48,9% | 51,1% |
| Resultado de explotación | 158 | (54) |
| Resultado neto | 34 | (109) |
| SBC (stock-based comp.) | ~600 | ~617 |

**Q2 2026 (cerrado 30-jun-2026)** — verificado contra el comunicado:
- Ingresos **$1.499 M, +22% reportado / +17% orgánico** — reaceleración clara (máximo orgánico
  en más de 2 años; Q1 fue +15%).
- Resultado de explotación: $85 M GAAP / $285 M no-GAAP (19%). FCF **$353 M** (récord).
- **DBNER 116%** (vs 108%): la base existente se expande de nuevo.
- Resultado neto GAAP $1.067 M / EPS $6,68 — **inflado por un beneficio fiscal no recurrente de
  $944 M** (liberación de valuation allowance sobre activos fiscales diferidos, ~$5,91/acción).
  EPS no-GAAP real: $1,47.
- Guidance FY2026 elevado: ingresos +18-18,5% reportado / +13-13,5% orgánico; resultado no-GAAP
  y FCF $1.135-1.155 M.
- Balance: caja + valores negociables ~$2,6 B; deuda ~$992 M; **goodwill ~$5,3 B** (riesgo de
  deterioro si Segment/Flex decepcionan).
- Valoración (27-ago-2026): precio $238,37, cap ~$36,6 B, P/E TTM ~31,6x (inflado por lo fiscal),
  forward ~37x, sin dividendo; recompra $2,0 B autorizada (ene-2025), ~$826 M pendientes.

Chequeo: P/E TTM 31,6 × NI TTM ~$1.149 M ≈ $36,3 B ≈ cap declarada ✓. Coherente.

**Conflicto entre fuentes:** una fuente secundaria (Panabee) da capitalización de $17,2 B. La
descartamos: es incompatible con el precio $238 × ~154 M acciones (~$36,6 B) y con el P/E TTM
publicado; parece dato desfasado del primer semestre (la acción cotizaba ~$100 a inicios del
rango de 52 semanas). Queda registrado aquí para no repetir el error.

## 4. Riesgos y red flags

1. **El SBC (~$600 M/año, ~12% de ingresos)**: la rentabilidad GAAP es marginal y el "no-GAAP"
   ignora una dilución real y persistente. La recompra ($319 M en 1S26) apenas compensa. Para el
   accionista de largo plazo, el EPS no-GAAP de Twilio es un espejo amable
   ([[contabilidad-y-calidad-de-beneficios]]).
2. **Dependencia de carriers y cloud:** el mayor coste no lo controla Twilio; este mismo trimestre
   reconoció un cargo por deterioro de activos prepagados de red (~$33 M) por fallos de dos
   proveedores de red — pequeño, pero revela la fragilidad de la cadena.
3. **Usage-based = ciclo macro:** menos consumo digital → menos mensajes → ingresos caen al
   momento. Es un semáforo adelantado de la economía digital, para bien y para mal.
4. **Goodwill $5,3 B** (~55% del patrimonio): Segment se compró por $3,2 B en 2021 y sigue sin
   demostrar la monetización prometida; otro ciclo frío de tech reabriría el debate de deterioro.
5. **Historial de estrategia errática** (despidos 2022 y 2023, activismo, exploración de venta)
   ya superado, pero recuerda que la disciplina de costes es reciente.
6. **Regulatorio/privacidad** fragmentado (GDPR, TCPA, A2P 10DLC) y abuso de la plataforma
   (fraude, smishing) como coste continuo.

## 5. Conexiones

- [[foso-economico]] · [[costes-de-cambio]] · [[efecto-red]] · [[contabilidad-y-calidad-de-beneficios]]
- Pares: [[zoom]] (comunicaciones programables vs. reuniones; ambos sufren el bundling de
  Microsoft), [[salesforce]] (CRM como capa competidora), [[amazon]] y [[microsoft]] (cloud majors
  con CPaaS propio).
- Industria: [[plataformas-tecnologicas-y-publicidad-digital]] · [[industria-ciberseguridad]]
  (verificación/2FA es parte del negocio).

## 6. Qué vigilar (gatillos que cambiarían la tesis)

- **Orgánico >15% sostenido 2-3 trimestres** (Q2 dio +17%): confirmaría la reaceleración y abriría
  re-rating; por debajo de +10% orgánico, la tesis de "crecimiento con FCF" se vuelve "value
  software".
- **Margen bruto:** si cae por debajo de ~47% por tarifas A2P/carriers, el modelo de margen de
  software está en cuestión.
- **DBNER <110%** dos trimestres → la expansión de la base se frena; el crecimiento dependerá
  solo de captación.
- **SBC/ingresos >12%** de nuevo o recompras que no compensen dilución → la "rentabilidad" real
  del accionista sigue siendo ilusoria.
- **Monetización de la capa IA** (ingresos declarados de Conversation/agentes): hoy es narrativa;
  el primer disclosure cuantitativo será el test.
- Evento de liquidez o IPO de Anthropic no aplica aquí, pero sí el de cualquier cambio regulatorio
  de mensajería en EE.UU. (A2P): vigilar reglas de la FCC/CTIA.

## Ver también

- [[zoom]] · [[salesforce]] · [[plataformas-tecnologicas-y-publicidad-digital]] · [[foso-economico]]
