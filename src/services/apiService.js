import HttpClient from './HttpClient';
import { API_HEADER_INPUTS } from '../constants';

const API_HOST = '';

export default class ApiService {
    static getConfigurationList = () =>
        HttpClient.get(`${API_HOST}/settings/configurations`,
            { 'Content-Type': API_HEADER_INPUTS.CONTENT_TYPE, Channel: API_HEADER_INPUTS.CHANEL },
        );
}
