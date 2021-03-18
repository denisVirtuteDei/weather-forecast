import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { DatetimeDivWrapper } from './style'


export const DateTime = (props) => {

	const [date, setDate] = useState(moment())

	useEffect(() => {
		const timerId = setInterval(() => { setDate(moment()) }, 1000)
		return () => clearInterval(timerId)
	}, [])

	return (
		<DatetimeDivWrapper>
			<div className='time-div'>{date.format('HH:mm')}</div>
			<div className='date-div'>{date.format('ddd, DD MMMM YYYY')}</div>
		</DatetimeDivWrapper>
	)
}