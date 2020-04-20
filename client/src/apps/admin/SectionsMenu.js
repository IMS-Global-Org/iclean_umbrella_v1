import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


const SectionsMenu = ({...rest}) => {
  const [active, setActive] = useState('')

  const onClick = (e, { name }) => setActive(name)

  return (
    <Menu fluid vertical tabular>
      <Menu.Item
        as={Link}
        to='/'
        name='manage_users'
        active={active === 'manage_users'}
        onClick={onClick}
      />
    </Menu>
  )
}

export default SectionsMenu
