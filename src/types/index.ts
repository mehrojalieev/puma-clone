import React from "react";

export type Children = {
    children: React.ReactNode
}


type VariantType = {
    variant_type: string,
    variant_value: string | number,
    variant_original_price: number,
    variant_sale_price: number
}

export interface ProductTypes {
    category: string,
    created_at: number,
    description: string,
    featured: boolean,
    likedby: [],
    likes: number,
    product_images: string[],
    product_name: string,
    product_type: string,
    variants: VariantType[],
    visible_in_store: boolean,
    _v: number,
    _id: string | number 
}