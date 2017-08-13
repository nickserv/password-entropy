import { shallow } from 'enzyme'
import Icon from './Icon'
import React from 'react'

it('renders', () => {
  expect(shallow(<Icon name="name"/>)).toMatchSnapshot()
})
