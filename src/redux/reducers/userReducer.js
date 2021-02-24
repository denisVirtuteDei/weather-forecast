import {
    SET_USER_AUTH_INFO,
    SING_IN_ANON_USER_REQUEST,
    SING_IN_USER_VIA_GOOGLE_REQUEST,
    SING_OUT_USER_REQUEST
} from '../../actions/user'

const initUserState = {
    email: '',
    name: '',
    isLogged: false,
}

export default function userReducer(state = initUserState, action) {
    switch (action.type) {
        case SING_IN_ANON_USER_REQUEST:
            return { ...state }
        case SING_IN_USER_VIA_GOOGLE_REQUEST:
            return { ...state }
        case SET_USER_AUTH_INFO:
            return {
                ...state,
                isLogged: true,
                name: action.payload.name || 'Anonymous',
                email: action.payload.email
            }
        case SING_OUT_USER_REQUEST:
            return {
                ...state,
                isLogged: false,
                name: '',
                email: ''
            }
        default: return state;
    }
}