import { takeEvery, put, call } from 'redux-saga/effects';

import {
    GET_CITY_FORECAST_REQUEST,
    setCityForecast,
    setIsLoadingInfo
} from '../actions/cityForecast';

import { getForecastByCityName } from '../services/axiosRequests';

import { filteringDailyForecast } from '../utils/dailyForecastMappers';


export function* getCityForecastRequestWatcher() {
    yield takeEvery(
        GET_CITY_FORECAST_REQUEST,
        getCityForecastWorker
    );
}

function* getCityForecastWorker({ payload }) {
    try {
        yield put(setIsLoadingInfo(true));
        const response = yield call(getForecastByCityName, payload.cityName, payload.fapi);
        const dailyForecastList = yield call(filteringDailyForecast, response.data, payload.fapi);
        yield put(setCityForecast(dailyForecastList));
    } finally { 
        yield put(setIsLoadingInfo(false)); 
    }


}