"use client"

import { CheckAlert } from "@/components/Alert/CheckAlert";
import { ErrorAlert } from "@/components/Alert/ErrorAlert";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { ChevronDown, LogOut, User } from "lucide-react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";


export default function ProfileButton({
  name
}: {
  name?: string
}) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const result = await CheckAlert({ title: "هل تريد تسجيل خروج؟" })
      if (result.isConfirmed) {
        Cookies.remove("token_golden")
        router.push("/")
        router.refresh()
      }
    } catch {
      ErrorAlert("حدثت مشكلة في الاتصال بالسيرفر")
    }
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger >
        <p

          className="p-2  flex items-center gap-3 rounded-3xl border  border-border bg-background hover:bg-gray-100 hover:text-black "
        >
          <User className="size-5" />
          <span className="hidden md:inline font-bold">{name}</span>
          <ChevronDown className="size-4 hidden md:inline" />
        </p>
      </DropdownMenuTrigger>

      <DropdownMenuContent  align="center" className="w-35 bg-background border border-border shadow-lg rounded-xl ">
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={handleLogout}
            className="cursor-pointer"
          >
            ملفي الشخصي
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuGroup>
          <DropdownMenuItem
            onClick={handleLogout}
            className="cursor-pointer"
            variant="destructive"
          >
            <LogOut className="size-4  " />
            تسجيل الخروج
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}