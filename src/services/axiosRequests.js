import publicIp from 'public-ip';
import { setup } from 'axios-cache-adapter';

import {
    WEATHER_BIT_API_NAME,
    WEATHER_BIT_API_POINT,
    OPEN_WEATHER_MAP_API_NAME,
    OPEN_WEATHER_MAP_API_POINT,
    DEFAULT_GEOLOCATION_API_POINT,
    WEATHER_API_NOT_FOUNDED_ERROR_MESSAGE,
} from '../constants'

const axios = setup({
    cache: {
        maxAge: 15 * 60 * 1000
    }
})

export const getGeolocation = ip => {
    return axios.get(DEFAULT_GEOLOCATION_API_POINT + ip, {
        params: { token: process.env.REACT_APP_GEOLOCATION_TOKEN_PARAM }
    });
}

export const getWeatherForecastByCityName = (cityName, weatherApiName) => {
    switch (weatherApiName) {
        case WEATHER_BIT_API_NAME:
            return axios.get(WEATHER_BIT_API_POINT, {
                params: {
                    city: cityName,
                    key: process.env.REACT_APP_WEATHER_BIT_API_KEY
                }
            })
        case OPEN_WEATHER_MAP_API_NAME:
            return axios.get(OPEN_WEATHER_MAP_API_POINT, {
                params: {
                    q: cityName,
                    appid: process.env.REACT_APP_OPEN_WEATHER_MAP_API_KEY
                }
            })
        default:
            throw Error(WEATHER_API_NOT_FOUNDED_ERROR_MESSAGE)
    }
}

export const getPublicIp = (async () => await publicIp.v4())