import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/react";
import ApiInstance from "../../api";


const initialState: any = {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: null
}


const loadProduct = createAsyncThunk("fetch-product", async (value, {rejectWithValue}) => {
    try {
        const response = await ApiInstance("/product/all")
        console.log(response);
        
    } 
    catch (error) {
        return rejectWithValue(error)
    }
})

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(loadProduct.pending, (state, action) => {
            state.isLoading = true
        }),
        builder.addCase(loadProduct.fulfilled, (state, action) => {
            console.log(action.payload);
            
            state.data = action.payload,
            state.isSuccess = true,
            state.isError = false,
            state.message = "Successfully 🏆"
        }),
        builder.addCase(loadProduct.rejected, (state, action) => {
            state.isError = true,
            state.isSuccess = false
        })
    }
})

export {loadProduct}

export  default productSlice.reducer