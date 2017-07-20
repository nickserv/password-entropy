import change from './change'
import CustomOptions from './CustomOptions'
import { mount, shallow } from 'enzyme'
import React from 'react'

const callback = jest.fn()
const node = (<CustomOptions onChange={callback}/>)

beforeEach(callback.mockReset)

it('renders', () => {
  expect(shallow(node)).toMatchSnapshot()
})

it('calls onChange prop', () => {
  const wrapper = mount(node)
  expect(callback).toHaveBeenCalledWith(1)
  expect(wrapper.state()).toEqual({ possibleItems: 1 })

  callback.mockReset()
  change(wrapper.find({ name: 'possibleItems' }), { value: 2 })
  expect(callback).toHaveBeenCalledWith(2)
  expect(wrapper.state()).toEqual({ possibleItems: 2 })
})
