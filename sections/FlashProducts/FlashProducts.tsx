import SectionTitle from "@/components/SectionTitle/SectionTitle"
import ShopCard from "@/components/ShopCard/ShopCard"
import { CardContent } from "@/components/ui/card"
import { ProductCard } from "@/interfaces/interfaces"

import flashImage from "@/assets/flash.jpg"
import Image from "next/image"
import MainButton from "@/components/Reusable/MainButton"
import FadeIn from "@/components/Animations/Fadding"

export default function FlashProducts({
    products,
    title
}: {
    products: ProductCard[],
    title: string
}) {
    return (
        <section className="container flex flex-col gap-3 ">
            {/* Title */}
            <SectionTitle title={title} />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 p-6">
                            <FadeIn direction="left">

                <div className="relative mx-4 h-[420px] col-span-2 md:col-span-1 rounded-2xl overflow-hidden">
                    <Image
                        src={flashImage}
                        alt="Flash Sale"
                        className="w-full relative h-full object-cover"
                    />
                    <CardContent className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-white z-10">
                        <p className="text-xl md:text-5xl leading-tight font-bold text-center">
                            عروض مميزة على منتجات مختارة
                        </p>
                        <MainButton  text="تسوق الآن" px="px-12" py="py-6" />
                    </CardContent>
                    <div className="absolute inset-0 bg-black/70   " />
                </div>
                            </FadeIn>

                {products.map((product) => (
                    <ShopCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    )
}
