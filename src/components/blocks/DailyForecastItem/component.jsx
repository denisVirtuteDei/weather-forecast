import React from 'react'
import moment from 'moment'

import { 
    CenteredDiv, 
    TodayDiv, 
    WeatherIcon 
} from './style'

import {
    tempToAcceptableForm,
    celsiusToFahrenheit
} from '../../../utils/weatherDataMappers'

import { 
    CELSIUS_TEMP_UNIT, 
    MILLISECONDS_IN_SECONDS 
} from '../../../constants'



export default (props) => {

    const weekday = moment(props.dayTime * MILLISECONDS_IN_SECONDS).format('ddd');
    const weatherIcon = props.weather.icon;
    const weatherDesc = props.weather.description;
    const temp = props.fsettings.tempUnit === CELSIUS_TEMP_UNIT ?
        tempToAcceptableForm(props.temp) :
        tempToAcceptableForm(celsiusToFahrenheit(props.temp));

    return (
        props.index === 0
            ? (
                <CenteredDiv>
                    <TodayDiv>
                        <div className='icon'>
                            <WeatherIcon 
                                src={weatherIcon} 
                                alt={weatherDesc} 
                                api={props.fsettings.forecastApi} 
                            />
                        </div>
                        <div>{weekday}</div>
                        <div>{temp}</div>
                    </TodayDiv>
                </CenteredDiv>
            ) : (
                <CenteredDiv>
                    <div>{weekday}</div>
                    <div>
                        <WeatherIcon 
                            src={weatherIcon} 
                            alt={weatherDesc} 
                            api={props.fsettings.forecastApi} 
                        />
                    </div>
                    <div>{temp}</div>
                </CenteredDiv>
            )
    )
}