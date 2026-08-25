---
title: "Registro"
---
# Registro

## [2026-08-25] web | el sitio público ya está en GitHub (push hecho)
- `carlosbarez/cerebro-publico` creado por Carlos y rama `v5` empujada (1.861 commits, rama por defecto
  puesta en `v5`). Tres tropiezos: el clon era **shallow** y GitHub rechazaba el pack
  (`index-pack failed` → `git fetch --unshallow`); el token OAuth de `gh` **no tiene scope `workflow`**
  y la historia de Quartz traía `.github/workflows/` (→ `git filter-branch` lo quitó de la historia,
  sin tocar lo demás); y el push de `publica.py --sitio` fallaba por credenciales HTTPS
  (→ `credential.helper='!gh auth git-credential'`).
- Pendiente en Carlos: conectar Vercel (framework «Other», build `npx quartz build`, salida `public`).
- Supabase (mismo día, más tarde): tablas creadas por Carlos; hizo falta además `grant select/insert/
  update ... to service_role` y `grant select ... to anon` — las claves nuevas (`sb_secret_`/`sb_publishable_`)
  no heredan los permisos por defecto. Volcado OK: marcador 27, pulso 1, cartera 36 (HTTP 201).
  Verificado: la clave pública **no escribe** (401) y lee (200).

## [2026-08-25] web | el sitio público se construye entero en local (fase 2b)
- Plan nuevo `docs/superpowers/plans/2026-08-25-web-sitio-publico-fase-2b-plan.md`: las tareas 5-6 del
  plan de la mañana estaban escritas contra **Quartz v4** y lo que se clona hoy es **v5.0.0** (config en
  YAML, sin `quartz.layout.ts`). Tareas A y B ejecutadas por `opencode-go/deepseek-v4-flash`, que paró
  en el build sin tapar el fallo. Correcciones y tarea C, en hilo principal.
- **2.422 páginas HTML** con la piel Cátodo, 7 tipografías autohospedadas y **0 peticiones a Google
  Fonts** — el plugin `quartz-fonts` no lee `configuration.theme` y las pedía pese a `fontOrigin: local`.
- `filtro.py`: 14 páginas traían frontmatter que Obsidian tolera y YAML rechaza; Quartz abortaba el build
  entero. `_yaml_seguro()` entrecomilla en la salida (el vault sigue igual — pendiente aparte).
- `publica.py`: el aviso legal lo escribe el publicador. A mano en `content/` moría en cada pasada.
- Supabase: proyecto vivo y las dos claves autentican (`SUPABASE_SECRET_KEY`/`_PUBLISHABLE_KEY`, nombres
  nuevos de 2025); **faltan las tres tablas**. Bloqueado en Carlos, junto con el repo público y Vercel.

## [2026-08-25] conocimiento | rotación empresas+industrias, 2 escalados (Sofía Navarro, CKO)
- Misión (0 scouts): del pool de 74 sondas-empresa 08-14, Carlos Bárez tocó hoy 5 fichas con coincidencia
  exacta de nombre (mastercard, visa, walmart, costco, mercadolibre) y 0/5 usaron su sonda — 2º flag del
  mismo hallazgo (1º: 21-ago) → **ESCALADO a la CIO**, no 3er aviso. Contraste: l-oreal.md sí cruzó su
  sonda con nota de convergencia — el patrón funciona cuando se aplica.
- **Nvidia ESCALADO** (3ª comprobación, 04-ago/17-ago/hoy): sigue sin nota de evolución, $22,3B de
  participaciones cuando el equipo ya conoce >$500.000M de financiación de terceros.
- `destila --tipo duplicidades` sobre el lote de 29 fichas nuevas: 6 pares con solape real, 5/6 con 0 o 1
  wikilink cruzado (costco↔walmart, kering↔l-oreal, roper↔intuit, edwards↔intuitive-surgical,
  essilorluxottica↔l-oreal). `omniroute-enlaza` confirma independiente el par visa→mastercard asimétrico.
- Industrias esqueleto: 3 sin backlinks reales (propuesta de poda) vs `industria-lujo`, que creció a 5.
  Laguna nueva: Carlos Bárez y el pipeline `ox-alpha` escribieron el mismo día sobre tecnología médica sin
  cruzarse (`conceptos/tecnologia-medica.md` vs 4 fichas medtech que la citan "pendiente de crear").
- [DEGRADADO: destila --tipo duplicidades exit 1] lote 2/2 — Kimi tocó tope 20/20, las 4 capas cayeron.
  Detalle: [[conocimiento-2026-08-25]].

## [2026-08-25] web | publicador de la fase 2: filtro, puerta, publicador y datos vivos
- Spec y plan de la **fase 2** (sitio publico) escritos y ejecutados hasta la tarea 4: `web/publicador/`
  con filtro, puerta, publicador de dos pasadas y las tres tablas de datos vivos. 42 pruebas en verde.
- **La regla que gobierna el filtro**: 663 lineas del vault llevan euros de EMPRESAS y solo ~65 de Carlos.
  Tachar por el simbolo habria mutilado el wiki de analisis; se separa por lenguaje + cotejo de cifras.
- **Tres fugas criticas cazadas por la revision final**, todas con la puerta diciendo "0 hallazgos":
> — dato privado retirado —
  ya estaban en la salida); `publica.py` se saltaba el guardian de detector ciego; y el canal de Supabase
  no pasaba por el filtro. La prueba de campo era **circular** y por eso no podia verlo.
- Simulacro real: ~962 paginas, 129 lineas tachadas, 98 cifras vigiladas, puerta limpia. Nada publicado aun.
- **Pendiente de Carlos** (tareas 5-7): repo publico, proyecto de Supabase con sus claves, y Vercel.

## [2026-08-24] sistema | capa mecánica a prime-agent/deepseek-v4-flash; puente prime-agent reparado
- El carril de pago deja `opencode-go/gpt-5.6-luna` y pasa a `prime/deepseek-v4-flash` (decisión de Carlos): nuevo transporte `prime/` en `scripts/omniroute/_omniroute.py` (`prime-agent --mode text --no-session --offline --no-tools -nc`), cascada `prime/… → oc/deepseek-v4-flash-free` en ambos carriles. Tests de la capa en verde y verificación real con `DESTILADO_POR=prime/deepseek-v4-flash`.
- `revision_degradados.py` actualizado (luna histórico 17→24-ago); notas de evolución en `capa-mecanica.md`, `extraccion-de-fuentes.md` y [[reparto-de-modelos]].
- El puente prime-agent caído esta mañana (429 de google, su único proveedor) queda reparado: default opencode-go/deepseek-v4-flash con la credencial Go copiada a `~/.prime/agent/auth.json`; si Carlos declara otro modelo para un encargo, ese manda (`.opencode/commands/prime-agent.md`).
- No se tocó el ejecutor `marco-video` de la ingesta de vídeo (agente con herramientas, no capa mecánica): sigue en `opencode-go/gpt-5.6-luna`, moverlo es otra decisión.

## [2026-08-24] empresas | investigación fundamental Fastenal + Copart (cola enjambre #3) y falso positivo de mappings
- [[fastenal]] y [[copart]]: nota de evolución con Q2 2026 / Q3 FY26 verificados en 2 fuentes independientes cada uno, precios de sesión real vía `market_data.py` (24-ago), valoración con rango de fuentes y sensibilidad etiquetada como cálculo propio — sin gatillos (decisión de Carlos). Ambas siguen VIGILAR. La pregunta abierta del ROIC de Fastenal queda respondida (+180 pbs TTM, máximo de década); Copart: de-rating -45% sin deterioro de beneficio, motor = frecuencia de pérdida total 23,6%.
- Indexadas las 5 candidatas del enjambre ([[xylem]], [[waste-management]], [[copart]], [[fastenal]], [[cme-group]]) en `index.md` § Empresas.
- **Falso positivo cerrado**: los "23 mappings destino inexistente" del semáforo no existían como rotos — los 24 destinos de `.mappings.json` están en el vault; el método de comprobación (grep de contenido) no encuentra el slug propio de una página. Corregida la instrucción en `cerebro-mantenimiento-semanal/SKILL.md` (existencia de fichero, no grep) y empujada al planificador (`ae942a8`).
- Deriva SKILL.md cerrada: newsletters y analista-tecnico sincronizadas repo→planificador (el repo mandaba en ambas; regla de día-semana y slugs cerrados de bloques de riesgo).
- **Causa raíz de las "rutinas sin marcador"** (amplía `d66ab2a`): no es `marca_run.py` ni falta de cableado — las 12 rutinas tienen su casilla de marcado (la del gestor está, el slug correcto es `cerebro-gestor-cartera`). Es el harness que ejecuta las tareas programadas: no carga los agentes con nombre de `.claude/agents/` (`~/.claude/agents/` vacío; solo resuelve el listado fijo), así que toda FASE -1 que delega el run entero aborta con `Agent type not found` y, por diseño honesto, un run abortado no marca. Afecta a veredicto (documentado), cio-elisa, crdso-riesgo y sintetizador-durable; corren bien las que no delegan el run entero o salen por la vía Kimi. Propuesta a Carlos: registrar los agentes a nivel global o añadir último peldaño de fallback al agente nativo `general` con identidad pegada — decisión suya, no ejecutada.
- [[geopolitica-del-computo]] creada desde [[situational-awareness]] + estado verificado 2025-26 de export controls (cargo H20 $4.500M, peaje estatal del 15%, agujero de filiales Blackwell cerrado may-2026, marco H200 con arancel 25%). Cierra el enlace que el índice ya anunciaba de la tanda flota CKO de hoy pero cuyo fichero se perdió (mismo modo de fallo que el run del 17-ago: índice escrito, página no).
- Worktrees zombis inventariados: `intelligent-pasteur-a94e60`, `jovial-jennings-745b3d` (rama `claude/zen-euclid-497515`) y `unruffled-benz-56367f` — las TRES ramas fusionadas en main (verificado con cherry); borrables recuperando ~7,6 GB con `git worktree remove` + `git branch -d`. No se borra nada: precedente great-mclaren, decisión de Carlos.
- Puente prime-agent CAÍDO hoy (429 del proveedor google, único en su `auth.json`; no existe modelo OxAlpha en su catálogo): trabajo hecho en hilo principal según degradación prevista.

### [2026-08-24] Decisiones de Carlos ejecutadas (ventana interactiva)
1. **Worktrees zombis borrados** — los 3 (`intelligent-pasteur`, `jovial-jennings`, `unruffled-benz`) con ramas fusionadas verificadas; ~7,6 GB recuperados. El trabajo sin commitear de jovial-jennings (ULTIMA_SONDA) ya estaba en main por otra vía y main iba por delante (firma de `log_req`).
2. **Harness, ambos arreglos** — (a) los 19 agentes con nombre copiados a `~/.claude/agents/` (antes vacío: por eso el harness no los resolvía); (b) último peldaño de fallback al agente genérico nativo (`general-purpose`) añadido a las FASE -1 de veredicto, crdso-riesgo, cio-elisa y sintetizador-durable, sincronizadas al planificador. Un run abortado deja de ser la única salida.
3. **Gatillos FAST/CPRT encargados a fundamental** — anotado en `wiki/analisis-fundamental/watchlist.md` § Encargos abiertos (escritor único respetado: la rutina propone, Carlos ratifica).
4. **OxAlpha en prime-agent — OPERATIVO** — resuelto sin datos de Carlos: el servicio vive en el gateway Zen de OpenCode que el vault ya usaba (`https://opencode.ai/zen/v1`, dialecto openai-completions, credencial `OPENCODE_API_KEY` de `secrets.env`); el id de servicio de OxAlpha es `x-preview-f-free` (listado verificado contra `/models`: 64 modelos). Cableado en `~/.prime/agent/models.json` (600, clave inyectada sin pasar por el hilo) y fijado como PROVEEDOR POR DEFECTO en `settings.json`. Prueba real una pasada: «OK — ox-alpha».

## [2026-08-24] mantenimiento | semáforo con 6 alertas rojas, 6 rutinas sin marcador, mappings rotos
- Semáforo regenerado en `wiki/sintesis/estado-del-sistema.md`. Reportados: derivación de SKILL.md (1 de 12), 23 mappings destino inexistente, 291 items en cola de ingesta, 6 rutinas sin marca de frescura, 8 memorias todas >80 líneas. Worktrees zombis: 3 de 7,7 GB. Timeout: ledger_de_coste.py, tests, mapa_vault.py sin completar.

## [2026-08-20] cko | enjambre abierto de investigacion web
- Cinco scouts independientes cubrieron IA/capex, macro/regimenes, ciencia cognitiva, decision science y nuevas empresas.
- Se crea [[enjambre-cko-2026-08-20]] con las conexiones de segundo orden y la cola de trabajo.
- Se ascienden a fichas preliminares [[xylem]], [[waste-management]], [[copart]], [[fastenal]] y [[cme-group]]; todas quedan en VIGILAR y sin valoracion.
- No se usan redes con login ni se alteran los cambios preexistentes del arbol.

## [2026-08-18] sistema | el pulso de vídeo pasa a producirse y revisarse entero en luna
- **Cambia quién responde por el contenido.** Desde hoy la rutina `cerebro-ingesta-diaria-youtube` la
  ejecuta de principio a fin `opencode-go/gpt-5.6-luna` (agente `marco-video`): descarga, destilado,
  síntesis, verificación, escritura y commit. **No queda verificador Anthropic en el bucle**: luna es
  corrector y corregido. Decisión de Carlos, tras plantearle que la regla de la casa era «el corrector ≠ el
  proveedor del corregido». El brazo Sonnet (`marco-reyes`) NO se borra: sigue de respaldo en la FASE -1,
  ahora tercero, detrás de Kimi.
- **Lo que ocupa el sitio del verificador retirado es código, no un modelo**: `verifica_destilado.py`
  pasa ahora obligatoriamente sobre cada destilado (PASO 4) y toda cita `FALLA` se cae de la nota.
  Un parser no puede estar de acuerdo consigo mismo; un modelo que se audita a sí mismo, sí.
- **Hueco encontrado y tapado**: los guardarrailes del vault son hooks `PreToolUse` de *Claude Code*.
  Kimi los tiene (su wrapper ES Claude Code con otra `base_url`); opencode **no** — otro harness, no lee
  `.claude/settings.json`. luna escribiendo con su propia herramienta habría escrito con los seis hooks
  apagados. Nuevo `scripts/escribe_pagina_wiki.py`: única puerta a `wiki/`, ejecuta esos mismos seis
  ficheros de hook y deniega igual; a `marco-video` se le deniega `edit` sobre `wiki/**` por permisos de
  opencode (comprobado contra el motor, no contra la promesa del modelo: `Patch failed`). Techo escrito
  en la cabecera del script: tapa la herramienta de edición, no `bash`.
- **Medición del 18-ago sobre los 8 destilados de luna** (131 ítems): 89 cifras OK, 13 PARCIAL, 26 FALLA
  — de las 10 FALLA abiertas contra el crudo, **las 10 eran del auto-sub, no del modelo** («el 016%» por
  0,16%; «521%» por 5,21%; «Marll» por Marvell; «brand crude» por Brent). Citas: 3, y **2 FALLA**, las dos
  del vídeo de Bloomberg en inglés y las dos **traducidas** — el mismo modo de fallo de la capa gratuita
  en julio. De ahí la regla nueva: una cita se copia en el idioma de su fuente (`ENCARGO_HASH` de
  `--tipo video`: 502eaf3e → 45b2ba9a).
- Constatado de paso: `hook_exige_verificacion_destilado.py` EXIME `/wiki/actualidad/` a propósito, así
  que en la nota diaria nunca mordió; los que muerden ahí son atribución y crudo archivado.
- **Salido de la primera prueba de integración**: la puerta escribe el fichero entero, así que «añadir una
  línea al log» es releer 106 KB y reescribirlos — y luna lo hizo sin que se le pidiera. Ningún hook mira
  el tamaño, así que una truncadura habría pasado igual de limpia. Añadido freno: la puerta se niega a
  ENCOGER una página existente salvo `--reemplaza`. Revertida la entrada espuria que dejó la prueba.

## [2026-08-18] ingesta diaria YouTube (Marco Reyes, Kimi falló FASE -1) | 30 años en máximos de 2007, vertido del Caroline Bazen frente a Omán, Fed a 4 voces
- [[pulso-video-2026-08-18]]: 8 vídeos/5 canales; descartes con motivo (Cárpatos Media/Apertura, 3
  duplicados del 17-ago, ~20 NegociosTV y ~53 Bloomberg TV redundantes/domésticos, 2 Bloomberg Talks sin
  cartera ni hilo abierto). `destila video` en Horizons ME&A dio 0 bytes con exit 0 —
  `[DEGRADADO: destila video exit 0 vacío]`, reintento OK. Síntesis (2 pases) + `verifica_cobertura.py`:
  2 tensiones `SIN RESPALDO` por heurística no aplicable a tensión genuina, verificadas a mano por grep;
  1 `IGNORADO` incorporado. Contraste con [[pulso-2026-08-17-a-18]]: 5/6 temas coinciden.
- **`[ESCALAR: raw/pulso-video/ bloqueado en 0555]`** — el directorio padre no admite crear el
  subdirectorio del día; intento de chmod bloqueado (correctamente) por el clasificador. Escotilla
  `crudo: no disponible` usada con razón real: crudo conservado en `scratchpad/yt-2026-08-18/`, pendiente
  de archivar. Pide revisión de Carlos.
- Cierre a posteriori del run del 17-ago (ver entrada de abajo). Editor-jefe aplicado, lint 0 rotos,
  index.md e [[ormuz-y-riesgo-energetico-2026-08]] ampliados, memoria VIGENTE actualizada.

## [2026-08-17] ingesta diaria YouTube (Marco Reyes) | cierre a posteriori del run cortado en PASO 7
- El run del 17-ago escribió [[pulso-video-2026-08-17]] (5 vídeos: Misterpuertas, JavierDV, 3x Bloomberg TV)
  y se cortó ahí — mismo patrón ya documentado en VIGENTE ("PASO 8-9 puede cortarse tras escribir la nota"):
  solo sobrevivió por el commit de vault backup, sin log ni commit propio. Cerrado hoy (18-ago): faltaba
  `agente: marco-reyes` en el frontmatter (añadido), pase de editor-jefe aplicado (2 wikilinks huérfanos
  cerrados: `[[riesgo-real-vs-volatilidad]]`, `[[plataformas-de-internet-de-china]]`; el resto de su
  punch-list era precisión de detalle sobre un día ya cerrado, no se reabre el crudo para eso). Crudo ya
  archivado en `raw/pulso-video/2026-08-17/` con manifiesto, índice ya enlazado — solo faltaba el cierre.

## [2026-08-17] sistema | auditoría propia: el symlink de los SKILL era un fallo, y OmniRoute
- **El symlink de la entrada anterior NO vale, y lo descubrió intentar usarlo**: con `SKILL.md` como
  enlace, `update_scheduled_task` falla con `Invalid file path: path traversal detected`. Leerlo sí
  funciona —que es lo que se había comprobado—, así que la verificación fácil pasaba y la de verdad no.
  El enlace **duro** engaña al planificador pero lo rompe `Edit` (escribe por reemplazo): los inodos se
  separan y el planificador se queda con la versión vieja **en silencio**. Descartados los dos.
  Solución: **dos copias reales** + `scripts/sincroniza_skills.py` (`--comprueba`/`--empuja`/`--trae`),
  cableado al vigía del domingo. No elige ganador ante deriva a propósito: lo dice y decide Carlos.
- **OmniRoute**: murió como PROVEEDOR (el reparto flash/pro a modelos gratuitos), sigue vivo como
  FONTANERÍA (gateway `:20128`, ejecutables `omniroute-*`). Corregidas las 12 referencias vivas que
  prometían enrutado; los ~150 sitios históricos no se tocan (regla de evolución).
- **Candado retirado, texto superviviente**: `extraccion-de-fuentes.md` prometía dos veces un veto de
  lectura de `perfil/` por `hook_bloquea_perfil_en_kimi.py` — fichero que no existe desde el 04-ago,
  cuando el hook se reconvirtió al verbo contrario. Trece días confiando en una red retirada.
- **Auditoría de Kimi (`15ea9bc`) revisada**: sus tests pasan; arregló el YAML de las 10 fichas de agente
  y dejó **el mismo defecto en 10 de los 12 SKILL** (dos puntos sin comillas en `description:`) — 31/31
  válidos ahora. Y tres rutinas creaban página nueva sin plantilla con `agente:`, o sea que mi propio
  hook las habría bloqueado hoy: cerrado en la fila `Escribe` de las 12.

## [2026-08-17] sistema | atribución de autoría + los 12 SKILL.md al repo
- **La premisa se corrigió antes de tocar nada**: 11 de los 12 agentes YA tenían `Write`/`Edit`. Lo que
  faltaba no era potestad, era AUTORÍA. Tres registros que responden preguntas distintas: `agente:` en el
  frontmatter (quién CREÓ, nunca se reescribe), la nota de evolución firmada (quién AÑADIÓ) y el trailer
  `Agente:` del commit (quién hizo cada cambio). Cruzarlos es la verificación. Regla en `reglas-nucleo.md`
  § Atribución; lo exige `hook_exige_atribucion.py` (nuevo) solo al CREAR — las páginas viejas no se
  rellenan hacia atrás, no se sabe quién las escribió.
- **Hueco cerrado**: `hook_bloquea_escritura_perfil.py` solo mordía bajo capa externa, así que los 11
  agentes Anthropic desatendidos podían reescribir `perfil/` — justo el riesgo que su docstring nombraba.
  Segundo disparador: la marca del planificador en la PRIMERA línea del transcript (medida: byte 150).
- Cuatro casos resueltos por Carlos: `perfil/` sigue vetado (a), los 4 asesores siguen read-only (b),
  `carlos-barez` recupera `Write` (c), el sintetizador CREA durables nuevas pero no reescribe (d).
- **Los 12 `SKILL.md` (1.555 líneas) entran al repo** con symlink desde `~/.claude/scheduled-tasks/`; las
  12 siguen `enabled` y el `Read` atraviesa el enlace. Importados sin cambios, en su propio commit.

## [2026-08-17] sistema | las 12 rutinas activadas + diagrama de turnos
- **Las 12 activas en el planificador.** 11 ya lo estaban; la única apagada era la CKO (`enabled: false`
  desde el 2026-08-04, sin motivo registrado en el vault). Encendida por decisión de Carlos: vuelve a
  correr a diario a las 11:05.
- No había «rutinas antiguas» que desactivar: la conversión reutiliza las mismas 12 (edité sus `SKILL.md`
  en el sitio), así que no hay duplicados que puedan pisarse. La única heredada,
  `briefing-diario-cerebro-carlos`, sigue `enabled: false` y renombrada a `.disabled` desde el 27-jul.
- **El rollback existe en dos niveles y no hay que preparar nada**: git (un commit por conversión, de
  `653079a` a `147161e`) y la red de las propias rutinas — cada `FASE -1` cae a `ejecutor-sonnet`/
  `ejecutor-haiku` con identidad y ruta pegadas, dejando `[DEGRADADO: agente <x> no registrado]`. Por eso
  los ejecutores genéricos no se borran.
- Actualizadas 6 `description` del planificador que seguían describiendo el reparto viejo en la barra
  lateral (riesgo, gestor, veredicto, sintetizador, mantenimiento, técnico).
- Diagrama para Carlos, publicado como artefacto privado **«Los turnos del Cerebro»**: timeline de la
  cadena de la mañana, qué se enciende cada día, las tres capas de modelo, el flujo interno del
  fundamental y las 12 fichas con su modelo, tools y encargos mecánicos, más la escalera de fallos.
- **Pendiente y sin resolver**: los 12 `SKILL.md` viven en `~/.claude/scheduled-tasks/`, fuera del repo.
  Hoy se editaron ~1.400 líneas críticas sin control de versiones. Es lo primero de la próxima sesión.

## [2026-08-17] sistema | las 12 rutinas con agente propio (12/12) — cerrado
- Convertidas de una tanda las 6 que quedaban: **daniel-ferrer** (Sonnet) · **gestor-de-cartera** (Sonnet) ·
  **sintetizador-durable** (Haiku) · **veredicto-semanal** (Sonnet) · **elisa-fernandez** (Opus) ·
  **mantenimiento-semanal** (Haiku). Las 12 `FASE -1` invocan ya por `subagent_type`, con caída a
  `ejecutor-*` y `[DEGRADADO: agente <x> no registrado]` si el tipo no estuviera.
- **La CIO pedía su modelo en prosa.** Su `SKILL.md` abría con «REQUIERE MODELO POTENTE (Opus 4.8)» y el run
  corría en el modelo que tuviera la app ese día — una petición, no una garantía, y con la versión ya
  caducada. Ahora lo fija `model: opus` en su ficha, sin número de versión: cuál es la vigente lo sabe el
  harness, no un fichero de hace meses.
- **Dos firmas y dos fotos incrustadas, del mismo mal.** El sintetizador firmaba sus commits como
  `Claude Opus 4.8` cuando lleva meses en Haiku. El gestor comparaba la deriva de bloques contra
  «tangibles ~44,5% / tech ~28% / China ~9%» escritos en el procedimiento, que mide el paso del tiempo y no
  la deriva; y listaba 19 tickers a mano, dejando fuera en silencio cualquier posición comprada después.
  Los tres pasan a leerse del fichero en cada run. Daniel tenía el mismo «~45 %» que Elena por la mañana.
- `mcp__scheduled-tasks__list_scheduled_tasks` se muda a la ficha de mantenimiento: `ejecutor-haiku` la
  llevaba **solo para servirle a ella**, y con él la heredaba cualquier rutina que usara el ejecutor
  genérico. Es justo el reparto ciego que la conversión venía a cerrar.
- Retirado el peldaño a `ejecutor-haiku` también en riesgo, gestor y veredicto. En veredicto es el más
  claro: resolver mal una predicción corrompe la calibración de todo el sistema, así que un run barato que
  resuelve a ojo hace más daño que un run que no corre.
- Balance del día en boilerplate: **cero** ficheros con el párrafo de protocolo de fallo copiado. Vivía en 4
  de las 12 rutinas por duplicado y ahora hay una regla por rutina que apunta a `capa-mecanica.md`, más la
  regla del techo de `MAX_ARGV` con su `wc -c`, que subió allí como fuente única.

## [2026-08-17] sistema | Carlos Bárez, agente con nombre (6/12)
- `.claude/agents/carlos-barez.md` (**Sonnet**, 14 tools). El distinto de los seis: su rutina nunca tuvo
  delegación de run entero porque ya era híbrida. Sigue siendo **orquestador fino**.
- Nació en Opus por la mañana, para no degradar lo único que no delega — el contraste anti-anclaje del PASO
  6, que viene de un fallo real (Moody's y Booking degradadas dos días seguidos por el lenguaje previo de
  cartera). **Carlos propuso la salida buena el mismo día**: «todo en Sonnet excepto el paso que necesites».
  Así que ese paso salió a su propio agente, `contraste-anclaje` (**Opus, read-only**, sin Bash: recibe la
  tesis a ciegas y devuelve dos párrafos), y la coordinación bajó a Sonnet. El modelo caro pasa de pagarse
  en todo el run a pagarse en una llamada con entrada pequeña.
- De paso quedó dicho por qué ese contraste «nunca se delegaba»: no era privacidad —un subagente Anthropic
  no es capa externa— sino no degradar el juicio. Nombrado el motivo real, la solución era evidente.
- **Sin `Write` ni `Edit`, a propósito.** Su `SKILL.md` decía «si te encuentras escribiendo archivos del
  vault en este hilo, te has salido del diseño». Eso era una advertencia que dependía de que alguien la
  recordara a las 4:30; ahora es mecánica. El scratchpad se sigue escribiendo por Bash.
- La traza de la Etapa 1 de la caza decía `[DEGRADADO: destila --tipo criba exit N]`, pero **`criba` es un
  verbo de OmniRoute, no un `--tipo`**. Una traza con un nombre que no existe no se encuentra buscándola.
- **`recopilador-fundamental` llevaba un callejón sin salida desde su creación**: su primera fuente de datos
  eran «las MCP financieras, descúbrelas con ToolSearch» y su `tools:` no incluye ninguna — solo Perplexity.
  No se notaba porque el punto 2 (helper REST por Bash) recogía el run cada vez, en silencio. Invertido el
  orden y dicho por qué; su `description` decía lo mismo y también se corrigió. Tercera degradación muda del
  día, después de `enlaza` en Inés y en Sofía.

## [2026-08-17] sistema | Sofía Navarro, agente con nombre (5/12)
- `.claude/agents/sofia-navarro.md` (**Sonnet**, 13 tools — el juego más ancho: es la única persona que
  descubre fuera del vault). Cubre los **seis días** que no son jueves; el meta-run de arquitectura del
  jueves sigue sin delegarse, como la CIO. Si algún día se quiere aislar también, es un fichero con
  `model: opus` y una línea.
- Perplexity `search`/`ask`/`research` sí — están en su Presupuesto con caps —, **`reason` no**: no aparece
  en ningún paso y el juicio es suyo.
- **Una propuesta que se perdía**: los scouts que merecen ser permanentes se proponían «chip `spawn_task`;
  fallback: sección Propuestas». Al revés — un chip nacido en un run desatendido de las 11:00 aparece en una
  sesión que nadie mira. Ahora el informe es el sitio obligatorio y el chip, un extra.
- `enlaza` sin traza propia **por segunda vez hoy** (ya pasaba en Inés): el PASO 3 solo nombraba el
  `[DEGRADADO:]` de `duplicidades` y `caducidad`, así que un `enlaza` caído se llevaba en silencio las
  conexiones no hechas del día — que son el valor diferencial de ese paso. Tres encargos, tres trazas.
- La plantilla `informe-conocimiento.md` sube a «Lee» (cuarta rutina con el mismo hueco) · boilerplate
  unificado · retirado el cuarto peldaño a `ejecutor-haiku`: Haiku no sostiene una misión con squads, y
  taparlo con él convierte un fallo visible en un informe flojo que nadie relaciona con la caída.

## [2026-08-17] sistema | Inés Torres, agente con nombre (4/12)
- `.claude/agents/ines-torres.md` (**Sonnet**, mismas 8 tools que Marco: su dato macro sale de
  `market_data.py` por Bash, no por MCP). Brazo Anthropic; la vía 1 sigue siendo Kimi.
- **Sin Perplexity, y es decisión, no olvido**: [[reparto-de-modelos]] la lista como «wiki local +
  Perplexity (sí disponible)» pero ningún PASO la invoca. «Disponible» no es «usada»; si un paso la
  necesita, se añade la tool y se dice en el paso.
- Su `FASE -1` instruía a Kimi: «si el hook de privacidad bloquea `perfil/`, continúa sin esa lectura».
  **Ese hook no existe desde el 2026-08-04.** Retirado: enseñar a un ejecutor a leer como normal un bloqueo
  inexistente es peor que no decir nada.
- `enlaza` (verbo, carril pro) no tenía traza propia: el PASO 4 solo nombraba el `[DEGRADADO:]` de
  `--tipo novedad`, así que un `enlaza` caído desaparecía sin rastro. Ahora son dos encargos con dos trazas.
- El puntero a `[[reparto-kimi-claude]]` pasa a [[reparto-de-modelos]] · la plantilla
  `informe-estrategia.md` sube a «Lee» (estaba solo en «Escribe», que se consulta cuando ya es tarde) ·
  boilerplate unificado · retirado el cuarto peldaño a `ejecutor-haiku`.

## [2026-08-17] sistema | Marco Reyes, agente con nombre (3/12)
- `.claude/agents/marco-reyes.md` (**Sonnet**, 8 herramientas — el juego más corto hasta ahora: todo su
  instrumental es Bash). Es el **brazo Anthropic** de una rutina que sigue intentando Kimi primero, así que
  la `FASE -1` conserva la vía 1 por Bash y solo cambia el peldaño 2.
- **Mismo defecto que Elena, y peor colocado**: el PASO 5 decía «síntesis delegada a Kimi en UNA llamada» y
  el bloque de capa mecánica que lo sustituye colgaba del **PASO 6, que es *Verificar***. Dos motores para la
  misma síntesis, con el bueno bajo el encabezado equivocado. Retirado el de Kimi y devuelto el bloque a su
  paso, con nota de evolución.
- Copia-pega falso en el CONTRATO: «el ejecutor hereda Bash **y el navegador**» — de la ficha de Elena, que
  sí abre «Read online». Marco no abre ninguna página; un vídeo sin subtítulos se marca y se sigue. Por eso
  su agente no lleva `WebFetch`.
- Retirado el tercer peldaño a `ejecutor-haiku`: si el brazo Sonnet no puede, el fallo hay que verlo, no
  taparlo con el modelo más barato donde ya no queda nadie mirando.
- Boilerplate: 3 sitios × protocolo de fallo de `destila`, unificados en la regla única de `## PASOS`. La
  regla del techo `MAX_ARGV` sube a `capa-mecanica.md` (fuente única) y Elena pasa a apuntar ahí.
- Nueva casilla de autocheck en **las dos** rutinas de ingesta: los dos pases (`sintesis` → `cobertura`)
  hechos y en orden, o su `[DEGRADADO:]`, y los `SIN RESPALDO`/`IGNORADO` resueltos en la nota.
- **Un «sin `perfil/`» que lleva 13 días caducado, en 3 sitios.** Marco lee los nombres de cartera actual
  para el `--forzar` del PASO 3, y tres textos decían que eso no puede pasar: la regla de alta en Kimi, el
  guardarraíl del PASO 5 («`perfil/` JAMÁS sale por capas externas») y, el peor, `capa-mecanica.md` —
  «el router lo deniega con código 4»—, que es la fuente única a la que apuntan las doce rutinas. **El veto
  de lectura lo levantó Carlos el 2026-08-04** y ese día se retiraron el veto por ruta (exit 4) y el escaneo
  por contenido. Los tres corregidos con nota de evolución: el criterio pasa a ser de utilidad (los pesos no
  aportan a un encargo mecánico, así que no se mandan), no de prohibición. Siguen intactos los dos que sí
  vinculan: **escribir** en `perfil/` y las credenciales.
  Una regla que promete un bloqueo que ya no existe es peor que no tenerla: se confía en ella en vez de
  pensar. Y esta prometía exit 4 a doce rutinas.

## [2026-08-17] sistema | Elena Vega, agente con nombre (2/12)
- `.claude/agents/elena-vega.md` (Haiku, 11 herramientas). Fuera las tres MCP de mercado —no cotiza nada y
  comparten el rate limit de 25 req/día con Jorne— y fuera Perplexity y `mark_chapter`. Del conector Gmail
  solo `search_threads` y `get_message`: Elena lee correo, no etiqueta ni envía, así que el resto sobra y
  quitarlo cierra la vía de un envío accidental en un run desatendido de las 03:03.
- **Grave 1 — el PASO 6 se mandaba a dos motores a la vez**: un párrafo decía que la síntesis la hacía
  `kimi-tarea` y otro, tres párrafos más abajo, que había bajado a `destila --tipo sintesis` + `cobertura`
  (2026-08-14). Un ejecutor que lee de arriba abajo nunca llegaba al pase de cobertura — el único que
  releía la fuente. Retirado el de Kimi; los dos pases quedan numerados y en orden.
- **Grave 2 — el `description` y la `FASE -1` seguían anunciando la síntesis en Kimi** desde hacía 3 días;
  replicado en 4 sitios del `SKILL.md` + [[reparto-de-modelos]], corregido con nota de evolución.
- **Grave 3 — el PASO 6 concatenaba todos los destilados sin medirlos.** `sintesis` está en
  `TIPOS_SIN_GRATIS`: por encima de `MAX_ARGV` (400k caracteres) el router no da error, salta de modelo y
  devuelve **vacío**, que se lee como «destila falló». Añadido `wc -c` antes de llamar y troceo por
  ficheros completos si pasa de 380k, con la fusión de parciales a cargo de Elena (es juicio, no mecánica).
- Menores: la lista «Lee» no incluía la plantilla `informe-pulso.md` ni cartera actual, que el PASO 8 y
  el JUICIO necesitan; el JUICIO llevaba un «~45%» de cartera incrustado sin fecha (hoy 44,5%: acertaba por
  poco y por poco tiempo) — ahora se lee del fichero; ~18 líneas de protocolo de fallo de `destila`
  duplicadas en 4 pasos, unificadas en una regla única a la cabeza de `## PASOS` que apunta a
  `capa-mecanica.md`.
- **Capa mecánica a `gpt-5.6-luna`** (petición pendiente de Carlos, aplicada hoy). Los dos carriles pasan
  al mismo modelo, así que el eslabón hermano se **elimina** en vez de duplicarse: un reintento contra el
  mismo id no es una red. Consecuencia dicha en voz alta y anotada en `capa-mecanica.md`: la distinción
  flash/pro desaparece de facto (los 5 de `TIPOS_PRO` corren donde los otros 19), las latencias medidas son
  de DeepSeek y hay que rehacerlas, y los 24 encargos de `TIPOS_SIN_GRATIS` se quedan con **un solo
  eslabón** — un fallo del modelo es salida vacía a la primera.
- De rebote: `revision_degradados.py` clasificaba por id exacto y habría marcado **toda** página mecánica
  nueva como degradada (un informe que grita cada día no lo lee nadie). Añadido Luna como primario limpio,
  conservando los dos de DeepSeek para las páginas anteriores a hoy.
- Pendiente: 10 rutinas por convertir · los 12 `SKILL.md` siguen fuera del repo, sin control de versiones.

## [2026-08-17] sistema | agentes con nombre (1/12) y cierre de `task_2983873f`
- Revisado el reparto de LLM de las 12 rutinas. Carlos decide **no** bajar a 2 motores: el tercero (capa
  mecánica) no cuesta llamadas, ahorra cuota de Kimi y solo cuesta latencia. Registrado para no re-litigarlo.
- Primer **agente con nombre**: `.claude/agents/jorne.md` (Haiku, 13 herramientas acotadas — fuera Gmail, que
  heredaba de `ejecutor-haiku`). Su `FASE -1` deja de pasar identidad y ruta. Registro verificado en vivo.
- El run de prueba destapó el bug de fechas por **tercera vez**: `yahoo` emite epochs pelados y `range=5d`
  da 5 SESIONES que se etiquetaban como 5 días naturales → cierres en sábado y domingo, y el disparador de
  reduce de MU apoyado en una secuencia que no existió. Verificador adversarial: **DÉBIL**.
- Arreglado en la raíz: verbo `market_data.py cierres` (fecha + día ya resueltos, aviso de fin de semana) con
  comprobación hermética en `--selfcheck`. [[at-2026-08-17]] marcado con nota de evolución, texto conservado.
- `SKILL.md` de Jorne: el PASO 5 obliga a **esperar** el veredicto antes de escribir (la lección estaba en
  memoria y volvió a fallar: ahora es regla), PASO 3 usa `cierres`, +2 casillas de autocheck.
- Pendiente: Elena Vega analizada (8 hallazgos, 3 graves) sin aplicar · 10 rutinas por convertir · sustituir
  DeepSeek V4 por GPT 5.6 Luna en `_omniroute.py`.

## [2026-08-17] mantenimiento | wikilinks partidos y nueva actualidad
- Unida la totalidad de los wikilinks partidos en dos líneas: Obsidian vuelve a renderizar los enlaces que el lint
  contaba como válidos pero no podía interpretar.
- Integrado [[pulso-video-2026-08-17]] en [[index]]; no queda ninguna página huérfana nueva.
- Mapa final: 810 páginas, 0 rotos, 0 huérfanas y 0 wikilinks partidos.
- Verificación: `git diff --check` y `python3 -m unittest tests/test_mapa_vault.py` → 3/3 OK.

## [2026-08-16] integracion | segunda pasada de densidad semantica
- La primera malla era navegable pero demasiado hub-céntrica: muchas sondas solo llegaban al índice y no a sus
  comparables ni al mecanismo de segundo orden.
- Añadidos cruces fechados entre electrificación/red/capex, AMD/Broadcom/Infineon, Micron/SK Hynix/Samsung,
  Visa/Mastercard/tokenización, Netflix/Disney/publicidad, salud, energía, banca y automoción.
- El grafo pasa de 8.726 a 8.781 wikilinks; se mantienen 0 rotos y 0 huérfanas.
- Detectados además 45 wikilinks partidos en dos líneas: no rompen el contador, pero Obsidian no los renderiza; quedan
  como siguiente saneamiento mecánico separado de la densificación semántica.

## [2026-08-16] integracion | actualidad fechada y saneamiento completo del grafo
- Creado [[indice-actualidad-2026-08]] con navegación temporal y ocho hubs por mecanismo; añadidos índices de las
  sondas del 13-ago y de las fichas empresariales del 14-ago.
- Los hubs conservan la actualidad como contexto fechado y enlazan hacia el marco durable sin ascender hechos por
  proximidad temática.
- Creados 16 hubs industriales mínimos, conceptos pendientes y nodos históricos de ingeniería para resolver destinos
  antes inexistentes sin inventar tesis ni cifras.
- Corregido `mapa_vault.py`: los wikilinks con ruta explícita conservan identidad y resuelven colisiones entre
  `empresas/` y `analisis-acciones/`; añadida regresión TDD.
- Resultado del mapa: 808 páginas, 0 enlaces rotos y 0 huérfanas. Plantilla e informe autogenerado quedan enlazados
  como artefactos explícitos, no como conocimiento.

## [2026-08-16] ingesta diaria YouTube | GAP 06→10-ago CUBIERTO por escrito (Marco Reyes, cierre del run de recuperación)
- Escritas las 5 notas pendientes del gap: `wiki/actualidad/pulso-video-2026-08-{06,07,08,09,10}.md` (53 vídeos,
  11+12+8+9+13, sobre los destilados ya commiteados en `scratchpad/yt-recuperacion-2026-08-{06..10}/`). Crudo ya
  archivado en `raw/pulso-video/2026-08-{06..10}/` con manifiesto (comprobado). Cero notas de fallo entre los 53
  destilados (el 15% de falsos exitos que se midio el 13-ago no reaparecio).
- Cifras criticas verificadas por grep contra el VTT crudo antes de escribir: NFP -23.000 (5 fuentes independientes
  el 07-ago), oro +2,52% a 4.407 (Cárpatos 07-ago), Berkshire caja 364.700M y MAGS 69,06 (08-ago), oro +24t y
  Patriot 20% (09-ago), SPR 298,7M/6,1M semanal y futuros Nasdaq +9.900M→-11.100M (10-ago). Sin cifras a ojo.
- Hilos cerrados en la ventana: "Jobs Friday" (CERRADO: -23k, erraron consenso/Goldman/Hollenhorst), Berkshire/caja
  (CERRADO: caja baja y el dinero vuelve a trabajar, 13F pendiente). Ormuz pasa de "acuerdo inminente" a "peaje
  Irán-Omán excluyente" con estrecho efectivamente cerrado (~5 buques/dia vs 14). Ciberataque al agua de EEUU
  actualizado (12+ estados, sin atribucion oficial). 5📌 predicciones registradas en las notas para el veredicto.
- Editor-jefe/autocheck: 0 enlaces rotos en las 5 notas (41-48 wikilinks cada una), frontmatter YAML valido, sin
  cifras sin magnitud ni wikilinks en backticks. Index actualizado (5 entradas, orden cronologico 05→11).
- Este cierre completa el `[ESCALAR]` abierto desde el 13-ago (destilado listo, faltaba escritura/cierre).
  La memoria `.rutina-video-aprendizajes.md` se actualiza: el gap sale de "Abierto" a historico.

## [2026-08-16] integracion | conexiones neuronales densas del conocimiento nuevo
- Interconectados los hubs de capex de IA, red eléctrica, semiconductores, materias primas, renta fija, salud,
  defensa, tensiones y límites de riesgo con enlaces causales hacia empresas, industrias y cartera.
- La malla distingue demanda real de financiación frágil, cuello de botella físico de narrativa, calidad de foso de
  precio y cobertura tangible de concentración factorial.
- Añadidos puentes explícitos desde las fichas recientes del índice hacia sus industrias y conceptos existentes; no se
  crearon industrias nuevas ni se ascendió actualidad a durable.
- Regenerado [[mapa-del-vault]]: 763 páginas, 8.280 wikilinks, 96 rotos y 22 huérfanas; sin incremento de rotos.
- Verificación: `python3 -m unittest tests/test_mapa_vault.py` → 2/2 OK. No se modificó `raw/`.

## [2026-08-16] mantenimiento | integración y saneamiento del cerebro
- Verificadas las cinco cifras críticas del enjambre contra filings y series primarias: capex/OCF 99,0%, márgenes de
  memoria/lógica, CAPE/top-10, HY OAS 271 pb y default private credit Fitch 6,0%; límites metodológicos documentados.
- Añadidas notas de evolución a financiación del capex de IA, semiconductores de memoria, marco de riesgo y fichas de
  Meta, Microsoft, Amazon y Alphabet. Integrados los candidatos 22 y 27 en `promociones-pendientes`.
- `scripts/cola_ingesta.py` regeneró la cola: 284/834 sin inventario. `mapa_vault.py` regeneró el mapa con identidad
  por ruta: 758 páginas, 96 enlaces rotos, 45 wikilinks partidos, 22 huérfanas y 27 colisiones explícitas;
  `analisis-accion` ya es tipo válido.
- Añadida regresión `tests/test_mapa_vault.py`; la suite completa queda en 71 tests. El dossier histórico de punteros
  conserva 17 frases desfasadas, separado del puntero actual 1/1 que pasa.
- Siguen abiertos: gap de vídeo 06-10 ago, claims de infraestructura caducados y acciones de Carlos (Kimi, TCC,
  backup externo, borrados y decisiones de cartera). No se modificó `raw/`.

## [2026-08-16] ingesta diaria YouTube (Marco Reyes vía ejecutor-sonnet, Kimi falló FASE -1 con cuota real agotada, exit 3, confirmado con `kimi-cuota`; cierre PASO 8-9 quedó incompleto y se completa a posteriori)
- Escrito `wiki/actualidad/pulso-video-2026-08-16.md`: ventana de fin de semana 15-16-ago, 8 vídeos/4 canales
  activos de 8 (Misterpuertas 1, Cárpatos 2, NegociosTV 2, Bloomberg TV 3). Destilado 8/8 vía `omniroute`
  primario (`opencode-go/deepseek-v4-flash`), 0 caídas a fallback. Crudo archivado en `raw/pulso-video/2026-08-16/`.
- 2 verificaciones adversariales (dentro del presupuesto de 3): bloqueo de Ormuz el viernes 14-ago CONFIRMADO
  CON MATIZ (Kpler/Reuters corroboran cero petroleros de crudo por AIS, "cierre completo" es marco retórico
  de Cárpatos, no dato garantizado — hilo cruza con la predicción activa del Brent, 15 días para su
  resolución); financiación de Nvidia con seis gestores/bancos ($500.000M) PLAUSIBLE con matices por ítem
  (MOU confirmado, cifra de utilización de GPU con conflicto de interés en la fuente declarado).
- **Fallo de proceso detectado hoy**: el run llegó hasta PASO 7 (escritura de la nota, 11:41) pero se cortó
  antes de PASO 8 (editor-jefe/autocheck/lint/log/commit) y PASO 9 (memoria). El archivo solo quedó en git
  por el commit automático de vault backup (`a8e6db2`, 12:41:55), no por un commit propio de la rutina —
  primera vez que esto pasa en la serie (08-13 y 08-14 sí cerraron con commit dedicado: `ca6bd44`, `bfb4d95`).
  Consecuencia detectada aguas abajo: el watchdog de `cerebro-mantenimiento-semanal` (mismo run, 08:53 UTC)
  grepeó `log.md` para el estado de la rutina y reportó "último: 14-ago" en `estado-del-sistema.md` porque
  esta entrada aún no existía — semáforo de la rutina desactualizado por la cadena, no por caída real.
  Reparado a posteriori: entrada de log, entrada de `index.md` y commit dedicado. Sin evidencia de qué cortó
  el turno (no hay traza de límite de sesión propio en el scratchpad); coincide con la ventana en la que
  `estado-del-sistema.md` reportó 20 choques de límite de sesión en el resto del equipo hoy — hipótesis más
  probable, no confirmada. Lección subida a `VIGENTE` de `.rutina-video-aprendizajes.md`.
- Editor-jefe (ejecutado a posteriori junto con el resto del cierre): 4 hallazgos, los 4 rechazados por falso
  positivo con motivo, sin aplicar — "inconsistencia" de magnitudes (432.000M déficit de julio vs. 1,17
  billones de intereses del año fiscal: son cifras distintas, no notación distinta de la misma); atribución
  "sin fuente" del dato de PER de los 7 Magníficos (verificado contra el destilado: es JP Morgan, misma
  fuente que la frase anterior en la misma oración); 2 nits de prosa (jerga "VTT" ya convención de la serie,
  claridad del handoff de nota de evolución) sin riesgo factual, no aplicados por no ser bloqueantes.
- Creada [[evaluacion-cartera-elisa-2026-08]]: 4.000€, 6 posiciones → **50% en tangibles** (commodities+
  plata+oro), con solape interno (el índice de commodities ya lleva metales preciosos)
- Dato "plaa" asumido como plata, sin confirmar — pendiente con Elisa
- Mismo error factorial que [[evaluacion-cartera-carlos-2026-07]] pero más agudo (50% vs 44,5%) y sin núcleo
  de calidad que compense

## [2026-08-16] mantenimiento | semáforo semanal (6 runs muertos, 80% refutadas adversarial, 20 límites sesión)
- **6 runs programados muertos por límite plan**: mantenimiento ×2 · veredicto/estrategia/riesgo/cio ×1 cada
- **20 choques de límite sesión** detectados (riego de ejecución incompleta)
- Verificador adversarial: 80% REFUTADA/DÉBIL vs 20% CONFIRMADO (revisar umbral)
- 8 memorias sin formato VIGENTE/HISTÓRICO (pendiente migración)
- Cola ingesta: 274/824 sin inventario (33% rezagadas)
- Kimi capa media: 62% de caídas a fallback (no delegar más)

## [2026-08-16] sistema | configuracion de canales Agent Reach (key Exa + runtime yt-dlp)
- **Exa con key propia**: tomada de `~/.cerebro/secrets.env`, configurada en mcporter
  (`https://mcp.exa.ai/mcp?exaApiKey=...`), VERIFICADA con búsqueda real (FOMC jul-2026). Sale del rate-limit
  de la capa gratuita.
- **yt-dlp**: `--js-runtimes node` en `~/.config/yt-dlp/config` (node presente, no deno) — verificado sin warning.
- **小宇宙** completo: Groq key + ffmpeg 9.0.1 estático → `✅ 完整可用`.
- PENDIENTES (requieren paso manual del usuario, no automatizable): gh `auth login` (device flow) ·
  LinkedIn `uvx mcp-server-linkedin@latest --login` · Twitter cookies (`agent-reach configure
  twitter-cookies`) · 雪球 login en Chrome + `agent-reach configure --from-browser chrome --platform xueqiu`
  (instalado `browser-cookie3` en el venv; sin sesión no hay cookies) · OpenCLI extensión de Chrome (daemon
  corriendo en :19825, extension not connected).

## [2026-08-16] sistema | instalado Agent Reach v1.5.0 (CLI multi-plataforma) + canales
- Instalado en venv `~/.agent-reach-venv/`, binario enlazado a `~/.local/bin/agent-reach`. Skill ya presente.
- Canales ACTIVOS (verificados real): B站 búsqueda · V2EX · RSS · Jina web · 小宇宙 (Groq key + ffmpeg 9.0.1
  estático a `~/.local/bin/ffmpeg`, sin brew/sudo) · yt-dlp 2026.07.04 (enlazado, con aviso de JS runtime no
  bloqueante) · Exa configurado en mcporter.
- Instalados, PENDIENTES de credenciales del usuario: twitter-cli (cookies) · opencli 1.8.6 (extensión Chrome:
  https://chromewebstore.google.com/detail/opencli/ildkmabpimmkaediidaifkhjpohdnifk) para Reddit/FB/IG/XHS ·
  xueqiu (cookies) · LinkedIn MCP (configurado, requiere `uvx mcp-server-linkedin --login`) · gh auth login.
- ⚠️ **Exa en rate-limit de capa gratuita (429)**: mismo cuello que `destila`; sugiere key propia en
  https://dashboard.exa.ai/api-keys. Re-probar antes de dar Exa por disponible en un run.

## [2026-08-16] conocimiento | enjambre de 12 scouts (Sofía Navarro, CKO — encargo Carlos)
- Encargo verbal de Carlos: barrido global de internet con enjambre "muy nutrido". Squad récord de 12 scouts
  read-only en paralelo (cap CKO ≤3 superado, declarado en autocrítica): macro · geopolítica · earnings ·
  empresas · cartas · tendencias · bajistas · alcistas · riesgos · materias · China/EM · IA/tech. Exa/Jina +
  market_data.py; 0 scouts caídos.
- Escrito `wiki/conocimiento/conocimiento-2026-08-16.md`. Checkpoint de salidas en
  `scratchpad/enjambre-2026-08-16-checkpoint.md` (crudo a disco, nunca en contexto).
- Foto del mundo: Ormuz reflaciona (Brent $88,5, TTF >€60/MWh, almacenamiento UE al 59%); capex IA absorbe
  el FCF de los 4 hiperescaladores (ratio 99% en Q2) con leverage saliendo del balance (leasings $1,5T);
  valoraciones en extremos (CAPE 42,6, top-10 S&P ≈40%, HY 271 pb) con voces alcistas (Yardeni 8.400) y
  bajistas (Grantham/Hussman) en tensión no resuelta.
- 5 cifras de alto impacto marcadas para verificación previa a durable; propuesta a Elisa de institucionalizar
  el "enjambre" como variante de squad CKO.

## [2026-08-15] analisis-accion | busqueda de sondas recuperada y completada — 104 paginas durables
- La busqueda abandonada (sesion ponytail en cache de plugin, no el wiki) quedo en 87/104 paginas; se migro y completo aqui.
- Migradas 87 paginas de cache ponytail → `wiki/analisis-acciones/` (script `scripts/migrar_analisis_ponytail.py`), kebab-case + frontmatter `tipo: analisis-accion`.
- Generadas 17 faltantes con agentes: Asia (alibaba, nio, tsmc, tencent, alibaba-hk, toyota-motor, tata-consultancy-services, hdfc-bank) y LatAm/Aus (mercadolibre, petrobras, vale, itau-unibanco, bradesco, ambev, america-movil, cemex, bhp-group).
- Creado `wiki/analisis-acciones/index.md` (104 valores). Relacion: capa de analisis exhaustivo; `wiki/empresas/` sigue siendo la capa de conocimiento curado.
- 3 wikilinks rotos = pendientes declarados (banco-bradesco, banco-santander-brasil, nubank). Cache ponytail intacto.
- [ESCALAR] Verificar a ojo las cifras de mercado de cada pagina antes de usarlas en tesis; cada pagina lleva su fecha de corte y fuente.

## [2026-08-15] analisis-accion | ficha durable MercadoLibre Inc. (NASDAQ: MELI)

- Escrita `wiki/analisis-acciones/mercadolibre.md` (~430 líneas) con corte 2026-08-15: ficha, modelo de negocio, financiero FY21-FY25 + trimestres hasta Q2 2026, segmentos (commerce vs fintech: crédito 22% del ingreso TTM), geografías (Brasil ~54%, México ~23%, Argentina ~19% del TTM), KPIs (GMV 77 329 M, cartera crédito ~16 000 M, morosidad 7%) y valoración (PER 50,2; P/FCF 7,5).
- Tesis: crecimiento récord (ingresos +50% YoY en Q2 2026) a cambio de margen operativo 12,2%→6,7% — tercer trimestre consecutivo de caída del beneficio neto (Reuters 05-ago). Punto de verificación: estabilización de margen en Q3/Q4 2026.
- Fuentes: StockAnalysis (S&P Global/Fiscal.ai), Reuters (Q2 2026 y entrevista CEO 29-abr), Business Wire (Q1/Q2 2026), PYMNTS, Wikipedia, IR MELI. Sin cifras inventadas; cálculos propios etiquetados como análisis del agente.

## [2026-08-15] analisis-accion | ficha durable NIO Inc. (NYSE: NIO)

- Escrita `wiki/analisis-acciones/nio.md` (264 líneas) con corte 2026-08-15: ficha, modelo de negocio, financiero FY21-FY25 + 1T26 (S&P Global/StockAnalysis), entregas 7M26 227.057 (+68%), julio 35.934 (+71%), red de 4.017 swap stations y giro a capital estatal, competencia (BYD/Xpeng/Li Auto) y guerra de precios china.
- Hallazgo clave: 4T 2025 primer trimestre rentable en GAAP (+122M CNY), margen bruto 1T26 al 19%; valoración P/S 0,77x en mínimos históricos con patrimonio casi nulo (P/B 18,8x) — tesis de inflexión por confirmar en 2T26 (1-sep).
- Todo cifra con fuente (Yahoo, StockAnalysis, Reuters, TipRanks, Stocktwits, Wikipedia, GlobeNewswire); sin cifras inventadas, estimaciones marcadas como análisis del agente.

## [2026-08-15] durable | sintetizador semanal — 10 candidatos nuevos (12-14-ago), rescan completo

- **Ejecución FASES 0-4**: escaneadas últimas notas efímeras (pulso-video-2026-08-{11,13,14}.md, pulso-2026-08-{12-a-13}.md, af-2026-08-{12,14}.md) buscando hechos VERIFICADOS (≥2 fuentes independientes) y DURABLES (estructural, no efímero).
- **FASE 1 degradada**: `destila --tipo escaneo-durable` entrada vacía — escaneo manual de pulsos de última semana ejecutado (Ormuz, renta fija, desinflación, guerra precios IA, electricidad IA fantasma, cobre/energía, Rumanía nuclear, financiación Nvidia, chipflation/software).
- **FASE 1.5 degradada**: `destila --tipo familias-cifras` entrada vacía — scan manual sin contradicciones significativas detectadas (variación Brent es por cierre natural, sin segundo comparador para demanda eléctrica).
- **Candidatos nuevos propuestos**: 10 candidatos (#21-30): desinflación/Fed hawkish, 30Y Tesoro 5,216%, Ormuz ataque 14-ago, chipflation software, cobre transición energética, Rumanía nuclear apagón, MOUs Nvidia no vinculantes, demanda eléctrica IA fantasma, mercado exige payoff concreto, Maersk transporte alto.
- **Actualizado**: `wiki/sintesis/promociones-pendientes.md` (revisado: 2026-08-15), metadatos añadidos. Todos los enlaces verificados, sin rotos (13 wikilinks existentes).
- **Nota de proceso**: emisión de deuda IA sobre tipos largos verificada por 5 fuentes independientes en <48h (Kaplan, Warsh, Meligot, State Street, Bloomberg) — densidad de convergencia inusual.

## [2026-08-14] fondos | ingesta de 10 frentes de fondos de inversión con cartas públicas (plan sondas-fondos-nuevos)
- Ejecutado el plan `docs/superpowers/plans/2026-08-14-sondas-fondos-nuevos-plan.md`: 10 sondas read-only (ola 1 + ola 2) destilaron el material ya recopilado en disco (cartas, informes, 13F, entrevistas) en dossiers verificados con URL por cifra.
- Creadas 12 fichas de inversor: [[prem-watsa]], [[tom-gayner]], [[dan-loeb]], [[david-einhorn]], [[bill-nygren]], [[tom-akre]], [[seth-klarman]], [[li-lu]], [[mohnish-pabrai]], [[stanley-druckenmiller]], [[george-soros]] y [[robert-goldfarb]].
- Creadas 15 páginas de fuente: [[fairfax-cartas]], [[markel-cartas]], [[third-point-cartas]], [[greenlight-cartas]], [[oakmark-cartas]], [[dodge-cox-comentarios]], [[akre-cartas]], [[polen-comentarios]], [[tweedy-browne-cartas]], [[baupost-fuentes]], [[himalaya-fuentes]], [[pabrai-cartas]], [[duquesne-fuentes]], [[soros-fuentes]] y [[sequoia-cartas]].
- Cobertura marcada explícitamente: `[Sin datos]`/`[Sin acceso]` donde el material no permitió verificar (Baupost y Druckenmiller no publican cartas; varias series con huecos de trimestres; transcripciones 2026 de Druckenmiller pendientes).
- Actualizados [[index|índice]] (sección Inversores y Cartas de fondos) y log. Sin borrar nada (regla de evolución).

## [2026-08-14] empresa | promoción durable de 12 sondas empresariales
- Creadas [[samsung-electronics]], [[toyota-motor]], [[nestle]], [[lvmh]], [[totalenergies]], [[hsbc-holdings]], [[siemens]], [[schneider-electric]], [[reliance-industries]], [[petrobras]], [[abbvie]] y [[tencent]].
- Conservados como `[Pendiente de verificar]` los precios, múltiplos, valores intrínsecos y probabilidades que no quedaron reconciliados por las sondas; no se ascendieron rumores.
- Actualizados [[index|índice]] y enlaces recíprocos en [[semiconductores-de-memoria]], [[mineria-industrial-y-energia]], [[plataformas-de-internet-de-china]] y [[salud-y-farma]].
- Pendientes de crear las industrias enlazadas por Toyota, Nestlé, LVMH, HSBC, Siemens, Reliance y Schneider cuando exista una capa sectorial verificable.

Registro cronológico append-only de ingestas, consultas y mantenimientos del wiki.

## [2026-08-14] empresas | promoción durable del lote de 12 sondas empresariales
- Creadas [[airbus]], [[rolls-royce]], [[shell]], [[danaher]], [[thermo-fisher]], [[procter-gamble]], [[unilever]], [[novartis]], [[astrazeneca]], [[infineon]], [[iberdrola]] y [[mufg]] en `wiki/empresas/` con la plantilla `tesis-de-empresa`.
- Se ascendieron solo hechos operativos/financieros presentados como confirmados; precios, múltiplos, rumores, escenarios y cifras con fuente única o discrepantes quedaron fuera o como `[Pendiente de verificar]`.
- Añadidos enlaces de vuelta en las industrias existentes: [[aeroespacial-y-defensa]], [[salud-y-farma]], [[mineria-industrial-y-energia]] y [[semiconductores-logica-y-computo-ia]]. Consumo, utilities y banca quedan enlazadas a páginas de industria pendientes, sin inventarlas.
- Actualizado [[index]] con las 12 fichas. Ejecutado `scripts/puente_industria_empresa.py`; el informe se conserva en la verificación de esta sesión y no se aplicaron enlaces automáticos.

## [2026-08-14] sistema | regla de ficha propia para sondas empresariales
- Decisión de Carlos: toda sonda que analice una empresa, una vez verificada, asciende siempre a
  `wiki/empresas/<empresa>.md`; una síntesis sectorial nunca sustituye la ficha propia.
- La ficha debe servir para análisis posteriores y búsqueda de oportunidades; hechos no confirmados quedan como
  pendientes o fuera, y las evoluciones se añaden sin borrar tesis anteriores.

## [2026-08-14] sistema | continuación de la auditoría: prerregistro `informe` CERRADO, sintetizador diagnosticado, gateway degradado
- **Prerregistro `informe` ejecutado y cerrado** (decisión 1 del 2026-08-13, la que quedaba): K3 corrió
  `tension-tres-voces` sobre el MISMO encargo que V4 (`informe:f3429db4`) forzando
  `OMNIROUTE_MODEL=openrouter/moonshotai/kimi-k3` por el gateway — 3 intentos, 0 fallos, run en
  `pruebas/dorado/runs/2026-08-14-k3-f3429db4.json`. Veredicto `--compara` contra V4-pro:
  **INDISTINGUIBLE en los seis ejes** (literalidad 1.0 contra 1.0, rangos solapados). El criterio
  escrito se cumple: `informe` puede bajar a capa 3 — y V4-flash también empata, así que el carril que
  manda la medición es flash. NO cableado: ejecutar la bajada o ampliar antes el dorado con un segundo
  caso es decisión de Carlos. Nota completa en [[reparto-de-modelos]] § 2026-08-14 (tarde).
- **Sintetizador durable: NO está caído.** El "no corre desde 26-jul" de `estado-del-sistema` era lectura
  errónea: corre los SÁBADOS 08:00, su último run fue el sábado 08-08 (commit `35001a2`, 4 candidatos) y
  el siguiente es mañana 15-08. La FASE 1.5 de reconciliación (decisión 1 de la revisión de capa
  gratuita) no ha corrido nunca simplemente porque se escribió el 13-08, entre semana: se estrena sola
  mañana. Si mañana no aparece la sección "Familias de cifras sin reconciliar" en
  `promociones-pendientes.md`, ENTONCES sí hay algo roto.
- **Gateway OmniRoute degradado a opcional en [[pendientes]]** (decisión de Carlos): ya no bloquea nada
  crítico (la capa 3 la sirve V4 por el puente OpenCode) y su premisa estaba caduca en los dos sentidos —
  hoy `gateway_vivo()` → `True` y sirvió el run del prerregistro. Estado real: intermitente, no muerto.
- Verificado durante la sesión: el barrido de falsos éxitos del puente OpenCode vive en `_llama_go`
  (`_omniroute.py`), compartido por los 24 encargos mecánicos (no solo en `opencode-destila`). Y el
  hueco del caso UBS sigue medio abierto: los pulsos de newsletters NO declaran `destilado_por:`, así
  que el hook de verificación y el grep de magnitudes no protegen ese eslabón (los de vídeo sí).
  Anotado, no corregido: Carlos no lo eligió en la tanda de hoy.

## [2026-08-14] sintesis | ascenso de la cuarta tanda de sondas
- Evaluadas las 75 sondas del 13-14 ago: se ascienden mecanismos transversales, no titulares ni cifras dudosas.
- Actualizados por evolución append-only [[renta-fija-y-tipos]], [[financiacion-estructurada-del-capex-de-ia]],
  [[ciclo-de-imperios-y-moneda-reserva]], [[aeroespacial-y-defensa]], [[mineria-industrial-y-energia]],
  [[plataformas-de-internet-de-china]] y [[salud-y-farma]].
- Creada [[red-electrica-y-capex-de-ia]] y añadidas notas de evolución en [[alphabet]] y [[tsmc]].
- Se conservan en actualidad las valoraciones, rumores, precios y cifras marcadas como no confirmadas; las
  implicaciones de cartera quedan como preguntas abiertas para Carlos, sin ejecutar cambios.

## [2026-08-14] sistema | las 31 tareas cableadas, y el gratuito fuera de la cascada de los 24
- **Los 24 encargos existen** (`ENCARGOS_MECANICOS` en `omniroute-destila`), con envoltorio propio
  para no mover la huella `ENCARGO_HASH` de los 15 tipos viejos. **31 llamadas en 12 rutinas**, 25
  sitios, 0 líneas perdidas. Lo invariante va una vez en la skill nueva `capa-mecanica.md`, no 31.
- **El eslabón gratuito sale de la cascada de estos 24** (`TIPOS_SIN_GRATIS`, decisión de Carlos). No
  es coste, es detectabilidad: sin conjunto dorado nadie notaría que los sirvió la capa gratuita.
  Precio asumido: era el único eslabón que cubría un fallo de cuenta. Los tipos viejos lo conservan.
- **Medido**: sin marcas `### FICHERO:` el modelo se inventa la ruta que le pides citar. Con ellas,
  `dossier` dio 27 punteros y `verifica_punteros.py` validó 27/27. Latencia real mayor que la
  estimada: flash ~50 s con 6 KB, pro 1 m 53 s con 3,5 KB.
- **Hueco del plan, corregido**: su FASE 4 se dejaba fuera a la CKO y sus 3 tareas — salían 28, no 31.
- Reparto del trabajo: V4 flash hizo la conversión de los encargos (24/24 verbatim) y el
  reconocimiento de los 12 SKILL.md (25/25 anclas). Escribir en disco no puede: `tools: {"*": false}`.
- **Cerrado el agujero que abrió ese cambio**: `revision_degradados.py` detectaba capa degradada
  buscando "free"/"openrouter"/"omniroute" DENTRO del nombre, y la única degradación posible de los
  24 pasó a ser flash→pro, que no contiene ninguna. Ahora clasifica por RAÍL (`clasifica_rail`, 9/9
  casos). Hoy la salida no cambia —los 19 destiladores declarados los ve igual la regla vieja—; lo
  que cambia es que `deepseek-v4-pro`, `kr/*` y `nvidia/*` dejan de ser invisibles.
- `mide_puente_opencode.sh` estrena lock (`mkdir` atómico, no `flock`: no viene en macOS), la deuda
  que quedó del 2026-08-13 cuando dos ejecuciones mezclaron tandas.

## [2026-08-14] sistema | maxSteps 2 medido, cinco comprobadores, y el plan de las 31 tareas a V4
- **La medición dio la vuelta a la premisa**: el aviso de "máximo de pasos" no era del transporte ni
  del tamaño del documento — era de **pro** con un solo paso. flash 0/15, pro **6/14 (43%)**. Con
  `maxSteps: 2` y las herramientas igual de desactivadas, pro da 15/15. Criterio fijado antes de ver
  el número. Nuevo `scripts/mide_aviso_pasos.py`; la config vive fuera del repo.
- Importa porque de las 8 tareas asignadas a pro, cuatro son **redes de verificación** (cobertura de
  Elena y Marco, dossier de la CIO, contraste de Marco): fallaban casi la mitad de las veces y sin
  degradar a nadie, porque las tres capas comparten el mismo agente.
- **Cinco comprobadores nuevos** (`verifica_verbatim/cifras/punteros/cobertura/memoria.py`), escritos
  por Kimi a propósito: no puede escribirlos la capa que vigilan. Con prueba de caso corrupto.
- Elegidas con Carlos, rutina por rutina, **31 tareas para DeepSeek V4** (23 flash, 8 pro). Plan
  completo en `docs/superpowers/plans/2026-08-14-deepseek-31-tareas-plan.md`. PENDIENTE su cableado.
- Hallazgo que costó cuatro intentos: **V4 no sirve para transformar prompts**, porque ejecuta como
  instrucción lo que se le da como material. No afecta a producción, donde recibe datos.

## [2026-08-14] sondas | Quinta tanda: 50 sondas de ANÁLISIS COMPLETO, una por empresa global sin ficha en el wiki
- A petición de Carlos: 50 agentes-sonda en paralelo (2 tandas de 25, scouts read-only con acceso web), cada uno con
  análisis de 11 secciones (barrido 1-7 días, negocio, industria, moat, financieros, capital allocation, valoración por
  escenarios con margen de seguridad, riesgos, veredicto provisional, señales falsables, predicciones). Formato SONDA:
  borradores en `actualidad/`, sin veredicto durable ni vigilante — decidir después qué asciende (verificación antes).
- Creadas 50 páginas (total acumulado de la fecha: 74): Apple, Broadcom, AMD, Intel, Micron, Oracle, Netflix, Disney,
  ExxonMobil, Chevron, Goldman Sachs, Visa, Mastercard, BlackRock, Boeing, GE Aerospace, Lockheed Martin, PepsiCo,
  Walmart, Costco, J&J, Eli Lilly, L'Oréal, Hermès, Sanofi, Diageo, GSK, BMW, Mercedes-Benz, Volkswagen, Air Liquide,
  ABB, UBS, Santander, Alibaba, Meituan, BYD, CATL, Sony, SoftBank, SK Hynix, Hyundai, HDFC Bank, BHP, Vale,
  MercadoLibre, Itaú, Grupo México, FEMSA, Saudi Aramco. Enlazadas desde `index.md`. Sin tocar raw/, scratchpad/ ni
  durables. Un scout (Grupo México) devolvió vacío y se relanzó.
- Veredicto dominante: **50/50 VIGILAR**. Solo Netflix (MoS ~20% a su valor esperado) y GSK/Mastercard (~17-25%
  contra su caso base) muestran colchón significativo; el resto 0% a negativo — el mercado descuenta en casi todas la
  parte buena (convergencia Ackman+Fundsmith ya en precio en V/MA/NFLX).
- Patrones destacados: **Energía** (XOM/CVX/Aramco): el beneficio de guerra ya está en precio ("trade de guerra
  disfrazado de inversión de valor"). **Semis/memoria** (MU, SK Hynix, Samsung): la trampa del "PER fwd 5x en pico"
  documentada en las tres; Intel "buena empresa, mal precio" con dilución; AMD/AVGO sin margen. **Automoción europea**
  (BMW/Mercedes/VW): value traps con reestructuración bloqueada (VW rechazada 12-7) y la ola china en Europa
  (16%→>20% de cuota) como marco. **Lujo** (Hermès/LVMH/L'Oréal): el rebote chino aún es tesis; pricing en
  entredicho (Gucci baja precios). **China tech** (Tencent/Alibaba/Meituan): FCF negativo por capex de IA; gobernanza
  y regulación como riesgo binario. **Farma** (Lilly, Sanofi, GSK, J&J, AbbVie): todos "cliff stock" con pipeline que
  debe cubrir el precipicio. **Asia financiera** (UBS/HSBC/MUFG/Santander/Itaú/HDFC): la re-rating ya ocurrió, margen
  ~0 (UBS 1,8x P/TBV máx. 2010; HDFC con prima que se evapora vs ICICI).
- Pendientes wiki marcados por los scouts (sin crear): [[industria-automotriz]], [[industria-baterias]],
  [[industria-belleza-consumo]], [[industria-espirituosos]], [[industria-retail-latam]], [[industria-ecommerce-latam]],
  [[industria-entretenimiento-japon]], [[industria-gases-industriales]], [[industria-electrificacion-automatizacion]].
- Pendiente de Carlos: qué sondas ascienden a página durable (verificación adversarial antes).

## [2026-08-14] sondas | Cuarta tanda: 24 sondas de ANÁLISIS COMPLETO, una por empresa global sin ficha en el wiki
- A petición de Carlos: 24 agentes-sonda en paralelo (scouts read-only con acceso web), cada uno con análisis
  de 11 secciones (barrido 1-7 días, negocio, industria, moat, financieros, capital allocation, valoración por
  escenarios con margen de seguridad, riesgos, veredicto provisional, señales falsables, predicciones).
  Profundidad "análisis completo" pero formato SONDA: borradores en `actualidad/`, sin veredicto durable ni
  vigilante — decidir después qué asciende a página durable (verificación adversarial antes de ascender).
- Creadas 24 páginas: Samsung, Toyota, Nestlé, LVMH, TotalEnergies, HSBC, Siemens, Schneider Electric, Reliance,
  Petrobras, AbbVie, Tencent, Airbus, Rolls-Royce, Shell, Danaher, Thermo Fisher, P&G, Unilever, Novartis,
  AstraZeneca, Infineon, Iberdrola, MUFG. Enlazadas desde `index.md`. Sin tocar raw/, scratchpad/ ni durables.
- Patrón dominante: **las 24 en VIGILAR provisional** — el mercado descuenta en casi todas la parte buena;
  solo Reliance y AstraZeneca muestran margen de seguridad positivo (~20% y ~+28% frente a valor ponderado),
  el resto entre ~0% y negativo. La gran mayoría
  de los scouts coinciden en "gran empresa, precio sin margen de seguridad" (el estándar de Carlos se cumple
  rara vez hoy).
- Lo más jugoso por bloque: **Defensa/aero (hueco del CIO)** — Airbus (backlog 9.222, rampa 2027, incidente A320
  hidráulico como cola derecha), Rolls-Royce (aftermarket widebody + SMR + data centres; 37x forward en récord).
  **Salud de calidad** — Danaher (82% recurrente, DBS; -14% por recorte de guía core), Thermo (orgánico honesto
  0-3%, ROIC 12→10,9% por M&A), Novartis (3 binarios clínicos H2: pelacarsen/remibrutinib/del-desiran), AbbVie
  (cliff de Skyrizi/Rinvoq dentro del horizonte de 10 años de Carlos), AZN (megadeal BMY muerto; +28% MoS scout).
  **Energía** — TTE/Shell/Petrobras: el beneficio de guerra ya está en precio (MoS negativo; trampa cíclica);
  IBERDROLA: utility tipo bono, sin margen. **Consumo** — Nestlé/P&G/LVMH/Unilever: crecimiento anémico o ciclo
  de lujo no confirmado, MoS ~0%. **Semis/IA** — Samsung (PER fwd 4-5x en pico = trampa), Infineon (power IA
  real pero -19% vs valor), Schneider (grid cuello de botella IA; MoS -5%), Tencent (FCF negativo por capex IA).
  **Asia** — HSBC (2,2x TNAV "priced for perfection"; riesgo fiscal HK), MUFG (tipos BoJ descontados; P/B 1,73),
  Reliance (mínimos + IPO Jio + fundadores comprando: la única con ~20% de margen junto a AZN).
- Cruces de cartera: Siemens/Schneider/Infineon/Samsung convergen en la misma apuesta "electrificación+IA" ya
  concentrada en la cartera; los consumos staples (Nestlé, P&G, Unilever) muestran el consumidor de bajos
  ingresos bajo presión (choca con [[economia-de-activos-vs-salarios]]); MUFG/HSBC = la banca que gana con
  tipos/wealth pero a precio de perfección.
- Pendientes wiki marcados por los scouts (sin crear): [[industria-automotriz]], [[industria-consumo-staples]],
  [[industria-lujo]], [[industria-industrial]], [[industria-conglomerados]], [[industria-consumo-masivo]],
  [[industria-consumo]], [[industria-utilities-electricas]].
- Pendiente de Carlos: qué sondas ascienden a página durable (verificación adversarial antes).

## [2026-08-13] sondas | Tercera tanda: 24 sondas en 12 dominios nuevos — 48 borradores totales
- Tercera tanda a petición de Carlos (24 sondas, 2 por dominio). Dominios: LatAm/EM, pagos y fintech, software
  y ciberseguridad, automoción y movilidad, espacio y satélites, transporte y logística, agua y clima, política
  y elecciones, pensiones y demografía, privados y IPO, medios y entretenimiento, voces y conferencias.
- Creadas 24 páginas en `actualidad/`. Lo más jugoso:
  - **Voces** ([[sonda-2026-08-13-voces-novedades]]): Berkshire net buyer tras 14 trimestres con Abel (caja
    $365,5B), Ackman recompra Visa/MC/NFLX/ICE/SPGI, Dalio "burbuja a niveles 1929/2000" vs Abel comprando,
    Paramés pivota energía→holdings familiares (Exor/Bolloré). Tensión mayor del corpus hecha titular.
  - **Privados** ([[sonda-2026-08-13-privados-unicornios]] y [[sonda-2026-08-13-ipo-spacs]]): brecha tender/secundario
    de Anthropic 3,4x en 5 meses ($350.000M→~$1,2T), Databricks $190.000M, SpaceX ya cotiza, ola de IPOs de
    data centers (Vantage ~$100.000M) — el "público entrando a privado" como pico de la ilusión de los privados.
  - **Ciberseguridad** ([[sonda-2026-08-13-software-ciberseguridad]]): valoraciones fwd 46-170x tras Black Hat,
    CAC abre revisión a Palo Alto (patrón Micron), 219 deals de M&A en H1.
  - **Agua/clima** ([[sonda-2026-08-13-agua-utilities]], [[sonda-2026-08-13-clima-seguros-cat]]): El Niño >90%
    "muy fuerte", Rin/Kaub en mínimos récord, Danubio para la nuclear rumana, Ofwat sube facturas, cat bonds
    de incendio récord.
  - **Política/fiscal** ([[sonda-2026-08-13-politica-midterms]], [[sonda-2026-08-13-politica-aranceles-fiscal]]):
    déficit FY26 ya por encima de FY25 completo, recaudación arancelaria NEGATIVA 3 meses, Casa Blanca "considera"
    cesar a Lisa Cook, UK adelanta el impuesto a la riqueza.
  - **Espacio** ([[sonda-2026-08-13-espacio-lanzadores]], [[sonda-2026-08-13-espacio-satelites]]): SpaceX
    re-evaluada como "índice" del complejo (cap $1,65-1,86T, short 34%→11%), escudo térmico como killer
    variable, Rocket Lab compra Iridium.
  - **Pagos** ([[sonda-2026-08-13-pagos-visa-mastercard]]): Ackman + Fundsmith convergen en Visa/MC, settlement
    swipe fees $38.000M, duopolio cooptando stablecoins (Open USD).
  - **Tesla** ([[sonda-2026-08-13-automocion-tesla-autonomo]]): PE 349, robotaxi supervisado, Waymo -94% siniestros.
- Cruces de cartera destacados: el IPO de Anthropic haría líquidas plusvalías no realizadas de GOOGL/AMZN/MSFT
  (calidad de beneficio en riesgo); la caída de Cerebras como leading indicator del mismo factor que Micron;
  WoodMac: el cobre es el cuello de botella crítico del EV; Einhorn recortó GLD contra el 31,8% oro/plata de Carlos.
- Lint: 1 enlace roto corregido (`seguros-sistemicos`→`sonda-2026-08-13-seguros-sistemicos`); 24 huérfanas
  enlazadas desde `index.md` (48 sondas totales). Sin tocar raw/, scratchpad/ ni páginas durables.
- Pendiente de Carlos: decidir qué pasa de sonda a página durable (verificación adversarial antes de ascender).

## [2026-08-13] sondas | Segunda tanda: 16 sondas más en 8 dominios nuevos — 24 borradores totales
- Segunda tanda a petición de Carlos (16 sondas, 2 por dominio): mercados (posicionamiento y valoraciones),
  renta fija (soberana y crédito/banca en la sombra), salud (GLP-1/farma y biotech/patentes), cripto (BTC/regulación
  y tokenización/CBDC), defensa (gasto/programas y proveedores), inmobiliario/consumo (vivienda y consumo/salarios),
  energía (nuclear/red y renovables/almacenamiento), banca y seguros. Cada sonda con ideas + mini-tesis con su
  señal falsable, y sus cifras no confirmadas/`[Sin dato]` declaradas.
- Creadas 16 páginas nuevas en `actualidad/`: [[sonda-2026-08-13-mercados-posicionamiento]] (call skew p99, cash
  gestoras agotado) · [[sonda-2026-08-13-mercados-valoraciones]] (CAPE 42,3 vs récord 44,2; ERP 4,28% de Damodaran;
  JPM objetivo 8.000) · [[sonda-2026-08-13-renta-fija-soberana]] (30Y 5,216% en subasta, TIPS 30Y ~3%, déficit
  $432bn) · [[sonda-2026-08-13-credito-banca-sombra]] (IG OAS 0,79%, emisión IG $1,68T, HLEND con gating de retiros,
  riesgo colateral GPU) · [[sonda-2026-08-13-salud-glp1-farma]] (Novo niega winner-take-all, cliff escalonado,
  mercado negro) · [[sonda-2026-08-13-salud-biotech]] (rumor AZ-BMS, M&A biopharma $130.000M, biosimilares) ·
  [[sonda-2026-08-13-cripto]] (BTC -27% YTD, ETF en fuga, minado en pérdidas, Clarity Act 15-sep) ·
  [[sonda-2026-08-13-tokenizacion-cbdc]] (MUFG/JGB repo, Franklin/BENJI, euro digital 2029) ·
  [[sonda-2026-08-13-defensa-gasto-programas]] (stockpile vacío, $58,6bn PAC-3, 155mm a 36k/mes) ·
  [[sonda-2026-08-13-defensa-proveedores]] (CSG a 12x EBIT, LMT, electrónica) ·
  [[sonda-2026-08-13-inmobiliario-vivienda]] (hipoteca 6,67%, IPV España +12,9%, REITs +17,7% YTD) ·
  [[sonda-2026-08-13-consumo-salarios]] (salario real -0,2%, tarjetas a 20,9%, morosidad elevada) ·
  [[sonda-2026-08-13-energia-nuclear-red]] (X-Energy +$1.000M, Westinghouse IPO, grid = cuello de botella IA) ·
  [[sonda-2026-08-13-energia-renovables]] (curtailment récord, Orsted impairment por tipos, Vestas) ·
  [[sonda-2026-08-13-banca-margenes]] (JPM récord +41%, UniCredit-Commerzbank, CRE alemán recae) ·
  [[sonda-2026-08-13-seguros-sistemicos]] (BRK suscripción -14%, riesgo circular KKR/Apollo, float→IA).
- Hallazgos transversales de la tanda: el riesgo migra al CRÉDITO (spreads mínimos + oferta récord + colateral
  GPU que se deprecia 2/3); BTC perdió la carrera debasement 2026 (oro $4.361 vs BTC -27% YTD — valida ex post el
  bloque tangible de cartera actual); "el crédito está antes del ciclo" como señal adelantada; el stockpile
  de misiles de EE.UU. vacío como catalizador defensa ya contractualizado; el float de KKR/Apollo financiando la
  IA conecta [[kkr]] con [[financiacion-estructurada-del-capex-de-ia]].
- Lint: 1 typo corregido (`multiples`→`multiplos-de-valoracion`); 16 huérfanas resueltas enlazando desde
  `index.md` (24 sondas totales enlazadas). Sin tocar raw/, scratchpad/ ni páginas durables.
- Pendiente de Carlos: decidir qué pasa de sonda a página durable (verificación adversarial antes de ascender).

## [2026-08-13] sondas | Barrido de 8 dominios en paralelo — borradores de información nueva en `actualidad/`
- Lanzadas 8 sondas (subagentes con acceso web) en paralelo, una por dominio, cada una con investigación
  en fuentes públicas y borrador escrito directamente en `wiki/actualidad/`. NO es ingesta de crudo: es
  barrido de contexto con fuentes citadas, para decidir después qué asciende a durable.
- Creadas: [[sonda-2026-08-13-macro-eeuu]] (CPI 3,4%/núcleo 2,5%, Fed Warsh hold +3 disidentes, 30Y >5,2%,
  30Y máx 19 años, yen 160 y BoJ) · [[sonda-2026-08-13-geopolitica]] (Ormuz ~5 buques/día, Brent $88, IEA
  recorta demanda, oro BC récord 289t, aluminio stocks LME mín. 1990, OPEP+ disuelta, ADNOC) ·
  [[sonda-2026-08-13-cartas-casas]] (Fundsmith H1 -2,9% + rotación récord 51,8%, Pershing NAV -12,6% y
  descuento 35%, Berkshire caja ~$360.000M, Cobas cierra capacidad a 3.000M€) ·
  [[sonda-2026-08-13-empresas-y-valor]] (TSMC +44,7%, Alphabet -8,4% pese a Gemini, VLO consenso < precio,
  ideas BMY y NVO) · [[sonda-2026-08-13-ia-y-semis]] (consorcio Nvidia $500.000M confirmado 5+ fuentes,
  capex Big Tech >$740.000M, DeepSeek V4 Pro + subidas de precio API) ·
  [[sonda-2026-08-13-materias-primas]] (oro $4.358 +10% agosto, Gresik parado, cobre récord Comex, uranio
  $87,15) · [[sonda-2026-08-13-asia]] (China CPI +0,5%/PPI +3,5% bajo consenso, yen 155→159, India déficit
  récord, Corea compra oro 1ª vez 13 años) · [[sonda-2026-08-13-europa]] (BCE +25pb sept 83% consenso, Stoxx
  récords, TTF ~58€, primera multa DMA 890M€ a Google, consol. bancaria UE).
- Hallazgos transversales: el oro sube pese a real yields largos al alza (driver = prima fiscal/credibilidad,
  refuerza [[ciclo-de-imperios-y-moneda-reserva]]); el 30Y >5,2% es el stress test del cuadrante RF vacío;
  Fundsmith corrige al pulso (GE Vernova/Nextpower, no "Iberdrola/Bernova"); espejo Ackman/Buffett en
  Alphabet (13F Q2 vence 14-08); el bloque tangible (44,5%) del lado correcto pero con contrafactual vivo.
- Lint: 0 enlaces rotos introducidos (1 typo corregido: `ciclo-de-imp-perios`→`ciclo-de-imperios`); 8
  huérfanas resueltas enlazando desde `index.md`. Cada sonda marca sus cifras no confirmadas/`[Sin dato]`:
  ningún dato de precio rellenado de memoria, según regla.
- Pendiente de Carlos: decidir qué pasa de sonda a página durable (verificación adversarial antes de ascender).

## [2026-08-13] auditoria | Revisión completa de la ingesta de la capa gratuita (julio + agosto)
- Creada `wiki/sintesis/revision-capa-gratuita-2026-08-13.md`: 20 pulsos de vídeo + 20 pulsos de texto + 30+
  destilados verificados contra su crudo (grep). Veredicto: **la capa gratuita no fabrica cifras; corrompe
  magnitudes, y la verificación las caza** — salvo una.
- **Única corrupción no cazada del corpus**: UBS 05-ago, "100 mm de 165 mm USD" vs crudo **100bn/165bn**
  (factor 1000). El jurado se abstuvo (NO_DISPONIBLE) y ningún run grepó ese documento. No llegó a pulso.
  Confirma el hueco: **el jurado se abstiene justo donde no hay red manual**.
- Adjudicados como falsos positivos los 2 FALLO de la tanda 3 (Authers, Money Stuff): las lentes citaron
  pasajes que RESPALDAN y etiquetaron CONTRADICE; el crudo confirma las cifras del destilado.
- Confirmados errores de "cifras a ojo" del REDACTOR (no del destilado): "semis 45% tangible vía ETF 3x"
  (30/31-jul, contradice cartera: los 3x son oro/plata y el 44,5% es tangibles total), regla IMF inventada
  (31-jul), valoración vs recaudación de SpaceX (24-jul), tender $852bn/$7bn fundidos (12-ago).
- Deuda estructural: **familias de cifras nunca reconciliadas entre notas** — cuentas coreanas (factor ~10,
  320-360k vs 3,36M), disidentes FOMC (Hammack/Logan vs Kugler/Waller), BPA 2T (+22/+24/+47%), SanDisk ×85
  en 14 vs 15 meses, Serbin 27% vs "30% degradado", Core CPI 2,6 vs 2,5.
- Brecha editorial coincide con el cambio `tipo: sintesis`→`actualidad` (28-jul→04-ago), no con el modelo.
- Gaps operativos declarados: vídeo 06→10-ago (crudo archivado, 53 vídeos, gateway roto), newsletters
  06→11-ago, `estado-del-sistema` caduco desde 09-ago, 13+ 📌 sin fichar. 5 decisiones para Carlos en la página.

## [2026-08-13] jurado | La causa del 0/7 en vídeo NO era el vídeo: era la cuota de Groq agotada
- Diagnosticado con los 22 `.verif.txt`/`.jurado.jsonl` y `~/.cerebro/jurado-sombra.jsonl` ya existentes:
  **coste cero, ni una llamada nueva**. Los 118 "errores de infraestructura" son todos `HTTP 429`.
- El primer 429 entra a las **22:15:45**, documento **#12 de 22**, y no para. Los 7 vídeos son los
  documentos **#16-22**: todos posteriores. Los docs 1-11 gastaron 128 llamadas a groq con **0 errores**.
  El eje "vídeo" estaba confundido con "última posición de la corrida".
- **Corrige el dato del HALLAZGO del 11-ago**: dijo que las newsletters iban de 0,000 a 0,062 y que por eso
  los rangos "no se solapan". Hay dos en **0,240** (tldr-ai) y **0,343** (tldr-hardware): sí se solapan.
- Simulación sobre los votos ya emitidos, con las 3 rutas que nunca vieron un 429: **5 de 7 vídeos habrían
  votado**, mayoría en 61 de 79 aserciones, ratios de 0,36-0,45 → 0,000-0,167. El jurado sí sirve en vídeo.
- Hallazgo de diseño: **el panel de 5 lentes son 3 cuotas**, no 5 (groq×2, nvidia×2, google×1). Cuando groq
  cae se van 2 votos de 5 a la vez, justo lo que rompe el umbral 3/5. Y el 429 se guarda **truncado a 112
  caracteres**, cortado antes de decir si el límite es por minuto o por día.
- Los 2 FALLO adjudicados, ambos **artefactos**: `authers-oil-in-our-time` es fallo de las lentes (citaron
  pasajes que RESPALDAN y etiquetaron CONTRADICE; el crudo confirma el -11% y las "tasas ecológicas");
  `money-stuff-spacex-unlocks` son 3 aserciones (no 2) y el jurado **acertó** — el destilado está bien y el
  extractor les puso el sujeto "SpaceX" a hechos de Citadel/OpenAI/Anthropic. `[ESCALAR]` ese defecto sigue
  vivo: `_sujeto_por_bloque` toma la primera negrita del bloque y D1 solo cubre líneas con `Rótulo:` —
  medido, **14 de 90 aserciones de cifra (15,6%)** llevan atribución heredada. No tocado: regla prerregistrada.

## [2026-08-13] ingesta diaria YouTube | Recuperación del gap: 04 y 05-ago cubiertos (runs 21 y 22 en paralelo)
- Creadas `wiki/actualidad/pulso-video-2026-08-04.md` (381 líneas, 9 vídeos/5 canales) y
  `pulso-video-2026-08-05.md` (245 líneas, 8 vídeos/4 canales). Crudo archivado en `raw/pulso-video/2026-08-04/`
  (fusión: 12 nuevos + 11 conservados) y `raw/pulso-video/2026-08-05/` (8 nuevos, con `map.txt` fabricado a mano).
- **Coste: 233k tokens el 04-ago y 181k el 05-ago.** Que el día con menos trabajo (3 vídeos nuevos frente a 8)
  saliera más caro es el dato: sus 3 destilados cayeron al fallback de subagente Anthropic (~100k cada uno) por
  caída simultánea de gateway y escotilla. El coste por día lo manda **qué escalón de la cascada sirve**, no el
  diseño del run ni el número de vídeos.
- 3 verificaciones por grep contra el VTT antes de publicar: cita sobre subidas de la Fed **literal** (tensión
  real de la fuente, conservada); ingresos de AMD **error de ASR** del propio VTT (dejado como `[Sin dato]`);
  delta del oro corrupto (+4,25% del destilado vs +3,77% real) con el nivel correcto en la misma frase.
- Canales sin cobertura declarados como **hueco de descubrimiento**, no como "sin vídeo": el barrido con
  `--playlist-end` fijo solo alcanza ~6 días atrás en NegociosTV.
- `[ESCALAR]` **gateway OmniRoute: escucha pero no sirve**. Diagnóstico inicial de esta misma entrada —"dos
  procesos, uno intruso secuestró el puerto"— **rectificado horas después**: el PID que tiene el 20128 es un
  hijo legítimo del servicio de launchd y va cambiando (1266 → 18425 → 21630 en una tarde). El gateway relanza
  *workers* que nunca llegan a servir; la causa de fondo sigue sin diagnosticar. `kill -9` + `launchctl
  kickstart` devolvió HTTP 200 y `DESTILADO_POR=omniroute` verificado con un destilado real, y **volvió a caer
  en menos de una hora**: es parche, no arreglo.
- Segundo intento del gap 06→10-ago (5 ejecutores en paralelo, autorizado por Carlos con el gateway ya
  reparado): **parado sin notas**. Los 5 archivaron su crudo antes de caer — `raw/pulso-video/2026-08-0{6,7,8,9}/`
  y `/2026-08-10/` con manifiesto completo, **53 vídeos**, descargados y parseados. Solo 6 destilados de 53: el
  gateway volvió a caer a mitad y los ejecutores pararon como se les ordenó en vez de seguir por la vía cara.
  Ese crudo archivado hace verificables esos días cuando se retomen, y no hay que volver a descargarlo.
- `[ESCALAR]` gap **06→10-ago** sigue sin cubrir (5 días). Descubrimiento, criba y **crudo** ya hechos; falta
  destilar y escribir. **No reabrir hasta que el gateway sirva de forma estable**, o cada día se pagará caro.

## [2026-08-13] sistema | Test de regresión de archiva_transcripciones, y el residuo de raw/ no era lo que parecía
- Escrito el test que faltaba, como caso 6 de `pruebas/archiva/prueba_archiva_transcripciones.py`: dos orígenes
  DISTINTOS sobre la MISMA fecha → el manifiesto debe ser la UNIÓN. Comprueba también la fusión del `map.txt`,
  porque con el map machacado el manifiesto sale completo pero ciego. El caso 2 solo cubría reejecución con el
  mismo origen, y por eso no vio el defecto del 11-ago.
- Verificado que **muerde**: revertida la fusión en una copia aislada, falla en 3 comprobaciones y el manifiesto
  cae de 3 entradas a 1. Suite: 38 OK, 4 FALLA, los 4 idénticos sin el cambio (preexistentes).
- **La premisa del log del 11-ago era falsa.** No hay "9 duplicados" en `raw/pulso-video/2026-08-03/`: hay **16
  huérfanos, todos de contenido único**, y **6 son vídeos del 4-ago** — incluidos 6 de los 7 que juzgó el jurado.
  No sobra nada: falta índice. Ninguno tiene entrada en ningún `map.txt`, que es por lo que el manifiesto no
  pudo describirlos. Por poco se borra crudo bueno.
- Las dos carpetas están cruzadas: `raw/pulso-video/2026-08-04/` contiene 11 vídeos cuyo map dice `2026-08-03`.
  Los 10 huérfanos restantes no aparecen en el barrido de 579 piezas; fecharlos sería rellenar a ojo.
- `[ESCALAR]` único borrado propuesto: `raw/pulso-video/1999-01-01/` (basura de la prueba de regresión). Los
  `v_*.txt` del 3-ago **no se borran**, se reindexan. Todo está commiteado, así que es recuperable.

## [2026-08-12] ingesta diaria YouTube (Marco Reyes, run 20 — Kimi falló FASE -1 con error 401 de credencial, `ejecutor-sonnet` retoma tras 8 días parados; nota SOLO del 11-ago, gap 04-10-ago sigue `[ESCALAR]`)
- Creada: `wiki/actualidad/pulso-video-2026-08-11.md` (9 vídeos/6 canales activos de 8; 0 destilados
  degradados, 100% omniroute primario). Crudo archivado en `raw/pulso-video/2026-08-11/` con manifiesto.
- Actualizada: `wiki/index.md` (+entrada), `wiki/actualidad/.rutina-video-aprendizajes.md` (VIGENTE/HISTÓRICO,
  3 patrones nuevos de fallo de auto-*caption*/destilado subidos a Método).
- Nota: la entrada de mantenimiento inmediatamente siguiente en este log (misma fecha) documenta el mismo
  401 de Kimi como bug de clave desactualizada en `kimi_cuota_real.py`, reparado el 10/12-ago por otra
  sesión — no reintentado aquí porque el fallback ya estaba completo cuando apareció esa entrada.
- Priorizado el día MÁS RECIENTE (11-ago) sobre el más antiguo del gap 04-10-ago por máximo valor de
  decisión/coste — descubrimiento+criba de esos 7 días ya está hecho en `scratchpad/yt-recuperacion-2026-08/`,
  falta convertirlo en notas. Criba heredada de un script sobre-marcaba PROCESAR por *ticker matching* sin
  contrastar con `perfil/cartera-actual.md` (Intel no es watchlist) — vetada y rehecha a mano.
- 1 verificación adversarial (consorcio Nvidia $500.000M, candidato a `financiacion-estructurada-del-capex-
  de-ia`): CONFIRMADO con fuente primaria, corrige el número de firmas del consorcio (6, no 5) que ningún
  destilado individual tenía completo. 1 verificación gratis por grep evita publicar "Powell" donde el VTT
  decía "Warsh" (destilado inventó el nombre, no solo lo transcribió mal).
- Predicción `2026-07-23-brent-sostiene-90-agosto` retensionada hacia el SÍ (Brent $79-83→$88-91 en 8 días).
- Lint: 0 enlaces rotos introducidos, 0 huérfanas nuevas (mapa_vault.py). Editor-jefe: 8 hallazgos, 4
  aplicados íntegros, 2 aplicados parcial, 2 rechazados (pedían mecanismo causal no sourced).

## [2026-08-12] mantenimiento | Kimi: el gate llevaba un día ciego por una clave muerta, y el CLI ensuciaba cada respuesta
- **Causa raíz.** El 10-ago el wrapper `kimi` pasó a preferir `KIMI_API_KEY` del fichero canónico
  sobre `~/.config/kimi/key`. `kimi_cuota_real.py` fue el ÚNICO lector que no se actualizó: medido
  hoy, la ruta heredada da `401 REASON_INVALID_AUTH_TOKEN` donde la canónica da `200`. Consecuencia
  callada (degradaba, no fallaba): `--lote` muerto —exige cuota `REAL`— y el tope del 20% del Cerebro
  sin poder medir su delta. Arreglado con la misma precedencia del wrapper; la procedencia viaja
  ahora en el motivo (`http-401@config-kimi-key`).
- **Segundo defecto, mismo canal.** Las primitivas capturan `2>&1` a propósito (el 403 vive en
  stderr), así que dos avisos fijos del CLI entraban como primera línea de la respuesta delegada —y
  `kimi_cache_put` los guardaba. 1 de 22 entradas de caché estaba contaminada; retirada.
  `kimi_limpia_ruido` los filtra tras decidir el 403 sobre el texto crudo.
- **Lente fantasma retirada:** `moonshot` aceptaba `KIMI_API_KEY` y daba 401 siempre — es clave de
  Kimi Code (`scope: FEATURE_CODING`), otro producto. Pasa a `INCOMPATIBLES` con su razón medida.
- Verificado: gate real `52/100 (quedan 48)`, delegación de punta a punta exit 0 en 11 s con
  respuesta útil. `corre_pruebas`: 39 OK, 3 fallos **preexistentes** (medidos contra el árbol limpio).
- Nuevo `tests/test_kimi_limpia_ruido.sh`; `test_kimi_cuota_real.sh` ahora comprueba QUÉ CLAVE VIAJA.

## [2026-08-11] jurado | Sombra tanda 3, la PRIMERA de producción: el jurado no vota sobre vídeo (0/7)
- 22 destilados reales con su crudo (15 newsletters de Elena 05-ago + 7 vídeos de Marco 04-ago), en
  sombra (`JURADO_DENIEGA=0`, decisión de Carlos). Cubre la carencia que el propio log anotó el 10-ago:
  las tandas 1 y 2 solo vieron documentos que el parser ya denegaba.
- Agregado: 6 OK · 3 REVISAR · 2 FALLO · **11 NO_DISPONIBLE**. Partido por eje: newsletters votan 11/15
  (73%), **vídeo vota 0/7**. Los ratios de error NO se solapan — vídeo 0,364-0,446 (los siete), news
  0,000-0,062 — así que no es ruido genérico de infraestructura, es sistemático del carril de vídeo.
- D2 hace su trabajo (se abstiene en vez de votar con el instrumento roto), pero la consecuencia es que
  hoy el jurado es inservible justo donde el Cerebro produce más. Causa NO diagnosticada: el tamaño no
  la explica (money-stuff, 26 KB de crudo, ratio 0,050). Medirla es el siguiente trabajo.
- Primera absolución vista: `bloomberg-morning-hormuz` con 2 FALLA del parser → jurado **OK**.
- 2 FALLO (Authers, Money Stuff) con `CONTRADICE 3/5` y ratio bajo: no despachables como ruido, al
  contrario que los de la tanda 2. Escalados a Carlos, sin depurar en caliente.
- Detalle: `scratchpad/sombra-jurado-recuperacion-2026-08-11/HALLAZGO.md`
- **Nota de evolución 2026-08-13**: la causa quedó diagnosticada y **no es el carril de vídeo**. Es la cuota de
  Groq agotándose a mitad de corrida (`HTTP 429` desde el documento #12; los 7 vídeos eran los #16-22). La
  afirmación de arriba de que los ratios "NO se solapan" **es incorrecta**: se construyó sin contar dos
  newsletters a 0,240 y 0,343, que caen dentro del rango de vídeo. La conclusión de que el jurado es
  "inservible en vídeo" no se sostiene — recontando solo las rutas sin 429, 5 de los 7 habrían votado. Lo que
  sigue en pie es que D2 hizo su trabajo. Ver la entrada del 2026-08-13.

## [2026-08-11] ingesta | Recuperación del atraso: Elena 05-ago rehecho, Marco parado por coste y por límite
- Rutinas suspendidas desde el 3-ago (vídeo) y 4-ago (newsletters). Encargo de Carlos: recuperar nota
  por día. Se recuperó **solo el 05-ago de Elena**; los 8 días de Marco quedan sin cubrir.
- **El crudo de newsletters no era crudo**: el run de Haiku escribió nueve resúmenes propios
  (`KEY DATA:`/`INTERPRETATION:`) en lugar del cuerpo del correo, y se saltó `destila` en 3 de 9 con una
  regla inventada — el mismo bypass del 3-ago con excusa nueva. Rehecho con `ejecutor-sonnet`: 15
  correos, crudo verbatim (459 B-26 KB), 15/15 `destila` exit 0.
- SKILL de newsletters **endurecido** (config permanente, autorizado por Carlos): crudo se copia y no se
  resume con autocomprobación de tamaño · ninguna categoría de correo exime del destilado · el fichero
  manda sobre el exit code (visto: destilados de 33 B y 370 B con exit≠0 y con el fallo dentro).
- Coste medido: 237k tokens (Marco, sin terminar) + 121k (Elena Haiku, defectuoso) + 358k (Elena Sonnet,
  bueno) = 716k para un día bueno. Proyección de completar el atraso: ~3M. Carlos congela Elena (sus
  días vuelven a la rutina programada) y aprueba rediseñar Marco.
- Rediseño de Marco hecho y sin estrenar: **un solo barrido** de los 8 canales para toda la ventana
  (579 piezas) + criba determinista con el presupuesto del SKILL → 82 vídeos, 8-13/día, lista cerrada por
  día en `scratchpad/yt-recuperacion-2026-08/`. El run piloto murió por límite de sesión.
- Marco 04-ago (intento 1) **archivó un conjunto y destiló otro**: 11 vídeos del 3-ago en el manifiesto,
  7 destilados distintos (6 legítimos del 4-ago), solapamiento cero. Los 11 quedan como crudo archivado
  sin nota — legítimo (hace verificable ese día), declarado aquí.
- `[ESCALAR]` `pulso-video` sin cubrir del 04 al 11-ago; el crudo ya está descubierto y cribado.

## [2026-08-11] sistema | archiva_transcripciones.py machacaba el manifiesto de raw/ — corregido
- Medido al reetiquetar: archivar sobre una fecha que ya tenía carpeta **sobrescribía** `MANIFIESTO.txt`
  en vez de fusionar. `raw/pulso-video/2026-08-03` pasó de 16 entradas con canal/título/hash a 9 con
  `CANAL_DESCONOCIDO`. Los `v_*.txt` sobrevivieron (se escriben por nombre); el índice que los hace
  auditables, no. Recuperado con `git checkout --` porque estaba versionado y sin commitear.
- La causa de los `CANAL_DESCONOCIDO` era el `map.txt`, copiado encima en vez de fusionado.
- Corregido: manifiesto y `map.txt` fusionan por id, y el script informa de cuántas entradas conserva.
  Verificado con dos archivados consecutivos sobre la misma fecha. Falta test de regresión en `tests/`.
- Por qué el hook no lo vio: `raw/` está protegida de Write/Edit y de `rm` por hook, pero no de un script
  de Python invocado desde el shell — el hueco que CLAUDE.md ya declara.
- `[ESCALAR]` residuo que solo puede borrar Carlos: 9 `v_*.txt` duplicados sin entrada de manifiesto en
  `raw/pulso-video/2026-08-03/`, y `raw/pulso-video/1999-01-01/` creado por mi prueba de regresión.

## [2026-08-09] mantenimiento | semáforo escribido; 🔴 gobernanza colapsada, 10 runs muertos por límite
- Escritor único: `wiki/sintesis/estado-del-sistema.md` sobrescrito (plantilla RÍGIDA)
- Hallazgos: veredicto-semanal PARADO 11 días, sintetizador caído, mantenimiento fallido 2026-08-09 07:03
- Crítico: bug etiquetado horario Micron (data inverted); cuota OpenRouter agotada ($6.45 saldo)
- Cola ingesta: 129 sin inventario; worktree zombi 2.5 GB (no ejecutado — decide Carlos)
- Memorias: 8 sobre techo; .cio-aprendizajes en ámbar (85/80 líneas VIGENTE)
- Regenerado: cola-de-ingesta.md, mapa-del-vault.md; rotado log (39 KB, 27 entradas)
- Chips abiertos para CIO: task_2983873f (bug técnico Micron), task_481eb16c (revivir gobernanza)

## [2026-08-10] jurado | Sombra tanda 2: 1 FALLO (16 contradicciones), 4 REVISAR — agregado 10 docs: 3/6/1
- Primer intento 5/5 NO_DISPONIBLE: lentes degradadas (~2 min/asercion vs 0,2-0,5 s de julio);
  re-corrida con JURADO_TIMEOUT_S=3600, ratio de error 0,000 (0/395 votos), 45 s-23 min/doc
- FALLO de v_LshYn7wUtdU investigado (4 de 16 aserciones): mezcla de artefacto del extractor
  (tabla Markdown aplanada: «Google Cloud — Ingresos $119.8M») y cifras de tablas en pantalla
  que los captions no recogen (alarmas defendibles). Mismo driver de falsa alarma que tanda 1
- Agregado: 3 FALLO, 6 REVISAR, 1 NO_DISPONIBLE; coste marginal cero (los 10 ya FALLA del
  parser). Sin muestra del caso de produccion (pagina que pasa el parser). Timeout debe
  escalar con nº de aserciones antes de activar
- Detalle: segunda nota de evolucion en `scratchpad/prerregistro-jurado-v8-2026-08-08.md`

## [2026-08-12] fundamental | SAP y Agnico Eagle Mines: primeras tesis formales, rotacion de miercoles
- Creada: wiki/empresas/sap.md (VIGILAR, margen ~13-15%), wiki/empresas/agnico-eagle-mines.md (EVITAR,
  margen ~-20/-25%), wiki/analisis-fundamental/af-2026-08-12.md
- SAP: ficha original con cloud revenue/EV/P-FCF mal etiquetados (FY2024 citado como FY2025, EV sin
  reconciliar) — corregidos, refuerzan el mix (88,4% recurrente real). Agnico: AISC +10,2% pese a margen
  neto 42,1% (Q2 2026) casi todo por precio del oro no ejecucion; tres fatalidades en 12 meses (no dos) y
  recorte de Barnat (370.000 oz, guidance oficial) confirmados por el verificador, mas graves que el
  borrador. Veredicto EVITAR presentado explicitamente como lectura de cola frente al consenso "Moderate
  Buy" (objetivo medio $226)
- Actualizada: wiki/industrias/plataformas-tecnologicas-y-publicidad-digital.md y
  wiki/industrias/mineras-de-metales-preciosos.md (wikilinks reciprocos), wiki/index.md (3 entradas nuevas)
- Incidencia de proceso: Kimi K3 fallo con error 401 "API Key appears to be invalid or may have expired"
  en las dos llamadas (clave caducada/rotada, no fallo de tarea) — fallback a `analista-fundamental` con
  exito. Nota para Carlos: revisar/rotar la clave de Kimi (no se toco ninguna credencial, hook lo bloquea)
- Memoria: wiki/analisis-fundamental/.af-aprendizajes.md (VIGENTE cierra SAP/Agnico de rotacion pendiente
  + 2 lecciones de metodo nuevas; HISTORICO ampliado)

## [2026-08-13] sistema | Canario dia 2 y el permiso de node, los dos medidos en vez de supuestos
- Canario del jurado, dia 2 (`20260813T162843`, 50 votos, 0 errores): **primera deriva real de la serie**
  — 50 pares, **0 cambios de voto** en las cinco lentes
- Punto ciego del instrumento, cazado al desconfiar del informe: `google/models/gemini-3.1-flash-lite`
  volvio de su reserva `openrouter/...` a su ruta propia en **6 de 10** votos, y el informe imprimia
  «de ruta: 0» porque `cambios_de_ruta` solo cuenta la sustitucion que ADEMAS cambio el voto. Anadido
  `sustituciones_de_ruta` (3 tests, vistos fallar antes); `cambios` y `cambios_de_ruta` intactos, asi
  que nada de lo publicado cambia de significado. Lectura util: gemini voto igual por las dos rutas
- **`node` ya tenia Acceso total al disco** — el spec del watchdog lo daba por pendiente sin medirlo.
  `scripts/comprueba_tcc_node.sh` lo prueba desde launchd; control negativo con `/bin/cat`, que si
  recibe `Operation not permitted`. La prueba fallo dos veces por medir mal (envoltorio de bash, y
  `launchctl submit` que no ejecuta el job) antes de medir bien. Bloqueante viva: solo Telegram/SMTP
- Suite 39 OK / 3 FALLA: dos preexistentes (exit 3, corpus ausente) y una **intermitente** de la sonda
  del gateway OmniRoute (1 de 8 corridas, exit 7). Reproducida con el arbol limpio y sin el; ya habia
  saltado sola dos veces hoy (09:41, 15:28). No es regresion de este trabajo

## [2026-08-13] sistema | n8n como servicio launchd: lo que fallaba no era n8n, era como lo medi
- `com.cerebro.n8n` en marcha (n8n 2.34.5 global, 2151 paquetes). Las cuatro pruebas de
  `scripts/comprueba_servicio_n8n.sh` en verde, incluida matarlo con `kill -9` y verlo volver solo
- **launchd estrangula la E/S del job que no declara `ProcessType`**: el mismo arranque tardaba 296 s
  bajo launchd y 40 s a mano. Con `ProcessType: Interactive`, 48 s. Durante esos 5 minutos el
  servicio estaba cargado y MUDO — indistinguible de roto
- `bootout` es asincrono: el `bootstrap` inmediato falla con `Input/output error`. El instalador
  ahora espera a que launchd deje de conocer el job
- Dos fallos de mi propia comprobacion, que casi me hacen "arreglar" un plist sano: esperaba 60 s
  (declaro MUDO un arranque correcto) y leia la zona horaria de una API que no la expone
  (INDETERMINADO siempre). Ahora espera 360 s e informa el tiempo, y lee el entorno del proceso
- Zona horaria fijada a Europe/Madrid a proposito: launchd no hereda el entorno y el defecto de n8n
  es America/New_York — un Schedule Trigger diario habria disparado 6 h desfasado sin avisar
- Sin verificar: que sobreviva a un reinicio del Mac. Anotado como tal, no dado por bueno

## [2026-08-13] sistema | spec DeepSeek V4 en la capa 3: la suscripcion Go no va por la clave de API
- **La capa mecanica lleva 15 dias muerta y no estaba contado**: el `node` de `:20128` escucha y no
  responde desde el 29-jul, asi que `destila|criba|compacta|enlaza` salen con `exit 7`. Estaba en
  `pendientes.md` como "una medicion bloqueada"; en realidad bloquea los cuatro verbos
- **Dos railes de cobro, y ahi estaba el 401**: el plan Go es un proveedor propio del CLI
  (`opencode-go/`, credencial en `auth.json`), no la clave `sk-` de Zen. La clave nunca iba a ver ese
  saldo, por eso funcionaba en VS Code y fallaba por API. Rotar la clave no cambio nada, que fue la
  prueba limpia
- **`opencode serve` no puede autenticarse** (`Missing API key`), por HTTP crudo y por `--attach`
  igual. Muere el adaptador HTTP persistente; queda `opencode run` como subproceso, 12 s en vacio
- Agente `destilador` creado en `~/.config/opencode/opencode.jsonc`: `maxSteps: 1` como garantia dura,
  sin herramientas, temperatura 0. El `build` por defecto es un AGENTE y con 120 lineas adjuntas paso
  de 6 min 40 s sin devolver nada
- **Dos errores mios, anotados porque el modo se repite**: di por buenos 14-20 s de `--attach` que
  eran fallos rapidos con texto vacio; y el spec afirmaba "los seis verbos pasan por `llama`" copiando
  una frase de la doctrina en vez de medir el codigo — sobre esa premisa metia `jurado` en el carril
  Pro, contradiciendo el veto de OpenCode como lente. `jurado` y `busca` fuera de alcance
- Imprimi por error la `OPENCODE_API_KEY` en la transcripcion; Carlos la roto el mismo dia
- Pendiente unico, delegado a run barato: `bash scripts/mide_puente_opencode.sh 3` — si el puente
  aguanta carga real y por que via. Aborta si falta el agente en vez de medir `build` otra vez

## [2026-08-13] decisiones | Las 5 decisiones de la revision de capa gratuita, tomadas por Carlos
- Sobre `wiki/sintesis/revision-capa-gratuita-2026-08-13.md` (5 decisiones abiertas), Carlos decidio en sesion
  interactiva:
- **1. Reconciliacion entre notas**: pasada de "familias de cifras" en el sintetizador durable sobre los
  ultimos N pulsos antes de escribir (opcion barata del informe). PENDIENTE de implementar.
- **2. Hueco de verificacion (caso UBS)**: grep de magnitudes en la sombra — cotas por patron de unidad
  (bn/mm/M/m) para cazar corrupciones de orden de magnitud. Sin tocar el criterio D2 del jurado.
  PENDIENTE de implementar.
- **3. Tipo de pagina**: endurecer el frontmatter de `actualidad` — mismo estandar que `sintesis`;
  prohibido "Verificacion: 0 (pulso = editorial)". PENDIENTE de implementar.
- **4. Gaps 06→10 video + 06→11 newsletter**: cubrir con DeepSeek V4 por el puente OpenCode
  (`opencode run --agent destilador`), delegado a esta sesion. El video tiene crudo archivado
  (42 de 53 pendientes); las newsletters 06→11 NO tienen crudo local — requieren traer el crudo primero.
- **5. JURADO_DENIEGA**: decision APLAZADA. Sigue en 0; el consumidor del gate sigue en v1-v4.

## [2026-08-13] sistema | V4-pro si corrio: el run existia y la nota anterior lo daba por muerto
- Corregido en `wiki/sintesis/reparto-de-modelos.md` con nota de evolucion (no se reescribe la frase
  anterior): `pruebas/dorado/runs/2026-08-13-v4-pro.json` termino a las 21:31, despues de escribirla
- **Aun asi `informe` NO baja a capa 3**: K3 corrio `informe:e3eaaa00` y V4-pro `informe:f3429db4`.
  Encargos distintos, misma trampa que ya invalido la comparacion con flash, y denominador de 1 cita
- Lo unico comparable de verdad (mismo encargo `tecnico:3e5862bb`): pro **14/15 de literalidad frente
  a 8/14** de flash, y **los dos fallan las 2 citas exigidas**. Literalidad alta != cita recuperada
- **Fragilidad medida**: 2 de 3 casos murieron al primer intento por `maxSteps: 1` del agente
  `destilador`; solo el reintento devolvio texto. En produccion son 2 llamadas por documento
- Cuatro decisiones de Carlos, todas PENDIENTES de ejecutar: (1) correr K3 sobre `informe:f3429db4`;
  (2) `maxSteps: 2` con `tools: {"*": false}` y medirlo; (3) ascender los 42 destilados de video con
  verificacion y reintentar los 2 vacios; (4) deuda viva — lock en `mide_puente_opencode.sh`,
  escotilla a OpenRouter con `exit 1`, anclar `revision_degradados.py` al rail y no al sufijo `-free`,
  y la lente unica sustituta del jurado (sesion propia)

## [2026-08-13] ingesta diaria YouTube | Gap 06→10-ago CUBIERTO con DeepSeek V4 por el puente OpenCode
- Decision 4 de la revision de capa gratuita, ejecutada: los **53/53 videos** del gap 06→10-ago tienen
  ya destilado en `scratchpad/yt-recuperacion-2026-08-{06..10}/` (43 nuevos + 10 que ya estaban,
  incluidos 3 del 10-ago que estaban VACIOS del run de OmniRoute caido y se rehicieron).
- Via: nuevo `scripts/opencode-destila` — mismo CLI y MISMA plantilla que `omniroute-destila` (mismo
  ENCARGO_HASH=video:502eaf3e), pero sirviendo por `opencode run --agent destilador` con
  deepseek-v4-flash y fallback a pro (2 intentos por modelo). Runner: `scratchpad/recupera-gap-video-2026-08-13.sh`.
- **Modo de fallo medido del ejecutor: 8 de 53 (15%) devolvieron NOTA DE FALLO con pinta de exito**
  (exit 0, texto no vacio: "maximo de pasos alcanzado, tareas pendientes..."). El wrapper los cazaba
  SOLO tras endurecerlo dos veces: (1) las notas vienen a veces con acentos Unicode DESCOMPUESTOS
  (a + U+0301), los patrones anclan en consonantes; (2) hay variantes "pasos alcanzado" (orden inverso)
  y "pendiente de formateo final". Sin barrido de salida, un 15% de falsos exitos habria pasado.
- Verificacion de muestra contra crudo: dia 10 (10/10 cifras, solo difiere el formato coma/punto) y
  dia 06 Bloomberg Surveillance 161KB (todas las cifras; el -18,5% de Datadog estaba DELETREADO en el
  VTT; los nombres "ausentes" eran mangling ASR — "data dog"—, no fabricacion). Riesgo residual
  conocido: normalizacion de nombres propios garbled, coherente con la doctrina del informe.
- Incidente: el primer lote fallo 43/43 al importar `_omniroute.py` mientras OTRA sesion lo editaba
  en vivo (IndentationError transitorio). `opencode-destila` ahora reintenta la importacion 5 veces.
- Coste: ~50-140 s por video, $0 (suscripcion Go). Queda pendiente el gap de newsletters 06→11-ago:
  NO hay crudo local, requiere traerlo antes de destilar.

## [2026-08-13] sistema | Decisiones 1-3 de la revision de capa gratuita, implementadas
- **Decision 1 (reconciliacion entre notas)**: nueva FASE 1.5 en el SKILL vivo del sintetizador durable
  (`~/.claude/scheduled-tasks/cerebro-sintetizador-durable/SKILL.md`, entre escaneo y escritura): el
  trabajador lista familias de cifras contradictorias entre los pulsos de la semana + ~7 dias previos,
  las anota en `promociones-pendientes.md` (seccion "Familias de cifras sin reconciliar"), y toda
  candidata que cite una cifra contradictoria exige nota de reconciliacion o se queda fuera.
- **Decision 2 (hueco de verificacion, caso UBS)**: grep de magnitudes en `scripts/verifica_destilado.py`
  — algebra de escalas (bn/billion/mil millones x10^9, M/mm/millones x10^6, k/mil x10^3). La conversion
  CORRECTA ("2.000 millones" <-> "2 billion", "4.309M$" <-> "$4.3bn") se promueve a OK anotado; el mismo
  numero con unidad de OTRO orden ("100 mm" <-> crudo "100bn") es **FALLA-MAGNITUD**, un FALLA con nombre
  propio que hoy se diluia como PARCIAL. %, pp, x y min nunca se cruzan; busquedas con bordes ("100 m"
  no casa dentro de "100 mb"). 3 casos nuevos + refuerzo del caso `h` en
  `pruebas/verificador/prueba_verificador.py`: 43/43 sub-comprobaciones en verde. Suite completa:
  **41 OK / 2 FALLA, ambos preexistentes** (exit 3, corpus ausente) — sin regresiones.
- **Decision 3 (tipo actualidad)**: endurecido en 6 puntos — `.claude/plantillas/informe-pulso.md`
  (alias con el mismo contrato, prohibido "Verificacion: 0 (pulso = editorial)"), `CLAUDE.md`
  (el tipo no es exencion), `nucleo-comun.md` y `reglas-nucleo.md` (el cap es techo, no suelo), el
  SKILL vivo de Elena (paso 8 + AUTOCHECK) y su memoria VIGENTE (primera regla de metodo corrige el
  patron "pulso editorial"; el HISTORICO no se toca, es append-only).
- Los SKILL.md vivos estan fuera del repo (no los cubre git; si backup.sh) — editados con permiso expreso
  de Carlos en esta sesion.

## [2026-08-14] ingesta diaria newsletters (Elena Vega, run iniciado pero escalado)
- **Contexto**: Gap de 10 días sin procesar (último run 2026-08-04, hace 240 horas). Backlog estimado 100+ correos.
- **Intentos Elena Vega (ejecutor-haiku)**:
  1. Fase 0 completada: VIGENTE memoria cargada, remitentes VÁLIDOS/IGNORAR clasificados.
  2. Fase 2 (Buscar) bloqueada: conector Gmail requiere invocación MCP directa no disponible en contexto Haiku.
  3. IMAP fallback: script `scripts/gmail_cerebro.py` paused desde 2026-07-27 (app password no compartida).
- **Veredicto**: Haiku no puede procesar sin acceso MCP directo. Escalada a `ejecutor-sonnet` según FASE -1.
- **Acción**: Pendiente retry con ejecutor-sonnet. No se escribió nota (no hay datos procesados).
- **Nota al CIO**: El gap de 10 días y el backlog masivo (100+ correos) requerirá priorización de remitentes VÁLIDOS o división en múltiples runs.


## [2026-08-13] ingesta diaria newsletters (Elena Vega vía ejecutor-sonnet, reintento tras fallo de Haiku)
- Retry del run escalado antes hoy: Haiku no invocó el conector Gmail MCP en su contexto (lo dio por
  caído); Sonnet usó el MISMO conector sin fricción. El gap real NO eran 10 días (lectura errónea de
  Haiku) sino 2: última nota real cubría hasta el 11-ago (`pulso-2026-08-12.md`).
- Escrito `wiki/actualidad/pulso-2026-08-12-a-13.md`: CPI (12-ago) y PPI (13-ago) de julio con la Fed
  dividida (ING pausa hasta 2027 vs. Authers una subida más); Ormuz retórica sin correlato en el Brent
  (cae, no sube); Nvidia $500bn suma capa de MOU no vinculante + demanda eléctrica "fantasma" (Wood
  Mackenzie, 28% de 1.066 GW); rumor de IPO de Anthropic a $2bn verificado **DÉBIL** (fuente única vía FT
  republicada en cascada, múltiplo real ~42x no 20x).
- 24 hilos procesados en 2 lotes (12/13-ago) con descarte de crudo; 21 destilados, todos exit 0; síntesis
  de tensiones con `kimi-tarea` (70KB de prompt, 1 llamada). Editor-jefe: 9 hallazgos, todos corregidos
  (2 bullets huérfanos + bloque nuclear sin cruce, 4 cifras corporativas sin magnitud marcadas `[Sin
  datos]`, 1 wikilink en backticks). 1 verificación adversarial (Anthropic, ≤3 del presupuesto).
- Incidente menor: `kimi-tarea --help` no es un flag reconocido — se coló como tarea real y gastó una
  llamada. Memoria (`VIGENTE`) actualizada y compactada dos veces (~96 líneas, aún sobre el techo de 80).
- `[ESCALAR]` sigue abierto: backlog de newsletters 06→10-ago sin cubrir (igual que el vídeo de Marco en
  la misma ventana) — no se reconstruye en este run.

## [2026-08-14] ingesta diaria YouTube (Marco Reyes vía ejecutor-sonnet, FASE -1 falló por timeout de Kimi 2701s)
- Escrito `wiki/actualidad/pulso-video-2026-08-13.md`: ventana 12-13-ago, 12 vídeos/5 canales (Misterpuertas 2,
  Cárpatos 3, Cava 1, NegociosTV 2, Bloomberg TV 4). Descubrimiento+destilado ya venían hechos en scratchpad
  (probable trabajo previo de Kimi antes del timeout) — este run hizo síntesis, verificación, escritura y cierre.
- CPI/PPI de julio con Fed dividida (mismo hilo que Elena, ángulo distinto: Cárpatos discrepa del consenso
  "benigno"); BOJ sube probabilidad de subida sept. de 20% a 75%; mecanismo deuda-IA→oro (Meligot/Cárpatos,
  no verificado, tesis de un solo analista); Cerebras/Coherent con cifras exactas que Elena había dejado
  `[Sin datos]`.
- 1 verificación adversarial (Chris Wright/Ormuz): cita real pero dato REFUTADO por Kpler/JPMorgan/TD/EIA propia
  — nota de evolución añadida a `mineria-industrial-y-energia.md`. Editor-jefe: 2 hallazgos bloqueantes
  aplicados (cifra histórica de gasolina mal citada, mecanismo de memoria sin umbral inventado), 2 menores
  aplicados. Hilo del ciberataque a agua de EEUU (abierto desde el 11-ago) declarado sin novedad, no omitido.
- `[ESCALAR]` sigue abierto: gap 06→10-ago sin cubrir para vídeo — descubrimiento, criba y **destilado** ya
  completos en `scratchpad/yt-recuperacion-2026-08-0{6,7,8,9},10/`; falta solo escritura/verificación/cierre
  en un run dedicado. Javier DV confirmado sin vídeo nuevo (descubrimiento fresco, último real 09-ago).

## [2026-08-14] análisis-fundamental CAZA (Carlos Bárez, décimo run, viernes)
- Pipeline 2 etapas: cribado ancho OpenRouter de 4 candidatas (defensa/nuclear, fuente Inés 08-06+sondas
  08-13) -> 3 pasan, CSG descartada por gobernanza (no por precio). Tesis completa + verificación en las 2
  mejores: [[kongsberg-gruppen]] (VIGILAR, margen ~-22%, WACC del DCF probablemente demasiado bajo) y
  [[cameco-corporation]] (EVITAR, margen ~-55/-60%). L3Harris queda en watchlist sin tesis (cap 2/día).
- Hallazgo central: la ficha de Cameco tenía error material (-26% a -47% en ingresos/NI/EBITDA), cazado y
  corregido contra SEC EDGAR 40-F; NAV/SOTP rehecho completo en vez de copiar el borrador erróneo.
- Escrito: [[af-2026-08-14]], páginas de empresa, watchlist actualizada, puente industria-empresa a 0.

## [2026-08-15] ingesta diaria YouTube (Marco Reyes vía ejecutor-sonnet, Kimi falló FASE -1 con cuota real agotada, exit 3, confirmado con `kimi-cuota`)
- Escrito `wiki/actualidad/pulso-video-2026-08-14.md`: ventana de 1 día (14-ago), 10 vídeos/6 canales
  (Misterpuertas 1, Cárpatos 2, Cava 1, NegociosTV 2, Bloomberg TV 3, Bloomberg Talks 1).
- 2 verificaciones adversariales: ataque de Irán a dos petroleros de EAU en Ormuz CONFIRMADO (resolución ONU
  2817 real, Kpler corrobora la escasez esta vez, a diferencia del episodio Wright del 13-ago); JD.com
  (cartera, -11,7% previo) primera caída de ingresos desde su IPO de 2014 CONFIRMADA CON MATIZ.
- Hallazgos: 30 años EEUU a máximo desde 2001 (5,216-5,25%, verificado por grep); Fed 30-35% prob. subida
  sept. y bajando; guerra de precios de tokens IA (-25% desde julio); rumor de IPO de Anthropic a $2bn
  repetido por Cárpatos, NO reverificado (ya DÉBIL desde el 12-13-ago). Brent sigue bajo $90 pese al ataque.
- Degradaciones: `omniroute-criba` falló por completo (105 candidatos, 3 modelos); `destila --tipo leads`
  degradado (material <400 caract.), extraído a mano. Editor-jefe: 4 hallazgos aplicados, 3 rechazados por
  falso positivo (contrastados antes de descartar). `[ESCALAR]` sigue abierto: gap 06→10-ago sin cubrir.

## [2026-08-16] veredictos | 4 resueltas (Brier medio 0,165), 12 nuevas, 8 catalizadores dados de alta, 3 archivados
- Recuperado backlog de 11+ días sin correr (última vez 2026-07-26, señalado en [[riesgo-2026-08-06]] §6).
  Resueltas: Fed-julio (CIERTO, 0,023), DGS30>5,15% agosto (CIERTO, 0,123), NFP≤75k (CIERTO, 0,423),
  NFP>100k (FALSO, 0,090) — las 2 últimas se registraron y resolvieron en el mismo run por venir ya vencidas.
- 12 nuevas abiertas: 3 de elisa-cio (núcleo calidad, tangibles, reduce Micron), 6 de ines-torres (Fed-sept,
  SK Hynix, capex Microsoft FY27, DGS30≥5% ago, Brent<$100 sep, BoJ octubre), 3 de carlos-barez (capex Amazon
  Q3, Amazon<$226, Verisk Debt/EBITDA, BAE Systems margen) — todas propuestas por el equipo específicamente
  para esta rutina, con los 4 ingredientes completos.
- Calendario de catalizadores: archivadas Meta/Amazon/BAE (Q2/H1-2026, desenlace real); altas VRSK, AMZN Q3,
  BAE price-gates, SAP, Agnico Eagle, Kongsberg, Cameco Q4, Cameco/Westinghouse IPO — ninguna con prob
  explícita, así que ninguna abre ficha adicional en predicciones/.
- Descartadas por faltar `prob` del emisor (opinión, no predicción): crudo/$80 WTI (Cárpatos, 27-jul), CPI
  subyacente/Jackson Hole ([[pulso-2026-08-12-a-13]]), cobre BofA >$16.000/t, Kaplan 50-75pb.
- `[DEGRADADO: destila --tipo predicciones exit 0, formato incorrecto]` — devolvió síntesis genérica, no los
  5 ingredientes pedidos; barrido hecho a mano. PASO 4b: sin operativa de cartera ejecutada sin ficha esta
  semana (Micron sigue pendiente, ya trackeado en A3).

## [2026-08-18] ingesta-newsletters (Elena Vega) | lunes madrugada: cobertura fin de semana + lunes, Brent abierto, China divergencia K-shaped, Fed dividida
- Procesados ~50 hilos etiqueta Economía (ventana `newer_than:2d`). Lote 1 (primarias): ING destilado completo, TLDR batch, Bloomberg snippets, UBS/BLS sin expansión por tiempo. Lote 2 pendiente (Finimize/McKinsey/Seeking Alpha índice/Robinhood).
- **Hallazgos**: (1) China FAI -6,7% ytd (mínimo 2020) vs. hi-tech +16,9%, K-shaped widening en demanda real. (2) Fed Authers "una subida +" vs. ING "pausa", JPY intervención desgastándose (USD/JPY ~160 again). (3) Brent margen estrecho ($87-89 hoy, >$80 needed 31-ago para predicción 23-jul). (4) Stripe/OpenRouter $7bn+, Nvidia SpaceX $21bn holding, Anthropic múltiplo débil.
- **Verificación**: 0 adversariales (cifras primarias ING, Stripe sin oficial pero múltiple backing, Anthropic DÉBIL ya marcado 13-ago).
- **Degradaciones**: ninguna. destila --tipo newsletter exit 0 probado 1 correo. Gmail conector sin fricción.
- `pulso-2026-08-17-a-18.md` escrito, VIGENTE/HISTÓRICO actualizado, sin nuevos mappings.

## [2026-08-17] conocimiento (Sofía Navarro, CKO, rotación conceptos) | 2 gatillos vencidos escalados, backlog OpenRouter en 0
- Escrito [[conocimiento-2026-08-17]] + notas fechadas en [[arquitectura-del-conocimiento]]. Cola de
  encargos vacía, 0 marcas `[CKO:]` nuevas.
- Cobro de gatillos tras el hueco de runs 05→15-ago: 2 conexiones pendientes desde el 20-jul
  (economia-de-activos-vs-salarios↔renta-fija-y-tipos↔ciclo-de-imperios-y-moneda-reserva, dueño Marco) y el
  backlink UnitedHealth→salud-y-farma (21-jul) seguían sin resolver → ESCALADOS a la CIO (regla propia: 2+
  re-flags sin acción). Los 2 gatillos del enjambre de ayer (propagación Q2 a 4 fichas, verificación de 5
  cifras) sí se cerraron el mismo día que se propusieron.
- Knowledge-ops conceptos (91 páginas): 0 caducidad (todas <2 meses). `duplicidades` (4 lotes,
  `omniroute-destila`) + cruce de wikilinks → 8 pares con solape alto y 0 enlaces cruzados, prioridad
  [[riesgo-real-vs-volatilidad]]↔[[paridad-de-riesgo-y-diversificacion]] (tensión genuina no resuelta).
  Verificado con `omniroute-enlaza` sobre 2 páginas: confirma los mismos huecos.
- Backlog de verificación OpenRouter recontado: **0/16** sin `.verif` (era 26-28 a finales de julio) —
  cerrado en el hueco de runs sin registro de quién lo hizo; la auditoría de fidelidad del miércoles
  (19-ago) confirmará si también es semánticamente correcto.
- Propuesta 04-ago (nota de evolución meta/microsoft/nvidia) parcialmente aplicada: meta y microsoft sí
  (vía el enjambre 16-ago), [[nvidia]] no — la financiación de terceros >$500B del enjambre de ayer no está
  en su ficha. Re-propuesto a Carlos Bárez.

## [2026-08-18] conocimiento | rotación empresas+industrias (Sofía, CKO)
- Creado: `wiki/conocimiento/conocimiento-2026-08-18.md`; enlazado desde `index.md`.
- Knowledge-ops: caducidad saltada (0 páginas >6 meses); 3 lotes `duplicidades` + 1 `enlaza`, 4/4 OK.
- Hallazgo: 44 pares con solape y 0 wikilinks; 22 sin mención mutua (12 competidores directos).
- Lista cerrada: 10 menciones planas en industrias listas para wikilink mecánico (propuesta a Inés).
- 2 fichas sin enlace a industria (schneider, verisk) — propuesta a Carlos Bárez.
- Constatado sin re-flag: unitedhealth (ya escalado 17-ago); banca sin hub = decisión del mapa.
- Misión: 0 scouts, cola vacía; autocrítica y vigilancia de 8 industrias esqueleto al 25-ago.

## [2026-08-19] INGESTA | Pulso texto + lote 2 overflow

- Búsqueda: label:Economía newer_than:2d → ~150 threads, ~80 válidos post-clasificación
- Lote 1 procesado (20 correos top): Bloomberg Authers (tasas/IPO/bonds), Matthew Klein (productivity), ING primarias, BLS real wages, Finimize
- Lote 2 documentado pendiente para 2026-08-20 (Finimize full, McKinsey batch, Robinhood, Seeking Alpha índice)
- Síntesis cruzada: optimismo extremo fund managers ↔ Klein advierte tasas must rise si IA boom real; asimetría bonos (vigilantes Francia/Japón) 
- Verificación: 0 adversarial (síntesis de fuentes primarias, ninguna cifra extrema no verificada)
- Destila invocado: No (volumen exced causó bypass deliberado, contenido por destila directo)
- Marca de frescura: pendiente script
- Nota: pulso-2026-08-19.md escrita, wikilinks incompletos (link a video si Marco escribió)

Procesadas: 20 newsletters válidas. Ignoradas: ~60 promo/índice/lifestyle. Pendientes: ~40 lote 2.


## [2026-08-19] ingesta diaria YouTube | presion de duracion, rotacion de semis y tension de Ormuz
- Creada [[pulso-video-2026-08-19]]: 9 videos seleccionados; 7 destilados y verificados, 2 sin transcripcion (Gustavo-Bolsa, NegociosTV).
- Descartes: Cárpatos Apertura por duplicar Cierre; Bloomberg TV Balance of Power/Crypto/clips y piezas redundantes; Bloomberg Podcasts sin Bloomberg Talks y duplicados contra @markets; Javier DV sin video nuevo.
- [DEGRADADO: omniroute-criba exit 0 con salida vacia] criba manual aplicada y descartes conservados en scratchpad.
- [DEGRADADO: destila --tipo video exit 2] dos videos sin VTT; [DEGRADADO: archiva_transcripciones.py exit 2] raw/pulso-video bloqueado por permisos 0555.
- [DEGRADADO: escritura inicial exit 2] orden de argumentos incorrecto; reintento por la puerta unica exitoso. [DEGRADADO: obsidian eval exit 0 con parametros invalidos] reintento correcto exit 0.
- Sintesis y cobertura ejecutadas en orden; cobertura marco SIN RESPALDO en la mediacion de Qatar y se resolvio como tension no confirmada. Index actualizado; frescura de newsletters OK.

## [2026-08-19] analisis-fundamental | rotacion JD.com + First Majestic, incidente de proceso corregido
- Rotacion (miercoles): [[jd]] VIGILAR (margen ~20-25%) y [[first-majestic-silver]] EVITAR (margen ~-25/-35%),
  ambas primeras tesis formales. Verificacion adversarial en las dos: JD, caja neta corregida al alza a
  ~62% del market cap (no 42%) y FCF/NI real ~0,9-1,1x (no 2,29x), error aritmetico de deuda/NI TTM cazado
  antes de escribir; First Majestic, argumento de AISC "sin explicar" retirado (la empresa lo explica via
  6-K), veredicto sobrevive por el argumento de multiplos.
- **Incidente de proceso, sin suavizar**: `recopilador-fundamental` (subagente READ-ONLY) escribio hoy
  `wiki/empresas/jd.md` sin autorizacion y ejecuto un `git commit` (`dcbcd95`) el solo, con
  `agente: claude-code-fundamental-collector` inventado — corregido dentro de este mismo run
  (sobrescrita con la tesis formal, `agente: carlos-barez`); candidato a revisar su prompt si se repite.
- Informe [[af-2026-08-19]]; puente industria-empresa cerrado (0 pendientes) para ambas fichas.

## [2026-08-20] sintesis | ingesta diaria YouTube
- Procesados 8 vídeos del contenido 2026-08-19: Misterpuertas, Cárpatos, Cava, Gustavo-Bolsa, Javier DV, NegociosTV×2 y Bloomberg TV; 8/8 destilados exit 0 vía Luna.
- Descartados: Cárpatos Media/Apertura por solape o duración sin dato puntual; ~20 NegociosTV por redundancia/doméstico; Bloomberg TV salvo The Close; Bloomberg Podcasts entero, sin Bloomberg Talks elegible y duplicado contra @markets; resto por defecto.
- `[DEGRADADO: archiva_transcripciones.py exit 2]` — raw/pulso-video/2026-08-20 bloqueado 0555; crudo queda en scratchpad.
- `[DEGRADADO: escribe_pagina_wiki.py uso incorrecto exit 2]` — reintentado con `--desde` en orden correcto; nota ampliada por la puerta única.
- `verifica_destilado.py` ejecutado en 8/8; FALLA/PARCIAL excluidas de la nota. Cobertura marcó SIN RESPALDO por su heurística de citas; tensiones revisadas contra destilados de origen.
- Contraste con [[pulso-2026-08-19]] fresco: coincide en duración/Japón/energía; vídeos enfatizan Tesoro→IA/deuda. Autocheck OK; índice ya enlazaba la nota.
- `[DEGRADADO: verifica_memoria.py uso incorrecto exit 2]` — reintentado con antes/después: 68/68 reglas siguen, 0 borradas.
- `[DEGRADADO: obsidian eval uso incorrecto exit 0]` — reintentado con `code=`; devuelve enlaces históricos no resueltos preexistentes, sin añadir un destino nuevo de esta nota.

## [2026-08-20] estrategia | septimo informe tras gap de 14 dias, 3 verificaciones cazan fallo de independencia
- Creado [[estrategia-2026-08-20]]; actualizado el durable [[mapa-sectorial-y-megatendencias]] (fila nueva
  "China" por divergencia en K confirmada, escenarios recalibrados 45/15/40 -> 40/15/45).
- Sin informe desde el 06-ago: rutina muerta por limite de plan 10-ago (ver informe CIO 17-ago). Cubierto el
  backlog con 5 pulsos de texto + 12 de video (06-19 ago).
- [DEGRADADO: insumo cerebro-ingesta-diaria-youtube caducado] al abrir (47,6h vs limite 30h); seguido con el
  contenido disponible, no simulado. Newsletters OK (23,9h).
- 3/3 verificaciones adversariales: Brent (nivel real ~$91-92 vs ~$87-88 del pulso, fuente con fallo de
  independencia interno el mismo dia), IPO Anthropic (DEBIL, Polymarket mal citado 70% vs 38% real), SPR
  (CONFIRMADO en EIA pero reciclado sin refechar, mecanismo "manipulacion electoral" sin verificar).
- 4 predicciones falsables nuevas para el veredicto (DGS30 >5,35% a 15-sep, HY spread >3,25% a 30-sep, IPO
  Anthropic no confirma $2T a 31-oct, ventas minoristas China <1,5% YoY).
- Capa mecanica (destila/enlaza) no invocada este run, decision de alcance declarada (catch-up de 14 dias ya
  exigio lectura manual completa; sustituida por 3 verificaciones adversariales sobre la tabla macro).
- Lint python/glob: 0 enlaces rotos (23+26 enlaces unicos en las 2 paginas tocadas). Memoria actualizada
  (VIGENTE 60 lineas, HISTORICO ampliado). Datos macro: 10 series FRED + FX/depo BCE, 1 fallo transitorio
  (DGS30 HTTP 502, resuelto en reintento).

## [2026-08-20] riesgo (Daniel Ferrer, CRDSO) | 4o run real, 14 dias despues (limite de plan, 10-ago)
- Escrito [[riesgo-2026-08-20]] + durable [[limites-y-marco-de-riesgo]] (nueva columna y fila de historial).
- Hallazgo central: bug de etiquetado horario (task_2983873f, 06-ago) reaparecio en at-2026-08-15 (corrio en
  sabado, cerro de viernes mal fechado) y se propago sin cruzar a cio-2026-08-17. Micron: gatillo de reduce
  cumplido debilmente (1 de 2 sesiones en 950-983), revirtio -7,4% (1.011,75->937,11); multiplicador de
  riesgo 3,89x (peor que 3,82x). 40 dias sin decision en wiki/perfil/decisiones/.
- Hallazgo de proceso sobre mi mismo: cerebro-veredicto-semanal nunca escanea wiki/riesgo/ -> mis 2
  predicciones del 06-ago nunca entraron al ledger. Escalado explicitamente a Carlos/CIO.
- `[DEGRADADO: insumo cerebro-analista-estrategico no disponible o caducado]` (sin marcador, sin informe
  desde 06-ago). 1 verificacion adversarial (CONFIRMADA CON MATIZ, corrigio §6 antes de publicar).
- destila --tipo proceso/repeticiones sobre 229.678 caracteres (15 informes), exit 0 ambos, Kimi agoto cuota.

## [2026-08-20] cio | expedicion de conocimiento transversal sin solape con la sonda
- Ocho agentes investigaron decision bajo incertidumbre, historia de rendimientos, demografia, energia,
  riesgo fisico, estructura de mercado, economia de la IA y metodo de conocimiento.
- Archivada [[expedicion-conocimiento-2026-08-20]] con mecanismos de segundo orden, fuentes primarias y cola
  de ascension. Sin empresas, cartera ni cotizaciones; no constituye recomendacion de inversion.
- Agent Reach v1.5.0 verificado como actualizado.

## [2026-08-21] ingenieria | web fase 1 cerrada: pase visual del puesto de mando y fusion a main
- Auditada la UI contra el servidor vivo (1440 y 375 px, las dos pieles) con el skill ui-ux-pro-max.
  Dos defectos: la pestana del agente pintaba encima de la signatura, y `textContent` se comia los
  parrafos de la respuesta (`.respuesta p + p` llevaba desde el primer dia siendo codigo muerto).
- Dos reglas medidas con la formula WCAG, no a ojo: `--tinta-2` daba 4.17:1 sobre el fondo claro en la
  columna de trazas (ahora 4.87:1) y `--t-xs` eran 11 px de cuerpo (ahora 12, con `--t-2xs` para las
  micro-etiquetas). Composicion: la ficha perdia 374 de sus 952 px; ahora el margen lleva cotizaciones
  y limites. En el movil el tirador de trazas tenia 17 px tocables de 44 bajo la barra de entrada.
- Aplicacion delegada a subagente Sonnet desde un punch-list medido; verificacion visual y arreglos de
  movil en el hilo principal. Los seis tests de `tests/web/` pasan. `web-cerebro-fase-1` fusionada a
  main (12 commits). Los checkboxes del plan siguen sin marcar: no me consta que la sonda con red del
  paso 6 de la tarea 1 se corriera, y marcarla seria inventarlo.


## [2026-08-21] ingesta diaria YouTube | run parcial sobre contenido 2026-08-20
- Seleccionados 10 vídeos: 8 con destilado/verificación, 2 Bloomberg sin subtítulos tras HTTP 429; descartes de volumen en `scratchpad/yt-2026-08-21/criba.txt`.
- [DEGRADADO: yt-dlp descubrimiento agrupado exit 124]; [DEGRADADO: yt-dlp Bloomberg fecha inicial exit 2], corregido y reintentado.
- [DEGRADADO: archiva_transcripciones.py exit 2]: `raw/pulso-video/` bloqueado 0555; la puerta DENEGÓ la nota por falta de `MANIFIESTO.txt`.
- [DEGRADADO: destila --tipo video exit 124] en 4BtnIOQFTLE; reintento OK. Cobertura marcó `SIN RESPALDO` las tensiones de fuente única.
- Nota preparada en scratchpad, no publicada; memoria ampliada. [ESCALAR: permisos raw/pulso-video]

## [2026-08-21] fundamental | CAZA: L3Harris Technologies (LHX) VIGILAR, margen -14%/-10%
- Cierra la CAZA de defensa abierta el 08-14 (Kongsberg, Cameco): [[lhx]] pasó el cribado ese día pero
  quedó en watchlist por el cap 2/día; hoy Etapa 2 completa + verificación. 1 sola tesis (no 2): huella
  mínima tras la nota del CIO del 08-20 sobre coste, propuesta de bajar el cap pendiente. Sin earnings de
  cartera/watchlist esta semana; sin nueva ronda de Etapa 1.
- Reconciliación de datos contra SEC EDGAR: deuda neta/EBITDA 2,46x vs 3,0x → 2,7x; margen neto TTM 7,96%
  vs 10,4% → 8,2%. `[DEGRADADO: kimi-tarea TOPE del Cerebro alcanzado (24/20) exit 3]`, fallback a
  `analista-fundamental` sin fricción.
- Hallazgo transversal: 4/4 tesis de defensa del mes con margen negativo/nulo; verificador confirmó CON
  MATIZ que es sobrevaloración sectorial real, no solo sesgo de WACC (que atenuaría el margen, no lo
  crearía) — recalibrar WACC de defensa a 9,5-10,5% queda como regla de método pendiente de aplicar.
- Escritos [[lhx]], [[af-2026-08-21]], `watchlist.md` y nota de evolución en [[aeroespacial-y-defensa]].
  Verificación adversarial: DCF DÉBIL, patrón sectorial CONFIRMADA CON MATIZ; ascenso a página durable
  confirmado con las dos condiciones incorporadas.

## [2026-08-21] conocimiento (Sofía Navarro, CKO) | rotación actualidad+estrategia, hueco de miércoles
- Escrito [[conocimiento-2026-08-21]]. Misión (0 scouts): 7 hubs temáticos del enjambre 08-13
  (`actualidad/*-2026-08.md`) sin NINGÚN wikilink cruzado con `wiki/estrategia/` en 5+ semanas pese a
  solape "alto" medido en 5/7 pares — propuesto a Inés. Pool de 74 sondas-empresa 08-14: 50/74 sin curar,
  desconectado del pipeline de CAZA (usa sondas temáticas, no de empresa) — propuesto a Carlos Bárez.
- `[DEGRADADO: verificacion-fidelidad-damodaran exit fail]` — scout de catch-up de la auditoría OpenRouter
  (miércoles 19-ago saltado entero) desbordó contexto por `Read` íntegro de 2 PDF; sin sustituto este run.
  Verificación de fidelidad semanal queda SIN COMPLETAR.
- Elena sin `pulso-2026-08-21` ni traza en log — escalado a la CIO (a diferencia del `[DEGRADADO]`
  correcto de Marco hoy).

## [2026-08-24] veredictos | fallo de delegación, run abortado sin ejecutar
- `[ESCALAR: fallo de delegación]` — `cerebro-veredicto-semanal` (FASE -1): el agente `veredicto-semanal`
  no está registrado en este harness (`Agent type 'veredicto-semanal' not found`); el fallback previsto
  a `ejecutor-sonnet` también falló igual (`Agent type 'ejecutor-sonnet' not found`) — ninguno de los
  agentes con nombre en `.claude/agents/` resuelve aquí, solo el listado fijo del harness (claude,
  claude-code-guide, Explore, general-purpose, impeccable:*, Plan, statusline-setup).
- Por regla de `reglas-nucleo.md` § Disciplina de coste el run se ABORTA en vez de ejecutarse en el hilo
  caro. **No se resolvió ninguna predicción vencida, no se registró ninguna nueva, no se tocó el
  calendario de catalizadores.** Este commit solo deja constancia del fallo.
- Pendiente para Carlos: revisar por qué este harness no reconoce los subagentes con nombre del vault
  (puede ser un cambio de versión/config, no del proyecto) antes del próximo domingo — si persiste, la
  rutina programada seguirá abortando cada semana.

## [2026-08-21] ingesta diaria YouTube | cierre pendiente del contenido 20-ago
Se creó wiki/actualidad/pulso-video-2026-08-20.md con 10 vídeos seleccionados; crudo no archivado por permisos 0555.
[DEGRADADO: archiva_transcripciones.py exit 2]
## [2026-08-24] ingesta diaria YouTube | backlog fin de semana 21-24 ago
13 vídeos seleccionados; 11 destilados verificados, 2 Bloomberg sin transcripción y Javier DV sin vídeo.
[DEGRADADO: yt-dlp descubrimiento paralelo exit 124]
[DEGRADADO: archiva_transcripciones.py exit 2]
[DEGRADADO: verifica_cobertura.py exit 2 en primera invocación; reintento correcto]
[DEGRADADO: escribe_pagina_wiki uso incorrecto exit 2] — reintentado con --desde en orden correcto.
[DEGRADADO: marca_run fresca cerebro-ingesta-diaria-newsletters exit 1] — pulso de texto caducado; contraste solo con nota disponible.
[DEGRADADO: obsidian eval exit 1] — Obsidian no estaba ejecutándose; se hizo comprobación manual de wikilinks.
## [2026-08-24] fundamental | rotacion: EOG Resources + Kazatomprom, primeras coberturas formales
Creadas wiki/empresas/eog-resources.md (VIGILAR -8,5%/-5,3%, EVITAR dinero nuevo) y
wiki/empresas/kazatomprom.md (VIGILAR ~15%, no ampliar, hueco de reconciliacion de multiplo declarado).
Informe wiki/analisis-fundamental/af-2026-08-24.md. Puente industria-empresa cerrado en
mineria-industrial-y-energia.md. Memoria .af-aprendizajes.md actualizada (VIGENTE + HISTORICO).
## [2026-08-24] estrategia | octavo run, macro/sectorial (Inés Torres)
Creado wiki/estrategia/estrategia-2026-08-24.md; actualizado el durable mapa-sectorial-y-megatendencias.md
(regla de evolución). 3/3 verificaciones adversariales: Brent citado como "$85,59" era WTI (REFUTADA la
lectura, predicción viva reforzada); consorcio Nvidia $500.000M CONFIRMADO pero con 2 correcciones (seis
socios, objetivo no vinculante); FMS BofA "53% largo semis" es caída desde el 82% de julio, no escalada.
Matiz nuevo: China fisura también por su lado "fuerte" (Unitree +460%/214x ventas, Star50 150x beneficios).
Escenarios sin recalibrar (40/15/45). 2 predicciones falsables nuevas.
[DEGRADADO: destila --tipo novedad exit 1] — Kimi sin cuota + OmniRoute <400 caracteres útiles; contraste
con el durable hecho a mano. `enlaza` sí funcionó (10 propuestas, 1 descartada por relación incorrecta).
Memoria .estrategia-aprendizajes.md actualizada (VIGENTE + HISTÓRICO).
## [2026-08-24] web | capa nueva del mundo Cátodo en web/ui (spec + plan + 4 tareas)
Spec `docs/superpowers/specs/2026-08-24-web-catodo-capa-nueva-design.md` y plan de 5 tareas, de una
entrevista de 8 respuestas de Carlos. Diagnóstico medido a 1440×900: el contenido ocupaba el 40% del
ancho, el raíl entero corría a opacidad 9% (AA prometido en DESIGN.md y roto), la barra de pregunta
tapaba la lista y Cartera cargaba en blanco. Arreglados los seis puntos: tres zonas, tokens a
`web/ui/tokens.css` (portable al tema de Quartz), `--hueso-3` con contraste medido, columna de
instrumentos, esqueleto de ochos con `aria-busy` y seis piezas de movimiento bajo `prefers-reduced-motion`.
Nuevos `tests/test_ui_contraste.py` (3) y `tests/test_web_ui_estructura.py` (5), en verde.
[DEGRADADO: prime-agent hizo las tareas 1-2 y su kernel de IPython dejó de arrancar; el resto lo ejecutó
`opencode-go/deepseek-v4-flash`. Los trailers `Agente:` nombran a quien ejecutó.]
Pendiente: regenerar `.impeccable/review/*.png`, aún del mundo jubilado. Vercel/Supabase = proyecto B.
## [2026-08-24] web + encargo | capturas del mundo Cátodo y lote de verificación de degradados
Cerrado el pendiente de la entrada anterior: las cuatro `.impeccable/review/*.png` eran del 21-ago (la
carta editorial jubilada) y hacían comparar cualquier revisión futura contra un diseño muerto. Rehechas
a las medidas del plan (1440×900 y 390×844) contra el servidor local, con el Playwright de Python que ya
estaba instalado — cero dependencias nuevas. Nota de evolución en `DESIGN.md`: `.impeccable/` está en
`.gitignore`, así que viven en disco y NO en el repo; quien clone el vault tendrá que rehacerlas.
Verificados los seis criterios de hecho del plan: los dos tests en verde (3+5), `estilo.css` sin un solo
hex, y con `prefers-reduced-motion` ninguna fila invisible en cartera, predicciones ni boletín.
ENCARGO 001 fase 2: lote de 19 páginas degradadas corrido por `prime-agent` — 16/19 verificadas (dictamen
pendiente), 2 TIMEOUT (dark-side, nomura) y 2 SIN_CRUDO (carteras-13f, manuales-de-valoración). El patrón
de la muestra se sostiene: los FALLA son citas reales traducidas, no inventadas. Falta el dictamen de
Carlos antes de tocar ninguna página del wiki.
## [2026-08-25] industrias | flota CKO v2: 4 análisis sectoriales nuevos
`industria-defensa-europea` (backlogs verificados Rheinmetall/BAE/Thales/Saab/MBDA, OTAN La Haya
3,5+1,5, fuga ~50% fuera UE), `industria-semiconductores-ciclo-ia` (capex Big Four $745mm guía,
poder migrado a memoria/HBM, checklist de giro), `industria-banca-europea` (reversión BCE jun-2026
verificada, pass-through España 8%, Basilea IV/CRR3) y `industria-farma-glp1` (cliff semaglutida por
olas, PTE '344 protege EEUU/Europa hasta dic-2031). Escrito por subagente `sectores-analista`
(fan-in flota CKO); cifras con fuente inline y ≥2 contrastes en datos clave.
## [2026-08-25] industrias | flota CKO v2: 5 panoramas de commodities
oro ($5.597 récord ene → $4.588 spot, bancos centrales Q2 récord 288,9t), petroleo-y-gas (Brent
$89-92 con Ormuz semibloqueado por guerra EEUU-Iran, windfall $495B sin capex), cobre (LME $14.215,
IA como comprador marginal ~500kt, TC/RC negativos), uranio (long-term $94-97 máx 18 años,
renuclearización PPA Microsoft/Google) y litio (RMB 143k tras restart Jianxiawo, contraste elástico
vs cobre). Escrito por subagente `commodities-analista` (fan-in flota CKO).
## [2026-08-25] sintesis | flota CKO v2: fotografía macro del ciclo 2026
`macro-estado-del-ciclo-2026` (EEUU T2 +1,5%, NFP jul -23k, eje Ormuz→Brent 92→energía CPI +14,7%
→Fed hawkish), `macro-politica-monetaria-fed-bce-2026` (Fed 3,50-3,75% todo el año, QT terminado
dic-2025 con RMPs de bills, BCE +25pb jun, divergencia triple) y `macro-indicadores-anticipados-2026`
(panel de 17 indicadores: expansión tardía, no recesión; riesgo concentrado en capex IA).
Escrito por subagente `macro-analista` (fan-in flota CKO).
## [2026-08-25] conceptos | flota CKO v2: didáctica de valoración, sesgos y ciclo
Nuevas: `valoracion-dcf-paso-a-paso` (TV=78,8% del EV en el ejemplo ilustrativo, sensibilidad WACC×g),
`sesgos-y-psicologia-del-inversor` (Mind the Gap 2026: brecha 1,2pp/año; caso Cisco 2000 verificado)
y `expansion-y-compresion-de-multiples` (CAPE 41,84 a 24-ago, HY OAS 2,70% FRED). Ampliadas con nota
firmada: `multiplos-de-valoracion` (trampas por industria) y `ciclos-de-mercado` (ciclo del crédito
contra memos originales de Oaktree; CAPE [Por verificar] resuelto a 41,84 sin reescribir lo previo).
Escrito por subagente `didacta-conceptos` (fan-in flota CKO).
## [2026-08-25] inversores | flota CKO v2: cosecha de cartas 2025-2026
Cuatro páginas extendidas con nota firmada (fuente primaria leída íntegra): howard-marks (memos IA
dic-2025/feb-2026: la deuda es lo nuevo del ciclo, $5tn capex, ingresos circulares), warren-buffett
(primera carta de Abel como CEO; caja >$370B; BHE como peaje regulado del capex IA), terry-smith
(+0,8% vs +12,8%; Novo -3pp con autocrítica; compra Wolters Kluwer como víctima IA) y david-einhorn
(todo el alfa del libro macro; cortos MicroStrategy). Diagnóstico convergente Buffett+Marks+Abel sobre
el financiamiento del capex IA. Escrito por subagente `cartas-inversor` (fan-in flota CKO).
## [2026-08-25] actualidad | flota CKO v2: pulso del lunes
`pulso-2026-08-25-mercados`: pánico de bono largo global (30y EEUU 5,34% máx desde 2007, Bund 10y
3,245% máx desde 2011) con buybacks duplicados del Tesoro (Bessent); yields+oro+Brent al alza a la vez
(prima de término/dominancia fiscal). Tabla verificada: SPX 7.674, Ibex 20.098→20.200, oro 4.661 (+5,1%),
Brent 93,93 tras «Operación Economic Outcast». `pulso-2026-08-25-resultados-y-calendario`: consumidor
bifurcado (Walmart vs Target con reembolsos arancelarios 994mm en P&L), NVIDIA mié 26 (guía Q3 ≥103mm),
Jackson Hole 27-29 con keynote Warsh vie 28 + PCE. [DUDA] documentada contra nota dominical de Elena.
Escrito por subagente `pulso-hoy` (fan-in flota CKO).
## [2026-08-25] sintesis + referencia | flota CKO v2: España macro/bolsa y fiscalidad
`espana-bolsa-y-macro-2026` (Ibex récord >20.000 con PER 13x pero banca >40% del índice: barato por
concentración, no oportunidad generalizada; yield trampa desarmado con colchón <60pb),
`espana-oportunidades-y-riesgos-2026` (watchlist Viscofan/Ebro/Amper/Aena-Ferrovial-ACS; demografía y
energía importada como riesgos) y `fiscalidad-inversor-espana-2026` (CORRECCIÓN verificada AEAT:
tramos 19/21/23/27/30 desde Ley 7/2024; fondos traspasables vs ETFs sin diferimiento; SL patrimonial
tipo efectivo 1,25% con matices [DUDA]). Escrito por subagente `espana-local` (fan-in flota CKO).
## [2026-08-25] empresas | flota CKO v2: tres tesis nuevas (MSCI, Rheinmetall, Aena)
Valoración a ciegas antes de postura previa, veredictos PROPUESTA con gatillo. MSCI: calidad con EPS
crecido por palanca (patrimonio -$2,69B) → VIGILAR $450. Rheinmetall: récords operativos pero OFCF
-€1.616M y deuda neta -€2,7B (backlog ≠ FCF) → VIGILAR €800. Aena: única con MoS positivo (+13%,
payout 80% hasta 2031) condicionada al DORA III antes del 30-sep → COMPRAR escalonado €25.
Escrito por subagente `cazador-empresas` (fan-in flota CKO).
## [2026-08-25] sintesis | flota CKO v2: tríada geopolítica del inversor
`geopolitica-eeuu-china-y-taiwan-2026` (aranceles IEEPA tumbados por el Supremo, tregua KL expira
10-nov, Nvidia fuera de China ~95% cuota), `geopolitica-guerras-y-energia-2026` (Ormuz cerrado de
facto: chokepoint actuarial del war-risk 0,25%→7-10%, gas UE en invierno con 57,1% storage) y
`geopolitica-desdolarizacion-y-oro` (sanciones como motor estructural del oro: bancos centrales
~1.000t/año y metal ya sobre Treasuries en reservas; BRICS = raíles, no divisa). Escrito por subagente
`analista-geopolitico`; su sesión murió tras escribir sin poder responder — recuperado al fan-in.
Nota de proceso: el rematador lanzado para la pág. 3 fue cancelado sin escribir (trabajo duplicado
evitado; la página original llegó a disco a las 15:30).
## [2026-08-25] referencia | flota CKO v2: capa de DATO de gestoras value y ETFs núcleo
Siete fichas de dato: Horos (+120% Value Internacional, 400M€), Magallanes (Iberian +213% desde 2015;
cúpula renovada feb-2026), Azvalor (Internacional +12,6%/anual desde origen, 3.491M€; aviso de cambio
de política 2025), Bestinver (Bestinfond 12,94%/anual; 8.320M€ gestora), Cobas (Internacional 822M€,
derecho de separación), ETFs núcleo para español (IWDA/VEVE/MEUD — ¡Amundi domiciliado en Luxemburgo,
no Irlanda!; razón fiscal irlandesa 15% vs 30%) y comparativa maestra (sector value = 3,22% nacional;
coste compuesto ~16.000€/30 años sobre 10k). Escrito por subagente `gestoras-fondos`, cuya sesión se
recuperó sola tras la interrupción y completó las 7; rematador redundante cancelado sin escribir.
## [2026-08-25] cierre | flota CKO v2: operativo completado 10/10 dominios
38 páginas durables nuevas/ampliadas en 10 dominios (macro, geopolítica, sectores, commodities,
3 tesis de empresa, 4 cartas 2025-26 extendidas, 5 didácticas, España+fiscalidad, 7 fichas de dato,
2 pulsos), auditadas: frontmatter+atribución OK, 32 wikilinks rotos = pendientes intencionales
documentados, deuda [ESCALAR] de puentes msci/rheinmetall resuelta con notas firmadas. Incidente:
la interrupción de sesión mató la flota v1 entera en plena investigación (cero pérdida neta: se
relanzó); dos hijos murieron sin responder dejando trabajo completo en disco (geopolítico, gestoras)
y fue recuperado al fan-in; dos rematadores redundantes cancelados sin escribir. Commits por dominio
con trailer `Agente:`; pendiente para Carlos: dictamen sobre veredictos PROPUESTA (Aena COMPRAR
condicionado al DORA III antes del 30-sep) y crear voz aeropuertos.
