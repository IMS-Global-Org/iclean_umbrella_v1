import createReducer from './createReducer'
import axios from 'axios'


// Constants
const LOAD_USER_PROFILE = 'LOAD_USER_PROFILE'

// Actions
export const loadUserProfile = (userId) => {
  return dispatch => {
    axios.get(`/api/profile/personal_info/${userId}`)
      .then(res => {
        dispatch({ type: LOAD_USER_PROFILE, profile: res.data })
      })
      .catch(res => {
        console.log(res.message)
      })
  }
}

const loadUserProfileReducer = (state, action) => {
  debugger
}

const defaults = {
  personalInfo: '',
  settings: '',
  jobs: '',
  workCrews: '',
}

export const profile = createReducer({...defaults}, {
  [LOAD_USER_PROFILE]: loadUserProfileReducer,
})
