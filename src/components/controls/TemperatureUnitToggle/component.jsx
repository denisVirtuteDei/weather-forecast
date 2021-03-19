import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'

import { setTemperatureUnit } from '@/actions/cityForecast'

import {
	CELSIUS_TEMP_UNIT,
	FAHRENHEIT_TEMP_UNIT,
} from '@/constants'


export default (props) => {

	const dispatch = useDispatch()
	const fsettings = useSelector(state => state.forecast.forecastSettings)

	const handleTempUnitToggle = event => {
		dispatch(setTemperatureUnit(event.target.value))
	}

	return (
		<FormControl>
			<Select
				labelId="select-degree-label"
				id="select-degree"
				value={fsettings.tempUnit}
				onChange={handleTempUnitToggle}
			>
				<MenuItem value={CELSIUS_TEMP_UNIT}>C</MenuItem>
				<MenuItem value={FAHRENHEIT_TEMP_UNIT}>F</MenuItem>
			</Select>
		</FormControl>
	)
}