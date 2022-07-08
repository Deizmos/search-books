import { createSlice } from '@reduxjs/toolkit';

interface Action<P> {
    payload: P;
}

interface paramsState {
    selectedCategoria: string,
    sort: string,
    search: string,
}

const initialState: paramsState = {
    selectedCategoria: 'all',
    sort: 'relevance',
    search: '',
}

const paramsSlice = createSlice({
    name: 'params',
    initialState,
    reducers: {
        setParam(state, action: Action<{ key: 'selectedCategoria' | 'sort' | 'search'; value: string }>) {
            return {
                ...state,
                [action.payload.key]: action.payload.value,
            }
        },
    }
});

export const {
    setParam,
} = paramsSlice.actions;
export default paramsSlice.reducer;