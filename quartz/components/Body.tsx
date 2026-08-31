import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

// LA BARRA BRASA. Es la navegacion del puesto de mando (web/ui/index.html) traida al sitio publico:
// wordmark a la izquierda y las cuatro secciones a la derecha, en el orden que decidio Carlos.
//
// Vive AQUI y no en un plugin en posicion `header` por dos razones medidas: `header` se pinta dentro
// de `.center`, que en escritorio es la columna del medio y no la pantalla —habria que sacarla con
// CSS igual—, y Body es el unico envoltorio por el que pasan los tres frames (default, full-width y
// minimal), asi que una sola copia cubre las 1.098 paginas y las dos bases.
//
// Los destinos son los que EXISTEN hoy. «Chat con Elisa» apunta al ancla #chat de la portada, donde
// ya vive el cuadro del chat.
const SECCIONES = [
  { texto: "Chat con Elisa", href: "/#chat" },
  { texto: "Newsletter", href: "/actualidad" },
  { texto: "Biblioteca", href: "/biblioteca.base" },
  { texto: "Mi cuenta", href: "/cuenta" },
]

const Body: QuartzComponent = ({ children }: QuartzComponentProps) => {
  return (
    <>
      <header class="barra-brasa">
        <a class="barra-casa" href="/">
          El Cerebro
        </a>
        <nav class="barra-nav" aria-label="Secciones">
          <ul>
            {SECCIONES.map((s) => (
              <li>
                <a href={s.href}>{s.texto}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <div id="quartz-body">{children}</div>
    </>
  )
}

export default (() => Body) satisfies QuartzComponentConstructor
