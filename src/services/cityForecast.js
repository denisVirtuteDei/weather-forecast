import api from '../axios';
import { DEFAULT_FORECAST_API_POINT } from '../constants';

export const getForecastByCityName = name => {
    return api.get(DEFAULT_FORECAST_API_POINT);
}

export const getDailyForecast = (async data => {
    return await data.list.filter((el) => el.dt_txt.includes("15:00:00"));
})