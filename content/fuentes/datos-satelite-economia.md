---
title: "Datos satelite para economia"
tipo: analisis
tags: [satelite, alt-data, economia]
fecha: 2026-08-31
agente: cazador
squad: Cazador de Fuentes & Evidence (Cazador)
status: sonde
---

# Datos satelite para economia

> Fuentes base:
> - Henderson, Storeygard & Weil, "Measuring Economic Growth from Outer Space", AER 2012 - https://www.aeaweb.org/articles?id=10.1257/aer.102.3.994
> - Hu & Yao, "Illuminating economic growth", Journal of Econometrics 228(2) 2022 - https://ideas.repec.org/a/eee/econom/v228y2022i2p359-378.html
> - Beyer et al., "Measuring Quarterly Economic Growth from Outer Space" (SSRN 4222768) - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4222768
> - Katona, Painter, Patatoukas & Zeng, "On the Capital Market Consequences of Big Data" (SSRN 3222741) - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3222741
> - IMF PortWatch (datos diarios de escalas portuarias via AIS) - https://portwatch.imf.org/

## 1. Resumen ejecutivo

Los "datos satelite para economia" son series economicas construidas desde el espacio en lugar de desde encuestas oficiales: luces nocturnas (nightlights) del sensor VIIRS/DNB de NASA-NOAA, trafico portuario reconstruido con AIS mas imagen optica y radar (SAR), y conteo de coches en aparcamientos (parking lot counts) de tiendas. El atractivo para el inversor de largo plazo no es "predecir el proximo trimestre", sino disponer de un termometro independiente y de alta frecuencia cuando la estadistica oficial es lenta, revisable o politicamente sesgada.

Tres cifras con fuente:
- Elasticidad luces-PIB de aproximadamente 1,3 en un modelo con error de medida; el mismo trabajo concluye que China e India crecieron bastante menos que lo publicado entre 1993 y 2013 (Hu & Yao, Journal of Econometrics 2022 - https://ideas.repec.org/a/eee/econom/v228y2022i2p359-378.html).
- Elasticidad de 1,55 con datos VIIRS para PIB trimestral en economias emergentes y en desarrollo (SSRN 4222768 - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4222768).
- El conteo satelital de aparcamientos de 44 grandes minoristas de EE. UU. (2011-2017, datos de RS Metrics y Orbital Insight) generaba un 4%-5% de rentabilidad en la ventana de tres dias alrededor del anuncio de resultados (Patatoukas, via Berkeley Haas - https://newsroom.haas.berkeley.edu/research/how-hedge-funds-use-satellite-images-to-beat-wall-street-and-main-street/).

Lectura honesta: el valor academico esta demostrado; el valor *residual* para un inversor particular en 2026 es mucho menor que en 2015, porque el dato dejo de ser escaso.

## 2. Estructura / modelo

Cadena de valor en cuatro capas:

| Capa | Quien | Que aporta | Coste tipico |
|---|---|---|---|
| Sensores | NASA/NOAA (VIIRS, Landsat), ESA (Sentinel-1 SAR, Sentinel-2), privados (Planet, Maxar, Satellogic, ICEYE) | Pixeles crudos, revisita diaria a semanal | Publico gratis; privado por km2 |
| Procesado geofisico | NASA Black Marble (producto VNP46, luces nocturnas corregidas de luna, nubes y atmosfera), Light Every Night (Banco Mundial + NOAA) | Series comparables en el tiempo | Gratis |
| Analitica comercial (alt-data) | RS Metrics, Orbital Insight, Kayrros, SpaceKnow, Ursa Space, Vortexa/Kpler (petroleo y AIS) | Conteos, indices, senales listas para modelo | Suscripciones altas, no localizado el precio exacto |
| Consumidor | Hedge funds, FMI/Banco Mundial, bancos centrales, defensa | Nowcast, arbitraje de informacion | - |

Mecanica de los tres indicadores del angulo:
- **Nightlights**: radiancia nocturna como proxy de consumo electrico, urbanizacion y actividad. Fuerte en corte transversal y en paises con estadistica debil; util para shocks (guerra, desastre, apagones). Sesgos conocidos: saturacion en centros urbanos, cambio a LED (que reduce la luz emitida hacia arriba sin caida de actividad), nieve, luna y gas flaring.
- **Trafico portuario**: senales AIS de buques mas imagen (SAR ve de noche y con nubes) para contar escalas, tiempos de espera y toneladas. El FMI publica PortWatch con escalas diarias y un modelo de nowcast de comercio (https://portwatch.imf.org/).
- **Parking**: conteo de vehiculos por tienda; se compara ano contra ano y se traduce en ventas comparables antes del reporte. Es el caso mas puro de "alfa" y, por eso, el mas competido.

## 3. Numeros clave

- Elasticidad luces-PIB: aproximadamente 1,3 (Hu & Yao 2022); 1,55 para emergentes con VIIRS (SSRN 4222768).
- Heterogeneidad: la capacidad predictiva de las luces depende del tamano del pais, nivel de renta, logistica y calidad estadistica; los modelos por pais superan a los de panel (Bluhm et al., Oxford Bulletin of Economics and Statistics - https://onlinelibrary.wiley.com/doi/10.1111/obes.12361).
- Alfa del parking: 4%-5% en tres dias alrededor de resultados; el efecto se concentraba en posiciones cortas contra minoristas con malas noticias, con inversores particulares al otro lado de la operacion (Berkeley Haas / SSRN 3222741).
- Difusion: los datos existen comercialmente desde 2011 pero, en la muestra 2011-2017, el uso quedaba en pocos grandes inversores (misma fuente).
- Tamano del mercado global de alternative data en 2026: **no localizado** con fuente primaria fiable en esta sonda (Exa agoto credito; ver limitaciones).

## 4. Posicion / marco conceptual

El marco correcto es el de Ventaja informativa vs ventaja analitica. Los datos satelite fueron durante un tiempo una **ventaja informativa** real: informacion publica pero costosa de recoger. Ese tipo de foso se erosiona rapido, porque cualquiera con presupuesto compra la misma serie al mismo proveedor. Lo que no se erosiona es la capacidad de interpretacion: saber que un pixel LED no es una recesion, o que una cola de buques puede significar demanda fuerte y no cuello de botella.

Para Carlos, cuyo perfil declarado es valorar buenos negocios y no vender en panico (Perfil inversor de Carlos), el uso sensato no es intentar batir a los quants en el trimestre, sino:
- verificar narrativas macro con evidencia fisica (Verificacion independiente de datos oficiales),
- vigilar cadenas de suministro y chokepoints (Cuellos de botella logisticos),
- desconfiar de cifras oficiales de economias opacas (Fiabilidad de la estadistica oficial).

Conecta tambien con Alt data y coste de la informacion y con Circulo de competencia: usar un dato que no se entiende es peor que no usarlo.

## 5. Catalizadores y riesgos

Catalizadores (a favor):
- Institucionalizacion: el FMI (PortWatch) y el Banco Mundial (Light Every Night) publican gratis series antes exclusivas (https://portwatch.imf.org/, https://blogs.worldbank.org/en/opendata/light-every-night--new-nighttime-light-data-set-and-tools-for-development).
- Uso en conflictos y sanciones: CEPR documenta el uso de datos satelite para seguir la economia de guerra rusa cuando las estadisticas dejan de ser creibles ("When statistics lie", CEPR, via Google News RSS).
- Geopolitica en vivo: en 2026 los medios describen fondos usando imagen satelital y seguimiento de petroleros para operar durante la tension en Oriente Medio y el estrecho de Ormuz (Business Insider, via Google News RSS).
- IA/vision por computador barata: reduce el coste de convertir pixeles en series (qz.com, via Google News RSS).

Riesgos (en contra):
- **Decadencia del alfa (alpha decay)**: cuando el dato se democratiza, la prima desaparece; queda el coste.
- **Ruido y falsas senales**: LED, nubes, luna, cambio de sensor, revisiones de producto rompen la comparabilidad temporal de las luces.
- **Regulatorio**: la frontera entre dato alternativo licito e informacion no publica material (MNPI) es difusa; los proveedores que compran datos con permisos dudosos han tenido problemas con el regulador. Caso concreto de referencia (App Annie, SEC 2021): **no verificado en esta sonda**, tratarlo como pendiente.
- **Dependencia de proveedor**: RS Metrics y Orbital Insight cambiaron de manos y de modelo de negocio; los proveedores pequenos cotizados (por ejemplo Satellogic) tienen riesgo de financiacion, no de "megatendencia segura".

## 6. Valoracion / implicaciones practicas

Que hacer con esto siendo un inversor particular:
1. Usar solo lo gratuito y robusto: PortWatch (FMI) para comercio y chokepoints; Black Marble / Light Every Night para actividad regional; Sentinel-1/2 si hace falta imagen.
2. Usarlo como **contraste**, no como senal de compra. Ejemplo de uso: si una tesis se apoya en "el consumo en el pais X se recupera" y las luces y las escalas portuarias no lo confirman, bajar la conviccion.
3. No pagar por alt-data. El estudio de Berkeley describe justo el escenario contrario: el particular es la contraparte perdedora, no el beneficiario.
4. Escepticismo con las empresas "puras" de imagen satelital como inversion: el margen se lo queda quien tiene distribucion y clientes recurrentes (defensa, gobiernos), no quien lanza satelites.

Senal de alerta: cualquier producto retail que venda "datos de satelite para invertir" con promesa de rentabilidad. La evidencia academica dice que ese alfa vivia en la exclusividad, y un producto masivo por definicion no es exclusivo.

## 7. Veredicto para el inversor

Los datos satelite son una excelente herramienta de **verificacion** y una mala herramienta de **timing** para alguien que no es un fondo cuantitativo. Su mayor valor para Carlos es defensivo: detectar cuando la narrativa oficial o de mercado no cuadra con la realidad fisica (luz, buques, coches). Como tesis de inversion directa en proveedores, es sector duro, intensivo en capital y con clientes concentrados. Conclusion: adoptarlo como fuente gratuita de contraste, evitarlo como promesa de alfa.

## 8. Segundo orden

- **La medicion se vuelve un bien publico y eso mata su rentabilidad privada.** Cuando el FMI y el Banco Mundial publican gratis lo que los fondos pagaban, el excedente pasa del proveedor al usuario. Segundo orden: el negocio del alt-data se desplaza a datos *no* publicables (propietarios, contractuales, con friccion legal), donde el riesgo regulatorio es mayor. Vigilar Riesgo regulatorio del alt data.
- **Si las luces revelan que ciertos paises crecen menos de lo declarado** (Hu & Yao), el segundo orden es una prima de riesgo mal fijada en deuda y renta variable de esos mercados. Conecta con Mercados emergentes y calidad del dato y Prima de riesgo pais.
- **Frente contrario**: los criticos de las luces nocturnas (Gibson et al., Journal of Development Economics 149) muestran que la eleccion de producto de luces cambia las conclusiones. Es decir, dos analistas honestos pueden llegar a PIB distintos con el mismo satelite. Choca con el uso confiado que hacen algunos informes macro. Ver Reflexividad de los indicadores alternativos.
- **Si toda la industria observa los mismos puertos y aparcamientos**, la senal se incorpora al precio en horas y el mercado se vuelve mas eficiente en el trimestre y no menos volatil en el ciclo. Segundo orden para el inversor de largo plazo: menos oportunidades tacticas, misma oportunidad estructural (paciencia y valoracion). Conecta con Eficiencia informativa y horizonte temporal.
- **Equidad y politica**: el trabajo de Berkeley documenta transferencia de riqueza del particular al fondo. Segundo orden: presion politica y posible regulacion de acceso desigual a datos; eso afectaria a los margenes de proveedores y de gestoras cuantitativas.
- **Que vigilar a 3-5 anos**: (1) si los bancos centrales incorporan oficialmente nowcasts satelitales en sus decisiones; (2) si el conteo por SAR y constelaciones diarias reduce el coste hasta hacerlo commodity total; (3) si aparece regulacion explicita sobre alt-data y MNPI; (4) si el uso militar/dual concentra el sector en pocos contratistas y expulsa al negocio financiero; (5) consolidacion de proveedores (senal de que el alfa ya se agoto).

Limitaciones de esta sonda: el canal Exa agoto credito tras la primera consulta, y Jina Reader devolvio 403 en NASA (blackmarble.gsfc.nasa.gov y earthdata.nasa.gov, CloudFront) y bloqueo temporal en portwatch.imf.org. Las cifras citadas provienen de los abstracts y paginas accesibles listados abajo. El tamano del mercado de alt-data y el caso SEC/App Annie quedan como "no localizado" / "no verificado".

## 9. Fuentes consultadas

1. Hu & Yao, "Illuminating economic growth", Journal of Econometrics 228(2), 2022 - https://ideas.repec.org/a/eee/econom/v228y2022i2p359-378.html
2. Bluhm et al., "Forecasting GDP Growth from Outer Space", Oxford Bulletin of Economics and Statistics - https://onlinelibrary.wiley.com/doi/10.1111/obes.12361
3. "Measuring Quarterly Economic Growth from Outer Space", SSRN 4222768 - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4222768
4. Berkeley Haas Newsroom, "How hedge funds use satellite images to beat Wall Street - and Main Street" - https://newsroom.haas.berkeley.edu/research/how-hedge-funds-use-satellite-images-to-beat-wall-street-and-main-street/
5. Katona, Painter, Patatoukas & Zeng, working paper - https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3222741
6. FMI, PortWatch (portcalls diarios, Trade Nowcast, Global Trade Tensions) - https://portwatch.imf.org/ (consultado 2026-08-31)
7. Banco Mundial Blogs, "Light Every Night - New nighttime light data set and tools for development" - https://blogs.worldbank.org/en/opendata/light-every-night--new-nighttime-light-data-set-and-tools-for-development
8. Henderson, Storeygard & Weil, "Measuring Economic Growth from Outer Space", AER 102(3), 2012, pp. 994-1028 - https://www.aeaweb.org/articles?id=10.1257/aer.102.3.994 (enlace devolvio 404 al leerlo; referencia citada en [2])
9. NASA Black Marble (producto de luces nocturnas VIIRS) - https://blackmarble.gsfc.nasa.gov/ (403 al leer via Jina Reader, 2026-08-31)
10. CEPR, "When statistics lie: Using satellite data to track Russia's wartime economy" - via Google News RSS, https://cepr.org/ (2026)
11. Business Insider, "Satellite images, tanker tracking, and prediction markets: The data hedge funds are using to invest during a war" - via Google News RSS (2026)
12. Nature, "Eye in outer space: satellite imageries of container ports can predict world stock returns" - via Google News RSS, https://www.nature.com/ (2026)
