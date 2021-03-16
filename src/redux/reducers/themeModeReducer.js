import { LIGHT_THEME_MODE } from '@/constants'
import { SET_THEME_MODE } from '@actions/themeMode'

const initThemeModeState = {
    actualThemeMode: LIGHT_THEME_MODE
}

export default (state = initThemeModeState, action) => {
    switch (action.type) {
        case SET_THEME_MODE:
            return {
                ...state,
                actualThemeMode: action.payload
            }
        default: 
            return state
    }
}