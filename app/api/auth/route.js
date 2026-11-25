import { validarToken, noAutorizado, excedeLimite, respuestaLimite } from "@/lib/seguridad";

export function GET(request) {
  // Frena intentos de adivinar el token por fuerza bruta
  if (excedeLimite(request, "auth", { max: 10, ventanaMs: 15 * 60 * 1000 })) {
    return respuestaLimite();
  }
  if (validarToken(request)) {
    return Response.json({ ok: true });
  }
  return noAutorizado();
}
