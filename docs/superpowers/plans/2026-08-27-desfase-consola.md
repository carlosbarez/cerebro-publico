# Plan: cerrar el desfase entre la consola y la web pública

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** La web pública (`cerebro-publico`) queda a la par de la consola (`Documents/Cerebro Carlos/web`) a fecha 2026-08-27: pieza viva del cerebro en canvas, héroe con la pieza grande, chat público con formato (titulares, tablas, veredicto) y contenido republicado con el pulso/newsletter anonimizados.

**Architecture:** La consola es la fuente de verdad visual y de copy; el repo público es un port a Quartz. El contenido público NO se edita a mano: lo regenera `web/publicador/publica.py` desde el vault (`wiki/`), y ese mismo script copia tokens y la pieza del héroe. Por eso los cambios van en DOS repos: los de tubería/marcado en la consola, los de port en `cerebro-publico`, y al final se corre el publicador.

**Tech Stack:** Quartz 4 (SCSS, componentes TSX + inline scripts), Vercel serverless (`api/*.js`), Python 3.11 (publicador), scripts de navegador sin dependencias.

**Repos:**
- PÚBLICO: `/Users/carlosbarez/cerebro-publico`
- CONSOLA: `/Users/carlosbarez/Documents/Cerebro Carlos` (vault `wiki/` + app `web/`)

## Global Constraints

- **Copy literal de la consola.** Los textos de `elisa.py` y el JS de `cerebro.js` pasaron sus pruebas; se copian tal cual, no se "mejoran".
- **El copy público del héroe NO se toca**: el h1 público es «El análisis de Carlos, con el método a la vista.» y la firma «Cinco mentes · una cartera · cero ruido» — decisión editorial del port (commit 282c441), no un desfase.
- **`content/index.md` del repo público NO se edita a mano**: el publicador borra todo `content/*.md` y lo regenera desde el vault. El marcado del héroe vive en `wiki/index.md` de la consola (Tarea 2).
- **Sin dependencias nuevas** en ningún repo.
- **Fuera de alcance (decidido con Carlos):** la cartera del visitante (formulario + localStorage + `/api/cotiza` + `REGLAS_PUBLICA_CON_CARTERA`), el mini-índice de newsletter (`.indice-news`, es un panel de la consola; la newsletter pública son páginas Quartz con su propio índice) y el rate-limit del servidor de la consola.
- Commits locales sí; **push no**.
- `MAX_TOKENS = 1200` en `api/pregunta.js` se queda como está: la consola usa el mismo tope (`web/chat/proveedor.py:124`).

---

### Tarea 1: El publicador copia la pieza viva

Si `copia_pieza()` no copia los 5 ficheros nuevos, la próxima publicación deja el cerebro a medias y nadie lo nota. Es la primera tarea porque la Tarea 7 depende de ella.

**Files:**
- Modify: `/Users/carlosbarez/Documents/Cerebro Carlos/web/publicador/publica.py:33` y `:342-348` (docstring)

- [x] **Paso 1: Ampliar PIEZAS**

En `publica.py:33`, sustituir:

```python
PIEZAS = ("cerebro.svg", "cerebro.png")
```

por:

```python
PIEZAS = ("cerebro.svg", "cerebro.png", "cerebro.js", "cerebro-forma.js",
          "cerebro-fondo.js", "cerebro-fase-0.png", "cerebro-fase-1.png")
```

- [x] **Paso 2: Actualizar el docstring de `copia_pieza()` (líneas 342-348)**

El docstring dice hoy que «el PNG es opcional… mientras no esté, el sitio sirve el SVG». Ya no describe la pieza. Sustituirlo por:

```python
    """El cerebro del heroe se COPIA igual que los tokens: un solo mundo visual, una sola pieza.

    Devuelve la lista de lo copiado. La pieza ES el canvas: cerebro.js la reanima desde el
    contorno de cerebro-forma.js y la luz de los dos cerebro-fase-*.png (el recorte del video
    de Carlos); cerebro-fondo.js es el campo ambiental de la pagina. cerebro.svg queda como
    reserva: si el canvas no puede montar, el sitio incrusta el vector y no falla nada.
    """
```

- [x] **Paso 3: Correr los tests del publicador**

```bash
cd "/Users/carlosbarez/Documents/Cerebro Carlos" && python3 -m pytest tests/web -q
```

Esperado: verdes (filtro, datos, puerta, portada, datos_publicos, grafo_portada). Si alguno
cuenta piezas por nombre y falla, actualizar el test al nuevo PIEZAS — no al revés.

---

### Tarea 2: El marcado del héroe pide la pieza nueva (en el vault)

El `<section class="heroe">` de la portada pública se genera desde el vault. Aquí se enchufan los scripts de la pieza.

**Files:**
- Modify: `/Users/carlosbarez/Documents/Cerebro Carlos/wiki/index.md:11-25`

- [x] **Paso 1: Sustituir el comentario de LA PIEZA (líneas 11-14)**

```html
  <!-- LA PIEZA. El hueco lo llena /static/cerebro-inline.js: el canvas vivo de cerebro.js
       (reanimado del video con cerebro-forma.js y los dos cerebro-fase-*.png) y, si no puede,
       cerebro.svg incrustado. cerebro-fondo.js es el campo ambiental de la pagina. -->
```

- [x] **Paso 2: Sustituir la línea del script (línea 25)**

De:

```html
<script src="/static/cerebro-inline.js"></script>
```

a (EL ORDEN IMPORTA: forma antes que cerebro.js, inline el último):

```html
<script src="/static/cerebro-forma.js"></script>
<script src="/static/cerebro.js"></script>
<script src="/static/cerebro-fondo.js"></script>
<script src="/static/cerebro-inline.js"></script>
```

- [x] **Paso 3: Sin test aquí** — la verificación llega en la Tarea 7, cuando el publicador regenere `content/index.md` y se compruebe que los cuatro scripts están en la portada servida.

---

### Tarea 3: `cerebro-inline.js` monta el canvas primero

Este fichero vive SOLO en el repo público (el publicador no lo copia): es el port del montaje que la consola hace en `web/ui/app.js:44-49`.

**Files:**
- Modify: `/Users/carlosbarez/cerebro-publico/quartz/static/cerebro-inline.js` (reescritura completa)

- [x] **Paso 1: Reescribir el fichero entero con este contenido**

```js
// cerebro-inline.js — mete la pieza central en el heroe de la portada.
//
// LA PIEZA, EN ESTE ORDEN (el mismo del puesto de mando, web/ui/app.js):
//   1. El canvas vivo: cerebro.js hornea dos laminas de cerebro-fase-0/1.png recortadas por la
//      silueta de cerebro-forma.js, y el latido es la interpolacion entre ellas.
//   2. El SVG vectorial incrustado, si el canvas no puede (sin forma, PNG roto, excepcion).
// El SVG se INCRUSTA en el DOM y no se enlaza: dentro de un <img> no ejecuta ni sus animaciones
// ni :hover. cerebro-fondo.js (cargado aparte) se automonta: no hay que llamarlo.
//
// Si fallan las dos, la firma lo dice. Un hueco mudo en el centro de la portada se leeria como
// un fallo de red cualquiera, y no como lo que es.
(() => {
  "use strict"
  const hueco = document.getElementById("cerebro")
  if (!hueco) return
  const firma = document.querySelector(".heroe-firma")
  const diLo = (t) => { if (firma) firma.textContent = t }

  const vectorial = () =>
    fetch("/static/cerebro.svg")
      .then((r) => { if (!r.ok) throw new Error(r.status); return r.text() })
      .then((svg) => { hueco.innerHTML = svg; hueco.dataset.pieza = "vector" })
      .catch(() => diLo("La pieza no cargó — el índice sigue debajo"))

  // monta() devuelve null si no hay datos de forma y llama a alFallar si un PNG no carga:
  // en los dos casos, el vector. Sin estados de chat aqui —la portada no conversa—: ritmo 1.
  let viva = null
  if (window.CerebroPieza) {
    try {
      viva = window.CerebroPieza.monta(hueco, () => { viva = null; vectorial() })
      if (viva) { hueco.dataset.pieza = "canvas"; viva.ritmo(1) }
    } catch (e) { console.error("cerebro:", e); viva = null }
  }
  if (!viva) vectorial()

  // El giro con el raton: la pieza acompaña al cursor dentro del heroe. Vale para canvas y vector.
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  const heroe = document.querySelector(".heroe")
  if (!heroe) return
  heroe.addEventListener("mousemove", (e) => {
    const r = hueco.getBoundingClientRect()
    if (!r.width) return
    const dx = (e.clientX - (r.left + r.width / 2)) / r.width
    const dy = (e.clientY - (r.top + r.height / 2)) / r.height
    hueco.style.setProperty("--giro-y", `${Math.max(-1, Math.min(1, dx)) * 10}deg`)
    hueco.style.setProperty("--giro-x", `${Math.max(-1, Math.min(1, -dy)) * 8}deg`)
  })
  heroe.addEventListener("mouseleave", () => {
    hueco.style.setProperty("--giro-x", "0deg")
    hueco.style.setProperty("--giro-y", "0deg")
  })
})()
```

Notas para el ejecutor:
- Se elimina el paso intermedio `cerebro.png`: la pieza ES el canvas horneado de los PNG de fase; un `cerebro.png` suelto ya no existe en la tubería.
- Se eliminan `--foco/--foco-x/--foco-y`: esos estilos (`[data-pieza="imagen"]`) se borran en la Tarea 4, porque la pieza ya no es una imagen muda que necesita luz prestada.
- `window.CerebroFondo` no se llama: `cerebro-fondo.js` se automonta al cargarse (prepend de un canvas fijo al body) y su acento por defecto ya es el de chat.

- [x] **Paso 2: Guardia de doble montaje del fondo (SPA)**

Quartz re-ejecuta los scripts del contenido en cada navegación SPA: volver a la portada podría prependear un SEGUNDO canvas de fondo. Comprobar el principio de `/Users/carlosbarez/Documents/Cerebro Carlos/web/ui/cerebro-fondo.js`: si no hay guarda de idempotencia, añadir como primera sentencia dentro de la IIFE:

```js
  if (document.querySelector('canvas[data-cerebro-fondo]')) return;
```

y en la creación del lienzo (tras `document.createElement('canvas')`):

```js
  lienzo.dataset.cerebroFondo = '1';
```

Como el publicador copia este fichero a `quartz/static/`, el arreglo se hace SOLO en la consola y viaja solo. `cerebro.js`/`cerebro-forma.js` no necesitan guarda: `monta()` opera sobre el `#cerebro` del DOM actual.

---

### Tarea 4: Los estilos del héroe (pieza grande, velo, fuera reglas de imagen)

Port del diff de `web/ui/estilo.css` (consola, commits 164f4d9..HEAD) a los nombres del port (`.heroe-*`).

**Files:**
- Modify: `/Users/carlosbarez/cerebro-publico/quartz/styles/custom.scss` (sección EL HEROE DE LA PORTADA, ~líneas 165-285)

- [x] **Paso 1: `.heroe` gana `position: relative` y `.heroe-claim` el velo**

Tras la regla `.heroe-claim, .heroe-pieza, .heroe-lado { min-width: 0; }`, añadir (port literal de la consola, con el comentario adaptado):

```scss
// El velo: la pieza desborda por detras del titular, asi que el texto necesita suelo propio.
// Un degradado de fondo, no un filtro, para no repintar la pieza en cada fotograma.
.heroe-claim { position: relative; z-index: 2; }
.heroe-claim::before {
  content: ""; position: absolute; z-index: -1;
  inset: -6% -14% -6% -50%;
  background: radial-gradient(ellipse at 35% 50%,
              color-mix(in srgb, var(--fondo) 92%, transparent) 0%,
              color-mix(in srgb, var(--fondo) 70%, transparent) 55%,
              transparent 78%);
  pointer-events: none;
}
```

Y en `.heroe` añadir `position: relative;` a la lista de declaraciones. En `.heroe-cuerpo` añadir `position: relative; z-index: 2;` (port de `.hero-nota`).

- [x] **Paso 2: `#cerebro` pasa de caja de imagen a hueco con pieza que desborda**

Sustituir la regla actual de `#cerebro` (hoy: `max-width: 520px; height: auto;` con su comentario) por el port de la consola:

```scss
// #cerebro ya NO es la pieza: es solo el HUECO que reserva en la rejilla del heroe (en height, no
// en max-width). La pieza en si se DIBUJA centrada sobre ese hueco y desborda (regla de abajo),
// asi que crece por los dos lados sin mover el flujo ni solapar la firma. Como el desbordamiento
// es simetrico y la pieza va en z-index: 1 por debajo del texto, lo que se sale por la izquierda
// cae detras del titular. El hueco reserva el ALTO de la masa dibujada (~0,72 veces el lado del
// lienzo cuadrado): 940px pide ~680px de alto, y 78vh pide ~61vh. Los dos pares van ligados
// —toca uno, toca el otro— o la pieza pisa la firma.
#cerebro {
  display: block; position: relative; z-index: 1;
  width: 100%; max-width: none;
  height: min(680px, 61vh);
  margin: 0 auto;
  transform: perspective(900px) rotateX(var(--giro-x, 0deg)) rotateY(var(--giro-y, 0deg)) scale(var(--escala, 1));
  transition: transform 220ms ease-out, filter 400ms ease; filter: none;
}
#cerebro svg, #cerebro img, #cerebro canvas {
  display: block; position: absolute; left: 50%; top: 50%;
  transform: translate(-50%, -50%);
  // 940px, no mas: el origen son 279px de ancho reales y pasar de ahi agranda el escalon, no el
  // detalle. El bandeado lo doma el horneado a 1024 (cerebro.js), no el encoger la pieza.
  width: min(940px, 78vh); height: auto;
}
```

- [x] **Paso 3: Borrar las reglas de la pieza-imagen**

Eliminar de `custom.scss` (ya no existe pieza-imagen: el canvas se anima por dentro y el vector también):
- `#cerebro[data-pieza="imagen"]::before` y `@keyframes respira-luz`
- `#cerebro[data-pieza="imagen"]::after`
- cualquier variante `.pensando`/`.encendido` sobre `[data-pieza="imagen"]` y `@keyframes golpe-luz` si estuviera
- en el bloque `@media (prefers-reduced-motion: reduce)`: las dos líneas `[data-pieza="imagen"]` (dejar `#cerebro { transition: none; }`)

La firma (`.heroe-firma`) se queda como está: la portada no tiene estados de chat.

- [x] **Paso 4: Móvil (bloque `@media all and #{$mobile}`)**

Sustituir `#cerebro { max-width: 340px; }` por:

```scss
  #cerebro { max-width: 430px; height: auto; }
  #cerebro svg, #cerebro img, #cerebro canvas { position: static; transform: none; width: 100%; }
  .heroe-claim::before { display: none; }
```

- [x] **Paso 5: `==subrayado==` en las páginas del wiki**

La nueva plantilla del pulso usa `==subrayado==`; Quartz (OFM) lo emite como `<mark>`, cuyo fondo por defecto rompe la paleta. Añadir junto a las hairlines (port de `.prosa-panel u` de la consola):

```scss
// ==subrayado== del wiki, emitido como <mark>: la idea a retener. Brasa bajo el crema, no otro
// color de texto ni fondo de rotulador — un solo mundo visual con la consola (.prosa-panel u).
mark {
  background: none; color: inherit;
  text-decoration: underline; text-decoration-color: var(--catodo);
  text-decoration-thickness: 1.5px; text-underline-offset: 3px;
}
```

- [x] **Paso 6: Compilar estilos**

```bash
cd /Users/carlosbarez/cerebro-publico && npx quartz build
```

Esperado: build sin errores de Sass. (El build completo valida también las Tareas 3 y 5.)

---

### Tarea 5: El chat público renderiza formato (mdPlano)

Elisa ahora contesta con markdown estructurado (titular `##`, secciones, negritas, tablas, veredicto). El cliente actual lo aplasta a párrafos planos (`chat-publico.inline.ts:87-100`): hay que portar el renderer de la consola (`web/ui/app.js:241-282`).

**Files:**
- Modify: `/Users/carlosbarez/cerebro-publico/quartz/components/chat-publico.inline.ts`
- Modify: `/Users/carlosbarez/cerebro-publico/quartz/components/chat-publico.tsx` (solo el bloque `ChatPublico.css`)

- [x] **Paso 1: Añadir `mdPlano` a `chat-publico.inline.ts`**

Después de la función `crea()` (línea ~29), insertar:

```ts
// mdPlano — puerto del renderer del puesto de mando (web/ui/app.js). Escapa TODO primero y solo
// reintroduce la gramatica del wiki, asi que innerHTML con su salida es seguro. Diferencia con el
// original: los [[wikilinks]] no enlazan —la consola los resuelve contra /api/biblioteca, que aqui
// no existe—; se quedan como texto, que es lo honesto cuando no hay destino.
function mdPlano(md: string): string {
  const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  const inlinea = (s: string) =>
    esc(s)
      .replace(/\[\[([^\]|]+)\|([^\]]+)\]\]/g, "$2")
      .replace(/\[\[([^\]]+)\]\]/g, (_m, p: string) => p.split("/").pop()!.replace(/-/g, " "))
      .replace(/`([^`]+)`/g, "<code>$1</code>")
      .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
      .replace(/==([^=]+)==/g, "<u>$1</u>")
      .replace(/(^|[\s(])\*([^*\n]+)\*/g, "$1<em>$2</em>")
      .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" rel="noopener noreferrer">$1</a>')
  const bloques = String(md || "").split(/\n{2,}/)
  let html = ""
  for (const bloque of bloques) {
    const b = bloque.trim()
    if (!b) continue
    if (/^#{1,4}\s/.test(b)) {
      const n = b.match(/^#+/)![0].length
      html += `<h${n}>${inlinea(b.replace(/^#+\s*/, ""))}</h${n}>`
      continue
    }
    if (/^(-{3,}|\*{3,})$/.test(b)) { html += "<hr>"; continue }
    if (/^>\s?/.test(b)) {
      const lineas = b.split("\n").map((l) => l.replace(/^>\s?/, ""))
      lineas[0] = lineas[0].replace(/^\[!\w+\]\s*/, "") // marcador de callout de Obsidian
      html += `<blockquote>${inlinea(lineas.join(" ").trim())}</blockquote>`
      continue
    }
    if (/^\|/.test(b)) {
      const filas = b.split("\n").filter((l) => /^\s*\|/.test(l) && !/^\s*\|[\s:|-]+\|?\s*$/.test(l))
      if (!filas.length) continue
      const celdas = (l: string) => l.trim().replace(/^\||\|$/g, "").split("|").map((c) => inlinea(c.trim()))
      html += `<table><thead><tr>${celdas(filas[0]).map((c) => `<th>${c}</th>`).join("")}</tr></thead><tbody>${filas
        .slice(1)
        .map((f) => `<tr>${celdas(f).map((c) => `<td>${c}</td>`).join("")}</tr>`)
        .join("")}</tbody></table>`
      continue
    }
    const aLista = (lineas: string[], regex: RegExp, etiqueta: string) => {
      const items: string[] = []
      for (const l of lineas) {
        if (regex.test(l)) items.push(l.replace(regex, ""))
        else if (items.length && l.trim()) items[items.length - 1] += ` ${l.trim()}` // continuacion del item anterior
      }
      return `<${etiqueta}>${items.map((i) => `<li>${inlinea(i)}</li>`).join("")}</${etiqueta}>`
    }
    if (/^[-*]\s/.test(b)) { html += aLista(b.split("\n"), /^[-*]\s+/, "ul"); continue }
    if (/^\d+[.)]\s/.test(b)) { html += aLista(b.split("\n"), /^\d+[.)]\s+/, "ol"); continue }
    html += `<p>${inlinea(b.split("\n").join(" "))}</p>`
  }
  return html
}
```

- [x] **Paso 2: Usar `mdPlano` en `enviar()`**

Sustituir el bloque actual (líneas 86-100):

```ts
  const firma = (datos.firma ?? {}) as Record<string, unknown>
  const parrafos = String(datos.texto ?? "")
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)

  // Con error del modelo el texto llega null pero la respuesta viene firmada igual (contrato).
  texto.classList.toggle("chat-error", Boolean(datos.error))
  if (parrafos.length > 0) {
    texto.replaceChildren(...parrafos.map((p) => crea("p", p)))
  } else if (datos.error) {
    texto.replaceChildren(crea("p", String(datos.error)))
  } else {
    texto.replaceChildren(crea("p", "n/d"))
  }
```

por:

```ts
  const firma = (datos.firma ?? {}) as Record<string, unknown>

  // Con error del modelo el texto llega null pero la respuesta viene firmada igual (contrato).
  // El cuerpo va por mdPlano: Elisa escribe markdown estructurado y planos tiraba la mitad del
  // trabajo. mdPlano escapa todo antes de reintroducir gramatica, asi que innerHTML es seguro.
  texto.classList.toggle("chat-error", Boolean(datos.error))
  if (datos.texto) {
    texto.innerHTML = mdPlano(String(datos.texto))
  } else if (datos.error) {
    texto.replaceChildren(crea("p", String(datos.error)))
  } else {
    texto.replaceChildren(crea("p", "n/d"))
  }
```

- [x] **Paso 3: Estilos del cuerpo con formato en `chat-publico.tsx`**

Dentro del template `ChatPublico.css`, tras las reglas `.chat-texto p` existentes, añadir (port de `.respuesta-texto` de la consola):

```css
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
```

- [x] **Paso 4: Prueba mínima del renderer**

El inline se transpila en el build; la prueba honesta es de comportamiento. Crear un scratch FUERA del repo (p. ej. `/tmp/mdplano-check.mjs`) copiando la función `mdPlano` ya escrita (sin los tipos TS) y:

```js
import assert from "node:assert"
// ... pegar mdPlano ...
const salida = mdPlano("## Micron esta cara\n\nCuerpo con **cifra** y ==idea==.\n\n- uno\n- dos\n\n| A | B |\n|---|---|\n| 1 | 2 |")
assert(salida.includes("<h2>Micron esta cara</h2>"))
assert(salida.includes("<strong>cifra</strong>"))
assert(salida.includes("<u>idea</u>"))
assert(salida.includes("<li>uno</li>"))
assert(salida.includes("<td>1</td>"))
assert(mdPlano("<script>alert(1)</script>").includes("&lt;script&gt;"))
console.log("mdPlano ok")
```

Run: `node /tmp/mdplano-check.mjs` → esperado `mdPlano ok`.

---

### Tarea 6: El prompt público se moja (veredicto + formato)

`api/_prompt.js` es un port literal de `web/chat/elisa.py` y hoy prohibe lo que la consola ya exige. Las cadenas van LITERALES de la consola (pasaron su prueba); se copian con escaping JS.

**Files:**
- Modify: `/Users/carlosbarez/cerebro-publico/api/_prompt.js:1-25`

- [x] **Paso 1: `REGLAS_COMUNES` gana el bloque FORMATO**

Sustituir el `export const REGLAS_COMUNES` actual por (el bloque final es nuevo, del `REGLAS_COMUNES` de `elisa.py`):

```js
export const REGLAS_COMUNES = "REGLAS QUE NO PUEDES ROMPER:\n- NUNCA inventes un dato. Si un precio, una cifra o una fecha no esta en el contexto, di que no lo\n  tienes. Un dato inventado no da error: da una alerta falsa con pinta de buena.\n- Cita las paginas que uses por su ruta, entre corchetes, asi: [wiki/empresas/mu.md].\n- Responde en espanol, denso y sin relleno. Nada de resumenes de lo que vas a decir.\n- Si el contexto no da para responder, dilo en una linea en vez de rellenar.\n\nFORMATO (tu respuesta se renderiza como markdown en la web; un muro de texto es una respuesta\nfallida aunque el analisis sea bueno):\n- Abre con UN titular `##` que sea tu conclusion en una frase, no el tema: «## Micron esta cara\n  para entrar hoy», nunca «## Analisis de Micron».\n- Cuerpo en 2 a 4 secciones cortas, cada una con su encabezado `##`. Parrafos de 2-3 lineas como\n  mucho; si enumeras, lista con guiones.\n- **Negrita** en lo que el lector tiene que retener: cifras, niveles, nombres propios del analisis.\n- Si comparas escenarios u opciones, una tabla markdown vale mas que tres parrafos.\n- Escribe como una persona que explica algo que entiende, no como un documento: nada de «En este\n  analisis...», «Cabe destacar...» ni despedidas."
```

- [x] **Paso 2: `AVISO_PUBLICO` y la nueva `REGLAS_PUBLICA`**

Sustituir el `export const REGLAS_PUBLICA` actual por (port de `elisa.py`, SIN la variante `_CON_CARTERA`: el endpoint no tiene canal de cartera — fuera de alcance):

```js
// Nota de evolucion 2026-08-27 (port de elisa.py): lo PERSONALIZADO sigue prohibido —no sabe
// quien pregunta—, y el veredicto GENERAL pasa de prohibido a obligatorio. El aviso deja de
// ser opcional: cierra SIEMPRE.
export const AVISO_PUBLICO =
  "Esto es analisis general y no es una recomendacion de inversion personalizada. Quien decide es quien invierte."

export const REGLAS_PUBLICA = "- NO SABES QUIEN PREGUNTA. Es un visitante anonimo de un wiki publico, no es\n  Carlos y no tienes su cartera, su patrimonio, sus posiciones ni sus objetivos.\n- NUNCA hables de «tu cartera», «tus posiciones» ni «tu situacion»: no sabes cual es. Si la\n  pregunta la presupone, dilo en una linea y responde solo con lo general.\n- NO des consejo PERSONALIZADO: nada de «en tu caso», «dado tu perfil» ni dimensionar una posicion\n  para quien pregunta. No sabes su horizonte, su patrimonio ni su tolerancia al riesgo.\n- MOJATE. Sobre el activo EN GENERAL si tienes que pronunciarse, y de forma explicita. Termina el\n  analisis con una seccion `## Veredicto: ACCION`, donde ACCION es una sola de: COMPRAR, ACUMULAR,\n  MANTENER, ESPERAR, EVITAR o VENDER. Nada de «depende», «cada cual» ni «consulta a un asesor»\n  como forma de escurrir el bulto: eso no es prudencia, es no contestar.\n- Bajo el veredicto, una linea **Por que:** y otra **Lo invalidaria:**. Un veredicto sin\n  condicion de invalidacion es una apuesta disfrazada de analisis.\n- Si de verdad no hay base para pronunciarse —no tienes datos, no tienes la pagina—, el veredicto\n  es `## Veredicto: ESPERAR` y dices que falta. Eso si es una respuesta; «depende» no.\n- Cierra SIEMPRE, en la ultima linea y tal cual: " + AVISO_PUBLICO + "\n- Si te piden datos de la cartera de Carlos, di que no son publicos. No los deduzcas ni los\n  estimes a partir de lo que si tengas."
```

- [x] **Paso 3: Actualizar la cabecera del fichero (líneas 3-5)**

Donde dice «(leidos 2026-08-26)» → «(reextraidas 2026-08-27: veredicto obligatorio y bloque FORMATO)».

- [x] **Paso 4: Comprobación de sintaxis**

```bash
cd /Users/carlosbarez/cerebro-publico && node --check api/_prompt.js && node -e "import('./api/_prompt.js').then(m => { if (!m.REGLAS_PUBLICA.includes('Veredicto')) process.exit(1); console.log('prompt ok') })"
```

Esperado: `prompt ok`.

---

### Tarea 7: Republicar, verificar y commit

**Files:**
- Ejecuta el publicador (consola) contra el repo público
- Commit en AMBOS repos, local, sin push

- [x] **Paso 1: Republicar (simulacro = todo menos el push)**

```bash
cd "/Users/carlosbarez/Documents/Cerebro Carlos" && python3 -m web.publicador.publica --salida /Users/carlosbarez/cerebro-publico --simulacro
```

Esperado en la salida:
- `pieza del heroe: cerebro.svg, cerebro.js, cerebro-forma.js, cerebro-fondo.js, cerebro-fase-0.png, cerebro-fase-1.png` (o subconjunto SIN que falte ninguno de los 6 nuevos/vector; `cerebro.png` no existe y es correcto que no salga)
- `tokens.css copiado: si`
- `portada escrita: si`
- el recuento de páginas/apartadas/tachadas sin que la puerta se cierre

OJO: el publicador borra y regenera todo `content/`. Es lo deseado (trae el pulso anonimizado al servir y la newsletter de la nueva plantilla), pero significa que cualquier edición manual previa en `content/` se pierde — por eso el héroe se editó en el vault (Tarea 2).

- [x] **Paso 2: Verificar lo copiado y lo regenerado**

```bash
ls /Users/carlosbarez/cerebro-publico/quartz/static/ | grep cerebro
grep -c 'cerebro-forma.js\|cerebro.js\|cerebro-fondo.js\|cerebro-inline.js' /Users/carlosbarez/cerebro-publico/content/index.md
grep -rl '==' /Users/carlosbarez/cerebro-publico/content/actualidad/ | head -3
```

Esperado: los 6 ficheros de pieza + `cerebro-inline.js`; los 4 `<script>` en la portada; y localizar una página de pulso con `==subrayado==` para el Paso 4.

- [x] **Paso 3: Build completo**

```bash
cd /Users/carlosbarez/cerebro-publico && npx quartz build
```

Esperado: sin errores (Sass, transpilado del inline, emit). Confirmar que existen en `public/`:
`public/static/cerebro.js`, `cerebro-forma.js`, `cerebro-fondo.js`, `cerebro-fase-0.png`, `cerebro-fase-1.png`, `cerebro.svg`, `cerebro-inline.js`.

- [x] **Paso 4: Servir y comprobar en el navegador**

```bash
cd /Users/carlosbarez/cerebro-publico/public && python3 -m http.server 8642
```

Comprobaciones (curl + navegador de Carlos):
- `curl -s localhost:8642/ | grep -o 'cerebro[a-z-]*\.js'` → los cuatro scripts.
- `curl -sI localhost:8642/static/cerebro-fase-0.png` → 200.
- `curl -s localhost:8642/actualidad/<pagina-del-paso-2>.html | grep -c '<mark>'` → ≥1 si la página usa `==…==` (confirma que OFM lo emite y que la regla `mark` de la Tarea 4 lo pinta).
- Visual (lo mira Carlos al final): la pieza viva centrada y grande en la portada, sin pisar la firma; a 375px la pieza a 430px sin desbordar; el titular legible sobre el velo.

- [x] **Paso 5: Commit en el repo público**

```bash
cd /Users/carlosbarez/cerebro-publico && git add -A && git commit -m "sitio: la pieza viva del cerebro, el chat con formato y veredicto, y la republicacion anonimizada"
```

Revisar antes `git status` para confirmar que no entran ficheros ajenos (`public/` está ignorado; si no lo está, NO añadirlo).

- [x] **Paso 6: Commit en la consola**

```bash
cd "/Users/carlosbarez/Documents/Cerebro Carlos" && git add web/publicador/publica.py web/ui/cerebro-fondo.js wiki/index.md && git commit -m "web: el publicador copia la pieza viva y la portada publica la pide"
```

---

## Self-Review

- **Cobertura:** pieza viva (T1, T2, T3, T4), cerebro más grande 940px/78vh y móvil 430px (T4), chat con formato (T5, T6), veredicto obligatorio (T6), pulso/newsletter anonimizados (T7 vía publicador), `==subrayado==` (T4 paso 5 + T5), fondo ambiental (T2, T3). Fuera de alcance declarado en Global Constraints.
- **Placeholders:** ninguno; todo el código y los textos van literales.
- **Consistencia de nombres:** `.heroe-*` (port) en T3/T4; `.chat-*` en T5; `mdPlano` igual en T5; `PIEZAS`/`copia_pieza` en T1/T7; `window.CerebroPieza.monta(hueco, alFallar) → {ritmo, golpe, mira, alZona} | null` en T3, tal como lo consume la consola (`web/ui/app.js:44`).

---

## Ejecución (prime agent, 2026-08-27)

Plan ejecutado íntegro tras recogerlo a medias (el agente previo agotó la cuota de Kimi en mitad
de la Tarea 4). Hechos además de lo literal del plan:

- **Tarea 4 (build) y Tarea 7 (build):** el `npx quartz build` moría en la fase de limpieza con
  `ENOTEMPTY: rmdir 'public/tags'` (bug conocido de `fs.rm` recursivo en macOS). Se sorteó cargando
  un preload de Node que envuelve `fs.rm/rmSync` y, ante `ENOTEMPTY`, cae a `rm -rf`. Sin tocar
  `node_modules`. Build final: **5911 ficheros emitidos, 0 errores** (las líneas `LaTeX-incompatible`
  son warnings de KaTeX, no fallos).
- **Bloqueo de contenido:** `wiki/empresas/cvs-health.md` (vault) tenía la clave YAML `ticker: CVS`
  duplicada; eso abortaba el parse de Quartz. Se borró la línea duplicada en el vault (fuente de
  verdad) y se regeneró `content/` con el publicador. Commit aparte en la consola.
- **`==subrayado==`:** la regla CSS y el renderer `mdPlano` están en su sitio, pero la republicación
  actual no contiene ninguna página con `==...==`, así que la comprobación `<mark>` del Paso 4 da 0
  (esperado, no un fallo).
- **Sin push** en ningún repo, como mandaba el plan.
