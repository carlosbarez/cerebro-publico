---
title: "Ingeniería de agentes — hub de la zona"
tipo: concepto
dominio: ingenieria-agentes
tags: [ingenieria-agentes, harness, orquestacion, meta, sistema]
fecha: 2026-07-29
revisado: 2026-07-29
fuentes: []
---

# Ingeniería de agentes — hub de la zona

**Qué es esta zona y por qué está separada.** Todo el resto del wiki es conocimiento *sobre inversión*.
Esta zona es conocimiento **sobre el Cerebro mismo**: cómo se construye, se orquesta, se evalúa y se
abarata un sistema multiagente como el que ejecuta las 12 rutinas de [[equipo-agentes]]. Es la primera
capa del vault cuyo objeto de estudio es el propio vault.

Vive aparte de `conceptos/` a propósito: mezclar `margen-de-seguridad` con `orquestador-trabajador` en el
mismo índice ensucia el catálogo y el graph view de Obsidian, y son dos cuerpos de conocimiento que nunca
se citan entre sí. Se distingue en Dataview por `dominio: ingenieria-agentes`, no por un `tipo` nuevo — el
esquema de `tipo` sigue siendo el de siempre.

## Estructura

- **`ingenieria-agentes/`** — conceptos de ingeniería: patrones de orquestación, ingeniería de contexto,
  memoria de agente, evaluación, coste. Una página por concepto, misma convención que el resto del wiki.
- **`fuentes/formacion-ia/`** — una página por documento ingerido de la biblioteca.
- **[[formacion-ia-metodo]]** — método, carriles de destilado, límites de la biblioteca y la red de
  verificación con lo que se midió en el documento de control. **Leer antes de usar cualquier cifra de
  esta zona.**
- **[[backlog-de-mejoras-del-sistema]]** — el producto que justifica todo lo anterior: qué se propone
  cambiar en el Cerebro, con su contrapartida y su señal de acierto.

## Las dos reglas de la zona

1. **Un patrón no entra por elegante, entra por hueco.** El material describe sistemas de empresa con
   decenas de agentes y tráfico de producción; el Cerebro es un vault local de un solo operador, sin
   remoto, con presupuesto de tokens como restricción real. La mitad de los patrones (federación de
   agentes entre dominios de red, colas de mensajes duraderas, teoría de juegos para negociación entre
   agentes) resuelven problemas **que aquí no existen**. Importar uno de esos es añadir complejidad y
   llamarlo mejora. Cada propuesta del backlog tiene que nombrar el fallo concreto que hemos visto en
   nuestro sistema, no el que el paper describe en el suyo.
2. **El agente propone, Carlos aprueba.** Esta zona toca `reglas-nucleo.md`, skills, hooks y el reparto de
   modelos: la configuración que decide cómo se comporta el Cerebro. El destilado y el backlog los escribe
   el agente; los cambios de configuración los autoriza Carlos, uno a uno. Es el mismo reparto que el
   límite ético establece para las decisiones de inversión, aplicado al sistema:
   analizar y proponer es del agente, decidir es de Carlos.

## Estado

- **2026-07-29 · tanda 1** — zona creada. 16 PDFs / 3.169 pp de `raw/Formación IA/` ([[tier-a-accionable|Tier A accionable]] +
  Tier B teórico), destilados en 36 fragmentos por los carriles `informe` (Kimi) y `tecnico` (OmniRoute,
  gratuito). Herramientas nuevas del flujo: `--tipo tecnico` en `destila` y `scripts/verifica_destilado.py`.
  Producto: **puntos 1-9 del backlog, los 7 propuestos aplicados** el mismo día.
- **2026-07-29 · tanda 2** — 16 documentos del blog de ingeniería y la documentación de Anthropic (327k
  caracteres), carril `informe`. Páginas: [[anthropic-orquestacion-y-harness]] ·
  [[anthropic-evaluacion-herramientas-y-permisos]] · conceptos [[evaluacion-de-agentes]] e
  [[ingenieria-de-contexto]]. Producto: **puntos 10-16 del backlog, pendientes de decisión**. Dos reglas
  propias de esta tanda, autorizadas por Carlos: **cero citas procedentes del destilado** (se recuperan del
  crudo y se comprueban por `grep`) y **sección obligatoria de interés del emisor**, porque es material de
  la empresa que fabrica el modelo que ejecuta este vault.

Carlos irá añadiendo más material.
