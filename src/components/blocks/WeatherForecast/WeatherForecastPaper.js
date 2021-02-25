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
            <CenteredGrid container spacing={3} direction='column' justify='space-between'>
                <Grid item xs container style={{ maxHeight: '45%' }}>
                    <Grid item xs={12} container justify='flex-end'>
                        <UserMenu />
                    </Grid>
                    <Grid item xs={12} container justify='space-around'>
                        <DateTime />
                        <CurrentCity />
                    </Grid>
                </Grid>
                <Grid item xs container alignItems='stretch' justify='space-between'  style={{ maxHeight: '40%' }}>
                    <DailyForecast />
                </Grid>
            </CenteredGrid>
        </MainBox>
    )
}