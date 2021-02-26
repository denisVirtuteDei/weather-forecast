import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCityForecast } from '../../../actions/cityForecast';
import DailyForecastItem from '../DailyForecastItem';
import DailyForecastSuspense from '../DailyForecastSuspense';


export const DailyForecast = (props) => {

    const dailyForecastList = useSelector(state => state.forecast.cityForecast);
    const geolocation = useSelector(state => state.geolocation.userGeolocation);
    const dispatch = useDispatch();

    useEffect(() => {
        if (geolocation.city && geolocation.city !== null) {
            dispatch(getCityForecast(geolocation.city));
        }
    }, [geolocation.city])

    if (!dailyForecastList.length || !geolocation.city) {
        return <DailyForecastSuspense />
    }

    return (
        <>
            {
                dailyForecastList.map((el, index) => (
                    <DailyForecastItem key={el.dt} index={index} {...el} />
                ))
            }
        </>
    )
}