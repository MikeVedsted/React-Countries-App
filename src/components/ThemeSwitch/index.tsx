import React, { useContext } from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import FormGroup from '@material-ui/core/FormGroup'
import Switch from '@material-ui/core/Switch'

import { CustomThemeContext } from '../../themes/CustomThemeProvider'

function ThemeSwitch() {
  const { currentTheme, setTheme } = useContext(CustomThemeContext)
  const isDark = Boolean(currentTheme === 'dark')

  const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = event.target
    if (checked) {
      setTheme('dark')
    } else {
      setTheme('normal')
    }
  }

  return (
    <div>
      <FormGroup row>
        <FormControlLabel
          control={<Switch checked={isDark} onChange={handleThemeChange} />}
          label={
            isDark ? (
              <WbSunnyIcon color="secondary" />
            ) : (
              <Brightness3Icon color="secondary" />
            )
          }
        />
      </FormGroup>
    </div>
  )
}

ThemeSwitch.displayName = 'ThemeSwitch'

export default ThemeSwitch
