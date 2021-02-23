import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { CenteredGrid } from './style'
import { MainBox } from '../MainBox/MainBox'
import { UserMenu } from '../UserMenu/UserMenu'
import { DateTime } from '../CurrentDateTime/DateTime'
import { CurrentCity } from '../CurrentCity/CurrentCity'


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
                <Grid item xs={12} container alignItems='center' justify='space-between'>
                    <Grid item xs={4} container justify='center'>
                        <Typography variant="subtitle1" >
                            Today
                        </Typography>
                    </Grid>
                    <Typography variant="subtitle1">
                        Tomorrow
                        </Typography>
                    <Typography variant="subtitle1">
                        3th day
                    </Typography>
                    <Typography variant="subtitle1">
                        4th day
                    </Typography>
                    <Typography variant="subtitle1">
                        5th day
                    </Typography>
                    <Typography variant="subtitle1">
                        6th day
                    </Typography>
                    <Typography variant="subtitle1">
                        7th day
                    </Typography>
                </Grid>
            </CenteredGrid>
        </MainBox>
    )
}