import change from './change'
import { mount, shallow } from 'enzyme'
import PasswordEntropy from './PasswordEntropy'
import React from 'react'

const node = (<PasswordEntropy/>)

it('renders without valid PossibleItems', () => {
  expect(shallow(node)).toMatchSnapshot()
})

it('renders with a smaller result', () => {
  const wrapper = mount(node)
  change(wrapper.find({ name: 'length' }), { value: 1 })
  expect(wrapper).toMatchSnapshot()
})

it('renders with a larger result', () => {
  const wrapper = mount(node)
  wrapper.instance().handlePossibleItemsChange(7776)
  expect(wrapper).toMatchSnapshot()
})

it('recalculates when length changes', () => {
  const wrapper = mount(node)
  change(wrapper.find({ name: 'length' }), { value: 7 })
  expect(wrapper).toMatchSnapshot()
})

it('recalculates when options change', () => {
  const wrapper = mount(node)
  wrapper.instance().handlePossibleItemsChange(10)
  expect(wrapper).toMatchSnapshot()
})
