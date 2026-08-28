// cerebro-inline.js — mete la pieza central en el heroe de la portada.
//
// LA PIEZA, EN ESTE ORDEN (el mismo del puesto de mando, web/ui/app.js):
//   1. El canvas vivo: cerebro.js hornea dos laminas de cerebro-fase-0/1.png recortadas por la
//      silueta de cerebro-forma.js, y el latido es la interpolacion entre ellas.
//   2. El SVG vectorial incrustado, si el canvas no puede (sin forma, PNG roto, excepcion).
// El SVG se INCRUSTA en el DOM y no se enlaza: dentro de un <img> no ejecuta ni sus animaciones
// ni :hover. cerebro-fondo.js (cargado aparte) se automonta: no hay que llamarlo.
//
// Si fallan las dos, la firma lo dice. Un hueco mudo en el centro de la portada se leeria como
// un fallo de red cualquiera, y no como lo que es.
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

  // monta() devuelve null si no hay datos de forma y llama a alFallar si un PNG no carga:
  // en los dos casos, el vector. Sin estados de chat aqui —la portada no conversa—: ritmo 1.
  let viva = null
  if (window.CerebroPieza) {
    try {
      viva = window.CerebroPieza.monta(hueco, () => { viva = null; vectorial() })
      if (viva) { hueco.dataset.pieza = "canvas"; viva.ritmo(1) }
    } catch (e) { console.error("cerebro:", e); viva = null }
  }
  if (!viva) vectorial()

  // El giro con el raton: la pieza acompaña al cursor dentro del heroe. Vale para canvas y vector.
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
  })
  heroe.addEventListener("mouseleave", () => {
    hueco.style.setProperty("--giro-x", "0deg")
    hueco.style.setProperty("--giro-y", "0deg")
  })
})()
