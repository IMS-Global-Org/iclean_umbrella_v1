import createReducer from './createReducer'
import axios from 'axios'

const INDEX_USERS = 'INDEX_USERS'
const UPDATE_USER = 'UPDATE_USER'

/**
 * Actions
 */
export const indexUsers = () => {
  return dispatch => {
    axios.get(`/api/users`)
      .then(res => {
        dispatch({ type: INDEX_USERS, ...res.data })
      })
      .catch(res => {
        console.log(res.message)
      })
  }
}

export const updateUser = (user, data) => {
  return dispatch => {
    axios.patch(`/api/users/${user.id}`, { user: {...user, ...data} })
      .then(res => {
        dispatch({ type: UPDATE_USER, user: res.data })
      })
      .catch(res => {
        console.log(res.message)
      })
  }
}


/**
 * Reducers
 */
const indexUsersReducer = (state, action) => {
  return {
    ...state,
    users: action.users,
    types: action.types,
    permissions: action.permissions,
  }
}

const updateUserReducer = (state, action) => {
  const userIndex = state.users.findIndex(u => u.id === action.user.id)
  const updatedUser = {...state.users[userIndex], ...action.user}
  return {
    ...state,
    users: [
      ...state.users.slice(0, userIndex),
      updatedUser,
      ...state.users.slice(userIndex + 1)
    ]
  }
}

// default state
const defaults = {
  users: [],
  types: [],
  permissions: [],
}

export const users = createReducer({...defaults}, {
  [INDEX_USERS]: indexUsersReducer,
  [UPDATE_USER]: updateUserReducer,
})
