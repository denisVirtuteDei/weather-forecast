export const SET_FORECAST_API = 'SET_FORECAST_API';
export const SET_TEMPERATURE_UNIT = 'SET_TEMPERATURE_UNIT';

export const setForecastApi = data => ({ type: SET_FORECAST_API, payload: data});
export const setTemperatureUnit = data => ({ type: SET_TEMPERATURE_UNIT, payload: data});