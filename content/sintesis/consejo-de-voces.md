---
title: "Consejo de voces (el mejor equipo del mundo, debatiendo)"
tipo: sintesis
tags: [consejo, voces, debate, decision, panel, meta]
fecha: 2026-07-16
fuentes: []
---

# Consejo de voces (el mejor equipo del mundo, debatiendo)

El cerebro tiene **29 voces** de los mejores inversores de la historia. Hasta ahora vivían como páginas
separadas y como [[tensiones-activas|tensiones anotadas]]. Este es el mecanismo que las pone a **debatir una
decisión concreta de Carlos** — convierte la biblioteca en un **consejo asesor** que discute, disiente y
sintetiza, en vez de una enciclopedia que solo consultas.

> [!info] Qué es y qué no
> No es una consulta a una voz ("¿qué diría Buffett?"), sino un **debate estructurado** entre las voces
> pertinentes, con sus tensiones explícitas, para iluminar una decisión desde todos los ángulos a la vez.
> **No decide**: expone el mapa de argumentos y qué haría cambiar de opinión a cada uno. Decide Carlos.
> Se opera con el comando `/cerebro-consejo <decisión>`.

## Por qué un debate y no una respuesta

Una sola voz tiene un sesgo (Buffett odia el oro; Azvalor lo ama). El valor de segundo orden está en el
**choque**: cuando Smith (calidad a cualquier precio razonable) y Carlisle (solo barato) discrepan sobre la
misma empresa, el desacuerdo **es** el análisis. El consejo fuerza a ver el caso alcista y bajista construidos
por sus mejores defensores, no por un hombre de paja. Es [[pensamiento-de-segundo-nivel|pensamiento de segundo nivel]] institucionalizado y el antídoto contra el sesgo de confirmación ([[sintesis-del-comportamiento]]).

## Las lentes del consejo (grupos de voces)

Cada decisión convoca solo las lentes pertinentes, no las 29 voces:

| Lente | Voces | Pregunta que hace |
|---|---|---|
| **Calidad / compounder** | [[terry-smith]], [[philip-fisher]], [[warren-buffett]], [[charlie-munger]], [[nick-sleep]], [[francois-rochon]] | ¿Es un negocio maravilloso que compone solo? |
| **Deep value / precio** | [[benjamin-graham]], [[francisco-garcia-parames]], [[azvalor-am]], [[horos-am]], [[deep-value-carlisle]], [[peter-lynch]] | ¿Estás pagando poco por lo que recibes? |
| **Proceso / expectativas** | [[michael-mauboussin]] | ¿Qué descuenta ya el precio? ¿Es plausible? |
| **Macro / ciclo** | [[howard-marks]], [[ray-dalio]], [[michael-pettis]], [[ruchir-sharma]], [[mark-mobius]] | ¿Dónde está el péndulo? ¿Y el ciclo de deuda? |
| **Bajista / burbuja** | [[jeremy-grantham]], [[james-montier]] | ¿Es esto una trampa / una burbuja / concentración frágil? |
| **Comportamiento / azar** | [[morgan-housel]], [[annie-duke]], [[nassim-taleb]] | ¿Es suerte o habilidad? ¿Qué no estás viendo? ¿Y la cola? |
| **Cuant / factores** | [[cliff-asness]], [[kathryn-kaminski]] | ¿Qué dice la evidencia sistemática? ¿Y la convergencia? |
| **Riesgo / apalancamiento** | [[howard-marks]], [[nassim-taleb]], [[jamie-dimon]] | ¿Qué te arruina permanentemente? |
| **Estructura / activismo** | [[bill-ackman]], [[kkr]], [[larry-fink]] | ¿Hay palanca de valor en la estructura? |
| **El operador** | perfil de inversor, objetivos, cartera actual | ¿Encaja con QUIÉN es Carlos y qué tiene? |

## Paneles fijos por tipo de decisión (atajos)

Los debates recurrentes ya tienen su elenco natural — nacen de las [[tensiones-activas]]:

- **"¿Compro calidad aunque esté cara?"** → Smith/Fisher (la calidad compone y rara vez está barata) **vs.**
  Graham/Carlisle (paga poco o no pagues) **vs.** Mauboussin (¿qué crecimiento descuenta el precio?) **vs.**
  Grantham (¿concentración/burbuja?). Aplica a [[agencias-de-rating-y-datos]], [[plataformas-tecnologicas-y-publicidad-digital]].
- **"¿Reduzco una cíclica en pico?"** → Marks (el péndulo) + [[valoracion-ciclicas-y-beneficios-negativos]] +
  disciplina **vs.** Azvalor (contrarian de materias primas: el ciclo puede correr más). Aplica a
  [[semiconductores-de-memoria|Micron]], [[mineria-industrial-y-energia|cobre/uranio]].
- **"¿Mantengo lo barato con mal gobierno (China)?"** → Sharma/Mobius (deep value emergente) **vs.** Pettis
  (lastre estructural) **vs.** Munger (humildad de riesgo-país: amó y recortó Alibaba). Aplica a
  [[plataformas-de-internet-de-china]].
- **"¿Cuánta caja / renta fija llevo?"** → Dalio/Bernstein (asignación, [[asignacion-de-activos]],
  [[paridad-de-riesgo-y-diversificacion]]) **vs.** Buffett (la caja es una opción con valor) **vs.** el coste de
  oportunidad de 0% liquidez (cartera actual).
- **"¿Apalancamiento / derivados?"** → Dalio (herramienta neutral) **vs.** Buffett/Taleb (nunca, arruina)
  **vs.** Dimon (estructural por diseño). [[aversion-al-apalancamiento]].
- **"¿Es suerte o proceso?"** → Housel/Duke/Mauboussin/Taleb sobre cualquier resultado reciente
  ([[sesgo-de-superviviente]], [[registro-de-predicciones]]).

## El protocolo (lo que hace `/cerebro-consejo`)

1. **Enmarca** la decisión como pregunta falsable. Ese enunciado es **común e idéntico** para todas las lentes,
   y no insinúa la respuesta ni dice qué tiene Carlos en cartera (ver la nota de evolución de abajo).
2. **Convoca** las lentes pertinentes (no todas) y hace que cada voz argumente **desde su filosofía documentada**
   (leyendo su página de inversor), no un cliché.
3. **Cada lente vota AISLADA**, en su propio subagente y sin ver a las demás; devuelve un veredicto cerrado
   (postura · argumento con voz y cita · qué la falsaría · confianza). Las llamadas van en paralelo.
4. **Choca** los veredictos ya cerrados, expuestos en el orden de la tabla de lentes y no en el de llegada:
   dónde coinciden, dónde se contradicen (usando [[tensiones-activas]]).
5. **Pasa la cara alcista y la bajista** por el [[equipo-agentes|verificador-adversarial]] si el impacto es alto.
6. **Cruza con el operador**: perfil de inversor, objetivos, cartera actual — no toda buena idea es
   buena *para Carlos*. Es la **única** lente que ve `perfil/`, y entra **al final**.
7. **Sintetiza**: no un veredicto, sino el mapa de argumentos + **qué evidencia haría cambiar de opinión a cada
   lente** (falsabilidad) + la predicción registrable que se derive ([[registro-de-predicciones]]) + la **tasa
   de disenso** (cuántas lentes discrepan del sentido de la síntesis), que es la métrica del propio protocolo.

> [!warning] Nota de evolución 2026-07-29 — el consejo pasa a deliberar en aislado
> Hasta hoy el comando narraba todas las voces **dentro de un mismo contexto**: cada voz entraba habiendo leído
> lo que dijeron las anteriores. *Beyond the Strongest LLM* ([[tier-a-accionable]] §2) mide exactamente ese
> diseño en un consejo de 4 modelos: enseñar el recuento de votos dispara el efecto primer-voto **de 54,1% a
> 67,8%**, revelar identidades sube el autovoto de 81,0% a 88,4%, y en GPQA **al menos un agente acertaba el
> 95,5% de las veces mientras el consenso se quedaba en 87,4%** — ocho puntos que el comité ya tenía dentro y
> perdió por gobernanza del proceso, no por falta de información.
>
> Lo llamativo es que el corpus de inversión ya lo sabía: es el *estimate before discussion* de Kahneman y la
> disciplina de proceso de [[michael-mauboussin|Mauboussin]] que esta misma página predica desde el principio.
> Lo predicábamos y no lo implementábamos.
>
> **Qué cambia**: veredicto por lente en subagente propio (por defecto), síntesis después con los veredictos
> cerrados, y solo la lente del operador ve la cartera. **Qué cuesta**: N subagentes en vez de un contexto —
> por eso queda `--ligero` para la consulta exploratoria que no informa ninguna operación.
> **Cómo se sabrá si sirvió**: la **tasa de disenso** (lentes que discrepan del sentido de la síntesis, campo
> `disenso:` en el frontmatter de cada página archivada). El backlog proponía comparar los próximos 5 consejos
> con los 5 anteriores, y al ir a aplicarlo apareció el problema: **no hay ni un consejo archivado** en
> `sintesis/`, así que no existe línea base. Se cambia por una **comparación emparejada**: el primer consejo
> aislado se corre también en `--ligero` sobre la misma pregunta y se anotan las dos tasas. Es más limpio
> (misma pregunta, no cinco preguntas distintas) y cuesta un contexto en vez de cinco debates. Si el aislado no
> sube el disenso, se revierte — punto 2 de [[backlog-de-mejoras-del-sistema]].

## Relación con el resto del cerebro

- Es la cara **aplicada y en vivo** de las [[tensiones-activas]] (que son el catálogo estático) y del
  [[mapa-del-cerebro]] (que es el mapa de quién piensa qué).
- Alimenta el diario de decisiones (un debate del consejo antes de una decisión = razonamiento en
  frío de máxima calidad) y el [[registro-de-predicciones]] (toda tesis del consejo debería dejar una predicción).
- Lo puede invocar Carlos (`/cerebro-consejo`) o la CIO [[equipo-agentes|Elisa]] al sintetizar una decisión grande.

## Ver también

[[tensiones-activas]] · [[mapa-del-cerebro]] · decisiones · [[registro-de-predicciones]] ·
perfil de inversor · [[sintesis-del-riesgo]] · [[sintesis-del-comportamiento]]
