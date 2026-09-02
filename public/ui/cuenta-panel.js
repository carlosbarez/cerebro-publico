// cuenta-panel.js — panel de cuenta (puerto de cuenta.inline.ts del repo publico, plan 2026-09-01).
// Modulo ES: importa el cliente de ./cuenta-cliente.js y publica window.CerebroCuenta para que
// app.js —que NO es un modulo— lo llame al activar la seccion.
// textContent SIEMPRE: lo que viene de red o del usuario nunca toca innerHTML.
import { sb } from './cuenta-cliente.js'

// No hay URL /cuenta en esta app: toda redireccion de correo vuelve a la seccion.
const DESTINO_CUENTA = `${location.origin}/?seccion=cuenta`

function montar() {
  const raiz = document.querySelector('#seccion-cuenta')
  // Guarda de montaje: entrar dos veces a la seccion no duplica listeners.
  if (!raiz || raiz.dataset.listo === '1') return
  raiz.dataset.listo = '1'

  const mensajeEl = raiz.querySelector('#cuenta-mensaje')
  const mensaje = (texto, esError = false) => {
    mensajeEl.textContent = texto
    mensajeEl.classList.toggle('cuenta-error', esError)
  }
  if (!sb) {
    mensaje('La cuenta todavía no está configurada.', true)
    return
  }

  const sinSesion = raiz.querySelector('#cuenta-sin-sesion')
  const conSesion = raiz.querySelector('#cuenta-con-sesion')
  const formularios = ['login', 'registro', 'reset', 'nueva'].map((n) => raiz.querySelector(`#cuenta-form-${n}`))
  const verFormulario = (nombre) => {
    for (const f of formularios) f.hidden = f.id !== `cuenta-form-${nombre}`
  }

  const pintaSesion = (sesion) => {
    sinSesion.hidden = Boolean(sesion)
    conSesion.hidden = !sesion
    if (sesion) {
      raiz.querySelector('#cuenta-email').textContent = sesion.user.email
    } else {
      verFormulario('login')
    }
  }

  // Enlaces "Crear cuenta" / "Olvidé..." / "Volver": cambian el formulario visible.
  raiz.querySelectorAll('[data-cuenta-ver]').forEach((a) => {
    a.addEventListener('click', (ev) => {
      ev.preventDefault()
      verFormulario(a.dataset.cuentaVer)
      mensaje('')
    })
  })

  const campo = (f, n) => f.elements.namedItem(n).value.trim()

  raiz.querySelector('#cuenta-form-login').addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget
    const { error } = await sb.auth.signInWithPassword({
      email: campo(f, 'email'),
      password: campo(f, 'password'),
    })
    mensaje(error ? 'Email o contraseña incorrectos.' : '', Boolean(error))
  })

  raiz.querySelector('#cuenta-form-registro').addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget
    const { error } = await sb.auth.signUp({
      email: campo(f, 'email'),
      password: campo(f, 'password'),
      options: { emailRedirectTo: DESTINO_CUENTA },
    })
    if (error) mensaje('No hemos podido crear la cuenta. Prueba con otro email.', true)
    else {
      mensaje('Cuenta creada. Revisa tu correo y confirma el email para entrar.')
      verFormulario('login')
    }
  })

  raiz.querySelector('#cuenta-form-reset').addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget
    await sb.auth.resetPasswordForEmail(campo(f, 'email'), { redirectTo: DESTINO_CUENTA })
    // Mismo mensaje exista o no el email: no se filtra quien esta dado de alta.
    mensaje('Si el email existe, te llega un enlace para cambiar la contraseña.')
    verFormulario('login')
  })

  raiz.querySelector('#cuenta-form-nueva').addEventListener('submit', async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget
    const { error } = await sb.auth.updateUser({ password: campo(f, 'password') })
    mensaje(error ? 'No hemos podido cambiar la contraseña.' : 'Contraseña actualizada.', Boolean(error))
  })

  raiz.querySelector('#cuenta-google').addEventListener('click', async () => {
    const { error } = await sb.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: DESTINO_CUENTA },
    })
    // Si el proveedor no estuviera habilitado, Supabase devuelve un error claro:
    // se ENSENA, no se esconde. Un boton que no hace nada visible es peor que no tenerlo.
    if (error) mensaje(`No hemos podido entrar con Google: ${error.message}`, true)
  })

  raiz.querySelector('#cuenta-salir').addEventListener('click', async () => {
    await sb.auth.signOut()
    // Nada de location.href: esto es una SPA de una pagina y recargar tiraria al visitante
    // fuera de la seccion. Se repinta el panel en su sitio.
    pintaSesion(null)
    mensaje('Sesión cerrada.')
  })

  raiz.querySelector('#cuenta-borrar').addEventListener('click', async () => {
    if (!confirm('Se borra tu cuenta y todos tus datos (cartera y guardados). ¿Seguro?')) return
    const { error } = await sb.functions.invoke('borrar-cuenta')
    if (error) {
      mensaje('No hemos podido borrar la cuenta. Escríbeme y lo hago a mano.', true)
      return
    }
    await sb.auth.signOut()
    pintaSesion(null)
    mensaje('Cuenta borrada. Tus datos ya no están.')
  })

  sb.auth.onAuthStateChange((evento, sesion) => {
    if (evento === 'PASSWORD_RECOVERY') {
      // Llega desde el email de reset: solo el formulario de nueva contrasena.
      sinSesion.hidden = false
      conSesion.hidden = true
      verFormulario('nueva')
      return
    }
    pintaSesion(sesion)
  })
  // Primero se resuelve la sesion —la vuelta de Google la trae en el fragmento de la URL— y
  // SOLO despues se pinta: pintar antes mostraria «sin sesion» un instante justo al volver.
  sb.auth.getSession().then(({ data }) => pintaSesion(data.session))
}

// Puente hacia app.js: al activar la seccion llama a pintar(); la guarda evita doble montaje.
window.CerebroCuenta = { pintar: montar }
montar()
