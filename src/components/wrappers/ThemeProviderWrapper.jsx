import React from 'react'
import { useSelector } from 'react-redux'

import { ThemeProvider } from 'styled-components'

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import GlobalStyles from '@/globalStyles'
import { lightTheme, darkTheme } from '@/theme'

import { LIGHT_THEME_MODE } from '@/constants'

import { childrenPropType, defaultChildrenProp } from '@/propTypes'

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

ThemeProviderWrapper.propTypes = childrenPropType
ThemeProviderWrapper.defaultProps = defaultChildrenProp

export default ThemeProviderWrapper
