---
title: "Calendario de catalizadores"
tipo: sintesis
tags: [catalizadores, predicciones, brier, calibracion, cartera, proceso]
fecha: 2026-07-26
fuentes: []
---

# Calendario de catalizadores

**Qué es**: la tabla de eventos FECHADOS que pueden mover una posición de cartera actual — resultados
trimestrales, vencimientos de deuda, decisiones regulatorias, datos macro, vencimientos de patentes.

> Relacionado: vigilancia catalizadores (en `perfil/`) — solapa con esta página pero con otro oficio.
> **Esta** manda sobre el registro formal: cada catalizador lleva postura falsable y desenlace archivado
> para el Brier, y solo la escribe `cerebro-veredicto-semanal`. **Aquella** es el mapa amplio de vigilancia
> por posición (horizonte 12 meses, qué observar en cada evento), de mantenimiento libre en la capa de perfil.

**Por qué existe**: es el eslabón que le faltaba a [[registro-de-predicciones]]. El registro ya tiene el motor
(Brier score, resolución fechada, escritor único), pero dependía de que alguien se acordara de anotar una
predicción. Un catalizador con fecha **es una predicción falsable esperando a que la escriban**: la fecha de
resolución ya viene dada por el calendario, no hay que inventarla. Idea tomada del skill `catalyst-calendar`
de `claude-for-financial-services`, adaptada: lo valioso no es la tabla de eventos futuros (eso lo da
cualquier calendario), sino **archivar el desenlace real junto a lo que esperábamos**.

> [!warning] Límite
> Un catalizador es **contexto, no gatillo**. El horizonte de objetivos es largo; que una empresa
> presente resultados el martes no es motivo para operar. Esta página existe para medir si nuestras
> expectativas estaban calibradas, no para operar el corto plazo — misma subordinación que aplica
> [[misterpuertas-metodo|la capa de pulso]].

## Convención

- **Una fila por evento**, ordenadas por fecha ascendente. Los pasados se mueven a "Archivo" con su desenlace.
- **`Nuestra postura`** debe ser falsable: no "vigilar", sino "esperamos margen bruto ≥42%". Si no se puede
  escribir así, el catalizador todavía no está pensado — o no merece la fila.
- Si la postura tiene probabilidad explícita, **abrir ficha en `wiki/predicciones/`** y enlazarla. La fecha
  de resolución es la del catalizador.
- **Escritor: `cerebro-veredicto-semanal`, y solo él** (2026-07-20). Esta página vive en `wiki/predicciones/`,
  y ahí rige la doctrina de escritor único sin excepciones. Las rutinas que *detectan* un catalizador
  (fundamental, estrategia, pulso) lo **proponen** en una sección `## Catalizadores detectados` de su informe
  del día; el veredicto del domingo lo vuelca aquí y lo archiva al vencer. La latencia de unos días es
  irrelevante para eventos fechados con semanas de antelación, y a cambio no se abre ninguna grieta en la regla.
- **Dos tipos de fila**: catalizador **de empresa** (resultados, vencimiento de deuda, decisión regulatoria) y
  catalizador **de bloque** (FOMC, IPC, OPEP+, calendario político chino). El segundo existe porque ~45% de
  cartera actual son ETFs y fondos —plata física, oro, commodities, JPM China— que **no publican
  resultados**: un calendario solo de earnings dejaría fuera casi la mitad del capital.
- **Nunca se reescribe la postura original** al conocer el desenlace (sesgo retrospectivo) — misma regla que
  la `prob` del registro. Se rellena la columna de desenlace y se anota el veredicto.

## Próximos catalizadores

| Fecha | Tipo | Activo / bloque | Evento | Nuestra postura (falsable) | Ficha |
|---|---|---|---|---|---|
| 2026-10-24 (aprox.) | Empresa | BAE Systems (0% cartera, EVITAR) | Precio vs. gatillos existentes, antes de la revisión programada | El precio rompe 1.700p (revisar a VIGILAR con margen sostenido) frente a rompe 2.200-2.400p sin cambio operativo (EVITAR reforzado) (af-03-ago) | — |
| 2026-10-29 (estimada) | Empresa | Amazon (28,3% cartera) | Guidance/resultados Q3 2026 | Capex/ventas modera hacia el 13-14% del caso base (mejora la tesis) frente a sigue acelerando por encima del 20% actual (refuerza la cautela sobre la sobrevaloración) (af-03-ago) | [[2026-08-03-amazon-capex-ventas-sobre-20-q3]] |
| 2026-10-30 (estimada, oct-nov) | Empresa | SAP (0% cartera, VIGILAR) | Resultados Q3 2026 | El backlog cloud (+27%) se traduce en aceleración real de ingresos cloud durante 2-3 trimestres (sube convicción hacia COMPRAR) frente a el margen operativo sigue recortándose más allá del ajuste de Q2 (rompe la tesis de expansión a 34%, el caso pesimista pasa a ser el central) (af-12-ago) | — |
| 2026-10-30 (estimada) | Empresa | [[agnico-eagle-mines|Agnico Eagle Mines]] (0% cartera, EVITAR) | Resultados Q3 2026 | El oro se estabiliza de forma sostenida por encima de $4.200-4.500 durante 12-18 meses (sube el valor razonable hacia $220-260, COMPRAR) frente a un cuarto incidente de seguridad o agravamiento de Barnat más allá de las 370.000 oz ya descontadas (debilita el único diferencial real de calidad operativa relativa) (af-12-ago) | — |
| 2026-11-04 (estimada) | Empresa | Verisk (posición cartera Carlos) | Resultados Q3 2026 | Debt/EBITDA se estabiliza por debajo de 2,5x (confirma que el apalancamiento no sigue deteriorándose) frente a sigue subiendo por encima de 2,5x (refuerza la cautela); y el 10-Q confirma o no el FCF real (hoy proxy TTM, no OCF verificado) (af-03-ago) | [[2026-08-03-verisk-debt-ebitda-sobre-25x-q3]] |
| 2026-11-12 (estimada) | Empresa | First Majestic Silver (posición cartera, EVITAR/podar) | Resultados Q3 2026 | Precio de la plata sostenido vs. AISC 2027 consolidado: si el AISC cae bajo $20/oz con Jerritt Canyon ejecutando limpio, mejora la estructura de márgenes con independencia del precio del metal; si la plata retrocede hacia $40-50/oz o el guidance de AISC/producción se incumple al alza, refuerza EVITAR (af-19-ago) | [[2026-08-19-plata-no-sostiene-70-q4]] (relacionada) |
| 2026-11-15 (estimada) | Empresa | JD.com (posición cartera, VIGILAR) | Resultados Q3 2026 | JD Retail vuelve a crecimiento YoY positivo (confirma reaceleración, mejora la tesis) frente a JD Retail de nuevo negativo con ROIC aún negativo (confirma escenario bajista, degrada hacia EVITAR/VENDER) (af-19-ago) | [[2026-08-19-jd-retail-crecimiento-positivo-q3]] |
| 2026-11-21 (revisión programada) | Empresa | L3Harris / LHX (0% cartera, VIGILAR) | Resultados Q3 FY2026 + revisión de tesis | Margen operativo supera sosteniblemente el pico de 2021 (11,8%) con FCF confirmando (mejora hacia COMPRAR) frente a deuda neta/EBITDA >3,0x sin plan de desapalancamiento o guía recortada por ejecución (degrada hacia EVITAR) (af-21-ago) | — |
| sin fecha confirmada | Empresa | Kongsberg (0% cartera) | Resultados Q3 2026 | El margen EBIT se mantiene por debajo de 16% (confirmando que el order intake fuerte no se traduce en expansión de margen) frente a una recuperación hacia >17% (mejora la tesis hacia VIGILAR con margen menos negativo) (af-14-ago) | — |
| sin fecha fija | Empresa | EOG Resources (1,25% cartera, VIGILAR / EVITAR dinero nuevo) | Confirmación de si UAE escala más allá de 2 pozos exploratorios; trayectoria de WTI | WTI sostenido <$65 o >$85 durante 2-3 meses mueve el veredicto (refuerza EVITAR / abre paso a COMPRAR respectivamente) (af-24-ago) | [[2026-08-24-eog-corrige-bajo-130-diciembre]] (relacionada) |
| 2027-02 (estimada) | Empresa | Cameco (0% cartera, EVITAR) | Resultados Q4 2026 | Precio realizado de uranio se mantiene por debajo de US$75/lb (confirma EVITAR) frente a un salto sostenido hacia US$100+/lb (empieza a cerrar la brecha de [[margen-de-seguridad|margen de seguridad]]) (af-14-ago) | — |
| 2027-03 (estimada, resultados FY 2026) | Empresa | Kazatomprom (2,07% cartera, VIGILAR / no ampliar) | Resultados FY 2026 (H2 2026) | Confirmación de que la caída de FCF H1 fue timing de capital circulante (mantiene VIGILAR) frente a caída estructural (degrada hacia EVITAR); + resolución del calendario de la planta TQZ (retrasada a Q3 2027-Q1 2028) (af-24-ago) | — |
| sin fecha pública de colocación | Empresa | Cameco / IPO Westinghouse | Colocación de la participación del 49% (presentada confidencialmente 31-jul-2026) | Se completa con valoración del 49% de Cameco por debajo de US$6bn (confirma EVITAR) frente a una valoración por encima de US$10bn (sube la tesis hacia VIGILAR con margen positivo) (af-14-ago) | — |

> [!note] Estado de la primera carga (2026-07-20, ampliada 2026-07-26)
> El alcance acordado con Carlos es **las ~10 posiciones de mayor peso**: empresas con resultados
> (Micron, Meta, [[microsoft|Microsoft]], [[qualcomm|Qualcomm]]) + filas de bloque para metales preciosos, materias primas y China,
> que juntos son la mayor parte de la cartera vía ETFs y fondos.
> La carga quedó **bloqueada por límite de sesión de la cuenta**, no por diseño. Se rellena con fechas
> **verificadas** (distinguiendo fecha confirmada por la compañía de estimación por patrón histórico);
> ninguna fila entra con fecha inventada. A partir de ahí la mantiene sola la cadena
> fundamental → veredicto semanal.
>
> **Primer veredicto semanal (2026-07-26)**: solo se encontraron 3 catalizadores con `## Catalizadores
> detectados` real en los informes de `analisis-fundamental/` (af-22-jul, af-24-jul) — Meta, Amazon, BAE
> Systems, ninguno con probabilidad explícita (así que no abren ficha en `predicciones/`, solo fila aquí con
> la postura tal cual la emitió el analista). Ni Meta ni Amazon ni BAE son posiciones actuales de
> cartera actual — se incluyen por relevancia sectorial/watchlist, no por peso en cartera. **Micron,
> Microsoft y Qualcomm siguen sin fecha verificada** en los informes disponibles — hueco declarado, no
> inventado; pendiente de que `analisis-fundamental` la aporte en un run futuro.

## Archivo (resueltos)

| Fecha | Tipo | Activo / bloque | Evento | Nuestra postura | Desenlace real | ¿Calibrado? |
|---|---|---|---|---|---|---|
| 2026-07-29 | Empresa | Meta (no cartera Carlos hoy) | Resultados Q2-2026 | Vigilar guía de capex 2027: si sube otra vez, confirma el sesgo contra el caso base | `[desenlace sin confirmar]` — no se localizó en el vault una guía explícita de capex FY2027 de Meta en la comunicación de Q2; sí se confirma que el capex Q2 (~$31B trimestral) consume el FCF (~$0,78B) y el grupo de 4 hiperescaladores llegó a 99,0% de capex/OCF ([[meta-platforms]], nota 2026-08-16) | Sin confirmar |
| 2026-07-30 | Empresa | Amazon (no cartera Carlos hoy en la fecha del catalizador; sí en cartera actual) | Resultados Q2-2026 | Si capex/ventas sigue subiendo sin que AWS acelere más allá de +28% YoY, degradar más la tesis; si el capex modera con AWS creciendo >20%, revisar al alza | **Mixto, ninguna rama se cumple limpiamente**: AWS +37% YoY (bate 28% y 20%) — rama alcista — pero capex/ventas SIGUIÓ SUBIENDO a 21,1% de ventas, guidance elevado a ~$220.000M — rama bajista. Amazon batió expectativas con fuerza (acción +9-13% en after-hours) ([[amazon]]) | Parcial — acertó dirección de AWS, no anticipó que el capex seguiría acelerando en vez de moderar |
| 2026-07-30 | Empresa | BAE Systems (0% cartera, EVITAR) | Resultados H1-2026 | EBIT margin sostenido ≥10,5% underlying y sin profit warning → tesis EVITAR intacta; sorpresa negativa de margen o guía rebajada → refuerza EVITAR | **Confirmado**: EBIT underlying 10,8% (≥10,5%), IFRS 10,3%, sin profit warning — "primer caso donde unos resultados que confirman la tesis operativa NO cambian el veredicto de valoración" ([[af-2026-08-03]], [[bae-systems]]) | Sí |
| 2026-08-28 | Empresa | Meituan (0,92% cartera, VIGILAR) | Resultados Q2 2026 | si el margen operativo de Core Local Commerce vuelve a terreno positivo Y el FCF mejora → sesgo hacia COMPRAR; si no → EVITAR/reforzar cautela (af-26-ago) | **Rama alcista**: beneficio operativo de Core Local Commerce RMB +5.700M (vs. pérdida RMB -2.000M en Q1 2026); reparto de comida a crecimiento YoY positivo de ingresos; entrada de caja operativa del trimestre ~RMB +9.700M; ingresos del grupo RMB 104.640M ([[meituan]], [Newsquawk](https://www.newsquawk.com/headlines/meituan-3690-hk-q2-2026-cny-revenue-10464bln-exp-10108bln)) | Parcial — acertó el signo de la recuperación pero la ficha ligada [[2026-08-26-meituan-core-margen-positivo-q2]] iba a prob 0,35 (brier 0,423): el equipo la infravaloró |

## Ver también

- [[registro-de-predicciones]] — el motor de calibración que consume estas fechas
- cartera actual — las posiciones que estos eventos pueden mover
- decisiones — si un catalizador acaba cambiando una posición, la decisión se anota allí
