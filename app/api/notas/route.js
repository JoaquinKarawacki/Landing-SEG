import { leerJSON, actualizarJSON } from "@/lib/jsonStore";
import { validarToken, noAutorizado } from "@/lib/seguridad";

const ARCHIVO = "notas.json";
const MAXIMO = 6;

export function GET() {
    return Response.json(leerJSON(ARCHIVO));
}

export async function POST(request) {
    if (!validarToken(request)) return noAutorizado();

    const nota = await request.json();
    if (typeof nota.temas === "string") {
        nota.temas = nota.temas.split(",").map(t => t.trim()).filter(Boolean);
    }

    let lleno = false;
    actualizarJSON(ARCHIVO, (notas) => {
        if (notas.length >= MAXIMO) {
            lleno = true;
            return notas;
        }
        nota.id = Date.now();
        return [nota, ...notas];
    });

    if (lleno) {
        return Response.json({ error: `Máximo ${MAXIMO} artículos permitidos` }, { status: 400 });
    }
    return Response.json(nota, { status: 201 });
}

export async function DELETE(request) {
    if (!validarToken(request)) return noAutorizado();

    const { id } = await request.json();
    let existe = false;
    actualizarJSON(ARCHIVO, (notas) => {
        existe = notas.some(n => n.id === id);
        return existe ? notas.filter(n => n.id !== id) : notas;
    });

    if (!existe) {
        return Response.json({ error: "Nota no encontrada" }, { status: 404 });
    }
    return Response.json({ ok: true });
}
