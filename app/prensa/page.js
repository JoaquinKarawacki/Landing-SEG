import Link from "next/link";

export const metadata = {
  title: "Prensa | SEG Ingeniería",
  description:
    "Sala de prensa de SEG Ingeniería. Comunicados, materiales para medios y contacto periodístico.",
};

/* --- Ícono periódico --------------------------------------------------------- */
function IconoPrensa() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4" y="8" width="44" height="48" rx="3" fillOpacity="0.15" />
      <rect x="4" y="8" width="44" height="48" rx="3" stroke="currentColor" strokeWidth="4" fill="none" />
      <rect x="56" y="18" width="4" height="38" rx="2" />
      <rect x="12" y="18" width="28" height="4" rx="1" />
      <rect x="12" y="28" width="28" height="3" rx="1" />
      <rect x="12" y="36" width="20" height="3" rx="1" />
      <rect x="12" y="44" width="24" height="3" rx="1" />
    </svg>
  );
}

/* --- Ícono descarga ---------------------------------------------------------- */
function IconoDescarga() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 4v36M20 28l12 14 12-14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <path d="M8 48v8a4 4 0 0 0 4 4h40a4 4 0 0 0 4-4v-8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
    </svg>
  );
}

/* --- Ícono email ------------------------------------------------------------- */
function IconoEmail() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4" y="12" width="56" height="40" rx="4" fillOpacity="0.15" />
      <rect x="4" y="12" width="56" height="40" rx="4" stroke="currentColor" strokeWidth="4" fill="none" />
      <path d="M4 18l28 20 28-20" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none" />
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
          <span className="text-white">Prensa</span>
        </nav>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Sala de<br />
          <span className="text-[#ca3517]">Prensa</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-8">
          Comunicados, materiales y contacto para medios de comunicación
        </p>
        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
            Periodistas y medios de comunicación pueden acceder aquí a información oficial
            de SEG Ingeniería, materiales gráficos y contacto directo con nuestro equipo.
          </p>
        </div>
      </div>
    </section>
  );
}

/* --- Sección materiales ------------------------------------------------------ */
function SeccionMateriales() {
  const materiales = [
    {
      titulo: "Dossier corporativo",
      descripcion: "Presentación institucional de SEG Ingeniería: historia, servicios, presencia regional y principales proyectos.",
      tipo: "PDF",
      href: "#",
    },
    {
      titulo: "Kit de prensa",
      descripcion: "Logotipos en alta resolución, paleta de colores corporativa y fotografías institucionales para uso editorial.",
      tipo: "ZIP",
      href: "#",
    },
    {
      titulo: "Ficha de empresa",
      descripcion: "Datos clave de SEG Ingeniería: fundación, estructura, áreas de servicio y mercados en los que opera.",
      tipo: "PDF",
      href: "#",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoPrensa />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Materiales para medios</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {materiales.map((material) => (
            <div
              key={material.titulo}
              className="bg-gray-50 rounded-xl p-7 border-t-4 border-[#ca3517] flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">{material.titulo}</h3>
                <span className="text-xs font-bold text-[#ca3517] bg-[#ca3517]/10 px-2 py-0.5 rounded ml-3 flex-shrink-0">
                  {material.tipo}
                </span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
                {material.descripcion}
              </p>
              <a
                href={material.href}
                className="flex items-center gap-2 text-[#ca3517] text-sm font-semibold hover:gap-3 transition-all duration-200"
              >
                <IconoDescarga />
                Descargar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Sección sobre SEG ------------------------------------------------------- */
function SeccionSobreSEG() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#ca3517] font-bold uppercase tracking-widest text-sm mb-2">
              Sobre SEG Ingeniería
            </p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Referentes regionales en energía
            </h2>
            <div className="w-16 h-1 bg-[#ca3517] mb-6 rounded" />
            <p className="text-gray-600 leading-relaxed mb-4">
              SEG Ingeniería es una empresa uruguaya fundada en 1996, especializada en
              eficiencia energética, energías renovables y movilidad eléctrica.
              Con presencia en Uruguay, Argentina, Chile y varios países de la región,
              es reconocida como una de las principales consultoras energéticas de América Latina.
            </p>
            <p className="text-gray-600 leading-relaxed">
              La empresa acompaña a organizaciones públicas y privadas en su transición hacia
              modelos de gestión energética más eficientes y sostenibles, cumpliendo con
              estándares internacionales como la ISO 50001.
            </p>
          </div>

          {/* Panel de datos */}
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-6">
              Datos de referencia
            </h3>
            <div className="space-y-4">
              {[
                { label: "Fundación", valor: "1996 — Montevideo, Uruguay" },
                { label: "Áreas de servicio", valor: "Eficiencia, Renovables, Movilidad" },
                { label: "Presencia", valor: "Uruguay, Argentina, Chile y región" },
                { label: "Certificaciones", valor: "ISO 9001 · ISO 50001" },
                { label: "Contacto prensa", valor: "prensa@segingenieria.com" },
              ].map((dato) => (
                <div key={dato.label} className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 border-b border-gray-700 pb-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wide w-36 flex-shrink-0">
                    {dato.label}
                  </span>
                  <span className="text-sm text-gray-200">{dato.valor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --- Sección contacto prensa ------------------------------------------------- */
function SeccionContactoPrensa() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "#ca3517" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#8a2410] opacity-80" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-center text-white">
        <div className="flex justify-center mb-4 text-white/80">
          <IconoEmail />
        </div>
        <p className="uppercase text-xs tracking-widest text-white/70 mb-2">Contacto periodístico</p>
        <h2 className="text-3xl font-bold mb-4">¿Necesitás información para tu nota?</h2>
        <div className="w-12 h-0.5 bg-white/40 mx-auto mb-6" />
        <p className="text-white/85 leading-relaxed mb-8">
          Nuestro equipo de comunicaciones está disponible para entrevistas,
          declaraciones y material adicional para medios de comunicación.
        </p>
        <a
          href="mailto:prensa@segingenieria.com"
          className="inline-block border-2 border-white text-white font-semibold px-10 py-3 rounded-full hover:bg-white hover:text-[#ca3517] transition-colors duration-200"
        >
          prensa@segingenieria.com
        </a>
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
        <h2 className="text-3xl font-bold mb-4">¿Querés conocer más sobre nuestro trabajo?</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Explorá nuestras áreas de servicio y los proyectos que hemos desarrollado
          en Uruguay y la región.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/seg-consulting"
            className="inline-block bg-[#ca3517] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#a82d12] transition-colors duration-200"
          >
            Ver SEG Consulting
          </Link>
          <Link
            href="/contacto"
            className="inline-block border-2 border-white text-white px-10 py-3 rounded-full font-semibold hover:bg-white hover:text-[#ca3517] transition-colors duration-200"
          >
            Contactanos
          </Link>
        </div>
      </div>
    </section>
  );
}

/* --- Página Prensa ----------------------------------------------------------- */
export default function PaginaPrensa() {
  return (
    <>
      <SeccionHero />
      <SeccionMateriales />
      <SeccionSobreSEG />
      <SeccionContactoPrensa />
      <SeccionCTA />
    </>
  );
}
