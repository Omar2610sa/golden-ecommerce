

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeIn from "../Animations/Fadding";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";


export async function BreadCrumb({ secondLink }: { secondLink?: string; }) {
    const t = await getTranslations('Breadcrumb');
  const cookieStore = await cookies()
  const isRtl = cookieStore.get("NEXT_LOCALE")?.value == 'ar'

  return (
    <FadeIn direction="left" >

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink className="text-lg text-gray-400 font-semibold" href="/">
              {t('main')}
            </BreadcrumbLink>
          </BreadcrumbItem>

          {
            secondLink && (
              <>
                <BreadcrumbSeparator className="text-xl">
                  {
                    isRtl ? <ChevronLeft className="size-5" /> : <ChevronRight className="size-5 " />
                  }
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  <BreadcrumbPage className="text-lg font-semibold">
                    {secondLink}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </>
            )}
        </BreadcrumbList>
      </Breadcrumb>
    </FadeIn>
  )
}
