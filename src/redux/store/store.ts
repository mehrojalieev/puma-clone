import { configureStore } from "@reduxjs/toolkit";
import ProductProvider from "../features/product-slice"

export const store = configureStore({
    reducer: {
            products: ProductProvider
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch