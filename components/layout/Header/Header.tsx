import { HeartIcon, Mail, PhoneCall, Search, ShoppingCartIcon } from "lucide-react";

import HeaderLinks from "./HeaderLinks";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { cookies } from "next/headers";
import logo from "@/assets/logo.png";
import discount from "@/assets/icons/discount-shape.png"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import LoginButton from "./LoginButton";
import FadeIn from "@/components/Animations/Fadding";
import { getTranslations } from "next-intl/server";
import { Categories } from "@/interfaces/interfaces";
import { serverApi } from "@/services/serverApi";
import ProfileButton from "./ProfileButton";

export default async function Header() {
    const token = (await cookies()).get('token_golden')?.value ?? null
    const t = await getTranslations('header');
    const cookieStore = await cookies()
    const isRtl = cookieStore.get("NEXT_LOCALE")?.value == 'ar'

    const menuItems = [
        { label: t('categories.skinCare.label'), items: t.raw('categories.skinCare.items') as string[] },
        { label: t('categories.personalCare.label'), items: t.raw('categories.personalCare.items') as string[] },
        { label: t('categories.hairCare.label'), items: t.raw('categories.hairCare.items') as string[] },
        { label: t('categories.makeupAndBeauty.label'), items: t.raw('categories.makeupAndBeauty.items') as string[] },
        { label: t('categories.beautyTools.label'), items: t.raw('categories.beautyTools.items') as string[] },
        { label: t('categories.specialOffers.label'), items: t.raw('categories.specialOffers.items') as string[] },
    ];

    const { data: category } = await serverApi<{ data: Categories }>(
        `categories`
    );


    return (
        <header className="hidden md:flex flex-col shrink-0 bg-background">
            {/* Top Nav */}
            <div className="bg-secondary-foreground text-primary-foreground flex justify-between items-center py-2 px-10">
                {/* Phone & Email */}
                <FadeIn direction="right"  >
                    <div className="flex flex-col md:flex-row font-medium items-center gap-8 text-xs">
                        <div className="flex items-center gap-2">
                            <PhoneCall className="size-3.5" />
                            {t('callUs')} : 96124563222
                        </div>
                        <div className="flex items-center gap-2">
                            <Mail className="size-3.5" />
                            care@goldenbeautyhouse.com
                        </div>
                    </div>
                </FadeIn>
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
                        <Search className={`absolute top-1/2 ${isRtl ? ' right-3' : 'left-3'} -translate-y-1/2 size-4 text-muted-foreground`} />
                        <Input
                            placeholder={t('placeholder')}
                            className="px-9 py-5 placeholder:text-sm bg-gray-100 rounded-3xl focus-visible:ring-primary/50  focus-visible:border-primary "
                        />
                    </div>

                    <div className="flex gap-5 justify-between items-center shrink-0">
                        <Link href="/" className="flex justify-center items-center relative size-7">
                            <ShoppingCartIcon className="size-6 hover:text-primary duration-150" />
                            {/* <span className="absolute top-0 right-0">
                                <span className="absolute h-3 w-3 rounded-full bg-primary opacity-75"></span>
                                <span className="absolute h-3 w-3 rounded-full bg-primary"></span>
                            </span> */}
                        </Link>
                        <Link href="/favorites" className="flex justify-center items-center relative size-7">
                            <HeartIcon className="size-6 hover:text-primary duration-150" />
                            {/* <span className="absolute -top-1 right-0">
                                <span className="absolute h-3 w-3 rounded-full bg-primary opacity-75"></span>
                                <span className="absolute h-3 w-3 rounded-full bg-primary"></span>
                            </span> */}
                        </Link>
                        {/* <Link href="/login">
                            <MainButton text="سجل دخول" size={"xl"} />
                        </Link>
                        <MainButton text="إنشاء حساب جديد" size={"xl"} /> */}

                        {
                            !token && (
                                <Link href="/auth">
                                    <LoginButton title={t('login')} />
                                </Link>
                            )
                        }


                        {
                            token && (
                                    <ProfileButton name='عمر معتز' />
                            )
                        }
                    </div>

                </div>

                {/* Menu Items */}
                <div className="flex items-center  justify-center mx-auto">
                    <div className="flex justify-between items-center gap-10 text-[14px] font-bold">
                        {menuItems.map((item) => (
                            <DropdownMenu key={item.label} modal={false}>
                                <DropdownMenuTrigger className="flex items-center gap-1 whitespace-nowrap hover:text-primary transition-colors cursor-pointer">
                                    {item.label === "عروض مميزة" || item.label === "Special Offers" ? (
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