import React from 'react'
import { ThemeProvider } from 'styled-components'

import { lightMainTheme } from '@/themes'

import GlobalStyles from '@/globalStyles'


export default (props) => (
    <ThemeProvider theme={lightMainTheme}>
        <>
            <GlobalStyles />
            {props.children}
        </>
    </ThemeProvider>
)