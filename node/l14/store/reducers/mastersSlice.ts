import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

interface IMaster {
    id: string,
    name: string,
    category: string
}

interface IInitialState {
    masters: IMaster[],
    loading: boolean,
    error: null | string
}

const initialState: IInitialState = {
    masters: [],
    loading: false,
    error: null
}

export const fetchMasters = createAsyncThunk<IMaster[]>(
    'masters/fetchMasters',
    async () => {
        const response = await axios.get<IMaster[]>('http://localhost:3000/masters');
        return response.data;
    }
);

const mastersSlice = createSlice({
    name: 'masters',
    initialState,
    reducers: {

    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchMasters.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMasters.fulfilled, (state, action) => {
                state.loading = false;
                state.masters = action.payload;
            })
            .addCase(fetchMasters.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Сталася помилка';
            });
    }

})




export default mastersSlice.reducer