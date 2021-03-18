import { combineReducers } from 'redux'

import user from './userReducer'
import themeMode from './themeModeReducer'
import forecast from './cityForecastReducer'
import geolocation from './geolocationReducer'

export default combineReducers({ 
	user,
	forecast,
	themeMode,
	geolocation,
})