import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "../slices/cart-slice"
import AuthReducer from "../slices/auth-slice"
export const store = configureStore({
    reducer: {
        productCart: CartReducer,
        auth: AuthReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch