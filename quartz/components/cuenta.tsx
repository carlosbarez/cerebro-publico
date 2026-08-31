// cuenta.tsx — registro, login, reset y borrado de cuenta (plan 2026-08-30).
// Patron copiado de chat-publico.tsx; se registra a mano en config-loader.ts (Task 8).
// Solo se pinta en el slug "cuenta".
// @ts-ignore: el .inline.ts viaja como texto (inline-script-loader); no es modulo de TS.
import cuentaScript from "./cuenta.inline"

function Cuenta({ fileData }: QuartzComponentProps) {
  if (fileData.slug !== "cuenta") return null
  return (
    <section id="cuenta" class="cuenta">
      <p class="cuenta-rotulo">Tu cuenta</p>
      <p id="cuenta-mensaje" class="cuenta-mensaje" role="status"></p>

      <div id="cuenta-sin-sesion" hidden>
        <form id="cuenta-form-login" class="cuenta-form">
          <input type="email" name="email" required autocomplete="email" placeholder="tu@email" />
          <input
            type="password"
            name="password"
            required
            minlength={8}
            autocomplete="current-password"
            placeholder="Contraseña (mínimo 8)"
          />
          <button type="submit" class="cuenta-accion">
            Entrar
          </button>
          <p class="cuenta-aux">
            <a href="#" data-cuenta-ver="registro">
              Crear cuenta
            </a>
            {" · "}
            <a href="#" data-cuenta-ver="reset">
              Olvidé mi contraseña
            </a>
          </p>
        </form>

        <form id="cuenta-form-registro" class="cuenta-form" hidden>
          <input type="email" name="email" required autocomplete="email" placeholder="tu@email" />
          <input
            type="password"
            name="password"
            required
            minlength={8}
            autocomplete="new-password"
            placeholder="Contraseña (mínimo 8)"
          />
          <button type="submit" class="cuenta-accion">
            Crear cuenta
          </button>
          <p class="cuenta-aux">
            <a href="#" data-cuenta-ver="login">
              Ya tengo cuenta
            </a>
          </p>
        </form>

        <form id="cuenta-form-reset" class="cuenta-form" hidden>
          <input type="email" name="email" required autocomplete="email" placeholder="tu@email" />
          <button type="submit" class="cuenta-accion">
            Enviarme el enlace
          </button>
          <p class="cuenta-aux">
            <a href="#" data-cuenta-ver="login">
              Volver
            </a>
          </p>
        </form>

        {/* Solo visible al llegar desde el email de reset (evento PASSWORD_RECOVERY). */}
        <form id="cuenta-form-nueva" class="cuenta-form" hidden>
          <input
            type="password"
            name="password"
            required
            minlength={8}
            autocomplete="new-password"
            placeholder="Nueva contraseña (mínimo 8)"
          />
          <button type="submit" class="cuenta-accion">
            Guardar contraseña
          </button>
        </form>
      </div>

      <div id="cuenta-con-sesion" hidden>
        <p>
          Sesión iniciada como <strong id="cuenta-email"></strong>.
        </p>
        <p>
          <a href="/mi-cartera">Ir a mi cartera y guardados</a>
        </p>
        <p>
          <button id="cuenta-salir" type="button" class="cuenta-accion">
            Cerrar sesión
          </button>
        </p>
        <p>
          <button id="cuenta-borrar" type="button" class="cuenta-peligro">
            Borrar mi cuenta y todos mis datos
          </button>
        </p>
      </div>
    </section>
  )
}

Cuenta.displayName = "Cuenta"
Cuenta.afterDOMLoaded = cuentaScript
// Solo variables vivas del sitio; los patrones copian a chat-publico.tsx.
Cuenta.css = `
.cuenta {
  max-width: 68ch;
  margin: 0 0 96px;
}
.cuenta .cuenta-rotulo {
  color: var(--bronce);
  font-family: var(--condensada);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 12px;
}
.cuenta-form {
  display: grid;
  gap: 18px;
  max-width: 36ch;
}
.cuenta-form input {
  min-width: 0;
  border: 0;
  border-bottom: 1px solid var(--hueso);
  border-radius: 0;
  padding: 8px 2px;
  background: transparent;
  color: var(--hueso);
  caret-color: var(--catodo);
  font-family: var(--prosa);
}
.cuenta-form input::placeholder {
  color: var(--hueso-3);
}
.cuenta-accion {
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
.cuenta-accion:disabled {
  cursor: wait;
  opacity: 0.55;
}
.cuenta-peligro {
  border: 0;
  background: transparent;
  color: var(--aviso);
  font-family: var(--condensada);
  font-size: 0.8125rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: pointer;
  padding: 8px 0;
}
.cuenta-aux {
  color: var(--hueso-2);
  font-size: 0.9rem;
  margin: 0;
}
.cuenta-mensaje {
  min-height: 1.4em;
  color: var(--hueso-2);
}
.cuenta-mensaje.cuenta-error {
  color: var(--aviso);
}
`

export default (() => Cuenta) satisfies QuartzComponentConstructor
