// fuente.js — la costura entre el mando (datos vivos) y el sitio publico (instantaneas horneadas).
//
// La UI no sabe en que mundo vive: pide por nombre y esta capa decide la URL. El modo lo fija
// index.html (window.CEREBRO_ESTATICO) y el publicador lo reescribe a true al copiar la app a
// public/. Una sola app, dos origenes de datos: eso es todo lo que separa el mando del sitio.
//
// Regla dura: si un fetch falla, pide NO devuelve un objeto vacio en silencio. Devuelve el objeto
// con su campo traza explicando que no cargo, que es lo que la UI ya sabe pintar.
window.CerebroFuente = (() => {
  'use strict';
  // El mando sirve datos vivos; el sitio publicado sirve instantaneas horneadas. La bandera la
  // pone index.html y la reescribe el publicador al copiar la app a public/.
  const ESTATICO = window.CEREBRO_ESTATICO === true;

  // nombre -> ruta. En estatico las instantaneas viven en /datos/; en el mando, en /api/.
  const RUTA = {
    boletines: () => ESTATICO ? '/datos/boletines.json' : '/api/boletines',
    // la edicion mas reciente no lleva ?fecha; una concreta, si.
    // la clave de edicion es el nombre del fichero (archivo), no la fecha (opcion C).
    boletin: (p) => ESTATICO
      ? '/datos/boletines/' + encodeURIComponent(p.archivo || '') + '.json'
      : '/api/boletin' + (p.archivo ? '?archivo=' + encodeURIComponent(p.archivo) : ''),
    biblioteca: () => ESTATICO ? '/datos/biblioteca.json' : '/api/biblioteca',
    // la ruta conserva sus barras: es la ruta del fichero dentro de notas/.
    nota: (p) => ESTATICO
      ? '/datos/notas/' + encodeURI(p.ruta) + '.json'
      : '/api/biblioteca/entrada?ruta=' + encodeURIComponent(p.ruta),
    predicciones: () => ESTATICO ? '/datos/predicciones.json' : '/api/predicciones',
    // el historial es de Carlos: en estatico no existe, se devuelve vacio CON traza visible.
    historial: () => ESTATICO ? null : '/api/historial',
  };

  function pide(nombre, params) {
    params = params || {};
    const construye = RUTA[nombre];
    if (!construye) return Promise.reject(new Error('fuente desconocida: ' + nombre));
    const url = construye(params);
    if (url === null) {
      return Promise.resolve({ entradas: [], traza: 'el historial es de Carlos, no se publica' });
    }
    return fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error('HTTP ' + r.status);
        return r.json();
      })
      .catch((err) => ({
        // degradacion con rastro: la UI pinta r.traza donde corresponda.
        traza: 'no se pudo cargar ' + nombre + (err && err.message ? ' (' + err.message + ')' : ''),
      }));
  }

  return { pide };
})();
