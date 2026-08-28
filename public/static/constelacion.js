/* constelacion.js — el vault de Carlos, con forma de cerebro.

   QUE SE VE. Un punto por cada pagina publicada del wiki y una raya por cada wikilink que
   sobrevivio al filtro: 1.065 nodos y 10.411 aristas reales, no un adorno generativo. Las paginas
   de una misma carpeta caen juntas —cada carpeta ocupa una zona—, asi que los enlaces cortos
   dibujan la masa de cada dominio y los largos, los puentes entre dominios. Eso es exactamente lo
   que el wiki dice de si mismo, dibujado.

   DE DONDE SALE. `/static/grafo.json`, que hornea `web/publicador/publica.py` en cada publicacion.
   Pesa ~100 KB. Quartz ya emite `contentIndex.json` con el mismo grafo dentro, pero pesa 13 MB
   porque lleva el texto entero de cada pagina: pedirlo aqui seria descargar el sitio antes de leer
   el titular.

   CUATRO DECISIONES QUE NO SON DE ESTILO
   - La silueta es un `Path2D` y la pertenencia la decide `isPointInPath`, del propio navegador. El
     primer intento fue un campo de metabolas (veintitantos discos que se suman y cuatro que
     restan): daba un ovalo con el borde deshilachado y hubo que abandonarlo tras cuatro rondas de
     ajuste a ciegas. Un path se lee, se edita y se ve; un campo de metabolas hay que adivinarlo.
   - Las cisuras son huecos del MISMO path (regla `evenodd`) y las aristas se recortan contra el.
     Ese recorte es lo que hace que el dibujo se lea como un cerebro y no como una bola: sin el, las
     diez mil rayas cruzan las cisuras y las rellenan.
   - Las aristas se pintan UNA VEZ en un lienzo aparte y se estampan cada fotograma. Diez mil trazos
     por fotograma no caben en el presupuesto de 16 ms; estampar una imagen, si. El precio es que
     las rayas no siguen la deriva de los puntos — a 1 px y alfa 0,018 no se nota.
   - Si el grafo no carga NO se deja el hueco: se siembra la misma silueta al azar y se deja rastro
     (`data-grafo="respaldo"` en el lienzo y un aviso en consola). Una degradacion silenciosa aqui
     seria una portada que miente sobre lo que esta enseñando.

   `prefers-reduced-motion` no la apaga: la deja QUIETA. Apagarla dejaria un hueco en la portada;
   congelarla conserva la composicion y quita el movimiento, que es lo que molesta.  */
(function () {
  "use strict";

  // La silueta, en una caja de 0..100 que luego se escala al lienzo. Cuatro subtrazados: el
  // contorno (perfil lateral, frente a la izquierda, cerebelo y tronco encefalico abajo a la
  // derecha) y tres cisuras que se restan por `evenodd` — surco central, cisura de Silvio y la
  // muesca que separa el cerebro del cerebelo.
  var SILUETA =
    "M7 45 C7 28 20 12 40 8 C60 4 80 8 89 22 C97 34 96 46 88 54 C93 61 91 73 80 76" +
    " C72 78 65 75 62 69 L64 97 L56 97 L56 67 C52 73 44 78 34 77 C23 76 14 68 10 58" +
    " C8 53 7 49 7 45 Z" +
    "M15 57 C22 62 34 63 45 59 C50 57 52 55 51 53 C44 58 30 58 19 53 C16 52 14 54 15 57 Z" +
    "M50 9 C52 16 50 26 46 33 C44 36 47 37 49 34 C54 26 56 16 54 9 Z" +
    "M90 55 C84 60 76 63 68 63 C65 63 64 65 67 66 C77 66 86 63 92 58 C94 56 92 53 90 55 Z";

  // Los centros de las zonas donde se agrupan las carpetas, en el mismo espacio 0..100 y en orden
  // frente -> nuca -> abajo. No dibujan nada y no tienen tamaño: son solo los imanes que ordenan
  // los puntos, y ese orden es el que hace que cada carpeta caiga en una franja contigua. El orden
  // de la lista ES el recorrido del cerebro, asi que mover una fila mueve una carpeta de sitio.
  var ZONAS = [
    [20, 42], [24, 26], [38, 18], [54, 16], [70, 20], [82, 32], [86, 46],
    [30, 40], [44, 34], [58, 32], [72, 40],
    [22, 54], [34, 50], [46, 46], [58, 48], [70, 52],
    [26, 66], [38, 70], [48, 68],
    [78, 68], [86, 58],
    [60, 80]
  ];

  // La gama de Dala en piel noche. El violeta va cuatro veces porque es el color de marca y tiene
  // que dominar; los otros son las chispas.
  var GAMA_NOCHE = ["#8052FF", "#8052FF", "#8052FF", "#8052FF", "#FFB829", "#C44FE0", "#378ADD", "#15846E"];

  // LA PIEL DIA NO ES LA MISMA CON OTRO FONDO, y esto se vio en pantalla antes de escribirlo. Sobre
  // blanco el dibujo casi desaparecia por dos motivos distintos:
  //   1. Las aristas se mezclaban en modo `lighter`. Sumar luz sobre blanco da blanco: diez mil
  //      rayas no pintaban nada. En dia se mezclan en `source-over`, que es lo unico que oscurece.
  //   2. De las cinco chispas de la gama, el ambar de Dala sobre blanco da 1,73:1. No es que se lea
  //      mal: es que no se ve. En dia el dibujo se queda con los DOS tonos que tokens.css define
  //      para esa piel, y se leen del DOM en vez de escribirlos aqui — asi cambian solos si cambia
  //      la paleta, y no hay un solo hex de la piel dia inventado en este fichero.
  function esClaro() { return document.documentElement.getAttribute("saved-theme") === "light"; }
  function tono(nombre) {
    return getComputedStyle(document.documentElement).getPropertyValue(nombre).trim();
  }
  function gama() {
    if (!esClaro()) return GAMA_NOCHE;
    var violeta = tono("--secondary") || "#6A3FD9", ambar = tono("--tertiary") || "#8A5A00";
    return [violeta, violeta, violeta, violeta, ambar];
  }

  var lienzo = document.getElementById("constelacion");
  if (!lienzo || !lienzo.getContext) return;
  var ctx = lienzo.getContext("2d");
  var forma = new Path2D(SILUETA);

  var quieto = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var particulas = [];
  var telarana = null;                 // lienzo aparte con las aristas ya pintadas
  var ancho = 0, alto = 0, dpr = 1, animando = false;
  var grafo = null;                    // {carpetas, enlaces}; se cachea entre navegaciones SPA

  // Azar reproducible: la misma portada tiene que salir igual en cada visita y en cada
  // reconstruccion. Con Math.random() el cerebro cambiaria de forma al redimensionar la ventana.
  function dado(semilla) {
    var s = semilla >>> 0;
    return function () {
      s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0;
      return s / 4294967296;
    };
  }

  // `isPointInPath` mide en el espacio de usuario actual, asi que se le habla en la caja 0..100 con
  // el lienzo ya transformado. Un contexto de 1x1 basta: no se pinta nada, solo se pregunta.
  var juez = document.createElement("canvas").getContext("2d");
  function dentro(x, y) { return juez.isPointInPath(forma, x, y, "evenodd"); }

  function particula(x, y, rnd, color, radio, fuera) {
    return {
      x: x / 100, y: y / 100,                 // normalizadas: el lienzo puede cambiar de tamaño
      t: rnd() * 6.283185,                    // fase del parpadeo
      v: 0.15 + rnd() * 0.5,                  // velocidad del parpadeo
      d: rnd() * 6.283185,                    // direccion de la deriva
      r: radio,
      g: rnd() * Math.PI,                     // giro del triangulo
      c: color,
      fuera: fuera
    };
  }

  // `cuantos` puntos repartidos UNIFORMEMENTE por dentro de la silueta, ordenados por la zona a la
  // que caen mas cerca.
  //
  // POR QUE ASI Y NO SEMBRANDO CADA ZONA POR SU CUENTA. El primer reparto ponia una nube gaussiana
  // alrededor de cada zona y descartaba lo que se saliera. Tenia dos defectos que se vieron en
  // pantalla: la densidad se desplomaba justo en el borde —los puntos de fuera se tiraban, los de
  // dentro no se reponian— y el contorno quedaba deshilachado en vez de recortado; y con carpetas
  // de 1 a 198 paginas, unas zonas salian saturadas y otras vacias. Sembrando uniforme y
  // ORDENANDO despues, la densidad es plana hasta el mismo borde y cada carpeta sigue cayendo en
  // una franja contigua, que es lo unico que se le pedia al agrupamiento.
  function siembraUniforme(cuantos, rnd) {
    var puntos = [];
    for (var g = 0; puntos.length < cuantos && g < cuantos * 80; g++) {
      var x = rnd() * 100, y = rnd() * 100;
      if (!dentro(x, y)) continue;
      var mejor = 0, dmin = Infinity;
      for (var z = 0; z < ZONAS.length; z++) {
        var dx = x - ZONAS[z][0], dy = y - ZONAS[z][1], d = dx * dx + dy * dy;
        if (d < dmin) { dmin = d; mejor = z; }
      }
      puntos.push([x, y, mejor]);
    }
    return puntos.sort(function (a, b) { return a[2] - b[2]; });
  }

  // ---- siembra con el vault real -------------------------------------------------------------
  function siembraGrafo() {
    var rnd = dado(0x5EED);
    var carpetas = grafo.carpetas, enlaces = grafo.enlaces;
    var total = carpetas.reduce(function (s, c) { return s + c[1]; }, 0);
    var sitios = siembraUniforme(total, rnd);
    // El muestreo por rechazo lleva tope de intentos, asi que en teoria puede devolver de menos. Si
    // pasara, los nodos sin sitio se quedarian en (0,0) y sus aristas dispararian rayas a la esquina
    // del lienzo: un defecto raro y silencioso. Que se vea, y que se sepa por que.
    if (sitios.length < total) {
      lienzo.dataset.grafo = "parcial";
      console.warn("constelacion: solo " + sitios.length + " de " + total +
        " paginas encontraron sitio dentro de la silueta; el resto no se dibuja.");
    }

    // Grado de cada nodo: el triangulo de una pagina muy enlazada se dibuja mas grande. Es la
    // unica jerarquia del dibujo, y es la del wiki, no una inventada.
    var grado = new Uint16Array(total);
    for (var e = 0; e < enlaces.length; e++) { grado[enlaces[e][0]]++; grado[enlaces[e][1]]++; }

    particulas = [];
    var COLORES = gama();
    var punto = new Float32Array(total * 2);
    var n = 0;
    for (var c = 0; c < carpetas.length; c++) {
      var tinte = COLORES[c % COLORES.length];
      for (var j = 0; j < carpetas[c][1] && n < sitios.length; j++) {
        var p = sitios[n];
        punto[n * 2] = p[0] / 100; punto[n * 2 + 1] = p[1] / 100;
        // Una de cada cuatro toma un color de fuera de su carpeta: sin esa mezcla cada franja sale
        // de un color plano y parece un mapa politico, no una constelacion.
        var color = rnd() < 0.25 ? COLORES[(rnd() * COLORES.length) | 0] : tinte;
        particulas.push(particula(p[0], p[1], rnd, color,
          1.1 + Math.min(1.9, Math.sqrt(grado[n]) * 0.38), false));
        n++;
      }
    }
    polvo(rnd, Math.round(total * 0.10));
    return punto;
  }

  // Polvo ambiente: triangulos sueltos FUERA de la silueta, mas tenues. No son paginas; son el aire
  // de la referencia, y por eso se dibujan al 28% de alfa.
  function polvo(rnd, cuantos) {
    var COLORES = gama();
    for (var i = 0, guarda = 0; i < cuantos && guarda < cuantos * 40; guarda++) {
      var x = rnd() * 100, y = rnd() * 100;
      if (dentro(x, y)) continue;
      particulas.push(particula(x, y, rnd, COLORES[(rnd() * COLORES.length) | 0],
        1.0 + rnd() * 1.1, true));
      i++;
    }
  }

  // Respaldo: la misma silueta sin el vault detras. Se marca en el DOM para que la degradacion no
  // sea invisible.
  function siembraProcedural() {
    var rnd = dado(0x5EED);
    particulas = [];
    var objetivo = 1000;
    var COLORES = gama();
    var sitios = siembraUniforme(objetivo, rnd);
    for (var i = 0; i < sitios.length; i++) {
      particulas.push(particula(sitios[i][0], sitios[i][1], rnd,
        COLORES[(rnd() * COLORES.length) | 0], 1.2 + rnd() * 1.6, false));
    }
    polvo(rnd, Math.round(objetivo * 0.16));
    lienzo.dataset.grafo = "respaldo";
    return null;
  }

  // ---- la telarana: las aristas, pintadas una sola vez ---------------------------------------
  function tejeAristas(punto) {
    telarana = null;
    if (!punto || !grafo || !ancho || !alto) return;
    var tela = document.createElement("canvas");
    tela.width = Math.round(ancho * dpr);
    tela.height = Math.round(alto * dpr);
    var g = tela.getContext("2d");
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    // El recorte contra la silueta: sin el, las aristas cruzan las cisuras y el dibujo vuelve a ser
    // una bola. Se recorta en el espacio 0..100 y luego se vuelve al del lienzo para trazar.
    // OJO con el `save`/`restore` de manual: `restore()` DESHACE tambien el recorte, no solo la
    // transformacion — se probo y el dibujo salio identico al de antes, sin un solo error. Hay que
    // volver con `setTransform`, que cambia la matriz y deja el recorte donde esta.
    g.setTransform(dpr * ancho / 100, 0, 0, dpr * alto / 100, 0, 0);
    g.clip(forma, "evenodd");
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    g.lineWidth = 1;
    // En noche, alfa muy baja y mezcla ADITIVA: donde muchas aristas se cruzan el brillo se suma
    // solo y aparece la materia densa del centro, sin decidir a mano que zona es densa. En dia esa
    // misma mezcla sobre blanco no pinta nada, asi que se apila del modo normal y con el violeta de
    // la piel dia, que es el unico que oscurece.
    if (esClaro()) {
      g.globalCompositeOperation = "source-over";
      g.strokeStyle = (tono("--secondary") || "#6A3FD9");
      g.globalAlpha = 0.045;
    } else {
      g.globalCompositeOperation = "lighter";
      g.strokeStyle = "rgba(128, 82, 255, 0.018)";
    }
    g.beginPath();
    for (var i = 0; i < grafo.enlaces.length; i++) {
      var a = grafo.enlaces[i][0], b = grafo.enlaces[i][1];
      // Un nodo que no encontro sitio se quedo en (0,0); su arista seria una raya a la esquina.
      if ((!punto[a * 2] && !punto[a * 2 + 1]) || (!punto[b * 2] && !punto[b * 2 + 1])) continue;
      g.moveTo(punto[a * 2] * ancho, punto[a * 2 + 1] * alto);
      g.lineTo(punto[b * 2] * ancho, punto[b * 2 + 1] * alto);
    }
    g.stroke();
    telarana = tela;
  }

  function siembra() {
    delete lienzo.dataset.grafo;
    tejeAristas(grafo ? siembraGrafo() : siembraProcedural());
  }

  function mide() {
    var caja = lienzo.getBoundingClientRect();
    if (!caja.width || !caja.height) return false;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    ancho = caja.width; alto = caja.height;
    lienzo.width = Math.round(ancho * dpr);
    lienzo.height = Math.round(alto * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // El juez mide en la caja 0..100: se le fija su propia transformacion una vez y no se toca mas.
    juez.setTransform(1, 0, 0, 1, 0, 0);
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
    if (telarana) ctx.drawImage(telarana, 0, 0, ancho, alto);
    ctx.lineWidth = 1;
    var s = ahora / 1000;
    var claro = esClaro();
    for (var i = 0; i < particulas.length; i++) {
      var p = particulas[i];
      var deriva = quieto ? 0 : Math.sin(s * 0.18 + p.d) * 4;
      var px = p.x * ancho + deriva * Math.cos(p.d);
      var py = p.y * alto + deriva * Math.sin(p.d);
      // Sobre blanco un trazo de 1 px al 38% no se ve; el parpadeo se levanta de suelo en dia.
      var brillo = claro
        ? (quieto ? 0.80 : 0.58 + 0.36 * (0.5 + 0.5 * Math.sin(s * p.v + p.t)))
        : (quieto ? 0.62 : 0.38 + 0.42 * (0.5 + 0.5 * Math.sin(s * p.v + p.t)));
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

  // El grafo se pide una vez por sesion y se cachea: Quartz navega con SPA y volver a la portada
  // no tiene por que volver a bajar 100 KB.
  function conGrafo(sigue) {
    if (grafo !== null || !window.fetch) { sigue(); return; }
    fetch("/static/grafo.json")
      .then(function (r) { return r.ok ? r.json() : Promise.reject(new Error("HTTP " + r.status)); })
      .then(function (d) {
        if (!d || !d.carpetas || !d.enlaces) throw new Error("grafo.json sin carpetas ni enlaces");
        grafo = d;
      })
      .catch(function (err) {
        console.warn("constelacion: sin grafo del vault, se dibuja el respaldo procedural —", err.message);
      })
      .then(sigue, sigue);
  }

  // Cambiar de piel repinta: las aristas viven en un lienzo estampado una sola vez, asi que sin esto
  // el interruptor dejaba en pantalla la telarana de la piel anterior — aditiva sobre blanco, es
  // decir invisible — hasta que algo mas forzara una siembra.
  document.addEventListener("themechange", function () {
    if (!mide()) return;
    siembra();
    if (quieto) requestAnimationFrame(pinta);
  });

  var espera;
  window.addEventListener("resize", function () {
    clearTimeout(espera);
    espera = setTimeout(function () {
      if (mide()) siembra();
      if (quieto) requestAnimationFrame(pinta);
    }, 180);
  });

  // El script corre antes de que el navegador haya resuelto la altura de la caja (aspect-ratio se
  // calcula en layout, no en parseo), y `mide()` devolvia falso: el lienzo quedaba dimensionado
  // pero sin bucle, es decir negro y sin un solo error en consola. Se reintenta hasta que la caja
  // tenga tamaño, con tope para no girar eternamente si el lienzo esta oculto.
  function insiste(quedan) {
    if (mide()) { conGrafo(arranca); return; }
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
