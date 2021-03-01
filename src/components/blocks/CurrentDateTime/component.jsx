import React, { useEffect, useState } from 'react';

import { Div } from './style';

import { datetimeCalculation } from '../../../utils/datetimeCalculation';


export const DateTime = (props) => {

    const [date, setDate] = useState({});

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(datetimeCalculation());
        }, 1000)

        return () => clearInterval(timerId);
    }, [])

    return (
        <Div>
            <div className='time-div'>{`${date.hour}:${date.min}`}</div>
            <div className='date-div'>{`${date.day}-${date.month}-${date.year}`}</div>
        </Div>
    )
}