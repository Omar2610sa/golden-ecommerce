"use client"
import { useEffect, useState } from "react";
import { Slider } from "@/interfaces/interfaces";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import MainButton from "@/components/Reusable/MainButton";
import Link from "next/link";

export default function Hero({ slider, shopNowText = "تسوق الآن" }: { slider: Slider[], shopNowText?: string }) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setCurrent(api.selectedScrollSnap());
        api.on("select", () => setCurrent(api.selectedScrollSnap()));
    }, [api]);

    return (
        <div className="relative ">

            <Carousel
                dir="ltr"
                opts={{ loop: true }}
                plugins={[Autoplay({ delay: 2000, stopOnFocusIn: true })]}
                setApi={setApi}
            >
                <CarouselContent>
                    {slider.map((slider, index) => (
                        <CarouselItem
                            key={index}
                            className="relative z-40 w-full  h-[calc(80vh-92px)] xl:h-[calc(70vh-92px)] overflow-hidden"                        >
                            {/* Background image per slide */}
                            <Image
                                src={slider.image.url}
                                className={`absolute top-0 left-0 w-full h-full object-cover z-30 ${slider.image ? "" : "bg-red-500"}`}
                                fill
                                alt=""
                            />
                            <div className="absolute inset-0 bg-black/0 z-30" />

                            {/* Content */}
                            <div className="relative container z-40 w-full  h-full flex flex-col justify-center items-end gap-8  text-white">

                                <div className="flex flex-col items-end gap-4 md:gap-6 w-full md:max-w-xl">
                                    <h1 className="font-bold text-3xl md:text-6xl   leading-relaxed  text-right">
                                        {slider?.title}
                                    </h1>
                                    <p className=" md:text-2xl font-medium  text-end ">
                                        ألوان تناسب كل إطلالة وتبرز جمالك الطبيعي
                                    </p>
                                </div>
                                <Link href={`/slider/${slider.id}`}>
                                    <MainButton variant="third" text={shopNowText} px="px-20" py="py-5" />
                                </Link>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1">
                {slider.map((_, index) => (
                    <span
                        key={index}
                        className={`h-2 rounded-full bg-white transition-all duration-300 ${current === index ? "w-[42px]" : "w-2 bg-white/32"
                            }`}
                    />
                ))}
            </div>
        </div>

    );
}