import Banner from "@/components/Banner/Banner";
import { HomeData } from "@/interfaces/interfaces";
import CategorySlider from "@/sections/CategorySlider/CategorySlider";
import FlashProducts from "@/sections/FlashProducts/FlashProducts";
import Hero from "@/sections/Hero/Hero";
import ProductView from "@/sections/ProductView/ProductView";
import { serverApi } from "@/services/serverApi";
import banner from "@/assets/banner.png"
import InfoBanner from "@/components/InfoBanner/InfoBanner";
import FlashOffers from "@/sections/FlashOffers/FlashOffers";
export default async function Home() {

  const { data: home } = await serverApi<{ data: HomeData }>("home");
  return (
    <div className="">
      <Hero slider={home?.sliders ?? []} />
      <CategorySlider category={home?.categories} />
      <FlashOffers banners={home?.banners} />
      <ProductView title="وصل حديثًا" products={home?.recent_products ?? []} />
      {/* <Banner banner={home?.banners[2]} /> */}
      <ProductView title="الأكثر مبيعًا" products={home?.best_selling_products ?? []} />
      <Banner banner={{ id: 0, image: { url: banner.src } }} />
      <FlashProducts products={home?.flash_sale_products ?? []} title="عروض مميزة" hidden />
      <Banner banner={home?.banners[4]} />
      <InfoBanner />
    </div>
  );
}
