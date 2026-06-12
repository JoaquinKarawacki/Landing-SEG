"use client";
import { useState } from "react";

function BotonesFilro({ label, opciones, activo, onSelect }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-bold text-gray-500 uppercase tracking-wide w-full sm:w-auto">{label}</span>
      {opciones.map(op => (
        <button
          key={op}
          onClick={() => onSelect(op)}
          className={`px-3 py-1 rounded-full text-xs font-semibold transition-colors duration-150 ${
            activo === op
              ? "bg-[#ca3517] text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {op}
        </button>
      ))}
    </div>
  );
}

function CardProyecto({ proyecto }) {
  return (
    <article className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200">
      <div className="flex flex-wrap gap-1.5">
        <span className="bg-[#ca3517]/10 text-[#ca3517] text-xs font-bold uppercase tracking-wide px-2 py-0.5 rounded">
          {proyecto.area}
        </span>
        <span className="bg-gray-100 text-gray-500 text-xs font-semibold px-2 py-0.5 rounded">
          {proyecto.tipo}
        </span>
      </div>
      <h3 className="font-bold text-gray-900 text-sm leading-snug">{proyecto.nombre}</h3>
      <div className="text-xs text-gray-500 space-y-0.5">
        <p><span className="font-semibold text-gray-700">Cliente:</span> {proyecto.cliente}</p>
        <p><span className="font-semibold text-gray-700">País:</span> {proyecto.paises.join(" · ")}</p>
        <p><span className="font-semibold text-gray-700">Año:</span> {proyecto.año}</p>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">{proyecto.descripcion}</p>
    </article>
  );
}

export default function ExperienciaGrid({ proyectos }) {
  const [filtroPais, setFiltroPais] = useState("Todos");
  const [filtroArea, setFiltroArea] = useState("Todos");
  const [filtroTipo, setFiltroTipo] = useState("Todos");

  const paises = ["Todos", ...Array.from(new Set(proyectos.flatMap(p => p.paises))).sort()];
  const areas  = ["Todos", ...Array.from(new Set(proyectos.map(p => p.area))).sort()];
  const tipos  = ["Todos", ...Array.from(new Set(proyectos.map(p => p.tipo))).sort()];

  const visibles = proyectos.filter(p => {
    const okPais = filtroPais === "Todos" || p.paises.includes(filtroPais);
    const okArea = filtroArea === "Todos" || p.area === filtroArea;
    const okTipo = filtroTipo === "Todos" || p.tipo === filtroTipo;
    return okPais && okArea && okTipo;
  });

  return (
    <div>
      <div className="bg-gray-50 rounded-xl p-5 mb-8 space-y-3">
        <BotonesFilro label="País"  opciones={paises} activo={filtroPais} onSelect={setFiltroPais} />
        <BotonesFilro label="Área"  opciones={areas}  activo={filtroArea} onSelect={setFiltroArea} />
        <BotonesFilro label="Tipo"  opciones={tipos}  activo={filtroTipo} onSelect={setFiltroTipo} />
      </div>

      {visibles.length === 0 ? (
        <p className="text-gray-400 text-center py-12 text-sm">No hay proyectos para los filtros seleccionados.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibles.map(p => <CardProyecto key={p.id} proyecto={p} />)}
        </div>
      )}

      <p className="text-gray-400 text-xs text-right mt-4">{visibles.length} proyecto{visibles.length !== 1 ? "s" : ""}</p>
    </div>
  );
}
