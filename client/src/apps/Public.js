import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Header from './public/Header'
import Welcome from './public/Welcome'

const Public = ({...rest}) => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route component={Welcome} />
      </Switch>
    </>
  )
}

export default Public
