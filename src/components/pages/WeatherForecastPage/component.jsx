import React from 'react'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import { ReducedGrid } from './style'

import DateTime from '@blocks/CurrentDateTime'
import DailyForecast from '@blocks/DailyForecast'
import CenteredImgDiv from '@blocks/CenteredImgDiv'

import UserMenu from '@controls/UserMenu'
import CurrentCity from '@controls/CurrentCity'
import WeatherApiToggle from '@controls/WeatherApiToggle'
import TemperatureUnitToggle from '@controls/TemperatureUnitToggle'



export const WeatherForecastPaper = (props) => {

    return (
        <CenteredImgDiv>
            <Grid className='weather-forecast-container' container direction='column'>
                <ReducedGrid item xs>
                    <Grid item xs container justify='flex-end' >
                        <UserMenu />
                    </Grid>
                    <Grid className='geo-info-container' item xs container >
                        <Grid
                            className='datetime-container'
                            item sm
                            container
                            alignItems='baseline'
                        >
                            <DateTime />
                        </Grid>
                        <Grid
                            className='current-city-container'
                            item sm
                            container
                            justify='flex-end'
                            alignItems='baseline'
                        >
                            <CurrentCity />
                        </Grid>
                    </Grid>
                </ReducedGrid>
                <ReducedGrid item xs container >
                    <Grid className='daily-forecast-container' item xs={12}>
                        <DailyForecast />
                    </Grid>
                    <Grid
                        className='settings-block-divider'
                        item xs={12}
                        container
                        alignItems='center'
                    >
                        <Divider />
                    </Grid>
                    <Grid
                        className='settings-block-grid'
                        item xs={12}
                        container
                        alignItems='baseline'
                        justify='space-evenly'
                    >
                        <WeatherApiToggle />
                        <TemperatureUnitToggle />
                    </Grid>
                </ReducedGrid>
            </Grid>
        </CenteredImgDiv>
    )
}