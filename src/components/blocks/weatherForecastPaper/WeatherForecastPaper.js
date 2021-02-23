import React from 'react'
import { Grid, Typography } from '@material-ui/core'

import { MyGrid } from './style'
import MainBox from '../MainBox/MainBox'
import { UserMenu } from '../UserMenu/UserMenu'
import { DateTime } from '../CurrentDateTime/DateTime'


export const WeatherForecastPaper = (props) => {

    return (
        <MainBox>
            <MyGrid container spacing={2}>
                <Grid item md={12} container justify='flex-end' style={{ maxHeight: '25%' }}>
                    <UserMenu />
                </Grid>
                <Grid item xs={12} container >
                    <Grid item xs={6} container direction='column' alignItems='center'>
                        <DateTime />
                    </Grid>
                    <Grid item xs={6} container justify='flex-end'>
                        <div style={{ fontSize: 24, paddingRight: 30 }}>
                            Current sity
                    </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} container alignItems='center'>
                    <Grid item sm={4} container justify='center'>
                        <Typography variant="subtitle1" >
                            Today
                    </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="subtitle1">
                            Tomorrow
                    </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="subtitle1">
                            3th day
                    </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="subtitle1">
                            4th day
                    </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="subtitle1">
                            5th day
                    </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="subtitle1">
                            6th day
                    </Typography>
                    </Grid>
                    <Grid item xs>
                        <Typography variant="subtitle1">
                            7th day
                    </Typography>
                    </Grid>
                </Grid>
            </MyGrid>
        </MainBox>
    )
}