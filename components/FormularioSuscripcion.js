"use client";

import { useState } from "react";

const claseInput =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ca3517] focus:ring-1 focus:ring-[#ca3517] transition-colors duration-200 bg-white disabled:opacity-50 disabled:cursor-not-allowed";

const ESTADO_INICIAL = { nombre: "", email: "", empresa: "", telefono: "" };

export default function FormularioSuscripcion() {
  const [campos, setCampos] = useState(ESTADO_INICIAL);
  const [estado, setEstado] = useState("idle"); // idle | enviando | ok | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setCampos((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setEstado("enviando");
    setErrorMsg("");

    try {
      const res = await fetch("/api/suscripcion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(campos),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error || "Error desconocido.");
        setEstado("error");
      } else {
        setEstado("ok");
        setCampos(ESTADO_INICIAL);
      }
    } catch {
      setErrorMsg("No se pudo completar la suscripción. Verificá tu conexión e intentá nuevamente.");
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">¡Suscripción registrada!</h3>
        <p className="text-gray-600 text-sm max-w-xs">
          Te sumaremos a la lista de distribución de Indicadores Energéticos.
        </p>
      </div>
    );
  }

  const enviando = estado === "enviando";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <label htmlFor="sub-nombre" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
          Nombre completo <span className="text-[#ca3517]">*</span>
        </label>
        <input
          type="text"
          id="sub-nombre"
          name="nombre"
          required
          placeholder="Juan García"
          value={campos.nombre}
          onChange={handleChange}
          disabled={enviando}
          className={claseInput}
        />
      </div>

      <div>
        <label htmlFor="sub-email" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
          Correo electrónico <span className="text-[#ca3517]">*</span>
        </label>
        <input
          type="email"
          id="sub-email"
          name="email"
          required
          placeholder="juan@empresa.com"
          value={campos.email}
          onChange={handleChange}
          disabled={enviando}
          className={claseInput}
        />
      </div>

      <div>
        <label htmlFor="sub-empresa" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
          Empresa <span className="text-[#ca3517]">*</span>
        </label>
        <input
          type="text"
          id="sub-empresa"
          name="empresa"
          required
          placeholder="Mi Empresa S.A."
          value={campos.empresa}
          onChange={handleChange}
          disabled={enviando}
          className={claseInput}
        />
      </div>

      <div>
        <label htmlFor="sub-telefono" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
          Teléfono <span className="text-gray-400 font-normal normal-case">(opcional)</span>
        </label>
        <input
          type="tel"
          id="sub-telefono"
          name="telefono"
          placeholder="+598 99 000 000"
          value={campos.telefono}
          onChange={handleChange}
          disabled={enviando}
          className={claseInput}
        />
      </div>

      {estado === "error" && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={enviando}
        className="w-full bg-[#ca3517] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#a82d12] transition-colors duration-200 mt-2 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {enviando ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
            </svg>
            Enviando...
          </>
        ) : (
          "Suscribirse a los Indicadores"
        )}
      </button>
    </form>
  );
}
