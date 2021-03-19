import { combineReducers } from 'redux'

import user from './userReducer'
import themeMode from './themeModeReducer'
import forecast from './cityForecastReducer'
import geolocation from './geolocationReducer'
import error from './errorReducer'

export default combineReducers({ 
	user,
	error,
	forecast,
	themeMode,
	geolocation,
})