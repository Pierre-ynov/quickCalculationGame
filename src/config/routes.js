import React from 'react'

import Login from '../pages/login'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
