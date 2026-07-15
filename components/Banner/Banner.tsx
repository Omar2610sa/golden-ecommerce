import Image from "next/image";
;


export default function Banner({ banner }: { banner: { image: { url: string }, id: number } }) {
    return (
            <div className="relative w-full h-[180px] md:h-[450px]  rounded-2xl">
                <Image
                    src={banner?.image?.url || ''}
                    alt="Banner"
                    fill
                    className="absolute object-contain  rounded-2xl z-20"
                />
            </div>
    )
}
