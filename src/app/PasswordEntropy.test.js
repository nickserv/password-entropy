import { shallow } from 'enzyme'
import { PasswordEntropy } from './PasswordEntropy'
import React from 'react'

it('renders', () => {
  const wrapper = shallow(<PasswordEntropy length={6} onChange={() => {}}/>)
  expect(wrapper).toMatchSnapshot()
})
