import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const LoginLogout = ({active, ...rest}) => {
  return (
    <>
      <Menu.Item
        as={Link}
        to='/public/login'
        name='login'
        active={active === 'login'}
      >
        Login
      </Menu.Item>
    </>
  )
}

export { LoginLogout }
