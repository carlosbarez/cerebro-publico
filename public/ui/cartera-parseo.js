// cartera-parseo.js — la cartera se pega como texto y se parsea a posiciones.
//
// Funciones PURAS (sin DOM, sin red): las ejercita web/ui/prueba-cartera.html con console.assert,
// que es el equivalente al demo() con asserts del resto del repo. Viven aqui y no dentro del IIFE de
// app.js para poder cargarse en la pagina de prueba sin arrastrar el resto de la UI.
window.CerebroCartera = (() => {
  'use strict';

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

  // texto -> { posiciones:[{ticker,titulos,entrada}], ilegibles:[{linea,porque}] }
  // Una linea: "TICKER [titulos] [precio]", separado por espacios o tabuladores.
  // Ticker obligatorio; titulos y precio opcionales; lo que venga despues se ignora. Una linea
  // sin ticker valido es ilegible (y se nombra). Una linea en blanco se ignora, no se cuenta
  // como error.
  const parseaCartera = (texto) => {
    const posiciones = [];
    const ilegibles = [];
    String(texto || '').split(/\r?\n/).forEach((linea) => {
      const limpia = linea.trim();
      if (!limpia) return;
      const t = limpia.split(/\s+/);
      const ticker = t[0].toUpperCase();
      if (!TICKER_RE.test(ticker)) {
        ilegibles.push({ linea: limpia, porque: 'ticker no valido' });
        return;
      }
      const pos = { ticker, titulos: null, entrada: null };
      if (t[1] != null) pos.titulos = normalizaDecimal(t[1]);
      if (t[2] != null) pos.entrada = normalizaDecimal(t[2]);
      posiciones.push(pos);
    });
    return { posiciones, ilegibles };
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

  return { parseaCartera, mezclaCartera };
})();
