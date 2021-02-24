import api from '../axios';
import { DEFAULT_GEOLOCATION_API_POINT } from '../constants';

export const getGeolocation = (async ip => {
    //return api.get(`https://ipinfo.io/${ip}?token=cd376b22e40a26`)
    return await api.get(DEFAULT_GEOLOCATION_API_POINT);
})