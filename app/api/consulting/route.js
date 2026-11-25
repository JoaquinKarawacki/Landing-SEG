import { sendMail } from "@/lib/sendMail";
import {
  esEmailValido,
  escapeHtml,
  excedeLimite,
  respuestaLimite,
  detectarSpam,
  campoDemasiadoLargo,
  obtenerIP,
} from "@/lib/seguridad";

const CAMPOS_REQUERIDOS = ["nombre", "email", "organizacion", "pais", "area", "mensaje"];
const LIMITES = { nombre: 200, email: 200, organizacion: 200, pais: 100, area: 100, mensaje: 5000 };

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  if (excedeLimite(request, "consulting", { max: 5, ventanaMs: 10 * 60 * 1000 })) {
    return respuestaLimite();
  }

  for (const campo of CAMPOS_REQUERIDOS) {
    if (typeof body[campo] !== "string" || !body[campo].trim()) {
      return Response.json({ error: `El campo "${campo}" es requerido.` }, { status: 400 });
    }
  }

  if (campoDemasiadoLargo(body, LIMITES)) {
    return Response.json({ error: "Alguno de los campos es demasiado largo." }, { status: 400 });
  }

  if (!esEmailValido(body.email)) {
    return Response.json({ error: "El correo electrónico no es válido." }, { status: 400 });
  }

  const motivoSpam = detectarSpam(body, ["nombre", "organizacion", "pais", "mensaje"]);
  if (motivoSpam) {
    console.warn(`[consulting] envío descartado como spam (${motivoSpam}) ip=${obtenerIP(request)}`);
    return Response.json({ ok: true });
  }

  const nombre = escapeHtml(body.nombre.trim());
  const email = escapeHtml(body.email.trim());
  const organizacion = escapeHtml(body.organizacion.trim());
  const pais = escapeHtml(body.pais.trim());
  const area = escapeHtml(body.area.trim());
  const mensaje = escapeHtml(body.mensaje.trim());

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #ca3517; padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Nueva consulta — SEG Consulting</h1>
      </div>
      <div style="padding: 32px; background: #f9f9f9; border: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 160px; vertical-align: top;"><strong>Nombre:</strong></td><td style="padding: 8px 0;">${nombre}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Organización:</strong></td><td style="padding: 8px 0;">${organizacion}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>País:</strong></td><td style="padding: 8px 0;">${pais}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Área de interés:</strong></td><td style="padding: 8px 0;">${area}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
        <p style="color: #666; margin: 0 0 8px;"><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap; color: #333; margin: 0;">${mensaje}</p>
      </div>
      <div style="padding: 16px 32px; background: #f0f0f0; text-align: center;">
        <p style="margin: 0; color: #999; font-size: 12px;">Enviado desde el formulario de SEG Consulting — segingenieria.com</p>
      </div>
    </div>
  `;

  try {
    await sendMail({
      to: process.env.MAIL_TO_CONSULTING || "consulting@segingenieria.com",
      subject: `[SEG Consulting] ${body.area.trim()} — ${body.nombre.trim()}`.replace(/[\r\n]+/g, " "),
      html,
      replyTo: body.email.trim(),
    });
  } catch (err) {
    console.error("Error enviando email de consulting:", err);
    return Response.json({ error: "No se pudo enviar la consulta. Intentá nuevamente." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
