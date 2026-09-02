---
title: "Opciones reales"
tipo: concepto
tags: [valoracion, opciones-reales, flexibilidad, distress, damodaran]
fecha: 2026-07-09
fuentes: ["[[manuales-de-valoracion]]"]
---

# Opciones reales

La extensión del [[flujo-de-caja-descontado]] que captura lo que un DCF estático **se deja fuera**: el
valor de la **flexibilidad**. Damodaran (caps. 5, 28-30) argumenta que muchos activos llevan **opciones
incrustadas** que el valor presente de los flujos esperados infravalora — porque una opción vale más cuando hay
**incertidumbre**, no menos.

## La idea

Un DCF tradicional acepta un proyecto solo si su VAN es positivo *hoy*. Pero si el valor futuro es **volátil**
y la empresa tiene el **derecho exclusivo** (barrera de entrada) a invertir más tarde, esperar tiene valor: un
proyecto con VAN negativo hoy puede tener VAN positivo mañana. Ese perfil —pérdida limitada a lo invertido,
ganancia abierta— es el de una **opción de compra** (*call*). La flexibilidad vale **más cuanto mayor es la
incertidumbre y más exclusiva es la oportunidad**; se erosiona cuando caen las barreras de entrada.

## Los tres tipos

1. **Opción de esperar** (*option to delay*): terreno sin desarrollar, una **patente** (derecho exclusivo a
   producir → *call* sobre el producto), reservas de materias primas sin explotar (desarrollar cuando el precio
   sube). El *strike* es la inversión; la vida de la opción, el periodo de exclusividad.
2. **Opción de expandir** (*growth option*): una inversión pequeña hoy que **abre la puerta** a otras mayores
   (entrar en un mercado, un producto plataforma). Justifica pagar por empresas jóvenes cuyo DCF base no cuadra
   (ver [[valoracion-empresas-jovenes-y-privadas]]).
3. **Opción de abandonar** (*put*): poder cortar pérdidas y liquidar añade valor y reduce el riesgo a la baja.

## El caso más potente: el *equity* como opción de compra

En una empresa **muy apalancada o en distress**, el patrimonio de los accionistas equivale a una **opción de
compra sobre el valor de los activos**, con *strike* igual al valor nominal de la deuda: si los activos valen
más que la deuda, el accionista se queda el resto; si valen menos, "no ejerce" (responsabilidad limitada) y
pierde solo su inversión. Por eso el *equity* de una empresa al borde de la quiebra puede tener **valor
positivo aunque el DCF sea negativo** (hay tiempo y volatilidad). Se valora con Black-Scholes usando el valor
de los activos como subyacente. Enlaza con [[valoracion-ciclicas-y-beneficios-negativos]] y con el ajuste por
probabilidad de impago del [[valor-terminal]].

## Puentes y cautelas para el cerebro

- **Buffett y las opciones**: Berkshire vendió *equity index puts* y usó Black-Scholes con escepticismo (lo
  critica por asumir volatilidad constante y horizontes cortos) — ver [[derivados-armas-de-destruccion-masiva]].
  El cerebro valora las opciones reales como **marco conceptual** (dónde hay flexibilidad y exclusividad), no
  como una fórmula a la que fiarse ciegamente.
- **Ackman y la asimetría**: comprar calidad en el bache (foso intacto, precio hundido) o cubrir con derivados
  baratos (hedge del COVID) es *comprar opcionalidad con pérdida limitada y ganancia abierta* — opciones
  reales/financieras en la práctica (ver [[carteras-concentradas]] y [[precio-vs-cotizacion]]).
- **El foso como fuente de opcionalidad**: solo la **exclusividad** (patente, marca, red, escala) hace valiosa
  la opción de esperar/expandir; sin barreras de entrada, la competencia se lleva el valor de la flexibilidad
  (ver [[foso-economico]]).
- **Cautela**: es fácil abusar de las opciones reales para "justificar" cualquier precio. La disciplina del
  [[margen-de-seguridad]] sigue mandando.

## Ver también

- [[flujo-de-caja-descontado]] · [[valoracion-empresas-jovenes-y-privadas]] · [[valoracion-ciclicas-y-beneficios-negativos]]
- [[foso-economico]] · [[derivados-armas-de-destruccion-masiva]] · [[margen-de-seguridad]] · [[manuales-de-valoracion]]


---
- [[asimetria-informacion]] · [[complejidad-mercados-adaptativos]] · [[concepto-foso-economico]] · [[concepto-ventaja-competitiva]] · [[inversion-segundo-orden]] · [[modelos-mentales-ecologia]] · [[sesgos-conductuales-catalogo]] · [[tasa-descuento-intrinseco]] · [[tendencia-medianil]] · [[teoria-juegos-inversion]]

## Nota de evolucion 2026-08-30 (elisa)

Asenso a pagina durable del wiki tras revision de la CIO. La sonde de origen (scratchpad/sondas-2026-08-30/opciones-reales.md) se valido: estructura completa de 9 secciones, seccion de segundo orden presente y >=6 fuentes reales. No se reescribio ninguna afirmacion previa. Trailer de commit: Agente: elisa.


## Nota de evolución 2026-08-31 (cerebro-enlaza)

Enlace de la hornada durable 2026-08-30 en red neuronal interna (sección «Ver también»). Trailer: Agente: cerebro-enlaza.
