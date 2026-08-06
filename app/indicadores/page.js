import { readFileSync } from "fs";
import { getDataFile } from "@/lib/storage";
import { ordenarPorFecha } from "@/lib/indicadores";
import Link from "next/link";
import IndicadoresGrid from "@/components/IndicadoresGrid";


export const dynamic = "force-dynamic";

export const metadata = {
  title: "Indicadores energéticos | SEG Ingeniería",
  description:
    "Análisis mensuales sobre el sector energético en Uruguay y la región. Tendencias, consumo, renovables y eficiencia energética.",
};


/* --- Ícono gráfico de barras ------------------------------------------------- */
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
          <span className="text-white">Indicadores energéticos</span>
        </nav>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Indicadores<br />
          <span className="text-[#ca3517]">energéticos</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-8">
          Análisis mensuales del sector energético en Uruguay y la región
        </p>
        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
            Cada mes, nuestro equipo técnico elabora un informe con los principales indicadores
            energéticos: consumo, generación renovable, tarifas y tendencias del mercado.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/notas"
            className="inline-block border-2 border-white/60 text-white font-semibold px-7 py-2.5 rounded-full text-sm hover:bg-white hover:text-[#ca3517] hover:border-white transition-colors duration-200"
          >
            Ver Notas Meteorológicas →
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --- Sección listado de artículos ------------------------------------------- */
function SeccionArticulos() {
  const ARTICULOS = ordenarPorFecha(
    JSON.parse(readFileSync(getDataFile("indicadores.json"), "utf-8"))
  );
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoIndicadores />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Últimas publicaciones</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <IndicadoresGrid articulos={ARTICULOS} />
      </div>
    </section>
  );
}

/* --- Sección suscripción ----------------------------------------------------- */
function SeccionSuscripcion() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-[#ca3517] font-bold uppercase tracking-widest text-sm mb-2">
          Mantente informado
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Suscribite a los Indicadores
        </h2>
        <div className="w-16 h-1 bg-[#ca3517] mx-auto mb-6 rounded" />
        <p className="text-gray-600 leading-relaxed mb-8">
          Recibí cada mes en tu correo el informe de Indicadores energéticos
          elaborado por el equipo técnico de SEG Ingeniería.
        </p>
        <Link
          href="/contacto#indicadores"
          className="inline-block bg-[#ca3517] text-white px-8 py-2.5 rounded-full font-semibold text-sm hover:bg-[#a82d12] transition-colors duration-200"
        >
          Suscribirme
        </Link>
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
        <h2 className="text-3xl font-bold mb-4">¿Querés saber más sobre eficiencia energética?</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Nuestro equipo está disponible para asesorarte sobre proyectos de eficiencia
          y energías renovables para tu organización.
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

/* --- Página Indicadores ------------------------------------------------------ */
export default function PaginaIndicadores() {
  return (
    <>
      <SeccionHero />
      <SeccionArticulos />
      <SeccionSuscripcion />
      <SeccionCTA />
    </>
  );
}
