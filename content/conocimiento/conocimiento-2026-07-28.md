---
title: "Conocimiento — 2026-07-28 (martes, rotación empresas+industrias)"
tipo: sintesis
tags: [conocimiento, cko, 2026-07]
fecha: 2026-07-28
---

# Conocimiento — 2026-07-28 (martes, rotación empresas+industrias)

## Misión del día
**Pregunta**: ¿las propuestas de knowledge-ops abiertas cuyo gatillo era esta rotación (empresas+industrias)
se aplicaron? — 0 scouts (7ª validación de "pregunta simple": verificación mecánica con grep/find contra el
estado real del vault). Elegida porque era el gatillo pendiente con más historial (propuestas del 21-jul a
Carlos Bárez, sin resolver a 24-jul) y hoy tocaba comprobarlo, no re-proponer a ciegas. Cola `encargos.md`
vacía; 0 marcas `[CKO:]` desde el 26-jul. (Ayer 27-jul no hubo run mío: día de auditoría Kimi/sistema; no es
una ausencia de la rutina, no había trigger.)

## Hallazgos
1. **Backlinks industria→empresa SIGUEN ausentes en `plataformas-tecnologicas-y-publicidad-digital.md`**
   (HECHO, grep directo, confianza alta): la página menciona Alphabet/Meta/Microsoft 12 veces pero enlaza 0 de
   sus fichas, que existen (`empresas/alphabet.md`, `meta-platforms.md`, `microsoft.md`). El enlace inverso sí
   existe (ambas fichas enlazan 4 veces a la industria). Propuesta del 21-jul sin aplicar tras su primer
   gatillo → re-flag, 2ª vez. Sirve a: Carlos Bárez (dueño del mapa empresa↔industria) y a cualquier consulta
   que navegue desde la industria.
2. **UnitedHealth sigue sin casa en el mapa de industrias** (HECHO, confianza alta): `unitedhealth.md` existe
   (creada 17-jul, lote 6) pero 0 menciones en `salud-y-farma.md` y 0 en `mapa-de-industrias.md`. Posición
   real de cartera sin encaje sectorial; propuesta del 21-jul (¿ampliar salud-y-farma o entrada nueva?) sin
   decidir → re-flag, 2ª vez. Sirve a: Carlos Bárez / Inés.
3. **RESUELTO — rutina intrusa `cerebro-soporte-conocimiento`**: ya no existe en `~/.claude/scheduled-tasks/`
   ni ha generado archivos desde el 24-jul. La propuesta del 25-jul (redirigir o apagar) fue aplicada
   (limpieza P2 de la auditoría del 27-jul). Cierro el ítem.
4. **Fundsmith semestral**: sigue sin fila en `fuentes/fundsmith/terry-smith-cartas.md` (grep "semestral"
   vacío). Su gatillo es mañana (rotación fuentes+inversores) — no lo re-flageo hoy, va a la cola de mañana.

## Knowledge-ops — dominio rotado: empresas+industrias
- **Foto publicada del sistema con un falso positivo sin corregir**: `sintesis/estado-del-sistema.md` (26-jul
  09:10, sin regenerar desde entonces) sigue mostrando 🔴 "cerebro-sintetizador: esperado 19-jul y 26-jul, sin
  runs" — la parte del 26-jul es el falso positivo que desmentí ese mismo día (commit `7d59ab8`). El semáforo
  no ha vuelto a correr y el bug de día-de-semana (propuesto el 26-jul) sigue abierto. Sirve a: Elisa, que
  evalúa rutinas con ese panel — riesgo de que actúe sobre una alerta ya refutada.
- **Frescura**: 0 páginas de `empresas/`/`industrias/` con `fecha` anterior a 2026-07 (dominio joven, sin
  cifras envejecidas >6 meses).
- **Backlinks bajos pero explicables**: bae-systems/baidu/unitedhealth (3) y booking/nomura (4) son fichas
  jóvenes de lotes recientes; el caso accionable (UH) ya está en Hallazgos. Sin duplicidades detectadas.

## Calidad de fuentes
- **Marco (run 15, hoy)**: la verificación gratuita contra VTT cazó una inversión de flecha del destilado
  (PT Alphabet recortado 450→425, el destilado lo daba al revés) + 2 correcciones más (PT CXMT 116 RMB,
  interceptores 50%). Red de verificación pagando de nuevo — 3er caso documentado esta semana.
- **Ojo, acumulación**: 5 llamadas 📌 falsables del pulso esperan al primer run de `cerebro-veredicto-semanal`
  (domingo 2-ago); si ese run vuelve a no ejecutarse, la cola de predicciones sin fichar crece una 3ª semana.

## Propuestas
- **A Carlos Bárez** (2ª vez, gatillo cumplido): backlinks industria→empresa en
  `plataformas-tecnologicas-y-publicidad-digital.md` y encaje de UnitedHealth en el mapa de industrias. Si al
  próximo gatillo (miércoles 5-ago aprox.) siguen sin aplicar, subo ambas a «Para la CIO» en vez de un 3er
  re-flag (regla de escalado validada el 21-jul).
- **A quien mantenga el semáforo**: regenerar `estado-del-sistema.md` o corregir la línea del sintetizador —
  la foto pública contradice un hecho ya verificado.

## Para la CIO
Dos propuestas del 21-jul a Carlos Bárez cumplieron su gatillo hoy sin aplicarse (backlinks plataformas,
casa de UnitedHealth) — re-flagueadas una 2ª vez; si sobreviven a otro gatillo, las escalo. La rutina intrusa
de soporte quedó apagada por la auditoría del 27-jul (ítem cerrado). El panel `estado-del-sistema` que usas
para evaluar rutinas lleva 2 días sin regenerarse y muestra un falso positivo ya desmentido. Daniel sigue sin
publicar desde el 16-jul (no retomó el lunes; no re-flageo, ya está en tu lista).
