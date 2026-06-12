"use client";
import { useState } from "react";
import Image from "next/image";

const LIMITE = 6;

function IconoIndicadores() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4" y="32" width="10" height="24" rx="2" />
      <rect x="20" y="20" width="10" height="36" rx="2" />
      <rect x="36" y="10" width="10" height="46" rx="2" />
      <rect x="52" y="24" width="10" height="32" rx="2" />
    </svg>
  );
}

function IconoCalendario() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4" y="12" width="56" height="48" rx="4" fillOpacity="0.15" />
      <rect x="4" y="12" width="56" height="48" rx="4" stroke="currentColor" strokeWidth="4" fill="none" />
      <rect x="4" y="22" width="56" height="4" />
      <rect x="18" y="4" width="4" height="16" rx="2" />
      <rect x="42" y="4" width="4" height="16" rx="2" />
    </svg>
  );
}

function CardArticulo({ articulo }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow duration-200">
      {articulo.imagen ? (
        <div className="h-44 relative overflow-hidden">
          <Image
            src={articulo.imagen}
            alt={articulo.titulo}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover ${articulo.posicion || "object-center"}`}
          />
        </div>
      ) : (
        <div className="bg-gray-200 h-44 flex items-center justify-center">
          <div className="text-[#ca3517]"><IconoIndicadores /></div>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[#ca3517] text-xs font-bold uppercase tracking-wide mb-2">
          Indicadores energéticos
        </span>
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-3">
          <a href={articulo.href} className="hover:text-[#ca3517] transition-colors">
            {articulo.titulo}
          </a>
        </h3>
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
          <IconoCalendario />
          <time>{articulo.fecha}</time>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
          {articulo.descripcion}
        </p>
        <a
          href={articulo.href}
          className="mt-4 inline-flex items-center gap-1 text-[#ca3517] text-sm font-semibold hover:underline"
        >
          Ver reporte →
        </a>
      </div>
    </article>
  );
}

export default function IndicadoresGrid({ articulos }) {
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const visibles = mostrarTodos ? articulos : articulos.slice(0, LIMITE);
  const restantes = articulos.length - LIMITE;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibles.map((articulo) => (
          <CardArticulo key={articulo.id} articulo={articulo} />
        ))}
      </div>
      {!mostrarTodos && restantes > 0 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setMostrarTodos(true)}
            className="inline-block border-2 border-[#ca3517] text-[#ca3517] px-8 py-2.5 rounded-full font-semibold text-sm hover:bg-[#ca3517] hover:text-white transition-colors duration-200"
          >
            Ver más ({restantes} {restantes === 1 ? "publicación más" : "publicaciones más"})
          </button>
        </div>
      )}
    </>
  );
}