import createReducer from './createReducer'

const INDEX_USERS = 'INDEX_USERS'

/**
 * Actions
 */
export const indexUsers = () => {}


/**
 * Reducers
 */
const indexUsersReducer = (state, action) => {
  return state
}

// default state
const defaults = {}

export const users = createReducer({...defaults}, {
  [INDEX_USERS]: indexUsersReducer,
})
