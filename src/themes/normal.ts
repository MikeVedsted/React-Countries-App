import { createMuiTheme, Theme } from '@material-ui/core/styles'

const theme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1b9100',
    },
    secondary: {
      main: '#b50079',
      contrastText: '#ffffff',
    },
  },
})

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
}

export default theme
