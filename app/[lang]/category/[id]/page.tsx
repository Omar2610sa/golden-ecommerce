import FadeIn from "@/components/Animations/Fadding";
import { BreadCrumb } from "@/components/Breadcrumb/BreadCrumb";
import ShopCard from "@/components/ShopCard/ShopCard";
import { Categories } from "@/interfaces/interfaces";
import { serverApi } from "@/services/serverApi";
import { localizedField } from "@/utils/localizedField";
import { ArrowUpDownIcon, ChevronsUpDown, Menu } from "lucide-react";

type Props = {
    params: Promise<{
        id: string;
        lang: string;
    }>;
};

export default async function page({ params }: Props) {

    const { id } = await params;
    const { data: category } = await serverApi<{ data: Categories }>(
        `categories/${id}`
    );

    const { data: catProducts } = await serverApi<{ data: Categories }>(
        `products?filters[category_id]=${id}`
    );

    const categoryName = await localizedField(category, 'name');

    return (
        <section className="container flex flex-col gap-7 bg-background">
            <BreadCrumb secondLink={categoryName} />

            <div className="flex items-center gap-2 w-fit text-white bg-primary px-3 py-2.5 font-bold rounded-xl">
                <span>تصفيه حسب</span>
                <Menu className="group-data-panel-open/button:rotate-180 size-4" />
            </div>

            <div className="flex justify-between">
                <h2 className="text-3xl font-semibold">
                    {categoryName}
                </h2>

                <div className="flex items-center gap-2 w-fit text-black bg-white border px-3 py-2.5 font-bold rounded-full">
                    <ArrowUpDownIcon className="group-data-panel-open/button:rotate-180 size-4" />
                    <span>ترتيب حسب</span>
                    <ChevronsUpDown className="group-data-panel-open/button:rotate-180 size-4" />
                </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                {catProducts?.products.map((product, index) => (
                    <FadeIn key={product.id} direction="up" delay={index * 0.3}>
                        <ShopCard product={product} />
                    </FadeIn>
                ))}
            </div>
        </section>
    );
}