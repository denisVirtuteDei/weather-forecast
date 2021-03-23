import { takeEvery, put, call } from 'redux-saga/effects'

import { setErrorInfo } from '@/actions/error'
import { GET_USER_GEOLOCATION_REQUEST, setCurrentCityInfo } from '@/actions/geolocation'

import { getGeolocation, getPublicIp } from '@/services/axiosRequests'

export function* getUserGeolocationWatcher() {
  yield takeEvery(GET_USER_GEOLOCATION_REQUEST, getUserGeolocationWorker)
}

function* getUserGeolocationWorker() {
  try {
    const ip = yield call(getPublicIp)
    const response = yield call(getGeolocation, ip)
    yield put(setCurrentCityInfo(response.data))
  } catch (error) {
    yield put(setErrorInfo(error.message))
  }
}
