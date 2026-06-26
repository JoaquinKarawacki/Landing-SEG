import { writeFileSync } from "fs";
import { getUploadDir } from "@/lib/storage";

export async function POST(request) {
  const token = request.headers.get("x-admin-token");
  if (token !== process.env.ADMIN_TOKEN) {
    return Response.json({ error: "No autorizado" }, { status: 401 });
  }

  const formData = await request.formData();
  const archivo = formData.get("archivo");

  if (!archivo) {
    return Response.json({ error: "No se recibió archivo" }, { status: 400 });
  }

  const tiposPermitidos = ["image/jpeg", "image/png", "application/pdf", "application/octet-stream"];
  if (!tiposPermitidos.includes(archivo.type) && !archivo.name.endsWith(".pdf")) {
    return Response.json({ error: "Formato no permitido" }, { status: 400 });
  }

  const bytes = await archivo.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const nombre = archivo.name.replace(/[^a-zA-Z0-9._-]/g, "_");

  const rutaFisica = `${getUploadDir()}/${nombre}`;

  try {
    writeFileSync(rutaFisica, buffer);
  } catch (err) {
    console.error("Error guardando archivo:", err);
    return Response.json({ error: "No se pudo guardar el archivo." }, { status: 500 });
  }

  return Response.json({ ruta: `/api/archivos/uploads/${nombre}` });
}

