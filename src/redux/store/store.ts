import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../slices/cart-slice"
export const store = configureStore({
    reducer: {
        productCart: CartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch