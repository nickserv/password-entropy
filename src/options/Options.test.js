import { shallow } from 'enzyme'
import React from 'react'
import { createStore } from 'redux'

import { capitalize, mapStateToProps, Options } from './Options'
import reducers from '../reducers'

test('capitalize', () => {
  expect(capitalize('word')).toEqual('Word')
})

test('Options', () => {
  const setOptionsKey = jest.fn()
  const wrapper = shallow(<Options optionsKey="generic" setOptionsKey={setOptionsKey} />)
  wrapper.find('Tabs').simulate('change')

  expect(wrapper).toMatchSnapshot()
  expect(setOptionsKey).toHaveBeenCalled()
})

test('mapStateToProps', () => {
  const state = createStore(reducers).getState()
  expect(mapStateToProps(state)).toEqual({ optionsKey: 'generic' })
})
