export const GET_USER_GEOLOCATION_REQUEST = 'GET_USER_GEOLOCATION_REQUEST'
export const SET_CURRENT_CITY_INFO = 'SET_CURRENT_CITY_INFO'

export const getUserGeolocationRequest = () => ({ type: GET_USER_GEOLOCATION_REQUEST })
export const setCurrentCityInfo = data => ({ type: SET_CURRENT_CITY_INFO, payload: data })
