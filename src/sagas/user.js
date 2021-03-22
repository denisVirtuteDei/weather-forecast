import { takeEvery, call, put } from 'redux-saga/effects'

import { setErrorInfo } from '@/actions/error'
import {
  signUpWithEmailUsingFirebase,
  singInWithEmailUsingFirebase,
  singInWithGoogleAccountUsingFirebase,
} from '@/utils/firebase'
import {
  setUserAuthInfo,
  SIGN_UP_USER_REQUEST,
  SING_IN_USER_WITH_EMAIL_REQUEST,
  SING_IN_USER_WITH_GOOGLE_REQUEST,
} from '@/actions/user'

export function* signInUserWithGoogleRequestWatcher() {
  yield takeEvery(SING_IN_USER_WITH_GOOGLE_REQUEST, signInUserWithGoogleWorker)
}

function* signInUserWithGoogleWorker() {
  try {
    const userData = yield call(singInWithGoogleAccountUsingFirebase)
    yield put(setUserAuthInfo(userData))
  } catch (error) {
    yield put(setErrorInfo(error.message))
  }
}

export function* signInUserWithEmailRequestWatcher() {
  yield takeEvery(SING_IN_USER_WITH_EMAIL_REQUEST, signInUserWithEmailWorker)
}

function* signInUserWithEmailWorker({ payload }) {
  try {
    const userData = yield call(singInWithEmailUsingFirebase, payload.email, payload.password)
    yield put(setUserAuthInfo(userData))
  } catch (error) {
    yield put(setErrorInfo(error.message))
  }
}

export function* signUpUserWithEmailRequestWatcher() {
  yield takeEvery(SIGN_UP_USER_REQUEST, signUpUserWithEmailWorker)
}

function* signUpUserWithEmailWorker({ payload }) {
  try {
    const userData = yield call(signUpWithEmailUsingFirebase, payload.email, payload.password)
    yield put(setUserAuthInfo(userData))
  } catch (error) {
    yield put(setErrorInfo(error.message))
  }
}
