import Link from "next/link";

export const metadata = {
  title: "Movilidad Eléctrica — SEG Ingeniería",
  description:
    "Referentes en electromovilidad. Principal asesor técnico y comercial de Grupo Renault Nissan 2017-2019. Primera EMO (Operador de Movilidad Eléctrica) certificada de Nissan en Uruguay.",
};

/* ══════════════════════════════════════════════════════════════════════════════
   ÍCONOS SVG — fill="currentColor", viewBox="0 0 64 64", aria-hidden="true"
══════════════════════════════════════════════════════════════════════════════ */

function IconoAuto({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      {/* Carrocería */}
      <path d="M10 36 L16 22 Q18 18 24 18 L40 18 Q46 18 48 22 L54 36 L54 44 L10 44 Z" />
      {/* Parabrisas */}
      <path d="M20 22 L18 32 L46 32 L44 22 Z" fill="rgba(255,255,255,0.3)" />
      {/* Rueda izquierda */}
      <circle cx="20" cy="44" r="7" />
      <circle cx="20" cy="44" r="3" fill="white" />
      {/* Rueda derecha */}
      <circle cx="44" cy="44" r="7" />
      <circle cx="44" cy="44" r="3" fill="white" />
      {/* Rayo eléctrico en la puerta */}
      <path d="M30 24 L27 30 L31 30 L28 36 L33 28 L29 28 Z" fill="rgba(255,255,255,0.6)" />
    </svg>
  );
}

function IconoCertificado({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      {/* Medalla */}
      <circle cx="32" cy="36" r="18" />
      <circle cx="32" cy="36" r="13" fill="rgba(255,255,255,0.2)" />
      {/* Tira superior */}
      <path d="M24 20 L24 8 L32 14 L40 8 L40 20 Q36 17 32 19 Q28 17 24 20Z" />
      {/* Check */}
      <path d="M23 37 L29 43 L41 29" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconoGrupo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      {/* Persona centro */}
      <circle cx="32" cy="18" r="8" />
      <path d="M18 46 Q18 32 32 32 Q46 32 46 46 Z" />
      {/* Persona izquierda */}
      <circle cx="12" cy="22" r="6" />
      <path d="M2 46 Q2 35 12 35 Q18 35 20 38" />
      {/* Persona derecha */}
      <circle cx="52" cy="22" r="6" />
      <path d="M62 46 Q62 35 52 35 Q46 35 44 38" />
    </svg>
  );
}

function IconoCapacitacion({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      {/* Pizarrón */}
      <rect x="6" y="8" width="52" height="36" rx="3" />
      {/* Soporte */}
      <line x1="32" y1="44" x2="32" y2="54" stroke="currentColor" strokeWidth="3" />
      <line x1="20" y1="54" x2="44" y2="54" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      {/* Rayo en la pizarra */}
      <path d="M30 16 L26 26 L31 26 L27 36 L36 22 L31 22 Z" fill="rgba(255,255,255,0.7)" />
    </svg>
  );
}

function IconoRecarga({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      {/* Estación de carga */}
      <rect x="16" y="8" width="24" height="44" rx="4" />
      <rect x="20" y="14" width="16" height="12" rx="2" />
      {/* Cable */}
      <path d="M40 28 Q52 28 52 36 L52 44" strokeLinecap="round" />
      {/* Conector */}
      <rect x="48" y="44" width="8" height="10" rx="2" fill="currentColor" stroke="none" />
      {/* Rayo en pantalla */}
      <path d="M26 18 L24 24 L28 24 L26 30" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconoMercado({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      {/* Gráfico de crecimiento */}
      <polyline points="8,52 20,36 32,42 44,20 56,12" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* Puntos */}
      <circle cx="8"  cy="52" r="3" />
      <circle cx="20" cy="36" r="3" />
      <circle cx="32" cy="42" r="3" />
      <circle cx="44" cy="20" r="3" />
      <circle cx="56" cy="12" r="3" />
      {/* Ejes */}
      <line x1="6" y1="56" x2="58" y2="56" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round" />
      <line x1="6" y1="6"  x2="6"  y2="56" strokeWidth="2.5" stroke="currentColor" strokeLinecap="round" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: HERO BANNER
   Guía §5: fondo negro+degradado, acento lateral rojo, breadcrumb
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
          <span className="text-white">Movilidad Eléctrica</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Movilidad Eléctrica
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-4">
          Referentes en electromovilidad
        </p>

        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base text-gray-300 leading-relaxed">
            Baterías · Celdas de combustible H₂
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mt-1 max-w-2xl">
            Nos especializamos en el sector de movilidad urbana y transporte
            desde distintos ángulos, desarrollando soluciones integrales para la
            transición hacia la electromovilidad en Uruguay y la región.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   NAVEGACIÓN INTERNA — Guía §5: sticky top-[88px]
══════════════════════════════════════════════════════════════════════════════ */
const ANCLAS = [
  { etiqueta: "Reconocimientos",       href: "#reconocimientos" },
  { etiqueta: "Especialización",       href: "#especializacion" },
  { etiqueta: "Infraestructura",       href: "#infraestructura" },
  { etiqueta: "Mercado B2B",           href: "#mercado-b2b"     },
  { etiqueta: "Cámara Uruguayo-Alemana", href: "#camara"        },
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
   SECCIÓN: RECONOCIMIENTOS
   Fondo rojo — Guía §4.4: gradiente rojo, texto blanco, separador white/40
══════════════════════════════════════════════════════════════════════════════ */
const RECONOCIMIENTOS = [
  {
    id: "renault-nissan",
    Icono: IconoAuto,
    titulo: "Grupo Renault Nissan",
    detalle: "Principal asesor técnico y comercial 2017–2019",
  },
  {
    id: "emo-nissan",
    Icono: IconoCertificado,
    titulo: "Operador técnico certificado",
    detalle: "Nissan e-mobility — Primera EMO certificada del país",
  },
  {
    id: "camara-industria",
    Icono: IconoGrupo,
    titulo: "Cámara de Industria y Comercio",
    detalle: "Integrantes del grupo de movilidad eléctrica Uruguayo-Alemana",
  },
  {
    id: "capacitaciones",
    Icono: IconoCapacitacion,
    titulo: "Capacitaciones y disertaciones",
    detalle: "Formación especializada en electromovilidad y nuevas tecnologías",
  },
];

function SeccionReconocimientos() {
  return (
    <section
      id="reconocimientos"
      className="py-16 relative overflow-hidden scroll-mt-[140px]"
      style={{ backgroundColor: "#ca3517" }}
      aria-label="Reconocimientos y credenciales"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#8a2410] opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-white/70 font-bold uppercase tracking-widest text-xs mb-3">
            Trayectoria y credenciales
          </p>
          <h2 className="text-3xl font-bold text-white">Reconocimientos</h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {RECONOCIMIENTOS.map((item) => (
            <article
              key={item.id}
              className="flex flex-col items-center text-center text-white bg-white/10 rounded-xl p-7 border border-white/20 backdrop-blur-sm"
            >
              <item.Icono className="w-14 h-14 mb-4 text-white" />
              <div className="w-10 h-0.5 bg-white/40 mb-4" />
              <h3 className="font-bold text-base mb-2 leading-snug">{item.titulo}</h3>
              <p className="text-white/80 text-sm leading-relaxed">{item.detalle}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: ESPECIALIZACIÓN
   bg-white — Guía §4.1, encabezado §4.2
══════════════════════════════════════════════════════════════════════════════ */
const AREAS_ESPECIALIZACION = [
  {
    id: "car-sharing",
    Icono: IconoAuto,
    titulo: "Car Sharing Eléctrico",
    descripcion:
      "Estudios de mercado de car sharing basados en vehículos eléctricos, analizando viabilidad, demanda y modelos de negocio para Uruguay.",
  },
  {
    id: "celdas-hidrogeno",
    Icono: IconoRecarga,
    titulo: "Transporte con Celdas H₂",
    descripcion:
      "Estudios de transporte con celdas de combustible de hidrógeno, evaluando su potencial como vector energético en la movilidad urbana.",
  },
  {
    id: "sistemas-carga",
    Icono: IconoRecarga,
    titulo: "Sistemas de Carga",
    descripcion:
      "Evaluación de sistemas de carga de vehículos eléctricos. Propuestas y estudios sobre infraestructura. Soluciones llave en mano.",
  },
  {
    id: "motos-electricas",
    Icono: IconoMercado,
    titulo: "Motos Eléctricas",
    descripcion:
      "Estudio de mercado de motos eléctricas en Uruguay, con análisis de adopción, beneficios operativos y oportunidades de negocio.",
  },
];

function SeccionEspecializacion() {
  return (
    <section id="especializacion" className="py-16 bg-white scroll-mt-[140px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoAuto className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Especialización</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-3xl">
          Nos especializamos en el sector de movilidad urbana y transporte desde
          distintos ángulos. Participamos en la realización de estudios en las
          siguientes áreas:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AREAS_ESPECIALIZACION.map((area) => (
            <article
              key={area.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              <div className="bg-[#ca3517] p-6 text-white flex flex-col items-center text-center">
                <area.Icono className="w-10 h-10 mb-3" />
                <h3 className="text-base font-bold leading-snug">{area.titulo}</h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed">{area.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: INFRAESTRUCTURA DE CARGA
   bg-gray-50 — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
function SeccionInfraestructura() {
  return (
    <section id="infraestructura" className="py-16 bg-gray-50 scroll-mt-[140px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoRecarga className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Infraestructura de Carga</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <p className="text-gray-600 leading-relaxed text-base">
              Realizamos propuestas y estudios sobre infraestructura de carga de
              vehículos eléctricos. Brindamos{" "}
              <strong className="text-gray-900">soluciones llave en mano</strong> con
              la instalación de sistemas de alimentación para vehículos eléctricos.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Junto a <strong className="text-gray-900">Renault Uruguay</strong> firmamos
              un acuerdo para el desarrollo de la movilidad eléctrica en el país,
              consolidando nuestra posición como referentes del sector.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-6 border-t-4 border-[#ca3517] shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-2">Diagnóstico</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Análisis de necesidades y estudio de viabilidad de la infraestructura
                de carga para cada proyecto.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-t-4 border-[#ca3517] shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-2">Diseño</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Selección de tecnología y diseño del sistema de carga adaptado
                a las necesidades del cliente.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-t-4 border-[#ca3517] shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-2">Instalación</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Ejecución llave en mano de la instalación de sistemas de
                alimentación para vehículos eléctricos.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border-t-4 border-[#ca3517] shadow-sm">
              <h3 className="font-bold text-gray-900 text-base mb-2">Seguimiento</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Monitoreo del desempeño del sistema y soporte técnico
                post-instalación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: MERCADO B2B
   bg-white — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
function SeccionMercadoB2B() {
  return (
    <section id="mercado-b2b" className="py-16 bg-white scroll-mt-[140px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoMercado className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Mercado B2B</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-gray-600 leading-relaxed text-base">
              SEG participa en el mercado de vehículos eléctricos en el modelo B2B.
              Somos la{" "}
              <strong className="text-gray-900">
                primera EMO de Nissan (Operador de Movilidad Eléctrica) certificada
              </strong>
              , previa llegada de su flota de vehículos eléctricos al mercado uruguayo.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Esta certificación nos posiciona como referentes técnicos y comerciales
              en la transición hacia la electromovilidad, brindando asesoramiento
              especializado a empresas y flotas corporativas.
            </p>
          </div>

          <div className="bg-gray-900 rounded-xl p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-[#ca3517] rounded-full p-2 flex-shrink-0">
                <IconoCertificado className="w-8 h-8 text-white" />
              </div>
              <div>
                <p className="text-white/60 text-xs uppercase tracking-widest">Certificación oficial</p>
                <h3 className="font-black text-lg leading-tight">EMO Nissan</h3>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 border-b border-white/10 pb-3">
                <span className="text-[#ca3517] font-bold mt-0.5 flex-shrink-0">›</span>
                <span className="text-gray-300">Primera EMO certificada de Nissan en Uruguay</span>
              </div>
              <div className="flex items-start gap-3 border-b border-white/10 pb-3">
                <span className="text-[#ca3517] font-bold mt-0.5 flex-shrink-0">›</span>
                <span className="text-gray-300">Principal asesor técnico y comercial del Grupo Renault Nissan 2017–2019</span>
              </div>
              <div className="flex items-start gap-3 border-b border-white/10 pb-3">
                <span className="text-[#ca3517] font-bold mt-0.5 flex-shrink-0">›</span>
                <span className="text-gray-300">Modelo de negocio B2B orientado a flotas corporativas</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-[#ca3517] font-bold mt-0.5 flex-shrink-0">›</span>
                <span className="text-gray-300">Acuerdo de desarrollo con Renault Uruguay</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: CÁMARA URUGUAYO-ALEMANA
   bg-gray-50 — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
function SeccionCamara() {
  return (
    <section id="camara" className="py-16 bg-gray-50 scroll-mt-[140px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoGrupo className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Cámara Uruguayo-Alemana</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <p className="text-gray-600 leading-relaxed text-base">
              Formamos parte del{" "}
              <strong className="text-gray-900">
                grupo de trabajo de movilidad eléctrica de la Cámara Uruguayo-Alemana
              </strong>
              , grupo que reúne empresas líderes para el desarrollo de la movilidad
              eléctrica en Uruguay.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              En este espacio se realizan interacciones con ministerios,
              municipalidades, UTE y autoridades en general, contribuyendo
              activamente a la definición de políticas públicas en materia de
              electromovilidad.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#ca3517] mb-5">
              Interacciones institucionales
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Ministerios",
                "Municipalidades",
                "UTE",
                "Autoridades regulatorias",
                "Empresas del sector",
                "Academia",
              ].map((actor) => (
                <div
                  key={actor}
                  className="bg-white rounded-lg px-4 py-3 border border-gray-100 shadow-sm flex items-center gap-3"
                >
                  <span className="w-2 h-2 bg-[#ca3517] rounded-full flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium">{actor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: CTA FINAL
   bg-black — Guía §5: cierre estándar
══════════════════════════════════════════════════════════════════════════════ */
function SeccionCTA() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-white/50 uppercase text-xs tracking-widest mb-4">
          SEG Ingeniería
        </p>
        <h2 className="text-3xl font-bold mb-4">
          ¿Necesita asesoramiento en movilidad eléctrica?
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Contáctenos para recibir asesoramiento técnico y comercial sobre
          vehículos eléctricos, infraestructura de carga y soluciones de
          electromovilidad para su empresa.
        </p>
        <Link
          href="/contacto"
          className="inline-block bg-[#ca3517] text-white px-10 py-3 rounded-full font-semibold hover:bg-[#a82d12] transition-colors duration-200"
        >
          Contactar a SEG
        </Link>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL — estructura según Guía §5
══════════════════════════════════════════════════════════════════════════════ */
export default function PaginaMovilidadElectrica() {
  return (
    <>
      <SeccionHero />
      <NavegacionInterna />
      <SeccionReconocimientos />
      <SeccionEspecializacion />
      <SeccionInfraestructura />
      <SeccionMercadoB2B />
      <SeccionCamara />
      <SeccionCTA />
    </>
  );
}
