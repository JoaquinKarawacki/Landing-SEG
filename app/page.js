import HeroSlider from "@/components/HeroSlider";
import Pilares from "@/components/Pilares";
import SobreYIndicadores from "@/components/SobreYIndicadores";
import Novedades from "@/components/Novedades";

export const dynamic = "force-dynamic";

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
