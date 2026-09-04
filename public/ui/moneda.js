// moneda.js — el TRANSPORTE de la moneda. No sabe dibujar una moneda: sabe donde tiene que estar.
//
// La pieza es una sola y no se destruye nunca. Vive en una capa `position: fixed` propia que cruza
// la barra y el rail sin pelearse con ninguna rejilla, y se mueve entre dos anclas:
//   · #moneda-ancla-barra — 18px, dentro de .casa, delante del rotulo EL CEREBRO (portada)
//   · #moneda-nicho       — 200px, columna derecha (newsletter, cartera, biblioteca, cuenta)
//
// Las anclas son cajas vacias que SI viven en el flujo y reservan su hueco; la capa las mide y se
// coloca encima. Asi la posicion la decide el layout de siempre y aqui no hay ni una coordenada
// escrita a mano.
//
// Este fichero funciona entero sin WebGL: arranca con moneda.svg dentro. pieza-moneda.js, cuando
// carga, sustituye el SVG por su canvas. Si nunca carga, no pasa nada visible.
(() => {
  // La carpeta sale de la URL de este propio script. El publicador copia web/ui/ a otra ruta
  // (public/ui/), y una ruta fijada da 404 y una moneda muda que nadie ve en los logs. Ya se pago
  // con cerebro.js el 2026-08-27.
  const CARPETA = ((document.currentScript && document.currentScript.src) || '').replace(/[^/]*$/, '');
  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Por debajo de este ancho el rail deja de ser columna y pasa a ir bajo el texto: no hay hueco
  // derecho al que viajar, asi que la moneda se queda de insignia en la barra.
  const ANCHO_MINIMO = 1200;

  const arranca = () => {
    const capa = document.getElementById('moneda');
    const enBarra = document.getElementById('moneda-ancla-barra');
    const nicho = document.getElementById('moneda-nicho');
    if (!capa || !enBarra || !nicho) return;

    capa.innerHTML = '<img src="' + CARPETA + 'moneda.svg" alt="">';

    let grande = false;
    let avisa = null;

    const coloca = (animado) => {
      const r = (grande ? nicho : enBarra).getBoundingClientRect();
      // Sin ancla medible (la seccion aun oculta, el nicho sin caja) se deja donde este: mover a
      // 0,0 seria un salto a la esquina, que es peor que no moverse.
      if (r.width < 2) return;
      capa.style.transition = (animado && !REDUCE)
        ? 'transform var(--t-moneda) cubic-bezier(.22,.61,.36,1),'
          + ' width var(--t-moneda) cubic-bezier(.22,.61,.36,1),'
          + ' height var(--t-moneda) cubic-bezier(.22,.61,.36,1)'
        : 'none';
      capa.style.width = r.width + 'px';
      capa.style.height = r.height + 'px';
      capa.style.transform = 'translate(' + r.left + 'px, ' + r.top + 'px)';
      if (avisa) avisa(grande);
    };

    const seccion = (nombre) => {
      const quiere = nombre !== 'chat' && window.innerWidth >= ANCHO_MINIMO;
      const cambia = quiere !== grande;
      grande = quiere;
      document.body.classList.toggle('con-moneda', quiere);
      // Dos cuadros: la clase `con-moneda` acaba de cambiar el layout (reserva la columna derecha)
      // y el nicho todavia no tiene caja. Medir aqui mismo daria la posicion anterior.
      requestAnimationFrame(() => requestAnimationFrame(() => coloca(cambia)));
    };

    let pendiente = 0;
    window.addEventListener('resize', () => {
      cancelAnimationFrame(pendiente);
      pendiente = requestAnimationFrame(() => {
        // Al cruzar el umbral la moneda puede tener que volver a la barra.
        if (grande && window.innerWidth < ANCHO_MINIMO) {
          grande = false;
          document.body.classList.remove('con-moneda');
        }
        coloca(false);
      });
    });

    window.CerebroMoneda = {
      seccion,
      hueco: () => capa,
      alColocar: (cb) => { avisa = cb; if (cb) cb(grande); },
    };

    coloca(false);
  };

  // El script va con `defer`, asi que el DOM ya esta; el guardia es por si alguien lo mueve.
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', arranca);
  else arranca();
})();
