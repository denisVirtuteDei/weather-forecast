import React from 'react'
import { Grid } from '@material-ui/core'

import { CenteredGrid } from './style'
import { MainBox } from '../MainBox/MainBox'
import { UserMenu } from '../UserMenu/UserMenu'
import { DateTime } from '../CurrentDateTime/DateTime'
import { CurrentCity } from '../CurrentCity/CurrentCity'
import DailyForecast from '../DailyForecast'


export const WeatherForecastPaper = (props) => {

    return (
        <MainBox>
            <CenteredGrid container spacing={2}>
                <Grid item md={12} container style={{ maxHeight: '45%' }}>
                    <Grid item xs={12} container justify='flex-end'>
                        <UserMenu />
                    </Grid>
                    <Grid item xs={12} container justify='space-around'>
                        <DateTime />
                        <CurrentCity />
                    </Grid>
                </Grid>
                <Grid item xs={12} container alignItems='stretch' justify='space-between'>
                    <DailyForecast />
                </Grid>
            </CenteredGrid>
        </MainBox>
    )
}