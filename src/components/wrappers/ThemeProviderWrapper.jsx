import React from 'react'
import { useSelector } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '@/globalStyles'

import { lightMainTheme, darkTheme } from '@/theme'

import { LIGHT_THEME_MODE } from '@constants'

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