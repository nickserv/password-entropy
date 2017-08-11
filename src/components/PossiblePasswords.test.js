import { shallow } from 'enzyme'
import PossiblePasswords from './PossiblePasswords'
import React from 'react'

const getWrapper = length => shallow(<PossiblePasswords length={length} possibleItems={2}/>)

it('renders with invalid or very weak possibleItems', () => {
  expect(getWrapper(0)).toMatchSnapshot()
})

it('renders with weak possiblePasswords', () => {
  expect(getWrapper(32)).toMatchSnapshot()
})

it('renders with strong possiblePasswords', () => {
  expect(getWrapper(64)).toMatchSnapshot()
})

it('renders with very strong possiblePasswords', () => {
  expect(getWrapper(128)).toMatchSnapshot()
})
