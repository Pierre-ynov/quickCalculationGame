import React from 'react'

import Login from '../pages/login'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import Menu from '../pages/menu'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/menu' component={Menu}></Route>
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
