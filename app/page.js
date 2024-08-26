
import BannerCuotas from "@/components/bannercuotas";
import BannerTemporada from "@/components/bannertemporada";
import Benefits from "@/components/benefits";
import Carousel from "@/components/carousel";
import Categorias from "@/components/categorias";
import Promotions from "@/components/promotions";


export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <Carousel />
      <BannerCuotas/>
      <Categorias/>
      <Promotions/>
      <BannerTemporada/>
      <Benefits/>
      <hr className="w-full"/>
    </main>
  );
}
