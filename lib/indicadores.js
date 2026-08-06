function parseFecha(fecha) {
  const [dia, mes, anio] = fecha.split("/").map(Number);
  return new Date(anio, mes - 1, dia).getTime();
}

export function ordenarPorFecha(articulos) {
  return [...articulos].sort((a, b) => parseFecha(b.fecha) - parseFecha(a.fecha));
}
