import {
    WEATHER_BIT_API_NAME,
    OPEN_WEATHER_MAP_API_NAME,
    WEATHER_BIT_ICON_API_POINT,
    OPEN_WEATHER_MAP_ICON_API_POINT,
} from "../constants"

export const mappingIconUrl = (src, api) => {
    switch (api) {
        case OPEN_WEATHER_MAP_API_NAME:
            return OPEN_WEATHER_MAP_ICON_API_POINT + `${src}@2x.png`
        case WEATHER_BIT_API_NAME:
            return WEATHER_BIT_ICON_API_POINT + `${src}.png`
        default:
            return OPEN_WEATHER_MAP_ICON_API_POINT + `${src}@2x.png`
    }
}