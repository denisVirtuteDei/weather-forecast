import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setWeatherForecastApiName } from '../../../actions/cityForecast'

import { FormControl, FormHelperText, Grid, MenuItem, Select } from '@material-ui/core'
import { OPEN_WEATHER_MAP_API_NAME, WEATHER_BIT_API_NAME } from '../../../constants'

export const WeatherApiToggle = (props) => {

    const dispatch = useDispatch()
    const fsettings = useSelector(state => state.forecast.forecastSettings)

    const handleApiToggle = event => {
        dispatch(setWeatherForecastApiName(event.target.value))
    }

    return (
        <Grid item xs>
            <FormControl>
                <Select
                    labelId="select-fapi-label"
                    id="select-fapi"
                    value={fsettings.forecastApi}
                    onChange={handleApiToggle}
                >
                    <MenuItem value={OPEN_WEATHER_MAP_API_NAME}>openweathermap</MenuItem>
                    <MenuItem value={WEATHER_BIT_API_NAME}>weatherbit</MenuItem>
                </Select>
                <FormHelperText>Choose ur fapi</FormHelperText>
            </FormControl>
        </Grid>
    )
}