/*
  app/admin/page.js es un Client Component ("use client") y no puede exportar
  metadata; por eso el título y el noindex del panel se definen acá.
*/
export const metadata = {
  title: "Panel de administración — SEG Ingeniería",
  robots: { index: false, follow: false },
};

export default function LayoutAdmin({ children }) {
  return children;
}
