

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronLeft } from "lucide-react";
// import { getTranslations } from "next-intl/server";

export function BreadCrumb({ secondLink }: { secondLink?: string; }) {

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink className="text-sm text-gray-400 font-semibold" href="/">
            الرئيسية
          </BreadcrumbLink>
        </BreadcrumbItem>

        {
          secondLink && (
            <>
              <BreadcrumbSeparator className="text-xl">
                <ChevronLeft />
              </BreadcrumbSeparator>

              <BreadcrumbItem>
                <BreadcrumbPage className="text-sm font-semibold">
                  {secondLink}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
