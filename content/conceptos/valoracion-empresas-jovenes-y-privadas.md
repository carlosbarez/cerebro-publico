---
title: "Valoración de empresas jóvenes y privadas"
tipo: concepto
tags: [valoracion, start-ups, empresas-privadas, iliquidez, damodaran]
fecha: 2026-07-09
fuentes: ["[[manuales-de-valoracion]]"]
---

# Valoración de empresas jóvenes y privadas

Damodaran (caps. 23 y 24) aborda los dos casos donde **falta lo que el DCF necesita**: historia fiable
(empresas jóvenes) y precio de mercado observable (empresas privadas). Es la frontera donde la valoración se
vuelve más arte que ciencia — y donde el [[margen-de-seguridad]] importa más, no menos.

## Empresas jóvenes / de alto crecimiento

Retos y remedios:
- **Sin historia y con beneficios negativos**: no se puede extrapolar (ver
  [[valoracion-ciclicas-y-beneficios-negativos]]); hay que **construir el futuro desde los ingresos**, no
  desde el beneficio: estimar el tamaño del mercado, la cuota alcanzable, el **margen operativo objetivo** en
  madurez, y trabajar hacia atrás. Usar cifras **actualizadas** (TTM), no el último anual (cambian rapidísimo).
- **Riesgo de supervivencia**: muchas no llegan; el valor debe **ajustarse por la probabilidad de fracaso**
  (*cash-burn ratio*, ver [[valor-terminal]]).
- **Betas y coste de capital que cambian**: empiezan con beta alta (discrecional, alto apalancamiento
  operativo) y **convergen** hacia la media al madurar (ver [[prima-de-riesgo-y-beta]]).
- **Opcionalidad**: parte de su valor es la **opción de expandir** hacia mercados aún inexistentes (ver
  [[opciones-reales]]) — pero es fácil abusar de este argumento para justificar cualquier precio.

Puente con el cerebro: es el terreno que Buffett y [[terry-smith|Terry Smith]] **suelen evitar** (fuera del
[[circulo-de-competencia]]: futuro impredecible, sin retornos probados). Ackman entra a veces vía calidad ya
establecida con opción de mejora, no en *start-ups* puras.

## Empresas privadas

Diferencias que obligan a ajustar:
- **Sin precio de mercado ni beta cotizada**: la beta se estima *bottom-up* de comparables cotizadas. Y si el
  dueño **no está diversificado**, el riesgo relevante no es solo el de mercado sino el **riesgo total** →
  Damodaran usa la *total beta* (beta ÷ correlación con el mercado), que **eleva el coste del equity**. La
  valoración depende de **quién compra** (un comprador diversificado paga más que un particular).
- **Descuento por iliquidez**: no se puede vender la participación en un clic → un **descuento** sobre el valor
  (mayor cuanto más pequeña e ilíquida la empresa).
- **Descuento/prima por persona clave y por control**: dependencia del fundador; y si se vende una participación
  de **control**, vale más que una minoritaria (ver [[adquisiciones-fusiones-y-sinergias]]).
- **Contabilidad más opaca**: mezcla de gastos personales y del negocio; hay que **normalizar** el beneficio
  (ver [[contabilidad-y-calidad-de-beneficios]]).

## La lección de segundo orden

El valor de una empresa **no es un número único**: depende de **quién la posee y para qué** (comprador
diversificado vs. no; con control vs. sin él; con acceso a mercados vs. sin él). Es el mismo principio que
Damodaran repite con el riesgo (ver [[prima-de-riesgo-y-beta]]) y que explica la **prima de control** en las
adquisiciones. Para el inversor particular, la conclusión práctica: en empresas jóvenes/privadas el rango de
valor es ancho → exigir **mucho margen de seguridad** y desconfiar de las valoraciones "de una sola cifra".

## Ampliación (2026-07-22) — el *overhang* de opciones y el filtro de la opcionalidad

Desde [[damodaran-dark-side-of-valuation]] (destilado no verificado). Dos piezas que esta página no tenía:

**1. Opciones a empleados: no es un detalle, es doble dígito.** En una empresa joven o tecnológica, las
opciones y acciones concedidas a empleados son una **reclamación sobre el equity** que hay que restar antes de
dividir por acciones. Damodaran descarta los tres atajos —*fully diluted* (infravalora), ejercicios esperados
(circular), *treasury stock* (ignora el valor temporal)— y exige valorarlas con **modelo de opciones**
(Black-Scholes ajustado a dilución y consolidación):

`Valor por acción = (Valor del equity − Valor de las opciones) ÷ acciones primarias`

Hay circularidad (el precio alimenta el valor de la opción y viceversa) y se resuelve **iterando**. Caso Amazon
(2000): 80,34 M de opciones ≈ **22% de las acciones**, ejercicio $27,76, 9 años, 58% consolidadas, volatilidad
85% → $3,41 B antes de impuestos y **$2,22 B después** → el valor por acción baja de **$38,63 a $32,33**
(≈ −16%). Traducción moderna: la retribución en acciones (*SBC*) de una tecnológica no es un gasto "no
monetario" que se pueda ignorar al normalizar (ver [[contabilidad-y-calidad-de-beneficios]]).

**2. Los tres tests antes de pagar por opcionalidad.** Esta página ya avisa de que "es fácil abusar" del
argumento de la opción de expandir; el filtro concreto del autor es: (a) ¿es la primera inversión
**prerrequisito** de la segunda?; (b) ¿hay **derecho exclusivo** sobre esa expansión?; (c) ¿es **sostenible**
la ventaja? Damodaran aplica el filtro a las puntocom y **las suspende** (no hace falta comprar una puntocom
para participar del comercio electrónico). Donde sí lo acepta: una patente farmacéutica concreta (Avonex de
Biogen: opción $907 M frente a VAN $547 M) y la expansión de Amazon a Latinoamérica (VAN −$200 M + opción
$529 M). Ver [[opciones-reales]].

**Tensión anotada**: [[manuales-de-valoracion]] recoge la regla de "no doble cuenta" (sumar la opción solo si
el DCF base es conservador); en *Dark Side* el propio autor **suma** la opción a DCF con crecimiento ya
agresivo, y no lo reconcilia. Al usar opcionalidad en una tesis, exigirse decir **qué parte del crecimiento no
está ya dentro del DCF**.

## Ver también

- [[damodaran-dark-side-of-valuation]] · [[damodaran-narrative-and-numbers]]
- [[valoracion-ciclicas-y-beneficios-negativos]] · [[opciones-reales]] · [[prima-de-riesgo-y-beta]]
- [[valor-terminal]] · [[margen-de-seguridad]] · [[circulo-de-competencia]] · [[adquisiciones-fusiones-y-sinergias]] · [[manuales-de-valoracion]]
