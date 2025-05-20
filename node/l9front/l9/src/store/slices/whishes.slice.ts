import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getWishes, postWishes, type NewWish, type WishInterface } from "../../sevices";


interface WishesState {
    list: WishInterface[],
    loading: boolean,
    error: string | null
}

const initialState: WishesState = {
    list: [],
    loading: false,
    error: null
}

export const fetchWishes = createAsyncThunk('wishes/fetchWishes', getWishes)
export const createWish = createAsyncThunk('wishes/createWish', async (body: NewWish) => {
    return await postWishes(body)
})


export const wishesSlice = createSlice({
    name: 'wishes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchWishes.pending, (state)=> {
            state.loading = true
            state.error = null
        })
        .addCase(fetchWishes.fulfilled, (state, action)=> {
            state.loading = false
            state.list = action.payload
        })
        .addCase(fetchWishes.rejected, (state, action)=>{
            state.loading = false
            state.error = action.error.message || 'Помилка'
        })
        .addCase(createWish.fulfilled, (state, action)=>{
            state.list.push(action.payload)
            
        })
    }
})

export default wishesSlice.reducer