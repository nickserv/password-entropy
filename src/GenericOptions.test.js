import change from './change'
import { mount, shallow } from 'enzyme'
import GenericOptions from './GenericOptions'
import React from 'react'

const callback = jest.fn()
const node = (<GenericOptions onChange={callback}/>)

beforeEach(callback.mockReset)

it('renders', () => {
  expect(shallow(node)).toMatchSnapshot()
})

it('calls onChange prop', () => {
  const wrapper = mount(node)
  expect(callback).toHaveBeenCalledWith(70)
  expect(wrapper.state()).toEqual({
    "letters": true,
    "capitalLetters": true,
    "numbers": true,
    "symbols": true
  })

  callback.mockReset()
  change(wrapper.find({ name: 'letters' }), { checked: false })
  expect(callback).toHaveBeenCalledWith(44)
  expect(wrapper.state()).toEqual({
    "letters": false,
    "capitalLetters": true,
    "numbers": true,
    "symbols": true
  })
})
