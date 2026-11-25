import { leerJSON, actualizarJSON } from "@/lib/jsonStore";
import { ordenarPorFecha } from "@/lib/indicadores";
import { validarToken, noAutorizado } from "@/lib/seguridad";

const ARCHIVO = "indicadores.json";
const MAXIMO = 12;

function generarSlug(mes) {
    return mes
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");
}

export function GET() {
    return Response.json(ordenarPorFecha(leerJSON(ARCHIVO)));
}

export async function POST(request) {
    if (!validarToken(request)) return noAutorizado();

    const articulo = await request.json();
    if (typeof articulo.mes !== "string" || !articulo.mes.trim()) {
        return Response.json({ error: "El mes de edición es requerido." }, { status: 400 });
    }
    const slug = generarSlug(articulo.mes);

    let error = null;
    actualizarJSON(ARCHIVO, (articulos) => {
        if (articulos.length >= MAXIMO) {
            error = `Máximo ${MAXIMO} artículos permitidos`;
            return articulos;
        }
        if (articulos.some(a => a.slug === slug)) {
            error = `Ya existe un indicador para "${articulo.mes}".`;
            return articulos;
        }
        articulo.id = Date.now();
        articulo.slug = slug;
        articulo.href = `/indicadores/${slug}`;
        return [articulo, ...articulos];
    });

    if (error) return Response.json({ error }, { status: 400 });
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
