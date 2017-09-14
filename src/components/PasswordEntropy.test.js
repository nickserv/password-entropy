import { shallow } from 'enzyme'
import React from 'react'

import { PasswordEntropy } from './PasswordEntropy'

test('PasswordEntropy', () => {
  expect(shallow(<PasswordEntropy length={12} setLength={() => {}} />)).toMatchSnapshot()
})
