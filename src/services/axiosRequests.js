import publicIp from 'public-ip'
import { setup } from 'axios-cache-adapter'

import {
  WEATHER_BIT_API_KEY,
  WEATHER_BIT_API_NAME,
  WEATHER_BIT_API_POINT,
  GEOLOCATION_API_POINT,
  GEOLOCATION_TOKEN_PARAM,
  OPEN_WEATHER_MAP_API_KEY,
  OPEN_WEATHER_MAP_API_NAME,
  OPEN_WEATHER_MAP_API_POINT,
} from '@/constants'

const axios = setup({ cache: { maxAge: 15 * 60 * 1000 } })

export const getGeolocation = ip => {
  return axios.get(GEOLOCATION_API_POINT + ip, {
    params: { token: GEOLOCATION_TOKEN_PARAM },
  })
}

export const getWeatherForecastByCityName = (cityName, weatherApiName) => {
  switch (weatherApiName) {
    case WEATHER_BIT_API_NAME:
      return axios.get(WEATHER_BIT_API_POINT, {
        params: {
          city: cityName,
          key: WEATHER_BIT_API_KEY,
        },
      })
    case OPEN_WEATHER_MAP_API_NAME:
      return axios.get(OPEN_WEATHER_MAP_API_POINT, {
        params: {
          q: cityName,
          appid: OPEN_WEATHER_MAP_API_KEY,
        },
      })
    default:
      throw Error('Unknown problem')
  }
}

export const getPublicIp = async () => await publicIp.v4()
