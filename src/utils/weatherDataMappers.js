import { OPEN_WEATHER_MAP_API_NAME, WEATHER_BIT_API_NAME } from "@/constants"

export const mapWeatherForecastData = (weatherForecastData, fapi) => {
    switch (fapi) {
        case WEATHER_BIT_API_NAME:
            return weatherForecastData.data.map(el => ({
                weather: el.weather,
                temp: el.temp,
                dayTime: el.ts
            }));
        case OPEN_WEATHER_MAP_API_NAME:
            return weatherForecastData.list
                .filter((el) => el.dt_txt.includes("15:00:00"))
                .map(el => ({
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
}

export const celsiusToFahrenheit = tempValue => Math.round(tempValue * 1.8 + 32)

export const tempToAcceptableForm = tempValue => `${Math.round(tempValue)}°`