import { shallow } from 'enzyme'
import PasswordEntropy from './PasswordEntropy'
import React from 'react'

it('renders', () => {
  const wrapper = shallow(<PasswordEntropy/>)
  wrapper.instance().handlePossibleItemsChange(7776)
  expect(wrapper.update()).toMatchSnapshot()
})
