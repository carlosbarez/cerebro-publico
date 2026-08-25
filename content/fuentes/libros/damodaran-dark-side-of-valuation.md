---
title: "Damodaran — *The Dark Side of Valuation*"
tipo: fuente
tags: [damodaran, valoracion, tecnologia, alto-crecimiento, opciones-reales, multiplos, expectativas]
fecha: 2026-07-22
fuentes: ["[[manuales-de-valoracion]]"]
destilado_por: openrouter
---

# Damodaran — *The Dark Side of Valuation*

> **Aviso de fiabilidad.** Página escrita desde un destilado automático (OpenRouter, 3 fragmentos) **no
> verificado contra el PDF original**. Las cifras y citas de abajo sirven para orientar y para saber dónde
> mirar; **ninguna debe sostener una tesis ni una decisión sin re-leer el pasaje** en `raw/`. Ver
> [[reparto-openrouter-claude]].

**Qué es y qué NO es incremental.** El grueso teórico de este libro (DCF, beta *bottom-up*, valor terminal,
rating sintético, PEG, EVA/CFROI, prima país *blended*) **ya está en el cerebro** vía
[[manuales-de-valoracion]] — es el mismo autor y en buena parte el mismo aparato. Lo que este libro añade y
que el cerebro no tenía es lo de abajo: es un **manual de campo para valorar lo que no se deja valorar**
(pre-beneficios, pre-historia, sin comparables), escrito desde la burbuja de 1999-2000 y con **cinco casos
trabajados de punta a punta** que funcionan como set de calibración.

## Lo incremental (1): la secuencia para empresas que pierden dinero

Cuando el ROIC no es medible (beneficio negativo), `g = Reinversión × ROIC` no sirve. Damodaran sustituye la
identidad por una **cadena de cuatro estimaciones encadenadas** que sí se puede auditar:

1. **Ingresos** — proyectar crecimiento de ventas decreciente con el tamaño (no del beneficio).
2. **Margen objetivo** en madurez — el **de la industria**, no el de la empresa (la competencia erosiona la
   ventaja); ver [[benchmarks-sectoriales]] para la tasa base sectorial.
3. **Ratio ventas/capital** (*sales-to-capital*) → reinversión = ΔVentas ÷ (Ventas/Capital). Es el truco
   central: la reinversión se deduce del crecimiento de ventas, no del beneficio inexistente.
4. **Control de consistencia**: el ROIC implícito año a año debe **converger** hacia la media de industria o
   el WACC. Si no converge, el modelo se está inventando una empresa que no existe.

Esto complementa —no sustituye— lo que ya dice [[estimacion-del-crecimiento]] y
[[valoracion-empresas-jovenes-y-privadas]]: aquella página dice "construir desde los ingresos"; ésta da la
mecánica exacta con el ratio ventas/capital como bisagra.

**Segundo componente del crecimiento (ROIC cambiante)**: `g = ROIC_t × Reinversión + (ROIC_t − ROIC_{t−1}) /
ROIC_{t−1}`. El segundo sumando es crecimiento por **eficiencia** (mejorar el retorno del capital *ya*
invertido), no por reinversión. Caso Motorola: g = 13,63% con mejora de ROIC frente a ~6% sin ella. Ojo: es
crecimiento que **se agota** cuando el ROIC llega a destino.

## Lo incremental (2): el *overhang* de opciones a empleados

Pieza ausente del cerebro y muy viva hoy (SBC en tecnología). Damodaran descarta los tres atajos habituales
—*fully diluted* (infravalora), ejercicios esperados (circular), *treasury stock* (ignora el valor temporal)—
y exige **valorar las opciones con modelo de opciones** (Black-Scholes adaptado a dilución y *vesting*),
restarlas del valor del *equity* y dividir entre las acciones **primarias**:

`Valor/acción = (Valor del equity − Valor de las opciones) / acciones primarias`

Hay circularidad (el precio alimenta el valor de la opción y viceversa) y se resuelve **iterando** hasta
converger. Caso Amazon (2000): 80,34 M de opciones ≈ **22% de las acciones**, precio de ejercicio $27,76,
9 años, 58% consolidadas, volatilidad 85% → valor $3,41 B antes de impuestos, **$2,22 B después** → el valor
por acción cae de **$38,63 a $32,33** (≈ −16%). La lección operativa: en una tecnológica, ignorar el
*overhang* es un error de doble dígito porcentual, no un detalle.

## Lo incremental (3): múltiplos sectoriales y la matriz margen↔múltiplo

- Los múltiplos "de sector" (valor/suscriptor, valor/cliente, valor/visitante) **no son métricas autónomas**:
  son un DCF por unidad. GOL (ISP): 1 M de suscriptores, $100/año de flujo, WACC 15% → **$228 por
  suscriptor** sin crecimiento; añadiendo 100 k/año durante 10 años a $100 de coste de adquisición sube a
  **$302**. Yahoo $1,34 · Excite $0,26 · Lycos $0,92 por visitante — la dispersión es la prueba de que la
  "métrica" solo traduce supuestos.
- **Matriz de desajuste** (útil como filtro rápido, complementa [[multiplos-de-valoracion]]): margen alto +
  P/V alto = coherente; **margen alto + P/V bajo = candidato a infravalorado**; **margen bajo + P/V alto =
  candidato a sobrevalorado**. Con tres avisos: usa márgenes históricos, no esperados; supone linealidad; e
  ignora el riesgo.
- Regresiones cruzadas de julio 2000 (dato de época, no aplicable hoy): Amazon P/V predicho 18,3 vs real 6,7
  (infravalorado); Ariba predicho 33 vs real 248; Cisco predicho 11,1 vs real 27,8.

## Lo incremental (4): los tres tests de las opciones reales

Filtro anti-narrativa para no pagar prima por opcionalidad inventada: (1) ¿es la primera inversión un
**prerrequisito** de la segunda?; (2) ¿tiene la empresa **derecho exclusivo** a esa expansión?; (3) ¿es
**sostenible** la ventaja? Damodaran aplica su propio filtro y **rechaza** justificar las puntocom con
opciones reales ("no hace falta comprar una puntocom para participar del comercio electrónico"). Casos donde
sí lo acepta: patente de Avonex/Biogen (opción $907 M vs VAN $547 M) y expansión de Amazon a Latinoamérica
(VAN −$200 M + opción $529 M = +$329 M). Ver [[opciones-reales]].

## Lo incremental (5): el epílogo, que es el puente con Mauboussin

*"El riesgo es siempre relativo a las expectativas... las buenas empresas no siempre son buenas
inversiones"* (cap. 13). Es, palabra por palabra, la tesis de [[michael-mauboussin]] (*expectations
investing*) formulada por el lado de la valoración. Y el reconocimiento explícito de que **el ruido en la
valoración de tecnología no invalida el modelo**: refleja incertidumbre real. Recetas de cierre: diversificar,
centrarse en márgenes sostenibles y en la supervivencia, y aceptar equivocarse espectacularmente a veces.

## Tensiones a anotar (no resueltas)

1. **ROIC estable ≠ WACC.** Damodaran **rechaza** forzar ROIC = WACC en el régimen estable ("es difícil
   asumir que las empresas pierdan de golpe la capacidad de obtener retornos en exceso") y usa **medias de
   industria** como compromiso. Esto
   matiza el *fade factor* de CFROI que [[manuales-de-valoracion]] recoge como convergencia hacia el coste de
   capital: la teoría dice converger, la práctica del propio autor dice converger **a la industria**, no al
   WACC. Consecuencia: el valor terminal deja de ser invariante a `g` y vuelve a ser sensible.
   > [!warning] Corregido tras verificación contra el crudo (2026-07-22)
   > El destilado listaba aquí "medias de industria: Amazon 16,94% · Cisco 16,52% · **Motorola 17,22% · Ariba
   > 20% · Rediff 25%**". Solo las dos primeras lo son. Las otras tres son el **ROIC objetivo de la propia
   > empresa**, no de su industria — y las medias reales de industria que da el libro son muy superiores:
   > **Motorola 22,27% · Ariba 23,96% · Rediff 35,25%**. Confundirlas invierte el argumento: no es que
   > converjan a la industria, es que el autor las hace converger **por debajo** de ella. Cifras eliminadas de
   > la frase; la tesis (converge a industria, no a WACC) sí se sostiene en el crudo.
2. **Sumar la opción al DCF.** [[manuales-de-valoracion]] recoge la "regla de no doble cuenta" (la opción se
   suma solo si el DCF base es conservador). Aquí Damodaran **suma** $529 M a Amazon y $155 M a Rediff sobre
   DCF que ya incorporan crecimiento agresivo. No lo reconcilia. Señal, no ruido: al usar opciones reales en
   una tesis, exigirse explicitar qué parte del crecimiento **no** está ya en el DCF.

## Casos trabajados (referencia rápida; cifras de 1999-2000, valor histórico)

> [!warning] ⚠️ en la fila de Motorola — corregido tras verificación (2026-07-22)
> El destilado daba "FCFF +$2.249 M". Ese número **no aparece en ninguna parte del PDF**: es el único caso
> detectado hasta ahora en que el modelo `:free` produjo una cifra inexistente, no solo mal etiquetada.
> Sustituido por la serie real de la Tabla 6.11. Un muestreo aleatorio de 6 cifras de esta página dio **2
> problemas (~33% de tasa de error)**, muy por encima del ~0% de las otras fuentes verificadas hoy: **este
> destilado concreto es el menos fiable del lote**. Trátese como orientación, nunca como insumo.

| Empresa | Etapa | Coste equity | WACC | Nota |
|---|---|---|---|---|
| Motorola | Madura | 10,81% | 10,39% | FCFF años 1-5: $1.661/$1.888/$2.145/$2.438/$2.770 M (VA acumulado $7.980 M); ROIC 12,18% → 17,22% ⚠️ |
| Cisco | Alto crecimiento | 11,72% | 11,71% | Reinversión 106,8%; ROIC 34,07%; FCFF −$106 M |
| Amazon | Expansión | 12,94% | 12,56% | Margen −16,27% → 9,32%; ventas/capital 3,02 |
| Ariba | Inicio→expansión | 13,12% | 13,11% | Margen −160% → 16,36%; ventas/capital 2,50 |
| Rediff.com | *Start-up* (India) | 25,82% | 25,82% | Prima país India +6,43%; margen −113% → 40% |

## Páginas que actualizó esta ingesta

- [[valoracion-ciclicas-y-beneficios-negativos]] — sección fechada 2026-07-22 (mecánica ventas/capital).
- [[valoracion-empresas-jovenes-y-privadas]] — sección fechada 2026-07-22 (*overhang* de opciones, tests).

## Ver también

[[manuales-de-valoracion]] · [[flujo-de-caja-descontado]] · [[valor-terminal]] · [[opciones-reales]] ·
[[multiplos-de-valoracion]] · [[estimacion-del-crecimiento]] · [[prima-de-riesgo-y-beta]] ·
[[capitalizacion-de-id-y-activos-intangibles]] · [[michael-mauboussin]] · [[margen-de-seguridad]]
