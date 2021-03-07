import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import DailyForecastItem from '../DailyForecastItem';
import DailyForecastSuspense from '../DailyForecastSuspense';

import { getCityForecast } from '../../../actions/cityForecast';


export const DailyForecast = (props) => {

    const dailyForecastList = useSelector(state => state.forecast.cityForecast);
    const geolocation = useSelector(state => state.geolocation);
    const dispatch = useDispatch();

    useEffect(() => {
        if (geolocation.isInfoLoaded)
            dispatch(getCityForecast(geolocation.city));
    }, [])

    useEffect(() => {
        if (geolocation.city.length > 0)
            dispatch(getCityForecast(geolocation.city));
    }, [geolocation.city])


    if (!dailyForecastList.length) return <DailyForecastSuspense />

    return (
        <>
            { 
                dailyForecastList.map((el, index) => {
                    return <DailyForecastItem key={`${el.dt} ${geolocation.city}`} index={index} {...el} />
                })
            }
        </>
    )
}