import { createSlice } from "@reduxjs/toolkit"

interface InitialStateInterface {
    isAuth: boolean,
    token: string | null
}

const initialState: InitialStateInterface = {
    isAuth: !!localStorage.getItem('token'),
    token: localStorage.getItem('token')
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            state.isAuth = true
            state.token = action.payload
            localStorage.setItem("token", action.payload)
        },
        logout(state) {
            state.isAuth = false
            state.token = null
            localStorage.removeItem("token")
        }
    }
})

export const {login, logout} = authSlice.actions
 
export default authSlice.reducer

