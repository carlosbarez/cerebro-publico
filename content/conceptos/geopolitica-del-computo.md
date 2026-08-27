---
title: "Geopolítica del cómputo"
tipo: concepto
tags: [ia, geopolitica, semiconductores, exportaciones, seguridad-nacional, nvidia, china]
fecha: 2026-08-24
agente: carlos
fuentes: "[\"[[situational-awareness]]\", \"https://gpusmith.com/articles/en/nvidia-gpu-export-restrictions\", \"https://semiconductorsinsight.com/us-china-chip-export-controls-h200-2026/\"]"
---

# Geopolítica del cómputo

El cómputo avanzado dejó de ser una commodity para convertirse en **activo estratégico estatal**: quien
lo controla decide quién entrena inteligencia de frontera. El concepto cubre los tres mecanismos —control
de exportación de chips, captura fiscal del flujo de cómputo y protección de *weights*/secretos
algorítmicos como material sensible— y sus consecuencias de segundo orden para valoración. Concepto
pendiente oficial del backlog, propuesto al ascender [[situational-awareness]] (2026-08-03).

## La tesis de partida (Aschenbrenner)

Dos activos tienen valor de seguridad nacional: los *weights* de los modelos y los secretos algorítmicos.
Filtrar los segundos equivale a regalarle el atajo a un competidor estatal ("handing the key secrets for
AGI on a silver platter"); proteger los primeros importa cerca del umbral de AGI. Y la movilización
industrial debe hacerse en suelo estadounidense por seguridad nacional, no en jurisdicciones inestables:
clusters de $1T+ hacia 2030 que exigirían >20% de la electricidad de EE.UU. La predicción descriptiva: el
Estado absorberá el proyecto AGI ("The Project") cuando la tecnología cruce cierto umbral de poder.

## Lo que ya pasó (verificado, 2025-2026)

- **Abr-2025**: licencia indefinida para exportar el H20 a China → cargo de $4.500M en un trimestre y
  $2.500M de ingresos no shippables (SEC filing); $8.000M proyectados de pérdida en el siguiente.
- **Ago-2025**: EE.UU. instaura un **peaje del 15%** sobre los ingresos de Nvidia por ventas de chips a
  China (FT/CNBC). Primera vez que el Estado se queda un corte directo del flujo de cómputo: no prohíbe,
   *cobra*.
- **Sep-Nov-2025**: Pekín responde por el mismo carril —prohíbe a las grandes tecnológicas comprar Nvidia
  y obliga a los centros de datos con fondos estatales a usar solo chips domésticos (Reuters). La
  bifurcación es **bidireccional**.
- **May-2025 → may-2026**: el agujero de las filiales —la licencia se disparaba por destino de envío, no
  por casa matriz— permitió a subsidiarias offshore chinas comprar Blackwell sin licencia durante ~un año;
  estimación de cientos de miles de unidades (Reuters). Cerrado el 31-may-2026.
- **Ene-2026**: marco H200 —desbaneo condicional con techos de volumen, tests de terceros y arancel del
  25%. A jul-2026: toda la familia Blackwell sigue en presunción de denegación; solo H20/H200 son
  licenciables caso por caso.
- **Impacto estructural**: Nvidia reconoce $19.670M de ingresos de China en FY2026 (10-K); FT proyecta
  que Huawei alcance ~$12B en chips IA en 2026 camino del 50-60% del mercado chino.

## Consecuencias de segundo orden

1. **El control acelera la sustitución que intenta evitar.** Un año de zigzag normativo empujó a los
   hiperescaladores chinos a alternativas domésticas; la cuota cedida a Huawei **no vuelve** aunque se
   concedan licencias. El premio regulatorio sobre la exposición a China es permanente, no cíclico.
2. **Dos curvas de demanda, dos pilas tecnológicas.** La bifurcación trunca políticamente el TAM de
   [[nvidia]] y regala a Huawei un mercado cautelar; para [[tsmc]] añade el riesgo inverso: su leverage
   geográfico (Taiwán) es el activo que ambos bandos quieren neutralizar — Washington convierte las
   exenciones VEU de Nanjing en licencias anuales, es decir, apalancamiento renovable.
3. **El peaje como precedente fiscal.** El 15% estadounidense normaliza que los Estados capturen renta del
   cómputo como antes capturaron la del petróleo. Si el cómputo es el crudo de esta década, el riesgo
   fiscal-país de los proveedores del foso ([[foso-economico]]) sube de categoría.
4. **Los controles gotean por diseño.** Shell companies del sudeste asiático, transbordos por Malasia/
   Tailandia, contrabando documentado: la brecha de aplicación importa tanto como el umbral formal. Una
   política de contención gestionada, no de muro — CFR la llama "estratégicamente incoherente".
5. **La brecha real es de capacidad industrial, no de listas.** Producción china de chips avanzados ~1-4%
   de la estadounidense en 2025, cayendo hacia 1-2% en 2026; ventaja de 21-49x en cómputo IA producido
   2026 incluso con H200 plenamente permitido. Los números apoyan la tesis de Aschenbrenner del margen de
   tiempo, no la del cierre hermético.

## Tensiones

- **[[situational-awareness]] vs la realidad normativa**: el ensayo predice absorción estatal limpia
  ("The Project") y clusters solo en suelo americano; lo observado es un zigzag administrativo con peaje
  fiscal y agujeros de aplicación. Dirección correcta, mecánica distinta: el Estado llega como
  *arrendador*, no como propietario.
- **Contener vs monetizar**: la facción del Congreso que pide veto total de equipos (carta bipartita
  feb-2026) contra la Casa Blanca que prefiere licencias con arancel. Para el inversor, la primera es
  cola de riesgo para semis; la segunda, renta perpetua estatal sobre el flujo.
- **Conexión con [[riesgo-de-cola-capex-computo-ia]]**: aquella página pregunta qué pasa si la demanda
  decepciona; esta, qué pasa si la política trunca la demanda por decreto. Son los dos lados político y
  físico del mismo múltiplo de [[semiconductores-logica-y-computo-ia]].

## Señales falsables

- Huawei superando el 50% del mercado chino de chips IA en 2026 (proyección FT) confirmaría la pérdida
  irreversible de cuota para Nvidia.
- Supervivencia del marco H200 más allá de 2026: si cae o endurece, el zigzag es el régimen permanente.
- Veto total de equipos de fabricación (SME) aprobado por Congreso: escalada de la facción dura.
- Progreso real de SMIC a 5nm (hoy retrasado): invalidaría la lectura de brecha industrial creciente.
- Nuevos peajes fiscales sobre cómputo en otras jurisdicciones: el precedente del 15% se extiende o no.

## Por qué importa

Para [[pensamiento-de-segundo-nivel]], la pregunta no es si los chips fluyen hoy: es quién cobra el peaje,
quién construye pila propia bajo protección y qué múltiplo aguanta un TAM truncado por decreto. Cruza con
[[financiacion-estructurada-del-capex-de-ia]] (quién paga), [[plataformas-de-internet-de-china]]
(descuento de gobernanza) y [[ciclo-de-imperios-y-moneda-reserva]] (el cómputo como siguiente recurso
geopolítico tras el petróleo).
