import Link from "next/link";

export const metadata = {
  title: "Institucional — SEG Ingeniería",
  description:
    "Compañía uruguaya pionera en servicios energéticos desde 1996. Trayectoria, equipo humano y cultura organizacional de SEG Ingeniería.",
};

/* ══════════════════════════════════════════════════════════════════════════════
   ÍCONOS SVG — fill="currentColor", viewBox="0 0 64 64", aria-hidden="true"
══════════════════════════════════════════════════════════════════════════════ */

function IconoHistoria({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <circle cx="32" cy="32" r="26" fill="none" stroke="currentColor" strokeWidth="3" />
      <path d="M32 16 L32 34 L44 34" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="32" cy="32" r="3" />
    </svg>
  );
}

function IconoEquipo({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <circle cx="32" cy="16" r="9" />
      <path d="M14 52 Q14 36 32 36 Q50 36 50 52 Z" />
      <circle cx="12" cy="20" r="7" />
      <path d="M2 52 Q2 40 12 40 Q18 40 20 43" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="52" cy="20" r="7" />
      <path d="M62 52 Q62 40 52 40 Q46 40 44 43" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function IconoFormacion({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 8 L58 22 L32 36 L6 22 Z" />
      <path d="M16 30 L16 46 Q24 52 32 52 Q40 52 48 46 L48 30" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <line x1="58" y1="22" x2="58" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <circle cx="58" cy="42" r="3" />
    </svg>
  );
}

function IconoMision({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <circle cx="32" cy="32" r="26" />
      <circle cx="32" cy="32" r="16" />
      <circle cx="32" cy="32" r="6" fill="currentColor" stroke="none" />
      <line x1="32" y1="6"  x2="32" y2="16" strokeLinecap="round" />
      <line x1="32" y1="48" x2="32" y2="58" strokeLinecap="round" />
      <line x1="6"  y1="32" x2="16" y2="32" strokeLinecap="round" />
      <line x1="48" y1="32" x2="58" y2="32" strokeLinecap="round" />
    </svg>
  );
}

function IconoPersona({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <circle cx="32" cy="18" r="12" />
      <path d="M8 56 C8 40 56 40 56 56 Z" />
    </svg>
  );
}

function IconoGlobo({ className = "w-10 h-10" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <circle cx="32" cy="32" r="26" />
      <ellipse cx="32" cy="32" rx="13" ry="26" />
      <line x1="6" y1="32" x2="58" y2="32" />
      <line x1="6" y1="20" x2="58" y2="20" />
      <line x1="6" y1="44" x2="58" y2="44" />
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
          <span className="text-white">Institucional</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Institucional
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-4">
          Compañía uruguaya pionera en servicios energéticos
        </p>

        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base text-gray-300 leading-relaxed max-w-2xl">
            SEG Ingeniería S.A. comienza sus actividades en{" "}
            <strong className="text-white">1996</strong> con el objetivo de
            convertirse en la empresa líder de servicios energéticos de Uruguay
            y la región.
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
  { etiqueta: "Trayectoria",        href: "#trayectoria"     },
  { etiqueta: "Capital Humano",     href: "#capital-humano"  },
  { etiqueta: "Formación Continua", href: "#formacion"       },
  { etiqueta: "Trabajar en SEG",    href: "#trabaja"         },
];

function NavegacionInterna() {
  return (
    <nav
      className="bg-gray-100 border-b border-gray-200 sticky top-[108px] z-40"
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
   SECCIÓN: TRAYECTORIA — bg-white — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
const HITOS = [
  {
    año: "1996",
    titulo: "Fundación",
    descripcion:
      "SEG Ingeniería S.A. inicia sus actividades en Uruguay como empresa pionera en servicios energéticos, con el objetivo de convertirse en el referente líder del sector a nivel nacional y regional.",
  },
  {
    año: "2009",
    titulo: "Energías Renovables",
    descripcion:
      "Atentos al panorama energético nacional e internacional, incorporamos una nueva división de negocios enfocada en energías renovables, logrando en el corto plazo más de 280 MW de eólica y solar PV adjudicados en licitaciones públicas en Uruguay y Argentina.",
  },
  {
    año: "Hoy",
    titulo: "Referentes Regionales",
    descripcion:
      "SEG Ingeniería cuenta con vasta experiencia en el ámbito nacional y regional, operando en múltiples países de Latinoamérica con servicios de eficiencia energética, energías renovables, consultoría y gerenciamiento de activos.",
  },
];

function SeccionTrayectoria() {
  return (
    <section id="trayectoria" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoHistoria className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Trayectoria</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        {/* Hitos — Guía §6.5: numerados con año en lugar de número */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {HITOS.map((hito) => (
            <div
              key={hito.año}
              className="bg-gray-50 rounded-xl p-7 border border-gray-100 h-full"
            >
              <div className="text-[#ca3517] font-black text-3xl mb-3 leading-none">
                {hito.año}
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{hito.titulo}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{hito.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Misión — panel destacado */}
        <div className="max-w-4xl mx-auto bg-[#ca3517] text-white rounded-xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <IconoMision className="w-10 h-10 text-white/80" />
          </div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">
            Nuestra Misión
          </p>
          <p className="text-xl sm:text-2xl font-bold leading-relaxed">
            Lograr un entorno energéticamente eficiente, sustentable y renovable,
            optimizando los recursos — haciendo que las cosas sucedan.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: CAPITAL HUMANO — bg-gray-50 — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
const VALORES = [
  {
    id: "honestidad",
    titulo: "Honestidad y Ética",
    descripcion:
      "Valoramos especialmente una escala de valores en la que la honestidad, la ética y el compañerismo se ubiquen por encima de todo.",
  },
  {
    id: "diversidad",
    titulo: "Equipo Multidisciplinario",
    descripcion:
      "Forman parte del equipo profesionales y técnicos con distintas especializaciones, así como estudiantes de diversas carreras.",
  },
  {
    id: "crecimiento",
    titulo: "Crecimiento Continuo",
    descripcion:
      "Apoyamos a nuestro equipo a la hora de estudiar, fomentando especializaciones y cursos que los ayuden a crecer en su área.",
  },
  {
    id: "mentalidad",
    titulo: "Mentalidad Abierta",
    descripcion:
      "Buscamos gente con mentalidad joven, plural y abierta, capaz de trabajar con personas de diferentes culturas y formas de pensar.",
  },
];

function SeccionCapitalHumano() {
  return (
    <section id="capital-humano" className="py-16 bg-gray-50 scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoEquipo className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Capital Humano</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-12">
          {/* Texto principal */}
          <div className="space-y-5">
            <p className="text-gray-600 leading-relaxed text-base">
              Nuestro capital humano es lo más importante dentro de SEG Ingeniería,
              y es lo que nos permite estar donde estamos.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Creemos que la mejor inversión es aquella realizada en nuestros
              recursos. Todos juntos permiten que SEG Ingeniería sea una empresa
              con mucha energía para afrontar nuevos proyectos.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Buscamos desafíos constantemente, porque nuestra gente nos impulsa
              a ello: superarse día a día y reinventarse.
            </p>
          </div>

          {/* Panel de íconos de personas */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-widest text-[#ca3517] mb-6">
              Nuestro equipo está integrado por
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Ingenieros especializados",
                "Técnicos en energía",
                "Economistas y administradores",
                "Estudiantes universitarios",
              ].map((rol) => (
                <div
                  key={rol}
                  className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-100"
                >
                  <span className="w-2 h-2 bg-[#ca3517] rounded-full flex-shrink-0" />
                  <span className="text-gray-700 text-sm font-medium leading-snug">{rol}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Cards de valores — Guía §6.1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALORES.map((valor) => (
            <article
              key={valor.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100"
            >
              <div className="bg-[#ca3517] p-5 text-white flex items-center justify-center">
                <IconoPersona className="w-10 h-10" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 text-sm mb-2">{valor.titulo}</h3>
                <p className="text-gray-600 text-xs leading-relaxed">{valor.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: FORMACIÓN CONTINUA — bg-white — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
const PAISES_FORMACION = ["Alemania", "Brasil", "Japón", "China"];

function SeccionFormacion() {
  return (
    <section id="formacion" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoFormacion className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Formación Continua</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-5">
            <p className="text-gray-600 leading-relaxed text-base">
              El equipo técnico de SEG Ingeniería realiza capacitaciones a nivel
              internacional, actualizando al más alto nivel el conocimiento del
              estado del arte en materia energética.
            </p>
            <p className="text-gray-600 leading-relaxed text-base">
              Es frecuente la realización de actividades de capacitación en los
              países más avanzados en tecnología energética, garantizando que
              nuestros profesionales trabajen siempre con el conocimiento más
              actualizado disponible.
            </p>
          </div>

          {/* Panel de países */}
          <div className="bg-gray-900 rounded-xl p-8">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-5">
              Destinos de capacitación
            </p>
            <div className="flex flex-wrap gap-3">
              {PAISES_FORMACION.map((pais) => (
                <span
                  key={pais}
                  className="bg-[#ca3517] text-white text-sm font-semibold px-5 py-2 rounded-full"
                >
                  {pais}
                </span>
              ))}
            </div>
            <p className="text-white/30 text-xs mt-6">
              Capacitaciones en tecnología eólica, solar, eficiencia energética
              y gestión de activos renovables
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: TRABAJAR EN SEG — fondo rojo — Guía §4.4
══════════════════════════════════════════════════════════════════════════════ */
function SeccionTrabaja() {
  return (
    <section
      id="trabaja"
      className="py-16 relative overflow-hidden scroll-mt-[160px]"
      style={{ backgroundColor: "#ca3517" }}
      aria-label="Trabajar en SEG Ingeniería"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#8a2410] opacity-80" />

      <div className="relative z-10 max-w-5xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="flex justify-center mb-6">
            <IconoGlobo className="w-16 h-16 text-white/70" />
          </div>
          <div className="w-12 h-0.5 bg-white/40 mx-auto mb-8" />
          <h2 className="text-3xl font-bold text-white mb-6">Trabajar en SEG</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4 text-white/85 text-base leading-relaxed">
            <p>
              SEG Ingeniería le ofrece un entorno{" "}
              <strong className="text-white">creativo y motivador</strong>, formado
              por un equipo multidisciplinario de personas apasionadas por ayudar
              a los clientes a bajar sus costos, en constante crecimiento.
            </p>
            <p>
              Nos interesa incorporar nuevos talentos que demuestren capacidades en
              nuestras áreas de desarrollo. Si sos estudiante de Ingeniería,
              Ciencias Económicas, Administración o creés que podés aportar al
              equipo, te estamos buscando.
            </p>
            <p>
              Somos jóvenes, abiertos, libres, versátiles y creativos. Valoramos
              tu don de gente, tu capacidad de trabajar en equipo y tu búsqueda
              de superación constante.
            </p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-xl p-8 text-center backdrop-blur-sm">
            <p className="text-white/70 text-xs uppercase tracking-widest mb-4">
              Enviá tu CV a
            </p>
            <a
              href="mailto:rrhh@segingenieria.com"
              className="inline-block text-white font-black text-lg sm:text-xl hover:underline mb-6 break-all"
            >
              rrhh@segingenieria.com
            </a>
            <p className="text-white/60 text-xs">
              Formato Word o PDF aceptados
            </p>
            <div className="w-8 h-0.5 bg-white/30 mx-auto my-5" />
            <Link
              href="/contacto"
              className="inline-block border-2 border-white text-white font-semibold px-8 py-2.5 rounded-full hover:bg-white hover:text-[#ca3517] transition-colors duration-200 text-sm"
            >
              Ver más en Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
══════════════════════════════════════════════════════════════════════════════ */
export default function PaginaInstitucional() {
  return (
    <>
      <SeccionHero />
      <NavegacionInterna />
      <SeccionTrayectoria />
      <SeccionCapitalHumano />
      <SeccionFormacion />
      <SeccionTrabaja />
    </>
  );
}
