---
title: "Informe de conocimiento — 2026-07-24 (Sofía Navarro, CKO)"
tipo: sintesis
tags: [conocimiento, cko, 2026-07]
fecha: 2026-07-24
fuentes: []
---

# Informe de conocimiento — 2026-07-24 (Sofía Navarro, CKO)

## Misión del día

Cola vacía (`encargos.md` sin filas, cero marcas `[CKO:]` en `actualidad/`, `estrategia/`,
`analisis-fundamental/`, `riesgo/`, `cio/` desde el run del 23-jul). Ítems "Abiertos" de memoria revisados:
Lacalle sigue sin novedad; la concentración IA/electrificación sigue en el tejado de Elisa (sin re-flag,
ver "Para la CIO"); los 3 pendientes de Carlos Bárez (wikilinks empresa↔industria, Nomura, Fundsmith) tienen
gatillo en la próxima rotación fuentes+inversores/empresas+industrias (miércoles/martes que viene), no hoy.

Elegida una laguna propia, no de mi dominio rotado (el dominio rotado de hoy es knowledge-ops, ver abajo; la
misión de investigación es independiente de la rotación por diseño del CONTRATO). Pregunta contestable:
**¿está el cerebro documentando en un solo sitio canónico las categorías de fallo conocidas del brazo
OpenRouter, o se está fragmentando en las memorias privadas de cada agente que las descubre?** Squad: **0
scouts** — verificable con `grep` directo sobre el vault, sin necesitar investigación externa; los hechos de
base (los dos casos concretos, ver Hallazgos) ya están triple-verificados por sus propios dueños, así que no
hace falta re-verificarlos — mi aportación es la conexión estructural entre ellos, no el hecho en sí.

## Hallazgos

**Confianza alta — verificado con grep directo, no con autorreporte:**

- **CLAUDE.md documenta 2 categorías de fallo del modelo `:free` de OpenRouter** (reetiquetado de ejes de
  tablas matriciales tipo Kentley; pegar una cifra real a un contexto vecino equivocado en libros de prosa).
  Es la única ubicación que el flujo de ingesta cita como regla del parser — se lee en cada run que toca
  destilado.
- **Existe una 3ª categoría, "fabricación por cierre algebraico"** (caso Nomura, hallada y triple-verificada
  el 23-jul: el modelo inventó la cifra 3.487 como residuo aritmético para que un desglose ya corrompido
  cuadrase). Confirmado por `grep`: vive en `wiki/index.md`, `arquitectura-del-conocimiento.md` y
  `conocimiento-2026-07-23.md` — las tres son páginas **mías** (CKO). **No está en `CLAUDE.md` ni en
  `wiki/sintesis/reparto-openrouter-claude.md`**, pese a que mi propio informe del 23-jul ya proponía "ampliar
  la regla del parser con esta 3ª categoría" a Carlos/Elisa. Un día después, sigue sin aplicarse.
- **Existe una 4ª categoría, no cruzada con las 3 anteriores**: "conflación temporal de dos hechos reales
  vecinos" (fecha/marcador de un evento real, pero del día o mes equivocado — no invención de cifra, no
  reetiquetado). Hallada hoy por Marco Reyes en su propio run (`.rutina-video-aprendizajes.md`, entrada
  "run 11"): **3 verificaciones adversariales en un único encargo confirmaron el mismo patrón** en tres casos
  independientes (ampliación de capital de Alphabet de junio atribuida a julio; embargo hutí real del 20-jul
  presentado como simultáneo al ataque del 22-jul; una votación del Congreso de junio atribuida a julio).
  Marco ya la subió a "regla operativa dura" en su propio Método — pero **solo en su memoria privada**
  (`.rutina-video-aprendizajes.md`) y en el digest del día (`pulso-video-2026-07-24.md`), confirmado por
  `grep -rl conflaci wiki/`: ningún resultado en `CLAUDE.md`, `reparto-openrouter-claude.md` ni en mi propia
  `arquitectura-del-conocimiento.md`.
- **Patrón del hallazgo**: cada brazo (Carlos Bárez vía Nomura, Marco vía el pulso de vídeo) descubre y
  documenta su propia categoría de fallo, la aplica bien dentro de su dominio, pero **no existe un canon
  único que las acumule** — el riesgo es que un tercer brazo (o el mismo Marco/Carlos Bárez dentro de 2
  meses) tenga que redescubrir de cero una categoría ya vista, porque la única forma de encontrarla es
  saber de antemano en qué memoria privada o informe fechado mirar. Es exactamente el tipo de conocimiento
  disperso que mi rol existe para conectar.

**A quién sirve**: a Carlos y Elisa (deciden si amplían la regla del parser en `CLAUDE.md`), a Carlos Bárez y
Marco (dueños de los brazos que ya pagaron el coste de descubrir cada categoría — un canon les ahorra
re-explicarla), y a mí misma (mi propio miércoles de auditoría de fidelidad OpenRouter debería muestrear
contra las 4 categorías conocidas, no solo las 2 de `CLAUDE.md`, y hoy no lo hacía).

## Knowledge-ops — dominio rotado: actualidad + estrategia

- **Conexión sana, para contraste**: `estrategia-2026-07-23.md` (Inés) ya enlaza correctamente la tenaza
  Ormuz+Bab el-Mandeb con `[[mineria-industrial-y-energia]]` y distingue con disciplina el caso base Goldman
  ($80/barril) de su escenario de cola ($120) — exactamente el patrón de "citar el ancla correcta, no el
  titular" que el cerebro exige.
- **Cifra que envejece dentro de su propio dominio (no la regla de >6 meses, pero mismo espíritu — dato vivo
  que un evento rápido dejó atrás en 1 día)**: `estrategia-2026-07-23.md` (escrito 23-jul, 05:31, antes de la
  escalada del día) cita "el pulso de julio sitúa el Brent spot en $90-95". El propio pulso del mismo día
  (`pulso-video-2026-07-24.md`) documenta el cierre real del 23-jul en **$100,87** (escalada intradía
  $88,25→$98,52→$100,87, Bloomberg *The Close*) — el dato de Inés ya estaba un ciclo por detrás el mismo día
  que lo escribió, en la variable que su propio informe marca como "riesgo sistémico nº1". No es un fallo de
  proceso (el pulso del día siguiente no existía cuando ella escribió), pero sí un candidato claro a
  refrescar en su próxima rotación, dado el ritmo del *shock*.
- **Duplicidades**: ninguna nueva. `actualidad/` (30 páginas: 19 pulso texto+vídeo, 8 método, 2 privadas,
  encargos vacío) y `estrategia/` (9 páginas) sin solapes de nombre ni de alcance.
- **Cifras >6 meses en páginas vivas**: no aplica — el vault más antiguo en estos dos dominios tiene 11 días
  (`pulso-2026-06-a-07.md`, 13-jul); demasiado joven para que este chequeo dé positivo.
- **Calidad de proceso ya observada por el propio dominio, sin necesitar mi verificación**: NegociosTV fusionó
  "reivindican ataques + anuncian embargo" sugiriendo simultaneidad — capturado y corregido por verificación
  adversarial antes de escribir el digest (`pulso-video-2026-07-24.md`, sección 1). Buen ejemplo de que el
  patrón de contraste funciona incluso cuando el error viene de la fuente y no del destilador.

## Calidad de fuentes

- **Editor-jefe repite (2ª vez consecutiva, 23 y 24-jul) la misma sugerencia de un `tipo` de frontmatter
  inexistente en el schema** — según `.rutina-video-aprendizajes.md`, ya confirmado como patrón y elevado a
  regla dura ("rechazar sin contrastar") por el propio orquestador de Marco. Revisé la ficha
  `.claude/agents/editor-jefe.md`: no contiene ninguna lista de `tipo`s válidos ni instrucción que explique
  el error, así que no es un bug de configuración corregible en la ficha — es inconsistencia del modelo
  (Haiku) al inferir el schema sin tenerlo delante. Mitigación ya aplicada (ignorar esa clase de sugerencia
  sin gastar una verificación) es razonable; no propongo tocar la ficha por un problema que no vive en ella.
- **Ver Hallazgos arriba** para el hallazgo principal de calidad de fuentes de hoy (dispersión de la
  taxonomía de fallos de OpenRouter) — es en sí mismo un hallazgo de "calidad del brazo ejecutor", no de un
  canal de noticias.

## Propuestas

- **A Carlos y Elisa** (dueños de `CLAUDE.md`, regla del parser): consolidar las 4 categorías de fallo del
  modelo `:free` en un único lugar canónico — propongo `wiki/sintesis/reparto-openrouter-claude.md` (ya es la
  página de política completa, mientras `CLAUDE.md` mantiene el resumen operativo con referencia a ella) con
  una tabla `# | nombre | caso que la reveló | página fuente | fecha`. Coste: una edición, sin nueva
  investigación (los 4 casos ya están escritos, solo dispersos). Reversibilidad: total, es solo reorganizar
  texto ya existente. Sin esto, la 3ª categoría lleva un día sin aplicarse pese a estar propuesta, y la 4ª
  corre el mismo riesgo si nadie la saca de la memoria privada de Marco.
- **A Inés Torres** (dueña de `estrategia/`): refrescar el dato de Brent en `estrategia-2026-07-23.md` (o en
  su próxima nota) con el cierre real del 23-jul ($100,87) en vez de "$90-95" — el propio informe marca el
  petróleo como riesgo sistémico nº1, así que vale la pena que su cifra ancla no vaya un ciclo por detrás del
  pulso que ella misma cita como fuente.
- **A mí misma** (auditoría de miércoles): a partir de la próxima auditoría de fidelidad OpenRouter, muestrear
  contra las 4 categorías conocidas (si se consolidan) o contra los 2+ hallazgos dispersos (si no), no solo
  contra las 2 de `CLAUDE.md` como venía haciendo.

## Para la CIO

- **Hallazgo de proceso, no de mercado**: la taxonomía de fallos de OpenRouter se está descubriendo de forma
  redundante y dispersa en vez de acumularse — 2 brazos (Carlos Bárez, Marco) ya pagaron el coste de encontrar
  una categoría nueva cada uno en la última semana, y ninguna de las dos ha llegado al lugar que el resto del
  equipo lee (`CLAUDE.md`). Propuesta de consolidación arriba; no pide acción tuya hoy salvo que quieras
  priorizarla frente a otras propuestas de mantenimiento en cola.
- **Concentración IA/electrificación**: sigue sin resolver en tu tejado desde el 21-jul; no repito el flag,
  solo confirmo que sigue así (mi propia regla de memoria: si no lo empujas tú, no insisto más).
- Lacalle: sin novedad, no repetido como hallazgo. Factor-momentum: **resuelto** — promovido a página durable
  (`conceptos/factor-momentum.md`) por Marco el 24-jul tras su 4ª aparición independiente, cierro este ítem de
  mi lista de "abiertos".
- Cero escrituras fuera de `wiki/conocimiento/` esta sesión. Cero recomendaciones de inversión.
