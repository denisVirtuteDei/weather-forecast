import React, { useState, useEffect } from 'react';
//import { useSelector } from 'react-redux';
import { CenteredDiv, TodayDiv, WeatherIcon } from './style';

const epochToShortWeekday = dt => {
    const date = new Date(dt * 1000);
    return date.toLocaleDateString('en', { weekday: 'short' }).toUpperCase();
}
const tempToAcceptableForm = temp => `${Math.round(temp)}°`;

export default (props) => {

    const [weekday, setWeekday] = useState(null);
    const [weatherIcon, setWeatherIcon] = useState(null);
    const [weatherDesc, setWeatherDesc] = useState(null);
    const [temp, setTemp] = useState(null);

    useEffect(() => {
        setWeekday(epochToShortWeekday(props.dt));
        setWeatherIcon(props.weather[0].icon);
        setWeatherDesc(props.weather[0].description);
        setTemp(tempToAcceptableForm(props.main.temp));
    }, [])


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