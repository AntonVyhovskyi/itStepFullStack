import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';

interface User {
    email: string;
    name: string;
    id: number
}

export interface AuthState {
    user: User | null;
    accessToken: string | null;
}

const tokenFromLocalStorage = localStorage.getItem('accessToken') || null;
let userFromTokenFromLocalStorage: User | null = null
if (tokenFromLocalStorage) {
    const decoded: any = jwtDecode(tokenFromLocalStorage);
    userFromTokenFromLocalStorage = {
        name: decoded.name,
        email: decoded.email,
        id: decoded.id
    }
}

const initialState: AuthState = {
    user: userFromTokenFromLocalStorage,
    accessToken: localStorage.getItem('accessToken') || null,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action: PayloadAction<string>) {
            state.accessToken = action.payload;
            localStorage.setItem('accessToken', action.payload);


            try {
                const decoded: any = jwtDecode(action.payload);
                state.user = {
                    email: decoded.email,
                    name: decoded.name,
                    id: decoded.id
                };
            } catch {
                state.user = null;
            }
        },
        logout(state) {
            state.user = null;
            state.accessToken = null;
            localStorage.removeItem('accessToken');
        },
    },
});

export const { setToken, logout } = authSlice.actions;
export default authSlice.reducer;