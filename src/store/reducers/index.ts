import { combineReducers } from '@reduxjs/toolkit';

import bookReduser from './book';
import booksReduser from './books';
import paramsReducer from './params';

const rootReducer = combineReducers({
    books: booksReduser,
    book: bookReduser,
    params: paramsReducer,
});

export default rootReducer;