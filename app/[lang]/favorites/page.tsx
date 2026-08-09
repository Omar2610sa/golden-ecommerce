import FadeIn from "@/components/Animations/Fadding";
import { BreadCrumb } from "@/components/Breadcrumb/BreadCrumb";
import NoFav from "@/components/NoFav/NoFav";
import RefreshBtn from "@/components/RefreshBtn/RefreshBtn";
import ShopCard from "@/components/ShopCard/ShopCard";
import { Button } from "@/components/ui/button";
import { WishlistData } from "@/interfaces/interfaces";
import { serverApiClient } from "@/services/serverApiClient";
import { getTranslations } from "next-intl/server";



export async function generateMetadata() {
    const t = await getTranslations('wishlist');
    return {
        title: `${t('title')} | بيت الجمال`,
    };
}

export default async function page() {
    const t = await getTranslations('wishlist');
    const { data: wishlists } = await serverApiClient<{ data: WishlistData[] }>("wishlists");
    console.log("wishlists", wishlists);
    return (
        <section className="container flex flex-col gap-7 bg-background">
            <div className="flex justify-between items-center">
                <BreadCrumb secondLink={t('title')} />
                <RefreshBtn />
            </div>
            {wishlists.length === 0 && <NoFav />}

            <div
                className="flex gap-3 overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory p-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {wishlists?.map((item, index) => (
                    <FadeIn
                        key={index}
                        direction="up"
                        delay={index * 0.1}
                        className="shrink-0 w-[45%] md:w-[23%] snap-start"
                    >
                        <ShopCard product={item?.product} />
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}
