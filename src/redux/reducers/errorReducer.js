import {
	SET_ERROR_INFO,
	REMOVE_ERROR_INFO,
} from '@/actions/error'

const initGeoState = {
	isError: false,
	errorMessage: '',
}

export default (state = initGeoState, action) => {
	switch (action.type) {
		case SET_ERROR_INFO:
			return {
				...state,
				isError: true,
				errorMessage: action.payload,
			}
		case REMOVE_ERROR_INFO: 
			return { 
				...state,
				isError: false,
				errorMessage: '',
			}
		default: return state
	}
}