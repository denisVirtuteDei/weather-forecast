import { takeEvery, call, put } from 'redux-saga/effects';

import {
    signInAnonymouslyUsingFirebase,
    singInWithGoogleAccountUsingFirebase
} from '../firebase';

import {
    SING_IN_ANON_USER_REQUEST,
    SING_IN_USER_VIA_GOOGLE_REQUEST,
    setUserAuthInfo
} from '../actions/user';

export function* signInAnonUserRequestWatcher() {
    yield takeEvery(
        SING_IN_ANON_USER_REQUEST,
        signInAnonUserWorker
    );
}

function* signInAnonUserWorker() {
    const data = yield call(signInAnonymouslyUsingFirebase);
    yield put(setUserAuthInfo(data));
}

export function* signInUserWithGoogleRequestWatcher() {
    yield takeEvery(
        SING_IN_USER_VIA_GOOGLE_REQUEST,
        signInUserViaGoogleWorker
    );
}

function* signInUserViaGoogleWorker() {
    const data = yield call(singInWithGoogleAccountUsingFirebase);
    yield put(setUserAuthInfo(data));
}


