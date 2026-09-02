// cerebro.js — la pieza central del hero, REANIMADA DESDE EL VIDEO DE CARLOS.
// window.CEREBRO_FORMA (generado por web/forma_desde_video.py) trae el CONTORNO real y la CAJA; la
// luz llega en dos PNG (cerebro-fase-0.png / cerebro-fase-1.png), el recorte NATIVO del video en
// color. Aqui se hornean UNA vez dos laminas RGBA (fase apagada y encendida) leyendo UN pixel del
// PNG por cada pixel de lamina — el techo de detalle es el propio video, no una malla interpolada —
// y cada frame solo compone: dos drawImage recortados por la silueta.
//
// El latido es la interpolacion entre las dos laminas: el mismo cerebro del video respirando.
//
// window.CerebroPieza.monta(hueco, alFallar) devuelve {ritmo(n), golpe(), mira(x,y), alZona(cb)}
// o null si no hay datos de forma (app.js cae al svg). Si un PNG falla al cargar, llama alFallar().
window.CerebroPieza = (() => {
  'use strict';
  // La carpeta de los PNG NO se fija a mano: este MISMO fichero lo sirve la consola bajo /ui/ y el
  // sitio publico bajo /static/ (el publicador lo copia tal cual, sin tocar una linea). Se deduce
  // de la URL de este script. Si se fijara, el sitio que no coincidiera daria 404 y caeria al
  // vector — sin error visible, solo una pieza que no late.
  const CARPETA = (document.currentScript ? document.currentScript.src : '').replace(/[^/]*$/, '') || '/ui/';
  const VB = 880;
  const TAU = Math.PI * 2;
  // Lado de la lamina horneada. OJO: NO es "un pixel por pixel de origen" — los PNG del video son
  // de 279x231, asi que aqui ya se esta ampliando. El techo de detalle es el video (864x480), no
  // este numero: subirlo no añade informacion, solo interpola mas fino. Esta a 1024 (no 512)
  // porque la pieza se muestra a ~940px: hornear por debajo del tamaño de pantalla dibujaba el
  // escalado del navegador, que bandea mas que este. Para mas detalle de verdad hace falta un
  // video de origen mayor.
  const LAM = 1024;
  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // la rampa de cobre: del surco hundido al giro iluminado, y el blanco calido del reflejo
  const SURCO = [74, 30, 18];
  const PIEL = [226, 152, 112];
  const REFLEJO = [255, 224, 184];
  const FISURA = [255, 116, 16];
  const NUCLEO = [255, 224, 168];
  const ORBITA = '150,180,190';

  // la oleada en modo recorrido: viaje entre zonas con una parada breve en cada una
  const T_VIAJE = 0.8;      // segundos de viaje entre dos zonas
  const T_PARADA = 0.6;     // segundos detenido en cada zona

  // cinco zonas / cinco mentes — elipses sobre la anatomia real, en coordenadas del viewBox.
  // El ORDEN importa: la oleada en modo recorrido viaja de zona en zona en este orden, y cada zona
  // nombra a la persona correspondiente de la tabla persona() de app.js via su slug.
  const ZONAS = [
    { slug: 'elisa',         cx: 165, cy: 400, rx:  90, ry: 155, rot: 0 },  // polo frontal, izquierda
    { slug: 'carlos-barez',  cx: 400, cy: 235, rx: 160, ry: 100, rot: 0 },  // parietal, arriba
    { slug: 'jorne',         cx: 350, cy: 545, rx: 120, ry: 100, rot: 0 },  // temporal, centro-abajo
    { slug: 'daniel-ferrer', cx: 660, cy: 590, rx: 115, ry: 110, rot: 0 },  // cerebelo, derecha-abajo
    { slug: 'ines-torres',   cx: 450, cy: 700, rx:  95, ry:  65, rot: 0 }   // tallo, abajo
  ];

  const enZona = (x, y, z) => {
    const dx = x - z.cx, dy = y - z.cy;
    const c = Math.cos(-z.rot), s = Math.sin(-z.rot);
    const u = dx * c - dy * s, v = dx * s + dy * c;
    return (u * u) / (z.rx * z.rx) + (v * v) / (z.ry * z.ry) <= 1;
  };

  // el foco de la oleada en modo recorrido: salta de zona en zona, parando en cada una
  const focoRecorrido = (t) => {
    const n = ZONAS.length, seg = T_VIAJE + T_PARADA;
    const paso = Math.floor(t / seg);
    const idx = ((paso % n) + n) % n;
    const dentro = t - paso * seg;
    const a = ZONAS[idx], b = ZONAS[(idx + 1) % n];
    if (dentro < T_PARADA) return { x: a.cx, y: a.cy, a: 1 };
    const p = (dentro - T_PARADA) / T_VIAJE;
    const e = p * p * (3 - 2 * p);
    return { x: a.cx + (b.cx - a.cx) * e, y: a.cy + (b.cy - a.cy) * e, a: 1 - 0.4 * Math.sin(p * Math.PI) };
  };

  const monta = (hueco, alFallar) => {
    const F = window.CEREBRO_FORMA;
    if (!F || !F.contorno || F.contorno.length < 30) return null;

    const [X0, Y0, X1, Y1] = F.caja;
    const AN = X1 - X0, AL = Y1 - Y0;
    const CX = (X0 + X1) / 2, CY = (Y0 + Y1) / 2;

    const silueta = new Path2D();
    F.contorno.forEach(([x, y], i) => i ? silueta.lineTo(x, y) : silueta.moveTo(x, y));
    silueta.closePath();

    // la mascara: se rasteriza la silueta UNA vez y se lee su alfa. Hacer punto-en-poligono por
    // pixel serian decenas de millones de comprobaciones; esto lo hace el propio canvas.
    const mascara = document.createElement('canvas');
    mascara.width = mascara.height = LAM;
    const mctx = mascara.getContext('2d');
    mctx.setTransform(LAM / AN, 0, 0, LAM / AL, -X0 * LAM / AN, -Y0 * LAM / AL);
    mctx.fillStyle = '#fff';
    mctx.fill(silueta);
    const alfa = mctx.getImageData(0, 0, LAM, LAM).data;

    const sobreTejido = (x, y) => {
      if (x < X0 || x > X1 || y < Y0 || y > Y1) return false;
      const mx = Math.floor((x - X0) / AN * LAM);
      const my = Math.floor((y - Y0) / AL * LAM);
      return alfa[(my * LAM + mx) * 4 + 3] > 10;
    };

    // hornea UNA lamina desde un PNG: se estira a cuadrado aqui y se compensa al dibujarla en
    // AN x AL; el estirado intermedio no distorsiona (cada eje vuelve a su pixel de origen).
    const lamina = (img) => {
      const c = document.createElement('canvas');
      c.width = c.height = LAM;
      const cg = c.getContext('2d');
      cg.imageSmoothingQuality = 'high';
      cg.drawImage(img, 0, 0, LAM, LAM);
      const src = cg.getImageData(0, 0, LAM, LAM).data;
      const out = cg.createImageData(LAM, LAM);
      const d = out.data;
      for (let py = 0; py < LAM; py++) {
        for (let px = 0; px < LAM; px++) {
          const i = (py * LAM + px) * 4;
          const dentro = alfa[i + 3] / 255;
          if (dentro < 0.02) continue;
          const r = src[i], g = src[i + 1], b = src[i + 2];
          const t = (((r * 2 + g * 3 + b) / 6) / 255) ** 1.15;
          // la brasa no es todo lo calido del render: solo el cuartil alto de rojez es fisura.
          // Sin esa puerta el naranja cubre la pieza entera y deja de significar nada.
          const rojez = Math.max(0, r - (g + b) / 2);
          // 86 es el p75 medido sobre cerebro-fase-1.png; 64 es lo que queda hasta el maximo (150).
          // El corte se hace con smoothstep y no con una rampa lineal recortada: el origen son
          // 279x231 px ampliados 6x, y con una rampa dura cada escalon del degradado ampliado sale
          // como una meseta de color con borde visible. smoothstep no añade detalle —eso no lo
          // puede hacer nadie desde aqui— pero reparte el salto y las bandas dejan de dibujarse.
          const cruda = Math.max(0, Math.min(1, (rojez - 86) / 64));
          // tramado ordenado de +-1.5/255: rompe las bandas que sobreviven al suavizado. Se calcula
          // de la posicion, no al azar, para que la lamina salga identica en cada horneado.
          const trama = (((px & 1) ^ (py & 1)) - 0.5) * (1.5 / 255);
          const fisura = Math.max(0, Math.min(1, cruda * cruda * (3 - 2 * cruda) + trama));
          const alto = Math.max(0, (t - 0.72) / 0.28);
          // vinieta horneada: oscurecer hacia el borde de la caja redondea la masa
          const nx = (px / LAM - 0.5) * 2, ny = (py / LAM - 0.5) * 2;
          const vin = 1 - 0.5 * Math.min(1, (nx * nx + ny * ny) * 0.9);
          // el recorte a 255 se hace PROPORCIONAL, no por canal: recortar canal a canal satura el
          // rojo primero y la fisura mas caliente se vuelve verdosa. Escalar los tres mantiene el
          // tono y solo baja la intensidad.
          const rgb = [0, 0, 0];
          let pico = 0;
          for (let k = 0; k < 3; k++) {
            let v = SURCO[k] + (PIEL[k] - SURCO[k]) * t;
            v += (REFLEJO[k] - v) * alto * 0.6;
            v = v * vin + FISURA[k] * fisura * 0.9 + NUCLEO[k] * fisura * fisura * 0.45;
            rgb[k] = v;
            if (v > pico) pico = v;
          }
          const recorte = pico > 255 ? 255 / pico : 1;
          for (let k = 0; k < 3; k++) d[i + k] = rgb[k] * recorte;
          d[i + 3] = Math.min(1, t * 1.9 + fisura * 0.9) * dentro * 255;
        }
      }
      cg.putImageData(out, 0, 0);
      return c;
    };

    const lienzo = document.createElement('canvas');
    lienzo.width = lienzo.height = VB;
    lienzo.setAttribute('role', 'img');
    lienzo.setAttribute('aria-label', 'El Cerebro: la pieza central del equipo');
    hueco.replaceChildren(lienzo);
    const ctx = lienzo.getContext('2d');
    ctx.imageSmoothingQuality = 'high';

    let escala = 1;
    const medir = () => {
      const css = lienzo.clientWidth || 520;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      lienzo.width = lienzo.height = Math.round(css * dpr);
      escala = (css * dpr) / VB;
      ctx.imageSmoothingQuality = 'high';
    };
    new ResizeObserver(medir).observe(lienzo);
    medir();

    let apagada = null, encendida = null, listo = false, entradaIni = 0;
    let vel = 1, velBase = 1, velObjetivo = 1, hover = false, recorrido = false;
    // en REDUCE no hay bucle: tAcum se fija a la fase encendida para que cada repintado (ritmo,
    // golpe, zona) salga igual que la lamina inicial y la pieza aparezca ya encendida, sin pasada
    let tAcum = REDUCE ? 1.85 : 0, ultimo = 0, golpeEn = -1;
    let luzX = 0, luzY = 0, luzOX = 0, luzOY = 0;            // la luz que sigue al puntero (B.1)
    let focoX = 0, focoY = 0, focoSobre = false, focoA = 0;  // el foco calido bajo el cursor (B.2)
    let zona = -1, zonaA = 0;                                // la zona iluminada y su realce (B.3)
    let zonaFirma = -1; // la zona de quien firma; manda cuando el puntero no esta encima (fase 2.1)
    let alZonaCb = null;

    const pinta = (t) => {
      if (!listo) { ctx.setTransform(escala, 0, 0, escala, 0, 0); ctx.clearRect(0, 0, VB, VB); return; }
      const golpeT = golpeEn < 0 ? Infinity : (performance.now() - golpeEn) / 1000;
      const flash = golpeT < 0.9 ? Math.max(0, 1 - golpeT / 0.9) : 0;
      const m = Math.min(1, 0.45 + 0.55 * (0.5 + 0.5 * Math.sin(t * 0.8)) + flash);

      // la entrada: la pieza sube de 0 a su alfa en ~900 ms, una sola vez (con REDUCE ya encendida)
      const e = (performance.now() - entradaIni) / 1000;
      const entrada = REDUCE ? 1 : Math.min(1, e / 0.9);

      // el centro de la luz sigue al puntero: empujon de LUZ, no de forma (la masa no se deforma)
      const bx = CX + luzX * 70, by = CY + luzY * 55;

      ctx.setTransform(escala, 0, 0, escala, 0, 0);
      ctx.clearRect(0, 0, VB, VB);
      ctx.translate(Math.sin(t * 0.4) * 3, Math.cos(t * 0.29) * 2.4); // nunca del todo quieta

      // 1. el halo: la penumbra caliente detras de la masa, con su centro siguiendo al puntero
      ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createRadialGradient(bx, by, 40, bx, by, 430);
      g.addColorStop(0, `rgba(220,80,0,${0.09 + 0.05 * m + 0.16 * flash})`);
      g.addColorStop(0.5, `rgba(220,80,0,${0.03 + 0.02 * m + 0.08 * flash})`);
      g.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = g;
      ctx.fillRect(-10, -10, VB + 20, VB + 20);

      // 2. los anillos: el armazon frio. Lo unico frio de la pieza, y por eso el cobre se lee caliente
      ctx.lineWidth = 0.9;
      for (let i = 0; i < 3; i++) {
        const rot = t * (0.06 + i * 0.02) + i * 1.1;
        ctx.strokeStyle = `rgba(${ORBITA},${0.09 + 0.04 * Math.sin(t * 0.6 + i)})`;
        ctx.beginPath();
        ctx.ellipse(CX, CY, 372 - i * 16, 300 - i * 46, rot, 0, TAU);
        ctx.stroke();
      }

      // 3. el bloom: la lamina encendida, mas grande y casi transparente, con su centro desplazado
      ctx.globalAlpha = 0.07 * m + 0.09 * flash;
      ctx.drawImage(encendida, X0 - AN * 0.09 + luzX * 70, Y0 - AL * 0.09 + luzY * 55, AN * 1.18, AL * 1.18);
      ctx.globalAlpha = 1;

      // 4. el cuerpo: las dos fases compuestas dentro de la silueta
      ctx.globalCompositeOperation = 'source-over';
      ctx.save();
      ctx.clip(silueta);
      ctx.drawImage(apagada, X0, Y0, AN, AL);
      ctx.globalAlpha = m;
      ctx.drawImage(encendida, X0, Y0, AN, AL);
      ctx.globalAlpha = 1;

      // 4b. el foco calido bajo el cursor: dentro del recorte, para no delatar el ovalo del degradado
      if (focoSobre && focoA > 0.001) {
        ctx.globalCompositeOperation = 'lighter';
        const fo = ctx.createRadialGradient(focoX, focoY, 0, focoX, focoY, 120);
        fo.addColorStop(0, `rgba(255,220,150,${0.18 * focoA})`);
        fo.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = fo;
        ctx.fillRect(focoX - 130, focoY - 130, 260, 260);
      }

      // 4c. el realce de la zona iluminada: acotado a la elipse, mismo mecanismo que el foco
      // la zona efectiva: manda el puntero mientras esta encima; la firma, cuando no
      // (misma precedencia que firmaEstado en app.js). Asi el cerebro se enciende por quien firma.
      const zonaEf = zona >= 0 ? zona : zonaFirma;
      if (zonaEf >= 0 && zonaA > 0.001) {
        const z = ZONAS[zonaEf];
        ctx.save();
        ctx.beginPath();
        ctx.ellipse(z.cx, z.cy, z.rx, z.ry, z.rot, 0, TAU);
        ctx.clip();
        ctx.globalCompositeOperation = 'lighter';
        const re = ctx.createRadialGradient(z.cx, z.cy, 0, z.cx, z.cy, Math.max(z.rx, z.ry));
        re.addColorStop(0, `rgba(255,214,150,${0.16 * zonaA})`);
        re.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = re;
        ctx.fillRect(z.cx - z.rx, z.cy - z.ry, z.rx * 2, z.ry * 2);
        ctx.restore();
      }

      // 5. la oleada: barrido en reposo, recorrido de zona en zona en pensando; en la entrada hace
      //    una pasada completa unica. Nunca con movimiento reducido.
      if (!REDUCE) {
        ctx.globalCompositeOperation = 'lighter';
        if (e < 1.2) {
          const p = e / 1.2;
          const fx = X0 - 90 + (AN + 180) * p;
          const ola = ctx.createLinearGradient(fx - 85, 0, fx + 85, 0);
          ola.addColorStop(0, 'rgba(0,0,0,0)');
          ola.addColorStop(0.5, `rgba(255,236,206,${0.22 + 0.1 * m})`);
          ola.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = ola;
          ctx.fillRect(fx - 85, Y0, 170, AL);
        } else if (recorrido) {
          const f = focoRecorrido(t);
          const ola = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, 120);
          ola.addColorStop(0, `rgba(255,236,206,${(0.24 + 0.12 * m) * f.a})`);
          ola.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = ola;
          ctx.fillRect(f.x - 130, f.y - 130, 260, 260);
        } else {
          const prog = (t * 0.2) % 1.5;
          if (prog < 1) {
            const fx = X0 - 90 + (AN + 180) * prog;
            const ola = ctx.createLinearGradient(fx - 85, 0, fx + 85, 0);
            ola.addColorStop(0, 'rgba(0,0,0,0)');
            ola.addColorStop(0.5, `rgba(255,236,206,${0.22 + 0.1 * m})`);
            ola.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = ola;
            ctx.fillRect(fx - 85, Y0, 170, AL);
          }
        }
      }
      ctx.restore();

      // 6. el filo: un trazo finisimo sobre el contorno para que la masa no termine en niebla
      ctx.globalCompositeOperation = 'lighter';
      ctx.strokeStyle = `rgba(255,224,184,${0.07 + 0.07 * m})`;
      ctx.lineWidth = 1;
      ctx.stroke(silueta);

      // 7. el golpe: la onda al firmar la respuesta
      if (flash > 0) {
        ctx.strokeStyle = `rgba(255,236,206,${0.45 * flash})`;
        ctx.lineWidth = 3;
        ctx.beginPath(); ctx.arc(CX, CY, 90 + golpeT * 640, 0, TAU); ctx.stroke();
      }
      ctx.globalCompositeOperation = 'source-over';

      // 8. la entrada: se funde la pieza entera. destination-in escala el alfa acumulado sin tocar
      //    el color; asi el fundido es uniforme aunque cada capa pinte su propia alfa.
      if (entrada < 1) {
        ctx.globalCompositeOperation = 'destination-in';
        ctx.globalAlpha = entrada;
        ctx.fillStyle = '#fff';
        ctx.fillRect(0, 0, VB, VB);
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
      }
    };

    if (REDUCE) {
      pinta(1.85); // lamina quieta, en la fase encendida
    } else {
      const paso = (ahora) => {
        requestAnimationFrame(paso);
        if (lienzo.offsetParent === null) return; // seccion oculta: no se pinta lo que nadie ve
        const dt = Math.min(0.05, (ahora - ultimo) / 1000 || 0.016);
        ultimo = ahora;
        vel += (velObjetivo - vel) * Math.min(1, dt * 5);
        luzX += (luzOX - luzX) * Math.min(1, dt * 4);
        luzY += (luzOY - luzY) * Math.min(1, dt * 4);
        focoA += ((focoSobre ? 1 : 0) - focoA) * Math.min(1, dt * 4);
        zonaA += (((zona >= 0 ? zona : zonaFirma) >= 0 ? 1 : 0) - zonaA) * Math.min(1, dt * 4);
        tAcum += dt * vel;
        pinta(tAcum);
      };
      requestAnimationFrame(paso);
    }

    hueco.addEventListener('pointerenter', () => { hover = true; velObjetivo = Math.max(velBase, 1.5); });
    hueco.addEventListener('pointerleave', () => {
      hover = false; velObjetivo = velBase;
      focoSobre = false;
      if (zona !== -1) {
        zona = -1;
        if (REDUCE) { zonaA = 0; pinta(tAcum); }
        if (alZonaCb) alZonaCb(null);
      }
    });
    hueco.addEventListener('pointermove', (ev) => {
      const r = lienzo.getBoundingClientRect();
      if (r.width === 0) return;
      const x = (ev.clientX - r.left) / r.width * VB;
      const y = (ev.clientY - r.top) / r.height * VB;
      focoX = x; focoY = y;
      focoSobre = !REDUCE && sobreTejido(x, y);
      const z = ZONAS.findIndex((zl) => enZona(x, y, zl));
      if (z !== zona) {
        zona = z;
        if (REDUCE) { zonaA = z >= 0 ? 1 : 0; pinta(tAcum); }
        if (alZonaCb) alZonaCb(z >= 0 ? ZONAS[z].slug : null);
      }
    });

    const cargar = (src) => new Promise((res, rej) => {
      const img = new Image();
      img.onload = () => res(img);
      img.onerror = () => rej(new Error(src));
      img.src = src;
    });

    Promise.all([cargar(CARPETA + 'cerebro-fase-0.png'), cargar(CARPETA + 'cerebro-fase-1.png')])
      .then(([a, en]) => {
        apagada = lamina(a);
        encendida = lamina(en);
        listo = true;
        entradaIni = performance.now();
        if (REDUCE) pinta(tAcum);
      })
      .catch(() => { if (alFallar) alFallar(); });

    return {
      ritmo(n) { velBase = n; velObjetivo = hover ? Math.max(n, 1.5) : n; recorrido = n > 1; if (REDUCE) pinta(tAcum); },
      golpe() { golpeEn = performance.now(); if (REDUCE) { pinta(tAcum); golpeEn = -1; } },
      mira(x, y) { luzOX = x; luzOY = y; },
      // enciende la zona de quien acaba de firmar. Un slug desconocido da -1 (ninguna
      // zona): si el enrutador devuelve un agente sin zona, no se enciende ninguna al azar.
      // En REDUCE se pinta ya encendida, como el hover (cerebro.js no anima).
      firma(slug) {
        zonaFirma = ZONAS.findIndex((z) => z.slug === slug);
        if (REDUCE) { zonaA = zonaFirma >= 0 ? 1 : 0; pinta(tAcum); }
      },
      alZona(cb) { alZonaCb = cb; }
    };
  };

  return { monta };
})();
