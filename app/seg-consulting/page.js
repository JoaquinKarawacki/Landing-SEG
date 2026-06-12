import Link from "next/link";
import NavegacionSeccion from "@/components/NavegacionSeccion";
import ExperienciaGrid from "./ExperienciaGrid";
import FormularioConsulting from "./FormularioConsulting";

export const metadata = {
  title: "SEG Consulting — SEG Ingeniería",
  description:
    "Consultoría técnica para la transición energética en América Latina y el Caribe. Servicios para gobiernos, organismos multilaterales y empresas privadas.",
};

/* ── ÍCONOS ──────────────────────────────────────────────────────────────── */

function IconoGlobo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <circle cx="32" cy="32" r="26" />
      <ellipse cx="32" cy="32" rx="13" ry="26" />
      <line x1="6" y1="32" x2="58" y2="32" />
      <line x1="6" y1="20" x2="58" y2="20" />
      <line x1="6" y1="44" x2="58" y2="44" />
    </svg>
  );
}

function IconoEstrella({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <polygon points="32,4 39,24 60,24 44,37 50,58 32,45 14,58 20,37 4,24 25,24" />
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

function IconoEquipo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <circle cx="22" cy="20" r="10" />
      <circle cx="42" cy="20" r="10" />
      <path d="M4 56c0-10 8-18 18-18h20c10 0 18 8 18 18H4z" />
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

function IconoIndustria({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4" y="30" width="56" height="28" rx="2" />
      <polygon points="4,30 18,16 18,30" />
      <polygon points="28,30 42,16 42,30" />
      <rect x="10" y="38" width="8" height="12" rx="1" fill="rgba(255,255,255,0.3)" />
      <rect x="28" y="38" width="8" height="12" rx="1" fill="rgba(255,255,255,0.3)" />
      <rect x="46" y="38" width="8" height="12" rx="1" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}

function IconoHidrogeno({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 6C32 6 10 32 10 44a22 22 0 0 0 44 0C54 32 32 6 32 6z" />
      <path d="M22 38 Q32 28 42 38" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconoMovilidad({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="8" y="22" width="48" height="24" rx="6" />
      <rect x="14" y="16" width="36" height="12" rx="4" />
      <circle cx="18" cy="48" r="7" />
      <circle cx="46" cy="48" r="7" />
      <circle cx="18" cy="48" r="3" fill="white" />
      <circle cx="46" cy="48" r="3" fill="white" />
      <rect x="28" y="24" width="2" height="16" rx="1" fill="rgba(255,255,255,0.4)" />
    </svg>
  );
}

function IconoLupa({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <circle cx="28" cy="28" r="18" />
      <line x1="42" y1="42" x2="58" y2="58" strokeLinecap="round" />
    </svg>
  );
}

/* ── DATOS ───────────────────────────────────────────────────────────────── */

const ANCLAS = [
  { etiqueta: "Propuesta de valor", href: "#propuesta-valor" },
  { etiqueta: "Servicios",          href: "#servicios"        },
  { etiqueta: "Experiencia",        href: "#experiencia"      },
  { etiqueta: "Clientes y socios",  href: "#clientes"         },
  { etiqueta: "Contacto",           href: "#contacto"         },
];

const CHIPS = [
  "Eficiencia Energética",
  "Energías Renovables",
  "Sistemas Eléctricos",
  "Huella de carbono",
  "Hidrógeno Verde",
  "Movilidad Sostenible",
];

const PILARES = [
  {
    id: "regional",
    Icono: IconoGlobo,
    titulo: "Conocimiento regional profundo",
    descripcion: "Llevamos más de 10 años trabajando en América Latina y el Caribe, con presencia en más de 13 países.",
  },
  {
    id: "rigor",
    Icono: IconoMRV,
    titulo: "Rigor técnico en cada etapa",
    descripcion: "Nuestros equipos combinan ingeniería, economía y política energética. Aplicamos metodologías internacionales con precisión y adaptación local, desde la factibilidad hasta la implementación.",
  },
  {
    id: "confianza",
    Icono: IconoEstrella,
    titulo: "Confianza de instituciones exigentes",
    descripcion: "Trabajamos con el Banco Mundial, BID, IFC, GIZ y Naciones Unidas. Esa confianza refleja nuestra capacidad de operar bajo estándares internacionales de calidad y transparencia.",
  },
  {
    id: "equipo",
    Icono: IconoEquipo,
    titulo: "Equipo multidisciplinario con foco en resultados",
    descripcion: "Reunimos especialistas en sistemas eléctricos, eficiencia energética, regulación, clima y finanzas.",
  },
];

const SERVICIOS_PUBLICO = [
  "Auditorías energéticas (Nivel I, II y III)",
  "Programas de eficiencia energética en edificios públicos",
  "Certificación de ahorros mediante CMVP",
  "Implementación de ISO 50001",
  "Generación distribuida y energía solar fotovoltaica",
  "Sistemas MRV (Monitoreo, Reporte y Verificación)",
  "Iniciativas de descarbonización y clima",
  "Especificaciones técnicas para licitaciones públicas",
  "Capacitación técnica y transferencia de capacidades",
];

const SERVICIOS_CORPORATIVO = [
  "Auditorías energéticas (Nivel I, II y III)",
  "Implementación de ISO 50001 y sistemas de gestión de energía",
  "Certificación de ahorros mediante M&V",
  "Optimización tarifaria y estrategias de compra de energía",
  "Integración de energías renovables y factibilidad solar FV",
  "Estrategias de descarbonización y huella de carbono (ISO 14064)",
  "Electrificación de procesos industriales",
  "Indicadores energéticos y benchmarking",
];

const AREAS_EMERGENTES = [
  {
    id: "hidrogeno",
    Icono: IconoHidrogeno,
    titulo: "Hidrógeno Verde y Tecnologías Power-to-X",
    descripcion: "Análisis técnico y económico de hidrógeno verde, e-fuels, almacenamiento de energía BESS y tecnologías emergentes, orientado a gobiernos e inversores en etapa de evaluación.",
    items: [],
  },
  {
    id: "movilidad",
    Icono: IconoMovilidad,
    titulo: "Movilidad Sostenible",
    descripcion: "Apoyo técnico, regulatorio y financiero a iniciativas de descarbonización del transporte — flotas, transporte público, vehículos pesados e infraestructura de carga.",
    nota: "Proyecto actual: Política Nacional de Movilidad Urbana — Grupo de Trabajo con 4 Ministerios",
  },
  {
    id: "duediligence",
    Icono: IconoLupa,
    titulo: "Due Diligence Técnico y Estudios de Factibilidad",
    descripcion: "Evaluaciones técnicas y económicas integrales para apoyar decisiones de inversión y financiamiento de proyectos energéticos.",
    items: [
      "Due diligence técnico",
      "Estudios de factibilidad y prefactibilidad",
      "Estimación CAPEX/OPEX",
      "Modelado energético",
      "Análisis de sensibilidad financiera",
    ],
  },
];

const PROYECTOS = [
  {
    id: 1,
    nombre: "Política Nacional de Movilidad Urbana",
    cliente: "Grupo de Trabajo con 4 Ministerios",
    paises: ["Uruguay"],
    año: "2022",
    area: "Movilidad",
    tipo: "Gobierno",
    descripcion: "Reporte de inventario y evaluación para la Política Nacional de Movilidad Urbana: perspectiva general de la situación urbana y evaluación detallada de sistemas de transporte.",
  },
  {
    id: 2,
    nombre: "Auditorías energéticas industriales y agropecuarias",
    cliente: "CONAPROLE",
    paises: ["Uruguay"],
    año: "2019",
    area: "Eficiencia Energética",
    tipo: "Privado",
    descripcion: "Programa de auditorías energéticas en más de 500 establecimientos lecheros. Evaluación de incorporación de energía solar, eólica y biogás.",
  },
  {
    id: 3,
    nombre: "Simulación del sistema electro-energético",
    cliente: "Gasoducto Cruz del Sur / MIEM-DNE",
    paises: ["Uruguay"],
    año: "2020",
    area: "Due Diligence",
    tipo: "Gobierno",
    descripcion: "Análisis de escenarios del sistema electro-energético mediante software SimSEE. Evaluación del precio SPOT de energía y simulación de costos a largo plazo.",
  },
  {
    id: 4,
    nombre: "Estudio de celdas de combustible de hidrógeno verde",
    cliente: "MIEM",
    paises: ["Uruguay"],
    año: "2022",
    area: "Hidrógeno",
    tipo: "Gobierno",
    descripcion: "Estudio económico-financiero de celdas de combustible de hidrógeno verde para el mercado uruguayo.",
  },
  {
    id: 5,
    nombre: "Iluminación pública LED",
    cliente: "Intendencias de Canelones, Lavalleja y Río Negro",
    paises: ["Uruguay"],
    año: "2021",
    area: "Eficiencia Energética",
    tipo: "Gobierno",
    descripcion: "Análisis técnico y definición de requisitos para recambio de más de 58.000 luminarias a tecnología LED con sistemas de telegestión en tres departamentos.",
  },
  {
    id: 6,
    nombre: "Auditorías energéticas en edificios corporativos",
    cliente: "Banco Mundial / IFC",
    paises: ["Argentina"],
    año: "2018",
    area: "Eficiencia Energética",
    tipo: "Multilateral",
    descripcion: "Consultoría de eficiencia energética con auditorías en 50 edificios e implementación de proyectos de iluminación en Buenos Aires.",
  },
  {
    id: 7,
    nombre: "Auditorías energéticas en sucursales bancarias",
    cliente: "Banco Supervielle",
    paises: ["Argentina"],
    año: "2019",
    area: "Eficiencia Energética",
    tipo: "Privado",
    descripcion: "Análisis del rendimiento energético y auditorías con grado de inversión en más de 150 sucursales.",
  },
  {
    id: 8,
    nombre: "Optimización energética del sistema de agua",
    cliente: "AySA — Aguas y Saneamientos Argentinos",
    paises: ["Argentina"],
    año: "2020",
    area: "Eficiencia Energética",
    tipo: "Gobierno",
    descripcion: "Análisis del comportamiento energético del sistema de bombeo, distribución y tratamiento de agua en la Ciudad de Buenos Aires.",
  },
  {
    id: 9,
    nombre: "Programa MRV para la transición energética",
    cliente: "Ministerio de Energía y Minas",
    paises: ["Rep. Dominicana"],
    año: "2020",
    area: "Eficiencia Energética",
    tipo: "Gobierno",
    descripcion: "Programa de Medición, Reporte y Verificación para reportar esfuerzos climáticos ante la Convención Marco de Naciones Unidas.",
  },
  {
    id: 10,
    nombre: "Programa MRV y auditorías energéticas",
    cliente: "Energy Unit — Ministry of Energy",
    paises: ["Belice"],
    año: "2021",
    area: "Eficiencia Energética",
    tipo: "Gobierno",
    descripcion: "Programa MRV, entrenamientos en auditorías energéticas y proyectos demostrativos para la transición hacia energías limpias.",
  },
  {
    id: 11,
    nombre: "Auditorías energéticas e implementación",
    cliente: "Guyana Energy Agency (GEA)",
    paises: ["Guyana"],
    año: "2021",
    area: "Eficiencia Energética",
    tipo: "Gobierno",
    descripcion: "Entrenamientos en auditorías energéticas, proyectos demostrativos y 3 auditorías energéticas completas con implementación.",
  },
  {
    id: 12,
    nombre: "Diseño de EEMs y Solar FV en Edificios Públicos",
    cliente: "Organisation of the Eastern Caribbean States Commission (OECSC)",
    paises: ["Granada", "Santa Lucía"],
    año: "2025",
    area: "Eficiencia Energética",
    tipo: "Multilateral",
    descripcion: "Especificaciones técnicas, planos y documentos de licitación para 10 edificios públicos por país, incluyendo medidas de eficiencia y sistemas fotovoltaicos distribuidos.",
  },
];

const MULTILATERALES = [
  "Banco Mundial",
  "BID",
  "IFC",
  "GIZ",
  "OLADE",
  "UNIDO",
  "PNUD",
  "UNICEF",
  "UNEP",
];

const LISTA_CLIENTES = [
  "CONAPROLE", "MIEM", "MIEM-DNE", "URSEA", "AySA",
  "Banco Supervielle", "Banco Santander", "APrA-CABA",
  "Gasoducto Cruz del Sur", "Corporación Frigorífica del Uruguay",
  "DURULTE", "Nobilis", "Bioenergy", "Rospide Sociedad de Bolsa",
  "Intendencia de Canelones", "Intendencia de Lavalleja", "Intendencia de Río Negro",
  "Fundación Bariloche", "Guyana Energy Agency",
  "Ministerio de Energía y Minas (RD)", "Aquanima", "INVAP",
];

/* ── SECCIONES ───────────────────────────────────────────────────────────── */

function SeccionHero() {
  return (
    <section className="relative bg-black overflow-hidden py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ca3517]" />
      <div className="relative z-10 max-w-5xl mx-auto text-white">
        <nav className="mb-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#ca3517] transition-colors">Home</Link>
          <span className="mx-2 text-gray-600">›</span>
          <span className="text-white">SEG Consulting</span>
        </nav>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          SEG Consulting
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-6">
          Consultoría técnica para la transición energética en América Latina y el Caribe.
        </p>
        <div className="border-l-4 border-[#ca3517] pl-5 py-2 mb-8">
          <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
            Desde SEG Ingeniería, desarrollamos servicios de consultoría especializada para gobiernos,
            organismos multilaterales y empresas privadas — integrando ingeniería, análisis económico
            y política energética con más de dos décadas de experiencia regional.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {CHIPS.map(chip => (
            <span key={chip} className="border border-white/30 text-white/80 text-xs font-medium px-3 py-1 rounded-full">
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeccionPropuestaValor() {
  return (
    <section id="propuesta-valor" className="py-16 bg-white scroll-mt-[140px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]"><IconoEstrella className="w-8 h-8" /></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Lo que nos diferencia</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILARES.map(p => (
            <article key={p.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              <div className="bg-[#ca3517] p-6 text-white flex flex-col items-center text-center">
                <p.Icono className="w-10 h-10 mb-3" />
                <h3 className="text-sm font-bold leading-snug">{p.titulo}</h3>
              </div>
              <div className="p-5">
                <p className="text-gray-600 text-sm leading-relaxed">{p.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeccionServicios() {
  return (
    <section id="servicios" className="py-16 bg-gray-50 scroll-mt-[140px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]"><IconoEdificio className="w-8 h-8" /></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Servicios</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        {/* Segmentos principales */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Sector Público */}
          <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-[#ca3517] p-6 text-white flex items-center gap-4">
              <IconoEdificio className="w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold">Programas Energéticos para el Sector Público</h3>
                <p className="text-white/80 text-sm mt-1">Gobiernos nacionales, departamentales e instituciones</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Desarrollamos e implementamos programas de transición energética para gobiernos nacionales,
                departamentales e instituciones, integrando análisis técnico, apoyo regulatorio y fortalecimiento institucional.
              </p>
              <ul className="space-y-2">
                {SERVICIOS_PUBLICO.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#ca3517] font-bold mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* Corporativo */}
          <article className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
            <div className="bg-[#ca3517] p-6 text-white flex items-center gap-4">
              <IconoIndustria className="w-10 h-10 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-bold">Gestión Energética Corporativa</h3>
                <p className="text-white/80 text-sm mt-1">Clientes industriales, comerciales e institucionales</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 text-sm leading-relaxed mb-5">
                Servicios integrales de gestión energética y sostenibilidad orientados a mejorar el desempeño
                energético, reducir costos y avanzar en la descarbonización.
              </p>
              <ul className="space-y-2">
                {SERVICIOS_CORPORATIVO.map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#ca3517] font-bold mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>

        {/* Áreas emergentes */}
        <div className="mb-4">
          <p className="text-[#ca3517] font-bold uppercase tracking-widest text-sm mb-6">Áreas emergentes</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AREAS_EMERGENTES.map(area => (
              <article key={area.id} className="bg-white rounded-xl p-6 border-t-4 border-[#ca3517] shadow-sm">
                <div className="text-[#ca3517] mb-4"><area.Icono className="w-8 h-8" /></div>
                <h3 className="font-bold text-gray-900 text-sm leading-snug mb-3">{area.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{area.descripcion}</p>
                {area.nota && (
                  <p className="mt-3 text-xs text-[#ca3517] font-semibold border-t border-gray-100 pt-3">{area.nota}</p>
                )}
                {area.items?.length > 0 && (
                  <ul className="mt-3 space-y-1 border-t border-gray-100 pt-3">
                    {area.items.map(item => (
                      <li key={item} className="text-xs text-gray-600 flex items-start gap-1.5">
                        <span className="text-[#ca3517] flex-shrink-0">›</span>{item}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SeccionExperiencia() {
  return (
    <section id="experiencia" className="py-16 bg-white scroll-mt-[140px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-[#ca3517]"><IconoGlobo className="w-8 h-8" /></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Experiencia</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        {/* Presencia regional */}
        <div className="mb-10 bg-gray-900 rounded-xl px-8 py-7 text-white">
          <p className="text-[#ca3517] font-bold uppercase tracking-widest text-xs mb-3">Presencia regional</p>
          <p className="text-white font-bold text-lg mb-4">13+ países en América Latina y el Caribe</p>
          <div className="flex flex-wrap gap-2">
            {["Uruguay","Argentina","Rep. Dominicana","Belice","Guyana","Granada","Santa Lucía","Brasil","Chile","Colombia","Perú","México","Paraguay"].map(p => (
              <span key={p} className="border border-white/20 text-white/80 text-xs font-medium px-3 py-1 rounded-full">{p}</span>
            ))}
          </div>
        </div>

        <ExperienciaGrid proyectos={PROYECTOS} />
      </div>
    </section>
  );
}

function SeccionMetricas() {
  const metricas = [
    { numero: "13+",             label: "Países en ALC"                       },
    { numero: "10+",             label: "Años de experiencia regional"         },
    { numero: "Público + Privado", label: "Cartera de clientes diversificada"  },
    { numero: "BM · BID · IFC · GIZ", label: "Socios multilaterales estratégicos" },
  ];
  return (
    <section className="py-14 bg-[#ca3517]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center text-white">
          {metricas.map(m => (
            <div key={m.label}>
              <p className="text-3xl sm:text-4xl font-black mb-1 leading-none">{m.numero}</p>
              <p className="text-white/80 text-sm font-medium leading-snug">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeccionClientes() {
  return (
    <section id="clientes" className="py-16 bg-gray-50 scroll-mt-[140px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]"><IconoEstrella className="w-8 h-8" /></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Confían en nosotros</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        {/* Multilaterales */}
        <div className="mb-10">
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Organismos multilaterales</p>
          <div className="flex flex-wrap gap-3">
            {MULTILATERALES.map(org => (
              <span key={org} className="bg-[#ca3517] text-white text-sm font-semibold px-5 py-2 rounded-full">
                {org}
              </span>
            ))}
          </div>
        </div>

        {/* Clientes */}
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Clientes</p>
          <div className="flex flex-wrap gap-3">
            {LISTA_CLIENTES.map(cliente => (
              <span key={cliente} className="bg-white border border-gray-200 text-gray-700 text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                {cliente}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SeccionContacto() {
  return (
    <section id="contacto" className="py-16 bg-white scroll-mt-[140px]">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-[#ca3517] font-bold uppercase tracking-widest text-sm mb-2">Hablemos</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            ¿Tenés un desafío energético en mente?
          </h2>
          <div className="w-16 h-1 bg-[#ca3517] mx-auto mb-4 rounded" />
          <p className="text-gray-600 leading-relaxed">
            Contanos sobre tu proyecto — exploraremos juntos cómo podemos ayudar, sin compromisos.
          </p>
        </div>
        <FormularioConsulting />
      </div>
    </section>
  );
}

function SeccionCTA() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-white/50 uppercase text-xs tracking-widest mb-4">SEG Ingeniería</p>
        <h2 className="text-3xl font-bold mb-4">¿Querés saber más sobre nuestros servicios?</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Visitá el sitio completo o contactanos directamente para cualquier consulta.
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

/* ── PÁGINA ──────────────────────────────────────────────────────────────── */

export default function PaginaSEGConsulting() {
  return (
    <>
      <SeccionHero />
      <NavegacionSeccion anclas={ANCLAS} />
      <SeccionPropuestaValor />
      <SeccionServicios />
      <SeccionExperiencia />
      <SeccionMetricas />
      <SeccionClientes />
      <SeccionContacto />
      <SeccionCTA />
    </>
  );
}
