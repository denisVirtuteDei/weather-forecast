import React, { useState, useEffect } from 'react';
import { CenteredDiv, TodayDiv, WeatherIcon } from './style';

const toShortWeekday = date => date.toLocaleDateString('en', { weekday: 'short' }).toUpperCase();
const tempToAcceptableForm = temp => `${temp}℃`;

export default (props) => {

    const [weekday, setWeekday] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [weatherIconDesc, setWeatherIconDesc] = useState(null);
    const [temp, setTemp] = useState(null);

    useEffect(() => {
        setWeekday(toShortWeekday(new Date(props.dt)));
        setWeatherIcon(props.weather[0].icon);
        setWeatherIconDesc(props.weather[0].description);
        setTemp(tempToAcceptableForm(props.main.temp));
    }, [])


    return (
        props.index === 0
            ? (
                <CenteredDiv>
                    <TodayDiv>
                        <div className='icon'>
                            <WeatherIcon src={weatherIcon} alt={weatherIconDesc} />
                        </div>
                        <div>{weekday}</div>
                        <div>{temp}</div>
                    </TodayDiv>
                </CenteredDiv>
            ) : (
                <CenteredDiv>
                    <div>{weekday}</div>
                    <div>
                        <WeatherIcon src={weatherIcon} alt={weatherIconDesc} />
                    </div>
                    <div>{temp}</div>
                </CenteredDiv>
            )
    )
}