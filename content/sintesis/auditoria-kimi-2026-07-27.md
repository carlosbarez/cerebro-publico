---
title: "Auditoría Kimi 2026-07-27 — revisión completa del Cerebro y su ejecución"
tipo: sintesis
tags: [sistema, auditoria, infraestructura, coste, monetizacion]
fecha: 2026-07-27
revisado: 2026-07-27
fuentes: []
---

# Auditoría Kimi 2026-07-27 — revisión completa del Cerebro y su ejecución

Auditoría integral pedida por Carlos (conocimiento, agentes, rutinas, subagentes, modelos, costes),
comparada con la auditoría que Claude hizo el mismo día, y **ejecutada** en la misma sesión tras su
aprobación. Tres subagentes de exploración: infraestructura `.claude/`, capa de conocimiento `wiki/`
(~400 páginas) y pipeline de modelos/rutinas/costes.

## Comparación con la auditoría de Claude

Solapamiento grande en el núcleo (router `destila` como punto único, colapso de capas, ledger que mide
de verdad, fallos silenciosos del gate de cuota de Kimi). Lo que **cada uno vio y el otro no**:

- **Claude vio**: el gate de cuota roto que mantuvo a Kimi muerto 4 días (23→27-jul), la carrera del
  vigía en `kimi_con_limite` (la arregló; quedaba un residuo que se cerró en esta sesión), y ejecutó el
  colapso de capas entero.
- **Kimi vio**: la duplicación `briefing-diario` vs ingesta-newsletters, el backup incompleto de
  `.claude/`, el log.md 3× sobre umbral, los 15 runs muertos por cuota sin reasignar, el test zenmux
  roto, la documentación desfasada del reparto, los enlaces rotos del wiki y el worktree/ramas muertos.

Conclusión: auditorías complementarias; la unión cubrió sistema + conocimiento + costes sin huecos
relevantes. Queda como práctica: **auditoría cruzada de dos agentes** funciona mejor que una sola.

## Hallazgos y resolución (todo ejecutado el 2026-07-27)

### P0 (riesgo operativo)
1. **Runs muertos por cuota** — rutinas reasignadas: sintetizador durable a Kimi-first (la hizo Claude);
   Elena Vega devuelta a Sonnet (Kimi no ve el conector de Gmail — hallazgo documentado); destilado de
   newsletters y vídeo a OmniRoute gratuito.
2. **Archivos sucios del sistema** — commiteados por dominios (3 commits iniciales + 7 de la ejecución).
3. **`tests/test_zenmux_defaults.sh` roto** — reescrito por comportamiento (16 checks, en verde).
4. **`wiki/log.md` 164 KB (umbral 50 KB)** — rotado a 46 KB; 29 entradas a `log-archivo/2026-07.md` sin
   duplicados; cabeceras con tildes saneadas.
5. **`scripts/backup.sh` incompleto** — ahora incluye `settings.json`, `sistema/`, `skills-cerebro/`,
   `plantillas/`; verificado con `tar -tzf`.
6. **`briefing-diario-cerebro-carlos` duplicada** — deshabilitada (`enabled: false` + `.disabled` en
   `~/Claude/Scheduled/`). Salvedad: si la app de Claude mantiene su propio registro, Carlos debe
   confirmar en la UI que ya no aparece activa.

### P1
- Documentación del colapso de capas: cerrada por Claude, verificada; `video` añadido a mecánico en los
  5 documentos del reparto (CLAUDE.md, cerebro-pulso, extraccion-de-fuentes, reparto-de-modelos, tests).
- Hueco stdin del veto `perfil/`: **decisión de Carlos — no se toca** (OmniRoute puede leerlo, no le afecta).
- `defaultMode` contradictorio: `auto` explícito en ambos settings.
- Saldo OpenRouter: sin cron de vigilancia; en su lugar `openrouter-destila` detecta **402/insufficient
  credits**, reintenta con `openrouter/free`, imprime `AVISO_SALDO` en stderr y anota en
  `.claude/avisos.log` (lo revisa el mantenimiento semanal → Carlos corrobora).
- `index.md`: 9 páginas catalogadas; mapa regenerado (**391 páginas, 0 enlaces rotos**, 5.985 wikilinks).
- Calendarios de catalizadores: enlazados mutuamente (mapa de vigilancia vs registro formal; sin fusionar).
- Conteo real: **12 rutinas + 6 subagentes** corregido en 4 documentos.
- Esquema de CLAUDE.md: 9 directorios que faltaban, `tipo: referencia`, dotfiles `.-aprendizajes`, raíz.

### P2
- Worktree (2,3 GB) + 4 ramas `claude/*` mergeadas: borradas (verificado `merge-base` antes).
- `_ingesta_tmp/` (117 MB, regenerable desde `raw/`): borrado; estado de la ingesta Nivel 3 rescatado a
  `_aparcado/ingesta-nivel3-2026-07/`.
- Referencias a skills fusionados en los 12 SKILLs de rutinas: repuntadas a `reglas-nucleo.md` /
  `nucleo-comun.md` con sección concreta.
- Mantenimiento semanal: ejecuta `tests/*.sh` con `SALTAR_RED=1` y revisa `.claude/avisos.log`.

## Ahorro de tokens (medidas implementadas)

- **CLAUDE.md −23,5%** (24,6→18,8 KB): remite a fuentes de verdad en vez de repetirlas; narrativas de
  modos de fallo destiladas a reglas. No se llegó al 40% objetivo sin borrar reglas sin segunda fuente —
  decisión conservadora documentada.
- **Arquitectura gratuita primero**: newsletters (27-jul) y vídeo (esta sesión) destilan por OmniRoute;
  Kimi solo orquesta, corrige tensiones y sintetiza (`kimi-tarea` con destilados, nunca crudos);
  Anthropic solo verifica lo que asciende a durable. Antes: ~$168/sem YouTube + ~$136/sem newsletters en
  subagentes Sonnet. A re-medir la semana próxima con el ledger.
- log.md rotado (las rutinas ya leen con `tail`/`grep` acotado — verificado en los 12 SKILLs).
- Memorias en techo compactadas (87→67 y 79→63 líneas, sin pérdida de lecciones vivas).
- 2,4 GB de disco recuperados (worktree + `_ingesta_tmp/`).
- `CONCLUSION.md` del benchmark: el `results.jsonl` subestima modelos (HTTP 200 SSE no parseados); el
  combo `destila` ya usa los modelos correctos; `qwen3-coder-next` el más rápido.

## Monetización del Cerebro (propuesta, pendiente de decisión de Carlos)

Vías identificadas, ordenadas por esfuerzo/plazo:

1. **Newsletter de pago** (Substack/Kajabi): el pulso diario ya se genera solo; una versión editorial
   curada por Carlos es producto casi directo. Barrera: audiencia, no producción.
2. **El sistema como producto** (plantilla de "segundo cerebro de inversión" multi-modelo): vault +
   scripts + SKILLs empaquetados, sin datos de `perfil/`. Venta única o licencia. El diferenciador real
   es la **verificación adversarial** y el ledger de coste medido.
3. **Consultoría/formación** para inversores particulares avanzados o family offices: montarles su
   cerebro. Alto ticket, no escala.
4. **Track record público auditable**: las predicciones falsables con Brier (veredicto semanal) son un
   activo de credibilidad que alimenta las vías 1-3 si se publican.
5. **Datos/síntesis por API**: menos realista a corto plazo (coste de soporte, competencia gratuita).

Recomendación: empezar por 1 (coste marginal cero sobre lo que ya corre) y usar 4 como prueba social.

## Pendientes conocidos

- Re-medición de coste la semana del 28-jul con Kimi vivo (ledger + guardian de sesión).
- Confirmar en la app de Claude que `briefing-diario` ya no está activa (registro interno de la app).
- Gateway OmniRoute caído al final de la sesión: la prueba de red `video`-por-OmniRoute correrá en la
  próxima pasada con gateway vivo (cubierta offline mientras tanto).
- Convención de orden del log.md (lo escriben dos agentes con criterios opuestos): fijar append-only
  estricto en una próxima sesión.

## Ver también

- [[brainstorming-mejoras-del-cerebro]] — esta auditoría **ejecuta y corrobora** uno de los riesgos que
  aquel brainstorming dejaba señalado sin resolver (punto 1.5, "todo el cerebro vive en un único disco":
  backup de `.claude/` incompleto), y abre una vía que allí no se contemplaba (monetización).
