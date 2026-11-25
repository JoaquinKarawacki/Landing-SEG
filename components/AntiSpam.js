"use client";

import { useEffect, useRef } from "react";

/*
  Protección anti-bots para formularios públicos (se valida en el servidor con
  detectarSpam() de lib/seguridad.js):
  - Campo trampa (honeypot): invisible para personas; los bots lo completan.
  - Tiempo de llenado: milisegundos desde que se montó el formulario hasta el envío.
*/
export function useAntiSpam() {
  const inicio = useRef(0);
  const trampa = useRef(null);

  useEffect(() => {
    inicio.current = Date.now();
  }, []);

  function datosAntiSpam() {
    return {
      _hp: trampa.current?.value || "",
      _ms: inicio.current ? Date.now() - inicio.current : 0,
    };
  }

  return { trampa, datosAntiSpam };
}

export function CampoTrampa({ inputRef }) {
  return (
    <div
      aria-hidden="true"
      style={{ position: "fixed", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}
    >
      <label>
        No completar este campo
        <input ref={inputRef} type="text" name="referencia_extra" tabIndex={-1} autoComplete="off" defaultValue="" />
      </label>
    </div>
  );
}
