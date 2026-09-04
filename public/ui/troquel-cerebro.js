// troquel-cerebro.js — el cuño del cerebro para la cara de la moneda.
//
// Un relieve de moneda ES 2,5D: un campo de alturas es su formato nativo, no una malla. La ronda
// del 2026-09-03 aplanaba `cerebro-geometria.js` (un cerebro modelado en 3D) para estamparlo, y a
// 200px sus circunvoluciones procedurales se leian como grano de textura, no como pliegue.
//
// Aqui la anatomia va a mano. Los numeros salen de MEDIR una lamina concreta: Gray 726, «lateral
// surface of the left cerebral hemisphere» (Gray's Anatomy 1918, dominio publico, Wikimedia
// Commons File:Gray726.png). No se lee ni un pixel en ejecucion y la imagen no entra en el repo:
// lo que se sirve es este generador. La referencia decide DONDE va cada surco, no cuanta luz
// recibia — eso es lo que separa esto de calcar un fotograma, que es el error de la ronda anterior.
//
// El sistema de coordenadas del cerebro: el polo FRONTAL a la izquierda (x negativa) y el
// OCCIPITAL a la derecha, como en la lamina. El origen es el centro del cerebro (sin cerebelo).
// Las medidas de la lamina, ya normalizadas (la caja del hemisferio media 648x372 px):
//
//     polo frontal      (-1.00, +0.07)      polo occipital    (+1.00, -0.14)
//     vertice           (+0.17, +0.57)      polo temporal     (-0.33, -0.39)
//     cisura de Silvio  (-0.37, -0.25) -> (+0.17, -0.14) -> (+0.63,  0.00)
//     cisura de Rolando (+0.21, +0.54) -> (+0.04, +0.26) -> (-0.11, -0.03)
//
// El cerebelo y el tronco NO estan en Gray 726 (es solo el hemisferio). Van con las proporciones
// de una lateral completa, y estan porque sin ellos la silueta se lee como una alubia.
//
// Modulo PURO: sin DOM, sin canvas, sin three. Por eso se puede probar con node.

export const LADO = 256;

// La ventana del troquel, en coordenadas del cerebro. Es asimetrica en vertical a proposito: el
// cortex llega a +0.60 por arriba y el tronco baja hasta -0.88, asi que centrar en cero dejaria
// aire arriba y cortaria abajo. Se deja margen por los cuatro lados para que la silueta quede
// CERRADA dentro de la ventana — el test del borde a cero vigila exactamente esto.
const VX = 1.12;
const VY_ARRIBA = 0.72;
const VY_ABAJO = -0.96;
export const ASPECTO = (VY_ARRIBA - VY_ABAJO) / (2 * VX);   // 0.75 — alto/ancho de la ventana

const cl01 = (t) => (t < 0 ? 0 : t > 1 ? 1 : t);
const sw = (t) => t * t * (3 - 2 * t);

/* ——— ruido de valor 2D, determinista y sin dependencias ——— */
const hash2 = (i, j) => {
  let n = (i * 374761393 + j * 668265263) | 0;
  n = (n ^ (n >>> 13)) >>> 0;
  n = Math.imul(n, 1274126177) >>> 0;
  return ((n ^ (n >>> 16)) >>> 0) / 4294967295;
};
const ruido = (x, y) => {
  const i = Math.floor(x), j = Math.floor(y);
  const u = sw(x - i), v = sw(y - j);
  const m = (a, b, t) => a + (b - a) * t;
  return m(m(hash2(i, j), hash2(i + 1, j), u),
           m(hash2(i, j + 1), hash2(i + 1, j + 1), u), v);
};

/* ——— la silueta del hemisferio ———
   r(theta) como desviacion de una elipse, en el espacio en que la elipse es un circulo. theta = 0
   es el polo OCCIPITAL (derecha) y theta = PI el FRONTAL (izquierda).

   Medido sobre la lamina: en ese espacio el contorno vale ~1 en casi toda la vuelta. La UNICA
   desviacion grande esta en 225 grados, el cuadrante antero-inferior: ahi el polo temporal se
   retira y no llega ni de lejos al frontal. Esa muesca es la que hace que la silueta se lea como
   un cerebro y no como un huevo, y por eso es la primera perilla del pulido. */
const RADIOS = [1.03, 1.02, 1.01, 1.00, 1.01, 0.75, 1.00, 0.93];
const ALTO = 0.574;   // alto/largo del hemisferio, medido en la lamina (372/648)

const radio = (th) => {
  const n = RADIOS.length;
  const t = ((th / (Math.PI * 2)) * n % n + n) % n;
  const i = Math.floor(t), f = t - i;
  const p = (k) => RADIOS[((i + k) % n + n) % n];
  const a = p(-1), b = p(0), c = p(1), d = p(2);
  // Catmull-Rom cerrado: una silueta con esquinas se acuña como un poligono.
  return b + 0.5 * f * (c - a + f * (2 * a - 5 * b + 4 * c - d + f * (3 * (b - c) + d - a)));
};

// Los puntos de control salen de los tres puntos medidos: P1 = 2M - (P0+P2)/2, que es la cuenta que
// hace pasar la Bezier por el punto de en medio en vez de cerca de el.
const SILVIO = [[-0.470, -0.330], [0.206, -0.190], [0.700, 0.040]];
const ROLANDO = [[0.230, 0.520], [0.060, 0.280], [-0.080, 0.010]];

const PROF_SILVIO = 0.70, ANCHO_SILVIO = 0.034;
const PROF_ROLANDO = 0.34, ANCHO_ROLANDO = 0.042;

/* ——— las circunvoluciones, puestas UNA A UNA ———
   Dos modelos anteriores fallaron, y los dos por la misma razon de fondo: un campo continuo no
   hace circunvoluciones. Bandas horizontales daban una patata rayada; bandas sobre la distancia a
   Silvio arqueaban bien pero cerraban ANILLOS en los extremos de la cisura, y el occipital salia
   con una diana estampada. Subir el ruido para romperlos solo cambiaba la diana por barro.

   Un cuño no se hace con un campo: se hace poniendo cada cordon donde va. Son los giros con nombre
   de la lamina, cada uno una Bezier con su anchura. Lo que queda ENTRE ellos son los surcos, que
   asi no hay que dibujar. Y la parte de arriba y la de abajo de Silvio corren en direcciones
   distintas porque asi corren de verdad, no porque se les aplique una inclinacion distinta.

   [P0, P1, P2, anchura] */
const GIROS = [
  // frontoparietales (por encima de Silvio)
  [[-0.88,  0.20], [-0.45,  0.46], [ 0.02,  0.50], 0.055],   // frontal superior
  [[-0.92,  0.02], [-0.50,  0.22], [-0.06,  0.30], 0.055],   // frontal medio
  [[-0.80, -0.16], [-0.48,  0.00], [-0.16,  0.06], 0.050],   // frontal inferior
  [[ 0.14,  0.50], [-0.02,  0.26], [-0.14,  0.00], 0.046],   // precentral
  [[ 0.34,  0.50], [ 0.18,  0.28], [ 0.02,  0.04], 0.046],   // postcentral
  [[ 0.36,  0.50], [ 0.62,  0.42], [ 0.86,  0.22], 0.055],   // parietal superior
  [[ 0.50,  0.16], [ 0.74,  0.14], [ 0.92,  0.00], 0.052],   // supramarginal y angular
  [[ 0.72,  0.14], [ 0.92,  0.00], [ 0.94, -0.16], 0.050],   // occipital
  // temporales (por debajo de Silvio)
  [[-0.30, -0.40], [ 0.12, -0.30], [ 0.62, -0.14], 0.050],   // temporal superior
  [[-0.26, -0.52], [ 0.14, -0.44], [ 0.58, -0.28], 0.048],   // temporal medio
  [[-0.16, -0.62], [ 0.16, -0.54], [ 0.50, -0.42], 0.046],   // temporal inferior
  // Tres zonas se quedaban lisas en el render y no por casualidad: son las que no tienen giro con
  // nombre en la lamina, pero en el cerebro estan tan plegadas como el resto.
  [[-0.70, -0.26], [-0.50, -0.20], [-0.28, -0.10], 0.048],   // orbital
  [[-0.12, -0.04], [ 0.14,  0.02], [ 0.42,  0.10], 0.044],   // opercular
  [[ 0.50, -0.34], [ 0.72, -0.30], [ 0.88, -0.18], 0.046],   // occipitotemporal
];

/* En una lateral se ven mas cordones que giros con nombre, porque cada giro se PLIEGA y asoma dos
   veces. En vez de dibujar veintitantas curvas a mano, cada una se duplica desplazandola por su
   normal: se conserva la direccion —que es lo que hace que el patron se lea como un cerebro— y el
   detalle sale gratis. Se calcula una vez al cargar el modulo. */
const CORDONES = GIROS.flatMap(([p0, p1, p2, w], i) => {
  const dx = p2[0] - p0[0], dy = p2[1] - p0[1], L = Math.hypot(dx, dy) || 1;
  const nx = -dy / L, ny = dx / L;
  // Ni la separacion ni el grosor son iguales para todos. Con un unico valor los cordones salian
  // como tuberia extruida; un cerebro tiene los pliegues desiguales, y esa desigualdad es la mitad
  // de lo que hace que se lea como tejido y no como pieza fabricada. Determinista: depende del
  // indice, no del azar.
  const j = (k) => 0.78 + 0.34 * (((i * 7 + k * 13) % 5) / 4);
  // Cada cordon lleva su propio serpenteo: amplitud, frecuencia y fase distintas. Sin esto todos
  // ondulaban IGUAL —la onda del bucle depende del punto, no del cordon— y el conjunto se leia a
  // veta de madera. Se aplica al construir, asi que no cuesta nada en el bucle.
  const zig = (k) => [0.012 + 0.010 * (((i * 5 + k * 11) % 4) / 3),      // amplitud
                      7 + 4 * (((i * 3 + k * 7) % 5) / 4),               // frecuencia
                      ((i * 13 + k * 29) % 17) / 17 * Math.PI * 2];      // fase
  const corre = (s, k) => [[p0[0] + nx * s, p0[1] + ny * s],
                           [p1[0] + nx * s, p1[1] + ny * s],
                           [p2[0] + nx * s, p2[1] + ny * s], w * 0.62 * j(k),
                           nx, ny, zig(k)];
  const sep = 0.072 + 0.020 * (((i * 3) % 4) / 3);
  // Dos anillos, no uno. Con uno solo quedaban mesetas lisas entre familias de giros, y una zona
  // lisa en un cerebro se lee como un agujero: no hay ni un milimetro de cortex sin plegar. Los
  // del anillo de fuera salen a veces de la silueta y ahi se recortan solos, que es lo que se
  // quiere — los giros de verdad tampoco caben todos en la vista.
  return [[p0, p1, p2, w * 0.70 * j(0), nx, ny, zig(0)],
          corre(sep, 1), corre(-sep, 2),
          corre(sep * 2.05, 3), corre(-sep * 2.05, 4)];
});

/* Los cordones, convertidos en SEGMENTOS una sola vez al cargar el modulo.

   Dos cosas se arreglan aqui a la vez, y las dos se vieron mirando el render:

   1. Coste. Reevaluar el polinomio de Bezier de cada cordon en cada uno de los 65.536 pixeles
      tardaba 2,3 s. Muestreado una vez, en el bucle solo queda aritmetica.
   2. Abalorios. Medir la distancia a los PUNTOS de la muestra deja los cordones hechos un rosario
      de cuentas. Se mide al SEGMENTO entre puntos, y entonces diez muestras por curva sobran —una
      Bezier cuadratica es mansa— y de paso el coste baja otra vez.

   Se guarda 1/anchura^2 en vez de la anchura para no dividir dentro del bucle. */
const SEGMENTOS = (() => {
  // Sube a 16 muestras: con el serpenteo la curva ya no es mansa y 10 segmentos la angulaban.
  const M = 16, ax = [], ay = [], dx = [], dy = [], il = [], iw = [];
  for (const [p0, p1, p2, w, nx, ny, [amp, frec, fase]] of CORDONES) {
    const en = (t) => {
      const u = 1 - t;
      // el serpenteo se apaga en los extremos: un cordon no acaba en un latigazo
      const s = amp * Math.sin(frec * t + fase) * Math.sin(Math.PI * t);
      return [u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0] + nx * s,
              u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1] + ny * s];
    };
    let [px, py] = en(0);
    for (let k = 1; k <= M; k++) {
      const t = k / M;
      const [qx, qy] = en(t);
      const vx = qx - px, vy = qy - py;
      ax.push(px); ay.push(py); dx.push(vx); dy.push(vy);
      il.push(1 / Math.max(1e-9, vx * vx + vy * vy));
      iw.push(1 / (w * w));
      px = qx; py = qy;
    }
  }
  return { ax: Float64Array.from(ax), ay: Float64Array.from(ay),
           dx: Float64Array.from(dx), dy: Float64Array.from(dy),
           il: Float64Array.from(il), iw: Float64Array.from(iw),
           w: CORDONES.flatMap(([, , , w]) => Array(M).fill(w)), n: ax.length };
})();

/* Una rejilla que dice que segmentos pueden importarle a cada zona.

   Sin ella el bucle miraba los 330 segmentos en cada uno de los 65.536 pixeles y generar el troquel
   tardaba 1,4 s de hilo principal. Un cordon solo influye a tres anchuras de distancia, asi que
   casi todos esos 330 sobraban siempre. Con celdas de 0,12 quedan unas decenas por celda.

   El margen de 3*anchura no es un numero bonito: exp(-9) es 1e-4, o sea que mas alla de tres
   anchuras el cordon ya no mueve ni un nivel de gris. Recortar mas si dejaria costura.

   El tamaño de celda esta MEDIDO, no elegido: 0.10 -> 366 ms, 0.07 -> 283, 0.05 -> 187,
   0.035 -> 204, 0.025 -> 333. Por debajo de 0.05 el coste de construir la rejilla y los fallos de
   cache se comen lo que ahorra mirar menos segmentos. */
const CELDA = 0.05;
const REJILLA = (() => {
  const cx = Math.ceil((2 * VX) / CELDA), cy = Math.ceil((VY_ARRIBA - VY_ABAJO) / CELDA);
  const celdas = Array.from({ length: cx * cy }, () => []);
  for (let k = 0; k < SEGMENTOS.n; k++) {
    const x0 = SEGMENTOS.ax[k], y0 = SEGMENTOS.ay[k];
    const x1 = x0 + SEGMENTOS.dx[k], y1 = y0 + SEGMENTOS.dy[k];
    const m = 3 * SEGMENTOS.w[k] + CELDA;
    const i0 = Math.max(0, Math.floor((Math.min(x0, x1) - m + VX) / CELDA));
    const i1 = Math.min(cx - 1, Math.floor((Math.max(x0, x1) + m + VX) / CELDA));
    const j0 = Math.max(0, Math.floor((VY_ARRIBA - Math.max(y0, y1) - m) / CELDA));
    const j1 = Math.min(cy - 1, Math.floor((VY_ARRIBA - Math.min(y0, y1) + m) / CELDA));
    for (let j = j0; j <= j1; j++) for (let i = i0; i <= i1; i++) celdas[j * cx + i].push(k);
  }
  return { cx, cy, celdas: celdas.map((c) => Int32Array.from(c)) };
})();

// Cerebelo: elipse bajo el occipital. cx positivo y cy negativo lo meten DEBAJO Y DETRAS, que es lo
// que lo distingue de una bola pegada al lado.
const CB = { cx: 0.42, cy: -0.44, rx: 0.33, ry: 0.19, alto: 0.58 };
// Tronco: cono romo que baja por detras del temporal y por delante del cerebelo.
const TR = { x0: 0.10, y0: -0.30, x1: 0.02, y1: -0.72, r0: 0.16, r1: 0.09 };

/** Muestrea una Bezier cuadratica en una polilinea de `m` segmentos. */
const aPolilinea = (p0, p1, p2, m) => {
  const s = [];
  let px = p0[0], py = p0[1];
  for (let k = 1; k <= m; k++) {
    const t = k / m, u = 1 - t;
    const qx = u * u * p0[0] + 2 * u * t * p1[0] + t * t * p2[0];
    const qy = u * u * p0[1] + 2 * u * t * p1[1] + t * t * p2[1];
    const vx = qx - px, vy = qy - py;
    s.push([px, py, vx, vy, 1 / Math.max(1e-9, vx * vx + vy * vy)]);
    px = qx; py = qy;
  }
  return s;
};
const SILVIO_S = aPolilinea(SILVIO[0], SILVIO[1], SILVIO[2], 14);
const ROLANDO_S = aPolilinea(ROLANDO[0], ROLANDO[1], ROLANDO[2], 10);
/** Distancia de un punto a una polilinea ya muestreada. */
const distPoli = (x, y, poli) => {
  let mejor = Infinity;
  for (let k = 0; k < poli.length; k++) {
    const [ax, ay, dx, dy, il] = poli[k];
    const rx = x - ax, ry = y - ay;
    let u = (rx * dx + ry * dy) * il;
    u = u < 0 ? 0 : u > 1 ? 1 : u;
    const ex = rx - u * dx, ey = ry - u * dy;
    const s = ex * ex + ey * ey;
    if (s < mejor) mejor = s;
  }
  return Math.sqrt(mejor);
};

/** El campo de alturas del cerebro. Devuelve Float32Array(lado*lado) con valores en [0,1]. */
export function troquelCerebro(lado = LADO) {
  const N = lado;
  const h = new Float32Array(N * N);

  for (let gy = 0; gy < N; gy++) {
    const y = VY_ARRIBA - (gy / (N - 1)) * (VY_ARRIBA - VY_ABAJO);
    for (let gx = 0; gx < N; gx++) {
      const x = (gx / (N - 1) - 0.5) * 2 * VX;
      let v = 0;

      // ——— el cortex ———
      const th = Math.atan2(y / ALTO, x);
      const rho = Math.hypot(x, y / ALTO);
      const R = radio(th);
      if (rho < R) {
        // Meseta con caida rapida al borde, no media esfera: una cupula sobre una moneda se lee
        // como un boton. El exponente bajo aplana el centro y deja el volumen en el canto.
        v = Math.pow(1 - (rho / R) * (rho / R), 0.38);

        // ——— las circunvoluciones: los cordones, y los surcos como lo que queda entre ellos ———
        // El ruido no dibuja nada, solo ondula el cordon para que no parezca un tubo de fabrica.
        const onda = (ruido(x * 3.4 + 11, y * 3.4 + 7) - 0.5) * 0.030
                   + (ruido(x * 9.0 + 3, y * 9.0 + 19) - 0.5) * 0.016;
        // El cordon mas cercano manda: q es (distancia/anchura)^2, y el relieve es exp(-q). La
        // onda desplaza el punto de medida, no la altura: asi el cordon SERPENTEA en vez de
        // parpadear, que es la diferencia entre un pliegue y un tubo de fabrica.
        const mx = x + onda, my = y - onda;
        const ci = Math.min(REJILLA.cx - 1, Math.max(0, Math.floor((mx + VX) / CELDA)));
        const cj = Math.min(REJILLA.cy - 1, Math.max(0, Math.floor((VY_ARRIBA - my) / CELDA)));
        const cerca = REJILLA.celdas[cj * REJILLA.cx + ci];
        let q = Infinity;
        for (let c = 0; c < cerca.length; c++) {
          const k = cerca[c];
          const rx = mx - SEGMENTOS.ax[k], ry = my - SEGMENTOS.ay[k];
          let u = (rx * SEGMENTOS.dx[k] + ry * SEGMENTOS.dy[k]) * SEGMENTOS.il[k];
          u = u < 0 ? 0 : u > 1 ? 1 : u;
          const ex = rx - u * SEGMENTOS.dx[k], ey = ry - u * SEGMENTOS.dy[k];
          const s = (ex * ex + ey * ey) * SEGMENTOS.iw[k];
          if (s < q) q = s;
        }
        // exp(-q) es una campana: cima puntiaguda y falda ancha, o sea un tubo. Un giro tiene la
        // cima PLANA y el surco que lo separa del vecino es estrecho y hondo. exp(-q*q) —una
        // supergaussiana— da justo eso: meseta arriba y pared en el borde.
        const cordon = Math.exp(-q * q);
        // El relieve baja donde NO pasa ningun cordon: eso son los surcos. Se difumina cerca del
        // borde para que los cordones no muerdan la silueta.
        v -= 0.285 * (1 - cordon) * cl01((R - rho) / 0.10);

        const dS = distPoli(x, y, SILVIO_S);

        // ——— las dos cisuras con nombre ———
        // Silvio separa el temporal del frontoparietal; Rolando es la diagonal de arriba, y es lo
        // que el ojo usa para decir «cerebro» en vez de «nuez». Rolando va DESPUES de las bandas y
        // las corta, que es exactamente lo que hace el surco central.
        v -= PROF_SILVIO * Math.exp(-Math.pow(dS / ANCHO_SILVIO, 2));
        const dR = distPoli(x, y, ROLANDO_S);
        v -= PROF_ROLANDO * Math.exp(-Math.pow(dR / ANCHO_ROLANDO, 2));
      }

      // ——— el cerebelo: mas bajo que el cortex, con laminillas finas y ordenadas ———
      // Las laminillas NO son circunvoluciones: van mucho mas juntas y mucho mas paralelas.
      const qx = (x - CB.cx) / CB.rx, qy = (y - CB.cy) / CB.ry;
      const q = Math.hypot(qx, qy);
      if (q < 1) {
        const lam = 0.5 - 0.5 * Math.sin(y * 118 - x * 26 + (ruido(x * 5 + 31, y * 5 + 2) - 0.5) * 0.8);
        const cb = CB.alto * Math.pow(1 - q * q, 0.42) - 0.10 * lam;
        if (cb > v) v = cb;
      }

      // ——— el tronco ———
      const t = cl01((y - TR.y1) / (TR.y0 - TR.y1));
      const ex = TR.x1 + (TR.x0 - TR.x1) * t, er = TR.r1 + (TR.r0 - TR.r1) * t;
      if (y < TR.y0 && Math.abs(x - ex) < er) {
        const tb = 0.52 * Math.pow(1 - Math.pow((x - ex) / er, 2), 0.5) * cl01((y - TR.y1) / 0.10);
        if (tb > v) v = tb;
      }

      h[gy * N + gx] = cl01(v);
    }
  }

  // Dos pasadas de media 3x3. Lo acuñado tiene siempre el hombro caido: sin esto el borde de un
  // surco se lee como una pegatina. Es la misma suavizacion que usa el troquel del dolar en
  // pieza-moneda.js, y por el mismo motivo.
  for (let paso = 0; paso < 2; paso++) {
    const o = h.slice();
    for (let y = 1; y < N - 1; y++) for (let x = 1; x < N - 1; x++) {
      let s = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) s += o[(y + dy) * N + x + dx];
      h[y * N + x] = s / 9;
    }
  }
  return h;
}
