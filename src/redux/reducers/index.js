import { combineReducers } from 'redux';

import user from './userReducer';
import geolocation from './geolocationReducer';

export default combineReducers({ 
    user,
    geolocation
})