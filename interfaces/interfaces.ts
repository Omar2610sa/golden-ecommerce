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

export interface Category {
    id: number
    image: {
        url: string;
    };
    name: string;
}

export interface HomeData {
    sliders: Slider[]
    banners: Banner[]
    recent_products: ProductCard[]
    best_selling_products: ProductCard[]
    flash_sale_products: ProductCard[]
    categories: Category[]
}

/* -------------------- Shared -------------------- */

export interface ProductImage {
    id: number;
    url: string;
}

export interface ProductCategory {
    id: number;
    name: string;
}

/* -------------------- Product Card (list/shop grid) -------------------- */

export interface ProductLowestPriceVariation {
    id: number;
    sku: string;
    price: number;
    stock: number;
    image: ProductImage | null;
    gallery: ProductImage[];
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
    related_products: ProductCard[]
}

/* -------------------- Product Details -------------------- */

export interface ProductSpecification {
    id: number;
    key: string;
    value: string;
}

export interface ProductAttribute {
    id: number;
    name: string;
}

export interface ProductAttributeValue {
    id: number;
    value: string;
    code: string | null;
    attribute: ProductAttribute;
}

export interface ProductVariation {
    id: number;
    sku: string;
    price: number;
    stock: number;
    image: ProductImage | null;
    gallery: ProductImage[];
    attribute_values: ProductAttributeValue[];
}

export interface RelatedProduct {
    id: number;
    name: string;
    image: ProductImage;
    is_wishlist: boolean;
    average_rate: number;
    reviews_count: number;
    price: number;
    discount_percentage: number;
    price_after_discount: number;
    lowest_price_variation: ProductLowestPriceVariation;
}

export interface ProductReviewUser {
    id: number;
    name: string;
    image: ProductImage;
}

export interface ProductReview {
    id: number;
    rate: number;
    message: string;
    created_at: string;
    user: ProductReviewUser;
}

export interface ProductLocalizedContent {
    name: string;
    description: string;
}

export interface Product {
    id: number;
    price: number;
    discount_percentage: number;
    price_after_discount: number;
    average_rate: number;
    reviews_count: number;
    image: ProductImage;
    gallery: ProductImage[];
    is_wishlist: boolean;
    brand: string | null;
    category: ProductCategory;
    specifications: ProductSpecification[];
    variations: ProductVariation[];
    related_products: RelatedProduct[];
    reviews: ProductReview[];
    en: ProductLocalizedContent;
    ar: ProductLocalizedContent;
}


export interface Categories {
    en: {
        name: string
        description: string
    },
    ar: {
        name: string
        description: string
    }
    products: ProductCard[]
}