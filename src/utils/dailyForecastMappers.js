import { MILLISECONDS_IN_SECONDS, OPEN_WEATHER_MAP_API, WEATHER_BIT_API } from "../constants";

export const filteringDailyForecast = (async (data, fapi) => {
    switch (fapi) {
        case WEATHER_BIT_API:
            return await data.data.map(el => ({
                weather: el.weather,
                temp: el.temp,
                dayTime: el.ts
            }));
        case OPEN_WEATHER_MAP_API:
            return await data.list.filter((el) => el.dt_txt.includes("15:00:00")).map(el => ({
                weather: el.weather[0],
                temp: el.main.temp,
                dayTime: el.dt
            }));
        default:
            return {
                weather: {},
                temp: '',
                dayTime: '',
            }
    }
})

export const epochToShortWeekday = dayTime => {
    const date = new Date(dayTime * MILLISECONDS_IN_SECONDS);
    return date.toLocaleDateString('en', { weekday: 'short' }).toUpperCase();
}

export const tempToAcceptableForm = temp => `${Math.round(temp)}°`;