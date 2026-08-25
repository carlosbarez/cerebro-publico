---
title: "Conocimiento 2026-08-17 (lunes — rotación conceptos + cobro de gatillos tras el hueco de runs)"
tipo: sintesis
tags: [conocimiento, cko, 2026-08]
fecha: 2026-08-17
---

# Conocimiento 2026-08-17 (lunes — rotación conceptos + cobro de gatillos tras el hueco de runs)

## Misión del día

**Pregunta** (0 scouts, laguna propia — cola `[[encargos]]` vacía, 0 marcas `[CKO:]` nuevas en
`actualidad/`, `estrategia/`, `analisis-fundamental/`, `riesgo/`, `cio/` desde el 16-ago): tras el hueco de
runs regulares del CKO (último run de rotación real: 04-ago; el 16-ago fue el enjambre, sin rotación de
dominio), ¿qué pasó con los gatillos que mi propia memoria tenía pendientes para el 05-ago, y se propagaron
los hallazgos del enjambre de ayer a sus dueños?

**Por qué esta y no otra**: dos gatillos de escalado propios (regla VIGENTE: "≥2 re-flags pasivos sin
acción → directo a «Para la CIO»") vencieron hace 12 días sin que ningún run los cobrara — dejarlos sin
resolver otra rotación más normaliza la propia regla de escalado que yo misma fijé. Cobrar gatillos
vencidos es más valioso que abrir una laguna nueva mientras haya deuda de proceso pendiente (validado ya
8 veces, ver [[arquitectura-del-conocimiento]]).

## Hallazgos

### 1. Gatillos vencidos del 05-ago: 2 siguen sin resolver → ESCALADOS a la CIO

- **Conexiones no hechas propuestas a Marco (20-jul)**: [[economia-de-activos-vs-salarios]] ↔
  [[renta-fija-y-tipos]] ↔ [[ciclo-de-imperios-y-moneda-reserva]]. Comprobado por `grep` en ambas
  direcciones de las 3 páginas: **0 de 3 pares enlazados**, salvo `ciclo-de-imperios-y-moneda-reserva` →
  `renta-fija-y-tipos` (1 sentido, ya existía). 3 re-flags acumulados (3-ago, 4-ago, hoy) sobre el mismo
  hueco. Hecho, confianza alta (grep directo). Sirve a: Marco Reyes (dueño), Elisa (decide si prioriza).
- **Wikilinks empresa↔industria — UnitedHealth**: [[unitedhealth]] → `salud-y-farma` sí existe (2
  menciones), pero **[[salud-y-farma]] → unitedhealth sigue en 0** y `mapa-de-industrias` tampoco la
  enlaza. Mismo patrón detectado el 21-jul en el lote completo de industrias. Hecho, confianza alta.
  Sirve a: dueño de `industrias/` (Inés Torres / Carlos Bárez).

Aplico mi propia regla sin un 3er re-flag idéntico: ambos van a «Para la CIO» abajo, no a un cuarto aviso.

### 2. Gatillos del enjambre de ayer (16-ago): AMBOS cerrados, y rápido

- **Q2 2026 propagado a las 4 fichas de cartera** (propuesta a Carlos Bárez de [[conocimiento-2026-08-16]]):
  confirmado con `grep` — [[meta-platforms]], [[microsoft]], [[alphabet]] y [[amazon]] tienen ya su "Nota
  de evolución 2026-08-16" con las cifras de Q2 (FCF Meta $0,78B, Azure +43%, Cloud Alphabet +82%/FCF
  -$5,9B, AWS Amazon +37%). Cerrado el mismo día en que se propuso.
- **Las 5 cifras de alto impacto marcadas para verificación** (propuesta a Elisa): confirmado en
  `scratchpad/verificacion-cinco-cifras-2026-08-16.md` — las 5 (capex/OCF 99,0%, márgenes HBM, CAPE 42,6,
  HY 271 pb, default private credit 6,0%) están **CONFIRMADAS contra fuente primaria** (SEC filings, FRED,
  Fitch, Shiller data), con matices de comparabilidad de periodo anotados. Buen proceso: verificación
  primaria el mismo día del hallazgo, no backlog. Sirve a: quien cite estas cifras en durable (ya pueden
  ascender sin el aviso "sin verificar").

### 3. Propuesta de 4-ago sobre Nvidia: parcialmente aplicada, con matiz

La propuesta del 04-ago era una nota de evolución en [[meta-platforms]]/[[microsoft]]/[[nvidia]]. Comprobado
hoy: meta-platforms y microsoft la recibieron (vía la propagación del 16-ago, que cubría el mismo terreno
sin saberlo). **[[nvidia]] no tiene ninguna sección "Nota de evolución" fechada** pese a dos oportunidades
de aplicarla (04-ago y 16-ago) — la financiación de terceros de >$500B (Apollo/Blackstone/BlackRock/KKR)
que citó el enjambre de ayer tampoco está en la ficha, que solo llega a los $22,3B de participaciones no
cotizadas del 10-K (dato más antiguo). Hecho, confianza alta (grep + lectura directa). Sirve a: Carlos
Bárez (dueño de `empresas/`).

### 4. Backlog Nomura: sin cambio, ya en el tejado de la CIO

`wiki/fuentes/nomura/nomura-informes-anuales.md:62` sigue con la cifra fabricada (3.487, "plantilla
Japón") 25 días después de la corrección propuesta (23-jul) y 14 días después de escalarla (3-ago). No
añado re-flag nuevo — ya escalado, regla propia de no repetir avisos sin que la CIO pida detalle. Solo
constato que sigue abierto para que no se lea como resuelto por omisión.

## Knowledge-ops — dominio rotado: conceptos (91 páginas)

- **Caducidad**: 0 páginas objetivo. Las 91 páginas de `wiki/conceptos/` están fechadas 2026-07 (la más
  antigua, 07-jul, con 41 días — ninguna pasa el umbral de 6 meses). `--tipo caducidad` se salta sin ruido,
  igual que la auditoría de miércoles cuando no hay páginas `destilado_por: openrouter` (mismo criterio del
  CONTRATO: nada que auditar, no forzar hallazgo).
- **Duplicidades → conexiones no hechas** (método documentado hoy en
  [[arquitectura-del-conocimiento]]): `omniroute-destila --tipo duplicidades` sobre las 91 páginas (4 lotes
  <280KB, techo real medido en 300.000 caracteres, no los 380.000 del `MAX_ARGV` teórico — corregido en el
  momento) devolvió **131 pares con solape**. Cruzados por `grep` de wikilinks en ambas direcciones: **34
  pares sin ningún enlace cruzado**, de los cuales **8 con solape "alto"** son el hallazgo real:
  - [[beneficio-del-promotor]] ↔ [[contabilidad-y-calidad-de-beneficios]] (0 enlaces en ningún sentido,
    pese a que ambas tratan cómo el crédito barato/la ingeniería contable infla resultados aparentes).
  - [[beneficio-del-promotor]] ↔ [[coste-de-capital-wacc]] (0 enlaces; ambas usan el ROIC vs. coste de
    capital como prueba de si una adquisición crea o destruye valor).
  - [[riesgo-real-vs-volatilidad]] ↔ [[paridad-de-riesgo-y-diversificacion]] (0 enlaces; es la más
    valiosa de las 8 — es una TENSIÓN real y no resuelta del corpus: `paridad-de-riesgo` trata la
    volatilidad/correlación como la medida del riesgo, mientras `riesgo-real-vs-volatilidad` es
    precisamente la crítica de Buffett a esa misma equiparación. Confirmado leyendo ambas páginas: ninguna
    menciona a la otra ni el término de la contraria).
  - `ciclo-de-imperios-y-moneda-reserva` ↔ `asignacion-de-activos`, `desconexion-del-ruido-informativo` ↔
    `ciclos-de-mercado`, `eficiencia-de-mercado` ↔ `margen-de-seguridad`,
    `malinversion-y-zombificacion-empresarial` ↔ `flujo-de-caja-descontado`, `reversion-a-la-media` ↔
    `retorno-sobre-capital-empleado` — mismo patrón, solape temático alto sin cruce.
  - Verificado con `omniroute-enlaza` sobre 2 páginas de la lista (`beneficio-del-promotor`,
    `riesgo-real-vs-volatilidad`): de sus 10 propuestas cada una, la mayoría reconfirma enlaces que YA
    existen (el verbo tiende a replegarse sobre lo ya enlazado, límite conocido de recall documentado en
    `docs/barrido-enlaza/control-glosa.md`) — pero en ambos casos **confirma exactamente los mismos huecos**
    que `duplicidades` señaló, dos instrumentos independientes de acuerdo. Confianza alta.
  - Nota de anti-duplicación aplicada: `activismo-accionarial` ↔ `activismo-constructivo` (nombres casi
    idénticos, solape "alto" esperable) **no es un hallazgo** — `activismo-constructivo.md` ya es un alias
    de navegación deliberado que redirige a `activismo-accionarial` (fecha 16-ago, `tags: [..., pendiente]`),
    no una página duplicada por accidente. Leídas las dos antes de reportar, como manda la lección del
    21-jul.
- **Fuente de la cifra "8 pares"**: no se proponen fusiones — el propio `--tipo duplicidades` tiene
  prohibido proponerlas y no lo hago yo tampoco; son candidatas a wikilink, no a fusión de contenido.

## Calidad de fuentes

- **`omniroute-destila --tipo duplicidades`**: 4/4 lotes con éxito tras corregir el techo (300.000
  caracteres reales, no 380.000) — el primer intento con lotes de ~330KB devolvió exit 2 con mensaje claro
  (`por encima del límite seguro`), no una degradación silenciosa. Corregido re-troceando, sin
  `[DEGRADADO:]` que anotar porque el fallo fue de mi propio cálculo de lote, no del proveedor.
- **`omniroute-enlaza`**: 2/2 llamadas con 10/10 propuestas ancladas literalmente (0 sin verificar), 0
  páginas inventadas. Confirma el límite ya documentado en `docs/barrido-enlaza/`: alto recall de lo que
  YA está enlazado, bajo recall de conexiones nuevas reales — razón de más para no confiar solo en el verbo
  y cruzarlo con `duplicidades`, como se hizo hoy.

## Propuestas

1. **A Marco Reyes** (3er aviso, ahora vía escalado — ver «Para la CIO»): enlazar
   [[economia-de-activos-vs-salarios]] ↔ [[renta-fija-y-tipos]] ↔ [[ciclo-de-imperios-y-moneda-reserva]].
2. **A Inés Torres / Carlos Bárez** (dueños de `industrias/`): backlink [[salud-y-farma]] →
   [[unitedhealth]] y alta en `mapa-de-industrias`.
3. **Al dueño de `wiki/conceptos/`** (Carlos Bárez, o quien la CIO designe): 8 pares de páginas con solape
   alto y 0 wikilinks cruzados (lista completa en Knowledge-ops arriba); prioridad
   [[riesgo-real-vs-volatilidad]] ↔ [[paridad-de-riesgo-y-diversificacion]] por ser tensión genuina y no
   solo tema adyacente.
4. **A quien mantenga `wiki/fuentes/libros/alden-broken-money.md`**: el aviso "no verificado contra el
   crudo" (línea 15) sigue ahí pese a la verificación del 23-jul (propuesto ya el 30-jul, sin aplicar).
   Baja prioridad, re-anotado para no perderlo.
5. **A Elisa (proceso CKO)**: las 5 cifras del enjambre de ayer ya no necesitan el aviso "sin verificar" al
   ascender a durable — CONFIRMADAS contra primaria en `scratchpad/verificacion-cinco-cifras-2026-08-16.md`.
6. **A Carlos Bárez** (2ª vez, 04-ago y hoy): nota de evolución en [[nvidia]] con la financiación de
   terceros >$500B (Apollo/Blackstone/BlackRock/KKR) del enjambre de ayer — la ficha sigue en el dato del
   10-K ($22,3B), un orden de magnitud por debajo de lo que ya se sabe.

## Para la CIO

- **2 gatillos vencidos desde el 05-ago cobrados hoy y escalados** (regla propia: 2+ re-flags pasivos sin
  acción → directo a ti, no un 3er aviso): conexiones Marco (economia-activos-salarios↔renta-fija↔ciclo-
  imperios) y backlink UnitedHealth↔salud-y-farma. El hueco de runs 05→15-ago es la causa raíz de que no
  se cobraran antes — no hubo rotación regular en esa ventana, solo el enjambre del 16-ago.
- Los 2 gatillos del enjambre de ayer (propagación Q2, verificación de 5 cifras) **se cerraron el mismo
  día que se propusieron** — buena señal de proceso, contraste positivo con los 2 anteriores.
- Backlog de verificación OpenRouter en **0/16** (era 26-28 a finales de julio) — cerrado en algún punto
  del hueco de runs sin que quedara registrado quién lo cerró. Detalle en
  [[arquitectura-del-conocimiento]]; recomiendo que la auditoría de fidelidad del miércoles (19-ago) sea la
  que confirme si "cerrado" también es "correcto" esta vez.
- Método nuevo documentado (reusable, sin coste adicional): cruzar la salida de `duplicidades` contra
  wikilinks existentes separa "duplicado falso" de "conexión real no hecha" — 8 pares concretos en
  conceptos hoy, ver Propuestas 3.

Run de hoy: [[conocimiento-2026-08-17]] · Mapa: [[arquitectura-del-conocimiento]] · Cola: [[encargos]]
