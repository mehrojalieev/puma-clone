import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { AxiosResponse } from 'axios'
import ApiInstance from '../../api'


type initialAuthType = {
    token: string,
    user: null,
    _id: number | null
}

const initialState: initialAuthType = {
    token: "",
    user: null,
    _id: null
}



const createUser = createAsyncThunk('create-user', async (data) => {
    try {
        const response: AxiosResponse = await ApiInstance.post("/auth/register", data)
        return response.data.payload
    }
    catch (error: any) {
        console.log(error)
    }
})


const loginUser = createAsyncThunk('login-user', async(data ,{rejectWithValue}) => {
    console.log(data);
    try {
            const response: AxiosResponse = await ApiInstance.post("/auth/login", data)
            return response.data.payload
    } 
    catch (error) {
        console.log(error);
        return rejectWithValue(error)
            
    }
})

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            console.log(action.payload.user._id);
            localStorage.setItem("user-token", action.payload.user._id)
            state.user = action.payload.user,
                state.token = action.payload.token,
                state._id = action.payload.user._id;
        }),
        builder.addCase(loginUser.fulfilled, (state, action) => {
                state.token = action.payload.token,
                state._id = action.payload._id
            // window.location.pathname = "/dashboard"
        })
    }
})

export { createUser, loginUser }


export default authSlice.reducer
