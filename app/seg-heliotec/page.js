import Link from "next/link";

export const metadata = {
  title: "SEG Heliotec — SEG Ingeniería",
  description:
    "Principal Gerenciador Operativo de parques eólicos en Uruguay. 73 aerogeneradores y más de 170 MW en potencia instalada. Asociación entre SEG Ingeniería y Heliotec Alemania.",
};

/* ══════════════════════════════════════════════════════════════════════════════
   ÍCONOS SVG — fill="currentColor", viewBox="0 0 64 64", aria-hidden="true"
══════════════════════════════════════════════════════════════════════════════ */

function IconoMolino({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M30 32 L26 60 L38 60 L34 32 Z" />
      <circle cx="32" cy="30" r="4" />
      <path d="M32 26 L29 8 Q32 4 35 8 Z" />
      <path d="M35.5 32 L52 42 Q54 46 50 48 Z" />
      <path d="M28.5 32 L12 42 Q10 46 14 48 Z" />
    </svg>
  );
}

function IconoTCM({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="6" y="10" width="52" height="36" rx="3" />
      <rect x="6" y="10" width="52" height="10" rx="3" />
      <rect x="22" y="52" width="20" height="4" rx="2" />
      <line x1="32" y1="46" x2="32" y2="52" stroke="currentColor" strokeWidth="3" />
      <rect x="14" y="28" width="10" height="10" rx="2" fill="rgba(255,255,255,0.4)" />
      <rect x="30" y="24" width="22" height="3" rx="1.5" fill="rgba(255,255,255,0.4)" />
      <rect x="30" y="31" width="16" height="3" rx="1.5" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

function IconoAdvisor({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4"  y="40" width="10" height="16" rx="2" />
      <rect x="18" y="28" width="10" height="28" rx="2" />
      <rect x="32" y="16" width="10" height="40" rx="2" />
      <rect x="46" y="24" width="10" height="32" rx="2" />
      <polyline points="9,38 23,26 37,14 51,22" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="51" cy="22" r="4" fill="rgba(255,255,255,0.8)" />
      <rect x="2"  y="57" width="60" height="3" rx="1.5" />
    </svg>
  );
}

function IconoOM({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M44 8 C36 8 30 14 30 22 C30 24 30.5 26 31.5 27.5 L8 51 C6 53 6 56 8 58 C10 60 13 60 15 58 L38.5 34.5 C40 35.5 42 36 44 36 C52 36 58 30 58 22 C58 20 57.5 18 56.7 16.3 L48 25 L39 16 L47.7 7.3 C46.5 7.1 45.3 8 44 8Z" />
    </svg>
  );
}

function IconoAsset({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="6" y="20" width="52" height="38" rx="2" />
      <rect x="6" y="20" width="52" height="10" />
      <path d="M20 8 L44 8 L48 20 L16 20 Z" />
      <rect x="14" y="36" width="10" height="10" rx="1" fill="rgba(255,255,255,0.35)" />
      <rect x="30" y="36" width="10" height="10" rx="1" fill="rgba(255,255,255,0.35)" />
      <rect x="46" y="36" width="8"  height="10" rx="1" fill="rgba(255,255,255,0.35)" />
      <rect x="24" y="46" width="16" height="12" rx="1" fill="rgba(255,255,255,0.25)" />
    </svg>
  );
}

function IconoDron({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <ellipse cx="32" cy="32" rx="8" ry="5" />
      <rect x="4"  y="28" width="14" height="4" rx="2" />
      <rect x="46" y="28" width="14" height="4" rx="2" />
      <ellipse cx="8"  cy="24" rx="8" ry="4" />
      <ellipse cx="56" cy="24" rx="8" ry="4" />
      <line x1="32" y1="37" x2="32" y2="54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeDasharray="3 3" />
      <path d="M26 54 Q32 58 38 54" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function IconoCertificado({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <circle cx="32" cy="36" r="18" />
      <circle cx="32" cy="36" r="13" fill="rgba(255,255,255,0.2)" />
      <path d="M24 20 L24 8 L32 14 L40 8 L40 20 Q36 17 32 19 Q28 17 24 20Z" />
      <path d="M23 37 L29 43 L41 29" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconoGlobo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="32" cy="32" r="26" />
      <ellipse cx="32" cy="32" rx="13" ry="26" />
      <line x1="6"  y1="32" x2="58" y2="32" />
      <line x1="6"  y1="20" x2="58" y2="20" />
      <line x1="6"  y1="44" x2="58" y2="44" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: HERO BANNER — Guía §5
══════════════════════════════════════════════════════════════════════════════ */
function SeccionHero() {
  return (
    <section className="relative bg-black overflow-hidden py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ca3517]" />

      <div className="relative z-10 max-w-5xl mx-auto text-white">
        <nav className="mb-6 text-sm text-gray-400" aria-label="Ubicación en el sitio">
          <Link href="/" className="hover:text-[#ca3517] transition-colors">Home</Link>
          <span className="mx-2 text-gray-600">›</span>
          <span className="text-white">SEG Heliotec</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          SEG Heliotec
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-4">
          Principal Gerenciador Operativo de parques eólicos en Uruguay
        </p>

        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base text-gray-300 leading-relaxed">
            Servicios Eólicos · Solares · Asset Management
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mt-1 max-w-2xl">
            Seg Heliotec Uruguay S.A. proporciona servicios a centrales de
            generación y transformación de energía, con 73 aerogeneradores bajo
            responsabilidad y más de 170 MW de potencia instalada.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   NAVEGACIÓN INTERNA — Guía §5
══════════════════════════════════════════════════════════════════════════════ */
const ANCLAS = [
  { etiqueta: "Descripción",        href: "#descripcion"       },
  { etiqueta: "Heliotec Alemania",  href: "#heliotec-alemania" },
  { etiqueta: "Servicios",          href: "#servicios"         },
];

function NavegacionInterna() {
  return (
    <nav
      className="bg-gray-100 border-b border-gray-200 sticky top-[88px] z-40"
      aria-label="Secciones de la página"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex overflow-x-auto gap-0 -mb-px">
          {ANCLAS.map((ancla) => (
            <li key={ancla.etiqueta} className="flex-shrink-0">
              <a
                href={ancla.href}
                className="block px-4 sm:px-6 py-4 text-sm font-medium text-gray-600 border-b-2 border-transparent hover:text-[#ca3517] hover:border-[#ca3517] transition-colors duration-200 whitespace-nowrap"
              >
                {ancla.etiqueta}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: DESCRIPCIÓN — bg-white — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
function SeccionDescripcion() {
  return (
    <section id="descripcion" className="py-16 bg-white scroll-mt-[140px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoMolino className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Sobre SEG Heliotec</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-gray-600 leading-relaxed text-base">
              SEG Heliotec Uruguay S.A. surge de la asociación entre{" "}
              <strong className="text-gray-900">SEG Ingeniería</strong> y{" "}
              <strong className="text-gray-900">Heliotec Alemania</strong>, combinando
              el conocimiento local del mercado energético uruguayo con décadas de
              experiencia europea en gerenciamiento de activos renovables.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Somos el principal Gerenciador Operativo de parques eólicos en Uruguay,
              brindando servicios integrales a centrales de generación y transformación
              de energía en todo el país.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Más información en{" "}
              <a
                href="https://www.segheliotec.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ca3517] font-semibold hover:underline"
              >
                www.segheliotec.com
              </a>
            </p>
          </div>

          {/* Panel de estadísticas — fondo oscuro */}
          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-8">
              Capacidad operativa en Uruguay
            </p>

            <div className="flex flex-col gap-8">
              <div className="border-b border-white/10 pb-8">
                <div className="text-6xl font-black text-white leading-none">73</div>
                <div className="text-lg font-semibold text-white/80 mt-1">aerogeneradores</div>
                <div className="text-sm text-white/50 mt-1">bajo responsabilidad operativa</div>
              </div>
              <div>
                <div className="text-6xl font-black text-[#ca3517] leading-none">170+</div>
                <div className="text-lg font-semibold text-white/80 mt-1">MW</div>
                <div className="text-sm text-white/50 mt-1">en potencia instalada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: HELIOTEC ALEMANIA — fondo rojo — Guía §4.4
══════════════════════════════════════════════════════════════════════════════ */
const CREDENCIALES_HELIOTEC = [
  {
    id: "desde-1996",
    Icono: IconoMolino,
    titulo: "Desde 1996 en Europa",
    detalle: "Gerenciadores de parques eólicos con casi tres décadas de experiencia en el mercado europeo.",
  },
  {
    id: "160-plantas",
    Icono: IconoAsset,
    titulo: "160+ plantas bajo administración",
    detalle: "Plantas eólicas, estaciones de transformación y plantas fotovoltaicas bajo su gestión.",
  },
  {
    id: "iso-9001",
    Icono: IconoCertificado,
    titulo: "Certificación ISO 9001",
    detalle: "Certificación para los procesos utilizados en el gerenciamiento de parques renovables.",
  },
  {
    id: "presencia-global",
    Icono: IconoGlobo,
    titulo: "Presencia global",
    detalle: "Además de Europa, proyectos activos en Sudáfrica y Vietnam.",
  },
];

function SeccionHeliotecAlemania() {
  return (
    <section
      id="heliotec-alemania"
      className="py-16 relative overflow-hidden scroll-mt-[140px]"
      style={{ backgroundColor: "#ca3517" }}
      aria-label="Credenciales de Heliotec Alemania"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#8a2410] opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-white/70 font-bold uppercase tracking-widest text-xs mb-3">
            El socio europeo
          </p>
          <h2 className="text-3xl font-bold text-white">Heliotec Alemania</h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CREDENCIALES_HELIOTEC.map((cred) => (
            <article
              key={cred.id}
              className="flex flex-col items-center text-center text-white bg-white/10 rounded-xl p-7 border border-white/20 backdrop-blur-sm"
            >
              <cred.Icono className="w-14 h-14 mb-4 text-white" />
              <div className="w-10 h-0.5 bg-white/40 mb-4" />
              <h3 className="font-bold text-base mb-2 leading-snug">{cred.titulo}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{cred.detalle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: SERVICIOS — bg-gray-50 — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
const SERVICIOS = [
  {
    id: "tcm",
    Icono: IconoTCM,
    sigla: "TCM",
    titulo: "Gerenciamiento Operativo",
    descripcion:
      "Gerenciamiento Operativo de Proyectos Renovables. Gestión integral de la operación de parques eólicos y fotovoltaicos, asegurando el máximo rendimiento y disponibilidad de los activos.",
  },
  {
    id: "advisor",
    Icono: IconoAdvisor,
    sigla: "ADVISOR",
    titulo: "Evaluación de Desempeño",
    descripcion:
      "Evaluación de desempeño energético de plantas Fotovoltaicas y Eólicas. Análisis de producción, identificación de desvíos y recomendaciones para optimización del rendimiento.",
  },
  {
    id: "om",
    Icono: IconoOM,
    sigla: "O&M",
    titulo: "Operación y Mantenimiento",
    descripcion:
      "Operación y Mantenimiento de Estaciones de Transformación, Plantas Fotovoltaicas y Plantas de Generación y Transformación de energía. Servicio técnico especializado en campo.",
  },
  {
    id: "am",
    Icono: IconoAsset,
    sigla: "AM",
    titulo: "Asset Management",
    descripcion:
      "Manejo integral de activos renovables. Gestión técnica, financiera y contractual de los activos de generación para maximizar el valor y rentabilidad a lo largo de su vida útil.",
  },
  {
    id: "blade",
    Icono: IconoDron,
    sigla: "BLADE SERVICE",
    titulo: "Inspección y Reparación de Palas",
    descripcion:
      "Inspección con dron de Palas, Redes MT y AT. Reparación de palas de aerogeneradores. Tecnología de última generación para detección temprana de daños y mantenimiento preventivo.",
  },
];

function SeccionServicios() {
  return (
    <section id="servicios" className="py-16 bg-gray-50 scroll-mt-[140px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoTCM className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Servicios</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-3xl">
          Servicios especializados para la gestión, operación y mantenimiento
          de activos de generación de energía renovable.
        </p>

        {/* Grid de cards — Guía §6.1: cabecera roja + cuerpo blanco */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICIOS.map((srv) => (
            <article
              key={srv.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              <div className="bg-[#ca3517] p-6 text-white flex flex-col items-center text-center">
                <srv.Icono className="w-12 h-12 mb-3" />
                <p className="text-white/70 text-xs font-black uppercase tracking-widest mb-1">
                  {srv.sigla}
                </p>
                <h3 className="text-base font-bold leading-snug">{srv.titulo}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">{srv.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: CTA FINAL — bg-black — Guía §5
══════════════════════════════════════════════════════════════════════════════ */
function SeccionCTA() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-white/50 uppercase text-xs tracking-widest mb-4">
          SEG Heliotec
        </p>
        <h2 className="text-3xl font-bold mb-4">
          ¿Necesita gestionar sus activos renovables?
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Contáctenos para conocer nuestros servicios de gerenciamiento operativo,
          O&M y asset management para parques eólicos y solares.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://www.segheliotec.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#ca3517] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#a82d12] transition-colors duration-200"
          >
            Visitar segheliotec.com
          </a>
          <Link
            href="/contacto"
            className="inline-block border-2 border-white text-white px-10 py-3 rounded-full font-semibold hover:bg-white hover:text-[#ca3517] transition-colors duration-200"
          >
            Contactar a SEG
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
══════════════════════════════════════════════════════════════════════════════ */
export default function PaginaSEGHeliotec() {
  return (
    <>
      <SeccionHero />
      <NavegacionInterna />
      <SeccionDescripcion />
      <SeccionHeliotecAlemania />
      <SeccionServicios />
      <SeccionCTA />
    </>
  );
}
