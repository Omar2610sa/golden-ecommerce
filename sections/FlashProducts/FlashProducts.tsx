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
    title,
    hidden
}: {
    products: ProductCard[],
    title: string
    hidden?: boolean

}) {
    return (
        <section className="container flex flex-col gap-3 ">
            {/* Title */}
            <SectionTitle title={title}
                hidden={hidden}
            />

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 py-6">
                <FadeIn direction="left">

                    <div className="relative mx-4 h-[360px] col-span-2 md:col-span-1 rounded-2xl overflow-hidden group">
                        <Image
                            src={flashImage}
                            alt="Flash Sale"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <CardContent className="absolute inset-0 flex flex-col gap-5 items-center justify-center text-white z-10">
                            <p className="text-xl md:text-5xl leading-tight font-bold text-center">
                                عروض مميزة على منتجات مختارة
                            </p>
                            <MainButton text="تسوق الآن" px="px-12" py="py-6" />
                        </CardContent>
                        <div className="absolute inset-0 bg-black/70   " />
                    </div>
                </FadeIn>


                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 col-span-2 ">

                    {products.map((product) => (
                        <ShopCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    )
}
