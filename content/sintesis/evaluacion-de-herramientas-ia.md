---
title: "Evaluación de herramientas de IA para el Cerebro (2026-07-30)"
tipo: sintesis
tags: [sistema, herramientas, arquitectura, coste, decision]
fecha: 2026-07-30
---

# Evaluación de herramientas de IA para el Cerebro (2026-07-30)

Registro de una evaluación de 15 herramientas populares de la pila de agentes (LangChain, Airweave,
Ollama, Open WebUI, vLLM…) contra **este** sistema y **esta** máquina. Se escribe para no repetir el
análisis cada vez que aparezca una lista nueva: casi todas las listas de "imprescindibles para IA"
asumen que estás construyendo una aplicación Python con agentes. El Cerebro no lo es.

## Los dos filtros que deciden casi todo

**Filtro 1 — el hardware** (medido el 2026-07-30):

```
Intel Core i5-5250U (Broadwell, 2015) · 8 GB RAM · sin GPU · macOS 12.7.6 · x86_64
```

Sin GPU y con 8 GB, cae por definición todo lo que necesite CUDA (vLLM, Unsloth, ComfyUI, Chandra OCR)
y todo lo que necesite una pila Docker de varios servicios (Airweave, Sim, Langfuse autoalojado).
Un LLM local de 7B cuantizado en esa CPU va a **1-2 tokens/s**: un destilado de 120k caracteres pasa
de segundos a horas. La capa gratuita remota no es solo más barata que la local — es más rápida por
dos órdenes de magnitud.

**Filtro 2 — el orquestador ya existe.** Claude Code *es* la capa que LangChain/LangGraph venden:
subagentes, skills, hooks que deniegan de verdad ([[reparto-de-modelos]]), comandos versionados en
git, MCP, tareas programadas. Adoptar un segundo orquestador en Python significaría reescribir las
12 rutinas y los 6 subagentes en un entorno **ciego a los hooks y al wiki**. Función nueva ganada: cero.

## Veredictos

| Herramienta | Veredicto | Motivo |
|---|---|---|
| LangChain / LangGraph | **NO** | Filtro 2. Duplicaría el orquestador sin acceso a hooks ni al vault |
| LlamaIndex / DSPy / PydanticAI | **NO** | Mismo motivo que LangChain |
| Airweave | **NO** | Docker (Postgres+Qdrant+Redis+Temporal) en 8 GB. Su función ya la cubren [[inventario-de-crudos]], [[concordancia-entidades]] e `index.md` |
| Firecrawl | **YA INTEGRADO** | `scripts/firecrawl.py`, respaldo de pago de `scripts/navega.py` (Playwright) |
| Open WebUI | **NO** | Es una UI de chat. El trabajo aquí no es chatear con modelos: es escribir un wiki. Sin Ollama detrás no aporta nada sobre `destila`/`omniroute` |
| Ollama | **NO (hardware)** | 1-2 tok/s. Su único argumento era poder tocar `perfil/`, pero un modelo de 3B no tiene juicio suficiente para decisiones de cartera: muere por velocidad **y** por calidad |
| HuggingFace Transformers | **PARCIAL** | El paquete `transformers`+torch no (macOS x86 ya casi no tiene ruedas). Sí un modelo de *embeddings* estático (~30 MB, numpy): ver abajo |
| vLLM · Unsloth · ComfyUI | **NO** | CUDA |
| Chandra OCR | **NO** | Es un VLM (GPU). PyMuPDF ya lee los 560 crudos de `raw/` |
| OpenClaw | **NO** | El informe diario ya lo dan las tareas programadas + las rutinas + Gmail MCP |
| Sim | **NO** | Docker; y los flujos ya son comandos versionados en git, más auditables que un canvas |
| AutoGPT · OpenPipe ART · OpenCode | **NO** | Superado, fase equivocada y fuera de dominio, respectivamente |
| Langfuse / Helicone / Phoenix | **NO instalar** | El problema que resuelven (trazabilidad de coste) **sí existe**, pero se arregla en el ledger propio, no montando un servicio con Docker |

## El único hueco real: índice semántico local

Lo único de la lista que apunta a una carencia verdadera es la idea que hay detrás de Airweave
(recuperación por significado), no la herramienta. Hoy, para encontrar "qué páginas hablan de esto
**con otras palabras**" solo hay dos vías: `grep` (exacto, se pierde el sinónimo) o despertar a Claude
(caro). Un índice de *embeddings* estáticos resuelve eso a coste recurrente cero.

Y tiene una propiedad que ninguna capa remota puede tener: **es la única que puede indexar
`perfil/`**, porque los vectores se calculan en el disco y no sale ni un byte a la red. La regla de
que `perfil/` nunca va a Kimi ni a OmniRoute (router exit 4 + hook) no aplica a un cálculo local.

Diseño en `docs/superpowers/specs/2026-07-30-indice-semantico-local.md`. Empieza por una sonda de
viabilidad porque macOS 12 / x86_64 / Python 3.9 es un entorno donde las ruedas modernas fallan a
menudo; si la sonda falla, se abandona sin coste.

## Lección transferible

Cuando llegue la próxima lista de herramientas, las tres preguntas son:

1. **¿La CPU/GPU la aguanta?** (aquí: sin GPU, 8 GB → cae todo modelo local y toda pila Docker).
2. **¿Duplica algo que Claude Code ya hace?** (orquestación, herramientas, memoria, programación).
3. **¿Resuelve un hueco medido, o uno imaginado?** Un hueco medido tiene un ejemplo concreto de algo
   que hoy no puedes hacer o que te cuesta dinero hacer. Sin ese ejemplo, es una herramienta buscando
   un problema.

Relacionado: [[reparto-de-modelos]] · [[estado-del-sistema]] · [[historial-del-cerebro]]
