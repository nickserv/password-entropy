import { CustomOptions, mapStateToProps } from './CustomOptions'
import { shallow } from 'enzyme'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

it('renders', () => {
  const setCustom = jest.fn()
  const wrapper = shallow(
    <CustomOptions possibleItems={1} setCustom={setCustom} />
  )
  wrapper.find('FormControl').simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(setCustom).toHaveBeenCalled()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ possibleItems: 1 })
})
