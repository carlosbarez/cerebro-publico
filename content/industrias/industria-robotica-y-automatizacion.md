---
title: "Industria: robótica y automatización industrial"
tipo: industria
tags: [industria, robotica, automatizacion, china, humanoides, reshoring, ciclicos-fabriles]
fecha: 2026-08-25
agente: cartografo-industrias
---

# Industria: robótica y automatización industrial

Economía industrial del sector, hermana de [[industria-electrificacion-automatizacion]] (eléctrica/energía de
planta) y conectada al ciclo fabril global vía [[ciclo-de-capex]] y [[super-ciclos-y-regimenes-estructurales]].
Fichas relacionadas en el vault: [[abb-ltd]], [[siemens]], [[schneider-electric]], [[caterpillar]],
[[intuitive-surgical]], [[keyence]]. Pendientes de ficha citadas aquí: fanuc, yaskawa electric,
teradyne (dueña de Universal Robots), [[rockwell-automation]], mitsubishi heavy industries.

## La economía base: robots industriales, un negocio cíclico con capa de servicio

La unidad de medida del sector es la **instalación anual** y la **densidad** (robots por 10.000 empleados
industriales), que publica la IFR (*International Federation of Robotics*). Datos verificados (IFR):

| Indicador | Dato | Fuente |
|---|---|---|
| Instalaciones EE.UU. 2025 | 38.000 unidades (+11% a/a); automoción 13.500; alimentación +30% (~3.000) | IFR preliminary results, 18-jun-2026 |
| Cuota china de instalaciones mundiales | **54%** (295.000 unidades instaladas en China en 2024); stock ~2 mm de unidades = **4,5x Japón** | IFR World Robotics 2025 / press release 05-may-2026 |
| Densidad media mundial | 132 robots/10k empleados (UE-27: 231; Europa occidental: 267 récord) | IFR, 08-abr-2026 |
| Densidades líderes | Corea 1.220 · Singapur 770 · Alemania 449 · Japón 446 · EE.UU. 307 · **China 166** (+17%) | IFR, 08-abr y 18-jun-2026 |

La estructura económica por eslabón:

1. **Fabricantes de robots ( brazos articulados)** — fanuc, yaskawa electric, ABB Robotics,
   KUKA (propiedad de Midea): negocio CÍCLICO ligado a capex fabril (automoción + electrónica son ~2/3 de la
   demanda), márgenes medios (Damodaran ene-2026, sector Machinery: margen neto medio 10,6%, operativo pre-SBC
   16,8%, beta desapalancada 0,87) y capa creciente de servicio/aftermarket.
2. **Componentes y «toll booths»** — reductores, servos, visión y sensores: aquí vive [[keyence]]
   (sensores/visión con márgenes de software sin serlo) y los proveedores chinos de componentes que están
   desplazando a japoneses/alemanes desde abajo.
3. **Integradores e ingeniería** — margin thin, proyecto a proyecto; capturan el reshoring pero con poco foso.
4. **Automatización de fábrica completa** — [[siemens]], [[rockwell-automation]], [[abb-ltd]]: venden el stack
   completo (PLC+software+servicio), lo que convierte el ciclo en cuota de plataforma.

## El dato incómodo de segundo orden: la estadística china se movió bajo nuestros pies

El titular repetido durante 2024 fue que «China superó a Alemania y Japón en densidad robótica» (IFR, nov-2024:
China 3ª mundial, empatada con Alemania/Japón). Con los nuevos datos laborales de la Oficina Nacional de
Estadística china, **la IFR recalculó toda la serie**: la densidad china real es **166 robots/10k (puesto 22
mundial)** frente a Alemania 449 — y la densidad media mundial bajó de 162 a 132 por pura revisión de denominador
(IFR, 08-abr-2026 vs 20-nov-2024). Implicaciones:

- Lo que NO cambia: China instala el 54% de los robots del mundo y su stock es el mayor con diferencia. La
  robotización china es real; lo que se revisó es el ritmo relativo.
- Lección metodológica para el wiki: los KPIs «de ratio» dependen de denominadores administrativos que los
  gobiernos revisan; citar siempre serie + fecha + fuente primaria ([[pensamiento-de-segundo-nivel]] aplicado a
  los propios datos).
- Donde sí choca con otras fuentes: la narrativa «China ya automatizada como Corea» (usada para justificar salarios
  chinos al alza sostenibles) queda debilitada; la ventaja china sigue siendo VOLUMEN + política industrial, no
  saturación.

## Política industrial: la China del «playbook EV» aplicada a robots

- El **15º Plan Quinquenal chino coloca la robótica con IA («inteligencia incorporada») en el núcleo del sistema
  industrial**, con miles de planes subordinados alineados (IFR, 05-may-2026). Rest of World lo describió como el
  «playbook del vehículo eléctrico» replicado en humanoides (05-feb-2026): subsidio + competencia interna brutal +
  exportación a precio agresivo.
- **Humanoides: la brecha entre demo y fábrica.** Tesla demolió la línea de Model S/X en 46 días para montar
  Optimus (Yahoo Finance, 10-jul-2026) y dice que Optimus «se venderá en 2027» (Electrek, 20-ago); JPMorgan ya
  anticipa nuevo retraso (IBD, 20-ago). Figure levantó $700M en may-2026 (Business Insider). La propia IFR —fuente
  nada escéptica— advierte que las capacidades humanoides reales «están limitadas a demostradores o pilotos»
  (05-may-2026).
- **El evento de precios de agosto-2026**: Unitree (líder chino de humanoides) salió a bolsa en Shanghai STAR Market
  el 19-ago, subió hasta un valor de ~$66 mm en el debut (Fortune/SCMP) y **ya acumula una caída del ~45% desde el
  máximo** con el mercado discutiendo burbuja (The Economic Times, 25-ago-2026 — hoy). XPeng Robotics levantó
  >$900M a valoración de $6,3 mm (eletric-vehicles.com, 24-ago). Dispersión de valoraciones de 10x dentro del
  mismo concepto = mercado fijando precio a ciegas.

## ¿Robotización = margen para el fabricante o guerra de precios china?

Cadena causal completa:

1. Reshoring y escasez laboral estructural (envejecimiento; ver [[demografia-y-mercados]] y
   [[economia-de-activos-vs-salarios]]) → demanda de automatización crece incluso sin ciclo (EE.UU. +11% en 2025
   con automoción PLANA: el crecimiento vino de alimentos/no-manufactura — IFR 18-jun-2026).
2. Pero el OFERENTE marginal ya no es Fanuc/Yaskawa: los fabricantes chinos (Estun, Inovance, Efort…) producen
   robots básicos 20-30% más baratos y el 15º Plan les da escala doméstica cautiva. Primera señal de tensión:
   **Yaskawa se hundió con caída del 19% en beneficio operacional Q1 FY26, muy por debajo de estimaciones**
   (finance.biggo/prensa financiera japonesa, 13-jul-2026), mientras Fanuc «roars back» solo en nichos premium
   (Seeking Alpha, 17-feb-2026).
3. Segundo orden: el fabricante japonés/occidental responde subiendo la barra tecnológica (IA embarcada, visión,
   servicio predictivo) — el margen migra del HIERRO al SOFTWARE+SERVICIO. Por eso [[keyence]] (sensores/visión)
   y el negocio de servicio de [[abb-ltd]] importan más que el número de brazos vendidos. El hierro se
   comoditiza; el dato de planta no.
4. Tercer orden: si China estandariza humanoides baratos como estandarizó coches eléctricos, el coste de
   automatización cae en todo el mundo → deflación de coste fabril para TODOS los industriales (bueno para quien
   USA robots —[[caterpillar]], [[deere]]—, malo para quien los FABRICA). Robotizar deja de ser ventaja y pasa a
   ser condición de supervivencia: el beneficio se transfiere al consumidor final, no al capital.

## Empresas jugables (precios verificados Yahoo Finance, cierre 25-ago-2026)

| Empresa | Precio | Var. 1 año | Rol en la tesis |
|---|---|---|---|
| [[keyence]] | ¥82.250 | +43,5% | Toll booth de sensores/visión; margen estructural |
| yaskawa electric | ¥4.966 | +61,6% | Ciclo puro de robots; margen bajo presión china |
| fanuc | ¥6.047 | +36,6% | Líder histórico; premium en CNC+robots, servicio |
| [[abb-ltd]] | ADR $99,16 | +48,8% | Plataforma completa (robots+electrificación+servicio) |
| teradyne | $367,26 | +213,7% | Universal Robots (cobots) + test semis: doble exposición IA-fábrica |

> [Sin verificar] 2026-08-25, verificador-fuentes

[Sin datos: múltiplos PER/EV-EBITDA actuales de Fanuc/Yaskawa/Keyence — pendiente de verificación antes de
cualquier comparación de valoración].

## Método de valoración que dicta el sector

1. **Negocio de ciclo, no de growth**: valorar sobre margen operativo NORMALIZADO del ciclo, no sobre el pico
   ([[valoracion-ciclicas-y-beneficios-negativos]], [[reversion-a-la-media]]). El error clásico: anclar el múltiplo
   sobre beneficios de pico de automoción/electrónica.
2. **Separar hierro de recurrencia**: múltiplo de fabricante (8-14x earnings normativos históricos del grupo
   Machinery) para ventas de robots; múltiplo de software/servicio para la parte recurrente (Keyence, servicio ABB).
   Damodaran (ene-2026): Machinery beta 0,96 vs Software System&App 1,28 — mezclar ambos sin ponderar infla el
   valor.
3. **Backlog/book-to-bill** como indicador adelantado (mismo método que [[industria-defensa-europea]] usa para
   defensa: pedido convertible en margen, no backlog bruto).
4. Para humanoides NO hay método: son opciones reales ([[opciones-reales]]) — valorarlas como opciones (probabilidad
   x payoff x dilución futura), nunca sumando TAM soñado.

## Señales falsables (umbral + horizonte)

- Si las instalaciones mundiales 2026 (IFR World Robotics 2026, publicado ~sep-2026) caen por debajo de 2025 →
  primer descenso anual del ciclo post-COVID; horizonte 6 meses. Confirmaría giro de capex fabril.
- Si el margen operacional de Yaskawa o Fanuc cae <10% dos trimestres consecutivos → guerra de precios china
  ganando el centro de gama; horizonte 12 meses (próximos resultados interinos).
- Si Optimus no alcanza producción en línea (>100 unidades/semana verificables) antes de jun-2027 → tercera
  promesa incumplida del humanoide-Tesla; la prima narrativa de todo el sub-sector humanoide se comprime.
- Si Unitree cierra 2026 por debajo de la mitad de su valoración de debut Y XPeng/Figure recortan valoraciones →
  ciclo de financiación humanoide girado; los IPOs posteriores se cancelan (señal de saneamiento saludable).

## Implicaciones para la cartera (largo plazo)

- La tesis durable NO es «vender más robots»: es **el coste de automatización cayendo permanentemente** (China +
  IA + humanoides-eventualmente). Segundo orden para el resto del vault: favorece industriales que USAN
  automatización para defender margen ([[caterpillar]], [[deere]], mineras de [[mineria-industrial-y-energia]])
  y penaliza mano de obra intensiva sin escala.
- Dentro del sector, preferir toll booths (sensores, visión, servicio) sobre fabricantes de volumen expuestos al
  precio chino; esperar ciclos para entrar en los cíclicos puros ([[ciclos-de-mercado]]). Decisión final: Carlos.

## Tensiones abiertas y marcas

- [Sin datos: cifras oficiales de pedidos/ventas FY26 de Fanuc y Yaskawa completas — solo titulares de prensa
  verificados; falta IR primaria].
- [Sin datos: cuota de mercado exacta de fabricantes chinos de brazos robóticos (Estun etc.) — prensa fragmentada].
- Choque de fuentes documentado arriba (densidad china 470→166 por revisión IFR) — mantener ambas versiones
  fechadas, no «corregir» silenciosamente.

## LECTURA (no orden)

- [[industria-electrificacion-automatizacion]] — la otra cara de la fábrica (energía, distribución, control).
- [[industria-semiconductores-ciclo-ia]] — el cerebro que estos robots consumen.
- [[productividad-y-prosperidad]] — marco macro de por qué la robotización no destruye empleo agregado pero
  redistribuye capital.

## Fuentes

- IFR (08-abr-2026): densidad media mundial revisada a 132 robots/10.000 empleados; China 166 (puesto 22º mundial, +17% y/y) tras revisión de datos laborales del NBS chino; UE-27 231; EE.UU. 307 (puesto 8º): https://ifr.org/ifr-press-releases/news/robot-density-surges-in-europe-asia-and-americas — consultado 2026-08-25
- IFR resultados preliminares EE.UU. 2025 (18-jun): instalaciones rebotan a crecimiento de doble dígito tiradas por alimentación (+30%) (Engineering.com/The Robot Report/Manufacturing Dive, 18-26-jun-2026): https://news.google.com/rss/search?q=IFR%20US%20robot%20installations%20rebound%20food%20sector%20drives%20growth&hl=en-US&gl=US&ceid=US:en — consultado 2026-08-25
- Unitree debuta en el STAR Market el 19-ago-2026: +460%/+542% intradía, valoración ~$50B; luego cae y Reuters habla de temores de burbuja (CNBC/Guardian/Yahoo Finance 19-ago; Tech Times 21-ago; Reuters 25-ago): https://news.google.com/rss/search?q=Unitree%20IPO%20Shanghai%20debut%20surge%20bubble%20fears%20Reuters&hl=en-US&gl=US&ceid=US:en — consultado 2026-08-25
- Yaskawa Q1 FY26: beneficio operacional -19%, muy por debajo de estimaciones, y limit down (finance.biggo, 13-jul-2026): https://news.google.com/rss/search?q=Yaskawa%20operating%20profit%20falls%2019%20percent%20limit%20down%20Q1&hl=en-US&gl=US&ceid=US:en — consultado 2026-08-25
- Cotizaciones 25-ago-2026 citadas y corroboradas vía API Yahoo Finance (Yaskawa ¥4.966 y Fanuc ¥6.047 EXACTAS; ABBNY 99,20; TER 366,43): https://finance.yahoo.com/quote/6506.T/ — consultado 2026-08-25
