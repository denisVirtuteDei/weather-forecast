import React from 'react';

import { Grid } from '@material-ui/core';

import { ReducedGrid } from './style';

import UserMenu from '../UserMenu';
import CurrentCity from '../CurrentCity';
import DateTime from '../CurrentDateTime';
import DailyForecast from '../DailyForecast';
import SettingsFooter from '../SettingsFooter';
import CenteredImgGrid from '../CenteredImgGrid';

import { CENTERED_PAPER_IMG } from '../../../constants';


export const WeatherForecastPaper = (props) => {

    return (
        <CenteredImgGrid
            container
            spacing={3}
            direction='column'
            justify='space-between'
            img={CENTERED_PAPER_IMG}
        >
            <ReducedGrid item xs container maxheight='45%'>
                <Grid item xs={12} container justify='flex-end'>
                    <UserMenu />
                </Grid>
                <Grid item xs={12} container justify='space-around'>
                    <DateTime />
                    <CurrentCity />
                </Grid>
            </ReducedGrid>
            <ReducedGrid item xs maxheight='40%' >
                <Grid 
                    item xs={12} 
                    container
                    alignItems='stretch'
                    justify='space-between' 
                >
                    <DailyForecast />
                </Grid>
                <Grid 
                    item xs={12} 
                    container
                    alignItems='stretch'
                    justify='space-around' 
                >
                    <SettingsFooter />
                </Grid>
            </ReducedGrid>
        </CenteredImgGrid>
    )
}