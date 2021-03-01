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
        <div>
            <Div fontsize='1.5rem'>{`${date.hour}:${date.min}`}</Div>
            <Div fortsize='1rem'>{`${date.day}-${date.month}-${date.year}`}</Div>
        </div>
    )
}