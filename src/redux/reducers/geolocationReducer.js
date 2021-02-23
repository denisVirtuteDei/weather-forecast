import {
    GET_USER_GEOLOCATION_REQUEST,
    SET_USER_GEOLOCATION_INFO
} from '../../actions/geolocation'

const initGeoState = {
    userGeolocation: {}
}

export default function geolocation(state = initGeoState, action) {
    switch (action.type) {
        case SET_USER_GEOLOCATION_INFO:
            return {
                ...state,
                userGeolocation: action.payload
            }
        case GET_USER_GEOLOCATION_REQUEST:
            return { ...state }
        default: return state;
    }
}