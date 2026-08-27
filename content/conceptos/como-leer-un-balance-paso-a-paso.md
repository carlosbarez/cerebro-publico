---
title: "Cómo leer un balance paso a paso (con Costco de ejemplo)"
tipo: concepto
tags: [contabilidad, balance, cuenta-de-resultados, flujo-de-caja, ratios, ejemplo-practico, costco]
fecha: 2026-08-25
agente: profesor-conceptos
fuentes: "[\"https://www.sec.gov/Archives/edgar/data/909832/000090983225000101/cost-20250831.htm\", \"https://query1.finance.yahoo.com/v8/finance/chart/COST\", \"[[analisis-integral-de-empresas-amat]]\"]"
---

# Cómo leer un balance paso a paso (con Costco de ejemplo)

## La idea en una frase

> El **beneficio es una opinión, la caja un hecho**: por eso el orden correcto de lectura es primero la caja
> de resultados (qué dice la empresa que gana), después el balance (con qué recursos y compromisos) y AL
> FINAL el flujo de caja (qué pasó de verdad con el dinero).

## El orden y POR QUÉ

1. **Cuenta de resultados** (*income statement*): es la OPINIÓN contable del periodo. Acumulaciones
   (*accruals*), criterios de reconocimiento, estimaciones. Sirve para entender el MODELO: qué vende,
   con qué margen, cuán apalancado operativamente.
2. **Balance** (*balance sheet*): la FOTO de recursos y compromisos. Aquí viven las trampas (activos fuera
   de balance, pensiones, arrendamientos) y aquí se comprueba si la opinión del punto 1 es sostenible.
3. **Flujo de caja** (*cash flow statement*): el JUEZ. Concilia lo dicho con lo hecho. Si el beneficio crece
   pero la caja operativa no, alguien está contando bonito (ver [[contabilidad-y-calidad-de-beneficios]]).

Se lee en este orden porque cada documento audita al anterior: el balance explica DE DÓNDE salió el beneficio
(inventario, deuda, goodwill) y la caja confirma SI el beneficio existe.

## Ejemplo real: Costco FY2025 (ejercicio cerrado 31-ago-2025)

Todas las cifras del 10-K presentado ante la SEC el 8-oct-2025 (EDGAR, CIK 909832), en $M salvo indicación.

### Paso 1 — La cuenta de resultados (el modelo de negocio)

| Línea | FY2025 | Qué preguntarle |
|---|---|---|
| Ingresos totales | **275.235** | De dónde: ventas 269.912 + **cuotas de socios 5.323** |
| Coste de mercancía | −239.886 | Margen bruto = **12,84%** (sector retail alimentación según Damodaran: ~26%) |
| SG&A | −24.966 | Ratio 9,1% sobre ingresos: frugalidad estructural |
| Beneficio operativo | **10.383** | Margen operativo 3,77% |
| Intereses (+otros) | +435 neto | Deuda casi irrelevante: caja rinde más de lo que cuesta la deuda |
| Impuestos | −2.719 | Tipo efectivo ~25% |
| **Beneficio neto** | **8.099** | Margen neto 2,94%; EPS diluido **$18,21** |

La pregunta clave que solo la cuenta de resultados responde: ¿de dónde sale el beneficio REAL? Las cuotas de
socios ($5.323M) son el **51,3% del beneficio operativo**: Costco vende casi a coste y factura la lealtad
por adelantado. Un margen bruto BAJO (12,8%) no es debilidad sino arma ([[foso-economico]]): promete al socio
que nunca pagará de más.

### Paso 2 — El balance (los recursos y las trampas)

| Bloque | Cifra | Qué revela |
|---|---|---|
| Caja + inversiones corto plazo | **14.161 + 1.123** | Liquidez enorme; deuda larga 5.713 → **caja neta ≈ +9.571** (ver [[balance-caja-neta-y-tipo-de-deuda]]) |
| Inventarios | **18.116** | BAJÓ desde 18.647 mientras los ingresos subían +8,2%: rotación sana, sin acumulación |
| PP&E neto | 31.909 | Negocio físico intensivo en activos; capex/ingresos = 2,0% |
| Activos por arrendamiento (ROU) | 2.725 | Arrendamientos "escondidos" fuera del PP&E (trampa nº 3, abajo) |
| Proveedores (**accounts payable**) | **19.783** | Los proveedores financian la operación (trampa invertida: ventaja) |
| Cuotas cobradas por adelantado (*deferred membership fees*) | **2.854** | Caja RECIBIDA antes de dar el servicio: poder de mercado convertido en financiación gratis |
| Pasivo corriente total | 37.108 | Fondo de maniobra = 38.380 − 37.108 = **+1.272** apenas positivo (ver [[fondo-de-maniobra-y-ciclo-de-caja]]) |
| Patrimonio neto | **29.164** | ROE sobre media anual ≈ **30,7%** |

### Paso 3 — El flujo de caja (el juez)

| Línea | FY2025 | Lectura |
|---|---|---|
| Beneficio neto | 8.099 | El punto de partida (la opinión) |
| + Amortizaciones / SBC / otros | 2.426 + 860 + ... | Ajustes no monetarios |
| ± Cambios en explotación | +1.764 | Inventario libera caja (+559); proveedores aportan (+404) |
| **= Caja operativa (OCF)** | **13.335** | OCF/beneficio = **165%**: el beneficio SOBRE-convierte en caja (raro y excelente; lo normal es ~100%) |
| − Capex | −5.498 | Expansión real, no mantenimiento puro |
| **= Flujo de caja libre (FCF)** | **7.837** | FCF/beneficio = **96,8%** |
| Dividendos | −2.183 | En FY2024 esta línea fue 9.041: incluyó el dividendo EXTRAORDINARIO de $15/acción (ene-2024). No confundir dividendo ordinario con extraordinario al proyectar |
| Recompras | −903 | Devolución modesta; reinvierte en crecimiento |

Conciliación NI→OCF limpia, inventario controlado, proveedores financiando: la opinión contable y el hecho
de caja dicen LO MISMO.

### Ratios esenciales calculados (FY2025)

| Ratio | Valor | Umbral de referencia general |
|---|---|---|
| Margenes bruto/op/neto | 12,84% / 3,77% / 2,94% | comparar SIEMPRE con sector (dataset márgenes Damodaran) |
| ROE (beneficio medio/patrimonio medio) | ~30,7% | >15% sostenido = negocio con ventaja ([[retorno-sobre-capital-empleado]]) |
| Current ratio (liquidez) | 38.380/37.108 = **1,03** | >1 holgado; en retail fino es normal (rotación diaria de caja) |
| Ciclo de caja (*cash conversion cycle*) | DIO 27,6d + DSO 4,2d − DPO 30,1d = **≈1,7 días** | cuanto menor, menos capital atrapado; Costco paga a sus proveedores casi tan rápido como rota el género |
| FCF/beneficio | 96,8% | >80% varios años = beneficios de verdad |
| P/E a precio de cierre 25-ago-2026 ($962,14) | **52,8x** | el negocio es perfecto; la PREGUNTA pasa al precio ([[precio-vs-cotizacion]]) |

## Las cinco trampas típicas (y cómo aparecen en Costco)

1. **Capex escondido**: gastos de crecimiento capitalizados o arrendados para inflar el EBITDA. Buscar:
   capex/OCF sostenido >50% sin explicación, o "adjusted EBITDA" que ignora SBC. Costco: capex visible y
   honesto en la propia tabla del cash flow.
2. **Pensiones**: pasivos de pensiones definidas pueden ser bombas ocultas en nota 14 (Costco tiene planes
   mayoritariamente de contribución definida; [Sin datos verificados del pasivo de planes extranjeros en
   esta lectura rápida]). Regla: si la empresa opera en Europa/Japón con plantilla antigua, leer esa nota.
3. **Arrendamientos**: tras IFRS 16/ASC 842 los ROU están EN balance, pero muchos análisis siguen usando
   EBITDA sin ajustar por renta. Costco: ROU activo 2.725 vs pasivo de arrendamiento largo 2.460 — pequeño;
   en cadenas de restaurantes o retail alquilado cambia el apalancamiento real por completo.
4. **Inventario**: su variación ES caja. Costco FY2024 consumió −2.068 construyendo stock; FY2025 devolvió
   +559. Inventario creciendo más rápido que ventas dos años seguidos = primera señal clásica de demanda
   floja o maquillaje.
5. **Reconocimientos** (*revenue recognition*): ingresos reconocidos antes de entregar valor (porcentaje de
   obra en construcción, contratos plurianuales). Costco al revés: cobra la cuota ANTES y la difiere
   (2.854 en pasivo) — conservadurismo que además adelanta caja.

## Errores típicos del principiante

- Empezar por el EPS y el titular de prensa: pierde el modelo y las trampas.
- Condenar el margen bajo sin mirar la rotación: Costco gana por VOLUMEN×velocidad, no por margen (ROE 30%
  con margen 2,9%: DuPont, ver [[contabilidad-y-calidad-de-beneficios]]).
- Leer el balance sin fechas cruzadas: comparar inventario de agosto contra ventas anuales exige usar el
  MISMO ejercicio fiscal (el de Costco acaba ~fin de agosto, no en diciembre).
- Confundir dividendos ordinarios con extraordinarios en la serie histórica de pagos.
- Ignorar la conciliación NI→OCF: tres años seguidos de OCF < beneficio son una sentencia pendiente de firma.

## Pensamiento de segundo orden

- **Qué implica**: dominar la secuencia resultados→balance→caja convierte cualquier filing en legible en
  ~40 minutos; la ventaja no está en tener datos (SEC EDGAR los regala) sino en saber QUÉ PREGUNTA hacerle
  a cada línea.
- **Con qué conecta**: el ciclo de caja de 1,7 días explica POR QUÉ Costco puede vender a casi coste y aun
  así componer caja — su [[foso-economico]] contable son los proveedores y socios financiando el growth.
- **Dónde choca**: Amat (análisis español) prioriza liquidez y solvencia clásicas (FM, tesorería); la
  escuela anglosajona (Damodaran/Schilit) prioriza conversión caja/beneficio. Para un retailer de rotación
  extrema, la segunda manda; para una constructora con obra plurianual (Carillion, ver
  [[red-flags-contables-grandes-fraudes]]), la primera era la que avisaba.

## Implicaciones para la cartera (largo plazo)

1. Rutina fija por empresa: 10-K → los tres estados en el orden aquí descrito → cinco ratios → una frase
   escrita de tesis contable. Repetible en 40 minutos por ficha.
2. Vigilar trimestralmente SOLO tres series: OCF/beneficio, inventario vs ingresos, y deuda neta. Lo demás
   es detalle.
3. El P/E de 52x de Costco dice que la calidad ya está pagada: la lectura del balance sirve aquí para
   confirmar que NO hay trampa, no para justificar el precio ([[gestion-de-posiciones]] decide el tamaño).

## Señales falsables (umbral + horizonte)

| Señal | Umbral | Horizonte |
|---|---|---|
| OCF/beneficio <70% durante 3 ejercicios | ratio anual | revisar calidad del beneficio antes del 4º cierre |
| Inventario creciendo >1,5x el ritmo de ventas | YoY, dos trimestres seguidos | alerta de demanda/obsolescencia en el trimestre siguiente |
| Renovación de socios Costco <88% (desde ~92%) | dato trimestral de sales results | erosión del foso; revisar tesis en 12 meses |

## Páginas relacionadas

[[balance-caja-neta-y-tipo-de-deuda]] · [[fondo-de-maniobra-y-ciclo-de-caja]] ·
[[contabilidad-y-calidad-de-beneficios]] · [[costco-wholesale]] · [[retorno-sobre-capital-empleado]] ·
[[flujo-de-caja-descontado]] · [[red-flags-contables-grandes-fraudes]] ·
[[financial-shenanigans-schilit]]
