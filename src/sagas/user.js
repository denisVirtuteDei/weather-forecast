import { takeEvery, call, put } from 'redux-saga/effects'

import {
    singInWithGoogleAccountUsingFirebase
} from '../utils/firebase'

import {
    setUserAuthInfo,
    setUserAuthError,
    SING_IN_USER_WITH_EMAIL_REQUEST,
    SING_IN_USER_WITH_GOOGLE_REQUEST,
} from '../actions/user'

export function* signInUserWithGoogleRequestWatcher() {
    yield takeEvery(
        SING_IN_USER_WITH_GOOGLE_REQUEST,
        signInUserWithGoogleWorker
    );
}

function* signInUserWithGoogleWorker() {
    try {
        const userData = yield call(singInWithGoogleAccountUsingFirebase)
        yield put(setUserAuthInfo(userData))
    } catch (error) { 
        yield put(setUserAuthError(error))
    }

}

export function* signInUserWithEmailRequestWatcher() {
    yield takeEvery(
        SING_IN_USER_WITH_EMAIL_REQUEST,
        signInUserWithEmailWorker
    );
}

function* signInUserWithEmailWorker() {
    try {
        const userData = yield call(singInWithGoogleAccountUsingFirebase)
        yield put(setUserAuthInfo(userData))
    } catch (error) { 
        yield put(setUserAuthError(error.message))
    }

}


