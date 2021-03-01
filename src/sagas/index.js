import { all } from 'redux-saga/effects';

import {
    signInAnonUserRequestWatcher,
    signInUserWithGoogleRequestWatcher
} from './user';

import { getUserGeolocationWatcher } from './geolocation';
import { getCityForecastRequestWatcher } from './cityForecast';

export default function* rootSaga() {
    yield all([
        signInAnonUserRequestWatcher(),
        signInUserWithGoogleRequestWatcher(),
        getUserGeolocationWatcher(),
        getCityForecastRequestWatcher(),
    ])
}
