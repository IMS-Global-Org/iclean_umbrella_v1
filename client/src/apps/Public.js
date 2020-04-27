import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './public/Header'
import Welcome from './public/Welcome'
import Login from './public/Login'
import Register from './public/Register'

const Public = ({...rest}) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/public/login' component={Login} />
        <Route exact path='/public/register' component={Register} />
        <Route component={Welcome} />
      </Switch>
    </>
  )
}

export default Public
