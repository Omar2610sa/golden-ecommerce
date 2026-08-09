import FadeIn from "@/components/Animations/Fadding";
import { BreadCrumb } from "@/components/Breadcrumb/BreadCrumb";
import Login from "@/sections/Auth/Login";

export default function page() {
  return (
    <div className="container bg-background">
      <BreadCrumb secondLink="تسجيل الدخول / إنشاء حساب" />
      <div className="my-10">
        <FadeIn direction="up" >
          <Login />
        </FadeIn>
      </div>
    </div>
  )
}
