import { OPEN_WEATHER_MAP_API_NAME, WEATHER_BIT_API_NAME, NOON_TIME } from '@/constants'

const JSON_VALUE_ERROR = 'Invalid forecast values'

export const mapWeatherForecastData = (weatherForecastData, apiName) => {
  switch (apiName) {
    case WEATHER_BIT_API_NAME:
      if (!weatherForecastData.data.length) throw Error(JSON_VALUE_ERROR)
      return weatherForecastData.data.map(el => ({
        weather: el.weather,
        temp: el.temp,
        dayTime: el.ts,
      }))
    case OPEN_WEATHER_MAP_API_NAME:
      if (!weatherForecastData.list.length) throw Error(JSON_VALUE_ERROR)
      return weatherForecastData.list
        .filter(el => el.dt_txt.includes(NOON_TIME))
        .map(el => ({
          weather: el.weather[0],
          temp: el.main.temp,
          dayTime: el.dt,
        }))
    default:
      return {
        weather: {},
        temp: '',
        dayTime: '',
      }
  }
}

export const celsiusToFahrenheit = tempValue => Math.round(tempValue * 1.8 + 32)

export const tempToAcceptableForm = tempValue => `${Math.round(tempValue)}`
