import axios from './api';
import publicIp from 'public-ip';

import {
    WEATHER_BIT_API,
    OPEN_WEATHER_MAP_API,
    WEATHER_BIT_API_POINT,
    GEOLOCATION_TOKEN_PARAM,
    OPEN_WEATHER_MAP_API_POINT,
    DEFAULT_GEOLOCATION_API_POINT,
} from '../constants';


export const getGeolocation = ip => {
    return axios.get(DEFAULT_GEOLOCATION_API_POINT + ip, {
        params: {
            token: GEOLOCATION_TOKEN_PARAM
        }
    });
}

export const getForecastByCityName = (name, fapi) => {
    switch(fapi){
        case WEATHER_BIT_API: 
            return axios.get(WEATHER_BIT_API_POINT, { params: {city: name } });
        case OPEN_WEATHER_MAP_API:
            return axios.get(OPEN_WEATHER_MAP_API_POINT, { params: { q: name } });
        default:
            throw Error('weather api error');
    }
}

export const getPublicIp = (async () => await publicIp.v4());