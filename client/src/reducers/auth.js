import createReducer from './createReducer'
import axios from 'axios'

// Constants
const SIGN_TOKEN = 'SIGN_TOKEN'
const VERIFY_TOKEN = 'VERIFY_TOKEN'
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'

// Actions
export const signToken = (cb = f => f) => {
  return dispatch => {
    let headers = axios.defaults.headers.common
    axios.get('/api/auth/sign_token', headers)
      .then( res => dispatch({ type: SIGN_TOKEN, auth: res.data }) )
      .catch(() => cb())
  }
}

export const verifyToken = (cb = f => f) => {
  return dispatch => {
    let headers = axios.defaults.headers.common
    axios.get('/api/auth/verify_token', headers)
      .then( res => dispatch({ type: VERIFY_TOKEN, auth: res.data }) )
      .catch(() => cb())
  }
}

// Reducers
const signTokenReducer = (state, action) => {
  // TODO
  return {...state, ...action.auth}
}

const verifyTokenReducer = (state, action) => {
  // TODO
  return {...state, ...action.auth}
}

const loginReducer = (state, action) => {
  return {...state, ...action.auth }
}

const logoutReducer = (state, action) => {
  return {}
}

const defaults = {}

export const auth = createReducer({...defaults}, {
  [SIGN_TOKEN]: signTokenReducer,
  [VERIFY_TOKEN]: verifyTokenReducer,
  [LOGIN]: loginReducer,
  [LOGOUT]: logoutReducer,
})
