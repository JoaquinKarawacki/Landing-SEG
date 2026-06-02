import { readFileSync, writeFileSync } from "fs";
import { join } from "path";


function validarToken(request) {
    const token = request.headers.get("x-admin-token");
    return token === process.env.ADMIN_TOKEN;   
}   

function leer(){
    const ARTICULOS = JSON.parse(
    readFileSync(join(process.cwd(), "data/novedades.json"), "utf-8")
    );

    return ARTICULOS;
}

function guardar(articulos) {
    writeFileSync(join(process.cwd(), "data/novedades.json"), JSON.stringify(articulos), "utf-8");
}

export function GET(request) {
    
    return Response.json(leer());
}


export async function POST(request) {

    if(!validarToken(request)) {
        return Response.json({ error: "No autorizado" }, { status: 401 });
    }   
    const articulo = await request.json();
    const articulos = leer();
    if(articulos.length < 12) {
        articulo.id = Date.now();
        articulos.unshift(articulo);
        guardar(articulos);
        return Response.json(articulo, { status: 201 });
    }else {
        return Response.json({ error: "Máximo 12 artículos permitidos" }, { status: 400 });
    }   
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