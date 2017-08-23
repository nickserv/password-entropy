import { shallow } from 'enzyme'
import FormGroup from './FormGroup'
import React from 'react'

it('renders', () => {
  const wrapper = shallow(
    <FormGroup id="length" label="Length" icon="arrows-h">
      Redacted
    </FormGroup>
  )

  expect(wrapper).toMatchSnapshot()
})
