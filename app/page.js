import VideoInstitucional from "@/components/VideoInstitucional";
import Pilares from "@/components/Pilares";
import SobreYIndicadores from "@/components/SobreYIndicadores";
import Novedades from "@/components/Novedades";

export const dynamic = "force-dynamic";

export default function PaginaInicio() {
  return (
    <>
      <VideoInstitucional />
      <Pilares />
      <SobreYIndicadores />
      <Novedades />
    </>
  );
}
