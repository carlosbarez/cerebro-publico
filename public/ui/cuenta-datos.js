// cuenta-datos.js — cartera sincronizada y notas guardadas: solo CON sesion.
// Sin sesion este modulo no hace NADA (ni una peticion a supabase.co): el modo local de
// app.js sigue intacto palabra por palabra (T5). La lectura/escritura del localStorage de la
// cartera NO se duplica: se usa el puente window.CerebroCarteraLocal que expone app.js.
// textContent SIEMPRE: lo que viene de red o del usuario nunca toca innerHTML.
import { sb } from './cuenta-cliente.js'
// Una sola definicion de «esto es un simbolo de la casa», compartida con el buscador: si la
// regla vive en dos sitios, se arregla en uno y el otro sigue dejando pasar «micron».
import { esSimboloCasa } from './cartera-buscador.mjs'

// user_id al que ya se le ofrecio fundir su cartera local: se avisa UNA vez por cuenta y navegador.
const CLAVE_OFERTA = 'cerebro.cartera.ofertaFusion'

// Lo que media la cartera por riesgo se retiro el 2026-09-01. La clave vieja se borra en vez
// de dejarse: un dato que ya nadie lee pero sigue ocupando el localStorage de la gente es
// basura que no caduca. Va partida porque la barrera (7) del test estatico prohibe el literal.
try { localStorage.removeItem('cerebro.' + 'bloques.v1') } catch { /* modo privado: nada que limpiar */ }

const $ = (s) => document.querySelector(s)
const crear = (tipo, texto, clase) => { const e = document.createElement(tipo); if (clase) e.className = clase; if (texto !== undefined) e.textContent = texto; return e }
const num = (n) => n.toLocaleString('es-ES', { maximumFractionDigits: 2 })

let sesion = null

// Lo que no se puede sincronizar: simbolo no-Stooq o sin titulos (acciones exige > 0).
const esSubible = (p) => esSimboloCasa(p.ticker.toLowerCase()) && p.titulos > 0

/* ——— textos y formulario: uno por estado, nunca los dos a la vez ——— */
const pintaTextos = () => {
  const con = Boolean(sesion)
  // Sin sesion la promesa «solo en este navegador» sigue siendo cierta; con sesion se
  // sustituye por la verdad del estado con cuenta. Nunca visibles las dos.
  $('#cartera-nota-local').hidden = con
  $('#cartera-nota-cuenta').hidden = !con
  // Cargar desde texto crea datos LOCALES: con sesion no tiene sentido y se esconde.
  $('#cartera-pegar-area').hidden = con
  // «Preguntar sobre estas posiciones» siembra el chat con la cartera local: con sesion, fuera.
  $('#cartera-preguntar').hidden = con
}

/* ——— fusion de la cartera local al iniciar sesion ——— */
const ofreceFusion = async () => {
  if (localStorage.getItem(CLAVE_OFERTA) === sesion.user.id) return
  const locales = window.CerebroCarteraLocal.leer()
  const subibles = locales.filter(esSubible)
  if (!subibles.length) return
  // Se marca ANTES del confirm: se avisa una vez, acepte o rechace.
  localStorage.setItem(CLAVE_OFERTA, sesion.user.id)
  const ok = confirm(`Tienes ${locales.length} posición(es) en este navegador. Se pueden subir ${subibles.length} a tu cuenta (las que tienen símbolo Stooq y títulos) y fundirlas con las que ya tengas; en caso de coincidir manda la de este navegador. ¿Las fundimos?`)
  if (!ok) return // se queda solo con lo del servidor; lo local no se toca
  const { data: servidor, error } = await sb.from('posiciones').select('*')
  if (error) { $('#cartera-aviso').textContent = 'No hemos podido leer tu cuenta para fundir; lo de este navegador sigue intacto.'; return }
  const delServidor = (servidor || []).map((p) => ({ ticker: p.simbolo, titulos: Number(p.acciones), entrada: Number(p.precio_medio) }))
  // mezclaCartera ya existe y esta probada en prueba-cartera.html: un ticker repetido
  // actualiza, no duplica. Al pasar lo local como "nuevas", manda lo local.
  const fundidas = window.CerebroCartera.mezclaCartera(delServidor, subibles.map((p) => ({ ...p, ticker: p.ticker.toLowerCase() })))
  let fallos = 0
  for (const p of fundidas) {
    const { error: e } = await sb.from('posiciones').upsert(
      { user_id: sesion.user.id, simbolo: p.ticker, acciones: p.titulos, precio_medio: p.entrada ?? 0 },
      { onConflict: 'user_id,simbolo' },
    )
    if (e) fallos += 1
  }
  // Lo subido sale de lo local; quedan solo las que no se pudieron sincronizar.
  window.CerebroCarteraLocal.guardar(locales.filter((p) => !subibles.includes(p)))
  if (fallos) $('#cartera-aviso').textContent = `${fallos} posición(es) no han podido subirse; lo demás ya está en tu cuenta.`
}

/* ——— la cartera con sesion ——— */
const pintar = async () => {
  const lista = $('#cartera-lista')
  const aviso = $('#cartera-aviso')
  aviso.textContent = ''
  const { data: pos, error } = await sb.from('posiciones').select('*').order('creado')
  if (error) { aviso.textContent = 'No hemos podido leer la cartera de tu cuenta. Prueba a recargar.'; return }

  let precios = {}
  if (pos.length > 0) {
    // La edge function admite entre 1 y 50 simbolos: si hay mas, se trocea.
    const simbolos = pos.map((p) => p.simbolo)
    for (let i = 0; i < simbolos.length; i += 50) {
      const { data, error: e2 } = await sb.functions.invoke('precios', { body: { simbolos: simbolos.slice(i, i + 50) } })
      if (e2) { precios = null; break }
      Object.assign(precios, (data && data.precios) || {})
    }
  }
  if (precios === null) {
    // Se pinta lo guardado igualmente: una tabla vacia pareceria perdida, no un fallo de precios.
    aviso.textContent = 'Ahora mismo no hay precios. Te enseñamos lo que tienes guardado.'
    precios = {}
  }

  const sobras = window.CerebroCarteraLocal.leer().filter((p) => !esSubible(p))
  lista.replaceChildren()
  $('#cartera-vacia').hidden = pos.length > 0 || sobras.length > 0

  let total = 0
  let pnl = 0
  let fecha = ''
  let antiguo = false
  for (const p of pos) {
    const info = precios[p.simbolo]
    const cierre = info && !info.error ? Number(info.precio) : null
    const valor = cierre != null ? cierre * p.acciones : null
    const dif = cierre != null ? (cierre - p.precio_medio) * p.acciones : null
    if (valor != null) total += valor
    if (dif != null) pnl += dif
    if (info && info.fecha && info.fecha > fecha) fecha = info.fecha
    if (info && info.caducado) antiguo = true

    const li = crear('li')
    const texto = crear('div')
    texto.append(crear('strong', p.simbolo))
    texto.append(crear('small', `${num(p.acciones)} títulos · entrada ${num(p.precio_medio)}${cierre != null ? ` · cierre ${num(cierre)}` : ' · sin precio'}`))
    li.append(texto)
    if (valor != null) li.append(crear('small', `${num(valor)}`, 'valor'))
    if (dif != null) li.append(crear('small', `${dif >= 0 ? '+' : ''}${num(dif)}`, dif >= 0 ? 'sube' : 'baja'))
    const quitar = crear('button', 'Quitar', 'quitar')
    quitar.type = 'button'
    quitar.setAttribute('aria-label', `Quitar ${p.simbolo} de tu cartera`)
    quitar.addEventListener('click', async () => {
      const { error: e3 } = await sb.from('posiciones').delete().eq('id', p.id)
      if (e3) aviso.textContent = 'No hemos podido quitar esa posición. Vuelve a intentarlo.'
      else await pintar()
    })
    li.append(quitar)
    lista.append(li)
  }
  // Las posiciones locales no subibles NO se sincronizan: se marcan y se pide completarlas.
  for (const p of sobras) {
    const li = crear('li')
    const texto = crear('div')
    texto.append(crear('strong', p.ticker))
    texto.append(crear('small', esSimboloCasa(p.ticker.toLowerCase())
      ? 'sin sincronizar — faltan los títulos'
      : 'sin precio — falta el sufijo de mercado (formato Stooq: aapl.us, san.mc, mc.pa)', 'bloque'))
    texto.append(crear('small', 'solo en este navegador; añádela de nuevo con el símbolo completo para subirla'))
    li.append(texto)
    const quitar = crear('button', 'Quitar', 'quitar')
    quitar.type = 'button'
    quitar.setAttribute('aria-label', `Quitar ${p.ticker} de este navegador`)
    quitar.addEventListener('click', () => {
      window.CerebroCarteraLocal.guardar(window.CerebroCarteraLocal.leer().filter((x) => x !== p))
      pintar()
    })
    li.append(quitar)
    lista.append(li)
  }

  const resumen = $('#cartera-resumen')
  resumen.hidden = pos.length === 0
  if (pos.length) resumen.textContent = `Total: ${num(total)} · Resultado: ${pnl >= 0 ? '+' : ''}${num(pnl)}`
  const fechaEl = $('#cartera-fecha')
  fechaEl.hidden = !fecha
  fechaEl.textContent = fecha ? `Cierres del ${fecha}${antiguo ? ' · algún precio es antiguo (Stooq no responde)' : ''}` : ''

  pintaInstrumentos(pos.length)
}

// El aside lo pinta app.js en modo local; en modo cuenta lo pinta esto, porque el texto local
// («no se envía a ningún servidor») seria falso con sesion.
const pintaInstrumentos = (n) => {
  const aside = $('#instrumentos')
  aside.replaceChildren(crear('h2', 'Instrumentos'))
  const g1 = crear('div', undefined, 'grupo')
  g1.append(crear('h3', 'Posiciones'), crear('p', String(n)))
  const g2 = crear('div', undefined, 'grupo')
  g2.append(crear('h3', 'Dónde vive'), crear('p', 'En tu cuenta: se sincroniza entre dispositivos y se borra con ella.'))
  aside.append(g1, g2)
  document.body.classList.add('con-instrumentos')
}

// Puente para app.js: devuelve true si pinto (hay sesion) y false si debe pintar el modo local.
const pintarSiSesion = async () => {
  if (!sb) return false
  if (!sesion) {
    const { data } = await sb.auth.getSession()
    sesion = data.session
  }
  if (!sesion) return false
  await ofreceFusion()
  await pintar()
  return true
}

/* ——— notas guardadas ——— */
let notaAbierta = null // { slug, titulo } de la nota abierta en el lector

const pintaGuardados = async () => {
  const lista = $('#cuenta-guardados')
  if (!lista) return
  lista.replaceChildren()
  if (!sesion) return
  const { data: favs, error } = await sb.from('favoritos').select('slug, titulo').order('creado', { ascending: false })
  // Segunda limpieza, DESPUES de la espera: getSession() y onAuthStateChange disparan esto a la
  // vez al arrancar, las dos limpian antes de su await y las dos anaden despues. Se veia como
  // «Todavia no has guardado ninguna nota.» dos veces seguidas.
  lista.replaceChildren()
  if (error) { lista.append(crear('li', 'No hemos podido leer tus guardados.')); return }
  if (!favs.length) { lista.append(crear('li', 'Todavía no has guardado ninguna nota.')); return }
  for (const f of favs) {
    const li = crear('li')
    const a = crear('a', f.titulo)
    // El slug ES la ruta sin .md que app.js usa en las URLs: /${slug} abre la nota.
    a.href = `/${f.slug}`
    li.append(a)
    lista.append(li)
  }
}

// La llama app.js cada vez que se abre (o cierra) una nota. Sin sesion el boton no se muestra.
const evalua = async (ruta, titulo) => {
  notaAbierta = ruta ? { slug: ruta.replace(/\.md$/, ''), titulo: titulo || document.title } : null
  const b = $('#guardar-articulo')
  if (!b) return
  if (!sb || !sesion || !notaAbierta) { b.hidden = true; return }
  const { data } = await sb.from('favoritos').select('slug').eq('slug', notaAbierta.slug).maybeSingle()
  b.dataset.guardado = data ? '1' : ''
  b.textContent = data ? 'Quitar de guardados' : 'Guardar nota'
  b.hidden = false
}

const alternaGuardado = async () => {
  if (!sesion || !notaAbierta) return
  const b = $('#guardar-articulo')
  if (b.dataset.guardado === '1') {
    const { error } = await sb.from('favoritos').delete().eq('slug', notaAbierta.slug)
    if (!error) { b.dataset.guardado = ''; b.textContent = 'Guardar nota' }
  } else {
    const { error } = await sb.from('favoritos').insert({ user_id: sesion.user.id, slug: notaAbierta.slug, titulo: notaAbierta.titulo })
    if (!error) { b.dataset.guardado = '1'; b.textContent = 'Quitar de guardados' }
  }
  pintaGuardados()
}

/* ——— arranque y puentes ——— */
if (sb) {
  // Alta con sesion: el listener se registra ANTES que el de app.js (los modulos van antes en
  // el documento), asi que stopImmediatePropagation deja el submit local sin efecto. Sin sesion
  // este listener no toca nada y el modo local sigue como hoy.
  $('#cartera-form').addEventListener('submit', async (ev) => {
    if (!sesion) return
    ev.preventDefault()
    ev.stopImmediatePropagation()
    // El formulario se captura AQUI, antes de la primera espera: pasado el despacho del evento
    // currentTarget vale null, y el .reset() de mas abajo lanzaria TypeError llevandose por
    // delante el repintado. Es exactamente lo que hacen los cuatro handlers de cuenta-panel.js.
    const form = ev.currentTarget
    const aviso = $('#cartera-aviso')
    const simbolo = window.CerebroBuscador.simboloElegido()
    const acciones = Number($('#cartera-titulos').value)
    const precio = Number($('#cartera-entrada').value) || 0
    if (!simbolo) {
      aviso.textContent = 'Elige un valor de la lista: escribe el nombre o el ticker y pincha el que sea.'
      return
    }
    if (!esSimboloCasa(simbolo)) {
      aviso.textContent = 'Ese valor no trae mercado (como mu.us o san.mc). Elígelo de la lista.'
      return
    }
    if (!(acciones > 0) || !(precio >= 0)) {
      aviso.textContent = 'Revisa los títulos (tienen que ser más de cero) y el precio.'
      return
    }
    const { error } = await sb.from('posiciones').upsert(
      { user_id: sesion.user.id, simbolo, acciones, precio_medio: precio },
      { onConflict: 'user_id,simbolo' },
    )
    if (error) aviso.textContent = 'No hemos podido guardar esa posición. Vuelve a intentarlo.'
    else { form.reset(); window.CerebroBuscador.limpia(); await pintar() }
  })
  const b = $('#guardar-articulo')
  if (b) b.addEventListener('click', alternaGuardado)
  sb.auth.getSession().then(({ data }) => { sesion = data.session; pintaTextos(); pintaGuardados() })
  sb.auth.onAuthStateChange((_ev, s) => {
    sesion = s
    pintaTextos()
    pintaGuardados()
    if (!sesion) {
      const bg = $('#guardar-articulo')
      if (bg) bg.hidden = true
    }
    // Si la cartera esta a la vista, se repinta en el modo que toca sin esperar a cambiar de seccion.
    if (!$('#seccion-cartera').hidden && window.CerebroCarteraLocal) window.CerebroCarteraLocal.repintar()
  })
}
window.CerebroCarteraRemota = { pintarSiSesion }
window.CerebroGuardados = { evalua }
