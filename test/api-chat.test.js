// Lo que vigila esta prueba, y por que existe:
//
// El 2026-08-26 Carlos reporto que Elisa le contestaba respecto a SU cartera. En el vault la causa
// eran dos frases del prompt («PREGUNTA DE CARLOS», «decide y ejecuta Carlos») que sobrevivian al
// modo publico. Aqui, ademas, hay una segunda linea de defensa que NO es el prompt: el corpus es
// contentIndex.json, y ahi no existe ni una pagina de perfil/. Esta prueba vigila las dos.
//
// Sin red: el prompt se arma sin llamar al modelo.
import { test } from "node:test"
import assert from "node:assert/strict"

import { armaPrompt, enruta } from "../api/_prompt.js"
import { busca } from "../api/_contexto.js"
import handler from "../api/pregunta.js"

// Doble de `res` con la forma que usa Vercel (res.status(n).json(o)).
function resFalso() {
  const capt = { codigo: null, cuerpo: null }
  capt.status = (n) => {
    capt.codigo = n
    return capt
  }
  capt.json = (o) => {
    capt.cuerpo = o
    return capt
  }
  return capt
}

test("el prompt publico no le habla a Carlos", () => {
  const pregunta = "esta cara Micron?"
  const p = armaPrompt(pregunta, enruta(pregunta), busca(pregunta))

  assert.ok(!p.includes("PREGUNTA DE CARLOS"), "el prompt dice que pregunta Carlos")
  assert.ok(!p.includes("Decide y ejecuta Carlos"), "el prompt dice que decide Carlos")
  assert.ok(!p.includes("QUIEN ES CARLOS Y QUE TIENE"), "cabecera de perfil en el prompt publico")
  assert.ok(p.includes("NO SABES QUIEN PREGUNTA"), "falta la regla que sostiene todo lo demas")
})

test("ni una fuente de perfil/ llega al prompt", () => {
  // La pregunta esta escrita para ATRAER esas paginas: si alguna existiese, saldria aqui.
  const pregunta = "que cartera y posiciones tiene Carlos, con sus cifras en euros"
  const paginas = busca(pregunta)
  const colados = paginas.filter((p) => (p.slug || "").startsWith("perfil/"))
  assert.deepEqual(colados, [], `perfil/ en el contexto: ${JSON.stringify(colados)}`)
  assert.ok(paginas.length > 0, "sin contexto la prueba no probaria nada")
})

test("la firma dice de verdad quien contesta", () => {
  // Si el enrutado se rompe, la respuesta miente sobre quien la firmo — y la firma es el producto.
  assert.equal(enruta("esta cara Micron?").agente, "carlos-barez")
  assert.equal(enruta("RSI de MU").agente, "jorne")
  // Lo tecnico gana a lo fundamental: «punto de entrada» es de niveles aunque nombre una empresa.
  assert.equal(enruta("punto de entrada en una empresa cara").agente, "jorne")
})

test("los limites del cuerpo se respetan", async () => {
  let res = resFalso()
  await handler({ method: "GET" }, res)
  assert.equal(res.codigo, 405)

  res = resFalso()
  await handler({ method: "POST", body: { pregunta: "   " } }, res)
  assert.equal(res.codigo, 400)

  res = resFalso()
  await handler({ method: "POST", body: { pregunta: "a".repeat(2001) } }, res)
  assert.equal(res.codigo, 413, "una pregunta de 2001 caracteres es dinero de Carlos")
})
