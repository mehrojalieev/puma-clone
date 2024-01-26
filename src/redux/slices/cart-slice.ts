import { createSlice } from "@reduxjs/toolkit/react";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ProductTypes } from "../../types";

interface InitialStateType  {
    cart: ProductTypes[],
    total: number
}

const initialState: InitialStateType  = {
    cart: [],
    total: 0
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<ProductTypes>) => {
            const productExist = state.cart.findIndex((product) => product._id === action.payload._id)
            if(productExist === -1){
                state.cart = [...state.cart, action.payload]
                state.total += action.payload.variants[0].variant_sale_price   
            }
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer