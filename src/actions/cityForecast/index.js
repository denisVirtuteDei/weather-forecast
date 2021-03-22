export const SET_TEMPERATURE_UNIT = 'SET_TEMPERATURE_UNIT'
export const SET_CITY_WEATHER_FORECAST = 'SET_CITY_WEATHER_FORECAST'
export const SET_WEATHER_FORECAST_API_NAME = 'SET_WEATHER_FORECAST_API_NAME'
export const GET_CITY_WEATHER_FORECAST_REQUEST = 'GET_CITY_WEATHER_FORECAST_REQUEST'

export const setTemperatureUnit = data => ({ type: SET_TEMPERATURE_UNIT, payload: data })
export const setCityWeatherForecast = data => ({ type: SET_CITY_WEATHER_FORECAST, payload: data })
export const setWeatherForecastApiName = data => ({
  type: SET_WEATHER_FORECAST_API_NAME,
  payload: data,
})
export const getCityWeatherForecast = (cityTitle, apiName) => ({
  type: GET_CITY_WEATHER_FORECAST_REQUEST,
  payload: { cityTitle, apiName },
})
