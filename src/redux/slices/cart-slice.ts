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
            console.log(action.payload);
                state.cart = [...state.cart, action.payload]
                // state.total += action.payload.selectedVariant.variant_sale_price
        }
    }
})

export const {addToCart} = cartSlice.actions

export default cartSlice.reducer