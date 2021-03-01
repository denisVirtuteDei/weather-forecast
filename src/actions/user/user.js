export const SET_USER_AUTH_INFO = 'SET_USER_AUTH_INFO';
export const SET_USER_AUTH_ERROR = 'SET_USER_AUTH_ERROR';
export const SING_OUT_USER_REQUEST = 'SING_OUT_USER_REQUEST';
export const SING_IN_ANON_USER_REQUEST = 'SING_IN_ANON_USER_REQUEST';
export const SING_IN_USER_VIA_GOOGLE_REQUEST = 'SING_IN_USER_VIA_GOOGLE_REQUEST';

export const setUserAuthInfo = data => ({ type: SET_USER_AUTH_INFO, payload: data });
export const setUserAuthError = err => ({ type: SET_USER_AUTH_ERROR, payload: err });
export const signOutUser = () => ({ type: SING_OUT_USER_REQUEST });
export const signInAnonUser = () => ({ type: SING_IN_ANON_USER_REQUEST });
export const signInUserViaGoogle = () => ({ type: SING_IN_USER_VIA_GOOGLE_REQUEST });
