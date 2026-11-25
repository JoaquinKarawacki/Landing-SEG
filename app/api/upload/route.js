import { writeFileSync } from "fs";
import { join, extname } from "path";
import { getUploadDir } from "@/lib/storage";
import { validarToken, noAutorizado } from "@/lib/seguridad";

const EXTENSIONES_PERMITIDAS = [".pdf", ".jpg", ".jpeg", ".png", ".webp"];
const TAMANO_MAXIMO = 15 * 1024 * 1024; // 15 MB

export async function POST(request) {
  if (!validarToken(request)) return noAutorizado();

  const formData = await request.formData();
  const archivo = formData.get("archivo");

  if (!archivo || typeof archivo === "string") {
    return Response.json({ error: "No se recibió archivo" }, { status: 400 });
  }

  const ext = extname(archivo.name).toLowerCase();
  if (!EXTENSIONES_PERMITIDAS.includes(ext)) {
    return Response.json(
      { error: "Formato no permitido. Usá PDF, JPG, PNG o WEBP." },
      { status: 400 }
    );
  }

  if (archivo.size > TAMANO_MAXIMO) {
    return Response.json({ error: "El archivo supera los 15 MB." }, { status: 400 });
  }

  // Nombre seguro y único: prefijo con timestamp para no pisar archivos existentes
  const base = archivo.name
    .slice(0, -ext.length)
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .slice(0, 80);
  const nombre = `${Date.now()}-${base || "archivo"}${ext}`;

  try {
    const buffer = Buffer.from(await archivo.arrayBuffer());
    writeFileSync(join(getUploadDir(), nombre), buffer);
  } catch (err) {
    console.error("Error guardando archivo:", err);
    return Response.json({ error: "No se pudo guardar el archivo." }, { status: 500 });
  }

  return Response.json({ ruta: `/api/archivos/uploads/${nombre}` });
}
