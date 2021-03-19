import { SET_THEME_MODE } from '@/actions/themeMode'

import { LIGHT_THEME_MODE } from '@/constants'

const initThemeModeState = {
	actualThemeMode: LIGHT_THEME_MODE,
}

export default (state = initThemeModeState, action) => {
	switch (action.type) {
		case SET_THEME_MODE:
			return {
				...state,
				actualThemeMode: action.payload,
			}
		default: return state
	}
}