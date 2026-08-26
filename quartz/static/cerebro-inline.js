// cerebro-inline.js — mete la pieza central en el heroe de la portada.
//
// DOS PIEZAS POSIBLES, EN ESTE ORDEN:
//   1. /static/cerebro.png — el render de museo. Gana si existe.
//   2. /static/cerebro.svg — el dibujo vectorial. Es el que reacciona: los impulsos recorren los
//      surcos, los nodos respiran y las clases de estado (`pensando`, `encendido`) lo encienden.
// El SVG se INCRUSTA en el DOM y no se enlaza: dentro de un <img> no ejecuta ni sus animaciones ni
// :hover, que es justo lo que se le pide.
//
// Si fallan las dos, la firma lo dice. Un hueco mudo en el centro de la portada se leeria como un
// fallo de red cualquiera, y no como lo que es.
(() => {
  "use strict"
  const hueco = document.getElementById("cerebro")
  if (!hueco) return
  const firma = document.querySelector(".heroe-firma")
  const diLo = (t) => { if (firma) firma.textContent = t }

  const vectorial = () =>
    fetch("/static/cerebro.svg")
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.text() })
      .then((svg) => { hueco.innerHTML = svg; hueco.dataset.pieza = "vector" })
      .catch(() => diLo("La pieza no cargó — el índice sigue debajo"))

  const img = new Image()
  img.alt = "El Cerebro: la pieza central del equipo"
  img.decoding = "async"
  img.onload = () => { hueco.replaceChildren(img); hueco.dataset.pieza = "imagen" }
  img.onerror = vectorial
  img.src = "/static/cerebro.png"

  // El giro con el raton: la pieza acompaña al cursor dentro del heroe. Vale para las dos piezas.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  const heroe = document.querySelector(".heroe")
  if (!heroe) return
  heroe.addEventListener("mousemove", (e) => {
    const r = hueco.getBoundingClientRect()
    if (!r.width) return
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height
    hueco.style.setProperty("--giro-y", `${Math.max(-1, Math.min(1, dx)) * 10}deg`)
    hueco.style.setProperty("--giro-x", `${Math.max(-1, Math.min(1, -dy)) * 8}deg`)
    // El foco de brasa bajo el cursor. Solo cuando la pieza es imagen: el vector ya se enciende por
    // dentro, y sumarle un foco encima serian tres cosas moviendose a la vez.
    if (hueco.dataset.pieza !== "imagen") return
    const dentro =
      e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom
    hueco.style.setProperty("--foco", dentro ? "1" : "0")
    if (dentro) {
      hueco.style.setProperty("--foco-x", `${((e.clientX - r.left) / r.width) * 100}%`)
      hueco.style.setProperty("--foco-y", `${((e.clientY - r.top) / r.height) * 100}%`)
    }
  })
  heroe.addEventListener("mouseleave", () => {
    hueco.style.setProperty("--giro-x", "0deg")
    hueco.style.setProperty("--giro-y", "0deg")
    hueco.style.setProperty("--foco", "0")
  })
})()
