import React from 'react'
import { Switch, Route } from 'react-router-dom'

// Apps
import ManageUsers from './admin/ManageUsers'

const Admin = ({...rest}) => {

  return (
    <Switch>
      <Route exact path='/admin/manage_users' component={ManageUsers} />
    </Switch>
  )
}

export default Admin
