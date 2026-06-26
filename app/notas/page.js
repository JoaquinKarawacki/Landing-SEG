import { readFileSync } from "fs";
import { getDataFile } from "@/lib/storage";
import Link from "next/link";
import Image from "next/image";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Notas Metodológicas | SEG Ingeniería",
  description:
    "Documentación técnica sobre la metodología de cálculo de los Indicadores energéticos elaborados por SEG Ingeniería.",
};

/* --- Ícono documento ------------------------------------------------------- */
function IconoDocumento() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M14 4h24l12 12v44H14V4z" fillOpacity="0.12" />
      <path d="M14 4h24l12 12v44H14V4z" stroke="currentColor" strokeWidth="3" fill="none" strokeLinejoin="round" />
      <path d="M38 4v12h12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="22" y="28" width="20" height="3" rx="1.5" />
      <rect x="22" y="36" width="20" height="3" rx="1.5" />
      <rect x="22" y="44" width="12" height="3" rx="1.5" />
    </svg>
  );
}

/* --- Hero ------------------------------------------------------------------ */
function SeccionHero() {
  return (
    <section className="relative bg-black overflow-hidden py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ca3517]" />
      <div className="relative z-10 max-w-5xl mx-auto text-white">
        <nav className="mb-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#ca3517] transition-colors">Home</Link>
          <span className="mx-2 text-gray-600">›</span>
          <Link href="/indicadores" className="hover:text-[#ca3517] transition-colors">Indicadores energéticos</Link>
          <span className="mx-2 text-gray-600">›</span>
          <span className="text-white">Notas Metodológicas</span>
        </nav>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Notas<br />
          <span className="text-[#ca3517]">Metodológicas</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-8">
          Criterios y fuentes detrás de los Indicadores energéticos
        </p>
        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
            Documentación técnica sobre los índices, fuentes de datos y criterios de cálculo
            utilizados en la elaboración mensual de los Indicadores energéticos de SEG Ingeniería.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --- Card de nota metodológica -------------------------------------------- */
function CardNota({ nota }) {
  return (
    <article className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-200">
      <div className="border-t-4 border-[#ca3517]" />
      <div className="p-8 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-5">
          <div className="text-[#ca3517] flex-shrink-0 mt-1">
            <IconoDocumento />
          </div>
          <div>
            <p className="text-[#ca3517] text-xs font-bold uppercase tracking-widest mb-1">
              Nota Metodológica
            </p>
            <h2 className="text-xl font-bold text-gray-900 leading-snug">
              {nota.titulo}
            </h2>
          </div>
        </div>

        <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
          {nota.resumen}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {nota.temas.map((temas) => (
            <span
              key={temas}
              className="text-xs font-semibold text-gray-500 bg-gray-100 rounded-full px-3 py-1"
            >
              {temas}
            </span>
          ))}
        </div>

        <a
          href={nota.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#ca3517] text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#a82d12] transition-colors duration-200 self-start"
        >
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
          Ver documento completo
        </a>
      </div>
    </article>
  );
}


function SeccionNotas() {
    const NOTAS = JSON.parse(
    readFileSync(getDataFile("notas.json"), "utf-8")
  );
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoDocumento />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Documentación técnica</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {NOTAS.map((nota) => (
            <CardNota key={nota.titulo} nota={nota} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- CTA ------------------------------------------------------------------- */
function SeccionCTA() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-white/50 uppercase text-xs tracking-widest mb-4">SEG Ingeniería</p>
        <h2 className="text-3xl font-bold mb-4">¿Querés recibir los indicadores cada mes?</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Suscribite para recibir el informe mensual de Indicadores energéticos
          directamente en tu correo.
        </p>
        <Link
          href="/contacto#indicadores"
          className="inline-block bg-[#ca3517] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#a82d12] transition-colors duration-200"
        >
          Suscribirme
        </Link>
      </div>
    </section>
  );
}

/* --- Página ---------------------------------------------------------------- */
export default function PaginaNotas() {
  return (
    <>
      <SeccionHero />
      <SeccionNotas />
      <SeccionCTA />
    </>
  );
}