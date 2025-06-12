import { createSlice } from '@reduxjs/toolkit'

const initialState: { email: null | string } = {
    email: localStorage.getItem('email') || null
}

const productsSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setEmail(state, action) {
            state.email = action.payload;
            localStorage.setItem('email', action.payload)
        },
    },

})


export const  {  } = productsSlice.actions;

export default productsSlice.reducer