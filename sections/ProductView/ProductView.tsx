"use client";

import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/Animations/Fadding";
import SectionTitle from "@/components/SectionTitle/SectionTitle";
import ShopCard from "@/components/ShopCard/ShopCard";
import { ProductCard } from "@/interfaces/interfaces";

export default function ProductView({
    products,
    title,
    hidden
}: {
    products: ProductCard[],
    title: string
    hidden?: boolean
}) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [atStart, setAtStart] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const checkScrollPosition = () => {
        const container = scrollRef.current;
        if (!container) return;

        const { scrollLeft, scrollWidth, clientWidth } = container;
        const currentAbs = Math.abs(scrollLeft);
        const maxScroll = scrollWidth - clientWidth;

        setAtStart(currentAbs <= 0);
        setAtEnd(currentAbs >= maxScroll - 5);
    };

    useEffect(() => {
        checkScrollPosition(); 

        const container = scrollRef.current;
        if (!container) return;

        container.addEventListener("scroll", checkScrollPosition);
        return () => container.removeEventListener("scroll", checkScrollPosition);
    }, [products]);

    const scroll = (direction: "prev" | "next") => {
        const container = scrollRef.current;
        if (!container) return;

        const amount = container.clientWidth * 0.8;
        const offset = direction === "next" ? amount : -amount;

        container.scrollBy({ left: offset, behavior: "smooth" });
    };

    return (
        <section className="container flex flex-col gap-3">
            <SectionTitle
                title={title}
                hidden={hidden}
                onNext={() => scroll("next")}
                onPrev={() => scroll("prev")}
                nextDisabled={atStart}
                prevDisabled={atEnd}
            />

            <div
                ref={scrollRef}
                className="flex gap-3 overflow-x-auto scroll-smooth snap-x snap-mandatory p-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {products.map((product, index) => (
                    <FadeIn
                        key={product.id}
                        direction="up"
                        delay={index * 0.1}
                        className="shrink-0 w-[45%] md:w-[23%] snap-start"
                    >
                        <ShopCard product={product} />
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}