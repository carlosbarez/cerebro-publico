---
title: "Formación IA · Tier A — las 8 fuentes accionables"
tipo: fuente
dominio: ingenieria-agentes
cobertura: completa (8 de 8 documentos)
tags: [ingenieria-agentes, harness, orquestacion, evaluacion, gobernanza]
fecha: 2026-07-29
revisado: 2026-07-29
destilado_por: kimi + omniroute
fuentes: []
---

# Formación IA · Tier A — las 8 fuentes accionables

Página-resumen **consolidada** de los 8 documentos de `raw/Formación IA/` con aplicación directa al harness
del Cerebro (336 pp). Se agrupan en una sola página en vez de una por fuente, igual que las cartas
trimestrales recurrentes ([[cobas-cartas-trimestrales]]): son piezas cortas que se leen juntas y comparten
un único destinatario, [[backlog-de-mejoras-del-sistema|el backlog]]. El fondo teórico está en
[[tier-b-teoria]]; el método y sus límites, en [[formacion-ia-metodo]].

**Cómo leer las citas de esta página.** Cada una pasó por `verifica_destilado.py` contra el crudo. Las del
carril Kimi (`informe`) están verificadas literales; **del carril gratuito no se cita nada**, solo se toma
estructura — en esta tanda solo el 42% de sus citas (54 de 127) resultó literal. Las cifras sí sobreviven en
ambos carriles y van con su atribución comprobada.

---

## 1. Agent Harness Engineering: A Survey (71 pp) — la fuente central

La pieza que organiza toda la zona. Destilada en dos mitades y por dos proveedores distintos (accidente útil:
de ahí sale la comparación medida de [[formacion-ia-metodo]]).

**Tesis.** El objeto de diseño no es el prompt ni el modelo, sino el sistema cerrado que rodea a la
invocación: *«infrastructure quality, not model capability alone, sets the ceiling on real-world agent
reliability»* (§13). Y no es una lista de piezas: *«A harness design should therefore be read as a dependency
structure, not as a checklist of separable components»* (§10).

**Taxonomía ETCLOVG, 7 capas** — el mapa que esta zona adopta: **E**jecución (sandboxes) · **T**ools
(protocolos y selección) · **C**ontexto (memoria corto/medio/largo) · **L**ifecycle (orquestación de uno y de
varios) · **O**bservabilidad (trazas, coste, fiabilidad) · **V**erificación (evaluar resultados y atribuir
fallos) · **G**obernanza (permisos, auditoría, seguridad). Extiende a 7 capas los 6 componentes de Meng et
al. (2026), separando observabilidad y gobernanza como preocupaciones independientes. Mapeada contra nuestro
sistema en [[harness-de-agentes]].

**Evaluación.** Ciclo de 5 etapas (tarea → *readiness* → ejecución controlada con trazas → juicio multinivel
con atribución de fallos → regresión continua), y el cambio de mentalidad:
*«traces are therefore not auxiliary debugging artifacts; they are primary evaluation data»* (§8.4.2).
Cifra del sector: **89% de equipos con observabilidad frente a 52,4% que hacen evaluación offline**
(LangChain, 2026) — el hueco exacto que tenemos nosotros.

**Antipatrones nombrados.** *Context drift* (>100 turnos: el agente repite trabajo, se contradice, pierde el
objetivo) · *Tool overload* (el menú excesivo degrada la **planificación**, no solo el coste) · *Sandbox
escape*. Sobre contexto: *«fitting more tokens into a prompt does not by itself maintain that alignment»*
(§12.2).

**Trilemas (§11).** Coste-calidad-velocidad · capacidad-control · y el **harness coupling problem**: un
cambio local puede degradar el sistema entero, y los *scores* no son atribuibles al modelo sin especificar el
harness. Es el argumento del punto 5 del backlog.

**Cifras (atribución comprobada una a una contra el crudo).**

| Cifra | Quién y sobre qué | Estado |
|---|---|---|
| **84%** menos diálogos de permiso | Anthropic (2025c), sandboxing en Claude Code, preservando seguridad | verificada |
| **26%** más precisión de memoria | Mem0 (2025) en el benchmark LOCOMO, frente a la memoria nativa de OpenAI | verificada |
| **hasta 10×**, **en un solo modelo** | Bölük (2026), formato de la herramienta de edición, 15 modelos probados | el destilado decía "10× en benchmarks de codificación": el crudo dice *up to 10× **for one model***. Matiz recuperado |
| **21,7%** de nombres de paquete alucinados | Spracklen et al. (2025), 576.000 muestras, 16 LLMs open-source (*slopsquatting*) | verificada |
| 17% atiende los diálogos de permiso, 3% los comprende | Felt et al. (2012) | verificada |
| 64-88% de detección de fallos (AgentFixer) | — | **no localizada en el crudo**: no usar |

**Ausencias que el propio survey documenta** (Kim et al. 2026, sobre 128 papers, 51 ataques y 60 defensas):
en 6 agentes reales auditados, control de flujo de información, gestión de identidad y verificación formal
estaban **ausentes en todos**.

---

## 2. Beyond the Strongest LLM: Multi-Turn Multi-Agent Orchestration vs Single-Agent (9 pp)

La fuente más accionable por página de toda la biblioteca, y la que dispara el punto 2 del backlog.
4 modelos votando hasta consenso, sobre GPQA / IFEval / MuSR.

**Los dos resultados.** (a) La orquestación iguala o supera al mejor modelo individual **sin saber cuál es**:
*«The strongest LLM varies by dataset, yet orchestration consistently delivers top-tier accuracy without
prior knowledge of which model is best»* (§4.1) — media 81,2 frente a 80,5 del mejor individual y 64,9 del
peor. (b) Y el aviso, que vale más que el resultado:
*«orchestration often fails despite at least one participating agent producing the correct answer»* — en
GPQA **al menos un agente acertaba el 95,5% de las veces y el consenso se quedó en 87,4%**; en el 31% de los
errores dos o más agentes tenían razón.

**El diseño de la coordinación es la variable.** Enseñar el recuento en curso lleva el efecto primer-voto de
**54,1% a 67,8%** (en un modelo, de 40% a 80%) — el *herding* aparece literal en los logs:
*«has already received the majority of votes and provides comprehensive coverage»* (§4.2). Revelar
identidades produce autovoto (81,0% → 88,4%) y sube los empates (14,1% → 23,2%).

**Lectura para nosotros.** Un comité mal gobernado pierde 8 puntos de precisión que **ya tenía dentro**. Es
el *estimate before discussion* de Kahneman con números, y coincide con la disciplina de proceso de
[[michael-mauboussin|Mauboussin]] que [[consejo-de-voces]] ya predica.

---

## 3. The Last Harness You'll Ever Build (arXiv 2604.21003v3, 7 pp)

Tesis en una ecuación: **«Agent = Model + Harness»**, y *«A raw model is not an agent… it is the system that
makes the model's intelligence useful»* (§2.1). Propone automatizar la ingeniería del harness en dos bucles:
*Harness Evolution Loop* (Worker + Evaluator adversarial + Evolution Agent iterando K pasos) y
*Meta-Evolution Loop*, que optimiza el propio plano evolutivo para converger rápido en dominios nuevos —
*«adapting an agent to a novel domain requires no human harness engineering at all»* (resumen).

**Límite declarado y decisivo**: es marco conceptual, **sin resultados empíricos**, y el propio PDF está
truncado en la fórmula del objetivo. No sostiene ninguna decisión; entra como encuadre.
*(4/4 citas verificadas literales, dos de ellas elididas y comprobadas por tramos.)*

---

## 4. Building Effective AI Agents: Architecture Patterns (Anthropic, 30 pp)

**Fuente de parte**: Anthropic describe patrones para la tecnología que vende, y buena parte de las cifras
son casos de cliente, no resultados medidos. Fue el **documento de control** de la tanda.

**Patrones**, cada uno con su "cuándo no usarlo", que es lo aprovechable: agente único (no, si hace falta
especialización en varios dominios) · flujo secuencial (no, si el proceso necesita retroceder o iterar) ·
flujo paralelo (no, si los agentes deben construir sobre el trabajo del otro) · evaluador-optimizador (no,
si la primera respuesta ya basta o el criterio es subjetivo).

**Cifras verificadas.** Investigación interna de Anthropic: en tareas que exigen perseguir varias
direcciones independientes a la vez, los sistemas multiagente superan al de agente único **en un 90,2%**. Un
caso de cliente reporta ganancias de productividad *«20 to 60 percent»* en memorandos de riesgo crediticio,
recortando un 30% el tiempo de respuesta.

**La regla que da el propio documento**, y que es la regla 1 de esta zona: *«Start simple, scale
intelligently»* y *«Successfully implementing AI agents requires aligning technical complexity with business
value rather than chasing the most sophisticated architecture you can build»*.

---

## 5-8. Las cuatro de contexto (aportan menos, y conviene decirlo)

- **fortiss — AI Engineering (120 pp)**, instituto alemán. Ingeniería de sistemas de IA en la industria:
  ciclo de vida, calidad, MLOps. Encuadre útil, poco específico de agentes con LLM. Destilado en 3 partes por
  la capa gratuita, con **9 de 15 citas no literales** — se toma la estructura, ninguna cita.
- **2026 Agentic Coding Trends Report (18 pp)**. Tendencias de adopción por encuesta. 5 de 11 ítems quedaron
  en PARCIAL o FALLA: es la fuente **menos fiable** de la tanda y solo se usa como indicio de dirección, nunca
  como dato.
- **Anthropic Economic Index — Cadences (33 pp)**. Datos de uso real (5/5 verificado). Lo aprovechable para
  nosotros es marginal pero real: el uso *«mirrors the workweek, with personal prompts spiking on the
  weekend»* y el 93% de conversaciones produce un artefacto identificable. Interés indirecto para pensar la
  **cadencia** de las rutinas programadas.
- **[[salesforce|Salesforce]] — Orchestrating Multiple AI Agents Securely Across Network Domains (48 diapositivas)**.
  **Fuente inservible tal cual**: 12k caracteres para 48 páginas porque son diapositivas de imagen. Su tema
  (federación entre dominios de confianza) está descartado para nosotros en el backlog. Necesitaría OCR para
  valer algo.

## Enlaces

[[ingenieria-de-agentes]] · [[harness-de-agentes]] · [[backlog-de-mejoras-del-sistema]] ·
[[formacion-ia-metodo]] · [[tier-b-teoria]]
