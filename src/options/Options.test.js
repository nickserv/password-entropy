import { shallow } from 'enzyme'
import Options from './Options'
import React from 'react'

const callback = jest.fn()
const wrapper = shallow(
  <Options onChange={callback} possiblePasswords={() => true}>
    Hello, world!
  </Options>
)
const instance = wrapper.instance()

it('renders', () => {
  expect(wrapper).toMatchSnapshot()
})

it('calls onChange prop', () => {
  instance.componentDidMount()
  expect(callback).toHaveBeenCalledWith(true)

  callback.mockReset()
  instance.componentDidUpdate()
  expect(callback).toHaveBeenCalledWith(true)
})
