
import BannerCuotas from "@/components/main-page-components/bannercuotas";
import BannerTemporada from "@/components/main-page-components/bannertemporada";
import Benefits from "@/components/main-page-components/benefits";
import Carousel from "@/components/main-page-components/carousel";
import Categorias from "@/components/main-page-components/categorias";
import Promotions from "@/components/main-page-components/promotions";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Carousel/>
      <BannerCuotas/>
      <Categorias/>
      <Promotions/>
      <BannerTemporada/>
      <Benefits/>
    </main>
  );
}
