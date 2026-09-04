// app.js — comportamiento del mundo Brasa
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const nd = (v) => (v === null || v === undefined ? 'n/d' : String(v));
  const formato = new Intl.NumberFormat('es-ES');
  const cifra = (v) => (v === null || v === undefined ? 'n/d' : formato.format(v));
  const crear = (tipo, texto, clase) => { const e = document.createElement(tipo); if (clase) e.className = clase; if (texto !== undefined) e.textContent = texto; return e; };
  const nombres = {
    elisa: { nombre: 'Elisa Fernández', cargo: 'CIO' }, jorne: { nombre: 'Jorne', cargo: 'Análisis técnico' },
    'carlos-barez': { nombre: 'Carlos Barez', cargo: 'Análisis fundamental' }, 'daniel-ferrer': { nombre: 'Daniel Ferrer', cargo: 'Riesgo' }, 'ines-torres': { nombre: 'Inés Torres', cargo: 'Macro' }
  };
  const persona = (slug) => nombres[slug] || { nombre: nd(slug), cargo: '' };
  const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ——— el cerebro: pieza central, se enciende con la actividad ——— */
  const marco = $('#cerebro-marco');
  // la firma de la pieza tiene DOS dueños: el estado (reposo/pensando/golpe) y, mientras el puntero
  // esta sobre una zona, la persona de esa zona. firmaEstado guarda el primero para poder volver a
  // el al salir de la zona; el hover solo pinta encima, no lo reescribe.
  let firmaEstado = 'En espera — la pregunta lo recorre';
  const firmaCerebro = (texto) => { firmaEstado = texto; $('#cerebro-firma').textContent = texto; };
  // DOS PIEZAS POSIBLES, EN ESTE ORDEN: el canvas de cerebro.js (la pieza viva, que reanima la
  // anatomia que forma_desde_video.py saco del video de Carlos) gana si esta cargado; si no,
  // cerebro.svg INCRUSTADO —dentro de un <img> no ejecutaria ni sus animaciones ni :hover—.
  // El peldaño de video se retiro el 2026-08-26: 417 KB para un caso que no se da, y el svg ya
  // cubre exactamente el mismo fallo por 9 KB.
  // Si fallan las dos, la firma lo dice: un hueco mudo en el centro del hero se leeria como un
  // fallo de red cualquiera y no como lo que es.
  let viva = null; // la api de la pieza canvas: {ritmo, golpe, mira, alZona}
  const ritmoPieza = (r) => { if (viva) viva.ritmo(r); };
  const cerebroPensando = () => { marco.classList.remove('encendido'); marco.classList.add('pensando'); ritmoPieza(1.75); firmaCerebro('En circulación — la pregunta recorre el equipo'); if (viva) viva.firma(null); };
  const cerebroGolpea = (agente) => { const p = persona(agente); marco.classList.remove('pensando'); marco.classList.add('encendido'); ritmoPieza(1); if (viva) viva.golpe(); if (viva) viva.firma(agente); firmaCerebro(`Firmó ${p.nombre}${p.cargo ? ` · ${p.cargo}` : ''}`); };
  const cerebroReposo = () => { marco.classList.remove('pensando', 'encendido'); ritmoPieza(1); firmaCerebro('En espera — la pregunta lo recorre'); };
  const vectorial = () => fetch('/ui/cerebro.svg')
    .then((r) => { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then((svg) => { const h = $('#cerebro'); h.innerHTML = svg; h.dataset.pieza = 'vector'; })
    .catch(() => { firmaCerebro('La pieza no cargó — el chat sigue funcionando'); });
  const hueco = $('#cerebro');
  // El try no es adorno: monta() hornea dos laminas de 512x512 leyendo los PNG del video, y si
  // revienta ahi dentro se lleva por delante el resto de este fichero —chat incluido—.
  // Que la pieza falle debe costar la pieza, no la pagina. El fallo de CARGA llega async: por eso
  // el segundo argumento es alFallar(), que cae al svg cuando un PNG no puede cargarse.
  if (window.CerebroPieza) {
    try { viva = window.CerebroPieza.monta(hueco, () => { viva = null; vectorial(); }); } catch (e) { console.error('cerebro:', e); viva = null; }
    if (viva) {
      hueco.dataset.pieza = 'canvas';
      // al pasar sobre una zona, la firma nombra a la persona de esa zona; al salir, vuelve al estado
      viva.alZona((slug) => {
        if (slug) {
          const p = persona(slug);
          $('#cerebro-firma').textContent = `${p.nombre}${p.cargo ? ` · ${p.cargo}` : ''}`;
        } else {
          $('#cerebro-firma').textContent = firmaEstado;
        }
      });
    }
  }
  if (!viva) vectorial();

  /* ——— instrumentos (columna lateral de contexto) ——— */
  const pintarCoste = (coste) => crear('p', `Coste: entrada ${cifra(coste?.tokens_entrada)} · salida ${cifra(coste?.tokens_salida)}`, 'coste');
  const pintarPrecios = (precios) => crear('p', Object.keys(precios || {}).map((s) => `${s}: ${cifra(precios[s]?.precio)} ${nd(precios[s]?.moneda)}`).join(' · ') || 'n/d', 'meta');
  const pintarLimites = (trazas) => crear('p', `Límites: ${Array.isArray(trazas) && trazas.length ? trazas.join(' · ') : 'n/d'}`, 'meta');
  const grupo = (titulo, ...lineas) => { const d = crear('div', undefined, 'grupo'); d.append(crear('h3', titulo)); lineas.filter(Boolean).forEach((l) => d.append(typeof l === 'string' ? crear('p', l) : l)); return d; };

  // C4: el backend devuelve fuentes como {cerebro:[{ruta,titulo}], internet:[{titulo,dominio,url}]}
  // (antes era un array de strings). Se pintan DOS grupos con su etiqueta en palabras, no por color:
  // el color del enlace distingue el origen, pero quien lo DICE es el texto, porque el color no porta
  // significado. Una tesis del vault y una pagina cualquiera de internet no son la misma prueba.
  // cerebro: la ruta ya es una URL abrible (tarea T3 de la fase 4) -> enlace a /ruta.
  // internet: SOLO las que vienen de Tavily (buscaEnInternet en pregunta.js las filtra de results[].url); enlace externo nuevo.
  const pintarFuentes = (fuentes) => {
    const wrap = crear('div', undefined, 'fuentes');
    const cerebro = (fuentes && fuentes.cerebro) || [];
    const internet = (fuentes && fuentes.internet) || [];
    const linea = (etiqueta, items, aItem) => {
      const p = crear('p');
      p.append(crear('strong', `${etiqueta}: `));
      if (items.length) items.forEach((f, i) => { if (i) p.append(' · '); p.append(aItem(f)); });
      else p.append('ninguna');
      return p;
    };
    wrap.append(linea('Fuentes del Cerebro', cerebro, (f) => {
      const a = crear('a', f.titulo || f.ruta);
      a.href = `/${f.ruta}`;
      return a;
    }));
    if (internet.length) {
      wrap.append(linea('Fuentes de internet', internet, (f) => {
        const a = crear('a', `${f.titulo || f.url}${f.dominio ? ` (${f.dominio})` : ''}`);
        a.href = f.url;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        return a;
      }));
    }
    return wrap;
  };
  const cifraGrande = (texto) => crear('span', texto, 'cifra');
  const instrumentosChat = (aside, pregunta, datos) => {
    const firma = datos?.firma || {}; const p = persona(firma.agente);
    aside.append(grupo('Firmó', `${p.nombre} · ${p.cargo || nd(firma.especialidad)}`, `${nd(firma.proveedor)} / ${nd(firma.modelo)}`, `Motivo: ${nd(firma.motivo)}`));
    aside.append(grupo('Preguntaste', pregunta));
    aside.append(grupo('Leyó', pintarFuentes(datos.fuentes)));
    aside.append(grupo('Precios', pintarPrecios(datos.precios)));
    aside.append(grupo('Límites', Array.isArray(datos.trazas) && datos.trazas.length ? datos.trazas.join(' · ') : 'n/d'));
    aside.append(grupo('Coste', `Entrada ${cifra(datos.coste?.tokens_entrada)} · salida ${cifra(datos.coste?.tokens_salida)}`));
  };
  const instrumentosCartera = (aside, r) => {
    const pos = r.posiciones || [];
    aside.append(grupo('Posiciones', cifraGrande(String(pos.length))));
    const divisas = Object.keys(r.totales || {}).sort();
    if (!divisas.length) {
      aside.append(grupo('Valor', 'Añade títulos para verlo'));
    } else if (divisas.length === 1) {
      aside.append(grupo('Valor', cifraGrande(`${cifra(Math.round(r.totales[divisas[0]]))} ${divisas[0]}`)));
    } else {
      // Varias divisas: una linea por cada una. Un total unico exigiria convertir, y no se
      // convierte. Que se vean las dos cifras es mas honesto que una tercera inventada.
      aside.append(grupo('Valor', ...divisas.map((d) => `${cifra(Math.round(r.totales[d]))} ${d}`)));
    }
    aside.append(grupo('Límites', Array.isArray(r.trazas) && r.trazas.length ? r.trazas.join(' · ') : 'n/d'));
    aside.append(grupo('Dónde vive', 'Solo en este navegador. No se envía a ningún servidor.'));
  };
  const instrumentosNewsletter = (aside, r) => {
    aside.append(grupo('Archivo', r.archivo ? r.archivo : nd(r.traza)));
    aside.append(grupo('Aviso', 'Es una FOTO, no conocimiento permanente. Caduca.'));
  };
  const instrumentosBiblioteca = (aside, r) => {
    const materias = r.materias || [];
    const notas = materias.reduce((n, m) => n + (m.entradas || []).length, 0);
    aside.append(grupo('Notas', cifraGrande(String(notas))));
    aside.append(grupo('Materias', materias.map((m) => m.nombre).join(' · ') || 'n/d'));
  };
  const INSTRUMENTOS = { chat: instrumentosChat, cartera: instrumentosCartera, newsletter: instrumentosNewsletter, biblioteca: instrumentosBiblioteca };
  // La seccion que se esta viendo AHORA. Hace falta porque los pintores de instrumentos son
  // asincronos: pintarBiblioteca pide datos, y su respuesta puede llegar cuando el visitante ya se
  // ha ido a otra pestaña. Sin este guardia, el rail de biblioteca aparecia sobre `cuenta`.
  let seccionActual = 'chat';
  const pintarInstrumentos = (seccion, ...args) => { if (seccion !== seccionActual) return; const aside = $('#instrumentos'); aside.replaceChildren(crear('h2', 'Instrumentos')); const f = INSTRUMENTOS[seccion]; if (f && args.length) { f(aside, ...args); document.body.classList.add('con-instrumentos'); } else { document.body.classList.remove('con-instrumentos'); } };

  /* ——— utilidades de pintado ——— */
  const celdaEsqueleto = () => { const celda = crear('span', undefined, 'celda'); celda.append(crear('span', '8.888,88', 'ochos')); return celda; };
  const esqueleto = (lista, filas) => { lista.setAttribute('aria-busy', 'true'); lista.replaceChildren(); for (let i = 0; i < filas; i += 1) { const li = crear('li', undefined, 'esqueleto'); li.append(crear('div'), celdaEsqueleto()); lista.append(li); } };
  const finEsqueleto = (lista) => lista.setAttribute('aria-busy', 'false');
  const observador = REDUCE ? null : new IntersectionObserver((vistos, obs) => { vistos.forEach((v) => { if (v.isIntersecting) { v.target.classList.add('entra'); obs.unobserve(v.target); } }); }, { rootMargin: '0px 0px -8% 0px' });
  const revela = (lista) => { if (!observador) return; [...lista.children].forEach((li, i) => { li.style.setProperty('--retardo', `${Math.min(i, 8) * 40}ms`); li.classList.add('por-revelar'); observador.observe(li); }); };
  const errorDatos = (mensaje) => ({ texto: null, firma: {}, fuentes: { cerebro: [], internet: [] }, trazas: [], coste: {}, error: mensaje });
  const datosMuestra = () => ({ texto: '## Micron: entrada razonable solo en 108–112 USD\n\nEl punto de entrada razonable en **Micron** sigue siendo la zona de **108–112 USD**, donde la media de 200 días coincide con el soporte de marzo.\n\n## Lo que vigilar\n\n- **Soporte:** 108 USD; perderlo abre el hueco a 98–100.\n- **Momentum:** la subida desde abril llega con volumen decreciente.\n\n| Escenario | Precio | Lectura |\n|---|---|---|\n| Rebote en soporte | 108–112 USD | Entrada con invalidación clara |\n| Pierde el soporte | < 108 USD | Fuera hasta nuevo suelo |\n\n## Veredicto: ESPERAR\n\n**Por qué:** el precio está lejos del soporte y el momentum se agota.\n\n**Lo invalidaría:** un retroceso ordenado a 108–112 USD con volumen comprador.\n\n*Esta carta es un ejemplo sintético: ninguna cifra viene del wiki ni del mercado.*', firma: { agente: 'jorne', proveedor: 'anthropic', modelo: 'modelo-barato', motivo: 'ejemplo sintético' }, fuentes: { cerebro: [{ ruta: 'empresas/micron', titulo: 'Micron Technology' }], internet: [] }, trazas: ['precio de muestra, no verificado'], coste: {} });
  const bloqueRespuesta = (pregunta, datos, recuerdo = false) => {
    const r = crear('article', undefined, `respuesta${recuerdo ? ' recuerdo' : ' golpea'}`); const firma = datos?.firma || {}; const p = persona(firma.agente);
    const cab = crear('header', undefined, 'respuesta-cab'); const quien = crear('div'); quien.append(crear('span', p.nombre), crear('small', `${p.cargo || nd(firma.especialidad)} · ${nd(firma.proveedor)} / ${nd(firma.modelo)} · ${nd(firma.motivo)}`)); cab.append(quien, crear('time', new Date().toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }))); r.append(cab);
    // El cuerpo va por mdPlano (el renderer del wiki): Elisa escribe markdown estructurado desde
    // el prompt (titular de conclusion, secciones, negritas, tablas) y pintarlo como parrafos
    // planos tiraba la mitad del trabajo. mdPlano escapa todo, asi que innerHTML aqui es seguro.
    const cuerpo = crear('div', undefined, 'respuesta-texto'); if (datos.error) cuerpo.append(crear('p', `${datos.error} Comprueba que el servidor sigue corriendo.`, 'mensaje-error')); else cuerpo.innerHTML = mdPlano(String(datos.texto ?? 'n/d')); r.append(cuerpo);
    const meta = crear('footer', undefined, 'respuesta-meta'); meta.append(crear('p', `Pregunta: ${pregunta}`)); meta.append(pintarPrecios(datos.precios)); meta.append(pintarFuentes(datos.fuentes)); meta.append(pintarLimites(datos.trazas)); meta.append(pintarCoste(datos.coste)); r.append(meta); return r;
  };

  /* ——— secciones: la barra superior manda ——— */
  const SECCIONES = ['chat', 'newsletter', 'cartera', 'biblioteca', 'cuenta'];
  const ALIAS = { boletin: 'newsletter', predicciones: 'chat' };
  const activarSeccion = (nombre) => {
    if (!SECCIONES.includes(nombre)) nombre = 'chat';
    seccionActual = nombre;
    document.querySelectorAll('#secciones button').forEach((b) => b.setAttribute('aria-selected', String(b.dataset.seccion === nombre)));
    document.querySelectorAll('main section').forEach((s) => { s.hidden = s.dataset.seccion !== nombre; });
    // Sin argumentos, pintarInstrumentos vacia el rail y quita `con-instrumentos`: es el camino de
    // limpieza que la funcion ya tiene (`if (f && args.length) ... else`). Llamarla SIEMPRE es lo
    // que impide que `cuenta` herede los instrumentos de la seccion anterior — no la llamaba nadie
    // para esa seccion. Las que si los tienen vuelven a llamarla con datos desde `cargas[nombre]`.
    pintarInstrumentos(nombre);
    if (window.CerebroFondo) window.CerebroFondo.seccion(nombre);
    if (window.CerebroMoneda) window.CerebroMoneda.seccion(nombre);
    const cargas = { cartera: pintarCartera, newsletter: pintarNewsletter, biblioteca: pintarBiblioteca, cuenta: () => window.CerebroCuenta && window.CerebroCuenta.pintar() };
    if (cargas[nombre]) cargas[nombre]();
    window.scrollTo(0, 0);
  };

  /* ——— cartera y newsletter ——— */
  const celdaPrecio = (c) => { const celda = crear('span', undefined, 'celda'); const valor = c?.precio != null ? `${cifra(c.precio)} ${nd(c.moneda)}` : 'n/d'; celda.append(crear('span', '8.888,88', 'ochos'), crear('span', valor, 'valor')); return celda; };
  /* ——— la cartera es del VISITANTE, no de Carlos ———
     Vive en su localStorage y no sale de su navegador: sin cuentas, sin base de datos y sin que
     este proyecto custodie datos financieros de nadie. Lo unico que viaja son los tickers, a
     /api/cotiza, porque el precio hay que pedirlo a alguien.
     No se le pasa a Elisa a proposito: en publico ella habla en general y no personaliza. */
  const CLAVE_CARTERA = 'cerebro.cartera.v1';
  const leerCartera = () => {
    // El contenido de localStorage lo puede editar el propio usuario: se valida al leer, no al
    // escribir, o un JSON a mano tumba el pintado entero.
    try {
      const bruto = JSON.parse(localStorage.getItem(CLAVE_CARTERA) || '[]');
      if (!Array.isArray(bruto)) return [];
      return bruto.filter((p) => p && typeof p.ticker === 'string' && p.ticker);
    } catch (e) { return []; }
  };
  const guardarCartera = (posiciones) => {
    try { localStorage.setItem(CLAVE_CARTERA, JSON.stringify(posiciones)); } catch (e) {
      // modo incognito o cuota llena: se dice, no se finge que se guardo
      $('#cartera-vacia').textContent = 'No hemos podido guardarla en este navegador (¿modo privado?). La lista dura hasta que recargues.';
      $('#cartera-vacia').hidden = false;
    }
  };
  const numeroODefecto = (v) => { const n = Number.parseFloat(v); return Number.isFinite(n) && n > 0 ? n : null; };

  const pegarCartera = () => {
    const { posiciones, ilegibles } = window.CerebroCartera.parseaCartera($('#cartera-pegar').value);
    const actual = window.CerebroCartera.mezclaCartera(leerCartera(), posiciones);
    guardarCartera(actual);
    const partes = [];
    if (ilegibles.length) partes.push(`${ilegibles.length} línea(s) no se leyeron (sin ticker válido)`);
    $('#cartera-pegar-aviso').textContent = partes.length
      ? partes.join(' · ')
      : `Cartera cargada: ${posiciones.length} posición(es).`;
    $('#cartera-pegar').value = '';
    pintarCartera();
  };

  const pintarCartera = async () => {
    // Con sesion la pinta cuenta-datos.js sincronizada con la cuenta; sin sesion, modo local intacto.
    if (window.CerebroCarteraRemota && await window.CerebroCarteraRemota.pintarSiSesion()) return;
    const lista = $('#cartera-lista');
    const posiciones = leerCartera();
    $('#cartera-vacia').hidden = posiciones.length > 0;
    lista.replaceChildren();
    if (!posiciones.length) { pintarInstrumentos('cartera', { posiciones: [] }); return; }
    esqueleto(lista, posiciones.length);
    const r = await fetch(`/api/cotiza?simbolos=${encodeURIComponent(posiciones.map((p) => p.ticker).join(','))}`)
      .then((x) => x.json())
      .catch(() => ({ cotizaciones: {}, trazas: ['no pudimos contactar con el servidor de precios'] }));
    finEsqueleto(lista);
    lista.replaceChildren();
    // Por divisa, no un solo numero: sumar USD con EUR da una cifra que no da error y es falsa.
    // No se convierte — convertir exigiria un tipo de cambio, otra fuente mas que puede mentir.
    const totales = {};
    posiciones.forEach((p, i) => {
      // La clave viene SIEMPRE en mayusculas: simbolos_pedidos() del servidor las pasa a
      // mayusculas antes de cotizar. El buscador guarda en minusculas (mu.us), asi que buscar
      // con la caja tal cual fallaba y salia «sin precio hoy» con el precio ya en la respuesta.
      const dato = (r.cotizaciones || {})[p.ticker.toUpperCase()] || null;
      const li = crear('li');
      const texto = crear('div');
      texto.append(crear('strong', p.ticker));
      texto.append(crear('small', dato ? `${dato.fuente} · ${dato.fecha}` : 'sin precio hoy'));
      // Los titulos y la entrada son DEL USUARIO: se pintan siempre, haya precio o no. Vivian
      // dentro del if (dato) y se esfumaban cuando el proveedor no contestaba — la fila se
      // quedaba con el nombre y «sin precio hoy», como si la posicion no tuviera datos.
      // Se pinta lo que sabemos; lo que no sabemos es el precio, y eso ya lo dice la linea de
      // arriba. Nunca se estima nada aqui.
      if (p.titulos || p.entrada) {
        const mio = [p.titulos ? `${cifra(p.titulos)} títulos` : null,
                     p.entrada ? `entrada ${cifra(p.entrada)}` : null].filter(Boolean).join(' · ');
        texto.append(crear('small', mio, 'tuyo'));
      }
      li.append(texto);
      if (dato) {
        li.append(celdaPrecio(dato));
        if (dato.cambio_pct != null) {
          li.append(crear('small', `${dato.cambio_pct >= 0 ? '↑ sube' : '↓ baja'} ${cifra(Math.abs(dato.cambio_pct))}%`,
                          dato.cambio_pct >= 0 ? 'sube' : 'baja'));
        }
        if (p.titulos) {
          const valor = dato.precio * p.titulos;
          totales[dato.moneda] = (totales[dato.moneda] || 0) + valor;
          li.append(crear('small', `${cifra(Math.round(valor))} ${dato.moneda}`, 'valor'));
        }
        // La plusvalia solo se pinta si el usuario dio precio de entrada. Sin ese dato no se
        // estima: un porcentaje inventado es justo lo que este proyecto no hace.
        if (p.entrada) {
          const pct = ((dato.precio - p.entrada) / p.entrada) * 100;
          li.append(crear('small', `${pct >= 0 ? '+' : ''}${pct.toFixed(1)}% desde tu entrada`,
                          pct >= 0 ? 'sube' : 'baja'));
        }
      }
      const quitar = crear('button', 'Quitar', 'quitar');
      quitar.type = 'button';
      quitar.setAttribute('aria-label', `Quitar ${p.ticker} de tu cartera`);
      quitar.addEventListener('click', () => {
        const actual = leerCartera();
        actual.splice(i, 1);
        guardarCartera(actual);
        pintarCartera();
      });
      li.append(quitar);
      lista.append(li);
    });
    pintarInstrumentos('cartera', {
      posiciones,
      totales,
      trazas: r.trazas || []
    });
    revela(lista);
  };
  // Puente para cuenta-datos.js (modo con sesion): la misma lectura/escritura de localStorage
  // y el repintado, sin duplicar la validacion. repintar vuelve a pasar por el delegado de arriba.
  window.CerebroCarteraLocal = { leer: leerCartera, guardar: guardarCartera, repintar: pintarCartera };
  // La newsletter abre con un mini-indice de sus secciones (los h2 que ya trae la nota): un salto
  // directo al tema que interesa, sin que la plantilla tenga que escribirlo a mano.
  const indiceNews = (panel) => {
    const temas = [...panel.querySelectorAll('h2')];
    if (temas.length < 2) return;
    const nav = crear('nav', undefined, 'indice-news');
    nav.setAttribute('aria-label', 'Secciones de la newsletter');
    temas.forEach((h, i) => {
      h.id = `tema-${i}`;
      const a = crear('a', h.textContent);
      a.href = `#tema-${i}`;
      nav.append(a);
    });
    panel.prepend(nav);
  };
  const pintarNewsletter = async () => {
    const seccion = $('#seccion-newsletter');
    const fechaEl = $('#boletin-fecha');
    const selector = $('#boletin-ediciones');
    const panel = $('#boletin-texto');
    panel.setAttribute('aria-busy', 'true');
    // El indice de ediciones vive en /api/boletines (o su instantanea): la clave es el archivo,
    // no la fecha. Varias ediciones del mismo dia conviven, asi que la etiqueta lleva fecha+titulo.
    const lista = await CerebroFuente.pide('boletines').catch(() => ({ ediciones: [], traza: 'no pudimos cargar el índice de ediciones' }));
    const ediciones = lista.ediciones || [];
    if (!ediciones.length) {
      seccion.querySelector('.seccion-cab h2').textContent = 'Newsletter';
      if (fechaEl) fechaEl.textContent = '';
      selector.replaceChildren();
      panel.setAttribute('aria-busy', 'false');
      panel.replaceChildren(crear('p', nd(lista.traza || 'no hay ediciones')));
      pintarInstrumentos('newsletter', {});
      return;
    }
    selector.replaceChildren();
    ediciones.forEach((e) => {
      const o = crear('option', e.fecha ? `${e.fecha} · ${e.titulo}` : `sin fechar · ${e.titulo}`);
      o.value = e.archivo;
      selector.append(o);
    });
    const carga = async (archivo) => {
      panel.setAttribute('aria-busy', 'true');
      const r = await CerebroFuente.pide('boletin', { archivo }).catch(() => ({}));
      panel.setAttribute('aria-busy', 'false');
      const ed = ediciones.find((x) => x.archivo === archivo) || {};
      if (fechaEl) fechaEl.textContent = ed.fecha ? `Edición del ${ed.fecha}` : 'Edición sin fechar';
      pintarInstrumentos('newsletter', r);
      panel.replaceChildren();
      if (!r.texto) panel.append(crear('p', nd(r.traza)));
      else { panel.innerHTML = mdPlano(r.texto); indiceNews(panel); }
    };
    selector.onchange = () => carga(selector.value);
    await carga(ediciones[0].archivo);
  };

  /* ——— biblioteca: indice por materias y lector de notas ——— */
  const mdPlano = (md) => {
    // renderer minimo y seguro: escapa todo y solo reintroduce la gramatica del wiki
    const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const inlinea = (s) => esc(s)
      .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, '<a href="#" data-nota="$1">$2</a>')
      .replace(/\[\[([^\]]+)\]\]/g, (m, p) => `<a href="#" data-nota="${p}">${p.split('/').pop().replace(/-/g, ' ')}</a>`)
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/==([^=]+)==/g, '<u>$1</u>')
      .replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>')
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>');
    const bloques = String(md || '').split(/\n{2,}/);
    let html = '';
    for (const bloque of bloques) {
      const b = bloque.trim();
      if (!b) continue;
      if (/^#{1,4}\s/.test(b)) { const n = b.match(/^#+/)[0].length; html += `<h${n}>${inlinea(b.replace(/^#+\s*/, ''))}</h${n}>`; continue; }
      if (/^(-{3,}|\*{3,})$/.test(b)) { html += '<hr>'; continue; }
      if (/^>\s?/.test(b)) {
        const lineas = b.split('\n').map((l) => l.replace(/^>\s?/, ''));
        lineas[0] = lineas[0].replace(/^\[!\w+\]\s*/, ''); // marcador de callout de Obsidian
        html += `<blockquote>${inlinea(lineas.join(' ').trim())}</blockquote>`; continue;
      }
      if (/^\|/.test(b)) {
        const filas = b.split('\n').filter((l) => /^\s*\|/.test(l) && !/^\s*\|[\s:|-]+\|?\s*$/.test(l));
        if (!filas.length) continue;
        const celdas = (l) => l.trim().replace(/^\||\|$/g, '').split('|').map((c) => inlinea(c.trim()));
        html += `<table><thead><tr>${celdas(filas[0]).map((c) => `<th>${c}</th>`).join('')}</tr></thead><tbody>${filas.slice(1).map((f) => `<tr>${celdas(f).map((c) => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>`; continue;
      }
      const aLista = (lineas, regex, etiqueta) => {
        const items = [];
        for (const l of lineas) {
          if (regex.test(l)) items.push(l.replace(regex, ''));
          else if (items.length && l.trim()) items[items.length - 1] += ` ${l.trim()}`; // continuacion del item anterior
        }
        return `<${etiqueta}>${items.map((i) => `<li>${inlinea(i)}</li>`).join('')}</${etiqueta}>`;
      };
      if (/^[-*]\s/.test(b)) { html += aLista(b.split('\n'), /^[-*]\s+/, 'ul'); continue; }
      if (/^\d+[.)]\s/.test(b)) { html += aLista(b.split('\n'), /^\d+[.)]\s+/, 'ol'); continue; }
      html += `<p>${inlinea(b.split('\n').join(' '))}</p>`;
    }
    return html;
  };
  let bibliotecaCargada = false;
  let indiceNotas = {};
  let notaActual = null;  // la nota abierta en el lector, para «Pregúntale a esta nota»
  const resolverNota = (ref) => {
    const slug = ref.split('/').pop().replace(/\.md$/, '');
    return indiceNotas[slug] || null;
  };
  const pintarBiblioteca = async () => {
    if (bibliotecaCargada) return;
    const indice = $('#biblioteca-indice');
    indice.setAttribute('aria-busy', 'true');
    const r = await CerebroFuente.pide('biblioteca');
    bibliotecaCargada = true;
    indiceNotas = r.indice || {};
    indice.setAttribute('aria-busy', 'false');
    indice.replaceChildren();
    pintarInstrumentos('biblioteca', r);
    if (!r.materias || !r.materias.length) { indice.append(crear('p', nd(r.traza))); return; }
    r.materias.forEach((m) => {
      const caja = crear('div', undefined, 'materia');
      caja.append(crear('h3', m.nombre));
      const ul = crear('ul');
      (m.entradas || []).forEach((e) => {
        const li = crear('li');
        const b = crear('button', e.titulo); b.type = 'button';
        b.addEventListener('click', () => irANota(e.ruta));
        li.append(b); ul.append(li);
      });
      caja.append(ul);
      indice.append(caja);
    });
  };
  const abrirNota = async (ruta) => {
    // la nota vive en la seccion Biblioteca: se activa siempre, por si se abre por URL directa.
    activarSeccion('biblioteca');
    const lectura = $('#biblioteca-lectura');
    $('#biblioteca-indice').hidden = true;
    lectura.hidden = false;
    $('#lectura-titulo').textContent = '…';
    $('#lectura-texto').replaceChildren();
    window.scrollTo(0, 0);
    const r = await CerebroFuente.pide('nota', { ruta });
    $('#lectura-titulo').textContent = r.titulo || ruta;
    $('#lectura-texto').innerHTML = r.texto ? mdPlano(r.texto) : '';
    notaActual = { ruta, titulo: r.titulo || ruta };
    if (window.CerebroGuardados) window.CerebroGuardados.evalua(ruta, r.titulo || ruta);
    if (!r.texto) $('#lectura-texto').append(crear('p', nd(r.traza)));
  };
  $('#lectura-texto').addEventListener('click', (e) => {
    const enlace = e.target.closest('a[data-nota]');
    if (!enlace) return;
    e.preventDefault();
    const destino = resolverNota(enlace.dataset.nota);
    if (destino) irANota(destino);
  });
  const cerrarNota = () => { $('#biblioteca-lectura').hidden = true; $('#biblioteca-indice').hidden = false; if (window.CerebroGuardados) window.CerebroGuardados.evalua(null); };

  // T3: la URL de una nota es una URL de verdad y compartible. abrirNota/cerrarNota solo pintan; el
  // historial lo empuja la navegacion explicita (clic), no el render. popstate reaplica la misma
  // logica de arranque, asi el boton Atras del navegador vuelve al indice o a la nota.
  const irANota = (ruta) => {
    history.pushState({ ruta }, '', '/' + ruta.replace(/\.md$/, ''));
    abrirNota(ruta);
  };
  const irAIndice = () => {
    history.pushState({ ruta: '/' }, '', '/');
    cerrarNota();
  };
  const abrirPorRuta = async (ruta) => {
    // asegura el indice publicado cargado para distinguir nota apartada de carpeta no publicada.
    if (!bibliotecaCargada) await pintarBiblioteca();
    const slug = ruta.split('/').pop().replace(/\.md$/, '');
    if (!indiceNotas[slug]) {
      // nota fuera del conjunto publicado: se dice con palabras, no en silencio ni saltando a la home.
      activarSeccion('biblioteca');
      $('#biblioteca-lectura').hidden = true;
      $('#biblioteca-indice').hidden = false;
      let aviso = $('#biblioteca-no-publicada');
      if (!aviso) { aviso = crear('p', undefined, 'meta'); aviso.id = 'biblioteca-no-publicada'; $('#biblioteca-indice').after(aviso); }
      aviso.textContent = `La nota ${ruta} no esta publicada.`;
      return;
    }
    await abrirNota(ruta);
  };
  // popstate reaplica el paso 1 del arranque: lee location.pathname y abre la nota o muestra el indice.
  window.addEventListener('popstate', () => {
    const p = location.pathname;
    if (p !== '/' && p !== '/index.html') abrirPorRuta(p.slice(1) + '.md');
    else cerrarNota();
  });

  // Filtro de la biblioteca: cliente, sobre titulo y nombre de materia, sin acentos ni mayusculas.
  // Sin fetch, sin servidor: el indice ya esta en el DOM. La nota lo dice claro: filtra por titulo,
  // no busca dentro de las notas (prometer busqueda de texto completo y dar filtro de titulos es
  // la mentira pequena que el resto del producto evita).
  const _sinAcentos = (t) => (t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const filtraBiblioteca = () => {
    const q = _sinAcentos($('#biblioteca-filtro').value).trim();
    const indice = $('#biblioteca-indice');
    let visibles = 0;
    indice.querySelectorAll('.materia').forEach((caja) => {
      const nombreMateria = _sinAcentos(caja.querySelector('h3').textContent);
      const materiaMatch = !q || nombreMateria.includes(q);
      let enCaja = 0;
      caja.querySelectorAll('button').forEach((b) => {
        const match = materiaMatch || (!q || _sinAcentos(b.textContent).includes(q));
        b.hidden = !match;
        if (match) enCaja += 1;
      });
      caja.hidden = enCaja === 0;
      visibles += enCaja;
    });
    let aviso = $('#biblioteca-sin-resultados');
    if (!aviso) { aviso = crear('p', undefined, 'meta'); aviso.id = 'biblioteca-sin-resultados'; indice.after(aviso); }
    aviso.textContent = (q && visibles === 0) ? `Ningún título coincide con «${$('#biblioteca-filtro').value}»` : '';
  };

  // De la nota al chat: siembra la pregunta con titulo y ruta, pero NO la envia — Carlos la edita.
  // Mismo gesto que #cartera-preguntar.
  const preguntaNota = () => {
    if (!notaActual) return;
    activarSeccion('chat');
    const campo = $('#pregunta');
    campo.value = `¿Qué me dices de «${notaActual.titulo}» (${notaActual.ruta})?`;
    campo.focus();
  };

  /* ——— historial local del chat ——— */
  const pintarHistorial = async () => { const r = await CerebroFuente.pide('historial'); const lista = $('#historial-lista'); lista.replaceChildren(); (r.entradas || []).forEach((e) => { const li = crear('li', `${e.pregunta} · ${nd(e.agente)} · ${nd(e.ts)}`); li.addEventListener('click', () => $('#respuestas').prepend(bloqueRespuesta(e.pregunta, { texto: 'Recuerdo local: esta pregunta se conserva en pantalla; no se reenvía al modelo.', firma: { agente: e.agente, modelo: e.modelo, motivo: 'historial local' }, coste: e.coste, trazas: e.error ? ['la respuesta original terminó con error'] : [] }, true))); lista.append(li); }); };

  /* ——— arranque ——— */
  const iniciar = () => {
    const entrada = $('#entrada'); const pregunta = $('#pregunta'); const respuestas = $('#respuestas'); const vacio = $('#vacio');
    document.querySelectorAll('#secciones button').forEach((b) => b.addEventListener('click', () => activarSeccion(b.dataset.seccion)));
    document.querySelectorAll('.sugerida').forEach((b) => b.addEventListener('click', () => { pregunta.value = b.textContent; pregunta.focus(); }));
    $('#historial').addEventListener('toggle', (e) => { if (e.target.open) pintarHistorial(); });
    $('#lectura-volver').addEventListener('click', irAIndice);
    $('#lectura-preguntar').addEventListener('click', preguntaNota);
    const filtroBib = $('#biblioteca-filtro'); if (filtroBib) filtroBib.addEventListener('input', filtraBiblioteca);
    const formCartera = $('#cartera-form');
    if (formCartera) {
      formCartera.addEventListener('submit', (e) => {
        e.preventDefault();
        // El mismo simbolo canonico que el modo con cuenta. Antes aqui se guardaba lo que
        // hubiera escrito el usuario en mayusculas ("MU"), y esa posicion no se podia subir
        // nunca a la cuenta: le faltaba el sufijo de mercado. Naciendo canonica, sube sola.
        const ticker = window.CerebroBuscador.simboloElegido();
        if (!ticker) {
          $('#cartera-aviso').textContent = 'Elige un valor de la lista: escribe el nombre o el ticker y pincha el que sea.';
          return;
        }
        const posiciones = leerCartera();
        const nueva = {
          ticker,
          titulos: numeroODefecto($('#cartera-titulos').value),
          entrada: numeroODefecto($('#cartera-entrada').value)
        };
        // Si ya esta, se ACTUALIZA. Antes se descartaba en silencio: el usuario tecleaba, se le
        // limpiaba el formulario y no pasaba nada, asi que parecia que se habia perdido. Y de paso
        // esto es el modo de edicion, que no existia: para corregir una posicion, se vuelve a
        // meter. Un formulario que ya sabe hacerlo no necesita otro.
        const yaEsta = posiciones.findIndex((p) => p.ticker === ticker);
        if (yaEsta >= 0) {
          posiciones[yaEsta] = nueva;
          $('#cartera-aviso').textContent = `${ticker} actualizado.`;
        } else {
          posiciones.push(nueva);
          $('#cartera-aviso').textContent = '';
        }
        guardarCartera(posiciones);
        formCartera.reset();
        window.CerebroBuscador.limpia();
        pintarCartera();
      });
    const botonPreguntar = $('#cartera-preguntar');
    if (botonPreguntar) {
      botonPreguntar.addEventListener('click', () => {
        const tickers = leerCartera().map((p) => p.ticker);
        // Sin posiciones el boton no tiene nada que preguntar: se dice y no se salta de seccion.
        if (!tickers.length) {
          $('#cartera-aviso').textContent = 'Añade alguna posición antes de preguntar por ella.';
          return;
        }
        activarSeccion('chat');
        const campo = $('#pregunta');
        campo.value = `¿Cómo ves mi cartera: ${tickers.join(', ')}?`;
        campo.focus();
      });
    }
    const botonPegar = $('#cartera-pegar-btn');
    if (botonPegar) botonPegar.addEventListener('click', pegarCartera);
    }
    entrada.addEventListener('submit', async (e) => {
      e.preventDefault();
      const texto = pregunta.value.trim();
      if (!texto || entrada.dataset.esperando === 'true') return;
      entrada.dataset.esperando = 'true';
      $('button[type="submit"]', entrada).disabled = true;
      vacio.hidden = true;
      cerebroPensando();
      const espera = crear('p', 'En circulación — Elisa la pasa al equipo…', 'respuesta-meta');
      respuestas.append(espera);
      let datos;
      try {
        const respuesta = await fetch('/api/pregunta', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ pregunta: texto, cartera: leerCartera() }) });
        datos = respuesta.status === 200 ? await respuesta.json() : errorDatos(`El servidor respondió con el código ${respuesta.status}.`);
      } catch { datos = errorDatos('El servidor no respondió.'); }
      espera.remove();
      cerebroGolpea(datos.firma?.agente);
      respuestas.append(bloqueRespuesta(texto, datos));
      pintarInstrumentos('chat', texto, datos);
      entrada.dataset.esperando = 'false';
      $('button[type="submit"]', entrada).disabled = false;
      pregunta.focus();
    });
    const params = new URLSearchParams(location.search);
    const pedida = params.get('seccion');
    const rutaPath = location.pathname;
    // T3: una nota abierta por su URL (/carpeta/nota) arranca directo en la biblioteca con esa nota;
    // / o /index.html siguen el arranque normal por seccion. popstate reaplica esta misma rama.
    if (rutaPath !== '/' && rutaPath !== '/index.html') {
      abrirPorRuta(rutaPath.slice(1) + '.md');
    } else {
      activarSeccion(ALIAS[pedida] || pedida || 'chat');
    }
    if (params.has('muestra')) { vacio.hidden = true; const d = datosMuestra(); cerebroGolpea(d.firma.agente); respuestas.append(bloqueRespuesta('¿Dónde entro en Micron?', d)); pintarInstrumentos('chat', '¿Dónde entro en Micron?', d); }
    // la barra gana fondo al hacer scroll; el cerebro acompaña el raton en el hero
    window.addEventListener('scroll', () => { document.body.classList.toggle('leida', window.scrollY > 24); }, { passive: true });
    if (!REDUCE) {
      const hero = $('#hero'); const cerebro = $('#cerebro');
      hero.addEventListener('mousemove', (e) => {
        const r = cerebro.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width / 2)) / r.width;
        const dy = (e.clientY - (r.top + r.height / 2)) / r.height;
        cerebro.style.setProperty('--giro-y', `${Math.max(-1, Math.min(1, dx)) * 10}deg`);
        cerebro.style.setProperty('--giro-x', `${Math.max(-1, Math.min(1, -dy)) * 8}deg`);
        // la luz de la pieza sigue al puntero (misma normalizacion -1..1 que el giro)
        if (viva) viva.mira(Math.max(-1, Math.min(1, dx)), Math.max(-1, Math.min(1, dy)));
      });
      hero.addEventListener('mouseleave', () => { cerebro.style.setProperty('--giro-x', '0deg'); cerebro.style.setProperty('--giro-y', '0deg'); });
      marco.addEventListener('click', () => { marco.classList.toggle('encendido'); if (!marco.classList.contains('encendido')) cerebroReposo(); });
    }
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar, { once: true }); else iniciar();
})();
