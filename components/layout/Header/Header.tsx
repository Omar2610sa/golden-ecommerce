import { Mail, PhoneCall, Search } from "lucide-react";

import HeaderLinks from "./HeaderLinks";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import logo from "@/assets/logo.png";
import MainButton from "@/components/Reusable/MainButton";

import Heart from "@/assets/icons/heart.png"
import ShoppingCart from "@/assets/icons/shopping-cart.png"
import Bell from "@/assets/icons/notification-bing.png"
import discount from "@/assets/icons/discount-shape.png"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

export default function Header() {

    const menuItems = [
        {
            label: "العناية بالبشرة",
            items: [
                "غسول البشرة",
                "تونر",
                "سيروم",
                "ماسكات",
                "مرطب",
                "شامبو",
                "مقشرات",
                "واقي شمس",
            ],
        },
        {
            label: "العناية الشخصية",
            items: [
                "غسول الجسم",
                "عناية باليدين والقدمين",
            ],
        },
        {
            label: "العناية بالشعر",

            items: [
                "شامبو",
                "بلسم",
                "ماسك للشعر",
                "زيوت للشعر",
                "سيروم للشعر",
            ],
        },
        {
            label: "المكياج والجمال",
            items: [
                "شامبو",
                "شامبو",
                "شامبو",
                "شامبو",
            ],
        },
        {
            label: "أدوات التجميل",
            items: [
                "شامبو",
                "شامبو",
                "شامبو",
                "شامبو",
            ],
        },
        {
            label: "عروض مميزة",
            items: [
                "شامبو",
                "شامبو",
                "شامبو",
                "شامبو",
            ],
        },
    ]

    return (
        <header className="hidden md:flex flex-col shrink-0 bg-background">
            {/* Top Nav */}
            <div className="bg-secondary-foreground text-primary-foreground flex justify-between items-center py-2 px-10">
                {/* Phone & Email */}
                <div className="flex flex-col md:flex-row font-medium items-center gap-8 text-xs">
                    <div className="flex items-center gap-2">
                        <PhoneCall className="size-3.5" />
                        اتصل بنا : 96124563222
                    </div>
                    <div className="flex items-center gap-2">
                        <Mail className="size-3.5" />
                        care@goldenbeautyhouse.com
                    </div>
                </div>
                <HeaderLinks />
            </div>

            {/* Second nav */}
            <nav className="grid grid-rows-[2fr_1fr] gap-1  h-full">

                <div className="flex justify-between px-12 pt-3 items-center">

                    {/* Logo */}
                    <Link href="/" className="shrink-0 w-fit">
                        <Image src={logo} className="size-20 object-contain" alt="logo" />
                    </Link>

                    {/* Search */}
                    <div className="relative flex justify-center w-lg ">
                        <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                        <Input
                            placeholder="البحث عن منتج"
                            className="px-9 py-5 placeholder:text-sm bg-gray-100 rounded-3xl focus-visible:ring-primary/50  focus-visible:border-primary "
                        />
                    </div>

                    <div className="flex gap-5 justify-between items-center shrink-0">
                        {/* <Link href="/" className="flex justify-center items-center relative size-6">
                            <Image src={ShoppingCart} alt="Heart" className="size-6" />
                            <span className="absolute top-0 right-0">
                                <span className="absolute h-3 w-3 rounded-full bg-primary opacity-75"></span>
                                <span className="absolute h-3 w-3 rounded-full bg-primary"></span>
                            </span>
                        </Link>
                        <Link href="/" className="flex justify-center items-center relative size-6">
                            <Image src={Heart} alt="Bell" className="size-6" />
                            <span className="absolute top-0 right-0">
                                <span className="absolute h-3 w-3 rounded-full bg-primary opacity-75"></span>
                                <span className="absolute h-3 w-3 rounded-full bg-primary"></span>
                            </span>
                        </Link> */}

                        <MainButton text="سجل دخول" size={"xl"} />
                        <MainButton text="إنشاء حساب جديد" size={"xl"} />
                    </div>

                </div>

                {/* Menu Items */}
                <div className="flex items-center  justify-center mx-auto">
                    <div className="flex justify-between items-center gap-10 text-[14px] font-bold">
                        {menuItems.map((item) => (
                            <DropdownMenu key={item.label} modal={false}>
                                <DropdownMenuTrigger className="flex items-center gap-1 whitespace-nowrap hover:text-foreground transition-colors cursor-pointer">
                                    {item.label === "عروض مميزة" ? (
                                        <div className="flex items-center gap-2">
                                            <Image src={discount} alt="discount" className="size-5 object-contain" />
                                            {item.label}
                                        </div>
                                    ) : (
                                        item.label
                                    )}
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuGroup>
                                        {item.items.map((subItem) => (
                                            <DropdownMenuItem key={subItem} className={`font-medium focus:bg-primary/15  `}>
                                                {subItem}
                                            </DropdownMenuItem>
                                        ))}
                                    </DropdownMenuGroup>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        ))}
                    </div>
                </div>

            </nav>
        </header>
    )
}