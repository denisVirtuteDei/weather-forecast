import React from 'react'
import moment from 'moment'
import PropTypes from 'prop-types'

import { CenteredDiv, TodayDiv, WeatherIcon } from './style'

import { tempToAcceptableForm, celsiusToFahrenheit } from '@/utils/weatherDataMappers'

import { CELSIUS_TEMP_UNIT } from '@/constants'
import { Typography } from '@material-ui/core'

const DailyForecastItem = props => {
  const MILLISECONDS_IN_SECONDS = 1000

  const weatherDesc = props.weather.description
  const weatherIconCode = props.weather.icon || 'unknown'
  const weekday = moment(props.dayTime * MILLISECONDS_IN_SECONDS).format('ddd')
  const temp =
    props.fsettings.tempUnit === CELSIUS_TEMP_UNIT
      ? tempToAcceptableForm(props.temp)
      : tempToAcceptableForm(celsiusToFahrenheit(props.temp))

  return props.index === 0 ? (
    <CenteredDiv>
      <TodayDiv>
        <div className='icon'>
          <WeatherIcon src={`icons/${weatherIconCode}.png`} alt={weatherDesc} />
        </div>
        <Typography variant='h4'>{weekday}</Typography>
        <Typography variant='h5'>{temp}&deg;</Typography>
      </TodayDiv>
    </CenteredDiv>
  ) : (
    <CenteredDiv>
      <Typography variant='subtitle1'>{weekday}</Typography>
      <div>
        <WeatherIcon src={`icons/${weatherIconCode}.png`} alt={weatherDesc} />
      </div>
      <Typography variant='subtitle1'>{temp}&deg;</Typography>
    </CenteredDiv>
  )
}

DailyForecastItem.propTypes = {
  temp: PropTypes.number,
  index: PropTypes.number,
  weather: PropTypes.object,
  dayTime: PropTypes.object,
  fsettings: PropTypes.object,
}

export default DailyForecastItem
