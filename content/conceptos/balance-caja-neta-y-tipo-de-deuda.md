---
title: "Caja neta y tipo de deuda"
tipo: concepto
tags: [balance, deuda, liquidez, lynch, riesgo-de-quiebra]
fecha: 2026-07-20
fuentes: ["[[lynch-un-paso-por-delante]]"]
---

# Caja neta y tipo de deuda

Filtro rápido de solidez de balance, de [[lynch-un-paso-por-delante|Lynch]]. Dos ideas simples y muy
accionables que el corpus tenía implícitas pero no explícitas.

## 1. La caja neta como "suelo" del precio

`caja − deuda a largo plazo = caja neta`. Dividida entre el número de acciones, da un **suelo aproximado**
por debajo del cual el mercado está regalando el negocio operativo. Es la versión ligera y moderna del
**net-net** de Graham (activo circulante neto, ver [[security-analysis-graham-dodd]]): en ambos casos el
balance actúa como [[margen-de-seguridad]] antes de que la cuenta de resultados diga nada.

**El caso canónico**: Ford en 1988 tenía **16,30$ de caja neta por acción** con la acción cotizando a 38$.
Ajustando por esa caja, el negocio de automoción cotizaba a un **PER de 3,1×**. El múltiplo aparente
mentía; el ajustado, no. → [[multiplos-de-valoracion]]

Es especialmente útil en **cíclicas y recuperables**, donde el beneficio del año es poco informativo y el
balance es lo que dice si la empresa llega viva al otro lado del ciclo (la técnica de valoración asociada:
[[valoracion-ciclicas-y-beneficios-negativos]]).

## 2. No toda la deuda es igual

La distinción que Lynch considera decisiva y que casi ningún ratio agregado recoge:

- **Deuda bancaria** — exigible, renovable a discreción del prestamista, puede reclamarse en el peor
  momento. **Es la que mata.**
- **Deuda consolidada / bonos a largo plazo** — no se puede reclamar anticipadamente mientras se paguen los
  intereses. **Da tiempo**, que es exactamente lo que necesita una empresa en dificultades.

Dos empresas con idéntico ratio deuda/EBITDA pueden tener perfiles de supervivencia opuestos según cuál de
las dos tengan. Lo que importa no es solo cuánta deuda, sino **quién puede exigirla y cuándo**.

> "Las empresas sin deuda no pueden quebrar." (p. 209)

## Cómo se combina con el resto del cerebro

- Complementa la **cobertura de intereses** como filtro de
  [[malinversion-y-zombificacion-empresarial|zombificación]]: la cobertura dice si puede pagar; el tipo de
  deuda dice cuánto margen de maniobra tiene si deja de poder.
- Es la contraparte de balance del criterio de [[aversion-al-apalancamiento]] y del umbral de <2,5×
  deuda neta/EBITDA que exige el marco del [[adquirente-serial]].
- Encaja con [[contabilidad-y-calidad-de-beneficios]]: el calendario de vencimientos es información que el
  ratio agregado esconde.

## Aplicación a Carlos

Filtro de primera pasada, barato, antes de cualquier análisis profundo — especialmente en el bloque de
mineras y materias primas, donde el ciclo puede alargarse más de lo previsto y **la supervivencia hasta el
siguiente repunte depende del calendario de vencimientos, no de la tesis de escasez**. Una tesis correcta
sobre el cobre no salva a una empresa que tiene que refinanciar en el peor momento. → cartera actual,
[[materias-primas-y-ciclo-de-commodities]]

## Tensiones

- **"Las empresas sin deuda no pueden quebrar" vs. [[paridad-de-riesgo-y-diversificacion]].** La máxima de
  Lynch es cierta en el plano de la empresa individual; Dalio sostiene en el plano de la cartera que una
  cartera moderadamente apalancada y muy diversificada es *menos* arriesgada que una sin apalancar y sin
  diversificar. No se contradicen si se respetan los planos (balance de una empresa vs. construcción de
  cartera), pero conviene no importar la máxima de Lynch al plano de cartera ni la de Dalio al de empresa —
  la discusión completa en [[aversion-al-apalancamiento]].
- **El filtro no aplica a financieras.** En bancos y aseguradoras la deuda es materia prima, no apalancamiento
  evitable (ver [[valoracion-de-empresas-financieras]] y el tercer polo de [[jamie-dimon]] en
  [[aversion-al-apalancamiento]]): exigir "caja neta" a un banco es exigirle que deje de serlo. El filtro de
  Lynch es para empresas industriales; aplicarlo a JPMorgan daría un falso negativo sistemático.

## Ver también

[[lynch-un-paso-por-delante]] · [[las-seis-categorias-de-lynch]] · [[aversion-al-apalancamiento]] ·
[[contabilidad-y-calidad-de-beneficios]] · [[malinversion-y-zombificacion-empresarial]] ·
[[multiplos-de-valoracion]] · [[fondo-de-maniobra-y-ciclo-de-caja]] · [[adquirente-serial]] ·
[[security-analysis-graham-dodd]] · [[margen-de-seguridad]] · [[valoracion-ciclicas-y-beneficios-negativos]] ·
[[valoracion-de-empresas-financieras]]
