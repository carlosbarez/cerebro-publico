// chat-publico.tsx — el chat publico de Elisa dentro del sitio (plan fase 4, tarea 5).
//
// Declaracion: patron de los componentes internos de este Quartz (medido antes de escribir, paso 1
// de la tarea): una funcion (props: QuartzComponentProps) => JSX con displayName/css/afterDOMLoaded,
// envuelta en un constructor `(() => ChatPublico) satisfies QuartzComponentConstructor`, igual que
// Spacer.tsx o DesktopOnly.tsx. Los componentes internos NO pasan por el registro de plugins: los
// anade loadQuartzLayout en config-loader.ts, junto al otro caso especial que ya existia (Head).
//
// Solo se pinta en la portada: devuelve null si fileData.slug !== "index". Asi puede vivir en el
// layout comun sin aparecer en las ~1.000 paginas de contenido, carpetas y etiquetas.
//
// DISENO — nada elegido aqui: cada valor esta copiado de lo que ya existe.
//   Colores y tipografias: solo variables vivas (tokens.scss y los huecos de Quartz): --bronce,
//   --hueso, --hueso-2, --hueso-3, --catodo, --catodo-tinta, --aviso, --condensada, --prosa,
//   --datos. Ni un hex nuevo.
//   Medidas y patrones: la entrada es la del chat del vault (web/ui/estilo.css #entrada/#pregunta/
//   .accion) y la respuesta copia su .respuesta/.respuesta-cab/.respuesta-texto/.respuesta-meta;
//   el rotulo copia .dato-nombre de la portada (custom.scss) y el corte movil usa su breakpoint
//   de 999px. La promesa visible: toda respuesta lleva FIRMA, FUENTES y TRAZAS, siempre.

// El cliente (chat-publico.inline.ts) viaja como TEXTO gracias al inline-script-loader del build;
// aqui solo se cuelga como script afterDOMLoaded del componente.
// @ts-ignore: el .inline.ts viaja como texto (inline-script-loader); no es modulo de TS.
import chatPublicoScript from "./chat-publico.inline"

function ChatPublico({ fileData }: QuartzComponentProps) {
  if (fileData.slug !== "index") return null
  return (
    // id="chat": el ancla que la barra de navegacion ya enlaza (Body.tsx: { href: "/#chat" }).
    <section id="chat" class="chat-publico">
      <p class="chat-rotulo">Preguntar a Elisa</p>
      <form id="chat-formulario" class="chat-formulario">
        {/* Tope de 2.000 caracteres: el mismo limite del endpoint (api/pregunta.js), no uno nuevo. */}
        <textarea
          id="chat-pregunta"
          class="chat-pregunta"
          name="pregunta"
          maxlength={2000}
          required
          placeholder="Tu pregunta sobre empresas, conceptos o industrias"
        />
        <button type="submit" class="chat-enviar">
          Preguntar
        </button>
      </form>
      <article class="chat-respuesta" hidden>
        <header class="chat-cab">
          <div>
            <span class="chat-quien"></span>
            <small class="chat-ficha"></small>
          </div>
        </header>
        <div class="chat-texto"></div>
        <footer class="chat-meta">
          <p class="chat-linea-firma"></p>
          <p class="chat-linea-fuentes"></p>
          <p class="chat-linea-trazas"></p>
        </footer>
      </article>
    </section>
  )
}

ChatPublico.displayName = "ChatPublico"
ChatPublico.afterDOMLoaded = chatPublicoScript
ChatPublico.css = `
.chat-publico {
  max-width: 68ch;
  margin: 0 0 96px;
  padding-top: 28px;
  border-top: 1px dashed var(--bronce);
}
/* El rotulo copia .dato-nombre de la portada: madera, no brasa — la brasa es del boton. */
.chat-publico .chat-rotulo {
  color: var(--bronce);
  font-family: var(--condensada);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 12px;
}
/* La entrada es la del chat del vault (#entrada/#pregunta de web/ui/estilo.css). */
.chat-formulario {
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  align-items: end;
}
.chat-pregunta {
  min-width: 0;
  resize: vertical;
  border: 0;
  border-bottom: 1px solid var(--hueso);
  border-radius: 0;
  padding: 8px 2px;
  background: transparent;
  color: var(--hueso);
  caret-color: var(--catodo);
  font-family: var(--prosa);
}
.chat-pregunta::placeholder {
  color: var(--hueso-3);
}
/* El boton repite .heroe-accion / .accion: el unico boton relleno del sitio, en brasa. */
.chat-enviar {
  min-height: 48px;
  border: 0;
  border-radius: 36px;
  padding: 14px 28px;
  background: var(--catodo);
  color: var(--catodo-tinta);
  font-family: var(--condensada);
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  cursor: pointer;
}
.chat-enviar:disabled {
  cursor: wait;
  opacity: 0.55;
}
/* La respuesta copia .respuesta y sus piezas del chat del vault. */
.chat-respuesta {
  margin-top: 24px;
  padding-top: 28px;
  border-top: 1px dashed var(--bronce);
}
.chat-cab {
  display: flex;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 22px;
  color: var(--catodo);
  font-family: var(--condensada);
  font-size: 1.05rem;
  font-weight: 500;
  line-height: 1.1;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.chat-cab small {
  display: block;
  margin-top: 6px;
  color: var(--hueso-2);
  font-family: var(--datos);
  font-size: 0.7rem;
  line-height: 1.3;
  letter-spacing: 0;
  text-transform: none;
}
.chat-texto {
  color: var(--hueso);
  font-size: 1.08rem;
  line-height: 1.7;
}
.chat-texto p {
  margin: 0;
}
.chat-texto p + p {
  margin-top: 18px;
}
.chat-texto h1, .chat-texto h2, .chat-texto h3, .chat-texto h4 {
  margin: 34px 0 12px;
  color: var(--catodo);
  font-family: var(--condensada);
  font-weight: 500;
  line-height: 1.1;
  text-transform: uppercase;
}
.chat-texto h1 { font-size: 1.7rem; }
.chat-texto h2 { font-size: 1.4rem; }
.chat-texto h3, .chat-texto h4 { font-size: 1.1rem; letter-spacing: .06em; }
/* El primer encabezado ES la conclusion: va un escalon mayor y sin margen superior. */
.chat-texto > h2:first-child { font-size: 1.7rem; }
.chat-texto > h2:first-child, .chat-texto > h3:first-child { margin-top: 0; }
.chat-texto ul, .chat-texto ol { margin: 16px 0; padding-left: 24px; }
.chat-texto li { margin: 6px 0; }
.chat-texto a { color: var(--catodo); }
/* ==subrayado==: la idea a retener. Brasa bajo el crema, no otro color de texto. */
.chat-texto u {
  text-decoration: underline;
  text-decoration-color: var(--catodo);
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
}
.chat-texto blockquote {
  margin: 20px 0;
  padding-left: 18px;
  border-left: 1px dashed var(--bronce);
  color: var(--hueso-2);
}
.chat-texto code { font-family: var(--datos); font-size: .92em; }
.chat-texto table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  font-size: .92rem;
  line-height: 1.5;
}
.chat-texto th {
  color: var(--catodo);
  font-family: var(--condensada);
  font-size: .75rem;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: .1em;
  text-align: left;
  text-transform: uppercase;
}
.chat-texto th, .chat-texto td {
  padding: 9px 12px 9px 0;
  border-bottom: 1px dashed color-mix(in srgb, var(--bronce) 55%, transparent);
  text-align: left;
  vertical-align: top;
}
.chat-texto hr { border: 0; border-top: 1px dashed var(--bronce); margin: 28px 0; }
/* Fallo legible (endpoint sin desplegar, red, JSON roto): rojo funcional del sitio (--aviso). */
.chat-error {
  color: var(--aviso);
}
.chat-meta {
  margin-top: 30px;
  padding-top: 16px;
  border-top: 1px dashed color-mix(in srgb, var(--bronce) 60%, transparent);
  color: var(--hueso-2);
  font-family: var(--datos);
  font-size: 0.72rem;
  line-height: 1.5;
}
.chat-meta p {
  margin: 5px 0;
  overflow-wrap: anywhere;
}
@media (max-width: 999px) {
  .chat-formulario {
    grid-template-columns: 1fr;
  }
}
`

export default (() => ChatPublico) satisfies QuartzComponentConstructor
