"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";

const DURACION_MS = 15000;

/* --- Íconos SVG inline (uno por slide) ------------------------------------- */
function IconoRayo({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2 3 14h7l-1 8 11-14h-8l1-6z" />
    </svg>
  );
}
function IconoSol({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" />
      <path d="M12 1v3M12 20v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M1 12h3M20 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function IconoH2({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M2 5h2.5v5.5h4V5H11v14H8.5v-6h-4v6H2V5zm14.3 14v-1.8l3-2.9c1.1-1.1 1.7-1.9 1.7-2.9 0-.9-.6-1.5-1.5-1.5-.8 0-1.4.4-1.9 1.1l-1.4-1.1c.7-1.1 1.9-1.9 3.5-1.9 2.1 0 3.5 1.3 3.5 3.2 0 1.5-.9 2.7-2.2 3.9l-1.8 1.7H22V19h-5.7z" />
    </svg>
  );
}
function IconoBateria({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="2" y="7" width="17" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="21" y="10" width="2" height="4" rx="0.5" />
      <path d="M11 9 8 13h2.2l-1 3 4.8-5H12l1-2h-2z" />
    </svg>
  );
}
function IconoCPU({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="7" y="7" width="10" height="10" rx="1.5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <rect x="10" y="10" width="4" height="4" />
      <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function IconoCertificado({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <circle cx="12" cy="9" r="6" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path d="m8.5 14-1.5 7 5-2.5 5 2.5-1.5-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}
function IconoOnda({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M2 12h3l2-7 3 14 3-11 2 4h7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function IconoAuto({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M5 16.5V11l1.8-4.5A2 2 0 0 1 8.7 5h6.6a2 2 0 0 1 1.9 1.5L19 11v5.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <circle cx="7.5" cy="16.5" r="1.6" />
      <circle cx="16.5" cy="16.5" r="1.6" />
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}
function IconoGrafico({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <rect x="3" y="13" width="3.5" height="8" />
      <rect x="9" y="9" width="3.5" height="12" />
      <rect x="15" y="4" width="3.5" height="17" />
    </svg>
  );
}
function IconoMedalla({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <polygon points="12,1.5 14.5,8 21.5,8 15.8,12.2 18,19 12,14.8 6,19 8.2,12.2 2.5,8 9.5,8" />
    </svg>
  );
}

/* --- Contenido de los 10 slides --------------------------------------------- */
const SLIDES = [
  {
    id: "ee",
    unidad: "Eficiencia Energética",
    subtag: "Modelo ESCO",
    pretitulo: "Auditoría energética sin costo",
    titulo: "Eficiencia",
    tituloRojo: "energética.",
    subtitulo: "Detectamos oportunidades de ahorro y transformamos eficiencia en resultados reales.",
    pills: ["Auditorías sin costo", "Realizamos las inversiones", "Honorarios sujetos a éxito", "Proyectos llave en mano"],
    href: "/eficiencia-energetica",
    bigLabel: "EE",
    Icono: IconoRayo,
  },
  {
    id: "ren",
    unidad: "Energías Renovables",
    subtag: "SEG Green Power",
    pretitulo: "Solar · Eólico",
    titulo: "Generación",
    tituloRojo: "renovable.",
    subtitulo: "Fuimos y somos parte de la transformación energética en Uruguay y la región.",
    pills: ["Eólica · 193,5 MW", "Solar · 74 MWp", "320.000 t CO₂/año evitadas"],
    href: "/energias-renovables",
    bigLabel: "REN",
    Icono: IconoSol,
  },
  {
    id: "h2",
    unidad: "Energías Renovables",
    subtag: "Hidrógeno Verde",
    pretitulo: "Descarbonización",
    titulo: "Hidrógeno",
    tituloRojo: "verde.",
    subtitulo: "Pioneros en H₂ verde en la región. Desde greenfield hasta producción, transporte y derivados en 7 países de LATAM.",
    pills: ["Producción H₂", "Amoniaco verde", "Metanol verde", "Descarbonización industrial"],
    href: "/energias-renovables#h2-verde",
    bigLabel: "H2",
    Icono: IconoH2,
  },
  {
    id: "bess",
    unidad: "Energy Storage",
    subtag: "BESS",
    pretitulo: "Sistemas BESS",
    titulo: "Almacenamiento",
    tituloRojo: "de energía.",
    subtitulo: "Sistemas BESS para almacenar, gestionar y optimizar la energía de tu instalación.",
    pills: ["BESS Li-Ion / LFP", "Peak shaving", "Continuidad operacional", "Arbitraje energético"],
    href: null,
    bigLabel: "BESS",
    Icono: IconoBateria,
  },
  {
    id: "smart",
    unidad: "Eficiencia Energética",
    subtag: "SEG Smart",
    pretitulo: "Cuadro de mando integral de la energía",
    titulo: "Control y gestión",
    tituloRojo: "inteligente.",
    subtitulo: "Gestionamos y controlamos todos tus parámetros energéticos actuando on line para optimizar los resultados.",
    pills: ["Electricidad", "Vapor", "Agua", "Aire comprimido", "HVAC"],
    href: "/eficiencia-energetica#gestion-remota",
    bigLabel: "CMI",
    Icono: IconoCPU,
  },
  {
    id: "iso",
    unidad: "Sostenibilidad",
    subtag: "Normas ISO",
    pretitulo: "Gestión · Certificación · Reporte",
    titulo: "Sostenibilidad.",
    tituloRojo: "",
    subtitulo: "Acompañamos a las organizaciones en la implementación, certificación y reporte de sus sistemas de gestión y sostenibilidad.",
    pills: ["ISO 50001 — Energía", "ISO 14064 — Huella de carbono", "ISO 14001 — Ambiente", "GRI Reporting"],
    href: "/eficiencia-energetica#iso-50001",
    bigLabel: "ISO",
    Icono: IconoCertificado,
  },
  {
    id: "pq",
    unidad: "Elspec",
    subtag: "Calidad de Energía",
    pretitulo: "Análisis eléctrico en milisegundos",
    titulo: "Calidad",
    tituloRojo: "de energía.",
    subtitulo: "Detectamos perturbaciones en tiempo real e implementamos soluciones de filtrado, compensación reactiva y optimización de red.",
    pills: ["Armónicos", "Flicker", "Transitorios", "Huecos de tensión", "Factor de potencia"],
    href: null,
    bigLabel: "PQ",
    Icono: IconoOnda,
  },
  {
    id: "ev",
    unidad: "Movilidad Eléctrica",
    subtag: "SEG e-move",
    pretitulo: "Electromovilidad para empresas, flotas y hogares",
    titulo: "Movilidad",
    tituloRojo: "eléctrica.",
    subtitulo: "Soluciones de electromovilidad, infraestructura de carga y cargadores en vía pública de corriente continua.",
    pills: ["Cargadores", "Cargadores DC en vía pública", "Instalaciones eléctricas", "Gestión de flotas EV"],
    href: "/movilidad-electrica",
    bigLabel: "EV",
    Icono: IconoAuto,
  },
  {
    id: "consulting",
    unidad: "SEG Consulting",
    subtag: "LATAM & Caribe",
    pretitulo: "Consultoría energética de referencia",
    titulo: "Consultoría",
    tituloRojo: "con impacto.",
    subtitulo: "+50 consultorías en 13 países. Trabajamos con BID, Banco Mundial, GIZ, IFC y MIEM en políticas energéticas, MRV y estudios de largo plazo.",
    pills: ["13 países", "MRV energético", "Políticas energéticas", "BID · Banco Mundial · MIEM"],
    href: "/seg-consulting",
    bigLabel: "CON",
    Icono: IconoGrafico,
  },
  {
    id: "miem",
    unidad: "Beneficios & Fondos",
    subtag: "Instrumentos MIEM",
    pretitulo: "Acompañamiento en postulaciones",
    titulo: "Accedé a",
    tituloRojo: "beneficios.",
    subtitulo: "Acompañamos a nuestros clientes durante todo el proceso de la postulación.",
    pills: ["COMAP", "Certificados de Eficiencia", "Premio Nacional de Eficiencia", "Fondo Industrial", "Revalora"],
    href: null,
    bigLabel: "N°1",
    Icono: IconoMedalla,
  },
];

/* --- Fondo decorativo por slide (reproduce el patrón del mockup) ----------- */
function FondoDecorativo({ variante }) {
  const trazo = "#ca3517";
  const patrones = {
    ee: (
      <>
        <circle cx="120" cy="210" r="130" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.12" />
        <circle cx="120" cy="210" r="85" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.08" />
        <circle cx="120" cy="210" r="45" fill={trazo} opacity="0.04" />
      </>
    ),
    ren: (
      <>
        <line x1="60" y1="0" x2="60" y2="420" stroke={trazo} strokeWidth="0.4" opacity="0.07" />
        <line x1="120" y1="0" x2="120" y2="420" stroke={trazo} strokeWidth="0.4" opacity="0.07" />
        <line x1="180" y1="0" x2="180" y2="420" stroke={trazo} strokeWidth="0.4" opacity="0.07" />
      </>
    ),
    h2: (
      <>
        <circle cx="120" cy="200" r="70" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.15" />
        <circle cx="80" cy="160" r="40" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.08" />
        <circle cx="160" cy="250" r="30" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.08" />
      </>
    ),
    bess: (
      <>
        <rect x="70" y="130" width="100" height="180" rx="6" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.15" />
        <rect x="95" y="118" width="50" height="14" rx="3" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.12" />
        <rect x="80" y="142" width="80" height="10" rx="2" fill={trazo} opacity="0.07" />
        <rect x="80" y="162" width="60" height="10" rx="2" fill={trazo} opacity="0.05" />
        <rect x="80" y="182" width="70" height="10" rx="2" fill={trazo} opacity="0.05" />
      </>
    ),
    smart: (
      <>
        <line x1="120" y1="80" x2="60" y2="170" stroke={trazo} strokeWidth="0.5" opacity="0.2" />
        <line x1="120" y1="80" x2="180" y2="170" stroke={trazo} strokeWidth="0.5" opacity="0.2" />
        <line x1="120" y1="80" x2="120" y2="200" stroke={trazo} strokeWidth="0.5" opacity="0.2" />
        <line x1="120" y1="200" x2="70" y2="290" stroke={trazo} strokeWidth="0.5" opacity="0.14" />
        <line x1="120" y1="200" x2="170" y2="290" stroke={trazo} strokeWidth="0.5" opacity="0.14" />
        <circle cx="120" cy="80" r="5" fill={trazo} opacity="0.35" />
        <circle cx="60" cy="170" r="3" fill={trazo} opacity="0.2" />
        <circle cx="180" cy="170" r="3" fill={trazo} opacity="0.2" />
        <circle cx="120" cy="200" r="4" fill={trazo} opacity="0.25" />
      </>
    ),
    iso: (
      <>
        <circle cx="120" cy="210" r="120" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.12" />
        <circle cx="120" cy="210" r="80" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.08" />
        <circle cx="120" cy="210" r="40" fill={trazo} opacity="0.04" />
      </>
    ),
    pq: (
      <>
        <polyline points="10,210 45,145 80,265 115,165 150,235 185,188 230,210" fill="none" stroke={trazo} strokeWidth="1.5" opacity="0.22" />
        <polyline points="10,210 45,158 80,250 115,176 150,226 185,196 230,210" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.1" />
      </>
    ),
    ev: (
      <>
        <circle cx="120" cy="210" r="100" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.12" />
        <line x1="120" y1="110" x2="120" y2="310" stroke={trazo} strokeWidth="0.4" opacity="0.08" />
        <line x1="20" y1="210" x2="220" y2="210" stroke={trazo} strokeWidth="0.4" opacity="0.08" />
      </>
    ),
    consulting: (
      <>
        <rect x="30" y="290" width="28" height="80" rx="2" fill={trazo} opacity="0.09" />
        <rect x="72" y="240" width="28" height="130" rx="2" fill={trazo} opacity="0.11" />
        <rect x="114" y="200" width="28" height="170" rx="2" fill={trazo} opacity="0.13" />
        <rect x="156" y="155" width="28" height="215" rx="2" fill={trazo} opacity="0.16" />
      </>
    ),
    miem: (
      <polygon points="120,55 147,118 215,118 160,158 182,222 120,182 58,222 80,158 25,118 93,118" fill="none" stroke={trazo} strokeWidth="0.5" opacity="0.18" />
    ),
  };

  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 240 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="240" height="420" fill="#1a1a1a" />
      <rect x="0" y="0" width="3" height="420" fill="#ca3517" opacity="0.55" />
      {patrones[variante]}
    </svg>
  );
}

/* --- Panel derecho decorativo (compartido desktop / mobile) ---------------- */
function PanelDecorativo({ slide }) {
  const { Icono } = slide;
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
      <FondoDecorativo variante={slide.id} />
      <Icono className="relative z-[1] w-24 h-24 md:w-36 md:h-36 text-white/[0.07]" />
      <div className="absolute bottom-3 right-3 md:bottom-6 md:right-4 text-7xl md:text-[150px] font-black text-white/[0.04] tracking-tighter leading-none">
        {slide.bigLabel}
      </div>
    </div>
  );
}

function ContenidoSlide({ slide }) {
  return (
    <div className="flex flex-col justify-center h-full px-8 py-10 sm:px-12 md:px-16 md:py-12">
      <div className="flex items-center gap-3 mb-5">
        <span className="text-xs font-bold tracking-[2.5px] uppercase text-white/40">{slide.unidad}</span>
        <span className="w-px h-4 bg-white/20" />
        <span className="text-xs font-bold tracking-[2px] uppercase text-[#ff8a70]/85">{slide.subtag}</span>
      </div>
      <p className="text-sm font-semibold tracking-[2px] uppercase text-white/25 mb-2">{slide.pretitulo}</p>
      <h2 className="text-4xl sm:text-5xl md:text-[62px] lg:text-[76px] font-black uppercase leading-[0.95] tracking-tight text-white mb-6">
        {slide.titulo}
        {slide.tituloRojo && (
          <>
            <br />
            <span className="text-[#ca3517]">{slide.tituloRojo}</span>
          </>
        )}
      </h2>
      <p className="text-base md:text-lg font-light text-white/45 leading-relaxed mb-7 max-w-[480px]">{slide.subtitulo}</p>
      <div className="flex flex-wrap gap-2.5">
        {slide.pills.map((pill) => (
          <span
            key={pill}
            className="text-xs font-semibold tracking-[0.3px] px-4 py-1.5 rounded-full border border-[#ca3517]/35 text-[#f3a08e] bg-[#ca3517]/[0.07]"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}

/* --- Hero Slider principal --------------------------------------------------- */
export default function HeroSlider() {
  const [indiceActual, setIndiceActual] = useState(0);
  const [progreso, setProgreso] = useState(0);
  const rafRef = useRef(null);

  const irADiapositiva = useCallback((indice) => {
    setIndiceActual((prev) => (indice + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    setProgreso(0);
    let inicio = null;

    function paso(marca) {
      if (!inicio) inicio = marca;
      const porcentaje = Math.min(100, ((marca - inicio) / DURACION_MS) * 100);
      setProgreso(porcentaje);
      if (porcentaje < 100) {
        rafRef.current = requestAnimationFrame(paso);
      } else {
        setIndiceActual((prev) => (prev + 1) % SLIDES.length);
      }
    }

    rafRef.current = requestAnimationFrame(paso);
    return () => cancelAnimationFrame(rafRef.current);
  }, [indiceActual]);

  const slide = SLIDES[indiceActual];

  return (
    <section
      className="relative bg-[#111] overflow-hidden min-h-[720px] md:min-h-0 md:h-[680px]"
      aria-label="Slider de unidades de negocio"
    >
      {SLIDES.map((s, indice) => {
        const esActual = indice === indiceActual;
        const contenido = (
          <div
            className={`absolute inset-0 flex flex-col md:flex-row transition-opacity duration-500 ${
              esActual ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex-1 md:flex-[0_0_62%] bg-[#111] relative z-[2]">
              <ContenidoSlide slide={s} />
            </div>
            <div className="hidden sm:block h-24 md:h-auto md:flex-1 relative">
              <PanelDecorativo slide={s} />
            </div>
          </div>
        );

        return s.href ? (
          <Link key={s.id} href={s.href} aria-label={`Ver ${s.unidad} — ${s.subtag}`} tabIndex={esActual ? 0 : -1}>
            {contenido}
          </Link>
        ) : (
          <div key={s.id}>{contenido}</div>
        );
      })}

      {/* Barra de progreso */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-[#ca3517] z-10" style={{ width: `${progreso}%` }} />

      {/* Dots de navegación */}
      <div className="absolute bottom-4 left-6 sm:left-10 md:left-12 flex gap-1.5 z-10">
        {SLIDES.map((s, indice) => (
          <button
            key={s.id}
            onClick={() => irADiapositiva(indice)}
            aria-label={`Ir a slide ${indice + 1}: ${s.unidad}`}
            className={`w-[5px] h-[5px] rounded-full transition-all duration-300 ${
              indice === indiceActual ? "bg-[#ca3517] scale-150" : "bg-white/20"
            }`}
          />
        ))}
      </div>

      {/* Flechas prev/next */}
      <div className="absolute bottom-3 right-4 sm:right-8 md:right-11 flex gap-1.5 z-10">
        <button
          onClick={() => irADiapositiva(indiceActual - 1)}
          aria-label="Slide anterior"
          className="w-[30px] h-[30px] rounded-full border border-white/[0.18] bg-white/[0.04] text-white/55 flex items-center justify-center hover:bg-white/[0.12] transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          onClick={() => irADiapositiva(indiceActual + 1)}
          aria-label="Slide siguiente"
          className="w-[30px] h-[30px] rounded-full border border-white/[0.18] bg-white/[0.04] text-white/55 flex items-center justify-center hover:bg-white/[0.12] transition-colors"
        >
          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Contador */}
      <div className="absolute top-4 right-5 text-[9px] font-bold tracking-[2px] text-white/[0.18] z-10">
        {indiceActual + 1} / {SLIDES.length}
      </div>
    </section>
  );
}
