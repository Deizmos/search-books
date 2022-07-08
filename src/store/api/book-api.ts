import axios from 'axios';

import { bookType } from '../types';
import {
  API_KEY,
  API_URL,
} from './books-api';

interface getBookType {
    id: string,
};

interface Params {
    'api_key': string;
};

export const getBook = ({ id }: getBookType): Promise<bookType> => {
    const params: Params = {
        'api_key': API_KEY,
    };

    return axios.get(`${API_URL}/${id}`, {
        params
    }).then((resp) => resp.data);
};