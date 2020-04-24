import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Form, Checkbox } from 'semantic-ui-react'
import { Block } from '../../iclean-ui'
import { capitalize } from 'lodash'
import { updateUser } from '../../reducers/users'

const CheckboxCollectionForm = ({
  user, 
  forSet, 
  inputElems, 
  inputValues, 
  dispatch,
  ...rest
}) => {
  const [state, setState] = useState({})

  const updateFormTypes = () => {
    if(inputElems && inputElems.length > 0){
      const formData = inputElems.reduce((form, elem) => {
        return {...form, [elem]: isChecked(inputValues, elem)}
      }, {})
      setState(state => ({...state, ...formData}))
    }
  }
  useEffect(updateFormTypes, [])

  const isChecked = (itemSet, item) => itemSet.includes(item)

  const checkboxStyle = { marginRight: '1rem' }

  const onChange = (e, {name, checked}) => {
    const newState = {...state, [name]: checked}
    setState(state => (newState))
    const checkedFields = Object.entries(newState)
      .filter(([key, value]) => value)
      .map(([key, value]) => key)
    dispatch(updateUser(user, { [forSet]: checkedFields }))
  }

  const renderCheckboxes = () => {
    const formEntries = Object.entries(state)
    if(formEntries && formEntries.length > 0){
      const checkboxes = formEntries.map(([name, checked]) => (
        <Checkbox
          key={name}
          name={name}
          style={checkboxStyle}
          label={capitalize( name )}
          checked={checked}
          onChange={onChange}
        />
      ))
      return <Block>{checkboxes}</Block>
    }
  }

  return (
    <Form>
      {renderCheckboxes()}
    </Form>
  )
}

export default connect()(CheckboxCollectionForm)
