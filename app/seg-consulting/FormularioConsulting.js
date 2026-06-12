"use client";
import { useState } from "react";

const AREAS = [
  "Sistemas Eléctricos",
  "Sector Público",
  "Gestión Corporativa",
  "Hidrógeno / Emergentes",
  "Movilidad",
  "Due Diligence",
  "Otro",
];

const vacio = { nombre: "", email: "", organizacion: "", pais: "", area: "", mensaje: "" };

export default function FormularioConsulting() {
  const [form, setForm] = useState(vacio);
  const [estado, setEstado] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const claseInput =
    "w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-[#ca3517] transition-colors";

  function set(campo, valor) {
    setForm((p) => ({ ...p, [campo]: valor }));
  }

  async function submit(e) {
    e.preventDefault();
    setEstado("enviando");
    setErrorMsg("");
    try {
      const res = await fetch("/api/consulting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json();
      if (res.ok) {
        setEstado("ok");
        setForm(vacio);
      } else {
        setEstado("error");
        setErrorMsg(json.error || "Error al enviar.");
      }
    } catch {
      setEstado("error");
      setErrorMsg("Error de conexión. Intentá nuevamente.");
    }
  }

  if (estado === "ok") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-bold text-gray-900 text-lg mb-2">¡Consulta enviada!</h3>
        <p className="text-gray-600 text-sm">Nos pondremos en contacto a la brevedad.</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Nombre y apellido *</label>
          <input type="text" value={form.nombre} onChange={e => set("nombre", e.target.value)} className={claseInput} required />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Email *</label>
          <input type="email" value={form.email} onChange={e => set("email", e.target.value)} className={claseInput} required />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">Organización / empresa *</label>
          <input type="text" value={form.organizacion} onChange={e => set("organizacion", e.target.value)} className={claseInput} required />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-1">País *</label>
          <input type="text" value={form.pais} onChange={e => set("pais", e.target.value)} className={claseInput} required />
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Área de interés *</label>
        <select value={form.area} onChange={e => set("area", e.target.value)} className={claseInput} required>
          <option value="">Seleccioná un área</option>
          {AREAS.map(a => <option key={a} value={a}>{a}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-gray-600 mb-1">Mensaje *</label>
        <textarea
          value={form.mensaje}
          onChange={e => set("mensaje", e.target.value)}
          rows={4}
          placeholder="Contanos sobre tu proyecto o desafío energético..."
          className={claseInput}
          required
        />
      </div>

      {estado === "error" && (
        <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-2">{errorMsg}</p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        className="w-full bg-[#ca3517] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#a82d12] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
      >
        {estado === "enviando" ? "Enviando..." : "Enviar consulta"}
      </button>
    </form>
  );
}
