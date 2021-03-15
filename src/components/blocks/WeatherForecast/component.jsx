import React from 'react'

import Grid from '@material-ui/core/Grid'

import { ReducedGrid } from './style'

import UserMenu from '../UserMenu'
import CurrentCity from '../CurrentCity'
import DateTime from '../CurrentDateTime'
import CenteredImgDiv from '../CenteredImgDiv'
import SettingsBlockWrapper from '../../wrappers/SettingsBlockWrapper'
import { Divider } from '@material-ui/core'
import { WeatherForecastCarousel } from '../WeatherForecastCarousel/component'



export const WeatherForecastPaper = (props) => {

    return (
        <CenteredImgDiv>
            <Grid className='weather-forecast-container' container xs direction='column'>
                <ReducedGrid item xs>
                    <Grid item xs container justify='flex-end' >
                        <UserMenu />
                    </Grid>
                    <Grid className='geo-info-container' item xs container >
                        <Grid
                            className='datetime-container'
                            item xs={6}
                            container
                            justify='center'
                            alignItems='baseline'
                        >
                            <DateTime />
                        </Grid>
                        <Grid
                            className='current-city-container'
                            item xs={6}
                            container
                            justify='flex-end'
                            alignItems='baseline'
                        >
                            <CurrentCity />
                        </Grid>
                    </Grid>
                </ReducedGrid>
                <ReducedGrid item xs container >
                    <Grid className='daily-forecast-container' item md={12}>
                        <WeatherForecastCarousel />
                    </Grid>
                    <Grid className='settings-block-divider' item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid
                        className='settings-block-grid'
                        item xs={12}
                        container
                        alignItems='baseline'
                        justify='space-around'
                    >
                        <SettingsBlockWrapper />
                    </Grid>
                </ReducedGrid>
            </Grid>
        </CenteredImgDiv>
    )
}