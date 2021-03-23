import { SET_CURRENT_CITY_INFO, GET_USER_GEOLOCATION_REQUEST } from '@/actions/geolocation'

const initGeoState = {
  city: '',
  formatted: '',
  region: '',
  isInfoLoaded: false,
}

export default (state = initGeoState, action) => {
  switch (action.type) {
    case SET_CURRENT_CITY_INFO:
      return {
        ...state,
        city: action.payload.city,
        formatted: action.payload.formatted,
        region: action.payload.region,
        isInfoLoaded: true,
      }
    case GET_USER_GEOLOCATION_REQUEST:
      return { ...state }
    default:
      return state
  }
}
