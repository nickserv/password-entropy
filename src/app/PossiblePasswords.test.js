import { shallow } from 'enzyme'
import { PossiblePasswords, mapStateToProps } from './PossiblePasswords'
import { assoc } from 'ramda'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

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

test('mapStateToProps', () => {
  function mapStateToPropsWithIndex (optionsIndex) {
    const state = createStore(reducers).getState()
    return mapStateToProps({ ...state, optionsIndex })
  }

  expect(mapStateToPropsWithIndex(0)).toEqual({ possibleItems: 7776 })
  expect(mapStateToPropsWithIndex(1)).toEqual({ possibleItems: 1 })
  expect(mapStateToPropsWithIndex(2)).toEqual({ possibleItems: 70 })
})
