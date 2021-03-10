import {
    WEATHER_BIT_API,
    OPEN_WEATHER_MAP_API,
    WEATHER_BIT_ICON_API_POINT,
    OPEN_WEATHER_MAP_ICON_API_POINT,
} from "../constants"


export const mappingUserData = data => ({
    name: data.displayName,
    email: data.email
})

export const mappingIconUrl = (src, api) => {
    switch (api) {
        case OPEN_WEATHER_MAP_API:
            return OPEN_WEATHER_MAP_ICON_API_POINT + `${src}@2x.png`
        case WEATHER_BIT_API:
            return WEATHER_BIT_ICON_API_POINT + `${src}.png`
        default:
            return OPEN_WEATHER_MAP_ICON_API_POINT + `${src}@2x.png`
    }
}

export const mappingUserErrorInfo = err => ({
    errInfo: err.message
})