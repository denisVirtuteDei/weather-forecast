import { all } from 'redux-saga/effects'

import {
    signInUserWithEmailRequestWatcher,
    signInUserWithGoogleRequestWatcher,
} from './user'

import { getUserGeolocationWatcher } from './geolocation'
import { getCityWeatherForecastRequestWatcher } from './cityForecast'

export default function* rootSaga() {
    yield all([
        getUserGeolocationWatcher(),
        signInUserWithEmailRequestWatcher(),
        signInUserWithGoogleRequestWatcher(),
        getCityWeatherForecastRequestWatcher(),
    ])
}
