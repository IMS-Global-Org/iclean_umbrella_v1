import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Grid, Segment } from 'semantic-ui-react'
import Header from './admin/Header'
import SectionsMenu from './admin/SectionsMenu'

// Apps
import ManageUsers from './admin/ManageUsers'
import EditUser from './admin/EditUser'

const Admin = ({...rest}) => {

  return (
    <>
      <Header />
      <Grid>
        <Grid.Column width={4}>
          <SectionsMenu />
        </Grid.Column>
        <Grid.Column width={12}>
          <Segment>
            <Switch>
              <Route exact path='/admin/manage_users' component={ManageUsers} />
              <Route exact path='/admin/manage_users/:id' component={EditUser} />
            </Switch>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  )
}

export default Admin
