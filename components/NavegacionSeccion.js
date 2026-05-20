"use client";

import { useState, useEffect } from "react";

export default function NavegacionSeccion({ anclas }) {
  const [activa, setActiva] = useState(anclas[0]?.href.slice(1) ?? "");

  useEffect(() => {
    const ids = anclas.map((a) => a.href.slice(1));

    function onScroll() {
      let actual = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 160) actual = id;
      }
      setActiva(actual);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [anclas]);

  return (
    <nav
      className="bg-gray-100 border-b border-gray-200 sticky top-[88px] z-40"
      aria-label="Secciones de la página"
    >
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex overflow-x-auto gap-0 -mb-px justify-center">
          {anclas.map((ancla) => {
            const id = ancla.href.slice(1);
            return (
              <li key={ancla.etiqueta} className="flex-shrink-0">
                <a
                  href={ancla.href}
                  className={`block px-4 sm:px-6 py-4 text-sm font-medium border-b-2 transition-colors duration-200 whitespace-nowrap ${
                    activa === id
                      ? "text-[#ca3517] border-[#ca3517]"
                      : "text-gray-600 border-transparent hover:text-[#ca3517] hover:border-[#ca3517]"
                  }`}
                >
                  {ancla.etiqueta}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}