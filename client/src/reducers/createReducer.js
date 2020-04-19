/**
 * Main Function for Generating Reducers as Object Maps
 *
 * EXAMPLE:
 *
 *  import createReducer from './createReducer'
 *
 *  export const index_users = (state, action) => {
 *    // do something
 *  }
 *  export const create_user = (state, action) => {
 *    // do something
 *  }
 *
 *  export const users = createReducer(initialState = {...defaults}, {
 *    'INDEX_USERS': index_users,
 *    'CREATE_USER': create_user,
 *  })
 *
 */
const createReducer = (initialState, handlers) => {
  return (state = initialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}

export default createReducer
