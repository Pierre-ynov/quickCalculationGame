import React from 'react'

import Login from '../pages/login'
import {
  Route,
  BrowserRouter as Router,
  Redirect,
  Switch
} from 'react-router-dom'
import Menu from '../pages/menu'
import Game from '../pages/game'
import Result from '../pages/result'

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login}></Route>
        <Route exact path='/menu' component={Menu}></Route>
        <Route exact path='/game' component={Game}></Route>
        <Route exact path='/result' component={Result}></Route>
        <Redirect to='/'></Redirect>
      </Switch>
    </Router>
  )
}

export default Routes
