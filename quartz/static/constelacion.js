/* constelacion.js — el cerebro de particulas de la portada.
   Miles de triangulos diminutos y CONTORNEADOS (Dala: nunca rellenos, 1-2px de trazo) en la gama
   de marca, formando una silueta de cerebro sobre el vacio. No es una imagen: es un campo vivo.

   Tres decisiones que no son de estilo:
   - La silueta sale de metabolas (cinco discos que se funden), no de un path dibujado a mano. Un
     path se ve "trazado"; la suma de campos da un borde organico e irrepetible, que es el punto.
   - Se dibuja con densidad proporcional al AREA, no un numero fijo: en un movil salen ~700
     particulas y en un panel grande ~2600, y en los dos casos se ve igual de denso.
   - `prefers-reduced-motion` no la apaga: la deja QUIETA. Apagarla del todo dejaria un hueco en la
     portada; congelarla conserva la composicion y quita el movimiento, que es lo que molesta.  */
(function () {
  "use strict";
  var lienzo = document.getElementById("constelacion");
  if (!lienzo || !lienzo.getContext) return;

  var ctx = lienzo.getContext("2d");
  var COLORES = ["#8052FF", "#8052FF", "#8052FF", "#FFB829", "#15846E", "#C44FE0", "#378ADD"];
  var quieto = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var particulas = [];
  var ancho = 0, alto = 0, dpr = 1, animando = false;

  // La silueta: trece discos que SUMAN masa y dos que la RESTAN. Los que restan son la hendidura
  // interhemisferica, y son la razon de que esto se lea como un cerebro y no como un huevo — sin
  // ese corte central el campo da una masa lisa. Ajustado con una vista ASCII antes de tocar el
  // navegador: 35% de ocupacion con umbral 2.4.
  var POS = [
    [0.34, 0.36, 0.15], [0.46, 0.30, 0.15], [0.60, 0.33, 0.14], [0.70, 0.43, 0.13],
    [0.30, 0.48, 0.14], [0.42, 0.44, 0.15], [0.56, 0.46, 0.14], [0.68, 0.56, 0.12],
    [0.34, 0.60, 0.13], [0.46, 0.60, 0.13], [0.58, 0.64, 0.12], [0.50, 0.74, 0.09],
    [0.54, 0.83, 0.06]
  ];
  var NEG = [[0.50, 0.36, 0.085], [0.50, 0.50, 0.075]];
  var UMBRAL = 2.4;

  function campo(x, y) {
    var s = 0, i, d;
    for (i = 0; i < POS.length; i++) {
      d = POS[i]; s += (d[2] * d[2]) / ((x - d[0]) * (x - d[0]) + (y - d[1]) * (y - d[1]) + 0.0006);
    }
    for (i = 0; i < NEG.length; i++) {
      d = NEG[i]; s -= 1.15 * (d[2] * d[2]) / ((x - d[0]) * (x - d[0]) + (y - d[1]) * (y - d[1]) + 0.0006);
    }
    return s;
  }

  function siembra() {
    particulas = [];
    var objetivo = Math.min(3200, Math.max(900, Math.round((ancho * alto) / 240)));
    var intentos = 0;
    // Rechazo: se tira un punto al azar y se queda si cae dentro del campo. El limite de intentos
    // evita el bucle infinito si alguien deja el lienzo en 0x0.
    while (particulas.length < objetivo && intentos < objetivo * 60) {
      intentos++;
      var x = Math.random(), y = Math.random();
      var f = campo(x, y);
      if (f < UMBRAL) continue;
      // Cerca del borde la densidad baja: da el desflecado de constelacion en vez de una mancha.
      if (f < UMBRAL * 1.35 && Math.random() > 0.45) continue;
      particulas.push({
        x: x, y: y,
        t: Math.random() * Math.PI * 2,          // fase del parpadeo
        v: 0.15 + Math.random() * 0.5,           // velocidad del parpadeo
        d: Math.random() * Math.PI * 2,          // direccion de la deriva
        r: 2.0 + Math.random() * 2.6,            // radio del triangulo
        g: Math.random() * Math.PI,              // giro
        c: COLORES[(Math.random() * COLORES.length) | 0]
      });
    }
    // Polvo ambiente: triangulos sueltos fuera de la silueta, mas tenues.
    var ambiente = Math.round(objetivo * 0.12);
    for (var j = 0; j < ambiente; j++) {
      particulas.push({
        x: Math.random(), y: Math.random(), t: Math.random() * 6.28,
        v: 0.1 + Math.random() * 0.3, d: Math.random() * 6.28,
        r: 1.6 + Math.random() * 1.6, g: Math.random() * Math.PI,
        c: COLORES[(Math.random() * COLORES.length) | 0], fuera: true
      });
    }
  }

  function mide() {
    var caja = lienzo.getBoundingClientRect();
    if (!caja.width || !caja.height) return false;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    ancho = caja.width; alto = caja.height;
    lienzo.width = Math.round(ancho * dpr);
    lienzo.height = Math.round(alto * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return true;
  }

  function triangulo(p, px, py, alfa) {
    ctx.globalAlpha = alfa;
    ctx.strokeStyle = p.c;
    ctx.beginPath();
    for (var k = 0; k < 3; k++) {
      var a = p.g + k * 2.0944;                  // 120 grados
      var vx = px + Math.cos(a) * p.r, vy = py + Math.sin(a) * p.r;
      if (k === 0) ctx.moveTo(vx, vy); else ctx.lineTo(vx, vy);
    }
    ctx.closePath();
    ctx.stroke();
  }

  function pinta(ahora) {
    ctx.clearRect(0, 0, ancho, alto);
    ctx.lineWidth = 1;
    var s = ahora / 1000;
    for (var i = 0; i < particulas.length; i++) {
      var p = particulas[i];
      var deriva = quieto ? 0 : Math.sin(s * 0.18 + p.d) * 6;
      var px = p.x * ancho + deriva * Math.cos(p.d);
      var py = p.y * alto + deriva * Math.sin(p.d);
      var brillo = quieto ? 0.6 : 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(s * p.v + p.t));
      triangulo(p, px, py, p.fuera ? brillo * 0.28 : brillo);
    }
    ctx.globalAlpha = 1;
    if (!quieto) requestAnimationFrame(pinta);
  }

  function arranca() {
    if (!mide()) return;
    siembra();
    if (animando) return;
    animando = true;
    requestAnimationFrame(pinta);
  }

  var espera;
  window.addEventListener("resize", function () {
    clearTimeout(espera);
    espera = setTimeout(function () { if (mide()) siembra(); if (quieto) requestAnimationFrame(pinta); }, 180);
  });

  // El script corre antes de que el navegador haya resuelto la altura de la caja (aspect-ratio se
  // calcula en layout, no en parseo), y `mide()` devolvia falso: el lienzo quedaba dimensionado
  // pero sin bucle, es decir negro y sin un solo error en consola. Se reintenta hasta que la caja
  // tenga tamaño, con tope para no girar eternamente si el lienzo esta oculto.
  function insiste(quedan) {
    if (mide()) { arranca(); return; }
    if (quedan > 0) requestAnimationFrame(function () { insiste(quedan - 1); });
  }
  insiste(120);
  window.addEventListener("load", function () { if (!animando) insiste(60); });

  // Quartz navega con SPA: el DOM se reemplaza sin recargar y el lienzo viejo muere. Volver a
  // engancharse en cada navegacion es lo que evita que la portada aparezca en negro al volver a ella.
  document.addEventListener("nav", function () {
    lienzo = document.getElementById("constelacion");
    if (!lienzo || !lienzo.getContext) return;
    ctx = lienzo.getContext("2d");
    animando = false;
    insiste(120);
  });
})();
