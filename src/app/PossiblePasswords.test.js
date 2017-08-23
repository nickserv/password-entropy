import { shallow } from 'enzyme'
import { PossiblePasswords, mapStateToProps } from './PossiblePasswords'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

const getWrapper = length =>
  shallow(<PossiblePasswords length={length} possibleItems={2} />)

it('renders with invalid possibleItems', () => {
  expect(
    shallow(<PossiblePasswords length={1} possibleItems={0} />)
  ).toMatchSnapshot()
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

test('mapStateToProps', () => {
  function mapStateToPropsWithKey(optionsKey) {
    const state = createStore(reducers).getState()
    return mapStateToProps({ ...state, optionsKey })
  }

  expect(mapStateToPropsWithKey('diceware')).toEqual({ possibleItems: 7776 })
  expect(mapStateToPropsWithKey('custom')).toEqual({ possibleItems: 1 })
  expect(mapStateToPropsWithKey('generic')).toEqual({ possibleItems: 70 })
})
