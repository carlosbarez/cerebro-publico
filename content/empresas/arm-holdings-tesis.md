---
title: "Tesis: Arm Holdings (ARM)"
tipo: tesis
tags: [tesis, semiconductores]
fecha: 2026-08-24
agente: carlos
ticker: ARM
moneda: USD
precio_referencia: 237.71
fecha_precio: 2026-08-24
veredicto: VIGILAR
revisar_el: 2026-11-24
---
# Tesis: Arm Holdings (ARM)

## 1. Negocio

Arm cobra un peaje por calcular. Dos motores simples: **licencias** (cuota de entrada por usar la arquitectura o núcleos concretos — suscripciones tipo Arm Total Access; el KPI es el ACV, $1.732M +13% a jun-26) y **regalías** (céntimos por chip enviado, ~$0,10–2,00 por unidad según prensa; las generaciones nuevas —Armv9, CSS— cobran más por chip que las viejas). El tercer motor es nuevo y lo cambia todo: desde marzo-2026 Arm **vende su propio chip**, el AGI CPU para centro de datos (demanda contratada >$2B FY27-28, envíos desde finales de 2026). Si no sale simple, es porque no lo es: Arm vive de que otros fabriquen con sus planos y, desde 2026, compite contra ellos.

## 2. Industria — [[semiconductores-logica-y-computo-ia]]

La capa IP es la más limpia de la cadena: margen bruto 97,5%, sin fábricas ([[tsmc]] absorbe el capex y los riesgos de *yield*), sin inventario… hasta marzo-2026. KPIs que mandan aquí: crecimiento de regalías interanual (+22%), contenido Arm por dispositivo (más núcleos y más caros por SoC), mezcla Armv9/CSS y ACV. Método de valoración que dicta: anualidad tecnológica — solo se justifican múltiplos de tres dígitos si las regalías son perpetuas, es decir, si el coste de cambiar de arquitectura sigue siendo prohibitivo. Trampa típica: confundir instalación base con poder de precio — 350.000M de chips acumulados con Arm no significan nada si la tasa media por chip es de céntimos y el mercado principal (el móvil, 43% de las regalías) está maduro. Segundo orden: la IA agéntica multiplica **núcleos CPU** (Haas: cada agente podrá correr en su propio núcleo/hipervisor) → el peaje crece con el número de agentes, no con el precio de la GPU. Pero la consecuencia de la consecuencia: si el cómputo migra a aceleradores ASIC sin CPU generalista, el peaje se salta entero — Arm necesita que el CPU siga siendo relevante en cada caja del centro de datos.

## 3. Moat — [[foso-economico]]

Tipo: **efecto red de ecosistema** (software, herramientas, desarrolladores — 35 años acumulados) + **costes de cambio a nivel de arquitectura** (cambiar de ISA son años de ingeniería y re-certificación) + intangibles de estándar de facto. MoatScan (mar-26): foso estrecho, 71/100, intangibles 9/10. ¿Aguanta 10 años? La arquitectura, casi seguro; **la neutralidad, ya no estoy seguro**. Hasta 2026 Arm era Suiza: Apple, [[qualcomm|Qualcomm]], NVIDIA, AWS ([[amazon]]), Google ([[alphabet]]) y [[microsoft|Microsoft]] construían sobre sus planos porque Arm jamás competiría contra ellos. El AGI CPU rompió eso a propósito (decisión no forzada, según el análisis de Kristal). Consecuencia de la consecuencia: los grandes licenciatarios tienen ahora incentivo económico para financiar la alternativa — Qualcomm compró el especialista RISC-V Ventana (dic-2025), China empuja RISC-V como política de Estado, y ya hay silicio RISC-V de servidor enviándose en 2026 (aunque sea volumen temprano: ~20.000M de núcleos RISC-V operativos, concentrados en IoT/MCU). El coste no aparece en ningún trimestre: emerge en las **renovaciones de licencia de FY29-31**. Asimetría temporal pura: captura primero (FY27-28), factura después. ¿Quién lo destruiría? Sus propios clientes top, la FTC con remedios que recorten el modelo de licencias, o Arm mismo ejecutando mal su primer chip en 35 años («hacer chips es otro deporte», Haas).

## 4. Financieros

Calidad del beneficio: buena con asteriscos que importan más de lo habitual.

1. **El beneficio verdadero está entre GAAP y no-GAAP**: el margen operativo no-GAAP de 41,2% ignora un SBC masivo que diluye ~2%/año para siempre; el GAAP (7,1%) sobreinvierte ruido. Ni uno ni otro: beneficio económico real ≈ mitad de camino.
2. **El FCF baila por diseño**: licencias *lumpy* → FY25 convirtió solo 22% del beneficio en caja y TTM 144%. No es alarma, es estructura; pero prohíbe anualizar cualquier trimestre.
3. **El cambio de modelo se paga en caja**: capex ×16 en cuatro años y opex +28% interanual. La tesis «renta pura sin capital» ha muerto oficialmente; lo que la sustituye (márgenes de producto) es mejor negocio que Intel pero peor que el royalty puro.
4. Balance de fortaleza total (~$3,4B net cash): puede librar una guerra de plataformas plurianual sin pedir dinero.

## 5. Directiva y capital allocation (*capital allocation*)

Rene Haas (CEO) y Jason Child (CFO). Allocation actual: ni dividendo ni recompras visibles; todo va a I+D y ahora a capex de silicio. El juicio clave: Haas decidió convertir una renta de peaje con márgenes de software en un negocio de producto persiguiendo un TAM declarado de $1T en infraestructura IA a 2030 (EE Times) — marco interno FY31: $15B del AGI CPU vs $10B de IP/CSS. Es una apuesta deliberada contra el propio modelo que hizo rico al activo. Sombra estructural: SoftBank controla ~90% (implícito en flotante 9,9%) — el accionista minoritario no vota estrategia, la aguanta. En favor de Haas: hasta ahora la ruptura de neutralidad ha sido quirúrgica (chip solo para clientes que no fabrican los suyos: Meta colaboradora, Oracle, OpenAI, Cloudflare entre los lanzamiento) y la demanda supera oferta.

## 6. Valoración por escenarios

Anclas verificadas: consenso MarketScreener (12-ago-26) FY29e EPS $2,638; marco directivo FY31 $15B AGI CPU; Jefferies ve $18B FY31 (Reuters, jul-26). Horizonte mar-2030, descuento 10%/año. Multiples finales e EPS extrapolados: juicio propio, declarado como tal.

| Escenario | Prob | Supuesto | EPS FY30 | Múltiplo salida | Valor VP |
|---|---|---|---|---|---|
| Pesimista: licenciador abandonado | 30% | Renovaciones duras, RISC-V gana nichos, FTC limita; regalías <15% | ~$2,00 | 35× | ~$50 |
| Base: consenso cumple | 45% | Regalías ~20%, AGI CPU conforme a guía | ~$3,40 | 45× | ~$109 |
| Optimista: dueño de plataforma | 25% | AGI CPU rampa a $15-18B FY31, foso intacto | ~$4,00 | 60× | ~$170 |

**Valor ponderado ≈ $105 → [[margen-de-seguridad|margen de seguridad]] vs $237,71 ≈ −55%.** Lectura incómoda: incluso el escenario optimista queda un tercio por debajo del precio actual; el mercado ya descuenta, casi completo y por adelantado, el mejor FY31 posible. La acción cayó −47% desde máximos ($452,70) y aún sobra la mitad.

## 7. Riesgos y red flags

- **La valoración es el riesgo nº 1** (ver §6): a 102× beneficios forward, cualquier decepción se castiga doble.
- **FTC** (investigación formal desde may-26) + pleito Qualcomm-Nuvia (finales 2026): el conflicto de interés ya existe aunque Arm no haya hecho nada malo — y la FTC investiga precisamente porque hacer algo malo sería casi racional.
- Concentración heredada: móvil = 43% de regalías, mercado maduro; China = 18,7% de ingresos (y creciendo +17% en FY26) con RISC-V como política nacional.
- Escasez de memoria limitando regalías de *smartphone* ya visible en la guía (CFO, jul-26): cuello macro ajeno a Arm.
- Ejecución primeriza: inventario, RMAs, garantías — categorías de coste que no existían en la compañía hace un año.
- Flotante libre ~10% + beta 3,91: volatilidad amplificada en ambas direcciones.

## 8. Contraste con postura previa

Sin postura previa.

## 9. Veredicto propuesto: VIGILAR

Empresa extraordinaria con el mejor modelo económico del sector vendido al peor precio posible, y además en el momento exacto en que está apostando su ventaja original. Propuesta (decide Carlos):

- **Hoy no comprar** a ~$238: margen de seguridad −55%.
- Reevaluar tras tres hitos fechados: resultados Q2 FYE27 (~nov-26), sentencia Qualcomm-Nuvia (4T26) y evolución de la investigación FTC.
- Interés de compra real si (a) el precio se acerca a ~$110–120 (descuenta el pesimista y parte del base), o (b) aparecen pruebas tempranas del escenario optimista — subida del objetivo AGI CPU, regalías sostenidas ≥20% y cero heridas regulatorias — que hagan recalcular el §6 al alza con datos, no con fe.

## 10. Qué invalidaría esta tesis

Señales falsables con umbral concreto (la tesis VIGILAR se invalida hacia ABAJO si ocurren; hacia ARRIBA si el precio cae al gatillo):

- Crecimiento interanual de regalías <15% durante dos trimestres consecutivos (hoy: +22%; la frontera de Kristal es 17%).
- Recorte de la demanda AGI CPU FY27-28 por debajo de ~$1,5B (hoy >$2B) o retraso de envíos más allá del 1S27.
- Sentencia adversa para Arm frente a Qualcomm o remedios FTC que limiten su libertad de fijar términos de licencia.
- Primer despliegue productivo de RISC-V para cargas de IA en Meta, AWS, Google o Microsoft.
- ACV estancado (<+5% interanual) o en descenso.

## 11. Predicciones falsables

1. Las regalías totales de FYE27 (abr-26→mar-27) alcanzarán ≥$3,10B (≥+19% vs $2.613M). Probabilidad 65%. Verificación: carta Q4 FYE27, ~may-2027.
2. Los ingresos reconocidos del AGI CPU en FYE27 serán <$600M pese a la demanda >$2B contratada (la rampa física manda sobre la demanda). Probabilidad 60%. Verificación: ídem.
3. La cotización cerrará por debajo de $150 en algún momento antes del 31-dic-2026. Probabilidad 35%. Verificación: mercado.
4. Algún hiperscaler del top-4 anunciará despliegue productivo RISC-V para cargas de IA antes de jun-2027. Probabilidad 20%. Verificación: prensa sectorial.

## Ver también

- [[arm-holdings]]
