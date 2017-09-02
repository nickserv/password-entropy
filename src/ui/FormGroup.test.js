import { shallow } from 'enzyme'
import React from 'react'

import FormGroup from './FormGroup'

test('FormGroup', () => {
  const wrapper = shallow(
    <FormGroup id="length" label="Length" icon="arrows-h">Redacted</FormGroup>
  )

  expect(wrapper).toMatchSnapshot()
})
