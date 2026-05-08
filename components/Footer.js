/* ─── Ícono LinkedIn ───────────────────────────────────────────────────────── */
function IconoLinkedIn() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* ─── Ícono X (Twitter) ───────────────────────────────────────────────────── */
function IconoX() {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

/* ─── Columnas de navegación del footer ───────────────────────────────────── */
const COLUMNAS_NAV = [
  {
    id: "negocios",
    titulo: "Unidades de Negocio",
    links: [
      { etiqueta: "Eficiencia Energética", href: "/eficiencia-energetica" },
      { etiqueta: "Energías Renovables", href: "/energias-renovables" },
      { etiqueta: "Movilidad Eléctrica", href: "/movilidad-electrica" },
      { etiqueta: "SEG Consulting", href: "/seg-consulting" },
      { etiqueta: "SEG Heliotec", href: "/seg-heliotec" },
    ],
  },
  {
    id: "institucional",
    titulo: "Institucional",
    links: [
      { etiqueta: "Trayectoria", href: "/institucional#trayectoria" },
      { etiqueta: "Capital Humano", href: "/institucional#capital-humano" },
    ],
  },
  {
    id: "articulos",
    titulo: "Artículos",
    links: [
      { etiqueta: "Indicadores Energéticos", href: "/indicadores" },
      { etiqueta: "Novedades", href: "/novedades" },
      { etiqueta: "Prensa", href: "/prensa" },
    ],
  },
];

/* ─── Columna genérica de navegación ──────────────────────────────────────── */
function ColumnaNav({ columna }) {
  return (
    <div>
      <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
        {columna.titulo}
      </h4>
      <ul className="space-y-2">
        {columna.links.map((link) => (
          <li key={link.etiqueta}>
            <a
              href={link.href}
              className="text-sm text-gray-400 hover:text-[#ca3517] transition-colors duration-200"
            >
              {link.etiqueta}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ─── Separador diagonal naranja (SVG decorativo) ─────────────────────────── */
function SeparadorDiagonal() {
  return (
    <div className="relative h-16 bg-white overflow-hidden" aria-hidden="true">
      {/* Fondo oscuro del footer que asoma por debajo */}
      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Triángulo del fondo oscuro */}
        <polygon points="0,64 1440,10 1440,64" fill="#1a1a1a" />
        {/* Línea diagonal naranja/roja decorativa */}
        <line
          x1="0"
          y1="64"
          x2="1440"
          y2="10"
          stroke="#ca3517"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
}

/* ─── Footer principal ─────────────────────────────────────────────────────── */
export default function Footer() {
  return (
    <>
      <SeparadorDiagonal />

      <footer className="bg-[#1a1a1a] text-gray-400 pt-12 pb-6">
        <div className="max-w-7xl mx-auto px-4">

          {/* ── Grilla principal: columnas de links + contacto + oficinas ──── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-10">

            {/* Columnas de navegación */}
            {COLUMNAS_NAV.map((columna) => (
              <ColumnaNav key={columna.id} columna={columna} />
            ))}

            {/* ── Contacto ───────────────────────────────────────────────── */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
                Contacto
              </h4>
              <ul className="space-y-2 mb-4">
                <li>
                  <a
                    href="/contacto#indicadores"
                    className="text-sm text-gray-400 hover:text-[#ca3517] transition-colors duration-200"
                  >
                    Suscripción Indicadores
                  </a>
                </li>
                <li>
                  <a
                    href="/institucional#trabaja"
                    className="text-sm text-gray-400 hover:text-[#ca3517] transition-colors duration-200"
                  >
                    Trabaja en SEG
                  </a>
                </li>
              </ul>

              {/* Íconos de redes sociales */}
              <div className="flex gap-3">
                <a
                  href="https://uy.linkedin.com/company/seg-ingenieria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#0077b5] transition-colors duration-200"
                  aria-label="LinkedIn de SEG Ingeniería"
                >
                  <IconoLinkedIn />
                </a>
                <a
                  href="https://x.com/SEGIngenieria"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label="X (Twitter) de SEG Ingeniería"
                >
                  <IconoX />
                </a>
              </div>
            </div>

            {/* ── Oficina Uruguay ────────────────────────────────────────── */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
                Oficina Uruguay
              </h4>
              <address className="not-italic text-sm text-gray-400 leading-relaxed space-y-1">
                <p>San Salvador 1907 - 11200</p>
                <p>Montevideo, Uruguay</p>
                <p className="mt-2">
                  <a
                    href="tel:+59824106970"
                    className="hover:text-[#ca3517] transition-colors duration-200"
                  >
                    Tel: (598) 2410 6970
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:uruguay@segingenieria.com"
                    className="hover:text-[#ca3517] transition-colors duration-200 break-all"
                  >
                    uruguay@segingenieria.com
                  </a>
                </p>
              </address>
            </div>

            {/* ── Oficina Chile ──────────────────────────────────────────── */}
            <div>
              <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
                Oficina Chile
              </h4>
              <address className="not-italic text-sm text-gray-400 leading-relaxed space-y-1">
                <p>Av. Las Condes 12461</p>
                <p>oficina 601 torre 3</p>
                <p>Las Condes - Santiago</p>
                <p className="mt-2">
                  <a
                    href="tel:+56222351300"
                    className="hover:text-[#ca3517] transition-colors duration-200"
                  >
                    Tel: (562) 22351300
                  </a>
                </p>
                <p>
                  <a
                    href="tel:+56994308363"
                    className="hover:text-[#ca3517] transition-colors duration-200"
                  >
                    Móvil: (569) 94308363
                  </a>
                </p>
                <p>
                  <a
                    href="mailto:chile@segingenieria.com"
                    className="hover:text-[#ca3517] transition-colors duration-200 break-all"
                  >
                    chile@segingenieria.com
                  </a>
                </p>
              </address>
            </div>
          </div>

          {/* ── Barra inferior: logo + derechos + créditos ─────────────────── */}
          <div className="border-t border-gray-700/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              {/* Logo SEG placeholder */}
              <span className="bg-[#ca3517] text-white font-black text-base px-2.5 py-0.5 rounded tracking-wider">
                SEG
              </span>
              <span className="text-xs text-gray-500">
                Todos los derechos reservados ® 2012 SEG INGENIERÍA
              </span>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
