import React from 'react'
import { useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { RouteParams, AppState } from '../types'
import './countryPage.scss'

const CountryPage = () => {
  let history = useHistory()
  const { name } = useParams<RouteParams>()
  const countries = useSelector((state: AppState) => state.country.countries)
  const country = countries.find((country) => country.name === name)

  function goHome() {
    history.push('/')
  }

  return (
    <div className="container">
      <Card>
        <img src={country?.flag} alt={`Flag of ${name}`} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {name} ({country?.nativeName})
          </Typography>
          <List>
            <ListItem>
              <ListItemText>Capital: {country?.capital}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>
                Area: {country?.area} square kilometers
              </ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Population: {country?.population}</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Region: {country?.region}</ListItemText>
            </ListItem>
          </List>
        </CardContent>
        <Button variant="contained" color="secondary" onClick={goHome}>
          BACK TO HOME
        </Button>
      </Card>
    </div>
  )
}

export default CountryPage
