import Link from "next/link";
import FormularioContacto from "@/components/FormularioContacto";
import FormularioSuscripcion from "@/components/FormularioSuscripcion";
import NavegacionSeccion from "@/components/NavegacionSeccion";

export const metadata = {
  title: "Contacto — SEG Ingeniería",
  description:
    "Contáctenos en nuestras oficinas de Uruguay y Chile. Suscripción a Indicadores Energéticos y oportunidades de trabajo en SEG Ingeniería.",
};

/* ══════════════════════════════════════════════════════════════════════════════
   ÍCONOS SVG — fill="currentColor", viewBox="0 0 64 64", aria-hidden="true"
══════════════════════════════════════════════════════════════════════════════ */

function IconoUbicacion({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 4C21.5 4 13 12.5 13 23c0 15 19 37 19 37s19-22 19-37C51 12.5 42.5 4 32 4z" />
      <circle cx="32" cy="23" r="7" fill="white" />
    </svg>
  );
}

function IconoTelefono({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M20 4 C16 4 10 10 10 14 C10 36 28 54 50 54 C54 54 60 48 60 44 L52 36 C50 34 46 34 44 36 L40 40 C36 38 26 28 24 24 L28 20 C30 18 30 14 28 12 Z" />
    </svg>
  );
}

function IconoEmail({ className = "w-6 h-6" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4" y="12" width="56" height="40" rx="4" />
      <path d="M4 16 L32 36 L60 16" stroke="white" strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function IconoFormulario({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="10" y="4" width="44" height="56" rx="3" />
      <rect x="18" y="16" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.5)" />
      <rect x="18" y="24" width="28" height="3" rx="1.5" fill="rgba(255,255,255,0.5)" />
      <rect x="18" y="32" width="20" height="3" rx="1.5" fill="rgba(255,255,255,0.5)" />
      <rect x="18" y="42" width="28" height="10" rx="2" fill="rgba(255,255,255,0.3)" />
    </svg>
  );
}

function IconoIndicadores({ className = "w-8 h-8" }) {
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

function IconoPersona({ className = "w-8 h-8" }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <circle cx="32" cy="18" r="12" />
      <path d="M8 56 C8 40 56 40 56 56 Z" />
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
          <span className="text-white">Contacto</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Contacto
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-4">
          Estamos para asesorarle
        </p>

        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-sm text-gray-400 leading-relaxed max-w-2xl">
            Oficinas en Uruguay y Chile · Consultas sobre eficiencia energética,
            energías renovables, movilidad eléctrica y consultoría.
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
  { etiqueta: "Formulario de Contacto", href: "#formulario"  },
  { etiqueta: "Indicadores Energéticos", href: "#indicadores" },
  { etiqueta: "Trabajar en SEG",         href: "#trabaja"     },
];


/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: FORMULARIO + OFICINAS — bg-white — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */

function SeccionFormulario() {
  return (
    <section id="formulario" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* -- Formulario de contacto general ---------------------------- */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="text-[#ca3517]">
                <IconoFormulario className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Escríbanos</h2>
                <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
              </div>
            </div>

            <FormularioContacto />
          </div>

          {/* -- Información de oficinas ------------------------------------ */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-10">
              <div className="text-[#ca3517]">
                <IconoUbicacion className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Nuestras Oficinas</h2>
                <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
              </div>
            </div>

            {/* Oficina Uruguay */}
            <div className="bg-gray-50 rounded-xl p-7 border-t-4 border-[#ca3517]">
              <p className="text-xs font-black uppercase tracking-widest text-[#ca3517] mb-4">
                Oficina Uruguay
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-[#ca3517] mt-0.5 flex-shrink-0">
                    <IconoUbicacion className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">San Salvador 1907</p>
                    <p className="text-gray-600 text-sm">11200 — Montevideo, Uruguay</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-[#ca3517] flex-shrink-0">
                    <IconoTelefono className="w-5 h-5" />
                  </div>
                  <a
                    href="tel:+59824106970"
                    className="text-gray-700 text-sm hover:text-[#ca3517] transition-colors"
                  >
                    (598) 2410 6970
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-[#ca3517] flex-shrink-0">
                    <IconoEmail className="w-5 h-5" />
                  </div>
                  <a
                    href="mailto:uruguay@segingenieria.com"
                    className="text-gray-700 text-sm hover:text-[#ca3517] transition-colors"
                  >
                    uruguay@segingenieria.com
                  </a>
                </div>
              </div>
            </div>

            {/* Oficina Chile */}
            <div className="bg-gray-50 rounded-xl p-7 border-t-4 border-[#ca3517]">
              <p className="text-xs font-black uppercase tracking-widest text-[#ca3517] mb-4">
                Oficina Chile
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="text-[#ca3517] mt-0.5 flex-shrink-0">
                    <IconoUbicacion className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-semibold text-sm">Av. Las Condes 12461</p>
                    <p className="text-gray-600 text-sm">Oficina 601 Torre 3</p>
                    <p className="text-gray-600 text-sm">Las Condes — Santiago, Chile</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-[#ca3517] flex-shrink-0">
                    <IconoTelefono className="w-5 h-5" />
                  </div>
                  <div>
                    <a
                      href="tel:+56222351300"
                      className="text-gray-700 text-sm hover:text-[#ca3517] transition-colors block"
                    >
                      (562) 22351300
                    </a>
                    <a
                      href="tel:+56994308363"
                      className="text-gray-500 text-xs hover:text-[#ca3517] transition-colors"
                    >
                      Móvil: (569) 94308363
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-[#ca3517] flex-shrink-0">
                    <IconoEmail className="w-5 h-5" />
                  </div>
                  <a
                    href="mailto:chile@segingenieria.com"
                    className="text-gray-700 text-sm hover:text-[#ca3517] transition-colors"
                  >
                    chile@segingenieria.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: SUSCRIPCIÓN A INDICADORES — bg-gray-50 — Guía §4.1
══════════════════════════════════════════════════════════════════════════════ */
function SeccionIndicadores() {
  return (
    <section id="indicadores" className="py-16 bg-gray-50 scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Descripción */}
          <div>
            <div className="flex items-center gap-4 mb-10">
              <div className="text-[#ca3517]">
                <IconoIndicadores className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Indicadores Energéticos</h2>
                <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-base mb-6">
              ¿Desea recibir en su correo electrónico nuestros Indicadores Energéticos?
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-6">
              Complete el siguiente formulario para sumarse a nuestra base de
              distribución y recibir periódicamente los indicadores del sector
              energético elaborados por SEG Ingeniería.
            </p>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <p className="text-xs font-bold uppercase tracking-widest text-[#ca3517] mb-3">
                Recibirá información sobre
              </p>
              <ul className="space-y-2">
                {[
                  "Precios de energía eléctrica y combustibles",
                  "Indicadores de eficiencia energética",
                  "Novedades del sector renovable",
                  "Regulación y política energética",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-[#ca3517] font-bold mt-0.5 flex-shrink-0">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Formulario de suscripción */}
          <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
            <p className="text-sm font-semibold text-gray-700 mb-6">
              Completá tus datos para suscribirte:
            </p>

            <FormularioSuscripcion />
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center text-white">
        <div className="flex justify-center mb-6">
          <IconoPersona className="w-16 h-16 text-white/80" />
        </div>

        <div className="w-12 h-0.5 bg-white/40 mx-auto mb-8" />

        <h2 className="text-3xl font-bold mb-6">Trabajar en SEG</h2>

        <p className="text-white/85 leading-relaxed text-base mb-4 max-w-2xl mx-auto">
          ¿Desea trabajar con nosotros? Nos interesa incorporar al equipo nuevos
          talentos que demuestren capacidades en nuestras áreas de desarrollo.
        </p>

        <p className="text-white/80 leading-relaxed text-base mb-10 max-w-2xl mx-auto">
          Si tenés buena escolaridad, sos estudiante de carreras como
          Ingeniería, Ciencias Económicas, Administración, o creés que podés
          formar parte del equipo de SEG Ingeniería, envianos tu CV en formato
          Word o PDF a:
        </p>

        <a
          href="mailto:rrhh@segingenieria.com"
          className="inline-block border-2 border-white text-white font-bold text-lg px-10 py-4 rounded-full hover:bg-white hover:text-[#ca3517] transition-colors duration-200"
        >
          rrhh@segingenieria.com
        </a>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
══════════════════════════════════════════════════════════════════════════════ */
export default function PaginaContacto() {
  return (
    <>
      <SeccionHero />
      <NavegacionSeccion anclas={ANCLAS} />
      <SeccionFormulario />
      <SeccionIndicadores />
      <SeccionTrabaja />
    </>
  );
}
