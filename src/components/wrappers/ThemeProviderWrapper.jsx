import React from 'react'
import { ThemeProvider } from 'styled-components'

import { lightMainTheme, darkTheme } from '@/theme'

import GlobalStyles from '@/globalStyles'
import { LIGHT_THEME_MODE } from '@/constants'
import { useSelector } from 'react-redux'

export default (props) => {

    const themeMode = useSelector(state => state.themeMode.actualThemeMode)
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