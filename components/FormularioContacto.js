"use client";

import { useState } from "react";

const claseInput =
  "w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#ca3517] focus:ring-1 focus:ring-[#ca3517] transition-colors duration-200 bg-white disabled:opacity-50 disabled:cursor-not-allowed";

const ESTADO_INICIAL = { nombre: "", email: "", empresa: "", telefono: "", asunto: "", mensaje: "" };

export default function FormularioContacto() {
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
      const res = await fetch("/api/contacto", {
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
      setErrorMsg("No se pudo enviar el mensaje. Verificá tu conexión e intentá nuevamente.");
      setEstado("error");
    }
  }

  if (estado === "ok") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900">Mensaje enviado</h3>
        <p className="text-gray-600 text-sm max-w-xs">
          Recibimos tu consulta. Te responderemos a la brevedad.
        </p>
        <button
          onClick={() => setEstado("idle")}
          className="mt-2 text-sm text-[#ca3517] hover:underline font-medium"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  const enviando = estado === "enviando";

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
            Nombre completo <span className="text-[#ca3517]">*</span>
          </label>
          <input
            type="text"
            id="nombre"
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
          <label htmlFor="email" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
            Correo electrónico <span className="text-[#ca3517]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="juan@empresa.com"
            value={campos.email}
            onChange={handleChange}
            disabled={enviando}
            className={claseInput}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="empresa" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
            Empresa
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            placeholder="Mi Empresa S.A."
            value={campos.empresa}
            onChange={handleChange}
            disabled={enviando}
            className={claseInput}
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
            Teléfono <span className="text-gray-400 font-normal normal-case">(opcional)</span>
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            placeholder="+598 99 000 000"
            value={campos.telefono}
            onChange={handleChange}
            disabled={enviando}
            className={claseInput}
          />
        </div>
      </div>

      <div>
        <label htmlFor="asunto" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
          Asunto <span className="text-[#ca3517]">*</span>
        </label>
        <input
          type="text"
          id="asunto"
          name="asunto"
          required
          placeholder="Consulta sobre eficiencia energética"
          value={campos.asunto}
          onChange={handleChange}
          disabled={enviando}
          className={claseInput}
        />
      </div>

      <div>
        <label htmlFor="mensaje" className="block text-xs font-bold text-gray-700 uppercase tracking-wide mb-1.5">
          Mensaje <span className="text-[#ca3517]">*</span>
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          required
          rows={5}
          placeholder="Describa su consulta o proyecto..."
          value={campos.mensaje}
          onChange={handleChange}
          disabled={enviando}
          className={`${claseInput} resize-none`}
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
        className="w-full bg-[#ca3517] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#a82d12] transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
          "Enviar mensaje"
        )}
      </button>
    </form>
  );
}
