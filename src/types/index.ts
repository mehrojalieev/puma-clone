import React from "react";

export type Children = {
    children: React.ReactNode
}


export type ProductVariant = {
  variant_type: string;
  variant_value: string;
  variant_original_price: number;
  variant_sale_price: number;
};

export type ProductTypes = {
  _id: string;
  product_name: string;
  product_images: string[];
  likedby: string[];
  likes: number;
  category: string;
  product_type: string;
  description: string;
  featured: boolean;
  visible_in_store: boolean;
  variants: ProductVariant[];
  created_at: number;
  count: number;
  selectedVariant: ProductVariant;
  __v: number;
};




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