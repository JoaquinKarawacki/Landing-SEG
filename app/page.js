import HeroSlider from "@/components/HeroSlider";
import Pilares from "@/components/Pilares";
import SobreYIndicadores from "@/components/SobreYIndicadores";
import Novedades from "@/components/Novedades";

/*
  Página de inicio — Header y Footer vienen del layout raíz (app/layout.js)
  por lo que no es necesario importarlos aquí.
*/
export default function PaginaInicio() {
  return (
    <>
      <HeroSlider />
      <Pilares />
      <SobreYIndicadores />
      <Novedades />
    </>
  );
}
