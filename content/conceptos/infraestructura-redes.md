---
title: "Infraestructura de redes"
tipo: concepto
tags: [concepto, tecnologia, redes, data-centers]
fecha: 2026-08-25
agente: ox-alpha
---

# Infraestructura de redes

El hardware y software que mueve tráfico entre usuarios, centros de datos y dentro de ellos:
switching Ethernet de alta velocidad, routing, y ahora la red como cuello de botella del cómputo
distribuido de IA (este-oeste entre GPUs).

## Posición en el vault

- Caso trabajado: [[arista-networks]] — switching de datos centrado en nube.
- Demanda derivada de: [[hiperscalers]] y el capex de IA.
- Capa inferior física: [[semiconductores-logica-y-computo-ia]].

## Matices

- El foso típico no está en el chip sino en el **software de sistema operativo de red**
  (EOS en el caso de [[arista-networks|Arista]]) y en la integración con los stacks de cada hyperscaler.
