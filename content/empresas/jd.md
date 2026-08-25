---
title: "JD.com Inc (JD)"
tipo: empresa
tags: [empresa, china, e-commerce, logistica, posicion-cartera]
fecha: 2026-08-19
agente: carlos-barez
ticker: JD
moneda: USD
precio_referencia: 28.82
fecha_precio: 2026-08-18
valor_estimado: 37.5
gatillo_entrada: 24
veredicto: VIGILAR
revisar_el: 2026-11-15
---

# JD.com Inc (JD)

**Nota de proceso (2026-08-19)**: esta página fue escrita hoy por primera vez de forma legítima. Antes existió
un contenido distinto en esta misma ruta, escrito por error el mismo día por el subagente
`recopilador-fundamental` (READ-ONLY por contrato, nunca debe escribir en el vault), que además ejecutó un
`git commit` (`dcbcd95`) por su cuenta con un `agente: claude-code-fundamental-collector` que no existe en el
equipo. Se detectó y corrigió dentro de este mismo run — no se trata como "página antigua a evolucionar" sino
como corrección de un error de escritura del día. El contenido crudo original queda preservado en
`scratchpad/jd-ficha-datos-2026-08-19.md` para trazabilidad; no se revierte el commit histórico. Detalle
completo en el log de cierre del 2026-08-19 y en `.af-aprendizajes.md`.

## 1. Negocio
JD.com son dos negocios cosidos: (1) un retailer "1P" (compra inventario y revende, modelo Amazon-retail, no
marketplace puro) de electrónica/electrodomésticos sobre todo, con margen bruto ajustado del 18,5% en JD
Retail; (2) una red logística propia (JD Logistics) que nació como coste interno y hoy factura a terceros.
Fácil de explicar — pasa el test de simplicidad.

## 2. Industria — [[plataformas-de-internet-de-china]]
Bloque "Plataformas de internet de China" del Cerebro (junto a Baidu, Meituan y el fondo JPMorgan Greater
China). Descuento de gobernanza estructural de cinco capas: (1) VIE — el inversor no es dueño real, solo tiene
contratos con una cáscara en Caimán, riesgo de cola binario si Pekín deja de tolerarlo; (2) primacía del
Estado sobre el accionista (precedente Ant Group/Didi 2021); (3) riesgo geopolítico/ADR (PCAOB), mitigado
parcialmente en JD por su cotización dual NASDAQ+HK; (4) consumidor chino estructuralmente débil (tesis de
[[michael-pettis]]: China no rebalancea hacia consumo doméstico) — viento en contra estructural, no
coyuntural; (5) opacidad contable/regulatoria. El método que dicta la industria: múltiplos ajustados por caja
neta + SOTP, con el descuento de gobernanza metido en la tasa de descuento (WACC 12-13% en vez de 9-10%), no
como ajuste cosmético al final.

## 3. Moat
Moderado y concentrado en la logística: la red de almacenes propios (no depende de 3PL) es un compromiso caro
y difícil de deshacer (*credible commitment*) — el foso más creíble de JD, intensivo en capital. No hay efecto
de red ni switching cost fuerte a nivel de consumidor (cambia de app sin fricción: Douyin, PDD, Taobao
compiten agresivamente en precio). JD Logistics (+24% YoY) funciona y se monetiza fuera del retail cautivo;
JD Retail (85% de ingresos) cae -4,7% YoY — el foso logístico existe, pero no está protegiendo el volumen del
retail. Techo estatal: el antimonopolio puede recortar el foso por decreto, con independencia de la ejecución
de JD. 17 trimestres consecutivos de expansión de margen bruto en JD Retail son disciplina operativa real,
pero no señal de foso ensanchándose si viene acompañada de pérdida de volumen.

## 4. Financieros
Verificados y corregidos contra la fuente primaria (earnings release GlobeNewswire, 13-ago-2026).

**Ingresos**: TTM RMB1.313,5B (+0,3% YoY); histórico 2023 RMB1.084,7B, 2024 RMB1.158,8B (+6,8%), 2025
RMB1.309,1B (+13,0%) — desaceleración abrupta de +13% a +0,3%. Q2 2026: RMB346,4B (-2,9% YoY; la propia
empresa lo atribuye a "high base effect", no a "primera caída desde IPO 2014" — esa frase más fuerte es una
amplificación sin respaldo directo del comunicado; Reuters la describe como "más de una década", más vaga.
Tratar como opinión/cita de medio, no como hecho confirmado por fuente primaria).

**Caja neta — corregida por el verificador, mejora el suelo de valoración**: la ficha de datos original tenía
un error aritmético (deuda total declarada RMB105,3B no reconciliaba con sus propios componentes; la
diferencia de RMB35,4B eran pasivos por arrendamiento operativo sumados sin declararlo). Balance real al
30-jun-2026: liquidez bruta (caja + caja restringida + inversión a corto plazo) = RMB235,1B (cifra que el
propio comunicado reporta explícitamente, no es ya caja neta); deuda financiera con interés real = RMB69,9B.
**Caja neta correcta = RMB165,2B, equivalente a ~62% del market cap** (no 42% como decía la ficha original).
Es un suelo de valoración tipo "Ford-1988" más sólido de lo que parecía, no más débil.

**ROE/ROIC**: ROE cayó de 14,79% (Q1 2025) a 6,00% (ago-2026) — plausible y corroborado cruzadamente con otra
fuente del wiki (Yahoo Finance, ROE TTM ~6,8%, mismo orden de magnitud). ROIC -1,51% (negativo) es
direccionalmente plausible (coherente con el colapso de margen operativo TTM a ~0,2-0,3%) pero no trazable a
una fuente citada — tratar como estimación, no como hecho verificado con precisión.

**FCF — con corrección material**: FCF TTM +212% YoY (RMB31,4B) está verificado exacto contra la conciliación
del propio release — esto es sólido. Pero el ratio "FCF/NI 2,29x" usado para argumentar solidez de conversión
de caja tiene un error aritmético: el NI TTM Non-GAAP declarado (RMB13,7B) es matemáticamente imposible — el
NI Non-GAAP del primer semestre 2026 por sí solo ya es RMB16,3B, superior al "TTM" declarado de cuatro
trimestres. Con el TTM reconstruido correctamente el ratio real está más cerca de 0,9-1,1x, mucho menos
dramático. Lo que sí se sostiene, con evidencia cuantificable del propio balance: la sospecha de que el salto
de FCF se apoya en compresión de circulante no repetible. Cuentas por pagar subieron RMB40,6B en H1 2026 (de
RMB188,4B a RMB228,96B) e inventario subió RMB19,1B — viento de cola de circulante del mismo orden de magnitud
que buena parte de la mejora interanual del FCF. El múltiplo EV/FCF de 5,1x que parece "gangazo" se trata con
baja confianza, ahora con respaldo cuantitativo del balance, no solo intuición.

**Recompras y retorno al accionista — confirmado por el verificador, faltaba en el borrador original**:
US$1.000M recomprados en 1S26 (69,9M acciones clase A / 34,9M ADS, ~2,5% del capital), quedan US$1.000M del
programa de US$5.000M a 3 años (vigente hasta agosto 2027). El management trata la caja como excedente —
corrobora la tesis del suelo de caja neta.

**Múltiplos**: P/E TTM 20,3-24,1x (no barato dado el deterioro de ROE/ROIC, sobre un margen neto TTM real de
solo ~1%); P/E forward 9,1x (barato solo si el guidance direccional se cumple con cifras que aún no existen);
P/B 1,19x (moderado); EV/EBITDA 12,92x (dato de baja confianza, internamente inconsistente en la ficha
original); EV/FCF 5,1x (inflado, ver arriba); P/S 0,21x (bajo, coherente con márgenes estructuralmente finos).

## 5. Directiva
Sin datos de incentivos/participación accionarial del management en la ficha — se deja fuera en vez de
inventarlo. Guidance del call del 13-ago-2026: "definitive inflection point" (CEO), "turning point" del Q3
esperado, "top-line reacceleration H2 2026" — declaraciones direccionales sin una sola cifra concreta, con
incentivo estructural de sonar optimista tras una caída del -10% en la sesión. Tratar como opinión de
management con conflicto de interés estructural, no como hecho verificable hasta que lleguen los números de
Q3 (noviembre 2026).

## 6. Valoración por escenarios
DCF con FCF normalizado (no el TTM bruto, dado el efecto de circulante) y WACC con prima de gobernanza
(12-13%):

- **Bajista (prob. ~35%)**: la caída de Q2 es inicio de desaceleración estructural (consumidor chino débil,
  tesis Pettis se confirma); FCF revierte al margen histórico ~1-1,2% de ingresos; WACC 13%, g terminal 1%.
  → **Valor ≈ $22-24/ADS** (por debajo del precio actual).
- **Base (prob. ~45%)**: reaceleración parcial, no total; crecimiento vuelve a 2-4%/año, margen se estabiliza
  1,75-2,25%; WACC 12%, g terminal 2,5%. → **Valor ≈ $35-42/ADS**.
- **Alcista (prob. ~20%)**: guidance se cumple con cifras, JD Retail reacelera de verdad, negocios nuevos
  dejan de sangrar, descuento de gobernanza se estrecha; WACC ~10,5%, g terminal 3%. → **Valor ≈ $55-70/ADS**.

**Valor esperado ponderado ≈ $37-38/ADS** frente a precio actual $28,82 → **margen de seguridad ≈ 20-25%**,
con el escenario bajista (35% prob.) ya por debajo del precio de hoy — margen real pero no aplastante.

SOTP cualitativo: caja neta (~$16,6-20B corregida, ~$12-14/ADS) + JD Retail (márgenes finos, valorar con
descuento por deterioro reciente) + JD Logistics (creciendo +24%, sin datos suficientes en la ficha para
aislar su valor con precisión — hueco explícito) + negocios nuevos (valor probablemente negativo/opcional
mientras queman caja). Confirma la misma conclusión cualitativa que el DCF: la caja neta es el suelo real y
defendible (ahora más sólido tras la corrección), el negocio operativo vale lo que valga la reaceleración,
que todavía es promesa.

## 7. Riesgos y red flags
- Consumidor chino estructuralmente débil ([[michael-pettis]]) — probabilidad alta, impacto alto, techo de
  crecimiento permanente.
- Competencia (Alibaba, PDD, Douyin, Meituan instant retail) — ya visible en JD Retail -4,7% YoY.
- VIE revocado / primacía del Estado — baja probabilidad, impacto catastrófico (riesgo de cola binario).
- Delisting/ADR (PCAOB) — mitigado parcialmente por doble cotización HK.
- Guidance Q3 no se cumple — el forward P/E 9,1x ya descuenta la promesa; decepción reprice rápido.
- Negocios nuevos (Food Delivery, Joybuy) no llegan a rentabilidad — mantiene ROIC deprimido más años.
- **Red flag confirmada por el verificador**: +RMB40,6B en cuentas por pagar en H1 2026, viento de cola de
  circulante no indefinidamente repetible que infla el FCF reportado — no implica mala fe, pero limita cuánto
  peso dar al múltiplo EV/FCF.
- **Red flag de la ficha original, ya corregida, dejar constancia**: error aritmético en deuda total (leases
  operativos sumados sin declarar) y en el NI TTM Non-GAAP (matemáticamente imposible tal como estaba) —
  ambos corregidos por el verificador antes de escribir esta página. Ninguno cambia el veredicto, pero exigen
  no tratar la ficha bruta original como definitiva sin la corrección.
- EV/EBITDA de la ficha original internamente inconsistente — tratado con baja confianza, no se usa como
  ancla de valoración.

## 8. Contraste con postura previa
> — dato privado retirado —
> — dato privado retirado —
> — dato privado retirado —
> — dato privado retirado —
línea directa duplica exposición que el fondo ya da; (ii) JD y Meituan están en lados opuestos de la misma
guerra de subsidios (una sonda del equipo atribuye a "Alibaba/JD desde 2025" la destrucción de ¥35.000M+ de
beneficio de Meituan) — Carlos paga las dos mitades de la misma guerra y cobra la resultante neta, negativa
para ambos. El plan de cartera dice explícitamente "no ampliar China"
(evaluación de cartera 2026-07, reiterado 13-ago), sin cambio de postura. Los huecos reales de la cartera son
otros: liquidez/renta fija 0% y núcleo de calidad famélico (5,0%) — JD no cubre ninguno. Consecuencia
operativa: el veredicto VIGILAR no choca con el plan (no pide capital nuevo); un eventual COMPRAR sí lo
rompería. Aviso de dato: el 9,0% es la foto del 12-jul; con JD -10,4% el 14-ago el peso real de hoy es algo
menor, pero no se estima a ojo sin foto actualizada.

**Contraste anti-anclaje**: la valoración a ciegas dice VIGILAR (~$37-38 vs $28,82, margen 20-25%) y trata
ROIC -1,51%/ROE cayendo como evidencia dura de destrucción de valor incremental. La postura previa no es
homogénea: (1) `wiki/analisis-acciones/jd-com.md` (2026-08-15, agente autónomo, fuera de esta rutina) cerró en
"sesgo neutral-constructivo" por múltiplos/consenso (PT medio $39,43 — casi coincide con el valor esperado de
esta tesis, lo cual merece verse como posible convergencia de inputs de mercado compartidos, no como
confirmación independiente); (2) el pulso de vídeo del 14-ago registró la caída de ingresos como "señal
estructural real, no ruido" sin emitir juicio; (3) esta rutina (`.af-aprendizajes.md`) tenía JD.com pendiente
de rotación, sin tesis previa formal — esta es la primera cobertura formal del equipo fundamental. La
diferencia se explica por MÉTODO, no por hechos nuevos: entre el 15 y el 19 de agosto no se publicó nada nuevo
sobre JD; la lectura previa (agente autónomo) juzgó por múltiplos y consenso y despachó la baja rentabilidad
como "reflejo del modelo de margen bajo/alto volumen", mientras esta lectura exige creación de valor
incremental (ROIC) y castiga la gobernanza en el descuento. El mismo ROE del 6% es "normal para el modelo" en
una página y "colapso de eficiencia de capital" en otra — la divergencia real, sin suavizar.

## 9. Veredicto: VIGILAR
Confirmado tras verificación adversarial. No COMPRAR pleno, no EVITAR. El margen de seguridad (~20-25%) es
real pero no aplastante, y el escenario bajista (35% prob.) ya está por debajo del precio actual. La
verificación reforzó el suelo de caja neta (62% del market cap, no 42%) pero mantuvo el descuento sobre la
calidad del FCF (ahora con evidencia cuantitativa del balance, no solo sospecha) y degradó el ROIC/FCF-NI
puntuales de "hecho" a "estimación no del todo trazable". Ningún ajuste de la verificación cambia la
dirección del veredicto.

## 10. Qué invalidaría la tesis
- Si Q3 2026 real (no guidance) muestra JD Retail de nuevo negativo y ROIC sigue en terreno negativo →
  confirma el escenario bajista, degradar a EVITAR/VENDER.
- Si el circulante (cuentas por pagar/inventario) deja de crecer al ritmo de H1 2026 y el FCF normalizado
  ex-circulante confirma que gran parte del salto fue timing, no estructural → rebajar aún más el peso del
  múltiplo EV/FCF.
- Cualquier señal de endurecimiento regulatorio (antimonopolio, restricciones VIE) invalida el escenario
  alcista de inmediato, con independencia de los fundamentales.
- Próximo hito de falsación: earnings Q3 2026, esperados noviembre 2026.

## 11. Predicciones falsables
JD Retail (segmento, no total JD.com) vuelve a crecimiento YoY positivo en el Q3 2026 (reporte esperado
noviembre 2026) — umbral: ingresos JD Retail Q3 2026 ≥ Q3 2025 (crecimiento YoY ≥0%). Probabilidad estimada:
0,45 (coherente con el peso del escenario base ~45% en el DCF). Si NO se cumple, refuerza el escenario
bajista y candidata a degradar el veredicto en la próxima rotación. La registra `veredicto-semanal`, no esta
página.

## Ver también
[[plataformas-de-internet-de-china]] · cartera actual · [[margen-de-seguridad]] · [[circulo-de-competencia]] ·
[[baidu]] · [[meituan]]
