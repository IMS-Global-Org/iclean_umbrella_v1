import React, {useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { Form, Checkbox } from 'semantic-ui-react'
import { updateUser } from '../../reducers/users'

const DeactivateUser = ({user, dispatch, ...rest}) => {
  const [isActive, setIsActive] = useState(false)

  const updateIsActive = () => {
    if(user){
      setIsActive(user.active)
    }
  }
  useEffect(updateIsActive, [])

  const onChange = (e, {name, checked}) => {
    setIsActive(checked)
    dispatch(updateUser(user, { active: checked }))
  }

  return (
    <Form>
      <Checkbox 
        slider 
        name='slider'
        checked={isActive}
        onChange={onChange}
      />
    </Form>
  )
}

export default connect()(DeactivateUser)
