import { BreadCrumb } from "@/components/Breadcrumb/BreadCrumb";
import NoFav from "@/components/NoFav/NoFav";
import { WishlistData } from "@/interfaces/interfaces";
import ProductView from "@/sections/ProductView/ProductView";
import { serverApi } from "@/services/serverApi";
import { getTranslations } from "next-intl/server";



export async function generateMetadata() {
    const t = await getTranslations('wishlist');
    return {
        title: `${t('title')} | بيت الجمال`,
    };
}

export default async function page() {
    const t = await getTranslations('wishlist');
    const { data: wishlists } = await serverApi<{ data: WishlistData[] }>("wishlists");
    return (
        <section className="container flex flex-col gap-7 bg-background">
            <BreadCrumb secondLink={t('title')} />
            {wishlists === null && <NoFav />}

            {/* <ProductView hidden products={wishlists} /> */}
        </section>
    )
}
