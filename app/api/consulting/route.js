import { sendMail } from "@/lib/sendMail";

const CAMPOS_REQUERIDOS = ["nombre", "email", "organizacion", "pais", "area", "mensaje"];

function esEmailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  for (const campo of CAMPOS_REQUERIDOS) {
    if (!body[campo]?.trim()) {
      return Response.json({ error: `El campo "${campo}" es requerido.` }, { status: 400 });
    }
  }

  if (!esEmailValido(body.email)) {
    return Response.json({ error: "El correo electrónico no es válido." }, { status: 400 });
  }

  const { nombre, email, organizacion, pais, area, mensaje } = body;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #ca3517; padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Nueva consulta — SEG Consulting</h1>
      </div>
      <div style="padding: 32px; background: #f9f9f9; border: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 160px; vertical-align: top;"><strong>Nombre:</strong></td><td style="padding: 8px 0;">${nombre.trim()}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Organización:</strong></td><td style="padding: 8px 0;">${organizacion.trim()}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>País:</strong></td><td style="padding: 8px 0;">${pais.trim()}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Área de interés:</strong></td><td style="padding: 8px 0;">${area.trim()}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
        <p style="color: #666; margin: 0 0 8px;"><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap; color: #333; margin: 0;">${mensaje.trim()}</p>
      </div>
      <div style="padding: 16px 32px; background: #f0f0f0; text-align: center;">
        <p style="margin: 0; color: #999; font-size: 12px;">Enviado desde el formulario de SEG Consulting — segingenieria.com</p>
      </div>
    </div>
  `;

  try {
    await sendMail({
      to: process.env.MAIL_TO_CONSULTING || "consulting@segingenieria.com",
      subject: `[SEG Consulting] ${area.trim()} — ${nombre.trim()}`,
      html,
      replyTo: email.trim(),
    });
  } catch (err) {
    console.error("Error enviando email de consulting:", err);
    return Response.json({ error: "No se pudo enviar la consulta. Intentá nuevamente." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
