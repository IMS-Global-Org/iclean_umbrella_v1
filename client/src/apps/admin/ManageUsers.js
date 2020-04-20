import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { indexUsers } from '../../reducers/users'

const defaults = {
  users: [],
  activeUser: '',
}

const ManageUsers = ({users, dispatch, ...rest}) => {
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
      }))
    }
  }
  useEffect(updateUsers, [users])

  const renderUsers = () => {
    const { users } = state
    if(users && users.length > 0){
      return users.map((user, index) => (
        <li key={index}>{user.email}</li>
      ))
    }
  }

  return (
    <ul>
      {renderUsers()}
    </ul>
  )
}

const mapStateToProps = (state, props) => {
  return {
    users: state.users,
  }
}

export default connect(mapStateToProps)( ManageUsers )
