import { Button } from "@/components/ui/button";
import { ChevronDown, User } from "lucide-react";

export default function ProfileButton({
  name
}: {
  name?: string
}) {
  return (
    <Button variant={`outline`} size={`lg`} className={` py-5 bg-gray-100 gap-3 rounded-3xl hover:bg-black hover:text-white`}>
      <User className="size-5" />
      <span className="hidden md:inline font-bold">{name}</span>
      <ChevronDown className="size-4 hidden md:inline" />
    </Button>
  )
}
