import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



interface PhraseInterface {
    id: number,
    text: string,
    translate: string,
    is_learned: boolean
}

interface StateInterface {
    list: PhraseInterface[],
    loading: boolean,
    error: string | null
}


const initialState: StateInterface = {
    list: [],
    loading: false,
    error: null
}

export const fetchPhrases = createAsyncThunk<PhraseInterface[], { filterText?: string; filterLearned?: boolean | 'all' }, { rejectValue: string }>
    ('fetchPrases', async ({ filterText, filterLearned }, { rejectWithValue }) => {
        try {
            const params: any = {};

            if (filterText) {
                params.text = filterText;
            }

            if (typeof filterLearned === 'boolean') {
                params.is_learned = filterLearned;
            }
            const response = await axios.get<PhraseInterface[]>('http://localhost:3000/phrases', { params })
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response?.data?.error || 'Помилка при завантаженні данних')
        }

    })
export const deletePhrase = createAsyncThunk<{}, { id: number }, { rejectValue: string }>(
    'deletePhrase', async ({ id }, { rejectWithValue }) => {
        try {
            await axios.delete<PhraseInterface[]>('http://localhost:3000/phrases', { params: {id} })
            return id
        } catch (error: any) {
            
            return rejectWithValue(error.message || 'Помилка видалення');
        }
    }
)

export const changeStatusPhrase = createAsyncThunk<{}, {id: number}, {rejectValue: string}> (
    'changeStatusPhrase', async ({id}, {rejectWithValue}) => {
        try {
            await axios.put<PhraseInterface[]>('http://localhost:3000/phrases',{}, { params: {id} })
            return id
        } catch (error: any) {
            return rejectWithValue(error.message || 'Помилка змінення статусу');
        }
    }
)

const phrasesSlice = createSlice({
    name: 'phrases',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhrases.pending, (state) => {
                state.loading = true;
                state.error = null
            })
            .addCase(fetchPhrases.fulfilled, (state, action) => {
                state.list = [...action.payload];
                state.loading = false
            })
            .addCase(fetchPhrases.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || 'невідома помилка'
            })
            .addCase(deletePhrase.fulfilled, (state, action) => {
              
                const newList = state.list.filter(el => el.id !== action.payload)
                state.list = [...newList]
            })
            .addCase(changeStatusPhrase.fulfilled, (state, action) => {
                const index = state.list.findIndex(el=>el.id===action.payload)
                state.list[index].is_learned =  !state.list[index].is_learned
            })
    }
})

export default phrasesSlice.reducer