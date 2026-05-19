import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Energías Renovables — SEG Ingeniería",
  description:
    "Mayor desarrollador uruguayo de energías renovables en la región. Proyectos de energía eólica, solar, biomasa y pequeñas centrales hidroeléctricas desde 2008.",
};

/* ══════════════════════════════════════════════════════════════════════════════
   ÍCONOS SVG — todos usan currentColor para heredar el color del contenedor
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
      <rect x="29.5" y="4"  width="5" height="9" rx="2.5" />
      <rect x="29.5" y="51" width="5" height="9" rx="2.5" />
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

function IconoHoja({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 6 C32 6 6 16 10 44 C18 44 34 34 40 16 C44 26 42 44 42 44 C54 18 32 6 32 6z" />
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

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: HERO BANNER
   — mismo esquema que eficiencia-energetica: fondo oscuro, acento lateral rojo
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
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-3xl mb-3">
            Desde 2008 SEG Ingeniería cuenta con un sector de técnicos
            exclusivamente dedicados al desarrollo de proyectos de energía
            eólica, solar, biomasa y pequeñas centrales hidroeléctricas.
          </p>
          <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
            El desarrollo de un proyecto de energías renovables requiere un
            trabajo previo muy detallado con un único propósito: asegurarle al
            inversor un proyecto que pueda concretarse rápida y eficazmente con
            la mayor rentabilidad posible.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   NAVEGACIÓN INTERNA — misma estructura que eficiencia-energetica
══════════════════════════════════════════════════════════════════════════════ */
const ANCLAS = [
  { etiqueta: "Uruguay",          href: "#uruguay"         },
  { etiqueta: "Impacto",          href: "#impacto"         },
  { etiqueta: "Mapa de Desarrollos", href: "#mapa-desarrollos" },
  { etiqueta: "Conozca más",      href: "#conozca-mas"     },
  { etiqueta: "Eólica",           href: "#eolica"          },
  { etiqueta: "Solar",            href: "#solar"           },
  { etiqueta: "Biomasa",          href: "#biomasa"         },
  { etiqueta: "PCH",              href: "#pch"             },
];

function NavegacionInterna() {
  return (
    <nav
      className="bg-gray-100 border-b border-gray-200 sticky top-[88px] z-40"
      aria-label="Secciones de la página"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex overflow-x-auto gap-0 -mb-px justify-center">
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
   SECCIÓN: URUGUAY — PARQUES INSTALADOS
══════════════════════════════════════════════════════════════════════════════ */
function SeccionUruguay() {
  return (
    <section id="uruguay" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-[#ca3517] font-bold uppercase tracking-widest text-sm mb-2">
            Energías Renovables / Uruguay
          </p>
          <h2 className="text-3xl font-bold text-gray-900">
            Proyectos desarrollados e instalados en Uruguay
          </h2>
          <div className="w-16 h-1 bg-[#ca3517] mx-auto mt-4 rounded" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Parques Eólicos */}
          <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="bg-[#ca3517] p-8 text-white flex flex-col items-center text-center">
              <IconoMolino className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-bold">Parques Eólicos</h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                Desarrollados por SEG Ingeniería e instalados en Uruguay
              </p>
            </div>
          </article>

          {/* Parques Fotovoltaicos */}
          <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="bg-[#ca3517] p-8 text-white flex flex-col items-center text-center">
              <IconoSol className="w-16 h-16 mb-4" />
              <h3 className="text-xl font-bold">Parques Fotovoltaicos</h3>
            </div>
            <div className="p-6 text-center">
              <p className="text-gray-600 text-sm leading-relaxed">
                Desarrollados por SEG Ingeniería e instalados en Uruguay
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: IMPACTO — 320.000 ton CO₂
   — usa fondo rojo igual que Pilares y Novedades en el home
══════════════════════════════════════════════════════════════════════════════ */
function SeccionImpacto() {
  return (
    <section
      id="impacto"
      className="py-16 relative overflow-hidden scroll-mt-[160px]"
      style={{ backgroundColor: "#ca3517" }}
      aria-label="Impacto ambiental"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#8a2410] opacity-80" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <p className="text-white/80 text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Nuestros desarrollos cubren el{" "}
          <strong className="text-white text-xl">7%</strong> de la demanda
          energética nacional y evitan:
        </p>

        <div className="mb-10">
          <div className="text-7xl sm:text-8xl font-black leading-none">320.000</div>
          <div className="text-3xl sm:text-4xl font-bold mt-2">toneladas anuales</div>
          <div className="text-2xl sm:text-3xl font-light mt-1 text-white/80">de CO₂</div>
        </div>

        {/* Separador decorativo — igual al de Pilares */}
        <div className="w-12 h-0.5 bg-white/40 mx-auto mb-8" />

        <div className="flex justify-center gap-8 sm:gap-16">
          <div className="flex flex-col items-center gap-2 text-white/80">
            <IconoHoja />
            <span className="text-xs uppercase tracking-widest">Menos emisiones</span>
          </div>
          <div className="w-px bg-white/20 self-stretch" />
          <div className="flex flex-col items-center gap-2 text-white/80">
            <IconoRayo />
            <span className="text-xs uppercase tracking-widest">Energía limpia</span>
          </div>
          <div className="w-px bg-white/20 self-stretch" />
          <div className="flex flex-col items-center gap-2 text-white/80">
            <IconoGlobo />
            <span className="text-xs uppercase tracking-widest">Impacto regional</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: MAPA DE DESARROLLOS
══════════════════════════════════════════════════════════════════════════════ */
function SeccionMapaDesarrollos() {
  return (
    <section id="mapa-desarrollos" className="py-16 bg-gray-50 scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoGlobo className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Mapa de Desarrollos</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

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
   SECCIÓN: SEG GREENPOWER — CONOZCA MÁS
══════════════════════════════════════════════════════════════════════════════ */
const PAISES_GREENPOWER = [
  "Uruguay", "Brasil", "Chile", "México", "Perú", "Argentina", "Colombia",
];

function SeccionConozcaMas() {
  return (
    <section id="conozca-mas" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          <div>
            {/* Badge SEG Greenpower — paleta roja SEG */}
            <div className="inline-flex items-center gap-2 bg-[#ca3517]/10 border border-[#ca3517]/30 text-[#ca3517] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="w-2 h-2 bg-[#ca3517] rounded-full" />
              SEG Greenpower
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-2">Conozca más</h2>
            <div className="w-16 h-1 bg-[#ca3517] mb-6 rounded" />

            <p className="text-gray-600 leading-relaxed text-base mb-6">
              SEG Ingeniería a través de la plataforma{" "}
              <strong className="text-gray-900">SEG Greenpower</strong> desarrolla
              proyectos de energía eólica y solar fotovoltaica en países como
              Brasil, Chile, México, Perú, Argentina, Uruguay y Colombia, junto
              con <strong className="text-gray-900">EAB New Energy</strong> y
              socios locales debidamente seleccionados.
            </p>

            <p className="text-gray-600 leading-relaxed text-base">
              Así exporta el conocimiento adquirido durante estos años en los
              cuales Uruguay fue pionero de la instalación de energías renovables
              en Latinoamérica.
            </p>
          </div>

          {/* Panel de países — fondo oscuro, badges rojos */}
          <div className="bg-gray-900 rounded-xl p-8">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-5">
              Presencia regional
            </p>
            <div className="flex flex-wrap gap-3">
              {PAISES_GREENPOWER.map((pais) => (
                <span
                  key={pais}
                  className="bg-[#ca3517] text-white text-sm font-semibold px-4 py-2 rounded-full"
                >
                  {pais}
                </span>
              ))}
            </div>
            <p className="text-white/30 text-xs mt-6">
              Junto a EAB New Energy y socios locales seleccionados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: TIPOS DE ENERGÍA
   — mismo patrón de card que "Áreas de Estudio" en eficiencia-energetica:
     cabecera roja con ícono blanco + cuerpo blanco con texto gris
══════════════════════════════════════════════════════════════════════════════ */
const TIPOS_ENERGIA = [
  {
    id: "eolica",
    Icono: IconoMolino,
    titulo: "Eólica",
    descripcion: [
      "Siendo hoy el mayor desarrollador eólico independiente del país, SEG Ingeniería continúa desarrollando proyectos, tanto para inversores extranjeros como locales, a lo largo y ancho de América Latina.",
      "Para dichos proyectos nuestra empresa realiza el desarrollo completo, desde la localización inicial, la selección de la tecnología ideal, el análisis de las diferentes opciones de beneficios fiscales disponibles para la generación de fuente renovable, la supervisión de la instalación y el control de especificaciones y garantías tanto de los módulos como de los servicios de mantenimiento.",
    ],
  },
  {
    id: "solar",
    Icono: IconoSol,
    titulo: "Solar",
    descripcion: [
      "Contamos con una gran experiencia en el desarrollo de instalaciones de aprovechamiento de energía solar, tanto para calentamiento de agua (térmica) como para generación de energía eléctrica (fotovoltaica).",
      "Este trabajo abarca proyectos de diferentes dimensiones: desde pequeñas instalaciones en clubes, grandes superficies, estaciones de servicio e industrias, hasta granjas solares completas.",
      "Para dichos proyectos nuestra empresa realiza el desarrollo completo, desde la localización inicial, la selección de tecnología ideal, el análisis de las diferentes opciones de beneficios fiscales disponibles para la generación de fuente renovable, la supervisión de la instalación y el control de especificaciones y garantías tanto de los módulos como de los servicios de mantenimiento.",
    ],
  },
  {
    id: "biomasa",
    Icono: IconoBiomasa,
    titulo: "Biomasa",
    descripcion: [
      "Desarrollamos proyectos de generación y cogeneración de energía con Biomasa, en general con residuos de la cosecha forestal y otras fuentes de Biomasa.",
    ],
  },
  {
    id: "pch",
    Icono: IconoPCH,
    titulo: "PCH — Pequeñas Centrales Hidroeléctricas",
    descripcion: [
      "Este tipo de generación de energía renovable aprovecha caudales de agua mediante una pequeña turbina hidroeléctrica.",
      "En Uruguay existen varios sitios con posibilidad de generación de este tipo, con potencias relativamente pequeñas. Desarrollamos proyectos completos de PCH aprovechando embalses ya existentes o en construcción.",
    ],
  },
];

/*
  Alterna fondo blanco / gris-50 entre secciones y la grilla texto/imagen
  cambia de lado (izquierda → derecha → ...) para dar ritmo visual.
*/
function SeccionTipoEnergia({ tipo, fondoGris, imagenDerecha }) {
  return (
    <section
      id={tipo.id}
      className={`py-16 scroll-mt-[160px] ${fondoGris ? "bg-gray-50" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-start ${
            imagenDerecha ? "" : "lg:[&>*:first-child]:order-2"
          }`}
        >
          {/* Card visual — cabecera roja con ícono blanco (igual a Áreas de Estudio) */}
          <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="bg-[#ca3517] p-10 text-white flex flex-col items-center text-center">
              <tipo.Icono className="w-16 h-16 mb-4" />
              <h3 className="text-2xl font-bold">{tipo.titulo}</h3>
            </div>
          </article>

          {/* Texto */}
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="text-[#ca3517]">
                <tipo.Icono className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">{tipo.titulo}</h2>
                <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
              </div>
            </div>

            <div className="space-y-4">
              {tipo.descripcion.map((parrafo, i) => (
                <p key={i} className="text-gray-600 leading-relaxed text-base">
                  {parrafo}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SeccionTiposEnergia() {
  return (
    <>
      {TIPOS_ENERGIA.map((tipo, indice) => (
        <SeccionTipoEnergia
          key={tipo.id}
          tipo={tipo}
          fondoGris={indice % 2 !== 0}
          imagenDerecha={indice % 2 === 0}
        />
      ))}
    </>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: CTA FINAL
══════════════════════════════════════════════════════════════════════════════ */
function SeccionCTA() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-white/50 uppercase text-xs tracking-widest mb-4">
          SEG Ingeniería
        </p>
        <h2 className="text-3xl font-bold mb-4">
          ¿Tiene un proyecto de energía renovable?
        </h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Contáctenos y le asesoraremos sobre las mejores opciones de desarrollo,
          financiamiento y beneficios fiscales disponibles en su país.
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
export default function PaginaEnergiasRenovables() {
  return (
    <>
      <SeccionHero />
      <NavegacionInterna />
      <SeccionUruguay />
      <SeccionImpacto />
      <SeccionMapaDesarrollos />
      <SeccionConozcaMas />
      <SeccionTiposEnergia />
      <SeccionCTA />
    </>
  );
}
