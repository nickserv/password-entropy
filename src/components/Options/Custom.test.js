import { shallow } from 'enzyme'
import React from 'react'

import { Custom } from './Custom'

test('Custom', () => {
  expect(shallow(<Custom possibleItems={1} setCustom={() => {}} />)).toMatchSnapshot()
})
