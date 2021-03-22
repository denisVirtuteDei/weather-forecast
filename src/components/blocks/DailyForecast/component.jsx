import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Carousel } from './style'

import DailyForecastItem from '@/components/blocks/DailyForecastItem'
import DailyForecastSuspense from '@/components/blocks/DailyForecastSuspense'

import { getCityWeatherForecast } from '@/actions/cityForecast'

const DailyForecast = () => {
  const dispatch = useDispatch()
  const geolocation = useSelector(state => state.geolocation)
  const fsettings = useSelector(state => state.forecast.forecastSettings)
  const dailyForecastList = useSelector(state => state.forecast.cityForecast)

  if (!dailyForecastList.length) return <DailyForecastSuspense />

  useEffect(() => {
    if (geolocation.isInfoLoaded)
      dispatch(getCityWeatherForecast(geolocation.city, fsettings.forecastApi))
  }, [])

  useEffect(() => {
    if (geolocation.city.length > 0) {
      dispatch(getCityWeatherForecast(geolocation.city, fsettings.forecastApi))
    }
  }, [geolocation.city, fsettings.forecastApi])

  return (
    <Carousel options={{ freeScroll: true, contain: true, prevNextButtons: false }}>
      {dailyForecastList.map((el, index) => {
        return (
          <DailyForecastItem
            key={`${el.dayTime} ${geolocation.city}`}
            fsettings={fsettings}
            index={index}
            {...el}
          />
        )
      })}
    </Carousel>
  )
}

export default DailyForecast
