import { readFileSync, writeFileSync } from "fs";
import { join } from "path";


function validarToken(request) {
    const token = request.headers.get("x-admin-token");
    return token === process.env.ADMIN_TOKEN;   
}   

function leer(){
    const notas = JSON.parse(
    readFileSync(join(process.cwd(), "data/notas.json"), "utf-8")
    );

    return notas;
}

function guardar(notas) {
    writeFileSync(join(process.cwd(), "data/notas.json"), JSON.stringify(notas), "utf-8");
}

export function GET(request) {
    
    return Response.json(leer());
}


export async function POST(request) {

    if(!validarToken(request)) {
        return Response.json({ error: "No autorizado" }, { status: 401 });
    }   
    const nota = await request.json();
    if (typeof nota.temas === "string") {
        nota.temas = nota.temas.split(",").map(t => t.trim()).filter(Boolean);
    }
    const notas = leer();
    if(notas.length < 6) {
        nota.id = Date.now();
        notas.unshift(nota);
        guardar(notas);
        return Response.json(nota, { status: 201 });
    }else {
        return Response.json({ error: "Máximo 6 artículos permitidos" }, { status: 400 });
    }   
}

export async function DELETE(request) {
    
    if(!validarToken(request)) {
        return Response.json({ error: "No autorizado" }, { status: 401 });
    }

    const notas = leer();

    const { id }  = await request.json();
    const existe = notas.find(n => n.id === id);

    if(existe === undefined) {
        return Response.json({ error: "Nota no encontrada" }, { status: 404 });
    }  
    
    const nuevoArray = notas.filter(nota => nota.id !== id);
    guardar(nuevoArray);
    return Response.json({ ok: true });
}