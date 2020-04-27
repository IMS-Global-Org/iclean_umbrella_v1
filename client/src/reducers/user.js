import createReducer from './createReducer'

const LOAD_USER = 'LOAD_USER'

export const loadUser = () => {
  // TODO
  debugger
}

const loadUserReducer = (state, action) => {
  debugger
}

const defaults = {
  isLoggedIn: function(){
    // TODO check for user id and proper auth tokens
    return true
  }
}

export const user = createReducer({...defaults}, {
  [LOAD_USER]: loadUserReducer,
})
