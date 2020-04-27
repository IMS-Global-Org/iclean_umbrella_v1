import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

const PersonalInfo = ({user, profile, dispatch, ...rest}) => {
  const [personalInfo, setPersonalInfo] = useState('')

  const loadPersonalInfo = () => {
    if(user && user.id){
      dispatch(loadPersonalInfo(user.id))
    }
  }
  useEffect(loadPersonalInfo, [])

  const updatePersonalInfo = () => {
    if(profile && profile.personalInfo){
      setPersonalInfo({...profile.personalInfo})
    }
  }
  useEffect(updatePersonalInfo, [profile])

  const renderPersonalInfo = () => {
    if(personalInfo){
      // TODO
    }
  }

  return (
    <Tab.Pane>
      {renderPersonalInfo()}
    </Tab.Pane>
  )
}

const mapStateToProps = (state, props) => {
  return {
    user: state.user,
    profile: state.profile,
  }
}

export default connect(mapStateToProps)(PersonalInfo)
