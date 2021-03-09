import { combineReducers } from 'redux';

import user from './userReducer';
import geolocation from './geolocationReducer';
import forecast from './cityForecastReducer';

export default combineReducers({ 
    user,
    geolocation,
    forecast,
})