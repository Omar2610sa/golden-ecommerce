import { HomeData } from "@/interfaces/interfaces";
import Hero from "@/sections/Hero/Hero";
import { serverApi } from "@/services/serverApi";

export default async function Home() {

  const { data: home } = await serverApi<{ data: HomeData }>("home");

  return (
    <div className="h-[600vh]">
      <Hero slider={home?.sliders ?? []} />
      
    </div>
  );
}
