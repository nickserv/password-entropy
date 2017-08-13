import { shallow } from 'enzyme'
import PossiblePasswords from './PossiblePasswords'
import React from 'react'

const getWrapper = length => shallow(<PossiblePasswords length={length} possibleItems={2}/>)

it('renders without possibleItems', () => {
  expect(shallow(<PossiblePasswords length={1}/>)).toMatchSnapshot()
})

it('renders with invalid possibleItems', () => {
  expect(shallow(<PossiblePasswords length={1} possibleItems={0}/>)).toMatchSnapshot()
})

it('renders with invalid or very weak possiblePasswords', () => {
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
