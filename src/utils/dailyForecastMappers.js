import { MILLISECONDS_IN_SECONDS } from "../constants";

export const filteringDailyForecast = (async data => {
    return await data.list.filter((el) => el.dt_txt.includes("15:00:00"));
})

export const epochToShortWeekday = dayTime => {
    const date = new Date(dayTime * MILLISECONDS_IN_SECONDS);
    return date.toLocaleDateString('en', { weekday: 'short' }).toUpperCase();
}

export const tempToAcceptableForm = temp => `${Math.round(temp)}°`;