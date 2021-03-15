import React from 'react'

import { Carousel } from './style'

import DailyForecast from '../DailyForecast'



export const WeatherForecastCarousel = (props) => {

    return (
        <Carousel options={{ freeScroll: true }} >
            <DailyForecast />
        </Carousel>
    )
}