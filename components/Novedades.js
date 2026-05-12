import Image from "next/image";
import imagenCertSEG from "@/img/2025-12-22_seg_certificacion huella.jpg";
import imagenCertCasa from "@/img/2025-12-23_creditos de la casa certificaciones ISO.jpg";
import imagenMercadoElectrico from "@/img/1778542229765.jpeg";

/* ─── Datos de las últimas novedades ──────────────────────────────────────── */
const NOVEDADES = [
  {
    id: 1,
    categoria: "Mercado Eléctrico",
    titulo: "Precio spot del mercado eléctrico en Uruguay cae a su menor valor de 2026",
    fecha: "05/05/2026",
    descripcion:
      "El precio spot promedió 33 USD/MWh en abril, mientras que el promedio anual móvil descendió a 45 USD/MWh. Según datos de la Administración del Mercado Eléctrico.",
    href: "https://www.linkedin.com/posts/seg-ingenieria_mercadoelaezctrico-spot-electricidad-activity-7459918298890039296-tgEL?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFX0gPwBWDSrD1Q-Q4ceZikpq9s76k4U3fs",
    imagen: imagenMercadoElectrico,
    claseImagen: "object-cover object-top",
  },
  {
    id: 2,
    categoria: "Certificaciones",
    titulo: "SEG Ingeniería obtiene la certificación de Huella de Carbono, norma ISO 14064",
    fecha: "12/05/2026",
    descripcion:
      "SEG Ingeniería refuerza su liderazgo en sostenibilidad al obtener la certificación de Huella de Carbono bajo la norma internacional ISO 14064.",
    href: "#",
    imagen: imagenCertSEG,
  },
  {
    id: 3,
    categoria: "Certificaciones",
    titulo: "Certificaciones ISO 50001 e ISO 14064 para Crédito de la Casa",
    fecha: "31/12/2025",
    descripcion:
      "Crédito de la Casa alcanza las certificaciones ISO 50001 de gestión de energía e ISO 14064 de huella de carbono, consolidando su compromiso ambiental.",
    href: "https://www.linkedin.com/posts/gestiaejnenergaeztica-iso50001-huelladecarbono-share-7412105864926633984-mc7g?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFX0gPwBWDSrD1Q-Q4ceZikpq9s76k4U3fs",
    imagen: imagenCertCasa,
  },
];

/* ─── Card individual de novedad ──────────────────────────────────────────── */
function CardNovedad({ novedad }) {
  const esExterno = novedad.href.startsWith("http");

  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
      <a
        href={novedad.href}
        target={esExterno ? "_blank" : undefined}
        rel={esExterno ? "noopener noreferrer" : undefined}
        className="block"
      >
        {novedad.imagen ? (
          <Image
            src={novedad.imagen}
            alt={novedad.titulo}
            width={600}
            height={192}
            className={`w-full h-48 ${novedad.claseImagen ?? "object-cover"}`}
          />
        ) : (
          <div className="bg-gray-300 h-48 flex items-center justify-center text-gray-500 text-sm">
            Imagen novedad
          </div>
        )}
      </a>

      <div className="p-5 flex flex-col flex-1">
        <span className="text-[#ca3517] text-xs font-bold uppercase tracking-wide mb-2">
          {novedad.categoria}
        </span>

        <h3 className="font-bold text-gray-900 text-base leading-snug mb-2 flex-1">
          <a
            href={novedad.href}
            target={esExterno ? "_blank" : undefined}
            rel={esExterno ? "noopener noreferrer" : undefined}
            className="hover:text-[#ca3517] transition-colors duration-200"
          >
            {novedad.titulo}
          </a>
        </h3>

        <time className="text-gray-400 text-xs mb-3 block" dateTime={novedad.fecha}>
          {novedad.fecha}
        </time>

        <p className="text-gray-600 text-sm leading-relaxed">
          {novedad.descripcion}
        </p>
      </div>
    </article>
  );
}

/* ─── Sección Últimas Novedades ────────────────────────────────────────────── */
export default function Novedades() {
  return (
    <section className="py-16 relative overflow-hidden" aria-label="Últimas novedades">
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#7a1e09]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Últimas novedades
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NOVEDADES.map((novedad) => (
            <CardNovedad key={novedad.id} novedad={novedad} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#"
            className="inline-block border-2 border-white text-white font-semibold px-10 py-3 rounded-full hover:bg-white hover:text-[#ca3517] transition-colors duration-200"
          >
            Ver Todas
          </a>
        </div>
      </div>
    </section>
  );
}
