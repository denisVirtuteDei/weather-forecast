import React, { useEffect, useState } from 'react'
import { datetimeCalculation } from '../../../services'


export const DateTime = (props) => {

    const [date, setDate] = useState(datetimeCalculation());

    useEffect(() => {
        const timerId = setInterval(() => {
            setDate(datetimeCalculation());
        }, 1000)

        return () => clearInterval(timerId);
    })

    return (
        <div>
            <div style={{ fontSize: 30 }}> {`${date.hour}:${date.min}`} </div>
            <div style={{ fontSize: 24 }}> {`${date.day}-${date.month}-${date.year}`} </div>
        </div>
    )
}