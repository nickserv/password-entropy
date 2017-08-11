import change from './change'
import { shallow } from 'enzyme'
import handleChange from './handleChange'
import React, { createElement, PureComponent } from 'react'

function getState (target, type = 'text') {
  return change(shallow(createElement(class extends PureComponent {
    render () {
      return <input type={type} name="name" onChange={handleChange.bind(this)}/>
    }
  })), target).state('name')
}

it('sets input state', () => {
  expect(getState({ value: 'string' })).toBe('string')
})

it('sets number state', () => {
  expect(getState({ value: '1' }, 'number')).toBe(1)
})

it('sets checkbox state', () => {
  expect(getState({ checked: true }, 'checkbox')).toBe(true)
})
