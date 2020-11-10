import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

import { SearchfieldProps } from '../../types'

const useStyles = makeStyles((theme) => ({
  searchfield: {
    margin: theme.spacing(0, 2, 0),
  },
}))

function Searchfield({ userInput, handleInputChange }: SearchfieldProps) {
  const classes = useStyles()

  return (
    <TextField
      className={classes.searchfield}
      label="Search the countries here!"
      variant="outlined"
      value={userInput}
      onChange={handleInputChange}
      fullWidth={true}
      color="secondary"
    />
  )
}

Searchfield.displayName = 'Searchfield'

export default Searchfield
