import {
    SET_FORECAST_API,
    SET_CITY_FORECAST,
    SET_IS_LOADING_INFO,
    SET_TEMPERATURE_UNIT,
    GET_CITY_FORECAST_REQUEST,
} from '../../actions/cityForecast';

import { CELSIUS_TEMP_UNIT, OPEN_WEATHER_MAP_API } from '../../constants';

const initForecastState = {
    cityForecast: [],
    forecastSettings: {
        tempUnit: CELSIUS_TEMP_UNIT,
        forecastApi: OPEN_WEATHER_MAP_API,
    },
    isLoading: false
}

export default function cityForecastReducer(state = initForecastState, action) {
    switch (action.type) {
        case SET_FORECAST_API:
            return {
                ...state,
                forecastSettings: {
                    ...state.forecastSettings,
                    forecastApi: action.payload
                }
            }
        case SET_TEMPERATURE_UNIT:
            return {
                ...state,
                forecastSettings: {
                    ...state.forecastSettings,
                    tempUnit: action.payload
                }
            }
        case SET_CITY_FORECAST:
            return {
                ...state,
                cityForecast: action.payload
            }
        case SET_IS_LOADING_INFO:
            return {
                ...state,
                isLoading: action.payload
            }
        case GET_CITY_FORECAST_REQUEST:
            return { ...state }
        default: return state;
    }
}