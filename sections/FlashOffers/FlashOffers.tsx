import Image from "next/image";
import Link from "next/link";
import { Banner } from "@/interfaces/interfaces";
import FadeIn from "@/components/Animations/Fadding";

export default function FlashOffers({ banners }: { banners: Banner[] }) {
    return (
        <section className="relative overflow-hidden">
            <div className="container relative z-10">
                <div className="grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2">
                    {banners.map((banner, index) => (
                        <FadeIn
                            key={banner.id}
                            direction="up"
                            delay={index * 0.1}>
                            <div
                                className="group rounded-3xl p-6 sm:p-8 md:p-10 flex flex-row items-center justify-between overflow-hidden relative transition-all duration-300 min-h-[220px] sm:min-h-[250px] md:min-h-[280px] bg-gray-50"
                            >
                                <div className="relative z-10 text-start w-3/5">
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-900 mb-2 md:mb-3 leading-tight">
                                        {banner.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-gray-500 mb-5 md:mb-8 leading-relaxed">
                                        {banner.description}
                                    </p>
                                    <Link
                                        href={`/products?category=`}
                                        className="inline-block bg-[#111111] hover:bg-[#f8a826] text-white px-5 py-2 md:px-8 md:py-3.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 hover:-translate-y-1"
                                    >
                                        تسوق الان
                                    </Link>
                                </div>

                                <div className="absolute end-0 bottom-0 w-[45%] h-[115%] flex items-end justify-start ps-2 sm:ps-4 pb-2">
                                    <Image
                                        src={banner.image.url}
                                        alt={banner.title}
                                        fill
                                        className="w-full h-full object-contain origin-bottom-left transition-transform duration-700 mix-blend-multiply object-left"
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}