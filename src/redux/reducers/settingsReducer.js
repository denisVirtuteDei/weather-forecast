import {
    SET_FORECAST_API,
    SET_TEMPERATURE_UNIT
} from '../../actions/settings';

const initSettingsState = {
    theme: 'light',
    tempUnit: 'celsius',
    forecastApi: 'openweathermap',
}

export default (state = initSettingsState, action) => {
    switch (action.type) {
        case SET_TEMPERATURE_UNIT:
            return {
                ...state,
                tempUnit: action.payload
            }
        case SET_FORECAST_API:
            return {
                ...state,
                forecastApi: action.payload
            }
        default: return state;
    }
}