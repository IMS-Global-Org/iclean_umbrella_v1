import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Apps
import Header from './user/Header'
import Profile from './user/Profile'


const User = ({...rest}) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/user/profile' component={Profile} />
        <Route component={Profile} />
      </Switch>
    </>
  )
}

export default User
