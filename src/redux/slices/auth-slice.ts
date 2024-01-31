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


const loginUser = createAsyncThunk('login-user', async (data, { rejectWithValue }) => {
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

const getUser = createAsyncThunk(
    "auth/getUser",
    async (value, {rejectWithValue}) => {
        try {
            const response:AxiosResponse = await ApiInstance.get("/auth/profile")
            if(response.status === 401 || response.status === 403){
                throw new Error("Auth failed")
            }
            return response.data.payload
        } 
        catch (error: any) {
            return rejectWithValue(error)
                
        }
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            if(action.payload?.token){
                localStorage.setItem("user-token", action.payload.token)
                state.token = action.payload.token,
                state.user = action.payload.user,
                state._id = action.payload.user._id;
            }
            window.location.pathname = "/dashboard"
        }),
            builder.addCase(loginUser.fulfilled, (state, action) => {
                if(action.payload?.token){
                    localStorage.setItem("user-token", action.payload.token)
                    state._id = action.payload._id
                    window.location.pathname = "/dashboard"
                }
            }),
            builder.addCase(getUser.fulfilled, (state, action) => {
                state.user = action.payload
            }),
            builder.addCase(getUser.rejected, (state) => {
                state._id = null,
                state.token = "",
                state.user = null
                localStorage.removeItem("user-token")
                window.location.href = window.location.origin + '/auth/login'
            })
    }
})

export { createUser, loginUser, getUser }


export default authSlice.reducer
