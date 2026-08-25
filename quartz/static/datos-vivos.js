// datos-vivos.js — refresco en vivo de la portada (pulso, marcador, cartera).
//
// Se carga UNA vez por carga completa en todas las paginas: lo emite renderPage.tsx como script
// afterDOMReady junto al postscript. La navegacion SPA de Quartz avisa con el evento "nav"
// (components/scripts/spa.inline.ts), que tambien se dispara en la carga inicial — por eso basta
// el listener y una llamada directa por si el postscript fallara.
//
// Solo LEE, con la clave publicable que viaja horneada en el HTML por diseño (RLS de solo lectura
// sobre las tres tablas). Si Supabase no responde, no se toca nada: queda el snapshot horneado
// por el publicador, con su fecha visible. Nunca un hueco.
(function () {
  var enCurso = false
  var ultimaVez = 0

  function fechaLarga(iso) {
    var s = String(iso || "")
    var f = new Date(s)
    if (isNaN(f.getTime())) return s
    var opciones = { day: "numeric", month: "long", year: "numeric" }
    // "2026-08-25" es una fecha de CALENDARIO, no un instante: `new Date` la lee como medianoche
    // UTC y, sin esto, un lector al oeste de Greenwich la veria un dia antes que el snapshot
    // horneado — la misma pagina diciendo dos fechas. `fecha_refresco` si es un instante y se
    // localiza a proposito.
    if (s.length === 10) opciones.timeZone = "UTC"
    return f.toLocaleDateString("es-ES", opciones)
  }

  function coma(n, decimales) {
    var x = Number(n)
    if (!isFinite(x)) return "n/d"
    return x.toLocaleString("es-ES", { maximumFractionDigits: decimales })
  }

  // El markdown de la fuente lleva `**`: dentro de HTML crudo no se procesa, y el snapshot
  // horneado ya los quita — aqui igual, para que el dato en vivo se vea igual que el snapshot.
  function plano(texto) {
    return (texto || "").replace(/\*\*/g, "")
  }

  function pon(raiz, selector, texto) {
    var el = raiz.querySelector(selector)
    if (el) el.textContent = texto
  }

  function lee(url, clave, camino) {
    return fetch(url.replace(/\/$/, "") + "/rest/v1/" + camino, { headers: { apikey: clave } })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status)
        return r.json()
      })
  }

  function refresca() {
    var raiz = document.getElementById("datos-vivos")
    if (!raiz || enCurso) return
    var url = raiz.getAttribute("data-supabase-url")
    var clave = raiz.getAttribute("data-supabase-clave")
    if (!url || !clave) return
    var ahora = Date.now()
    if (ahora - ultimaVez < 60000) return
    ultimaVez = ahora
    enCurso = true
    // limit=8 es TOP_CARTERA en publica.py: si se cambia en uno, se cambia en el otro.
    Promise.all([
      lee(url, clave, "pulso?select=fecha,titular,entradilla,fecha_refresco&order=fecha.desc&limit=1"),
      lee(url, clave, "marcador?select=estado,brier,fecha_refresco"),
      lee(url, clave, "cartera?select=nombre,peso_pct,fecha_refresco&order=peso_pct.desc&limit=8"),
    ]).then(function (r) {
      var p = r[0] && r[0][0]
      if (p) {
        pon(raiz, "#dato-pulso .dato-titular", plano(p.titular) || "n/d")
        pon(raiz, "#dato-pulso .dato-entradilla", plano(p.entradilla))
        pon(raiz, "#dato-pulso .dato-fecha",
          "Pulso del " + fechaLarga(p.fecha) + " · refrescado el " + fechaLarga(p.fecha_refresco))
      }
      var filas = r[1] || []
      var resueltas = filas.filter(function (f) { return f.estado === "resuelta" })
      var briers = resueltas
        .map(function (f) { return f.brier })
        .filter(function (b) { return b !== null && b !== undefined })
      var medio = briers.length
        ? briers.reduce(function (a, b) { return a + b }, 0) / briers.length
        : null
      pon(raiz, "#dato-marcador .dato-cifras",
        filas.length + " predicciones · " + resueltas.length + " resueltas · brier medio " +
        (medio === null ? "n/d" : coma(medio, 3)))
      pon(raiz, "#dato-marcador .dato-fecha", "Datos al " + fechaLarga(new Date().toISOString()))
      var posiciones = r[2] || []
      var lista = raiz.querySelector("#dato-cartera .dato-posiciones")
      if (lista && posiciones.length) {
        while (lista.firstChild) lista.removeChild(lista.firstChild)
        posiciones.forEach(function (pos) {
          var li = document.createElement("li")
          var nombre = document.createElement("span")
          nombre.className = "dato-posicion"
          nombre.textContent = pos.nombre
          var peso = document.createElement("span")
          peso.className = "dato-peso"
          peso.textContent = coma(pos.peso_pct, 2) + " %"
          li.appendChild(nombre)
          li.appendChild(peso)
          lista.appendChild(li)
        })
        pon(raiz, "#dato-cartera .dato-fecha",
          "Foto al " + fechaLarga(posiciones[0].fecha_refresco) + " · pesos en %, nunca importes")
      }
      // UN solo role="status" para toda la portada, con mensaje contextual (no numeros sueltos).
      var estado = raiz.querySelector(".dato-estado")
      if (estado) {
        estado.textContent =
          "Pulso, marcador y cartera actualizados en vivo a " + fechaLarga(new Date().toISOString())
      }
    }).catch(function (e) {
      // El snapshot horneado ya esta en pantalla con su fecha, asi que el lector no ve un hueco.
      // Pero un fallback mudo es un fallback que nadie descubre: el rastro va a la consola, que es
      // donde se mira cuando alguien pregunta por que la portada lleva tres dias con la misma fecha.
      console.warn("datos-vivos: sin refresco, queda el snapshot horneado —", e && e.message)
    }).then(function () {
      enCurso = false
    })
  }

  document.addEventListener("nav", refresca)
  refresca()
})()
