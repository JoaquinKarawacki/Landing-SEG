"use client";

import { createContext, useContext, useState, useEffect } from "react";

export const IdiomaContext = createContext({ idioma: "ES", setIdioma: () => {} });

export function IdiomaProvider({ children }) {
  const [idioma, setIdiomaState] = useState("ES");

  useEffect(() => {
    const guardado = localStorage.getItem("seg-idioma");
    if (guardado === "EN" || guardado === "ES") setIdiomaState(guardado);
  }, []);

  const setIdioma = (lang) => {
    setIdiomaState(lang);
    localStorage.setItem("seg-idioma", lang);
  };

  return (
    <IdiomaContext.Provider value={{ idioma, setIdioma }}>
      {children}
    </IdiomaContext.Provider>
  );
}

export const useIdioma = () => useContext(IdiomaContext);
