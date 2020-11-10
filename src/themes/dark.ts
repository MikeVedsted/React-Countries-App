import { createMuiTheme, Theme } from '@material-ui/core/styles'

const theme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#26292C',
      light: 'rgb(81, 91, 95)',
      dark: 'rgb(26, 35, 39)',
      contrastText: '#adadad',
    },
    secondary: {
      main: '#820c7c',
      light: 'rgb(130, 12, 124)',
      dark: 'rgb(46, 30, 45)',
      contrastText: '#adadad',
    },
  },
})

theme.props = {
  MuiButton: {
    disableElevation: true,
  },
}

export default theme
