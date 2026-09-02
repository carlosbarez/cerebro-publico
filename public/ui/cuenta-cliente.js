// cuenta-cliente.js — crea el cliente de Supabase y nada mas.
// El cliente vive vendorizado en ./lib/ : el sitio no depende de un CDN en tiempo de render.
import { createClient } from './lib/supabase.js'

const CFG = window.CEREBRO_SUPABASE

// Sin configuracion no se revienta la pagina: se expone null y cada panel lo dice a su manera.
export const sb = CFG
  ? createClient(CFG.url, CFG.anonKey, {
      auth: {
        // La vuelta de Google trae la sesion en el fragmento de la URL; que la resuelva el cliente.
        detectSessionInUrl: true,
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null

// Puente hacia app.js, que NO es un modulo y no puede importar.
window.CerebroSupabase = { sb }
