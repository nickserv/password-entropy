import { shallow } from 'enzyme'
import { GenericOptions, mapStateToProps, mapDispatchToProps } from './GenericOptions'
import { map, T } from 'ramda'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

const toggles = map(T, GenericOptions.toggles)

it('renders', () => {
  const wrapper = shallow(<GenericOptions onChange={() => {}} {...toggles}/>)
  expect(wrapper).toMatchSnapshot()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual(toggles)
})

test('mapDispatchToProps', () => {
  const target = { checked: false, name: 'letters' }
  expect(mapDispatchToProps.onChange({ target })).toEqual({
    type: 'TOGGLE_GENERIC',
    payload: target
  })
})
