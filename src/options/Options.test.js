import { shallow } from 'enzyme'
import React from 'react'
import { createStore } from 'redux'

import { mapStateToProps, Options } from './Options'
import reducers from '../reducers'

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
