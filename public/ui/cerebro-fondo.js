// cerebro-fondo.js — el campo ambiental: triangulos outline dispersos por el fondo de TODA la
// pagina (el eco lejano de la constelacion de la pieza), con un acento del espectro Dala que
// cambia con la seccion activa: iris en el chat, ambar en la newsletter, verdant en cartera
// y azul en la biblioteca. app.js avisa con CerebroFondo.seccion(nombre) al cambiar de pestaña.
// Mismo truco que la pieza: Path2D estaticos por (color, fase) y un stroke por grupo por frame;
// la deriva lenta es un translate del conjunto dibujado dos veces para el bucle vertical.
window.CerebroFondo = (() => {
  'use strict';
  // Guarda de doble montaje (Quartz re-ejecuta los scripts del contenido en cada navegacion SPA).
  if (document.querySelector('canvas[data-cerebro-fondo]')) return;
  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const CREMA = '255,237,215';
  const BRONCE = '138,122,104';
  const ACENTOS = {
    chat: '128,82,255',
    newsletter: '255,184,41',
    cartera: '21,132,110',
    biblioteca: '99,140,255'
  };
  const N_TRI = 240;
  const FASES = 4;

  const lienzo = document.createElement('canvas');
  lienzo.dataset.cerebroFondo = '1';
  lienzo.setAttribute('aria-hidden', 'true');
  lienzo.style.cssText = 'position:fixed;inset:0;z-index:-1;pointer-events:none';
  document.body.prepend(lienzo);
  const ctx = lienzo.getContext('2d');

  let W = 0, H = 0, dpr = 1;
  const grupos = new Map(); // `${esAcento}-${fase}` -> Path2D en coordenadas css
  const construye = () => {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth;
    H = window.innerHeight;
    lienzo.width = Math.round(W * dpr);
    lienzo.height = Math.round(H * dpr);
    grupos.clear();
    for (let i = 0; i < N_TRI; i++) {
      const x = Math.random() * W;
      const y = Math.random() * H;
      const s = 2 + Math.random() * 3;
      const a = Math.random() * Math.PI * 2;
      const esAcento = Math.random() < 0.22 ? 1 : 0;
      const fase = Math.floor(Math.random() * FASES);
      const clave = esAcento * FASES + fase;
      if (!grupos.has(clave)) grupos.set(clave, new Path2D());
      const ruta = grupos.get(clave);
      const h = s * 0.87;
      const [ca, sa] = [Math.cos(a), Math.sin(a)];
      const v = [[0, -h * 0.72], [s / 2, h * 0.45], [-s / 2, h * 0.45]];
      ruta.moveTo(x + v[0][0] * ca - v[0][1] * sa, y + v[0][0] * sa + v[0][1] * ca);
      ruta.lineTo(x + v[1][0] * ca - v[1][1] * sa, y + v[1][0] * sa + v[1][1] * ca);
      ruta.lineTo(x + v[2][0] * ca - v[2][1] * sa, y + v[2][0] * sa + v[2][1] * ca);
      ruta.closePath();
    }
  };
  window.addEventListener('resize', construye);
  construye();

  // el acento hace transicion suave entre secciones: se interpola el rgb
  const hexA = (rgb) => rgb.split(',').map(Number);
  let acento = hexA(ACENTOS.chat), acentoObjetivo = acento;

  let tAcum = 0, ultimo = 0;
  const pinta = (t) => {
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, W, H);
    ctx.lineJoin = 'round';
    ctx.lineWidth = 1;
    acento = acento.map((v, i) => v + (acentoObjetivo[i] - v) * 0.04);
    // la deriva: el campo entero sube despacio; se dibuja dos veces para coser el bucle
    const deriva = (t * 7) % H;
    for (const pasada of [-deriva, H - deriva]) {
      ctx.save();
      ctx.translate(0, pasada);
      grupos.forEach((ruta, clave) => {
        const esAcento = clave >= FASES;
        const f = clave % FASES;
        const titila = 0.5 + 0.5 * Math.sin(t * 1.1 + (f * Math.PI * 2) / FASES);
        const rgb = esAcento ? acento.map(Math.round).join(',') : (f % 2 ? CREMA : BRONCE);
        ctx.strokeStyle = `rgba(${rgb},${0.05 + 0.16 * titila})`;
        ctx.stroke(ruta);
      });
      ctx.restore();
    }
  };

  if (REDUCE) {
    pinta(1.3);
  } else {
    const paso = (ahora) => {
      requestAnimationFrame(paso);
      const dt = Math.min(0.05, (ahora - ultimo) / 1000 || 0.016);
      ultimo = ahora;
      tAcum += dt;
      pinta(tAcum);
    };
    requestAnimationFrame(paso);
  }

  return {
    seccion(nombre) { acentoObjetivo = hexA(ACENTOS[nombre] || ACENTOS.chat); if (REDUCE) pinta(tAcum); }
  };
})();
