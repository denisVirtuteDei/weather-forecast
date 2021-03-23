import React, { useEffect, useState } from 'react'
import moment from 'moment'

import { DatetimeWrapper } from './style'
import { Typography } from '@material-ui/core'

const CurrentDatetime = () => {
  const [date, setDate] = useState(moment())

  useEffect(() => {
    const timerId = setInterval(() => {
      setDate(moment())
    }, 1000)
    return () => clearInterval(timerId)
  }, [])

  return (
    <DatetimeWrapper>
      <Typography variant='h4'>{date.format('HH:mm')}</Typography>
      <Typography variant='h5'>{date.format('ddd, DD MMMM YYYY')}</Typography>
    </DatetimeWrapper>
  )
}

export default CurrentDatetime
