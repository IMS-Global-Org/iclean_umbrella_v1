import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

const LoginLogout = ({active, ...rest}) => {
  return (
    <>
      <Menu.Item
        name='login'
        active={active === 'login'}
      >
        <Link to='/login'>
          Login
        </Link>
      </Menu.Item>
    </>
  )
}

export { LoginLogout }
