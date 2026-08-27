// chat-publico.inline.ts — el cliente del chat publico (plan fase 4, tarea 5).
// Este fichero viaja como TEXTO: el inline-script-loader de quartz/cli/handlers.js lo transpila a
// JS de navegador y queda asignado a ChatPublico.afterDOMLoaded. Igual que spa.inline.ts.
// Sin dependencias: fetch trae de serie el navegador y Node 22.
//
// Contrato consumido (tarea 2, ya escrita): POST /api/pregunta con {"pregunta": "..."} y respuesta
// {texto, firma:{agente, especialidad, modelo, motivo}, fuentes:[], trazas:[], error}.
// La promesa del producto: la respuesta ensena SIEMPRE firma, fuentes y trazas.
//
// REQUISITO DEL 2026-08-26 (el endpoint aun no esta desplegado): si la respuesta no es HTTP 200 o
// no es JSON valido, se muestra un mensaje legible en su sitio ("El chat todavía no está
// disponible.") en vez de romper o quedarse en blanco. No hay estilos nuevos para esto: usa la
// clase de fallo que ya definio el componente (--aviso).

const MENSAJE_NO_DISPONIBLE = "El chat todavía no está disponible."

function linea(valor: unknown): string {
  return valor == null || valor === "" ? "n/d" : String(valor)
}

function lista(valor: unknown): string {
  return Array.isArray(valor) && valor.length > 0 ? valor.join(" · ") : "n/d"
}

function crea(etiqueta: string, texto: string): HTMLElement {
  const el = document.createElement(etiqueta)
  el.textContent = texto // textContent, nunca innerHTML: lo que contesta el modelo es texto, no HTML.
  return el
}

function toma<T extends Element>(raiz: Element, selector: string): T | null {
  return raiz.querySelector<T>(selector)
}

async function enviar(formulario: HTMLFormElement): Promise<void> {
  const seccion = formulario.closest(".chat-publico")
  if (!seccion) return
  const campo = toma<HTMLTextAreaElement>(seccion, ".chat-pregunta")
  const boton = toma<HTMLButtonElement>(seccion, ".chat-enviar")
  const bloque = toma<HTMLElement>(seccion, ".chat-respuesta")
  const texto = toma<HTMLElement>(seccion, ".chat-texto")
  const quien = toma<HTMLElement>(seccion, ".chat-quien")
  const ficha = toma<HTMLElement>(seccion, ".chat-ficha")
  const lineaFirma = toma<HTMLElement>(seccion, ".chat-linea-firma")
  const lineaFuentes = toma<HTMLElement>(seccion, ".chat-linea-fuentes")
  const lineaTrazas = toma<HTMLElement>(seccion, ".chat-linea-trazas")
  if (!campo || !boton || !bloque || !texto || !quien || !ficha || !lineaFirma || !lineaFuentes || !lineaTrazas) {
    return
  }

  const pregunta = campo.value.trim()
  if (!pregunta) {
    campo.focus()
    return
  }

  bloque.hidden = false
  boton.disabled = true
  texto.classList.remove("chat-error")
  texto.replaceChildren(crea("p", "Buscando en el indice y redactando la respuesta…"))

  let datos: Record<string, unknown> | null = null
  try {
    const r = await fetch("/api/pregunta", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pregunta }),
    })
    // No-200 (503 sin configurar, 404 porque aun no existe, 5xx): mensaje legible, nunca blanco.
    if (!r.ok) throw new Error(`HTTP ${r.status}`)
    const cuerpo: unknown = await r.json()
    if (!cuerpo || typeof cuerpo !== "object") throw new Error("JSON invalido")
    datos = cuerpo as Record<string, unknown>
  } catch {
    texto.classList.add("chat-error")
    texto.replaceChildren(crea("p", MENSAJE_NO_DISPONIBLE))
    quien.replaceChildren()
    ficha.replaceChildren()
    lineaFirma.textContent = ""
    lineaFuentes.textContent = ""
    lineaTrazas.textContent = ""
    boton.disabled = false
    return
  }

  const firma = (datos.firma ?? {}) as Record<string, unknown>
  const parrafos = String(datos.texto ?? "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)

  // Con error del modelo el texto llega null pero la respuesta viene firmada igual (contrato).
  texto.classList.toggle("chat-error", Boolean(datos.error))
  if (parrafos.length > 0) {
    texto.replaceChildren(...parrafos.map((p) => crea("p", p)))
  } else if (datos.error) {
    texto.replaceChildren(crea("p", String(datos.error)))
  } else {
    texto.replaceChildren(crea("p", "n/d"))
  }

  quien.replaceChildren(crea("span", linea(firma.agente)))
  ficha.replaceChildren(
    crea("span", `${linea(firma.especialidad)} · ${linea(firma.modelo)} · ${linea(firma.motivo)}`),
  )
  // Las tres cosas, siempre — tambien cuando vienen vacias: el hueco dice "n/d" y no se calla.
  lineaFirma.textContent =
    `Firma: ${linea(firma.agente)} — ${linea(firma.especialidad)} — modelo ${linea(firma.modelo)} — motivo: ${linea(firma.motivo)}`
  lineaFuentes.textContent = `Fuentes: ${lista(datos.fuentes)}`
  lineaTrazas.textContent = `Trazas: ${lista(datos.trazas)}`
  boton.disabled = false
}

function montar(): void {
  const formulario = document.querySelector<HTMLFormElement>("#chat-formulario")
  if (!formulario || formulario.dataset.listo === "1") return
  formulario.dataset.listo = "1"
  formulario.addEventListener("submit", (ev) => {
    ev.preventDefault()
    void enviar(formulario)
  })
}

// El router SPA dispara "nav" en cada cambio de pagina; montar() directo cubre la primera carga,
// cuyo evento "nav" puede haberse disparado antes de que este modulo (postscript) se ejecute.
document.addEventListener("nav", montar)
montar()
