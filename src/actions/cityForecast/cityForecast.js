export const GET_CITY_FORECAST_REQUEST = 'GET_CITY_FORECAST_REQUEST';
export const SET_CITY_FORECAST = 'SET_CITY_FORECAST';

export const getCityForecast = data => ({ type: GET_CITY_FORECAST_REQUEST, payload: data });
export const setCityForecast = data => ({ type: SET_CITY_FORECAST, payload: data });