import { createSlice } from '@reduxjs/toolkit';

import { bookType } from '../types';

interface Action<P> {
    payload: P;
};

interface booksState {
    data?: bookType,
    isLoading: boolean,
};

const initialState: booksState = {
    isLoading: true,
};

const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        setBook(state, action: Action<bookType>) {
            return {
                ...state,
                data: action.payload,
            }
        },

        setLoadingBook(state, action: Action<boolean>) {
            return {
                ...state,
                isLoading: action.payload,
            }
        },
    }
});

export const {
    setBook,
    setLoadingBook,
} = bookSlice.actions;
export default bookSlice.reducer;