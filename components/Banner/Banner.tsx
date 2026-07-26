import Image from "next/image";
import FadeIn from "../Animations/Fadding";
import TestBanner from "@/assets/banner.png"



export default function Banner({ banner }: { banner: { image: { url: string }, id: number } }) {
    return (
        <FadeIn direction="up">
            <div className="relative w-full h-[180px] md:h-[450px]  rounded-2xl">
                <Image
                    src={banner?.image?.url || TestBanner}
                    alt="Banner"
                    fill
                    className="absolute object-contain  rounded-2xl z-20"
                />
            </div>
        </FadeIn>
    )
}
