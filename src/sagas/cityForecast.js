import { takeEvery, put, call } from 'redux-saga/effects';

import {
    GET_CITY_FORECAST_REQUEST,
    setCityForecast
} from '../actions/cityForecast';

import { getDailyForecast, getForecastByCityName } from '../services';

function* getCityForecastWorker({ payload }) {
    const response = yield call(getForecastByCityName, payload);
    const dailyForecastList = yield call(getDailyForecast, response.data);
    yield put(setCityForecast(dailyForecastList));
}

export function* getCityForecastRequestWatcher() {
    yield takeEvery(
        GET_CITY_FORECAST_REQUEST,
        getCityForecastWorker
    );
}