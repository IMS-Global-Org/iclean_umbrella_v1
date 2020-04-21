import createReducer from './createReducer'
import axios from 'axios'

const INDEX_USERS = 'INDEX_USERS'

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

// default state
const defaults = {
  users: [],
  types: [],
  permissions: [],
}

export const users = createReducer({...defaults}, {
  [INDEX_USERS]: indexUsersReducer,
})
