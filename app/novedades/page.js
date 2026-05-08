import Link from "next/link";

export const metadata = {
  title: "Novedades | SEG Ingeniería",
  description:
    "Últimas noticias y novedades de SEG Ingeniería: proyectos, reconocimientos, certificaciones y presencia internacional.",
};

/* ─── Datos de artículos ────────────────────────────────────────────────────── */
const ARTICULOS = [
  {
    id: 1,
    titulo:
      "SEG Ingeniería reconocida como ESCO destacada en el Premio Nacional de Eficiencia Energética 2024",
    fecha: "30/10/2024",
    categoria: "Reconocimientos",
    descripcion:
      "SEG Ingeniería fue distinguida como Empresa de Servicios Energéticos (ESCO) destacada en el Premio Nacional de Eficiencia Energética 2024, reconocimiento otorgado por la MIEM en Uruguay.",
    href: "#",
  },
  {
    id: 2,
    titulo: "Certificación ISO 50.001 del CASMU",
    fecha: "26/09/2024",
    categoria: "Proyectos",
    descripcion:
      "El Centro de Asistencia del Sindicato Médico del Uruguay (CASMU) obtuvo la certificación ISO 50001 de Gestión de Energía con el acompañamiento técnico de SEG Ingeniería.",
    href: "#",
  },
  {
    id: 3,
    titulo: "Delegación internacional sobre energías limpias en California",
    fecha: "18/09/2024",
    categoria: "Internacional",
    descripcion:
      "Representantes de SEG Ingeniería participaron en una delegación internacional sobre energías limpias en California, intercambiando experiencias con referentes globales del sector.",
    href: "#",
  },
  {
    id: 4,
    titulo: "Acuerdo con el Club de Golf del Uruguay en proyecto de Eficiencia Energética",
    fecha: "11/09/2024",
    categoria: "Proyectos",
    descripcion:
      "SEG Ingeniería firmó un acuerdo con el Club de Golf del Uruguay para el desarrollo de un proyecto integral de eficiencia energética en sus instalaciones.",
    href: "#",
  },
  {
    id: 5,
    titulo: "Charla con el Centro Argentino de Ingenieros",
    fecha: "10/09/2024",
    categoria: "Institucional",
    descripcion:
      "Nuestro equipo técnico brindó una charla ante el Centro Argentino de Ingenieros sobre gestión energética, eficiencia y las oportunidades que ofrece la región en energías renovables.",
    href: "#",
  },
];

/* ─── Ícono megáfono ────────────────────────────────────────────────────────── */
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

/* ─── Ícono calendario ──────────────────────────────────────────────────────── */
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

/* ─── Hero ──────────────────────────────────────────────────────────────────── */
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

/* ─── Card artículo ─────────────────────────────────────────────────────────── */
function CardArticulo({ articulo }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow duration-200">
      <div className="bg-gray-200 h-44 flex items-center justify-center">
        <div className="text-[#ca3517]">
          <IconoNovedades />
        </div>
      </div>
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[#ca3517] text-xs font-bold uppercase tracking-wide mb-2">
          {articulo.categoria}
        </span>
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-3 flex-1">
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
      </div>
    </article>
  );
}

/* ─── Sección listado ───────────────────────────────────────────────────────── */
function SeccionArticulos() {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICULOS.map((articulo) => (
            <CardArticulo key={articulo.id} articulo={articulo} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Sección destacados ────────────────────────────────────────────────────── */
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

/* ─── CTA ────────────────────────────────────────────────────────────────────── */
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

/* ─── Página Novedades ──────────────────────────────────────────────────────── */
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
