import { Post } from '../../typesAndInterfaces'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getAllPosts } from '../../api'
interface PostsStateInterface {
    posts: Post[],
    loading: boolean,
    error: string | null
}

const initialState: PostsStateInterface = {
    posts: [],
    loading: false,
    error: null
}

export const getAllPostsAsync = createAsyncThunk<
    Post[],
    void,
    { rejectValue: string }
>('posts/getPosts', async (_, thunkApi) => {
    try {
        const response = await getAllPosts()
        return response.data

    } catch (error) {
        return thunkApi.rejectWithValue('нема постів')
    }
})


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers:(builder) => {
        builder
        .addCase(getAllPostsAsync.pending, (state)=> {
            state.loading = true
            state.error = null 
        })
        .addCase(getAllPostsAsync.fulfilled, (state, action)=> {
            state.loading = false
            state.posts = action.payload
        })
        .addCase(getAllPostsAsync.rejected, (state, action)=> {
            state.loading = false
            state.error = action.payload ?? '???' 
        })
    }
})


export default postsSlice.reducer