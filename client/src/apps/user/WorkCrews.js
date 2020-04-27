import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Tab } from 'semantic-ui-react'

const WorkCrews = ({user, dispatch, ...rest}) => {
  return (
    <Tab.Pane>
      Work Crews
    </Tab.Pane>
  )
}

const mapStateToProps = (state, props) => {
  return {
    user: '',
  }
}

export default connect(mapStateToProps)(WorkCrews)
