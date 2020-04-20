import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { MenuItem } from '../../iclean-ui'


const AdminMenu = ({...rest}) => {
  const [active, setActive] = useState('home')

  const onClick = (e, {name}) => setActive(name)

  return (
    <Menu secondary>
      <Menu.Item
        name='home'
        active={active === 'home'}
        onClick={onClick}
      />

      <Menu.Menu position='right'>
        <MenuItem.Language active={active === 'language'} />
        <MenuItem.LoginLogout active={active === 'login_logout'} />
      </Menu.Menu>
    </Menu>
  )
}

export default AdminMenu

