export const SET_USER_AUTH_INFO = 'SET_USER_AUTH_INFO'
export const SET_USER_AUTH_ERROR = 'SET_USER_AUTH_ERROR'
export const SING_OUT_USER_REQUEST = 'SING_OUT_USER_REQUEST'
export const SING_IN_USER_WITH_EMAIL_REQUEST = 'SING_IN_USER_WITH_EMAIL_REQUEST'
export const SING_IN_USER_WITH_GOOGLE_REQUEST = 'SING_IN_USER_WITH_GOOGLE_REQUEST'

export const setUserAuthInfo = data => ({ type: SET_USER_AUTH_INFO, payload: data })
export const setUserAuthError = error => ({ type: SET_USER_AUTH_ERROR, payload: error })
export const signOutUser = () => ({ type: SING_OUT_USER_REQUEST })
export const signInUserWithEmail = data => ({ type: SING_IN_USER_WITH_EMAIL_REQUEST, payload: data })
export const signInUserWithGoogle = () => ({ type: SING_IN_USER_WITH_GOOGLE_REQUEST })
