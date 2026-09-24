import { readFileSync, writeFileSync } from "fs";
import { getDataFile } from "@/lib/storage";
import { sendMail } from "@/lib/sendMail";

const CAMPOS_REQUERIDOS = ["nombre", "email", "empresa"];

function esEmailValido(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validarToken(request) {
  const token = request.headers.get("x-admin-token");
  return token === process.env.ADMIN_TOKEN;
}

function escapeHtml(valor) {
  return String(valor ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function leer() {
  return JSON.parse(readFileSync(getDataFile("suscriptores.json"), "utf-8"));
}

function guardar(suscriptores) {
  writeFileSync(getDataFile("suscriptores.json"), JSON.stringify(suscriptores), "utf-8");
}

function htmlAvisoInterno({ nombre, email, empresa, telefono }) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #ca3517; padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Nueva suscripción a Indicadores energéticos — SEG Ingeniería</h1>
      </div>
      <div style="padding: 32px; background: #f9f9f9; border: 1px solid #e5e5e5;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #666; width: 140px; vertical-align: top;"><strong>Nombre:</strong></td><td style="padding: 8px 0;">${escapeHtml(nombre)}</td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Email:</strong></td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Empresa:</strong></td><td style="padding: 8px 0;">${escapeHtml(empresa)}</td></tr>
          ${telefono ? `<tr><td style="padding: 8px 0; color: #666; vertical-align: top;"><strong>Teléfono:</strong></td><td style="padding: 8px 0;">${escapeHtml(telefono)}</td></tr>` : ""}
        </table>
      </div>
      <div style="padding: 16px 32px; background: #f0f0f0; text-align: center;">
        <p style="margin: 0; color: #999; font-size: 12px;">Enviado desde el formulario de suscripción de segingenieria.com</p>
      </div>
    </div>
  `;
}

function htmlBienvenida({ nombre }) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <div style="background: #ca3517; padding: 24px 32px;">
        <h1 style="color: white; margin: 0; font-size: 20px;">¡Gracias por suscribirte!</h1>
      </div>
      <div style="padding: 32px; background: #f9f9f9; border: 1px solid #e5e5e5; color: #333;">
        <p style="margin: 0 0 16px;">Hola ${escapeHtml(nombre)},</p>
        <p style="margin: 0 0 16px; line-height: 1.6;">
          Registramos tu suscripción a los <strong>Indicadores energéticos</strong> de SEG Ingeniería.
          Cada mes vas a recibir en este correo nuestro informe con los principales indicadores del sector:
          precios de energía y combustibles, eficiencia energética, novedades del sector renovable y política energética.
        </p>
        <p style="margin: 0; line-height: 1.6; color: #666;">
          Si no solicitaste esta suscripción, podés ignorar este mensaje.
        </p>
      </div>
      <div style="padding: 16px 32px; background: #f0f0f0; text-align: center;">
        <p style="margin: 0; color: #999; font-size: 12px;">SEG Ingeniería · segingenieria.com</p>
      </div>
    </div>
  `;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  const { nombre, email, empresa, telefono } = body;

  for (const campo of CAMPOS_REQUERIDOS) {
    if (!body[campo]?.trim()) {
      return Response.json({ error: `El campo "${campo}" es requerido.` }, { status: 400 });
    }
  }

  if (!esEmailValido(email)) {
    return Response.json({ error: "El correo electrónico no es válido." }, { status: 400 });
  }

  const nombreLimpio = nombre.trim();
  const emailLimpio = email.trim();
  const empresaLimpio = empresa.trim();
  const telefonoLimpio = telefono?.trim() || "";

  // Persistir (dedupe por email) ANTES de enviar mails, para no perder el lead
  const suscriptores = leer();
  const yaExiste = suscriptores.some(
    (s) => s.email?.trim().toLowerCase() === emailLimpio.toLowerCase()
  );

  if (yaExiste) {
    // Idempotente: no duplicar ni reenviar mails en reintentos
    return Response.json({ ok: true, yaSuscripto: true });
  }

  suscriptores.unshift({
    id: Date.now(),
    nombre: nombreLimpio,
    email: emailLimpio,
    empresa: empresaLimpio,
    telefono: telefonoLimpio,
    fecha: new Date().toISOString(),
  });
  guardar(suscriptores);

  // Aviso interno (crítico: si falla, 500 — el lead ya quedó guardado y el reintento es idempotente)
  try {
    await sendMail({
      to: process.env.MAIL_TO || "perez@segingenieria.com",
      subject: `[Suscripción] Indicadores energéticos — ${nombreLimpio}`,
      html: htmlAvisoInterno({ nombre: nombreLimpio, email: emailLimpio, empresa: empresaLimpio, telefono: telefonoLimpio }),
      replyTo: emailLimpio,
    });
  } catch (err) {
    console.error("Error enviando aviso interno de suscripción:", err);
    return Response.json({ error: "No se pudo completar la suscripción. Intente nuevamente." }, { status: 500 });
  }

  // Bienvenida al suscriptor (no crítico: su fallo no invalida la suscripción)
  try {
    await sendMail({
      to: emailLimpio,
      subject: "Gracias por suscribirte a los Indicadores energéticos — SEG Ingeniería",
      html: htmlBienvenida({ nombre: nombreLimpio }),
    });
  } catch (err) {
    console.error("Error enviando email de bienvenida:", err);
  }

  return Response.json({ ok: true });
}

export function GET(request) {
  if (!validarToken(request)) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }
  return Response.json(leer());
}

export async function DELETE(request) {
  if (!validarToken(request)) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }
  const { id } = await request.json();
  const suscriptores = leer();
  const existe = suscriptores.find((s) => s.id === id);
  if (existe === undefined) {
    return Response.json({ error: "Suscriptor no encontrado" }, { status: 404 });
  }
  guardar(suscriptores.filter((s) => s.id !== id));
  return Response.json({ ok: true });
}
