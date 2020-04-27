import createReducer from './createReducer'

const LOAD_USER = 'LOAD_USER'

export const loadUser = () => {
  // TODO
  debugger
}

const loadUserReducer = (state, action) => {
  debugger
}

const defaults = {}

export const user = createReducer({...defaults}, {
  [LOAD_USER]: loadUserReducer,
})
