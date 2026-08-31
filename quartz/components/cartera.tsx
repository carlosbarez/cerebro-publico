// cartera.tsx — la cartera del usuario y sus articulos guardados (plan 2026-08-30).
// Patron copiado de chat-publico.tsx; se registra en config-loader.ts (Task 8).
// Solo se pinta en el slug "mi-cartera".
// @ts-ignore: el .inline.ts viaja como texto (inline-script-loader); no es modulo de TS.
import carteraScript from "./cartera.inline"

function Cartera({ fileData }: QuartzComponentProps) {
  if (fileData.slug !== "mi-cartera") return null
  return (
    <section id="cartera" class="cartera">
      <div id="cartera-sin-sesion" hidden>
        <p>
          Para guardar tu cartera necesitas una cuenta. <a href="/cuenta">Entrar o registrarte</a>.
        </p>
      </div>

      <div id="cartera-app" hidden>
        <p class="cartera-rotulo">Mi cartera</p>
        <form id="cartera-form" class="cartera-form">
          <input
            name="simbolo"
            required
            pattern="[A-Za-z0-9.\-^=]{1,15}"
            title="Símbolo de Stooq: aapl.us, san.mc, mc.pa…"
            placeholder="Símbolo (aapl.us, san.mc…)"
          />
          <input
            name="acciones"
            type="number"
            step="any"
            min="0"
            required
            placeholder="Nº acciones"
          />
          <input
            name="precio"
            type="number"
            step="any"
            min="0"
            required
            placeholder="Precio medio"
          />
          <button type="submit" class="cuenta-accion">
            Añadir
          </button>
        </form>
        <table class="cartera-tabla">
          <thead>
            <tr>
              <th>Símbolo</th>
              <th>Acciones</th>
              <th>P. medio</th>
              <th>Cierre</th>
              <th>Valor</th>
              <th>P&L</th>
              <th></th>
            </tr>
          </thead>
          <tbody id="cartera-filas"></tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td colspan={3}></td>
              <td id="cartera-total">—</td>
              <td id="cartera-pnl">—</td>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <p id="cartera-fecha" class="cartera-fecha"></p>

        <p class="cartera-rotulo">Guardados</p>
        <ul id="cartera-favoritos" class="cartera-favoritos"></ul>
      </div>

      <p id="cartera-mensaje" role="status"></p>
    </section>
  )
}

Cartera.displayName = "Cartera"
Cartera.afterDOMLoaded = carteraScript
Cartera.css = `
.cartera {
  max-width: 100%;
  margin: 0 0 96px;
}
.cartera .cartera-rotulo {
  color: var(--bronce);
  font-family: var(--condensada);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 28px 0 12px;
}
.cartera-form {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 8ch 10ch auto;
  gap: 14px;
  align-items: end;
  margin-bottom: 24px;
}
.cartera-form input {
  min-width: 0;
  border: 0;
  border-bottom: 1px solid var(--hueso);
  border-radius: 0;
  padding: 8px 2px;
  background: transparent;
  color: var(--hueso);
  caret-color: var(--catodo);
  font-family: var(--datos);
}
.cartera-form input::placeholder {
  color: var(--hueso-3);
}
.cartera-tabla {
  width: 100%;
  border-collapse: collapse;
  font-family: var(--datos);
  font-size: 0.92rem;
  line-height: 1.5;
}
.cartera-tabla th {
  color: var(--catodo);
  font-family: var(--condensada);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}
.cartera-tabla th,
.cartera-tabla td {
  padding: 9px 12px 9px 0;
  border-bottom: 1px dashed color-mix(in srgb, var(--bronce) 55%, transparent);
  text-align: right;
}
.cartera-tabla th:first-child,
.cartera-tabla td:first-child {
  text-align: left;
}
.cartera-tabla tfoot td {
  border-bottom: 0;
  color: var(--catodo);
}
.cartera-quitar {
  border: 0;
  background: transparent;
  color: var(--aviso);
  cursor: pointer;
  font-family: var(--datos);
}
.cartera-fecha {
  color: var(--hueso-2);
  font-family: var(--datos);
  font-size: 0.72rem;
}
.cartera-favoritos {
  margin: 0;
  padding-left: 24px;
}
.cartera-favoritos li {
  margin: 6px 0;
}
@media (max-width: 999px) {
  .cartera-form {
    grid-template-columns: 1fr;
  }
}
`

export default (() => Cartera) satisfies QuartzComponentConstructor
