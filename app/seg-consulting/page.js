import Link from "next/link";
import NavegacionSeccion from "@/components/NavegacionSeccion";

export const metadata = {
  title: "SEG Consulting — SEG Ingeniería",
  description:
    "Referentes regionales en consultoría energética. Programas de Eficiencia Energética, Medición y Verificación (MRV) y estudios de factibilidad en Uruguay, Argentina y Latinoamérica.",
};

/* ══════════════════════════════════════════════════════════════════════════════
   ÍCONOS SVG — fill="currentColor", viewBox="0 0 64 64", aria-hidden="true"
══════════════════════════════════════════════════════════════════════════════ */

function IconoConsulting({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="8" y="16" width="48" height="36" rx="3" />
      <rect x="8" y="16" width="48" height="10" rx="3" />
      <rect x="24" y="6" width="6" height="12" rx="2" />
      <rect x="34" y="6" width="6" height="12" rx="2" />
      <rect x="16" y="34" width="10" height="3" rx="1.5" fill="rgba(255,255,255,0.6)" />
      <rect x="16" y="41" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.6)" />
      <path d="M38 36 L44 42 L54 30" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconoLamparita({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 4C20.95 4 12 12.95 12 24c0 7.5 3.9 14.05 9.75 17.85L23 44h18l1.25-2.15C48.1 38.05 52 31.5 52 24 52 12.95 43.05 4 32 4z" />
      <rect x="22" y="46" width="20" height="4" rx="2" />
      <rect x="24" y="52" width="16" height="4" rx="2" />
    </svg>
  );
}

function IconoIndustria({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4" y="30" width="56" height="28" rx="2" />
      <polygon points="4,30 18,16 18,30" />
      <polygon points="28,30 42,16 42,30" />
      <rect x="10" y="38" width="8" height="12" rx="1" fill="rgba(255,255,255,0.3)" />
      <rect x="28" y="38" width="8" height="12" rx="1" fill="rgba(255,255,255,0.3)" />
      <rect x="46" y="38" width="8" height="12" rx="1" fill="rgba(255,255,255,0.3)" />
      <rect x="24" y="10" width="16" height="22" rx="1" fill="rgba(255,255,255,0.2)" />
    </svg>
  );
}

function IconoMRV({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <circle cx="32" cy="32" r="26" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 33l8 8 16-18" />
    </svg>
  );
}

function IconoGrafico({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4"  y="34" width="10" height="22" rx="2" />
      <rect x="18" y="22" width="10" height="34" rx="2" />
      <rect x="32" y="10" width="10" height="46" rx="2" />
      <rect x="46" y="18" width="10" height="38" rx="2" />
      <rect x="2"  y="57" width="60" height="3" rx="1.5" />
    </svg>
  );
}

function IconoGlobo({ className = "w-8 h-8" }) {
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

function IconoEdificio({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="10" y="10" width="44" height="50" rx="2" />
      <rect x="10" y="10" width="44" height="8" />
      <rect x="18" y="26" width="8" height="8" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="30" y="26" width="8" height="8" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="42" y="26" width="8" height="8" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="18" y="40" width="8" height="8" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="30" y="40" width="8" height="8" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="42" y="40" width="8" height="8" rx="1" fill="rgba(255,255,255,0.4)" />
      <rect x="26" y="52" width="12" height="8" rx="1" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}

function IconoAgua({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 6 C32 6 10 32 10 44 a22 22 0 0 0 44 0 C54 32 32 6 32 6z" />
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
          <span className="text-white">SEG Consulting</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          SEG Consulting
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-4">
          Referentes regionales en consultoría energética
        </p>

        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
            Eficiencia Energética · MRV · Energías Renovables
          </p>
          <p className="text-sm text-gray-400 leading-relaxed mt-1 max-w-2xl">
            Gracias a la experiencia generada y su capital humano, SEG Ingeniería
            se ha convertido en un referente para la región, desarrollando programas
            de Eficiencia Energética y Medición, Reporte y Verificación (MRV) en
            Uruguay, Argentina y varios países de Latinoamérica.
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
  { etiqueta: "Propuesta de Valor",  href: "#propuesta-valor" },
  { etiqueta: "Uruguay",             href: "#uruguay"         },
  { etiqueta: "Argentina",           href: "#argentina"       },
  { etiqueta: "Internacional",       href: "#internacional"   },
  { etiqueta: "Clientes",            href: "#clientes"        },
];


/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: PROPUESTA DE VALOR — bg-white — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
const SERVICIOS = [
  {
    id: "auditorias",
    Icono: IconoGrafico,
    titulo: "Auditorías Energéticas",
    descripcion:
      "Relevamiento del consumo y análisis del perfil energético de organizaciones industriales, edilicias y agropecuarias para identificar oportunidades de mejora.",
  },
  {
    id: "mrv",
    Icono: IconoMRV,
    titulo: "Medición y Verificación (MRV)",
    descripcion:
      "Programas de Medición, Reporte y Verificación para reportar esfuerzos climáticos ante la Convención Marco de Naciones Unidas y organismos internacionales.",
  },
  {
    id: "factibilidad",
    Icono: IconoConsulting,
    titulo: "Estudios de Factibilidad",
    descripcion:
      "Análisis técnico-económicos de proyectos de iluminación LED, micro-hidro, solar, eólica y biogás. Evaluación de recursos y análisis de rentabilidad.",
  },
  {
    id: "simsee",
    Icono: IconoGlobo,
    titulo: "Simulación Energética",
    descripcion:
      "Utilización del software SimSEE para análisis de escenarios del sistema electro-energético, evaluación del precio SPOT y simulación de costos a largo plazo.",
  },
];

function SeccionPropuestaValor() {
  return (
    <section id="propuesta-valor" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoConsulting className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Propuesta de Valor</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="max-w-4xl mb-12">
          <p className="text-gray-600 leading-relaxed text-base mb-4">
            SEG Ingeniería ha creado un sector de consultoría especializada en
            energía, generando capacidades para desarrollar programas de{" "}
            <strong className="text-gray-900">Eficiencia Energética</strong>,{" "}
            <strong className="text-gray-900">Medición y Verificación (MRV)</strong> y
            estudios de factibilidad para proyectos renovables en la región.
          </p>
          <p className="text-gray-600 leading-relaxed text-base">
            Suscribiendo a los{" "}
            <strong className="text-gray-900">
              ODS (Objetivos de Desarrollo Sostenible)
            </strong>
            , SEG promueve un entorno energéticamente eficiente, sustentable y
            renovable, exportando el conocimiento adquirido durante más de dos
            décadas de trabajo en Uruguay hacia toda Latinoamérica.
          </p>
        </div>

        {/* Cards de servicios — Guía §6.1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICIOS.map((srv) => (
            <article
              key={srv.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              <div className="bg-[#ca3517] p-6 text-white flex flex-col items-center text-center">
                <srv.Icono className="w-10 h-10 mb-3" />
                <h3 className="text-base font-bold leading-snug">{srv.titulo}</h3>
              </div>
              <div className="p-5">
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
   SECCIÓN: PROYECTOS EN URUGUAY — bg-gray-50 — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
const CATEGORIAS_UY = [
  {
    id: "iluminacion",
    Icono: IconoLamparita,
    titulo: "Iluminación Pública",
    proyectos: [
      {
        cliente: "Intendencia de Canelones",
        descripcion:
          "Reemplazo de 45.000 luminarias + incorporación de 15.000 nuevas a LED. Sistema de telegestión. Análisis técnico de ofertas.",
      },
      {
        cliente: "Intendencia de Lavalleja",
        descripcion:
          "Reemplazo de 8.500 luminarias a LED. Análisis de ofertas técnicas y pruebas en campo.",
      },
      {
        cliente: "Intendencia de Río Negro",
        descripcion:
          "Reemplazo de 4.500 luminarias a LED. Definición de requisitos técnicos y análisis de ofertas.",
      },
    ],
  },
  {
    id: "industrial",
    Icono: IconoIndustria,
    titulo: "Sector Industrial y Agropecuario",
    proyectos: [
      {
        cliente: "CONAPROLE",
        descripcion:
          "Programa de auditorías energéticas en 500+ establecimientos lecheros. Evaluación de incorporación de energía solar, eólica y biogás.",
      },
      {
        cliente: "Corporación Frigorífica del Uruguay",
        descripcion:
          "Estudio de modulación de demanda y optimización del aprovechamiento de generador eólico.",
      },
      {
        cliente: "DURULTE",
        descripcion:
          "Análisis de desempeño de planta fotovoltaica de 514 kWp. Registros de generación y medición de disponibilidad técnica.",
      },
      {
        cliente: "MIEM — Encuesta Industrial",
        descripcion:
          "Relevamiento sobre uso de la energía en 340+ empresas del sector industrial uruguayo.",
      },
    ],
  },
  {
    id: "energetico",
    Icono: IconoGrafico,
    titulo: "Sector Energético y Regulatorio",
    proyectos: [
      {
        cliente: "MIEM-DNE",
        descripcion:
          "Regularización de usuarios de energía eléctrica y análisis de 6 casos similares en América Latina. Estimación de componente nacional en proyectos solar, eólica y biomasa.",
      },
      {
        cliente: "URSEA",
        descripcion:
          "Determinación de remuneración de instalaciones conversoras de frecuencia entre Uruguay y Brasil (Melo y Rivera).",
      },
      {
        cliente: "Gasoducto Cruz del Sur",
        descripcion:
          "Análisis de diferentes escenarios de evolución del sistema electro-energético en horizonte de mediano plazo (SimSEE).",
      },
      {
        cliente: "Nobilis / Bioenergy / Rospide",
        descripcion:
          "Evaluación del precio SPOT de energía en horizontes de 12 a 20 años mediante software SimSEE para simulación de costos futuros.",
      },
    ],
  },
  {
    id: "renovables",
    Icono: IconoAgua,
    titulo: "Energías Renovables y Micro-Hidro",
    proyectos: [
      {
        cliente: "Estancia San Carlos",
        descripcion:
          "Estudio de pre-factibilidad técnico-económico para aprovechamiento energético de embalse mediante micro turbina hidráulica.",
      },
      {
        cliente: "Estancia Bella Vista",
        descripcion:
          "Análisis técnico-económico para proyecto hidroeléctrico. Evaluación del recurso del embalse y cotización de equipamiento.",
      },
      {
        cliente: "Estancia Magaré",
        descripcion:
          "Análisis técnico-económico para proyecto hidroeléctrico con evaluación de múltiples embalses.",
      },
      {
        cliente: "MIEM — Celdas de Combustible H₂",
        descripcion:
          "Estudio económico-financiero de celdas de combustible de hidrógeno verde para el mercado uruguayo.",
      },
    ],
  },
];

function SeccionUruguay() {
  return (
    <section id="uruguay" className="py-16 bg-gray-50 scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="text-[#ca3517]">
            <IconoEdificio className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Proyectos en Uruguay</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>
        <p className="text-gray-600 text-base mb-10 max-w-3xl">
          Principal mercado de operación con proyectos en iluminación pública,
          sector industrial, regulación energética y energías renovables.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {CATEGORIAS_UY.map((cat) => (
            <article
              key={cat.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              {/* Cabecera roja — Guía §6.1 */}
              <div className="bg-[#ca3517] p-6 text-white flex items-center gap-4">
                <cat.Icono className="w-10 h-10 flex-shrink-0" />
                <h3 className="text-lg font-bold leading-snug">{cat.titulo}</h3>
              </div>

              {/* Lista de proyectos */}
              <div className="divide-y divide-gray-100">
                {cat.proyectos.map((proy) => (
                  <div key={proy.cliente} className="px-6 py-4">
                    <p className="font-semibold text-gray-900 text-sm mb-1">
                      <span className="text-[#ca3517] mr-1.5">›</span>
                      {proy.cliente}
                    </p>
                    <p className="text-gray-600 text-xs leading-relaxed pl-4">
                      {proy.descripcion}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        {/* Movilidad Urbana — proyecto especial */}
        <div className="mt-8 bg-white rounded-xl p-7 border-t-4 border-[#ca3517] shadow-sm">
          <h3 className="font-bold text-gray-900 text-base mb-2">
            Política Nacional de Movilidad Urbana
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            Grupo de Trabajo del Proyecto con 4 Ministerios. Reporte de inventario
            y evaluación para la Política Nacional de Movilidad Urbana: perspectiva
            general de la situación urbana y evaluación detallada de sistemas de
            transporte.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: PROYECTOS EN ARGENTINA — bg-white — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
const PROYECTOS_ARG = [
  {
    id: "bm-ifc",
    cliente: "Banco Mundial / IFC",
    subtitulo: "Corporación Financiera Internacional",
    descripcion:
      "Consultoría de Eficiencia Energética: auditorías energéticas en 50 edificios con proyectos de iluminación en Buenos Aires.",
  },
  {
    id: "supervielle",
    cliente: "Banco Supervielle",
    subtitulo: "Sector bancario — 150+ sucursales",
    descripcion:
      "Análisis del rendimiento energético. Auditoría con grado de inversión y análisis tarifario en más de 150 sucursales.",
  },
  {
    id: "santander",
    cliente: "Banco Santander",
    subtitulo: "5 edificios corporativos + 300+ sucursales",
    descripcion:
      "Auditorías energéticas con grado de inversión en 5 edificios corporativos y análisis tarifario en más de 300 sucursales.",
  },
  {
    id: "aysa",
    cliente: "AySA",
    subtitulo: "Aguas y Saneamientos Argentinos",
    descripcion:
      "Análisis de comportamiento energético del sistema de bombeo, distribución y tratamiento de agua en la Ciudad de Buenos Aires.",
  },
  {
    id: "apra",
    cliente: "APrA-CABA",
    subtitulo: "Agencia de Protección Ambiental",
    descripcion:
      "Evaluación del potencial de proyectos de iluminación LED mediante muestreo para auditorías energéticas en la Ciudad Autónoma de Buenos Aires.",
  },
];

function SeccionArgentina() {
  return (
    <section id="argentina" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="text-[#ca3517]">
            <IconoEdificio className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Proyectos en Argentina</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>
        <p className="text-gray-600 text-base mb-10 max-w-3xl">
          Proyectos de auditoría energética en el sector bancario y de servicios
          públicos en la Ciudad de Buenos Aires.
        </p>

        {/* Cards — Guía §6.4: borde superior rojo */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROYECTOS_ARG.map((proy) => (
            <div
              key={proy.id}
              className="bg-gray-50 rounded-xl p-7 border-t-4 border-[#ca3517]"
            >
              <h3 className="font-bold text-gray-900 text-base mb-1">{proy.cliente}</h3>
              <p className="text-[#ca3517] text-xs font-bold uppercase tracking-wide mb-3">
                {proy.subtitulo}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed">{proy.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: INTERNACIONAL — fondo rojo — Guía §4.4
══════════════════════════════════════════════════════════════════════════════ */
const PAISES_INT = [
  {
    id: "dominicana",
    pais: "República Dominicana",
    cliente: "Ministerio de Energía y Minas",
    descripcion:
      "Programa MRV (Measurement, Report and Verification) para reportar esfuerzos climáticos ante la Convención Marco de Naciones Unidas.",
  },
  {
    id: "belice",
    pais: "Belice",
    cliente: "Energy Unit — Ministry of Energy, Science & Technology",
    descripcion:
      "Programa MRV, entrenamientos en auditorías energéticas y proyectos demostrativos para la transición hacia energías limpias.",
  },
  {
    id: "guyana",
    pais: "Guyana",
    cliente: "Guyana Energy Agency (GEA)",
    descripcion:
      "Entrenamientos en auditorías energéticas, proyectos demostrativos y 3 auditorías energéticas completas con implementación.",
  },
];

function SeccionInternacional() {
  return (
    <section
      id="internacional"
      className="py-16 relative overflow-hidden scroll-mt-[160px]"
      style={{ backgroundColor: "#ca3517" }}
      aria-label="Proyectos internacionales"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#8a2410] opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-white/70 font-bold uppercase tracking-widest text-xs mb-3">
            Presencia regional
          </p>
          <h2 className="text-3xl font-bold text-white">Proyectos Internacionales</h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {PAISES_INT.map((item) => (
            <article
              key={item.id}
              className="bg-white/10 border border-white/20 rounded-xl p-7 text-white backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-white rounded-full flex-shrink-0" />
                <p className="font-black text-lg leading-tight">{item.pais}</p>
              </div>
              <p className="text-white/70 text-xs font-bold uppercase tracking-wide mb-3">
                {item.cliente}
              </p>
              <p className="text-white/85 text-sm leading-relaxed">{item.descripcion}</p>
            </article>
          ))}
        </div>

        <div className="text-center">
          <p className="text-white/60 text-sm">
            Programas desarrollados en coordinación con la{" "}
            <strong className="text-white">GIZ</strong> (Agencia Alemana de
            Cooperación Internacional) y la{" "}
            <strong className="text-white">OLADE</strong> (Organización
            Latinoamericana de Energía).
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: CLIENTES — bg-gray-50 — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
const LISTA_CLIENTES = [
  "CONAPROLE",
  "MIEM",
  "MIEM-DNE",
  "URSEA",
  "AySA",
  "Banco Mundial / IFC",
  "Banco Supervielle",
  "Banco Santander",
  "APrA-CABA",
  "Gasoducto Cruz del Sur",
  "Corporación Frigorífica del Uruguay",
  "DURULTE",
  "Nobilis",
  "Bioenergy",
  "Rospide Sociedad de Bolsa",
  "Intendencia de Canelones",
  "Intendencia de Lavalleja",
  "Intendencia de Río Negro",
  "GIZ",
  "OLADE",
  "Fundación Bariloche",
  "Guyana Energy Agency",
  "Ministerio de Energía y Minas (RD)",
  "Aquanima",
];

function SeccionClientes() {
  return (
    <section id="clientes" className="py-16 bg-gray-50 scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="text-[#ca3517]">
            <IconoGlobo className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Nuestros Clientes</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>
        <p className="text-gray-600 text-base mb-10 max-w-3xl">
          Organismos públicos, empresas privadas, organismos internacionales y
          gobiernos departamentales que han confiado en SEG Consulting para sus
          proyectos energéticos.
        </p>

        <div className="flex flex-wrap gap-3">
          {LISTA_CLIENTES.map((cliente) => (
            <span
              key={cliente}
              className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
            >
              {cliente}
            </span>
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
          SEG Ingeniería
        </p>
        <h2 className="text-3xl font-bold mb-4">
          ¿Necesita una consultoría energética?
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Contáctenos para desarrollar programas de Eficiencia Energética, MRV
          o estudios de factibilidad para su organización.
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
   PÁGINA PRINCIPAL
══════════════════════════════════════════════════════════════════════════════ */
export default function PaginaSEGConsulting() {
  return (
    <>
      <SeccionHero />
      <NavegacionSeccion anclas={ANCLAS} />
      <SeccionPropuestaValor />
      <SeccionUruguay />
      <SeccionArgentina />
      <SeccionInternacional />
      <SeccionClientes />
      <SeccionCTA />
    </>
  );
}
