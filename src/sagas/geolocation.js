import { takeEvery, put, call } from 'redux-saga/effects';
import { getGeolocation, getPublicIp } from '../services'

import {
    GET_USER_GEOLOCATION_REQUEST,
    setUserGeolocationInfo
} from '../actions/geolocation';

export function* getUserGeolocationWatcher() {
    yield takeEvery(GET_USER_GEOLOCATION_REQUEST, getUserGeolocationWorker);
}

function* getUserGeolocationWorker() {
    const ip = yield call(getPublicIp);
    const response = yield call(getGeolocation, ip);
    yield put(setUserGeolocationInfo(response.data));
}