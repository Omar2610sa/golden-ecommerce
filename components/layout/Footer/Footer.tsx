import {
    FaFacebook,
    FaInstagram,
    FaSnapchat,
    FaTiktok,
    FaPhoneAlt,
    FaRegEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "@/assets/footerLogo.png"
import Image from "next/image"
import Link from "next/link"
import FadeIn from "@/components/Animations/Fadding";

// interface SocialLink {
//     id: number
//     key: string
//     value: string
// }

const iconMap: Record<string, any> = {
    facebook: <FaFacebook />,
    instagram: <FaInstagram />,
    snapchat: <FaSnapchat />,
    tiktok: <FaTiktok />,
}

const categoryLinks = [
    { label: "العناية بالبشرة", href: "#" },
    { label: "العناية الشخصية", href: "#" },
    { label: "العناية بالشعر", href: "#" },
    { label: "المكياج والجمال", href: "#" },
]

const supportLinks = [
    { label: "سياسة الإسترجاع والاستبدال", href: "#" },
    { label: "الشروط والأحكام", href: "#" },
    { label: "سياسة الخصوصية", href: "#" },
]

export default function Footer() {
    const socialMediaKeys = ['facebook', 'instagram', 'snapchat', 'tiktok',]

    return (
        <footer className="border-t bg-footer text-white">

            <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 py-12">
                {/* Col 1 - Logo & Info */}
                <FadeIn delay={0.1} direction="up" >
                    <div className="flex flex-col gap-6">
                        <Image src={logo} alt="Logo" width={140} height={140} />
                        <p className="leading-relaxed">نقدّم لكِ منتجات أصلية للعناية بالبشرة والجمال لتمنحكِ إطلالة واثقة ومميزة.</p>

                        <div className="flex items-center gap-4 mt-5">
                            {socialMediaKeys.map((social) => {
                                const icon = iconMap[social]
                                if (!icon) return null
                                return (
                                    <Link key={social} href={`https://www.${social}.com`} target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-primary transition-colors">
                                        {icon}
                                    </Link>
                                )
                            })}
                        </div>
                    </div>
                </FadeIn>

                {/* Col 2 - About */}
                <FadeIn delay={0.2} direction="up">
                    <div className="flex flex-col gap-8">
                        <h3 className="font-bold pb-3 border-b-2 max-w-fit border-primary text-2xl">عنّا</h3>
                        <nav className="flex flex-col gap-4 w-fit">
                            <Link href="#" className="hover:underline">من نحن</Link>
                            <Link href="#" className="hover:underline">تواصل معنا</Link>
                        </nav>
                    </div>
                </FadeIn>

                {/* Col 3 - Categories */}
                <FadeIn delay={0.3} direction="up">
                    <div className="flex flex-col gap-8">
                        <h3 className="font-bold pb-3 border-b-2 max-w-fit border-primary text-2xl">الأقسام</h3>
                        <nav className="flex flex-col gap-4">
                            {categoryLinks.map((link) => (
                                <Link key={link.label} href={link.href} className=" w-fit hover:underline">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </FadeIn>

                {/* Col 4 - Support */}
                <FadeIn delay={0.4} direction="up">
                    <div className="flex flex-col gap-8">
                        <h3 className="font-bold pb-3 border-b-2 max-w-fit border-primary text-2xl">الدعم والمساعدة</h3>
                        <nav className="flex flex-col gap-4">
                            {supportLinks.map((link) => (
                                <Link key={link.label} href={link.href} className="w-fit hover:underline">
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </FadeIn>

                {/* Col 5 - Contact */}
                <FadeIn delay={0.5} direction="up">
                    <div className="flex flex-col gap-8">
                        <h3 className="font-bold pb-3 border-b-2 max-w-fit border-primary text-2xl">وسائل التواصل</h3>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-lg shrink-0" />
                                <span>+966 0500012454</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaRegEnvelope className="text-lg shrink-0" />
                                <span className="leading-normal max-w-sm">care@goldenbeautyhouse.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaMapMarkerAlt className="text-lg shrink-0" />
                                <span>الرياض، المملكة العربية السعودية</span>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Bottom bar */}
            <div className=" border-t border-white/10">
                <div className="container py-10 text-sm text-white/70 flex justify-center items-center">
                    <span>
                        جميع الحقوق محفوظة © Golden Beauty House {new Date().getFullYear()}
                    </span>
                </div>

            </div>
        </footer>
    )
}