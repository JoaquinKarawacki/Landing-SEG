import Link from "next/link";
import Image from "next/image";
import imagen1 from "@/img/novedad1.jpeg"
import imagen2 from "@/img/2025-12-22_seg_certificacion huella.jpg"
import imagen3 from "@/img/2025-12-23_creditos de la casa certificaciones ISO.jpg"
import imagen4 from "@/img/novedad4.jpeg"
import imagen5 from "@/img/novedad5.jpeg"

export const metadata = {
  title: "Novedades | SEG Ingeniería",
  description:
    "Últimas noticias y novedades de SEG Ingeniería: proyectos, reconocimientos, certificaciones y presencia internacional.",
};

/* ─── Datos de artículos ────────────────────────────────────────────────────── */
const ARTICULOS = [
    {
    id: 1,
    titulo: "Archidoc SAS obtiene la certificación de Huella de Carbono ISO 14064",
    fecha: "06/02/2026",
    categoria: "Reconocimientos",
    descripcion:
      "SEG Ingeniería acompañó a Archidoc SAS en la obtención de su certificación de Huella de Carbono ISO 14064, acreditando que sus emisiones de gases de efecto invernadero fueron cuantificadas y verificadas conforme a estándares internacionales.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7425592115109281793",
    Imagen: imagen1,
  },
  {
    id: 2,
    titulo: "SEG Ingeniería obtiene la certificación de Huella de Carbono ISO 14064",
    fecha: "07/01/2026",
    categoria: "Reconocimientos",
    descripcion:
      "SEG Ingeniería certificó su propio inventario de emisiones de gases de efecto invernadero bajo la norma ISO 14064, verificado por UNIT Uruguay. Creemos que la sostenibilidad debe comenzar por casa: medir y transparentar nuestras propias emisiones es un paso clave para acompañar con coherencia a las organizaciones que asesoramos.",
    href: "https://www.linkedin.com/posts/seg-ingenieria_huelladecarbono-iso14064-gestiaejnambiental-activity-7414720479082586112-z3mE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFX0gPwBWDSrD1Q-Q4ceZikpq9s76k4U3fs",
    Imagen: imagen2,
    posicion: "object-top",
  },
  {
    id: 3,
    titulo: "Crédito de la Casa obtiene la doble certificación ISO 50001 e ISO 14064",
    fecha: "31/12/2025",
    categoria: "Reconocimientos",
    descripcion:
      "Felicitamos a Crédito de la Casa por la obtención de la doble certificación ISO 50001 en Sistema de Gestión de la Energía e ISO 14064 en Huella de Carbono. Desde SEG Ingeniería acompañamos este proceso aportando soporte técnico para la implementación de ambas normas, orientados a generar mejoras operativas medibles y decisiones basadas en datos.",
    href: "https://www.linkedin.com/posts/seg-ingenieria_gestiaejnenergaeztica-iso50001-huelladecarbono-activity-7412168660263260160-Jspk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFX0gPwBWDSrD1Q-Q4ceZikpq9s76k4U3fs",
    Imagen: imagen3,
    posicion: "object-top",
  },
  {
    id: 4,
    titulo: "Grupo Disco Uruguay recibe mención en el Premio Nacional de Eficiencia Energética 2025",
    fecha: "2/12/2025",
    categoria: "Reconocimientos",
    descripcion:
      "Felicitamos a Grupo Disco Uruguay por la mención en el Premio Nacional de Eficiencia Energética 2025 del MIEM, que destaca su compromiso con la incorporación de equipamiento eficiente y la mejora continua en la gestión energética. Desde SEG Ingeniería acompañamos la implementación de su sistema de gestión ISO 50001.",
    href: "https://www.linkedin.com/posts/seg-ingenieria_eficienciaenergaeztica-premio-gestiaejnenergaeztica-activity-7401634682431352832-nbJE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFX0gPwBWDSrD1Q-Q4ceZikpq9s76k4U3fs",
    Imagen: imagen4,
  },
  {
    id: 5,
    titulo: "SEG Ingeniería participó en el H2LATAM Summit 2025 en Brasil",
    fecha: "09/10/2025",
    categoria: "Institucional",
    descripcion:
      "Nuestro socio Fernando Schaich fue invitado por la GIZ a integrar el panel sobre e-fuels en el H2LATAM Summit 2025 en Fortaleza, Brasil. Augusto Lanza también participó en representación de SEG Ingeniería, en un encuentro que reunió a referentes de gobiernos, empresas e instituciones de América Latina para analizar las oportunidades del hidrógeno verde en la transición energética regional.",
    href: "https://www.linkedin.com/posts/seg-ingenieria_hidraejgenoverde-transiciaejnenergaeztica-activity-7383917258844291072-nIIt?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFX0gPwBWDSrD1Q-Q4ceZikpq9s76k4U3fs",
    Imagen: imagen5,
  },
];

/* ─── Ícono megáfono ────────────────────────────────────────────────────────── */
function IconoNovedades() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M8 22h8v20H8a4 4 0 0 1-4-4V26a4 4 0 0 1 4-4z" />
      <path d="M16 22l28-14v36L16 30V22z" />
      <path d="M44 26a6 6 0 0 1 0 12" stroke="currentColor" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M22 42l4 10h6l-4-12" />
    </svg> 
  );
}

/* ─── Ícono calendario ──────────────────────────────────────────────────────── */
function IconoCalendario() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4" y="12" width="56" height="48" rx="4" fillOpacity="0.15" />
      <rect x="4" y="12" width="56" height="48" rx="4" stroke="currentColor" strokeWidth="4" fill="none" />
      <rect x="4" y="22" width="56" height="4" />
      <rect x="18" y="4" width="4" height="16" rx="2" />
      <rect x="42" y="4" width="4" height="16" rx="2" />
    </svg>
  );
}

/* ─── Hero ──────────────────────────────────────────────────────────────────── */
function SeccionHero() {
  return (
    <section className="relative bg-black overflow-hidden py-24 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ca3517]" />
      <div className="relative z-10 max-w-5xl mx-auto text-white">
        <nav className="mb-6 text-sm text-gray-400">
          <Link href="/" className="hover:text-[#ca3517] transition-colors">Home</Link>
          <span className="mx-2 text-gray-600">›</span>
          <span className="text-white">Novedades</span>
        </nav>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Novedades<br />
          <span className="text-[#ca3517]">SEG Ingeniería</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-8">
          Proyectos, reconocimientos y presencia internacional
        </p>
        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
            Seguí de cerca el trabajo de SEG Ingeniería: nuevos proyectos, certificaciones,
            participación en eventos internacionales y alianzas estratégicas.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Card artículo ─────────────────────────────────────────────────────────── */
function CardArticulo({ articulo }) {
  const img = articulo.imagen || articulo.Imagen;
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow duration-200">
      {img ? (
        <div className="h-44 relative overflow-hidden">
          <Image
            src={img}
            alt={articulo.titulo}
            fill
            className={`object-cover ${articulo.posicion || "object-center"}`}
          />
        </div>
      ) : (
        <div className="bg-gray-200 h-44 flex items-center justify-center">
          <div className="text-[#ca3517]">
            <IconoNovedades />
          </div>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[#ca3517] text-xs font-bold uppercase tracking-wide mb-2">
          {articulo.categoria}
        </span>
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-3">
          <a href={articulo.href} className="hover:text-[#ca3517] transition-colors">
            {articulo.titulo}
          </a>
        </h3>
        <div className="flex-1" />
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
          <IconoCalendario />
          <time>{articulo.fecha}</time>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3 line-clamp-4">
          {articulo.descripcion}
        </p>
      </div>
    </article>
  );
}

/* ─── Sección listado ───────────────────────────────────────────────────────── */
function SeccionArticulos() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoNovedades />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Últimas novedades</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICULOS.map((articulo) => (
            <CardArticulo key={articulo.id} articulo={articulo} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Sección destacados ────────────────────────────────────────────────────── */
function SeccionDestacados() {
  const destacados = [
    { numero: "2024", label: "Premio Nacional de Eficiencia Energética" },
    { numero: "ISO 50001", label: "Certificaciones acompañadas" },
    { numero: "5+", label: "Países con presencia activa" },
  ];

  return (
    <section className="py-16 relative overflow-hidden" style={{ backgroundColor: "#ca3517" }}>
      <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#8a2410] opacity-80" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <p className="text-white/70 uppercase text-xs tracking-widest mb-2">Nuestro impacto</p>
          <h2 className="text-3xl font-bold text-white mb-2">SEG en números</h2>
          <div className="w-12 h-0.5 bg-white/40 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {destacados.map((item) => (
            <div key={item.label}>
              <div className="text-4xl font-black mb-2">{item.numero}</div>
              <p className="text-white/80 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ────────────────────────────────────────────────────────────────────── */
function SeccionCTA() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-white/50 uppercase text-xs tracking-widest mb-4">SEG Ingeniería</p>
        <h2 className="text-3xl font-bold mb-4">¿Querés trabajar con nosotros?</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Sumá tu organización a la red de empresas que ya confían en SEG Ingeniería
          para sus proyectos de eficiencia y energías renovables.
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

/* ─── Página Novedades ──────────────────────────────────────────────────────── */
export default function PaginaNovedades() {
  return (
    <>
      <SeccionHero />
      <SeccionArticulos />
      <SeccionDestacados />
      <SeccionCTA />
    </>
  );
}
