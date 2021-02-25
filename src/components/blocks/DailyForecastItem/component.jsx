import React, { useState, useEffect } from 'react';
import { CenteredDiv, TodayDiv } from './style';

const toShortWeekday = date => date.toLocaleDateString('en', { weekday: 'short' }).toUpperCase();
const tempToAcceptableForm = temp => `${temp}℃`;

export default (props) => {

    const [weekday, setWeekday] = useState(null);
    const [weatherIconId, setWeatherIconId] = useState(null);
    const [temp, setTemp] = useState(null);

    useEffect(() => {
        setWeekday(toShortWeekday(new Date(props.dt)));
        setWeatherIconId(props.weather[0].description);
        setTemp(tempToAcceptableForm(props.main.temp));
    }, [])


    return (
        props.index === 0
            ? (
                <CenteredDiv>
                    <TodayDiv>
                        <div className='icon'>{weatherIconId}</div>
                        <div>{weekday}</div>
                        <div>{temp}</div>
                    </TodayDiv>
                </CenteredDiv>
            ) : (
                <CenteredDiv>
                    <div>{weekday}</div>
                    <div>{weatherIconId}</div>
                    <div>{temp}</div>
                </CenteredDiv>
            )
    )
}