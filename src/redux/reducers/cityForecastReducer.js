import {
    GET_CITY_FORECAST_REQUEST,
    SET_CITY_FORECAST
} from '../../actions/cityForecast';

const initForecastState = {
    cityForecast: []
}

export default function cityForecastReducer(state = initForecastState, action) {
    switch (action.type) {
        case SET_CITY_FORECAST:
            return {
                ...state,
                cityForecast: action.payload
            }
        case GET_CITY_FORECAST_REQUEST:
            return { ...state }
        default: return state;
    }
}