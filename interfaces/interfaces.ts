export interface HomePageProps {
    params: Promise<{
        lang: string;
    }>;
}

export interface Slider {
    id: number
    name: string
    desc: string
    image: {
        url: string
    }
}
export interface Banner {
    id: number
    title: string
    position: string
    image: {
        url: string
    }
}

export interface CategoriesProps {
    categories: {
        image: {
            url: string;
        };
        name: string;
    }[];
}

export interface HomeData {
    sliders: Slider[]
    banners : Banner[]
    recent_products: ProductCard[]
    best_selling_products: ProductCard[]
    flash_sale_products : ProductCard[]
    categories : CategoriesProps[]
}


export interface ProductImage {
    id: number;
    url: string;
}

export interface ProductCategory {
    id: number;
    name: string;
}

export interface ProductVariationGalleryImage {
    id: number;
    url: string;
}

export interface ProductLowestPriceVariation {
    id: number;
    sku: string;
    price: number;
    stock: number;
    image: ProductImage;
    gallery: ProductVariationGalleryImage[];
}

export interface ProductCard {
    id: number;
    name: string;
    price: number;
    discount_percentage: number;
    price_after_discount: number;
    average_rate: number;
    reviews_count: number;
    image: ProductImage;
    is_wishlist: boolean;
    lowest_price_variation: ProductLowestPriceVariation;
    brand: string | null;
    category: ProductCategory;
}