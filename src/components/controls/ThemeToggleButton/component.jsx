import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Button from './style'

import { setThemeMode } from '@actions/themeMode'

import { DARK_THEME_MODE, LIGHT_THEME_MODE } from '@/constants'


export const ThemeSwitchButton = (props) => {
    const dispatch = useDispatch()
    const themeMode = useSelector(state => state.themeMode.actualThemeMode)

    const themeToggler = () => {
        themeMode === LIGHT_THEME_MODE
            ? dispatch(setThemeMode(DARK_THEME_MODE))
            : dispatch(setThemeMode(LIGHT_THEME_MODE))
    }

    return (
        <Button onClick={themeToggler} >
            Switch Theme
        </Button>
    )
}