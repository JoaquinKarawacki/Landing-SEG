"use client";

import { useState } from "react";

const CAMPOS_INDICADORES = [
  { name: "titulo",      label: "Título",      type: "text" },
  { name: "fecha",       label: "Fecha",       type: "text",     placeholder: "26/04/2026" },
  { name: "mes",         label: "Mes",         type: "text",     placeholder: "Abril 2026" },
  { name: "descripcion", label: "Descripción", type: "textarea" },
  { name: "pdf",         label: "PDF",         type: "file",     accept: ".pdf", fileType: "pdf" },
  { name: "imagen",      label: "Imagen",      type: "file",     accept: "image/*", fileType: "imagen" },
];

const CAMPOS_NOVEDADES = [
  { name: "titulo",      label: "Título",      type: "text" },
  { name: "fecha",       label: "Fecha",       type: "text",     placeholder: "26/04/2026" },
  { name: "categoria",   label: "Categoría",   type: "text",     placeholder: "Reconocimientos" },
  { name: "descripcion", label: "Descripción", type: "textarea" },
  { name: "href",        label: "Link",        type: "text",     placeholder: "https://linkedin.com/..." },
  { name: "Imagen",      label: "Imagen",      type: "file",     accept: "image/*", fileType: "imagen" },
  { name: "posicion",   label: "Posición de la imagen", type: "select", optional: true, opciones: [
    { label: "Centrar imagen (por defecto)", value: "" },
    { label: "Mostrar parte superior", value: "object-top" },
    { label: "Mostrar parte inferior", value: "object-bottom" },
  ]},
];

const NOTAS = [
  { name: "titulo",      label: "Título",      type: "text",     placeholder: "Índices de Precios de los Energéticos IPER e IPEI" },
  { name: "resumen",     label: "Resumen",     type: "text" },
  { name: "temas",       label: "temas",       type: "text",     placeholder: "Electricidad, Combustibles, IPER" },
  { name: "pdf",         label: "PDF",         type: "file",     accept: ".pdf", fileType: "pdf" },
];


function FormularioNuevo({ campos, onAgregar, onSubir, limite }) {
  const vacio = Object.fromEntries(campos.map(c => [c.name, ""]));
  const [form, setForm] = useState(vacio);
  const [error, setError] = useState("");
  const [subiendo, setSubiendo] = useState({});

  async function subirArchivo(campo, tipo, archivo) {
    setSubiendo(p => ({ ...p, [campo]: true }));
    const fd = new FormData();
    fd.append("archivo", archivo);
    fd.append("tipo", tipo);
    const ruta = await onSubir(fd);
    if (ruta) setForm(p => ({ ...p, [campo]: ruta }));
    setSubiendo(p => ({ ...p, [campo]: false }));
  }

  async function submit(e) {
    e.preventDefault();
    setError("");
    const res = await onAgregar(form);
    if (res.ok) {
      setForm(vacio);
    } else {
      setError(res.error || "Error al agregar");
    }
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#ca3517]";

  return (
    <form onSubmit={submit} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8 space-y-4">
      <h2 className="font-bold text-gray-900">Agregar artículo {limite <= 0 && <span className="text-red-500 text-xs font-normal">(límite alcanzado)</span>}</h2>
      {campos.map(c => (
        <div key={c.name}>
          <label className="block text-xs font-semibold text-gray-600 mb-1">{c.label}</label>
          {c.type === "textarea" ? (
            <textarea
              value={form[c.name]}
              onChange={e => setForm(p => ({ ...p, [c.name]: e.target.value }))}
              rows={3}
              className={inputClass}
              required
            />
          ) : c.type === "file" ? (
            <div className="flex items-center gap-2">
              <input
                type="file"
                accept={c.accept}
                onChange={e => e.target.files[0] && subirArchivo(c.name, c.fileType, e.target.files[0])}
                className="text-sm text-gray-600"
              />
              {subiendo[c.name] && <span className="text-xs text-gray-400">Subiendo...</span>}
              {form[c.name] && <span className="text-xs text-green-600 truncate max-w-xs">{form[c.name]}</span>}
            </div>
          ) : c.type === "select" ? (
            <select
              value={form[c.name]}
              onChange={e => setForm(p => ({ ...p, [c.name]: e.target.value }))}
              className={inputClass}
            >
              {c.opciones.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          ) : (
            <input
              type="text"
              value={form[c.name]}
              onChange={e => setForm(p => ({ ...p, [c.name]: e.target.value }))}
              placeholder={c.placeholder || ""}
              className={inputClass}
              required={!c.optional}
            />
          )}
        </div>
      ))}
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={limite <= 0 || Object.values(subiendo).some(Boolean)}
        className="bg-[#ca3517] text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-[#a82d12] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Agregar
      </button>
    </form>
  );
}

export default function PaginaAdmin() {
  const [pestaña, setPestaña] = useState("indicadores");
  const [indicadores, setIndicadores] = useState([]);
  const [novedades, setNovedades] = useState([]);
  const [notas, setNotas] = useState([]);
  const [token, setToken] = useState("");
  const [autenticado, setAutenticado] = useState(false);
  const [errorLogin, setErrorLogin] = useState("");

  function authHeaders() {
    return { "Content-Type": "application/json", "x-admin-token": token };
  }

  async function login() {
    const res = await fetch("/api/auth", { headers: { "x-admin-token": token } });
    if (res.ok) {
      setAutenticado(true);
      setErrorLogin("");
      fetch("/api/indicadores").then(r => r.json()).then(setIndicadores);
      fetch("/api/novedades").then(r => r.json()).then(setNovedades);
      fetch("/api/notas").then(r => r.json()).then(setNotas);
    } else {
      setErrorLogin("Token incorrecto");
    }
  }

  async function agregar(seccion, datos) {
    let url, extra;
    if(seccion === "indicadores") {
      url = "/api/indicadores";
      extra = { href: "/indicadores" };
    }else if(seccion === "novedades") {
      url = "/api/novedades";
      extra = {};
    }else {
      url = "/api/notas";
      extra = {};
    }
    const res = await fetch(url, {
      method: "POST",
      headers: authHeaders(),
      body: JSON.stringify({ ...datos, ...extra }),
    });
    const json = await res.json();
    if (res.ok) {
      if (seccion === "indicadores") setIndicadores(prev => [json, ...prev]);
      else if(seccion === "novedades") setNovedades(prev => [json, ...prev]);
      else setNotas(prev => [json, ...prev]);
      return { ok: true };
    }
    return { ok: false, error: json.error };
  }

  async function subir(formData) {
    const res = await fetch("/api/upload", {
      method: "POST",
      headers: { "x-admin-token": token },
      body: formData,
    });
    const json = await res.json();
    return json.ruta || null;
  }

  async function eliminar(seccion, id) {
    let url, extra;
     if(seccion === "indicadores") {
      url = "/api/indicadores";
      extra = { href: "/indicadores" };
    }else if(seccion === "novedades") {
      url = "/api/novedades";
      extra = {};
    }else {
      url = "/api/notas";
      extra = {};
    }
    await fetch(url, { method: "DELETE", headers: authHeaders(), body: JSON.stringify({ id }) });
    if (seccion === "indicadores") setIndicadores(prev => prev.filter(a => a.id !== id));
    else if(seccion === "novedades") setNovedades(prev => prev.filter(a => a.id !== id));
    else setNotas(prev => prev.filter(a => a.id !== id));
  }

  if (!autenticado) {
    return (
      <div className="max-w-sm mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-black mb-6">Admin</h1>
        <input
          type="password"
          placeholder="Token de acceso"
          value={token}
          onChange={e => setToken(e.target.value)}
          onKeyDown={e => e.key === "Enter" && login()}
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 text-sm"
        />
        {errorLogin && <p className="text-red-500 text-sm mb-3">{errorLogin}</p>}
        <button onClick={login} className="bg-[#ca3517] text-white px-6 py-2 rounded-full font-semibold text-sm">
          Entrar
        </button>
      </div>
    );
  }

const articulos = pestaña === "indicadores" ? indicadores : pestaña === "novedades" ? novedades : notas;
const campos = pestaña === "indicadores" ? CAMPOS_INDICADORES : pestaña === "novedades" ? CAMPOS_NOVEDADES : NOTAS;



  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-black">Panel de administración</h1>
        <button onClick={() => setAutenticado(false)} className="text-sm text-gray-400 hover:text-gray-700">
          Cerrar sesión
        </button>
      </div>

      <div className="flex gap-2 mb-8">
        <button
          onClick={() => setPestaña("indicadores")}
          className={`px-6 py-2 rounded-full font-semibold text-sm ${pestaña === "indicadores" ? "bg-[#ca3517] text-white" : "bg-gray-100 text-gray-700"}`}
        >
          Indicadores ({indicadores.length}/6)
        </button>
        <button
          onClick={() => setPestaña("novedades")}
          className={`px-6 py-2 rounded-full font-semibold text-sm ${pestaña === "novedades" ? "bg-[#ca3517] text-white" : "bg-gray-100 text-gray-700"}`}
        >
          Novedades ({novedades.length}/6)
        </button>
         <button
          onClick={() => setPestaña("notas")}
          className={`px-6 py-2 rounded-full font-semibold text-sm ${pestaña === "notas" ? "bg-[#ca3517] text-white" : "bg-gray-100 text-gray-700"}`}
        >
          Notas ({notas.length}/6)
        </button>
      </div>

      <FormularioNuevo
        key={pestaña}
        campos={campos}
        limite={6 - articulos.length}
        onAgregar={datos => agregar(pestaña, datos)}
        onSubir={subir}
      />

      <div className="space-y-3">
        <h2 className="font-bold text-gray-900 mb-3">Artículos actuales</h2>
        {articulos.map(a => (
          <div key={a.id} className="flex items-center justify-between bg-white border border-gray-200 rounded-lg px-4 py-3 shadow-sm">
            <div>
              <p className="font-semibold text-gray-900 text-sm">{a.titulo}</p>
              <p className="text-gray-400 text-xs">{a.fecha}</p>
            </div>
            <button
              onClick={() => eliminar(pestaña, a.id)}
              className="text-sm text-red-600 hover:text-red-800 font-semibold"
            >
              Eliminar
            </button>
          </div>
        ))}
        {articulos.length === 0 && <p className="text-gray-400 text-sm">No hay artículos.</p>}
      </div>
    </div>
  );
}
