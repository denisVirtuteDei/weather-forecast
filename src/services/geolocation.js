import axios from 'axios';
import { DEFAULT_GEOLOCATION_API_POINT } from '../constants';

export const getGeolocation = ip => {
    //return axios.get(`https://ipinfo.io/${ip}?token=cd376b22e40a26`)
    return axios.get(DEFAULT_GEOLOCATION_API_POINT)
}