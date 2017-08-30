import { shallow } from 'enzyme'
import { defaultToggles, GenericOptions, mapStateToProps } from './GenericOptions'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

it('renders', () => {
  const toggleGeneric = jest.fn()
  const wrapper = shallow(<GenericOptions toggleGeneric={toggleGeneric} {...defaultToggles}/>)
  wrapper.find({ name: 'letters' }).simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(toggleGeneric).toHaveBeenCalled()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual(defaultToggles)
})
