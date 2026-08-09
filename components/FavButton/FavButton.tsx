'use client'
import { useState } from "react"
import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Cookies from "js-cookie"
import { apiClient } from "@/services/useApiClient"
import { useRouter } from "next/navigation"

type Props = {
    productId: number
    is_wishlist: boolean
}

export default function FavButton({ productId, is_wishlist }: Props) {
    const [fav, setFav] = useState(is_wishlist)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const makeFav = async () => {
        if (loading) return
        setLoading(true)

        try {
            await apiClient<unknown>(`wishlists/toggle`, {
                method: "POST",
                body: {
                    product_id: productId.toString(),
                },

            })
            const newFav = !fav
            setFav(newFav)
            router.refresh()

        } catch (error) {
            console.error("Fav error:", error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <Button
            onClick={makeFav}
            disabled={loading}
            type="button"
            className=" flex items-center justify-center size-8 rounded-full bg-white hover:bg-white/90 hover:scale-110 shadow"
        >
            <Heart
                className={`size-5 ${is_wishlist ? "fill-primary text-primary" : "text-muted-foreground"
                    }`}
            />
        </Button>
    )
}













