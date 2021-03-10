import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';

import { makeStyles } from '@material-ui/core/styles';

import { setForecastApi, setTemperatureUnit } from '../../../actions/cityForecast';

import {
    CELSIUS_TEMP_UNIT,
    FAHRENHEIT_TEMP_UNIT,
    OPEN_WEATHER_MAP_API,
    WEATHER_BIT_API,
} from '../../../constants';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Footer = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const fsettings = useSelector(state => state.forecast.forecastSettings);

    const handleApiToggle = event => {
        dispatch(setForecastApi(event.target.value));
    }

    const handleTempUnitToggle = event => {
        dispatch(setTemperatureUnit(event.target.value));
    }

    return (
        <>
            <FormControl className={classes.formControl}>
                <Select
                    labelId="select-fapi-label"
                    id="select-fapi"
                    value={fsettings.forecastApi}
                    onChange={handleApiToggle}
                >
                    <MenuItem value={OPEN_WEATHER_MAP_API}>openweathermap</MenuItem>
                    <MenuItem value={WEATHER_BIT_API}>weatherbit</MenuItem>
                </Select>
                <FormHelperText>Choose ur fapi</FormHelperText>
            </FormControl>
            <FormControl className={classes.formControl}>
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
        </>
    );
}


export default Footer;