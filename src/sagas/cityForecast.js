import { takeEvery, put, call } from 'redux-saga/effects'

import {
    GET_CITY_WEATHER_FORECAST_REQUEST,
    setCityWeatherForecast
} from '@actions/cityForecast'

import { mapWeatherForecastData } from '@utils/weatherDataMappers'

import { getWeatherForecastByCityName } from '@services/axiosRequests'


export function* getCityWeatherForecastRequestWatcher() {
    yield takeEvery(
        GET_CITY_WEATHER_FORECAST_REQUEST,
        getCityWeatherForecastWorker
    );
}

function* getCityWeatherForecastWorker({ payload }) {
    try {
        const response = yield call(getWeatherForecastByCityName, payload.cityName, payload.fapi)
        const dailyWeatherDataList = yield call(mapWeatherForecastData, response.data, payload.fapi)
        yield put(setCityWeatherForecast(dailyWeatherDataList))
    } catch (error) {

    }
    
}