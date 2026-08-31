// guardar.inline.ts — toggle de favoritos en articulos (plan 2026-08-30). Viaja como texto.
// Sin sesion el boton ni se muestra. El slug viaja en data-slug del boton (lo pone guardar.tsx).

// @ts-ignore: el .inline.ts viaja como texto (inline-script-loader); no es modulo de TS.
const CFG = (window as any).CEREBRO_SUPABASE
const sb =
  CFG && (window as any).supabase
    ? (window as any).supabase.createClient(CFG.url, CFG.anonKey)
    : null

async function montar(): Promise<void> {
  const boton = document.querySelector<HTMLButtonElement>("#guardar-articulo")
  if (!boton || boton.dataset.listo === "1") return
  boton.dataset.listo = "1"
  if (!sb) return

  const { data: sesion } = await sb.auth.getSession()
  if (!sesion.session) return
  boton.hidden = false

  const slug = boton.dataset.slug!
  const pinta = (guardado: boolean) => {
    boton.dataset.guardado = guardado ? "1" : "0"
    boton.textContent = guardado ? "Guardado ✓" : "Guardar"
  }

  const { data: existente } = await sb
    .from("favoritos")
    .select("slug")
    .eq("slug", slug)
    .maybeSingle()
  pinta(Boolean(existente))

  boton.addEventListener("click", async () => {
    const guardado = boton.dataset.guardado === "1"
    if (guardado) {
      const { error } = await sb.from("favoritos").delete().eq("slug", slug)
      if (!error) pinta(false)
    } else {
      const titulo = document.querySelector("article h1")?.textContent?.trim() || document.title
      const { error } = await sb
        .from("favoritos")
        .insert({ user_id: sesion.session.user.id, slug, titulo })
      if (!error) pinta(true)
    }
  })
}

// Mismo patron que chat-publico.inline.ts. El boton cambia con cada pagina (SPA), asi que
// montar() se reevalua en cada "nav"; la guarda dataset.listo evita listeners dobles.
document.addEventListener("nav", () => void montar())
void montar()

// Hace que este archivo sea un modulo de TS (ambito propio) y no colisione con otros
// .inline.ts. El build (inline-script-loader) elimina el "export", asi que en runtime no cambia nada.
export {}
