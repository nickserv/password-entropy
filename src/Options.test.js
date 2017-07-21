import { shallow } from 'enzyme'
import Options from './Options'
import React from 'react'

const callback = jest.fn()
const wrapper = shallow(
  <Options onChange={callback} possiblePasswords={() => true}>
    Hello, world!
  </Options>
)

it('renders', () => {
  expect(wrapper).toMatchSnapshot()
})

it('calls onChange prop', () => {
  wrapper.instance().componentDidMount()
  expect(callback).toHaveBeenCalledWith(true)

  callback.mockReset()
  wrapper.instance().componentDidUpdate()
  expect(callback).toHaveBeenCalledWith(true)
})
