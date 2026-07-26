import { BreadCrumb } from "@/components/Breadcrumb/BreadCrumb";
import InfoBanner from "@/components/InfoBanner/InfoBanner";
import { Product, ProductCard } from "@/interfaces/interfaces";
import ProductInfo from "@/sections/Product/ProductInfo";
import ProductView from "@/sections/ProductView/ProductView";
import { serverApi } from "@/services/serverApi";

type Props = {
    params: Promise<{
        id: string;
    }>;
};

export default async function page({ params }: Props) {
    const { id } = await params;
    const { data: product } = await serverApi<{ data: ProductCard }>(
        `products/${id}`
    );
    return (
        <section>
            <div className="container flex flex-col gap-10 bg-background" >
                <BreadCrumb secondLink={product.ar.name} />
                <ProductInfo product={product as unknown as Product} />
                <ProductView
                    title='الأفضل استخدامه مع'
                    products={product?.related_products ?? []}
                    hidden />
            </div>
            <InfoBanner />
        </section>
    )
}
