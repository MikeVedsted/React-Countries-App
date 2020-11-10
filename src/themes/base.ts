import { Theme } from '@material-ui/core/styles'

import { ThemesTypes } from '../types'
import normal from './normal'
import dark from './dark'

const themes: ThemesTypes = {
  normal: normal,
  dark: dark,
}

export default function getTheme(themeName: string): Theme {
  return themes[themeName]
}
