import React, { useEffect } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { getCityForecast } from '../../../actions/cityForecast';

//import DailyForecastSuspense from '../DailyForecastSuspense';


export const DailyForecast = (props) => {

    const dailyForecastList = useSelector(state => state.forecast.cityForecast);
    const geolocation = useSelector(state => state.geolocation.userGeolocation);
    const dispatch = useDispatch();

    useEffect(() => {
        if (Object.keys(geolocation).length) {
            dispatch(getCityForecast(geolocation.city));
        }
    }, [geolocation.city])

    //if (1 > 0) return (<DailyForecastSuspense />)

    return (
        <>
            {
                dailyForecastList.map((el, index) => {

                    return (
                        index === 0 ? (
                            <Grid item xs={4} container justify='center'>
                                <div>{ }</div>
                            </Grid>
                        ) : (
                                <Typography variant="subtitle1">
                                    Tomorrow
                                </Typography>
                            )
                    )
                })
            }
        </>
    )
}