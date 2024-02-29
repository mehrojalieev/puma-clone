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
            const productExistIndex = state.cart.findIndex((product) => product._id === action.payload._id && product.selectedVariant.variant_value === action.payload.selectedVariant.variant_value)
            if(productExistIndex === -1){
                state.cart = [...state.cart, action.payload]
            }
            else{
                state.cart[productExistIndex].count += 1
            }
        },
        removeFromCart: (state, action:PayloadAction<ProductTypes>) => {
            const productExistIndex = state.cart.findIndex((product) => product._id === action.payload._id && product.selectedVariant.variant_value === action.payload.selectedVariant.variant_value)
            state.cart[productExistIndex].count -= 1
            if(state.cart[productExistIndex].count === 0){
                state.cart.splice(productExistIndex, 1)
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer