import React from 'react'
import { useSelector } from 'react-redux'

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/globalStyles'
import { lightTheme, darkTheme } from '@/theme'

import { LIGHT_THEME_MODE } from '@/constants'

const ThemeProviderWrapper = props => {
  const themeMode = useSelector(state => state.theme.themeMode)
  const theme = themeMode === LIGHT_THEME_MODE ? lightTheme : darkTheme

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          <CssBaseline />
          {props.children}
        </>
      </ThemeProvider>
    </MuiThemeProvider>
  )
}

export default ThemeProviderWrapper
