import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const Language = ({active, ...rest}) => {
  return (
    <>
      <Dropdown item text='Language'>
        <Dropdown.Menu>
          <Dropdown.Item>English</Dropdown.Item>
          <Dropdown.Item>Spanish</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  )
}

export { Language }
