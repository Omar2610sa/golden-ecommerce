import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import Link from "next/link"


export default async function HeaderLinks() {

    return (
        <Breadcrumb >
            <BreadcrumbList>
                <BreadcrumbItem>
                    <LanguageSwitcher />
                </BreadcrumbItem>
                <BreadcrumbSeparator>|</BreadcrumbSeparator>
                <BreadcrumbItem>
                    <BreadcrumbLink className="text-primary-foreground  font-semibold hover:text-primary-foreground/70 cursor-pointer">الاسئلة الشائعة</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>|</BreadcrumbSeparator>

                <BreadcrumbItem>
                    <Link href="/privacy" className="text-primary-foreground font-semibold hover:text-primary-foreground/70 cursor-pointer">تواصل معنا</Link>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
