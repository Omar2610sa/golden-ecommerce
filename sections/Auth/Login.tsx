"use client"
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import Logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader } from "@/components/ui/card";
import { PhoneInput } from "@/components/ui/phone";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import SignUp from "./SignUp";

export default function Login() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const activeTab = searchParams.get("tab") === "register" ? "register" : "login";

    const handleTabChange = (value: string) => {
        router.push(`/auth?tab=${value}`, { scroll: false });
    };
    return (
        <Card className="w-full max-w-lg mx-auto bg-white rounded-2xl shadow-md p-6 flex flex-col gap-6">
            {/* Logo */}
            <CardHeader className="flex flex-col items-center gap-1">
                <div className="relative w-28 h-24">
                    <Image
                        src={Logo}
                        alt="Golden B.H"
                        fill
                        className="object-contain"
                    />
                </div>
            </CardHeader>

            <Tabs defaultValue="login" value={activeTab} onValueChange={handleTabChange} className="w-full gap-6">
                <TabsList className="w-full  py-7 px-4 bg-primary/15 rounded-full">
                    <TabsTrigger
                        value="login"

                        className="rounded-full py-5  font-medium  data-[state=active]:text-primary data-[state=active]:shadow-sm"
                    >
                        <Link href="/login">تسجيل الدخول</Link>

                    </TabsTrigger>
                    <TabsTrigger
                        value="register"
                        className="rounded-full  px-4  py-5 "
                    >
                        <Link href="/login?tab=register">انشاء حساب</Link>
                    </TabsTrigger>
                </TabsList>

                {/* Login */}
                <TabsContent value="login" className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <Label className="text-sm font-medium">
                            رقم الجوال<span className="">*</span>
                        </Label>
                        <PhoneInput
                            className="py-3  text-sm outline-none"
                            placeholder='ادخل رقم الجوال' variant="lg" defaultCountry='SA' />

                    </div>

                    <div className="flex flex-col gap-2">
                        <Label className="text-sm font-medium">
                            كلمة المرور<span className="">*</span>
                        </Label>
                        <Input
                            type={"password"}
                            placeholder="ادخل كلمة المرور"
                            className="flex-1  rounded-xl p-3 text-sm outline-none "
                            dir="rtl"
                        />
                    </div>

                    <Button
                        variant={`outline`}
                        className="text-sm  self-end text-primary border-0 transition-colors hover:bg-transparent cursor-pointer"
                    >
                        نسيت كلمة المرور؟
                    </Button>

                    <Button
                        type="submit"
                        className="w-full h-12 rounded-full shadow-sm"
                    >
                        تسجيل الدخول
                    </Button>
                </TabsContent>

                {/* Register */}
                <TabsContent value="register" >
                    <SignUp />
                </TabsContent>
            </Tabs>
        </Card>
    );
}