import Image from "next/image";
import logo from "@/assets/icons/no-products.DorxcK61.svg"
import { getTranslations } from 'next-intl/server';
import { Link } from "@/services/navigation";
import MainButton from "../Reusable/MainButton";

export default async function NoFav() {
    const t = await getTranslations('NoFav');

    return (
        <div className=" flex justify-center items-center flex-col gap-3">
            <div>
                <Image src={logo} alt="image" className="size-50" />
            </div>
            <div className="text-center flex flex-col justify-center items-center gap-3">
                <p className="text-xl font-bold">{t('title')}</p>
                <p className="text-md text-gray-500">{t('description')}</p>
                <Link href='/'>
                    <MainButton size='xl' text={t('button')} />
                </Link>
            </div>
        </div>
    )
}
