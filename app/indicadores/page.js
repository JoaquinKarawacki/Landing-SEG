import Link from "next/link";
import Image from "next/image";
import imagen1 from "@/img/indicador1.jpg";
import imagen2 from "@/img/indicador2.jpg";
import imagen3 from "@/img/indicador3.png";
import imagen4 from "@/img/indicador4.jpg";
import imagen5 from "@/img/indicador5.jpg";

export const metadata = {
  title: "Indicadores Energéticos | SEG Ingeniería",
  description:
    "Análisis mensuales sobre el sector energético en Uruguay y la región. Tendencias, consumo, renovables y eficiencia energética.",
};

/* ─── Datos de artículos ────────────────────────────────────────────────────── */
const ARTICULOS = [
  {
  id: 1,
  titulo: "Diciembre 2025. Destacados energéticos de Uruguay en 2025",
  fecha: "25/12/2025",
  mes: "Diciembre 2025",
  descripcion:
    "La demanda eléctrica alcanzó un máximo histórico de 12,5 TWh con una matriz 98,1% renovable. El pico de 2.507 MW del 7 de marzo fue el mayor en la historia. Las ventas de vehículos eléctricos superaron las 14.000 unidades, el 21% del mercado liviano.",
  href: "#",
  imagen: imagen1,
  posicion: "object-bottom",
  },
  {
    id: 2,
    titulo: "Noviembre 2025. El hidrógeno verde en el transporte pesado",
    fecha: "25/11/2025",
    mes: "Noviembre 2025",
    descripcion:
      "Uruguay da un paso concreto hacia la descarbonización con el Proyecto Kahirós, primer piloto nacional de hidrógeno verde para transporte pesado. Una planta solar de 4,2 MW alimentará un electrolizador PEM para abastecer ocho camiones de celda de combustible en Fray Bentos.",
    href: "#",
    imagen: imagen2,
  },
  {
    id: 3,
    titulo: "Octubre 2025. La nueva fase del gas natural licuado",
    fecha: "25/10/2025",
    mes: "Octubre 2025",
    descripcion:
      "El informe 'Gas 2025' de la AIE anticipa 300 bcm de nueva capacidad de exportación de GNL hacia 2030, un incremento del 50% respecto a hoy. EE.UU. liderará la expansión. En Uruguay, el gas natural representa el 1% de la oferta primaria y acumula una baja de 13,2% en 2025.",
    href: "#",
    imagen: imagen3,
  },
  {
    id: 4,
    titulo: "Setiembre 2025. El consumo energético de los hogares uruguayos",
    fecha: "25/09/2025",
    mes: "Setiembre 2025",
    descripcion:
      "El BNEU 2023 revela que por primera vez la electricidad supera a la leña como principal fuente energética de los hogares uruguayos (43% vs. 40%). Los calefones eléctricos concentran el 46% del consumo eléctrico residencial.",
    href: "#",
    imagen: imagen4,
    posicion: "object-center",
  },
  {
  id: 5,
  titulo: "Agosto 2025. 60 años del Balance Energético Nacional de Uruguay",
  fecha: "25/08/2025",
  mes: "Agosto 2025",
  descripcion:
    "El BEN 2024 muestra que la generación eléctrica fue 99% renovable y el factor de emisión cayó a un mínimo histórico de 6 tCO₂/GWh. Por primera vez, la biomasa superó a los combustibles fósiles en el consumo final de energía.",
  href: "#",
   imagen: imagen5,
},
];

/* ─── Ícono gráfico de barras ───────────────────────────────────────────────── */
function IconoIndicadores() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4" y="32" width="10" height="24" rx="2" />
      <rect x="20" y="20" width="10" height="36" rx="2" />
      <rect x="36" y="10" width="10" height="46" rx="2" />
      <rect x="52" y="24" width="10" height="32" rx="2" />
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
          <span className="text-white">Indicadores Energéticos</span>
        </nav>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Indicadores<br />
          <span className="text-[#ca3517]">Energéticos</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-8">
          Análisis mensuales del sector energético en Uruguay y la región
        </p>
        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
            Cada mes, nuestro equipo técnico elabora un informe con los principales indicadores
            energéticos: consumo, generación renovable, tarifas y tendencias del mercado.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Artículo card ─────────────────────────────────────────────────────────── */
function CardArticulo({ articulo }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow duration-200">
      {articulo.imagen ? (
        <div className="h-44 relative overflow-hidden">
          <Image
            src={articulo.imagen}
            alt={articulo.titulo}
            fill
            className={`object-cover ${articulo.posicion || "object-center"}`}
          />
        </div>
      ) : (
        <div className="bg-gray-200 h-44 flex items-center justify-center">
          <div className="text-[#ca3517]">
            <IconoIndicadores />
          </div>
        </div>
      )}
      <div className="p-5 flex flex-col flex-1">
        <span className="text-[#ca3517] text-xs font-bold uppercase tracking-wide mb-2">
          Indicadores Energéticos
        </span>
        <h3 className="font-bold text-gray-900 text-base leading-snug mb-3">
          <a href={articulo.href} className="hover:text-[#ca3517] transition-colors">
            {articulo.titulo}
          </a>
        </h3>
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-3">
          <IconoCalendario />
          <time>{articulo.fecha}</time>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
          {articulo.descripcion}
        </p>
      </div>
    </article>
  );
}

/* ─── Sección listado de artículos ─────────────────────────────────────────── */
function SeccionArticulos() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoIndicadores />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Últimas publicaciones</h2>
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

/* ─── Sección suscripción ───────────────────────────────────────────────────── */
function SeccionSuscripcion() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-[#ca3517] font-bold uppercase tracking-widest text-sm mb-2">
          Mantente informado
        </p>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Suscribite a los Indicadores
        </h2>
        <div className="w-16 h-1 bg-[#ca3517] mx-auto mb-6 rounded" />
        <p className="text-gray-600 leading-relaxed mb-8">
          Recibí cada mes en tu correo el informe de Indicadores Energéticos
          elaborado por el equipo técnico de SEG Ingeniería.
        </p>
        <Link
          href="/contacto#indicadores"
          className="inline-block bg-[#ca3517] text-white px-8 py-2.5 rounded-full font-semibold text-sm hover:bg-[#a82d12] transition-colors duration-200"
        >
          Suscribirme
        </Link>
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
        <h2 className="text-3xl font-bold mb-4">¿Querés saber más sobre eficiencia energética?</h2>
        <p className="text-gray-400 leading-relaxed mb-8">
          Nuestro equipo está disponible para asesorarte sobre proyectos de eficiencia
          y energías renovables para tu organización.
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

/* ─── Página Indicadores ────────────────────────────────────────────────────── */
export default function PaginaIndicadores() {
  return (
    <>
      <SeccionHero />
      <SeccionArticulos />
      <SeccionSuscripcion />
      <SeccionCTA />
    </>
  );
}
