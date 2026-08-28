// cartera-parseo.js — la cartera se pega en bloque y se pesa por bloque de riesgo.
//
// Funciones PURAS (sin DOM, sin red): las ejercita web/ui/prueba-cartera.html con console.assert,
// que es el equivalente al demo() con asserts del resto del repo. Viven aqui y no dentro del IIFE de
// app.js para poder cargarse en la pagina de prueba sin arrastrar el resto de la UI.
window.CerebroCartera = (() => {
  'use strict';

  // Los ocho bloques canonicos, de wiki/referencia/bloques-de-riesgo.md. NO se leen del vault: el
  // sitio publico no lo tiene; se copian tal cual. Orden de esa pagina.
  const BLOQUES = [
    'metales-preciosos', 'materias-primas-energia-mineria', 'tangibles-reflacion',
    'tecnologia-desarrollada', 'indices-diversificado', 'china-individual',
    'calidad-datos', 'liquidez-renta-fija',
  ];

  // Ticker del visitante: debe empezar por letra y ser alfanumerico (puntos y guiones incluidos,
  // que los tickers los usan: BRK.B, RDS-B). El servidor lo vuelve a validar por lista blanca; aqui
  // basta con descartar lo que no es un ticker (una linea que empieza por numero o simbolo es
  // ilegible, no una posicion).
  const TICKER_RE = /^[A-Z][A-Z0-9.\-]{0,11}$/;

  const normalizaDecimal = (s) => {
    // Coma o punto: 62,3 == 62.3. Carlos escribe con coma.
    const n = Number.parseFloat(String(s == null ? '' : s).replace(',', '.'));
    return Number.isFinite(n) ? n : null;
  };

  const quitaCorchetes = (s) => String(s || '').replace(/^\[+|\]$/g, '').trim().toLowerCase();

  // texto -> { posiciones:[{ticker,titulos,entrada,bloque}], ilegibles:[{linea,porque}], sinBloque:n }
  // Una linea: "TICKER [titulos] [precio] [bloque]", separado por espacios o tabuladores.
  // Ticker obligatorio; titulos, precio y bloque opcionales. El bloque que no esta en BLOQUES cae a
  // sin-clasificar (y se cuenta); una linea sin ticker valido es ilegible (y se nombra). Una linea
  // en blanco se ignora, no se cuenta como error.
  const parseaCartera = (texto) => {
    const posiciones = [];
    const ilegibles = [];
    let sinBloque = 0;
    String(texto || '').split(/\r?\n/).forEach((linea) => {
      const limpia = linea.trim();
      if (!limpia) return;
      const t = limpia.split(/\s+/);
      const ticker = t[0].toUpperCase();
      if (!TICKER_RE.test(ticker)) {
        ilegibles.push({ linea: limpia, porque: 'ticker no valido' });
        return;
      }
      const pos = { ticker, titulos: null, entrada: null, bloque: null };
      if (t[1] != null) pos.titulos = normalizaDecimal(t[1]);
      if (t[2] != null) pos.entrada = normalizaDecimal(t[2]);
      if (t[3] != null) {
        const b = quitaCorchetes(t[3]);
        if (BLOQUES.includes(b)) pos.bloque = b;
        else { pos.bloque = 'sin-clasificar'; sinBloque += 1; }
      }
      posiciones.push(pos);
    });
    return { posiciones, ilegibles, sinBloque };
  };

  // Mezcla lo pegado con la cartera que ya hay: un ticker repetido ACTUALIZA la posicion existente,
  // no la descarta (la misma regla que el formulario de un ticker). Pura: devuelve una lista nueva.
  const mezclaCartera = (actual, nuevas) => {
    const out = (actual || []).slice();
    (nuevas || []).forEach((n) => {
      const i = out.findIndex((p) => p.ticker === n.ticker);
      if (i >= 0) out[i] = n;
      else out.push(n);
    });
    return out;
  };

  // posiciones + cotizaciones (lo que devuelve /api/cotiza: {ticker:{precio,moneda,...}}) ->
  // { divisas: { MONEDA: { pesos:{bloque:pct}, total } }, sinPrecio }.
  // El peso se calcula DENTRO de cada divisa: sumar USD y EUR daria una cifra falsa, y no se
  // convierte. Una posicion sin precio o sin titulos no pesa, pero se cuenta para decirlo.
  const pesosBloque = (posiciones, cotizaciones) => {
    const porDivisa = {};
    let sinPrecio = 0;
    (posiciones || []).forEach((p) => {
      const dato = (cotizaciones || {})[p.ticker];
      if (!dato || !p.titulos) { sinPrecio += 1; return; }
      const valor = dato.precio * p.titulos;
      const div = dato.moneda;
      const d = (porDivisa[div] = porDivisa[div] || { bloques: {}, total: 0 });
      const b = p.bloque || 'sin-clasificar';
      d.bloques[b] = (d.bloques[b] || 0) + valor;
      d.total += valor;
    });
    const divisas = {};
    Object.keys(porDivisa).forEach((div) => {
      const d = porDivisa[div];
      const map = {};
      Object.keys(d.bloques).forEach((b) => {
        map[b] = d.total ? (d.bloques[b] / d.total) * 100 : 0;
      });
      divisas[div] = { pesos: map, total: d.total };
    });
    return { divisas, sinPrecio };
  };

  return { BLOQUES, parseaCartera, mezclaCartera, pesosBloque };
})();
