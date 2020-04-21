import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Table, Checkbox } from 'semantic-ui-react'
import { Block } from '../../iclean-ui'
import { indexUsers } from '../../reducers/users'
import { capitalize } from 'lodash'

const defaults = {
  users: [],
  activeUser: '',
  types: [],
  permissions: [],
}

const ManageUsers = ({users, types, permissions, dispatch, ...rest}) => {
  const [state, setState] = useState({...defaults})

  const checkboxStyle = { marginRight: '1rem' }

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
              <Checkbox slider />
            </Table.Cell>
            <Table.Cell>
              {user.email}
            </Table.Cell>
            <Table.Cell>
              {renderUserTypes(user)}
            </Table.Cell>
            <Table.Cell>
              {renderUserPermissions(user)}
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      ))
    }
  }

  const renderUserTypes = (user) => {
    const { types } = state
    if(types && types.length > 0){
      const checkboxes = types.map((type, index) => (
        <Checkbox
          key={index}
          style={checkboxStyle}
          label={capitalize( type )}
          checked={isChecked(user.types, type)}
        />
      ))
      return <Block>{checkboxes}</Block>
    }
  }

  const renderUserPermissions = (user) => {
    const { permissions } = state
    if(permissions && permissions.length > 0) {
      const checkboxes = permissions.map((permission, index) => (
        <Checkbox 
          key={index}
          style={checkboxStyle}
          label={capitalize(permission)}
          checked={isChecked(user.permissions, permission)}
        />
      ))
      return <Block>{checkboxes}</Block>
    }
  }

  const isChecked = (itemSet, item) => itemSet.includes(item)

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
