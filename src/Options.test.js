import { mount, shallow } from 'enzyme'
import Options from './Options'
import React from 'react'

const callback = jest.fn()
const node = (
  <Options onChange={callback} possiblePasswords={() => true}>
    Hello, world!
  </Options>
)

beforeEach(callback.mockReset)

it('renders', () => {
  expect(shallow(node)).toMatchSnapshot()
})

it('calls onChange prop', () => {
  const wrapper = mount(node)
  expect(callback).toHaveBeenCalledWith(true)

  callback.mockReset()
  wrapper.setState({})
  expect(callback).toHaveBeenCalledWith(true)
})
