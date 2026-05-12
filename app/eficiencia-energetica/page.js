import Link from "next/link";

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

function IconoMonitoreo() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
      <rect x="4" y="8" width="56" height="38" rx="3" />
      <line x1="22" y1="58" x2="42" y2="58" />
      <line x1="32" y1="46" x2="32" y2="58" />
      <polyline points="10,36 20,24 30,30 40,16 54,22" strokeLinecap="round" strokeLinejoin="round" />
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
  { etiqueta: "ISO 50001", href: "#iso-50001" },
  { etiqueta: "Gestión Remota", href: "#gestion-remota" },
];

function NavegacionInterna() {
  return (
    <nav
      className="bg-gray-100 border-b border-gray-200 sticky top-[108px] z-40"
      aria-label="Secciones de la página"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex overflow-x-auto gap-0 -mb-px">
          {ANCLAS_INTERNAS.map((ancla) => (
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
   SECCIÓN: ISO 50001
══════════════════════════════════════════════════════════════════════════════ */
const FASES_PHVA = [
  {
    letra: "P",
    nombre: "Planificar",
    color: "bg-[#ca3517]",
    descripcion:
      "Establecer la política energética, los objetivos y los planes de acción necesarios para mejorar el desempeño energético.",
  },
  {
    letra: "H",
    nombre: "Hacer",
    color: "bg-[#a82d12]",
    descripcion:
      "Implementar los planes de acción definidos para alcanzar los objetivos y metas del sistema de gestión de la energía.",
  },
  {
    letra: "V",
    nombre: "Verificar",
    color: "bg-[#8a2410]",
    descripcion:
      "Monitorear, medir y analizar los procesos y las características clave que determinan el desempeño energético.",
  },
  {
    letra: "A",
    nombre: "Actuar",
    color: "bg-[#6e1c0c]",
    descripcion:
      "Tomar acciones para mejorar continuamente el desempeño del sistema de gestión de la energía.",
  },
];

const BENEFICIOS_SGE = [
  "Reduce las emisiones de gases de efecto invernadero y de otros impactos ambientales relacionados",
  "Reduce los costos de la energía",
  "Mejora la productividad, confiabilidad y calidad",
  "Autoconocimiento del uso y consumo de la energía",
  "Mejora del desempeño energético, competitividad e imagen de la organización",
  "Permite conocer el potencial de ahorro de la organización. Fomenta la innovación tecnológica",
  "Integra intereses económicos y ambientales",
];

function SeccionISO50001() {
  return (
    <section id="iso-50001" className="py-16 bg-gray-50 scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoVerificacion />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">ISO 50001</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna izquierda: PHVA */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Norma PHVA</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-8">
              Equipo especializado en la implementación de sistemas de gestión de
              la energía bajo el ciclo PHVA (Planificar–Hacer–Verificar–Actuar).
            </p>

            <div className="grid grid-cols-2 gap-4">
              {FASES_PHVA.map((fase) => (
                <div key={fase.letra} className={`${fase.color} text-white rounded-xl p-5`}>
                  <div className="text-4xl font-black mb-2 opacity-80">{fase.letra}</div>
                  <h4 className="font-bold text-base mb-2">{fase.nombre}</h4>
                  <p className="text-white/80 text-xs leading-relaxed">{fase.descripcion}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Columna derecha: Beneficios */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Beneficios de implementar un SGE
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              La implementación de un Sistema de Gestión de la Energía (SGE)
              aporta ventajas tangibles tanto económicas como ambientales:
            </p>

            <ul className="space-y-3">
              {BENEFICIOS_SGE.map((beneficio) => (
                <li
                  key={beneficio}
                  className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                >
                  <span className="flex-shrink-0 w-5 h-5 bg-[#ca3517] rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  <span className="text-gray-700 text-sm leading-relaxed">{beneficio}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════════════════
   SECCIÓN: SISTEMA DE MONITOREO REMOTO
══════════════════════════════════════════════════════════════════════════════ */
function SeccionMonitoreoRemoto() {
  return (
    <section id="gestion-remota" className="py-16 bg-white scroll-mt-[160px]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center gap-4 mb-10">
          <div className="text-[#ca3517]">
            <IconoMonitoreo />
          </div>
          <div>
            <span className="inline-block text-[#ca3517] text-xs font-bold uppercase tracking-widest mb-1">
              SEG Smart
            </span>
            <h2 className="text-3xl font-bold text-gray-900">Sistema de Monitoreo Remoto</h2>
            <div className="w-16 h-1 bg-[#ca3517] mt-2 rounded" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-600 leading-relaxed text-base mb-6">
              SEG Smart es la plataforma de monitoreo energético remoto de SEG
              Ingeniería. Permite visualizar en tiempo real el consumo, la demanda
              y el factor de potencia de cada instalación, detectar desvíos
              automáticamente y tomar decisiones basadas en datos.
            </p>
            <p className="text-gray-600 leading-relaxed text-base mb-8">
              Clientes y técnicos acceden desde cualquier dispositivo a un
              dashboard centralizado con históricos, alertas configurables e
              informes automáticos — sin necesidad de estar en el sitio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://cmie.segingenieria.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#ca3517] text-white px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#a82d12] transition-colors duration-200"
              >
                <IconoMonitoreo />
                Acceder a Gestión Remota
              </a>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center border-2 border-[#ca3517] text-[#ca3517] px-7 py-3 rounded-full font-semibold text-sm hover:bg-[#ca3517] hover:text-white transition-colors duration-200"
              >
                Contactar a SEG
              </Link>
            </div>
          </div>

          {/* Panel visual representativo del monitoreo */}
          <div className="bg-gray-900 rounded-xl p-6 text-green-400 font-mono text-sm shadow-2xl">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-700">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-gray-400 text-xs ml-2">CMIE · Monitoreo Energético</span>
            </div>
            <div className="space-y-2 text-xs">
              <p><span className="text-gray-500">›</span> Consumo actual: <span className="text-white font-bold">148.3 kWh</span></p>
              <p><span className="text-gray-500">›</span> Demanda pico:   <span className="text-white font-bold">22.7 kW</span></p>
              <p><span className="text-gray-500">›</span> Factor de potencia: <span className="text-green-400 font-bold">0.97</span></p>
              <p><span className="text-gray-500">›</span> Ahorro acumulado: <span className="text-[#ca3517] font-bold">-18.4%</span></p>
              <div className="mt-4 pt-3 border-t border-gray-700">
                <p className="text-gray-400">Última lectura: <span className="text-white">hace 2 min</span></p>
                <p className="text-gray-400">Estado del sistema: <span className="text-green-400">● Activo</span></p>
              </div>
            </div>
          </div>
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
      <NavegacionInterna />
      <SeccionPropuestaValor />
      <SeccionAreasEstudio />
      <SeccionMetodologia />
      <SeccionISO50001 />
      <SeccionMonitoreoRemoto />
    </>
  );
}
