import { readFileSync } from "fs";
import { getDataFile } from "@/lib/storage";
import Link from "next/link";
import NovedadesGrid from "@/components/NovedadesGrid";


export const dynamic = "force-dynamic";

export const metadata = {
  title: "Novedades | SEG Ingeniería",
  description:
    "Últimas noticias y novedades de SEG Ingeniería: proyectos, reconocimientos, certificaciones y presencia internacional.",
};



/* --- Ícono megáfono (usado en sección header) -------------------------------- */
function IconoNovedades() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M8 22h8v20H8a4 4 0 0 1-4-4V26a4 4 0 0 1 4-4z" />
      <path d="M16 22l28-14v36L16 30V22z" />
      <path d="M44 26a6 6 0 0 1 0 12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M22 42l4 10h6l-4-12" />
    </svg>
  );
}

/* --- Hero -------------------------------------------------------------------- */
function SeccionHero() {
  return (
    <section className="relative bg-black overflow-hidden py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ca3517]" />
      <div className="relative z-10 max-w-5xl mx-auto text-white">
        <nav className="mb-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#ca3517] transition-colors">Home</Link>
          <span className="mx-2 text-gray-600">›</span>
          <span className="text-white">Novedades</span>
        </nav>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Novedades<br />
          <span className="text-[#ca3517]">SEG Ingeniería</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-8">
          Proyectos, reconocimientos y presencia internacional
        </p>
        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
            Seguí de cerca el trabajo de SEG Ingeniería: nuevos proyectos, certificaciones,
            participación en eventos internacionales y alianzas estratégicas.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --- Sección listado --------------------------------------------------------- */
function SeccionArticulos() {
  const ARTICULOS = JSON.parse(
    readFileSync(getDataFile("novedades.json"), "utf-8")
  );
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoNovedades />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Últimas novedades</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <NovedadesGrid articulos={ARTICULOS} />
      </div>
    </section>
  );
}

/* --- Sección destacados ------------------------------------------------------ */
function SeccionDestacados() {
  const destacados = [
    { numero: "2024", label: "Premio Nacional de Eficiencia Energética" },
    { numero: "ISO 50001", label: "Certificaciones acompañadas" },
    { numero: "5+", label: "Países con presencia activa" },
  ];

  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "#ca3517" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#8a2410] opacity-80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-white/70 uppercase text-xs tracking-widest mb-2">Nuestro impacto</p>
          <h2 className="text-3xl font-bold text-white mb-2">SEG en números</h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {destacados.map((item) => (
            <div key={item.label}>
              <div className="text-4xl font-black mb-2">{item.numero}</div>
              <p className="text-white/80 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- CTA ---------------------------------------------------------------------- */
function SeccionCTA() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-white/50 uppercase text-xs tracking-widest mb-4">SEG Ingeniería</p>
        <h2 className="text-3xl font-bold mb-4">¿Querés trabajar con nosotros?</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Sumá tu organización a la red de empresas que ya confían en SEG Ingeniería
          para sus proyectos de eficiencia y energías renovables.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-[#ca3517] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#a82d12] transition-colors duration-200"
        >
          Contactanos
        </Link>
      </div>
    </section>
  );
}

/* --- Página Novedades -------------------------------------------------------- */
export default function PaginaNovedades() {
  return (
    <>
      <SeccionHero />
      <SeccionArticulos />
      <SeccionDestacados />
      <SeccionCTA />
    </>
  );
}
