
import BannerCuotas from "@/components/bannercuotas";
import BannerTemporada from "@/components/bannertemporada";
import Benefits from "@/components/benefits";
import Carousel from "@/components/carousel";
import Categorias from "@/components/categorias";
import Promotions from "@/components/promotions";
import PruebaMapeo from "@/components/pruebamapeo";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Carousel/>
      <BannerCuotas/>
      <Categorias/>
      <Promotions/>
      <BannerTemporada/>
      <Benefits/>
      <PruebaMapeo/>
    </main>
  );
}
