// cartera-foto.mjs — cargar la cartera desde una foto o captura del broker.
// Solo con sesion: la transcripcion cuesta dinero por uso y la function exige JWT. Nada de lo
// que sale de la imagen entra en la cartera solo: se pinta una tabla editable y decide la
// persona. Un OCR que lee 1.000 donde ponia 1,000 mete una posicion falsa sin pestanear.
import { sb } from './cuenta-cliente.js'
// La misma regla que el buscador: un simbolo de la casa lleva bolsa, indice o divisa. Aqui hace
// mas falta todavia — el texto de la celda lo ha escrito un OCR, o lo ha corregido una persona
// a mano, y «micron» pasa la regex del servidor sin despeinarse.
import { esSimboloCasa } from './cartera-buscador.mjs'

const $ = (s) => document.querySelector(s)
const area = $('#cartera-foto-area')
const entrada = $('#cartera-foto')
const tabla = $('#cartera-foto-tabla')
const boton = $('#cartera-foto-anadir')
const aviso = $('#cartera-foto-aviso')

let sesion = null

const muestra = () => { area.hidden = !sesion }

// FileReader devuelve "data:image/png;base64,AAAA": la function quiere solo la parte de despues.
const aBase64 = (fichero) => new Promise((ok, mal) => {
  const fr = new FileReader()
  fr.onload = () => ok(String(fr.result).split(',')[1] || '')
  fr.onerror = () => mal(fr.error)
  fr.readAsDataURL(fichero)
})

const celda = (fila, hijo) => { const td = document.createElement('td'); td.append(hijo); fila.append(td); return td }

const pintaTabla = (filas) => {
  tabla.replaceChildren()
  const cabecera = document.createElement('tr')
  ;['', 'Leído', 'Símbolo', 'Títulos', 'Entrada'].forEach((t) => {
    const th = document.createElement('th')
    th.textContent = t
    cabecera.append(th)
  })
  tabla.append(cabecera)
  filas.forEach((f) => {
    const tr = document.createElement('tr')
    tr.dataset.fila = '1'
    const marca = document.createElement('input')
    marca.type = 'checkbox'
    // Lo que no se ha podido resolver o no trae titulos nace DESMARCADO: quien lo quiera, que
    // lo mire y lo marque. Marcarlo por defecto es meterlo por descuido.
    marca.checked = Boolean(f.simbolo) && Number(f.titulos) > 0
    marca.setAttribute('aria-label', `Añadir ${f.nombre || f.texto}`)
    celda(tr, marca)
    const leido = document.createElement('span')
    // El texto crudo de la imagen se ensena SIEMPRE al lado del simbolo resuelto: es lo unico
    // que permite pillar que «MU» de la captura se resolvio a otra cosa.
    leido.textContent = `${f.nombre || '—'} · ${f.texto || '—'}`
    celda(tr, leido)
    const sim = document.createElement('input')
    sim.value = f.simbolo || ''
    sim.placeholder = 'sin resolver'
    sim.className = 'foto-simbolo'
    sim.setAttribute('aria-label', 'Símbolo de mercado')
    celda(tr, sim)
    const tit = document.createElement('input')
    tit.type = 'number'
    tit.step = 'any'
    tit.min = '0'
    tit.value = f.titulos ?? ''
    tit.className = 'foto-titulos'
    tit.setAttribute('aria-label', 'Títulos')
    celda(tr, tit)
    const ent = document.createElement('input')
    ent.type = 'number'
    ent.step = 'any'
    ent.min = '0'
    ent.value = f.entrada ?? ''
    ent.className = 'foto-entrada'
    ent.setAttribute('aria-label', 'Precio de entrada')
    celda(tr, ent)
    tabla.append(tr)
  })
  tabla.hidden = false
  boton.hidden = false
}

entrada.addEventListener('change', async () => {
  const fichero = entrada.files && entrada.files[0]
  if (!fichero || !sesion) return
  if (fichero.size > 4 * 1024 * 1024) {
    aviso.textContent = 'La imagen pasa de 4 MB. Haz una captura más pequeña o recórtala.'
    return
  }
  aviso.textContent = 'Leyendo la imagen…'
  tabla.hidden = true
  boton.hidden = true
  try {
    const imagen = await aBase64(fichero)
    const { data, error } = await sb.functions.invoke('transcribe-cartera', { body: { imagen, mime: fichero.type } })
    if (error) throw error
    const filas = (data && data.filas) || []
    if (!filas.length) {
      aviso.textContent = 'No se ha podido leer ninguna posición en esa imagen. Prueba con una captura más nítida, o métela a mano.'
      return
    }
    aviso.textContent = `${filas.length} posición(es) leídas. Revísalas: te quedan ${data.tope - data.usos} imágenes hoy.`
    pintaTabla(filas)
  } catch (e) {
    console.error('[cerebro/foto]', e)
    const cod = (e && (e.code || e.status)) || ''
    aviso.textContent = cod === 429 || String(cod) === '429'
      ? 'Has llegado al tope de 10 imágenes por hoy. Mañana vuelve a haber.'
      : `No se pudo leer la imagen${cod ? ` (${cod})` : ''}. Puedes meter las posiciones a mano.`
  } finally {
    entrada.value = ''
  }
})

boton.addEventListener('click', async () => {
  if (!sesion) return
  const SIMBOLO_RE = /^[a-z0-9.\-^=]{1,15}$/
  let hechas = 0
  const problemas = []
  for (const tr of tabla.querySelectorAll('tr[data-fila]')) {
    if (!tr.querySelector('input[type=checkbox]').checked) continue
    const simbolo = tr.querySelector('.foto-simbolo').value.trim().toLowerCase()
    const titulos = Number(tr.querySelector('.foto-titulos').value)
    const precio = Number(tr.querySelector('.foto-entrada').value) || 0
    if (!esSimboloCasa(simbolo) || !(titulos > 0)) { problemas.push(simbolo || 'fila sin símbolo'); continue }
    const { error } = await sb.from('posiciones').upsert(
      { user_id: sesion.user.id, simbolo, acciones: titulos, precio_medio: precio },
      { onConflict: 'user_id,simbolo' },
    )
    if (error) { console.error('[cerebro/foto]', simbolo, error); problemas.push(`${simbolo} (${error.code || ''})`) }
    else hechas += 1
  }
  aviso.textContent = problemas.length
    ? `${hechas} añadida(s). No se pudieron añadir: ${problemas.join(', ')}.`
    : `${hechas} posición(es) añadidas.`
  tabla.hidden = hechas > 0
  boton.hidden = hechas > 0
  if (window.CerebroCarteraLocal) window.CerebroCarteraLocal.repintar()
})

if (sb) {
  sb.auth.getSession().then(({ data }) => { sesion = data.session; muestra() })
  sb.auth.onAuthStateChange((_ev, s) => { sesion = s; muestra() })
}
