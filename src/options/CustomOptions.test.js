import { CustomOptions, mapStateToProps, mapDispatchToProps } from './CustomOptions'
import { shallow } from 'enzyme'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

it('renders', () => {
  const wrapper = shallow(<CustomOptions onChange={() => {}} possibleItems={1}/>)
  expect(wrapper).toMatchSnapshot()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ possibleItems: 1 })
})

test('mapDispatchToProps', () => {
  expect(mapDispatchToProps.onChange({ target: { value: '1' } })).toEqual({
    type: 'SET_CUSTOM_POSSIBLE_ITEMS',
    payload: 1
  })
})
