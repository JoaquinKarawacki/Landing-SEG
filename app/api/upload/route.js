import { writeFileSync } from "fs";
import { join } from "path";

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
  
  const tiposPermitidos = ["image/jpeg", "image/png", "application/pdf"];
  if (!tiposPermitidos.includes(archivo.type)) {
    return Response.json({ error: "Formato no permitido" }, { status: 400 });
  }

  const bytes = await archivo.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const nombre = archivo.name.replace(/[^a-zA-Z0-9._-]/g, "_");

  const esPdf = archivo.type === "application/pdf";
  const carpeta = esPdf ? "public" : "public/img";
  const rutaFisica = join(process.cwd(), carpeta, nombre);
  writeFileSync(rutaFisica, buffer);

  const rutaPublica = esPdf ? `/${nombre}` : `/img/${nombre}`;
  return Response.json({ ruta: rutaPublica });
}

