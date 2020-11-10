import React from 'react'
import { AppBar, Toolbar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { NavigationProps } from '../../types'
import CartDrawer from '../CartDrawer'
import Searchfield from '../Searchfield'
import ThemeSwitch from '../ThemeSwitch'

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    padding: theme.spacing(2, 0, 1),
  },
}))

function Navigation({ userInput, handleInputChange }: NavigationProps) {
  const classes = useStyles()

  return (
    <AppBar position="fixed" className={classes.appBar}>
      <Toolbar>
        <ThemeSwitch />
        <Searchfield
          userInput={userInput}
          handleInputChange={handleInputChange}
        />
        <CartDrawer />
      </Toolbar>
    </AppBar>
  )
}

Navigation.displayName = 'Navigation'

export default Navigation
