import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

const Jobs = ({user, dispatch, ...rest}) => {
  return (
    <Tab.Pane>
      Jobs
    </Tab.Pane>
  )
}

const mapStateToProps = (state, props) => {
  return {
    user: '',
  }
}

export default connect(mapStateToProps)(Jobs)


