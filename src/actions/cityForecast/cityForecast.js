export const SET_TEMPERATURE_UNIT = 'SET_TEMPERATURE_UNIT'
export const SET_CITY_WEATHER_FORECAST = 'SET_CITY_WEATHER_FORECAST'
export const SET_WEATHER_FORECAST_API_NAME = 'SET_WEATHER_FORECAST_API_NAME'
export const GET_CITY_WEATHER_FORECAST_REQUEST = 'GET_CITY_WEATHER_FORECAST_REQUEST'

export const setTemperatureUnit = value => ({ type: SET_TEMPERATURE_UNIT, payload: value})
export const setCityWeatherForecast = value => ({ type: SET_CITY_WEATHER_FORECAST, payload: value })
export const setWeatherForecastApiName = value => ({ type: SET_WEATHER_FORECAST_API_NAME, payload: value})
export const getCityWeatherForecast = value => ({ type: GET_CITY_WEATHER_FORECAST_REQUEST, payload: value })