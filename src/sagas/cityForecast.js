import { takeEvery, put, call } from 'redux-saga/effects';

import {
    GET_CITY_FORECAST_REQUEST,
    setCityForecast
} from '../actions/cityForecast';

import {getForecastByCityName} from '../services/axiosRequests';

import { filteringDailyForecast } from '../utils/dailyForecastFiltering';

function* getCityForecastWorker({ payload }) {
    const response = yield call(getForecastByCityName, payload);
    const dailyForecastList = yield call(filteringDailyForecast, response.data);
    yield put(setCityForecast(dailyForecastList));
}

export function* getCityForecastRequestWatcher() {
    yield takeEvery(
        GET_CITY_FORECAST_REQUEST,
        getCityForecastWorker
    );
}