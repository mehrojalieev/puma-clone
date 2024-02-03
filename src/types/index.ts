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
    likedby: string[],
    likes: number,
    product_images: string[],
    product_name: string,
    product_type: string,
    variants: VariantType[],
    visible_in_store: boolean,
    _v: number,
    _id: string | number
}



export type SubLink = {
    name: string;
    link: string;
  };

  export type Route = {
    title: string;
    subcategory: SubLink[];
  };


    type SingleSubcategory = {
        name: string,
        link: string
    }

    type MainSubCategory = {
        title: string,
        link: string,
        subcategory:SingleSubcategory
    }


  export interface CategoryMenuTypes {
        title: string,
        subcategory: MainSubCategory,
  }


  export interface UserTypes {
    first_name: string,
    email: string,
    role: string,
    _id: string,
    photo_url: string,
    registered_at: number,
    createdAt: string,
    __v: number,
    purchased: [],
    liked: [],
  }