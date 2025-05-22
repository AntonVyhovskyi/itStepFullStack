import { configureStore } from '@reduxjs/toolkit'
import phrases from './slices/phrases.slice'

const store = configureStore({
    reducer: {
        phrases
    },

})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store