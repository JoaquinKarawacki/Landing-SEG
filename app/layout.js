import { Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { IdiomaProvider } from "@/contexts/IdiomaContext";

/* ─── Fuente principal de SEG Ingeniería ──────────────────────────────────── */
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "SEG Ingeniería — Eficiencia Energética y Energías Renovables",
  description:
    "SEG Ingeniería es la primera consultora de reducción de costos energéticos del Uruguay. " +
    "Líder en eficiencia energética y energías renovables desde 1996.",
  icons: {
    icon: "/logo.png",
  },
};

/*
  El Header y Footer se definen aquí para que aparezcan en TODAS las páginas
  del sitio sin necesidad de importarlos en cada page.js individual.
*/
export default function LayoutRaiz({ children }) {
  return (
    <html lang="es" className={`${redHatDisplay.variable} overflow-x-hidden`}>
      <body className="antialiased flex flex-col min-h-screen overflow-x-hidden">
        <IdiomaProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </IdiomaProvider>
      </body>
    </html>
  );
}
