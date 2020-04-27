import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

const Settings = ({user, dispatch, ...rest}) => {
  return (
    <Tab.Pane>
      Settings
    </Tab.Pane>
  )
}

const mapStateToProps = (state, props) => {
  return {
    user: '',
  }
}

export default connect(mapStateToProps)(Settings)

