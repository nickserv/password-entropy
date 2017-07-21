import { shallow } from 'enzyme'
import PasswordEntropy from './PasswordEntropy'
import React from 'react'

function getWrapper (possibleItems) {
  const wrapper = shallow(<PasswordEntropy/>)
  wrapper.instance().handlePossibleItemsChange(possibleItems)
  return wrapper.update()
}

it('renders without valid possibleItems', () => {
  expect(getWrapper(0)).toMatchSnapshot()
})

it('renders with few possibleItems', () => {
  expect(getWrapper(10)).toMatchSnapshot()
})

it('renders with many possibleItems', () => {
  expect(getWrapper(7776)).toMatchSnapshot()
})
