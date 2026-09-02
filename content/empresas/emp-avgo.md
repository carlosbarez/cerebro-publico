---
title: "Broadcom (AVGO) - Ficha de investigacion"
tipo: empresa
tags: [empresa, semis, usa]
fecha: 2026-08-31
agente: carlos-barez
squad: Analisis Fundamental - Empresas (Carlos Barez)
status: sonde
---

# Broadcom (AVGO) - Ficha de investigacion

> Fuentes base:
> - Nota de prensa Q2 FY2026 (IR oficial): https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-second-quarter-fiscal-year-2026-financial
> - Financials AVGO (stockanalysis.com): https://stockanalysis.com/stocks/avgo/financials/
> - Estadisticas y valoracion AVGO: https://stockanalysis.com/stocks/avgo/statistics/
> - Google News RSS (novedades ago-2026): https://news.google.com/rss/search?q=Broadcom+custom+AI+chip+XPU+2026

## 1. Resumen ejecutivo

Broadcom es un conglomerado de semiconductores mas software de infraestructura, gestionado como una maquina de flujo de caja (cash flow) por Hock Tan: comprar activos con clientes cautivos, subir precio, recortar coste, desapalancar. Hoy tiene dos motores: (a) silicio de IA a medida (custom accelerators, "XPU") y redes (networking) para hiperescalares (hyperscalers), y (b) software de infraestructura, dominado por VMware.

Cifras clave:
- Ingresos TTM (a may-2026) 75.465 M$; FY2025 63.887 M$ (+23,9%) [1].
- Q2 FY2026: ingresos 22.187 M$ (+48% a/a); ingresos de semis por IA 10.800 M$ (+143% a/a); guia Q3 de 16.000 M$ de IA (+>200% a/a) [2].
- Margen bruto TTM 76,3%; FCF TTM 32.762 M$ (43,4% de ventas); capex TTM solo 860 M$ [1].
- Capitalizacion ~1,75 B$ (trillion); PER trailing 61,4x, PER forward 23,4x; EV/FCF 54,9x; ROIC 24,2% [3].

Por que importa al inversor de largo plazo: es uno de los pocos negocios que captura el gasto de capital (capex) de IA sin asumir el capex (modelo fabless, capex/ventas ~1%), y a la vez cobra una renta cuasi-monopolistica en software critico. El riesgo no es el negocio, es el precio y la concentracion de clientes.

## 2. Estructura / modelo

| Segmento | Ingresos FY2025 | Ingresos TTM may-26 | Que es |
|---|---|---|---|
| Semiconductor Solutions | 36.858 M$ | 47.762 M$ | ASIC/XPU a medida, switches Tomahawk/Jericho, optica, wireless (Apple), broadband, storage |
| Infrastructure Software | 27.029 M$ | 27.703 M$ | VMware (VCF), CA, Symantec, mainframe |
| Total | 63.887 M$ | 75.465 M$ | |

Fuente: [1].

Mecanica del modelo:
1. Semis fabless: diseno + IP de SerDes/packaging; fabricacion en TSMC. Capex casi nulo (860 M$ TTM sobre 75.465 M$) [1], asi que el crecimiento de IA cae casi entero a FCF.
2. Software: conversion de licencias perpetuas a suscripcion en bundles (VMware Cloud Foundation), con subidas de precio agresivas. Margen incremental muy alto; genero el salto de margen operativo de 30,6% (FY2024) a 41,3% (FY2025) y 44,2% TTM [1].
3. Balance: deuda total 64,9 M$ mil millones -> 64.907 M$, deuda neta -45.279 M$, Deuda/EBITDA 1,54x [3]. Se desapalanca con FCF, no con emision de acciones (acciones +1,04% a/a) [3].

## 3. Numeros clave

| Metrica | TTM may-26 | FY2025 | FY2024 |
|---|---|---|---|
| Ingresos | 75.465 | 63.887 | 51.574 |
| Margen bruto | 76,3% | 77,3% | 75,2% |
| Margen operativo | 44,2% | 41,3% | 30,6% |
| Beneficio neto | 29.317 | 23.126 | 5.895 |
| FCF | 32.762 | 26.914 | 19.414 |
| Margen FCF | 43,4% | 42,1% | 37,6% |
| Capex | 860 | 623 | 548 |

En millones USD. Fuente: [1].

Valoracion y retorno: PER 61,4x / forward 23,4x, P/FCF 53,6x, EV/EBITDA 42,8x, PEG 0,49, ROE 37,3%, ROIC 24,2%, WACC estimado 12,1%, tasa fiscal efectiva 3,8%, beta 1,47, precio ~368 $ (31-ago-2026), +23,8% a 52 semanas [3]. Adjusted EBITDA Q2 FY2026 = 69% de ventas; guia Q3 de margen operativo non-GAAP ~67% [2]. Ingresos por empleado 2,29 M$ con 33.000 empleados [3].

Nota de honestidad: el desglose exacto de ingresos de IA por cliente y el backlog de IA no estan publicados con detalle en las fuentes leidas: no localizado. Tampoco he podido leer el 10-Q completo en SEC EDGAR en esta sesion (canal Exa caido por limite de credito): limitacion registrada.

## 4. Posicion / marco conceptual

Foso (moat) en tres capas:
- Coste de cambio (switching costs) extremos en software: VMware esta incrustado en el datacenter privado; la demanda de Tesco por ~100 M GBP es evidencia del poder de fijacion de precios y de su coste reputacional [4]. Es un caso de libro de foso por costes de cambio.
- IP dificil de replicar en SerDes, packaging avanzado y switching de alto radix: solo Broadcom y Marvell compiten de verdad en XPU a medida; el resto compra GPU de Nvidia.
- Coubicacion con el cliente: cada XPU es co-disenado con un hiperescalar (Google TPU, Meta, OpenAI, Anthropic via Google). Un diseno ganado fija 3-5 anos de ingresos, pero tambien crea dependencia mutua.

Marco mental: Broadcom es un "peaje sobre el capex ajeno" mas un "cobrador de rentas" en software. Encaja con negocios de peaje y con la disciplina de capital de hock tan manual de capital allocation. Contrasta con Nvidia ([[emp-nvda]]): Nvidia vende plataforma con software (CUDA) y margen de marca; Broadcom vende ingenieria a medida a un puñado de compradores muy sofisticados que negocian duro.

## 5. Catalizadores y riesgos

Catalizadores:
- Guia Q3 FY2026 de 29.400 M$ (+84% a/a) y 16.000 M$ de IA (+>200%) [2]; resultados Q3 el 2-sep-2026 [3]: catalizador inmediato.
- Anthropic con ~3,5 GW de TPU con Google y Broadcom, senal de pipeline plurianual [5].
- Nuevos programas de XPU (OpenAI y otros clientes citados por prensa; cifras concretas no localizadas).

Riesgos:
- Concentracion de clientes brutal: pocos hiperescalares deciden el crecimiento. Aviso reciente: "Google warning" sobre Broadcom y el desarrollo de chips de proxima generacion de Google con MediaTek [6][7]: si un cliente dual-sourcea, el foso se estrecha.
- Ciclo de capex de IA: es un gasto discrecional de 5-6 empresas. Si el ROI de la IA decepciona, el recorte llega a Broadcom con 2-4 trimestres de retraso y sin colchon de valoracion.
- Software: la subida de precio de VMware es un peaje que empuja a la migracion (Nutanix, Proxmox, hyperscaler); erosion lenta pero real [8].
- Valoracion: 53,6x FCF y 42,8x EBITDA descuentan varios anos de crecimiento fuerte [3]. La accion cayo -5% pese a batir estimaciones y elevar guia en junio-2026 [9]: senal de expectativas ya altas.
- Fiscal: tasa efectiva 3,8% [3] es insosteniblemente baja a largo plazo; cualquier normalizacion resta EPS.
- Dependencia de TSMC y de packaging avanzado (CoWoS): riesgo geopolitico Taiwan.

## 6. Valoracion / implicaciones practicas

Aritmetica sencilla: FCF TTM 32.762 M$ sobre EV 1,79 B$ = ~1,8% de rendimiento (yield) [1][3]. Para justificar el precio, el FCF debe multiplicarse por ~2,5-3x en 5 anos, es decir sostener ~20-25% anual de crecimiento de FCF. Es posible si el capex de IA sigue y Broadcom mantiene cuota en XPU; es dificil si el mix de IA (margen bruto de ASIC por debajo de la media del grupo) diluye margen bruto mientras crece: ya se ve el margen bruto bajando de 77,3% a 76,3% [1].

Que vigilar cada trimestre:
1. Ingresos de IA vs guia y, sobre todo, la mezcla XPU vs networking (networking tiene mas margen).
2. Margen bruto consolidado: si baja por debajo de ~74% con IA creciendo, el crecimiento es de menor calidad.
3. Crecimiento organico de Infrastructure Software: TTM 27.703 vs FY2025 27.029 M$ [1] implica casi estancamiento -> el motor VMware de subida de precios ya esta cerca de agotado.
4. Concentracion: comentarios sobre clientes y cualquier senal de segundo proveedor (MediaTek en Google) [7].
5. Capex/ventas: si sube mucho, el modelo asset-light se degrada.

Senal de alerta: crecimiento de IA por encima de la guia pero con margen bruto y FCF por debajo, y software plano. Eso seria "crecer alquilando el foso".

## 7. Veredicto para el inversor

Negocio de calidad excepcional (ROIC 24%, FCF 43% de ventas, capex 1% de ventas) [1][3] con dos debilidades honestas: dependencia de media docena de compradores y un precio que ya paga el escenario bueno. Para un inversor de largo plazo tipo Carlos, la tesis es defendible como posicion nucleo pequena, con compras en caidas por decepcion de capex, no en euforia. Si hoy hubiera que elegir, la disciplina de "no pagar por certeza" recomienda esperar un trimestre de decepcion en vez de perseguir la guia de +200%.

## 8. Segundo orden (OBLIGATORIO)

Angulo pedido: como la IA y la automatizacion cambian su estructura de costes y su foso a 3-5 anos.

1. La IA abarata precisamente lo que Broadcom vende como escaso. El foso del ASIC es capital humano: equipos de diseno de fisico, verificacion y SerDes. Si las herramientas EDA asistidas por IA (Synopsys, Cadence, y ahora agentes de diseno) reducen el coste y el tiempo de un tape-out complejo, la barrera "solo Broadcom puede hacerte un XPU" se debilita a 3-5 anos. Consecuencia de segunda vuelta: los hiperescalares internalizan mas diseno (Google con MediaTek es el primer aviso concreto [6][7]) y Broadcom pasa de socio insustituible a proveedor de IP mas backend. El margen del segmento IA converge hacia el de un servicio de ingenieria, no de plataforma. Vinculo: eda asistida por ia, foso por capital humano.
2. Automatizacion interna = palanca de margen, pero temporal. Ingresos por empleado 2,29 M$ [3] ya son extremos. Broadcom puede automatizar soporte y ventas de software (VMware) y subir mas el margen; pero el ahorro de coste se compite en precio en cuanto el cliente tiene alternativa. El margen sostenible depende del switching cost, no de la eficiencia. Segundo orden: si la IA facilita las migraciones (agentes que reescriben infraestructura como codigo y mueven cargas fuera de VMware), la automatizacion destruye el foso de VMware antes de abaratarle el coste. La casi-nula variacion del software TTM vs FY2025 [1] es compatible con esa hipotesis.
3. Concentracion de contraparte y ciclo reflexivo. Los clientes de Broadcom se financian con expectativas de retorno de la IA. Es un ciclo de capex reflexivo: los ingresos de Broadcom validan el relato, el relato financia mas capex. Cuando el flujo se rompe, la caida no es lineal: se cancelan programas enteros, no unidades marginales. Un inversor debe modelar el escenario -40% de ingresos de IA en un ano, no -10%.
4. Poder de negociacion asimetrico. El comprador de un XPU es una de las empresas mas ricas y sofisticadas del mundo, con incentivo permanente a comoditizar a su proveedor. A 3-5 anos lo esperable es compresion de precio por unidad compensada por volumen. Ver quien captura el valor en la cadena de ia.
5. Donde choca con otras fuentes: la prensa de consenso trata AVGO como "la mejor accion de IA para no vender nunca" [10]; analisis mas escepticos senalan contradicciones estructurales (concentracion, mix, valoracion) tras los mismos resultados [11]. Mi lectura se alinea con el segundo grupo en riesgo y con el primero en calidad del negocio.
6. Que debe vigilar Carlos a 3-5 anos: (a) cuota de diseno interno de los hiperescalares; (b) margen bruto del segmento semis; (c) crecimiento organico de software sin subidas de precio; (d) capex/ventas; (e) tasa fiscal efectiva normalizandose desde 3,8% [3]; (f) senales de que las herramientas de diseno con IA reducen la barrera de entrada. Conecta con tesis capex ia, [[emp-nvda]], [[emp-tsm]], riesgo de concentracion de clientes.

## 9. Fuentes consultadas

1. Broadcom (AVGO) Financials Overview - https://stockanalysis.com/stocks/avgo/financials/ (consultado 31-ago-2026)
2. Broadcom Inc. Announces Second Quarter Fiscal Year 2026 Financial Results and Quarterly Dividend (IR oficial) - https://investors.broadcom.com/news-releases/news-release-details/broadcom-inc-announces-second-quarter-fiscal-year-2026-financial (03-jun-2026)
3. Broadcom (AVGO) Statistics & Valuation - https://stockanalysis.com/stocks/avgo/statistics/ (consultado 31-ago-2026)
4. Tesco demanda a Broadcom por 100M GBP: lecciones de vendor lock-in - El Ecosistema Startup, via Google News RSS - https://news.google.com/rss/search?q=Broadcom+VMware+margenes+2026 (20-jun-2026)
5. Anthropic: 3,5 GW de TPUs con Google y Broadcom - El Ecosistema Startup, via Google News RSS - https://news.google.com/rss/search?q=Broadcom+custom+AI+chip+XPU+2026 (07-abr-2026)
6. Broadcom Gets Fresh Google Warning - TradingView, via Google News RSS - https://news.google.com/rss/search?q=Broadcom+custom+AI+chip+XPU+2026 (19-ago-2026)
7. GOOGL Stock Dips Premarket... Google Developing Next-Gen AI Chip With MediaTek - TradingView, via Google News RSS - https://news.google.com/rss/search?q=Broadcom+custom+AI+chip+XPU+2026 (22-jun-2026)
8. Cambios en las licencias de VMware en 2026: lo que deben saber los proveedores de la nube - Acronis, via Google News RSS - https://news.google.com/rss/search?q=Broadcom+VMware+margenes+2026 (16-jul-2026)
9. Broadcom se desploma 5% pese a superar estimaciones y elevar guia de IA - XTB.com, via Google News RSS - https://news.google.com/rss/search?q=Broadcom+AVGO+resultados+IA+2026 (03-jun-2026)
10. "La mejor accion de inteligencia artificial para comprar en junio y no vender nunca" - Bolsamania, via Google News RSS (01-jun-2026)
11. Los resultados de Broadcom no estan exentos de riesgo... contradicciones estructurales de multiples niveles - TradingKey, via Google News RSS (31-may-2026)
12. Previa de resultados del T3 de Broadcom - TradingKey, via Google News RSS (29-ago-2026)

Limitaciones de esta sonda: el canal Exa (web_search_exa) devolvio error 402 (credito agotado), asi que la busqueda web amplia no se ejecuto; se compenso con Jina Reader sobre IR oficial y stockanalysis.com, y con Google News RSS. No se leyo el 10-Q en SEC EDGAR: pendiente para la version durable.
