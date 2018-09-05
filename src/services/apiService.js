import HttpClient from './HttpClient';
import { API_HEADER_INPUTS } from '../constants';

const API_HOST = 'https://gateway.marvel.com:443/v1/public';
const API_PUBLIC_KEY = '06fdfae392b38f7988e05d1af18843c6';

export default class ApiService {


    static fetchMarvelHeroes = ({ offset, limit, searchTerm }) => {
        return HttpClient.get(`${API_HOST}/characters?limit=${limit}&offset=${offset}&nameStartsWith=${searchTerm}&apikey=${API_PUBLIC_KEY}`,
            { 'Content-Type': API_HEADER_INPUTS.CONTENT_TYPE },
        );
    }
}
