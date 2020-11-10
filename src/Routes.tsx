import React from 'react'
import { Switch, Route } from 'react-router-dom'

import TablePage from './pages/TablePage'
import Country from './pages/Country'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={TablePage} />
    <Route exact path="/countries/:name" component={Country} />
  </Switch>
)

export default Routes
