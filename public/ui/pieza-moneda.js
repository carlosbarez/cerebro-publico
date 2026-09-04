// pieza-moneda.js — el OBJETO: la moneda de oro, dos caras acuñadas, en three.js.
//
// El transporte —donde esta y cuanto mide— es de moneda.js. Aqui solo se dibuja.
//
// Viene de la pieza de `feat/rediseno-b2`, recortada. Fuera el cartel del titular dentro de la
// escena, fuera el mapa de entorno con el texto reflejado y fuera el contrato de zonas
// (ritmo/golpe/mira/alZona/firma): eso era de una direccion en la que la moneda ERA la portada. De
// marca no nombra agentes ni refleja titulares.
//
// Se conserva lo que si es la moneda: la rejilla POLAR (borde redondo de verdad, sin el dentado de
// recortar un damero contra una circunferencia), el troquel del dolar con sus hombros, y el volteo
// con pausa en cada cara.
//
// La cara del cerebro sale de troquel-cerebro.js.
import * as THREE from './lib/three.module.min.js';
import { troquelCerebro, LADO as N, ASPECTO } from './troquel-cerebro.js';

const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const R = 1.0;            // radio de la moneda
const GROSOR = .15;
const RELIEVE = .052;     // cuanto sobresale lo acuñado. Mas, y parece un juguete de plastico.
const CAMPO = .80;        // fraccion del radio que ocupa el troquel a lo ancho: el resto es orla
const tono = (n) => getComputedStyle(document.documentElement).getPropertyValue(n).trim();

/** El troquel del dolar: el glifo a canvas y suavizado, para que el relieve tenga hombros. */
const troquelDolar = () => {
  const c = document.createElement('canvas'); c.width = c.height = N;
  const g = c.getContext('2d');
  g.fillStyle = '#000'; g.fillRect(0, 0, N, N);
  g.fillStyle = '#fff';
  g.textAlign = 'center'; g.textBaseline = 'middle';
  g.font = `700 ${Math.round(N * .95)}px Inter, ui-sans-serif, system-ui, sans-serif`;
  g.fillText('$', N / 2, N * .52);
  const d = g.getImageData(0, 0, N, N).data;
  const h = new Float32Array(N * N);
  for (let i = 0; i < N * N; i++) h[i] = d[i * 4] / 255;
  // Un glifo sin suavizar da un relieve con paredes verticales, que en una moneda se lee como una
  // pegatina: lo acuñado tiene siempre el borde caido.
  for (let paso = 0; paso < 3; paso++) {
    const o = h.slice();
    for (let y = 1; y < N - 1; y++) for (let x = 1; x < N - 1; x++) {
      let s = 0;
      for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) s += o[(y + dy) * N + x + dx];
      h[y * N + x] = s / 9;
    }
  }
  return h;
};

/**
 * La moneda entera en una sola malla: cara, contracara y canto.
 *
 * La rejilla es POLAR (anillos x sectores) y no cuadrada: el borde sale redondo de verdad. El
 * troquel de la contracara se muestrea con la x invertida porque al voltear la moneda sobre su eje
 * vertical el mundo se refleja: sin ese signo, el dolar sale del reves cada media vuelta.
 */
const monedaGeo = (anillos, sectores, frente, dorso, alto) => {
  const pos = [], idx = [];
  // El troquel se estira sobre el campo de la moneda con cada eje por separado: el cerebro es mucho
  // mas largo que alto y con un mapa cuadrado quedaba una efigie pequeña en medio del oro.
  const alt = (h, x, y) => {
    const gx = Math.round(((x / CAMPO) * .5 + .5) * (N - 1));
    const gy = Math.round((.5 - (y / (CAMPO * alto)) * .5) * (N - 1));
    if (gx < 0 || gy < 0 || gx >= N || gy >= N) return 0;
    return h[gy * N + gx];
  };
  // orla: el filete elevado del borde y el hombro que baja hacia el campo
  const orla = (r) => Math.max(0, Math.min(1, (r - .84) / .05)) * Math.max(0, Math.min(1, (.985 - r) / .04));
  const cara = (signo, h, base) => {
    const v0 = pos.length / 3;
    for (let i = 0; i <= anillos; i++) {
      const r = (i / anillos) * R;
      for (let j = 0; j < sectores; j++) {
        const a = (j / sectores) * Math.PI * 2;
        const x = Math.cos(a) * r, y = Math.sin(a) * r;
        const relieve = Math.max(alt(h, signo > 0 ? x : -x, y) * Math.max(0, Math.min(1, (.82 - r) / .06)), orla(r));
        pos.push(x, y, signo * (base + RELIEVE * relieve));
      }
    }
    for (let i = 0; i < anillos; i++) for (let j = 0; j < sectores; j++) {
      const a = v0 + i * sectores + j, b = v0 + i * sectores + (j + 1) % sectores;
      const c = a + sectores, d = b + sectores;
      if (signo > 0) { idx.push(a, c, d, a, d, b); } else { idx.push(a, d, c, a, b, d); }
    }
    return v0 + anillos * sectores;   // primer vertice del anillo exterior
  };
  const oF = cara(1, frente, GROSOR / 2);
  const oD = cara(-1, dorso, GROSOR / 2);
  for (let j = 0; j < sectores; j++) {
    const a = oF + j, b = oF + (j + 1) % sectores;
    const c = oD + j, d = oD + (j + 1) % sectores;
    idx.push(a, c, d, a, d, b);
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  g.setIndex(idx);
  g.computeVertexNormals();
  return g;
};

const monta = (hueco) => {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return false; }
  if (!renderer.getContext()) return false;

  const movil = Math.min(window.innerWidth, window.innerHeight) < 700;
  const oro = new THREE.Color(tono('--oro') || '#e8bb55');
  const cuero = tono('--oro-sombra') || '#6b4e2a';
  const fondo = tono('--fondo') || '#100904';
  const oroClaro = tono('--oro') || '#e8bb55';

  // +z es la cara del CEREBRO y -z la del DOLAR. La camara mira desde +z, asi que rotation.y = 0
  // enseña el cerebro y rotation.y = PI el dolar. Lo usa la valvula de movimiento reducido.
  // La malla se dibuja a 200px como mucho (400 con dpr 2). 128x220 anillos por sector eran 56.000
  // vertices para eso: densidad de portada en una insignia. 96x160 deja el borde igual de redondo.
  const geo = monedaGeo(movil ? 72 : 96, movil ? 112 : 160, troquelCerebro(), troquelDolar(), ASPECTO);
  const metal = new THREE.MeshStandardMaterial({ color: oro, metalness: 1, roughness: .27, envMapIntensity: 1.25 });
  const pieza = new THREE.Group();
  pieza.add(new THREE.Mesh(geo, metal));
  const escena = new THREE.Scene();
  escena.add(pieza);

  // El entorno: lo que el oro refleja. Un metal sin nada que reflejar es barro. Se pinta a mano un
  // equirectangular —nada de cargar un HDR: seria una dependencia de red y el sitio no tiene
  // ninguna— con el cuero del mundo y dos luces calidas.
  const ec = document.createElement('canvas'); ec.width = 1024; ec.height = 512;
  const eg = ec.getContext('2d');
  const g2 = eg.createLinearGradient(0, 0, 0, 512);
  // Con metalness 1 el oro NO tiene color propio: es un espejo, y lo que se ve es el entorno. La
  // primera version degradaba de cuero a nogal y la moneda salia bronce oscuro. La banda de arriba
  // tiene que ser CLARA para que haya oro que reflejar.
  g2.addColorStop(0, oroClaro); g2.addColorStop(.42, cuero); g2.addColorStop(1, fondo);
  eg.fillStyle = g2; eg.fillRect(0, 0, 1024, 512);
  eg.fillStyle = 'rgba(255, 236, 200, .95)';
  eg.beginPath(); eg.ellipse(240, 110, 130, 52, 0, 0, 7); eg.fill();
  eg.beginPath(); eg.ellipse(760, 150, 70, 28, 0, 0, 7); eg.fill();
  const entorno = new THREE.CanvasTexture(ec);
  entorno.mapping = THREE.EquirectangularReflectionMapping;
  entorno.colorSpace = THREE.SRGBColorSpace;
  escena.environment = entorno;

  escena.add(new THREE.AmbientLight(0xffe0b8, .38));
  const key = new THREE.DirectionalLight(0xfff0d8, 2.6); key.position.set(-2.0, 2.6, 3.4); escena.add(key);
  const contra = new THREE.DirectionalLight(0xffc98a, 1.1); contra.position.set(2.8, -1.4, -2.2); escena.add(contra);

  const camara = new THREE.PerspectiveCamera(30, 1, .1, 40);
  camara.position.set(0, 0, 4.4);
  renderer.setClearAlpha(0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.25;
  hueco.replaceChildren(renderer.domElement);
  renderer.domElement.style.touchAction = 'none';
  renderer.domElement.style.cursor = 'grab';

  let grande = false;
  const dimensiona = () => {
    const r = hueco.getBoundingClientRect();
    const an = Math.max(1, r.width), al = Math.max(1, r.height);
    // Pixel ratio del dispositivo tambien en pequeño. Bajarlo a 1 «para ahorrar» dejaba un canvas
    // de 18x18 pixeles reales en una pantalla retina: borroso, y lo que se ahorra son 972 pixeles.
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1));
    renderer.setSize(an, al, false);
    camara.aspect = an / al;
    camara.updateProjectionMatrix();
    // Con fov 30 y la camara a 4.4, la media altura visible en el plano de la moneda es
    // tan(15deg)*4.4 = 1.179. Un radio de 1 a escala 1.0 ocupa el 85% de esa altura: se ve la orla
    // entera y queda aire para que el canto no toque la caja al voltear.
    pieza.scale.setScalar(1.0);
  };
  new ResizeObserver(dimensiona).observe(hueco);
  if (window.CerebroMoneda) window.CerebroMoneda.alColocar((g) => { grande = g; dimensiona(); });
  dimensiona();

  // ——— arrastre con inercia ———
  let arrastrando = false, ultimo = null, velY = 0, velX = 0;
  const el = renderer.domElement;
  el.addEventListener('pointerdown', (e) => {
    arrastrando = true; ultimo = { x: e.clientX, y: e.clientY };
    el.setPointerCapture(e.pointerId); el.style.cursor = 'grabbing';
  });
  el.addEventListener('pointermove', (e) => {
    if (!arrastrando) return;
    velY = (e.clientX - ultimo.x) * .010;
    velX = (e.clientY - ultimo.y) * .004;
    pieza.rotation.y += velY;
    pieza.rotation.x = Math.max(-.55, Math.min(.55, pieza.rotation.x + velX));
    ultimo = { x: e.clientX, y: e.clientY };
  });
  const suelta = () => { arrastrando = false; el.style.cursor = 'grab'; };
  el.addEventListener('pointerup', suelta);
  el.addEventListener('pointercancel', suelta);

  // ——— el bucle: la moneda gira sola, despacio y sin parar ———
  // Primero fue volteo con pausa: quieta en una cara, media vuelta, quieta en la otra. Carlos lo
  // cambio por giro continuo. Tiene un precio y conviene que conste: la pausa era lo que hacia
  // barata la pieza —el salto de fotogramas se apoyaba en que no se moviera 8 de cada 9,6
  // segundos— y girando siempre hay que pintar siempre.
  //
  // Se compensa con la CADENCIA. A 19 s por vuelta la moneda avanza 0,33 rad/s: a 30 fps eso es
  // medio grado por fotograma, que nadie distingue de 60. Se pinta a 30 y se ahorra la mitad.
  //
  // El angulo sale del RELOJ, no de acumular incrementos: asi no deriva si el navegador se salta
  // fotogramas —una pestaña de fondo los para del todo— y al volver la moneda esta donde tocaria.
  const VUELTA_S = 19;                          // segundos por vuelta entera
  const VEL = Math.PI * 2 / VUELTA_S;           // radianes por segundo
  const CADENCIA = 1000 / 30;                   // milisegundos entre pinturas
  const t0 = performance.now();
  let base = 0;                                 // lo que aporta la mano, aparte del reloj
  let ultimoPintado = 0, pintadoY = null, pintadoX = null, pintadoAn = 0;
  renderer.setAnimationLoop(() => {
    const ahora = performance.now();
    if (REDUCE) {
      // Sin movimiento la moneda queda en una cara DEFINIDA, nunca en una al azar: el dolar cuando
      // es pequeña (a 18px un cerebro es una mancha) y el cerebro cuando es grande.
      pieza.rotation.y = grande ? 0 : Math.PI;
    } else if (arrastrando) {
      // Con la mano encima manda la mano: se guarda el desfase para que al soltar no de un salto.
      base = pieza.rotation.y - ((ahora - t0) / 1000) * VEL;
    } else {
      base += velY;
      velY *= .93;
      if (Math.abs(velY) < .0004) velY = 0;
      pieza.rotation.y = base + ((ahora - t0) / 1000) * VEL;
      velX *= .93;
      if (Math.abs(velX) > .0004) pieza.rotation.x = Math.max(-.55, Math.min(.55, pieza.rotation.x + velX));
      else pieza.rotation.x += (0 - pieza.rotation.x) * .05;
    }

    // La cadencia. Con la mano encima no se limita: ahi la suavidad se nota en el dedo.
    if (!arrastrando && ahora - ultimoPintado < CADENCIA) return;
    ultimoPintado = ahora;

    // Y aun asi, si de verdad no cambio nada (movimiento reducido, caja quieta) no se pinta.
    const an = renderer.domElement.width;
    if (pintadoY !== null
        && Math.abs(pieza.rotation.y - pintadoY) < 1e-4
        && Math.abs(pieza.rotation.x - pintadoX) < 1e-4
        && an === pintadoAn) return;
    pintadoY = pieza.rotation.y; pintadoX = pieza.rotation.x; pintadoAn = an;
    renderer.render(escena, camara);
  });
  return true;
};

if (window.CerebroMoneda) {
  try { monta(window.CerebroMoneda.hueco()); } catch (e) { console.error('moneda:', e); }
}
