---
title: "ASML Holding (ASML)"
tipo: empresa
tags: [asml, semiconductores, litografia-euv, monopolio, candidata, capex-ia]
fecha: 2026-07-15
fuentes: []
ticker: ASML.AS
moneda: EUR
veredicto: VIGILAR
revisar_el: 2026-10-15
# Sin `gatillo_entrada` a proposito: la tesis del 2026-07-15 dice "correccion del 20-30%" pero nunca
# fijo el precio de partida, asi que no hay numero que vigilar. El vigilante la marca NO VIGILABLE
# hasta que la rutina fundamental cierre el hueco. Inventar aqui el precio de hoy falsearia el registro.
---

# ASML Holding (ASML)

Fabricante neerlandés, único proveedor mundial de máquinas de litografía **EUV** (ultravioleta extremo) de
alta apertura numérica — el equipo imprescindible para fabricar los chips más avanzados (5nm y por debajo).
**Candidata nueva**, no está en la cartera actual de Carlos. Aparece repetidamente en el pulso de mercado
de julio-2026 (elevó previsión de ventas dos veces este año, Intel ya usa su máquina más avanzada en
producción, +78% en el año). Primer análisis del equipo (rutina `cerebro-analista-fundamental`, 2026-07-15).

> [!note] Tesis abreviada
> Redactada por el orquestador (no por `analista-fundamental`/Sonnet, indisponible por límite de sesión de la
> plataforma este run) con el mismo marco y los datos ya recopilados. **No pasó verificación adversarial**
> por el mismo motivo — tratar el veredicto con un grado más de cautela que las tesis verificadas del
> equipo, y considerar reverificarla en un run futuro antes de cualquier decisión de tamaño.

## Negocio y moat — el más fuerte candidato a "moat casi absoluto" del Cerebro

Aplicando la taxonomía de Dorsey ([[foso-economico]]): ASML combina **diferenciación tecnológica real** (única
empresa capaz de fabricar litografía EUV de alta apertura numérica, fruto de décadas de I+D acumulado y una
cadena de suministro de componentes — óptica de Zeiss, láseres de Trumpf/Cymer— que nadie más ha replicado) con
**costes de cambio extremos** (un cambio de proveedor de litografía implicaría rediseñar procesos de
fabricación enteros de TSMC/Samsung/Intel) y, de forma inusual, sin la fragilidad que Dorsey atribuye a los
fosos "de diferenciación tecnológica pura" (normalmente los más cortos, caso EMC vs IBM): aquí la barrera no es
solo "mejor tecnología hoy", es la imposibilidad práctica de que un competidor nuevo acumule el mismo capital
de I+D y la misma cadena de proveedores en un horizonte razonable. Es monopolio de facto, no solo cuota
dominante.

## Calidad financiera

- **Ingresos**: 2024 €28,30B → 2025 €32,70B (+15,5%) → guía 2026 €43-45B (+32-37%, impulsado por capex de IA).
- **Márgenes en expansión**: bruto 52,8% (2025) → guía 54-56% (2026); operativo 34,5% (2025); neto 29,3%.
- **EPS**: €14,36 (2021) → €14,14 → €19,91 → €19,25 → €24,73 (2025) — CAGR 2021-25 +15,2%.
- **Balance impecable, asset-light de verdad** (a diferencia de una fabricante de chips): caja neta **positiva**
  -€9.329M de deuda neta, deuda neta/EBITDA -0,83x. CapEx solo ~5% de ingresos (vs. ~15-25% típico en
  fabricantes de chips como Micron) — el negocio es vender máquinas, no operar fábricas.
- **Conversión de caja excelente**: FCF 2025 €11.027M > beneficio neto (~€9.600M), conversión 115%.
- **Retorno al accionista**: recompras 2025 €5.450M, dividendo €7,50/acción (yield 0,42% — bajo, reinvierte en
  crecimiento), reducción neta de acciones en circulación ~1,2%.
- **ROE 52,2%, ROIC 26,7%** (versión conservadora; otra metodología da 74% pero con discrepancia no
  reconciliada — usar la cifra baja hasta verificar).
- **Backlog €38.800M a fin de 2025** = **1,19x los ingresos de 2025**, récord histórico, con reservas
  extendiéndose a 2027 — es el dato más valioso de la ficha: da visibilidad de ingresos real y contractual, a
  diferencia de una simple extrapolación de consenso. Desglose de crecimiento 2026: EUV +45%, lógica avanzada
  (5/4/3nm) +25%, memoria/HBM +75%.

## Valoración (15-jul-2026, precio ~$1.797, market cap $684,36B)

P/E TTM 60,1x, **P/E forward 40,6x**, EV/EBITDA 34-42x, P/S 20,9x, PEG ~1,3-1,4x. Consenso: 44 analistas
"Strong Buy", precio objetivo 12 meses $1.936 (+9,6%).

**Lectura honesta, sin margen de seguridad Graham**: un forward P/E de 40x es caro en términos absolutos —
no hay "ganga" aquí bajo ningún múltiplo. El PEG ~1,3-1,4x (por debajo del umbral de 2 que ya marca "caro" en
[[multiplos-de-valoracion]] para MCO en este mismo run) es el dato menos malo: sugiere que el precio, aunque
alto, no está desconectado del crecimiento esperado — pero el PEG asume que ese crecimiento (EPS forward
implícito ~$44, +65% sobre 2025) se materializa, y un salto de esa magnitud en un solo año es una asunción
agresiva que merece escepticismo, no aceptación automática. **Verificación aritmética de sanidad** (hecha por
el orquestador, no por el verificador dedicado): a diferencia de la ficha de Micron de este mismo run (donde
se detectó un margen neto implícito imposible >100%), las cifras de ASML son internamente consistentes
(EPS×acciones ≈ ingresos×margen neto reportado), así que se tratan con confianza normal, no como sospechosas.

## El argumento "picos y palas" — tratado con el escepticismo que merece

El pulso de mercado (Iturralde, NegociosTV) sugirió que proveedores de infraestructura de IA como ASML tienen
el futuro "más asegurado" que las IA-native — el equipo ya lo verificó como **DÉBIL** en la capa de pulso
(`wiki/actualidad/pulso-video-2026-07-15.md`): en la burbuja puntocom, los propios "picos y palas" de aquella
burbuja (Cisco, Nortel, Lucent) cayeron tanto o más que sus clientes cuando el ciclo de capex se enfrió. ASML
no está exenta de ese mecanismo — su backlog da visibilidad a 2027, no inmunidad estructural más allá de eso.

## Riesgos

- **Geopolítico, ya materializado, no hipotético**: restricciones de exportación de EE.UU./Países Bajos a
  China sobre litografía avanzada — regulatorio, no de mercado, y con precedente de escalada.
- **Concentración de clientes**: TSMC, Samsung e Intel son la mayoría de los ingresos — riesgo de
  dependencia si cualquiera de los tres recorta capex.
- **Correlación, no diversificación, dentro del bloque tech-semis de Carlos**: ASML y Micron son eslabones
  distintos de la misma cadena (equipo vs. memoria), pero **ambas están apalancadas al mismo factor macro**:
  el ciclo de capex de IA que ya documenta el pulso como el 42% de la capitalización del S&P 500. Añadir
  ASML junto a Micron **no reduce la concentración factorial** que la propia cartera actual señala como
  el problema real de Carlos (~45% en una sola apuesta macro) — sería la misma apuesta con otro nombre dentro
  del bloque tech, no diversificación genuina.
- **Ciclicidad del capex de semis pese al backlog**: el backlog da 1-2 años de visibilidad, no inmunidad al
  ciclo completo (2028-30 sin cobertura contractual hoy).

## Veredicto (sin verificación adversarial): VIGILAR, no COMPRAR ahora

El moat es probablemente el más sólido y menos discutible del Cerebro (monopolio tecnológico genuino, no solo
cuota dominante), y los financieros son intachables (caja neta, FCF > beneficio, backlog récord). Pero **a
P/E forward 40x no hay margen de seguridad** — es pagar por la calidad y el crecimiento esperado sin colchón
si el ciclo de capex de IA se modera antes de lo previsto. Y **no encaja como diversificación real** del
bloque tech-semis de Carlos: es la misma exposición macro a la IA que Micron, con un moat mejor pero sin
reducir la concentración factorial que ya preocupa en cartera actual. Recomendación: esperar una
corrección del ciclo de capex de IA (digestión, escalada regulatoria con China, o un shock tipo IBM en otro
eslabón de la cadena) antes de iniciar posición, en vez de comprar a precio completo hoy.

### Qué invalidaría o reforzaría la tesis
- Una corrección del 20-30% sin deterioro del backlog o los fundamentales sería la señal de entrada que hoy
  falta (comprar el ciclo, no la historia — [[ciclos-de-mercado]]).
- Escalada regulatoria adicional sobre exportaciones a China que afecte >10% de ingresos reforzaría el riesgo
  geopolítico por encima del umbral de vigilancia pasiva.
- Si el backlog empieza a contraerse (cancelaciones, no solo desaceleración de nuevas reservas), sería la
  señal más temprana de que el ciclo de capex de IA gira antes de lo esperado.

## Lo que esto le dice al cerebro de Carlos

- **No diversifica, concentra**: el hallazgo central de este análisis no es de valoración sino de encaje —
  ASML añadida a Micron es más exposición al mismo factor macro (capex de IA), no menos concentración. Si
  Carlos algún día decide entrar, debería ser sustituyendo parte de la exposición a semis existente, no
  sumando encima.
- **El moat más sólido documentado hasta hoy en `wiki/empresas/`**: útil como referencia de contraste para
  futuras candidatas — la pregunta "¿tiene ASML-nivel de barrera de entrada?" es ahora un patrón reutilizable
  del Cerebro.
- **Coherente con el rechazo del pulso de mercado a "picos y palas = seguro"**: ver la verificación adversarial
  ya archivada en `wiki/actualidad/pulso-video-2026-07-15.md` — no se repite aquí sin cuestionarla.

## Nota de análisis 2026-07-17 — Informe Anual 2025 (IFRS)

Ingerido el AR 2025 completo, que confirma y cuantifica la tesis previa:
- **Ventas netas €32,7B** (+15,6% sobre 2024); **margen bruto 52,8%**; **I+D €4,7B** (la barrera de entrada se
  compra con este gasto sostenido — nadie más puede igualarlo). **535 sistemas** vendidos; >44.000 empleados.
- **EUV 0,33 NA** maduro y ganando eficiencia por exposición; **High NA EUV (0,55 NA)** progresando con varios
  clientes (>400.000 obleas procesadas en sistemas High NA) — la siguiente generación que extiende el monopolio.
- Backlog sólido (ver cifra previa) sostenido por el capex de IA. Refuerza el foso "más sólido de `wiki/empresas/`".
- **Cruce nuevo (2026-07-17)**: ASML es el eslabón de EQUIPO de la cadena que ahora el cerebro documenta entera —
  [[semiconductores-logica-y-computo-ia|lógica/GPU (Nvidia)]] y [[semiconductores-de-memoria|memoria (Micron)]]
  compran a TSMC/fabs que compran litografía a ASML. Se beneficia del capex de TODOS, pero comparte el MISMO
  riesgo de ciclo de capex de IA — la advertencia de concentración de esta página se refuerza, no se relaja.

## Preguntas abiertas

- ¿Cuánto tiempo puede sostenerse un backlog 1,19x ingresos sin nuevas reservas — es decir, cuál es la señal
  de alerta temprana de que el ciclo de capex de IA se satura, antes de que se vea en los ingresos reportados?
- Esta tesis no pasó verificación adversarial (límite de sesión) — pendiente de reverificar antes de
  cualquier decisión de tamaño, especialmente el supuesto de EPS forward (+65% en un año).
- ¿Existiría un punto de entrada mejor si Carlos redujera Micron primero (ya recomendado por concentración,
  ver `wiki/perfil/decisiones/2026-07-11-analisis-inicial-cartera.md`) y rotara parte de ese capital hacia
  ASML en una corrección futura, en vez de sumar ambas posiciones?

## Ver también

cartera actual · perfil de inversor · [[foso-economico]] · [[margen-de-seguridad]] ·
[[multiplos-de-valoracion]] · [[ciclos-de-mercado]] · [[eficiencia-de-mercado]] ·
[[asignacion-de-activos]]

## Nota de evolución 2026-08-25 (analista-europa-espana)

**Evento**: resultados Q2 2026 publicados el 15-jul-2026 (comunicado oficial asml.com, leído íntegro
el 25-ago-2026).

**Cifras verificadas en primaria**: ventas €9.326M (+23% YoY), margen bruto **54,0%**, beneficio neto
€2.918M, EPS €7,59. Guía Q3: ventas €11–12B con margen bruto 55–57%. **Guía FY2026 ELEVADA**: ventas
€43–45B (desde ~40B) y margen bruto 54–56%. La dirección califica la demanda de IA de "extremely
strong" en pedidos y anuncia ampliación de capacidad Low NA EUV del +30% para 2027 (y estudia otro
+30% adicional para 2028); DUV sin cambios estructurales.

**Qué confirma de la tesis**: exactamente el catalizador que la ficha marcaba como condición de
re-rating ("confirmar que la demanda de IA sostiene márgenes ≥54%") se ha materializado Y AMPLIADO:
no solo sostiene el margen, sube la guía completa. El riesgo de "corrección del 20–30% por expectativas
de IA" no se ha disparado por fundamentales: los pedidos reales avalan el ciclo.

**Qué NO cambia**: el veredicto VIGILAR sigue siendo correcto por el lado del PRECIO, no del negocio.
Dato de segundo orden verificado hoy (Yahoo): ASML cotiza $1.744 (25-ago), POR DEBAJO de los $1.797
del día de la tesis (15-jul) pese al beat + raise de guía — el mercado ya tenía el buen resultado en
el precio ([[eficiencia-de-mercado|eficiencia de mercado]] aplicada a semis). La corrección esperada
por valoración no necesita mala noticia: basta expectativa ya satisfecha.

**Fuente**: comunicado ASML Q2 2026, https://www.asml.com/en/news/press-releases/2026/q2-2026-financial-results (15-jul-2026); precio Yahoo Finance 25-ago-2026.
