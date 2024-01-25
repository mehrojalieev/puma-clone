import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../slices/cart-slice"
import Auth from "../slices/auth-slice"
export const store = configureStore({
    reducer: {
        productCart: CartReducer,
        auth: Auth
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch