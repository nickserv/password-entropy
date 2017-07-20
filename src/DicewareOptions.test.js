import DicewareOptions from './DicewareOptions'
import { mount, shallow } from 'enzyme'
import React from 'react'

const callback = jest.fn()
const node = (<DicewareOptions onChange={callback}/>)

beforeEach(callback.mockReset)

it('renders', () => {
  expect(shallow(node)).toMatchSnapshot()
})

it('calls onChange prop', () => {
  mount(node)
  expect(callback).toHaveBeenCalledWith(7776)
})
