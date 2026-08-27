---
title: "Retenciones internacionales sobre dividendos (y el arbitraje del domicilio UCITS)"
tipo: concepto
tags: [dividendos, retenciones, fiscalidad-internacional, w8ben, ucits, doble-imposicion]
fecha: 2026-08-25
agente: dividendos-fiscalidad
---

# Retenciones internacionales sobre dividendos (y el arbitraje del domicilio UCITS)

Todo dividendo extranjero pasa por dos manos fiscales: la del **país fuente** (retención en origen) y la de
España (base del ahorro). La regla española de alivio es la **deducción por doble imposición internacional**
(art. 80 LIRPF): se deduce lo retenido en origen **hasta el límite del convenio y hasta la cuota española que
correspondería pagar** por esa renta. El exceso, perdido — salvo reclamar al fisco extranjero.

## Estados Unidos: 30% legal, 15% con W-8BEN

- Sin formulario, el broker estadounidense retiene el **30%** legal. Con el **W-8BEN** firmado en el broker
  (certifica residencia fiscal fuera de EEUU), aplica el **15% del convenio España-EEUU** (1990, protocolo 2013).
- En la declaración española (Renta, casilla 588): el dividendo se declara íntegro en la base del ahorro y los
  15 € retenidos por cada 100 € se deducen; como el tipo español marginal del ahorro para tamaños patrimoniales
  normales es 19-21%, el 15% se deduce entero y solo se paga el diferencial. Si te retuvieron 30% por no tener
  el W-8BEN, España solo te admite el 15%: el otro 15% hay que reclamarlo al IRS, proceso largo que casi nunca
  compensa en importes pequeños.
- Episodio 2025 de riesgo político: la sección **899** ("revenge tax") del proyecto *One Big Beautiful Bill*
  amenazaba con subir retenciones a inversores de países "discriminatorios"; fue **retirada en junio-julio de
  2025 tras el acuerdo G7** sobre Pilar Dos. Moraleja: las retenciones tienen riesgo político, pero el sistema
  convencional aguantó.

## El arbitraje silencioso: ETF/fondo irlandés vs luxemburgués

Cuando el inversor español compra un UCITS, quien sufre la retención americana es el **fondo**, no tú:

| Domicilio | Tratado con EEUU | Retención sobre dividendos USA dentro del fondo |
|---|---|---|
| **Irlanda (ISIN "IE")** | Protocolo 1997 reconoce UCITS como transparentes | **15%** |
| **Luxemburgo (ISIN "LU")** | Fondo tratado como opaco sin beneficios de convenio | **30%** |

Irlanda además **no retiene nada** sobre sus distribuciones a no residentes. Con un yield típico del S&P 500,
la diferencia LU-vs-IE cuesta ~0,2 puntos de rentabilidad anual, invisible en la declaración porque jamás pasa
por tus manos: es fricción estructural dentro del NAV. El 90% de los UCITS de renta variable USA ya están
domiciliados en Irlanda precisamente por esto.

## Segundo orden para Carlos

1. **Acumulación = diferimiento total**: un UCITS irlandés acumulador no distribuye → no hay retención ni
   tributación intermedia española hasta la venta. Es el equivalente funcional (imperfecto) del traspaso de
   fondos, aunque **sin** el privilegio del art. 94 LIRPF ([[fiscalidad-en-espana]]): vender el ETF tributa.
2. **La retención del fondo NO es deducible**: los 15% que Irlanda paga a EEUU salen de tu rentabilidad y no
   constan en tu Renta. Al comparar "dividendos directos con W-8BEN" (deducibles) vs "fondo irlandés"
   (no deducibles pero diferidos), comparar después de impuestos totales — el estándar de
   [[fiscalidad-del-inversor]].
3. **Contraste con la ilusión del envoltorio**: el beneficio del protocolo irlandés no es un envoltorio
   anti-abuso sino **estructura real con sustancia** (un fondo regulado genuinamente transparente para el
   tratado) — exactamente el test legítimo que distingue estructura de truco en [[fiscalidad-del-inversor]].
4. Para una cartera como cartera actual: núcleo indexado mundial → UCITS irlandés acumulador; renta
   periódica real de dividendos americanos directos → W-8BEN al día y deducir en casilla 588.

> [!warning] Pendiente de verificar
> Tasas de retención de otros orígenes frecuentes (Suiza 35%, Alemania ~26,375% con vía de devolución,
> Francia, Italia, Reino Unido) **no verificadas en esta investigación**: quedan fuera hasta contrastarlas con
> fuentes oficiales o del custodio. No usarlas de memoria.

## Fuentes

- Zygnio — "Dividendos EEUU: retención 15% y convenio de doble imposición España-EEUU" (mecánica W-8BEN, casilla 588, límites de deducción): https://zygnio.com/blog/declarar-dividendos-eeuu-convenio-doble-imposicion/ · consulta 2026-08-25
- Butterfly Market Insider — "Retención EE.UU. ETFs irlandeses: +0,3% anual con ISIN IE" (protocolo convenio EEUU-Irlanda 1997, comparativa con Luxemburgo, cuantificación del drag): https://butterflymarketinsider.com/es/ahorrar-retencion-eeuu-etfs-irlandeses-2026/ · consulta 2026-08-25
- Tax Foundation — "Reviewing the International Tax Provisions in the One Big Beautiful Bill Act" (ago-2025, contexto del paquete donde se retiró la sección 899): https://taxfoundation.org/research/all/federal/big-beautiful-bill-senate-gop-tax-plan/ · consulta 2026-08-25
- Norma de referencia española: art. 80 LIRPF (deducción por doble imposición internacional), texto refundido Ley 35/2006 (BOE-A-2006-20764)

## Ver también

[[fiscalidad-en-espana]] · [[fiscalidad-del-inversor]] · [[interes-compuesto]] ·
[[horizonte-largo-plazo]] · [[dividendos-espana-y-europa-2026]]
