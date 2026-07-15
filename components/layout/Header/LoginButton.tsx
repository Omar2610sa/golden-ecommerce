import { Button } from "@/components/ui/button";
import { User } from "lucide-react";

export default function LoginButton() {
  return (
    <Button variant={`outline`} size={`lg`} className={` py-4 bg-gray-100 rounded-3xl hover:bg-black hover:text-white`}>
        <User className="size-5" />
        <span className="hidden md:inline font-bold">دخول/ إنشاء حساب</span>
    </Button>
  )
}
