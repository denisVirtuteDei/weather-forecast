import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import { UserMenu } from '../userMenu/UserMenu'
import { MyGrid } from './style'


export const WeatherForecastPaper = (props) => {

    return (
        <MyGrid container spacing={2} direction="row">
            <Grid item xs container justify='flex-end'>
                <UserMenu />
            </Grid>
            <Grid item xs={12} container >
                <Grid item xs={6} container direction='column' alignItems='center'>
                    <Typography gutterBottom variant="subtitle1">
                        Current time
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Current date
                    </Typography>
                </Grid>
                <Grid item xs={6} container justify='flex-end'>
                    <Typography variant="subtitle1">
                        Current sity
                    </Typography>
                </Grid>
            </Grid>
            <Grid item xs container alignItems='center' >
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
    )
}