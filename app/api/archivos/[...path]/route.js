import { readFileSync, existsSync } from "fs";
import { join, extname } from "path";
import { getUploadDir } from "@/lib/storage";

const MIME = {
  ".pdf": "application/pdf",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".webp": "image/webp",
};

export async function GET(request, { params }) {
  const segments = (await params).path;
  const filePath = join(getUploadDir(), ...segments);

  if (!existsSync(filePath)) {
    return new Response("No encontrado", { status: 404 });
  }

  const ext = extname(filePath).toLowerCase();
  const buffer = readFileSync(filePath);

  return new Response(buffer, {
    headers: {
      "Content-Type": MIME[ext] ?? "application/octet-stream",
      "Content-Disposition":
        ext === ".pdf"
          ? `attachment; filename="${segments.at(-1)}"`
          : "inline",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
