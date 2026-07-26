import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PhoneInput } from '@/components/ui/phone'
import React from 'react'

export default function SignUp() {
    return (
        <section className='flex flex-col gap-5'>
            <div className="flex flex-col gap-2">
                <Label className="text-sm font-medium">
                    الاسم<span className="">*</span>
                </Label>
                <Input
                    type="text"
                    placeholder="ادخل الاسم"
                    className="flex-1  rounded-xl p-3 text-sm outline-none "
                    dir="rtl"
                />
            </div>

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
                type="submit"
                className="w-full h-12 rounded-full shadow-sm"
            >
                انشاء حساب
            </Button>
        </section>
    )
}
