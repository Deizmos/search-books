import { createSlice } from '@reduxjs/toolkit';

import {
  bookType,
  GetBooksResponceType,
} from '../types';

interface Action<P> {
    payload: P;
};

interface booksState {
    list: bookType[],
    totalItems: number,
    startIndex: number,
    isLoading: boolean,
};

const initialState: booksState = {
    isLoading: true,
    list: [],
    totalItems: 0,
    startIndex: 0,
};

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setList(state, action: Action<GetBooksResponceType>) {
            if (action.payload.items) {
                return {
                    ...state,
                    list: !state.startIndex ? action.payload.items : state.list.concat(action.payload.items),
                    totalItems: action.payload.totalItems
                }
            }

            return {
                ...state,
                list: [],
                totalItems: 0
            }
        },

        setStartIndex(state) {
            return {
                ...state,
                startIndex: state.startIndex + 30,
            }
        },

        setZeroStartIndex(state) {
            return {
                ...state,
                startIndex: 0,
                list: [],
                totalItems: 0
            }
        },

        setLoadingBooks(state, action: Action<boolean>) {
            return {
                ...state,
                isLoading: action.payload,
            }
        },
    }
});

export const {
    setList,
    setStartIndex,
    setZeroStartIndex,
    setLoadingBooks,
} = booksSlice.actions;
export default booksSlice.reducer;