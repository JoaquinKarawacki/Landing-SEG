import { sendMail } from "@/lib/sendMail";

const CAMPOS_REQUERIDOS = ["nombre", "email", "asunto", "mensaje"];

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

  const { nombre, email, empresa, telefono, asunto, mensaje } = body;

  for (const campo of CAMPOS_REQUERIDOS) {
    if (!body[campo]?.trim()) {
      return Response.json({ error: `El campo "${campo}" es requerido.` }, { status: 400 });
    }
  }

  if (!esEmailValido(email)) {
    return Response.json({ error: "El correo electrónico no es válido." }, { status: 400 });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #ca3517; padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Nuevo mensaje de contacto — SEG Ingeniería</h1>
      </div>
      <div style="padding: 32px; background: #f9f9f9; border: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 140px; vertical-align: top;"><strong>Nombre:</strong></td><td style="padding: 8px 0;">${nombre.trim()}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${email.trim()}">${email.trim()}</a></td></tr>
          ${empresa?.trim() ? `<tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Empresa:</strong></td><td style="padding: 8px 0;">${empresa.trim()}</td></tr>` : ""}
          ${telefono?.trim() ? `<tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Teléfono:</strong></td><td style="padding: 8px 0;">${telefono.trim()}</td></tr>` : ""}
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Asunto:</strong></td><td style="padding: 8px 0;">${asunto.trim()}</td></tr>
        </table>
        <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 16px 0;" />
        <p style="color: #666; margin: 0 0 8px;"><strong>Mensaje:</strong></p>
        <p style="white-space: pre-wrap; color: #333; margin: 0;">${mensaje.trim()}</p>
      </div>
      <div style="padding: 16px 32px; background: #f0f0f0; text-align: center;">
        <p style="margin: 0; color: #999; font-size: 12px;">Enviado desde el formulario de contacto de segingenieria.com</p>
      </div>
    </div>
  `;

  try {
    await sendMail({
      to: process.env.MAIL_TO || "uruguay@segingenieria.com",
      subject: `[Contacto Web] ${asunto.trim()}`,
      html,
      replyTo: email.trim(),
    });
  } catch (err) {
    console.error("Error enviando email de contacto:", err);
    return Response.json({ error: "No se pudo enviar el mensaje. Intente nuevamente." }, { status: 500 });
  }

  return Response.json({ ok: true });
}
