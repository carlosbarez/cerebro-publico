---
title: "Conocimiento — 29 jul 2026 (run 11)"
tipo: sintesis
tags: [conocimiento, cko, 2026-07]
fecha: 2026-07-29
---

# Conocimiento — 29 jul 2026 (run 11)

Miércoles: rotación **fuentes+inversores** + auditoría de fidelidad OpenRouter de miércoles. Cola
`encargos.md` vacía, 0 marcas `[CKO:]` nuevas desde el 28-jul.

## Misión del día

**¿El ritmo de verificación del brazo OpenRouter da abasto con su producción?** (encargo propio del
contrato de miércoles, no laguna elegida). Por qué esta: el conteo del 23-jul marcó 8 páginas sin
verificar y propuso un campo FIFO que nadie aplicó; hoy tocaba recuento + primera muestra con diente.
Squad: 1 scout `Explore` (Anthropic, read-only, independiente del brazo corregido) re-leyendo el crudo.

## Hallazgos (hecho / confianza / a quién sirve)

1. **El backlog se dobló: 16 páginas `destilado_por: openrouter` en `wiki/fuentes/`, ~14 sin verificar**
   (hecho, grep directo; confianza alta). La causa es estructural: el mini-lote de inversores del 07-13
   que resolvía *mi propia propuesta de trazabilidad del 22-jul* (6 de 11 páginas creadas: Rothman,
   Montier, Mobius, Pettis, Mauboussin, Kaminski) se destiló también por OpenRouter sin verificación
   inmediata — el remedio engordó la enfermedad. El campo `verificado: pendiente→fecha` propuesto el
   23-jul **no existe en ninguna de las 16** (grep de frontmatter, 0 coincidencias). Sirve a Elisa
   (evalúa la fiabilidad del reparto) y a quien ingiera.
2. **Primera muestra FIFO con error MATERIAL** (hecho, verificación subagente Anthropic contra el PDF,
   20 afirmaciones verificadas y 5 discrepancias; confianza alta). Página auditada:
   `fuentes/libros/dixit-nalebuff-el-arte-de-la-estrategia.md` (la más antigua sin verificar con crudo
   en `raw/`). Veredicto del scout: *con matices* — destilado conceptual fiel, casi todas las cifras
   exactas (incluidas dos que la propia página cuarentenaba: QWERTY 72%→98% y salario de eficiencia
   3.200, ambas resolubles a favor), pero:
   - **MATERIAL**: la página afirma que "el umbral de 2/3 (~67%) evita los ciclos de Condorcet"; el
     libro **calcula el umbral crítico en 64%** y la regla de dos tercios queda apenas por encima
     (pág. PDF 435). Es el modo de fallo (b) del canon: cifra derivada real (64%) sustituida por cifra
     convencional vecina (2/3). Y la página la presenta como "corroborada por las dos series" — ambas
     lecturas cometieron el mismo reetiquetado, la corroboración interna no protegió.
   - Menores: 79,6% de penaltis es la tasa *teórica* minimax, no la empírica (79,0-80,0%); ejemplo de
     salario de eficiencia en euros, no dólares (y el "32.000" de la segunda serie viene de un juego
     vecino — contaminación de contexto clásica); cita de Keynes parafraseada presentada como literal.
   Sirve a: dueño de ingesta (corregir la página) y a Elisa (evidencia nº 1 de que el backlog no es
   teórico).
3. **Trazabilidad fuentes↔inversores (22-jul): resolución PARCIAL, 6/11** (hecho, `ls` de
   `wiki/fuentes/`). Siguen sin página de fuente: abby-joseph-cohen, annie-duke, jeremy-grantham,
   nassim-taleb, ruchir-sharma. El lote avanza por tandas — no es abandono, pero tampoco está cerrado.
   Sirve a Carlos Bárez (suyo es el lote).
4. **Fundsmith semestral 2026: 3ª comprobación consecutiva sin fila en la tabla** (hecho, grep:
   la línea 12 declara "11 cartas anuales + una semianual 2026" y el PDF está en `raw/`, pero no hay
   fila ni contenido destilado). Propuesta 23-jul, verificada pendiente 28-jul, pendiente hoy → por mi
   propia regla (≥2 re-flags pasivos) sube a «Para la CIO», no a un 3er re-flag. Sirve a quien mantenga
   `fuentes/fundsmith/terry-smith-cartas.md`.
5. **Taxonomía de fallos OpenRouter: canon único NO consolidado** (hecho, grep de "algebraico" y
   "conflaci" en `CLAUDE.md`, `sintesis/reparto-de-modelos.md` y `sintesis/reparto-openrouter-claude.md`:
   0 coincidencias). Propuesta del 24-jul, 1er re-flag hoy. Agravante del día: la discrepancia material
   del hallazgo 2 es otra instancia documentada del modo (b) que sigue sin canon. Sirve a todo el equipo.

## Knowledge-ops — dominio rotado: fuentes+inversores

- **Laguna**: 5 inversores del lote 07-13 sin página de fuente (hallazgo 3). Alden arrastra un aviso
  "no verificado" obsoleto en el cuerpo pese a haberse verificado el 23-jul — propuesta al dueño:
  quitar el aviso y estampar la fecha (exactamente el caso de uso del campo `verificado:`).
- **Cifras que envejecen**: ninguna nueva en páginas de fuente (estáticas por diseño).
- **Conexiones no hechas**: ninguna nueva más allá de las ya propuestas (wikilinks empresa↔industria,
  gatillo ~5-ago, sin tocar hoy).
- **Duplicidades**: ninguna detectada en el dominio.

## Calidad de fuentes (qué rindió o falló hoy en el equipo)

- **Capa gratuita de destilado caída en el run 16 de Marco** (evidencia: aviso en
  `pulso-video-2026-07-29.md` + `[ESCALAR]` en `log.md`): `403 insufficient_quota` del proveedor
  primario en 12/12 llamadas, resuelto por fallback `openrouter/free` visiblemente más pobre (omitió
  earnings de Blackstone, Databricks y NXP en `The Close`; Marco lo rescató con grep directo al VTT,
  coste cero, correcto para pulso efímero). `omniroute-criba` también dio timeout/403 ×2. **Ojo**: el
  fallback que cubre la caída es el mismo brazo cuyo backlog de verificación se acaba de doblar — la
  dependencia del cerebro en el eslabón más débil está subiendo, no bajando.
- **Buen proceso en análisis fundamental** (`af-2026-07-29.md`): Verisk sin datos públicos del Q2 en el
  momento del run → pendiente declarado, **ningún dato fabricado** para rellenar; Qualcomm con
  verificación adversarial y 5 correcciones aplicadas antes de escribir, todas hacia más cautela.
  Ejemplo del estándar que el backlog openrouter no cumple.

## Propuestas

1. **A Elisa (CIO) — decidir sobre el backlog openrouter** (detalle en «Para la CIO»).
2. **Al dueño de ingesta de `fuentes/libros/`** — corregir `dixit-nalebuff-el-arte-de-la-estrategia.md`:
   (a) 2/3 → **64%** como umbral calculado por el libro (matiz: la regla de 2/3 queda apenas por encima);
   (b) 79,6% etiquetarlo como tasa teórica minimax; (c) salario de eficiencia en **euros** (3.200 €,
   51.200 €) y descartar el "32.000" como contaminación del juego de las camisetas; (d) levantar las
   cuarentenas de QWERTY y salario (resueltas a favor del crudo); (e) cita de Keynes: paráfrasis, no
   literal; (f) brinkmanship: páginas 236-238 de esta edición, no 187-189.
3. **Al dueño de `fuentes/fundsmith/terry-smith-cartas.md`** — destilar la carta semestral 2026
   (`raw/Terry Smith - Fundsmith Letters/fundsmith-equity-fund-semi-annual-letter-to-shareholders-2026.pdf`)
   y añadir la fila. Escalada a Elisa por 2 re-flags sin acción.
4. **A Carlos/Elisa** — consolidar la taxonomía de fallos (4 categorías) en el canon de
   `reparto-openrouter-claude.md` o `CLAUDE.md`. 1er re-flag, con caso nuevo de hoy como muestra.
5. **A quien mantenga `fuentes/alden-*`** — retirar el aviso "no verificado" obsoleto (verificada 23-jul).

## Para la CIO

1. **Backlog openrouter: 16 páginas marcadas, ~14 sin verificar, y la primera muestra FIFO sale con un
   error MATERIAL** (64%→2/3 en Dixit-Nalebuff). El remedio del 22-jul (mini-lote inversores) se hizo
   por el mismo brazo sin verificar y dobló la cola; el campo `verificado:` propuesto el 23-jul nunca se
   implementó. Propongo decidir una de dos: (a) congelar ascensos de OpenRouter a `fuentes/` hasta
   vaciar la cola con verificación Anthropic, o (b) adoptar verificación en la misma semana como parte
   del coste del brazo barato (si no se verifica, no fue gratis).
2. **Fundsmith semestral**: 3ª comprobación sin fila; según mi regla dejan de ser re-flags míos y pasa
   a tu tejado asignar dueño y fecha.
3. Semáforo-watchdog sin regenerar desde 26-jul con falso positivo publicado (bug día-de-semana) y
   taxonomía de fallos sin canon (1er re-flag hoy) — ambos ya en propuestas anteriores, sin acción.

---
*Escritor único del dominio: Sofía Navarro (CKO). Informe anterior: [[conocimiento-2026-07-28]].*
