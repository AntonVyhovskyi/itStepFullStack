import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Comment } from "../../typesAndInterfaces";
import { getAllComments } from "../../api";


interface CommentsStateInterface {
    comments: Comment[],
    loading: boolean,
    error: string | null
}

const initialState: CommentsStateInterface = {
    comments: [],
    loading: false,
    error: null
}

export const getAllCommentsAsync = createAsyncThunk<Comment[], void, {rejectValue: string}>(
    'comments/getComments', 
    async (_, thunkApi) => {
        try {
            const response = await getAllComments()
            return response.data
        } catch (error: any) {
            return thunkApi.rejectWithValue('network error')
        }
    }
)

const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAllCommentsAsync.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(getAllCommentsAsync.fulfilled, (state, action) => {
            state.loading = false
            state.comments = action.payload
        })
        .addCase(getAllCommentsAsync.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload ?? 'невідома помилка'
        })
    }
})

export default commentsSlice.reducer