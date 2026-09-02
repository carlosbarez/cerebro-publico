---
title: "Estado del sistema — semana del 2026-08-30"
tipo: sintesis
tags: [meta, mantenimiento, estado]
fecha: 2026-08-30
agente: mantenimiento-semanal
---
# Estado del sistema — semana del 2026-08-30

## Rutinas
| Rutina | Último run | Estado | Nota |
|---|---|---|---|
| cerebro-ingesta-diaria-newsletters | 2026-08-27 | 🟡 | deshabilitada, 3 días |
| cerebro-ingesta-diaria-youtube | 2026-08-27 | 🟡 | deshabilitada, 3 días |
| cerebro-cio-elisa | 2026-08-27 | 🟢 | L (próximo: 2026-08-31) |
| cerebro-analista-fundamental | 2026-08-26 | 🟡 | deshabilitada, 4 días |
| cerebro-analista-tecnico | 2026-08-29 | 🟢 | V (próximo: 2026-09-01) |
| cerebro-analista-estrategico | 2026-08-27 | 🟢 | L (próximo: 2026-08-31) |
| cerebro-crdso-riesgo | 2026-08-27 | 🟢 | L (próximo: 2026-08-31) |
| cerebro-veredicto-semanal | 2026-08-24 | 🟡 | DOM, 6 días (corre hoy 18:04) |
| cerebro-gestor-cartera | 2026-08-01 | 🟢 | mensual (próximo: 2026-09-01) |
| cerebro-sintetizador-durable | 2026-08-29 | 🟢 | S (ayer) |
| cerebro-mantenimiento-semanal | 2026-08-30 | 🔴 | MUERTO POR LÍMITE SEMANAL 07:37 |
| cerebro-cko-conocimiento | 2026-08-27 | 🟡 | deshabilitada, 3 días |

## Salud del wiki
- Enlaces rotos: 1458 (mayormente años y síntesis autogeneradas)
- Frontmatter inválido: 24 (actualidad/, URLs sin comillas)
- Memorias sin formato: 8 (todas; migración Fase 4 pendiente)
- **Mappings rotos: 23 de 24 destinos** (conceptos no materializados en wiki)
- Marcas pendientes: [Sin datos] 420 · [DUDA] 31 · [ESCALAR] 55 · [Sin acceso] 8 · sin verificar 393
- Verificación adversarial: CONFIRMADO 722 · REFUTADA/DÉBIL 639 (47%)
- Límite de sesión (7 días): 41 runs afectados
- **Worktrees zombis: 2 (2.6 GB c/u)** — proposición pendiente
- **Cola ingesta: 292 items** (🔴 >20)

## Acciones tomadas este run
- Ninguna

## Para Carlos / para la CIO
- 🔴 **CRÍTICO: 2 runs mantenimiento muertos por límite semanal** (2026-08-24 07:29 · 2026-08-30 07:37). Cuota consumida por interactiva (68% de $900). Análisis incompleto.
- 🔴 **3 rutinas superan presupuesto 2+ semanas**: fundamental (120%) · estrategia (134%) · riesgo (123%)
- 🔴 **41 runs con límite de sesión esta semana** (≥2 threshold, reglas-nucleo § Disciplina de coste)
- 🟡 Verificación adversarial: 47% REFUTADA/DÉBIL (revisar umbral)
- 🟡 Kimi capa media: 9 ok vs. 41 caídas (W35)
- 🟡 Tests timeout (2m, interrumpido)
- [DEGRADADO: destila --tipo semaforo exit 1]
