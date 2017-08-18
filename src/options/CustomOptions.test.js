import { CustomOptions } from './CustomOptions'
import { shallow } from 'enzyme'
import React from 'react'

it('renders', () => {
  const wrapper = shallow(<CustomOptions onChange={() => {}} possibleItems={1}/>)
  expect(wrapper).toMatchSnapshot()
})
