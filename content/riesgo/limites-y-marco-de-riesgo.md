---
title: "Límites y marco de riesgo — Carlos"
tipo: sintesis
tags: [riesgo, limites, marco, gobernanza, decision]
fecha: 2026-07-16
fuentes: []
---

# Límites y marco de riesgo — Carlos

> [!info] Documento vivo
> Se propone y se **evoluciona** en cada run de `cerebro-crdso-riesgo` (Daniel Ferrer, CRDSO) — no se
> reescriben los umbrales previos, se añade una fila al historial (abajo) cuando cambian. Carlos decide si
> adoptar cada límite. Primera versión: 2026-07-16.

Los límites de riesgo protegen al fondo de las emociones, no del análisis — su función es que una decisión no
se tome en caliente, en el momento de mayor euforia o mayor pánico.

## Principio

**Riesgo = probabilidad de pérdida PERMANENTE de capital, no volatilidad** ([[riesgo-real-vs-volatilidad]]).
Los límites de abajo no buscan minimizar la volatilidad de la cartera de Carlos (su tolerancia aldrawdown es -50%, alta) — buscan evitar que una concentración factorial no compensada, un producto con
decaimiento estructural o una falta de liquidez conviertan una caída de mercado normal en una pérdida
irreversible de tesis o en una venta forzada en el peor momento.

## Nota de evolución 2026-08-16: compresión simultánea de valoración y crédito

La verificación del enjambre confirma tres termómetros de riesgo sistémico: **CAPE 42,6** al 14-ago (el dato de
concentración top-10 es aproximadamente 40%, con una medición detallada de 37,9%), **271 pb** de ICE BofA US High
Yield OAS el 13-ago y **6,0%** de default TTM en la metodología PCDR de Fitch para *private credit* en Q2-2026.

No son equivalentes ni universales: el CAPE es una valoración agregada, el spread es una serie de mercado y el 6,0%
es una definición concreta de Fitch. Juntos sí describen una asimetría durable: el precio del riesgo parece comprimido
al mismo tiempo que el [[credito-privado|crédito privado]] empieza a reconocer pérdidas. Esto refuerza la regla de no tratar la ausencia
de volatilidad visible como ausencia de riesgo y no convierte el dato en una orden de venta. Fuente:
[[conocimiento-2026-08-16]]; Shiller, FRED ICE BofA HY OAS y Fitch PCDR Q2-2026; verificación en
`scratchpad/verificacion-cinco-cifras-2026-08-16.md`.

## Límites de cartera (v1, 2026-07-16)

| Límite | Umbral propuesto | Estado actual (foto 2026-07-12) | Estado repreciado (30-07) | Estado repreciado (06-08, `deriva_cartera.py`, cálculo directo) | Estado repreciado (20-08, `deriva_cartera.py`) | Racional |
|---|---|---|---|---|---|---|
| Peso máx. por bloque de riesgo factorial | 35-40% | **Tangibles 44,5%** 🔴 Fuera de rango | **45,9%** 🔴 sigue subiendo por revalorización sola | **44,9%** 🔴 primera bajada desde el 16-jul, sigue fuera de rango | **45,5%** 🔴 vuelve a subir — GLD +8,3% en 2 semanas, sin compra nueva; 35 días fuera de rango | por encima del rango — ver [[riesgo-2026-07-16]] §1/§3, [[riesgo-2026-07-30]] §2, [[riesgo-2026-08-06]] §2, [[riesgo-2026-08-20]] §2; no exige venta inmediata (drawdown tolerable alto), sí vigilancia y no ampliar |
| Peso máx. por posición individual | 10-12% | Micron 9,3% 🟡 Cerca del límite | **~7,6-9%** 🟢/🟡 — estimado por ratio de precio | **8,17%** 🟢 (5.411€) — cálculo DIRECTO (titulos × precio × FX), más preciso que la estimación anterior; sube con el rebote del precio verificado en [[riesgo-2026-08-06]] §0 | **8,49%** 🟢 (5.653€) — MU tocó $1.011,75 (17-ago) y revirtió a $937,11 (19-ago); dentro de rango de capital pero multiplicador de contribución al riesgo empeora a 3,89x (ver [[riesgo-2026-08-20]] §1) | vigilar sin intervenir por este eje; el riesgo real sigue siendo de proceso (decisión sin fecha, 40 días) Y de contribución al riesgo — ver [[riesgo-2026-08-20]] §1/§6 |
| Liquidez / renta fija mínima | 5-8% | 0% 🔴 Fuera de rango | 0% 🔴 sin cambio | 0% 🔴 sin cambio | **0%** 🔴 sin cambio, 35 días — DGS30 en máximo desde 2001 (5,31%, 17-ago) es el entorno que más lo justificaría | cuadrante deflación/liquidez vacío; opcionalidad para comprar en caídas sin vender otra posición |
| Productos apalancados (3x, decaimiento estructural) | 0% | 1,6% (2 productos) 🔴 Fuera de rango | 1,6% 🔴 sin cambio — 19 días desde el acuerdo de venta, sin ejecutar | 1,6% 🔴 sin cambio, 26 días | **1,6%** 🔴 sin cambio, **40 días** desde el acuerdo, sin ejecutar | *volatility decay* de diseño — venta ya acordada el 11-07-2026, pendiente de ejecución |
| Concentración país individual fuera EEUU/Europa | 12-15% | China 9,0% 🟢 En rango | 9,5% 🟢 en rango | 9,2% 🟢 en rango | **8,8%** 🟢 en rango | dentro de rango |
| Drawdown máximo aceptable | -50% | referencia de objetivos | sin cambio | no vulnerado | sin cambio; escenario combinado más severo modelado hoy ≈ -8,2% | no vulnerado; distinguir drawdown de mercado (soportable) de pérdida permanente por tesis rota (no soportable igual) |

### Excepciones aceptadas

> [!info] Tabla que LEE `scripts/deriva_cartera.py`
> Una excepción aceptada baja el aviso de "fuera de rango" a una nota informativa — pero **no lo borra**,
> y **no es un cheque en blanco**: se acepta a un nivel concreto. Si el peso supera el nivel aceptado más
> el margen, la alerta vuelve. Aceptar "hasta aquí" y aceptar "lo que sea" no son lo mismo, y confundirlos
> es como se degrada un marco de riesgo sin que nadie lo note.

| Posición o bloque | Límite del que se exceptúa | Aceptada el | Nivel aceptado | Margen | Razón |
|---|---|---|---|---|---|
| ETFS Physical Silver | posición individual (10-12%) | 2026-07-29 | 11,7% | 3,0 pp | Carlos: convicción alta en la tesis de metales preciosos; el ETC es metal físico, no riesgo de empresa única, así que el límite por posición —pensado contra el riesgo idiosincrático de una compañía— no aplica igual aquí. El riesgo real está capturado por el límite del bloque tangibles, que sí sigue vivo. |

**Lo que esta excepción NO cubre**: el peso de tangibles en conjunto. Ese límite (35-40%, hoy en 45,4%)
sigue fuera de rango y sigue avisando. Aceptar la plata no acepta la concentración factorial que la
contiene — son dos riesgos distintos y sería un error dejar que uno tapase al otro.

### Origen de los umbrales (v1)

Ninguno deriva de un modelo óptimo de asignación — son **puntos de partida razonables** con tres fuentes:
(1) **heurística de gestoras value multi-activo del propio corpus** (Cobas/Azvalor/Horos operan con 30-64
posiciones sin un solo bloque dominante; ninguna de las voces del cerebro defiende >40% en un único factor
sin apalancamiento que lo justifique — [[carteras-concentradas]]); (2) **la tolerancia al drawdown de
objetivos** (-50%, alta) fija el límite superior de lo admisible, no el óptimo — los umbrales de bloque
están por debajo de ese máximo con margen; (3) **el propio perfil de Carlos** (concentración consciente
aceptada, perfil de inversor) descarta umbrales típicos de gestión institucional (5-10% por bloque) por
demasiado conservadores para su horizonte y tolerancia. Se afinarán con la experiencia de sucesivos informes,
no son definitivos.

## Límites de proceso (v1, 2026-07-16)

A diferencia de los anteriores, no miden la cartera sino la **disciplina del propio equipo** — coherente con
el mandato de Ciencias de la Decisión del CRDSO.

| Límite | Umbral propuesto | Estado actual | Racional |
|---|---|---|---|
| Verificación adversarial en tesis de alto impacto | 100% de las tesis que toquen cartera o página durable | ~66% en el run del 15-07 (2 de 3, 1 excepción por límite de sesión de la API) | ver auditoría de proceso en cada informe de riesgo |

## Cómo se leen los semáforos

🔴 = fuera del rango propuesto, sin que implique venta forzosa automática — el CRDSO señala, Carlos decide.
🟡 = cerca del límite, vigilancia activa. 🟢 = dentro de rango.

## Historial de revisiones

| Fecha | Cambio | Informe |
|---|---|---|
| 2026-07-16 | Versión inicial (primer run de la rutina) | [[riesgo-2026-07-16]] |
| 2026-07-29 | Excepción aceptada: plata física por encima del límite por posición (hasta 11,7% + 3,0pp margen) | log 2026-07-29 |
| 2026-07-30 | Segundo run real (14 días después del primero). Sin cambio de umbrales; columna "estado repreciado" añadida con datos en vivo de `deriva_cartera.py`. Tangibles sigue subiendo (44,5%→45,9%) sin compra nueva — la tensión de calendario del 16-jul se agrava, no se corrige. Límite de posición individual mejora por la caída técnica de Micron (mejora accidental, no decisión) | [[riesgo-2026-07-30]] |
| 2026-08-06 | Tercer run real (7 días después, con un lunes saltado). Sin cambio de umbrales. Tangibles baja por primera vez (45,9%→44,9%) pero sigue fuera de rango. Micron pasa a cálculo directo (antes estimado por ratio): 8,17% de capital, dentro del límite, pero contribución al riesgo empeora a multiplicador 3,82x (antes 3,4x) — hallazgo de proceso: los datos técnicos que el equipo usó el 04-ago estaban desfasados un día, verificado adversarialmente | [[riesgo-2026-08-06]] |
| 2026-08-20 | Cuarto run real, 14 días después (esta vez con causa documentada: la rutina murió por límite de plan el 10-ago junto con estrategia, veredicto, mantenimiento y el CIO — [[cio-2026-08-17]]). Sin cambio de umbrales. Tangibles sube de nuevo (44,9%→45,5%), 35 días fuera de rango, por el rally de GLD (+8,3% en 2 semanas), no por compra. MU toca $1.011,75 (17-ago) y revierte a $937,11 (19-ago); posición individual sube a 8,49% (dentro de rango) pero el multiplicador de riesgo empeora a 3,89x (antes 3,82x) pese a la caída de precio. Hallazgo de proceso: el bug de etiquetado horario (`task_2983873f`, aún sin arreglo) produjo una segunda instancia real (cierre de mercado etiquetado en sábado) que se propagó al informe del CIO sin cruzarse; y las predicciones falsables de riesgo nunca han llegado al ledger de calibración porque `cerebro-veredicto-semanal` no escanea `wiki/riesgo/` — escalado explícitamente | [[riesgo-2026-08-20]] |
| 2026-08-27 | Quinto run real, 7 días después (con el lunes 24-ago saltado por fallo del harness de tareas programadas). **Sin cambio de umbrales.** Cifras sin cambio real: tangibles ~45,6% (42 días fuera de rango, solo por revalorización del oro), MU 8,43% de capital / 33% del riesgo (mult. 3,89x), 3x 1,56% (47 días sin ejecutar la venta), renta fija 0%. **`deriva_cartera.py` quedó corrupto desde el commit `aa29363` (ox-alpha, 25-ago), que insertó wikilinks en la tabla de detalle de `cartera-actual.md` y rompió el parser para 6 posiciones (Micron incluida) — su alerta "TANGIBLES 47,1%" de este run es un artefacto de denominador, el peso real es ~45,6%; pesos de este informe calculados con parser propio.** Hallazgos de proceso: la cadena automática de la mañana falló entre el 23 y el 25-ago (veredicto sin 3er ciclo, CIO no corrió el 24-ago, marcadores de frescura perdidos) — recurrencia del fallo sistémico de presupuesto/registro; y `wiki/riesgo/` sigue fuera de las fuentes del veredicto (2ª escalada) | [[riesgo-2026-08-27]] |

## Notas para la evolución de este documento

- No se reescriben los límites de una versión anterior al actualizar: se **añade** una fila al historial y se
  ajustan los umbrales si el marco cambia, siguiendo la misma regla de evolución que el resto del cerebro
  (`CLAUDE.md`).
- Los umbrales de bloque/posición son **puntos de partida razonables**, no derivados de un modelo óptimo —
  ajustar con la experiencia de sucesivos informes y con el criterio de Carlos/Elisa.
- El límite de "verificación adversarial en tesis de alto impacto" es un límite de **proceso**, no de
  cartera — mide la disciplina del propio equipo, coherente con el mandato de Ciencias de la Decisión del
  CRDSO.

## Ver también

[[riesgo-2026-07-16]] · [[riesgo-2026-07-30]] · [[riesgo-2026-08-06]] · [[riesgo-2026-08-20]] · [[riesgo-2026-08-27]] · cartera actual · objetivos · [[sintesis-del-riesgo]] ·
[[riesgo-real-vs-volatilidad]] · decisiones

## Red de conexiones de la tanda 2026-08-16

El paquete de riesgo del enjambre no es una lista separada de señales: [[renta-fija-y-tipos]] mide el precio del dinero,
[[ciclo-de-deuda-y-desapalancamiento]] el mecanismo, [[ilusion-de-los-activos-privados]] el riesgo oculto y
cartera actual la exposición concreta. En IA, [[financiacion-estructurada-del-capex-de-ia]] y
[[red-electrica-y-capex-de-ia]] permiten seguir la cadena desde el balance hasta el activo físico.
