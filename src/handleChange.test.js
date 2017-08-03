import change from './change'
import { shallow } from 'enzyme'
import handleChange from './handleChange'
import React, { PureComponent } from 'react'

it('sets input state', () => {
  class Fixture extends PureComponent {
    render () {
      return <input name="default" onChange={handleChange.bind(this)}/>
    }
  }

  const wrapper = shallow(<Fixture/>)
  change(wrapper, { value: 'string' })
  expect(wrapper.state()).toEqual({ default: 'string' })
})

it('sets number state', () => {
  class Fixture extends PureComponent {
    render () {
      return <input type="number" name="number" onChange={handleChange.bind(this)}/>
    }
  }

  const wrapper = shallow(<Fixture/>)
  change(wrapper, { value: '1' })
  expect(wrapper.state()).toEqual({ number: 1 })
})

it('sets checkbox state', () => {
  class Fixture extends PureComponent {
    render () {
      return <input type="checkbox" name="checkbox" onChange={handleChange.bind(this)}/>
    }
  }

  const wrapper = shallow(<Fixture/>)
  change(wrapper, { checked: true })
  expect(wrapper.state()).toEqual({ checkbox: true })
})
