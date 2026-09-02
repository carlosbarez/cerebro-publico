// cartera-buscador.mjs — escribir «Micron» o «MU» en vez del simbolo de mercado.
// Tres escalones, en este orden: catalogo local embebido (al instante, sin red), edge function
// 'buscar' (que sale a un buscador publico), y si las dos fallan, el campo de simbolo de toda la
// vida DICIENDO que esta degradado. Funciona con y sin sesion: 'buscar' no exige JWT.
// El sufijo de mercado NUNCA se adivina aqui: o lo trae el catalogo, o lo trae el buscador, o el
// usuario escribe el simbolo entero a mano. Adivinarlo da el precio de otra empresa.
import { sb } from './cuenta-cliente.js'

const $ = (s) => document.querySelector(s)
const ESPERA_MS = 250
const MIN = 2

const caja = $('#cartera-ticker')
const oculto = $('#cartera-simbolo')
const lista = $('#cartera-sugerencias')

let catalogo = []
let temporizador = null
let degradado = false

// El catalogo se pide una sola vez, y en diferido: la cartera no lo necesita para pintarse.
fetch('/ui/catalogo.json')
  .then((r) => (r.ok ? r.json() : []))
  .then((d) => { catalogo = Array.isArray(d) ? d : [] })
  .catch(() => { catalogo = [] })

// Se quitan los diacriticos para que «telefonica» encuentre «Telefónica».
const normaliza = (t) => t.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const delCatalogo = (q) => {
  const n = normaliza(q)
  return catalogo
    .filter((e) => normaliza(e.n).includes(n) || e.s.startsWith(n))
    .slice(0, 5)
    .map((e) => ({ simbolo: e.s, nombre: e.n, bolsa: e.b, tipo: 'EQUITY' }))
}

const pinta = (resultados) => {
  lista.replaceChildren()
  if (!resultados.length) { cierra(); return }
  resultados.forEach((r) => {
    const li = document.createElement('li')
    li.setAttribute('role', 'option')
    li.tabIndex = -1
    li.dataset.simbolo = r.simbolo
    const nom = document.createElement('strong')
    nom.textContent = r.nombre
    const meta = document.createElement('small')
    // La bolsa y el simbolo van SIEMPRE a la vista: es lo unico que distingue el Santander de
    // Madrid del ADR de Nueva York, y elegir el que no es da otra cotizacion y otra divisa.
    meta.textContent = `${r.bolsa || 'sin bolsa'} · ${r.simbolo}`
    li.append(nom, meta)
    li.addEventListener('click', () => elige(r))
    lista.append(li)
  })
  lista.hidden = false
  caja.setAttribute('aria-expanded', 'true')
}

const cierra = () => {
  lista.hidden = true
  caja.setAttribute('aria-expanded', 'false')
}

const elige = (r) => {
  oculto.value = r.simbolo
  caja.value = `${r.nombre} (${r.simbolo})`
  cierra()
  $('#cartera-titulos').focus()
}

const busca = async (q) => {
  const locales = delCatalogo(q)
  if (locales.length) pinta(locales)
  if (!sb) return
  try {
    const { data, error } = await sb.functions.invoke('buscar', { body: { q } })
    if (error) throw error
    const remotos = (data && data.resultados) || []
    // Se juntan sin repetir, el catalogo local primero: es el que sabemos cierto.
    const vistos = new Set(locales.map((r) => r.simbolo))
    pinta(locales.concat(remotos.filter((r) => !vistos.has(r.simbolo))))
    degradado = false
  } catch (e) {
    console.error('[cerebro/buscador]', e)
    if (!locales.length) {
      // Degradado CON rastro: se dice que el buscador no responde y se acepta el simbolo a mano.
      degradado = true
      $('#cartera-aviso').textContent = 'El buscador no responde. Escribe el símbolo de mercado completo (por ejemplo mu.us o san.mc) y se guardará igual.'
      cierra()
    }
  }
}

caja.addEventListener('input', () => {
  oculto.value = '' // al reescribir, la eleccion anterior deja de valer
  const q = caja.value.trim()
  clearTimeout(temporizador)
  if (q.length < MIN) { cierra(); return }
  temporizador = setTimeout(() => busca(q), ESPERA_MS)
})

caja.addEventListener('keydown', (ev) => {
  if (ev.key === 'Escape') { cierra(); return }
  if (ev.key !== 'ArrowDown' || lista.hidden) return
  ev.preventDefault()
  const primero = lista.querySelector('li')
  if (primero) primero.focus()
})

lista.addEventListener('keydown', (ev) => {
  const foco = document.activeElement
  if (ev.key === 'Enter' || ev.key === ' ') { ev.preventDefault(); foco.click(); return }
  if (ev.key === 'Escape') { cierra(); caja.focus(); return }
  const siguiente = ev.key === 'ArrowDown' ? foco.nextElementSibling : ev.key === 'ArrowUp' ? foco.previousElementSibling : null
  if (siguiente) { ev.preventDefault(); siguiente.focus() }
})

document.addEventListener('click', (ev) => {
  if (!lista.contains(ev.target) && ev.target !== caja) cierra()
})

// Si el buscador esta degradado se acepta lo que el usuario escriba a mano, pero solo si tiene
// pinta de simbolo completo: media palabra no es un simbolo.
const SIMBOLO_RE = /^[a-z0-9.\-^=]{1,15}$/

// La regex del servidor valida FORMA, no que sea un simbolo: «micron» la pasa entera. Y lo que
// canonico() devuelve lleva SIEMPRE marca — bolsa (aapl.us, san.mc), indice (^gspc) o divisa
// (eurusd=x); un ticker de EE.UU. a pelo sale ya con .us puesto. Asi que un texto de solo
// letras, digitos o guion NO es un simbolo de la casa: es un nombre, o un ticker sin mercado.
// Existe porque paso: la fila `micron` de la tabla posiciones se escribio desde esta pantalla
// el 2026-09-02 con el buscador degradado. Una posicion asi no cotiza y se queda sin precio
// para siempre, sin decir por que.
export const esSimboloCasa = (s) => SIMBOLO_RE.test(s) && /[.^=]/.test(s)

window.CerebroBuscador = {
  simboloElegido: () => {
    if (oculto.value) return oculto.value
    if (!degradado) return null
    const mano = caja.value.trim().toLowerCase()
    return esSimboloCasa(mano) ? mano : null
  },
  limpia: () => { oculto.value = ''; caja.value = ''; cierra() },
}
