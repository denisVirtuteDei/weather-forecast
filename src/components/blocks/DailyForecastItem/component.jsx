import React from 'react';

import { CenteredDiv, TodayDiv, WeatherIcon } from './style';

import {
    epochToShortWeekday,
    tempToAcceptableForm
} from '../../../utils/dailyForecastMappers';

import { CELSIUS_TEMP_UNIT } from '../../../constants';

const celsiusToFahrenheit = tempValue => Math.round(tempValue * 1.8 + 32)


export default (props) => {

    const weekday = epochToShortWeekday(props.dayTime);
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