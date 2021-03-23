import { all } from 'redux-saga/effects'

import {
  signUpUserWithEmailRequestWatcher,
  signInUserWithEmailRequestWatcher,
  signInUserWithGoogleRequestWatcher,
} from './user'

import { getUserGeolocationWatcher } from './geolocation'
import { getCityWeatherForecastRequestWatcher } from './cityForecast'

export default function* rootSaga() {
  yield all([
    getUserGeolocationWatcher(),
    signUpUserWithEmailRequestWatcher(),
    signInUserWithEmailRequestWatcher(),
    signInUserWithGoogleRequestWatcher(),
    getCityWeatherForecastRequestWatcher(),
  ])
}
