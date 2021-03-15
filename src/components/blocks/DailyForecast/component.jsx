import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Grid } from '@material-ui/core';

import DailyForecastItem from '../DailyForecastItem';
import DailyForecastSuspense from '../DailyForecastSuspense';

import { getCityWeatherForecast } from '../../../actions/cityForecast';


export const DailyForecast = (props) => {

    const dispatch = useDispatch();
    const geolocation = useSelector(state => state.geolocation);
    const fsettings = useSelector(state => state.forecast.forecastSettings);
    const dailyForecastList = useSelector(state => state.forecast.cityForecast);

    useEffect(() => {
        if (geolocation.isInfoLoaded)
            dispatch(getCityWeatherForecast(geolocation.city));
    }, [])

    useEffect(() => {
        if (geolocation.city.length > 0) {
            dispatch(getCityWeatherForecast({
                cityName: geolocation.city,
                fapi: fsettings.forecastApi
            }));
        }
    }, [geolocation.city, fsettings.forecastApi])


    if (!dailyForecastList.length) return <DailyForecastSuspense />

    return (
        <>
            {
                dailyForecastList.map((el, index) => {
                    return (
                        <DailyForecastItem
                            key={`${el.dayTime} ${geolocation.city}`}
                            fsettings={fsettings}
                            index={index}
                            {...el}
                        />
                    )
                })
            }
        </>
    )
}

{/* <Grid item md={2} xl={3} xs={4} >
                            
                        </Grid> */}