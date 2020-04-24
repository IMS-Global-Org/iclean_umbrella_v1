import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, Checkbox } from 'semantic-ui-react'
import { indexUsers } from '../../reducers/users'
import CheckboxCollectionForm from './CheckboxCollectionForm'
import DeactivateUser from './DeactivateUser'

const defaults = {
  users: [],
  activeUser: '',
  types: [],
  permissions: [],
}

const ManageUsers = ({users, types, permissions, dispatch, ...rest}) => {
  const [state, setState] = useState({...defaults})

  const loadUsers = () => {
    if(!state.users || state.users.length <= 0){
      dispatch(indexUsers())
    }
  }
  useEffect(loadUsers, [])

  const updateUsers = () => {
    if(users && users.length > 0) {
      setState(state => ({
        ...state,
        users,
        types,
        permissions,
      }))
    }
  }
  useEffect(updateUsers, [users])

  const renderTableHeader = () => (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>E-mail Address</Table.HeaderCell>
        <Table.HeaderCell>User Types</Table.HeaderCell>
        <Table.HeaderCell>User Permissions</Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  )

  const renderUsers = () => {
    const { users } = state
    if(users && users.length > 0){
      return users.map((user, index) => (
        <Table.Body key={index}>
          <Table.Row>
            <Table.Cell collapsing>
              <DeactivateUser user={user} />
            </Table.Cell>
            <Table.Cell>
              {user.email}
            </Table.Cell>
            <Table.Cell>
              <CheckboxCollectionForm 
                user={user}
                forSet='types'
                inputElems={state.types}
                inputValues={user.types}
              />
            </Table.Cell>
            <Table.Cell>
              <CheckboxCollectionForm 
                user={user}
                forSet='permissions'
                inputElems={state.permissions}
                inputValues={user.permissions}
              />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      ))
    }
  }

  return (
    <Table compact celled definition>
      {renderTableHeader()}
      {renderUsers()}
    </Table>
  )
}

const mapStateToProps = (state, props) => {
  return {
    users: state.users.users,
    types: state.users.types,
    permissions: state.users.permissions,
  }
}

export default connect(mapStateToProps)( ManageUsers )
