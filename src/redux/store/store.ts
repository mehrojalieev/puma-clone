import { configureStore } from "@reduxjs/toolkit";
import ProductProvider from "../features/product-slice"

const store = configureStore({
    reducer: {
            products: ProductProvider
    }
})


export default store