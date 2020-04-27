import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { signToken } from '../reducers/auth'

const AuthenticateUser = ({isAuthenticated, dispatch, children, ...rest}) => {
  const [loaded, setLoaded] = useState(false)

  const loadedTrue = () => setLoaded(true)

  const authenticateUser = () => {
    if(isAuthenticated){
      loadedTrue()
    } else {
      dispatch(signToken(loadedTrue))
    }
  }
  useEffect(authenticateUser, [])

  const alreadyAuthenticatedUser = () => {
    if(!loaded){
      loadedTrue()
    }
  }
  useEffect(alreadyAuthenticatedUser, [isAuthenticated])

  return (
    <>
      { loaded ? children : null}
    </>
  )
}

const mapStateToProps = (state, props) => {
  return { isAuthenticated: state.user && state.user.id ? true : false }
}

export default connect(mapStateToProps)(AuthenticateUser)

