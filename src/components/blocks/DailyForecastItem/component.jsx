import React from 'react'
import moment from 'moment'

import { CenteredDiv, TodayDiv, WeatherIcon } from './style'

import { tempToAcceptableForm, celsiusToFahrenheit } from '@/utils/weatherDataMappers'

import { CELSIUS_TEMP_UNIT } from '@/constants'

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
        <div className='weekday'>{weekday}</div>
        <div className='temperature'>{temp}</div>
      </TodayDiv>
    </CenteredDiv>
  ) : (
    <CenteredDiv>
      <div>{weekday}</div>
      <div>
        <WeatherIcon src={`icons/${weatherIconCode}.png`} alt={weatherDesc} />
      </div>
      <div>{temp}</div>
    </CenteredDiv>
  )
}

export default DailyForecastItem
