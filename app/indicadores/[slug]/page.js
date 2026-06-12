import { readFileSync } from "fs";
import { join } from "path";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

function leerIndicadores() {
  return JSON.parse(readFileSync(join(process.cwd(), "data/indicadores.json"), "utf-8"));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const articulos = leerIndicadores();
  const articulo = articulos.find((a) => a.slug === slug);
  if (!articulo) return {};
  return {
    title: `${articulo.mes} — Indicadores energéticos | SEG Ingeniería`,
    description: articulo.descripcion,
  };
}

function IconoCalendario() {
  return (
    <svg className="w-4 h-4 shrink-0" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4" y="12" width="56" height="48" rx="4" fillOpacity="0.15" />
      <rect x="4" y="12" width="56" height="48" rx="4" stroke="currentColor" strokeWidth="4" fill="none" />
      <rect x="4" y="22" width="56" height="4" />
      <rect x="18" y="4" width="4" height="16" rx="2" />
      <rect x="42" y="4" width="4" height="16" rx="2" />
    </svg>
  );
}

export default async function PaginaIndicadorIndividual({ params }) {
  const { slug } = await params;
  const articulos = leerIndicadores();
  const articulo = articulos.find((a) => a.slug === slug);

  if (!articulo) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-black overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ca3517]" />
        <div className="relative z-10 max-w-5xl mx-auto text-white">
          <nav className="mb-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#ca3517] transition-colors">Home</Link>
            <span className="mx-2 text-gray-600">›</span>
            <Link href="/indicadores" className="hover:text-[#ca3517] transition-colors">Indicadores energéticos</Link>
            <span className="mx-2 text-gray-600">›</span>
            <span className="text-white">{articulo.mes}</span>
          </nav>
          <p className="text-[#ca3517] font-bold uppercase tracking-widest text-sm mb-3">
            Indicadores energéticos
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
            {articulo.titulo}
          </h1>
        </div>
      </section>

      {/* Contenido editorial */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4">

          {/* Imagen de portada */}
          {articulo.imagen && (
            <div className="mb-10 mx-auto w-full max-w-[700px]">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-md">
                <Image
                  src={articulo.imagen}
                  alt={articulo.titulo}
                  fill
                  sizes="(max-width: 768px) 100vw, 700px"
                  className={`object-cover ${articulo.posicion || "object-center"}`}
                  priority
                />
              </div>
            </div>
          )}

          {/* Mes + título */}
          <p className="text-[#ca3517] font-bold uppercase tracking-widest text-sm mb-2">
            {articulo.mes}
          </p>
          <h2 className="text-2xl sm:text-3xl font-black text-gray-900 leading-snug mb-4">
            {articulo.titulo}
          </h2>

          {/* Fecha */}
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-8">
            <IconoCalendario />
            <time>{articulo.fecha}</time>
          </div>

          {/* Primer párrafo */}
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            {articulo.descripcion}
          </p>

          {/* Link de descarga */}
          {articulo.pdf && (
            <p className="text-gray-800 text-base leading-relaxed border-t border-gray-100 pt-6">
              Acceda al reporte{" "}
              <a
                href={articulo.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#ca3517] hover:underline"
              >
                aquí
              </a>
              .
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-white/50 uppercase text-xs tracking-widest mb-4">SEG Ingeniería</p>
          <h2 className="text-2xl font-bold mb-8">¿Querés recibir los indicadores cada mes?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/indicadores"
              className="inline-block border-2 border-white/60 text-white px-7 py-2.5 rounded-full font-semibold text-sm hover:bg-white hover:text-[#ca3517] hover:border-white transition-colors duration-200"
            >
              ← Volver a Indicadores
            </Link>
            <Link
              href="/contacto#indicadores"
              className="inline-block bg-[#ca3517] text-white px-8 py-2.5 rounded-full font-semibold text-sm hover:bg-[#a82d12] transition-colors duration-200"
            >
              Suscribirme
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
