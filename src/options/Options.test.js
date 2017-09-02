import { shallow } from 'enzyme'
import { capitalize, mapStateToProps, Options } from './Options'
import React from 'react'
import reducers from '../reducers'
import { createStore } from 'redux'

test('capitalize', () => {
  expect(capitalize('word')).toEqual('Word')
})

test('Options', () => {
  const setOptionsKey = jest.fn()
  const wrapper = shallow(<Options optionsKey="generic" setOptionsKey={setOptionsKey} />)
  wrapper.find('Uncontrolled(Tabs)').simulate('select')

  expect(wrapper).toMatchSnapshot()
  expect(setOptionsKey).toHaveBeenCalled()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ optionsKey: 'generic' })
})
