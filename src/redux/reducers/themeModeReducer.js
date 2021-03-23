import { SET_THEME_MODE } from '@/actions/themeMode'

import { LIGHT_THEME_MODE } from '@/constants'

const initThemeModeState = {
  themeMode: LIGHT_THEME_MODE,
}

export default (state = initThemeModeState, action) => {
  switch (action.type) {
    case SET_THEME_MODE:
      return {
        ...state,
        themeMode: action.payload,
      }
    default:
      return state
  }
}
