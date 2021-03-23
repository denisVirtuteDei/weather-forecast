import React from 'react'

import { ReducedGrid } from './style'

import Grid from '@material-ui/core/Grid'
import Divider from '@material-ui/core/Divider'

import Appbar from '@/components/blocks/Appbar'
import DateTime from '@/components/blocks/CurrentDatetime'
import DailyForecast from '@/components/blocks/DailyForecast'
import CenteredImgDiv from '@/components/blocks/CenteredImgDiv'

import CurrentCity from '@/components/controls/CurrentCity'
import WeatherApiToggle from '@/components/controls/WeatherApiToggle'
import TemperatureUnitToggle from '@/components/controls/TemperatureUnitToggle'

const WeatherForecastPage = () => (
  <CenteredImgDiv>
    <Grid className='weather-forecast-container' container direction='column'>
      <ReducedGrid item xs>
        <Grid item xs container justify='flex-end'>
          <Appbar />
        </Grid>
        <Grid className='geo-info-container' item xs container>
          <Grid 
            className='datetime-container' 
            item 
            sm 
            container 
            alignItems='baseline'
          >
            <DateTime />
          </Grid>
          <Grid
            className='current-city-container'
            item
            sm
            container
            justify='flex-end'
            alignItems='baseline'
          >
            <CurrentCity />
          </Grid>
        </Grid>
      </ReducedGrid>
      <ReducedGrid item xs container>
        <Grid className='daily-forecast-container' item xs={12}>
          <DailyForecast />
        </Grid>
        <Grid 
          className='settings-block-divider' 
          item 
          xs={12} 
          container 
          alignItems='center'
        >
          <Divider />
        </Grid>
        <Grid
          className='settings-block-grid'
          item
          xs={12}
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

export default WeatherForecastPage
