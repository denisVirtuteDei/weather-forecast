import api from './api';
import publicIp from 'public-ip';
import { DEFAULT_FORECAST_API_POINT } from '../constants';
import { DEFAULT_GEOLOCATION_API_POINT } from '../constants';


export const getGeolocation = ip => {
    //return api.get(`https://ipinfo.io/${ip}?token=cd376b22e40a26`)
    return api.get(DEFAULT_GEOLOCATION_API_POINT);
}

export const getForecastByCityName = name => {
    return api.get(DEFAULT_FORECAST_API_POINT);
}

export const getPublicIp = (async () => await publicIp.v4());