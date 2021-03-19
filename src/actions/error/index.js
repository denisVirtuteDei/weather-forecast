export const SET_ERROR_INFO = 'SET_ERROR_INFO'
export const REMOVE_ERROR_INFO = 'REMOVE_ERROR_INFO'

export const setErrorInfo = error => ({ type: SET_ERROR_INFO, payload: error })
export const removeErrorInfo = () => ({ type: REMOVE_ERROR_INFO })