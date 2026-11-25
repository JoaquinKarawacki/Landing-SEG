import { readFileSync, existsSync, statSync } from "fs";
import { resolve, extname, sep } from "path";
import { getStorageRoot } from "@/lib/storage";

const MIME = {
  ".pdf": "application/pdf",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

function noEncontrado() {
  return new Response("No encontrado", { status: 404 });
}

export async function GET(request, { params }) {
  const segments = (await params).path ?? [];

  // Solo se sirven archivos subidos desde el admin (carpeta uploads/).
  // Todo lo demás del storage (data/*.json con suscriptores, etc.) queda fuera.
  if (segments[0] !== "uploads" || segments.length < 2) {
    return noEncontrado();
  }

  const baseUploads = resolve(getStorageRoot(), "uploads");
  const filePath = resolve(baseUploads, ...segments.slice(1));

  // Evita path traversal (../, ..%2F, etc.): la ruta final tiene que quedar dentro de uploads/
  if (!filePath.startsWith(baseUploads + sep)) {
    return noEncontrado();
  }

  // Solo extensiones conocidas
  const ext = extname(filePath).toLowerCase();
  if (!MIME[ext]) {
    return noEncontrado();
  }

  if (!existsSync(filePath) || !statSync(filePath).isFile()) {
    return noEncontrado();
  }

  const buffer = readFileSync(filePath);
  const nombreArchivo = segments.at(-1).replace(/["\\\r\n]/g, "_");

  return new Response(buffer, {
    headers: {
      "Content-Type": MIME[ext],
      "Content-Disposition":
        ext === ".pdf" ? `attachment; filename="${nombreArchivo}"` : "inline",
      "X-Content-Type-Options": "nosniff",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
