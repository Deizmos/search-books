import axios from 'axios';

import { GetBooksResponceType } from '../types';

const API_KEY = 'AIzaSyDcJSsghLBmJhBRsCZqGowzww9mYA3nktE';

const API_URL = 'https://www.googleapis.com/books/v1/volumes';

interface getBooksType {
    search?: string,
    categoria?: string,
    sort?: string,
    startIndex: number,
}


interface Params {
    q?: string;
    orderBy?: string;
    projection?: string;
    'api_key': string;
    maxResults?: number,
    startIndex: number,
}

export const getBooks = ({ search, categoria, sort, startIndex, }: getBooksType): Promise<GetBooksResponceType> => {
    const params: Params = {
        projection: 'full',
        'api_key': API_KEY,
        maxResults: 30,
        startIndex: startIndex,
        q: search ? search + " subject:" : "subject:"
    };

    if (sort) params.orderBy = sort;
    if (categoria && categoria !== 'all') params.q += categoria;

    return axios.get(API_URL, {
        params
    }).then((resp) => resp.data);
}

export { API_KEY, API_URL };