import React from 'react';

import WeatherApiToggle from '../blocks/WeatherApiToggle'
import TemperatureApiToggle from '../blocks/TemperatureUnitToggle'


const TemperatureUnitToggle = () => (
    <>
        <WeatherApiToggle />
        <TemperatureApiToggle />
    </>
)


export default TemperatureUnitToggle;