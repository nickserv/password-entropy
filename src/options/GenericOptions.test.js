import { shallow } from 'enzyme'
import { GenericOptions } from './GenericOptions'
import { map, T } from 'ramda'
import React from 'react'

it('renders', () => {
  const toggles = map(T, GenericOptions.toggles)
  const wrapper = shallow(<GenericOptions onChange={() => {}} {...toggles}/>)
  expect(wrapper).toMatchSnapshot()
})
