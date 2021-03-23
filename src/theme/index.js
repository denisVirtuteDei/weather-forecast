import { createMuiTheme } from '@material-ui/core'

export const lightTheme = createMuiTheme({})

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#344955',
    },
    secondary: {
      main: '#F9AA33',
    },
  },
})
