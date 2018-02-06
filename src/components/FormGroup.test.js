import arrowsAltH from '@fortawesome/fontawesome-free-solid/faArrowsAltH'
import { shallow } from 'enzyme'
import React from 'react'

import FormGroup from './FormGroup'

test('FormGroup', () => {
  const wrapper = shallow(
    <FormGroup label="Length" icon={arrowsAltH}>Redacted</FormGroup>
  )

  expect(wrapper).toMatchSnapshot()
})
