import { shallow } from 'enzyme'
import React, { createElement } from 'react'
import { change } from './util'

describe('change', () => {
  const callback = jest.fn()
  const wrapper = shallow(createElement(() => <input onChange={callback}/>))
  const target = { value: 'string' }

  it('calls the wrapped Component\'s onChange callback', () => {
    change(wrapper, target)
    expect(callback).toHaveBeenCalledWith({ target: { onChange: callback, ...target } })
  })
})
