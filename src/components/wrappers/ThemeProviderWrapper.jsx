import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/globalStyles'

import { lightMainTheme, darkTheme } from '@/theme'

import { LIGHT_THEME_MODE } from '@/constants'

const ThemeProviderWrapper = props => {
  const themeMode = useSelector(state => state.theme.themeMode)
  const theme = themeMode === LIGHT_THEME_MODE ? lightMainTheme : darkTheme

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        {props.children}
      </>
    </ThemeProvider>
  )
}

export default ThemeProviderWrapper
