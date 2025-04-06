
import { configureStore } from '@reduxjs/toolkit'

import users from './slices/user.slice'
import posts from './slices/posts.slice'
import comments from './slices/comments.slice'

const store = configureStore({
    reducer: {
        users,
        posts,
        comments
    },

})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store