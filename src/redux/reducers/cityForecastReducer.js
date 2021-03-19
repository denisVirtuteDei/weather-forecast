import {
	SET_TEMPERATURE_UNIT,
	SET_CITY_WEATHER_FORECAST,
	SET_WEATHER_FORECAST_API_NAME,
	GET_CITY_WEATHER_FORECAST_REQUEST,
} from '@/actions/cityForecast'

import {
	CELSIUS_TEMP_UNIT,
	OPEN_WEATHER_MAP_API_NAME,
} from '@/constants'

const initForecastState = {
	cityForecast: [],
	forecastSettings: {
		tempUnit: CELSIUS_TEMP_UNIT,
		forecastApi: OPEN_WEATHER_MAP_API_NAME,
	},
}

export default (state = initForecastState, action) => {
	switch (action.type) {
		case SET_WEATHER_FORECAST_API_NAME:
			return {
				...state,
				forecastSettings: {
					...state.forecastSettings,
					forecastApi: action.payload,
				},
			}
		case SET_TEMPERATURE_UNIT:
			return {
				...state,
				forecastSettings: {
					...state.forecastSettings,
					tempUnit: action.payload,
				},
			}
		case SET_CITY_WEATHER_FORECAST:
			return {
				...state,
				cityForecast: action.payload,
			}
		case GET_CITY_WEATHER_FORECAST_REQUEST: return { ...state }
		default: return state
	}
}