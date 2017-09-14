import { shallow } from 'enzyme'
import React from 'react'

import { Generic } from './Generic'
import { defaultToggles } from '../../reducers/generic'

test('Generic', () => {
  expect(shallow(<Generic toggleGeneric={() => {}} {...defaultToggles} />)).toMatchSnapshot()
})
