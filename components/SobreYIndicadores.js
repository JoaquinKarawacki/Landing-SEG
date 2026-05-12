import Image from "next/image";
import imagenMar2026 from "@/img/imagenweb2603.jpg";
import imagenFeb2026 from "@/img/imagenweb2602.jpg";

/* ─── Ícono lamparita (sección "Sobre SEG") ───────────────────────────────── */
function IconoLamparita() {
  return (
    <svg
      className="w-12 h-12 text-[#ca3517] mb-4"
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Cuerpo de la lamparita */}
      <path d="M32 4C20.95 4 12 12.95 12 24c0 7.5 3.9 14.05 9.75 17.85L23 44h18l1.25-2.15C48.1 38.05 52 31.5 52 24 52 12.95 43.05 4 32 4z" />
      {/* Base */}
      <rect x="22" y="46" width="20" height="4" rx="2" />
      <rect x="24" y="52" width="16" height="4" rx="2" />
      <path d="M27 58 Q32 62 37 58 H27z" />
      {/* Brillo interno */}
      <path
        d="M26 16 Q32 12 38 20"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ─── Ícono gráfico de barras (sección "Indicadores") ─────────────────────── */
function IconoGrafico() {
  return (
    <svg
      className="w-12 h-12 text-[#ca3517] mb-4"
      viewBox="0 0 64 64"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="4" y="34" width="12" height="22" rx="2" />
      <rect x="20" y="22" width="12" height="34" rx="2" />
      <rect x="36" y="10" width="12" height="46" rx="2" />
      <rect x="52" y="16" width="8" height="40" rx="2" />
      {/* Eje horizontal */}
      <rect x="2" y="57" width="60" height="3" rx="1.5" />
    </svg>
  );
}

/* ─── Artículos de indicadores energéticos ────────────────────────────────── */
const ARTICULOS_INDICADORES = [
  {
    id: 1,
    periodo: "Marzo 2026",
    titulo: "La matriz energética de Uruguay sigue cambiando",
    descripcion:
      "El Balance Energético Preliminar 2025 confirma que la biomasa alcanza el 50% del abastecimiento energético y que la demanda eléctrica llegó a un nuevo máximo histórico.",
    href: "https://www.linkedin.com/posts/seg-ingenieria_energ%C3%ADa-uruguay-transici%C3%B3nenerg%C3%A9tica-activity-7450322296952639488-kb0I/?originalSubdomain=es",
    imagen: imagenMar2026,
  },
  {
    id: 2,
    periodo: "Febrero 2026",
    titulo: "El rápido avance de la movilidad eléctrica en Uruguay",
    descripcion:
      "Los vehículos eléctricos ya representan más del 2% del parque automotor. En 2025 se vendieron más de 14.000 unidades, el 21% del total de vehículos livianos.",
    href: "https://www.linkedin.com/posts/seg-ingenieria_movilidadelaezctrica-vehaedculoselaezctricos-activity-7439453792200445952-1P-H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFX0gPwBWDSrD1Q-Q4ceZikpq9s76k4U3fs",
    imagen: imagenFeb2026,
  },
];

/* ─── Ícono X / Twitter ───────────────────────────────────────────────────── */
function IconoX() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.26 5.632L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z" />
    </svg>
  );
}

/* ─── Placeholder de imagen ────────────────────────────────────────────────── */
function PlaceholderImagen({ descripcion, className }) {
  return (
    <div
      className={`bg-gray-200 flex items-center justify-center text-gray-400 text-xs text-center rounded ${className}`}
    >
      {descripcion}
    </div>
  );
}

/* ─── Sección "Sobre SEG" + "Indicadores energéticos" (2 columnas) ─────────── */
export default function SobreYIndicadores() {
  return (
    <section className="py-16 bg-white" aria-label="Sobre SEG e Indicadores">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20">

          {/* ── Columna izquierda: Sobre SEG Ingeniería ────────────────────── */}
          <div>
            <IconoLamparita />

            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sobre SEG Ingeniería
            </h2>

            <p className="text-[#ca3517] font-bold text-lg leading-snug mb-5">
              Fuimos parte de la revolución Energética uruguaya, somos parte de
              la revolución renovable latinoamericana
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              SEG Ingeniería es la primera consultora de reducción de costos
              energéticos del país. Líder en el área de eficiencia energética y
              optimización de costos en la región desde 1996. Nuestro equipo de
              expertos trabaja junto a empresas, industrias e instituciones para
              lograr un entorno energéticamente eficiente, sustentable y
              renovable.
            </p>

            <a
              href="https://www.linkedin.com/company/seg-ingenieria/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#ca3517] text-white px-8 py-2.5 rounded-full font-semibold text-sm hover:bg-[#a82d12] transition-colors duration-200"
            >
              Más información
            </a>
          </div>

          {/* ── Columna derecha: Indicadores energéticos ───────────────────── */}
          <div>
            <IconoGrafico />

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Indicadores energéticos
            </h2>

            {/* Lista de artículos recientes */}
            <div className="space-y-5 mb-6">
              {ARTICULOS_INDICADORES.map((articulo) => (
                <article
                  key={articulo.id}
                  className="flex gap-4 pb-5 border-b border-gray-100 last:border-0"
                >
                  {articulo.imagen ? (
                    <a
                      href={articulo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-shrink-0"
                    >
                      <Image
                        src={articulo.imagen}
                        alt={articulo.titulo}
                        width={96}
                        height={80}
                        className="w-24 h-20 object-cover rounded"
                      />
                    </a>
                  ) : (
                    <PlaceholderImagen
                      descripcion={`Imagen\n${articulo.periodo}`}
                      className="flex-shrink-0 w-24 h-20"
                    />
                  )}

                  <div className="flex flex-col justify-center">
                    <span className="text-[#ca3517] text-xs font-bold uppercase tracking-wide mb-1">
                      {articulo.periodo}
                    </span>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1.5">
                      <a
                        href={articulo.href}
                        target={articulo.href.startsWith("http") ? "_blank" : undefined}
                        rel={articulo.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="hover:text-[#ca3517] transition-colors"
                      >
                        {articulo.titulo}
                      </a>
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {articulo.descripcion}
                    </p>
                  </div>
                </article>
              ))}
            </div>

            {/* Mención a cuenta X / Twitter */}
            <a
              href="https://x.com/SEGIngenieria"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 text-sm mb-6 hover:text-black transition-colors"
            >
              <IconoX />
              <span className="font-semibold">@SEGIngenieria</span>
            </a>

            <a
              href="https://www.linkedin.com/company/seg-ingenieria/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-[#ca3517] text-[#ca3517] px-8 py-2.5 rounded-full font-semibold text-sm hover:bg-[#ca3517] hover:text-white transition-colors duration-200"
            >
              Más información
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
