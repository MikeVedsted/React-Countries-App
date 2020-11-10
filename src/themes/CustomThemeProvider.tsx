import React, { useState } from 'react'
import { ThemeProvider } from '@material-ui/core/styles'

import getTheme from './base'
import { ContextValueType } from '../types'

export const CustomThemeContext = React.createContext({
  currentTheme: 'normal',
  setTheme: (name: string) => {},
})

const CustomThemeProvider = (props: any) => {
  const { children } = props
  const currentTheme: string = localStorage.getItem('appTheme') || 'normal'
  const [themeName, _setThemeName] = useState<string>(currentTheme)
  const theme = getTheme(themeName)

  const setThemeName = (name: string) => {
    localStorage.setItem('appTheme', name)
    _setThemeName(name)
  }

  const contextValue: ContextValueType = {
    currentTheme: themeName,
    setTheme: setThemeName,
  }

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  )
}

export default CustomThemeProvider
