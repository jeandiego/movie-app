// eslint-disable-next-line import/no-unresolved
import { API_TOKEN } from '@env';
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  timeout: 1000,
  headers: {
    method: 'GET',
    Authorization: `Bearer ${API_TOKEN}`,
    'Content-type': 'application/json',
  },
  params: {
    language: 'pt-BR',
    page: 1,
  },
});

export default api;
