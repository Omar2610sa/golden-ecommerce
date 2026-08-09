"use client";

import { useState } from "react";
import Image from "next/image";
import ProductImageCarousel from "@/components/ProductSwiper/ProductSwiper";
import { Product } from "@/interfaces/interfaces";
import { FaShareSquare } from "react-icons/fa";
import { HeartIcon, Minus, Plus, SaudiRiyalIcon, ShoppingBag, StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import tabby from '@/assets/icons/tabby.png'
import Tamara from '@/assets/icons/tamara.png'
import ColorSelector from "@/components/ColorSelector/ColorSelector";
import { useLocalizedField } from "@/utils/useLocalizedField";


export default function ProductInfo({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedVariation, setSelectedVariation] = useState(
        product.variations?.[0]?.id
    );

    const activeVariation = product.variations?.find(
        (v) => v.id === selectedVariation
    );

    const localizedField = useLocalizedField();

    return (
        <div className="grid md:grid-cols-2 gap-8 items-start">
            <ProductImageCarousel
                image={product.image}
                images={product.gallery}
            />

            <div className="w-full flex flex-col gap-5">

                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold leading-tight">
                        {localizedField(product, 'name')}
                    </h2>
                    <FaShareSquare className="size-7 text-primary" />
                </div>

                <div className="flex items-center gap-1.5">
                    <StarIcon className="size-6 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-2xl">
                        {parseFloat(product?.average_rate?.toFixed(1)) || 0}
                    </span>
                    <span className="font-light text-md text-gray-500">
                        ({product?.reviews_count || 0})
                    </span>
                </div>

                <div className="flex items-center gap-4">
                    <div className="flex items-center">
                        <p className="text-2xl font-extrabold">
                            {Number(product.price_after_discount).toFixed(2)}
                        </p>
                        <SaudiRiyalIcon className="size-6 font-bold" />
                    </div>
                    <div className="flex text-gray-500 line-through items-center py-3">
                        <p>{Number(product.price).toFixed(2)}</p>
                        <SaudiRiyalIcon className="size-4" />
                    </div>
                </div>

                <p className="text-gray-800 pb-3 border-b-2 border-dashed text-xl">
                    شامل الضريبة
                </p>

                {/* Color variations */}
                {product.variations?.length > 0 && (
                    <div className="flex items-center gap-2.5 flex-wrap">
                        <ColorSelector
                            variations={product.variations ?? []}
                            onChange={(variation) => {
                                // variation.price / variation.stock / variation.image.url
                                // setSelectedVariation(variation)
                            }}
                        />
                    </div>
                )}



                {/* Add to cart + wishlist */}
                <div className="flex items-center gap-3">
                    {/* Quantity */}
                    <div className="flex flex-col items-end gap-1.5">
                        <div className="flex items-center gap-4 border-2 border-black rounded-full p-2 ">
                            <Button
                                variant={`outline`}

                                onClick={() => setQuantity((q) => q + 1)}
                                className="cursor-pointer border-0"
                            >
                                <Plus className="size-5 text-primary" />
                            </Button>

                            <span className="text-xl text-center font-medium">{quantity}</span>
                            <Button
                                variant={`outline`}

                                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                                className="cursor-pointer border-0"
                            >
                                <Minus className="size-5" />
                            </Button>
                        </div>
                    </div>

                    <Button

                        variant={`third`}
                        className="flex-1 h-12 rounded-full font-medium  transition-colors cursor-pointer"
                    >
                        أضف للسلة
                        <ShoppingBag />
                    </Button>
                    <Button
                        variant={`outline`}
                        className="size-12 shrink-0 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                    >
                        <HeartIcon className="size-5 text-gray-700" />
                    </Button>
                </div>

                {/* Payment methods */}
                <div className="flex flex-col ">
                    <p className="text-xl font-medium">الدفع بالتقسيط</p>
                    <div className="flex items-center -mt-3">
                        <div className="relative w-30 h-30">
                            <Image
                                src={Tamara}
                                alt="Tamara"
                                fill
                                className="absolute object-contain"
                            />
                        </div>
                        <div className="relative w-32 h-30">
                            <Image
                                src={tabby}
                                alt="Tabby"
                                fill
                                className="absolute object-cover"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}