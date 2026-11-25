import { createHash, timingSafeEqual } from "crypto";

/* --- Auth admin --------------------------------------------------------- */

// Compara el header x-admin-token contra ADMIN_TOKEN en tiempo constante.
// Se hashean ambos valores para que tengan el mismo largo (requisito de timingSafeEqual).
export function validarToken(request) {
  const esperado = process.env.ADMIN_TOKEN;
  const recibido = request.headers.get("x-admin-token");
  if (!esperado || !recibido) return false;
  const a = createHash("sha256").update(recibido).digest();
  const b = createHash("sha256").update(esperado).digest();
  return timingSafeEqual(a, b);
}

export function noAutorizado() {
  return Response.json({ error: "No autorizado" }, { status: 401 });
}

/* --- Validación / escapado --------------------------------------------- */

export function esEmailValido(email) {
  return typeof email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export function escapeHtml(valor) {
  return String(valor ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/* --- Rate limit en memoria ---------------------------------------------- */
// Suficiente para una única instancia (Railway). Se resetea en cada deploy.

const registros = new Map();
let ultimaLimpieza = Date.now();

export function obtenerIP(request) {
  const xff = request.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "desconocida";
}

// Devuelve true si la IP superó `max` pedidos en `ventanaMs` para esa clave.
export function excedeLimite(request, clave, { max, ventanaMs }) {
  const ahora = Date.now();
  const id = `${clave}:${obtenerIP(request)}`;
  const recientes = (registros.get(id) || []).filter((t) => ahora - t < ventanaMs);

  if (recientes.length >= max) {
    registros.set(id, recientes);
    return true;
  }
  recientes.push(ahora);
  registros.set(id, recientes);

  // Limpieza periódica para que el Map no crezca indefinidamente
  if (ahora - ultimaLimpieza > 60 * 60 * 1000) {
    for (const [k, ts] of registros) {
      if (!ts.some((t) => ahora - t < 60 * 60 * 1000)) registros.delete(k);
    }
    ultimaLimpieza = ahora;
  }
  return false;
}

export function respuestaLimite() {
  return Response.json(
    { error: "Recibimos demasiados envíos desde tu conexión. Esperá unos minutos e intentá nuevamente." },
    { status: 429 }
  );
}

/* --- Anti-spam ---------------------------------------------------------- */

const TIEMPO_MINIMO_MS = 3000;

// Palabras tipo "bWzQRdGXPPZgMcQNeF": largas y con muchos saltos minúscula→MAYÚSCULA.
function esPalabraAleatoria(palabra) {
  if (palabra.length < 8 || !/^\p{L}+$/u.test(palabra)) return false;
  let saltos = 0;
  for (let i = 1; i < palabra.length; i++) {
    const prev = palabra[i - 1];
    const act = palabra[i];
    if (prev === prev.toLowerCase() && prev !== prev.toUpperCase() &&
        act === act.toUpperCase() && act !== act.toLowerCase()) {
      saltos++;
    }
  }
  return saltos >= 3;
}

/**
 * Devuelve un motivo (string) si el envío parece de un bot, o null si parece legítimo.
 * - body._hp:  campo trampa invisible; un humano lo deja vacío.
 * - body._ms:  milisegundos entre que se cargó el formulario y se envió.
 * - camposTexto: campos de texto libre a revisar con heurísticas.
 */
export function detectarSpam(body, camposTexto) {
  if (typeof body._hp === "string" && body._hp.trim() !== "") return "honeypot";

  const ms = Number(body._ms);
  if (!Number.isFinite(ms)) return "sin-timestamp";
  if (ms < TIEMPO_MINIMO_MS) return "demasiado-rapido";

  for (const campo of camposTexto) {
    const valor = body[campo];
    if (typeof valor !== "string") continue;
    const palabras = valor.split(/[\s.,;:!?¿¡()"'\-_/]+/).filter(Boolean);
    if (palabras.some(esPalabraAleatoria)) return `texto-aleatorio:${campo}`;
  }

  const textoCompleto = camposTexto.map((c) => body[c] ?? "").join(" ");
  const links = textoCompleto.match(/https?:\/\/|www\./gi) || [];
  if (links.length > 2) return "demasiados-links";

  return null;
}

// Verifica que ningún campo supere su largo máximo. Devuelve el nombre del campo o null.
export function campoDemasiadoLargo(body, limites) {
  for (const [campo, max] of Object.entries(limites)) {
    if (typeof body[campo] === "string" && body[campo].length > max) return campo;
  }
  return null;
}
