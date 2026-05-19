"use client";

import { useState, useEffect, useCallback } from "react";

/* --- Contenido de las 4 diapositivas del slider --------------------------- */
const DIAPOSITIVAS = [
  { id: 1, titulo: "Cuidamos la energía, generamos futuro" },
  { id: 2, titulo: "Hacemos que las cosas sucedan" },
  { id: 3, titulo: "Exportamos conocimiento a varios países de la región" },
  {
    id: 4,
    titulo:
      "Logramos un entorno energéticamente eficiente, sustentable y renovable",
  },
];

const INTERVALO_MS = 5000; /* tiempo entre slides */

/* --- Botón de navegación lateral ------------------------------------------- */
function BulletNavegacion({ activo, onClick, numero }) {
  return (
    <button
      onClick={onClick}
      aria-label={`Ir a diapositiva ${numero}`}
      className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
        activo
          ? "bg-[#ca3517] border-[#ca3517] scale-125"
          : "bg-transparent border-white/60 hover:border-[#ca3517]"
      }`}
    />
  );
}

/* --- Hero Slider principal -------------------------------------------------- */
export default function HeroSlider() {
  const [indiceActual, setIndiceActual] = useState(0);
  /* pausado=true detiene el avance automático (p.ej. al hacer clic en un bullet) */
  const [pausado, setPausado] = useState(false);

  const avanzarSlide = useCallback(() => {
    setIndiceActual((previo) => (previo + 1) % DIAPOSITIVAS.length);
  }, []);

  /* Avance automático cada INTERVALO_MS ms */
  useEffect(() => {
    if (pausado) return;
    const intervalo = setInterval(avanzarSlide, INTERVALO_MS);
    return () => clearInterval(intervalo);
  }, [pausado, avanzarSlide]);

  const irADiapositiva = (indice) => {
    setIndiceActual(indice);
    setPausado(true);
    /* Reanuda el avance automático 10 segundos después de la interacción manual */
    setTimeout(() => setPausado(false), 10_000);
  };

  const diapositivaActual = DIAPOSITIVAS[indiceActual];

  return (
    <section
      className="relative h-screen min-h-[560px] overflow-hidden bg-black"
      aria-label="Slider de bienvenida">

      <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* Overlay semitransparente para mejorar legibilidad del texto */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Detalle visual: línea roja sutil en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ca3517]" />

      {/* -- Contenido central del slide -------------------------------------- */}
      <div className="relative z-10 h-full flex items-center justify-center px-8 sm:px-12">
        <div className="max-w-4xl text-center text-white">
          {/*
            La key cambia al cambiar el slide, forzando un re-montaje del elemento
            y disparando la animación CSS de entrada definida en globals.css
          */}
          <h1
            key={diapositivaActual.id}
            className="animar-entrada text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-lg"
          >
            {diapositivaActual.titulo}
          </h1>

            <a
              href="https://www.youtube.com/watch?v=u4SsgJ9M8mM"
              target="_blank"
              rel="noopener noreferrer"
              className="animar-boton inline-block bg-[#ca3517] hover:bg-[#a82d12] active:bg-[#8a2410] text-white font-semibold px-10 py-3 rounded-full transition-colors duration-200 text-base shadow-lg"
              aria-label="Ver video"
            >
              Ver Video
            </a>
        </div>
      </div>

      {/* -- Bullets de navegación (lado izquierdo) --------------------------- */}
      <div
        className="absolute left-5 sm:left-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-4"
        role="tablist"
        aria-label="Navegación del slider"
      >
        {DIAPOSITIVAS.map((diapositiva, indice) => (
          <BulletNavegacion
            key={diapositiva.id}
            activo={indice === indiceActual}
            onClick={() => irADiapositiva(indice)}
            numero={indice + 1}
          />
        ))}
      </div>

      {/* -- Indicador de slide actual (mobile, esquina inferior derecha) ----- */}
      <div className="absolute bottom-6 right-6 z-10 text-white/50 text-sm font-light sm:hidden">
        {indiceActual + 1} / {DIAPOSITIVAS.length}
      </div>
    </section>
  );
}
