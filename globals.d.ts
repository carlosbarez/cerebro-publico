// Ambiente global del sitio.
// Los tipos de componentes de Quartz son globales para los componentes internos ( patron
// quartz/components/chat-publico.tsx: no se importan). Se re-exportan como tipos globales para
// que "npm run check" pase sin tocar cada componente.
// Los archivos *.inline.ts viajan como TEXTO (plugin inline-script-loader de quartz/cli/handlers.js);
// sus imports llevan "// @ts-ignore" en los .tsx (igual que componentResources.ts).
import type {
  QuartzComponentProps as _QuartzComponentProps,
  QuartzComponentConstructor as _QuartzComponentConstructor,
} from "./quartz/components/types"

declare global {
  interface Document {
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
    ): void
    removeEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void,
    ): void
    dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K] | UIEvent): void
  }
  interface Window {
    spaNavigate(url: URL, isBack: boolean = false)
    addCleanup(fn: (...args: any[]) => void)
  }
  type QuartzComponentProps = _QuartzComponentProps
  type QuartzComponentConstructor<Options extends object | undefined = undefined> =
    _QuartzComponentConstructor<Options>
}
