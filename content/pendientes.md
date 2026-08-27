---
title: "Pendientes del operador (Carlos)"
tipo: sintesis
tags: [meta, mantenimiento, pendientes]
fecha: 2026-07-17
---

# Pendientes del operador (Carlos)

Cosas que **solo Carlos puede hacer** (borrados, hardware, cuentas, decisiones). Centraliza lo que antes
vivía disperso en `CLAUDE.md`, chats y notas (hueco #12 de [[brainstorming-mejoras-del-cerebro]]). El agente
de sesión lo actualiza cuando surge o se resuelve un ítem; los agentes programados NO escriben aquí.

> [!warning] Única excepción a esa regla: `scripts/vigila_tesis.py --anota` (2026-07-29)
> Un gatillo de precio tocado es, por definición, algo que solo Carlos puede decidir, así que su sitio
> es este. La regla se escribió para que las rutinas de agente no llenaran esto de ruido; el vigilante
> no es una rutina de agente, es un script determinista que **solo escribe cuando dispara** y nunca
> más de una línea por página y día. Si algún día escribe de más, la excepción se revisa — pero se
> deja anotada aquí en vez de romperla en silencio.

## Para mañana (2026-07-30) — cola en orden

Todo esto necesita tu terminal o una cuenta tuya; ninguna lo puede hacer el agente.

| # | Qué | Cómo | Por qué importa |
|---|---|---|---|
| 1 | **Rotar la clave de Kimi** | Generar clave nueva en la consola de Kimi Code, revocar la vieja, y `printf 'sk-kimi-NUEVA\n' > ~/.config/kimi/key && chmod 600 ~/.config/kimi/key` (NO va en `secrets.env`: `scripts/kimi/kimi` la lee de ese fichero, texto plano) | Estuvo expuesta en claro en `docs/superpowers/plans/2026-07-23-kimi-capa-media-fase1.md` desde el 23-jul. El fichero está redactado, pero **la clave sigue viva en el historial de git**: redactar no invalida nada. Es lo único de esta lista con una ventana de riesgo abierta |
| 2 | **Poner la clave de Firecrawl** | `printf 'FIRECRAWL_KEY=<tu-clave>\n' >> ~/.cerebro/secrets.env && chmod 600 ~/.cerebro/secrets.env` · luego `python3 scripts/firecrawl.py --comprueba` | ✓ hecho 2026-07-29 — desbloquea las **earnings calls** del bloque 3 |
| 3 | **Dar permiso de disco al vigilante** | El plist ya está instalado y cargado (2026-08-02), pero macOS (TCC) bloquea a launchd el acceso a `~/Documents`: `Operation not permitted`. Falta: Ajustes del Sistema → Privacidad y seguridad → **Acceso total al disco** → añadir `/usr/bin/python3` (Cmd+Shift+G para pegar la ruta). Verificar tras concederlo: `launchctl kickstart gui/$(id -u)/com.cerebro.vigilante && tail ~/Cerebro-Carlos-backups/vigilante.log` — debe aparecer una línea `latido ...` | Sin esto el vigilante corre cada día a las 08:15 pero muere en silencio sin leer ninguna tesis |
| 4 | **Abrir Obsidian un momento** | Solo abrirlo | Smart Connections reindexa lo escrito estos dos días; sin eso el índice semántico va por detrás del vault |
| 5 | **Backup fuera del disco** | `bash scripts/backup.sh /Volumes/<disco>` | Arrastrado desde el 13-jul. El `.tar.gz` vive en el mismo disco que el vault: no protege del único fallo que importa |
| 6 | **Subir los post-mortems al anti-corpus** | PDFs/artículos a `raw/`, carpeta nueva | Es el primero del ranking: Valeant (Ackman), Kraft Heinz (Buffett), GE, Wirecard. Enseña **tu** modo de fallo, no una opinión contraria |

**Decisiones tuyas, sin terminal:**

- **ASML sin gatillo.** Su tesis dice "corrección del 20-30%" pero nunca fijó desde qué precio, así que
  no hay número que vigilar y el script la reporta `NO VIGILABLE`. O fijas tú el precio de referencia, o
  se lo encargas a la rutina fundamental. No lo relleno a ojo.
- **Alphabet: Berkshire contra Pershing.** Berkshire cuadruplicó la clase A (+204%) el mismo trimestre
  en que Pershing recortó las dos clases un -95%. La llevas en cartera. Está anotada como tensión sin
  arbitrar en [[carteras-13f]]; si quieres que el equipo la investigue, dilo y va a la cola.
- **Tangibles al 45,4%** sobre un límite de 35-40%, y subiendo por revalorización sola. La excepción de
  la plata **no** cubre esto. Sigue sin decidirse desde el 16-jul.

## Cola de fondo

| Ítem | Detalle / comando | Desde | Estado |
|---|---|---|---|
| Borrar duplicados en `raw/` (MD5 verificados 2026-08-02) | `rm "raw/Azvalor/Azvalor-Carta-Trimestral-4T2022-1 (1).pdf" "raw/Azvalor/Azvalor-Carta-Trimestral-4T2022-1.pdf"` (3 copias idénticas; queda `4T2022.pdf`) · `rm "raw/Horos/carta-a-los-inversores-3t24 (1).pdf" "raw/Horos/Carta-a-los-Inversores-4T24 (1).pdf"` (idénticas a las buenas) · `rm "raw/libros-sueltos/Crea riqueza con dividendos crecientes - Miller, Lowell (1).epub"` (idéntica a la buena). **NO borrar** `El arte de gastar dinero - Morgan Housel (1).epub`: es copia ÚNICA y fuente de [[morgan-housel-libros]] — la versión anterior de esta fila ordenaba borrarla | 2026-07-11/12 | pendiente |
| Borrar el PDF corrupto de *The art of strategy* | `cd "raw/Libros muy recomendables" && rm "the-art-of-strategy-a-game-theorists-guide-to-success-in-business-and-life-0393062430-9780393062434_compress.pdf"` (stub roto de 1.624 bytes; el bueno, `The art of strategy.pdf` 562 pp, ya está subido y en cola de ingesta) | 2026-07-22 | pendiente |
| PDFs escaneados sin capa de texto (OCR) | 5 fuentes que NINGÚN extractor puede leer porque son imagen pura: `raw/papers-sueltos/73.pdf.pdf`, `raw/papers-sueltos/BI_January_18_2016.pdf`, `raw/papers-sueltos/Fama_theory.pdf`, `raw/papers-sueltos/antifragil.pdf` (duplica `antifragil-9788449337338.pdf`, que **sí** se lee → no urge), `raw/Ruchir Sharma/India-Today.pdf`. Detectadas en la extracción del Nivel 3 (2026-07-22). Solo merecen OCR si te interesa el contenido concreto; el marco de Taleb y el de Sharma ya están cubiertos por otras fuentes | 2026-07-22 | opcional |
| ~~Levantar el gateway de OmniRoute~~ **degradado a opcional** (decisión de Carlos, 2026-08-14) | Ya no bloquea nada crítico: la capa 3 la sirve DeepSeek V4 por el puente OpenCode desde el 2026-08-13 y el gateway queda solo como tercer eslabón gratuito de los 15 tipos viejos de `destila`. Además la premisa está caduca en los dos sentidos: el 2026-08-14 `gateway_vivo()` → `True` y sirvió el run del prerregistro (`openrouter/moonshotai/kimi-k3`, 3 destilados) sin fallo; su estado real es **intermitente** ("escucha pero no sirve" por temporadas), no muerto. Lo único que sigue bloqueado es la señal falsable del punto 11 del backlog (reejecutar `capa-gratuita` ↔ `relevo-k3` con `--intentos 3`, 12 destilados gratuitos) — y con el gratuito fuera de la cascada de los 24 encargos mecánicos, esa medición ya no cambia ninguna decisión de producción. Comprobar con `python3 -c "import sys;sys.path.insert(0,'scripts/omniroute');import _omniroute as o;print(o.gateway_vivo())"` | 2026-07-29 | opcional |
| **Decidir el resto de la tanda 2 del backlog de `ingenieria-agentes/`** | Tanda 1 (1-9) **aplicada** ✓. De la tanda 2, las **tres P1 (10-12) aplicadas** el 29-jul ✓ (`verifica_destilado` 59→36 FALLA sin perder ningún OK; `dorado.py --intentos 3` con veredicto `INDISTINGUIBLE`; `hooks_traza.py` + primera prueba que ejercita los 5 hooks). Quedan **13** (probar al `verificador-adversarial` en el caso en que NO debe refutar, ~60 llamadas Sonnet), **14** (fechar los 7 guardarraíles calibrados a ojo) y **15** (divulgación progresiva de los 63 KB de núcleo). Decide Carlos, una por una | 2026-07-29 | pendiente |
| Terminar la 2ª mitad de *A Comprehensive Overview of LLMs* | Único fragmento de la tanda de Formación IA que quedó sin destilar: `destila --tipo tecnico --solo omniroute` sobre la segunda mitad. Gratuito, ~2 min. Prioridad baja: survey general de LLMs, sin aplicación al harness | 2026-07-29 | opcional |
| OCR de la presentación de Salesforce | `raw/Formación IA/Presentation8_Salesforce_*.pdf`: 48 páginas de imagen que solo dan 12k caracteres, así que su destilado no representa el documento. Su tema (federación de agentes entre dominios de red) está **descartado** para nuestro caso, así que el OCR solo vale si te interesa el contenido en sí | 2026-07-29 | opcional |
| Backup FUERA del disco | Copiar el último `~/Cerebro-Carlos-backups/*.tar.gz` a disco externo o nube (el git local no tiene remoto) | 2026-07-13 | pendiente |
| "Run now" de la rutina CKO | Sección Scheduled de la app → `cerebro-cko-conocimiento` → Run now (banca permisos para los runs de las 11:00) | 2026-07-17 | pendiente |
| Limpiar worktrees ya fusionados | Ambas ramas `claude/*` están merged en main: limpios ✓ | 2026-07-17 | ✓ hecho |
| Label Gmail "Economía" | Gmail label "Economía" creado ✓ — agrupa todas las newsletters que Elena procesa. Reduce búsqueda diaria de ~2min a un click. Anotado en su memoria (VIGENTE de `.rutina-aprendizajes.md`). | 2026-07-17 | ✓ hecho |
| Van Tharp — libro completo | El PDF de `raw/Análisis técnico/` es solo el índice; conseguir *The Definitive Guide to Position Sizing* completo si se quiere profundizar [[gestion-de-posiciones]] | 2026-07-10 | opcional |
| Taleb *Antifrágil* — OCR | PDF escaneado; marco ya cubierto vía [[nassim-taleb]], OCR solo si se quiere el detalle | 2026-07-13 | opcional |
| **Permiso TCC para el vigilante** (fila 3 de arriba ampliada) | Sin Acceso total al disco para `/usr/bin/python3`, el vigilante instalado el 2026-08-02 muere cada mañana con `Operation not permitted` | 2026-08-02 | **pendiente** |
| **Backup externo: configurar destino + permiso TCC para `/bin/bash`** | Automatizado el 2026-08-03 (`backup.sh --externo` + `com.cerebro.backup-externo.plist`, domingos 22:43, instalado y verificado en `launchctl list`). Falta de Carlos: (1) editar `~/.cerebro/backup_externo.conf` y descomentar su `DESTINO` (la plantilla ya existe); (2) el kickstart de prueba murió con `Operation not permitted` — mismo muro TCC que el vigilante: Acceso total al disco → añadir `/bin/bash`. Verificar: `launchctl kickstart gui/$(id -u)/com.cerebro.backup-externo && tail ~/Cerebro-Carlos-backups/backup-externo.log`. Anti-ruido: sin config o destino caído solo deja 1 línea en `.claude/avisos.log` y sale 0 | 2026-08-03 | **pendiente** |
| Rellenar las decisiones de julio | La capa `perfil/decisiones/` tiene 1 ficha real en 3 semanas; plantilla exprés ~5 min/decisión. El veredicto semanal ya escala los movimientos sin ficha (2026-08-02) | 2026-08-02 | pendiente |
| Unir los 46 wikilinks partidos en dos líneas | Resuelto sin intervención manual: el lint (`mapa_vault.py`) reporta **0 wikilinks multilínea** desde antes del 2026-08-25 y `scripts/hook_bloquea_wikilinks_partidos.py` los previene en la ingesta. Verificado de nuevo el 2026-08-25 junto a la sesión de red densa | 2026-08-02 | ✓ hecho 2026-08-25 |
| Consolidar Aschenbrenner (destilado 2026-08-02) | Ascendido: `wiki/fuentes/economia-ia/situational-awareness.md` (2026-08-03), con las 2 correcciones aplicadas (destilado-03 "~25M"→"decenas de millones" H100-eq; destilado-04 contraste 90%/0%) y `.verif-situational-awareness.txt` consolidado. `_ingesta_tmp/economia-ia-tanda1/` archivada tras backup verificado | 2026-08-02 | ✓ hecho |
| Concepto: riesgo de cola en el capex de cómputo de IA | Propuesto al ascender Aschenbrenner: qué pasa con la tesis de valoración de semis/hiperescaladores si el ritmo de escalado (Counting the OOMs) NO se cumple. Transversal a [[financiacion-estructurada-del-capex-de-ia]] y [[semiconductores-logica-y-computo-ia]] → **creada**: [[riesgo-de-cola-capex-computo-ia]] | 2026-08-03 | ✓ hecho 2026-08-24 |
| Concepto: geopolítica del cómputo | Propuesto al ascender Aschenbrenner: control de exportación de chips, seguridad de *weights*/secretos algorítmicos como activo estratégico. Recurrente en `situational-awareness.md` y probable en el resto de [[cola-de-ingesta]] (Economía e IA) | 2026-08-03 | ✓ hecho 2026-08-24 → [[geopolitica-del-computo]] |
| Resto de la tanda IA (7 libros) | Bostrom, Russell, Tegmark, Suleyman, Vinge, Agrawal, AI-risks: mismo pipeline que Aschenbrenner (trocea + destila libro + verif). En [[cola-de-ingesta]] | 2026-08-02 | pendiente |
| `comprueba_launchd.py` (audit A2) | Cruzar `scripts/launchd/*.plist` contra `launchctl list` en el mantenimiento semanal; el watchdog no ve launchd (modo de fallo del vigilante). Sin respuesta en la tanda | 2026-08-02 | sin decidir |
| Blindaje del backup (audit A3) | Ampliar `backup.sh` (docs/tests/pruebas/_ingesta_tmp) + `--verifica` + launchd + copia a iCloud. Relacionado con la fila "Backup FUERA del disco". Sin respuesta en la tanda | 2026-08-02 | sin decidir |
| `dedup_raw.py --seguro` (audit A4) | Borrado con guardarraíl MD5 (solo ≥2 copias idénticas). La fila de duplicados de arriba ya va verificada a mano | 2026-08-02 | sin decidir |
| Worktree stale de 2,4 GB | `.claude/worktrees/great-mclaren-1711e3/` (30-jul): Carlos decidió NO borrarlo en la tanda del 2026-08-02 | 2026-08-02 | decidido (se queda) |

## Ronda 2 (2026-08-02) — propuestas auditadas NO seleccionadas en la tanda

Auditoría completa en `scratchpad/auditoria-hermes-ronda2.md` (Hermes) + 3 exploradores. Se implementaron 17; estas 11 quedan a la espera de que Carlos las pida:

## Nota de evolucion 2026-08-16: cola y mapa re-medidos

La cola de ingesta ya no debe leerse con el contador antiguo de las filas superiores: `python3 scripts/cola_ingesta.py`
midió **284 ficheros sin inventario de 834** y regeneró `wiki/referencia/cola-de-ingesta.md`. El mapa midió **714
páginas, 100 enlaces rotos y 5 huérfanas**. Estos números describen el estado del vault, no resuelven por sí solos
las acciones exclusivas de Carlos de las filas anteriores.

| Ítem | Detalle | Desde | Estado |
|---|---|---|---|
| Consumidor de `.claude/avisos.log` | 343 avisos (91 KB) sin nadie que los lea; el del 31-jul pedía recargar una clave y nadie actuó. Barrido en `/cerebro-auditoria` → pendientes. Coste bajo | 2026-08-02 | sin decidir |
| Guardarraíl de tamaño en `destila` | Entrada >250k chars sin trocear → exit 2 apuntando a `trocea.py` (evita destilados sesgados como el de Designing ML Systems). Coste bajo | 2026-08-02 | sin decidir |
| `check_inbox` dedup global + encadenar cola | MD5 contra todo `raw/` (hoy solo por carpeta destino) + llamar a `cola_ingesta.py` al mover. Coordinar con `dedup_raw.py --seguro` si se hace | 2026-08-02 | sin decidir |
| Vigencia temporal en el lint + estalactitas | `mapa_vault.py`: sección "posiblemente caducas" (cartera 30d, tensión 60d, concepto exento) + páginas >60 días sin tocar → fusión/archivo. `tensiones-activas.md` data del 11-jul | 2026-08-02 | sin decidir |
| MOCs por carpeta autogenerados | `_indice.md` por carpeta con el clustering ya calculado; mata las huérfanas de raíz. Coste bajo-medio | 2026-08-02 | sin decidir |
| Puente determinista conceptos + inversores | Extender `puente_industria_empresa.py` a 84 conceptos y 33 inversores (logs af/at: ~7 links/ficha, la capa más desconectada). Coste medio | 2026-08-02 | sin decidir |
| Agujeros estructurales (páginas de síntesis) | Clusters con cercanía semántica alta y cero links cruzados → propone páginas de síntesis (informe en docs/, nunca escritura directa). Coste medio-alto | 2026-08-02 | sin decidir |
| Destilado con citas cruzadas contra el corpus | Sección automática "Tensiones y conexiones previas" vía `vecinos_semanticos` al destilar. Riesgo: conexiones alucinadas. Coste medio-alto | 2026-08-02 | sin decidir |
| Deriva factorial en `deriva_cartera.py` | Correlación móvil 30/90 sesiones + alerta en `wiki/riesgo/`. Riesgo de falsas alarmas. Coste medio | 2026-08-02 | sin decidir |
| Fichas de decisión auto desde el veredicto | Borradores pre-llenados en `perfil/decisiones/` cuando el veredicto semanal detecta movimiento (hoy 1 ficha en 3 semanas). Coste medio | 2026-08-02 | sin decidir |
| Fichas duplicadas empresas/ vs analisis-acciones/ | La hornada del 25-ago creó fichas rápidas en `wiki/empresas/` para empresas con tesis previa en `wiki/analisis-acciones/`: paypal, american-express, pepsico, nike, tjx-companies, walmart y hasta 46 colisiones de nombre en el lint (consolidación en curso). Efecto: el lint marca «huérfanas» falsas (el gemelo no elegido queda sin entrantes). Recomendación: fusionar datos frescos en la tesis y borrar la ficha rápida. Decisión de Carlos. | ☐ pendiente |

## [2026-08-03] Propuesta: fecha de caducidad para los claims de infraestructura en las memorias VIGENTE

- **Problema medido hoy**: la memoria de Elena repitió "destila está caído" durante 4 runs (28, 29, 31-jul, 3-ago) sobre una premisa falsa desde el 2026-08-02, porque un claim de infraestructura subió a VIGENTE como hecho permanente. Mismo patrón encontrado en `.cko-aprendizajes.md`, `.rutina-video-aprendizajes.md` y `.riesgo-aprendizajes.md` (este último con un explícito "no reintentar", que impide por diseño detectar la recuperación).
- **Propuesta** (requiere a Carlos o a la CIO — `reglas-nucleo.md` § Protocolo de memoria no lo escribe una rutina): todo claim de infraestructura en `VIGENTE` ("X está caído / no disponible / no reintentar / más rápido a mano") debe llevar `[medido: YYYY-MM-DD]`, y caduca a los 7 días: pasado ese plazo hay que re-probar antes de actuar sobre él. Un claim caducado no autoriza un fallback; y todo fallback deja traza `[DEGRADADO: <herramienta> exit N]`.
- **Por qué importa**: sin caducidad, un incidente puntual se convierte en política permanente y el sistema no puede notar que la infraestructura se recuperó. Es degradación silenciosa con el disfraz de método validado.

## Nota de evolución 2026-08-16: cola y mapa re-medidos

La cola de ingesta midió **284 ficheros sin inventario de 834** y regeneró `wiki/referencia/cola-de-ingesta.md`.
El mapa por identidad de ruta midió **758 páginas, 96 enlaces rotos, 45 wikilinks partidos y 22 huérfanas**.
Los claims de infraestructura sin una medición fechada dentro de siete días quedan caducados y no autorizan un
fallback; las acciones de credenciales, TCC, backup externo y borrado siguen siendo de Carlos.

## Disparos del vigilante de tesis
- [vigilante 2026-08-25] [[kazatomprom]] — KAP.L a 29.40 USD ha entrado en el gatillo (52.00). Veredicto escrito: VIGILAR. Releer la tesis antes de decidir nada.
- [vigilante 2026-08-26] [[kazatomprom]] — KAP.L a 29.40 USD ha entrado en el gatillo (52.00). Veredicto escrito: VIGILAR. Releer la tesis antes de decidir nada.

## [2026-08-26] El plugin de LaTeX se come los importes en dólares del sitio público

- **Medido hoy** sobre `~/cerebro-publico/content`: **506 páginas** tienen dos importes en dólares en la
  misma línea, y `@quartz-community/latex` interpreta ese `$...$` como fórmula. En el sitio construido,
  `$79-83 → $88` se publica renderizado como matemáticas: `SPAN.katex` con el texto reordenado y los
  símbolos comidos. Muestras reales del DOM: `200,97B(+22ROIC24,8`, `447Bingresos(UnitedHealthcare`.
- **No se puede apagar el plugin**: hay LaTeX de verdad en 6 páginas de valoración
  ([[flujo-de-caja-descontado]], [[estimacion-del-crecimiento]], [[multiplos-de-valoracion]],
  [[creacion-de-valor-y-eva]], [[valor-terminal]], [[coste-de-capital-wacc]]) con bloques `$$ \frac{...} $$`.
- **Tampoco se puede configurar**: `remark-math` acepta `singleDollarTextMath: false`, pero el plugin lo
  llama sin opciones (`markdownPlugins() { return [remarkMath] }`, `dist/index.js:233883`) y su tabla de
  opciones no lo expone. Parchear `node_modules/` no vale: Vercel reinstala en cada despliegue.
- **Arreglo propuesto, para Carlos**: escapar `$` → `\$` en `publica.py`, fuera de los bloques `$$` y de
  las vallas de código. Vive en nuestro repo, sobrevive al `npm install` y es testeable. **No lo aplico
  yo**: cambia lo que dicen 506 páginas publicadas y eso es una decisión de contenido, no de estilo.
- **Contenido mientras tanto** (2026-08-26, hecho): `custom.scss` obliga a `.katex` a ser `inline-block`
  con `overflow-x: auto` y clipa `#quartz-body`. Antes, esas fórmulas empujaban el ancho del documento a
  **1.172 px en un móvil de 375** y se llevaban por delante la barra de navegación. Eso está arreglado;
  las cifras mal renderizadas **no**.
- [vigilante 2026-08-27] [[kazatomprom]] — KAP.L a 29.40 USD ha entrado en el gatillo (52.00). Veredicto escrito: VIGILAR. Releer la tesis antes de decidir nada.
