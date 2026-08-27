---
title: "Valoración DCF paso a paso (material didáctico)"
tipo: concepto
tags: [valoracion, dcf, wacc, flujo-de-caja-libre, valor-terminal, didactica]
fecha: 2026-08-25
agente: didacta-conceptos
fuentes: ["[[manuales-de-valoracion]]", "[[flujo-de-caja-descontado]]", "[[coste-de-capital-wacc]]", "[[valor-intrinseco]]"]
---

# Valoración DCF paso a paso (material didáctico)

El *discounted cash flow* ([[flujo-de-caja-descontado|DCF]]) es la única herramienta de valoración que intenta
medir lo que una empresa **es** (el valor presente de la caja que generará) y no lo que **cuesta** hoy en el
mercado. Esta página es la receta mecánica desmontada pieza por pieza, con un ejemplo numérico propio e
**ilustrativo** (ninguna cifra del ejemplo es cotización ni dato de empresa real); los fundamentos y las citas de
los manuales viven en [[flujo-de-caja-descontado]], [[coste-de-capital-wacc]] y [[valor-intrinseco]].

## El mecanismo en una frase

> El valor de una empresa es la suma de todo el efectivo libre que generará en el futuro, convertido a dinero
> de hoy con un tipo de descuento que castiga la lejanía temporal y la incertidumbre.

Todo lo demás —PER, EV/EBITDA, comparables— son atajos de esta suma (ver [[multiplos-de-valoracion]]).

## Paso 1 — Proyectar el flujo de caja libre de la empresa (*FCFF*)

Se proyectan 5-10 años de flujo de caja libre para la empresa:

```
FCFF = EBIT x (1 - tipo impositivo) + amortización - capex - variación del capital circulante
```

Tres decisiones ocultas que pesan más que la fórmula:

- **La tasa de crecimiento de cada tramo**, y sobre todo cuánto tiempo puede durar: un crecimiento por encima
  del PIB nominal no puede ser perpetuo, porque si durara eternamente la empresa acabaría siendo más grande que
  la economía ([[estimacion-del-crecimiento]]). Segundo orden: crecimiento sostenible ⇔ reinversión × ROIC;
  crecer sin rentabilidad en la reinversión **destruye** valor aunque engorde ingresos
  ([[retorno-sobre-capital-empleado]], [[creacion-de-valor-y-eva]]).
- **El capex de mantenimiento vs. el de crecimiento**: confundirlos infla el flujo libre. En negocios intensivos
  en capital la depreciación *subestima* el capex real necesario (caso BNSF documentado en
  [[valor-intrinseco]]); usar EBITDA como proxy del flujo es exactamente ese error.
- **La conversión caja-beneficio**: un beneficio que no llega a caja es una proyección construida sobre arena
  ([[contabilidad-y-calidad-de-beneficios]]).

## Paso 2 — El tipo de descuento: WACC desmontado

El *weighted average cost of capital* ([[coste-de-capital-wacc|WACC]]) mezcla lo que cuesta financiarse con
acciones y con deuda:

```
WACC = (E/V) x Re + (D/V) x Rd x (1 - t)
Re   = rf + β x prima de riesgo   (CAPM)
```

- **rf**: la renta libre de riesgo (bono soberano a ~10 años). No es un detalle técnico: es el piso global.
  Cuando rf sube, sube TODO el descuento (ver mecanismo de segundo orden al final).
- **β y la prima de riesgo**: la parte más discutida; ver [[prima-de-riesgo-y-beta]]. Muchos DCF fallidos no
  fallan en los flujos sino aquí: un β "ajustado" hacia abajo baja el WACC dos puntos y el valor se dispara
  (ver errores típicos).
- **Rd tras impuestos**: los intereses deducen; por eso la deuda barata reduce el WACC… hasta que el apalancamiento
  añade riesgo que el modelo no ve ([[aversion-al-apalancamiento]]).

**Ejemplo ilustrativo**: Re = 9% con peso accionarial 90%, Rd = 5% con peso 10%, tipos 25%:
WACC = 0,9×9% + 0,1×5%×0,75 = **8,1% ≈ 8%**. Redondear a un dígito es honestidad, no vaguedad: el WACC no tiene
dos decimales reales.

## Paso 3 — El valor terminal: donde vive el peligro

Tras el horizonte explícito, se resume todo el futuro restante en un número. Dos métodos:

- **Gordon (creimiento perpetuo)**: `TV = FCF_final x (1+g) / (WACC - g)`, con g ≤ crecimiento nominal de largo
  plazo de la economía (~2-3%) y siempre g < WACC. Si g ≥ WACC la fórmula explota a infinito: señal de que el
  modelo está mal planteado, no de que la empresa valga infinito.
- **Múltiplo de salida**: aplicar un EV/EBITDA o PER "normalizado" al último año — que convierte el DCF en un
  híbrido de valoración relativa ([[multiplos-de-valoracion]]) y arrastra sus sesgos.

**Por qué el terminal manda**: en el ejemplo ilustrativo del paso 5, el valor terminal descontado supone el
**78,8% del valor de la empresa**. Traducción de segundo orden: un DCF típico no valora principalmente los
próximos años que sí puedes analizar, sino un futuro indefinido que nadie conoce. De ahí que dos analistas
honrados con los mismos datos obtengan precios muy distintos: discrepan casi toda en g y WACC del terminal.

## Paso 4 — Del valor de la empresa al valor por acción

```
Equity = EV - deuda neta - minoritarios + participaciones no estratégicas
Precio justo por acción = Equity / nº de acciones diluidas
```

Trampas clásicas de este paso: olvidar las opciones y planes de acciones (dilución), ignorar pensiones o
arrendamientos capitalizados como deuda disfrazada, y usar deuda bruta en vez de neta cuando hay caja
improductiva. Ver [[balance-caja-neta-y-tipo-de-deuda]].

## Paso 5 — Ejemplo completo (ILUSTRATIVO)

Empresa ficticia «Fábrica S.A.»: FCF base 100 M€, crecimiento 8% anual durante 5 años, después perpetuidad con
g = 2,5%; WACC = 8%; deuda neta 300 M€; 50 M de acciones.

| Año | FCF (M€) | Valor presente (M€) |
|----|----|----|
| 1 | 108,0 | 100,0 |
| 2 | 116,6 | 100,0 |
| 3 | 126,0 | 100,0 |
| 4 | 136,0 | 100,0 |
| 5 | 146,9 | 100,0 |

- TV = 146,9 × 1,025 / (0,08 − 0,025) = **2.737,7 M€** → PV(TV) = 1.863,2 M€ (**78,8% del valor total**)
- EV = 500,0 + 1.863,2 = **2.363,2 M€** · Equity = 2.063,2 M€ · **Valor por acción = 41,26 €**

*(Nada de esto describe empresa alguna: es aritmética de pizarra.)*

### Tabla de sensibilidad — valor por acción según WACC y g perpetuo

| WACC \ g | 1,5% | 2,5% | 3,5% |
|----|----|----|----|
| **7%** | 42,94 | 52,00 | 66,23 |
| **8%** | 35,22 | 41,26 | 49,99 |
| **9%** | 29,57 | 33,84 | 39,66 |
| **10%** | 25,25 | 28,40 | 32,51 |

Lectura de segundo orden: mover WACC de 8% a 7% (un punto, dentro de cualquier margen de error razonable del
CAPM) eleva el valor central de 41,26 a 52,00 (**+26%**) sin que la empresa haya cambiado nada. La mitad de las
"variaciones de valor" de un informe DCF son variaciones del modelo, no del negocio. Por eso el DCF sin tabla de
sensibilidad no está terminado, y por eso [[margen-de-seguridad]] no es opcional: comprar al valor puntual del
modelo es apostar a que tu g y tu WACC son exactos.

## Errores típicos (lista operativa)

1. **Extrapolación ingenua**: prolongar 5 años de buen ciclo 20 años. El crecimiento alto atrae competencia
   (mecanismo de [[ciclo-de-capex]]): el propio crecimiento alto contiene su corrección.
2. **g perpetuo demasiado alto**: por encima del PIB nominal largo plazo es matemáticamente imposible a la larga.
3. **WACC "cocinado"**: bajar β o la prima hasta que el precio salga "barato". El DCF como justificación
   retrospectiva de una tesis ya decidida es confirmación pura (antídoto en
   [[sesgos-y-psicologia-del-inversor]]).
4. **Crecer sin reinvertir o reinvertir sin ROIC > coste**: cada euro retenido debe generar más de un euro de
   valor; si ROIC < WACC, el crecimiento resta ([[creacion-de-valor-y-eva]]).
5. **Teatro de precisión**: presentar "41,26 €" como resultado. El output correcto es un rango (la tabla de
   arriba) y una postura conservadora dentro de él.
6. **Doble conteo u omisión de stock options, NRI, pensiones y leases** entre flujos, puente a equity y número
   de acciones.
7. **Ignorar el ciclo del capital ajeno**: el mismo DCF da 41 o 66 según el entorno de tipos; quien ignora
   [[renta-fija-y-tipos]] está usando el WACC sin saberlo.

## Cuándo NO usar un DCF

- **Financieras** (bancos, aseguradoras): el pasivo ES su materia prima y el concepto de FCFF se disuelve; usan
  dividendos descontados, ROE vs. coste del equity y P/TBV ([[valoracion-de-empresas-financieras]],
  [[float-de-seguros]]).
- **Cíclicas en extremos de ciclo**: proyectar beneficios de pico como norma produce DCF que dicen "baratísimo"
  justo antes del desplome; hay que normalizar el beneficio medio de ciclo
  ([[valoracion-ciclicas-y-beneficios-negativos]], [[materias-primas-y-ciclo-de-commodities]]).
- **Empresas jóvenes sin caja positiva**: el valor está en opciones reales y escenarios, no en una perpetuidad
  inventada ([[valoracion-empresas-jovenes-y-privadas]], [[opciones-reales]]).
- **Negocios en distorsión estructural** (zombis dependientes de refinanciación, regulación en vuelco): el
  pasado no anuncia el flujo futuro ([[malinversion-y-zombificacion-empresarial]]).

## Mecanismo de segundo orden: tipos → WACC → valor

Tipos oficiales a la baja → rf cae → WACC cae → los flujos LEJANOS (que viven en el valor terminal, ese ~79%
del ejemplo) se abaratan menos al descontarlos → el valor sube más que proporcionalmente cuanto más "largo" es
el negocio → las empresas de crecimiento largo re-rating mayor que las de caja cercana → el índice se concentra
en ellas → la sensibilidad agregada del mercado a los tipos aumenta → una subida de tipos posterior comprime con
la misma palanca en sentido contrario. Es la misma cadena que explica
[[expansion-y-compresion-de-multiples]] y conecta el DCF con [[renta-fija-y-tipos]] y
[[checklist-macro-y-ciclo]]. Corolario humilde: tu DCF de hoy lleva dentro una opinión macro sobre una década,
quieras o no.

## Ver también (lecturas, no órdenes)

- [[flujo-de-caja-descontado]] · [[coste-de-capital-wacc]] · [[valor-terminal]] — fundamentos teóricos
- [[valor-intrinseco]] · [[manuales-de-valoracion]] — los manuales completos del cerebro
- [[margen-de-seguridad]] · [[precio-vs-cotizacion]] — qué hacer con el número una vez obtenido
- [[expansion-y-compresion-de-multiples]] · [[multiplos-de-valoracion]] — la otra cara de la valoración
