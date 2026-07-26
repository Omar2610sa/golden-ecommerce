import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import FadeIn from "../Animations/Fadding";

export default function SectionTitle({
    title,
    hidden
}: {
    title: string
    hidden?: boolean
}) {
    return (
        <FadeIn direction="up">
            <div className="flex justify-between items-center">

                <h2 className="text-3xl font-bold">
                    {title}
                </h2>
                {/* Buttons rtl or ltr */}
                {
                    !hidden && (

                        <div className="flex items-center gap-3">
                            <div className="flex justify-center p-3 rounded-full bg-gray-100">
                                <ChevronRightIcon className="size-5 text-gray-400" />
                            </div>
                            <div className="flex justify-center p-3  rounded-full bg-yellow-300/20">
                                <ChevronLeftIcon className="size-5 text-gray-400" />
                            </div>
                        </div>
                    )
                }

            </div>
        </FadeIn>
    )
}
