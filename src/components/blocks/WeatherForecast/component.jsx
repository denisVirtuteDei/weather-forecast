import React from 'react';
import { Grid } from '@material-ui/core';

import UserMenu from '../UserMenu';
import CurrentCity from '../CurrentCity';
import DateTime from '../CurrentDateTime';
import {CenteredImgGrid} from './style';
import DailyForecast from '../DailyForecast';
import { CENTERED_PAPER_IMG } from '../../../constants';



export const WeatherForecastPaper = (props) => {

    return (
        <CenteredImgGrid container spacing={3} direction='column' justify='space-between' img={CENTERED_PAPER_IMG}>
            <Grid item xs container style={{ maxHeight: '45%' }}>
                <Grid item xs={12} container justify='flex-end'>
                    <UserMenu />
                </Grid>
                <Grid item xs={12} container justify='space-around'>
                    <DateTime />
                    <CurrentCity />
                </Grid>
            </Grid>
            <Grid item xs container alignItems='stretch' justify='space-between' style={{ maxHeight: '40%' }}>
                <DailyForecast />
            </Grid>
        </CenteredImgGrid>
    )
}