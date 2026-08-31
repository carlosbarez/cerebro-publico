// cartera.inline.ts — cliente de /mi-cartera (plan 2026-08-30). Viaja como texto.
// Lee posiciones y favoritos de Supabase (RLS: solo las del usuario), pide cierres a la
// edge function "precios" y calcula valor y P&L en cliente. textContent siempre.

// @ts-ignore: el .inline.ts viaja como texto (inline-script-loader); no es modulo de TS.
const CFG = (window as any).CEREBRO_SUPABASE
const sb =
  CFG && (window as any).supabase
    ? (window as any).supabase.createClient(CFG.url, CFG.anonKey)
    : null

function toma<T extends Element>(raiz: Element, selector: string): T | null {
  return raiz.querySelector<T>(selector)
}

function crea(etiqueta: string, texto: string): HTMLElement {
  const el = document.createElement(etiqueta)
  el.textContent = texto
  return el
}

function num(n: number): string {
  return n.toLocaleString("es-ES", { maximumFractionDigits: 2 })
}

function montar(): void {
  const raiz = document.querySelector<HTMLElement>("#cartera")
  if (!raiz || raiz.dataset.listo === "1") return
  raiz.dataset.listo = "1"
  if (!sb) return

  const mensajeEl = toma<HTMLElement>(raiz, "#cartera-mensaje")!
  const mensaje = (texto: string, esError = false) => {
    mensajeEl.textContent = texto
    mensajeEl.style.color = esError ? "var(--aviso)" : ""
  }

  const pintaPosiciones = async (): Promise<void> => {
    const filas = toma<HTMLElement>(raiz, "#cartera-filas")!
    const { data: pos, error } = await sb.from("posiciones").select("*").order("creado")
    if (error) {
      mensaje("No se pudo leer la cartera.", true)
      return
    }

    let precios: Record<string, any> = {}
    if (pos.length > 0) {
      const { data, error: e2 } = await sb.functions.invoke("precios", {
        body: { simbolos: pos.map((p: any) => p.simbolo) },
      })
      if (e2) mensaje("Los precios no están disponibles ahora; se muestra lo guardado.", true)
      else precios = data?.precios ?? {}
    }

    filas.replaceChildren()
    let total = 0
    let pnl = 0
    let fecha = ""
    let antiguo = false
    for (const p of pos) {
      const info = precios[p.simbolo]
      const cierre = info && !info.error ? Number(info.precio) : null
      const valor = cierre != null ? cierre * p.acciones : null
      const diferencia = cierre != null ? (cierre - p.precio_medio) * p.acciones : null
      if (valor != null) total += valor
      if (diferencia != null) pnl += diferencia
      if (info?.fecha && info.fecha > fecha) fecha = info.fecha
      if (info?.caducado) antiguo = true

      const tr = document.createElement("tr")
      tr.append(
        crea("td", p.simbolo),
        crea("td", num(p.acciones)),
        crea("td", num(p.precio_medio)),
        crea("td", cierre != null ? num(cierre) : "—"),
        crea("td", valor != null ? num(valor) : "—"),
        crea("td", diferencia != null ? (diferencia >= 0 ? "+" : "") + num(diferencia) : "—"),
      )
      const tdBorrar = document.createElement("td")
      const boton = document.createElement("button")
      boton.type = "button"
      boton.className = "cartera-quitar"
      boton.textContent = "Quitar"
      boton.addEventListener("click", async () => {
        const { error: e3 } = await sb.from("posiciones").delete().eq("id", p.id)
        if (e3) mensaje("No se pudo quitar la posición.", true)
        else await pintaPosiciones()
      })
      tdBorrar.append(boton)
      tr.append(tdBorrar)
      filas.append(tr)
    }
    toma<HTMLElement>(raiz, "#cartera-total")!.textContent = pos.length ? num(total) : "—"
    toma<HTMLElement>(raiz, "#cartera-pnl")!.textContent = pos.length
      ? (pnl >= 0 ? "+" : "") + num(pnl)
      : "—"
    toma<HTMLElement>(raiz, "#cartera-fecha")!.textContent = fecha
      ? `Cierres del ${fecha}${antiguo ? " · algún precio es antiguo (Stooq no responde)" : ""}`
      : ""
  }

  const pintaFavoritos = async (): Promise<void> => {
    const lista = toma<HTMLElement>(raiz, "#cartera-favoritos")!
    const { data: favs, error } = await sb
      .from("favoritos")
      .select("slug, titulo")
      .order("creado", { ascending: false })
    if (error) {
      mensaje("No se pudieron leer los guardados.", true)
      return
    }
    lista.replaceChildren()
    if (favs.length === 0) {
      lista.append(crea("li", "Todavía no has guardado ningún artículo."))
      return
    }
    for (const f of favs) {
      const li = document.createElement("li")
      const a = document.createElement("a")
      a.href = `/${f.slug}`
      a.textContent = f.titulo
      li.append(a)
      lista.append(li)
    }
  }

  const pintaTodo = async (): Promise<void> => {
    const { data: sesion } = await sb.auth.getSession()
    const sinSesion = toma<HTMLElement>(raiz, "#cartera-sin-sesion")!
    const app = toma<HTMLElement>(raiz, "#cartera-app")!
    sinSesion.hidden = Boolean(sesion.session)
    app.hidden = !sesion.session
    if (!sesion.session) return
    mensaje("")
    await Promise.all([pintaPosiciones(), pintaFavoritos()])
  }

  toma<HTMLFormElement>(raiz, "#cartera-form")!.addEventListener("submit", async (ev) => {
    ev.preventDefault()
    const f = ev.currentTarget as HTMLFormElement
    const campo = (n: string) => (f.elements.namedItem(n) as HTMLInputElement).value.trim()
    const simbolo = campo("simbolo").toLowerCase()
    const acciones = Number(campo("acciones"))
    const precio = Number(campo("precio"))
    if (!/^[a-z0-9.\-^=]{1,15}$/.test(simbolo) || !(acciones > 0) || !(precio >= 0)) {
      mensaje("Revisa el símbolo, las acciones y el precio.", true)
      return
    }
    const { data: sesion } = await sb.auth.getSession()
    // upsert: si el simbolo ya estaba, se actualiza la posicion en vez de fallar.
    const { error } = await sb.from("posiciones").upsert(
      {
        user_id: sesion.session.user.id,
        simbolo,
        acciones,
        precio_medio: precio,
      },
      { onConflict: "user_id,simbolo" },
    )
    if (error) mensaje("No se pudo guardar la posición.", true)
    else {
      f.reset()
      await pintaPosiciones()
    }
  })

  void pintaTodo()
}

// Mismo patron que chat-publico.inline.ts.
document.addEventListener("nav", montar)
montar()

// Hace que este archivo sea un modulo de TS (ambito propio) y no colisione con otros
// .inline.ts que declaran ayudantes con el mismo nombre (toma, montar, crea...).
// El build (inline-script-loader) elimina el "export", asi que en runtime no cambia nada.
export {}
