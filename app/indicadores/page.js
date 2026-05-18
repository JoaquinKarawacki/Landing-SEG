import Link from "next/link";
import Image from "next/image";
import imagen4 from "@/img/indicador1.jpg";
import imagen5 from "@/img/indicador2.jpg";
import imagen3 from "@/img/indicador3.jpg";
import imagenMar2026 from "@/img/imagenweb2603.jpg";
import imagenFeb2026 from "@/img/imagenweb2602.jpg";

export const metadata = {
  title: "Indicadores Energéticos | SEG Ingeniería",
  description:
    "Análisis mensuales sobre el sector energético en Uruguay y la región. Tendencias, consumo, renovables y eficiencia energética.",
};

/* ─── Datos de artículos ────────────────────────────────────────────────────── */
const ARTICULOS = [
  {
    id: 1,
    titulo: "Marzo 2026. La matriz energética de Uruguay sigue cambiando",
    fecha: "26/03/2026",
    descripcion:
        "El Balance Energético Preliminar 2025 muestra que la biomasa alcanzó el 50,2% del abastecimiento energético total, la primera vez que una fuente supera la mitad de la matriz. El petróleo cayó al 33,6%, su valor más bajo desde 1965. La demanda eléctrica llegó a un nuevo máximo histórico de 13,5 TWh, con cinco años consecutivos de crecimiento y una matriz 98% renovable.",
    href: "/indicadores",
    imagen: imagenMar2026,
  },
  {
    id: 2,
    titulo: "Febrero 2026. El rápido avance de la movilidad eléctrica en Uruguay",
    fecha: "26/02/2026",
    descripcion:
      "En 2025 se vendieron más de 14.000 vehículos eléctricos en Uruguay, el 21% del total de livianos, y en apenas cuatro años el parque eléctrico creció casi 30 veces. En el primer bimestre de 2026 los eléctricos ya representaron el 31% de las ventas. El costo de recorrer 10.000 km con carga domiciliaria es hasta un 90% menor que en un vehículo a nafta.",
    href: "/indicadores",
    imagen: imagenFeb2026,
  },
  {
    id: 3,
    titulo: "Enero 2026. La era de la electricidad y la transformación del sistema eléctrico",
    fecha: "25/01/2026",
    mes: "Enero 2026",
    descripcion:
      "El informe 'Electricity 2026' de la AIE proyecta que el consumo eléctrico mundial crecerá 3,6% anual entre 2026 y 2030, un ritmo 50% superior al de la década previa. En EE.UU., los centros de datos explicarán casi la mitad del crecimiento. Uruguay, con una matriz 99% renovable y emisiones de apenas 6 g CO₂/kWh, está estructuralmente bien posicionado ante la nueva era eléctrica.",
    href: "#",
    imagen: imagen3,
  },
  {
    id: 4,
    titulo: "Diciembre 2025. Destacados energéticos de Uruguay en 2025",
    fecha: "25/12/2025",
    mes: "Diciembre 2025",
    descripcion:
      "La demanda eléctrica alcanzó un máximo histórico de 12,5 TWh con una matriz 98,1% renovable. El pico de 2.507 MW del 7 de marzo fue el mayor en la historia. Las ventas de vehículos eléctricos superaron las 14.000 unidades, el 21% del mercado liviano.",
    href: "#",
    imagen: imagen4,
    posicion: "object-bottom",
  },
  {
    id: 5,
    titulo: "Noviembre 2025. El hidrógeno verde en el transporte pesado",
    fecha: "25/11/2025",
    mes: "Noviembre 2025",
    descripcion:
      "Uruguay da un paso concreto hacia la descarbonización con el Proyecto Kahirós, primer piloto nacional de hidrógeno verde para transporte pesado. Una planta solar de 4,2 MW alimentará un electrolizador PEM para abastecer ocho camiones de celda de combustible en Fray Bentos.",
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
