---
title: "Fiscalidad del inversor en España 2026 — ficha de consulta"
tipo: referencia
tags: [fiscalidad, espana, irpf, ahorro, etfs, fondos-inversion, sociedad-patrimonial, impuesto-sociedades]
fecha: 2026-08-25
agente: espana-local
---

# Fiscalidad del inversor en España 2026 — ficha de consulta

> Capa de DATO: cifras verificadas hoy (2026-08-25) para consultar rápido. **No es asesoramiento
> fiscal**: los matices legales se marcan [DUDA: ...] y exigen verificación profesional antes de decisiones.
> Contexto macro que da sentido a esta ficha: [[espana-bolsa-y-macro-2026]] §inflación y §fiscal.

## 1. IRPF: base del ahorro — escala VIGENTE

**Corrección a la hipótesis de partida (19/21/23%)**: desde el **1-1-2025** la escala tiene CINCO tramos.
La Ley 7/2024, de 20 de diciembre, añadió dos tramos nuevos arriba (Funds Society, 29-ene-2025); la escala
completa sigue vigente en 2026 (COPE/Europa Press, 11-feb-2026):

| Base liquidable del ahorro | Tipo estatal+autonómico |
|---|---|
| Hasta 6.000 € | **19%** |
| 6.000 – 50.000 € | **21%** |
| 50.000 – 200.000 € | **23%** |
| 200.000 – 300.000 € | **27%** (nuevo desde 2025) |
| Más de 300.000 € | **30%** (nuevo desde 2025) |

Qué entra aquí: dividendos, intereses, y **ganancias/pérdidas patrimoniales (GPP) por transmisión**
(vender acciones, ETFs, reembolsar fondos). La base del ahorro tributa separada de la general (trabajo),
con sus propios tramos — es «la base barata» del IRPF, y cada vez menos barata arriba.

Reglas operativas clave:
- **Compensación intra-año**: las GPP compensan entre sí sin límite. El saldo neto negativo puede compensarse
  con rendimientos del capital mobiliario positivos **hasta el 25%** de estos (y viceversa); lo que sobra,
  arrastre **4 años** (regla estable del art. 33.5 LIRPF; regla del 25% recogida por Abante vía COPE, 11-feb-2026).
- **Retenciones a cuenta**: 19% sobre dividendos e intereses; **sin retención** en Letras del Tesoro, ETFs y
  derivados (Abante vía COPE, 11-feb-2026).
- Segundo orden: vender perdedores para materializar pérdidas antes de fin de año («tax-loss harvesting») es
  de las pocas palancas fiscales gratuitas del inversor español directo — pero con ETFs/fondos hay que mirar la
  regla de venta-recompra (ver §3): recomprar el mismo activo al día siguiente no anula la pérdida fiscal
  española (no existe *wash-sale rule* generalizada), matiz que conviene documentar operación a operación.
  [DUDA: práctica administrativa sobre venta-recompra inmediata — decidí describirla como válida con cautela;
  contrastar con asesor si el importe es relevante.]

## 2. Acciones directas

- Venta → GPP (precio venta − precio compra − gastos), tributa en la escala §1 en el momento de la venta.
  No hay diferimiento ni reinversión protegida: cada venta es hecho imponible.
- Dividendo → rendimiento del capital mobiliario, escala §1, retención 19% a cuenta. Sin exenciones parciales
  tipo *Teilfreistellung* alemana: el 100% del bruto tributa.
- Implicación: en carteras grandes y rotativas, el fisco cobra el *turnover*. Para Carlos (largo plazo), la
  consecuencia natural es baja rotación + harvesting selectivo de pérdidas, coherente con
  [[horizonte-largo-plazo]] y [[interes-compuesto]]: cada euro de impuesto pagado 20 años antes deja de componer.

## 3. Fondos de inversión vs ETFs — LA diferencia estructural

Fuente principal: **Manual práctico IRPF 2025 de la Agencia Tributaria** (arts. 94 LIRPF y RIRPF) y
**Guía fiscalidad de los fondos de inversión, CNMV 2026**.

### Fondos: el traspaso sin peaje (art. 94.1 LIRPF)
- Reembolso o transmisión cuyo importe **se destina a otra IIC** → **NO se computa ganancia**; las nuevas
  participaciones **conservan valor y fecha de adquisición** de las originales. Ejemplo oficial AEAT: traspaso
  de 10 participaciones a VL 6.000 € (60.000 €) con valor de compra 53.110 € → 0 € tributan hoy.
- Solo se tributa en el reembolso definitivo (GPP, escala §1; retención 19% sobre la ganancia en ese momento).
- La mayoría de fondos comercializados en España son de **acumulación**: los rendimientos internos se
  capitalizan sin tributar (CNMV 2026). Nada se paga hasta vender.

### ETFs: fuera del diferimiento desde 1-1-2022
- La **Ley 11/2021 antifraude** equiparó todos los ETFs (fondos/sociedades de inversión cotizados, español o
  extranjero, cualquier mercado): su transmisión o reembolso **computa SIEMPRE la ganancia**, aunque sea para
  comprar otro ETF. Fuente: AEAT, Manual IRPF 2025, régimen especial de diferimiento.
- Transición: los ETFs **comprados antes del 1-1-2022** conservan el diferimiento solo hacia IIC NO cotizadas
  (DT 36ª LIRPF) — prácticamente irrelevante hoy salvo cartera heredada antigua.
- Los ETFs **UCIT acumulativos** de la UE no generan imputación anual para el residente: tributan como GPP en
  la venta. El régimen de imputación anual (art. 95 LIRPF) queda acotado por la propia AEAT a IIC de
  jurisdicciones no cooperativas. [DUDA: casos borde — ETFs no armonizados o registrados fuera del registro
  CNMV — decidí tratarlos como GPP a la venta por defecto; confirmar caso concreto con asesor.]

### Lectura de segundo orden
El fondo clásico es un **préstamo sin intereses del fisco**: puedes rebalancear, rotar de índice, gestionar el
risgo — todo sin disparar el impuesto; el Estado financia tu [[interes-compuesto]] sobre el impuesto diferido.
El ETF te da coste menor y liquidez intradía, pero cada rebalanceo grande tiene peaje fiscal inmediato. En
España, para núcleos indexados de largo plazo que se retocan, esa asimetría suele pesar más que 2-3 pb de TER.
No hay respuesta universal: depende del patrón de rotación esperado de cada cartera (cartera actual).

## 4. Sociedad patrimonial / holding (IS)

Tipo general: **25%** (Impuesto sobre Sociedades, Ley 27/2014 LIS). Lo interesante y lo peligroso está en el
**art. 21 LIS**:

- **Exención del 95%** sobre dividendos y plusvalías de participaciones **cualificadas** (desde Ley 11/2020,
  PGE 2021; antes era 100%): tipo efectivo **1,25%** sobre esas rentas.
- Requisitos (AEAT, Manual IS 2025 + análisis Capittal, mar-2026):
  - Participación **≥5%** del capital, o valor de adquisición **>20 M€**;
  - Tenencia mínima **1 año**;
  - La filial realiza **actividad económica real** (>50% del activo afecto; una entidad cuyo activo es
    mayoritariamente cartera de valores NO genera exención para quien participa en ella);
  - Filial extranjera: sujeta a un impuesto análogo ≥**10%** (tributación mínima).
- Entidades de **reducida dimensión** (<40 M€ facturación, sin grupo) mantienen el 100% hasta 2026 (transitoria).

### El matiz que decide TODO para una cartera personal de cotizadas
Una SL que compra posiciones **<5% de empresas cotizadas** (caso típico de cartera bursátil personal
sociedadzada) **NO accede a la exención del art. 21**: sus dividendos y plusvalías tributan al **25%** dentro
de la SL, y al sacar dinero (dividendo SL→socio) vuelven a tributar en la escala §1 (**doble imposición
económica**). Coste total de extracción ≈ 25% + 19-30% sobre el resto. Además, el **art. 111 LIS** (régimen
especial de sociedades patrimoniales) permite imputar rentas directamente al socio en supuestos de abuso.
[DUDA: aplicación concreta del art. 111 y de los límites anti-abuso del art. 21.3 a carteras cotizadas —
decidió NO entrar en detalle operativo porque es donde más errores se cometen; verificación con asesor fiscal
OBLIGATORIA antes de montar estructura.]

### Cuándo SÍ tiene sentido (propuesta razonada, decisión de Carlos)
Participaciones cualificadas (≥5% o >20 M€) en negocios reales, plan de inversión sostenida, o actividad
económica añadida. Para una cartera indexada o de cotizadas minoritarias, la SL suele ser un **coste** (gestoría,
contabilidad, IS 25% sobre dividendos, doble imposición final) disfrazado de optimización. Regla mental: la
sociedad optimiza el *reinvestir* dentro de la caja; castiga el *consumir* fuera de ella.

## 5. Tabla comparativa rápida (consulta)

| Vehículo | Dividendos | Plusvalías | Traspaso sin peaje | Retención | Imputación anual |
|---|---|---|---|---|---|
| Acciones | 19-30% (§1), ret. 19% | GPP al vender | No (venta = impuesto) | 19% | No |
| Fondo inversión (acum.) | interno: 0% hasta vender | GPP solo al reembolso definitivo | **SÍ** (art. 94) | 19% sobre ganancia al reembolso | No |
| ETF UCIT (UE) | distribuye: 19-30% + ret. 0%; acumula: 0% | GPP SIEMPRE al vender | No (desde 2022) | No | No |
| SL (IS 25%) | 25% (1,25% solo si art. 21 aplica) | 25% (idem) | Dentro de la SL: sin peaje personal | — | No |

## 6. Fuentes

- Agencia Tributaria — Manual práctico IRPF 2025: régimen de diferimiento (art. 94 LIRPF) y exclusión de ETFs
  (Ley 11/2021), DT 36ª; imputación art. 95 limitada a jurisdicciones no cooperativas. `sede.agenciatributaria.gob.es`
- Agencia Tributaria — Boletín informativo RDL 2/2026, de 3-feb (BOE 4-feb-2026): medidas tributarias vigentes.
- CNMV — «Fiscalidad de los fondos de inversión en el IRPF», guía 2026 (`cnmv.es`, PDF).
- Ley 7/2024 (tramos 27%/30% desde 2025) vía Funds Society (29-ene-2025) y COPE/Europa Press (11-feb-2026).
- LIS arts. 21 y 111: AEAT Manual IS 2025 + Capittal (17-mar-2026).
- Verificación profesional recomendada en toda decisión estructural — límite ético del cerebro: esto analiza,
  no asesora.

## Lecturas

- [[espana-oportunidades-y-riesgos-2026]] — por qué la presión fiscal al capital es EL riesgo estructural español.
- [[espana-bolsa-y-macro-2026]] — inflación y bono: el contexto que hace valioso cada punto de drag fiscal.
- [[interes-compuesto]] · [[horizonte-largo-plazo]] · cartera actual
