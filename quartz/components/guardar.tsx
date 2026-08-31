// guardar.tsx — boton "Guardar" en los articulos (plan 2026-08-30).
// Patron copiado de chat-publico.tsx; se registra en config-loader.ts (Task 8).
// @ts-ignore: el .inline.ts viaja como texto (inline-script-loader); no es modulo de TS.
import guardarScript from "./guardar.inline"

// ponytail: exclusion por slug. Si crece (buscador, bases...), pasar a frontmatter "guardar: false".
const EXCLUIDOS = new Set(["index", "cuenta", "mi-cartera", "404"])

function Guardar({ fileData }: QuartzComponentProps) {
  const slug = fileData.slug
  if (!slug || EXCLUIDOS.has(slug) || slug.startsWith("tags/")) return null
  return (
    <button id="guardar-articulo" class="guardar-articulo" type="button" data-slug={slug} hidden>
      Guardar
    </button>
  )
}

Guardar.displayName = "Guardar"
Guardar.afterDOMLoaded = guardarScript
Guardar.css = `
.guardar-articulo {
  position: fixed;
  right: 18px;
  bottom: 18px;
  z-index: 100;
  border: 0;
  border-radius: 36px;
  padding: 12px 22px;
  background: var(--catodo);
  color: var(--catodo-tinta);
  font-family: var(--condensada);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  cursor: pointer;
  opacity: 0.92;
}
.guardar-articulo[data-guardado="1"] {
  background: transparent;
  color: var(--bronce);
  box-shadow: inset 0 0 0 1px var(--bronce);
}
`

export default (() => Guardar) satisfies QuartzComponentConstructor
