import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { FormControlLabel, Switch } from './style'

import { setThemeMode } from '@actions/themeMode'

import { DARK_THEME_MODE, LIGHT_THEME_MODE } from '@/constants'


export const ThemeToggler = (props) => {
    const dispatch = useDispatch()
    const [isDarkMode, setIsDarkMode] = useState(false)
    const themeMode = useSelector(state => state.themeMode.actualThemeMode)

    useEffect(() => {
        themeMode === LIGHT_THEME_MODE
            ? setIsDarkMode(false)
            : setIsDarkMode(true)
    }, [])

    const handleThemeToggler = event => {
        setIsDarkMode(event.target.checked)
        themeMode === LIGHT_THEME_MODE
            ? dispatch(setThemeMode(DARK_THEME_MODE))
            : dispatch(setThemeMode(LIGHT_THEME_MODE))
    }

    return (
        <FormControlLabel
            label='Dark theme'
            control={
                <Switch onChange={handleThemeToggler} checked={isDarkMode} />
            }
        />
    )
}