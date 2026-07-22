import Link from "next/link";
import NavegacionSeccion from "@/components/NavegacionSeccion";

export const metadata = {
  title: "Eficiencia Energética — SEG Ingeniería",
  description:
    "Mayor compañía de servicios energéticos del Uruguay. Más de USD 10 millones en inversiones de Eficiencia Energética financiadas mediante contratos de desempeño.",
};

/* ══════════════════════════════════════════════════════════════════════════════
   ÍCONOS SVG (inline, sin dependencias externas)
══════════════════════════════════════════════════════════════════════════════ */

function IconoLamparita() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 4C20.95 4 12 12.95 12 24c0 7.5 3.9 14.05 9.75 17.85L23 44h18l1.25-2.15C48.1 38.05 52 31.5 52 24 52 12.95 43.05 4 32 4z" />
      <rect x="22" y="46" width="20" height="4" rx="2" />
      <rect x="24" y="52" width="16" height="4" rx="2" />
      <path d="M27 58 Q32 62 37 58 H27z" />
    </svg>
  );
}

function IconoLlama() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 4C24 16 20 22 20 32a12 12 0 0024 0c0-4-2-8-4-10 0 4-2 6-4 6-2-4-4-8-4-24z" />
      <path d="M28 36c0 2.2 1.8 4 4 4s4-1.8 4-4-1.8-4-4-6c0 2-2 4-4 6z" />
    </svg>
  );
}

function IconoGotaAgua() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M32 6 C32 6 10 32 10 44 a22 22 0 0 0 44 0 C54 32 32 6 32 6z" />
    </svg>
  );
}

function IconoMedidor() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="6" y="14" width="52" height="36" rx="4" fill="none" stroke="currentColor" strokeWidth="3" />
      <rect x="6" y="14" width="52" height="10" rx="4" />
      <circle cx="20" cy="38" r="6" />
      <circle cx="44" cy="38" r="6" />
      <rect x="29" y="35" width="6" height="6" rx="1" />
    </svg>
  );
}

function IconoVerificacion() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" aria-hidden="true">
      <circle cx="32" cy="32" r="26" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M20 33l8 8 16-18" />
    </svg>
  );
}

function IconoGrafico() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <rect x="4" y="34" width="10" height="22" rx="2" />
      <rect x="18" y="22" width="10" height="34" rx="2" />
      <rect x="32" y="10" width="10" height="46" rx="2" />
      <rect x="46" y="18" width="10" height="38" rx="2" />
      <rect x="2" y="57" width="60" height="3" rx="1.5" />
    </svg>
  );
}

function IconoEngranaje() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M54.2 36.8l-4.1-.7a18.7 18.7 0 0 0-1.4-3.4l2.5-3.3-4.6-4.6-3.3 2.5a18.7 18.7 0 0 0-3.4-1.4l-.7-4.1h-6.4l-.7 4.1a18.7 18.7 0 0 0-3.4 1.4l-3.3-2.5-4.6 4.6 2.5 3.3a18.7 18.7 0 0 0-1.4 3.4l-4.1.7v6.4l4.1.7a18.7 18.7 0 0 0 1.4 3.4l-2.5 3.3 4.6 4.6 3.3-2.5a18.7 18.7 0 0 0 3.4 1.4l.7 4.1h6.4l.7-4.1a18.7 18.7 0 0 0 3.4-1.4l3.3 2.5 4.6-4.6-2.5-3.3a18.7 18.7 0 0 0 1.4-3.4l4.1-.7v-6.4zM32 43a11 11 0 1 1 0-22 11 11 0 0 1 0 22z" />
    </svg>
  );
}


function IconoBoltEnergy() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M38 4 L14 34 H28 L24 60 L52 28 H36 L38 4z" />
    </svg>
  );
}

function IconoHojaAmbiental() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M52 8C36 10 18 20 14 42c5-3 13-5 19-3-3 8-9 14-17 14 4 4 8 4 14 4 18 0 30-12 30-28 0-8-2-15-8-21z" />
      <rect x="12" y="42" width="4" height="14" rx="2" />
    </svg>
  );
}

function IconoNubeEmisiones() {
  return (
    <svg className="w-10 h-10" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
      <path d="M46 24a12 12 0 00-23.4-3.2A10 10 0 0012 34h34a9 9 0 000-10z" />
      <rect x="20" y="38" width="4" height="10" rx="2" />
      <rect x="30" y="38" width="4" height="14" rx="2" />
      <rect x="40" y="38" width="4" height="8" rx="2" />
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: HERO BANNER
══════════════════════════════════════════════════════════════════════════════ */
function SeccionHero() {
  return (
    <section className="relative bg-black overflow-hidden py-24 px-4">
      {/* Fondo degradado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black" />
      {/* Acento lateral rojo */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#ca3517]" />

      <div className="relative z-10 max-w-5xl mx-auto text-white">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-400" aria-label="Ubicación en el sitio">
          <Link href="/" className="hover:text-[#ca3517] transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-600">›</span>
          <span className="text-white">Eficiencia Energética</span>
        </nav>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-5 leading-tight">
          Eficiencia Energética
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 font-light mb-6">
          Mayor Compañía De Servicios Energéticos Del Uruguay
        </p>

        {/* Estadística destacada */}
        <div className="inline-block border-l-4 border-[#ca3517] pl-5 py-2">
          <p className="text-base sm:text-lg text-gray-200 leading-relaxed max-w-2xl">
            Más de{" "}
            <strong className="text-white text-xl">USD 10 millones</strong> de
            inversiones en Eficiencia Energética financiadas a clientes mediante
            contratos de desempeño.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   NAVEGACIÓN INTERNA (anclas de sección)
══════════════════════════════════════════════════════════════════════════════ */
const ANCLAS_INTERNAS = [
  { etiqueta: "Propuesta de Valor", href: "#propuesta-valor" },
  { etiqueta: "Áreas de Estudio", href: "#areas-estudio" },
  { etiqueta: "Metodología", href: "#metodologia" },
  { etiqueta: "Gestión Integral para la Sostenibilidad", href: "#iso-50001" },
  { etiqueta: "SEG Smart", href: "#gestion-remota" },
];


/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: PROPUESTA DE VALOR
══════════════════════════════════════════════════════════════════════════════ */
function SeccionPropuestaValor() {
  return (
    <section id="propuesta-valor" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Encabezado de sección */}
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoVerificacion />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Propuesta de Valor</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        {/* Tres pilares de la propuesta */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 rounded-xl p-7 border-t-4 border-[#ca3517]">
            <h3 className="font-bold text-gray-900 text-lg mb-3">Orientados a resultados</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Somos socios de las empresas que nos contratan. Trabajamos con una
              propuesta orientada a resultados y nuestros honorarios son sujetos
              a éxito.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-7 border-t-4 border-[#ca3517]">
            <h3 className="font-bold text-gray-900 text-lg mb-3">Soluciones llave en mano</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Presentamos a nuestros clientes soluciones llave en mano. SEG puede
              financiar las inversiones y recuperarlas con el ahorro logrado.
              Brindamos toda la información necesaria para una toma de decisión
              profesional.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-7 border-t-4 border-[#ca3517]">
            <h3 className="font-bold text-gray-900 text-lg mb-3">Doble compromiso</h3>
            <p className="text-gray-600 leading-relaxed text-sm">
              Buscamos la Eficiencia Energética por el doble cometido de generar
              ahorros económicos y contribuir con el cuidado del medio ambiente y
              la sostenibilidad.
            </p>
          </div>
        </div>

        {/* Texto sobre el equipo */}
        <div className="max-w-4xl mx-auto bg-[#ca3517] text-white rounded-xl p-8 text-center">
          <p className="text-lg leading-relaxed mb-3">
            SEG Ingeniería cuenta con un prestigioso equipo de profesionales de
            diversas orientaciones académicas para realizar proyectos de
            Eficiencia Energética.
          </p>
          <p className="text-white/85 text-sm leading-relaxed">
            Existe un alto nivel de especialización en sus integrantes, que
            incluyen diplomas de Maestría en Energía y la Certificación en el
            uso del Protocolo Internacional de Medición y Verificación{" "}
            <strong className="text-white">(CMVP)</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: ÁREAS DE ESTUDIO
══════════════════════════════════════════════════════════════════════════════ */
const AREAS = [
  {
    id: "iluminacion",
    Icono: IconoLamparita,
    titulo: "Iluminación",
    descripcion:
      "Análisis y optimización de sistemas de iluminación. Sustitución por tecnología LED de alta eficiencia, automatización, sensores de presencia y aprovechamiento de luz natural.",
    items: [
      "Auditoría del sistema de iluminación actual",
      "Diseño de soluciones LED eficientes",
      "Sistemas de control y automatización",
      "Cálculo de ahorro y retorno de inversión",
    ],
  },
  {
    id: "combustibles",
    Icono: IconoLlama,
    titulo: "Combustibles",
    descripcion:
      "Optimización del uso de combustibles en calderas, quemadores y procesos térmicos. Medición y análisis de humos de combustión para maximizar la eficiencia térmica.",
    items: [
      "Análisis de eficiencia de calderas",
      "Medición de humos de combustión",
      "Optimización de procesos térmicos",
      "Propuesta de mejoras y sustituciones",
    ],
  },
  {
    id: "agua",
    Icono: IconoGotaAgua,
    titulo: "Agua",
    descripcion:
      "Estudio del consumo hídrico en procesos industriales y edilicio. Detección de fugas, optimización de caudales y sistemas de recuperación y reutilización de agua.",
    items: [
      "Análisis de sistemas de agua",
      "Detección y corrección de fugas",
      "Optimización de caudales y presiones",
      "Sistemas de recuperación de agua",
    ],
  },
];

function SeccionAreasEstudio() {
  return (
    <section id="areas-estudio" className="py-16 bg-gray-50 scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoGrafico />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Áreas de Estudio</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-3xl">
          Trabajamos en diversas áreas buscando las medidas de conservación de
          la energía que más favorecen a nuestros clientes, entre las que se
          encuentran:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AREAS.map((area) => (
            <article key={area.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
              {/* Cabecera de la card */}
              <div className="bg-[#ca3517] p-6 text-white flex flex-col items-center text-center">
                <div className="mb-3">
                  <area.Icono />
                </div>
                <h3 className="text-xl font-bold">{area.titulo}</h3>
              </div>

              {/* Contenido */}
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {area.descripcion}
                </p>
                <ul className="space-y-2">
                  {area.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-[#ca3517] font-bold mt-0.5 flex-shrink-0">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: METODOLOGÍA + EQUIPAMIENTO
══════════════════════════════════════════════════════════════════════════════ */
const EQUIPAMIENTO = [
  "Medidor de Parámetros Eléctricos",
  "Registrador de Corriente y Energía",
  "Registrador de Humos de Combustión",
  "Analizador de Calidad de Agua",
  "Analizador de Humedad de Leña",
  "Luxómetros",
  "Cámara Termografía",
  "Analizador de Trampas de Vapor",
  "Detector de Fugas de Aire Comprimido",
  "Registrador de Caudal y Presión del Aire",
  "Registrador de Flujo de Líquidos",
  "Registrador de Temperatura, entre otros",
];

const ETAPAS_PROCESO = [
  {
    numero: "01",
    titulo: "Diagnóstico Energético",
    descripcion:
      "Relevamiento del consumo y análisis del perfil energético de la organización para identificar oportunidades de mejora.",
  },
  {
    numero: "02",
    titulo: "Identificación de Oportunidades",
    descripcion:
      "Detección y priorización de medidas de conservación de la energía con mayor potencial de ahorro y viabilidad.",
  },
  {
    numero: "03",
    titulo: "Implementación",
    descripcion:
      "Ejecución de las mejoras acordadas. SEG puede financiar las inversiones y recuperarlas con el ahorro generado.",
  },
  {
    numero: "04",
    titulo: "Verificación y Seguimiento",
    descripcion:
      "Medición y verificación de los ahorros obtenidos mediante el Protocolo Internacional de Medición y Verificación (IPMVP).",
  },
];

function SeccionMetodologia() {
  return (
    <section id="metodologia" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoEngranaje />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Metodología</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <p className="text-gray-600 mb-10 max-w-3xl text-base leading-relaxed">
          Las etapas del proceso se podrían esquematizar de la siguiente manera:
        </p>

        {/* Pasos del proceso */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ETAPAS_PROCESO.map((etapa, indice) => (
            <div key={etapa.numero} className="relative">
              {/* Conector entre pasos (no se muestra en el último) */}
              {indice < ETAPAS_PROCESO.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#ca3517]/30 z-0" style={{ width: "calc(100% - 2rem)" }} />
              )}
              <div className="relative z-10 bg-gray-50 rounded-xl p-6 border border-gray-100 h-full">
                <div className="text-[#ca3517] font-black text-3xl mb-3 leading-none">
                  {etapa.numero}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{etapa.titulo}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{etapa.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Equipamiento */}
        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-[#ca3517]">
              <IconoMedidor />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Equipamiento de Medición</h3>
          </div>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            Contamos con el mayor equipamiento innovador para la medición y
            control de parámetros claves, entre los que se encuentran:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
            {EQUIPAMIENTO.map((equipo) => (
              <div key={equipo} className="flex items-start gap-2 text-sm text-gray-700 py-1.5 border-b border-gray-200 last:border-0">
                <span className="text-[#ca3517] font-bold flex-shrink-0 mt-0.5">›</span>
                {equipo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: GESTIÓN INTEGRAL PARA LA SOSTENIBILIDAD
══════════════════════════════════════════════════════════════════════════════ */
const NORMAS_ISO = [
  {
    codigo: "ISO 50001",
    titulo: "Gestión de la energía",
    foco: "FOCO ENERGÍA",
    descripcion:
      "Establece los requisitos para implementar un sistema que permita el uso eficiente de la energía y la mejora continua del desempeño energético.",
    Icono: IconoBoltEnergy,
  },
  {
    codigo: "ISO 14001",
    titulo: "Gestión ambiental",
    foco: "FOCO AMBIENTE",
    descripcion:
      "Define el marco para identificar, controlar y mejorar los impactos ambientales de la organización, asegurando el cumplimiento normativo.",
    Icono: IconoHojaAmbiental,
  },
  {
    codigo: "ISO 14064",
    titulo: "Gases de efecto invernadero",
    foco: "FOCO EMISIONES",
    descripcion:
      "Especifica principios y requisitos para cuantificar, reportar y verificar las emisiones de GEI y construir la huella de carbono.",
    Icono: IconoNubeEmisiones,
  },
];

const FASES_PHVA = [
  {
    letra: "P",
    nombre: "Planificar",
    color: "bg-[#ca3517]",
    descripcion:
      "Establecer la política, los objetivos y los planes de acción para mejorar el desempeño del sistema.",
  },
  {
    letra: "H",
    nombre: "Hacer",
    color: "bg-[#a82d12]",
    descripcion:
      "Implementar los planes definidos para alcanzar los objetivos y metas del sistema de gestión.",
  },
  {
    letra: "V",
    nombre: "Verificar",
    color: "bg-[#8a2410]",
    descripcion:
      "Monitorear, medir y analizar los procesos y las características clave que determinan el desempeño.",
  },
  {
    letra: "A",
    nombre: "Actuar",
    color: "bg-[#6e1c0c]",
    descripcion:
      "Tomar acciones para mejorar continuamente el desempeño del sistema de gestión.",
  },
];

const BENEFICIOS_SGE = [
  { titulo: "Reducción de emisiones de GEI",  descripcion: "Menor huella de carbono e impactos ambientales relacionados." },
  { titulo: "Reducción de costos",             descripcion: "Menor consumo energético y de recursos, optimización operativa." },
  { titulo: "Productividad y calidad",         descripcion: "Mejora de la confiabilidad de procesos y rendimiento." },
  { titulo: "Conocimiento del consumo",        descripcion: "Información clara sobre el uso de energía y recursos." },
  { titulo: "Cumplimiento normativo",          descripcion: "Cumplimiento de requisitos legales y regulatorios aplicables." },
  { titulo: "Competitividad e imagen",         descripcion: "Diferenciación en el mercado y reputación corporativa." },
  { titulo: "Trazabilidad y transparencia",    descripcion: "Reportes verificables hacia clientes, inversores y comunidad." },
  { titulo: "Contribución a los ODS",          descripcion: "Alineación con la Agenda 2030 de desarrollo sostenible." },
];

const STATS_ISO = [
  { stat: "3",    titulo: "Normas ISO integradas", sub: "Energía, ambiente y emisiones articuladas" },
  { stat: "PHVA", titulo: "Metodología",           sub: "Mejora continua aplicada de forma sistemática" },
  { stat: "ODS",  titulo: "Agenda 2030",           sub: "Alineación con Objetivos de Desarrollo Sostenible" },
];

function SeccionISO50001() {
  return (
    <section id="iso-50001" className="py-16 bg-gray-50 scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">

        {/* ── Encabezado ── */}
        <div className="flex items-center gap-4 mb-4">
          <div className="text-[#ca3517]"><IconoVerificacion /></div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Gestión Integral para la Sostenibilidad</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-3xl">
          Sistemas de gestión bajo estándares ISO para integrar eficiencia energética,
          gestión ambiental y reducción de la huella de carbono.
        </p>

        {/* ── Showcase de normas ISO (gradiente rojo, 3 columnas) ── */}
        <div className="relative rounded-2xl overflow-hidden mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ca3517] via-[#b83015] to-[#8a2410]" />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
            {NORMAS_ISO.map((norma) => (
              <div key={norma.codigo} className="p-8 flex flex-col">
                <div className="text-white mb-5"><norma.Icono /></div>
                <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-2">{norma.codigo}</p>
                <h3 className="text-xl font-bold text-white mb-3">{norma.titulo}</h3>
                <p className="text-white/75 text-sm leading-relaxed flex-1">{norma.descripcion}</p>
                <span className="mt-6 self-start text-xs font-bold uppercase tracking-widest text-white/60 border border-white/25 px-3 py-1 rounded-full">
                  {norma.foco}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-3 gap-6 mb-8">
          {STATS_ISO.map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm text-center">
              <div className="text-[#ca3517] font-black text-6xl leading-none mb-2">{item.stat}</div>
              <div className="w-8 h-0.5 bg-[#ca3517] mx-auto mb-3 rounded" />
              <p className="font-bold text-gray-900 text-sm mb-1">{item.titulo}</p>
              <p className="text-gray-500 text-xs leading-relaxed">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* ── Callout: Un enfoque integral ── */}
        <div className="border-l-4 border-[#ca3517] bg-white pl-8 pr-6 py-6 rounded-r-2xl shadow-sm mb-12">
          <p className="text-[#ca3517] text-xs font-bold uppercase tracking-widest mb-2">PROPUESTA DE VALOR</p>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Un enfoque integral</h3>
          <p className="text-gray-600 text-base leading-relaxed mb-2">
            Acompañamos a las organizaciones en la implementación y certificación de sistemas
            de gestión bajo estándares ISO.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Articulamos eficiencia energética, gestión ambiental y reducción de la huella de
            carbono en una estrategia única, alineada con los Objetivos de Desarrollo Sostenible.
          </p>
        </div>

        {/* ── Ciclo PHVA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Ciclo de mejora continua PHVA</h3>
            <div className="w-16 h-0.5 bg-[#ca3517] mb-4 rounded" />
            <p className="text-gray-600 text-base leading-relaxed">
              La metodología Planificar-Hacer-Verificar-Actuar es común a las tres normas y
              articula un proceso de mejora continua que permite consolidar resultados y elevar
              progresivamente el desempeño del sistema de gestión.
            </p>
          </div>
          <div className="space-y-3">
            {FASES_PHVA.map((fase) => (
              <div key={fase.letra} className="flex items-start gap-4 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                <div className={`${fase.color} text-white w-12 h-12 rounded-lg flex items-center justify-center font-black text-2xl flex-shrink-0`}>
                  {fase.letra}
                </div>
                <div>
                  <p className="font-bold text-[#ca3517] text-sm mb-0.5">{fase.nombre}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{fase.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Beneficios ── */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Beneficios para la organización</h3>
          <div className="w-16 h-0.5 bg-[#ca3517] mb-4 rounded" />
          <p className="text-gray-600 text-base leading-relaxed mb-8 max-w-3xl">
            Implementar estos sistemas de gestión genera valor en múltiples dimensiones
            de la organización.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {BENEFICIOS_SGE.map((beneficio, indice) => (
              <div
                key={beneficio.titulo}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
              >
                <span className="flex-shrink-0 w-8 h-8 bg-[#ca3517] rounded-lg flex items-center justify-center text-white font-black text-sm">
                  {indice + 1}
                </span>
                <div className="pt-0.5">
                  <p className="font-bold text-gray-900 text-sm mb-0.5">{beneficio.titulo}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{beneficio.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: SEG SMART
══════════════════════════════════════════════════════════════════════════════ */

const CAPACIDADES_SMART = [
  { titulo: "Tiempo real",       descripcion: "Monitoreo continuo 24/7 de todos los energéticos" },
  { titulo: "Multi-sucursal",    descripcion: "Gestión centralizada de múltiples ubicaciones desde una sola interfaz" },
  { titulo: "Alertas automáticas", descripcion: "Notificaciones ante desvíos, fallas o consumos anómalos" },
  { titulo: "Reportes y KPIs",   descripcion: "Indicadores de eficiencia y evolución del consumo" },
];

const TAGS_SMART = [
  { texto: "Aire comprimido",       destacado: false },
  { texto: "Vapor y calderas",      destacado: false },
  { texto: "Energía eléctrica",     destacado: false },
  { texto: "Agua",                  destacado: false },
  { texto: "HVAC",                  destacado: false },
  { texto: "Desarrollo propio SEG", destacado: true  },
  { texto: "Multi-sucursal",        destacado: false },
  { texto: "Acceso móvil",          destacado: false },
  { texto: "Sensores ",             destacado: false },
  { texto: "Medidores",             destacado: false },
  { texto: "Controladores inteligentes", destacado: false },
];

const PANTALLAS_SMART = [
  { label: "Presión y volumen diario · Aire comprimido", src: "/img/seg-smart/image1.jpg" },
  { label: "Diagrama de red · Estado de compresores en tiempo real", src: "/img/seg-smart/image2.jpg" },
  { label: "Potencia y caudal instantáneo · Análisis en tiempo real", src: "/img/seg-smart/image3.jpg" },
  { label: "KPIs de eficiencia · Ahorro energético y reducción de CO₂", src: "/img/seg-smart/image4.jpg" },
];

function IconoModAire() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <rect x="2" y="6" width="14" height="9" rx="2" />
      <path d="M6 6V4a3 3 0 016 0v2" strokeLinecap="round" />
      <circle cx="9" cy="11" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconoModCaldera() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M9 2 Q12 6 11 9 Q14 6 13 10 Q15 13 9 16 Q3 13 5 10 Q4 6 7 9 Q6 6 9 2Z" />
    </svg>
  );
}

function IconoModElectrica() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
      <polygon points="9,2 5,10 8,10 7,16 13,8 10,8" />
    </svg>
  );
}

function IconoModAgua() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
      <path d="M9 2 Q5 8 5 11 Q5 15 9 15 Q13 15 13 11 Q13 8 9 2Z" />
    </svg>
  );
}

function IconoModMulti() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <rect x="2" y="5" width="14" height="9" rx="2" strokeWidth="1.4" />
      <path d="M6 14v2M12 14v2M4 16h10" strokeLinecap="round" />
      <rect x="4" y="9" width="2" height="3" rx="1" fill="currentColor" stroke="none" opacity="0.8" />
      <rect x="8" y="7" width="2" height="5" rx="1" fill="currentColor" stroke="none" opacity="0.8" />
      <rect x="12" y="8" width="2" height="4" rx="1" fill="currentColor" stroke="none" opacity="0.8" />
    </svg>
  );
}

function IconoModMovil() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
      <circle cx="9" cy="9" r="3" strokeWidth="1.4" />
      <path d="M9 1v2M9 15v2M1 9h2M15 9h2M3.2 3.2l1.4 1.4M13.4 13.4l1.4 1.4M3.2 14.8l1.4-1.4M13.4 4.6l1.4-1.4" strokeLinecap="round" />
    </svg>
  );
}

function IconoModTermico() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
      <path d="M10 10.5V4a1 1 0 10-2 0v6.5a3 3 0 102 0z" />
    </svg>
  );
}

function IconoModCalefaccion() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
      <rect x="1" y="6" width="3" height="8" rx="1" />
      <rect x="5" y="6" width="3" height="8" rx="1" />
      <rect x="9" y="6" width="3" height="8" rx="1" />
      <rect x="13" y="4" width="4" height="10" rx="1" />
      <rect x="1" y="4" width="16" height="3" rx="1" />
      <rect x="1" y="13" width="16" height="2" rx="1" />
    </svg>
  );
}

const MODULOS_SMART = [
  {
    Icono: IconoModAire,
    nombre: "Aire Comprimido",
    descripcion: "Controlador maestro que optimiza la operación de todos los compresores en tiempo real, adaptándose a la demanda y minimizando el consumo energético.",
    items: [
      "Presión, caudal y potencia en tiempo real",
      "Optimización automática de compresores",
      "Detección de fugas y desvíos de eficiencia",
      "Validación de ahorros con reducción de CO₂",
    ],
  },
  {
    Icono: IconoModCaldera,
    nombre: "Calderas y Vapor",
    descripcion: "Telemetría avanzada de calderas. Análisis continuo de combustión, eficiencia térmica y validación de ahorros frente a línea base.",
    items: [
      "Caudal, presión y temperatura de vapor",
      "Análisis de humos, O₂ y combustión",
      "Control de purgas y conductividad",
      "Eficiencia mensual vs línea base",
    ],
  },
  {
    Icono: IconoModElectrica,
    nombre: "Energía Eléctrica",
    descripcion: "Gestión centralizada para redes de sucursales y plantas con control de consumo, costos, curvas de carga y validación de facturas.",
    items: [
      "Costos y consumo mensual por sucursal",
      "Curvas de carga y distribución horaria",
      "Validación de facturas energéticas",
      "Rankings y detección de desvíos",
    ],
  },
  {
    Icono: IconoModAgua,
    nombre: "Agua",
    descripcion: "Monitoreo del consumo hídrico en procesos industriales y edificios con detección temprana de fugas y seguimiento de indicadores.",
    items: [
      "Caudal y presión en tiempo real",
      "Detección automática de fugas",
      "Tendencias e históricos de consumo",
      "Alertas configurables por umbral",
    ],
  },
  {
    Icono: IconoModMulti,
    nombre: "Gestión Multi-sucursal",
    descripcion: "Centro de control para redes comerciales. Estandariza indicadores, genera reportes automáticos y permite comparativas entre locales.",
    items: [
      "KPIs de consumo y costo por m²",
      "Control y validación de pagos",
      "Rankings de locales eficientes",
      "Reportes automáticos transversales",
    ],
  },
  {
    Icono: IconoModMovil,
    nombre: "Acceso Móvil y Alarmas",
    descripcion: "Acceso desde cualquier dispositivo con alarmas automáticas ante desvíos, historial de eventos e indicadores en tiempo real.",
    items: [
      "Panel accesible desde móvil y tablet",
      "Alarmas configurables por umbral",
      "Históricos y dashboards informativos",
      "Reportes automáticos programables",
    ],
  },
  {
    Icono: IconoModTermico,
    nombre: "Acondicionamiento Térmico",
    descripcion: "Automatización y optimización de sistemas de climatización. Control inteligente de aires acondicionados y manejadoras para maximizar la eficiencia energética.",
    items: [
      "Control automático de aires acondicionados",
      "Control automático de manejadoras",
      "Seteo eficiente de temperaturas",
      "Control de encendido y caudales de aire",
    ],
  },
  {
    Icono: IconoModCalefaccion,
    nombre: "Calentamiento de Agua, Piscinas y Calefacción",
    descripcion: "Implementación de sistemas de agua caliente sanitaria, calefacción y climatización de piscinas. Soluciones a medida con bombas de calor de alta y baja temperatura.",
    items: [
      "Implementación de bombas de calor de alta y baja temperatura",
      "Diseño de soluciones a medida",
      "Sistema de monitoreo y control para agua caliente sanitaria",
      "Optimización de temperaturas",
      "Optimización de horarios y modos de funcionamiento",
      "Reporte de alarmas",
    ],
  },
];

const PASOS_SMART = [
  { numero: "01", nombre: "Relevamiento",   descripcion: "Visita técnica, medición y registro de la instalación" },
  { numero: "02", nombre: "Análisis",        descripcion: "Línea de base, diagnóstico y diseño del algoritmo" },
  { numero: "03", nombre: "Propuesta",       descripcion: "Informe detallado y estimación de ahorros" },
  { numero: "04", nombre: "Implementación",  descripcion: "Implementacion de la solución y validación in situ" },
  { numero: "05", nombre: "Monitoreo",       descripcion: "Analisis y mejora continua de KPI" },
];

const CLIENTES_SMART = [
  "Plaza Vea", "Mautone", "Grupo Disco", "Cementos Artigas", "CASMU", "WTC Free Zone", "Traxpalco",
];

/* ── Hero SEG Smart ── */
function SeccionSEGSmartHero() {
  return (
    <section id="gestion-remota" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Columna izquierda */}
          <div>
            <p className="text-[#ca3517] font-bold uppercase tracking-widest text-xs mb-4">
              Desarrollo propio · SEG Smart
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight mb-3">
              Cuadro de Mando Integral<br className="hidden sm:block" /> de{" "}
              <span className="text-[#ca3517]">Energía</span>
            </h2>
            <div className="w-16 h-1 bg-[#ca3517] mb-5 rounded" />
            <p className="text-gray-500 text-base mb-3 font-medium">Todo el control en un solo lugar.</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              SEG Smart es una plataforma de desarrollo propio que permite controlar, optimizar
              y gestionar todos los energéticos de su organización desde una interfaz única.
              A través de sensores y medidores inteligentes, la información se concentra en
              tiempo real generando reportes, alarmas y KPIs para una gestión proactiva.
            </p>
            <div className="flex flex-wrap gap-2">
              {TAGS_SMART.map((tag) => (
                <span
                  key={tag.texto}
                  className={`rounded-full px-4 py-1.5 text-xs font-semibold border ${
                    tag.destacado
                      ? "bg-[#ca3517]/10 border-[#ca3517]/30 text-[#ca3517]"
                      : "bg-white border-gray-200 text-gray-600"
                  }`}
                >
                  {tag.texto}
                </span>
              ))}
            </div>
          </div>

          {/* Columna derecha: stats + badge */}
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {CAPACIDADES_SMART.map((cap) => (
                <div key={cap.titulo} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                  <div className="text-base font-black text-[#ca3517] leading-none mb-2">
                    {cap.titulo}
                  </div>
                  <p className="text-gray-500 text-xs leading-relaxed">{cap.descripcion}</p>
                </div>
              ))}
            </div>
            <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-3 shadow-sm">
              <div className="w-2.5 h-2.5 rounded-full bg-[#ca3517] flex-shrink-0" />
              <p className="text-gray-600 text-sm leading-relaxed">
                <strong className="text-gray-900">Compatible con múltiples marcas y modelos.</strong>{" "}
                Arquitectura escalable que se adapta a cualquier instalación industrial o comercial.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ── Pantallas SEG Smart ── */
function SeccionSEGSmartPantallas() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[#ca3517] font-bold uppercase tracking-widest text-xs mb-2">
          La plataforma en acción
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">La plataforma en operación</h3>
        <div className="w-16 h-0.5 bg-[#ca3517] mb-3 rounded" />
        <p className="text-gray-500 text-sm mb-8">
          Dashboards reales en operación — aire comprimido, calderas y gestión energética multi-sucursal.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {PANTALLAS_SMART.map(({ label, src }) => (
            <div key={label} className="rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-white">
              <div className="bg-gray-100 px-3 py-2 flex items-center gap-1.5 border-b border-gray-200">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ca3517]" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
                <div className="w-2.5 h-2.5 rounded-full bg-gray-300" />
              </div>
              <div className="h-52 relative overflow-hidden">
                <img src={src} alt={label} className="w-full h-full object-cover" />
              </div>
              <div className="px-4 py-3 bg-white">
                <p className="text-gray-500 text-xs">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Módulos SEG Smart ── */
function SeccionSEGSmartModulos() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[#ca3517] font-bold uppercase tracking-widest text-xs mb-2">
          Módulos de la plataforma
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Un sistema, múltiples energéticos</h3>
        <div className="w-16 h-0.5 bg-[#ca3517] mb-4 rounded" />
        <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-2xl">
          Cada módulo diseñado por ingenieros especializados. No es solo monitoreo: es optimización
          activa con algoritmos desarrollados a partir de años de experiencia en campo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULOS_SMART.map((modulo) => (
            <article key={modulo.nombre} className="rounded-xl border border-gray-100 overflow-hidden">
              <div className="bg-[#1a1a1a] px-5 py-4 flex items-center gap-3">
                <div className="w-9 h-9 bg-[#ca3517] rounded-lg flex items-center justify-center flex-shrink-0 text-white">
                  <modulo.Icono />
                </div>
                <h4 className="text-sm font-bold text-white">{modulo.nombre}</h4>
              </div>
              <div className="bg-white p-5">
                <p className="text-gray-600 text-xs leading-relaxed mb-4">{modulo.descripcion}</p>
                <ul className="space-y-1.5">
                  {modulo.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="text-[#ca3517] font-bold flex-shrink-0 mt-px">›</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Proceso de implementación ── */
function SeccionSEGSmartProceso() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-[#ca3517] font-bold uppercase tracking-widest text-xs mb-2">
          Proceso de implementación
        </p>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Del diagnóstico al ahorro en 5 pasos</h3>
        <div className="w-16 h-0.5 bg-[#ca3517] mb-4 rounded" />
        <p className="text-gray-600 text-sm leading-relaxed mb-10 max-w-2xl">
          Un proceso estructurado y validado en campo que garantiza resultados medibles
          desde el primer mes de operación.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {PASOS_SMART.map((paso, indice) => (
            <div key={paso.numero} className="relative">
              {indice < PASOS_SMART.length - 1 && (
                <div
                  className="hidden lg:block absolute top-5 left-full h-0.5 bg-[#ca3517]/20 z-0"
                  style={{ width: "calc(100% - 1.5rem)" }}
                />
              )}
              <div className="relative z-10 bg-white rounded-xl p-5 border border-gray-100 text-center h-full">
                <div className="w-10 h-10 bg-[#ca3517] rounded-full flex items-center justify-center text-white font-black text-sm mx-auto mb-3">
                  {indice + 1}
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-2">{paso.nombre}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{paso.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Clientes SEG Smart (ticker automático) ── */
function SeccionSEGSmartClientes() {
  const items = [...CLIENTES_SMART, ...CLIENTES_SMART];
  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <style>{`
        @keyframes seg-marquee {
          from { transform: translateX(0) }
          to   { transform: translateX(-50%) }
        }
        .seg-marquee { animation: seg-marquee 22s linear infinite; }
        .seg-marquee:hover { animation-play-state: paused; }
      `}</style>
      <p className="text-xs font-bold uppercase tracking-widest text-gray-400 text-center mb-6">
        Clientes que confían en SEG Ingeniería
      </p>
      <div className="overflow-hidden">
        <div className="seg-marquee flex items-center gap-6" style={{ width: "max-content" }}>
          {items.map((nombre, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white border border-gray-200 rounded-lg px-6 py-3 min-w-[130px] flex items-center justify-center"
            >
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide whitespace-nowrap">
                {nombre}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   PÁGINA PRINCIPAL
══════════════════════════════════════════════════════════════════════════════ */
export default function PaginaEficienciaEnergetica() {
  return (
    <>
      <SeccionHero />
      <NavegacionSeccion anclas={ANCLAS_INTERNAS} />
      <SeccionPropuestaValor />
      <SeccionAreasEstudio />
      <SeccionMetodologia />
      <SeccionISO50001 />
      <SeccionSEGSmartHero />
      <SeccionSEGSmartPantallas />
      <SeccionSEGSmartModulos />
      <SeccionSEGSmartProceso />
      <SeccionSEGSmartClientes />
    </>
  );
}
