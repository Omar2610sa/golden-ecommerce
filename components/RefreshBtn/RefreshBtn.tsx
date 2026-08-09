"use client"

import { useRouter } from "next/navigation";
import { Button } from "../ui/button"

export default function RefreshBtn() {
    const router = useRouter();

    return (
        <Button
            onClick={() =>
                router.refresh()
            }
            variant={`outline`}
            className={`rounded-2xl border border-gray-200 bg-white px-6 py-4 font-bold text-primary-900 shadow-sm transition-colors `}>
            تحديث
        </Button>
    )
}
