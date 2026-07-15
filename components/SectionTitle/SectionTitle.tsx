import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

export default function SectionTitle({
    title
}: {
    title: string
}) {
    return (
        <div className="flex justify-between items-center">
            <h2 className="text-3xl font-bold">
                {title}
            </h2>
            {/* Buttons rtl or ltr */}
            <div className="flex items-center gap-3">
                <div className="flex justify-center p-3 rounded-full bg-gray-100">
                    <ChevronRightIcon className="size-5 text-gray-400" />
                </div>
                <div className="flex justify-center p-3  rounded-full bg-yellow-300/20">
                    <ChevronLeftIcon className="size-5 text-gray-400" />
                </div>
            </div>

        </div>
    )
}
