import { takeEvery, put, call } from 'redux-saga/effects'

import { setErrorInfo } from '@/actions/error'
import {
    GET_CITY_WEATHER_FORECAST_REQUEST,
    setCityWeatherForecast,
} from '@/actions/cityForecast'

import { mapWeatherForecastData } from '@/utils/weatherDataMappers'

import { getWeatherForecastByCityName } from '@/services/axiosRequests'

export function* getCityWeatherForecastRequestWatcher() {
    yield takeEvery(
        GET_CITY_WEATHER_FORECAST_REQUEST,
        getCityWeatherForecastWorker
    )
}

function* getCityWeatherForecastWorker({ payload }) {
    try {
        const response = yield call(getWeatherForecastByCityName, payload.cityTitle, payload.apiName)
        const dailyWeatherDataList = yield call(mapWeatherForecastData, response.data, payload.apiName)
        yield put(setCityWeatherForecast(dailyWeatherDataList))
    } catch (error) { 
        yield put(setErrorInfo(error.message))
    }
    
}