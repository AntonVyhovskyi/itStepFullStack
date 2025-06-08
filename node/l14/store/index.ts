import { configureStore } from '@reduxjs/toolkit'
import user from './reducers/userSlice'
import masters from './reducers/mastersSlice'

const store = configureStore({
    reducer: {
        user,
        masters
    },

})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store