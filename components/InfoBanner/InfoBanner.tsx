
import heart from "@/assets/icons/heart.png"
import security from "@/assets/icons/security-card.png"
import verify from "@/assets/icons/verify.png"
import support from "@/assets/icons/24-support.png"
import Image from "next/image";
import FadeIn from "../Animations/Fadding";
import { getTranslations } from "next-intl/server";

export default async function InfoBanner() {
    const t = await getTranslations('infoItems');

    const infoItems = [
        { icon: verify, title: t('authenticProducts.title'), description: t('authenticProducts.description') },
        { icon: support, title: t('support247.title'), description: t('support247.description') },
        { icon: heart, title: t('dailyCare.title'), description: t('dailyCare.description') },
        { icon: security, title: t('securePayment.title'), description: t('securePayment.description') },
    ];
    return (
        <section className=" bg-gradient-to-br from-[#F6F6F6] to-[#fff9dd] -mt-16 py-6">
            <div className="container grid grid-cols-4 items-center justify-center ">
                {
                    infoItems.map((item, index) => (
                        <FadeIn direction="down" key={index} delay={index * 0.3}>
                            <div className="flex flex-col items-center text-center gap-6 group">
                                <Image src={item.icon} alt={item.title} className="size-10 group-hover:-translate-y-1.5 transition-transform duration-300" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="font-bold text-xl">{item.title}</h3>
                                    <p className="text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))
                }
            </div>
        </section>
    )
}
