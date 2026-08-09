import FadeIn from "@/components/Animations/Fadding";
import { LanguageSwitcher } from "@/components/LanguageSwitcher/LanguageSwitcher"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getTranslations } from "next-intl/server";
import Link from "next/link"


export default async function HeaderLinks() {
    const t = await getTranslations('HeaderLinks');

    return (
        <Breadcrumb >
            <BreadcrumbList>
                <FadeIn direction="left"  >
                <BreadcrumbItem>
                    <LanguageSwitcher />
                </BreadcrumbItem>
                </FadeIn>
                <BreadcrumbSeparator>|</BreadcrumbSeparator>
                <FadeIn direction="left"  >
                    <BreadcrumbItem>
                        <BreadcrumbLink className="text-primary-foreground  font-semibold hover:text-primary cursor-pointer">{t("faq")}</BreadcrumbLink>
                    </BreadcrumbItem>
                </FadeIn>
                <BreadcrumbSeparator>|</BreadcrumbSeparator>
                <FadeIn direction="left"  >
                <BreadcrumbItem>
                    <Link href="/privacy" className="text-primary-foreground font-semibold hover:text-primary cursor-pointer">{t("contactUs")}</Link>
                </BreadcrumbItem>
                </FadeIn>
            </BreadcrumbList>
        </Breadcrumb>
    )
}
