import { readFileSync, writeFileSync, renameSync, unlinkSync } from "fs";
import { getDataFile } from "@/lib/storage";

export function leerJSON(nombre) {
  return JSON.parse(readFileSync(getDataFile(nombre), "utf-8"));
}

// Escritura atómica: se escribe a un archivo temporal y después se renombra.
// Si el proceso se corta a mitad de la escritura, el JSON original queda intacto.
export function guardarJSON(nombre, datos) {
  const destino = getDataFile(nombre);
  const temporal = `${destino}.${process.pid}.${Date.now()}.tmp`;
  try {
    writeFileSync(temporal, JSON.stringify(datos), "utf-8");
    renameSync(temporal, destino);
  } catch (err) {
    try { unlinkSync(temporal); } catch {}
    throw err;
  }
}

// Lee, modifica y guarda en un solo paso síncrono. Al no haber ningún `await`
// entre la lectura y la escritura, dos requests simultáneos no pueden pisarse.
// `modificar` recibe el array actual y devuelve el nuevo.
export function actualizarJSON(nombre, modificar) {
  const nuevo = modificar(leerJSON(nombre));
  guardarJSON(nombre, nuevo);
  return nuevo;
}
