// cuenta.inline.ts — cliente de /cuenta (plan 2026-08-30). Viaja como texto (inline-script-loader).
// Usa window.supabase (UMD de jsdelivr, Task 4) y window.CEREBRO_SUPABASE (supabase-config.js).
// textContent siempre: lo que viene de red o del usuario nunca toca innerHTML.

// @ts-ignore: el .inline.ts viaja como texto (inline-script-loader); no es modulo de TS.
const CFG = (window as any).CEREBRO_SUPABASE
const sb =
  CFG && (window as any).supabase
    ? (window as any).supabase.createClient(CFG.url, CFG.anonKey)
    : null

function toma<T extends Element>(raiz: Element, selector: string): T | null {
  return raiz.querySelector<T>(selector)
}

function montar(): void {
  const raiz = document.querySelector<HTMLElement>("#cuenta")
  if (!raiz || raiz.dataset.listo === "1") return
  raiz.dataset.listo = "1"

  const mensajeEl = toma<HTMLElement>(raiz, "#cuenta-mensaje")!
  const mensaje = (texto: string, esError = false) => {
    mensajeEl.textContent = texto
    mensajeEl.classList.toggle("cuenta-error", esError)
  }
  if (!sb) {
    mensaje("La cuenta todavía no está configurada.", true)
    return
  }

  const sinSesion = toma<HTMLElement>(raiz, "#cuenta-sin-sesion")!
  const conSesion = toma<HTMLElement>(raiz, "#cuenta-con-sesion")!
  const formularios = ["login", "registro", "reset", "nueva"].map((n) =>
    toma<HTMLFormElement>(raiz, `#cuenta-form-${n}`)!,
  )
  const verFormulario = (nombre: string) => {
    for (const f of formularios) f.hidden = f.id !== `cuenta-form-${nombre}`
  }

  const pintaSesion = (sesion: any) => {
    sinSesion.hidden = Boolean(sesion)
    conSesion.hidden = !sesion
    if (sesion) {
      toma<HTMLElement>(raiz, "#cuenta-email")!.textContent = sesion.user.email
    } else {
      verFormulario("login")
    }
  }

  // Enlaces "Crear cuenta" / "Olvidé..." / "Volver": cambian el formulario visible.
  raiz.querySelectorAll<HTMLAnchorElement>("[data-cuenta-ver]").forEach((a) => {
    a.addEventListener("click", (ev) => {
      ev.preventDefault()
      verFormulario(a.dataset.cuentaVer!)
      mensaje("")
    })
  })

  const campo = (f: HTMLFormElement, n: string) =>
    (f.elements.namedItem(n) as HTMLInputElement).value.trim()

  toma<HTMLFormElement>(raiz, "#cuenta-form-login")!.addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget as HTMLFormElement
    const { error } = await sb.auth.signInWithPassword({
      email: campo(f, "email"),
      password: campo(f, "password"),
    })
    mensaje(error ? "Email o contraseña incorrectos." : "", Boolean(error))
  })

  toma<HTMLFormElement>(raiz, "#cuenta-form-registro")!.addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget as HTMLFormElement
    const { error } = await sb.auth.signUp({
      email: campo(f, "email"),
      password: campo(f, "password"),
      options: { emailRedirectTo: `${location.origin}/cuenta` },
    })
    if (error) mensaje("No se pudo crear la cuenta. Prueba con otro email.", true)
    else {
      mensaje("Cuenta creada. Revisa tu correo y confirma el email para entrar.")
      verFormulario("login")
    }
  })

  toma<HTMLFormElement>(raiz, "#cuenta-form-reset")!.addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget as HTMLFormElement
    await sb.auth.resetPasswordForEmail(campo(f, "email"), {
      redirectTo: `${location.origin}/cuenta`,
    })
    // Mismo mensaje exista o no el email: no se filtra quien esta dado de alta.
    mensaje("Si el email existe, te llega un enlace para cambiar la contraseña.")
    verFormulario("login")
  })

  toma<HTMLFormElement>(raiz, "#cuenta-form-nueva")!.addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget as HTMLFormElement
    const { error } = await sb.auth.updateUser({ password: campo(f, "password") })
    mensaje(error ? "No se pudo cambiar la contraseña." : "Contraseña actualizada.", Boolean(error))
  })

  toma<HTMLButtonElement>(raiz, "#cuenta-salir")!.addEventListener("click", async () => {
    await sb.auth.signOut()
    location.href = "/"
  })

  toma<HTMLButtonElement>(raiz, "#cuenta-borrar")!.addEventListener("click", async () => {
    if (!confirm("Se borra tu cuenta y todos tus datos (cartera y guardados). ¿Seguro?")) return
    const { error } = await sb.functions.invoke("borrar-cuenta")
    if (error) {
      mensaje("No se pudo borrar la cuenta. Escríbeme y lo hago a mano.", true)
      return
    }
    await sb.auth.signOut()
    location.href = "/"
  })

  sb.auth.onAuthStateChange((evento: string, sesion: any) => {
    if (evento === "PASSWORD_RECOVERY") {
      // Llega desde el email de reset: solo el formulario de nueva contrasena.
      sinSesion.hidden = false
      conSesion.hidden = true
      verFormulario("nueva")
      return
    }
    pintaSesion(sesion)
  })
  sb.auth.getSession().then(({ data }: any) => pintaSesion(data.session))
}

// Mismo patron que chat-publico.inline.ts: "nav" del router SPA + montar() para la primera carga.
document.addEventListener("nav", montar)
montar()

// Hace que este archivo sea un modulo de TS (ambito propio) y no colisione con
// otros .inline.ts que declaran ayudantes con el mismo nombre (toma, montar...).
// El build (inline-script-loader) elimina el "export", asi que en runtime no cambia nada.
export {}
