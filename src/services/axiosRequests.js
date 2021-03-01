import api from './api';
import publicIp from 'public-ip';

import {
    GEOLOCATION_TOKEN_PARAM,
    DEFAULT_GEOLOCATION_API_POINT,
    DEFAULT_FORECAST_API_POINT,
} from '../constants';


export const getGeolocation = ip => {
    return api.get(DEFAULT_GEOLOCATION_API_POINT + ip, {
        params: {
            token: GEOLOCATION_TOKEN_PARAM
        }
    });
}

export const getForecastByCityName = name => {
    return api.get(DEFAULT_FORECAST_API_POINT, { params: { q: name } });
}

export const getPublicIp = (async () => await publicIp.v4());