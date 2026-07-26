import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import FadeIn from "../Animations/Fadding";

export default function SectionTitle({
    title,
    hidden,
    onPrev,
    onNext,
    prevDisabled,
    nextDisabled,
}: {
    title: string
    hidden?: boolean
    onPrev?: () => void
    onNext?: () => void
    prevDisabled?: boolean
    nextDisabled?: boolean
}) {
    return (
        <FadeIn direction="up">
            <div className="flex justify-between items-center">

                <h2 className="text-3xl font-bold">
                    {title}
                </h2>

                {!hidden && (
                    <div className="flex items-center gap-3">
                        <button
                            type="button"
                            onClick={onNext}
                            disabled={nextDisabled}
                            className="flex justify-center p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-gray-100"
                        >
                            <ChevronRightIcon className="size-5 text-gray-400" />
                        </button>
                        <button
                            type="button"
                            onClick={onPrev}
                            disabled={prevDisabled}
                            className="flex justify-center p-3 rounded-full bg-yellow-300/20 hover:bg-yellow-300/40 transition-colors cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-yellow-300/20"
                        >
                            <ChevronLeftIcon className="size-5 text-gray-400" />
                        </button>
                    </div>
                )}

            </div>
        </FadeIn>
    )
}