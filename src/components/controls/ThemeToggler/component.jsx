import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Switch } from '@material-ui/core'

import { setThemeMode } from '@/actions/themeMode'

import { DARK_THEME_MODE, LIGHT_THEME_MODE } from '@/constants'

const ThemeToggler = () => {
  const dispatch = useDispatch()
  const [isDarkMode, setIsDarkMode] = useState(false)
  const themeMode = useSelector(state => state.theme.themeMode)

  useEffect(() => {
    setIsDarkMode(() => themeMode === DARK_THEME_MODE)
  }, [])

  const handleThemeToggler = event => {
    setIsDarkMode(() => event.target.checked)
    themeMode === LIGHT_THEME_MODE
      ? dispatch(setThemeMode(DARK_THEME_MODE))
      : dispatch(setThemeMode(LIGHT_THEME_MODE))
  }

  return <Switch onChange={handleThemeToggler} checked={isDarkMode} />
}

export default ThemeToggler
