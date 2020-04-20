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
        const { users } = res.data
        dispatch({ type: INDEX_USERS, users })
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
  return [...action.users]
}

// default state
const defaults = []

export const users = createReducer([...defaults], {
  [INDEX_USERS]: indexUsersReducer,
})
