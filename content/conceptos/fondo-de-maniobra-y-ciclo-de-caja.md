---
title: "Fondo de maniobra y ciclo de caja"
tipo: concepto
tags: [liquidez, fondo-de-maniobra, ciclo-de-caja, working-capital, amat, solvencia]
fecha: 2026-07-11
fuentes: ["[[analisis-integral-de-empresas-amat]]"]
---

# Fondo de maniobra y ciclo de caja

De momento documentado solo vía **Oriol Amat** (*Análisis integral de empresas* — ver
[[analisis-integral-de-empresas-amat]]); pendiente contrastar con Damodaran/McKinsey, que tratan la liquidez de
forma mucho más ligera. Es la pieza de **solvencia a corto plazo** que faltaba en el cerebro: el resto del
corpus (Buffett, Marks, Smith) habla de balances sólidos en prosa, pero ninguna fuente anterior había dado la
mecánica exacta de *por qué* un balance puede quebrar aunque el negocio sea rentable.

## Qué es el fondo de maniobra

**Fondo de maniobra (FM) = Activo corriente − Pasivo corriente.** Es el colchón de activos líquidos que sobra
una vez pagadas todas las deudas a corto plazo. La regla general es que debe ser **positivo**, por dos razones:

1. Una parte del activo corriente (el stock de seguridad, el saldo mínimo de tesorería) es, en la práctica, una
   inversión a largo plazo y debería financiarse con recursos permanentes (patrimonio neto + deuda no
   corriente), no con pasivo corriente.
2. El pasivo corriente vence con certeza antes de un año; el activo corriente **no** se cobra con la misma
   certeza (existencias que no se venden, clientes morosos).

Si el fondo de maniobra es negativo, parte del activo no corriente está financiado con pasivo corriente — lo que
**eleva el riesgo de insolvencia a corto plazo** (ver el modelo de Beaver/Altman en
[[contabilidad-y-calidad-de-beneficios]], que usa ratios de esta misma familia para predecir quiebras).

## La excepción que confirma la regla: sectores con ciclo de caja negativo

En sectores donde el plazo de existencias y de cobro a clientes es muy corto (supermercados, restauración
rápida), es **normal y sano** operar con fondo de maniobra negativo: los proveedores financian gratis el
circulante porque se les paga más tarde de lo que se cobra a los clientes. El caso de Supermercados Caprabo (cap.
5 de Amat) lo ilustra: liquidez reducida y FM negativo, pero **superávit** de fondo de maniobra una vez
calculadas las necesidades reales — sin problema de solvencia. La lectura correcta nunca es "FM negativo = mal",
sino comparar el FM real con las **necesidades** de fondo de maniobra (ver abajo).

## Ciclo de maduración y ciclo de caja

- **Ciclo de maduración**: días desde que se compra la materia prima hasta que se cobra al cliente (compra →
  producción → almacenaje → venta → cobro). Cuanto más corto, menores las necesidades financieras. Empresas
  comerciales (supermercados): pocos días. Empresas industriales: varios meses.
- **Ciclo de caja** = ciclo de maduración − plazo de pago a proveedores. Es la parte del ciclo de explotación que
  la empresa realmente tiene que financiar con recursos propios o ajenos, porque el resto ya lo financian los
  proveedores de forma automática y gratuita.

Cuando el ciclo de caja es muy favorable (negativo, como en muchos supermercados), **crecer genera excedentes de
liquidez** en vez de consumirlos — justo lo contrario de lo que le pasa a una empresa industrial en expansión.

## Necesidades de fondo de maniobra vs. fondo de maniobra real

Dos cifras distintas que hay que comparar siempre juntas:

- **Fondo de maniobra real (o "aparente")**: el que sale directamente del balance (activo corriente − pasivo
  corriente).
- **Necesidades de fondo de maniobra**: lo que la explotación realmente necesita financiar — activo corriente
  *de explotación* (existencias, clientes, disponible mínimo necesario, que suele rondar el 10-15% del pasivo
  corriente) menos pasivo corriente *de explotación* (proveedores, deudas por impuestos y Seguridad Social).
  Excluye partidas no ligadas a la explotación típica (inversiones financieras temporales, préstamos bancarios a
  corto).

**Superávit** de fondo de maniobra = FM real > FM necesario → sobrante de liquidez (vigilar que no sea un exceso
improductivo de activo corriente). **Déficit** = FM real < FM necesario → hace falta financiación adicional a
largo plazo (ampliar capital, convertir deuda corto → largo plazo) o mejorar los plazos de cobro/pago. Un déficit
no es necesariamente peligroso si los bancos lo financian de forma sostenida y barata; lo es cuando se financia
con exceso de deuda a corto plazo y coste creciente.

## El caso de manual de un déficit crónico: Brighton

El caso Brighton (cap. 5) es el contraejemplo didáctico: una cadena de academias de idiomas financió toda su
expansión con deuda a corto plazo. Ya con los datos del año 3 (dos años antes de la quiebra) los ratios de
liquidez y endeudamiento eran comparables a los de empresas que habían quebrado. El diagnóstico ex post es
mecánico: el déficit de fondo de maniobra + gastos financieros crecientes + capacidad de devolución reducida es
la combinación que precede a una suspensión de pagos. La receta que no se aplicó a tiempo: ampliar capital y
convertir deuda corto → largo plazo para que la financiación se ajuste al plazo real de las inversiones.

## Ver también

- [[contabilidad-y-calidad-de-beneficios]] (modelos de predicción de insolvencia: Beaver, Altman Z, Argenti)
- [[analisis-integral-de-empresas-amat]] · [[margen-de-seguridad]] · [[aversion-al-apalancamiento]]
- [[retorno-sobre-capital-empleado]] · [[screening-de-calidad]]
