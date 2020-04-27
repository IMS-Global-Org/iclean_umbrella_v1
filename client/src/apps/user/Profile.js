import React from 'react'
import { Tab } from 'semantic-ui-react'

// Sections
import PersonalInfo from './PersonalInfo'
import Settings from './Settings'
import Jobs from './Jobs'
import WorkCrews from './WorkCrews'

const panes = [
  {menuItem: 'Personal Info', render: () => <PersonalInfo />},
  {menuItem: 'Settings', render: () => <Settings />},
  {menuItem: 'Jobs', render: () => <Jobs />},
  {menuItem: 'Work Crews', render: () => <WorkCrews />},
]

const menu = {
  fluid: true,
  vertical: true,
  tabular: 'right',
}

const Profile = ({...rest}) => {
  return (
    <Tab menu={menu} panes={panes} />
  )
}

export default Profile
