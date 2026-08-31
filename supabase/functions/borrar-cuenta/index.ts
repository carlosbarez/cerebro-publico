// index.ts — borra la cuenta del usuario autenticado y sus datos (cascada por FK).
// RGPD: el borrado es efectivo e inmediato. La service key nunca sale de aqui.
import { createClient } from "jsr:@supabase/supabase-js@2"

function json(cuerpo: unknown, status = 200): Response {
  return new Response(JSON.stringify(cuerpo), {
    status,
    headers: { "Content-Type": "application/json" },
  })
}

Deno.serve(async (req) => {
  if (req.method !== "POST") return json({ error: "solo POST" }, 405)
  const token = (req.headers.get("Authorization") ?? "").replace("Bearer ", "")
  if (!token) return json({ error: "no autorizado" }, 401)

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  )
  const { data: { user }, error } = await admin.auth.getUser(token)
  if (error || !user) return json({ error: "no autorizado" }, 401)

  const { error: e2 } = await admin.auth.admin.deleteUser(user.id)
  if (e2) return json({ error: "no se pudo borrar" }, 500)
  return json({ ok: true })
})
