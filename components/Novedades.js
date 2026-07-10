import { readFileSync } from "fs";
import { getDataFile } from "@/lib/storage";
import Image from "next/image";
import Link from "next/link";


/* --- Card individual de novedad -------------------------------------------- */
function CardNovedad({ novedad }) {
  const esExterno = novedad.href.startsWith("http");

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
      <a
        href={novedad.href}
        target={esExterno ? "_blank" : undefined}
        rel={esExterno ? "noopener noreferrer" : undefined}
        className="block"
      >
        {novedad.Imagen ? (
          <Image
            src={novedad.Imagen}
            alt={novedad.titulo}
            width={600}
            height={192}
            className={`w-full h-48 object-cover ${novedad.posicion || "object-center"}`}
          />
        ) : (
          <div className="bg-gray-300 h-48 flex items-center justify-center text-gray-500 text-sm">
            Imagen novedad
          </div>
        )}
      </a>

      <div className="p-5 flex flex-col">
        <span className="text-[#ca3517] text-xs font-bold uppercase tracking-wide mb-2">
          {novedad.categoria}
        </span>

        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2">
          <a
            href="/novedades"
            target={esExterno ? "_blank" : undefined}
            rel={esExterno ? "noopener noreferrer" : undefined}
            className="hover:text-[#ca3517] transition-colors duration-200"
          >
            {novedad.titulo}
          </a>
        </h3>

        <time className="text-gray-400 text-xs mb-3 block" dateTime={novedad.fecha}>
          {novedad.fecha}
        </time>

        <p className="text-gray-600 text-sm leading-relaxed line-clamp-4">
          {novedad.descripcion}
        </p>
      </div>
    </article>
  );
}

/* --- Sección Últimas Novedades ---------------------------------------------- */
export default function Novedades() {
    const NOVEDADES = JSON.parse(
    readFileSync(getDataFile("novedades.json"), "utf-8")
  );
  return (
    <section className="py-16 relative overflow-hidden" aria-label="Últimas novedades">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#7a1e09]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Últimas novedades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NOVEDADES.slice(0, 3).map((novedad) => (
            <CardNovedad key={novedad.id} novedad={novedad} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/novedades"
            className="inline-block border-2 border-white text-white font-semibold px-10 py-3 rounded-full hover:bg-white hover:text-[#ca3517] transition-colors duration-200"
          >
            Ver Todas
          </a>
        </div>
      </div>
    </section>
  );
}
