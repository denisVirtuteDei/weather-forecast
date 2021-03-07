import React from 'react';

import { CenteredDiv, TodayDiv, WeatherIcon } from './style';

import {
    epochToShortWeekday,
    tempToAcceptableForm
} from '../../../utils/dailyForecastMappers';


export default (props) => {

    const weekday = epochToShortWeekday(props.dt);
    const weatherIcon = props.weather[0].icon;
    const weatherDesc = props.weather[0].description;
    const temp = tempToAcceptableForm(props.main.temp);

    return (
        props.index === 0
            ? (
                <CenteredDiv>
                    <TodayDiv>
                        <div className='icon'>
                            <WeatherIcon src={weatherIcon} alt={weatherDesc} />
                        </div>
                        <div>{weekday}</div>
                        <div>{temp}</div>
                    </TodayDiv>
                </CenteredDiv>
            ) : (
                <CenteredDiv>
                    <div>{weekday}</div>
                    <div>
                        <WeatherIcon src={weatherIcon} alt={weatherDesc} />
                    </div>
                    <div>{temp}</div>
                </CenteredDiv>
            )
    )
}