import {
	SET_USER_AUTH_INFO,
	SET_USER_AUTH_ERROR,
	REMOVE_USER_AUTH_ERROR,
	SING_OUT_USER_REQUEST,
	SING_IN_USER_WITH_EMAIL_REQUEST,
	SING_IN_USER_WITH_GOOGLE_REQUEST,
} from '@actions/user'

const initUserState = {
	name: '',
	email: '',
	errorInfo: '',
	isError: false,
	isLogged: false,
}

export default function userReducer(state = initUserState, action) {
	switch (action.type) {
		case SET_USER_AUTH_ERROR:
			return {
				...state,
				isError: true,
				errorInfo: action.payload.error,
			}
		case SET_USER_AUTH_INFO:
			return {
				...state,
				errorInfo: '',
				isError: false,
				isLogged: true,
				name: action.payload.displayName,
				email: action.payload.email,
			}
		case SING_OUT_USER_REQUEST:
			return {
				...state,
				name: '',
				email: '',
				errorInfo: '',
				isError: false,
				isLogged: false,
			}
		case REMOVE_USER_AUTH_ERROR:
			return {
				...state,
				errorInfo: '',
				isError: false,
			}
		case SING_IN_USER_WITH_EMAIL_REQUEST: return { ...state }
		case SING_IN_USER_WITH_GOOGLE_REQUEST: return { ...state }
		default: return state
	}
}