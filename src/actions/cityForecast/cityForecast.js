export const SET_FORECAST_API = 'SET_FORECAST_API';
export const SET_CITY_FORECAST = 'SET_CITY_FORECAST';
export const SET_TEMPERATURE_UNIT = 'SET_TEMPERATURE_UNIT';
export const GET_CITY_FORECAST_REQUEST = 'GET_CITY_FORECAST_REQUEST';

export const setForecastApi = data => ({ type: SET_FORECAST_API, payload: data});
export const setCityForecast = data => ({ type: SET_CITY_FORECAST, payload: data });
export const setTemperatureUnit = data => ({ type: SET_TEMPERATURE_UNIT, payload: data});
export const getCityForecast = data => ({ type: GET_CITY_FORECAST_REQUEST, payload: data });