"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoSEG from "@/img/seg ingenieria logo.png";
import odsImg from "@/img/ODS.png";

/* ─── Estructura del menú de navegación ──────────────────────────────────────── */
const ITEMS_MENU = [
  { etiqueta: "Home", href: "/" },
  {
    etiqueta: "Eficiencia Energética",
    href: "/eficiencia-energetica",
    submenu: [
      { etiqueta: "Propuesta de Valor", href: "/eficiencia-energetica#propuesta-valor" },
      { etiqueta: "Áreas de Estudio",   href: "/eficiencia-energetica#areas-estudio" },
      { etiqueta: "ISO 50001",           href: "/eficiencia-energetica#iso-50001" },
      { etiqueta: "Gestión Remota",      href: "/eficiencia-energetica#gestion-remota" },
    ],
  },
  {
    etiqueta: "Energías Renovables",
    href: "/energias-renovables",
    submenu: [
      { etiqueta: "Mapas de Desarrollo", href: "/energias-renovables#mapa-desarrollos" },
      { etiqueta: "Conozca más",          href: "/energias-renovables#conozca-mas" },
    ],
  },
  { etiqueta: "Movilidad Eléctrica", href: "/movilidad-electrica" },
  { etiqueta: "SEG Consulting",      href: "/seg-consulting" },
  { etiqueta: "SEG Heliotec",        href: "/seg-heliotec" },
  { etiqueta: "Contacto",            href: "/contacto" },
];

/* ─── Ícono hamburguesa ────────────────────────────────────────────────────── */
function IconoHamburguesa() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

/* ─── Ícono cerrar ─────────────────────────────────────────────────────────── */
function IconoCerrar() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

/* ─── Ícono chevron (flecha desplegable) ───────────────────────────────────── */
function IconoChevron({ abierto }) {
  return (
    <svg
      className={`w-3 h-3 ml-1 transition-transform duration-200 ${abierto ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );
}

/* ─── Logo SEG ─────────────────────────────────────────────────────────────── */
function LogoSEG() {
  return (
    <Link href="/" className="flex items-center flex-shrink-0">
      <Image src={logoSEG} alt="SEG Ingeniería" height={52} className="object-contain" />
    </Link>
  );
}

/* ─── Ítem de menú desktop con soporte de submenu ─────────────────────────── */
function ItemMenuDesktop({ item, rutaActual }) {
  const [submenuAbierto, setSubmenuAbierto] = useState(false);
  const contenedorRef = useRef(null);
  const esActivo = rutaActual === item.href || rutaActual.startsWith(item.href + "/");

  useEffect(() => {
    const manejarClicFuera = (evento) => {
      if (contenedorRef.current && !contenedorRef.current.contains(evento.target)) {
        setSubmenuAbierto(false);
      }
    };
    document.addEventListener("mousedown", manejarClicFuera);
    return () => document.removeEventListener("mousedown", manejarClicFuera);
  }, []);

  if (!item.submenu) {
    return (
      <li>
        <Link
          href={item.href}
          className={`whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
            esActivo ? "text-[#ca3517]" : "hover:text-[#ca3517]"
          }`}
        >
          {item.etiqueta}
        </Link>
      </li>
    );
  }

  return (
    <li ref={contenedorRef} className="relative">
      <button
        className={`flex items-center whitespace-nowrap text-sm font-medium transition-colors duration-200 ${
          esActivo ? "text-[#ca3517]" : "hover:text-[#ca3517]"
        }`}
        onClick={() => setSubmenuAbierto((prev) => !prev)}
        aria-expanded={submenuAbierto}
        aria-haspopup="true"
      >
        {item.etiqueta}
        <IconoChevron abierto={submenuAbierto} />
      </button>

      {submenuAbierto && (
        <ul className="absolute top-full left-0 mt-2 w-52 bg-black border border-gray-700 rounded shadow-xl z-50 py-1">
          {item.submenu.map((subitem) => (
            <li key={subitem.etiqueta}>
              <Link
                href={subitem.href}
                className="block px-4 py-2.5 text-sm text-gray-300 hover:text-white hover:bg-[#ca3517] transition-colors duration-150"
                onClick={() => setSubmenuAbierto(false)}
              >
                {subitem.etiqueta}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

/* ─── Header principal ─────────────────────────────────────────────────────── */
export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [conSombra, setConSombra] = useState(false);
  const [submenuMobileAbierto, setSubmenuMobileAbierto] = useState(null);
  const rutaActual = usePathname();

  useEffect(() => {
    const manejarScroll = () => setConSombra(window.scrollY > 10);
    window.addEventListener("scroll", manejarScroll, { passive: true });
    return () => window.removeEventListener("scroll", manejarScroll);
  }, []);

  useEffect(() => {
    setMenuAbierto(false);
    setSubmenuMobileAbierto(null);
  }, [rutaActual]);

  useEffect(() => {
    const cerrarEnDesktop = () => {
      if (window.innerWidth >= 1024) setMenuAbierto(false);
    };
    window.addEventListener("resize", cerrarEnDesktop);
    return () => window.removeEventListener("resize", cerrarEnDesktop);
  }, []);

  const alternarSubmenuMobile = (etiqueta) => {
    setSubmenuMobileAbierto((prev) => (prev === etiqueta ? null : etiqueta));
  };

  return (
    <header className={`sticky top-0 z-50 transition-shadow duration-300 ${conSombra ? "shadow-xl" : ""}`}>
      {/* ── Barra superior roja ────────────────────────────────────────────── */}
      <div className="bg-[#ca3517] text-white py-1.5 px-4 text-xs sm:text-sm flex items-center justify-center gap-4">
        <span className="hidden sm:inline">
          SEG Ingeniería promueve un entorno energéticamente eficiente, sustentable y renovable
        </span>
        <span className="sm:hidden">SEG · Energía eficiente y renovable</span>
        <Image
          src={odsImg}
          alt="Objetivos de Desarrollo Sostenible"
          height={32}
          className="object-contain"
        />
      </div>

      {/* ── Barra de navegación negra ──────────────────────────────────────── */}
      <nav className="bg-black text-white" aria-label="Navegación principal">
        <div className="max-w-7xl mx-auto px-4 flex items-center h-16">
          <LogoSEG />

          {/* Menú desktop */}
          <ul className="hidden lg:flex items-center gap-5 xl:gap-7 flex-1 justify-center">
            {ITEMS_MENU.map((item) => (
              <ItemMenuDesktop key={item.etiqueta} item={item} rutaActual={rutaActual} />
            ))}
          </ul>

          {/* Botón hamburguesa */}
          <button
            className="lg:hidden ml-auto p-1 rounded hover:bg-white/10 transition-colors"
            onClick={() => setMenuAbierto((prev) => !prev)}
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={menuAbierto}
          >
            {menuAbierto ? <IconoCerrar /> : <IconoHamburguesa />}
          </button>
        </div>

        {/* ── Menú mobile desplegable ────────────────────────────────────────── */}
        {menuAbierto && (
          <div className="lg:hidden border-t border-gray-700 bg-black">
            <ul className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
              {ITEMS_MENU.map((item) => (
                <li key={item.etiqueta}>
                  {item.submenu ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between px-3 py-2.5 rounded text-sm hover:bg-gray-800 transition-colors"
                        onClick={() => alternarSubmenuMobile(item.etiqueta)}
                      >
                        <span>{item.etiqueta}</span>
                        <IconoChevron abierto={submenuMobileAbierto === item.etiqueta} />
                      </button>

                      {submenuMobileAbierto === item.etiqueta && (
                        <ul className="ml-4 border-l border-gray-700 pl-3 mb-1">
                          {item.submenu.map((subitem) => (
                            <li key={subitem.etiqueta}>
                              <Link
                                href={subitem.href}
                                className="block px-2 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                              >
                                {subitem.etiqueta}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-3 py-2.5 rounded text-sm hover:bg-[#ca3517] transition-colors duration-200"
                    >
                      {item.etiqueta}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
