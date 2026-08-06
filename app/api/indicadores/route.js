import { readFileSync, writeFileSync } from "fs";
import { getDataFile } from "@/lib/storage";
import { ordenarPorFecha } from "@/lib/indicadores";

function validarToken(request) {
    const token = request.headers.get("x-admin-token");
    return token === process.env.ADMIN_TOKEN;
}

function generarSlug(mes) {
    return mes
        .normalize("NFD")
        .replace(/[̀-ͯ]/g, "")
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-");
}

function leer() {
    return JSON.parse(readFileSync(getDataFile("indicadores.json"), "utf-8"));
}

function guardar(articulos) {
    writeFileSync(getDataFile("indicadores.json"), JSON.stringify(articulos), "utf-8");
}

export function GET(request) {
    return Response.json(ordenarPorFecha(leer()));
}

export async function POST(request) {
    if (!validarToken(request)) {
        return Response.json({ error: "No autorizado" }, { status: 401 });
    }
    const articulo = await request.json();
    const articulos = leer();

    if (articulos.length >= 12) {
        return Response.json({ error: "Máximo 12 artículos permitidos" }, { status: 400 });
    }

    const slug = generarSlug(articulo.mes);
    if (articulos.some(a => a.slug === slug)) {
        return Response.json({ error: `Ya existe un indicador para "${articulo.mes}".` }, { status: 400 });
    }

    articulo.id = Date.now();
    articulo.slug = slug;
    articulo.href = `/indicadores/${slug}`;
    articulos.unshift(articulo);
    guardar(articulos);
    return Response.json(articulo, { status: 201 });
}

export async function DELETE(request) {
    
    if(!validarToken(request)) {
        return Response.json({ error: "No autorizado" }, { status: 401 });
    }

    const articulos = leer();

    const { id }  = await request.json();
    const existe = articulos.find(a => a.id === id);

    if(existe === undefined) {
        return Response.json({ error: "Artículo no encontrado" }, { status: 404 });
    }  
    
    const nuevoArray = articulos.filter(articulo => articulo.id !== id);
    guardar(nuevoArray);
    return Response.json({ ok: true });
}