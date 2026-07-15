
import imgTest from "@/assets/Categ Test.webp"
import Image from "next/image";
import SectionTitle from "@/components/SectionTitle/SectionTitle";

export default function CategorySlider() {

    const sliders = [
        {
            img: imgTest,
            name: "المكياج والجمال"
        },
        {
            img: imgTest,
            name: "المكياج والجمال"
        },
        {
            img: imgTest,
            name: "المكياج والجمال"
        },
        {
            img: imgTest,
            name: "المكياج والجمال"
        },
        {
            img: imgTest,
            name: "المكياج والجمال"
        },
        {
            img: imgTest,
            name: "المكياج والجمال"
        }
    ]
    return (
        <section className='container space-y-10 w-full'>
            {/* Title */}
            <SectionTitle title="تسوق حسب الفئات " />
            {/* Categories */}
            <div className="gap-y-10 md:mb-4 md:pb-4 gap-8  grid md:grid-cols-6 grid-cols-4">
                {sliders.map((item, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 justify-center mx-auto w-fit">
                        <div className="relative w-18 h-18 sm:size-42 mx-auto mb-2  overflow-hidden rounded-full bg-gray-100">
                            <Image src={item.img} alt={item.name} fill className="h-full w-full object-cover hover:scale-110 transition-all duration-300" />
                        </div>
                        <span className="text-md sm:text-xl font-semibold mx-auto text-center sm:h-10 h-8 line-clamp-2 break-all text-black">{item.name}</span>
                    </div>
                ))}
            </div>
        </section>
    )
}




// APi Call


// import Image from "next/image";
// import SectionTitle from "@/components/SectionTitle/SectionTitle";
// import { CategoriesProps } from "@/interfaces/interfaces";


// export default function CategorySlider({
//     categories
// }: CategoriesProps) {

//     return (
//         <section className='container space-y-10 w-full'>
//             {/* Title */}
//             <SectionTitle title="تسوق حسب الفئات " />
//             {/* Categories */}
//             <div className="gap-y-10 md:mb-4 md:pb-4 gap-8  grid md:grid-cols-6 grid-cols-4">
//                 {categories.map((item, index) => (
//                     <div key={index} className="flex flex-col items-center gap-3 justify-center mx-auto w-fit">
//                         <div className="relative w-18 h-18 sm:size-42 mx-auto mb-2  overflow-hidden rounded-full bg-gray-100">
//                             <Image src={item?.image?.url} alt={item.name} fill className="h-full w-full object-cover hover:scale-110 transition-all duration-300" />
//                         </div>
//                         <span className="text-md sm:text-xl font-semibold mx-auto text-center sm:h-10 h-8 line-clamp-2 break-all text-black">{item.name}</span>
//                     </div>
//                 ))}
//             </div>
//         </section>
//     )
// }

