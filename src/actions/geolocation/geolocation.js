export const GET_USER_GEOLOCATION_REQUEST = 'GET_USER_GEOLOCATION_REQUEST';
export const SET_USER_GEOLOCATION_INFO = 'SET_USER_GEOLOCATION_INFO'

export const getUserGeolocationRequest = () => ({ type: GET_USER_GEOLOCATION_REQUEST });
export const setUserGeolocationInfo = data => ({ type: SET_USER_GEOLOCATION_INFO, payload: data });
