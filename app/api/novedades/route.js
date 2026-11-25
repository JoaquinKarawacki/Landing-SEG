import { leerJSON, actualizarJSON } from "@/lib/jsonStore";
import { validarToken, noAutorizado } from "@/lib/seguridad";

const ARCHIVO = "novedades.json";
const MAXIMO = 12;

export function GET() {
    return Response.json(leerJSON(ARCHIVO));
}

export async function POST(request) {
    if (!validarToken(request)) return noAutorizado();

    const articulo = await request.json();

    let lleno = false;
    actualizarJSON(ARCHIVO, (articulos) => {
        if (articulos.length >= MAXIMO) {
            lleno = true;
            return articulos;
        }
        articulo.id = Date.now();
        return [articulo, ...articulos];
    });

    if (lleno) {
        return Response.json({ error: `Máximo ${MAXIMO} artículos permitidos` }, { status: 400 });
    }
    return Response.json(articulo, { status: 201 });
}

export async function DELETE(request) {
    if (!validarToken(request)) return noAutorizado();

    const { id } = await request.json();
    let existe = false;
    actualizarJSON(ARCHIVO, (articulos) => {
        existe = articulos.some(a => a.id === id);
        return existe ? articulos.filter(a => a.id !== id) : articulos;
    });

    if (!existe) {
        return Response.json({ error: "Artículo no encontrado" }, { status: 404 });
    }
    return Response.json({ ok: true });
}
