import { BreadCrumb } from "@/components/Breadcrumb/BreadCrumb";

export default function page() {
    return (
        <section className="container flex flex-col gap-7 bg-background">
            <BreadCrumb secondLink="المفضلة" />
        </section>
    )
}
