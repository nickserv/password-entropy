import { shallow } from 'enzyme'
import { GenericOptions, mapStateToProps } from './GenericOptions'
import { map, T } from 'ramda'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

const toggles = map(T, GenericOptions.toggles)

it('renders', () => {
  const toggleGeneric = jest.fn()
  const wrapper = shallow(
    <GenericOptions toggleGeneric={toggleGeneric} {...toggles} />
  )
  wrapper.find({ name: 'letters' }).simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(toggleGeneric).toHaveBeenCalled()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual(toggles)
})
