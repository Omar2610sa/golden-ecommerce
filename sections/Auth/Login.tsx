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
import { useFormik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { SuccessAlert } from "@/components/Alert/SuccessAlert";
import { ErrorAlert } from "@/components/Alert/ErrorAlert";
import Cookies from "js-cookie";
import { Profile } from "@/types/type";
import { apiClient } from "@/services/useApiClient";
import { parsePhoneNumber } from "react-phone-number-input";

export default function Login() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [showPassword] = useState(false);

    const activeTab = searchParams.get("tab") === "register" ? "register" : "login";

    const handleTabChange = (value: string) => {
        router.push(`/auth?tab=${value}`, { scroll: false });
    };

    const getCookie = (name: string) => Cookies.get(name);
    const guestToken = getCookie("guest_token");

    const loginSchema = Yup.object({
        phone: Yup.string()
            .required("رقم الجوال مطلوب")
            .min(8, "رقم الجوال غير صحيح"),
        password: Yup.string()
            .min(6, "كلمة المرور يجب أن تكون 6 أحرف على الأقل")
            .required("كلمة المرور مطلوبة"),
    });

    const formik = useFormik({
        initialValues: {
            phone: "",
            password: "",
        },
        validationSchema: loginSchema,
        onSubmit: async (values, { setSubmitting }) => {
            try {
                const phoneNumber = parsePhoneNumber(values.phone);

                if (!phoneNumber) {
                    ErrorAlert("رقم الجوال غير صحيح");
                    return;
                }

                const response = await apiClient<{ status: string; message: string; data: Profile }>("auth/login", {
                    method: "POST",
                    body: {
                        phone_code: phoneNumber.countryCallingCode,
                        login: phoneNumber.nationalNumber,
                        password: values.password,
                        device_token: guestToken,
                    }
                });

                const token = response.data?.token;
                if (response?.status === "success" && token) {

                    Cookies.set("token_golden", token, { path: "/" });
                    SuccessAlert("تم تسجيل الدخول بنجاح", "أهلاً بك في Golden Beauty House، استمتعي بتجربة تسوق مميزة لاكتشاف كل ما يخص الجمال والعناية.");
                    router.refresh();
                    router.replace('/');
                } else {
                    ErrorAlert(response?.message ?? "حدثت مشكلة");
                }
            } catch {
                ErrorAlert("حدثت مشكلة في الاتصال بالسيرفر");
            } finally {
                setSubmitting(false);
            }
        },
    });

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
                <TabsList className="w-full py-7 px-4 bg-primary/15 rounded-full">
                    <TabsTrigger
                        value="login"
                        className="rounded-full py-5 font-medium data-[state=active]:text-primary data-[state=active]:shadow-sm"
                    >
                        <Link href="/login">تسجيل الدخول</Link>
                    </TabsTrigger>
                    <TabsTrigger
                        value="register"
                        className="rounded-full px-4 py-5"
                    >
                        <Link href="/login?tab=register">انشاء حساب</Link>
                    </TabsTrigger>
                </TabsList>

                {/* Login */}
                <TabsContent value="login" className="flex flex-col gap-5">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">

                        {/* Phone */}
                        <div className="flex flex-col gap-2">
                            <Label className="text-sm font-medium">
                                رقم الجوال<span className="">*</span>
                            </Label>
                            <PhoneInput
                                className="py-3 text-sm outline-none"
                                placeholder='ادخل رقم الجوال'
                                variant="lg"
                                defaultCountry='SA'
                                value={formik.values.phone}
                                onChange={(value) => formik.setFieldValue('phone', value)}
                                onBlur={() => formik.setFieldTouched('phone', true)}
                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <p className="text-red-500 text-sm mt-1">
                                    {formik.errors.phone}
                                </p>
                            )}
                        </div>

                        {/* Password */}
                        <div className="flex flex-col gap-2">
                            <Label className="text-sm font-medium">
                                كلمة المرور<span className="">*</span>
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="ادخل كلمة المرور"
                                    className="flex h-11 w-full items-center rounded-lg border border-input bg-transparent overflow-hidden transition-colors has-[input:focus-visible]:border-primary has-[input:focus-visible]:ring-3 has-[input:focus-visible]:ring-primary/50 py-3 text-sm outline-none PhoneInput"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                <button
                                    type="button"
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                                />
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <p className="text-red-500 text-sm mt-1">
                                    {formik.errors.password}
                                </p>
                            )}
                        </div>

                        <Button
                            variant={`outline`}
                            type="button"
                            className="text-sm self-end text-primary border-0 transition-colors hover:bg-transparent cursor-pointer"
                        >
                            نسيت كلمة المرور؟
                        </Button>

                        <Button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className="w-full h-12 rounded-full shadow-sm"
                        >
                            {formik.isSubmitting ? "جاري الدخول..." : "تسجيل الدخول"}
                        </Button>
                    </form>
                </TabsContent>

                {/* Register */}
                <TabsContent value="register">
                    <SignUp />
                </TabsContent>
            </Tabs>
        </Card>
    );
}