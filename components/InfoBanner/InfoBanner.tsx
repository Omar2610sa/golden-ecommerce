
import heart from "@/assets/icons/heart.png"
import security from "@/assets/icons/security-card.png"
import verify from "@/assets/icons/verify.png"
import support from "@/assets/icons/24-support.png"
import Image from "next/image";

const infoItems = [
    {
        icon: verify,
        title: "منتجات أصلية",
        description: "نضمن لك منتجات أصلية بجودة عالية"
    },
    {
        icon: support,
        title: "دعم 24/7",
        description: "خدمة عملاء على مدار الأسبوع"
    },
    {
        icon: heart,
        title: "عناية يومية متكاملة",
        description: "كل ما تحتاجيه لروتين جمالك اليومي"
    },
    {
        icon: security,
        title: "دفع آمن",
        description: "تجربة دفع آمنة ومضمونة بنسبة 100%"
    }
];

export default function InfoBanner() {
    return (
        <section className=" bg-gradient-to-br from-[#F6F6F6] to-[#fff9dd] -mt-16 py-6">
            <div className="container grid grid-cols-4 items-center justify-center ">
                {
                    infoItems.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-6">
                            <Image src={item.icon} alt={item.title} className="size-10" />
                            <div className="flex flex-col gap-2">
                                <h3 className="font-bold text-xl">{item.title}</h3>
                                <p className="text-gray-600">{item.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
