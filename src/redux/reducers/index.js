import { combineReducers } from 'redux'

import user from './userReducer'
import error from './errorReducer'
import theme from './themeModeReducer'
import forecast from './cityForecastReducer'
import geolocation from './geolocationReducer'

export default combineReducers({
  user,
  error,
  theme,
  forecast,
  geolocation,
})
