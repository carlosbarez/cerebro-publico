---
title: "Damodaran — *Narrative and Numbers* (material de clase / libro)"
tipo: fuente
tags: [damodaran, narrativa, valoracion, dcf, expectativas, monte-carlo, ciclo-de-vida]
fecha: 2026-07-22
fuentes: ["[[manuales-de-valoracion]]"]
destilado_por: openrouter
---

# Damodaran — *Narrative and Numbers* (material de clase / libro)

> **Aviso de fiabilidad.** Página escrita desde un destilado automático (OpenRouter) **no verificado contra
> el crudo**. El destilado se lee como material de **clase/presentación** (referencias por número de
> diapositiva, no de página), así que es un fragmento del argumento, no el libro entero. **Ninguna cifra ni
> cita debe sostener una tesis o una decisión sin re-leer el pasaje.** Ver [[reparto-openrouter-claude]].

**Qué es incremental.** El cerebro tiene el aparato de valoración de Damodaran muy cubierto
([[manuales-de-valoracion]], [[flujo-de-caja-descontado]], [[valor-terminal]]). Lo que **no** tenía es el
**método de conexión** entre el relato de una empresa y las filas concretas del modelo — y el
**procedimiento de disciplina** para que ninguna de las dos mitades se vaya sola. Eso es lo único que se
recoge aquí. La tesis en una línea: *toda valoración empieza con una narrativa; el número es la narrativa
traducida, y la traducción tiene que ser auditable en ambos sentidos.*

## El puente en seis pasos

1. **Reconocer el terreno**: cuentas, mercado, competencia, y hablar con usuarios y empleados
   ([[scuttlebutt-y-analisis-cualitativo]]).
2. **Construir la narrativa**. Dos reglas duras: **simple** y **enfocada**. Una narrativa que necesita
   párrafos no se puede falsar.
3. **Someterla al test de las tres P**: *Posible* (podría pasar) → *Plausible* (tiene sentido económico) →
   **Probable** (es el caso base). Se contrasta contra la historia, los primeros principios económicos y el
   sentido común. **Solo lo *Probable* entra en el DCF base**; lo *Posible/Plausible* va a simulación o a
   [[opciones-reales]]. Este filtro es la aportación más útil de la fuente: convierte "me gusta la historia"
   en una clasificación con consecuencias distintas en el modelo.
4. **Mapear narrativa → *drivers***: mercado total × cuota = ingresos − costes = beneficio operativo −
   impuestos = NOPAT − reinversión = flujo de caja, descontado por riesgo operativo y probabilidad de
   fracaso. La regla de lectura inversa, que es la que sirve de checklist: **una ventaja competitiva fuerte y
   sostenible aparece como cuota alta *y* margen alto a la vez; la escalabilidad aparece como reinversión baja
   para el crecimiento dado.** Si tu relato dice "foso" pero el modelo no muestra ninguna de las dos cosas, el
   relato no está en los números. Ver [[foso-economico]] y [[retorno-sobre-capital-empleado]].
5. **Valorar**, con Monte Carlo o opciones reales para la incertidumbre que no cabe en el caso base.
6. ***Feedback loop***: la narrativa se revisa cuando cambian resultados, acciones corporativas, gestión,
   macro o política. Keynes como divisa: *"cuando mi información cambia, cambio mis conclusiones"*.

## La taxonomía del cambio de narrativa (lo que evita el anclaje)

Distinguir **qué tipo** de cambio ha ocurrido antes de tocar el modelo:

- **Ruptura / fin** — la narrativa muere; la valoración anterior es **basura**, no se ajusta, se rehace.
- **Desplazamiento (*shift*)** — la historia sigue, cambian los *drivers*; se retocan crecimiento/márgenes.
- **Cambio de expansión o de contracción** — el mercado direccionable en sí se agranda o se encoge; hay que
  rehacer con otro TAM.

Es el antídoto operativo contra el error que [[annie-duke]] y [[pensamiento-de-segundo-nivel]] describen en
abstracto: revisar el número sin revisar la historia (o al revés). Para el diario de decisiones esto da
un vocabulario: al revisar una tesis, decir **cuál de los tres** cambios ha ocurrido.

## Las ilusiones de cada bando (checklist de sesgo propio)

- **Del lado de los números**: ilusión de **precisión** (más decimales ≠ más verdad), ilusión de **ausencia de
  sesgo** (el modelo hereda el sesgo del modelador), ilusión de **control**. Y tres límites: aburre y no
  convence, ciega ante inconsistencias internas, y crea cámara de eco.
- **Del lado del relato**: creer que creatividad y números se excluyen, que **una buena historia implica un
  buen negocio**, y que la experiencia propia es el mejor maestro (sobrepondera lo raro que uno ha vivido).
  Límites: fantasía, cámara de eco y **ausencia de mecanismo de corrección**.

Para perfil de inversor: Carlos está del lado de los números; el sesgo a vigilar es el primer bloque, no
el segundo — sobre todo la ilusión de precisión en el DCF y la cámara de eco (ver [[circulo-de-competencia]]).

## Ciclo de vida: cuánto pesa cada mitad

*Start-up* y crecimiento temprano = casi todo narrativa · alto crecimiento y madurez temprana = mezcla ·
**madura estable = casi todo números** · declive = narrativa de reinvención o de liquidación. Corolario del
autor: el inversor (y el gestor) debe **moverse con la empresa o delegar la mitad que no domina**. Encaja con
el ciclo de vida de la empresa que ya recoge [[michael-mauboussin]] y con
[[valoracion-empresas-jovenes-y-privadas]].

## Casos trabajados (cifras de época, valor ilustrativo)

| Caso | Narrativa en una línea | Traducción | Resultado |
|---|---|---|---|
| **Amazon** (oct 2014) | Vender a coste o por debajo para ganar poder de mercado | Ingresos 15%→2,2%; margen 0,58%→7,38%; ventas/capital 3,68×; β 1,12; WACC 8,39%→8% | Valor $175 vs precio $287 |
| **Apple** (abr 2013) | Máquina de caja; el móvil se desacelera; el tamaño impide disrumpir | Cuota a la baja; margen 31%→25%; ventas/capital 2,66× | Monte Carlo 100.000 iteraciones: mediana $588, P10 $448, P90 $772 |
| **Twitter** (oct 2013) | Publicidad online $200 B en 2023, cuota 5,7% | Margen →25%; ventas/capital 1,50; WACC 11,12%→8% | $17,84/acción |
| **Uber** (jun 2014) | Taxi/limusina global $100 B creciendo 6%, cuota 10%, *asset-light* | Margen 40%; ventas/capital 5,0; WACC 12%→8%; **10% de probabilidad de fracaso** | Narrativa rival de Bill Gurley: logística + extrarradio + efectos de red globales |

El par **Damodaran vs Gurley sobre Uber** es el ejemplo pedagógico central: **mismo activo, dos narrativas
coherentes, valores muy distintos**. La pregunta útil no es quién tiene razón sino **cuál de las dos es
*Probable*** y qué evidencia la falsaría. Es exactamente el ejercicio del [[consejo-de-voces]].

## Cómo lo usa este cerebro

- En [[comparar-dos-empresas]] y en cualquier ficha de empresa: escribir la narrativa **antes** del modelo y
  etiquetarla *Posible/Plausible/Probable*.
- En decisiones: registrar la narrativa y sus señales falsables; al revisar, nombrar el tipo de cambio
  (ruptura / desplazamiento / expansión-contracción).
- Contrapeso: el filtro de las tres P **no sustituye** al [[margen-de-seguridad]]. Una narrativa *Probable*
  bien traducida sigue siendo una estimación puntual con rango ancho.

## Páginas que actualizó esta ingesta

- [[michael-mauboussin]] — sección fechada 2026-07-22 (el puente narrativa↔expectativas).

## Ver también

[[manuales-de-valoracion]] · [[flujo-de-caja-descontado]] · [[michael-mauboussin]] · [[opciones-reales]] ·
[[valoracion-empresas-jovenes-y-privadas]] · [[foso-economico]] · [[annie-duke]] · decisiones ·
[[scuttlebutt-y-analisis-cualitativo]] · perfil de inversor
