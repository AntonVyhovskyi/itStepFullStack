import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../typesAndInterfaces";
import { getAllUsers } from "../../api/users";


interface UsersStateInterface {
    users: User[],
    loading: boolean,
    error: string | null
}
const initialState: UsersStateInterface = {
    users: [],
    loading: false,
    error: null
}

export const asyncUsers = createAsyncThunk<
    User[],
    void,
    { rejectValue: string }>(
        'users/getAll',
        async (_, thunkAPI) => {
            try {
                const response = await getAllUsers();
                return response.data
            } catch (err: any) {
                return thunkAPI.rejectWithValue('Не вдалося завантажити')
            }
        }

);

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(asyncUsers.pending, (state)=> {
            state.loading = true;
            state.error = null;
        })

        .addCase(asyncUsers.fulfilled, (state, action)=> {
            state.loading = false;
            state.users = action.payload;
        })

        .addCase(asyncUsers.rejected, (state, action)=> {
            state.loading = false;
            state.error = action.payload ?? 'невідома помилка'
        })
    }

})

export default usersSlice.reducer