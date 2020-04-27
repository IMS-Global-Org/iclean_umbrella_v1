import { combineReducers } from 'redux'

// Composed Reducers
import { profile } from './profile'
import { user } from './user'
import { users } from './users'
import { auth } from './auth'

const rootReducer = combineReducers({
  auth,
  user,
  profile,
  users,
})

export default rootReducer
