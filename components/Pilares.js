/* ─── Ícono alcancía (eficiencia energética) ──────────────────────────────── */
function IconoEficiencia() {
  return (
    <svg
      className="w-16 h-16 text-white mx-auto mb-5"
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Cuerpo de la alcancía */}
      <ellipse cx="30" cy="36" rx="20" ry="16" />
      {/* Cabeza */}
      <circle cx="44" cy="24" r="6" />
      {/* Oreja */}
      <rect x="26" y="20" width="8" height="5" rx="2.5" />
      {/* Moneda (ranura) */}
      <rect x="22" y="25" width="10" height="2.5" rx="1.25" fill="rgba(0,0,0,0.3)" />
      {/* Patas */}
      <rect x="16" y="50" width="5" height="7" rx="2.5" />
      <rect x="26" y="51" width="5" height="7" rx="2.5" />
      <rect x="36" y="51" width="5" height="7" rx="2.5" />
      {/* Cola */}
      <path d="M50 36 Q58 30 56 40 Q58 44 50 42" fill="currentColor" />
      {/* Ojo */}
      <circle cx="40" cy="25" r="1.5" fill="rgba(0,0,0,0.5)" />
    </svg>
  );
}

/* ─── Ícono molino de viento (energías renovables) ────────────────────────── */
function IconoRenovable() {
  return (
    <svg
      className="w-16 h-16 text-white mx-auto mb-5"
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Torre */}
      <path d="M30 32 L26 60 L38 60 L34 32 Z" />
      {/* Centro del rotor */}
      <circle cx="32" cy="30" r="4" />
      {/* Aspa superior */}
      <path d="M32 26 L29 8 Q32 4 35 8 Z" />
      {/* Aspa inferior derecha */}
      <path d="M35.5 32 L52 42 Q54 46 50 48 Z" />
      {/* Aspa inferior izquierda */}
      <path d="M28.5 32 L12 42 Q10 46 14 48 Z" />
    </svg>
  );
}

/* ─── Ícono H₂ (hidrógeno verde) ──────────────────────────────────────────── */
function IconoHidrogeno() {
  return (
    <div
      className="w-16 h-16 flex items-end justify-center mx-auto mb-5 text-white select-none"
      aria-hidden="true"
    >
      <span className="text-5xl font-black leading-none">H</span>
      <span className="text-2xl font-black leading-none mb-1">2</span>
    </div>
  );
}

/* ─── Datos de los tres pilares de SEG ────────────────────────────────────── */
const PILARES = [
  {
    id: "eficiencia",
    Icono: IconoEficiencia,
    titulo: "Eficiencia energética",
    descripcion: "Mayor compañía de servicios energéticos del Uruguay",
    href: "#",
  },
  {
    id: "renovables",
    Icono: IconoRenovable,
    titulo: "Energías renovables",
    descripcion:
      "Mayor desarrollador uruguayo de energías renovables en la región",
    href: "#",
  },
  {
    id: "hidrogeno",
    Icono: IconoHidrogeno,
    titulo: "Hidrógeno Verde",
    descripcion: "Pioneros en nuevas tecnologías de punta en la región.",
    href: "#",
  },
];

/* ─── Sección pilares principales de SEG ──────────────────────────────────── */
export default function Pilares() {
  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: "#ca3517" }}
      aria-label="Pilares de SEG Ingeniería"
    >
      {/* Textura sutil para simular imagen de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#8a2410] opacity-80" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
          {PILARES.map((pilar) => (
            <article
              key={pilar.id}
              className="flex flex-col items-center text-center text-white"
            >
              <pilar.Icono />

              {/* Separador decorativo */}
              <div className="w-12 h-0.5 bg-white/40 mb-5" />

              <h3 className="text-2xl font-bold mb-3">{pilar.titulo}</h3>
              <p className="text-white/85 text-base leading-relaxed mb-7 max-w-xs">
                {pilar.descripcion}
              </p>

              <a
                href={pilar.href}
                className="border border-white/80 text-white px-7 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-[#ca3517] transition-all duration-200"
              >
                Más información
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
