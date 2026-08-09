import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardFooter,
} from "@/components/ui/card"
import { ProductCard } from "@/interfaces/interfaces"
import { Heart, SaudiRiyal, ShoppingCartIcon, Star } from "lucide-react"
import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"
import MainButton from "../Reusable/MainButton"
import FavButton from "../FavButton/FavButton"

export default function ShopCard({ product }: { product: ProductCard }) {
    const {
        name,
        price,
        discount_percentage,
        price_after_discount,
        average_rate,
        reviews_count,
        lowest_price,
        image,
        is_active,
        is_wishlist,
    } = product

    return (
        <Card className="relative h-full w-full bg-transparent ring-0  max-w-2xs gap-4 border-none shadow-none rounded-2xl p-0 group overflow-hidden">
            {/* Image section */}
            <div className="relative  aspect-square flex items-center justify-center ">
                {/* Wishlist */}
                <div className="absolute top-3 left-4 z-10">
                    <FavButton productId={product.id} is_wishlist={product.is_wishlist || product?.is_active} />
                </div>
                {/* Discount badge */}
                {discount_percentage > 0 && (
                    <div className="absolute rounded-l-md top-3 right-0 z-10 bg-primary text-white font-bold  py-1 px-2">
                        %{discount_percentage}
                    </div>
                )}
                <Image
                    src={image.url || "/images/placeholder.png"}
                    alt={name}
                    fill
                    className="w-full relative h-[280px] object-cover object-top rounded-2xl group-hover:scale-102 duration-300"
                />
                <div className="
                    absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl  duration-150 flex items-center justify-center pointer-events-none
                    ">
                    <Button variant={`third`} className="px-5 py-5 rounded-full text-sm flex items-center gap-2 font-bold transform translate-y-4 group-hover:translate-y-0 transition-all duration-150 pointer-events-auto shadow-lg disabled:cursor-not-allowed hover:bg-primary hover:text-white hover:border-primary " >
                        أضف للسلة
                        <ShoppingCartIcon className="size-5" />
                    </Button>
                </div>
            </div>

            <Link href={`/product/${product.id}`}>
                <CardContent className="flex flex-col gap-3 px-4 bg-none">
                    <h3 className="font-bold text-lg  line-clamp-2">
                        {name}
                    </h3>

                    <div className="flex items-center justify-start gap-1.5">
                        <Star className="size-5 fill-orange-400 text-orange-400" />
                        <span className="">{average_rate}</span>
                        <span className="text-muted-foreground text-sm">({reviews_count})</span>
                    </div>
                </CardContent>

                <CardFooter className="flex items-center justify-start gap-3 px-4 pb-4">
                    <span className="font-bold text-2xl flex items-center gap-1">
                        {
                            price_after_discount ? price_after_discount.toFixed(2) : lowest_price
                        }
                        <SaudiRiyal className="size-5" />
                    </span>
                    {discount_percentage > 0 && (
                        <span className="text-muted-foreground line-through text-sm flex items-center gap-1">
                            {price.toFixed(2)}
                            <SaudiRiyal className="size-3" />
                        </span>
                    )}

                </CardFooter>
            </Link>

        </Card>

    )
}