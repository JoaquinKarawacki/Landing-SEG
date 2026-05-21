import Link from "next/link";
import Image from "next/image";
import NavegacionSeccion from "@/components/NavegacionSeccion";

export const metadata = {
  title: "Energías Renovables — SEG Ingeniería",
  description:
    "Mayor desarrollador uruguayo de energías renovables en la región. Proyectos de energía eólica, solar e hidrógeno verde desde 2008.",
};

/* ══════════════════════════════════════════════════════════════════════════════
   ÍCONOS SVG
══════════════════════════════════════════════════════════════════════════════ */

function IconoMolino({ className = "w-10 h-10" }) {
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

function IconoSol({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <circle cx="32" cy="32" r="11" />
      <rect x="29.5" y="4"    width="5" height="9" rx="2.5" />
      <rect x="29.5" y="51"   width="5" height="9" rx="2.5" />
      <rect x="4"    y="29.5" width="9" height="5" rx="2.5" />
      <rect x="51"   y="29.5" width="9" height="5" rx="2.5" />
      <rect x="11.7" y="11.7" width="5" height="9" rx="2.5" transform="rotate(-45 14.2 16.2)" />
      <rect x="46.3" y="43.3" width="5" height="9" rx="2.5" transform="rotate(-45 48.8 47.8)" />
      <rect x="43.3" y="11.7" width="5" height="9" rx="2.5" transform="rotate(45 45.8 16.2)"  />
      <rect x="15.7" y="43.3" width="5" height="9" rx="2.5" transform="rotate(45 18.2 47.8)"  />
    </svg>
  );
}

function IconoBiomasa({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 8 C32 8 8 20 12 44 C18 44 32 36 38 20 C44 28 44 44 44 44 C52 20 32 8 32 8z" />
      <path d="M32 44 Q30 52 28 58" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function IconoPCH({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <path d="M6 20 L6 52 L26 52 L26 20" fill="currentColor" stroke="none" />
      <path d="M26 36 Q34 30 42 36 Q50 42 58 36" strokeLinecap="round" />
      <path d="M26 44 Q34 38 42 44 Q50 50 58 44" strokeLinecap="round" />
      <circle cx="42" cy="36" r="8" fill="currentColor" stroke="none" />
      <circle cx="42" cy="36" r="3" fill="white" stroke="none" />
      <path d="M50 30 L58 20" strokeLinecap="round" />
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

function IconoRayo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M38 4 L16 36 L30 36 L26 60 L48 28 L34 28 Z" />
    </svg>
  );
}

function IconoH2({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <circle cx="32" cy="32" r="7" />
      <ellipse cx="32" cy="32" rx="28" ry="10" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <ellipse cx="32" cy="32" rx="28" ry="10" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(60 32 32)" />
      <ellipse cx="32" cy="32" rx="28" ry="10" fill="none" stroke="currentColor" strokeWidth="2.5" transform="rotate(-60 32 32)" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   HERO
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
          <span className="text-white">Energías Renovables</span>
        </nav>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Energías Renovables
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-8">
          Mayor desarrollador uruguayo de energías renovables en la región
        </p>
        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl">
            Desde 2008 SEG Ingeniería cuenta con un sector de técnicos exclusivamente dedicados al
            desarrollo de proyectos de energía eólica, solar e hidrógeno verde. Aseguramos al inversor
            un proyecto que pueda concretarse rápida y eficazmente con la mayor rentabilidad posible.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   NAVEGACIÓN INTERNA
══════════════════════════════════════════════════════════════════════════════ */
const ANCLAS = [
  { etiqueta: "Impacto",  href: "#impacto"          },
  { etiqueta: "Mapa",     href: "#mapa-desarrollos"  },
  { etiqueta: "LATAM",    href: "#latam"             },
  { etiqueta: "Eólica",   href: "#eolica"            },
  { etiqueta: "Solar",    href: "#solar"             },
  { etiqueta: "H₂ verde", href: "#h2-verde"          },
  { etiqueta: "Otras",    href: "#otras"             },
];


/* ══════════════════════════════════════════════════════════════════════════════
   IMPACTO — KPIs
══════════════════════════════════════════════════════════════════════════════ */
const KPIS = [
  { label: "Operando",          valor: "244 MW",    sub: "Uruguay · eólico + FV"   },
  { label: "Pipeline regional", valor: "+1.300 MW", sub: "eólico, solar e H₂"      },
  { label: "Presencia",         valor: "7 países",  sub: "LATAM y Caribe"          },
  { label: "CO₂ evitado",       valor: "320 mil t", sub: "anuales · 7% demanda UY" },
];

function SeccionImpacto() {
  return (
    <section id="impacto" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]"><IconoRayo /></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Impacto</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {KPIS.map((kpi) => (
            <div key={kpi.label} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <p className="text-gray-500 text-sm mb-2">{kpi.label}</p>
              <div className="text-3xl sm:text-4xl font-black text-gray-900 leading-none mb-1">{kpi.valor}</div>
              <p className="text-gray-400 text-xs leading-snug">{kpi.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SERVICIOS TRANSVERSALES
══════════════════════════════════════════════════════════════════════════════ */
const SERVICIOS = [
  {
    titulo: "Diseño y optimización de parques",
    descripcion: "Layouts a gran escala, combinando eólico y fotovoltaico, con reportes de producción y análisis de pérdidas e incertidumbres.",
  },
  {
    titulo: "Análisis de complementariedad horaria",
    descripcion: "Modelado del recurso eólico/solar para maximizar el factor de utilización del electrolizador.",
  },
  {
    titulo: "Ingeniería básica y evaluación de costos",
    descripcion: "Elaboración y optimización de diseño preliminar, diseño de procesos de llamados a precios y solicitud de cotizaciones para determinación de CAPEX/OPEX.",
  },
  {
    titulo: "Cálculo y optimización de LCOH",
    descripcion: "Modelos económicos con análisis de sensibilidad y escenarios combinados para minimizar el costo nivelado del hidrógeno.",
  },
  {
    titulo: "Análisis de potencial de derivados",
    descripcion: "Estudios técnico-económicos de producción de e-metanol, e-fuels y e-fertilizantes según mercado objetivo y logística.",
  },
  {
    titulo: "Due diligence técnica y ambiental",
    descripcion: "Auditorías de proyectos para inversionistas, prestamistas o procesos de adquisición, incluyendo evaluación regulatoria.",
  },
  {
    titulo: "Evaluación financiera de proyectos",
    descripcion: "Elaboración de flujo de fondos y determinación de hipótesis de mercado para análisis de rentabilidad y optimización del modelo.",
  },
  {
    titulo: "Gestión y seguimiento de trámites y permisos",
    descripcion: "Gestión de subcontratos, contacto con las autoridades pertinentes, seguimiento de hitos clave necesarios para alcanzar el estado de listo para construcción.",
  },
  {
    titulo: "Selección y negociación de tierras",
    descripcion: "Incluido el asesoramiento del modelo contractual bancable, identificación de sitios óptimos, negociación de plazos y demás condiciones.",
  },
];

function SeccionServicios() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Servicios transversales a diversas tecnologías
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICIOS.map((s) => (
            <div key={s.titulo} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <h3 className="font-bold text-[#ca3517] text-sm mb-2 leading-snug">{s.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   MAPA DE DESARROLLOS
══════════════════════════════════════════════════════════════════════════════ */
function SeccionMapaDesarrollos() {
  return (
    <section id="mapa-desarrollos" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-[#ca3517]"><IconoGlobo className="w-8 h-8" /></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Mapa de desarrollos LATAM</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>
        <p className="text-gray-600 text-base mb-8">
          Proyectos operando, en construcción y en desarrollo a lo largo de Uruguay, Argentina,
          Brasil, Chile, Colombia, México y Perú.
        </p>
        <div className="rounded-xl overflow-hidden shadow-inner border border-gray-300 max-w-2xl mx-auto">
          <Image
            src="/img/614875ff-48dc-4a27-bf70-7e51def7ecbc.png"
            alt="Mapa de desarrollos de energías renovables"
            width={1200}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   LATAM — PRESENCIA REGIONAL
══════════════════════════════════════════════════════════════════════════════ */
const PAISES = ["Uruguay", "Argentina", "Brasil", "Chile", "Colombia", "México", "Perú"];

const PARTNERS = [
  { nombre: "Acciona & Nordex",  src: "/img/partners/acciona-nordex.png" },
  { nombre: "Arboreal",          src: "/img/partners/arboreal.png"       },
  { nombre: "Atlas",             src: "/img/partners/atlas.jpg"          },
  { nombre: "CIR",               src: "/img/partners/cir.jpeg"           },
  { nombre: "CWP Global",        src: "/img/partners/cwp.png"            },
  { nombre: "Enercon",           src: "/img/partners/enercon.png"        },
  { nombre: "Enertis (Applus+)", src: "/img/partners/enertis.png"        },
  { nombre: "Enertrag",          src: "/img/partners/enertrag.jpg"       },
  { nombre: "Gletir",            src: "/img/partners/gletir.png"         },
  { nombre: "Innergex",          src: "/img/partners/innergex.jpg"       },
  { nombre: "SACEEM",            src: "/img/partners/saceem.png"         },
  { nombre: "UPM",               src: "/img/partners/upm.png",  grande: true },
];

function SeccionLATAM() {
  return (
    <section id="latam" className="py-16 bg-gray-50 scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="text-[#ca3517]"><IconoGlobo className="w-8 h-8" /></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">LATAM · Presencia regional</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>
        <p className="text-gray-600 text-base mb-8 max-w-2xl">
          A través de SEG Greenpower exportamos a la región el conocimiento adquirido en Uruguay,
          en alianza con socios locales seleccionados.
        </p>
        <div className="flex flex-wrap gap-3 mb-10">
          {PAISES.map((pais) => (
            <span
              key={pais}
              className="bg-[#ca3517] text-white text-sm font-semibold px-4 py-2 rounded-full"
            >
              {pais}
            </span>
          ))}
        </div>
        <div>
          <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">
            Partners y clientes
          </p>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
            <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6">
              {PARTNERS.map((p) => (
                <div
                  key={p.nombre}
                  className="flex items-center justify-center h-14 px-2"
                  title={p.nombre}
                >
                  <img
                    src={p.src}
                    alt={p.nombre}
                    className={`${p.grande ? "max-h-16" : "max-h-10"} max-w-full w-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300`}
                  />
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
   BADGE DE ESTADO
══════════════════════════════════════════════════════════════════════════════ */
function BadgeEstado({ estado }) {
  const estilos = {
    operando:     "bg-green-100 text-green-700",
    construccion: "bg-amber-100 text-amber-700",
    desarrollo:   "bg-blue-100 text-blue-700",
  };
  const etiquetas = {
    operando:     "Operando",
    construccion: "En construcción",
    desarrollo:   "En desarrollo",
  };
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${estilos[estado]}`}>
      {etiquetas[estado]}
    </span>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   EÓLICA
══════════════════════════════════════════════════════════════════════════════ */
const PROYECTOS_EOLICA = [
  { nombre: "Peralta I & II", mw: "117 MW", ubicacion: "Tacuarembó, Uruguay",          periodo: "2011–2015", estado: "operando" },
  { nombre: "Cerro Grande",   mw: "52 MW",  ubicacion: "Cerro Largo, Uruguay",          periodo: "2012–2017", estado: "operando" },
  { nombre: "Kosten",         mw: "24 MW",  ubicacion: "Comodoro Rivadavia, Argentina", periodo: "2016–2020", estado: "operando" },
];

function SeccionEolica() {
  return (
    <section id="eolica" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="text-[#ca3517]"><IconoMolino className="w-8 h-8" /></div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Eólica</h2>
                <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
              </div>
            </div>
            <p className="text-gray-600 text-base mb-6">
              Mayor desarrollador eólico independiente de Uruguay. 193 MW desarrollados y operando
              entre Uruguay y Argentina, con pipeline activo en la región.
            </p>
            <a href="#mapa-desarrollos" className="text-[#ca3517] text-sm font-semibold hover:underline">
              → Ver pipeline completo en el mapa
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3 gap-4">
            {PROYECTOS_EOLICA.map((p) => (
              <div key={p.nombre} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 text-base mb-1">{p.nombre}</h3>
                <div className="text-3xl font-black text-gray-900 mb-2">{p.mw}</div>
                <p className="text-gray-500 text-sm mb-1">{p.ubicacion}</p>
                <p className="text-gray-400 text-xs mb-3">{p.periodo}</p>
                <BadgeEstado estado={p.estado} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SOLAR
══════════════════════════════════════════════════════════════════════════════ */
const PROYECTOS_SOLAR = [
  { nombre: "El Naranjal", mw: "57 MWp", ubicacion: "Salto, Uruguay", periodo: "2013–2018", estado: "operando" },
  { nombre: "Del Litoral", mw: "17 MWp", ubicacion: "Salto, Uruguay", periodo: "2013–2018", estado: "operando" },
];

function SeccionSolar() {
  return (
    <section id="solar" className="py-16 bg-gray-50 scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:order-1">
            {PROYECTOS_SOLAR.map((p) => (
              <div key={p.nombre} className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                <h3 className="font-bold text-gray-900 text-base mb-1">{p.nombre}</h3>
                <div className="text-3xl font-black text-gray-900 mb-2">{p.mw}</div>
                <p className="text-gray-500 text-sm mb-1">{p.ubicacion}</p>
                <p className="text-gray-400 text-xs mb-3">{p.periodo}</p>
                <BadgeEstado estado={p.estado} />
              </div>
            ))}
          </div>
          <div className="lg:order-2">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-[#ca3517]"><IconoSol className="w-8 h-8" /></div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Solar</h2>
                <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
              </div>
            </div>
            <p className="text-gray-600 text-base mb-6">
              Desarrollos a escala utility en Uruguay y Argentina (74 MWp instalados en Uruguay), más
              instalaciones distribuidas en clientes corporativos. Cobertura completa del ciclo:
              localización, selección tecnológica, beneficios fiscales, supervisión y garantías.
            </p>
            <a href="#mapa-desarrollos" className="text-[#ca3517] text-sm font-semibold hover:underline">
              → Ver pipeline completo en el mapa
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   H₂ VERDE
══════════════════════════════════════════════════════════════════════════════ */
const TAMBOR_STATS = [
  { label: "Eólico",         valor: "194 MW"       },
  { label: "Solar",          valor: "188 MWp"      },
  { label: "Electrólisis",   valor: "140 MW"       },
  { label: "H₂ → e-metanol", valor: "15.000 t/año" },
];

const PIPELINE_H2 = [
  { nombre: "Tenek",        ubicacion: "México · greenfield" },
  { nombre: "Peninsularis", ubicacion: "México · greenfield" },
];

const CONSULTORIAS = [
  {
    descripcion: "Logística e infraestructura para exportación de H₂ verde y derivados",
    cliente: "PNUD",
    periodo: "2024",
  },
  {
    descripcion: "Viabilidad de producción de metanol con biomasa",
    cliente: "Arboreal",
    periodo: "2024–2025",
  },
  {
    descripcion: "Soporte técnico H2U — análisis tecno-económico y LCOH",
    cliente: "SACEEM / CIR",
    periodo: "2023",
  },
];

function SeccionH2Verde() {
  return (
    <section id="h2-verde" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-4">
          <div className="text-[#ca3517]"><IconoH2 className="w-8 h-8" /></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">H₂ verde</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>
        <p className="text-gray-600 text-base mb-10 max-w-2xl">
          Departamento dedicado desde 2019. Acompañamos la cadena completa del hidrógeno verde:
          desarrollo greenfield de generación renovable, producción, transporte y derivados como
          e-metanol, e-fuels y e-fertilizantes.
        </p>

        {/* Caso de estudio */}
        <div className="bg-gray-900 rounded-xl p-8 mb-10">
          <p className="text-[#ca3517] text-xs font-bold uppercase tracking-widest mb-2">
            Caso de estudio
          </p>
          <h3 className="text-2xl font-bold text-white mb-3">Tambor Green Hydrogen Hub</h3>
          <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-2xl">
            En desarrollo con Enertrag (Alemania). Combina 194 MW de generación eólica y 188 MWp
            de generación solar con un electrolizador de 140 MW. La producción de 15.000 toneladas
            anuales de H₂ verde se procesa en e-metanol renovable, con potencial de reemplazar
            aproximadamente el 10 % del metanol convencional de la mayor refinería alemana.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {TAMBOR_STATS.map((s) => (
              <div key={s.label} className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-400 text-xs mb-1">{s.label}</p>
                <div className="text-2xl font-black text-white">{s.valor}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pipeline regional */}
        <div className="mb-10">
          <h3 className="font-bold text-gray-900 text-lg mb-4">Otros proyectos en pipeline</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
            {PIPELINE_H2.map((p) => (
              <div key={p.nombre} className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
                <p className="font-bold text-gray-900">{p.nombre}</p>
                <p className="text-gray-500 text-sm">{p.ubicacion}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Consultorías recientes */}
        <div>
          <h3 className="font-bold text-gray-900 text-lg mb-4">Consultorías recientes</h3>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            {CONSULTORIAS.map((c, i) => (
              <div
                key={i}
                className={`flex items-start justify-between gap-6 px-6 py-4 ${
                  i < CONSULTORIAS.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <p className="text-gray-700 text-sm leading-snug">{c.descripcion}</p>
                <p className="text-gray-400 text-xs whitespace-nowrap flex-shrink-0">
                  {c.cliente} · {c.periodo}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   OTRAS TECNOLOGÍAS
══════════════════════════════════════════════════════════════════════════════ */
const OTRAS = [
  {
    Icono: IconoBiomasa,
    titulo: "Biomasa",
    descripcion: "Generación y cogeneración con residuos de cosecha forestal y otras fuentes de biomasa.",
  },
  {
    Icono: IconoPCH,
    titulo: "PCH",
    descripcion: "Pequeñas centrales hidroeléctricas en embalses existentes o en construcción. Proyectos completos llave en mano.",
  },
];

function SeccionOtras() {
  return (
    <section id="otras" className="py-16 bg-gray-50 scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]"><IconoBiomasa className="w-8 h-8" /></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Otras tecnologías</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
          {OTRAS.map((t) => (
            <div key={t.titulo} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
              <div className="text-[#ca3517] mb-3"><t.Icono className="w-8 h-8" /></div>
              <h3 className="font-bold text-gray-900 mb-2">{t.titulo}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   CTA FINAL
══════════════════════════════════════════════════════════════════════════════ */
function SeccionCTA() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-white/50 uppercase text-xs tracking-widest mb-4">SEG Ingeniería</p>
        <h2 className="text-3xl font-bold mb-4">¿Tiene un proyecto de energía renovable?</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Contáctenos y le asesoraremos sobre las mejores opciones de desarrollo, financiamiento
          y beneficios fiscales disponibles en su país.
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
   PÁGINA
══════════════════════════════════════════════════════════════════════════════ */
export default function PaginaEnergiasRenovables() {
  return (
    <>
      <SeccionHero />
      <NavegacionSeccion anclas={ANCLAS} />
      <SeccionImpacto />
      <SeccionServicios />
      <SeccionMapaDesarrollos />
      <SeccionLATAM />
      <SeccionEolica />
      <SeccionSolar />
      <SeccionH2Verde />
      <SeccionOtras />
      <SeccionCTA />
    </>
  );
}