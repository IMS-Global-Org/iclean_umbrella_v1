import React from 'react'
import { connect } from 'react-redux'

const EditUser = ({user, ...rest}) => {

  return (
    <div>{user.email}</div>
  )
}

const mapStateToProps = (state, props) => {
  const userId = props.match.params.id
  const user = state.users.find(u => u.id === userId)
  return { user }
}

export default connect(mapStateToProps)(EditUser)
