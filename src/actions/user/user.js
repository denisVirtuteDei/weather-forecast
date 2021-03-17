export const SING_OUT_USER_REQUEST = 'SING_OUT_USER_REQUEST'

export const SET_USER_AUTH_INFO = 'SET_USER_AUTH_INFO'
export const SET_USER_AUTH_ERROR = 'SET_USER_AUTH_ERROR'
export const REMOVE_USER_AUTH_ERROR = 'REMOVE_USER_AUTH_ERROR'

export const SIGN_UP_USER_REQUEST = 'SIGN_UP_USER_REQUEST'
export const SING_IN_USER_WITH_EMAIL_REQUEST = 'SING_IN_USER_WITH_EMAIL_REQUEST'
export const SING_IN_USER_WITH_GOOGLE_REQUEST = 'SING_IN_USER_WITH_GOOGLE_REQUEST'

export const signOutUserRequest = () => ({ type: SING_OUT_USER_REQUEST })

export const setUserAuthInfo = data => ({ type: SET_USER_AUTH_INFO, payload: data })
export const setUserAuthError = error => ({ type: SET_USER_AUTH_ERROR, payload: error })
export const removeUserAuthError = () => ({ type: REMOVE_USER_AUTH_ERROR })

export const signInUserWithGoogle = () => ({ type: SING_IN_USER_WITH_GOOGLE_REQUEST })
export const signUpUserRequest = (email, password) => ({
    type: SIGN_UP_USER_REQUEST,
    payload: { email, password }
})
export const signInUserWithEmail = (email, password) => ({
    type: SING_IN_USER_WITH_EMAIL_REQUEST,
    payload: { email, password }
})
