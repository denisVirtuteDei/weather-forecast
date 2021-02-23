import { all } from 'redux-saga/effects';

import {
    signInAnonUserRequestWatcher,
    signInUserWithGoogleRequestWatcher
} from './user';

import {
    getUserGeolocationWatcher
} from './geolocation';


export default function* rootSaga() {
    yield all([
        signInAnonUserRequestWatcher(),
        signInUserWithGoogleRequestWatcher(),
        getUserGeolocationWatcher()
    ])
}
