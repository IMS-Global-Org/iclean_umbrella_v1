import React, { useState } from 'react'
import { Menu } from 'semantic-ui-react'
import { MenuItem } from '../../iclean-ui'

const PublicMenu = ({...rest}) => {
  const [active, setActive] = useState('home')

  const onClick = (e, {name}) => setActive(name)

  return (
    <Menu secondary>
      <Menu.Item
        name='home'
        active={active === 'home'}
        onClick={onClick}
      />
      <Menu.Item
        name='about'
        active={active === 'about'}
        onClick={onClick}
      />

      <Menu.Menu position='right'>
        <MenuItem.Language active={active === 'language'} />
        <MenuItem.LoginLogout active={active === 'login_logout'} />
      </Menu.Menu>
    </Menu>
  )
}

export default PublicMenu