import { shallow } from 'enzyme'
import PossiblePasswords from './PossiblePasswords'
import React from 'react'

function getWrapper (possibleItems) {
  return shallow(<PossiblePasswords length={6} possibleItems={possibleItems}/>)
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
