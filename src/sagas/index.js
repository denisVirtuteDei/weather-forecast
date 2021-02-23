import { all } from 'redux-saga/effects';

import {
    signInAnonUserRequestWatcher,
    signInUserWithGoogleRequestWatcher
} from './user';


export default function* rootSaga() {
    yield all([
        signInAnonUserRequestWatcher(),
        signInUserWithGoogleRequestWatcher(),
    ])
}
